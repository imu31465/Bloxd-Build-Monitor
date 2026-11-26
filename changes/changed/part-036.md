# Changed — Bundle Modifications Report (Part 036 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `36 / 115` (**338** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 035](part-035.md) · [Part 037 →](part-037.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (69 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 59. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L935-L936` → after: `L9058-L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9058-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9058-L9064) · [Before (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L935-L936)

```diff
-           get collisionMask() {
-             return this._collisionMask
+           if (this._cameraDrawRenderTargetStage.length > 0) {
+             const BH = this.getBoundingBoxRenderer?.();
+             BH && !HH && (HH = BH.renderList.length > 0 ? BH.renderList.data.slice() : [], HH.length = BH.renderList.length);
+             for (let HH = 0, LH = this._cameraDrawRenderTargetStage; HH < LH.length; HH++) {
+               SH = LH[HH].action(this.activeCamera) || SH
+             }
+             BH && HH && (BH.renderList.data = HH, BH.renderList.length = HH.length)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L938-L939` → after: `L9066-L9140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9066-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9066-L9140) · [Before (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L938-L939)

```diff
-           set collisionMask(UU) {
-             this._collisionMask = isNaN(UU) ? -1 : UU
+           this._intermediateRendering = !1
+         }
+         SH && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || HH._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let AH = 0, tH = this._beforeCameraDrawStage; AH < tH.length; AH++) {
+           tH[AH].action(this.activeCamera)
+         }
+         this.onBeforeDrawPhaseObservable.notifyObservers(this);
+         const hH = rH.snapshotRendering && 1 === rH.snapshotRenderingMode;
+         hH && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !hH), this.onAfterDrawPhaseObservable.notifyObservers(this);
+         for (let AH = 0, tH = this._afterCameraDrawStage; AH < tH.length; AH++) {
+           tH[AH].action(this.activeCamera)
+         }
+         if (this.postProcessManager && !HH._multiviewTexture) {
+           const BH = HH.outputRenderTarget ? HH.outputRenderTarget.renderTarget : void 0;
+           this.postProcessManager._finalizeFrame(HH.isIntermediate, BH)
+         }
+ ... (59 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L941-L947` → after: `L9142-L9169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9142-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9142-L9169) · [Before (L941-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L941-L947)

```diff
-           _collideWithWorld(UU) {
-             let XU;
-             XU = this.parent ? QU.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, XU.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const zU = this.nS().collisionCoordinator;
-             this._collider || (this._collider = zU.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
-             let cU = UU;
-             this.applyGravity && (cU = UU.add(this.nS().gravity)), zU.getNewPosition(this._oldPosition, cU, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+       }
+       resetDrawCache(HH) {
+         if (this.meshes)
+           for (const BH of this.meshes) BH.resetDrawCache(HH)
+       }
+       _renderWithFrameGraph() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           BH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.activeCamera = null, this.activeCameras = null, HH)
+           for (const LH of this.cameras)
+             if (LH.update(), 0 !== LH.cameraRigMode)
+               for (let HH = 0; HH < LH._rigCameras.length; HH++) LH._rigCameras[HH].update();
+         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         try {
+           this._renderWithFrameGraphAfterBeforeRender(BH)
+         } finally {
+ ... (12 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L949-L950` → after: `L9171-L9203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9171-L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9171-L9203) · [Before (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L949-L950)

```diff
-           _checkInputs() {
-             this._localDirection || (this._localDirection = QU.q.Zero(), this._transformedDirection = QU.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
+           AH.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+         }
+         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
+         for (let LH = 0, AH = this._beforeClearStage; LH < AH.length; LH++) {
+           AH[LH].action()
+         }
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+         else {
+           const BH = this.getActiveMeshCandidates(),
+             LH = BH.length;
+           if (this._activeMeshesFrozen) {
+             if (!this._skipEvaluateActiveMeshesCompletely)
+               for (let HH = 0; HH < LH; HH++) {
+                 const LH = BH.data[HH];
+                 LH._internalAbstractMeshDataInfo._wasActiveLastFrame && LH.computeWorldMatrix()
+               }
+ ... (17 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L952-L953` → after: `L9205-L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9205-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9205-L9254) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L952-L953)

```diff
-           set needMoveForGravity(UU) {
-             this._needMoveForGravity = UU
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, HH._shouldRender()) {
+           if (this._renderId++, this.activeCamera = BH, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), HH.render(LH, AH)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.mV) return;
+ ... (34 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L955-L956` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9256-L9258) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L955-L956)

```diff
-           get needMoveForGravity() {
-             return this._needMoveForGravity
+           this._engine.currentRenderPassId = HH?.renderPassId ?? 0, this.activeCamera = HH, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let BH = 0, LH = this._beforeClearStage; BH < LH.length; BH++) {
+             LH[BH].action()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L958-L959` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9260-L9262) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L958-L959)

```diff
-           _decideIfNeedsToMove() {
-             return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
+           this._clearFrameBuffer(this.activeCamera);
+           for (let BH = 0, LH = this._gatherRenderTargetsStage; BH < LH.length; BH++) {
+             LH[BH].action(this._renderTargets)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L961-L962` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9264-L9268) · [Before (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L961-L962)

```diff
-           _updatePosition() {
-             this.checkCollisions && this.nS().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let BH = 0; BH < this.activeCameras.length; BH++) this._processSubCameras(this.activeCameras[BH], BH > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L964-L965` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9270-L9278) · [Before (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L964-L965)

```diff
-           dispose() {
-             this.inputs.clear(), super.dispose()
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let LH = 0, AH = this._afterRenderStage; LH < AH.length; LH++) {
+           AH[LH].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let HH = 0; HH < this._toBeDisposed.length; HH++) {
+             const BH = this._toBeDisposed[HH];
+             BH && BH.dispose()
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L967-L968` → after: `L9280-L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9280-L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9280-L9322) · [Before (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L967-L968)

```diff
-           getClassName() {
-             return "FreeCamera"
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].freeze()
+       }
+       unfreezeMaterials() {
+         for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].unfreeze()
+       }
+       dispose() {
+         if (this.mV) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const HH of this._activeAnimatables) HH.onAnimationEndObservable.clear(), HH.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (27 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L970-L1033` → after: `L9324-L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L9324-L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/281.js#L9324-L9692) · [Before (L970-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/281.js#L970-L1033)

```diff
-         }, (() => {
-           const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(EU[Symbol.metadata] ?? null) : void 0;
-           XU = [(0, yU.F)()], zU = [(0, yU.F)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: UU => "ellipsoid" in UU,
-               get: UU => UU.ellipsoid,
-               set: (UU, XU) => {
-                 UU.ellipsoid = XU
-               }
-             },
-             metadata: QU
-           }, YU, NU), (0, cU.j)(null, null, zU, {
- ... (48 more removed lines; see GitHub link above)
+         }
+         AH = this._engine._virtualScenes.indexOf(this), AH > -1 && this._engine._virtualScenes.splice(AH, 1), this._engine.wipeCaches(!0), this.uR.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
+       }
+       _disposeList(HH, BH) {
+         const LH = HH.slice(0);
+         BH = BH ?? (HH => HH.dispose());
+         for (const AH of LH) BH(AH);
+         HH.length = 0
+       }
+       get mV() {
+         return this._isDisposed
+       }
+       clearCachedVertexData() {
+         for (let HH = 0; HH < this.meshes.length; HH++) {
+           const BH = this.meshes[HH].geometry;
+           BH && BH.clearCachedData()
+ ... (353 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282];
+ export const ids = [282, 662];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/282.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/282.js#L4)

```diff
-   41346: (UU, XU, zU) => {
+   41138: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/282.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/282.js#L6)

```diff
-       b: () => NU
+       c: () => AH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L490-L491` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/282.js#L9-L16) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/282.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new AU.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersRepository : AH.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersStore : AH.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.IncludesShadersStore : AH.IncludesShadersStoreWGSL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L494-L880` → after: `L19-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L19-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/282.js#L19-L32) · [Before (L494-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/282.js#L494-L880)

```diff
-     let YU = (() => {
-       var UU;
-       let XU, zU, YU, NU, IU, pU = [],
-         aU = [],
-         tU = [],
-         gU = [],
-         kU = [],
-         GU = [],
-         BU = [],
-         ZU = [],
-         RU = [],
-         PU = [];
-       return UU = class {
-         static AddNodeConstructor(UU, XU) {
-           this._NodeConstructors[UU] = XU
-         }
- ... (371 more removed lines; see GitHub link above)
+     AH.ShadersRepository = "src/Shaders/", AH.ShadersStore = {}, AH.IncludesShadersStore = {}, AH.ShadersRepositoryWGSL = "src/ShadersWGSL/", AH.ShadersStoreWGSL = {}, AH.IncludesShadersStoreWGSL = {}
+   },
+   64110: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       postprocessVertexShader: () => hH
+     });
+     var AH = LH(41138);
+     const rH = "postprocessVertexShader",
+       SH = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L4)

```diff
-   42184: (UU, XU, zU) => {
+   41356: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L6)

```diff
-       e: () => vU
+       e: () => GH,
+       f: () => XH,
+       j: () => zH,
+       m: () => YH,
+       p: () => CH,
+       q: () => tH,
+       r: () => EH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L8-L20` → after: `L14-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L14-L44) · [Before (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L8-L20)

```diff
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(37846),
-       AU = zU(37819),
-       FU = zU(37855),
-       oU = zU(41314),
-       DU = zU(41481),
-       EU = zU(41271),
-       YU = zU(41010),
-       NU = zU(37825);
-     class IU {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+     var AH = LH(39595),
+       rH = LH(41364);
+ 
+     function SH(HH, BH, LH, AH) {
+       switch (BH) {
+         case 5120: {
+           let BH = HH.getInt8(LH);
+           return AH && (BH = Math.max(BH / 127, -1)), BH
+         }
+         case 5121: {
+           let BH = HH.getUint8(LH);
+           return AH && (BH /= 255), BH
+         }
+         case 5122: {
+           let BH = HH.getInt16(LH, !0);
+           return AH && (BH = Math.max(BH / 32767, -1)), BH
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L22-L23` → after: `L46-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L46-L75) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L22-L23)

```diff
-       get name() {
-         return "AutoRotation"
+     }
+ 
+     function hH(HH, BH, LH, AH, SH) {
+       switch (BH) {
+         case 5120:
+           AH && (SH = Math.round(127 * SH)), HH.setInt8(LH, SH);
+           break;
+         case 5121:
+           AH && (SH = Math.round(255 * SH)), HH.setUint8(LH, SH);
+           break;
+         case 5122:
+           AH && (SH = Math.round(32767 * SH)), HH.setInt16(LH, SH, !0);
+           break;
+         case 5123:
+           AH && (SH = Math.round(65535 * SH)), HH.setUint16(LH, SH, !0);
+           break;
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L25-L26` → after: `L77-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L77-L93) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L25-L26)

```diff
-       set zoomStopsAnimation(UU) {
-         this._zoomStopsAnimation = UU
+     }
+ 
+     function tH(HH) {
+       switch (HH) {
+         case 5120:
+         case 5121:
+           return 1;
+         case 5122:
+         case 5123:
+         case 5131:
+           return 2;
+         case 5124:
+         case 5125:
+         case 5126:
+           return 4;
+         default:
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L28-L29` → after: `L95-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L95-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L95-L117) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L28-L29)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+     }
+ 
+     function zH(HH, BH, LH, AH, rH, zH, CH, EH) {
+       const XH = new Array(AH),
+         GH = new Array(AH);
+       if (HH instanceof Array) {
+         let rH = BH / 4;
+         const SH = LH / 4;
+         for (let BH = 0; BH < zH; BH += AH) {
+           for (let BH = 0; BH < AH; BH++) XH[BH] = GH[BH] = HH[rH + BH];
+           EH(GH, BH);
+           for (let BH = 0; BH < AH; BH++) XH[BH] !== GH[BH] && (HH[rH + BH] = GH[BH]);
+           rH += SH
+         }
+       } else {
+         const YH = ArrayBuffer.isView(HH) ? new DataView(HH.buffer, HH.byteOffset, HH.byteLength) : new DataView(HH),
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L31-L32` → after: `L119-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L119-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L119-L139) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L31-L32)

```diff
-       set idleRotationSpeed(UU) {
-         this._idleRotationSpeed = UU
+     }
+ 
+     function CH(HH, BH, LH, rH, SH, hH, CH, EH) {
+       const XH = BH * tH(LH),
+         GH = CH * BH;
+       if (5126 !== LH || SH !== XH) {
+         const AH = new Float32Array(GH);
+         return zH(HH, rH, SH, BH, LH, GH, hH, ((HH, LH) => {
+           for (let rH = 0; rH < BH; rH++) AH[LH + rH] = HH[rH]
+         })), AH
+       }
+       if (!(HH instanceof Array || HH instanceof Float32Array) || 0 !== rH || HH.length !== GH) {
+         if (HH instanceof Array) {
+           const BH = rH / 4;
+           return HH.slice(BH, BH + GH)
+         }
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L34-L35` → after: `L141-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L141-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L141-L274) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L34-L35)

```diff
-       get idleRotationSpeed() {
-         return this._idleRotationSpeed
+       return EH ? HH.slice() : HH
+     }
+ 
+     function EH(HH, BH, LH, rH, SH, hH, CH) {
+       const EH = tH(LH),
+         XH = function(HH) {
+           switch (HH) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+             case 5131:
+               return Uint16Array;
+ ... (118 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L37-L38` → after: `L276-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L276-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L276-L311) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L37-L38)

```diff
-       set idleRotationWaitTime(UU) {
-         this._idleRotationWaitTime = UU
+     }
+     class rH {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(HH) {
+         this._lines.length = 0;
+         for (const BH of HH) {
+           if (!BH || "\r" === BH) continue;
+           if ("#" === BH[0]) {
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L40-L41` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L313-L320) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L40-L41)

```diff
-       get idleRotationWaitTime() {
-         return this._idleRotationWaitTime
+     }
+     class SH extends AH {
+       process(HH, BH, LH) {
+         for (let AH = 0; AH < this.children.length; AH++) {
+           const rH = this.children[AH];
+           if (rH.isValid(HH)) return rH.process(HH, BH, LH)
+         }
+         return ""
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L43-L44` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L322-L325) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L43-L44)

```diff
-       set idleRotationSpinupTime(UU) {
-         this._idleRotationSpinupTime = UU
+     }
+     class hH extends AH {
+       isValid(HH) {
+         return this.testExpression.isTrue(HH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L46-L47` → after: `L327-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L327-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L327-L375) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L46-L47)

```diff
-       get idleRotationSpinupTime() {
-         return this._idleRotationSpinupTime
+     }
+     class tH {
+       isTrue(HH) {
+         return !0
+       }
+       static postfixToInfix(HH) {
+         const BH = [];
+         for (const LH of HH)
+           if (void 0 === tH._OperatorPriority[LH]) BH.push(LH);
+           else {
+             const HH = BH[BH.length - 1],
+               AH = BH[BH.length - 2];
+             BH.length -= 2, BH.push(`(${AH}${LH}${HH})`)
+           } return BH[BH.length - 1]
+       }
+       static infixToPostfix(HH) {
+ ... (33 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L49-L50` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L377-L379) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L49-L50)

```diff
-       get rotationInProgress() {
-         return Math.abs(this._cameraRotationSpeed) > 0
+       static ClearCache() {
+         const HH = Array.from(tH._InfixToPostfixCache.entries()).sort(((HH, BH) => HH[1].accessTime - BH[1].accessTime));
+         for (let BH = 0; BH < tH.InfixToPostfixCacheCleanupSize; BH++) tH._InfixToPostfixCache.delete(HH[BH][0])
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L52-L53` → after: `L381-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L381-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L381-L391) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L52-L53)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+     }
+     tH.InfixToPostfixCacheLimitSize = 5e4, tH.InfixToPostfixCacheCleanupSize = 25e3, tH._InfixToPostfixCache = new Map, tH._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+     }, tH._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
+     class zH extends tH {
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = HH, this.not = BH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L55-L69` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L393-L395) · [Before (L55-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L55-L69)

```diff
-       init() {}
-       attach(UU) {
-         this._attachedCamera = UU;
-         const XU = this._attachedCamera.nS();
-         this._onPrePointerObservableObserver = XU.onPrePointerObservable.add((UU => {
-           UU.type !== EU.c.POINTERDOWN ? UU.type === EU.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
-           if (this._reachTargetAlpha()) return;
-           const UU = YU.e.Now;
-           let XU = 0;
-           null != this._lastFrameTime && (XU = UU - this._lastFrameTime), this._lastFrameTime = UU, this._applyUserInteraction();
-           const zU = UU - this._lastInteractionTime - this._idleRotationWaitTime,
-             cU = Math.max(Math.min(zU / this._idleRotationSpinupTime, 1), 0);
-           this._cameraRotationSpeed = this._idleRotationSpeed * cU, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (XU / 1e3))
-         }))
+       isTrue(HH) {
+         let BH = void 0 !== HH[this.define];
+         return this.not && (BH = !BH), BH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L71-L74` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L397-L400) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L71-L74)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const UU = this._attachedCamera.nS();
-         this._onPrePointerObservableObserver && UU.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
+     }
+     class CH extends tH {
+       isTrue(HH) {
+         return this.leftOperand.isTrue(HH) || this.rightOperand.isTrue(HH)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L76-L77` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L402-L405) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L76-L77)

```diff
-       resetLastInteractionTime(UU) {
-         this._lastInteractionTime = UU ?? YU.e.Now
+     }
+     class EH extends tH {
+       isTrue(HH) {
+         return this.leftOperand.isTrue(HH) && this.rightOperand.isTrue(HH)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L79-L80` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L407-L410) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L79-L80)

```diff
-       _reachTargetAlpha() {
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < NU.c
+     }
+     class XH extends tH {
+       constructor(HH, BH, LH) {
+         super(), this.define = HH, this.operand = BH, this.testValue = LH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L82-L83` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L412-L413) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L82-L83)

```diff
-       _userIsZooming() {
-         return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L85-L86` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L415) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L85-L86)

```diff
-       _shouldAnimationStopForInteraction() {
-         if (!this._attachedCamera) return !1;
+       isTrue(HH) {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L88-L94` → after: `L417-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L417-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L417-L439) · [Before (L88-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L88-L94)

```diff
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (UU = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? UU : this._userIsZooming()
-       }
-       _applyUserInteraction() {
-         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = YU.e.Now)
-       }
-       _userIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+         const LH = parseInt(void 0 != HH[this.define] ? HH[this.define] : this.define),
+           AH = parseInt(void 0 != HH[this.testValue] ? HH[this.testValue] : this.testValue);
+         if (isNaN(LH) || isNaN(AH)) return !1;
+         switch (this.operand) {
+           case ">":
+             BH = LH > AH;
+             break;
+           case "<":
+             BH = LH < AH;
+             break;
+           case "<=":
+             BH = LH <= AH;
+             break;
+           case ">=":
+             BH = LH >= AH;
+             break;
+ ... (7 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L97-L100` → after: `L442-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L442-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L442-L485) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L97-L100)

```diff
-     zU(42190);
-     class pU {
-       constructor() {
-         this._easingMode = pU.EASINGMODE_EASEIN
+     var GH = LH(41169),
+       YH = LH(41164);
+     const uH = /defined\s*?\((.+?)\)/g,
+       QH = /defined\s*?\[(.+?)\]/g,
+       WH = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       MH = /__decl__/,
+       xH = /light\{X\}.(\w*)/g,
+       vH = /\{X\}/g,
+       PH = [],
+       TH = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function UH(HH) {
+       HH.processor && HH.processor.initializeShaders && HH.processor.initializeShaders(HH.processingContext)
+     }
+ 
+     function VH(HH, BH, LH, AH) {
+ ... (28 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L102-L104` → after: `L487-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L487-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L487-L537) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L102-L104)

```diff
-       setEasingMode(UU) {
-         const XU = Math.min(Math.max(UU, 0), 2);
-         this._easingMode = XU
+     }
+ 
+     function bH(HH) {
+       const BH = /defined\((.+)\)/.exec(HH);
+       if (BH && BH.length) return new zH(BH[1].trim(), "!" === HH[0]);
+       const LH = ["==", "!=", ">=", "<=", "<", ">"];
+       let AH = "",
+         rH = 0;
+       for (AH of LH)
+         if (rH = HH.indexOf(AH), rH > -1) break;
+       if (-1 === rH) return new zH(HH);
+       const SH = HH.substring(0, rH).trim(),
+         hH = HH.substring(rH + AH.length).trim();
+       return new XH(SH, AH, hH)
+     }
+ 
+ ... (35 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L106-L107` → after: `L539-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L539-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L539-L582) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L106-L107)

```diff
-       getEasingMode() {
-         return this._easingMode
+     }
+ 
+     function oH(HH, BH, LH) {
+       for (; HH.canRead;) {
+         HH.lineIndex++;
+         const rH = HH.currentLine;
+         if (rH.indexOf("#") >= 0) {
+           const AH = TH.exec(rH);
+           if (AH && AH.length) {
+             switch (AH[0]) {
+               case "#ifdef": {
+                 const AH = new SH;
+                 BH.children.push(AH);
+                 const hH = kH(rH, 6);
+                 AH.children.push(hH), mH(HH, AH, hH, LH);
+                 break
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L109-L110` → after: `L584-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L584-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L584-L598) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L109-L110)

```diff
-       easeInCore(UU) {
-         throw new Error("You must implement this method")
+       return !1
+     }
+ 
+     function IH(HH, BH, LH, SH) {
+       const hH = new AH,
+         tH = new rH;
+       return tH.lineIndex = -1, tH.lines = HH.split("\n"), oH(tH, hH, SH), hH.process(BH, LH, SH)
+     }
+ 
+     function fH(HH, BH) {
+       const LH = HH.defines,
+         AH = {};
+       for (const rH of LH) {
+         const HH = rH.replace("#define", "").replace(";", "").trim().split(" ");
+         AH[HH[0]] = HH.length > 1 ? HH[1] : ""
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L112-L117` → after: `L600-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L600-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L600-L642) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L112-L117)

```diff
-       ease(UU) {
-         switch (this._easingMode) {
-           case pU.EASINGMODE_EASEIN:
-             return this.easeInCore(UU);
-           case pU.EASINGMODE_EASEOUT:
-             return 1 - this.easeInCore(1 - UU)
+       return 0 === HH.processor?.shaderLanguage && (AH.GL_ES = "true"), AH.__VERSION__ = HH.version, AH[HH.platformName] = "true", (0, YH.f)(AH, BH?.isNDCHalfZRange, BH?.WrH, BH?.useExactSrgbConversions), AH
+     }
+ 
+     function lH(HH, BH, LH) {
+       let AH;
+       for (PH.length = 0; null !== (AH = WH.exec(HH));) PH.push(AH);
+       let rH = [HH],
+         SH = !1;
+       for (const tH of PH) {
+         let HH = tH[1];
+         if (-1 !== HH.indexOf("__decl__") && (HH = HH.replace(MH, ""), BH.supportsUniformBuffers && (HH = HH.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), HH += "Declaration"), !BH.includesShadersStore[HH]) {
+           const AH = BH.shadersRepository + "ShadersInclude/" + HH + ".fx";
+           return void KH.loadFile(AH, (AH => {
+             BH.includesShadersStore[HH] = AH, lH(rH.join(""), BH, LH)
+           }))
+         } {
+ ... (27 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L122-L143` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L649-L651) · [Before (L122-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L122-L143)

```diff
-     pU.EASINGMODE_EASEIN = 0, pU.EASINGMODE_EASEOUT = 1, pU.EASINGMODE_EASEINOUT = 2;
-     var aU = zU(42195);
-     class tU {
-       constructor() {
-         this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
-       }
-       get name() {
-         return "Bouncing"
-       }
-       get autoTransitionRange() {
-         return this._autoTransitionRange
-       }
-       set autoTransitionRange(UU) {
-         if (this._autoTransitionRange === UU) return;
-         this._autoTransitionRange = UU;
-         const XU = this._attachedCamera;
- ... (6 more removed lines; see GitHub link above)
+     const KH = {
+       loadFile: (HH, BH, LH, AH, rH, SH) => {
+         throw (0, GH.i)("FileTools")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L145-L146` → after: `L653-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L653-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L653-L680) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L145-L146)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+     }
+   },
+   41164: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => rH,
+       c: () => SH,
+       f: () => tH,
+       g: () => hH,
+       h: () => zH
+     });
+     var AH = LH(41169);
+     const rH = {};
+ 
+     function SH(HH, BH) {
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (BH ? BH + "\n" : "") + HH
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L148-L152` → after: `L682-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L682-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L682-L724) · [Before (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L148-L152)

```diff
-       init() {}
-       attach(UU) {
-         this._attachedCamera = UU, this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
-           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
-         }))
+     }
+ 
+     function zH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         AH = arguments.length > 3 ? arguments[3] : void 0;
+       switch (HH) {
+         case 3: {
+           const HH = new Int8Array(BH);
+           return AH && HH.set(new Int8Array(AH)), HH
+         }
+         case 0: {
+           const HH = new Uint8Array(BH);
+           return AH && HH.set(new Uint8Array(AH)), HH
+         }
+         case 4: {
+           const HH = "number" !== typeof BH ? new Int16Array(BH) : new Int16Array(LH ? BH / 2 : BH);
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L154-L155` → after: `L726-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L726-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L726-L773) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L154-L155)

```diff
-       detach() {
-         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
+       const rH = new Uint8Array(BH);
+       return AH && rH.set(new Uint8Array(AH)), rH
+     }
+   },
+   41169: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => CH,
+       e: () => EH,
+       f: () => zH,
+       i: () => rH
+     });
+     const AH = {};
+ 
+     function rH(HH) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !AH[HH]) return AH[HH] = !0, `${HH} needs to be imported before as it contains a side-effect required by your code.`
+     }
+ ... (32 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L157-L158` → after: `L775-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L775-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L775-L822) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L157-L158)

```diff
-       _isRadiusAtLimit(UU) {
-         return !!this._attachedCamera && (this._attachedCamera.radius === UU && !this._radiusIsAnimating)
+     }
+   },
+   41154: (HH, BH, LH) => {
+     function AH() {
+       return "undefined" !== typeof window
+     }
+ 
+     function rH() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function SH() {
+       return "undefined" !== typeof document
+     }
+ 
+     function hH(HH) {
+ ... (32 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L160-L164` → after: `L824-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L824-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L824-L855) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L160-L164)

```diff
-       _applyBoundRadiusAnimation(UU) {
-         if (!this._attachedCamera) return;
-         this._radiusBounceTransition || (tU.EasingFunction.setEasingMode(tU.EasingMode), this._radiusBounceTransition = aU.b.CreateAnimation("radius", aU.b.ANIMATIONTYPE_FLOAT, 60, tU.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const XU = aU.b.TransitionTo("radius", this._attachedCamera.radius + UU, this._attachedCamera, this._attachedCamera.nS(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
-         XU && this._animatables.push(XU)
+     }
+   },
+   41336: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => fH,
+       h: () => vH,
+       i: () => kH,
+       k: () => oH,
+       l: () => OH,
+       m: () => UH,
+       n: () => VH,
+       q: () => qH,
+       r: () => bH,
+       s: () => PH
+     });
+     var AH = LH(41339),
+ ... (16 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L166-L167` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L857-L860) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L166-L167)

```diff
-       _clearAnimationLocks() {
-         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
+     }
+     class MH extends tH.j {
+       constructor(HH, BH) {
+         super(HH, tH.g.RequestFileError), this.request = BH, this.name = "RequestFileError", tH.d._setPrototypeOf(this, MH.prototype)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L169-L170` → after: `L862-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L862-L865) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L169-L170)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
+     }
+     class xH extends tH.j {
+       constructor(HH, BH) {
+         super(HH, tH.g.ReadFileError), this.file = BH, this.name = "ReadFileError", tH.d._setPrototypeOf(this, xH.prototype)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L173-L176` → after: `L868-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L868-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L868-L1337) · [Before (L173-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L173-L176)

```diff
-     tU.EasingFunction = new class extends pU {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         super(), this.amplitude = UU
+     const vH = {
+         DefaultRetryStrategy: class {
+           static ExponentialBackoff() {
+             let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
+               BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
+             return (LH, AH, rH) => 0 !== AH.status || rH >= HH || -1 !== LH.indexOf("file:") ? -1 : Math.pow(2, rH) * BH
+           }
+         }.ExponentialBackoff(),
+         BaseUrl: "",
+         CorsBehavior: "anonymous",
+         PreprocessUrl: HH => HH,
+         ScriptBaseUrl: "",
+         ScriptPreprocessUrl: HH => HH,
+         CleanUrl: HH => HH = HH.replace(/#/gm, "%23")
+       },
+       PH = (HH, BH) => {
+ ... (454 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L178-L180` → after: `L1339-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1339-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1339-L1345) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L178-L180)

```diff
-       easeInCore(UU) {
-         const XU = Math.max(0, this.amplitude);
-         return Math.pow(UU, 3) - UU * XU * Math.sin(3.141592653589793 * UU)
+     }
+ 
+     function SH(HH, BH, LH) {
+       try {
+         if (HH()) return BH(), !0
+       } catch (AH) {
+         return LH?.(AH), !0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L182` → after: `L1347-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1347-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1347-L1363) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L182)

```diff
-     }(.3), tU.EasingMode = pU.EASINGMODE_EASEOUT;
+       return !1
+     }
+     const hH = function(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+         hH = arguments.length > 6 ? arguments[6] : void 0;
+       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && SH(HH, BH, LH)) return null;
+       const tH = setInterval((() => {
+         SH(HH, BH, LH) ? clearInterval(tH) : (rH -= AH, rH < 0 && (clearInterval(tH), LH?.(new Error("Operation timed out after maximum retries. " + (hH || "")), !0)))
+       }), AH);
+       return () => clearInterval(tH)
+     }
+   },
+   41339: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => AH
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L185-L194` → after: `L1366-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1366-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1366-L1402) · [Before (L185-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L185-L194)

```diff
-         this.onTargetFramingAnimationEndObservable = new QU.e, this._mode = gU.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
-       }
-       get name() {
-         return "Framing"
-       }
-       set mode(UU) {
-         this._mode = UU
-       }
-       get mode() {
-         return this._mode
+         this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
+       }
+       static get IsCustomRequestAvailable() {
+         return Object.keys(AH.CustomRequestHeaders).length > 0 || AH.CustomRequestModifiers.length > 0
+       }
+       static _CleanUrl(HH) {
+         return HH = (HH = HH.replace("file:http:", "http:")).replace("file:https:", "https:")
+       }
+       static _ShouldSkipRequestModifications(HH) {
+         return AH.SkipRequestModificationForBabylonCDN && (HH.includes("preview.babylonjs.com") || HH.includes("cdn.babylonjs.com"))
+       }
+       static _CollectCustomizations(HH) {
+         const BH = {
+           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
+         };
+         if (AH._ShouldSkipRequestModifications(HH)) return {
+ ... (21 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L196-L197` → after: `L1404-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1404-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1404-L1440) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L196-L197)

```diff
-       set radiusScale(UU) {
-         this._radiusScale = UU
+       static async FetchAsync(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const LH = BH.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+             url: rH,
+             headers: SH
+           } = AH._CollectCustomizations(AH._CleanUrl(HH), BH.headers ?? {});
+           return await fetch(rH, {
+             method: LH,
+             headers: SH,
+             body: BH.body ?? void 0
+           })
+         }
+         return await new Promise(((rH, SH) => {
+           const hH = new AH;
+ ... (21 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L199-L200` → after: `L1442-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1442-L1443) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L199-L200)

```diff
-       get radiusScale() {
-         return this._radiusScale
+       get requestURL() {
+         return this._requestURL
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L202-L203` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1445-L1446) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L202-L203)

```diff
-       set positionScale(UU) {
-         this._positionScale = UU
+       get onprogress() {
+         return this._xhr.onprogress
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L205-L206` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1448-L1449) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L205-L206)

```diff
-       get positionScale() {
-         return this._positionScale
+       set onprogress(HH) {
+         this._xhr.onprogress = HH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L208-L209` → after: `L1451-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1451-L1452) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L208-L209)

```diff
-       set defaultElevation(UU) {
-         this._defaultElevation = UU
+       get readyState() {
+         return this._xhr.readyState
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L211-L212` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1454-L1455) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       get status() {
+         return this._xhr.status
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L214-L215` → after: `L1457-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1457-L1458) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L214-L215)

```diff
-       set elevationReturnTime(UU) {
-         this._elevationReturnTime = UU
+       get statusText() {
+         return this._xhr.statusText
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L217-L218` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1460-L1461) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       get response() {
+         return this._xhr.response
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L220-L221` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1463-L1464) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L220-L221)

```diff
-       set elevationReturnWaitTime(UU) {
-         this._elevationReturnWaitTime = UU
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L223-L224` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1466-L1467) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       get responseText() {
+         return this._xhr.responseText
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L226-L227` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1469-L1470) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L226-L227)

```diff
-       set zoomStopsAnimation(UU) {
-         this._zoomStopsAnimation = UU
+       get responseType() {
+         return this._xhr.responseType
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L229-L230` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1472-L1473) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set responseType(HH) {
+         this._xhr.responseType = HH
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L232-L233` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1475-L1476) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L232-L233)

```diff
-       set framingTime(UU) {
-         this._framingTime = UU
+       get timeout() {
+         return this._xhr.timeout
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L235-L236` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1478-L1479) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set timeout(HH) {
+         this._xhr.timeout = HH
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L238-L239` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1481-L1482) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       addEventListener(HH, BH, LH) {
+         this._xhr.addEventListener(HH, BH, LH)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L241-L253` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1484-L1485) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L241-L253)

```diff
-       init() {}
-       attach(UU) {
-         this._attachedCamera = UU;
-         const XU = this._attachedCamera.nS();
-         gU.EasingFunction.setEasingMode(gU.EasingMode), this._onPrePointerObservableObserver = XU.onPrePointerObservable.add((UU => {
-           UU.type !== EU.c.POINTERDOWN ? UU.type === EU.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = UU.onMeshTargetChangedObservable.add((UU => {
-           UU && UU.gM && this.zoomOnMesh(UU, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       removeEventListener(HH, BH, LH) {
+         this._xhr.removeEventListener(HH, BH, LH)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L255-L331` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1487-L1488) · [Before (L255-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L255-L331)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const UU = this._attachedCamera.nS();
-         this._onPrePointerObservableObserver && UU.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
-       }
-       zoomOnMesh(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         UU.computeWorldMatrix(!0);
-         const cU = UU.gM().boundingBox;
-         this.zoomOnBoundingInfo(cU.minimumWorld, cU.maximumWorld, XU, zU)
-       }
-       zoomOnMeshHierarchy(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         UU.computeWorldMatrix(!0);
- ... (61 more removed lines; see GitHub link above)
+       abort() {
+         this._xhr.abort()
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L333-L334` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1490-L1491) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L333-L334)

```diff
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       send(HH) {
+         this._xhr.send(HH)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L336-L337` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1493-L1499) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = YU.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       open(HH, BH, LH) {
+         const {
+           url: rH,
+           headers: SH
+         } = AH._CollectCustomizations(BH, LH);
+         this._requestURL = AH._CleanUrl(rH), this._xhr.open(HH, this._requestURL, !0);
+         for (const AH in SH) this._xhr.setRequestHeader(AH, SH[AH])
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L339-L340` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1501-L1502) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L339-L340)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       setRequestHeader(HH, BH) {
+         this._xhr.setRequestHeader(HH, BH)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L342-L343` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1504-L1505) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L342-L343)

```diff
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       getResponseHeader(HH) {
+         return this._xhr.getResponseHeader(HH)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L346-L2236` → after: `L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/283.js#L1508) · [Before (L346-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/283.js#L346-L2236)

```diff
-     gU.EasingFunction = new class extends pU {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = UU
-       }
-       easeInCore(UU) {
-         return this.exponent <= 0 ? UU : (Math.exp(this.exponent * UU) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, gU.EasingMode = pU.EASINGMODE_EASEINOUT, gU.IgnoreBoundsSizeMode = 0, gU.FitFrustumSidesMode = 1;
-     var kU = zU(41309),
-       GU = zU(41301),
-       BU = zU(41323),
-       ZU = zU(41205);
-     let RU = (() => {
-         var UU;
-         let XU, zU = [],
- ... (1875 more removed lines; see GitHub link above)
+     AH.CustomRequestHeaders = {}, AH.CustomRequestModifiers = new Array, AH.SkipRequestModificationForBabylonCDN = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/284.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/284.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L4)

```diff
-   41464: (UU, XU, zU) => {
+   41392: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L6)

```diff
-       d: () => yU
+       c: () => SH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L8-L77` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L8-L19) · [Before (L8-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L8-L77)

```diff
-     var cU = zU(41123);
- 
-     function yU(UU) {
-       return class extends UU {
-         constructor() {
-           super(...arguments);
-           const UU = new.target;
-           if (!UU[Symbol.metadata]) {
-             const XU = Object.getPrototypeOf(UU)?.[Symbol.metadata];
-             UU[Symbol.metadata] = XU ? Object.create(XU) : {}
-           }
-           const XU = (0, cU.e)(UU[Symbol.metadata]);
-           XU._imageProcessingConfiguration || (XU._imageProcessingConfiguration = {
-             type: 9,
-             sourceName: void 0
-           })
- ... (54 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(38012);
+     class SH {
+       static Instantiate(HH) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[HH]) return this.RegisteredExternalClasses[HH];
+         const BH = (0, rH.b)(HH);
+         if (BH) return BH;
+         AH.e.Warn(HH + " not found, you may have missed an import.");
+         const LH = HH.split(".");
+         let SH = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let AH = 0, rH = LH.length; AH < rH; AH++) SH = SH[LH[AH]];
+         return "function" !== typeof SH ? null : SH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L81` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L24) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L81)

```diff
-   41358: (UU, XU, zU) => {
+   41190: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L83-L84` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L26) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L83-L84)

```diff
-       c: () => QU,
-       g: () => yU
+       e: () => rH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L86` → after: `L28-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L28-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L28-L46) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L86)

```diff
-     var cU = zU(41366);
+     var AH = LH(41154);
+     class rH {
+       static get Now() {
+         return (0, AH.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       }
+     }
+   },
+   41222: (HH, BH, LH) => {
+     function AH(HH) {
+       let BH = 1;
+       do {
+         BH *= 2
+       } while (BH < HH);
+       return BH === HH
+     }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L89-L93` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L49-L51) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L89-L93)

```diff
-       return class extends UU {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
-         }
-       }
+       const BH = hH(HH),
+         LH = tH(HH);
+       return BH - HH > HH - LH ? LH : BH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L95-L98` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L53-L55) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L95-L98)

```diff
-     class QU extends cU.d {
-       constructor() {
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
-       }
+ 
+     function hH(HH) {
+       return HH--, HH |= HH >> 1, HH |= HH >> 2, HH |= HH >> 4, HH |= HH >> 8, HH |= HH >> 16, ++HH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L100-L115` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L57-L59) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L100-L115)

```diff
-   },
-   41429: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => YU
-     });
-     var cU = zU(41113),
-       yU = zU(41374),
-       QU = zU(41121),
-       AU = zU(41413),
-       FU = zU(41366),
-       oU = zU(41436),
-       DU = zU(41400);
-     class EU extends FU.d {
-       constructor() {
-         super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
-       }
+ 
+     function tH(HH) {
+       return HH |= HH >> 1, HH |= HH >> 2, HH |= HH >> 4, HH |= HH >> 8, (HH |= HH >> 16) - (HH >> 1)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L117-L294` → after: `L61-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L61-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L61-L82) · [Before (L117-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L117-L294)

```diff
-     let YU = (() => {
-       var UU, XU, zU, FU;
-       let YU, NU, IU, pU, aU, tU, gU = oU.e,
-         kU = [],
-         GU = [],
-         BU = [],
-         ZU = [],
-         RU = [],
-         PU = [],
-         WU = [],
-         dU = [],
-         LU = [],
-         eU = [],
-         CU = [],
-         wU = [];
-       return UU = class extends gU {
- ... (162 more removed lines; see GitHub link above)
+ 
+     function zH(HH, BH) {
+       let LH;
+       switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
+         case 1:
+           LH = tH(HH);
+           break;
+         case 2:
+           LH = SH(HH);
+           break;
+         default:
+           LH = hH(HH)
+       }
+       return Math.min(LH, BH)
+     }
+     LH.d(BH, {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L296` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L84) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L296)

```diff
-   41366: (UU, XU, zU) => {
+   41387: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L298` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L86-L89) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L298)

```diff
-       d: () => cU
+       e: () => vH,
+       f: () => TH,
+       i: () => MH,
+       j: () => xH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L301-L303` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L105-L106) · [Before (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L301-L303)

```diff
-       constructor(UU) {
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const XU in UU) Object.prototype.hasOwnProperty.call(UU, XU) && this._setDefaultValue(XU)
+       static get BaseUrl() {
+         return GH.h.BaseUrl
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L305-L306` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L108-L109) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L305-L306)

```diff
-       get isDirty() {
-         return this._isDirty
+       static set BaseUrl(HH) {
+         GH.h.BaseUrl = HH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L308-L309` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L111-L112) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L308-L309)

```diff
-       markAsProcessed() {
-         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
+       static get CleanUrl() {
+         return GH.h.CleanUrl
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L311-L312` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L114-L115) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L311-L312)

```diff
-       markAsUnprocessed() {
-         this._isDirty = !0
+       static set CleanUrl(HH) {
+         GH.h.CleanUrl = HH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L314-L315` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L117-L118) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L314-L315)

```diff
-       markAllAsDirty() {
-         this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
+       static IsAbsoluteUrl(HH) {
+         return 0 === HH.indexOf("//") || -1 !== HH.indexOf("://") && (-1 !== HH.indexOf(".") && (-1 !== HH.indexOf("/") && (!(HH.indexOf(":") > HH.indexOf("/")) && (HH.indexOf("://") < HH.indexOf(".") || (0 === HH.indexOf("data:") || 0 === HH.indexOf("blob:"))))))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L317-L318` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L120-L121) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L317-L318)

```diff
-       markAsImageProcessingDirty() {
-         this._areImageProcessingDirty = !0, this._isDirty = !0
+       static set ScriptBaseUrl(HH) {
+         GH.h.ScriptBaseUrl = HH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L320-L322` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L123-L124) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L320-L322)

```diff
-       markAsLightDirty() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || UU, this._isDirty = !0
+       static get ScriptBaseUrl() {
+         return GH.h.ScriptBaseUrl
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L324-L325` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L126-L127) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L324-L325)

```diff
-       markAsAttributesDirty() {
-         this._areAttributesDirty = !0, this._isDirty = !0
+       static set CDNBaseUrl(HH) {
+         AH.ScriptBaseUrl = HH, AH.AssetBaseUrl = HH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L327-L328` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L129-L130) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L327-L328)

```diff
-       markAsTexturesDirty() {
-         this._areTexturesDirty = !0, this._isDirty = !0
+       static set ScriptPreprocessUrl(HH) {
+         GH.h.ScriptPreprocessUrl = HH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L330-L331` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L132-L133) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L330-L331)

```diff
-       markAsFresnelDirty() {
-         this._areFresnelDirty = !0, this._isDirty = !0
+       static get ScriptPreprocessUrl() {
+         return GH.h.ScriptPreprocessUrl
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L333-L334` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L135-L136) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L333-L334)

```diff
-       markAsMiscDirty() {
-         this._areMiscDirty = !0, this._isDirty = !0
+       static get DefaultRetryStrategy() {
+         return GH.h.DefaultRetryStrategy
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L336-L337` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L138-L139) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L336-L337)

```diff
-       markAsPrePassDirty() {
-         this._arePrePassDirty = !0, this._isDirty = !0
+       static set DefaultRetryStrategy(HH) {
+         GH.h.DefaultRetryStrategy = HH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L339-L343` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L141-L142) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L339-L343)

```diff
-       rebuild() {
-         this._keys.length = 0;
-         for (const UU of Object.keys(this)) "_" !== UU[0] && this._keys.push(UU);
-         if (this._externalProperties)
-           for (const UU in this._externalProperties) - 1 === this._keys.indexOf(UU) && this._keys.push(UU)
+       static get CorsBehavior() {
+         return GH.h.CorsBehavior
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L345-L351` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L144-L145) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L345-L351)

```diff
-       isEqual(UU) {
-         if (this._keys.length !== UU._keys.length) return !1;
-         for (let XU = 0; XU < this._keys.length; XU++) {
-           const zU = this._keys[XU];
-           if (this[zU] !== UU[zU]) return !1
-         }
-         return !0
+       static set CorsBehavior(HH) {
+         GH.h.CorsBehavior = HH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L353-L358` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L147-L148) · [Before (L353-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L353-L358)

```diff
-       cloneTo(UU) {
-         this._keys.length !== UU._keys.length && (UU._keys = this._keys.slice(0));
-         for (let XU = 0; XU < this._keys.length; XU++) {
-           const zU = this._keys[XU];
-           UU[zU] = this[zU]
-         }
+       static get UseFallbackTexture() {
+         return XH.d.UseFallbackTexture
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L360-L375` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L150-L151) · [Before (L360-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L360-L375)

```diff
-       reset() {
-         for (const UU of this._keys) this._setDefaultValue(UU)
-       }
-       _setDefaultValue(UU) {
-         const XU = this._externalProperties?.[UU]?.type ?? typeof this[UU],
-           zU = this._externalProperties?.[UU]?.default;
-         switch (XU) {
-           case "number":
-             this[UU] = zU ?? 0;
-             break;
-           case "string":
-             this[UU] = zU ?? "";
-             break;
-           default:
-             this[UU] = zU ?? !1
-         }
+       static set UseFallbackTexture(HH) {
+         XH.d.UseFallbackTexture = HH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L377-L391` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L153-L154) · [Before (L377-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L377-L391)

```diff
-       toString() {
-         let UU = "";
-         for (let XU = 0; XU < this._keys.length; XU++) {
-           const zU = this._keys[XU],
-             cU = this[zU];
-           switch (typeof cU) {
-             case "number":
-             case "string":
-               UU += "#define " + zU + " " + cU + "\n";
-               break;
-             default:
-               cU && (UU += "#define " + zU + "\n")
-           }
-         }
-         return UU
+       static get RegisteredExternalClasses() {
+         return uH.c.RegisteredExternalClasses
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L393-L445` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L156-L157) · [Before (L393-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L393-L445)

```diff
-     }
-   },
-   41446: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => FU,
-       f: () => AU,
-       h: () => QU
-     });
-     var cU, yU = zU(37819);
- 
-     function QU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
-       const cU = XU(UU);
-       if (!Number.isInteger(cU) || cU < 0 || cU > zU) throw new Error(`Invalid geometry object ID ${cU} for mesh "${UU.name}". Object IDs must be integers between 0 and 0x${zU.toString(16).toUpperCase()}.`);
-       return cU
-     }
- ... (37 more removed lines; see GitHub link above)
+       static set RegisteredExternalClasses(HH) {
+         uH.c.RegisteredExternalClasses = HH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L447-L449` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L159-L160) · [Before (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L447-L449)

```diff
-       static _PrepareStringDefines(UU, XU) {
-         const zU = FU._Configurations[UU];
-         return !!zU?._defines && (XU.push(zU._defines), !0)
+       static get fallbackTexture() {
+         return XH.d.FallbackTexture
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L451-L453` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L162-L163) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L451-L453)

```diff
-       static _BindAttachmentsForEffect(UU, XU) {
-         const zU = FU._Configurations[UU.currentRenderPassId];
-         return !zU?._attachments || (UU.bindAttachments(XU._multiTarget ? zU._attachments : zU._colorAttachments), XU._multiTarget || void 0 !== zU.defines.PREPASS_COLOR_INDEX)
+       static set fallbackTexture(HH) {
+         XH.d.FallbackTexture = HH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L455-L457` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L165-L167) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L455-L457)

```diff
-       static _RestoreAttachments(UU) {
-         const XU = FU._Configurations[UU.currentRenderPassId];
-         XU?._colorAttachments && UU.bindAttachments(XU._colorAttachments)
+       static FetchToRef(HH, BH, LH, AH, rH, SH) {
+         const hH = 4 * ((Math.abs(HH) * LH % LH | 0) + (Math.abs(BH) * AH % AH | 0) * LH);
+         SH.r = rH[hH] / 255, SH.g = rH[hH + 1] / 255, SH.b = rH[hH + 2] / 255, SH.a = rH[hH + 3] / 255
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L459-L461` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L169-L170) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L459-L461)

```diff
-       static _BindColorAttachments(UU) {
-         const XU = FU._Configurations[UU.currentRenderPassId];
-         return !XU?._colorAttachments || (UU.bindAttachments(XU._colorAttachments), void 0 !== XU.defines.PREPASS_COLOR_INDEX)
+       static Mix(HH, BH, LH) {
+         return 0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L463-L465` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L172-L173) · [Before (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L463-L465)

```diff
-       static _IsColorAttachmentEnabled(UU) {
-         const XU = FU._Configurations[UU.currentRenderPassId];
-         return !XU?._colorAttachments || void 0 !== XU.defines.PREPASS_COLOR_INDEX
+       static Instantiate(HH) {
+         return uH.c.Instantiate(HH)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L467-L472` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L175-L176) · [Before (L467-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L467-L472)

```diff
-       static _BindZeroAlphaDiscard(UU, XU) {
-         const zU = FU._Configurations[UU.currentRenderPassId];
-         if (!zU) return;
-         const cU = UU.getAlphaMode(),
-           yU = void 0 === zU.defines.PREPASS_COLOR_INDEX || 2 === cU || 1 === cU || 17 === cU;
-         XU.setFloat("geometryZeroAlphaDiscard", yU ? 1 : 0)
+       static SetImmediate(HH) {
+         YH.d.SetImmediate(HH)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L474-L475` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L178-L179) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L474-L475)

```diff
-       static AddUniformsAndSamplers(UU, XU) {
-         UU.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
+       static IsExponentOfTwo(HH) {
+         return !0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L477-L523` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L181-L182) · [Before (L477-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L477-L523)

```diff
-       static MarkAsDirty(UU, XU) {
-         for (const zU of XU)
-           if (zU.uB)
-             for (const XU of zU.uB) XU._removeDrawWrapper(UU)
-       }
-       static PrepareDefines(UU, XU, zU) {
-         if (!zU._arePrePassDirty) return;
-         const cU = FU._Configurations[UU];
-         if (!cU) return;
-         zU.PREPASS = !0;
-         let yU = 0;
-         for (let QU = 0; QU < FU.GeometryTextureDescriptions.length; QU++) {
-           const UU = FU.GeometryTextureDescriptions[QU],
-             XU = UU.define,
-             AU = UU.defineIndex,
-             oU = cU.defines[AU];
- ... (31 more removed lines; see GitHub link above)
+       static FloatRound(HH) {
+         return Math.fround(HH)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L525-L664` → after: `L184-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L184-L186) · [Before (L525-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L525-L664)

```diff
-     }
-     FU.GeometryTextureDescriptions = [{
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
- ... (124 more removed lines; see GitHub link above)
+       static GetFilename(HH) {
+         const BH = HH.lastIndexOf("/");
+         return BH < 0 ? HH : HH.substring(BH + 1)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L666-L669` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L188-L191) · [Before (L666-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L666-L669)

```diff
-       _handlePluginEventIsReadyForSubMesh(UU) {
-         let XU = !0;
-         for (const zU of this._activePlugins) XU = XU && zU.isReadyForSubMesh(UU.defines, this._scene, this._engine, UU.subMesh);
-         UU.isReadyForSubMesh = XU
+       static GetFolderPath(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const LH = HH.lastIndexOf("/");
+         return LH < 0 ? BH ? HH : "" : HH.substring(0, LH + 1)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L671-L672` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L193-L194) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L671-L672)

```diff
-       _handlePluginEventPrepareDefinesBeforeAttributes(UU) {
-         for (const XU of this._activePlugins) XU.prepareDefinesBeforeAttributes(UU.defines, this._scene, UU.mesh)
+       static ToDegrees(HH) {
+         return 180 * HH / Math.PI
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L674-L675` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L196-L197) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L674-L675)

```diff
-       _handlePluginEventPrepareDefines(UU) {
-         for (const XU of this._activePlugins) XU.prepareDefines(UU.defines, this._scene, UU.mesh)
+       static ToRadians(HH) {
+         return HH * Math.PI / 180
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L677-L678` → after: `L199-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L199-L203) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L677-L678)

```diff
-       _handlePluginEventHardBindForSubMesh(UU) {
-         for (const XU of this._activePluginsForExtraEvents) XU.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, UU.subMesh)
+       static SmoothAngleChange(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
+         const AH = this.ToRadians(HH),
+           rH = this.ToRadians(BH);
+         return this.ToDegrees(Math.atan2((1 - LH) * Math.sin(rH) + LH * Math.sin(AH), (1 - LH) * Math.cos(rH) + LH * Math.cos(AH)))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L680-L681` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L205-L206) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L680-L681)

```diff
-       _handlePluginEventBindForSubMesh(UU) {
-         for (const XU of this._activePlugins) XU.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, UU.subMesh)
+       static MakeArray(HH, BH) {
+         return !0 === BH || void 0 !== HH && null != HH ? Array.isArray(HH) ? HH : [HH] : null
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L683-L687` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L208-L209) · [Before (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L683-L687)

```diff
-       _handlePluginEventHasRenderTargetTextures(UU) {
-         let XU = !1;
-         for (const zU of this._activePluginsForExtraEvents)
-           if (XU = zU.hasRenderTargetTextures(), XU) break;
-         UU.hasRenderTargetTextures = XU
+       static GetPointerPrefix(HH) {
+         return (0, SH.k)() && !window.PointerEvent ? "mouse" : "pointer"
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L689-L690` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L211-L212) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L689-L690)

```diff
-       _handlePluginEventFillRenderTargetTextures(UU) {
-         for (const XU of this._activePluginsForExtraEvents) XU.fillRenderTargetTextures(UU.renderTargets)
+       static SetCorsBehavior(HH, BH) {
+         (0, GH.s)(HH, BH)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L692-L759` → after: `L214-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L214-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L214-L243) · [Before (L692-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L692-L759)

```diff
-       _handlePluginEvent(UU, XU) {
-         switch (UU) {
-           case 512: {
-             const UU = XU;
-             for (const XU of this._activePlugins) XU.getActiveTextures(UU.activeTextures);
-             break
-           }
-           case 256: {
-             const UU = XU;
-             for (const XU of this._activePlugins) XU.getAnimatables(UU.animatables);
-             break
-           }
-           case 1024: {
-             const UU = XU;
-             let zU = !1;
-             for (const XU of this._activePlugins)
- ... (52 more removed lines; see GitHub link above)
+       static SetReferrerPolicyBehavior(HH, BH) {
+         BH.referrerPolicy = HH
+       }
+       static get PreprocessUrl() {
+         return GH.h.PreprocessUrl
+       }
+       static set PreprocessUrl(HH) {
+         GH.h.PreprocessUrl = HH
+       }
+       static LoadImage(HH, BH, LH, AH, rH, SH) {
+         return (0, GH.m)(HH, BH, LH, AH, rH, SH)
+       }
+       static LoadFile(HH, BH, LH, AH, rH, SH) {
+         return (0, GH.l)(HH, BH, LH, AH, rH, SH)
+       }
+       static async LoadFileAsync(HH) {
+ ... (14 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L762-L792` → after: `L247-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L247-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L247-L275) · [Before (L762-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L762-L792)

```diff
-       _collectPointNames(UU, XU) {
-         if (XU)
-           for (const zU in XU) this._codeInjectionPoints[UU] || (this._codeInjectionPoints[UU] = {}), this._codeInjectionPoints[UU][zU] = !0
-       }
-       _injectCustomCode(UU, XU) {
-         return (zU, cU) => {
-           XU && (cU = XU(zU, cU)), this._uboDeclaration && (cU = cU.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (cU = cU.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const yU = this._codeInjectionPoints?.[zU];
-           if (!yU) return cU;
-           let oU = null;
-           for (let XU in yU) {
-             let yU = "";
-             for (const cU of this._activePlugins) {
-               const FU = this._material.shaderLanguage;
-               let DU = cU.getCustomCode(zU, FU)?.[XU];
-               DU && (cU.resolveIncludes && (null === oU && (oU = {
- ... (15 more removed lines; see GitHub link above)
+       static GetBabylonScriptURL(HH, BH) {
+         if (!HH) return "";
+         if (HH.startsWith(AH._DefaultCdnUrl))
+           if (AH.ScriptBaseUrl) {
+             const BH = AH.ScriptBaseUrl.endsWith("/") ? AH.ScriptBaseUrl.slice(0, -1) : AH.ScriptBaseUrl;
+             HH = HH.replace(AH._DefaultCdnUrl, BH)
+           } else if (AH._CdnVersion) {
+           const BH = `${AH._DefaultCdnUrl}/v${AH._CdnVersion}`;
+           HH.startsWith(BH) || (HH = HH.replace(AH._DefaultCdnUrl, BH))
+         }
+         return HH = AH.ScriptPreprocessUrl(HH), BH && !AH.IsAbsoluteUrl(HH) && (HH = AH.GetAbsoluteUrl(HH)), HH
+       }
+       static LoadBabylonScript(HH, BH, LH, rH) {
+         HH = AH.GetBabylonScriptURL(HH), AH.LoadScript(HH, BH, LH)
+       }
+       static async LoadBabylonScriptAsync(HH) {
+ ... (13 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L794-L817` → after: `L277-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L277-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L277-L491) · [Before (L794-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L794-L817)

```diff
-             if (yU.length > 0)
-               if ("!" === XU.charAt(0)) {
-                 XU = XU.substring(1);
-                 let UU = "g";
-                 if ("!" === XU.charAt(0)) UU = "", XU = XU.substring(1);
-                 else {
-                   const zU = FU.exec(XU);
-                   zU && zU.length >= 2 && (UU = zU[1], XU = XU.substring(UU.length + 1))
-                 }
-                 UU.indexOf("g") < 0 && (UU += "g");
-                 const zU = new RegExp(XU, UU);
-                 let QU = zU.exec(cU);
-                 for (; null !== QU;) {
-                   const {
-                     index: UU
-                   } = QU, XU = DU(yU, QU);
- ... (8 more removed lines; see GitHub link above)
+           }), void 0, void 0, !1, ((HH, BH) => {
+             LH && LH("LoadScript Error", BH)
+           }))
+         }
+       }
+       static _LoadScriptWeb(HH, BH, LH, AH) {
+         let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(HH), BH && BH()
+           } catch (zH) {
+             LH?.(`Unable to load script '${HH}' in worker`, zH)
+           }
+           return
+         }
+         if (!(0, SH.k)()) return void LH?.(`Cannot load script '${HH}' outside of a window or a worker`);
+ ... (199 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L820-L906` → after: `L495-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L495-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L495-L511) · [Before (L820-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L820-L906)

```diff
-     }
-     oU._MaterialPluginClassToMainDefine = {}, oU._MaterialPluginCounter = 0;
- 
-     function DU(UU, XU) {
-       return UU.replace(/\$(\d+)/g, ((UU, zU) => {
-         const cU = Number(zU);
-         return cU < XU.length ? XU[cU] : ""
-       }))
-     }
-     var EU = zU(41134),
-       YU = zU(37863);
-     let NU = (() => {
-         var UU;
-         let XU, zU, QU, AU, FU = [],
-           DU = [],
-           YU = [],
- ... (71 more removed lines; see GitHub link above)
+       static _EndUserMark(HH) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && AH._Performance.mark && (AH._Performance.mark(HH + "-End"), AH._Performance.measure(HH, HH + "-Begin", HH + "-End"))
+       }
+       static _StartPerformanceConsole(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         BH && (AH._StartUserMark(HH, BH), console.time && console.time(HH))
+       }
+       static _EndPerformanceConsole(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         BH && (AH._EndUserMark(HH, BH), console.timeEnd(HH))
+       }
+       static _StartMarkNative(HH) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
+           if (AH._NativePerformanceCounterHandles.has(HH)) AH.Warn(`Performance counter with name ${HH} is already started.`);
+           else {
+             const BH = _native.startPerformanceCounter(HH);
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L995-L1001` → after: `L514-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L514-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L514-L517) · [Before (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L995-L1001)

```diff
-     }
-   },
-   41458: (UU, XU, zU) => {
-     function cU(UU) {
-       return class extends UU {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+       static _EndMarkNative(HH) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const BH = AH._NativePerformanceCounterHandles.get(HH);
+           BH ? (_native.endPerformanceCounter(BH), AH._NativePerformanceCounterHandles.delete(HH)) : AH.Warn(`Performance counter with name ${HH} was not started.`)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L1004-L1054` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L520-L521) · [Before (L1004-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L1004-L1054)

```diff
-     }
-     zU.d(XU, {
-       e: () => cU
-     })
-   },
-   41348: (UU, XU, zU) => {
-     zU.d(XU, {
-       StandardMaterial: () => cU.h
-     });
-     var cU = zU(41351);
-     (0, cU.d)()
-   },
-   41351: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => fU,
-       h: () => rU
- ... (35 more removed lines; see GitHub link above)
+       static get Now() {
+         return zH.e.Now
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L1056-L1266` → after: `L523-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L523-L529) · [Before (L1056-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L1056-L1266)

```diff
-     }
-     class SU extends((0, LU.d)(pU.d)) {}
-     let rU = (() => {
-         var UU, XU, EU, IU, WU, dU, LU, eU, CU, qU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU, xU, JU, jU, KU, bU, TU, hU, UX, XX, zX, cX;
-         let yX, QX, AX, FX, oX, DX, EX, YX, NX, IX, pX, aX, tX, gX, kX, GX, BX, ZX, RX, PX, WX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, vX, VX, sX, nX, mX, lX, xX, JX, jX, KX, bX, TX, hX, Uz, Xz, zz, cz, yz, Qz, Az, Fz, oz, Dz, Ez, Yz, Nz, Iz, pz, az, tz, gz, kz,  … [truncated]
-           Lz = [],
-           ez = [],
-           Cz = [],
-           wz = [],
-           qz = [],
-           Oz = [],
-           Sz = [],
-           rz = [],
-           uz = [],
-           fz = [],
-           iz = [],
- ... (195 more removed lines; see GitHub link above)
+       static GetClassName(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = null;
+         if (!BH && HH.getClassName) LH = HH.getClassName();
+         else {
+           if (HH instanceof Object) {
+             LH = (BH ? HH : Object.getPrototypeOf(HH)).constructor.__bjsclassName__
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L1268-L2685` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L531) · [Before (L1268-L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L1268-L2685)

```diff
-           get useEmissiveAsIllumination() {
-             return (0, cU.e)(this, uU, "f")
-           }
-           set useEmissiveAsIllumination(UU) {
-             (0, cU.f)(this, uU, UU, "f")
-           }
-           get linkEmissiveWithDiffuse() {
-             return (0, cU.e)(this, fU, "f")
-           }
-           set linkEmissiveWithDiffuse(UU) {
-             (0, cU.f)(this, fU, UU, "f")
-           }
-           get useSpecularOverAlpha() {
-             return (0, cU.e)(this, iU, "f")
-           }
-           set useSpecularOverAlpha(UU) {
- ... (1402 more removed lines; see GitHub link above)
+           LH || (LH = typeof HH)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L2688-L2707` → after: `L535-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L535-L538) · [Before (L2688-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L2688-L2707)

```diff
-     }
-     zU.d(XU, {
-       b: () => cU
-     })
-   },
-   41444: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => cU
-     });
-     class cU {
-       constructor(UU, XU) {
-         this._webGL = {
-           load: UU,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
- ... (4 more removed lines; see GitHub link above)
+       static First(HH, BH) {
+         for (const LH of HH)
+           if (BH(LH)) return LH;
+         return null
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L2709-L2712` → after: `L540-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L540-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L540-L550) · [Before (L2709-L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L2709-L2712)

```diff
-       getLoadCallback(UU) {
-         const XU = 1 === UU ? this._webGPU : this._webGL;
-         return XU.loaded ? void 0 : async () => {
-           await this._loadAsync(XU)
+       static getFullClassName(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = null,
+           AH = null;
+         if (!BH && HH.getClassName) LH = HH.getClassName();
+         else {
+           if (HH instanceof Object) {
+             const rH = BH ? HH : Object.getPrototypeOf(HH);
+             LH = rH.constructor.__bjsclassName__, AH = rH.constructor.__bjsmoduleName__
+           }
+           LH || (LH = typeof HH)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L2715-L2725` → after: `L554-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L554-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L554-L559) · [Before (L2715-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L2715-L2725)

```diff
-       async _loadAsync(UU) {
-         if (UU.loaded) return;
-         let XU = UU.loadPromise;
-         const zU = null === XU;
-         zU && (XU = Promise.all(UU.load()), UU.loadPromise = XU);
-         let cU = !1;
-         try {
-           await XU, cU = !0
-         } finally {
-           zU && this._completeLoad(UU, cU)
-         }
+       static async DelayAsync(HH) {
+         await new Promise((BH => {
+           setTimeout((() => {
+             BH()
+           }), HH)
+         }))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L2727-L2728` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/284.js#L561-L562) · [Before (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/284.js#L2727-L2728)

```diff
-       _completeLoad(UU, XU) {
-         UU.loaded = XU, UU.loadPromise = null
+       static IsSafari() {
+         return !!(0, SH.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (175 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L4)

```diff
-   41383: (UU, XU, zU) => {
+   41721: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L6)

```diff
-       e: () => cU
+       c: () => AH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L12` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L8) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L8-L12)

```diff
-     class cU {
-       constructor(UU, XU, zU) {
-         this.bu = UU, this.bv = XU, this.distance = zU, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
+     let AH = !1
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L14` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L10) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L14)

```diff
-   41389: (UU, XU, zU) => {
+   41283: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L18-L20` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L14-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L18-L20)

```diff
-     var cU = zU(37827),
-       yU = zU(37819),
-       QU = zU(37825);
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37997),
+       hH = LH(37963),
+       tH = LH(37989),
+       zH = LH(38790),
+       CH = LH(41312);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L22-L44` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L22-L23) · [Before (L22-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L22-L44)

```diff
-       constructor(UU, XU, zU) {
-         this.vectors = (0, cU.d)(8, yU.q.Zero), this.center = yU.q.Zero(), this.centerWorld = yU.q.Zero(), this.extendSize = yU.q.Zero(), this.extendSizeWorld = yU.q.Zero(), this.directions = (0, cU.d)(3, yU.q.Zero), this.vectorsWorld = (0, cU.d)(8, yU.q.Zero), this.minimumWorld  … [truncated]
-       }
-       reConstruct(UU, XU, zU) {
-         const cU = UU.x,
-           QU = UU.y,
-           AU = UU.z,
-           FU = XU.x,
-           oU = XU.y,
-           DU = XU.z,
-           EU = this.vectors;
-         this.minimum.sUU(cU, QU, AU), this.maximum.sUU(FU, oU, DU), EU[0].sUU(cU, QU, AU), EU[1].sUU(FU, oU, DU), EU[2].sUU(FU, QU, AU), EU[3].sUU(cU, oU, AU), EU[4].sUU(cU, QU, DU), EU[5].sUU(FU, oU, AU), EU[6].sUU(cU, oU, DU), EU[7].sUU(FU, QU, DU), XU.addToRef(UU, this.center) … [truncated]
-       }
-       scale(UU) {
-         const XU = AU._TmpVector3,
-           zU = this.maximum.subtractToRef(this.minimum, XU[0]),
- ... (7 more removed lines; see GitHub link above)
+       get wrapU() {
+         return this._wrapU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L46-L47` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L25-L26) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L46-L47)

```diff
-       getWorldMatrix() {
-         return this._worldMatrix
+       set wrapU(HH) {
+         this._wrapU = HH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L49-L70` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L28-L29) · [Before (L49-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L49-L70)

```diff
-       _update(UU) {
-         const XU = this.minimumWorld,
-           zU = this.maximumWorld,
-           cU = this.directions,
-           QU = this.vectorsWorld,
-           AU = this.vectors;
-         if (UU.isIdentity()) {
-           XU.YL(this.minimum), zU.YL(this.maximum);
-           for (let UU = 0; UU < 8; ++UU) QU[UU].YL(AU[UU]);
-           this.extendSizeWorld.YL(this.extendSize), this.centerWorld.YL(this.center)
-         } else {
-           XU.IUU(Number.MAX_VALUE), zU.IUU(-Number.MAX_VALUE);
-           for (let cU = 0; cU < 8; ++cU) {
-             const FU = QU[cU];
-             yU.q.TransformCoordinatesToRef(AU[cU], UU, FU), XU.minimizeInPlace(FU), zU.maximizeInPlace(FU)
-           }
- ... (6 more removed lines; see GitHub link above)
+       get wrapV() {
+         return this._wrapV
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L72-L73` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L31-L32) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L72-L73)

```diff
-       isCompletelyInFrustum(UU) {
-         return AU.IsCompletelyInFrustum(this.vectorsWorld, UU)
+       set wrapV(HH) {
+         this._wrapV = HH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L75-L88` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L34-L35) · [Before (L75-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L75-L88)

```diff
-       intersectsPoint(UU) {
-         const XU = this.minimumWorld,
-           zU = this.maximumWorld,
-           cU = XU.x,
-           yU = XU.y,
-           AU = XU.z,
-           FU = zU.x,
-           oU = zU.y,
-           DU = zU.z,
-           EU = UU.x,
-           YU = UU.y,
-           NU = UU.z,
-           IU = -QU.c;
-         return !(FU - EU < IU || IU > EU - cU) && (!(oU - YU < IU || IU > YU - yU) && !(DU - NU < IU || IU > NU - AU))
+       get coordinatesMode() {
+         return 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L90-L91` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L37-L38) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L90-L91)

```diff
-       intersectsSphere(UU) {
-         return AU.IntersectsSphere(this.minimumWorld, this.maximumWorld, UU.centerWorld, UU.radiusWorld)
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L93-L108` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L40-L41) · [Before (L93-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L93-L108)

```diff
-       intersectsMinMax(UU, XU) {
-         const zU = this.minimumWorld,
-           cU = this.maximumWorld,
-           yU = zU.x,
-           QU = zU.y,
-           AU = zU.z,
-           FU = cU.x,
-           oU = cU.y,
-           DU = cU.z,
-           EU = UU.x,
-           YU = UU.y,
-           NU = UU.z,
-           IU = XU.x,
-           pU = XU.y,
-           aU = XU.z;
-         return !(FU < EU || yU > IU) && (!(oU < YU || QU > pU) && !(DU < NU || AU > aU))
+       set isCube(HH) {
+         this._texture && (this._texture.isCube = HH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L110-L111` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L43-L44) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L110-L111)

```diff
-       dispose() {
-         this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L113-L114` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L46-L47) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L113-L114)

```diff
-       static Intersects(UU, XU) {
-         return UU.intersectsMinMax(XU.minimumWorld, XU.maximumWorld)
+       set is3D(HH) {
+         this._texture && (this._texture.is3D = HH)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L116-L119` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L49-L50) · [Before (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L116-L119)

```diff
-       static IntersectsSphere(UU, XU, zU, cU) {
-         const QU = AU._TmpVector3[0];
-         yU.q.ClampToRef(zU, UU, XU, QU);
-         return yU.q.DistanceSquared(zU, QU) <= cU * cU
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L121-L127` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L52-L53) · [Before (L121-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L121-L127)

```diff
-       static IsCompletelyInFrustum(UU, XU) {
-         for (let zU = 0; zU < 6; ++zU) {
-           const cU = XU[zU];
-           for (let XU = 0; XU < 8; ++XU)
-             if (cU.dotCoordinate(UU[XU]) < 0) return !1
-         }
-         return !0
+       set is2DArray(HH) {
+         this._texture && (this._texture.is2DArray = HH)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L129-L139` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L55-L56) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L129-L139)

```diff
-       static IsInFrustum(UU, XU) {
-         for (let zU = 0; zU < 6; ++zU) {
-           let cU = !0;
-           const yU = XU[zU];
-           for (let XU = 0; XU < 8; ++XU)
-             if (yU.dotCoordinate(UU[XU]) >= 0) {
-               cU = !1;
-               break
-             } if (cU) return !1
-         }
-         return !0
+       getClassName() {
+         return "ThinTexture"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L141-L153` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L58-L59) · [Before (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L141-L153)

```diff
-     }
-     AU._TmpVector3 = (0, cU.d)(3, yU.q.Zero)
-   },
-   41387: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => YU
-     });
-     var cU = zU(37827),
-       yU = zU(37819),
-       QU = zU(41389);
-     class AU {
-       constructor(UU, XU, zU) {
-         this.center = yU.q.Zero(), this.centerWorld = yU.q.Zero(), this.minimum = yU.q.Zero(), this.maximum = yU.q.Zero(), this.reConstruct(UU, XU, zU)
+       static _IsRenderTargetWrapper(HH) {
+         return void 0 !== HH?.shareDepth
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L155-L158` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L61-L62) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L155-L158)

```diff
-       reConstruct(UU, XU, zU) {
-         this.minimum.YL(UU), this.maximum.YL(XU);
-         const cU = yU.q.Distance(UU, XU);
-         XU.addToRef(UU, this.center).scaleInPlace(.5), this.radius = .5 * cU, this._update(zU || yU.e.IdentityReadOnly)
+       constructor(HH) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = CH.c.Zero(), this._cachedBaseSize = CH.c.Zero(), this._initialSamplingMode = 2, this._texture = EH. … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L160-L169` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L64-L65) · [Before (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L160-L169)

```diff
-       scale(UU) {
-         const XU = AU._TmpVector3,
-           zU = this.maximum.subtractToRef(this.minimum, XU[0]),
-           cU = zU.length();
-         zU.normalizeFromLength(cU);
-         const yU = cU * UU,
-           QU = zU.scaleInPlace(.5 * yU),
-           FU = this.center.subtractToRef(QU, XU[1]),
-           oU = this.center.addToRef(QU, XU[2]);
-         return this.reConstruct(FU, oU, this._worldMatrix), this
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L171-L172` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L67-L69) · [Before (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L171-L172)

```diff
-       getWorldMatrix() {
-         return this._worldMatrix
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L174-L179` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L71-L74) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L174-L179)

```diff
-       _update(UU) {
-         if (UU.isIdentity()) this.centerWorld.YL(this.center), this.radiusWorld = this.radius;
-         else {
-           yU.q.TransformCoordinatesToRef(this.center, UU, this.centerWorld);
-           const XU = AU._TmpVector3[0];
-           yU.q.TransformNormalFromFloatsToRef(1, 1, 1, UU, XU), this.radiusWorld = Math.max(Math.abs(XU.x), Math.abs(XU.y), Math.abs(XU.z)) * this.radius
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L182-L352` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L78-L79) · [Before (L182-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L182-L352)

```diff
-       isInFrustum(UU) {
-         const XU = this.centerWorld,
-           zU = this.radiusWorld;
-         for (let cU = 0; cU < 6; cU++)
-           if (UU[cU].dotCoordinate(XU) <= -zU) return !1;
-         return !0
-       }
-       isCenterInFrustum(UU) {
-         const XU = this.centerWorld;
-         for (let zU = 0; zU < 6; zU++)
-           if (UU[zU].dotCoordinate(XU) < 0) return !1;
-         return !0
-       }
-       intersectsPoint(UU) {
-         const XU = yU.q.DistanceSquared(this.centerWorld, UU);
-         return !(this.radiusWorld * this.radiusWorld < XU)
- ... (155 more removed lines; see GitHub link above)
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L354-L355` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L81-L82) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L354-L355)

```diff
-       addFallback(UU, XU) {
-         this._defines[UU] || (UU < this._currentRank && (this._currentRank = UU), UU > this._maxRank && (this._maxRank = UU), this._defines[UU] = new Array), this._defines[UU].push(XU)
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L357-L358` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L84-L86) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L357-L358)

```diff
-       addCPUSkinningFallback(UU, XU) {
-         this._mesh = XU, UU < this._currentRank && (this._currentRank = UU), UU > this._maxRank && (this._maxRank = UU)
+       updateSamplingMode(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(HH, this._texture, this._texture.generateMipMaps && BH)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L360-L361` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L88-L89) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L360-L361)

```diff
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L363-L387` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L91-L92) · [Before (L363-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L363-L387)

```diff
-       reduce(UU, XU) {
-         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
-           this._mesh.computeBonesUsingShaders = !1, UU = UU.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), XU._bonesComputationForcedToCPU = !0;
-           const zU = this._mesh.nS();
-           for (let UU = 0; UU < zU.meshes.length; UU++) {
-             const cU = zU.meshes[UU];
-             if (cU.material) {
-               if (cU.computeBonesUsingShaders && 0 !== cU.numBoneInfluencers)
-                 if (cU.material.getEffect() === XU) cU.computeBonesUsingShaders = !1;
-                 else if (cU.uB)
-                 for (const UU of cU.uB) {
-                   if (UU.effect === XU) {
-                     cU.computeBonesUsingShaders = !1;
-                     break
-                   }
-                 }
- ... (9 more removed lines; see GitHub link above)
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L390-L405` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L95-L96) · [Before (L390-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L390-L405)

```diff
-   },
-   41374: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => kU
-     });
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(41205),
-       AU = zU(37846),
-       FU = zU(37841),
-       oU = zU(41378),
-       DU = zU(41228),
-       EU = zU(39493),
-       YU = zU(38505),
-       NU = zU(41395),
-       IU = zU(41134);
+     var XH, GH = LH(41319),
+       YH = LH(41169);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L408-L411` → after: `L99-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L99-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L99-L145) · [Before (L408-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L408-L411)

```diff
-       let XU, zU, QU, AU, FU, oU, DU, EU, YU, NU, pU, aU, tU = [];
-       return UU = class {
-         constructor() {
-           this._func = (0, cU.n)(this, tU), this.reset()
+       let BH, LH, CH, XH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH = EH,
+         qH = [],
+         gH = [],
+         NH = [],
+         RH = [],
+         jH = [],
+         nH = [],
+         FH = [],
+         DH = [],
+         wH = [],
+         ZH = [],
+         dH = [],
+         aH = [],
+         sH = [],
+         JH = [],
+         iH = [],
+ ... (31 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L413-L414` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L147-L148) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L413-L414)

```diff
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
+         get coordinatesIndex() {
+           return this._coordinatesIndex
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L416-L417` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L150-L151) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L416-L417)

```diff
-         get func() {
-           return this._func
+         set coordinatesMode(HH) {
+           this._coordinatesMode !== HH && (this._coordinatesMode = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L419-L420` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L153-L154) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L419-L420)

```diff
-         set func(UU) {
-           this._func = UU
+         get coordinatesMode() {
+           return this._coordinatesMode
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L422-L423` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L156-L157) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L422-L423)

```diff
-         get backFunc() {
-           return this._backFunc
+         get wrapU() {
+           return this._wrapU
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L425-L426` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L159-L160) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L425-L426)

```diff
-         set backFunc(UU) {
-           this._backFunc = UU
+         set wrapU(HH) {
+           this._wrapU = HH
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L428-L429` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L162-L163) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L428-L429)

```diff
-         get funcRef() {
-           return this._funcRef
+         get wrapV() {
+           return this._wrapV
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L431-L432` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L165-L166) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L431-L432)

```diff
-         set funcRef(UU) {
-           this._funcRef = UU
+         set wrapV(HH) {
+           this._wrapV = HH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L434-L435` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L168-L169) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L434-L435)

```diff
-         get funcMask() {
-           return this._funcMask
+         get isCube() {
+           return this._texture ? this._texture.isCube : this._isCube
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L437-L438` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L171-L172) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L437-L438)

```diff
-         set funcMask(UU) {
-           this._funcMask = UU
+         set isCube(HH) {
+           this._texture ? this._texture.isCube = HH : this._isCube = HH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L440-L441` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L174-L175) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L440-L441)

```diff
-         get opStencilFail() {
-           return this._opStencilFail
+         get is3D() {
+           return !!this._texture && this._texture.is3D
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L443-L444` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L177-L178) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L443-L444)

```diff
-         set opStencilFail(UU) {
-           this._opStencilFail = UU
+         set is3D(HH) {
+           this._texture && (this._texture.is3D = HH)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L446-L447` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L180-L181) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L446-L447)

```diff
-         get opDepthFail() {
-           return this._opDepthFail
+         get is2DArray() {
+           return !!this._texture && this._texture.is2DArray
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L449-L450` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L183-L184) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L449-L450)

```diff
-         set opDepthFail(UU) {
-           this._opDepthFail = UU
+         set is2DArray(HH) {
+           this._texture && (this._texture.is2DArray = HH)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L452-L453` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L186-L187) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L452-L453)

```diff
-         get opStencilDepthPass() {
-           return this._opStencilDepthPass
+         get gammaSpace() {
+           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L455-L456` → after: `L189-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L189-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L189-L206) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L455-L456)

```diff
-         set opStencilDepthPass(UU) {
-           this._opStencilDepthPass = UU
+         set gammaSpace(HH) {
+           if (this._texture) {
+             if (this._texture._gammaSpace === HH) return;
+             this._texture._gammaSpace = HH
+           } else {
+             if (this._gammaSpace === HH) return;
+             this._gammaSpace = HH
+           }
+           this.yN()?.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this)))
+         }
+         get isRGBD() {
+           return null != this._texture && this._texture._isRGBD
+         }
+         set isRGBD(HH) {
+           HH !== this.isRGBD && (this._texture && (this._texture._isRGBD = HH), this.yN()?.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
+         }
+ ... (2 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L458-L459` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L208-L209) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L458-L459)

```diff
-         get backOpStencilFail() {
-           return this._backOpStencilFail
+         get lodGenerationOffset() {
+           return this._texture ? this._texture._lodGenerationOffset : 0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L461-L462` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L211-L212) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L461-L462)

```diff
-         set backOpStencilFail(UU) {
-           this._backOpStencilFail = UU
+         set lodGenerationOffset(HH) {
+           this._texture && (this._texture._lodGenerationOffset = HH)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L464-L465` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L214-L215) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L464-L465)

```diff
-         get backOpDepthFail() {
-           return this._backOpDepthFail
+         get lodGenerationScale() {
+           return this._texture ? this._texture._lodGenerationScale : 0
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L467-L468` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L217-L218) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L467-L468)

```diff
-         set backOpDepthFail(UU) {
-           this._backOpDepthFail = UU
+         set lodGenerationScale(HH) {
+           this._texture && (this._texture._lodGenerationScale = HH)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L470-L471` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L220-L221) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L470-L471)

```diff
-         get backOpStencilDepthPass() {
-           return this._backOpStencilDepthPass
+         get linearSpecularLOD() {
+           return !!this._texture && this._texture._linearSpecularLOD
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L473-L474` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L223-L224) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L473-L474)

```diff
-         set backOpStencilDepthPass(UU) {
-           this._backOpStencilDepthPass = UU
+         set linearSpecularLOD(HH) {
+           this._texture && (this._texture._linearSpecularLOD = HH)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L476-L477` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L226-L227) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L476-L477)

```diff
-         get mask() {
-           return this._mask
+         get irradianceTexture() {
+           return this._texture ? this._texture._irradianceTexture : null
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L479-L480` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L229-L230) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L479-L480)

```diff
-         set mask(UU) {
-           this._mask = UU
+         set irradianceTexture(HH) {
+           this._texture && (this._texture._irradianceTexture = HH)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L482-L483` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L232-L233) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L482-L483)

```diff
-         get enabled() {
-           return this._enabled
+         get uid() {
+           return this._uid || (this._uid = (0, zH.e)()), this._uid
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L485-L486` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L235-L236) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L485-L486)

```diff
-         set enabled(UU) {
-           this._enabled = UU
+         toString() {
+           return this.name
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L489` → after: `L239-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L239-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L239-L258) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L489)

```diff
-           return "MaterialStencilState"
+           return "BaseTexture"
+         }
+         set onDispose(HH) {
+           this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
+         }
+         get isBlocking() {
+           return !0
+         }
+         get loadingError() {
+           return this._loadingError
+         }
+         get errorObject() {
+           return this._errorObject
+         }
+         constructor(BH) {
+           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (4 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L491-L492` → after: `L260-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L260-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L260-L364) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L491-L492)

```diff
-         copyTo(UU) {
-           IU.b.Clone((() => UU), this)
+         _getEngine() {
+           return this._engine
+         }
+         getTextureMatrix() {
+           return hH.e.IdentityReadOnly
+         }
+         getReflectionTextureMatrix() {
+           return hH.e.IdentityReadOnly
+         }
+         getRefractionTextureMatrix() {
+           return this.getReflectionTextureMatrix()
+         }
+         isReadyOrNotBlocking() {
+           return !this.isBlocking || this.isReady() || this.loadingError
+         }
+         scale(HH) {}
+ ... (89 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L495` → after: `L367-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L367-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L367-L384) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L495)

```diff
-           return IU.b.Serialize(this)
+           let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !HH) return null;
+           const BH = GH.c.Serialize(this);
+           return GH.c.AppendSerializedAnimations(this, BH), BH
+         }
+         static WhenAllReady(HH, BH) {
+           let LH = HH.length;
+           if (0 !== LH)
+             for (let AH = 0; AH < HH.length; AH++) {
+               const rH = HH[AH];
+               if (rH.isReady()) 0 === --LH && BH();
+               else {
+                 const HH = rH.onLoadObservable;
+                 HH ? HH.addOnce((() => {
+                   0 === --LH && BH()
+                 })) : 0 === --LH && BH()
+ ... (2 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L497-L498` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L386-L387) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L497-L498)

```diff
-         parse(UU, XU, zU) {
-           IU.b.Parse((() => this), UU, XU, zU)
+         static _IsScene(HH) {
+           return "Scene" === HH.getClassName()
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L501-L502` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L390-L391) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L501-L502)

```diff
-         const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], (0, cU.j)(UU, null, XU, {
+         const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(eH[Symbol.metadata] ?? null) : void 0;
+         BH = [(0, rH.H)()], LH = [(0, rH.H)()], CH = [(0, rH.H)()], XH = [(0, rH.H)()], YH = [(0, rH.H)("hasAlpha")], uH = [(0, rH.H)("getAlphaFromRGB")], QH = [(0, rH.H)()], WH = [(0, rH.H)("coordinatesIndex")], MH = [(0, rH.H)()], xH = [(0, rH.H)("coordinatesMode")], vH = [(0,  … [truncated]
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L504` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L393) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L504)

```diff
-           name: "func",
+           name: "wrapU",
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L508-L509` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L397-L398) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L508-L509)

```diff
-             has: UU => "func" in UU,
-             get: UU => UU.func
+             has: HH => "wrapU" in HH,
+             get: HH => HH.wrapU
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L512` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L401) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L512)

```diff
-         }, null, tU), (0, cU.j)(UU, null, zU, {
+         }, null, qH), (0, AH.g)(HH, null, PH, {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L514` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L403) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L514)

```diff
-           name: "backFunc",
+           name: "wrapV",
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L518-L519` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L407-L408) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L518-L519)

```diff
-             has: UU => "backFunc" in UU,
-             get: UU => UU.backFunc
+             has: HH => "wrapV" in HH,
+             get: HH => HH.wrapV
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L522` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L411) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L522)

```diff
-         }, null, tU), (0, cU.j)(UU, null, QU, {
+         }, null, qH), (0, AH.g)(HH, null, VH, {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L524` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L413) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L524)

```diff
-           name: "funcRef",
+           name: "isCube",
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L528-L529` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L417-L418) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L528-L529)

```diff
-             has: UU => "funcRef" in UU,
-             get: UU => UU.funcRef
+             has: HH => "isCube" in HH,
+             get: HH => HH.isCube
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L532` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L421) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L532)

```diff
-         }, null, tU), (0, cU.j)(UU, null, AU, {
+         }, null, qH), (0, AH.g)(HH, null, OH, {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L534` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L423) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L534)

```diff
-           name: "funcMask",
+           name: "is3D",
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L538-L539` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L427-L428) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L538-L539)

```diff
-             has: UU => "funcMask" in UU,
-             get: UU => UU.funcMask
+             has: HH => "is3D" in HH,
+             get: HH => HH.is3D
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L542` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L431) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L542)

```diff
-         }, null, tU), (0, cU.j)(UU, null, FU, {
+         }, null, qH), (0, AH.g)(HH, null, bH, {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L544` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L433) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L544)

```diff
-           name: "opStencilFail",
+           name: "is2DArray",
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L548-L549` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L437-L438) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L548-L549)

```diff
-             has: UU => "opStencilFail" in UU,
-             get: UU => UU.opStencilFail
+             has: HH => "is2DArray" in HH,
+             get: HH => HH.is2DArray
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L552` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L441) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L552)

```diff
-         }, null, tU), (0, cU.j)(UU, null, oU, {
+         }, null, qH), (0, AH.g)(HH, null, kH, {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L554` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L443) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L554)

```diff
-           name: "opDepthFail",
+           name: "gammaSpace",
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L558-L559` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L447-L448) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L558-L559)

```diff
-             has: UU => "opDepthFail" in UU,
-             get: UU => UU.opDepthFail
+             has: HH => "gammaSpace" in HH,
+             get: HH => HH.gammaSpace
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L562` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L451) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L562)

```diff
-         }, null, tU), (0, cU.j)(UU, null, DU, {
+         }, null, qH), (0, AH.g)(HH, null, IH, {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L564` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L453) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L564)

```diff
-           name: "opStencilDepthPass",
+           name: "lodGenerationOffset",
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L568-L569` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L457-L458) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L568-L569)

```diff
-             has: UU => "opStencilDepthPass" in UU,
-             get: UU => UU.opStencilDepthPass
+             has: HH => "lodGenerationOffset" in HH,
+             get: HH => HH.lodGenerationOffset
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L572` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L461) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L572)

```diff
-         }, null, tU), (0, cU.j)(UU, null, EU, {
+         }, null, qH), (0, AH.g)(HH, null, fH, {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L574` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L463) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L574)

```diff
-           name: "backOpStencilFail",
+           name: "lodGenerationScale",
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L578-L579` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L467-L468) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L578-L579)

```diff
-             has: UU => "backOpStencilFail" in UU,
-             get: UU => UU.backOpStencilFail
+             has: HH => "lodGenerationScale" in HH,
+             get: HH => HH.lodGenerationScale
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L582` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L471) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L582)

```diff
-         }, null, tU), (0, cU.j)(UU, null, YU, {
+         }, null, qH), (0, AH.g)(HH, null, lH, {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L584` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L473) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L584)

```diff
-           name: "backOpDepthFail",
+           name: "linearSpecularLOD",
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L588-L589` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L477-L478) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L588-L589)

```diff
-             has: UU => "backOpDepthFail" in UU,
-             get: UU => UU.backOpDepthFail
+             has: HH => "linearSpecularLOD" in HH,
+             get: HH => HH.linearSpecularLOD
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L592` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L481) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L592)

```diff
-         }, null, tU), (0, cU.j)(UU, null, NU, {
+         }, null, qH), (0, AH.g)(HH, null, KH, {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L594` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L483) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L594)

```diff
-           name: "backOpStencilDepthPass",
+           name: "irradianceTexture",
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L598-L599` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L487-L488) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L598-L599)

```diff
-             has: UU => "backOpStencilDepthPass" in UU,
-             get: UU => UU.backOpStencilDepthPass
+             has: HH => "irradianceTexture" in HH,
+             get: HH => HH.irradianceTexture
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L602-L604` → after: `L491-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L491-L493) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L602-L604)

```diff
-         }, null, tU), (0, cU.j)(UU, null, pU, {
-           kind: "getter",
-           name: "mask",
+         }, null, qH), (0, AH.g)(null, null, BH, {
+           kind: "field",
+           name: "uniqueId",
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L608-L609` → after: `L497-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L497-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L497-L501) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L608-L609)

```diff
-             has: UU => "mask" in UU,
-             get: UU => UU.mask
+             has: HH => "uniqueId" in HH,
+             get: HH => HH.uniqueId,
+             set: (HH, BH) => {
+               HH.uniqueId = BH
+             }
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L612-L614` → after: `L504-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L504-L506) · [Before (L612-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L612-L614)

```diff
-         }, null, tU), (0, cU.j)(UU, null, aU, {
-           kind: "getter",
-           name: "enabled",
+         }, gH, NH), (0, AH.g)(null, null, LH, {
+           kind: "field",
+           name: "name",
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L618-L619` → after: `L510-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L510-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L510-L514) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L618-L619)

```diff
-             has: UU => "enabled" in UU,
-             get: UU => UU.enabled
+             has: HH => "name" in HH,
+             get: HH => HH.name,
+             set: (HH, BH) => {
+               HH.name = BH
+             }
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L622-L1244` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L517) · [Before (L622-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L622-L1244)

```diff
-         }, null, tU), IU && Object.defineProperty(UU, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: IU
-         })
-       })(), UU
-     })();
-     var aU = zU(41400),
-       tU = zU(41017),
-       gU = zU(40989);
-     let kU = (() => {
-       var UU;
-       let XU, zU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU = [],
-         xU = [],
-         JU = [],
- ... (607 more removed lines; see GitHub link above)
+         }, RH, jH), (0, AH.g)(null, null, CH, {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1246` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L519) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1246)

```diff
-           name: "name",
+           name: "displayName",
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1250-L1251` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L523-L524) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1250-L1251)

```diff
-             has: UU => "name" in UU,
-             get: UU => UU.name,
+             has: HH => "displayName" in HH,
+             get: HH => HH.displayName,
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1253` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L526) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1253)

```diff
-               UU.name = XU
+               HH.displayName = BH
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1257` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L530) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1257)

```diff
-         }, bU, TU), (0, cU.j)(null, null, kU, {
+         }, nH, FH), (0, AH.g)(null, null, XH, {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1270-L1400` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L543) · [Before (L1270-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1270-L1400)

```diff
-         }, hU, UX), (0, cU.j)(null, null, GU, {
-           kind: "field",
-           name: "checkReadyOnEveryCall",
-           static: !1,
-           private: !1,
-           access: {
-             has: UU => "checkReadyOnEveryCall" in UU,
-             get: UU => UU.checkReadyOnEveryCall,
-             set: (UU, XU) => {
-               UU.checkReadyOnEveryCall = XU
-             }
-           },
-           metadata: QU
-         }, XX, zX), (0, cU.j)(null, null, BU, {
-           kind: "field",
-           name: "checkReadyOnlyOnce",
- ... (115 more removed lines; see GitHub link above)
+         }, DH, wH), (0, AH.g)(null, null, YH, {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1402` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L545) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1402)

```diff
-           name: "_needDepthPrePass",
+           name: "_hasAlpha",
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1406-L1407` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L549-L550) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1406-L1407)

```diff
-             has: UU => "_needDepthPrePass" in UU,
-             get: UU => UU._needDepthPrePass,
+             has: HH => "_hasAlpha" in HH,
+             get: HH => HH._hasAlpha,
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1409` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L552) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1409)

```diff
-               UU._needDepthPrePass = XU
+               HH._hasAlpha = BH
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1413` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L556) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1413)

```diff
-         }, ZX, RX), (0, cU.j)(null, null, qU, {
+         }, ZH, dH), (0, AH.g)(null, null, uH, {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1415` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L558) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1415)

```diff
-           name: "disableDepthWrite",
+           name: "_getAlphaFromRGB",
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1419-L1420` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L562-L563) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1419-L1420)

```diff
-             has: UU => "disableDepthWrite" in UU,
-             get: UU => UU.disableDepthWrite,
+             has: HH => "_getAlphaFromRGB" in HH,
+             get: HH => HH._getAlphaFromRGB,
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1422` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L565) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1422)

```diff
-               UU.disableDepthWrite = XU
+               HH._getAlphaFromRGB = BH
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1426` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L569) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1426)

```diff
-         }, PX, WX), (0, cU.j)(null, null, OU, {
+         }, aH, sH), (0, AH.g)(null, null, QH, {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1428` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L571) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1428)

```diff
-           name: "disableColorWrite",
+           name: "level",
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1432-L1433` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L575-L576) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1432-L1433)

```diff
-             has: UU => "disableColorWrite" in UU,
-             get: UU => UU.disableColorWrite,
+             has: HH => "level" in HH,
+             get: HH => HH.level,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1435` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L578) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1435)

```diff
-               UU.disableColorWrite = XU
+               HH.level = BH
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1439` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L582) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1439)

```diff
-         }, dX, LX), (0, cU.j)(null, null, SU, {
+         }, JH, iH), (0, AH.g)(null, null, WH, {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1441` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L584) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1441)

```diff
-           name: "forceDepthWrite",
+           name: "_coordinatesIndex",
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1445-L1446` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L588-L589) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1445-L1446)

```diff
-             has: UU => "forceDepthWrite" in UU,
-             get: UU => UU.forceDepthWrite,
+             has: HH => "_coordinatesIndex" in HH,
+             get: HH => HH._coordinatesIndex,
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1448` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L591) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1448)

```diff
-               UU.forceDepthWrite = XU
+               HH._coordinatesIndex = BH
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1452` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L595) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1452)

```diff
-         }, eX, CX), (0, cU.j)(null, null, rU, {
+         }, pH, yH), (0, AH.g)(null, null, MH, {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1454` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L597) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1454)

```diff
-           name: "depthFunction",
+           name: "optimizeUVAllocation",
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1458-L1459` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L601-L602) · [Before (L1458-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1458-L1459)

```diff
-             has: UU => "depthFunction" in UU,
-             get: UU => UU.depthFunction,
+             has: HH => "optimizeUVAllocation" in HH,
+             get: HH => HH.optimizeUVAllocation,
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1461` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L604) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1461)

```diff
-               UU.depthFunction = XU
+               HH.optimizeUVAllocation = BH
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1465` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L608) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1465)

```diff
-         }, wX, qX), (0, cU.j)(null, null, uU, {
+         }, HB, BB), (0, AH.g)(null, null, xH, {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1467` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L610) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1467)

```diff
-           name: "separateCullingPass",
+           name: "_coordinatesMode",
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1471-L1472` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L614-L615) · [Before (L1471-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1471-L1472)

```diff
-             has: UU => "separateCullingPass" in UU,
-             get: UU => UU.separateCullingPass,
+             has: HH => "_coordinatesMode" in HH,
+             get: HH => HH._coordinatesMode,
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1474` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L617) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1474)

```diff
-               UU.separateCullingPass = XU
+               HH._coordinatesMode = BH
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1478` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L621) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1478)

```diff
-         }, OX, SX), (0, cU.j)(null, null, fU, {
+         }, LB, AB), (0, AH.g)(null, null, TH, {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1480` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L623) · [Before (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1480)

```diff
-           name: "_fogEnabled",
+           name: "wrapR",
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1484-L1485` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L627-L628) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1484-L1485)

```diff
-             has: UU => "_fogEnabled" in UU,
-             get: UU => UU._fogEnabled,
+             has: HH => "wrapR" in HH,
+             get: HH => HH.wrapR,
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1487` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L630) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1487)

```diff
-               UU._fogEnabled = XU
+               HH.wrapR = BH
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1491` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L634) · [Before (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1491)

```diff
-         }, rX, uX), (0, cU.j)(null, null, iU, {
+         }, rB, SB), (0, AH.g)(null, null, UH, {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1493` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L636) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1493)

```diff
-           name: "pointSize",
+           name: "anisotropicFilteringLevel",
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1497-L1498` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L640-L641) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1497-L1498)

```diff
-             has: UU => "pointSize" in UU,
-             get: UU => UU.pointSize,
+             has: HH => "anisotropicFilteringLevel" in HH,
+             get: HH => HH.anisotropicFilteringLevel,
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1500` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L643) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1500)

```diff
-               UU.pointSize = XU
+               HH.anisotropicFilteringLevel = BH
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1504` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L647) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1504)

```diff
-         }, fX, iX), (0, cU.j)(null, null, HU, {
+         }, hB, tB), (0, AH.g)(null, null, mH, {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1506` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L649) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1506)

```diff
-           name: "zOffset",
+           name: "invertZ",
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1510-L1511` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L653-L654) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1510-L1511)

```diff
-             has: UU => "zOffset" in UU,
-             get: UU => UU.zOffset,
+             has: HH => "invertZ" in HH,
+             get: HH => HH.invertZ,
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1513` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L656) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1513)

```diff
-               UU.zOffset = XU
+               HH.invertZ = BH
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1517` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L660) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1517)

```diff
-         }, HX, MX), (0, cU.j)(null, null, MU, {
+         }, zB, CB), (0, AH.g)(null, null, oH, {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1519` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L662) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1519)

```diff
-           name: "zOffsetUnits",
+           name: "lodLevelInAlpha",
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1523-L1524` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L666-L667) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1523-L1524)

```diff
-             has: UU => "zOffsetUnits" in UU,
-             get: UU => UU.zOffsetUnits,
+             has: HH => "lodLevelInAlpha" in HH,
+             get: HH => HH.lodLevelInAlpha,
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1526` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L669) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1526)

```diff
-               UU.zOffsetUnits = XU
+               HH.lodLevelInAlpha = BH
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1530` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L673) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1530)

```diff
-         }, vX, VX), (0, cU.j)(null, null, nU, {
+         }, EB, XB), (0, AH.g)(null, null, cH, {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1532` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L675) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1532)

```diff
-           name: "_isVertexOutputInvariant",
+           name: "isRenderTarget",
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1536-L1537` → after: `L679-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L679-L680) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1536-L1537)

```diff
-             has: UU => "_isVertexOutputInvariant" in UU,
-             get: UU => UU._isVertexOutputInvariant,
+             has: HH => "isRenderTarget" in HH,
+             get: HH => HH.isRenderTarget,
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1539` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L682) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1539)

```diff
-               UU._isVertexOutputInvariant = XU
+               HH.isRenderTarget = BH
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1549-L1555` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L692) · [Before (L1549-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1549-L1555)

```diff
-       })(), UU.TriangleFillMode = 0, UU.WireFrameFillMode = 1, UU.PointFillMode = 2, UU.PointListDrawMode = 3, UU.LineListDrawMode = 4, UU.LineLoopDrawMode = 5, UU.LineStripDrawMode = 6, UU.TriangleStripDrawMode = 7, UU.TriangleFanDrawMode = 8, UU.ClockWiseSideOrientation = 0, UU … [truncated]
-         UU._FresnelDirtyCallBack(XU), UU._MiscDirtyCallBack(XU)
-       }, UU._TextureAndMiscDirtyCallBack = XU => {
-         UU._TextureDirtyCallBack(XU), UU._MiscDirtyCallBack(XU)
-       }, UU._DirtyCallbackArray = [], UU._RunDirtyCallBacks = XU => {
-         for (const zU of UU._DirtyCallbackArray) zU(XU)
-       }, UU
+       })(), HH.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, HH
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1557` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L694) · [Before (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1557)

```diff
-     Object.getOwnPropertyDescriptor(kU.prototype, "pluginManager") || Object.defineProperty(kU.prototype, "pluginManager", (0, gU.i)("Material", "pluginManager"))
+     (XH = uH.prototype).forceSphericalPolynomialsRecompute ?? (XH.forceSphericalPolynomialsRecompute = (0, YH.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(uH.prototype, "sphericalPolynomial") || Object.defineProperty(uH.prototype, "sph … [truncated]
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1559` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L696) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1559)

```diff
-   41413: (UU, XU, zU) => {
+   41777: (HH, BH, LH) => {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1561` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L698-L699) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1561)

```diff
-       b: () => yU
+       d: () => TH,
+       g: () => vH
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1563-L1902` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L701-L711) · [Before (L1563-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1563-L1902)

```diff
-     var cU = zU(41003);
-     class yU {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(UU) {
-         this._DiffuseTextureEnabled !== UU && (this._DiffuseTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
-       }
-       static set BaseWeightTextureEnabled(UU) {
-         this._BaseWeightTextureEnabled !== UU && (this._BaseWeightTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseDiffuseRoughnessTextureEnabled() {
-         return this._BaseDiffuseRoughnessTextureEnabled
- ... (324 more removed lines; see GitHub link above)
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37997),
+       hH = LH(37963),
+       tH = LH(41283),
+       zH = LH(38012),
+       CH = LH(41169),
+       EH = LH(41179),
+       XH = LH(41392),
+       GH = LH(38619),
+       YH = LH(41353);
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1905-L1973` → after: `L714-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L714-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L714-L737) · [Before (L1905-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1905-L1973)

```diff
-       (XU.INSTANCES || XU.THIN_INSTANCES) && pU(UU, !!XU.PREPASS_VELOCITY), XU.INSTANCESCOLOR && UU.push("instanceColor")
-     }
- 
-     function wU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
-         cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         yU = 0;
-       for (let QU = 0; QU < zU && UU["LIGHT" + QU]; QU++) QU > 0 && (yU = cU + QU, XU.addFallback(yU, "LIGHT" + QU)), UU.SHADOWS || (UU["SHADOW" + QU] && XU.addFallback(cU, "SHADOW" + QU), UU["SHADOWPCF" + QU] && XU.addFallback(cU, "SHADOWPCF" + QU), UU["SHADOWPCSS" + QU] && XU.a … [truncated]
-       return yU
-     }
- 
-     function qU(UU, XU, zU, cU, yU, QU, AU) {
-       let FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         DU = arguments.length > 9 ? arguments[9] : void 0,
-         EU = arguments.length > 10 ? arguments[10] : void 0;
- ... (53 more removed lines; see GitHub link above)
+       let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const AH = BH.width,
+         rH = BH.height;
+       if (HH instanceof Float32Array) {
+         let BH = HH.byteLength / HH.BYTES_PER_ELEMENT;
+         const LH = new Uint8Array(BH);
+         for (; --BH >= 0;) {
+           let AH = HH[BH];
+           AH < 0 ? AH = 0 : AH > 1 && (AH = 1), LH[BH] = 255 * AH
+         }
+         HH = LH
+       }
+       const SH = document.createElement("canvas");
+       SH.width = AH, SH.height = rH;
+       const hH = SH.getContext("2d");
+       if (!hH) return null;
+ ... (8 more added lines; see GitHub link above)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1976-L2014` → after: `L740-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L740-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L740-L746) · [Before (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L1976-L2014)

```diff
-     function rU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
-         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       if (XU && FU.b.ReflectionTextureEnabled) {
-         if (!XU.isReadyOrNotBlocking()) return !1;
-         zU._needNormals = !0, zU.REFLECTION = !0, zU.GAMMAREFLECTION = XU.gammaSpace, zU.RGBDREFLECTION = XU.isRGBD, zU.LODINREFLECTIONALPHA = XU.lodLevelInAlpha, zU.LINEARSPECULARREFLECTION = XU.linearSpecularLOD, zU.USEIRRADIANCEMAP = !1, zU.LODBASEDMICROSFURACE = UU.qp().getCa … [truncated]
-         const AU = UU.qp();
-         switch (cU && yU > 0 ? (zU.NUM_SAMPLES = "" + yU, AU._features.needTypeSuffixInShaderConstants && (zU.NUM_SAMPLES = zU.NUM_SAMPLES + "u"), zU.REALTIME_FILTERING = !0, UU.iblCdfGenerator && (zU.IBL_CDF_FILTERING = !0)) : zU.REALTIME_FILTERING = !1, zU.INVERTCUBICMAP = 6 == … [truncated]
-           case 0:
-             zU.REFLECTIONMAP_EXPLICIT = !0;
-             break;
-           case 2:
-             zU.REFLECTIONMAP_PLANAR = !0;
-             break;
-           case 4:
- ... (23 more removed lines; see GitHub link above)
+     function QH(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const AH = HH.getInternalTexture();
+       if (!AH) return null;
+       const rH = HH._readPixelsSync(BH, LH);
+       return rH ? uH(rH, HH.getSize(), AH.invertY) : null
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2016-L2035` → after: `L748-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L748-L754) · [Before (L2016-L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2016-L2035)

```diff
- 
-     function uU(UU, XU, zU, cU, yU, AU, FU) {
-       switch (FU.needNormals = !0, void 0 === yU["LIGHT" + cU] && (FU.needRebuild = !0), yU["LIGHT" + cU] = !0, yU["SPOTLIGHT" + cU] = !1, yU["HEMILIGHT" + cU] = !1, yU["POINTLIGHT" + cU] = !1, yU["DIRLIGHT" + cU] = !1, yU["AREALIGHT" + cU] = !1, yU["CLUSTLIGHT" + cU] = !1, zU.pr … [truncated]
-         case QU.e.FALLOFF_GLTF:
-           yU["LIGHT_FALLOFF_GLTF" + cU] = !0;
-           break;
-         case QU.e.FALLOFF_PHYSICAL:
-           yU["LIGHT_FALLOFF_PHYSICAL" + cU] = !0;
-           break;
-         case QU.e.FALLOFF_STANDARD:
-           yU["LIGHT_FALLOFF_STANDARD" + cU] = !0
-       }
-       if (AU && !zU.specular.equalsFloats(0, 0, 0) && (FU.specularEnabled = !0), yU["SHADOW" + cU] = !1, yU["SHADOWCSM" + cU] = !1, yU["SHADOWCSMDEBUG" + cU] = !1, yU["SHADOWCSMNUM_CASCADES" + cU] = !1, yU["SHADOWCSMUSESHADOWMAXZ" + cU] = !1, yU["SHADOWCSMNOBLEND" + cU] = !1, yU[ … [truncated]
-         const XU = zU.getShadowGenerator(UU.activeCamera) ?? zU.getShadowGenerator();
-         if (XU) {
-           const UU = XU.getShadowMap();
- ... (4 more removed lines; see GitHub link above)
+     async function WH(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const AH = HH.getInternalTexture();
+       if (!AH) return null;
+       const rH = await HH.readPixels(BH, LH);
+       return rH ? uH(rH, HH.getSize(), AH.invertY) : null
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2037-L2048` → after: `L756-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L756-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L756-L789) · [Before (L2037-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2037-L2048)

```diff
- 
-     function fU(UU, XU, zU, cU, yU) {
-       let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         oU = function(UU, XU) {
-           let zU = !1;
-           if (UU.activeCamera) {
-             const cU = XU.CAMERA_ORTHOGRAPHIC ? 1 : 0,
-               yU = XU.CAMERA_PERSPECTIVE ? 1 : 0,
-               QU = 1 === UU.activeCamera.mode ? 1 : 0,
-               AU = 0 === UU.activeCamera.mode ? 1 : 0;
-             (cU ^ QU || yU ^ AU) && (XU.CAMERA_ORTHOGRAPHIC = 1 === QU, XU.CAMERA_PERSPECTIVE = 1 === AU, zU = !0)
+     var MH = LH(41721),
+       xH = LH(41319);
+     let vH = (() => {
+         var HH;
+         let BH, LH, uH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH = tH.e,
+           fH = [],
+           lH = [],
+           KH = [],
+           cH = [],
+           eH = [],
+           qH = [],
+           gH = [],
+           NH = [],
+           RH = [],
+           jH = [],
+           nH = [],
+ ... (18 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2050-L2081` → after: `L791-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L791-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L791-L851) · [Before (L2050-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2050-L2081)

```diff
-           return zU
-         }(UU, cU);
-       !1 !== QU && (oU = (0, AU.i)(zU, UU, cU)), cU.DEPTHPREPASS !== !XU.getColorWrite() && (cU.DEPTHPREPASS = !cU.DEPTHPREPASS, oU = !0), cU.INSTANCES !== yU && (cU.INSTANCES = yU, oU = !0), cU.THIN_INSTANCES !== FU && (cU.THIN_INSTANCES = FU, oU = !0), oU && cU.markAsUnprocesse … [truncated]
-     }
-     const iU = 40,
-       HU = 64,
-       MU = new WeakMap,
-       vU = new WeakSet;
- 
-     function VU(UU, XU, zU, yU) {
-       let QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-         FU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       if (!XU._areAttributesDirty && XU._needNormals === XU._normals && XU._needUVs === XU._uvs) return !1;
-       XU._normals = XU._needNormals, XU._uvs = XU._needUVs, XU.NORMAL = XU._needNormals && UU.isVerticesDataPresent("normal"), XU._needNormals && UU.isVerticesDataPresent("tangent") && (XU.TANGENT = !0);
-       for (let cU = 1; cU <= 6; ++cU) XU["UV" + cU] = !!XU._needUVs && UU.isVerticesDataPresent(`uv${1===cU?"":cU}`);
- ... (16 more removed lines; see GitHub link above)
+           get noMipmap() {
+             return this._noMipmap
+           }
+           get mimeType() {
+             return this._mimeType
+           }
+           set isBlocking(HH) {
+             this._isBlocking = HH
+           }
+           get isBlocking() {
+             return this._isBlocking
+           }
+           get invertY() {
+             return this._invertY
+           }
+           constructor(BH, LH, rH, hH) {
+ ... (45 more added lines; see GitHub link above)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2083-L2092` → after: `L853-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L853-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L853-L900) · [Before (L2083-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2083-L2092)

```diff
-             const AU = !0 === XU.MULTIVIEW,
-               FU = 2 * XU.BonesPerMesh + (AU ? 1 : 0);
-             if (MU.get(UU.skeleton) !== FU) {
-               MU.set(UU.skeleton, FU);
-               const zU = yU.qp().getCaps().maxVertexUniformVectors;
-               if (zU && !vU.has(UU.skeleton)) {
-                 const yU = 4 * XU.BonesPerMesh,
-                   QU = AU ? HU : iU,
-                   FU = Math.max(zU - QU, 0);
-                 (yU > FU || AU && 3 * yU > zU) && (vU.add(UU.skeleton), cU.b.Warn(`Skeleton "${UU.skeleton.name}": ${UU.skeleton.bones.length} bones stored as vertex uniforms use ${yU} of ~${FU} usable uniform vectors${AU?" (multiview)":""} on a device reporting ${zU}. This can e … [truncated]
+           }
+           updateURL(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               LH = arguments.length > 2 ? arguments[2] : void 0,
+               AH = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.yN().markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = HH), this.url = HH, this._buffer = BH, this._forcedExtension = AH, this.delayLoadState = 4;
+             const rH = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               rH ? rH() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), LH && LH()
+             }, this.delayLoad()
+           }
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const HH = this.yN();
+             if (!HH) return;
+             let BH = this.url;
+ ... (32 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2096-L2325` → after: `L907-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L907-L922) · [Before (L2096-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2096-L2325)

```diff
-         } else XU.NUM_BONE_INFLUENCERS = 0, XU.BonesPerMesh = 0, void 0 !== XU.BONETEXTURE && (XU.BONETEXTURE = !1)
-       }(UU, XU), QU && function(UU, XU) {
-         const zU = UU.morphTargetManager;
-         zU ? (XU.MORPHTARGETS_UV = zU.supportsUVs && XU.UV1, XU.MORPHTARGETS_UV2 = zU.supportsUV2s && XU.UV2, XU.MORPHTARGETS_TANGENT = zU.supportsTangents && XU.TANGENT, XU.MORPHTARGETS_NORMAL = zU.supportsNormals && XU.NORMAL, XU.MORPHTARGETS_POSITION = zU.supportsPositions, XU … [truncated]
-       }(UU, XU), FU && function(UU, XU) {
-         const zU = UU.bakedVertexAnimationManager;
-         XU.BAKED_VERTEX_ANIMATION_TEXTURE = !(!zU || !zU.isEnabled)
-       }(UU, XU), !0
-     }
- 
-     function sU(UU, XU) {
-       if (UU.activeCamera) {
-         const zU = XU.MULTIVIEW;
-         XU.MULTIVIEW = null !== UU.activeCamera.outputRenderTarget && UU.activeCamera.outputRenderTarget.getViewCount() > 1, XU.MULTIVIEW != zU && XU.markAsUnprocessed()
-       }
-     }
- ... (214 more removed lines; see GitHub link above)
+           clone() {
+             const BH = {
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
+             };
+             return xH.c.Clone((() => new HH(this._texture ? this._texture.url : null, this.yN(), BH)), this)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2327-L2333` → after: `L924-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L924-L935) · [Before (L2327-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2327-L2333)

```diff
-         }
-         static extractMinAndMax(UU, XU, zU, cU, yU, QU) {
-           for (let AU = XU, FU = XU * cU; AU < XU + zU; AU++, FU += cU) {
-             const XU = UU[FU],
-               zU = UU[FU + 1],
-               cU = UU[FU + 2];
-             yU.minimizeInPlaceFromFloats(XU, zU, cU), QU.maximizeInPlaceFromFloats(XU, zU, cU)
+           serialize() {
+             const BH = this.name;
+             HH.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
+             const LH = super.serialize(HH._SerializeInternalTextureUniqueId);
+             if (!LH) return null;
+             if (HH.SerializeBuffers || HH.ForceSerializeBuffers)
+               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) LH.base64String = this._buffer, LH.name = LH.name.replace("data:", "");
+               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
+               const HH = this.mimeType || "image/png";
+               LH.base64String = `data:${HH};base64,${(0,YH.f)(this._buffer)}`
+             } else(HH.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (LH.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? QH(this) : WH(this));
+             return LH.invertY = this._invertY, LH.samplingMode = this.samplingMode, LH._creationFlags = this._creationFlags, LH._useSRGBBuffer = this._useSRGBBuffer, HH._SerializeInternalTextureUniqueId && (LH.internalTextureUniqueId = this._texture?.uniqueId), LH.internalTexture … [truncated]
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2335-L2379` → after: `L937-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L937-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L937-L1228) · [Before (L2335-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2335-L2379)

```diff
-         }
-       }, (() => {
-         const AU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         XU = [QU.e.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], zU = [QU.e.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, cU.j)(UU, null, XU, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
-           private: !1,
-           access: {
-             has: UU => "extractMinAndMaxIndexed" in UU,
-             get: UU => UU.extractMinAndMaxIndexed
-           },
- ... (29 more removed lines; see GitHub link above)
+           getClassName() {
+             return "Texture"
+           }
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+           }
+           static Parse(BH, LH, AH) {
+             if (BH.customType) {
+               const HH = XH.c.Instantiate(BH.customType).Parse(BH, LH, AH);
+               return BH.samplingMode && HH.updateSamplingMode && HH._samplingMode && HH._samplingMode !== BH.samplingMode && HH.updateSamplingMode(BH.samplingMode), HH
+             }
+             if (BH.isCube && !BH.isRenderTarget) return HH._CubeTextureParser(BH, LH, AH);
+             const rH = void 0 !== BH.internalTextureUniqueId;
+             if (!BH.name && !BH.isRenderTarget && !rH) return null;
+             let SH;
+             if (rH) {
+ ... (276 more added lines; see GitHub link above)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2381-L2389` → after: `L1230-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1230-L1231) · [Before (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2381-L2389)

```diff
-     function oU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         QU = arguments.length > 4 ? arguments[4] : void 0;
-       const FU = new yU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         oU = new yU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return QU || (QU = 3), AU.extractMinAndMax(UU, XU, zU, QU, FU, oU), cU && (FU.x -= FU.x * cU.x + cU.y, FU.y -= FU.y * cU.x + cU.y, FU.z -= FU.z * cU.x + cU.y, oU.x += oU.x * cU.x + cU.y, oU.y += oU.y * cU.x + cU.y, oU.z += oU.z * cU.x + cU.y), {
-         minimum: FU,
-         maximum: oU
-       }
+     function TH() {
+       PH || (PH = !0, (0, zH.f)("BABYLON.Texture", vH), xH.c._TextureParser = vH.Parse)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2392` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1234) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2392)

```diff
-   41378: (UU, XU, zU) => {
+   41312: (HH, BH, LH) => {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2394` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1236) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2394)

```diff
-       d: () => EU
+       c: () => AH
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2403-L2506` → after: `L1239-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1239-L1240) · [Before (L2403-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2403-L2506)

```diff
-       get materialDefines() {
-         const UU = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
-         return "string" === typeof UU ? null : UU
-       }
-       set materialDefines(UU) {
-         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = UU
-       }
-       _getDrawWrapper(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         UU = UU ?? this._engine.currentRenderPassId;
-         let zU = this._drawWrappers[UU];
-         return !zU && XU && (this._drawWrappers[UU] = zU = new oU.c(this._mesh.nS().qp())), zU
-       }
-       _removeDrawWrapper(UU) {
-         let XU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[UU]?.dispose(XU), this._drawWrappers[UU] = void 0
- ... (88 more removed lines; see GitHub link above)
+       constructor(HH, BH) {
+         this.width = HH, this.height = BH
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2508-L2510` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1242-L1243) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2508-L2510)

```diff
-       updateBoundingInfo(UU) {
-         let XU = this.gM();
-         return XU || (this.refreshBoundingInfo(), XU = this.gM()), XU && XU.update(UU), this
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2512-L2514` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1245-L1246) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2512-L2514)

```diff
-       isInFrustum(UU) {
-         const XU = this.gM();
-         return !!XU && XU.isInFrustum(UU, this._mesh.cullingStrategy)
+       getClassName() {
+         return "Size"
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2516-L2518` → after: `L1248-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1248-L1250) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2516-L2518)

```diff
-       isCompletelyInFrustum(UU) {
-         const XU = this.gM();
-         return !!XU && XU.isCompletelyInFrustum(UU)
+       getHashCode() {
+         let HH = 0 | this.width;
+         return HH = 397 * HH ^ this.height, HH
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2520-L2521` → after: `L1252-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1252-L1253) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2520-L2521)

```diff
-       render(UU) {
-         return this._renderingMesh.render(this, UU, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       Tm(HH) {
+         this.width = HH.width, this.height = HH.height
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2523-L2534` → after: `L1255-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1255-L1256) · [Before (L2523-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2523-L2534)

```diff
-       _getLinesIndexBuffer(UU, XU) {
-         if (!this._linesIndexBuffer) {
-           const zU = 6 * Math.floor(this.indexCount / 3),
-             cU = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(zU) : new Uint16Array(zU);
-           let yU = 0;
-           if (0 === UU.length)
-             for (let UU = this.indexStart; UU < this.indexStart + this.indexCount; UU += 3) cU[yU++] = UU, cU[yU++] = UU + 1, cU[yU++] = UU + 1, cU[yU++] = UU + 2, cU[yU++] = UU + 2, cU[yU++] = UU;
-           else
-             for (let XU = this.indexStart; XU < this.indexStart + this.indexCount; XU += 3) cU[yU++] = UU[XU], cU[yU++] = UU[XU + 1], cU[yU++] = UU[XU + 1], cU[yU++] = UU[XU + 2], cU[yU++] = UU[XU + 2], cU[yU++] = UU[XU];
-           this._linesIndexBuffer = XU.createIndexBuffer(cU), this._linesIndexCount = cU.length
-         }
-         return this._linesIndexBuffer
+       SBH(HH, BH) {
+         return this.width = HH, this.height = BH, this
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2536-L2538` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1258-L1259) · [Before (L2536-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2536-L2538)

```diff
-       canIntersects(UU) {
-         const XU = this.gM();
-         return !!XU && UU.intersectsBox(XU.boundingBox)
+       set(HH, BH) {
+         return this.SBH(HH, BH)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2540-L2554` → after: `L1261-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1261-L1262) · [Before (L2540-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2540-L2554)

```diff
-       intersects(UU, XU, zU, cU, yU) {
-         const QU = this.Hp();
-         if (!QU) return null;
-         let AU = 3,
-           FU = !1;
-         switch (QU.fillMode) {
-           case 3:
-           case 5:
-           case 6:
-           case 8:
-             return null;
-           case 7:
-             AU = 1, FU = !0
-         }
-         return 4 === QU.fillMode ? zU.length ? this._intersectLines(UU, XU, zU, this._mesh.intersectionThreshold, cU) : this._intersectUnIndexedLines(UU, XU, zU, this._mesh.intersectionThreshold, cU) : !zU.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(UU, XU … [truncated]
+       multiplyByFloats(HH, BH) {
+         return new AH(this.width * HH, this.height * BH)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2556-L2564` → after: `L1264-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1264-L1265) · [Before (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2556-L2564)

```diff
-       _intersectLines(UU, XU, zU, cU, yU) {
-         let AU = null;
-         for (let FU = this.indexStart; FU < this.indexStart + this.indexCount; FU += 2) {
-           const oU = XU[zU[FU]],
-             DU = XU[zU[FU + 1]],
-             EU = UU.intersectionSegment(oU, DU, cU);
-           if (!(EU < 0) && ((yU || !AU || EU < AU.distance) && (AU = new QU.e(null, null, EU), AU.faceId = FU / 2, yU))) break
-         }
-         return AU
+       clone() {
+         return new AH(this.width, this.height)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2566-L2599` → after: `L1267-L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1267-L1268) · [Before (L2566-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2566-L2599)

```diff
-       _intersectUnIndexedLines(UU, XU, zU, cU, yU) {
-         let AU = null;
-         for (let FU = this.verticesStart; FU < this.verticesStart + this.verticesCount; FU += 2) {
-           const zU = XU[FU],
-             oU = XU[FU + 1],
-             DU = UU.intersectionSegment(zU, oU, cU);
-           if (!(DU < 0) && ((yU || !AU || DU < AU.distance) && (AU = new QU.e(null, null, DU), AU.faceId = FU / 2, yU))) break
-         }
-         return AU
-       }
-       _intersectTriangles(UU, XU, zU, cU, yU, QU, AU) {
-         let FU = null,
-           oU = -1;
-         for (let DU = this.indexStart; DU < this.indexStart + this.indexCount - (3 - cU); DU += cU) {
-           oU++;
-           const cU = zU[DU],
- ... (18 more removed lines; see GitHub link above)
+       equals(HH) {
+         return !!HH && (this.width === HH.width && this.height === HH.height)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2601-L2614` → after: `L1270-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1270-L1271) · [Before (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2601-L2614)

```diff
-       _intersectUnIndexedTriangles(UU, XU, zU, cU, yU) {
-         let QU = null;
-         for (let AU = this.verticesStart; AU < this.verticesStart + this.verticesCount; AU += 3) {
-           const zU = XU[AU],
-             FU = XU[AU + 1],
-             oU = XU[AU + 2];
-           if (yU && !yU(zU, FU, oU, UU, -1, -1, -1)) continue;
-           const DU = UU.intersectsTriangle(zU, FU, oU);
-           if (DU) {
-             if (DU.distance < 0) continue;
-             if ((cU || !QU || DU.distance < QU.distance) && (QU = DU, QU.faceId = AU / 3, cU)) break
-           }
-         }
-         return QU
+       get surface() {
+         return this.width * this.height
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2616-L2617` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1273-L1274) · [Before (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2616-L2617)

```diff
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
+       static Zero() {
+         return new AH(0, 0)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2619-L2626` → after: `L1276-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1276-L1277) · [Before (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2619-L2626)

```diff
-       clone(UU, XU) {
-         const zU = new EU(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, UU, XU, !1);
-         if (!this.IsGlobal) {
-           const UU = this.gM();
-           if (!UU) return zU;
-           zU._boundingInfo = new AU.b(UU.minimum, UU.maximum)
-         }
-         return zU
+       add(HH) {
+         return new AH(this.width + HH.width, this.height + HH.height)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2628-L2632` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1279-L1280) · [Before (L2628-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2628-L2632)

```diff
-       dispose() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._linesIndexBuffer && (this._mesh.nS().qp()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const XU = this._mesh.uB.indexOf(this);
-         this._mesh.uB.splice(XU, 1), this.resetDrawCache(void 0, UU)
+       subtract(HH) {
+         return new AH(this.width - HH.width, this.height - HH.height)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2634-L2635` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1282-L1283) · [Before (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2634-L2635)

```diff
-       getClassName() {
-         return "SubMesh"
+       scale(HH) {
+         return new AH(this.width * HH, this.height * HH)
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2637-L2646` → after: `L1285-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1285-L1288) · [Before (L2637-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2637-L2646)

```diff
-       static CreateFromIndices(UU, XU, zU, cU, yU) {
-         let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           AU = Number.MAX_VALUE,
-           FU = -Number.MAX_VALUE;
-         const oU = (yU || cU).yyU();
-         for (let DU = XU; DU < XU + zU; DU++) {
-           const UU = oU[DU];
-           UU < AU && (AU = UU), UU > FU && (FU = UU)
-         }
-         return new EU(UU, AU, FU - AU + 1, XU, zU, cU, yU, QU)
+       static Lerp(HH, BH, LH) {
+         const rH = HH.width + (BH.width - HH.width) * LH,
+           SH = HH.height + (BH.height - HH.height) * LH;
+         return new AH(rH, SH)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L2648` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/285.js#L1290) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/285.js#L2648)

```diff
-     }(cU = EU.prototype).projectToRef ?? (cU.projectToRef = (0, DU.k)("SubMesh", "projectToRef"))
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L11` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L4) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L11)

```diff
-   44270: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => cU
-     });
-     class cU {}
-     cU.AUTOSAMPLERSUFFIX = "Sampler", cU.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", cU.ALPHA_DISABLE = 0, cU.ALPHA_ADD = 1, cU.ALPHA_COMBINE = 2, cU.ALPHA_SUBTRACT = 3, cU.ALPHA_MULTIPLY = 4, cU.ALPHA_MAXIMIZED = 5, cU.ALPHA_ONEONE = 6, cU.ALPHA_PREMULTIPLIED = 7, cU.ALPH … [truncated]
-   },
-   44249: (UU, XU, zU) => {
+   41520: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L15-L188` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L9-L15) · [Before (L15-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L15-L188)

```diff
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(37819),
-       AU = zU(41346),
-       FU = zU(41317);
-     let oU = (() => {
-       var UU;
-       let XU, zU, oU, DU, EU = AU.b,
-         YU = [];
-       return UU = class extends EU {
-         constructor() {
-           super(...arguments), this._position = (0, cU.n)(this, YU), this._needProjectionMatrixCompute = !0, this._viewMatrix = QU.e.Identity(), this._projectionMatrix = QU.e.Identity()
-         }
-         _setPosition(UU) {
-           this._position = UU
-         }
- ... (158 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(41319),
+       SH = LH(41489),
+       hH = {};
+     class tH {
+       constructor(HH) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = HH, this.checkInputs = () => {}
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L190-L191` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L17-L19) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L190-L191)

```diff
-       updateMipLevel(UU, XU) {
-         this._getEngine().updateRawTexture(this._texture, UU, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, XU), this._waitingForData = !1
+       add(HH) {
+         const BH = HH.getSimpleName();
+         this.attached[BH] ? AH.e.Warn("camera input of type " + BH + " already exists on camera") : (this.attached[BH] = HH, HH.camera = this.camera, HH.checkInputs && (this.checkInputs = this._addCheckInputs(HH.checkInputs.bind(HH))), this.attachedToElement && HH.attachControl(t … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L193-L196` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L21-L25) · [Before (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L193-L196)

```diff
-       clone() {
-         if (!this._texture) return super.clone();
-         const UU = new yU(null, this.getSize().width, this.getSize().height, this.format, this.nS(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
-         return UU._texture = this._texture, this._texture.incrementReferences(), UU
+       remove(HH) {
+         for (const BH in this.attached) {
+           const LH = this.attached[BH];
+           if (LH === HH) return LH.detachControl(), LH.camera = null, delete this.attached[BH], void this.rebuildInputCheck()
+         }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L198-L199` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L27-L31) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L198-L199)

```diff
-       isReady() {
-         return super.isReady() && !this._waitingForData
+       removeByType(HH) {
+         for (const BH in this.attached) {
+           const LH = this.attached[BH];
+           LH.getClassName() === HH && (LH.detachControl(), LH.camera = null, delete this.attached[BH], this.rebuildInputCheck())
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L201-L202` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L33-L37) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L201-L202)

```diff
-       static CreateLuminanceTexture(UU, XU, zU, cU) {
-         return new yU(UU, XU, zU, 1, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       _addCheckInputs(HH) {
+         const BH = this.checkInputs;
+         return () => {
+           BH(), HH()
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L204-L205` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L39-L40) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L204-L205)

```diff
-       static CreateLuminanceAlphaTexture(UU, XU, zU, cU) {
-         return new yU(UU, XU, zU, 2, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       attachInput(HH) {
+         this.attachedToElement && HH.attachControl(this.noPreventDefault)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L207-L208` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L42-L47) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L207-L208)

```diff
-       static CreateAlphaTexture(UU, XU, zU, cU) {
-         return new yU(UU, XU, zU, 0, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       attachElement() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           HH = !SH.d.ForceAttachControlToAlwaysPreventDefault && HH, this.attachedToElement = !0, this.noPreventDefault = HH;
+           for (const BH in this.attached) this.attached[BH].attachControl(HH)
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L210-L211` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L49-L52) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L210-L211)

```diff
-       static CreateRGBTexture(UU, XU, zU, cU) {
-         return new yU(UU, XU, zU, 4, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       detachElement() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const BH in this.attached) this.attached[BH].detachControl(), HH && (this.attached[BH].camera = null);
+         this.attachedToElement = !1
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L213-L214` → after: `L54-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L54-L59) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L213-L214)

```diff
-       static CreateRGBATexture(UU, XU, zU, cU) {
-         return new yU(UU, XU, zU, 5, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const HH in this.attached) {
+           const BH = this.attached[HH];
+           BH.checkInputs && (this.checkInputs = this._addCheckInputs(BH.checkInputs.bind(BH)))
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L216-L217` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L61-L62) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L216-L217)

```diff
-       static CreateRGBAStorageTexture(UU, XU, zU, cU) {
-         return new yU(UU, XU, zU, 5, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L219-L223` → after: `L64-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L64-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L64-L71) · [Before (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L219-L223)

```diff
-       static CreateRTexture(UU, XU, zU, QU) {
-         let AU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           oU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cU.e.TRILINEAR_SAMPLINGMODE;
-         return new yU(UU, XU, zU, 6, QU, AU, FU, oU, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
+       serialize(HH) {
+         const BH = {};
+         for (const LH in this.attached) {
+           const HH = this.attached[LH],
+             AH = rH.c.Serialize(HH);
+           BH[HH.getClassName()] = AH
+         }
+         HH.inputsmgr = BH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L225-L229` → after: `L73-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L73-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L73-L92) · [Before (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L225-L229)

```diff
-       static CreateRStorageTexture(UU, XU, zU, QU) {
-         let AU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           oU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cU.e.TRILINEAR_SAMPLINGMODE;
-         return new yU(UU, XU, zU, 6, QU, AU, FU, oU, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
+       parse(HH) {
+         const BH = HH.inputsmgr;
+         if (BH) {
+           this.clear();
+           for (const HH in BH) {
+             const LH = hH[HH];
+             if (LH) {
+               const AH = BH[HH],
+                 SH = rH.c.Parse((() => new LH), AH, null);
+               this.add(SH)
+             }
+           }
+         } else
+           for (const LH in this.attached) {
+             const BH = hH[this.attached[LH].getClassName()];
+             if (BH) {
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L233` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L96) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L233)

```diff
-   44307: (UU, XU, zU) => {
+   42427: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L235-L242` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L98) · [Before (L235-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L235-L242)

```diff
-       b: () => cU.c
-     });
-     var cU = zU(41512);
-     (0, cU.g)()
-   },
-   44254: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => cU.d
+       e: () => vH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L244-L245` → after: `L100-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L100-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L100-L466) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L244-L245)

```diff
-     var cU = zU(41536);
-     (0, cU.e)()
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(41179),
+       hH = LH(37963),
+       tH = LH(41283),
+       zH = LH(41777),
+       CH = LH(38012),
+       EH = LH(37997),
+       XH = LH(41319),
+       GH = LH(41122),
+       YH = LH(39595),
+       uH = LH(41336),
+       QH = LH(38790),
+       WH = LH(41372);
+     var MH = LH(41184);
+     let xH = !1;
+ ... (351 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L247` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L468) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L247)

```diff
-   41536: (UU, XU, zU) => {
+   42472: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L252-L277` → after: `L472-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L472-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L472-L504) · [Before (L252-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L252-L277)

```diff
-     var cU, yU, QU = zU(37923),
-       AU = zU(41237),
-       FU = zU(41481),
-       oU = zU(41540),
-       DU = zU(41374),
-       EU = zU(41549),
-       YU = zU(40989);
-     class NU extends FU.b {
-       _isShaderMaterial(UU) {
-         return !!UU && "ShaderMaterial" === UU.getClassName()
-       }
-       constructor(UU) {
-         let XU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           cU = arguments.length > 5 ? arguments[5] : void 0,
-           yU = arguments.length > 6 ? arguments[6] : void 0,
-           FU = arguments.length > 7 ? arguments[7] : void 0;
- ... (10 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(41777),
+       SH = LH(41222),
+       hH = LH(41129),
+       tH = LH(41122);
+     let zH = !1;
+     class CH extends rH.g {
+       constructor(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           CH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
+           EH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
+           XH = arguments.length > 6 ? arguments[6] : void 0;
+         const GH = !LH || LH._isScene;
+         super(null, GH ? LH : LH?.NQ, GH ? !AH : LH, XH, CH, void 0, void 0, void 0, void 0, EH), zH || (zH = !0, hH.ThinEngine.prototype.createDynamicTexture = function(HH, BH, LH, AH) {
+           const rH = new tH.e(this, 4);
+           return rH.baseWidth = HH, rH.baseHeight = BH, LH && (HH = this.needPOTTextures ? (0, SH.c)(HH, this._caps.maxTextureSize) : HH, BH = this.needPOTTextures ? (0, SH.c)(BH, this._caps.maxTextureSize) : BH), rH.width = HH, rH.height = BH, rH.isReady = !1, rH.generateMipMaps … [truncated]
+ ... (17 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L279-L283` → after: `L506-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L506-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L506-L508) · [Before (L279-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L279-L283)

```diff
-           this.nS().qp().isWebGPU && !NU.ForceGLSL && (this._shaderLanguage = 1), oU.shaderLanguage = this._shaderLanguage, oU.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([zU.e(650).then((() => zU(45224))), zU.e(656).then((() => zU(45229)))]) : await Promise.all([zU.e(632).then((() => zU(45233))), zU.e(638).then((() => zU(45242)))])
-           };
-           const UU = new EU.o("colorShader", this.nS(), "color", oU, !1);
-           UU.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(UU)
+           this._canvas = YH.createCanvas(1, 1), this._ownCanvas = !0;
+           const HH = BH;
+           HH.width || 0 === HH.width ? this._texture = YH.createDynamicTexture(HH.width, HH.height, AH, CH) : this._texture = YH.createDynamicTexture(BH, BH, AH, CH)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L287-L316` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L514) · [Before (L287-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L287-L316)

```diff
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(UU) {
-         const XU = this.material;
-         if (XU === UU) return;
-         const zU = XU && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(UU), zU && XU?.dispose()
-       }
-       _setInternalMaterial(UU) {
-         this._setMaterial(UU), this.material && (this.material.fillMode = DU.c.LineListDrawMode, this.material.disableLighting = !0)
-       }
-       get checkCollisions() {
-         return !1
- ... (14 more removed lines; see GitHub link above)
+         return "DynamicTexture"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L318-L321` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L516-L517) · [Before (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L318-L321)

```diff
-       _draw(UU, XU, zU) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const cU = this.nS().qp();
-         return this._unIndexed ? cU.drawArraysType(DU.c.LineListDrawMode, UU.verticesStart, UU.verticesCount, zU) : cU.drawElementsType(DU.c.LineListDrawMode, UU.indexStart, UU.indexCount, zU), this
+       get canRescale() {
+         return !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L323-L325` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L519-L520) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L323-L325)

```diff
-       dispose(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || XU) && this.material?.dispose(!1, !1, !0), super.dispose(UU)
+       _recreate(HH) {
+         this._canvas.width = HH.width, this._canvas.height = HH.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(HH.width, HH.height, this._generateMipMaps, this.samplingMode)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L327-L334` → after: `L522-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L522-L524) · [Before (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L327-L334)

```diff
-       clone(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           zU = arguments.length > 2 ? arguments[2] : void 0;
-         if (XU && void 0 === XU._addToSceneRootNodes) {
-           const zU = XU;
-           return zU.source = this, new NU(UU, this.nS(), zU.parent, zU.source, zU.doNotCloneChildren)
-         }
-         return new NU(UU, this.nS(), XU, this, zU)
+       scale(HH) {
+         const BH = this.getSize();
+         BH.width *= HH, BH.height *= HH, this._recreate(BH)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L336-L342` → after: `L526-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L526-L528) · [Before (L336-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L336-L342)

```diff
-       createInstance(UU) {
-         const XU = new IU(UU, this);
-         if (this.XM) {
-           XU.XM = {};
-           for (const UU in this.XM) XU.XM[UU] = this.XM[UU]
-         }
-         return XU
+       scaleTo(HH, BH) {
+         const LH = this.getSize();
+         LH.width = HH, LH.height = BH, this._recreate(LH)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L344-L345` → after: `L530-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L530-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L530-L553) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L344-L345)

```diff
-       serialize(UU) {
-         super.serialize(UU), UU.color = this.color.cyU(), UU.alpha = this.alpha
+       getContext() {
+         return this._context
+       }
+       clear(HH) {
+         const BH = this.getSize();
+         HH && (this._context.fillStyle = HH), this._context.clearRect(0, 0, BH.width, BH.height)
+       }
+       update(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === HH || HH, BH, this._format || void 0, void 0, LH)
+       }
+       drawText(HH, BH, LH, AH, rH, SH, hH) {
+         let tH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
+         const zH = this.getSize();
+         if (SH && (this._context.fillStyle = SH, this._context.fillRect(0, 0, zH.width, zH.height)), this._context.font = AH, null === BH || void 0 === BH) {
+ ... (8 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L347-L349` → after: `L555-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L555-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L555-L575) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L347-L349)

```diff
-       static Parse(UU, XU) {
-         const zU = new NU(UU.name, XU);
-         return zU.color = QU.b.FromArray(UU.color), zU.alpha = UU.alpha, zU
+       dispose() {
+         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+       }
+       clone() {
+         const HH = this.yN();
+         if (!HH) return this;
+         const BH = this.getSize(),
+           LH = new CH(this.name, BH, HH, this._generateMipMaps);
+         return LH.hasAlpha = this.hasAlpha, LH.level = this.level, LH.wrapU = this.wrapU, LH.wrapV = this.wrapV, LH
+       }
+       serialize() {
+         const HH = this.yN();
+         HH && !HH.isReady() && AH.e.Warn("The scene must be ready before serializing the dynamic texture");
+         const BH = super.serialize();
+         return CH._IsCanvasElement(this._canvas) && (BH.base64String = this._canvas.toDataURL()), BH.invertY = this._invertY, BH.samplingMode = this.samplingMode, BH
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L352-L355` → after: `L578-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L578-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L578-L586) · [Before (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L352-L355)

```diff
-     NU.ForceGLSL = !1;
-     class IU extends oU.b {
-       constructor(UU, XU) {
-         super(UU, XU), this.intersectionThreshold = XU.intersectionThreshold
+   },
+   42445: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => rH
+     });
+     var AH = LH(41777);
+     class rH extends AH.g {
+       get depth() {
+         return this._depth
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L357-L358` → after: `L588-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L588-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L588-L604) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L357-L358)

```diff
-       getClassName() {
-         return "InstancedLinesMesh"
+       constructor(HH, BH, LH, rH, SH, hH) {
+         let tH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : AH.g.TRILINEAR_SAMPLINGMODE,
+           EH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           XH = arguments.length > 10 ? arguments[10] : void 0,
+           GH = arguments.length > 11 ? arguments[11] : void 0;
+         super(null, hH, !tH, zH), this.format = SH, this._texture = hH.Iu().createRawTexture2DArray(HH, BH, LH, rH, SH, tH, zH, CH, null, EH, XH ?? 0, GH), this._depth = rH, this.is2DArray = !0
+       }
+       update(HH) {
+         this.updateMipLevel(HH, 0)
+       }
+       updateMipLevel(HH, BH) {
+         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, HH, this._texture.format, this._texture.invertY, null, this._texture.type, BH)
+       }
+       static CreateRGBATexture(HH, BH, LH, AH, SH) {
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L361-L365` → after: `L607-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L607-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/286.js#L607-L620) · [Before (L361-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/286.js#L361-L365)

```diff
-     let pU = !1;
- 
-     function aU() {
-       pU || (pU = !0, FU.b._LinesMeshParser = (UU, XU) => NU.Parse(UU, XU))
-     }(cU = NU.prototype).enableEdgesRendering ?? (cU.enableEdgesRendering = (0, YU.k)("LinesMesh", "enableEdgesRendering")), (yU = IU.prototype).enableEdgesRendering ?? (yU.enableEdgesRendering = (0, YU.k)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   42439: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH.b
+     });
+     var AH = LH(41648);
+     (0, AH.e)()
+   },
+   41374: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH.d
+     });
+     var AH = LH(41383);
+     (0, AH.c)()
```
