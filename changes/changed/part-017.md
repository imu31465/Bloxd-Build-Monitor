# Changed — Bundle Modifications Report (Part 017 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `17 / 65` (**325** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (95 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 62. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L379-L382` → after: `L7626-L7631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7626-L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L7626-L7631) · [Before (L379-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L379-L382)

```diff
-                 const DD = sD.onLoadObservable;
-                 DD ? DD.addOnce((() => {
-                   0 === --wD && zD()
-                 })) : 0 === --wD && zD()
+                 const pp = {
+                   evt: cp,
+                   clickInfo: op,
+                   timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Sp, op, Op), Fp.DoubleClickDelay)
+                 };
+                 this._delayedClicks[Sp] = pp
```

#### 63. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L384` → after: `L7633-L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L7633-L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L7633-L8912) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L384)

```diff
-             } else zD()
+               let Yp = pp.hasSpecificMask(jp.d.POINTERDOUBLETAP) || ip.hasSpecificMask(jp.d.POINTERDOUBLETAP);
+               !Yp && kp.HasSpecificTrigger(6) && (Ip = this._initActionManager(Ip, op), Ip && (Yp = Ip.hasSpecificTrigger(6))), Yp && (Sp === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Fp.DoubleClickDelay && !this._doubleClickOccured ? (op.has … [truncated]
+             }
+           }
+           xp || Op(op, this._currentPickResult)
+         }, this._onPointerMove = pp => {
+           if (this._updatePointerPosition(pp), this._latestPointerMoveEvents.set(pp.pointerId, {
+               event: pp,
+               pointerX: this._pointerX,
+               pointerY: this._pointerY,
+               unTranslatedPointerX: this._unTranslatedPointerX,
+               unTranslatedPointerY: this._unTranslatedPointerY
+             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Fp.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Fp.DragMovementThreshold), Ip.isPointerLo … [truncated]
+           if (!op.cameraToUseForPointers && !op.activeCamera) return;
+           if (op.skipPointerMovePicking) return void this._processPointerMove(new Wp.b, pp);
+           this._ensurePointerMovePredicate();
+ ... (1264 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L386-L387` → after: `L8914-L8925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8914-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L8914-L8925) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L386-L387)

```diff
-         static _IsScene(DD) {
-           return "Scene" === DD.getClassName()
+         return this.executeWhenReady((() => {
+           if (this.activeCamera) {
+             if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Ip, this._skipEvaluateActiveMeshesCompletely = pp, Op)
+               for (let pp = 0; pp < this._activeMeshes.length; pp++) this._activeMeshes.data[pp]._freeze();
+             ip && ip()
+           } else cp && cp("No active camera found")
+         })), this
+       }
+       unfreezeActiveMeshes() {
+         for (let pp = 0; pp < this.meshes.length; pp++) {
+           const ip = this.meshes[pp];
+           ip._internalAbstractMeshDataInfo && (ip._internalAbstractMeshDataInfo._isActive = !1)
```

#### 65. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L389-L669` → after: `L8927-L8943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8927-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L8927-L8943) · [Before (L389-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L389-L669)

```diff
-       }, (() => {
-         const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(iD[Symbol.metadata] ?? null) : void 0;
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], gD = [(0, sD.C)()], AD = [(0, sD.C)()], fD = [(0, sD.C)("hasAlpha")], ID = [(0, sD.C)("getAlphaFromRGB")], BD = [(0, sD.C)()], GD = [(0, sD.C)("coordinatesIndex")], hD = [(0, sD.C)()], nD = [(0, sD.C)("coordinatesMode")], MD = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "wrapU" in DD,
-             get: DD => DD.wrapU
-           },
-           metadata: KD
-         }, null, lD), (0, pD.i)(DD, null, OD, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (265 more removed lines; see GitHub link above)
+         if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
+           const pp = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
+           for (const ip of pp) ip.objectRenderer._unfreezeActiveMeshes()
+         } else
+           for (let pp = 0; pp < this._activeMeshes.length; pp++) this._activeMeshes.data[pp]._unFreeze();
+         return this._activeMeshesFrozen = !1, this
+       }
+       _executeActiveContainerCleanup(pp) {
+         (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => pp.dispose()))
+       }
+       _evaluateActiveMeshes() {
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._acti … [truncated]
+         if (this._activeMeshesFrozen && this._activeMeshes.length) {
+           if (!this._skipEvaluateActiveMeshesCompletely) {
+             const pp = this._activeMeshes.length;
+             for (let ip = 0; ip < pp; ip++) {
+ ... (1 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L671-L682` → after: `L8945-L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8945-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L8945-L8973) · [Before (L671-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L671-L682)

```diff
-           },
-           metadata: KD
-         }, Rz, Az), (0, pD.i)(null, null, SD, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "isRenderTarget" in DD,
-             get: DD => DD.isRenderTarget,
-             set: (DD, zD) => {
-               DD.isRenderTarget = zD
+           }
+           if (this._activeParticleSystems) {
+             const pp = this._activeParticleSystems.length;
+             for (let ip = 0; ip < pp; ip++) this._activeParticleSystems.data[ip].animate()
+           }
+           return void this._renderingManager.resetSprites()
+         }
+         if (!this.activeCamera) return;
+         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
+         for (let op = 0, Ip = this._beforeEvaluateActiveMeshStage; op < Ip.length; op++) {
+           Ip[op].action()
+         }
+         const pp = this.getActiveMeshCandidates(),
+           ip = pp.length,
+           cp = gp.b.Enabled,
+           Op = this.customLODSelector;
+ ... (13 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L684-L735` → after: `L8975-L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8975-L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L8975-L8986) · [Before (L684-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L684-L735)

```diff
-           },
-           metadata: KD
-         }, Uz, fz), KD && Object.defineProperty(DD, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: KD
-         })
-       })(), DD.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, DD
-     })();
-     (AD = ID.prototype).forceSphericalPolynomialsRecompute ?? (AD.forceSphericalPolynomialsRecompute = (0, fD.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(ID.prototype, "sphericalPolynomial") || Object.defineProperty(ID.prototype, "sph … [truncated]
-   },
-   40400: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => JD,
-       d: () => MD
- ... (36 more removed lines; see GitHub link above)
+           }
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let pp = 0; pp < this.Wm.length; pp++) {
+             const ip = this.Wm[pp];
+             if (!ip.isStarted() || !ip.emitter) continue;
+             const cp = ip.emitter;
+             cp.position && !cp.isEnabled() || (this._activeParticleSystems.push(ip), ip.animate(), this._renderingManager.dispatchParticles(ip))
+           }
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
```

#### 68. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L737-L842` → after: `L8988-L9053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8988-L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L8988-L9053) · [Before (L737-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L737-L842)

```diff
-       return KD.toDataURL("image/png")
-     }
- 
-     function BD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const pD = DD.getInternalTexture();
-       if (!pD) return null;
-       const sD = DD._readPixelsSync(zD, wD);
-       return sD ? ID(sD, DD.getSize(), pD.invertY) : null
-     }
-     async function GD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const pD = DD.getInternalTexture();
-       if (!pD) return null;
- ... (90 more removed lines; see GitHub link above)
+       _prepareSkeleton(pp) {
+         this._skeletonsEnabled && pp.skeleton && (this._activeSkeletons.pushNoDuplicate(pp.skeleton) && (pp.skeleton.prepare(), this._activeBones.addCount(pp.skeleton.bones.length, !1)), pp.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(pp) && this.frameG … [truncated]
+       }
+       _activeMesh(pp, ip) {
+         this._prepareSkeleton(ip);
+         let cp = pp.fop || pp.Vl || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || ip.Gy;
+         if (ip && ip.Am && ip.Am.length > 0) {
+           const Op = this.getActiveSubMeshCandidates(ip),
+             op = Op.length;
+           cp = cp || 1 === op;
+           for (let Ip = 0; Ip < op; Ip++) {
+             const op = Op.data[Ip];
+             this._evaluateSubMesh(op, ip, pp, cp)
+           }
+         }
+       }
+ ... (50 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L844-L849` → after: `L9055-L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9055-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9055-L9111) · [Before (L844-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L844-L849)

```diff
-             else if (QD && QD.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = VD, this._delayedOnError = PD;
-             else {
-               try {
-                 this._texture = XD.createTexture(this.url, LD, this._invertY, QD, cD, VD, PD, this._buffer, void 0, this._format, this._forcedExtension, BD, GD, nD, OD)
-               } catch (CD) {
-                 throw PD("error loading", CD), CD
+             }
+             ip && pp && (ip.renderList.data = pp, ip.renderList.length = pp.length), Op.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+           }
+           if (this._cameraDrawRenderTargetStage.length > 0) {
+             const ip = this.getBoundingBoxRenderer?.();
+             ip && !pp && (pp = ip.renderList.length > 0 ? ip.renderList.data.slice() : [], pp.length = ip.renderList.length);
+             for (let pp = 0, cp = this._cameraDrawRenderTargetStage; pp < cp.length; pp++) {
+               Ip = cp[pp].action(this.activeCamera) || Ip
+             }
+             ip && pp && (ip.renderList.data = pp, ip.renderList.length = pp.length)
+           }
+           this._intermediateRendering = !1
+         }
+         Ip && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || pp._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let Op = 0, xp = this._beforeCameraDrawStage; Op < xp.length; Op++) {
+           xp[Op].action(this.activeCamera)
+ ... (41 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L854-L888` → after: `L9171-L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9171-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9171-L9189) · [Before (L854-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L854-L888)

```diff
-           updateURL(DD) {
-             let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               wD = arguments.length > 2 ? arguments[2] : void 0,
-               pD = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.Ul().markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = DD), this.url = DD, this._buffer = zD, this._forcedExtension = pD, this.delayLoadState = 4;
-             const sD = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               sD ? sD() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), wD && wD()
-             }, this.delayLoad()
-           }
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const DD = this.Ul();
-             if (!DD) return;
-             let zD = this.url;
-             !zD && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (zD = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(zD, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
- ... (19 more removed lines; see GitHub link above)
+           Op.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+         }
+         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
+         for (let cp = 0, Op = this._beforeClearStage; cp < Op.length; cp++) {
+           Op[cp].action()
+         }
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+         else {
+           const ip = this.getActiveMeshCandidates(),
+             cp = ip.length;
+           if (this._activeMeshesFrozen) {
+             if (!this._skipEvaluateActiveMeshesCompletely)
+               for (let pp = 0; pp < cp; pp++) {
+                 const cp = ip.data[pp];
+                 cp._internalAbstractMeshDataInfo._wasActiveLastFrame && cp.computeWorldMatrix()
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L890-L900` → after: `L9191-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9191-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9191-L9202) · [Before (L890-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L890-L900)

```diff
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = rD.e.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = rD.e.Zero());
-             const wD = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
-             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
-               case DD.PLANAR_MODE:
-                 rD.e.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
-                 break;
-               case DD.PROJECTION_MODE: {
-                 rD.e.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
-                 const DD = zD.getProjectionMatrix();
-                 this._cachedReflectionProjectionMatrixId = DD.updateFlag, DD.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
-                 break
+           } else {
+             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+             for (let Op = 0; Op < cp; Op++) {
+               const cp = ip.data[Op];
+               cp._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, cp.isBlocked || (this._totalVertices.addCount(cp.getTotalVertices(), !1), cp.isReady() && cp.isEnabled() && !cp.ei.hasAZeroComponent && (cp.computeWorldMatrix(pp), cp.actionManager && cp.actionManager.hasSpe … [truncated]
+             }
+             if (this.particlesEnabled)
+               for (let pp = 0; pp < this.Wm.length; pp++) {
+                 const ip = this.Wm[pp];
+                 if (!ip.isStarted() || !ip.emitter) continue;
+                 const cp = ip.emitter;
+                 cp.position && !cp.isEnabled() || (this._activeParticleSystems.push(ip), ip.animate())
```

#### 72. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L902-L903` → after: `L9204-L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9204-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9204-L9252) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L902-L903)

```diff
-               default:
-                 rD.e.IdentityToRef(this._cachedReflectionTextureMatrix)
+           }
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, pp._shouldRender()) {
+           if (this._renderId++, this.activeCamera = ip, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), pp.render(cp, Op)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (33 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L905` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9254) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L905)

```diff
-             return wD && zD.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))), this._cachedReflectionTextureMatrix
+             Op.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 74. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L907-L922` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9256-L9258) · [Before (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L907-L922)

```diff
-           clone() {
-             const zD = {
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
-             return nD.d.Clone((() => new DD(this._texture ? this._texture.url : null, this.Ul(), zD)), this)
+           this._engine.currentRenderPassId = pp?.renderPassId ?? 0, this.activeCamera = pp, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let ip = 0, cp = this._beforeClearStage; ip < cp.length; ip++) {
+             cp[ip].action()
```

#### 75. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L924-L935` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9260-L9262) · [Before (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L924-L935)

```diff
-           serialize() {
-             const zD = this.name;
-             DD.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const wD = super.serialize(DD._SerializeInternalTextureUniqueId);
-             if (!wD) return null;
-             if (DD.SerializeBuffers || DD.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) wD.base64String = this._buffer, wD.name = wD.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const DD = this.mimeType || "image/png";
-               wD.base64String = `data:${DD};base64,${(0,fD.e)(this._buffer)}`
-             } else(DD.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (wD.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? BD(this) : GD(this));
-             return wD.invertY = this._invertY, wD.samplingMode = this.samplingMode, wD._creationFlags = this._creationFlags, wD._useSRGBBuffer = this._useSRGBBuffer, DD._SerializeInternalTextureUniqueId && (wD.internalTextureUniqueId = this._texture?.uniqueId), wD.internalTexture … [truncated]
+           this._clearFrameBuffer(this.activeCamera);
+           for (let ip = 0, cp = this._gatherRenderTargetsStage; ip < cp.length; ip++) {
+             cp[ip].action(this._renderTargets)
```

#### 76. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L937-L938` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9264-L9268) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L937-L938)

```diff
-           getClassName() {
-             return "Texture"
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let ip = 0; ip < this.activeCameras.length; ip++) this._processSubCameras(this.activeCameras[ip], ip > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 77. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L940-L941` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9270-L9278) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L940-L941)

```diff
-           dispose() {
-             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let cp = 0, Op = this._afterRenderStage; cp < Op.length; cp++) {
+           Op[cp].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let pp = 0; pp < this._toBeDisposed.length; pp++) {
+             const ip = this._toBeDisposed[pp];
+             ip && ip.dispose()
```

#### 78. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L943-L958` → after: `L9280-L9320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9280-L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9280-L9320) · [Before (L943-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L943-L958)

```diff
-           static Parse(zD, wD, pD) {
-             if (zD.customType) {
-               const DD = AD.b.Instantiate(zD.customType).Parse(zD, wD, pD);
-               return zD.samplingMode && DD.updateSamplingMode && DD._samplingMode && DD._samplingMode !== zD.samplingMode && DD.updateSamplingMode(zD.samplingMode), DD
-             }
-             if (zD.isCube && !zD.isRenderTarget) return DD._CubeTextureParser(zD, wD, pD);
-             const sD = void 0 !== zD.internalTextureUniqueId;
-             if (!zD.name && !zD.isRenderTarget && !sD) return null;
-             let KD;
-             if (sD) {
-               const DD = wD.iI().getLoadedTexturesCache();
-               for (const wD of DD)
-                 if (wD.uniqueId === zD.internalTextureUniqueId) {
-                   KD = wD;
-                   break
-                 }
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let pp = 0; pp < this.materials.length; pp++) this.materials[pp].freeze()
+       }
+       unfreezeMaterials() {
+         for (let pp = 0; pp < this.materials.length; pp++) this.materials[pp].unfreeze()
+       }
+       dispose() {
+         if (this.uR) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const pp of this._activeAnimatables) pp.onAnimationEndObservable.clear(), pp.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 79. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L960-L1044` → after: `L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9322) · [Before (L960-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L960-L1044)

```diff
-             const rD = DD => {
-               if (DD && DD._texture && (DD._texture._cachedWrapU = null, DD._texture._cachedWrapV = null, DD._texture._cachedWrapR = null), zD.samplingMode) {
-                 const wD = zD.samplingMode;
-                 DD && DD.samplingMode !== wD && DD.updateSamplingMode(wD)
-               }
-               if (DD && zD.animations)
-                 for (let wD = 0; wD < zD.animations.length; wD++) {
-                   const pD = zD.animations[wD],
-                     sD = (0, cD.e)("BABYLON.Animation");
-                   sD && DD.animations.push(sD.Parse(pD))
-                 }
-               DD && DD._texture && (sD && !KD && DD._texture._setUniqueId(zD.internalTextureUniqueId), DD._texture.label = zD.internalTextureLabel)
-             };
-             return nD.d.Parse((() => {
-               let sD = !0;
-               if (zD.noMipmap && (sD = !1), zD.mirrorPlane) {
- ... (69 more removed lines; see GitHub link above)
+             pp--
```

#### 80. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1046-L1240` → after: `L9324-L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9324-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9324-L9325) · [Before (L1046-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1046-L1240)

```diff
-         }, (() => {
-           const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(TD[Symbol.metadata] ?? null) : void 0;
-           zD = [(0, sD.C)()], wD = [(0, sD.C)()], ID = [(0, sD.C)()], MD = [(0, sD.C)()], OD = [(0, sD.C)()], JD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.C)()], XD = [(0, sD.C)()], VD = [(0, sD.C)()], PD = [(0, sD.C)()], CD = [(0, sD.C)()], xD = [(0, sD.C)()], (0, pD.i)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: DD => "isBlocking" in DD,
-               get: DD => DD.isBlocking
-             },
-             metadata: KD
-           }, null, bD), (0, pD.i)(null, null, zD, {
-             kind: "field",
-             name: "url",
-             static: !1,
- ... (179 more removed lines; see GitHub link above)
+         }
+         Op = this._engine._virtualScenes.indexOf(this), Op > -1 && this._engine._virtualScenes.splice(Op, 1), this._engine.wipeCaches(!0), this.Kl.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 81. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1242-L1243` → after: `L9327-L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9327-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9327-L9331) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+       _disposeList(pp, ip) {
+         const cp = pp.slice(0);
+         ip = ip ?? (pp => pp.dispose());
+         for (const Op of cp) ip(Op);
+         pp.length = 0
```

#### 82. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1245-L1246` → after: `L9333-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9333-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9333-L9340) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       get uR() {
+         return this._isDisposed
+       }
+       clearCachedVertexData() {
+         for (let pp = 0; pp < this.meshes.length; pp++) {
+           const ip = this.meshes[pp].geometry;
+           ip && ip.clearCachedData()
+         }
```

#### 83. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1248-L1250` → after: `L9342-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9342-L9345) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1248-L1250)

```diff
-       getHashCode() {
-         let DD = 0 | this.width;
-         return DD = 397 * DD ^ this.height, DD
+       cleanCachedTextureBuffer() {
+         for (const pp of this.textures) {
+           pp._buffer && (pp._buffer = null)
+         }
```

#### 84. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1252-L1253` → after: `L9347-L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9347-L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9347-L9365) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1252-L1253)

```diff
-       pC(DD) {
-         this.width = DD.width, this.height = DD.height
+       getWorldExtends(pp) {
+         const ip = new Dp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           cp = new Dp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         pp = pp || (() => !0);
+         const Op = this.meshes.filter(pp);
+         for (const op of Op) {
+           if (op.computeWorldMatrix(!0), !op.Am || 0 === op.Am.length || op.infiniteDistance) continue;
+           const pp = op.bJ(),
+             Op = pp.boundingBox.minimumWorld,
+             Ip = pp.boundingBox.maximumWorld;
+           Dp.o.CheckExtends(Op, ip, cp), Dp.o.CheckExtends(Ip, ip, cp)
+         }
+         return ip.x === Number.MAX_VALUE ? {
+           min: Dp.o.Zero(),
+           max: Dp.o.Zero()
+         } : {
+ ... (3 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1255-L1256` → after: `L9367-L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9367-L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9367-L9368) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1255-L1256)

```diff
-       Z2(DD, zD) {
-         return this.width = DD, this.height = zD, this
+       createPickingRay(pp, ip, cp, Op) {
+         throw (0, ep.o)("Ray")
```

#### 86. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1258-L1259` → after: `L9370-L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9370-L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9370-L9409) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1258-L1259)

```diff
-       set(DD, zD) {
-         return this.Z2(DD, zD)
+       createPickingRayToRef(pp, ip, cp, Op, op) {
+         throw (0, ep.o)("Ray")
+       }
+       createPickingRayInCameraSpace(pp, ip, cp) {
+         throw (0, ep.o)("Ray")
+       }
+       createPickingRayInCameraSpaceToRef(pp, ip, cp, Op) {
+         throw (0, ep.o)("Ray")
+       }
+       SW(pp, ip, cp, Op, op, Ip) {
+         const Sp = (0, ep.o)("Ray", !0);
+         return Sp && Oc.e.Warn(Sp), new Wp.b
+       }
+       pickWithBoundingInfo(pp, ip, cp, Op, op) {
+         const Ip = (0, ep.o)("Ray", !0);
+         return Ip && Oc.e.Warn(Ip), new Wp.b
+ ... (24 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1261-L1262` → after: `L9411-L9413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9411-L9413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9411-L9413) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1261-L1262)

```diff
-       multiplyByFloats(DD, zD) {
-         return new pD(this.width * DD, this.height * zD)
+       _rebuildTextures() {
+         for (const pp of this.textures) pp._rebuild(!0);
+         this.markAllMaterialsAsDirty(1)
```

#### 88. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1264-L1265` → after: `L9415-L9558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9415-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9415-L9558) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1264-L1265)

```diff
-       clone() {
-         return new pD(this.width, this.height)
+       _getByTags(pp, ip, cp) {
+         if (void 0 === ip) return pp;
+         const Op = [];
+         for (const op in pp) {
+           const Ip = pp[op];
+           Yp.b && Yp.b.MatchesQuery(Ip, ip) && (!cp || cp(Ip)) && Op.push(Ip)
+         }
+         return Op
+       }
+       getMeshesByTags(pp, ip) {
+         return this._getByTags(this.meshes, pp, ip)
+       }
+       getCamerasByTags(pp, ip) {
+         return this._getByTags(this.cameras, pp, ip)
+       }
+       getLightsByTags(pp, ip) {
+ ... (128 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1267-L1268` → after: `L9560-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9560-L9561) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1267-L1268)

```diff
-       equals(DD) {
-         return !!DD && (this.width === DD.width && this.height === DD.height)
+       getGeometryByID(pp) {
+         return this.getGeometryById(pp)
```

#### 90. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1270-L1271` → after: `L9563-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9563-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9563-L9564) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       getMeshByID(pp) {
+         return this.getMeshById(pp)
```

#### 91. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1273-L1274` → after: `L9566-L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9566-L9567) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1273-L1274)

```diff
-       static Zero() {
-         return new pD(0, 0)
+       getMeshByUniqueID(pp) {
+         return this.getMeshByUniqueId(pp)
```

#### 92. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1276-L1277` → after: `L9569-L9570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9569-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9569-L9570) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1276-L1277)

```diff
-       add(DD) {
-         return new pD(this.width + DD.width, this.height + DD.height)
+       getLastMeshByID(pp) {
+         return this.getLastMeshById(pp)
```

#### 93. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1279-L1280` → after: `L9572-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9572-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9572-L9573) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1279-L1280)

```diff
-       subtract(DD) {
-         return new pD(this.width - DD.width, this.height - DD.height)
+       getMeshesByID(pp) {
+         return this.getMeshesById(pp)
```

#### 94. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1282-L1283` → after: `L9575-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9575-L9576) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1282-L1283)

```diff
-       scale(DD) {
-         return new pD(this.width * DD, this.height * DD)
+       getTransformNodeByID(pp) {
+         return this.getTransformNodeById(pp)
```

#### 95. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1285-L1288` → after: `L9578-L9579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L9578-L9579) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L1285-L1288)

```diff
-       static Lerp(DD, zD, wD) {
-         const sD = DD.width + (zD.width - DD.width) * wD,
-           KD = DD.height + (zD.height - DD.height) * wD;
-         return new pD(sD, KD)
+       getTransformNodeByUniqueID(pp) {
+         return this.getTransformNodeByUniqueId(pp)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257];
+ export const ids = [257, 358];
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4-L579` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/257.js#L4-L579)

```diff
-   40179: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD,
-       h: () => LD
-     });
-     var pD = wD(38662),
-       sD = wD(39939),
-       KD = wD(40148),
-       rD = {};
-     class LD {
-       constructor(DD) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = DD, this.checkInputs = () => {}
-       }
-       add(DD) {
-         const zD = DD.getSimpleName();
-         this.attached[zD] ? pD.d.Warn("camera input of type " + zD + " already exists on camera") : (this.attached[zD] = DD, DD.camera = this.camera, DD.checkInputs && (this.checkInputs = this._addCheckInputs(DD.checkInputs.bind(DD))), this.attachedToElement && DD.attachControl(t … [truncated]
- ... (560 more removed lines; see GitHub link above)
+   40062: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L583-L586` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/257.js#L8-L10) · [Before (L583-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/257.js#L583-L586)

```diff
-     var pD = wD(40400);
-     class sD extends pD.d {
-       get depth() {
-         return this._depth
+     class Op {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L588-L595` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/257.js#L12-L13) · [Before (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/257.js#L588-L595)

```diff
-       constructor(DD, zD, wD, sD, KD, rD) {
-         let LD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           cD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : pD.d.TRILINEAR_SAMPLINGMODE,
-           RD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           AD = arguments.length > 10 ? arguments[10] : void 0,
-           UD = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, rD, !LD, cD), this.format = KD, this._texture = rD.iI().createRawTexture2DArray(DD, zD, wD, sD, KD, LD, cD, gD, null, RD, AD ?? 0, UD), this._depth = sD, this.is2DArray = !0
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L597-L604` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/257.js#L15-L16) · [Before (L597-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/257.js#L597-L604)

```diff
-       update(DD) {
-         this.updateMipLevel(DD, 0)
-       }
-       updateMipLevel(DD, zD) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, DD, this._texture.format, this._texture.invertY, null, this._texture.type, zD)
-       }
-       static CreateRGBATexture(DD, zD, wD, pD, KD) {
-         return new sD(DD, zD, wD, pD, 5, KD, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
```

#### 6. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L608-L610` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/257.js#L21-L23) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/257.js#L608-L610)

```diff
-   41055: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD.c
+   61392: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       postprocessVertexShader: () => Sp
```

#### 7. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L612-L620` → after: `L25-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L25-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/257.js#L25-L32) · [Before (L612-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/257.js#L612-L620)

```diff
-     var pD = wD(40291);
-     (0, pD.g)()
-   },
-   40015: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD.e
-     });
-     var pD = wD(40022);
-     (0, pD.c)()
+     var Op = cp(40062);
+     const op = "postprocessVertexShader",
+       Ip = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     Op.b.ShadersStore[op] || (Op.b.ShadersStore[op] = Ip);
+     const Sp = {
+       name: op,
+       shader: Ip
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   40137: (DD, zD, wD) => {
+   40273: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L6)

```diff
-       c: () => PD
+       d: () => Pp,
+       e: () => Ap,
+       f: () => Lp,
+       i: () => Wp,
+       m: () => Yp,
+       p: () => xp,
+       s: () => Dp
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L8-L41` → after: `L14-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L14-L21) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L8-L41)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37079),
-       rD = wD(40146),
-       LD = wD(40179),
-       cD = wD(40108),
-       gD = wD(40027);
-     let RD = (() => {
-       var DD;
-       let zD, wD, rD, LD, RD, AD, UD, fD, ID, BD, GD, hD = [],
-         nD = [],
-         MD = [],
-         OD = [],
-         JD = [],
-         ED = [],
-         QD = [],
- ... (18 more removed lines; see GitHub link above)
+     var Op = cp(38905),
+       op = cp(40276);
+ 
+     function Ip(pp, ip, cp, Op) {
+       switch (ip) {
+         case 5120: {
+           let ip = pp.getInt8(cp);
+           return Op && (ip = Math.max(ip / 127, -1)), ip
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L43-L57` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L23-L25) · [Before (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L43-L57)

```diff
-         attachControl(DD) {
-           DD = gD.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Ul(), this._engine = this._scene.iI(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zD => {
-             const wD = zD.event;
-             if (!wD.metaKey)
-               if (zD.type === cD.d.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysUpward.indexOf(wD.keyCode) || -1 !== this.keysDownward.indexOf(wD.key … [truncated]
-                   -1 === this._keys.indexOf(wD.keyCode) && this._keys.push(wD.keyCode), DD || wD.preventDefault()
-                 }
-               } else if (-1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysUpward.indexOf(wD.keyCode) || -1 !== this.keysDownward.indexOf(w … [truncated]
-               const zD = this._keys.indexOf(wD.keyCode);
-               zD >= 0 && this._keys.splice(zD, 1), DD || wD.preventDefault()
-             }
-           })))
+         case 5121: {
+           let ip = pp.getUint8(cp);
+           return Op && (ip /= 255), ip
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L59-L60` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L27-L29) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L59-L60)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         case 5122: {
+           let ip = pp.getInt16(cp, !0);
+           return Op && (ip = Math.max(ip / 32767, -1)), ip
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L62-L77` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L31-L33) · [Before (L62-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L62-L77)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const DD = this.camera,
-               zD = DD.movement.input,
-               wD = zD.getEntry("keyboard", "translate"),
-               pD = zD.getEntry("keyboard", "rotate"),
-               sD = pD?.sensitivity ?? 1,
-               rD = DD._localDirection.Z2(0, 0, 0);
-             for (let KD = 0; KD < this._keys.length; KD++) {
-               const zD = this._keys[KD]; - 1 !== this.keysLeft.indexOf(zD) ? rD.x -= 1 : -1 !== this.keysUp.indexOf(zD) ? rD.z += 1 : -1 !== this.keysRight.indexOf(zD) ? rD.x += 1 : -1 !== this.keysDown.indexOf(zD) ? rD.z -= 1 : -1 !== this.keysUpward.indexOf(zD) ? rD.y += 1 : -1 … [truncated]
-             }
-             if (wD && (0 !== rD.x || 0 !== rD.y || 0 !== rD.z)) {
-               const zD = DD._computeLocalCameraSpeed() * (wD.sensitivity ?? 1);
-               rD.normalize().scaleInPlace(zD), DD.Ul().useRightHandedSystem && (rD.z *= -1), DD.getViewMatrix().invertToRef(DD._cameraTransformMatrix), KD.s.TransformNormalToRef(rD, DD._cameraTransformMatrix, DD._transformedDirection), DD.cameraDirection.addInPlace(DD._transforme … [truncated]
-             }
-           }
+         case 5123: {
+           let ip = pp.getUint16(cp, !0);
+           return Op && (ip /= 65535), ip
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L79-L80` → after: `L35-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L35-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L35-L107) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L79-L80)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
+         case 5131:
+           return (0, op.c)(pp.getUint16(cp, !0));
+         case 5124:
+           return pp.getInt32(cp, !0);
+         case 5125:
+           return pp.getUint32(cp, !0);
+         case 5126:
+           return pp.getFloat32(cp, !0);
+         default:
+           throw new Error(`Invalid component type ${ip}`)
+       }
+     }
+ 
+     function Sp(pp, ip, cp, Op, Ip) {
+       switch (ip) {
+         case 5120:
+ ... (57 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L82-L83` → after: `L109-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L109-L116) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+       } else {
+         const Wp = ArrayBuffer.isView(pp) ? new DataView(pp.buffer, pp.byteOffset, pp.byteLength) : new DataView(pp),
+           yp = xp(op);
+         for (let pp = 0; pp < Lp; pp += Op) {
+           for (let pp = 0, cp = ip; pp < Op; pp++, cp += yp) Ap[pp] = Pp[pp] = Ip(Wp, op, cp, Yp);
+           Dp(Pp, pp);
+           for (let pp = 0, cp = ip; pp < Op; pp++, cp += yp) Ap[pp] !== Pp[pp] && Sp(Wp, op, cp, Yp, Pp[pp]);
+           ip += cp
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L85-L86` → after: `L118-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L118-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L118-L133) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+       }
+     }
+ 
+     function Yp(pp, ip, cp, op, Ip, Sp, Yp, Dp) {
+       const Ap = ip * xp(cp),
+         Pp = Yp * ip;
+       if (5126 !== cp || Ip !== Ap) {
+         const Op = new Float32Array(Pp);
+         return Lp(pp, op, Ip, ip, cp, Pp, Sp, ((pp, cp) => {
+           for (let op = 0; op < ip; op++) Op[cp + op] = pp[op]
+         })), Op
+       }
+       if (!(pp instanceof Array || pp instanceof Float32Array) || 0 !== op || pp.length !== Pp) {
+         if (pp instanceof Array) {
+           const ip = op / 4;
+           return pp.slice(ip, ip + Pp)
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L88-L90` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L135-L137) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const DD = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * DD
+         if (ArrayBuffer.isView(pp)) {
+           const ip = pp.byteOffset + op;
+           return 0 !== (3 & ip) && (Op.e.Warn("Float array must be aligned to 4-bytes border"), Dp = !0), Dp ? new Float32Array(pp.buffer.slice(ip, ip + Pp * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(pp.buffer, ip, Pp)
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L92-L265` → after: `L139-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L139-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L139-L178) · [Before (L92-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L92-L265)

```diff
-       }, (() => {
-         const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], rD = [(0, sD.C)()], LD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], fD = [(0, sD.C)()], ID = [(0, sD.C)()], BD = [(0, sD.C)()], GD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "keysUp" in DD,
-             get: DD => DD.keysUp,
-             set: (DD, zD) => {
-               DD.keysUp = zD
-             }
-           },
-           metadata: KD
-         }, hD, nD), (0, pD.i)(null, null, wD, {
- ... (158 more removed lines; see GitHub link above)
+         return new Float32Array(pp, op, Pp)
+       }
+       return Dp ? pp.slice() : pp
+     }
+ 
+     function Dp(pp, ip, cp, op, Ip, Sp, Yp) {
+       const Dp = xp(cp),
+         Ap = function(pp) {
+           switch (pp) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L267-L304` → after: `L180-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L180-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L180-L267) · [Before (L267-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L267-L304)

```diff
-         attachControl(DD) {
-           DD = gD.h.BackCompatCameraNoPreventDefault(arguments);
-           const zD = this.camera.iI(),
-             wD = zD.getInputElement();
-           this._pointerInput || (this._pointerInput = pD => {
-             const sD = pD.event,
-               KD = "touch" === sD.pointerType;
-             if (!this.touchEnabled && KD) return;
-             if (pD.type !== UD.c.POINTERMOVE && -1 === this.buttons.indexOf(sD.button)) return;
-             const rD = sD.target;
-             if (pD.type === UD.c.POINTERDOWN) {
-               if (KD && -1 !== this._activePointerId || !KD && -1 !== this._currentActiveButton) return;
-               this._activePointerId = sD.pointerId;
-               try {
-                 rD?.setPointerCapture(sD.pointerId)
-               } catch (LD) {} - 1 === this._currentActiveButton && (this._currentActiveButton = sD.button), this._previousPosition = {
- ... (22 more removed lines; see GitHub link above)
+         return new Ap(pp.slice(Op, Op + Pp))
+       }
+       let Wp, yp = op;
+       ArrayBuffer.isView(pp) ? (Wp = pp.buffer, yp += pp.byteOffset) : Wp = pp;
+       if (yp + (Sp - 1) * Ip + ip * Dp > Wp.byteLength) throw new Error("Last accessed byte is out of bounds.");
+       const Up = ip * Dp;
+       if (Ip < Up) throw new Error("Byte stride cannot be smaller than the component's byte size.");
+       if (Ip !== Up) {
+         const pp = new Ap(Pp),
+           cp = new Uint8Array(Wp, yp),
+           Op = new Uint8Array(pp.buffer),
+           op = ip * Dp;
+         for (let ip = 0, xp = 0, Lp = 0; ip < Sp; ip++, xp += Ip, Lp += op) Op.set(cp.subarray(xp, xp + op), Lp);
+         return pp
+       }
+       return 1 !== Dp && 0 !== (yp & Dp - 1) && (Op.e.Warn("Array must be aligned to border of element size. Data will be copied."), Yp = !0), Yp ? new Ap(Wp.slice(yp, yp + Pp * Dp)) : new Ap(Wp, yp, Pp)
+ ... (72 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L306-L313` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L269-L271) · [Before (L306-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L306-L313)

```diff
-           }), this._onMouseMove = wD => {
-             if (!zD.isPointerLock) return;
-             const pD = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(wD.movementX * pD, wD.movementY * pD), this._previousPosition = null, DD || wD.preventDefault()
-           }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._pointerInput, UD.c.POINTERDOWN | UD.c.POINTERUP | UD.c.POINTERMOVE), wD && (this._contextMenuBind = DD => this.onContextMenu(DD), wD.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(DD) {
-           DD.preventDefault()
+             ip.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (ip.lookForClosingBracketForUniformBuffer = !1, op.endOfUniformBufferProcessor && (cp = op.endOfUniformBufferProcessor(this.line, ip.isFragment, ip.processingContext)))
+           }
+           Op += cp + "\n"
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L315-L319` → after: `L273-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L273-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L273-L308) · [Before (L315-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L315-L319)

```diff
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const DD = this.camera.iI().getInputElement();
-               DD && DD.removeEventListener("contextmenu", this._contextMenuBind)
+         for (const op of this.children) Op += op.process(pp, ip, cp);
+         return this.additionalDefineKey && (pp[this.additionalDefineKey] = this.additionalDefineValue || "true", cp[this.additionalDefineKey] = pp[this.additionalDefineKey]), Op
+       }
+     }
+     class op {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(pp) {
+         this._lines.length = 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L325-L329` → after: `L312-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L312-L318) · [Before (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L325-L329)

```diff
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
+       }
+     }
+     class Ip extends Op {
+       process(pp, ip, cp) {
+         for (let Op = 0; Op < this.children.length; Op++) {
+           const op = this.children[Op];
+           if (op.isValid(pp)) return op.process(pp, ip, cp)
```

#### 16. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L331-L343` → after: `L320-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L320-L349) · [Before (L331-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L331-L343)

```diff
-       }, (() => {
-         const gD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "buttons" in DD,
-             get: DD => DD.buttons,
-             set: (DD, zD) => {
-               DD.buttons = zD
-             }
+         return ""
+       }
+     }
+     class Sp extends Op {
+       isValid(pp) {
+         return this.testExpression.isTrue(pp)
+       }
+     }
+     class xp {
+       isTrue(pp) {
+         return !0
+       }
+       static postfixToInfix(pp) {
+         const ip = [];
+         for (const cp of pp)
+           if (void 0 === xp._OperatorPriority[cp]) ip.push(cp);
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L345-L356` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L351-L352) · [Before (L345-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L345-L356)

```diff
-           metadata: gD
-         }, KD, rD), (0, pD.i)(null, null, wD, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "angularSensibility" in DD,
-             get: DD => DD.angularSensibility,
-             set: (DD, zD) => {
-               DD.angularSensibility = zD
-             }
+           Ip = pp => {
+             Op < xp._Stack.length - 1 && (xp._Stack[++Op] = pp)
```

#### 18. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L358-L379` → after: `L354-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L354-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L354-L369) · [Before (L358-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L358-L379)

```diff
-           metadata: gD
-         }, LD, cD), gD && Object.defineProperty(DD, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: gD
-         })
-       })(), DD
-     })();
-     LD.d.FreeCameraMouseInput = fD;
-     var ID = wD(40115);
-     let BD = (() => {
-       var DD;
-       let zD, wD, KD, rD = [],
-         LD = [],
-         cD = [],
- ... (6 more removed lines; see GitHub link above)
+           Sp = () => xp._Stack[Op],
+           Lp = () => -1 === Op ? "!!INVALID EXPRESSION!!" : xp._Stack[Op--];
+         let Yp = 0,
+           Dp = "";
+         for (; Yp < pp.length;) {
+           const ip = pp.charAt(Yp),
+             Ap = Yp < pp.length - 1 ? pp.substring(Yp, 2 + Yp) : "";
+           if ("(" === ip) Dp = "", Ip(ip);
+           else if (")" === ip) {
+             for (op(); - 1 !== Op && "(" !== Sp();) cp.push(Lp());
+             Lp()
+           } else if (xp._OperatorPriority[Ap] > 1) {
+             for (op(); - 1 !== Op && xp._OperatorPriority[Sp()] >= xp._OperatorPriority[Ap];) cp.push(Lp());
+             Ip(Ap), Yp++
+           } else Dp += ip;
+           Yp++
```

#### 19. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L381-L390` → after: `L371-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L371-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L371-L437) · [Before (L381-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L381-L390)

```diff
-         attachControl(DD) {
-           DD = gD.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = zD => {
-             if (zD.type !== UD.c.POINTERWHEEL) return;
-             const wD = zD.event,
-               pD = wD.deltaMode === ID.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
-             this._wheelDeltaX += this.wheelPrecisionX * pD * wD.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * pD * wD.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * pD * wD.deltaZ / this._normalize, wD.preventDefault && (DD || wD.pre … [truncated]
-           }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._wheel, UD.c.POINTERWHEEL)
-         }
-         detachControl() {
-           this._observer && (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+         for (op(); - 1 !== Op;) "(" === Sp() ? Lp() : cp.push(Lp());
+         return xp._InfixToPostfixCache.size >= xp.InfixToPostfixCacheLimitSize && xp.ClearCache(), xp._InfixToPostfixCache.set(pp, {
+           result: cp,
+           accessTime: Date.now()
+         }), cp
+       }
+       static ClearCache() {
+         const pp = Array.from(xp._InfixToPostfixCache.entries()).sort(((pp, ip) => pp[1].accessTime - ip[1].accessTime));
+         for (let ip = 0; ip < xp.InfixToPostfixCacheCleanupSize; ip++) xp._InfixToPostfixCache.delete(pp[ip][0])
+       }
+     }
+     xp.InfixToPostfixCacheLimitSize = 5e4, xp.InfixToPostfixCacheCleanupSize = 25e3, xp._InfixToPostfixCache = new Map, xp._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+ ... (51 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L392-L397` → after: `L439-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L439-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L439-L518) · [Before (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L392-L397)

```diff
-         checkInputs() {
-           this.onChangedObservable.notifyObservers({
-             wheelDeltaX: this._wheelDeltaX,
-             wheelDeltaY: this._wheelDeltaY,
-             wheelDeltaZ: this._wheelDeltaZ
-           }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
+         return ip
+       }
+     }
+     var Pp = cp(40096),
+       Wp = cp(40088);
+     const yp = /defined\s*?\((.+?)\)/g,
+       Up = /defined\s*?\[(.+?)\]/g,
+       wp = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       vp = /__decl__/,
+       tp = /light\{X\}.(\w*)/g,
+       Hp = /\{X\}/g,
+       dp = [],
+       ep = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function jp(pp) {
+       pp.processor && pp.processor.initializeShaders && pp.processor.initializeShaders(pp.processingContext)
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L399-L400` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L520-L532) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L399-L400)

```diff
-         getClassName() {
-           return "BaseCameraMouseWheelInput"
+         let Op = cp[cp.length - 1];
+         return "string" === typeof Op && (Op = Op.replace(Up, "defined($1)")), "string" === typeof Op ? Rp(Op) : Op
+       }(op), cp
+     }
+ 
+     function Mp(pp, ip, cp, op) {
+       let Ip;
+       for (; Cp(pp, cp, op);) {
+         Ip = pp.currentLine;
+         const Sp = Ip.substring(0, 5).toLowerCase();
+         if ("#else" === Sp) {
+           const cp = new Op;
+           return ip.children.push(cp), void Cp(pp, cp, op)
```

#### 22. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L402-L403` → after: `L534-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L534-L536) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L402-L403)

```diff
-         getSimpleName() {
-           return "mousewheel"
+         if ("#elif" === Sp) {
+           const pp = qp(Ip, 5);
+           ip.children.push(pp), cp = pp
```

#### 23. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L405-L442` → after: `L538-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L538-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L538-L573) · [Before (L405-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L405-L442)

```diff
-       }, (() => {
-         const gD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "wheelPrecisionX" in DD,
-             get: DD => DD.wheelPrecisionX,
-             set: (DD, zD) => {
-               DD.wheelPrecisionX = zD
-             }
-           },
-           metadata: gD
-         }, rD, LD), (0, pD.i)(null, null, wD, {
- ... (22 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function Cp(pp, ip, cp) {
+       for (; pp.canRead;) {
+         pp.lineIndex++;
+         const op = pp.currentLine;
+         if (op.indexOf("#") >= 0) {
+           const Op = ep.exec(op);
+           if (Op && Op.length) {
+             switch (Op[0]) {
+               case "#ifdef": {
+                 const Op = new Ip;
+                 ip.children.push(Op);
+                 const Sp = qp(op, 6);
+                 Op.children.push(Sp), Mp(pp, Op, Sp, cp);
+ ... (20 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L444-L491` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L575-L576) · [Before (L444-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L444-L491)

```diff
-           },
-           metadata: gD
-         }, fD, BD), gD && Object.defineProperty(DD, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: gD
-         })
-       })(), DD
-     })();
-     var GD;
-     ! function(DD) {
-       DD[DD.MoveRelative = 0] = "MoveRelative", DD[DD.RotateRelative = 1] = "RotateRelative", DD[DD.MoveScene = 2] = "MoveScene"
-     }(GD || (GD = {}));
-     let hD = (() => {
-       var DD;
- ... (32 more removed lines; see GitHub link above)
+             continue
+           }
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L493-L494` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L578-L581) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L493-L494)

```diff
-         set wheelYRotateRelative(DD) {
-           null === DD && this._wheelYAction !== GD.RotateRelative || (this._wheelYAction = GD.RotateRelative, this._wheelYActionCoordinate = DD)
+         const Sp = new Op;
+         if (Sp.line = op, ip.children.push(Sp), "#" === op[0] && "d" === op[1]) {
+           const pp = op.replace(";", "").split(" ");
+           Sp.additionalDefineKey = pp[1], 3 === pp.length && (Sp.additionalDefineValue = pp[2])
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L496-L497` → after: `L583-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L583-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L583-L642) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L496-L497)

```diff
-         get wheelYRotateRelative() {
-           return this._wheelYAction !== GD.RotateRelative ? null : this._wheelYActionCoordinate
+       }
+       return !1
+     }
+ 
+     function Ep(pp, ip, cp, Ip) {
+       const Sp = new Op,
+         xp = new op;
+       return xp.lineIndex = -1, xp.lines = pp.split("\n"), Cp(xp, Sp, Ip), Sp.process(ip, cp, Ip)
+     }
+ 
+     function Xp(pp, ip) {
+       const cp = pp.defines,
+         Op = {};
+       for (const op of cp) {
+         const pp = op.replace("#define", "").replace(";", "").trim().split(" ");
+         Op[pp[0]] = pp.length > 1 ? pp[1] : ""
+ ... (44 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L499-L500` → after: `L644-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L644-L690) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L499-L500)

```diff
-         set wheelZRotateRelative(DD) {
-           null === DD && this._wheelZAction !== GD.RotateRelative || (this._wheelZAction = GD.RotateRelative, this._wheelZActionCoordinate = DD)
+       }
+       dp.length = 0;
+       const Sp = op.join("");
+       Ip ? lp(Sp.toString(), ip, cp) : cp(Sp)
+     }
+     const Qp = {
+       loadFile: (pp, ip, cp, Op, op, Ip) => {
+         throw (0, Pp.o)("FileTools")
+       }
+     }
+   },
+   40088: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op,
+       g: () => Ip,
+       j: () => xp,
+ ... (31 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L502-L503` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L692-L694) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== GD.RotateRelative ? null : this._wheelZActionCoordinate
+         case 0: {
+           const pp = new Uint8Array(ip);
+           return Op && pp.set(new Uint8Array(Op)), pp
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L505-L506` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L696-L698) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L505-L506)

```diff
-         set wheelXMoveScene(DD) {
-           null === DD && this._wheelXAction !== GD.MoveScene || (this._wheelXAction = GD.MoveScene, this._wheelXActionCoordinate = DD)
+         case 4: {
+           const pp = "number" !== typeof ip ? new Int16Array(ip) : new Int16Array(cp ? ip / 2 : ip);
+           return Op && pp.set(new Int16Array(Op)), pp
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L508-L509` → after: `L700-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L700-L706) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== GD.MoveScene ? null : this._wheelXActionCoordinate
+         case 5:
+         case 8:
+         case 9:
+         case 10:
+         case 2: {
+           const pp = "number" !== typeof ip ? new Uint16Array(ip) : new Uint16Array(cp ? ip / 2 : ip);
+           return Op && pp.set(new Uint16Array(Op)), pp
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L511-L512` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L708-L710) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L511-L512)

```diff
-         set wheelYMoveScene(DD) {
-           null === DD && this._wheelYAction !== GD.MoveScene || (this._wheelYAction = GD.MoveScene, this._wheelYActionCoordinate = DD)
+         case 6: {
+           const pp = "number" !== typeof ip ? new Int32Array(ip) : new Int32Array(cp ? ip / 4 : ip);
+           return Op && pp.set(new Int32Array(Op)), pp
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L514-L515` → after: `L712-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L712-L719) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== GD.MoveScene ? null : this._wheelYActionCoordinate
+         case 7:
+         case 11:
+         case 12:
+         case 13:
+         case 14:
+         case 15: {
+           const pp = "number" !== typeof ip ? new Uint32Array(ip) : new Uint32Array(cp ? ip / 4 : ip);
+           return Op && pp.set(new Uint32Array(Op)), pp
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L517-L518` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L721-L723) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L517-L518)

```diff
-         set wheelZMoveScene(DD) {
-           null === DD && this._wheelZAction !== GD.MoveScene || (this._wheelZAction = GD.MoveScene, this._wheelZActionCoordinate = DD)
+         case 1: {
+           const pp = "number" !== typeof ip ? new Float32Array(ip) : new Float32Array(cp ? ip / 4 : ip);
+           return Op && pp.set(new Float32Array(Op)), pp
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L520-L521` → after: `L725-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L725-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L725-L751) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== GD.MoveScene ? null : this._wheelZActionCoordinate
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

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L523-L529` → after: `L753-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L753-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L753-L914) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.I9(0), this._rotateRelative.I9(0), this._moveScene.I9(0), this._updateCamera(), this.camera.Ul().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const DD = KD.e.Zero();
-           this.camera.getViewMatrix().invertToRef(DD);
-           const zD = KD.s.Zero();
-           KD.s.TransformNormalToRef(this._moveRelative, DD, zD), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(zD), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
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

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L531-L532` → after: `L916-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L916-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L916-L949) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L531-L532)

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

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L534-L546` → after: `L951-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L951-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L951-L961) · [Before (L534-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L534-L546)

```diff
-         _updateCameraProperty(DD, zD, wD) {
-           if (0 === DD) return;
-           if (null === zD || null === wD) return;
-           let pD = null;
-           switch (zD) {
-             case GD.MoveRelative:
-               pD = this._moveRelative;
-               break;
-             case GD.RotateRelative:
-               pD = this._rotateRelative;
-               break;
-             case GD.MoveScene:
-               pD = this._moveScene
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

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L548-L556` → after: `L963-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L963-L967) · [Before (L548-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L548-L556)

```diff
-           switch (wD) {
-             case 0:
-               pD.set(DD, 0, 0);
-               break;
-             case 1:
-               pD.set(0, DD, 0);
-               break;
-             case 2:
-               pD.set(0, 0, DD)
+         }), wp.push({
+           target: Up,
+           name: "error",
+           handler: pp => {
+             vp(), Wp(pp), Pp && Up.src && URL.revokeObjectURL(Up.src)
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L558-L666` → after: `L969-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L969-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L969-L992) · [Before (L558-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L558-L666)

```diff
-         }
-       }, (() => {
-         const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(fD[Symbol.metadata] ?? null) : void 0;
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], rD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], (0, pD.i)(DD, null, zD, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "wheelXMoveRelative" in DD,
-             set: (DD, zD) => {
-               DD.wheelXMoveRelative = zD
-             }
-           },
-           metadata: KD
-         }, null, ID), (0, pD.i)(DD, null, wD, {
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

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L668-L713` → after: `L994-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L994-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L994-L1011) · [Before (L668-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L668-L713)

```diff
-           metadata: KD
-         }, null, ID), KD && Object.defineProperty(DD, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: KD
-         })
-       })(), DD
-     })();
-     LD.d.FreeCameraMouseWheelInput = hD;
-     let nD = (() => {
-       var DD;
-       let zD, wD, rD = [],
-         LD = [],
-         cD = [],
-         RD = [];
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

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L715-L724` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1013) · [Before (L715-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L715-L724)

```diff
-             }), this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._pointerInput, UD.c.POINTERDOWN | UD.c.POINTERUP | UD.c.POINTERMOVE), this._onLostFocus) {
-             const DD = this.camera.iI().getInputElement();
-             DD && DD.addEventListener("blur", this._onLostFocus)
-           }
-         }
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const DD = this.camera.iI().getInputElement();
-               DD && DD.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+               return Up
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L729-L746` → after: `L1018-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1018-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1018-L1056) · [Before (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L729-L746)

```diff
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const DD = this.camera,
-             zD = DD.movement.input,
-             wD = zD.getEntry("touch", "rotate"),
-             pD = zD.getEntry("touch", "translate"),
-             sD = DD._calculateHandednessMultiplier(),
-             rD = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
-           if (wD) {
-             const zD = wD.sensitivity ?? 1 / this.touchAngularSensibility;
-             DD.cameraRotation.y = this._offsetX * sD * zD, rD && (DD.cameraRotation.x = -this._offsetY * sD * zD)
-           }
-           if (!rD && pD) {
-             const zD = DD._computeLocalCameraSpeed(),
-               wD = pD.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
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

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L749-L750` → after: `L1062-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1062-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1062-L1168) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L749-L750)

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

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L752-L753` → after: `L1170-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1170-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1170-L1181) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L752-L753)

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

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L755-L831` → after: `L1183-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1183-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1183-L1334) · [Before (L755-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L755-L831)

```diff
-       }, (() => {
-         const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "touchAngularSensibility" in DD,
-             get: DD => DD.touchAngularSensibility,
-             set: (DD, zD) => {
-               DD.touchAngularSensibility = zD
-             }
-           },
-           metadata: KD
-         }, rD, LD), (0, pD.i)(null, null, wD, {
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

#### 46. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L833-L968` → after: `L1336-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1336-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1336-L1391) · [Before (L833-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L833-L968)

```diff
-         return DD = class extends RD {
-           get angularSensibility() {
-             const DD = this.inputs.attached.mouse;
-             return DD ? DD.angularSensibility : 0
-           }
-           set angularSensibility(DD) {
-             const zD = this.inputs.attached.mouse;
-             zD && (zD.angularSensibility = DD)
-           }
-           get keysUp() {
-             const DD = this.inputs.attached.keyboard;
-             return DD ? DD.keysUp : []
-           }
-           set keysUp(DD) {
-             const zD = this.inputs.attached.keyboard;
-             zD && (zD.keysUp = DD)
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

#### 47. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L970-L1028` → after: `L1393-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1393-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1393-L1415) · [Before (L970-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L970-L1028)

```diff
-         }, (() => {
-           const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(RD[Symbol.metadata] ?? null) : void 0;
-           zD = [(0, sD.B)()], wD = [(0, sD.B)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: DD => "ellipsoid" in DD,
-               get: DD => DD.ellipsoid,
-               set: (DD, zD) => {
-                 DD.ellipsoid = zD
-               }
-             },
-             metadata: KD
-           }, AD, UD), (0, pD.i)(null, null, wD, {
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

#### 48. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1030-L1033` → after: `L1417-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1417-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/258.js#L1417-L1508) · [Before (L1030-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/258.js#L1030-L1033)

```diff
-         })(), DD
-       })(),
-       CD = !1;
-     CD || (CD = !0, (0, VD.i)("BABYLON.FreeCamera", PD))
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   40189: (DD, zD, wD) => {
+   40306: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L6)

```diff
-       c: () => UD
+       d: () => Ip
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L476` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L8-L22) · [Before (L8-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L8-L476)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37079),
-       rD = wD(37273),
-       LD = wD(40155),
-       cD = wD(40055),
-       gD = wD(37134),
-       RD = wD(40128),
-       AD = wD(39939);
-     let UD = (() => {
-       var DD, zD;
-       let wD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD = LD.b,
-         VD = [],
-         PD = [],
-         CD = [],
-         xD = [],
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

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L478` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L24) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L478)

```diff
-   40155: (DD, zD, wD) => {
+   40122: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L480` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L26) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L480)

```diff
-       b: () => AD
+       e: () => op
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L482-L488` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L28) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L482-L488)

```diff
-     var pD = wD(39921),
-       sD = wD(37079),
-       KD = wD(39927),
-       rD = wD(37119),
-       LD = wD(37110),
-       cD = wD(39808),
-       gD = wD(39939);
+     var Op = cp(40071);
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L490-L491` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L30-L31) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new rD.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static get Now() {
+         return (0, Op.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L494-L668` → after: `L34-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L34-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L34-L243) · [Before (L494-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L494-L668)

```diff
-     let AD = (() => {
-       var DD;
-       let zD, wD, AD, UD, fD, ID = [],
-         BD = [],
-         GD = [],
-         hD = [],
-         nD = [],
-         MD = [],
-         OD = [],
-         JD = [],
-         ED = [],
-         QD = [];
-       return DD = class {
-         static AddNodeConstructor(DD, zD) {
-           this._NodeConstructors[DD] = zD
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

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L670-L676` → after: `L245-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L245-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L245-L269) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L670-L676)

```diff
-         nC(DD) {
-           if (this._nodeDataStorage._isEnabled === DD) return;
-           const zD = this._hasEffectiveEnabledStateObservers(),
-             wD = zD ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = DD, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(DD), zD) {
-             const DD = this.isEnabled();
-             DD !== wD && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(DD)
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

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L678-L688` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L271-L275) · [Before (L678-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L678-L688)

```diff
-         }
-         isDescendantOf(DD) {
-           return !!this.parent && (this.parent === DD || this.parent.isDescendantOf(DD))
-         }
-         _getDescendants(DD) {
-           let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             wD = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let pD = 0; pD < this._children.length; pD++) {
-               const sD = this._children[pD];
-               wD && !wD(sD) || DD.push(sD), zD || sD._getDescendants(DD, !1, wD)
+           Op.LoadFile(pp, (pp => {
+             try {
+               Function(pp).apply(null), ip && ip()
+             } catch (Op) {
+               cp && cp("LoadScript Error", Op)
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L691-L716` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L281-L288) · [Before (L691-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L691-L716)

```diff
-         getDescendants(DD, zD) {
-           const wD = [];
-           return this._getDescendants(wD, DD, zD), wD
-         }
-         getChildMeshes(DD, zD) {
-           const wD = [];
-           return this._getDescendants(wD, DD, (DD => (!zD || zD(DD)) && void 0 !== DD.cullingStrategy)), wD
-         }
-         getChildren(DD) {
-           let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return this.getDescendants(zD, DD)
-         }
-         _setReady(DD) {
-           DD !== this._nodeDataStorage._isReady && (DD ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
-         }
-         getAnimationByName(DD) {
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

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L719-L725` → after: `L349-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L349-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L349-L356) · [Before (L719-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L719-L725)

```diff
-         deleteAnimationRange(DD) {
-           let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           for (let wD = 0, pD = this.animations.length; wD < pD; wD++) this.animations[wD] && this.animations[wD].deleteRange(DD, zD);
-           this._ranges[DD] = null
-         }
-         getAnimationRange(DD) {
-           return this._ranges[DD] || null
+       }
+       static UnregisterTopRootEvents(pp, ip) {
+         for (let Op = 0; Op < ip.length; Op++) {
+           const op = ip[Op];
+           pp.removeEventListener(op.name, op.handler);
+           try {
+             pp.parent && pp.parent.removeEventListener(op.name, op.handler)
+           } catch (cp) {}
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L727-L734` → after: `L358-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L358-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L358-L393) · [Before (L727-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L727-L734)

```diff
-         clone(zD, wD, pD) {
-           const sD = gD.d.Clone((() => new DD(zD, this.Ul())), this);
-           if (wD && (sD.parent = wD), !pD) {
-             const DD = this.getDescendants(!0);
-             for (let wD = 0; wD < DD.length; wD++) {
-               const pD = DD[wD];
-               pD.clone(zD + "." + pD.name, sD)
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

#### 14. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L736-L742` → after: `L395-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L395-L403) · [Before (L736-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L736-L742)

```diff
-           return sD
-         }
-         getAnimationRanges() {
-           const DD = [];
-           let zD;
-           for (zD in this._ranges) DD.push(this._ranges[zD]);
-           return DD
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

#### 15. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L744-L754` → after: `L405-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L405-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L405-L423) · [Before (L744-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L744-L754)

```diff
-         beginAnimation(DD, zD, wD, pD) {
-           const sD = this.getAnimationRange(DD);
-           return sD ? this._scene.beginAnimation(this, sD.from, sD.to, zD, wD, pD) : null
-         }
-         serializeAnimationRanges() {
-           const DD = [];
-           for (const zD in this._ranges) {
-             const wD = this._ranges[zD];
-             if (!wD) continue;
-             const pD = {};
-             pD.name = zD, pD.from = wD.from, pD.to = wD.to, DD.push(pD)
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

#### 16. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L756-L765` → after: `L425-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L425-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L425-L511) · [Before (L756-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L756-L765)

```diff
-           return DD
-         }
-         computeWorldMatrix(DD) {
-           return this._worldMatrix || (this._worldMatrix = sD.e.Identity()), this._worldMatrix
-         }
-         dispose(DD) {
-           let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._nodeDataStorage._isDisposed = !0, !DD) {
-             const wD = this.getDescendants(!0);
-             for (const pD of wD) pD.dispose(DD, zD)
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

#### 17. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L767-L776` → after: `L513-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L513-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L513-L517) · [Before (L767-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L767-L776)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Bl.notifyObservers(this), this.Bl.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const wD of this._behaviors) wD.detach();
-           this._behaviors.length = 0, this.metadata = null
-         }
-         static ParseAnimationRanges(DD, zD, wD) {
-           if (zD.rG)
-             for (let pD = 0; pD < zD.rG.length; pD++) {
-               const wD = zD.rG[pD];
-               DD.createAnimationRange(wD.name, wD.from, wD.to)
-             }
+       }
+       static _EndMarkNative(pp) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const ip = Op._NativePerformanceCounterHandles.get(pp);
+           ip ? (_native.endPerformanceCounter(ip), Op._NativePerformanceCounterHandles.delete(pp)) : Op.Warn(`Performance counter with name ${pp} was not started.`)
```

#### 18. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L778-L797` → after: `L519-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L519-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L519-L529) · [Before (L778-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L778-L797)

```diff
-         getHierarchyBoundingVectors() {
-           let DD, zD, wD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.Ul().incrementRenderId(), this.computeWorldMatrix(!0);
-           const KD = this;
-           if (KD.FW && KD.QE) {
-             const wD = KD.FW();
-             DD = wD.boundingBox.minimumWorld.clone(), zD = wD.boundingBox.maximumWorld.clone()
-           } else DD = new sD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), zD = new sD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-           if (wD) {
-             const wD = this.getDescendants(!1);
-             for (const KD of wD) {
-               const wD = KD;
-               if (wD.computeWorldMatrix(!0), pD && !pD(wD)) continue;
-               if (!wD.FW || 0 === wD.getTotalVertices()) continue;
-               const rD = wD.FW().boundingBox,
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

#### 19. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L799-L801` → after: `L531-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L531-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L531-L548) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L799-L801)

```diff
-           return {
-             min: DD,
-             max: zD
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

#### 20. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L804-L867` → after: `L552-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L552-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L552-L602) · [Before (L804-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L804-L867)

```diff
-       }, (() => {
-         const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zD = [(0, KD.C)()], wD = [(0, KD.C)()], AD = [(0, KD.C)()], UD = [(0, KD.C)()], fD = [(0, KD.C)()], (0, pD.i)(null, null, zD, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "name" in DD,
-             get: DD => DD.name,
-             set: (DD, zD) => {
-               DD.name = zD
-             }
-           },
-           metadata: sD
-         }, ID, BD), (0, pD.i)(null, null, wD, {
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

#### 21. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L869-L880` → after: `L604-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L604-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/259.js#L604-L613) · [Before (L869-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/259.js#L869-L880)

```diff
-           },
-           metadata: sD
-         }, ED, QD), sD && Object.defineProperty(DD, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: sD
-         })
-       })(), DD._AnimationRangeFactory = (DD, zD, wD) => {
-         throw (0, cD.j)("AnimationRange")
-       }, DD._NodeConstructors = {}, DD
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (169 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L4)

```diff
-   41006: (DD, zD, wD) => {
+   40605: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L8-L182` → after: `L8-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L8-L20) · [Before (L8-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L8-L182)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37119),
-       rD = wD(37079),
-       LD = wD(37125),
-       cD = wD(40155),
-       gD = wD(40335),
-       RD = wD(40106),
-       AD = wD(39832),
-       UD = wD(37088);
-     class fD {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
- ... (159 more removed lines; see GitHub link above)
+     let Op = !1
+   },
+   40195: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => yp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37349),
+       Sp = cp(37320),
+       xp = cp(37345),
+       Lp = cp(38124),
+       Yp = cp(40225);
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L184-L206` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L22-L23) · [Before (L184-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L184-L206)

```diff
-       constructor() {
-         this.onTargetFramingAnimationEndObservable = new KD.b, this._mode = hD.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
-       }
-       get name() {
-         return "Framing"
-       }
-       set mode(DD) {
-         this._mode = DD
-       }
-       get mode() {
-         return this._mode
-       }
-       set radiusScale(DD) {
-         this._radiusScale = DD
-       }
-       get radiusScale() {
- ... (7 more removed lines; see GitHub link above)
+       get wrapU() {
+         return this._wrapU
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L208-L209` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L25-L26) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L208-L209)

```diff
-       set defaultElevation(DD) {
-         this._defaultElevation = DD
+       set wrapU(pp) {
+         this._wrapU = pp
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L211-L212` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L28-L29) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       get wrapV() {
+         return this._wrapV
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L214-L215` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L31-L32) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L214-L215)

```diff
-       set elevationReturnTime(DD) {
-         this._elevationReturnTime = DD
+       set wrapV(pp) {
+         this._wrapV = pp
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L217-L218` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L34-L35) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       get coordinatesMode() {
+         return 0
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L220-L221` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L37-L38) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L220-L221)

```diff
-       set elevationReturnWaitTime(DD) {
-         this._elevationReturnWaitTime = DD
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L223-L224` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L40-L41) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       set isCube(pp) {
+         this._texture && (this._texture.isCube = pp)
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L226-L227` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L43-L44) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L226-L227)

```diff
-       set zoomStopsAnimation(DD) {
-         this._zoomStopsAnimation = DD
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L229-L230` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L46-L47) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set is3D(pp) {
+         this._texture && (this._texture.is3D = pp)
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L232-L233` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L49-L50) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L232-L233)

```diff
-       set framingTime(DD) {
-         this._framingTime = DD
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L235-L236` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L52-L53) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set is2DArray(pp) {
+         this._texture && (this._texture.is2DArray = pp)
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L238-L239` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L55-L56) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       getClassName() {
+         return "ThinTexture"
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L241-L253` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L58-L59) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L241-L253)

```diff
-       init() {}
-       attach(DD) {
-         this._attachedCamera = DD;
-         const zD = this._attachedCamera.Ul();
-         hD.EasingFunction.setEasingMode(hD.EasingMode), this._onPrePointerObservableObserver = zD.onPrePointerObservable.add((DD => {
-           DD.type !== RD.c.POINTERDOWN ? DD.type === RD.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = DD.onMeshTargetChangedObservable.add((DD => {
-           DD && DD.FW && this.zoomOnMesh(DD, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = DD.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       static _IsRenderTargetWrapper(pp) {
+         return void 0 !== pp?.shareDepth
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L255-L265` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L61-L62) · [Before (L255-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L255-L265)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const DD = this._attachedCamera.Ul();
-         this._onPrePointerObservableObserver && DD.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
-       }
-       zoomOnMesh(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         DD.computeWorldMatrix(!0);
-         const pD = DD.FW().boundingBox;
-         this.zoomOnBoundingInfo(pD.minimumWorld, pD.maximumWorld, zD, wD)
+       constructor(pp) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Yp.c.Zero(), this._cachedBaseSize = Yp.c.Zero(), this._initialSamplingMode = 2, this._texture = Dp. … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L267-L272` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L64-L65) · [Before (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L267-L272)

```diff
-       zoomOnMeshHierarchy(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         DD.computeWorldMatrix(!0);
-         const pD = DD.getHierarchyBoundingVectors(!0);
-         this.zoomOnBoundingInfo(pD.min, pD.max, zD, wD)
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L274-L283` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L67-L69) · [Before (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L274-L283)

```diff
-       zoomOnMeshesHierarchy(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const pD = new rD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           sD = new rD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         for (let KD = 0; KD < DD.length; KD++) {
-           const zD = DD[KD].getHierarchyBoundingVectors(!0);
-           rD.s.CheckExtends(zD.min, pD, sD), rD.s.CheckExtends(zD.max, pD, sD)
-         }
-         this.zoomOnBoundingInfo(pD, sD, zD, wD)
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L285-L308` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L71-L74) · [Before (L285-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L285-L308)

```diff
-       zoomOnBoundingInfo(DD, zD) {
-         let wD, pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (!this._attachedCamera) return !1;
-         const KD = DD.y,
-           LD = KD + (zD.y - KD) * this._positionScale,
-           cD = zD.subtract(DD).scale(.5);
-         if (!isFinite(LD)) return !1;
-         if (pD) wD = new rD.s(0, LD, 0);
-         else {
-           const zD = DD.add(cD);
-           wD = new rD.s(zD.x, LD, zD.z)
-         }
-         this._vectorTransition || (this._vectorTransition = BD.d.CreateAnimation("target", BD.d.ANIMATIONTYPE_VECTOR3, 60, hD.EasingFunction)), this._betaIsAnimating = !0;
-         let gD = BD.d.TransitionTo("target", wD, this._attachedCamera, this._attachedCamera.Ul(), 60, this._vectorTransition, this._framingTime);
-         gD && this._animatables.push(gD);
- ... (8 more removed lines; see GitHub link above)
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L310-L312` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L76) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L310-L312)

```diff
-         return this._radiusTransition || (this._radiusTransition = BD.d.CreateAnimation("radius", BD.d.ANIMATIONTYPE_FLOAT, 60, hD.EasingFunction)), gD = BD.d.TransitionTo("radius", RD, this._attachedCamera, this._attachedCamera.Ul(), 60, this._radiusTransition, this._framingTime … [truncated]
-           this.stopAllAnimations(), sD && sD(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
-         })), gD && this._animatables.push(gD), !0
+         return this._cachedSize
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L314-L318` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L78-L79) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L314-L318)

```diff
-       _calculateLowerRadiusFromModelBoundingSphere(DD, zD) {
-         const wD = this._attachedCamera;
-         if (!wD) return 0;
-         let pD = wD._calculateLowerRadiusFromModelBoundingSphere(DD, zD, this._radiusScale);
-         return wD.lowerRadiusLimit && this._mode === hD.IgnoreBoundsSizeMode && (pD = pD < wD.lowerRadiusLimit ? wD.lowerRadiusLimit : pD), wD.upperRadiusLimit && (pD = pD > wD.upperRadiusLimit ? wD.upperRadiusLimit : pD), pD
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L320-L334` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L81-L82) · [Before (L320-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L320-L334)

```diff
-       _maintainCameraAboveGround() {
-         if (this._elevationReturnTime < 0) return;
-         const DD = AD.c.Now - this._lastInteractionTime,
-           zD = .5 * Math.PI - this._defaultElevation,
-           wD = .5 * Math.PI;
-         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > wD && DD >= this._elevationReturnWaitTime) {
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = BD.d.CreateAnimation("beta", BD.d.ANIMATIONTYPE_FLOAT, 60, hD.EasingFunction));
-           const DD = BD.d.TransitionTo("beta", zD, this._attachedCamera, this._attachedCamera.Ul(), 60, this._betaTransition, this._elevationReturnTime, (() => {
-             this._clearAnimationLocks(), this.stopAllAnimations()
-           }));
-           DD && this._animatables.push(DD)
-         }
-       }
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L336-L337` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L84-L86) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = AD.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       updateSamplingMode(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(pp, this._texture, this._texture.generateMipMaps && ip)
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L339-L340` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L88-L89) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L339-L340)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L342-L343` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L91-L92) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L342-L343)

```diff
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L346-L753` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L95-L96) · [Before (L346-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L346-L753)

```diff
-     hD.EasingFunction = new class extends ID {
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = DD
-       }
-       easeInCore(DD) {
-         return this.exponent <= 0 ? DD : (Math.exp(this.exponent * DD) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, hD.EasingMode = ID.EASINGMODE_EASEINOUT, hD.IgnoreBoundsSizeMode = 0, hD.FitFrustumSidesMode = 1;
-     var nD = wD(40148),
-       MD = wD(40146),
-       OD = wD(40179),
-       JD = wD(40027);
-     let ED = (() => {
-         var DD;
-         let zD, wD = [],
- ... (392 more removed lines; see GitHub link above)
+     var Ap, Pp = cp(40233),
+       Wp = cp(40096);
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L756` → after: `L99-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L99-L110) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L756)

```diff
-       let zD, wD, KD, LD, cD, gD, RD, AD, UD, fD, ID, BD = [],
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

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L777-L784` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L131-L133) · [Before (L777-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L777-L784)

```diff
-       return DD = class {
-         constructor() {
-           this.camera = (0, pD.m)(this, BD), this.keysUp = (0, pD.m)(this, GD, [38]), this.keysDown = ((0, pD.m)(this, hD), (0, pD.m)(this, nD, [40])), this.keysLeft = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, [37])), this.keysRight = ((0, pD.m)(this, ED), (0, pD.m)(this, QD, [39 … [truncated]
-             ctrl: !1,
-             alt: !1
-           }, this._keyboardConditions = {
-             modifiers: this._keyboardModifiers
-           }, this._rotateDirection = new rD.r, this._panDirection = new rD.r
+       return pp = class extends Bp {
+         set hasAlpha(pp) {
+           this._hasAlpha = pp
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L786-L787` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L135-L136) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L786-L787)

```diff
-         get useAltToZoom() {
-           return this._useAltToZoom
+         get hasAlpha() {
+           return this._hasAlpha
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L789-L790` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L138-L139) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L789-L790)

```diff
-         set useAltToZoom(DD) {
-           this._useAltToZoom = DD, this._applyUseAltToZoomToInputMap()
+         set getAlphaFromRGB(pp) {
+           this._getAlphaFromRGB !== pp && (this._getAlphaFromRGB = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L792-L806` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L141-L142) · [Before (L792-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L792-L806)

```diff
-         _applyUseAltToZoomToInputMap() {
-           if (!this.camera?.movement) return;
-           const DD = this.camera.movement.input,
-             zD = DD.getEntry("keyboard", "zoom", {
-               modifiers: {
-                 alt: !0
-               }
-             });
-           !this._useAltToZoom && zD ? DD.inputMap.splice(DD.inputMap.indexOf(zD), 1) : this._useAltToZoom && !zD && DD.addEntry({
-             source: "keyboard",
-             modifiers: {
-               alt: !0
-             },
-             interaction: "zoom"
-           })
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L808-L822` → after: `L144-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L144-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L144-L239) · [Before (L808-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L808-L822)

```diff
-         attachControl(DD) {
-           DD = JD.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Ul(), this._engine = this._scene.iI(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zD => {
-             const wD = zD.event;
-             if (!wD.metaKey)
-               if (zD.type === VD.d.KEYDOWN) {
-                 if (this._ctrlPressed = wD.ctrlKey, this._altPressed = wD.altKey, -1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysReset.i … [truncated]
-                   -1 === this._keys.indexOf(wD.keyCode) && this._keys.push(wD.keyCode), wD.preventDefault && (DD || wD.preventDefault())
-                 }
-               } else if (-1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysReset.indexOf(wD.keyCode) || -1 !== this.keysZoomIn.indexOf(wD.k … [truncated]
-               const zD = this._keys.indexOf(wD.keyCode);
-               zD >= 0 && this._keys.splice(zD, 1), wD.preventDefault && (DD || wD.preventDefault())
-             }
-           })))
+         set coordinatesIndex(pp) {
+           this._coordinatesIndex !== pp && (this._coordinatesIndex = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(pp) {
+           this._coordinatesMode !== pp && (this._coordinatesMode = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+         }
+         get coordinatesMode() {
+           return this._coordinatesMode
+         }
+         get wrapU() {
+           return this._wrapU
+         }
+         set wrapU(pp) {
+ ... (80 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L824-L825` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L241-L242) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L824-L825)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         set onDispose(pp) {
+           this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L827-L845` → after: `L244-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L244-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L244-L361) · [Before (L827-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L827-L845)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const DD = this.camera,
-               zD = DD.movement.input;
-             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
-             const wD = this._rotateDirection.set(0, 0),
-               pD = this._panDirection.set(0, 0);
-             let sD = 0,
-               KD = 0;
-             for (let rD = 0; rD < this._keys.length; rD++) {
-               const LD = this._keys[rD];
-               if (this._keyboardConditions.key = LD, -1 === this.keysReset.indexOf(LD)) {
-                 const DD = zD.resolveInteraction("keyboard", this._keyboardConditions);
-                 if (DD)
-                   if ("pan" === DD.interaction) KD = Math.max(KD, DD.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(LD) ? pD.x -= 1 : -1 !== this.keysRight.indexOf(LD) ? pD.x += 1 : -1 !== this.keysUp.indexOf(LD) ? pD.y += 1 : -1 !== this.keysDown.index … [truncated]
-                   else if ("zoom" === DD.interaction) {
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
+         constructor(ip) {
+           let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           super(null), this.uniqueId = ((0, Op.l)(this, Np), (0, Op.l)(this, Tp, void 0)), this.name = ((0, Op.l)(this, fp), (0, Op.l)(this, bp, void 0)), this.displayName = ((0, Op.l)(this, hp), (0, Op.l)(this, ap, void 0)), this.metadata = ((0, Op.l)(this, np), (0, Op.l)(this,  … [truncated]
+         }
+         Gl() {
+           return this._scene
+         }
+ ... (102 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L850-L851` → after: `L366-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L366-L384) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L850-L851)

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

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L853-L854` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L386-L387) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L853-L854)

```diff
-         getSimpleName() {
-           return "keyboard"
+         static _IsScene(pp) {
+           return "Scene" === pp.getClassName()
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L857-L858` → after: `L390-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L390-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L390-L441) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L857-L858)

```diff
-         const rD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], fD = [(0, sD.C)()], ID = [(0, sD.C)()], (0, pD.i)(DD, null, ID, {
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
+ ... (36 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L860` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L443) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L860)

```diff
-           name: "useAltToZoom",
+           name: "gammaSpace",
```

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L864-L865` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L447-L448) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L864-L865)

```diff
-             has: DD => "useAltToZoom" in DD,
-             get: DD => DD.useAltToZoom
+             has: pp => "gammaSpace" in pp,
+             get: pp => pp.gammaSpace
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L868` → after: `L451-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L451-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L451-L491) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L868)

```diff
-         }, null, BD), (0, pD.i)(null, null, zD, {
+         }, null, Np), (0, Op.j)(pp, null, Ep, {
+           kind: "getter",
+           name: "lodGenerationOffset",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "lodGenerationOffset" in pp,
+             get: pp => pp.lodGenerationOffset
+           },
+           metadata: Ip
+         }, null, Np), (0, Op.j)(pp, null, Xp, {
+           kind: "getter",
+           name: "lodGenerationScale",
+           static: !1,
+           private: !1,
+           access: {
+ ... (25 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L870` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L493) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L870)

```diff
-           name: "keysUp",
+           name: "uniqueId",
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L874-L875` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L497-L498) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L874-L875)

```diff
-             has: DD => "keysUp" in DD,
-             get: DD => DD.keysUp,
+             has: pp => "uniqueId" in pp,
+             get: pp => pp.uniqueId,
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L877` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L500) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L877)

```diff
-               DD.keysUp = zD
+               pp.uniqueId = ip
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L881` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L504) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L881)

```diff
-         }, GD, hD), (0, pD.i)(null, null, wD, {
+         }, Tp, fp), (0, Op.j)(null, null, cp, {
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L883` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L506) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L883)

```diff
-           name: "keysDown",
+           name: "name",
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L887-L888` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L510-L511) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L887-L888)

```diff
-             has: DD => "keysDown" in DD,
-             get: DD => DD.keysDown,
+             has: pp => "name" in pp,
+             get: pp => pp.name,
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L890` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L513) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L890)

```diff
-               DD.keysDown = zD
+               pp.name = ip
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L894` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L517) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L894)

```diff
-         }, nD, MD), (0, pD.i)(null, null, KD, {
+         }, bp, hp), (0, Op.j)(null, null, Yp, {
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L896` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L519) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L896)

```diff
-           name: "keysLeft",
+           name: "displayName",
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L900-L901` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L523-L524) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L900-L901)

```diff
-             has: DD => "keysLeft" in DD,
-             get: DD => DD.keysLeft,
+             has: pp => "displayName" in pp,
+             get: pp => pp.displayName,
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L903` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L526) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L903)

```diff
-               DD.keysLeft = zD
+               pp.displayName = ip
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L907` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L530) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L907)

```diff
-         }, OD, ED), (0, pD.i)(null, null, LD, {
+         }, ap, np), (0, Op.j)(null, null, Ap, {
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L909` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L532) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L909)

```diff
-           name: "keysRight",
+           name: "metadata",
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L913-L914` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L536-L537) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L913-L914)

```diff
-             has: DD => "keysRight" in DD,
-             get: DD => DD.keysRight,
+             has: pp => "metadata" in pp,
+             get: pp => pp.metadata,
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L916` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L539) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L916)

```diff
-               DD.keysRight = zD
+               pp.metadata = ip
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L920` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L543) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L920)

```diff
-         }, QD, XD), (0, pD.i)(null, null, cD, {
+         }, Fp, gp), (0, Op.j)(null, null, Wp, {
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L922` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L545) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L922)

```diff
-           name: "keysReset",
+           name: "_hasAlpha",
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L926-L927` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L549-L550) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L926-L927)

```diff
-             has: DD => "keysReset" in DD,
-             get: DD => DD.keysReset,
+             has: pp => "_hasAlpha" in pp,
+             get: pp => pp._hasAlpha,
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L929` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L552) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L929)

```diff
-               DD.keysReset = zD
+               pp._hasAlpha = ip
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L933` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L556) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L933)

```diff
-         }, PD, CD), (0, pD.i)(null, null, gD, {
+         }, Gp, rp), (0, Op.j)(null, null, yp, {
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L935` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L558) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L935)

```diff
-           name: "keysZoomIn",
+           name: "_getAlphaFromRGB",
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L939-L940` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L562-L563) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L939-L940)

```diff
-             has: DD => "keysZoomIn" in DD,
-             get: DD => DD.keysZoomIn,
+             has: pp => "_getAlphaFromRGB" in pp,
+             get: pp => pp._getAlphaFromRGB,
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L942` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L565) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L942)

```diff
-               DD.keysZoomIn = zD
+               pp._getAlphaFromRGB = ip
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L946` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L569) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L946)

```diff
-         }, xD, TD), (0, pD.i)(null, null, RD, {
+         }, Zp, zp), (0, Op.j)(null, null, Up, {
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L948` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L571) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L948)

```diff
-           name: "keysZoomOut",
+           name: "level",
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L952-L953` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L575-L576) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L952-L953)

```diff
-             has: DD => "keysZoomOut" in DD,
-             get: DD => DD.keysZoomOut,
+             has: pp => "level" in pp,
+             get: pp => pp.level,
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L955` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L578) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L955)

```diff
-               DD.keysZoomOut = zD
+               pp.level = ip
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L959` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L582) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L959)

```diff
-         }, bD, jD), (0, pD.i)(null, null, AD, {
+         }, sp, Kp), (0, Op.j)(null, null, wp, {
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L961` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L584) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L961)

```diff
-           name: "panningSensibility",
+           name: "_coordinatesIndex",
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L965-L966` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L588-L589) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L965-L966)

```diff
-             has: DD => "panningSensibility" in DD,
-             get: DD => DD.panningSensibility,
+             has: pp => "_coordinatesIndex" in pp,
+             get: pp => pp._coordinatesIndex,
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L968` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L591) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L968)

```diff
-               DD.panningSensibility = zD
+               pp._coordinatesIndex = ip
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L972` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L595) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L972)

```diff
-         }, dD, SD), (0, pD.i)(null, null, UD, {
+         }, Vp, ii), (0, Op.j)(null, null, vp, {
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L974` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L597) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L974)

```diff
-           name: "zoomingSensibility",
+           name: "optimizeUVAllocation",
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L978-L979` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L601-L602) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L978-L979)

```diff
-             has: DD => "zoomingSensibility" in DD,
-             get: DD => DD.zoomingSensibility,
+             has: pp => "optimizeUVAllocation" in pp,
+             get: pp => pp.optimizeUVAllocation,
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L981` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L604) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L981)

```diff
-               DD.zoomingSensibility = zD
+               pp.optimizeUVAllocation = ip
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L985` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L608) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L985)

```diff
-         }, iD, lD), (0, pD.i)(null, null, fD, {
+         }, ci, Oi), (0, Op.j)(null, null, tp, {
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L987` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L610) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L987)

```diff
-           name: "angularSpeed",
+           name: "_coordinatesMode",
```

#### 78. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L991-L992` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L614-L615) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L991-L992)

```diff
-             has: DD => "angularSpeed" in DD,
-             get: DD => DD.angularSpeed,
+             has: pp => "_coordinatesMode" in pp,
+             get: pp => pp._coordinatesMode,
```

#### 79. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L994` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L617) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L994)

```diff
-               DD.angularSpeed = zD
+               pp._coordinatesMode = ip
```

#### 80. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L998-L1044` → after: `L621-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L621-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L621-L630) · [Before (L998-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L998-L1044)

```diff
-         }, WD, ND), rD && Object.defineProperty(DD, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: rD
-         })
-       })(), DD
-     })();
-     OD.d.ArcRotateCameraKeyboardMoveInput = PD;
-     var CD = wD(37754),
-       xD = wD(40115);
-     let TD = (() => {
-       var DD;
-       let zD, wD, KD, cD = [],
-         gD = [],
-         AD = [],
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

#### 81. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1046-L1102` → after: `L632-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L632-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L632-L634) · [Before (L1046-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1046-L1102)

```diff
-             pD && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(pD)) : this.camera.movement.zoomAccumulatedPixels += pD), wD.preventDefault && (DD || wD.preventDefault())
-           }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._wheel, RD.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.I9(0)
-         }
-         detachControl() {
-           this._observer && (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
-         }
-         checkInputs() {
-           if (!this.zoomToMouseLocation) return;
-           const DD = this.camera;
-           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(DD.inertialAlphaOffset) + Math.abs(DD.inertialBetaOffset) + Math.abs(DD.inertialRadiusOffset)) {
-             this._updateHitPlane(), DD.target.addInPlace(this._inertialPanning), DD.radius -= this._zoomToMouseRadiusOffset;
-             const zD = DD.movement.getFrameIndependentDecay(DD.inertia);
-             this._inertialPanning.scaleInPlace(zD), this._zoomToMouseRadiusOffset *= zD, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < UD.b && (this._zoomToMouseRadiusOffset = 0)
-           }
-         }
-         getClassName() {
- ... (41 more removed lines; see GitHub link above)
+           },
+           metadata: Ip
+         }, Si, xi), (0, Op.j)(null, null, jp, {
```

#### 82. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1104` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L636) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1104)

```diff
-           name: "wheelPrecision",
+           name: "anisotropicFilteringLevel",
```

#### 83. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1108-L1109` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L640-L641) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1108-L1109)

```diff
-             has: DD => "wheelPrecision" in DD,
-             get: DD => DD.wheelPrecision,
+             has: pp => "anisotropicFilteringLevel" in pp,
+             get: pp => pp.anisotropicFilteringLevel,
```

#### 84. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1111` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L643) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1111)

```diff
-               DD.wheelPrecision = zD
+               pp.anisotropicFilteringLevel = ip
```

#### 85. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1115` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L647) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1115)

```diff
-         }, cD, gD), (0, pD.i)(null, null, wD, {
+         }, Li, Yi), (0, Op.j)(null, null, Mp, {
```

#### 86. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1117` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L649) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1117)

```diff
-           name: "zoomToMouseLocation",
+           name: "invertZ",
```

#### 87. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1121-L1122` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L653-L654) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1121-L1122)

```diff
-             has: DD => "zoomToMouseLocation" in DD,
-             get: DD => DD.zoomToMouseLocation,
+             has: pp => "invertZ" in pp,
+             get: pp => pp.invertZ,
```

#### 88. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1124` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L656) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1124)

```diff
-               DD.zoomToMouseLocation = zD
+               pp.invertZ = ip
```

#### 89. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1128` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L660) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1128)

```diff
-         }, AD, fD), (0, pD.i)(null, null, KD, {
+         }, Di, Ai), (0, Op.j)(null, null, Cp, {
```

#### 90. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1130` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L662) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1130)

```diff
-           name: "wheelDeltaPercentage",
+           name: "lodLevelInAlpha",
```

#### 91. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1134-L1135` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L666-L667) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1134-L1135)

```diff
-             has: DD => "wheelDeltaPercentage" in DD,
-             get: DD => DD.wheelDeltaPercentage,
+             has: pp => "lodLevelInAlpha" in pp,
+             get: pp => pp.lodLevelInAlpha,
```

#### 92. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1137` → after: `L669-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L669-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L669-L682) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1137)

```diff
-               DD.wheelDeltaPercentage = zD
+               pp.lodLevelInAlpha = ip
+             }
+           },
+           metadata: Ip
+         }, Pi, Wi), (0, Op.j)(null, null, Jp, {
+           kind: "field",
+           name: "isRenderTarget",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "isRenderTarget" in pp,
+             get: pp => pp.isRenderTarget,
+             set: (pp, ip) => {
+               pp.isRenderTarget = ip
```

#### 93. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1147` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L692) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1147)

```diff
-       })(), DD
+       })(), pp.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, pp
```

#### 94. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1149-L1222` → after: `L694-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L694-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L694-L711) · [Before (L1149-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1149-L1222)

```diff
-     OD.d.ArcRotateCameraMouseWheelInput = TD;
-     var bD, jD, dD = wD(39808);
-     class SD extends OD.h {
-       constructor(DD) {
-         super(DD)
-       }
-       addMouseWheel() {
-         return this.add(new TD), this
-       }
-       addPointers() {
-         return this.add(new XD), this
-       }
-       addKeyboard() {
-         return this.add(new PD), this
-       }
-     }(bD = SD.prototype).addVRDeviceOrientation ?? (bD.addVRDeviceOrientation = (0, dD.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (jD = SD.prototype).addGamepad ?? (jD.addGamepad = (0, dD.h)("ArcRotateCameraInputsManager", "addGamepad"));
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

#### 95. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1225` → after: `L714-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L714-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L714-L754) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1225)

```diff
-       return isNaN(DD) ? zD : DD
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
+ ... (25 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1229-L1236` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L760) · [Before (L1229-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1229-L1236)

```diff
-         let zD, wD, cD, RD, AD, ID, BD, OD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD, dD, iD, lD, WD, yD, kD, mD, eD, oD, aD, uD = MD.g,
-           vD = [],
-           tD = [],
-           FD = [],
-           YD = [],
-           HD = [],
-           qD = [],
-           Dz = [],
+         let ip, cp, yp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep = xp.d,
```

#### 97. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1256-L1433` → after: `L780-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L780-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L780-L789) · [Before (L1256-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1256-L1433)

```diff
-           Oz = [],
-           Jz = [],
-           Ez = [],
-           Qz = [],
-           Xz = [],
-           Vz = [],
-           Pz = [],
-           Cz = [],
-           xz = [],
-           Tz = [],
-           bz = [],
-           jz = [],
-           dz = [],
-           Sz = [],
-           iz = [],
-           lz = [],
- ... (162 more removed lines; see GitHub link above)
+           Kp = [],
+           Vp = [],
+           ii = [],
+           ci = [],
+           Oi = [],
+           oi = [];
+         return pp = class extends Ep {
+           static _CreateVideoTexture(ip, cp, Op) {
+             arguments.length > 5 && void 0 !== arguments[5] || pp.TRILINEAR_SAMPLINGMODE;
+             throw (0, Yp.o)("VideoTexture")
```

#### 98. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1435-L1437` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L791-L792) · [Before (L1435-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1435-L1437)

```diff
-           get zoomToMouseLocation() {
-             const DD = this.inputs.attached.mousewheel;
-             return !!DD && DD.zoomToMouseLocation
+           get noMipmap() {
+             return this._noMipmap
```

#### 99. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1439-L1441` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L794-L795) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1439-L1441)

```diff
-           set zoomToMouseLocation(DD) {
-             const zD = this.inputs.attached.mousewheel;
-             zD && (zD.zoomToMouseLocation = DD)
+           get mimeType() {
+             return this._mimeType
```

#### 100. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1443-L1445` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L797-L798) · [Before (L1443-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1443-L1445)

```diff
-           get wheelDeltaPercentage() {
-             const DD = this.inputs.attached.mousewheel;
-             return DD ? DD.wheelDeltaPercentage : 0
+           set isBlocking(pp) {
+             this._isBlocking = pp
```

#### 101. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1447-L1449` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L800-L801) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1447-L1449)

```diff
-           set wheelDeltaPercentage(DD) {
-             const zD = this.inputs.attached.mousewheel;
-             zD && (zD.wheelDeltaPercentage = DD)
+           get isBlocking() {
+             return this._isBlocking
```

#### 102. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1451-L1452` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L803-L804) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1451-L1452)

```diff
-           get _useCtrlForPanning() {
-             return this._useCtrlForPanningInternal
+           get invertY() {
+             return this._invertY
```

#### 103. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1454-L1465` → after: `L806-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L806-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L806-L827) · [Before (L1454-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1454-L1465)

```diff
-           set _useCtrlForPanning(DD) {
-             this._useCtrlForPanningInternal = DD;
-             const zD = this.movement.input,
-               wD = zD.getEntry("keyboard", "pan", {
-                 modifiers: {
-                   ctrl: !0
-                 }
-               });
-             !DD && wD ? zD.inputMap.splice(zD.inputMap.indexOf(wD), 1) : DD && !wD && zD.addEntry({
-               source: "keyboard",
-               modifiers: {
-                 ctrl: !0
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
+ ... (6 more added lines; see GitHub link above)
```

#### 104. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1467-L1471` → after: `L829-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L829-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L829-L842) · [Before (L1467-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1467-L1471)

```diff
-               interaction: "pan"
-             });
-             const pD = zD.getEntry("pointer", "pan", {
-               modifiers: {
-                 ctrl: !0
+               qp = (ip, cp) => {
+                 this._loadingError = !0, this._errorObject = {
+                   message: ip,
+                   exception: cp
+                 }, Ap && Ap(ip, cp), pp.OnTextureLoadErrorObservable.notifyObservers(this)
+               };
+             if (!this.url && !ep) return this._delayedOnLoad = Rp, void(this._delayedOnError = qp);
+             if (this._texture = ep ?? this._getFromCache(this.url, xp, Lp, this._invertY, dp, this.isCube), this._texture)
+               if (this._texture.isReady) Dp.b.SetImmediate((() => Rp()));
+               else {
+                 const pp = this._texture.onLoadedObservable.add(Rp);
+                 this._texture.onErrorObservable.add((ip => {
+                   qp(ip.message, ip.exception), this._texture?.onLoadedObservable.remove(pp)
+                 }))
```

#### 105. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1473-L1549` → after: `L844-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L844-L851) · [Before (L1473-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1473-L1549)

```diff
-             });
-             !DD && pD ? zD.inputMap.splice(zD.inputMap.indexOf(pD), 1) : DD && !pD && zD.addEntry({
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
-           set _panningMouseButton(DD) {
-             this._panningMouseButtonInternal = DD;
-             const zD = this.movement.input.getEntry("pointer", "pan", {
- ... (61 more removed lines; see GitHub link above)
+             else if (kp && kp.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Rp, this._delayedOnError = qp;
+             else {
+               try {
+                 this._texture = mp.createTexture(this.url, xp, this._invertY, kp, Lp, Rp, qp, this._buffer, void 0, this._format, this._forcedExtension, Up, wp, tp, dp)
+               } catch (Mp) {
+                 throw qp("error loading", Mp), Mp
+               }
+               Wp && (this._buffer = null)
```

#### 106. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1572-L1580` → after: `L854-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L854-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L854-L903) · [Before (L1572-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1572-L1580)

```diff
-           _isSynchronizedViewMatrix() {
-             return !!super._isSynchronizedViewMatrix() && (this._cache.bq.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
-           }
-           attachControl(DD, zD) {
-             let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-               pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
-             const sD = arguments;
-             zD = JD.h.BackCompatCameraNoPreventDefault(sD), this._useCtrlForPanning = wD, this._panningMouseButton = pD, "boolean" === typeof sD[0] && (sD.length > 1 && (this._useCtrlForPanning = sD[1]), sD.length > 2 && (this._panningMouseButton = sD[2])), this.inputs.attachElem … [truncated]
-               this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
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
+ ... (34 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1583-L1584` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L937-L938) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1583-L1584)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
+           getClassName() {
+             return "Texture"
```

#### 108. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1586-L1589` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L940-L941) · [Before (L1586-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1586-L1589)

```diff
-           _applyRotationAndZoomDelta(DD, zD, wD) {
-             const pD = this.invertRotation ? -1 : 1;
-             let sD = DD * this._calculateHandednessMultiplier();
-             this.beta < 0 && (sD *= -1), this.alpha += sD * pD, this.beta += zD * pD, this.radius -= wD
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
```

#### 109. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1591-L1605` → after: `L943-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L943-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L943-L957) · [Before (L1591-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1591-L1605)

```diff
-           _applyPanDelta(DD, zD) {
-             const wD = rD.n.WI[0].Z2(DD, zD, zD);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), wD.multiplyInPlace(this.panningAxis), rD.s.TransformNormalToRef(wD, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const DD = this.upVector,
-                 zD = rD.s.CrossToRef(this._transformedDirection, DD, this._transformedDirection);
-               rD.s.CrossToRef(DD, zD, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
-             if (!this._targetHost)
-               if (null !== this.panningDistanceLimit) {
-                 this._transformedDirection.addInPlace(this.bq);
-                 rD.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.bq.pC(this._transformedDirection)
-               } else {
-                 if (this.parent) {
-                   const DD = rD.n.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(DD), DD.transposeToRef(DD), rD.s.TransformCoordinatesToRef(this._transformedDirection, DD, this._transformedDirection)
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
```

#### 110. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1623-L1631` → after: `L960-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L960-L963) · [Before (L1623-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1623-L1631)

```diff
-             if (DD) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let DD = !1;
-               const zD = this._scene.iI().getDeltaTime() / 1e3,
-                 wD = 1 - Math.pow(2, -zD / this._currentInterpolationFactor),
-                 pD = ZD(this._goalRadius, this.radius);
-               if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
-                 const zD = rD.n.WI[0].set(ZD(this._goalTarget.x, this.bq.x), ZD(this._goalTarget.y, this.bq.y), ZD(this._goalTarget.z, this.bq.z));
-                 rD.s.LerpToRef(this.target, zD, wD, this.bq), 10 * rD.s.Distance(this.target, zD) / pD < UD.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.pC(zD), this.setTarget(this.target, !1, !0, !0)) : DD = !0
+             const Sp = pp => {
+               if (pp && pp._texture && (pp._texture._cachedWrapU = null, pp._texture._cachedWrapV = null, pp._texture._cachedWrapR = null), ip.samplingMode) {
+                 const cp = ip.samplingMode;
+                 pp && pp.samplingMode !== cp && pp.updateSamplingMode(cp)
```

#### 111. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1633-L1643` → after: `L965-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L965-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L965-L977) · [Before (L1633-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1633-L1643)

```diff
-               if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
-                 const zD = rD.i.RotationAlphaBetaGammaToRef(ZD(this._goalAlpha, this.alpha), ZD(this._goalBeta, this.beta), 0, rD.n.Quaternion[0]),
-                   pD = rD.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, rD.n.Quaternion[1]),
-                   sD = rD.i.SlerpToRef(pD, zD, wD, rD.n.Quaternion[2]);
-                 sD.normalize();
-                 const KD = sD.toAlphaBetaGammaToRef(rD.n.WI[0]);
-                 if (this.alpha = KD.x, this.beta = KD.y, sD.isApprox(zD, UD.b / 5)) {
-                   this._goalAlpha = NaN, this._goalBeta = NaN;
-                   const DD = zD.toAlphaBetaGammaToRef(rD.n.WI[0]);
-                   this.alpha = DD.x, this.beta = DD.y
-                 } else DD = !0
+               if (pp && ip.animations)
+                 for (let cp = 0; cp < ip.animations.length; cp++) {
+                   const Op = ip.animations[cp],
+                     op = (0, Lp.d)("BABYLON.Animation");
+                   op && pp.animations.push(op.Parse(Op))
+                 }
+               pp && pp._texture && (op && !Ip && pp._texture._setUniqueId(ip.internalTextureUniqueId), pp._texture.label = ip.internalTextureLabel)
+             };
+             return tp.c.Parse((() => {
+               let op = !0;
+               if (ip.noMipmap && (op = !1), ip.mirrorPlane) {
+                 const Op = pp._CreateMirror(ip.name, ip.renderTargetSize, cp, op);
+                 return Op._waitingRenderList = ip.renderList, Op.mirrorPlane = Pp.e.FromArray(ip.mirrorPlane), Sp(Op), Op
```

#### 112. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1645-L1647` → after: `L979-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L979-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L979-L988) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (pD - this.radius) * wD, Math.abs(pD / this.radius - 1) < UD.b ? (this._goalRadius = NaN, this.radius = pD) : DD = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const zD = rD.n.Vector2[0].set(ZD(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), ZD(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 rD.r.LerpToRef(this.targetScreenOffset, zD, wD, this.targetScreenOffset), rD.r.Distance(this.targetScreenOffset, zD) < UD.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.pC(zD)) : DD = !0
+               if (ip.isRenderTarget && !ip.base64String) {
+                 let Op = null;
+                 if (ip.isCube) {
+                   if (cp.reflectionProbes)
+                     for (let pp = 0; pp < cp.reflectionProbes.length; pp++) {
+                       const Op = cp.reflectionProbes[pp];
+                       if (Op.name === ip.name) return Op.cubeTexture
+                     }
+                 } else Op = pp._CreateRenderTargetTexture(ip.name, ip.renderTargetSize, cp, op, ip._creationFlags ?? 0), Op._waitingRenderList = ip.renderList;
+                 return Sp(Op), Op
```

#### 113. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1649-L1773` → after: `L990-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L990-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L990-L1044) · [Before (L1649-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1649-L1773)

```diff
-               this._isInterpolating = DD
-             }
-             this._checkLimits(), super._checkInputs()
-           }
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
-           }
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || rD.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const DD = this.alpha;
-             var zD, wD;
-             this.alpha = function(DD) {
-               let zD = Math.PI / 2;
-               return 0 === DD.x && 0 === DD.z || (zD = Math.acos(DD.x / Math.sqrt(Math.pow(DD.x, 2) + Math.pow(DD.z, 2)))), DD.z < 0 && (zD = 2 * Math.PI - zD), zD
-             }(this._computationVector), this.beta = (zD = this._computationVector.y, wD = this.radius, Math.acos(zD / wD));
-             const pD = Math.round((DD - this.alpha) / (2 * Math.PI));
- ... (109 more removed lines; see GitHub link above)
+               if (ip.isVideo) {
+                 const Ip = pp._CreateVideoTexture(Op + (ip.url || ip.name), Op + (ip.src || ip.url), cp, op, ip.invertY, ip.samplingMode, ip.settings || {});
+                 return Sp(Ip), Ip
+               } {
+                 let xp;
+                 if ("string" === typeof ip.base64String && ip.base64String && !Ip) {
+                   const Op = {
+                       buffer: ip.base64String,
+                       noMipmap: !op,
+                       invertY: ip.invertY,
+                       samplingMode: ip.samplingMode,
+                       useSRGBBuffer: ip._useSRGBBuffer ?? !1,
+                       creationFlags: ip._creationFlags ?? 0,
+                       onLoad: () => {
+                         Sp(xp)
+                       }
+ ... (39 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1777-L1817` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1048) · [Before (L1777-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1777-L1817)

```diff
-           zD = [(0, sD.C)()], wD = [(0, sD.C)()], cD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.B)("target")], ID = [(0, sD.q)("targetHost")], BD = [(0, sD.C)()], OD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.C)()], XD = [(0, sD.C)()], VD = [(0, sD.C)()], PD = [(0,  … [truncated]
-             kind: "getter",
-             name: "inertialAlphaOffset",
-             static: !1,
-             private: !1,
-             access: {
-               has: DD => "inertialAlphaOffset" in DD,
-               get: DD => DD.inertialAlphaOffset
-             },
-             metadata: KD
-           }, null, vD), (0, pD.i)(DD, null, OD, {
-             kind: "getter",
-             name: "inertialBetaOffset",
-             static: !1,
-             private: !1,
-             access: {
- ... (25 more removed lines; see GitHub link above)
+           ip = [(0, op.K)()], cp = [(0, op.K)()], yp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], (0, Op.j)( … [truncated]
```

#### 115. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1819-L1959` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1050) · [Before (L1819-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1819-L1959)

```diff
-             name: "zoomToMouseLocation",
-             static: !1,
-             private: !1,
-             access: {
-               has: DD => "zoomToMouseLocation" in DD,
-               get: DD => DD.zoomToMouseLocation
-             },
-             metadata: KD
-           }, null, vD), (0, pD.i)(null, null, zD, {
-             kind: "field",
-             name: "alpha",
-             static: !1,
-             private: !1,
-             access: {
-               has: DD => "alpha" in DD,
-               get: DD => DD.alpha,
- ... (125 more removed lines; see GitHub link above)
+             name: "isBlocking",
```

#### 116. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1963-L1967` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1054-L1055) · [Before (L1963-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1963-L1967)

```diff
-               has: DD => "lowerRadiusLimit" in DD,
-               get: DD => DD.lowerRadiusLimit,
-               set: (DD, zD) => {
-                 DD.lowerRadiusLimit = zD
-               }
+               has: pp => "isBlocking" in pp,
+               get: pp => pp.isBlocking
```

#### 117. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1970` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1058) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1970)

```diff
-           }, Bz, Gz), (0, pD.i)(null, null, xD, {
+           }, null, Xp), (0, Op.j)(null, null, ip, {
```

#### 118. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1972` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1060) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1972)

```diff
-             name: "upperRadiusLimit",
+             name: "url",
```

#### 119. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1976-L1977` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1064-L1065) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1976-L1977)

```diff
-               has: DD => "upperRadiusLimit" in DD,
-               get: DD => DD.upperRadiusLimit,
+               has: pp => "url" in pp,
+               get: pp => pp.url,
```

#### 120. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1979` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1067) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1979)

```diff
-                 DD.upperRadiusLimit = zD
+                 pp.url = ip
```

#### 121. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1983` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1071) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1983)

```diff
-           }, hz, nz), (0, pD.i)(null, null, TD, {
+           }, lp, Qp), (0, Op.j)(null, null, cp, {
```

#### 122. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1985` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1073) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1985)

```diff
-             name: "lowerTargetYLimit",
+             name: "uOffset",
```

#### 123. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1989-L1990` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1077-L1078) · [Before (L1989-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1989-L1990)

```diff
-               has: DD => "lowerTargetYLimit" in DD,
-               get: DD => DD.lowerTargetYLimit,
+               has: pp => "uOffset" in pp,
+               get: pp => pp.uOffset,
```

#### 124. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1992` → after: `L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1080) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1992)

```diff
-                 DD.lowerTargetYLimit = zD
+                 pp.uOffset = ip
```

#### 125. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1996` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1084) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1996)

```diff
-           }, Mz, Oz), (0, pD.i)(null, null, bD, {
+           }, Jp, Bp), (0, Op.j)(null, null, yp, {
```

#### 126. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1998` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1086) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L1998)

```diff
-             name: "inertialPanningX",
+             name: "vOffset",
```

#### 127. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2002-L2003` → after: `L1090-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1090-L1091) · [Before (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2002-L2003)

```diff
-               has: DD => "inertialPanningX" in DD,
-               get: DD => DD.inertialPanningX,
+               has: pp => "vOffset" in pp,
+               get: pp => pp.vOffset,
```

#### 128. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2005` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1093) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2005)

```diff
-                 DD.inertialPanningX = zD
+                 pp.vOffset = ip
```

#### 129. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2009` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1097) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2009)

```diff
-           }, Jz, Ez), (0, pD.i)(null, null, jD, {
+           }, Np, Tp), (0, Op.j)(null, null, Hp, {
```

#### 130. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2011` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1099) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2011)

```diff
-             name: "inertialPanningY",
+             name: "uScale",
```

#### 131. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2015-L2016` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1103-L1104) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2015-L2016)

```diff
-               has: DD => "inertialPanningY" in DD,
-               get: DD => DD.inertialPanningY,
+               has: pp => "uScale" in pp,
+               get: pp => pp.uScale,
```

#### 132. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2018` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1106) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2018)

```diff
-                 DD.inertialPanningY = zD
+                 pp.uScale = ip
```

#### 133. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2022` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1110) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2022)

```diff
-           }, Qz, Xz), (0, pD.i)(null, null, dD, {
+           }, fp, bp), (0, Op.j)(null, null, dp, {
```

#### 134. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2024` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1112) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2024)

```diff
-             name: "pinchToPanMaxDistance",
+             name: "vScale",
```

#### 135. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2028-L2029` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1116-L1117) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2028-L2029)

```diff
-               has: DD => "pinchToPanMaxDistance" in DD,
-               get: DD => DD.pinchToPanMaxDistance,
+               has: pp => "vScale" in pp,
+               get: pp => pp.vScale,
```

#### 136. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2031` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1119) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2031)

```diff
-                 DD.pinchToPanMaxDistance = zD
+                 pp.vScale = ip
```

#### 137. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2035` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1123) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2035)

```diff
-           }, Vz, Pz), (0, pD.i)(null, null, iD, {
+           }, hp, ap), (0, Op.j)(null, null, ep, {
```

#### 138. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2037` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1125) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2037)

```diff
-             name: "panningDistanceLimit",
+             name: "uAng",
```

#### 139. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2041-L2042` → after: `L1129-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1129-L1130) · [Before (L2041-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2041-L2042)

```diff
-               has: DD => "panningDistanceLimit" in DD,
-               get: DD => DD.panningDistanceLimit,
+               has: pp => "uAng" in pp,
+               get: pp => pp.uAng,
```

#### 140. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2044` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1132) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2044)

```diff
-                 DD.panningDistanceLimit = zD
+                 pp.uAng = ip
```

#### 141. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2048` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1136) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2048)

```diff
-           }, Cz, xz), (0, pD.i)(null, null, lD, {
+           }, np, Fp), (0, Op.j)(null, null, jp, {
```

#### 142. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2050` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1138) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2050)

```diff
-             name: "panningOriginTarget",
+             name: "vAng",
```

#### 143. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2054-L2055` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1142-L1143) · [Before (L2054-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2054-L2055)

```diff
-               has: DD => "panningOriginTarget" in DD,
-               get: DD => DD.panningOriginTarget,
+               has: pp => "vAng" in pp,
+               get: pp => pp.vAng,
```

#### 144. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2057` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1145) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2057)

```diff
-                 DD.panningOriginTarget = zD
+                 pp.vAng = ip
```

#### 145. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2061` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1149) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2061)

```diff
-           }, Tz, bz), (0, pD.i)(null, null, kD, {
+           }, gp, Gp), (0, Op.j)(null, null, kp, {
```

#### 146. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2063` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1151) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2063)

```diff
-             name: "zoomOnFactor",
+             name: "wAng",
```

#### 147. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2067-L2068` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1155-L1156) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2067-L2068)

```diff
-               has: DD => "zoomOnFactor" in DD,
-               get: DD => DD.zoomOnFactor,
+               has: pp => "wAng" in pp,
+               get: pp => pp.wAng,
```

#### 148. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2070` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1158) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2070)

```diff
-                 DD.zoomOnFactor = zD
+                 pp.wAng = ip
```

#### 149. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2074` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1162) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2074)

```diff
-           }, jz, dz), (0, pD.i)(null, null, mD, {
+           }, rp, Zp), (0, Op.j)(null, null, mp, {
```

#### 150. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2076` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1164) · [Before (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2076)

```diff
-             name: "targetScreenOffset",
+             name: "uRotationCenter",
```

#### 151. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2080-L2081` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1168-L1169) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2080-L2081)

```diff
-               has: DD => "targetScreenOffset" in DD,
-               get: DD => DD.targetScreenOffset,
+               has: pp => "uRotationCenter" in pp,
+               get: pp => pp.uRotationCenter,
```

#### 152. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2083` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1171) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2083)

```diff
-                 DD.targetScreenOffset = zD
+                 pp.uRotationCenter = ip
```

#### 153. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2087` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1175) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2087)

```diff
-           }, Sz, iz), (0, pD.i)(null, null, eD, {
+           }, zp, sp), (0, Op.j)(null, null, Rp, {
```

#### 154. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2089` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1177) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2089)

```diff
-             name: "allowUpsideDown",
+             name: "vRotationCenter",
```

#### 155. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2093-L2094` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1181-L1182) · [Before (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2093-L2094)

```diff
-               has: DD => "allowUpsideDown" in DD,
-               get: DD => DD.allowUpsideDown,
+               has: pp => "vRotationCenter" in pp,
+               get: pp => pp.vRotationCenter,
```

#### 156. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2096` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1184) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2096)

```diff
-                 DD.allowUpsideDown = zD
+                 pp.vRotationCenter = ip
```

#### 157. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2100` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1188) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2100)

```diff
-           }, lz, Wz), (0, pD.i)(null, null, oD, {
+           }, Kp, Vp), (0, Op.j)(null, null, qp, {
```

#### 158. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2102` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1190) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2102)

```diff
-             name: "useInputToRestoreState",
+             name: "wRotationCenter",
```

#### 159. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2106-L2107` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1194-L1195) · [Before (L2106-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2106-L2107)

```diff
-               has: DD => "useInputToRestoreState" in DD,
-               get: DD => DD.useInputToRestoreState,
+               has: pp => "wRotationCenter" in pp,
+               get: pp => pp.wRotationCenter,
```

#### 160. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2109` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1197) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2109)

```diff
-                 DD.useInputToRestoreState = zD
+                 pp.wRotationCenter = ip
```

#### 161. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2113` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1201) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2113)

```diff
-           }, Nz, Zz), (0, pD.i)(null, null, aD, {
+           }, ii, ci), (0, Op.j)(null, null, Mp, {
```

#### 162. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2115` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1203) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2115)

```diff
-             name: "restoreStateInterpolationFactor",
+             name: "homogeneousRotationInUVTransform",
```

#### 163. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2119-L2120` → after: `L1207-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1207-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1207-L1208) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2119-L2120)

```diff
-               has: DD => "restoreStateInterpolationFactor" in DD,
-               get: DD => DD.restoreStateInterpolationFactor,
+               has: pp => "homogeneousRotationInUVTransform" in pp,
+               get: pp => pp.homogeneousRotationInUVTransform,
```

#### 164. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2122` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1210) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2122)

```diff
-                 DD.restoreStateInterpolationFactor = zD
+                 pp.homogeneousRotationInUVTransform = ip
```

#### 165. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2132` → after: `L1220-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1220-L1226) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2132)

```diff
-         })(), DD
+         })(), pp.SerializeBuffers = !0, pp.ForceSerializeBuffers = !1, pp.OnTextureLoadErrorObservable = new Ip.d, pp._SerializeInternalTextureUniqueId = !1, pp._CubeTextureParser = (pp, ip, cp) => {
+           throw (0, Yp.o)("CubeTexture")
+         }, pp._CreateMirror = (pp, ip, cp, Op) => {
+           throw (0, Yp.o)("MirrorTexture")
+         }, pp._CreateRenderTargetTexture = (pp, ip, cp, Op, op) => {
+           throw (0, Yp.o)("RenderTargetTexture")
+         }, pp.NEAREST_SAMPLINGMODE = 1, pp.NEAREST_NEAREST_MIPLINEAR = 8, pp.BILINEAR_SAMPLINGMODE = 2, pp.LINEAR_LINEAR_MIPNEAREST = 11, pp.TRILINEAR_SAMPLINGMODE = 3, pp.LINEAR_LINEAR_MIPLINEAR = 3, pp.NEAREST_NEAREST_MIPNEAREST = 4, pp.NEAREST_LINEAR_MIPNEAREST = 5, pp.NEAREST … [truncated]
```

#### 166. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2135-L2142` → after: `L1229-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1229-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1229-L1232) · [Before (L2135-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2135-L2142)

```diff
-     kD || (kD = !0, cD.b.AddNodeConstructor("ArcRotateCamera", ((DD, zD) => () => new yD(DD, 0, 0, 1, rD.s.Zero(), zD))), (0, iD.i)("BABYLON.ArcRotateCamera", yD))
-   },
-   40183: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD.d
-     });
-     var pD = wD(40186);
-     (0, pD.g)()
+ 
+     function ep() {
+       dp || (dp = !0, (0, Lp.g)("BABYLON.Texture", Hp), tp.c._TextureParser = Hp.Parse)
+     }
```

#### 167. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2144` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1234) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2144)

```diff
-   40186: (DD, zD, wD) => {
+   40225: (pp, ip, cp) => {
```

#### 168. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2146-L2147` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1236) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2146-L2147)

```diff
-       d: () => RD,
-       g: () => UD
+       c: () => Op
```

#### 169. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2149-L2235` → after: `L1238-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1238-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/260.js#L1238-L1289) · [Before (L2149-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/260.js#L2149-L2235)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37079),
-       rD = wD(37273),
-       LD = wD(40189),
-       cD = wD(40155),
-       gD = wD(37134);
-     let RD = (() => {
-         var DD;
-         let zD, wD, cD = LD.c,
-           gD = [],
-           RD = [],
-           AD = [],
-           UD = [];
-         return DD = class extends cD {
-           constructor(DD, zD, wD, sD) {
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40322: (DD, zD, wD) => {
+   40435: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L298` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L6-L7) · [Before (L6-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L6-L298)

```diff
-       b: () => sD
-     });
-     var pD = wD(39930);
- 
-     function sD(DD) {
-       return class extends DD {
-         constructor() {
-           super(...arguments);
-           const DD = new.target;
-           if (!DD[Symbol.metadata]) {
-             const zD = Object.getPrototypeOf(DD)?.[Symbol.metadata];
-             DD[Symbol.metadata] = zD ? Object.create(zD) : {}
-           }
-           const zD = (0, pD.e)(DD[Symbol.metadata]);
-           zD._imageProcessingConfiguration || (zD._imageProcessingConfiguration = {
-             type: 9,
- ... (277 more removed lines; see GitHub link above)
+       e: () => Sp,
+       f: () => xp
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L302-L325` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L15) · [Before (L302-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L302-L325)

```diff
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const zD in DD) Object.prototype.hasOwnProperty.call(DD, zD) && this._setDefaultValue(zD)
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

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L327-L328` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L17-L19) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L327-L328)

```diff
-       markAsTexturesDirty() {
-         this._areTexturesDirty = !0, this._isDirty = !0
+       add(pp) {
+         const ip = pp.getSimpleName();
+         this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L330-L349` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L21-L24) · [Before (L330-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L330-L349)

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
-         for (const DD of Object.keys(this)) "_" !== DD[0] && this._keys.push(DD);
-         if (this._externalProperties)
-           for (const DD in this._externalProperties) - 1 === this._keys.indexOf(DD) && this._keys.push(DD)
-       }
-       isEqual(DD) {
- ... (4 more removed lines; see GitHub link above)
+       remove(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           if (cp === pp) return cp.detachControl(), cp.camera = null, delete this.attached[ip], void this.rebuildInputCheck()
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L363-L374` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L27-L30) · [Before (L363-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L363-L374)

```diff
-       _setDefaultValue(DD) {
-         const zD = this._externalProperties?.[DD]?.type ?? typeof this[DD],
-           wD = this._externalProperties?.[DD]?.default;
-         switch (zD) {
-           case "number":
-             this[DD] = wD ?? 0;
-             break;
-           case "string":
-             this[DD] = wD ?? "";
-             break;
-           default:
-             this[DD] = wD ?? !1
+       removeByType(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           cp.getClassName() === pp && (cp.detachControl(), cp.camera = null, delete this.attached[ip], this.rebuildInputCheck())
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L377-L389` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L33-L36) · [Before (L377-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L377-L389)

```diff
-       toString() {
-         let DD = "";
-         for (let zD = 0; zD < this._keys.length; zD++) {
-           const wD = this._keys[zD],
-             pD = this[wD];
-           switch (typeof pD) {
-             case "number":
-             case "string":
-               DD += "#define " + wD + " " + pD + "\n";
-               break;
-             default:
-               pD && (DD += "#define " + wD + "\n")
-           }
+       _addCheckInputs(pp) {
+         const ip = this.checkInputs;
+         return () => {
+           ip(), pp()
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L431-L432` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L39-L40) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L431-L432)

```diff
-       static DeleteConfiguration(DD) {
-         delete LD._Configurations[DD]
+       attachInput(pp) {
+         this.attachedToElement && pp.attachControl(this.noPreventDefault)
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L434-L443` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L42-L46) · [Before (L434-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L434-L443)

```diff
-       static GetConfiguration(DD) {
-         return LD._Configurations[DD]
-       }
-       static _PrepareConfiguration(DD, zD, wD) {
-         const pD = LD._Configurations[DD];
-         pD._attachments = zD, pD._colorAttachments = wD, pD._mrtCount = zD.length;
-         let sD = "#define PREPASS\n";
-         for (const KD of LD.GeometryTextureDescriptions) {
-           const DD = pD.defines[KD.defineIndex];
-           void 0 !== DD && (sD += `#define ${KD.define}\n#define ${KD.defineIndex} ${DD}\n`)
+       attachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           pp = !Ip.d.ForceAttachControlToAlwaysPreventDefault && pp, this.attachedToElement = !0, this.noPreventDefault = pp;
+           for (const ip in this.attached) this.attached[ip].attachControl(pp)
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L477-L495` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L49-L52) · [Before (L477-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L477-L495)

```diff
-       static MarkAsDirty(DD, zD) {
-         for (const wD of zD)
-           if (wD.QE)
-             for (const zD of wD.QE) zD._removeDrawWrapper(DD)
-       }
-       static PrepareDefines(DD, zD, wD) {
-         if (!wD._arePrePassDirty) return;
-         const pD = LD._Configurations[DD];
-         if (!pD) return;
-         wD.PREPASS = !0;
-         let sD = 0;
-         for (let KD = 0; KD < LD.GeometryTextureDescriptions.length; KD++) {
-           const DD = LD.GeometryTextureDescriptions[KD],
-             zD = DD.define,
-             rD = DD.defineIndex,
-             cD = pD.defines[rD];
- ... (3 more removed lines; see GitHub link above)
+       detachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const ip in this.attached) this.attached[ip].detachControl(), pp && (this.attached[ip].camera = null);
+         this.attachedToElement = !1
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L497-L522` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L54-L58) · [Before (L497-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L497-L522)

```diff
-       static Bind(DD, zD, wD, pD, sD) {
-         const cD = LD._Configurations[DD];
-         if (!cD) return;
-         const gD = wD.Ul(),
-           RD = gD.iI();
-         if (cD.reverseCulling && RD.setStateCullFaceType(gD._mirroredCameraPosition ? sD.cullBackFaces : !sD.cullBackFaces), void 0 !== cD.defines.PREPASS_OBJECT_ID_INDEX) {
-           const DD = cD.objectIdIsRedFormat ? 255 : 16777215;
-           let pD = wD.uniqueId;
-           if (cD.objectIdProvider) pD = KD(wD, cD.objectIdProvider, DD);
-           else if (pD > DD) throw new Error(`Invalid geometry object ID ${pD} for mesh "${wD.name}". Object IDs must be integers between 0 and 0x${DD.toString(16).toUpperCase()}.`);
-           zD.setFloat("objectId", pD)
-         }
-         if (void 0 !== cD.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
-           const DD = cD.meshBlendTagProvider ? rD(wD, cD.meshBlendTagProvider) : wD.meshBlendingTag;
-           zD.setInt("meshBlendTag", DD)
-         }
- ... (10 more removed lines; see GitHub link above)
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const pp in this.attached) {
+           const ip = this.attached[pp];
+           ip.checkInputs && (this.checkInputs = this._addCheckInputs(ip.checkInputs.bind(ip)))
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L525-L642` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L61-L62) · [Before (L525-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L525-L642)

```diff
-     }
-     LD.GeometryTextureDescriptions = [{
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

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L644-L649` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L64) · [Before (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L644-L649)

```diff
-       _addPlugin(DD) {
-         for (let pD = 0; pD < this._plugins.length; ++pD)
-           if (this._plugins[pD].name === DD.name) return !1;
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !DD.isCompatible(this._material.shaderLanguage)) throw `The plugin "${DD.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
-         const zD = DD.getClassName();
-         cD._MaterialPluginClassToMainDefine[zD] || (cD._MaterialPluginClassToMainDefine[zD] = "MATERIALPLUGIN_" + ++cD._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (DD, zD) => this._handlePluginEvent(DD, zD), this._plugins.push(DD), this._plugins.sort(((D … [truncated]
+       serialize(pp) {
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L651-L756` → after: `L66-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L66-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L66-L82) · [Before (L651-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L651-L756)

```diff
-         wD[cD._MaterialPluginClassToMainDefine[zD]] = {
-           type: "boolean",
-           default: !0
-         };
-         for (const pD of this._plugins) pD.collectDefines(wD), this._collectPointNames("vertex", pD.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", pD.getCustomCode("fragment", this._material.shaderLanguage));
-         return this._defineNamesFromPlugins = wD, !0
-       }
-       _activatePlugin(DD) {
-         -1 === this._activePlugins.indexOf(DD) && (this._activePlugins.push(DD), this._activePlugins.sort(((DD, zD) => DD.priority - zD.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callback … [truncated]
-       }
-       getPlugin(DD) {
-         for (let zD = 0; zD < this._plugins.length; ++zD)
-           if (this._plugins[zD].name === DD) return this._plugins[zD];
-         return null
-       }
-       _handlePluginEventIsReadyForSubMesh(DD) {
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

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L760-L792` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L85-L90) · [Before (L760-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L760-L792)

```diff
-         }
-       }
-       _collectPointNames(DD, zD) {
-         if (zD)
-           for (const wD in zD) this._codeInjectionPoints[DD] || (this._codeInjectionPoints[DD] = {}), this._codeInjectionPoints[DD][wD] = !0
-       }
-       _injectCustomCode(DD, zD) {
-         return (wD, pD) => {
-           zD && (pD = zD(wD, pD)), this._uboDeclaration && (pD = pD.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (pD = pD.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const sD = this._codeInjectionPoints?.[wD];
-           if (!sD) return pD;
-           let cD = null;
-           for (let zD in sD) {
-             let sD = "";
-             for (const pD of this._activePlugins) {
-               const LD = this._material.shaderLanguage;
- ... (17 more removed lines; see GitHub link above)
+         } else
+           for (const cp in this.attached) {
+             const ip = Sp[this.attached[cp].getClassName()];
+             if (ip) {
+               const Op = op.c.Parse((() => new ip), pp, null);
+               this.remove(this.attached[cp]), this.add(Op)
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L821-L830` → after: `L95-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L95-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L95-L115) · [Before (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L821-L830)

```diff
-     cD._MaterialPluginClassToMainDefine = {}, cD._MaterialPluginCounter = 0;
- 
-     function gD(DD, zD) {
-       return DD.replace(/\$(\d+)/g, ((DD, wD) => {
-         const pD = Number(wD);
-         return pD < zD.length ? zD[pD] : ""
-       }))
-     }
-     var RD = wD(39939),
-       AD = wD(37134);
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

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L833` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L118-L126) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L833)

```diff
-         let zD, wD, KD, rD, LD = [],
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

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L841-L877` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L134-L139) · [Before (L841-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L841-L877)

```diff
-         return DD = class {
-           isCompatible(DD) {
-             return 0 === DD
-           }
-           _enable(DD) {
-             DD && this._pluginManager._activatePlugin(this)
-           }
-           constructor(DD, zD, wD, sD) {
-             let KD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-               rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-               RD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-             this.name = (0, pD.m)(this, LD, void 0), this.priority = ((0, pD.m)(this, gD), (0, pD.m)(this, AD, 500)), this.resolveIncludes = ((0, pD.m)(this, UD), (0, pD.m)(this, fD, !1)), this.registerForExtraEvents = ((0, pD.m)(this, ID), (0, pD.m)(this, BD, !1)), this.doNotSer … [truncated]
-               DD.pluginManager = void 0
-             }))), this._pluginDefineNames = sD, this._pluginManager = DD.pluginManager, KD && this._pluginManager._addPlugin(this), rD && this._enable(!0), this.markAllDefinesAsDirty = DD._dirtyCallbacks[127]
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

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L879-L882` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L141-L142) · [Before (L879-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L879-L882)

```diff
-           prepareDefinesBeforeAttributes(DD, zD, wD) {}
-           prepareDefines(DD, zD, wD) {}
-           hasTexture(DD) {
-             return !1
+           get boundingBoxSize() {
+             return this._boundingBoxSize
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L884-L885` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L144-L145) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L884-L885)

```diff
-           hasRenderTargetTextures() {
-             return !1
+           set rotationY(pp) {
+             this._rotationY = pp, this.setReflectionTextureMatrix(Sp.b.RotationY(this._rotationY))
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L887-L891` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L147-L148) · [Before (L887-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L887-L891)

```diff
-           fillRenderTargetTextures(DD) {}
-           getActiveTextures(DD) {}
-           getAnimatables(DD) {}
-           addFallbacks(DD, zD, wD) {
-             return wD
+           get rotationY() {
+             return this._rotationY
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L893-L897` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L150-L151) · [Before (L893-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L893-L897)

```diff
-           getSamplers(DD) {}
-           getAttributes(DD, zD, wD) {}
-           getUniformBuffersNames(DD) {}
-           getUniforms() {
-             return {}
+           get noMipmap() {
+             return this._noMipmap
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L899-L900` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L153-L154) · [Before (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L899-L900)

```diff
-           copyTo(DD) {
-             RD.d.Clone((() => DD), this)
+           get forcedExtension() {
+             return this._forcedExtension
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L902-L903` → after: `L156-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L156-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L156-L243) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L902-L903)

```diff
-           serialize() {
-             return RD.d.Serialize(this)
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

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L905-L906` → after: `L245-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L245-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L245-L311) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L905-L906)

```diff
-           parse(DD, zD, wD) {
-             RD.d.Parse((() => this), DD, zD, wD)
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

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L909-L910` → after: `L314-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L314-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L314-L376) · [Before (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L909-L910)

```diff
-           const cD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], rD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
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

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L912` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L378) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L912)

```diff
-             name: "name",
+             name: "_forcedExtension",
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L916-L917` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L382-L383) · [Before (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L916-L917)

```diff
-               has: DD => "name" in DD,
-               get: DD => DD.name,
+               has: pp => "_forcedExtension" in pp,
+               get: pp => pp._forcedExtension,
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L919` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L385) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L919)

```diff
-                 DD.name = zD
+                 pp._forcedExtension = ip
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L923` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L389) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L923)

```diff
-           }, LD, gD), (0, pD.i)(null, null, wD, {
+           }, Jp, Bp), (0, Op.j)(null, null, jp, {
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L925` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L391) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L925)

```diff
-             name: "priority",
+             name: "_extensions",
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L929-L930` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L395-L396) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L929-L930)

```diff
-               has: DD => "priority" in DD,
-               get: DD => DD.priority,
+               has: pp => "_extensions" in pp,
+               get: pp => pp._extensions,
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L932` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L398) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L932)

```diff
-                 DD.priority = zD
+                 pp._extensions = ip
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L936` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L402) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L936)

```diff
-           }, AD, UD), (0, pD.i)(null, null, KD, {
+           }, Np, Tp), (0, Op.j)(null, null, kp, {
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L938` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L404) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L938)

```diff
-             name: "resolveIncludes",
+             name: "_textureMatrix",
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L942-L943` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L408-L409) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L942-L943)

```diff
-               has: DD => "resolveIncludes" in DD,
-               get: DD => DD.resolveIncludes,
+               has: pp => "_textureMatrix" in pp,
+               get: pp => pp._textureMatrix,
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L945` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L411) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L945)

```diff
-                 DD.resolveIncludes = zD
+                 pp._textureMatrix = ip
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L949` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L415) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L949)

```diff
-           }, fD, ID), (0, pD.i)(null, null, rD, {
+           }, fp, bp), (0, Op.j)(null, null, mp, {
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L951` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L417) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L951)

```diff
-             name: "registerForExtraEvents",
+             name: "_textureMatrixRefraction",
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L955-L956` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L421-L422) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L955-L956)

```diff
-               has: DD => "registerForExtraEvents" in DD,
-               get: DD => DD.registerForExtraEvents,
+               has: pp => "_textureMatrixRefraction" in pp,
+               get: pp => pp._textureMatrixRefraction,
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L958` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L424) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L958)

```diff
-                 DD.registerForExtraEvents = zD
+                 pp._textureMatrixRefraction = ip
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L972-L973` → after: `L438-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L438-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L438-L464) · [Before (L972-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L972-L973)

```diff
-     function ID() {
-       fD || (fD = !0, (0, AD.i)("BABYLON.MaterialPluginBase", UD))
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

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L976` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L468) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L976)

```diff
-   40208: (DD, zD, wD) => {
+   41393: (pp, ip, cp) => {
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L978` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L470) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L978)

```diff
-       c: () => pD
+       e: () => Yp
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L980-L982` → after: `L472-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L472-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L472-L514) · [Before (L980-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L980-L982)

```diff
-     class pD {
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
+ ... (27 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L984-L985` → after: `L516-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L516-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L516-L528) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L984-L985)

```diff
-       static AddUniforms(DD) {
-         DD.push("previousWorld", "previousViewProjection", "mPreviousBones")
+       get canRescale() {
+         return !0
+       }
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
```
