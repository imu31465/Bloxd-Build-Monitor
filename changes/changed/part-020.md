# Changed — Bundle Modifications Report (Part 020 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `20 / 86` (**336** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (69 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 46. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L813-L814` → after: `L8672-L8681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8672-L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8672-L8681) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L813-L814)

```diff
-       addTouch() {
-         return this.add(new RB), this
+       removeGeometry(WW) {
+         let iW;
+         if (this._geometriesByUniqueId) {
+           if (iW = this._geometriesByUniqueId[WW.uniqueId], void 0 === iW) return !1
+         } else if (iW = this.geometries.indexOf(WW), iW < 0) return !1;
+         if (iW !== this.geometries.length - 1) {
+           const WW = this.geometries[this.geometries.length - 1];
+           WW && (this.geometries[iW] = WW, this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = iW))
+         }
+         return this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(WW), !0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L816-L817` → after: `L8683-L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8683-L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8683-L8684) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+       getGeometries() {
+         return this.geometries
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L819-L892` → after: `L8686-L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8686-L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8686-L8807) · [Before (L819-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L819-L892)

```diff
-     }(WB = nB.prototype).addDeviceOrientation ?? (WB.addDeviceOrientation = (0, SB.g)("FreeCameraInputsManager", "addDeviceOrientation")), (AB = nB.prototype).addVirtualJoystick ?? (AB.addVirtualJoystick = (0, SB.g)("FreeCameraInputsManager", "addVirtualJoystick")), (VB = nB.prot … [truncated]
-     var UB = GB(40905),
-       fB = GB(37823);
-     let kB = (() => {
-         var BB;
-         let OB, GB, jB, yB, MB = oB.h,
-           PB = [],
-           zB = [],
-           lB = [],
-           pB = [],
-           qB = [],
-           ZB = [],
-           NB = [],
-           RB = [];
-         return BB = class extends MB {
-           get angularSensibility() {
- ... (58 more removed lines; see GitHub link above)
+       getMeshById(WW) {
+         for (let iW = 0; iW < this.meshes.length; iW++)
+           if (this.meshes[iW].id === WW) return this.meshes[iW];
+         return null
+       }
+       getMeshesById(WW) {
+         return this.meshes.filter((function(iW) {
+           return iW.id === WW
+         }))
+       }
+       getTransformNodeById(WW) {
+         for (let iW = 0; iW < this.transformNodes.length; iW++)
+           if (this.transformNodes[iW].id === WW) return this.transformNodes[iW];
+         return null
+       }
+       getTransformNodeByUniqueId(WW) {
+ ... (106 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L894-L896` → after: `L8809-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8809-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8809-L8817) · [Before (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L894-L896)

```diff
-           set keysRotateLeft(BB) {
-             const OB = this.inputs.attached.keyboard;
-             OB && (OB.keysRotateLeft = BB)
+         }
+         return null
+       }
+       getMorphTargetByName(WW) {
+         for (let iW = 0; iW < this.morphTargetManagers.length; ++iW) {
+           const OW = this.morphTargetManagers[iW];
+           for (let iW = 0; iW < OW.numTargets; ++iW) {
+             const mW = OW.getTarget(iW);
+             if (mW.name === WW) return mW
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L898-L900` → after: `L8819-L8850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8819-L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8819-L8850) · [Before (L898-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L898-L900)

```diff
-           get keysRotateRight() {
-             const BB = this.inputs.attached.keyboard;
-             return BB ? BB.keysRotateRight : []
+         }
+         return null
+       }
+       getPostProcessByName(WW) {
+         for (let iW = 0; iW < this.postProcesses.length; ++iW) {
+           const OW = this.postProcesses[iW];
+           if (OW.name === WW) return OW
+         }
+         return null
+       }
+       isActiveMesh(WW) {
+         return -1 !== this._activeMeshes.indexOf(WW)
+       }
+       get uid() {
+         return this._uid || (this._uid = mW.f.RandomId()), this._uid
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L902-L904` → after: `L8852-L8869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8852-L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8852-L8869) · [Before (L902-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L902-L904)

```diff
-           set keysRotateRight(BB) {
-             const OB = this.inputs.attached.keyboard;
-             OB && (OB.keysRotateRight = BB)
+           const OW = WW.BA();
+           null !== OW && void 0 !== OW && (OW.hasRenderTargetTextures && null != OW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(OW) && (this._processedMaterials.push(OW), this._materialsRenderTargets.concatWithNoDuplicate(OW.getRenderTargetTextures())), thi … [truncated]
+         }
+       }
+       freeProcessedMaterials() {
+         this._processedMaterials.dispose()
+       }
+       get blockfreeActiveMeshesAndRenderingGroups() {
+         return this._preventFreeActiveMeshesAndRenderingGroups
+       }
+       set blockfreeActiveMeshesAndRenderingGroups(WW) {
+         this._preventFreeActiveMeshesAndRenderingGroups !== WW && (WW && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = WW)
+       }
+       freeActiveMeshes() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
+           for (let WW = 0; WW < this.activeCameras.length; WW++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L906-L908` → after: `L8871-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8871-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8871-L8876) · [Before (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L906-L908)

```diff
-           get keysRotateUp() {
-             const BB = this.inputs.attached.keyboard;
-             return BB ? BB.keysRotateUp : []
+       }
+       freeRenderingGroups() {
+         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
+           for (let WW = 0; WW < this.textures.length; WW++) {
+             const iW = this.textures[WW];
+             iW && iW.renderList && iW.freeRenderingGroups()
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L910-L912` → after: `L8878-L8944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8878-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8878-L8944) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L910-L912)

```diff
-           set keysRotateUp(BB) {
-             const OB = this.inputs.attached.keyboard;
-             OB && (OB.keysRotateUp = BB)
+       }
+       _isInIntermediateRendering() {
+         return this._intermediateRendering
+       }
+       _isInRenderingMeshEvaluation() {
+         return this._renderingMeshEvaluationDepth > 0
+       }
+       freezeActiveMeshes() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           iW = arguments.length > 1 ? arguments[1] : void 0,
+           OW = arguments.length > 2 ? arguments[2] : void 0,
+           mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+           NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (this.frameGraph) {
+           this._renderWithFrameGraph(!0, !1, !0);
+           const PW = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
+ ... (51 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L914-L916` → after: `L8946-L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8946-L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8946-L8948) · [Before (L914-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L914-L916)

```diff
-           get keysRotateDown() {
-             const BB = this.inputs.attached.keyboard;
-             return BB ? BB.keysRotateDown : []
+           if (this._activeParticleSystems) {
+             const WW = this._activeParticleSystems.length;
+             for (let iW = 0; iW < WW; iW++) this._activeParticleSystems.data[iW].animate()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L918-L920` → after: `L8950-L8974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8950-L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8950-L8974) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L918-L920)

```diff
-           set keysRotateDown(BB) {
-             const OB = this.inputs.attached.keyboard;
-             OB && (OB.keysRotateDown = BB)
+           return void this._renderingManager.resetSprites()
+         }
+         if (!this.activeCamera) return;
+         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
+         for (let EW = 0, NW = this._beforeEvaluateActiveMeshStage; EW < NW.length; EW++) {
+           NW[EW].action()
+         }
+         const WW = this.getActiveMeshCandidates(),
+           iW = WW.length,
+           OW = qW.e.Enabled,
+           mW = this.customLODSelector;
+         for (let EW = 0; EW < iW; EW++) {
+           const iW = WW.data[EW],
+             NW = !mW && !iW.KD && !iW._internalMeshDataInfo?._LODLevels.length;
+           let PW, LW;
+           if ((NW || (PW = iW._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), PW ? PW[1] = -1 : (PW = [iW, -1], iW._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, PW))), !iW.isBlocked) && (OW && this._totalVertices.addCount(iW.getTotalVertices() … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L922-L927` → after: `L8976-L8983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8976-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8976-L8983) · [Before (L922-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L922-L927)

```diff
-           constructor(BB, OB, GB) {
-             var DB;
-             super(BB, OB, GB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), DB = this, this.ellipsoid = (0, YB.j)(this, PB, new QB.r(.5, 1, .5)), this.ellipsoidOffset = ((0, YB.j)(this, zB), (0, YB.j)(this, lB, new QB.r(0, 0, 0))), this.checkCollisions = (( … [truncated]
-               let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-               DB._newPosition.IU(OB), DB._newPosition.subtractToRef(DB._oldPosition, DB._diffPosition), DB._diffPosition.length() > UB.d.CollisionsEpsilon && (DB.position.addToRef(DB._diffPosition, DB._deferredPositionUpdate), DB._deferOnly ? DB._deferredUpdated = !0 : DB.positio … [truncated]
-             }, this.inputs = new nB(this), this.inputs.addKeyboard().addMouse()
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let WW = 0; WW < this.vY.length; WW++) {
+             const iW = this.vY[WW];
+             if (!iW.isStarted() || !iW.emitter) continue;
+             const OW = iW.emitter;
+             OW.position && !OW.isEnabled() || (this._activeParticleSystems.push(iW), iW.animate(), this._renderingManager.dispatchParticles(iW))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L929-L930` → after: `L8985-L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8985-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L8985-L9000) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L929-L930)

```diff
-           attachControl(BB, OB) {
-             OB = JB.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(OB)
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
+       }
+       _prepareSkeleton(WW) {
+         this._skeletonsEnabled && WW.skeleton && (this._activeSkeletons.pushNoDuplicate(WW.skeleton) && (WW.skeleton.prepare(), this._activeBones.addCount(WW.skeleton.bones.length, !1)), WW.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(WW) && this.frameG … [truncated]
+       }
+       _activeMesh(WW, iW) {
+         this._prepareSkeleton(iW);
+         let OW = WW.QEW || WW.KD || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || iW.pA;
+         if (iW && iW.hY && iW.hY.length > 0) {
+           const mW = this.getActiveSubMeshCandidates(iW),
+             EW = mW.length;
+           OW = OW || 1 === EW;
+           for (let NW = 0; NW < EW; NW++) {
+             const EW = mW.data[NW];
+             this._evaluateSubMesh(EW, iW, WW, OW)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L932-L933` → after: `L9002-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9002-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9002-L9056) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L932-L933)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this.cameraDirection = new QB.r(0, 0, 0), this.cameraRotation = new QB.o(0, 0)
+         }
+       }
+       updateTransformMatrix(WW) {
+         const iW = this.activeCamera;
+         if (iW)
+           if (iW._renderingMultiview) {
+             const OW = iW._rigCameras[0],
+               mW = iW._rigCameras[1];
+             this.setTransformMatrix(OW.getViewMatrix(), OW.getProjectionMatrix(WW), mW.getViewMatrix(), mW.getProjectionMatrix(WW))
+           } else this.setTransformMatrix(iW.getViewMatrix(), iW.getProjectionMatrix(WW))
+       }
+       _bindFrameBuffer(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         this._useCurrentFrameBuffer || (WW && WW._multiviewTexture ? WW._multiviewTexture._bindFrameBuffer() : WW && WW.outputRenderTarget ? WW.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer … [truncated]
+       }
+       _clearFrameBuffer(WW) {
+ ... (39 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L935-L936` → after: `L9058-L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9058-L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9058-L9064) · [Before (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L935-L936)

```diff
-           get collisionMask() {
-             return this._collisionMask
+           if (this._cameraDrawRenderTargetStage.length > 0) {
+             const iW = this.getBoundingBoxRenderer?.();
+             iW && !WW && (WW = iW.renderList.length > 0 ? iW.renderList.data.slice() : [], WW.length = iW.renderList.length);
+             for (let WW = 0, OW = this._cameraDrawRenderTargetStage; WW < OW.length; WW++) {
+               NW = OW[WW].action(this.activeCamera) || NW
+             }
+             iW && WW && (iW.renderList.data = WW, iW.renderList.length = WW.length)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L938-L939` → after: `L9066-L9140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9066-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9066-L9140) · [Before (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L938-L939)

```diff
-           set collisionMask(BB) {
-             this._collisionMask = isNaN(BB) ? -1 : BB
+           this._intermediateRendering = !1
+         }
+         NW && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || WW._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let mW = 0, LW = this._beforeCameraDrawStage; mW < LW.length; mW++) {
+           LW[mW].action(this.activeCamera)
+         }
+         this.onBeforeDrawPhaseObservable.notifyObservers(this);
+         const PW = EW.snapshotRendering && 1 === EW.snapshotRenderingMode;
+         PW && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !PW), this.onAfterDrawPhaseObservable.notifyObservers(this);
+         for (let mW = 0, LW = this._afterCameraDrawStage; mW < LW.length; mW++) {
+           LW[mW].action(this.activeCamera)
+         }
+         if (this.postProcessManager && !WW._multiviewTexture) {
+           const iW = WW.outputRenderTarget ? WW.outputRenderTarget.renderTarget : void 0;
+           this.postProcessManager._finalizeFrame(WW.isIntermediate, iW)
+         }
+ ... (59 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L941-L947` → after: `L9142-L9169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9142-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9142-L9169) · [Before (L941-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L941-L947)

```diff
-           _collideWithWorld(BB) {
-             let OB;
-             OB = this.parent ? QB.r.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, OB.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const GB = this.JF().collisionCoordinator;
-             this._collider || (this._collider = GB.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
-             let YB = BB;
-             this.applyGravity && (YB = BB.add(this.JF().gravity)), GB.getNewPosition(this._oldPosition, YB, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+       }
+       resetDrawCache(WW) {
+         if (this.meshes)
+           for (const iW of this.meshes) iW.resetDrawCache(WW)
+       }
+       _renderWithFrameGraph() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.activeCamera = null, this.activeCameras = null, WW)
+           for (const OW of this.cameras)
+             if (OW.update(), 0 !== OW.cameraRigMode)
+               for (let WW = 0; WW < OW._rigCameras.length; WW++) OW._rigCameras[WW].update();
+         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
+         try {
+           this._renderWithFrameGraphAfterBeforeRender(iW)
+         } finally {
+ ... (12 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L949-L950` → after: `L9171-L9203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9171-L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9171-L9203) · [Before (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L949-L950)

```diff
-           _checkInputs() {
-             this._localDirection || (this._localDirection = QB.r.Zero(), this._transformedDirection = QB.r.Zero()), this.inputs.checkInputs(), super._checkInputs()
+           mW.f.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+         }
+         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
+         for (let OW = 0, mW = this._beforeClearStage; OW < mW.length; OW++) {
+           mW[OW].action()
+         }
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+         else {
+           const iW = this.getActiveMeshCandidates(),
+             OW = iW.length;
+           if (this._activeMeshesFrozen) {
+             if (!this._skipEvaluateActiveMeshesCompletely)
+               for (let WW = 0; WW < OW; WW++) {
+                 const OW = iW.data[WW];
+                 OW._internalAbstractMeshDataInfo._wasActiveLastFrame && OW.computeWorldMatrix()
+               }
+ ... (17 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L952-L953` → after: `L9205-L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9205-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9205-L9254) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L952-L953)

```diff
-           set needMoveForGravity(BB) {
-             this._needMoveForGravity = BB
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, WW._shouldRender()) {
+           if (this._renderId++, this.activeCamera = iW, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), WW.render(OW, mW)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.Ay) return;
+ ... (34 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L955-L956` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9256-L9258) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L955-L956)

```diff
-           get needMoveForGravity() {
-             return this._needMoveForGravity
+           this._engine.currentRenderPassId = WW?.renderPassId ?? 0, this.activeCamera = WW, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let iW = 0, OW = this._beforeClearStage; iW < OW.length; iW++) {
+             OW[iW].action()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L958-L959` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9260-L9262) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L958-L959)

```diff
-           _decideIfNeedsToMove() {
-             return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
+           this._clearFrameBuffer(this.activeCamera);
+           for (let iW = 0, OW = this._gatherRenderTargetsStage; iW < OW.length; iW++) {
+             OW[iW].action(this._renderTargets)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L961-L962` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9264-L9268) · [Before (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L961-L962)

```diff
-           _updatePosition() {
-             this.checkCollisions && this.JF().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let iW = 0; iW < this.activeCameras.length; iW++) this._processSubCameras(this.activeCameras[iW], iW > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L964-L965` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9270-L9278) · [Before (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L964-L965)

```diff
-           dispose() {
-             this.inputs.clear(), super.dispose()
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let OW = 0, mW = this._afterRenderStage; OW < mW.length; OW++) {
+           mW[OW].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let WW = 0; WW < this._toBeDisposed.length; WW++) {
+             const iW = this._toBeDisposed[WW];
+             iW && iW.dispose()
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L967-L968` → after: `L9280-L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9280-L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9280-L9322) · [Before (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L967-L968)

```diff
-           getClassName() {
-             return "FreeCamera"
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let WW = 0; WW < this.materials.length; WW++) this.materials[WW].freeze()
+       }
+       unfreezeMaterials() {
+         for (let WW = 0; WW < this.materials.length; WW++) this.materials[WW].unfreeze()
+       }
+       dispose() {
+         if (this.Ay) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const WW of this._activeAnimatables) WW.onAnimationEndObservable.clear(), WW.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (27 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L970-L1033` → after: `L9324-L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L9324-L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/287.js#L9324-L9692) · [Before (L970-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/287.js#L970-L1033)

```diff
-         }, (() => {
-           const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(MB[Symbol.metadata] ?? null) : void 0;
-           OB = [(0, DB.H)()], GB = [(0, DB.H)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: BB => "ellipsoid" in BB,
-               get: BB => BB.ellipsoid,
-               set: (BB, OB) => {
-                 BB.ellipsoid = OB
-               }
-             },
-             metadata: QB
-           }, PB, zB), (0, YB.h)(null, null, GB, {
- ... (48 more removed lines; see GitHub link above)
+         }
+         mW = this._engine._virtualScenes.indexOf(this), mW > -1 && this._engine._virtualScenes.splice(mW, 1), this._engine.wipeCaches(!0), this.jD.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
+       }
+       _disposeList(WW, iW) {
+         const OW = WW.slice(0);
+         iW = iW ?? (WW => WW.dispose());
+         for (const mW of OW) iW(mW);
+         WW.length = 0
+       }
+       get Ay() {
+         return this._isDisposed
+       }
+       clearCachedVertexData() {
+         for (let WW = 0; WW < this.meshes.length; WW++) {
+           const iW = this.meshes[WW].geometry;
+           iW && iW.clearCachedData()
+ ... (353 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/288.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/288.js#L2)

```diff
- export const ids = [288];
+ export const ids = [288, 671];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/288.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/288.js#L4)

```diff
-   41250: (BB, OB, GB) => {
+   41392: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/288.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/288.js#L6)

```diff
-       d: () => zB
+       c: () => mW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L490-L491` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/288.js#L9-L16) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/288.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new oB.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersRepository : mW.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersStore : mW.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.IncludesShadersStore : mW.IncludesShadersStoreWGSL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L494-L880` → after: `L19-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L19-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/288.js#L19-L32) · [Before (L494-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/288.js#L494-L880)

```diff
-     let PB = (() => {
-       var BB;
-       let OB, GB, PB, zB, lB, pB = [],
-         qB = [],
-         ZB = [],
-         NB = [],
-         RB = [],
-         WB = [],
-         AB = [],
-         VB = [],
-         SB = [],
-         nB = [];
-       return BB = class {
-         static AddNodeConstructor(BB, OB) {
-           this._NodeConstructors[BB] = OB
-         }
- ... (371 more removed lines; see GitHub link above)
+     mW.ShadersRepository = "src/Shaders/", mW.ShadersStore = {}, mW.IncludesShadersStore = {}, mW.ShadersRepositoryWGSL = "src/ShadersWGSL/", mW.ShadersStoreWGSL = {}, mW.IncludesShadersStoreWGSL = {}
+   },
+   64405: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       postprocessVertexShader: () => PW
+     });
+     var mW = OW(41392);
+     const EW = "postprocessVertexShader",
+       NW = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
+     const PW = {
+       name: EW,
+       shader: NW
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L4)

```diff
-   42087: (BB, OB, GB) => {
+   41582: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L6)

```diff
-       e: () => EB
+       c: () => xW,
+       e: () => ZW,
+       f: () => cW,
+       g: () => lW,
+       j: () => wW,
+       k: () => LW,
+       l: () => tW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L8-L20` → after: `L14-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L14-L44) · [Before (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L8-L20)

```diff
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(37802),
-       oB = GB(37778),
-       jB = GB(37807),
-       yB = GB(41220),
-       JB = GB(41411),
-       MB = GB(41190),
-       PB = GB(40911),
-       zB = GB(37782);
-     class lB {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+     var mW = OW(39911),
+       EW = OW(41586);
+ 
+     function NW(WW, iW, OW, mW) {
+       switch (iW) {
+         case 5120: {
+           let iW = WW.getInt8(OW);
+           return mW && (iW = Math.max(iW / 127, -1)), iW
+         }
+         case 5121: {
+           let iW = WW.getUint8(OW);
+           return mW && (iW /= 255), iW
+         }
+         case 5122: {
+           let iW = WW.getInt16(OW, !0);
+           return mW && (iW = Math.max(iW / 32767, -1)), iW
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L22-L23` → after: `L46-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L46-L75) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L22-L23)

```diff
-       get name() {
-         return "AutoRotation"
+     }
+ 
+     function PW(WW, iW, OW, mW, NW) {
+       switch (iW) {
+         case 5120:
+           mW && (NW = Math.round(127 * NW)), WW.setInt8(OW, NW);
+           break;
+         case 5121:
+           mW && (NW = Math.round(255 * NW)), WW.setUint8(OW, NW);
+           break;
+         case 5122:
+           mW && (NW = Math.round(32767 * NW)), WW.setInt16(OW, NW, !0);
+           break;
+         case 5123:
+           mW && (NW = Math.round(65535 * NW)), WW.setUint16(OW, NW, !0);
+           break;
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L25-L26` → after: `L77-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L77-L93) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L25-L26)

```diff
-       set zoomStopsAnimation(BB) {
-         this._zoomStopsAnimation = BB
+     }
+ 
+     function LW(WW) {
+       switch (WW) {
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

#### 6. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L28-L29` → after: `L95-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L95-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L95-L117) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L28-L29)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+     }
+ 
+     function cW(WW, iW, OW, mW, EW, cW, wW, tW) {
+       const ZW = new Array(mW),
+         xW = new Array(mW);
+       if (WW instanceof Array) {
+         let EW = iW / 4;
+         const NW = OW / 4;
+         for (let iW = 0; iW < cW; iW += mW) {
+           for (let iW = 0; iW < mW; iW++) ZW[iW] = xW[iW] = WW[EW + iW];
+           tW(xW, iW);
+           for (let iW = 0; iW < mW; iW++) ZW[iW] !== xW[iW] && (WW[EW + iW] = xW[iW]);
+           EW += NW
+         }
+       } else {
+         const lW = ArrayBuffer.isView(WW) ? new DataView(WW.buffer, WW.byteOffset, WW.byteLength) : new DataView(WW),
+ ... (7 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L31-L32` → after: `L119-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L119-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L119-L139) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L31-L32)

```diff
-       set idleRotationSpeed(BB) {
-         this._idleRotationSpeed = BB
+     }
+ 
+     function wW(WW, iW, OW, EW, NW, PW, wW, tW) {
+       const ZW = iW * LW(OW),
+         xW = wW * iW;
+       if (5126 !== OW || NW !== ZW) {
+         const mW = new Float32Array(xW);
+         return cW(WW, EW, NW, iW, OW, xW, PW, ((WW, OW) => {
+           for (let EW = 0; EW < iW; EW++) mW[OW + EW] = WW[EW]
+         })), mW
+       }
+       if (!(WW instanceof Array || WW instanceof Float32Array) || 0 !== EW || WW.length !== xW) {
+         if (WW instanceof Array) {
+           const iW = EW / 4;
+           return WW.slice(iW, iW + xW)
+         }
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L34-L35` → after: `L141-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L141-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L141-L274) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L34-L35)

```diff
-       get idleRotationSpeed() {
-         return this._idleRotationSpeed
+       return tW ? WW.slice() : WW
+     }
+ 
+     function tW(WW, iW, OW, EW, NW, PW, wW) {
+       const tW = LW(OW),
+         ZW = function(WW) {
+           switch (WW) {
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

#### 9. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L37-L38` → after: `L276-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L276-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L276-L311) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L37-L38)

```diff
-       set idleRotationWaitTime(BB) {
-         this._idleRotationWaitTime = BB
+     }
+     class EW {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(WW) {
+         this._lines.length = 0;
+         for (const iW of WW) {
+           if (!iW || "\r" === iW) continue;
+           if ("#" === iW[0]) {
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L40-L41` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L313-L320) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L40-L41)

```diff
-       get idleRotationWaitTime() {
-         return this._idleRotationWaitTime
+     }
+     class NW extends mW {
+       process(WW, iW, OW) {
+         for (let mW = 0; mW < this.children.length; mW++) {
+           const EW = this.children[mW];
+           if (EW.isValid(WW)) return EW.process(WW, iW, OW)
+         }
+         return ""
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L43-L44` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L322-L325) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L43-L44)

```diff
-       set idleRotationSpinupTime(BB) {
-         this._idleRotationSpinupTime = BB
+     }
+     class PW extends mW {
+       isValid(WW) {
+         return this.testExpression.isTrue(WW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L46-L47` → after: `L327-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L327-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L327-L375) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L46-L47)

```diff
-       get idleRotationSpinupTime() {
-         return this._idleRotationSpinupTime
+     }
+     class LW {
+       isTrue(WW) {
+         return !0
+       }
+       static postfixToInfix(WW) {
+         const iW = [];
+         for (const OW of WW)
+           if (void 0 === LW._OperatorPriority[OW]) iW.push(OW);
+           else {
+             const WW = iW[iW.length - 1],
+               mW = iW[iW.length - 2];
+             iW.length -= 2, iW.push(`(${mW}${OW}${WW})`)
+           } return iW[iW.length - 1]
+       }
+       static infixToPostfix(WW) {
+ ... (33 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L49-L50` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L377-L379) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L49-L50)

```diff
-       get rotationInProgress() {
-         return Math.abs(this._cameraRotationSpeed) > 0
+       static ClearCache() {
+         const WW = Array.from(LW._InfixToPostfixCache.entries()).sort(((WW, iW) => WW[1].accessTime - iW[1].accessTime));
+         for (let iW = 0; iW < LW.InfixToPostfixCacheCleanupSize; iW++) LW._InfixToPostfixCache.delete(WW[iW][0])
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L52-L53` → after: `L381-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L381-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L381-L391) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L52-L53)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+     }
+     LW.InfixToPostfixCacheLimitSize = 5e4, LW.InfixToPostfixCacheCleanupSize = 25e3, LW._InfixToPostfixCache = new Map, LW._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+     }, LW._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
+     class cW extends LW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = WW, this.not = iW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L55-L69` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L393-L395) · [Before (L55-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L55-L69)

```diff
-       init() {}
-       attach(BB) {
-         this._attachedCamera = BB;
-         const OB = this._attachedCamera.JF();
-         this._onPrePointerObservableObserver = OB.onPrePointerObservable.add((BB => {
-           BB.type !== MB.c.POINTERDOWN ? BB.type === MB.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
-           if (this._reachTargetAlpha()) return;
-           const BB = PB.e.Now;
-           let OB = 0;
-           null != this._lastFrameTime && (OB = BB - this._lastFrameTime), this._lastFrameTime = BB, this._applyUserInteraction();
-           const GB = BB - this._lastInteractionTime - this._idleRotationWaitTime,
-             YB = Math.max(Math.min(GB / this._idleRotationSpinupTime, 1), 0);
-           this._cameraRotationSpeed = this._idleRotationSpeed * YB, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (OB / 1e3))
-         }))
+       isTrue(WW) {
+         let iW = void 0 !== WW[this.define];
+         return this.not && (iW = !iW), iW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L71-L74` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L397-L400) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L71-L74)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const BB = this._attachedCamera.JF();
-         this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
+     }
+     class wW extends LW {
+       isTrue(WW) {
+         return this.leftOperand.isTrue(WW) || this.rightOperand.isTrue(WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L76-L77` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L402-L405) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L76-L77)

```diff
-       resetLastInteractionTime(BB) {
-         this._lastInteractionTime = BB ?? PB.e.Now
+     }
+     class tW extends LW {
+       isTrue(WW) {
+         return this.leftOperand.isTrue(WW) && this.rightOperand.isTrue(WW)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L79-L80` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L407-L410) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L79-L80)

```diff
-       _reachTargetAlpha() {
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < zB.b
+     }
+     class ZW extends LW {
+       constructor(WW, iW, OW) {
+         super(), this.define = WW, this.operand = iW, this.testValue = OW
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L82-L83` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L412-L413) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L82-L83)

```diff
-       _userIsZooming() {
-         return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L85-L86` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L415) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L85-L86)

```diff
-       _shouldAnimationStopForInteraction() {
-         if (!this._attachedCamera) return !1;
+       isTrue(WW) {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L88-L94` → after: `L417-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L417-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L417-L439) · [Before (L88-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L88-L94)

```diff
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (BB = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? BB : this._userIsZooming()
-       }
-       _applyUserInteraction() {
-         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = PB.e.Now)
-       }
-       _userIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+         const OW = parseInt(void 0 != WW[this.define] ? WW[this.define] : this.define),
+           mW = parseInt(void 0 != WW[this.testValue] ? WW[this.testValue] : this.testValue);
+         if (isNaN(OW) || isNaN(mW)) return !1;
+         switch (this.operand) {
+           case ">":
+             iW = OW > mW;
+             break;
+           case "<":
+             iW = OW < mW;
+             break;
+           case "<=":
+             iW = OW <= mW;
+             break;
+           case ">=":
+             iW = OW >= mW;
+             break;
+ ... (7 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L97-L100` → after: `L442-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L442-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L442-L485) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L97-L100)

```diff
-     GB(42093);
-     class pB {
-       constructor() {
-         this._easingMode = pB.EASINGMODE_EASEIN
+     var xW = OW(41415),
+       lW = OW(41412);
+     const AW = /defined\s*?\((.+?)\)/g,
+       bW = /defined\s*?\[(.+?)\]/g,
+       jW = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       UW = /__decl__/,
+       kW = /light\{X\}.(\w*)/g,
+       sW = /\{X\}/g,
+       MW = [],
+       KW = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function SW(WW) {
+       WW.processor && WW.processor.initializeShaders && WW.processor.initializeShaders(WW.processingContext)
+     }
+ 
+     function YW(WW, iW, OW, mW) {
+ ... (28 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L102-L104` → after: `L487-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L487-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L487-L537) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L102-L104)

```diff
-       setEasingMode(BB) {
-         const OB = Math.min(Math.max(BB, 0), 2);
-         this._easingMode = OB
+     }
+ 
+     function TW(WW) {
+       const iW = /defined\((.+)\)/.exec(WW);
+       if (iW && iW.length) return new cW(iW[1].trim(), "!" === WW[0]);
+       const OW = ["==", "!=", ">=", "<=", "<", ">"];
+       let mW = "",
+         EW = 0;
+       for (mW of OW)
+         if (EW = WW.indexOf(mW), EW > -1) break;
+       if (-1 === EW) return new cW(WW);
+       const NW = WW.substring(0, EW).trim(),
+         PW = WW.substring(EW + mW.length).trim();
+       return new ZW(NW, mW, PW)
+     }
+ 
+ ... (35 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L106-L107` → after: `L539-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L539-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L539-L582) · [Before (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L106-L107)

```diff
-       getEasingMode() {
-         return this._easingMode
+     }
+ 
+     function HW(WW, iW, OW) {
+       for (; WW.canRead;) {
+         WW.lineIndex++;
+         const EW = WW.currentLine;
+         if (EW.indexOf("#") >= 0) {
+           const mW = KW.exec(EW);
+           if (mW && mW.length) {
+             switch (mW[0]) {
+               case "#ifdef": {
+                 const mW = new NW;
+                 iW.children.push(mW);
+                 const PW = JW(EW, 6);
+                 mW.children.push(PW), hW(WW, mW, PW, OW);
+                 break
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L109-L110` → after: `L584-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L584-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L584-L598) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L109-L110)

```diff
-       easeInCore(BB) {
-         throw new Error("You must implement this method")
+       return !1
+     }
+ 
+     function nW(WW, iW, OW, NW) {
+       const PW = new mW,
+         LW = new EW;
+       return LW.lineIndex = -1, LW.lines = WW.split("\n"), HW(LW, PW, NW), PW.process(iW, OW, NW)
+     }
+ 
+     function uW(WW, iW) {
+       const OW = WW.defines,
+         mW = {};
+       for (const EW of OW) {
+         const WW = EW.replace("#define", "").replace(";", "").trim().split(" ");
+         mW[WW[0]] = WW.length > 1 ? WW[1] : ""
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L112-L117` → after: `L600-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L600-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L600-L642) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L112-L117)

```diff
-       ease(BB) {
-         switch (this._easingMode) {
-           case pB.EASINGMODE_EASEIN:
-             return this.easeInCore(BB);
-           case pB.EASINGMODE_EASEOUT:
-             return 1 - this.easeInCore(1 - BB)
+       return 0 === WW.processor?.shaderLanguage && (mW.GL_ES = "true"), mW.__VERSION__ = WW.version, mW[WW.platformName] = "true", (0, lW.k)(mW, iW?.isNDCHalfZRange, iW?.nmW, iW?.useExactSrgbConversions), mW
+     }
+ 
+     function oW(WW, iW, OW) {
+       let mW;
+       for (MW.length = 0; null !== (mW = jW.exec(WW));) MW.push(mW);
+       let EW = [WW],
+         NW = !1;
+       for (const LW of MW) {
+         let WW = LW[1];
+         if (-1 !== WW.indexOf("__decl__") && (WW = WW.replace(UW, ""), iW.supportsUniformBuffers && (WW = WW.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), WW += "Declaration"), !iW.includesShadersStore[WW]) {
+           const mW = iW.shadersRepository + "ShadersInclude/" + WW + ".fx";
+           return void dW.loadFile(mW, (mW => {
+             iW.includesShadersStore[WW] = mW, oW(EW.join(""), iW, OW)
+           }))
+         } {
+ ... (27 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L122-L143` → after: `L649-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L649-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L649-L651) · [Before (L122-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L122-L143)

```diff
-     pB.EASINGMODE_EASEIN = 0, pB.EASINGMODE_EASEOUT = 1, pB.EASINGMODE_EASEINOUT = 2;
-     var qB = GB(42100);
-     class ZB {
-       constructor() {
-         this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
-       }
-       get name() {
-         return "Bouncing"
-       }
-       get autoTransitionRange() {
-         return this._autoTransitionRange
-       }
-       set autoTransitionRange(BB) {
-         if (this._autoTransitionRange === BB) return;
-         this._autoTransitionRange = BB;
-         const OB = this._attachedCamera;
- ... (6 more removed lines; see GitHub link above)
+     const dW = {
+       loadFile: (WW, iW, OW, mW, EW, NW) => {
+         throw (0, xW.o)("FileTools")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L145-L146` → after: `L653-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L653-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L653-L680) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L145-L146)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+     }
+   },
+   41412: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       h: () => NW,
+       k: () => LW,
+       l: () => PW,
+       p: () => cW
+     });
+     var mW = OW(41415);
+     const EW = {};
+ 
+     function NW(WW, iW) {
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (iW ? iW + "\n" : "") + WW
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L148-L152` → after: `L682-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L682-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L682-L724) · [Before (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L148-L152)

```diff
-       init() {}
-       attach(BB) {
-         this._attachedCamera = BB, this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
-           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
-         }))
+     }
+ 
+     function cW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         mW = arguments.length > 3 ? arguments[3] : void 0;
+       switch (WW) {
+         case 3: {
+           const WW = new Int8Array(iW);
+           return mW && WW.set(new Int8Array(mW)), WW
+         }
+         case 0: {
+           const WW = new Uint8Array(iW);
+           return mW && WW.set(new Uint8Array(mW)), WW
+         }
+         case 4: {
+           const WW = "number" !== typeof iW ? new Int16Array(iW) : new Int16Array(OW ? iW / 2 : iW);
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L154-L155` → after: `L726-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L726-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L726-L773) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L154-L155)

```diff
-       detach() {
-         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
+       const EW = new Uint8Array(iW);
+       return mW && EW.set(new Uint8Array(mW)), EW
+     }
+   },
+   41415: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => wW,
+       h: () => tW,
+       k: () => cW,
+       o: () => EW
+     });
+     const mW = {};
+ 
+     function EW(WW) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !mW[WW]) return mW[WW] = !0, `${WW} needs to be imported before as it contains a side-effect required by your code.`
+     }
+ ... (32 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L157-L158` → after: `L775-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L775-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L775-L822) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L157-L158)

```diff
-       _isRadiusAtLimit(BB) {
-         return !!this._attachedCamera && (this._attachedCamera.radius === BB && !this._radiusIsAnimating)
+     }
+   },
+   41406: (WW, iW, OW) => {
+     function mW() {
+       return "undefined" !== typeof window
+     }
+ 
+     function EW() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function NW() {
+       return "undefined" !== typeof document
+     }
+ 
+     function PW(WW) {
+ ... (32 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L160-L164` → after: `L824-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L824-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L824-L855) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L160-L164)

```diff
-       _applyBoundRadiusAnimation(BB) {
-         if (!this._attachedCamera) return;
-         this._radiusBounceTransition || (ZB.EasingFunction.setEasingMode(ZB.EasingMode), this._radiusBounceTransition = qB.d.CreateAnimation("radius", qB.d.ANIMATIONTYPE_FLOAT, 60, ZB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const OB = qB.d.TransitionTo("radius", this._attachedCamera.radius + BB, this._attachedCamera, this._attachedCamera.JF(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
-         OB && this._animatables.push(OB)
+     }
+   },
+   41558: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => uW,
+       f: () => sW,
+       i: () => JW,
+       l: () => HW,
+       o: () => yW,
+       s: () => SW,
+       v: () => YW,
+       z: () => gW,
+       D: () => TW,
+       H: () => MW
+     });
+     var mW = OW(41564),
+ ... (16 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L166-L167` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L857-L860) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L166-L167)

```diff
-       _clearAnimationLocks() {
-         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
+     }
+     class UW extends LW.j {
+       constructor(WW, iW) {
+         super(WW, LW.g.RequestFileError), this.request = iW, this.name = "RequestFileError", LW.c._setPrototypeOf(this, UW.prototype)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L169-L170` → after: `L862-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L862-L865) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L169-L170)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
+     }
+     class kW extends LW.j {
+       constructor(WW, iW) {
+         super(WW, LW.g.ReadFileError), this.file = iW, this.name = "ReadFileError", LW.c._setPrototypeOf(this, kW.prototype)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L173-L176` → after: `L868-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L868-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L868-L1337) · [Before (L173-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L173-L176)

```diff
-     ZB.EasingFunction = new class extends pB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         super(), this.amplitude = BB
+     const sW = {
+         DefaultRetryStrategy: class {
+           static ExponentialBackoff() {
+             let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
+               iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
+             return (OW, mW, EW) => 0 !== mW.status || EW >= WW || -1 !== OW.indexOf("file:") ? -1 : Math.pow(2, EW) * iW
+           }
+         }.ExponentialBackoff(),
+         BaseUrl: "",
+         CorsBehavior: "anonymous",
+         PreprocessUrl: WW => WW,
+         ScriptBaseUrl: "",
+         ScriptPreprocessUrl: WW => WW,
+         CleanUrl: WW => WW = WW.replace(/#/gm, "%23")
+       },
+       MW = (WW, iW) => {
+ ... (454 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L178-L180` → after: `L1339-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1339-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1339-L1345) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L178-L180)

```diff
-       easeInCore(BB) {
-         const OB = Math.max(0, this.amplitude);
-         return Math.pow(BB, 3) - BB * OB * Math.sin(3.141592653589793 * BB)
+     }
+ 
+     function NW(WW, iW, OW) {
+       try {
+         if (WW()) return iW(), !0
+       } catch (mW) {
+         return OW?.(mW), !0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L182` → after: `L1347-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1347-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1347-L1363) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L182)

```diff
-     }(.3), ZB.EasingMode = pB.EASINGMODE_EASEOUT;
+       return !1
+     }
+     const PW = function(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+         PW = arguments.length > 6 ? arguments[6] : void 0;
+       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && NW(WW, iW, OW)) return null;
+       const LW = setInterval((() => {
+         NW(WW, iW, OW) ? clearInterval(LW) : (EW -= mW, EW < 0 && (clearInterval(LW), OW?.(new Error("Operation timed out after maximum retries. " + (PW || "")), !0)))
+       }), mW);
+       return () => clearInterval(LW)
+     }
+   },
+   41564: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L185-L194` → after: `L1366-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1366-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1366-L1402) · [Before (L185-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L185-L194)

```diff
-         this.onTargetFramingAnimationEndObservable = new QB.b, this._mode = NB.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
-       }
-       get name() {
-         return "Framing"
-       }
-       set mode(BB) {
-         this._mode = BB
-       }
-       get mode() {
-         return this._mode
+         this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
+       }
+       static get IsCustomRequestAvailable() {
+         return Object.keys(mW.CustomRequestHeaders).length > 0 || mW.CustomRequestModifiers.length > 0
+       }
+       static _CleanUrl(WW) {
+         return WW = (WW = WW.replace("file:http:", "http:")).replace("file:https:", "https:")
+       }
+       static _ShouldSkipRequestModifications(WW) {
+         return mW.SkipRequestModificationForBabylonCDN && (WW.includes("preview.babylonjs.com") || WW.includes("cdn.babylonjs.com"))
+       }
+       static _CollectCustomizations(WW) {
+         const iW = {
+           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
+         };
+         if (mW._ShouldSkipRequestModifications(WW)) return {
+ ... (21 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L196-L197` → after: `L1404-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1404-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1404-L1440) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L196-L197)

```diff
-       set radiusScale(BB) {
-         this._radiusScale = BB
+       static async FetchAsync(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const OW = iW.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+             url: EW,
+             headers: NW
+           } = mW._CollectCustomizations(mW._CleanUrl(WW), iW.headers ?? {});
+           return await fetch(EW, {
+             method: OW,
+             headers: NW,
+             body: iW.body ?? void 0
+           })
+         }
+         return await new Promise(((EW, NW) => {
+           const PW = new mW;
+ ... (21 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L199-L200` → after: `L1442-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1442-L1443) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L199-L200)

```diff
-       get radiusScale() {
-         return this._radiusScale
+       get requestURL() {
+         return this._requestURL
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L202-L203` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1445-L1446) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L202-L203)

```diff
-       set positionScale(BB) {
-         this._positionScale = BB
+       get onprogress() {
+         return this._xhr.onprogress
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L205-L206` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1448-L1449) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L205-L206)

```diff
-       get positionScale() {
-         return this._positionScale
+       set onprogress(WW) {
+         this._xhr.onprogress = WW
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L208-L209` → after: `L1451-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1451-L1452) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L208-L209)

```diff
-       set defaultElevation(BB) {
-         this._defaultElevation = BB
+       get readyState() {
+         return this._xhr.readyState
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L211-L212` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1454-L1455) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       get status() {
+         return this._xhr.status
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L214-L215` → after: `L1457-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1457-L1458) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L214-L215)

```diff
-       set elevationReturnTime(BB) {
-         this._elevationReturnTime = BB
+       get statusText() {
+         return this._xhr.statusText
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L217-L218` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1460-L1461) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       get response() {
+         return this._xhr.response
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L220-L221` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1463-L1464) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L220-L221)

```diff
-       set elevationReturnWaitTime(BB) {
-         this._elevationReturnWaitTime = BB
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L223-L224` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1466-L1467) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       get responseText() {
+         return this._xhr.responseText
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L226-L227` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1469-L1470) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L226-L227)

```diff
-       set zoomStopsAnimation(BB) {
-         this._zoomStopsAnimation = BB
+       get responseType() {
+         return this._xhr.responseType
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L229-L230` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1472-L1473) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set responseType(WW) {
+         this._xhr.responseType = WW
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L232-L233` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1475-L1476) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L232-L233)

```diff
-       set framingTime(BB) {
-         this._framingTime = BB
+       get timeout() {
+         return this._xhr.timeout
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L235-L236` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1478-L1479) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set timeout(WW) {
+         this._xhr.timeout = WW
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L238-L239` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1481-L1482) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       addEventListener(WW, iW, OW) {
+         this._xhr.addEventListener(WW, iW, OW)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L241-L253` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1484-L1485) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L241-L253)

```diff
-       init() {}
-       attach(BB) {
-         this._attachedCamera = BB;
-         const OB = this._attachedCamera.JF();
-         NB.EasingFunction.setEasingMode(NB.EasingMode), this._onPrePointerObservableObserver = OB.onPrePointerObservable.add((BB => {
-           BB.type !== MB.c.POINTERDOWN ? BB.type === MB.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = BB.onMeshTargetChangedObservable.add((BB => {
-           BB && BB.Gw && this.zoomOnMesh(BB, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       removeEventListener(WW, iW, OW) {
+         this._xhr.removeEventListener(WW, iW, OW)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L255-L331` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1487-L1488) · [Before (L255-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L255-L331)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const BB = this._attachedCamera.JF();
-         this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
-       }
-       zoomOnMesh(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         BB.computeWorldMatrix(!0);
-         const YB = BB.Gw().boundingBox;
-         this.zoomOnBoundingInfo(YB.minimumWorld, YB.maximumWorld, OB, GB)
-       }
-       zoomOnMeshHierarchy(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         BB.computeWorldMatrix(!0);
- ... (61 more removed lines; see GitHub link above)
+       abort() {
+         this._xhr.abort()
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L333-L334` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1490-L1491) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L333-L334)

```diff
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       send(WW) {
+         this._xhr.send(WW)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L336-L337` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1493-L1499) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = PB.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       open(WW, iW, OW) {
+         const {
+           url: EW,
+           headers: NW
+         } = mW._CollectCustomizations(iW, OW);
+         this._requestURL = mW._CleanUrl(EW), this._xhr.open(WW, this._requestURL, !0);
+         for (const mW in NW) this._xhr.setRequestHeader(mW, NW[mW])
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L339-L340` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1501-L1502) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L339-L340)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       setRequestHeader(WW, iW) {
+         this._xhr.setRequestHeader(WW, iW)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L342-L343` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1504-L1505) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L342-L343)

```diff
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       getResponseHeader(WW) {
+         return this._xhr.getResponseHeader(WW)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L346-L2236` → after: `L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/289.js#L1508) · [Before (L346-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/289.js#L346-L2236)

```diff
-     NB.EasingFunction = new class extends pB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = BB
-       }
-       easeInCore(BB) {
-         return this.exponent <= 0 ? BB : (Math.exp(this.exponent * BB) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, NB.EasingMode = pB.EASINGMODE_EASEINOUT, NB.IgnoreBoundsSizeMode = 0, NB.FitFrustumSidesMode = 1;
-     var RB = GB(41217),
-       WB = GB(41215),
-       AB = GB(41237),
-       VB = GB(41097);
-     let SB = (() => {
-         var BB;
-         let OB, GB = [],
- ... (1875 more removed lines; see GitHub link above)
+     mW.CustomRequestHeaders = {}, mW.CustomRequestModifiers = new Array, mW.SkipRequestModificationForBabylonCDN = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L4)

```diff
-   41399: (BB, OB, GB) => {
+   41626: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L6)

```diff
-       d: () => DB
+       b: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L8-L77` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L8-L19) · [Before (L8-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L8-L77)

```diff
-     var YB = GB(41012);
- 
-     function DB(BB) {
-       return class extends BB {
-         constructor() {
-           super(...arguments);
-           const BB = new.target;
-           if (!BB[Symbol.metadata]) {
-             const OB = Object.getPrototypeOf(BB)?.[Symbol.metadata];
-             BB[Symbol.metadata] = OB ? Object.create(OB) : {}
-           }
-           const OB = (0, YB.e)(BB[Symbol.metadata]);
-           OB._imageProcessingConfiguration || (OB._imageProcessingConfiguration = {
-             type: 9,
-             sourceName: void 0
-           })
- ... (54 more removed lines; see GitHub link above)
+     var mW = OW(39911),
+       EW = OW(38299);
+     class NW {
+       static Instantiate(WW) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[WW]) return this.RegisteredExternalClasses[WW];
+         const iW = (0, EW.d)(WW);
+         if (iW) return iW;
+         mW.b.Warn(WW + " not found, you may have missed an import.");
+         const OW = WW.split(".");
+         let NW = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let mW = 0, EW = OW.length; mW < EW; mW++) NW = NW[OW[mW]];
+         return "function" !== typeof NW ? null : NW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L81` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L24) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L81)

```diff
-   41273: (BB, OB, GB) => {
+   41431: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L83-L84` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L26) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L83-L84)

```diff
-       e: () => QB,
-       f: () => DB
+       d: () => EW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L86` → after: `L28-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L28-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L28-L46) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L86)

```diff
-     var YB = GB(41275);
+     var mW = OW(41406);
+     class EW {
+       static get Now() {
+         return (0, mW.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       }
+     }
+   },
+   41458: (WW, iW, OW) => {
+     function mW(WW) {
+       let iW = 1;
+       do {
+         iW *= 2
+       } while (iW < WW);
+       return iW === WW
+     }
+ 
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L89-L93` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L49-L51) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L89-L93)

```diff
-       return class extends BB {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
-         }
-       }
+       const iW = PW(WW),
+         OW = LW(WW);
+       return iW - WW > WW - OW ? OW : iW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L95-L98` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L53-L55) · [Before (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L95-L98)

```diff
-     class QB extends YB.c {
-       constructor() {
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
-       }
+ 
+     function PW(WW) {
+       return WW--, WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, WW |= WW >> 16, ++WW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L100-L115` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L57-L59) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L100-L115)

```diff
-   },
-   41358: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => PB
-     });
-     var YB = GB(40998),
-       DB = GB(41283),
-       QB = GB(41004),
-       oB = GB(41341),
-       jB = GB(41275),
-       yB = GB(41361),
-       JB = GB(41325);
-     class MB extends jB.c {
-       constructor() {
-         super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
-       }
+ 
+     function LW(WW) {
+       return WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, (WW |= WW >> 16) - (WW >> 1)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L117-L294` → after: `L61-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L61-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L61-L82) · [Before (L117-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L117-L294)

```diff
-     let PB = (() => {
-       var BB, OB, GB, jB;
-       let PB, zB, lB, pB, qB, ZB, NB = yB.c,
-         RB = [],
-         WB = [],
-         AB = [],
-         VB = [],
-         SB = [],
-         nB = [],
-         UB = [],
-         fB = [],
-         kB = [],
-         dB = [],
-         KB = [],
-         uB = [];
-       return BB = class extends NB {
- ... (162 more removed lines; see GitHub link above)
+ 
+     function cW(WW, iW) {
+       let OW;
+       switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
+         case 1:
+           OW = LW(WW);
+           break;
+         case 2:
+           OW = NW(WW);
+           break;
+         default:
+           OW = PW(WW)
+       }
+       return Math.min(OW, iW)
+     }
+     OW.d(iW, {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L296` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L84) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L296)

```diff
-   41275: (BB, OB, GB) => {
+   41620: (WW, iW, OW) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L298` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L86-L89) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L298)

```diff
-       c: () => YB
+       b: () => sW,
+       c: () => KW,
+       f: () => UW,
+       h: () => kW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L301-L303` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L105-L106) · [Before (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L301-L303)

```diff
-       constructor(BB) {
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const OB in BB) Object.prototype.hasOwnProperty.call(BB, OB) && this._setDefaultValue(OB)
+       static get BaseUrl() {
+         return xW.f.BaseUrl
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L305-L306` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L108-L109) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L305-L306)

```diff
-       get isDirty() {
-         return this._isDirty
+       static set BaseUrl(WW) {
+         xW.f.BaseUrl = WW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L308-L309` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L111-L112) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L308-L309)

```diff
-       markAsProcessed() {
-         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
+       static get CleanUrl() {
+         return xW.f.CleanUrl
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L311-L312` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L114-L115) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L311-L312)

```diff
-       markAsUnprocessed() {
-         this._isDirty = !0
+       static set CleanUrl(WW) {
+         xW.f.CleanUrl = WW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L314-L315` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L117-L118) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L314-L315)

```diff
-       markAllAsDirty() {
-         this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
+       static IsAbsoluteUrl(WW) {
+         return 0 === WW.indexOf("//") || -1 !== WW.indexOf("://") && (-1 !== WW.indexOf(".") && (-1 !== WW.indexOf("/") && (!(WW.indexOf(":") > WW.indexOf("/")) && (WW.indexOf("://") < WW.indexOf(".") || (0 === WW.indexOf("data:") || 0 === WW.indexOf("blob:"))))))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L317-L318` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L120-L121) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L317-L318)

```diff
-       markAsImageProcessingDirty() {
-         this._areImageProcessingDirty = !0, this._isDirty = !0
+       static set ScriptBaseUrl(WW) {
+         xW.f.ScriptBaseUrl = WW
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L320-L322` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L123-L124) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L320-L322)

```diff
-       markAsLightDirty() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || BB, this._isDirty = !0
+       static get ScriptBaseUrl() {
+         return xW.f.ScriptBaseUrl
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L324-L325` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L126-L127) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L324-L325)

```diff
-       markAsAttributesDirty() {
-         this._areAttributesDirty = !0, this._isDirty = !0
+       static set CDNBaseUrl(WW) {
+         mW.ScriptBaseUrl = WW, mW.AssetBaseUrl = WW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L327-L328` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L129-L130) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L327-L328)

```diff
-       markAsTexturesDirty() {
-         this._areTexturesDirty = !0, this._isDirty = !0
+       static set ScriptPreprocessUrl(WW) {
+         xW.f.ScriptPreprocessUrl = WW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L330-L331` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L132-L133) · [Before (L330-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L330-L331)

```diff
-       markAsFresnelDirty() {
-         this._areFresnelDirty = !0, this._isDirty = !0
+       static get ScriptPreprocessUrl() {
+         return xW.f.ScriptPreprocessUrl
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L333-L334` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L135-L136) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L333-L334)

```diff
-       markAsMiscDirty() {
-         this._areMiscDirty = !0, this._isDirty = !0
+       static get DefaultRetryStrategy() {
+         return xW.f.DefaultRetryStrategy
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L336-L337` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L138-L139) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L336-L337)

```diff
-       markAsPrePassDirty() {
-         this._arePrePassDirty = !0, this._isDirty = !0
+       static set DefaultRetryStrategy(WW) {
+         xW.f.DefaultRetryStrategy = WW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L339-L343` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L141-L142) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L339-L343)

```diff
-       rebuild() {
-         this._keys.length = 0;
-         for (const BB of Object.keys(this)) "_" !== BB[0] && this._keys.push(BB);
-         if (this._externalProperties)
-           for (const BB in this._externalProperties) - 1 === this._keys.indexOf(BB) && this._keys.push(BB)
+       static get CorsBehavior() {
+         return xW.f.CorsBehavior
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L345-L351` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L144-L145) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L345-L351)

```diff
-       isEqual(BB) {
-         if (this._keys.length !== BB._keys.length) return !1;
-         for (let OB = 0; OB < this._keys.length; OB++) {
-           const GB = this._keys[OB];
-           if (this[GB] !== BB[GB]) return !1
-         }
-         return !0
+       static set CorsBehavior(WW) {
+         xW.f.CorsBehavior = WW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L353-L358` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L147-L148) · [Before (L353-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L353-L358)

```diff
-       cloneTo(BB) {
-         this._keys.length !== BB._keys.length && (BB._keys = this._keys.slice(0));
-         for (let OB = 0; OB < this._keys.length; OB++) {
-           const GB = this._keys[OB];
-           BB[GB] = this[GB]
-         }
+       static get UseFallbackTexture() {
+         return ZW.d.UseFallbackTexture
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L360-L375` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L150-L151) · [Before (L360-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L360-L375)

```diff
-       reset() {
-         for (const BB of this._keys) this._setDefaultValue(BB)
-       }
-       _setDefaultValue(BB) {
-         const OB = this._externalProperties?.[BB]?.type ?? typeof this[BB],
-           GB = this._externalProperties?.[BB]?.default;
-         switch (OB) {
-           case "number":
-             this[BB] = GB ?? 0;
-             break;
-           case "string":
-             this[BB] = GB ?? "";
-             break;
-           default:
-             this[BB] = GB ?? !1
-         }
+       static set UseFallbackTexture(WW) {
+         ZW.d.UseFallbackTexture = WW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L377-L391` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L153-L154) · [Before (L377-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L377-L391)

```diff
-       toString() {
-         let BB = "";
-         for (let OB = 0; OB < this._keys.length; OB++) {
-           const GB = this._keys[OB],
-             YB = this[GB];
-           switch (typeof YB) {
-             case "number":
-             case "string":
-               BB += "#define " + GB + " " + YB + "\n";
-               break;
-             default:
-               YB && (BB += "#define " + GB + "\n")
-           }
-         }
-         return BB
+       static get RegisteredExternalClasses() {
+         return AW.b.RegisteredExternalClasses
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L393-L445` → after: `L156-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L156-L160) · [Before (L393-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L393-L445)

```diff
-     }
-   },
-   41381: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => jB,
-       g: () => oB,
-       h: () => QB
-     });
-     var YB, DB = GB(37778);
- 
-     function QB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
-       const YB = OB(BB);
-       if (!Number.isInteger(YB) || YB < 0 || YB > GB) throw new Error(`Invalid geometry object ID ${YB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${GB.toString(16).toUpperCase()}.`);
-       return YB
-     }
- ... (37 more removed lines; see GitHub link above)
+       static set RegisteredExternalClasses(WW) {
+         AW.b.RegisteredExternalClasses = WW
+       }
+       static get fallbackTexture() {
+         return ZW.d.FallbackTexture
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L447-L449` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L162-L163) · [Before (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L447-L449)

```diff
-       static _PrepareStringDefines(BB, OB) {
-         const GB = jB._Configurations[BB];
-         return !!GB?._defines && (OB.push(GB._defines), !0)
+       static set fallbackTexture(WW) {
+         ZW.d.FallbackTexture = WW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L451-L453` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L165-L167) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L451-L453)

```diff
-       static _BindAttachmentsForEffect(BB, OB) {
-         const GB = jB._Configurations[BB.currentRenderPassId];
-         return !GB?._attachments || (BB.bindAttachments(OB._multiTarget ? GB._attachments : GB._colorAttachments), OB._multiTarget || void 0 !== GB.defines.PREPASS_COLOR_INDEX)
+       static FetchToRef(WW, iW, OW, mW, EW, NW) {
+         const PW = 4 * ((Math.abs(WW) * OW % OW | 0) + (Math.abs(iW) * mW % mW | 0) * OW);
+         NW.r = EW[PW] / 255, NW.g = EW[PW + 1] / 255, NW.b = EW[PW + 2] / 255, NW.a = EW[PW + 3] / 255
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L455-L457` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L169-L170) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L455-L457)

```diff
-       static _RestoreAttachments(BB) {
-         const OB = jB._Configurations[BB.currentRenderPassId];
-         OB?._colorAttachments && BB.bindAttachments(OB._colorAttachments)
+       static Mix(WW, iW, OW) {
+         return 0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L459-L461` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L172-L173) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L459-L461)

```diff
-       static _BindColorAttachments(BB) {
-         const OB = jB._Configurations[BB.currentRenderPassId];
-         return !OB?._colorAttachments || (BB.bindAttachments(OB._colorAttachments), void 0 !== OB.defines.PREPASS_COLOR_INDEX)
+       static Instantiate(WW) {
+         return AW.b.Instantiate(WW)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L463-L465` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L175-L176) · [Before (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L463-L465)

```diff
-       static _IsColorAttachmentEnabled(BB) {
-         const OB = jB._Configurations[BB.currentRenderPassId];
-         return !OB?._colorAttachments || void 0 !== OB.defines.PREPASS_COLOR_INDEX
+       static SetImmediate(WW) {
+         lW.d.SetImmediate(WW)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L467-L472` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L178-L179) · [Before (L467-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L467-L472)

```diff
-       static _BindZeroAlphaDiscard(BB, OB) {
-         const GB = jB._Configurations[BB.currentRenderPassId];
-         if (!GB) return;
-         const YB = BB.getAlphaMode(),
-           DB = void 0 === GB.defines.PREPASS_COLOR_INDEX || 2 === YB || 1 === YB || 17 === YB;
-         OB.setFloat("geometryZeroAlphaDiscard", DB ? 1 : 0)
+       static IsExponentOfTwo(WW) {
+         return !0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L474-L475` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L181-L182) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L474-L475)

```diff
-       static AddUniformsAndSamplers(BB, OB) {
-         BB.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
+       static FloatRound(WW) {
+         return Math.fround(WW)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L477-L523` → after: `L184-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L184-L186) · [Before (L477-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L477-L523)

```diff
-       static MarkAsDirty(BB, OB) {
-         for (const GB of OB)
-           if (GB.iW)
-             for (const OB of GB.iW) OB._removeDrawWrapper(BB)
-       }
-       static PrepareDefines(BB, OB, GB) {
-         if (!GB._arePrePassDirty) return;
-         const YB = jB._Configurations[BB];
-         if (!YB) return;
-         GB.PREPASS = !0;
-         let DB = 0;
-         for (let QB = 0; QB < jB.GeometryTextureDescriptions.length; QB++) {
-           const BB = jB.GeometryTextureDescriptions[QB],
-             OB = BB.define,
-             oB = BB.defineIndex,
-             yB = YB.defines[oB];
- ... (31 more removed lines; see GitHub link above)
+       static GetFilename(WW) {
+         const iW = WW.lastIndexOf("/");
+         return iW < 0 ? WW : WW.substring(iW + 1)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L525-L664` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L188-L191) · [Before (L525-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L525-L664)

```diff
-     }
-     jB.GeometryTextureDescriptions = [{
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
+       static GetFolderPath(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const OW = WW.lastIndexOf("/");
+         return OW < 0 ? iW ? WW : "" : WW.substring(0, OW + 1)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L666-L669` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L193-L194) · [Before (L666-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L666-L669)

```diff
-       _handlePluginEventIsReadyForSubMesh(BB) {
-         let OB = !0;
-         for (const GB of this._activePlugins) OB = OB && GB.isReadyForSubMesh(BB.defines, this._scene, this._engine, BB.subMesh);
-         BB.isReadyForSubMesh = OB
+       static ToDegrees(WW) {
+         return 180 * WW / Math.PI
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L671-L672` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L196-L197) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L671-L672)

```diff
-       _handlePluginEventPrepareDefinesBeforeAttributes(BB) {
-         for (const OB of this._activePlugins) OB.prepareDefinesBeforeAttributes(BB.defines, this._scene, BB.mesh)
+       static ToRadians(WW) {
+         return WW * Math.PI / 180
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L674-L675` → after: `L199-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L199-L203) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L674-L675)

```diff
-       _handlePluginEventPrepareDefines(BB) {
-         for (const OB of this._activePlugins) OB.prepareDefines(BB.defines, this._scene, BB.mesh)
+       static SmoothAngleChange(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
+         const mW = this.ToRadians(WW),
+           EW = this.ToRadians(iW);
+         return this.ToDegrees(Math.atan2((1 - OW) * Math.sin(EW) + OW * Math.sin(mW), (1 - OW) * Math.cos(EW) + OW * Math.cos(mW)))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L677-L678` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L205-L206) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L677-L678)

```diff
-       _handlePluginEventHardBindForSubMesh(BB) {
-         for (const OB of this._activePluginsForExtraEvents) OB.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
+       static MakeArray(WW, iW) {
+         return !0 === iW || void 0 !== WW && null != WW ? Array.isArray(WW) ? WW : [WW] : null
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L680-L681` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L208-L209) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L680-L681)

```diff
-       _handlePluginEventBindForSubMesh(BB) {
-         for (const OB of this._activePlugins) OB.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
+       static GetPointerPrefix(WW) {
+         return (0, NW.j)() && !window.PointerEvent ? "mouse" : "pointer"
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L683-L687` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L211-L212) · [Before (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L683-L687)

```diff
-       _handlePluginEventHasRenderTargetTextures(BB) {
-         let OB = !1;
-         for (const GB of this._activePluginsForExtraEvents)
-           if (OB = GB.hasRenderTargetTextures(), OB) break;
-         BB.hasRenderTargetTextures = OB
+       static SetCorsBehavior(WW, iW) {
+         (0, xW.H)(WW, iW)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L689-L690` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L214-L215) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L689-L690)

```diff
-       _handlePluginEventFillRenderTargetTextures(BB) {
-         for (const OB of this._activePluginsForExtraEvents) OB.fillRenderTargetTextures(BB.renderTargets)
+       static SetReferrerPolicyBehavior(WW, iW) {
+         iW.referrerPolicy = WW
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L692-L759` → after: `L217-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L217-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L217-L243) · [Before (L692-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L692-L759)

```diff
-       _handlePluginEvent(BB, OB) {
-         switch (BB) {
-           case 512: {
-             const BB = OB;
-             for (const OB of this._activePlugins) OB.getActiveTextures(BB.activeTextures);
-             break
-           }
-           case 256: {
-             const BB = OB;
-             for (const OB of this._activePlugins) OB.getAnimatables(BB.animatables);
-             break
-           }
-           case 1024: {
-             const BB = OB;
-             let GB = !1;
-             for (const OB of this._activePlugins)
- ... (52 more removed lines; see GitHub link above)
+       static get PreprocessUrl() {
+         return xW.f.PreprocessUrl
+       }
+       static set PreprocessUrl(WW) {
+         xW.f.PreprocessUrl = WW
+       }
+       static LoadImage(WW, iW, OW, mW, EW, NW) {
+         return (0, xW.s)(WW, iW, OW, mW, EW, NW)
+       }
+       static LoadFile(WW, iW, OW, mW, EW, NW) {
+         return (0, xW.o)(WW, iW, OW, mW, EW, NW)
+       }
+       static async LoadFileAsync(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         return await new Promise(((OW, mW) => {
+           (0, xW.o)(WW, (WW => {
+ ... (11 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L762-L792` → after: `L247-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L247-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L247-L275) · [Before (L762-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L762-L792)

```diff
-       _collectPointNames(BB, OB) {
-         if (OB)
-           for (const GB in OB) this._codeInjectionPoints[BB] || (this._codeInjectionPoints[BB] = {}), this._codeInjectionPoints[BB][GB] = !0
-       }
-       _injectCustomCode(BB, OB) {
-         return (GB, YB) => {
-           OB && (YB = OB(GB, YB)), this._uboDeclaration && (YB = YB.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (YB = YB.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const DB = this._codeInjectionPoints?.[GB];
-           if (!DB) return YB;
-           let yB = null;
-           for (let OB in DB) {
-             let DB = "";
-             for (const YB of this._activePlugins) {
-               const jB = this._material.shaderLanguage;
-               let JB = YB.getCustomCode(GB, jB)?.[OB];
-               JB && (YB.resolveIncludes && (null === yB && (yB = {
- ... (15 more removed lines; see GitHub link above)
+       static GetBabylonScriptURL(WW, iW) {
+         if (!WW) return "";
+         if (WW.startsWith(mW._DefaultCdnUrl))
+           if (mW.ScriptBaseUrl) {
+             const iW = mW.ScriptBaseUrl.endsWith("/") ? mW.ScriptBaseUrl.slice(0, -1) : mW.ScriptBaseUrl;
+             WW = WW.replace(mW._DefaultCdnUrl, iW)
+           } else if (mW._CdnVersion) {
+           const iW = `${mW._DefaultCdnUrl}/v${mW._CdnVersion}`;
+           WW.startsWith(iW) || (WW = WW.replace(mW._DefaultCdnUrl, iW))
+         }
+         return WW = mW.ScriptPreprocessUrl(WW), iW && !mW.IsAbsoluteUrl(WW) && (WW = mW.GetAbsoluteUrl(WW)), WW
+       }
+       static LoadBabylonScript(WW, iW, OW, EW) {
+         WW = mW.GetBabylonScriptURL(WW), mW.LoadScript(WW, iW, OW)
+       }
+       static async LoadBabylonScriptAsync(WW) {
+ ... (13 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L794-L817` → after: `L277-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L277-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L277-L491) · [Before (L794-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L794-L817)

```diff
-             if (DB.length > 0)
-               if ("!" === OB.charAt(0)) {
-                 OB = OB.substring(1);
-                 let BB = "g";
-                 if ("!" === OB.charAt(0)) BB = "", OB = OB.substring(1);
-                 else {
-                   const GB = jB.exec(OB);
-                   GB && GB.length >= 2 && (BB = GB[1], OB = OB.substring(BB.length + 1))
-                 }
-                 BB.indexOf("g") < 0 && (BB += "g");
-                 const GB = new RegExp(OB, BB);
-                 let QB = GB.exec(YB);
-                 for (; null !== QB;) {
-                   const {
-                     index: BB
-                   } = QB, OB = JB(DB, QB);
- ... (8 more removed lines; see GitHub link above)
+           }), void 0, void 0, !1, ((WW, iW) => {
+             OW && OW("LoadScript Error", iW)
+           }))
+         }
+       }
+       static _LoadScriptWeb(WW, iW, OW, mW) {
+         let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(WW), iW && iW()
+           } catch (cW) {
+             OW?.(`Unable to load script '${WW}' in worker`, cW)
+           }
+           return
+         }
+         if (!(0, NW.j)()) return void OW?.(`Cannot load script '${WW}' outside of a window or a worker`);
+ ... (199 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L820-L906` → after: `L495-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L495-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L495-L511) · [Before (L820-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L820-L906)

```diff
-     }
-     yB._MaterialPluginClassToMainDefine = {}, yB._MaterialPluginCounter = 0;
- 
-     function JB(BB, OB) {
-       return BB.replace(/\$(\d+)/g, ((BB, GB) => {
-         const YB = Number(GB);
-         return YB < OB.length ? OB[YB] : ""
-       }))
-     }
-     var MB = GB(41022),
-       PB = GB(37823);
-     let zB = (() => {
-         var BB;
-         let OB, GB, QB, oB, jB = [],
-           JB = [],
-           PB = [],
- ... (71 more removed lines; see GitHub link above)
+       static _EndUserMark(WW) {
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && mW._Performance.mark && (mW._Performance.mark(WW + "-End"), mW._Performance.measure(WW, WW + "-Begin", WW + "-End"))
+       }
+       static _StartPerformanceConsole(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         iW && (mW._StartUserMark(WW, iW), console.time && console.time(WW))
+       }
+       static _EndPerformanceConsole(WW) {
+         let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         iW && (mW._EndUserMark(WW, iW), console.timeEnd(WW))
+       }
+       static _StartMarkNative(WW) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
+           if (mW._NativePerformanceCounterHandles.has(WW)) mW.Warn(`Performance counter with name ${WW} is already started.`);
+           else {
+             const iW = _native.startPerformanceCounter(WW);
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L995-L1001` → after: `L514-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L514-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L514-L517) · [Before (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L995-L1001)

```diff
-     }
-   },
-   41392: (BB, OB, GB) => {
-     function YB(BB) {
-       return class extends BB {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+       static _EndMarkNative(WW) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const iW = mW._NativePerformanceCounterHandles.get(WW);
+           iW ? (_native.endPerformanceCounter(iW), mW._NativePerformanceCounterHandles.delete(WW)) : mW.Warn(`Performance counter with name ${WW} was not started.`)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1004-L1054` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L520-L521) · [Before (L1004-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L1004-L1054)

```diff
-     }
-     GB.d(OB, {
-       b: () => YB
-     })
-   },
-   41258: (BB, OB, GB) => {
-     GB.d(OB, {
-       StandardMaterial: () => YB.h
-     });
-     var YB = GB(41262);
-     (0, YB.e)()
-   },
-   41262: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => gB,
-       h: () => iB
- ... (35 more removed lines; see GitHub link above)
+       static get Now() {
+         return cW.d.Now
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1056-L1263` → after: `L523-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L523-L529) · [Before (L1056-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L1056-L1263)

```diff
-     }
-     class FB extends((0, kB.d)(pB.d)) {}
-     let iB = (() => {
-         var BB, OB, MB, lB, UB, fB, kB, dB, KB, mB, iB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, TB, bB, CB, HB, vB, sB, xB, tB, BO, OO, GO, YO;
-         let DO, QO, oO, jO, yO, JO, MO, PO, zO, lO, pO, qO, ZO, NO, RO, WO, AO, VO, SO, nO, UO, fO, kO, dO, KO, uO, mO, IO, FO, iO, LO, gO, rO, XO, wO, EO, cO, hO, aO, eO, TO, bO, CO, HO, vO, sO, xO, tO, BG, OG, GG, YG, DG, QG, oG, jG, yG, JG, MG, PG, zG, lG, pG, qG, ZG, NG, RG,  … [truncated]
-           kG = [],
-           dG = [],
-           KG = [],
-           uG = [],
-           mG = [],
-           IG = [],
-           FG = [],
-           iG = [],
-           LG = [],
-           gG = [],
-           rG = [],
- ... (192 more removed lines; see GitHub link above)
+       static GetClassName(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = null;
+         if (!iW && WW.getClassName) OW = WW.getClassName();
+         else {
+           if (WW instanceof Object) {
+             OW = (iW ? WW : Object.getPrototypeOf(WW)).constructor.__bjsclassName__
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L1265-L2685` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L531) · [Before (L1265-L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L1265-L2685)

```diff
-           set useAlphaFromDiffuseTexture(BB) {
-             (0, YB.d)(this, iB, BB, "f")
-           }
-           get useEmissiveAsIllumination() {
-             return (0, YB.c)(this, LB, "f")
-           }
-           set useEmissiveAsIllumination(BB) {
-             (0, YB.d)(this, LB, BB, "f")
-           }
-           get linkEmissiveWithDiffuse() {
-             return (0, YB.c)(this, gB, "f")
-           }
-           set linkEmissiveWithDiffuse(BB) {
-             (0, YB.d)(this, gB, BB, "f")
-           }
-           get useSpecularOverAlpha() {
- ... (1405 more removed lines; see GitHub link above)
+           OW || (OW = typeof WW)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2688-L2707` → after: `L535-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L535-L538) · [Before (L2688-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L2688-L2707)

```diff
-     }
-     GB.d(OB, {
-       e: () => YB
-     })
-   },
-   41372: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => YB
-     });
-     class YB {
-       constructor(BB, OB) {
-         this._webGL = {
-           load: BB,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
- ... (4 more removed lines; see GitHub link above)
+       static First(WW, iW) {
+         for (const OW of WW)
+           if (iW(OW)) return OW;
+         return null
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2709-L2712` → after: `L540-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L540-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L540-L550) · [Before (L2709-L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L2709-L2712)

```diff
-       getLoadCallback(BB) {
-         const OB = 1 === BB ? this._webGPU : this._webGL;
-         return OB.loaded ? void 0 : async () => {
-           await this._loadAsync(OB)
+       static getFullClassName(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           OW = null,
+           mW = null;
+         if (!iW && WW.getClassName) OW = WW.getClassName();
+         else {
+           if (WW instanceof Object) {
+             const EW = iW ? WW : Object.getPrototypeOf(WW);
+             OW = EW.constructor.__bjsclassName__, mW = EW.constructor.__bjsmoduleName__
+           }
+           OW || (OW = typeof WW)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2715-L2725` → after: `L554-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L554-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L554-L559) · [Before (L2715-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L2715-L2725)

```diff
-       async _loadAsync(BB) {
-         if (BB.loaded) return;
-         let OB = BB.loadPromise;
-         const GB = null === OB;
-         GB && (OB = Promise.all(BB.load()), BB.loadPromise = OB);
-         let YB = !1;
-         try {
-           await OB, YB = !0
-         } finally {
-           GB && this._completeLoad(BB, YB)
-         }
+       static async DelayAsync(WW) {
+         await new Promise((iW => {
+           setTimeout((() => {
+             iW()
+           }), WW)
+         }))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L2727-L2728` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/290.js#L561-L562) · [Before (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/290.js#L2727-L2728)

```diff
-       _completeLoad(BB, OB) {
-         BB.loaded = OB, BB.loadPromise = null
+       static IsSafari() {
+         return !!(0, NW.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (175 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L4)

```diff
-   41294: (BB, OB, GB) => {
+   41940: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L6)

```diff
-       c: () => YB
+       b: () => mW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L8-L12` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L8) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L8-L12)

```diff
-     class YB {
-       constructor(BB, OB, GB) {
-         this.bu = BB, this.bv = OB, this.distance = GB, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
+     let mW = !1
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L14` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L10) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L14)

```diff
-   41307: (BB, OB, GB) => {
+   41511: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L18-L20` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L14-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L18-L20)

```diff
-     var YB = GB(37785),
-       DB = GB(37778),
-       QB = GB(37782);
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38276),
+       PW = OW(38241),
+       LW = OW(38270),
+       cW = OW(39088),
+       wW = OW(41531);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L22-L44` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L22-L23) · [Before (L22-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L22-L44)

```diff
-       constructor(BB, OB, GB) {
-         this.vectors = (0, YB.e)(8, DB.r.Zero), this.center = DB.r.Zero(), this.centerWorld = DB.r.Zero(), this.extendSize = DB.r.Zero(), this.extendSizeWorld = DB.r.Zero(), this.directions = (0, YB.e)(3, DB.r.Zero), this.vectorsWorld = (0, YB.e)(8, DB.r.Zero), this.minimumWorld  … [truncated]
-       }
-       reConstruct(BB, OB, GB) {
-         const YB = BB.x,
-           QB = BB.y,
-           oB = BB.z,
-           jB = OB.x,
-           yB = OB.y,
-           JB = OB.z,
-           MB = this.vectors;
-         this.minimum.zOB(YB, QB, oB), this.maximum.zOB(jB, yB, JB), MB[0].zOB(YB, QB, oB), MB[1].zOB(jB, yB, JB), MB[2].zOB(jB, QB, oB), MB[3].zOB(YB, yB, oB), MB[4].zOB(YB, QB, JB), MB[5].zOB(jB, yB, oB), MB[6].zOB(YB, yB, JB), MB[7].zOB(jB, QB, JB), OB.addToRef(BB, this.center) … [truncated]
-       }
-       scale(BB) {
-         const OB = oB._TmpVector3,
-           GB = this.maximum.subtractToRef(this.minimum, OB[0]),
- ... (7 more removed lines; see GitHub link above)
+       get wrapU() {
+         return this._wrapU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L46-L47` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L25-L26) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L46-L47)

```diff
-       getWorldMatrix() {
-         return this._worldMatrix
+       set wrapU(WW) {
+         this._wrapU = WW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L49-L70` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L28-L29) · [Before (L49-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L49-L70)

```diff
-       _update(BB) {
-         const OB = this.minimumWorld,
-           GB = this.maximumWorld,
-           YB = this.directions,
-           QB = this.vectorsWorld,
-           oB = this.vectors;
-         if (BB.isIdentity()) {
-           OB.IU(this.minimum), GB.IU(this.maximum);
-           for (let BB = 0; BB < 8; ++BB) QB[BB].IU(oB[BB]);
-           this.extendSizeWorld.IU(this.extendSize), this.centerWorld.IU(this.center)
-         } else {
-           OB.uBB(Number.MAX_VALUE), GB.uBB(-Number.MAX_VALUE);
-           for (let YB = 0; YB < 8; ++YB) {
-             const jB = QB[YB];
-             DB.r.TransformCoordinatesToRef(oB[YB], BB, jB), OB.minimizeInPlace(jB), GB.maximizeInPlace(jB)
-           }
- ... (6 more removed lines; see GitHub link above)
+       get wrapV() {
+         return this._wrapV
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L72-L73` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L31-L32) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L72-L73)

```diff
-       isCompletelyInFrustum(BB) {
-         return oB.IsCompletelyInFrustum(this.vectorsWorld, BB)
+       set wrapV(WW) {
+         this._wrapV = WW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L75-L88` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L34-L35) · [Before (L75-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L75-L88)

```diff
-       intersectsPoint(BB) {
-         const OB = this.minimumWorld,
-           GB = this.maximumWorld,
-           YB = OB.x,
-           DB = OB.y,
-           oB = OB.z,
-           jB = GB.x,
-           yB = GB.y,
-           JB = GB.z,
-           MB = BB.x,
-           PB = BB.y,
-           zB = BB.z,
-           lB = -QB.b;
-         return !(jB - MB < lB || lB > MB - YB) && (!(yB - PB < lB || lB > PB - DB) && !(JB - zB < lB || lB > zB - oB))
+       get coordinatesMode() {
+         return 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L90-L91` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L37-L38) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L90-L91)

```diff
-       intersectsSphere(BB) {
-         return oB.IntersectsSphere(this.minimumWorld, this.maximumWorld, BB.centerWorld, BB.radiusWorld)
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L93-L108` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L40-L41) · [Before (L93-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L93-L108)

```diff
-       intersectsMinMax(BB, OB) {
-         const GB = this.minimumWorld,
-           YB = this.maximumWorld,
-           DB = GB.x,
-           QB = GB.y,
-           oB = GB.z,
-           jB = YB.x,
-           yB = YB.y,
-           JB = YB.z,
-           MB = BB.x,
-           PB = BB.y,
-           zB = BB.z,
-           lB = OB.x,
-           pB = OB.y,
-           qB = OB.z;
-         return !(jB < MB || DB > lB) && (!(yB < PB || QB > pB) && !(JB < zB || oB > qB))
+       set isCube(WW) {
+         this._texture && (this._texture.isCube = WW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L110-L111` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L43-L44) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L110-L111)

```diff
-       dispose() {
-         this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L113-L114` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L46-L47) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L113-L114)

```diff
-       static Intersects(BB, OB) {
-         return BB.intersectsMinMax(OB.minimumWorld, OB.maximumWorld)
+       set is3D(WW) {
+         this._texture && (this._texture.is3D = WW)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L116-L119` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L49-L50) · [Before (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L116-L119)

```diff
-       static IntersectsSphere(BB, OB, GB, YB) {
-         const QB = oB._TmpVector3[0];
-         DB.r.ClampToRef(GB, BB, OB, QB);
-         return DB.r.DistanceSquared(GB, QB) <= YB * YB
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L121-L127` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L52-L53) · [Before (L121-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L121-L127)

```diff
-       static IsCompletelyInFrustum(BB, OB) {
-         for (let GB = 0; GB < 6; ++GB) {
-           const YB = OB[GB];
-           for (let OB = 0; OB < 8; ++OB)
-             if (YB.dotCoordinate(BB[OB]) < 0) return !1
-         }
-         return !0
+       set is2DArray(WW) {
+         this._texture && (this._texture.is2DArray = WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L129-L139` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L55-L56) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L129-L139)

```diff
-       static IsInFrustum(BB, OB) {
-         for (let GB = 0; GB < 6; ++GB) {
-           let YB = !0;
-           const DB = OB[GB];
-           for (let OB = 0; OB < 8; ++OB)
-             if (DB.dotCoordinate(BB[OB]) >= 0) {
-               YB = !1;
-               break
-             } if (YB) return !1
-         }
-         return !0
+       getClassName() {
+         return "ThinTexture"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L141-L153` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L58-L59) · [Before (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L141-L153)

```diff
-     }
-     oB._TmpVector3 = (0, YB.e)(3, DB.r.Zero)
-   },
-   41300: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => PB
-     });
-     var YB = GB(37785),
-       DB = GB(37778),
-       QB = GB(41307);
-     class oB {
-       constructor(BB, OB, GB) {
-         this.center = DB.r.Zero(), this.centerWorld = DB.r.Zero(), this.minimum = DB.r.Zero(), this.maximum = DB.r.Zero(), this.reConstruct(BB, OB, GB)
+       static _IsRenderTargetWrapper(WW) {
+         return void 0 !== WW?.shareDepth
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L155-L158` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L61-L62) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L155-L158)

```diff
-       reConstruct(BB, OB, GB) {
-         this.minimum.IU(BB), this.maximum.IU(OB);
-         const YB = DB.r.Distance(BB, OB);
-         OB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * YB, this._update(GB || DB.d.IdentityReadOnly)
+       constructor(WW) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = wW.d.Zero(), this._cachedBaseSize = wW.d.Zero(), this._initialSamplingMode = 2, this._texture = tW. … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L160-L169` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L64-L65) · [Before (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L160-L169)

```diff
-       scale(BB) {
-         const OB = oB._TmpVector3,
-           GB = this.maximum.subtractToRef(this.minimum, OB[0]),
-           YB = GB.length();
-         GB.normalizeFromLength(YB);
-         const DB = YB * BB,
-           QB = GB.scaleInPlace(.5 * DB),
-           jB = this.center.subtractToRef(QB, OB[1]),
-           yB = this.center.addToRef(QB, OB[2]);
-         return this.reConstruct(jB, yB, this._worldMatrix), this
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L171-L172` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L67-L69) · [Before (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L171-L172)

```diff
-       getWorldMatrix() {
-         return this._worldMatrix
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L174-L179` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L71-L74) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L174-L179)

```diff
-       _update(BB) {
-         if (BB.isIdentity()) this.centerWorld.IU(this.center), this.radiusWorld = this.radius;
-         else {
-           DB.r.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
-           const OB = oB._TmpVector3[0];
-           DB.r.TransformNormalFromFloatsToRef(1, 1, 1, BB, OB), this.radiusWorld = Math.max(Math.abs(OB.x), Math.abs(OB.y), Math.abs(OB.z)) * this.radius
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L182-L352` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L78-L79) · [Before (L182-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L182-L352)

```diff
-       isInFrustum(BB) {
-         const OB = this.centerWorld,
-           GB = this.radiusWorld;
-         for (let YB = 0; YB < 6; YB++)
-           if (BB[YB].dotCoordinate(OB) <= -GB) return !1;
-         return !0
-       }
-       isCenterInFrustum(BB) {
-         const OB = this.centerWorld;
-         for (let GB = 0; GB < 6; GB++)
-           if (BB[GB].dotCoordinate(OB) < 0) return !1;
-         return !0
-       }
-       intersectsPoint(BB) {
-         const OB = DB.r.DistanceSquared(this.centerWorld, BB);
-         return !(this.radiusWorld * this.radiusWorld < OB)
- ... (155 more removed lines; see GitHub link above)
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L354-L355` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L81-L82) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L354-L355)

```diff
-       addFallback(BB, OB) {
-         this._defines[BB] || (BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB), this._defines[BB] = new Array), this._defines[BB].push(OB)
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L357-L358` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L84-L86) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L357-L358)

```diff
-       addCPUSkinningFallback(BB, OB) {
-         this._mesh = OB, BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB)
+       updateSamplingMode(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(WW, this._texture, this._texture.generateMipMaps && iW)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L360-L361` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L88-L89) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L360-L361)

```diff
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L363-L387` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L91-L92) · [Before (L363-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L363-L387)

```diff
-       reduce(BB, OB) {
-         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
-           this._mesh.computeBonesUsingShaders = !1, BB = BB.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), OB._bonesComputationForcedToCPU = !0;
-           const GB = this._mesh.JF();
-           for (let BB = 0; BB < GB.meshes.length; BB++) {
-             const YB = GB.meshes[BB];
-             if (YB.material) {
-               if (YB.computeBonesUsingShaders && 0 !== YB.numBoneInfluencers)
-                 if (YB.material.getEffect() === OB) YB.computeBonesUsingShaders = !1;
-                 else if (YB.iW)
-                 for (const BB of YB.iW) {
-                   if (BB.effect === OB) {
-                     YB.computeBonesUsingShaders = !1;
-                     break
-                   }
-                 }
- ... (9 more removed lines; see GitHub link above)
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L390-L405` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L95-L96) · [Before (L390-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L390-L405)

```diff
-   },
-   41283: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => RB
-     });
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(41097),
-       oB = GB(37802),
-       jB = GB(37796),
-       yB = GB(41287),
-       JB = GB(41136),
-       MB = GB(39366),
-       PB = GB(38432),
-       zB = GB(41323),
-       lB = GB(41022);
+     var ZW, xW = OW(41538),
+       lW = OW(41415);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L408-L411` → after: `L99-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L99-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L99-L139) · [Before (L408-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L408-L411)

```diff
-       let OB, GB, QB, oB, jB, yB, JB, MB, PB, zB, pB, qB, ZB = [];
-       return BB = class {
-         constructor() {
-           this._func = (0, YB.j)(this, ZB), this.reset()
+       let iW, OW, wW, ZW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW = tW,
+         gW = [],
+         DW = [],
+         VW = [],
+         pW = [],
+         fW = [],
+         CW = [],
+         XW = [],
+         BW = [],
+         qW = [],
+         RW = [],
+         GW = [],
+         IW = [],
+         aW = [],
+         rW = [],
+         zW = [],
+ ... (25 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L413-L414` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L141-L142) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L413-L414)

```diff
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L416-L417` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L144-L145) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L416-L417)

```diff
-         get func() {
-           return this._func
+         set coordinatesIndex(WW) {
+           this._coordinatesIndex !== WW && (this._coordinatesIndex = WW, this._scene && this._scene.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L419-L420` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L147-L148) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L419-L420)

```diff
-         set func(BB) {
-           this._func = BB
+         get coordinatesIndex() {
+           return this._coordinatesIndex
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L422-L423` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L150-L151) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L422-L423)

```diff
-         get backFunc() {
-           return this._backFunc
+         set coordinatesMode(WW) {
+           this._coordinatesMode !== WW && (this._coordinatesMode = WW, this._scene && this._scene.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L425-L426` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L153-L154) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L425-L426)

```diff
-         set backFunc(BB) {
-           this._backFunc = BB
+         get coordinatesMode() {
+           return this._coordinatesMode
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L428-L429` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L156-L157) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L428-L429)

```diff
-         get funcRef() {
-           return this._funcRef
+         get wrapU() {
+           return this._wrapU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L431-L432` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L159-L160) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L431-L432)

```diff
-         set funcRef(BB) {
-           this._funcRef = BB
+         set wrapU(WW) {
+           this._wrapU = WW
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L434-L435` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L162-L163) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L434-L435)

```diff
-         get funcMask() {
-           return this._funcMask
+         get wrapV() {
+           return this._wrapV
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L437-L438` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L165-L166) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L437-L438)

```diff
-         set funcMask(BB) {
-           this._funcMask = BB
+         set wrapV(WW) {
+           this._wrapV = WW
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L440-L441` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L168-L169) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L440-L441)

```diff
-         get opStencilFail() {
-           return this._opStencilFail
+         get isCube() {
+           return this._texture ? this._texture.isCube : this._isCube
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L443-L444` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L171-L172) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L443-L444)

```diff
-         set opStencilFail(BB) {
-           this._opStencilFail = BB
+         set isCube(WW) {
+           this._texture ? this._texture.isCube = WW : this._isCube = WW
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L446-L447` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L174-L175) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L446-L447)

```diff
-         get opDepthFail() {
-           return this._opDepthFail
+         get is3D() {
+           return !!this._texture && this._texture.is3D
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L449-L450` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L177-L178) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L449-L450)

```diff
-         set opDepthFail(BB) {
-           this._opDepthFail = BB
+         set is3D(WW) {
+           this._texture && (this._texture.is3D = WW)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L452-L453` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L180-L181) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L452-L453)

```diff
-         get opStencilDepthPass() {
-           return this._opStencilDepthPass
+         get is2DArray() {
+           return !!this._texture && this._texture.is2DArray
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L455-L456` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L183-L184) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L455-L456)

```diff
-         set opStencilDepthPass(BB) {
-           this._opStencilDepthPass = BB
+         set is2DArray(WW) {
+           this._texture && (this._texture.is2DArray = WW)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L458-L459` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L186-L187) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L458-L459)

```diff
-         get backOpStencilFail() {
-           return this._backOpStencilFail
+         get gammaSpace() {
+           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L461-L462` → after: `L189-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L189-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L189-L209) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L461-L462)

```diff
-         set backOpStencilFail(BB) {
-           this._backOpStencilFail = BB
+         set gammaSpace(WW) {
+           if (this._texture) {
+             if (this._texture._gammaSpace === WW) return;
+             this._texture._gammaSpace = WW
+           } else {
+             if (this._gammaSpace === WW) return;
+             this._gammaSpace = WW
+           }
+           this.bD()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this)))
+         }
+         get isRGBD() {
+           return null != this._texture && this._texture._isRGBD
+         }
+         set isRGBD(WW) {
+           WW !== this.isRGBD && (this._texture && (this._texture._isRGBD = WW), this.bD()?.markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this))))
+         }
+ ... (5 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L464-L465` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L211-L212) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L464-L465)

```diff
-         get backOpDepthFail() {
-           return this._backOpDepthFail
+         set lodGenerationOffset(WW) {
+           this._texture && (this._texture._lodGenerationOffset = WW)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L467-L468` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L214-L215) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L467-L468)

```diff
-         set backOpDepthFail(BB) {
-           this._backOpDepthFail = BB
+         get lodGenerationScale() {
+           return this._texture ? this._texture._lodGenerationScale : 0
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L470-L471` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L217-L218) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L470-L471)

```diff
-         get backOpStencilDepthPass() {
-           return this._backOpStencilDepthPass
+         set lodGenerationScale(WW) {
+           this._texture && (this._texture._lodGenerationScale = WW)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L473-L474` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L220-L221) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L473-L474)

```diff
-         set backOpStencilDepthPass(BB) {
-           this._backOpStencilDepthPass = BB
+         get linearSpecularLOD() {
+           return !!this._texture && this._texture._linearSpecularLOD
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L476-L477` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L223-L224) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L476-L477)

```diff
-         get mask() {
-           return this._mask
+         set linearSpecularLOD(WW) {
+           this._texture && (this._texture._linearSpecularLOD = WW)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L479-L480` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L226-L227) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L479-L480)

```diff
-         set mask(BB) {
-           this._mask = BB
+         get irradianceTexture() {
+           return this._texture ? this._texture._irradianceTexture : null
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L482-L483` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L229-L230) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L482-L483)

```diff
-         get enabled() {
-           return this._enabled
+         set irradianceTexture(WW) {
+           this._texture && (this._texture._irradianceTexture = WW)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L485-L486` → after: `L232-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L232-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L232-L236) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L485-L486)

```diff
-         set enabled(BB) {
-           this._enabled = BB
+         get uid() {
+           return this._uid || (this._uid = (0, cW.b)()), this._uid
+         }
+         toString() {
+           return this.name
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L489` → after: `L239-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L239-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L239-L295) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L489)

```diff
-           return "MaterialStencilState"
+           return "BaseTexture"
+         }
+         set onDispose(WW) {
+           this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
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
+         constructor(iW) {
+           let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (41 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L491-L492` → after: `L297-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L297-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L297-L364) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L491-L492)

```diff
-         copyTo(BB) {
-           lB.d.Clone((() => BB), this)
+         get textureFormat() {
+           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
+         }
+         _markAllSubMeshesAsTexturesDirty() {
+           const WW = this.bD();
+           WW && WW.markAllMaterialsAsDirty(1)
+         }
+         readPixels() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+             OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+             mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+             EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+             NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
+             PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
+             LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
+ ... (52 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L495` → after: `L367-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L367-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L367-L384) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L495)

```diff
-           return lB.d.Serialize(this)
+           let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !WW) return null;
+           const iW = xW.d.Serialize(this);
+           return xW.d.AppendSerializedAnimations(this, iW), iW
+         }
+         static WhenAllReady(WW, iW) {
+           let OW = WW.length;
+           if (0 !== OW)
+             for (let mW = 0; mW < WW.length; mW++) {
+               const EW = WW[mW];
+               if (EW.isReady()) 0 === --OW && iW();
+               else {
+                 const WW = EW.onLoadObservable;
+                 WW ? WW.addOnce((() => {
+                   0 === --OW && iW()
+                 })) : 0 === --OW && iW()
+ ... (2 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L497-L498` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L386-L387) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L497-L498)

```diff
-         parse(BB, OB, GB) {
-           lB.d.Parse((() => this), BB, OB, GB)
+         static _IsScene(WW) {
+           return "Scene" === WW.getClassName()
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L501-L502` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L390-L391) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L501-L502)

```diff
-         const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], (0, YB.h)(BB, null, OB, {
+         const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(vW[Symbol.metadata] ?? null) : void 0;
+         iW = [(0, EW.M)()], OW = [(0, EW.M)()], wW = [(0, EW.M)()], ZW = [(0, EW.M)()], lW = [(0, EW.M)("hasAlpha")], AW = [(0, EW.M)("getAlphaFromRGB")], bW = [(0, EW.M)()], jW = [(0, EW.M)("coordinatesIndex")], UW = [(0, EW.M)()], kW = [(0, EW.M)("coordinatesMode")], sW = [(0,  … [truncated]
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L504` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L393) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L504)

```diff
-           name: "func",
+           name: "wrapU",
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L508-L509` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L397-L398) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L508-L509)

```diff
-             has: BB => "func" in BB,
-             get: BB => BB.func
+             has: WW => "wrapU" in WW,
+             get: WW => WW.wrapU
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L512` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L401) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L512)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, GB, {
+         }, null, gW), (0, mW.e)(WW, null, MW, {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L514` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L403) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L514)

```diff
-           name: "backFunc",
+           name: "wrapV",
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L518-L519` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L407-L408) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L518-L519)

```diff
-             has: BB => "backFunc" in BB,
-             get: BB => BB.backFunc
+             has: WW => "wrapV" in WW,
+             get: WW => WW.wrapV
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L522` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L411) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L522)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, QB, {
+         }, null, gW), (0, mW.e)(WW, null, YW, {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L524` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L413) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L524)

```diff
-           name: "funcRef",
+           name: "isCube",
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L528-L529` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L417-L418) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L528-L529)

```diff
-             has: BB => "funcRef" in BB,
-             get: BB => BB.funcRef
+             has: WW => "isCube" in WW,
+             get: WW => WW.isCube
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L532` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L421) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L532)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, oB, {
+         }, null, gW), (0, mW.e)(WW, null, yW, {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L534` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L423) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L534)

```diff
-           name: "funcMask",
+           name: "is3D",
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L538-L539` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L427-L428) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L538-L539)

```diff
-             has: BB => "funcMask" in BB,
-             get: BB => BB.funcMask
+             has: WW => "is3D" in WW,
+             get: WW => WW.is3D
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L542` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L431) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L542)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, jB, {
+         }, null, gW), (0, mW.e)(WW, null, TW, {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L544` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L433) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L544)

```diff
-           name: "opStencilFail",
+           name: "is2DArray",
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L548-L549` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L437-L438) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L548-L549)

```diff
-             has: BB => "opStencilFail" in BB,
-             get: BB => BB.opStencilFail
+             has: WW => "is2DArray" in WW,
+             get: WW => WW.is2DArray
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L552` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L441) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L552)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, yB, {
+         }, null, gW), (0, mW.e)(WW, null, JW, {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L554` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L443) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L554)

```diff
-           name: "opDepthFail",
+           name: "gammaSpace",
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L558-L559` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L447-L448) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L558-L559)

```diff
-             has: BB => "opDepthFail" in BB,
-             get: BB => BB.opDepthFail
+             has: WW => "gammaSpace" in WW,
+             get: WW => WW.gammaSpace
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L562` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L451) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L562)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, JB, {
+         }, null, gW), (0, mW.e)(WW, null, nW, {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L564` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L453) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L564)

```diff
-           name: "opStencilDepthPass",
+           name: "lodGenerationOffset",
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L568-L569` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L457-L458) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L568-L569)

```diff
-             has: BB => "opStencilDepthPass" in BB,
-             get: BB => BB.opStencilDepthPass
+             has: WW => "lodGenerationOffset" in WW,
+             get: WW => WW.lodGenerationOffset
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L572` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L461) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L572)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, MB, {
+         }, null, gW), (0, mW.e)(WW, null, uW, {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L574` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L463) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L574)

```diff
-           name: "backOpStencilFail",
+           name: "lodGenerationScale",
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L578-L579` → after: `L467-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L467-L468) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L578-L579)

```diff
-             has: BB => "backOpStencilFail" in BB,
-             get: BB => BB.backOpStencilFail
+             has: WW => "lodGenerationScale" in WW,
+             get: WW => WW.lodGenerationScale
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L582` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L471) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L582)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, PB, {
+         }, null, gW), (0, mW.e)(WW, null, oW, {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L584` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L473) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L584)

```diff
-           name: "backOpDepthFail",
+           name: "linearSpecularLOD",
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L588-L589` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L477-L478) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L588-L589)

```diff
-             has: BB => "backOpDepthFail" in BB,
-             get: BB => BB.backOpDepthFail
+             has: WW => "linearSpecularLOD" in WW,
+             get: WW => WW.linearSpecularLOD
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L592` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L481) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L592)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, zB, {
+         }, null, gW), (0, mW.e)(WW, null, dW, {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L594` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L483) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L594)

```diff
-           name: "backOpStencilDepthPass",
+           name: "irradianceTexture",
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L598-L599` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L487-L488) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L598-L599)

```diff
-             has: BB => "backOpStencilDepthPass" in BB,
-             get: BB => BB.backOpStencilDepthPass
+             has: WW => "irradianceTexture" in WW,
+             get: WW => WW.irradianceTexture
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L602-L604` → after: `L491-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L491-L493) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L602-L604)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, pB, {
-           kind: "getter",
-           name: "mask",
+         }, null, gW), (0, mW.e)(null, null, iW, {
+           kind: "field",
+           name: "uniqueId",
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L608-L609` → after: `L497-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L497-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L497-L501) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L608-L609)

```diff
-             has: BB => "mask" in BB,
-             get: BB => BB.mask
+             has: WW => "uniqueId" in WW,
+             get: WW => WW.uniqueId,
+             set: (WW, iW) => {
+               WW.uniqueId = iW
+             }
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L612-L614` → after: `L504-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L504-L506) · [Before (L612-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L612-L614)

```diff
-         }, null, ZB), (0, YB.h)(BB, null, qB, {
-           kind: "getter",
-           name: "enabled",
+         }, DW, VW), (0, mW.e)(null, null, OW, {
+           kind: "field",
+           name: "name",
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L618-L619` → after: `L510-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L510-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L510-L514) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L618-L619)

```diff
-             has: BB => "enabled" in BB,
-             get: BB => BB.enabled
+             has: WW => "name" in WW,
+             get: WW => WW.name,
+             set: (WW, iW) => {
+               WW.name = iW
+             }
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L622-L1244` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L517) · [Before (L622-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L622-L1244)

```diff
-         }, null, ZB), lB && Object.defineProperty(BB, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: lB
-         })
-       })(), BB
-     })();
-     var qB = GB(41325),
-       ZB = GB(40918),
-       NB = GB(40890);
-     let RB = (() => {
-       var BB;
-       let OB, GB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, TB = [],
-         bB = [],
-         CB = [],
- ... (607 more removed lines; see GitHub link above)
+         }, pW, fW), (0, mW.e)(null, null, wW, {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1246` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L519) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1246)

```diff
-           name: "name",
+           name: "displayName",
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1250-L1251` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L523-L524) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1250-L1251)

```diff
-             has: BB => "name" in BB,
-             get: BB => BB.name,
+             has: WW => "displayName" in WW,
+             get: WW => WW.displayName,
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1253` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L526) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1253)

```diff
-               BB.name = OB
+               WW.displayName = iW
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1257` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L530) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1257)

```diff
-         }, sB, xB), (0, YB.h)(null, null, RB, {
+         }, CW, XW), (0, mW.e)(null, null, ZW, {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1270-L1400` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L543) · [Before (L1270-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1270-L1400)

```diff
-         }, tB, BO), (0, YB.h)(null, null, WB, {
-           kind: "field",
-           name: "checkReadyOnEveryCall",
-           static: !1,
-           private: !1,
-           access: {
-             has: BB => "checkReadyOnEveryCall" in BB,
-             get: BB => BB.checkReadyOnEveryCall,
-             set: (BB, OB) => {
-               BB.checkReadyOnEveryCall = OB
-             }
-           },
-           metadata: QB
-         }, OO, GO), (0, YB.h)(null, null, AB, {
-           kind: "field",
-           name: "checkReadyOnlyOnce",
- ... (115 more removed lines; see GitHub link above)
+         }, BW, qW), (0, mW.e)(null, null, lW, {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1402` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L545) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1402)

```diff
-           name: "_needDepthPrePass",
+           name: "_hasAlpha",
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1406-L1407` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L549-L550) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1406-L1407)

```diff
-             has: BB => "_needDepthPrePass" in BB,
-             get: BB => BB._needDepthPrePass,
+             has: WW => "_hasAlpha" in WW,
+             get: WW => WW._hasAlpha,
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1409` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L552) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1409)

```diff
-               BB._needDepthPrePass = OB
+               WW._hasAlpha = iW
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1413` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L556) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1413)

```diff
-         }, VO, SO), (0, YB.h)(null, null, mB, {
+         }, RW, GW), (0, mW.e)(null, null, AW, {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1415` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L558) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1415)

```diff
-           name: "disableDepthWrite",
+           name: "_getAlphaFromRGB",
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1419-L1420` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L562-L563) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1419-L1420)

```diff
-             has: BB => "disableDepthWrite" in BB,
-             get: BB => BB.disableDepthWrite,
+             has: WW => "_getAlphaFromRGB" in WW,
+             get: WW => WW._getAlphaFromRGB,
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1422` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L565) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1422)

```diff
-               BB.disableDepthWrite = OB
+               WW._getAlphaFromRGB = iW
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1426` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L569) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1426)

```diff
-         }, nO, UO), (0, YB.h)(null, null, IB, {
+         }, IW, aW), (0, mW.e)(null, null, bW, {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1428` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L571) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1428)

```diff
-           name: "disableColorWrite",
+           name: "level",
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1432-L1433` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L575-L576) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1432-L1433)

```diff
-             has: BB => "disableColorWrite" in BB,
-             get: BB => BB.disableColorWrite,
+             has: WW => "level" in WW,
+             get: WW => WW.level,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1435` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L578) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1435)

```diff
-               BB.disableColorWrite = OB
+               WW.level = iW
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1439` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L582) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1439)

```diff
-         }, fO, kO), (0, YB.h)(null, null, FB, {
+         }, rW, zW), (0, mW.e)(null, null, jW, {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1441` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L584) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1441)

```diff
-           name: "forceDepthWrite",
+           name: "_coordinatesIndex",
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1445-L1446` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L588-L589) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1445-L1446)

```diff
-             has: BB => "forceDepthWrite" in BB,
-             get: BB => BB.forceDepthWrite,
+             has: WW => "_coordinatesIndex" in WW,
+             get: WW => WW._coordinatesIndex,
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1448` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L591) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1448)

```diff
-               BB.forceDepthWrite = OB
+               WW._coordinatesIndex = iW
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1452` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L595) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1452)

```diff
-         }, dO, KO), (0, YB.h)(null, null, iB, {
+         }, FW, QW), (0, mW.e)(null, null, UW, {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1454` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L597) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1454)

```diff
-           name: "depthFunction",
+           name: "optimizeUVAllocation",
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1458-L1459` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L601-L602) · [Before (L1458-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1458-L1459)

```diff
-             has: BB => "depthFunction" in BB,
-             get: BB => BB.depthFunction,
+             has: WW => "optimizeUVAllocation" in WW,
+             get: WW => WW.optimizeUVAllocation,
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1461` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L604) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1461)

```diff
-               BB.depthFunction = OB
+               WW.optimizeUVAllocation = iW
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1465` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L608) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1465)

```diff
-         }, uO, mO), (0, YB.h)(null, null, LB, {
+         }, Wi, ii), (0, mW.e)(null, null, kW, {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1467` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L610) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1467)

```diff
-           name: "separateCullingPass",
+           name: "_coordinatesMode",
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1471-L1472` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L614-L615) · [Before (L1471-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1471-L1472)

```diff
-             has: BB => "separateCullingPass" in BB,
-             get: BB => BB.separateCullingPass,
+             has: WW => "_coordinatesMode" in WW,
+             get: WW => WW._coordinatesMode,
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1474` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L617) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1474)

```diff
-               BB.separateCullingPass = OB
+               WW._coordinatesMode = iW
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1478` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L621) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1478)

```diff
-         }, IO, FO), (0, YB.h)(null, null, gB, {
+         }, Oi, mi), (0, mW.e)(null, null, KW, {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1480` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L623) · [Before (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1480)

```diff
-           name: "_fogEnabled",
+           name: "wrapR",
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1484-L1485` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L627-L628) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1484-L1485)

```diff
-             has: BB => "_fogEnabled" in BB,
-             get: BB => BB._fogEnabled,
+             has: WW => "wrapR" in WW,
+             get: WW => WW.wrapR,
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1487` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L630) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1487)

```diff
-               BB._fogEnabled = OB
+               WW.wrapR = iW
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1491` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L634) · [Before (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1491)

```diff
-         }, iO, LO), (0, YB.h)(null, null, rB, {
+         }, Ei, Ni), (0, mW.e)(null, null, SW, {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1493` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L636) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1493)

```diff
-           name: "pointSize",
+           name: "anisotropicFilteringLevel",
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1497-L1498` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L640-L641) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1497-L1498)

```diff
-             has: BB => "pointSize" in BB,
-             get: BB => BB.pointSize,
+             has: WW => "anisotropicFilteringLevel" in WW,
+             get: WW => WW.anisotropicFilteringLevel,
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1500` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L643) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1500)

```diff
-               BB.pointSize = OB
+               WW.anisotropicFilteringLevel = iW
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1504` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L647) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1504)

```diff
-         }, gO, rO), (0, YB.h)(null, null, XB, {
+         }, Pi, Li), (0, mW.e)(null, null, hW, {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1506` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L649) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1506)

```diff
-           name: "zOffset",
+           name: "invertZ",
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1510-L1511` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L653-L654) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1510-L1511)

```diff
-             has: BB => "zOffset" in BB,
-             get: BB => BB.zOffset,
+             has: WW => "invertZ" in WW,
+             get: WW => WW.invertZ,
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1513` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L656) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1513)

```diff
-               BB.zOffset = OB
+               WW.invertZ = iW
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1517` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L660) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1517)

```diff
-         }, XO, wO), (0, YB.h)(null, null, wB, {
+         }, ci, wi), (0, mW.e)(null, null, HW, {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1519` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L662) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1519)

```diff
-           name: "zOffsetUnits",
+           name: "lodLevelInAlpha",
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1523-L1524` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L666-L667) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1523-L1524)

```diff
-             has: BB => "zOffsetUnits" in BB,
-             get: BB => BB.zOffsetUnits,
+             has: WW => "lodLevelInAlpha" in WW,
+             get: WW => WW.lodLevelInAlpha,
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1526` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L669) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1526)

```diff
-               BB.zOffsetUnits = OB
+               WW.lodLevelInAlpha = iW
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1530` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L673) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1530)

```diff
-         }, EO, cO), (0, YB.h)(null, null, aB, {
+         }, ti, Zi), (0, mW.e)(null, null, eW, {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1532` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L675) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1532)

```diff
-           name: "_isVertexOutputInvariant",
+           name: "isRenderTarget",
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1536-L1537` → after: `L679-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L679-L680) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1536-L1537)

```diff
-             has: BB => "_isVertexOutputInvariant" in BB,
-             get: BB => BB._isVertexOutputInvariant,
+             has: WW => "isRenderTarget" in WW,
+             get: WW => WW.isRenderTarget,
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1539` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L682) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1539)

```diff
-               BB._isVertexOutputInvariant = OB
+               WW.isRenderTarget = iW
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1549-L1555` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L692) · [Before (L1549-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1549-L1555)

```diff
-       })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB … [truncated]
-         BB._FresnelDirtyCallBack(OB), BB._MiscDirtyCallBack(OB)
-       }, BB._TextureAndMiscDirtyCallBack = OB => {
-         BB._TextureDirtyCallBack(OB), BB._MiscDirtyCallBack(OB)
-       }, BB._DirtyCallbackArray = [], BB._RunDirtyCallBacks = OB => {
-         for (const GB of BB._DirtyCallbackArray) GB(OB)
-       }, BB
+       })(), WW.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, WW
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1557` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L694) · [Before (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1557)

```diff
-     Object.getOwnPropertyDescriptor(RB.prototype, "pluginManager") || Object.defineProperty(RB.prototype, "pluginManager", (0, NB.e)("Material", "pluginManager"))
+     (ZW = AW.prototype).forceSphericalPolynomialsRecompute ?? (ZW.forceSphericalPolynomialsRecompute = (0, lW.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(AW.prototype, "sphericalPolynomial") || Object.defineProperty(AW.prototype, "sph … [truncated]
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1559` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L696) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1559)

```diff
-   41341: (BB, OB, GB) => {
+   41992: (WW, iW, OW) => {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1737-L1748` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L699) · [Before (L1737-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1737-L1748)

```diff
-       gb: () => aB,
-       i: () => SB,
-       jb: () => eB,
-       k: () => PB,
-       lb: () => HB,
-       mb: () => bB,
-       nb: () => CB,
-       o: () => NB,
-       q: () => RB,
-       rb: () => pB,
-       t: () => kB,
-       x: () => yB
+       h: () => sW
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1750-L1902` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L701-L711) · [Before (L1750-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1750-L1902)

```diff
-     var YB = GB(39366),
-       DB = GB(37796),
-       QB = GB(41211),
-       oB = GB(41333),
-       jB = GB(41341);
- 
-     function yB(BB, OB, GB) {
-       if (!BB || BB.LOGARITHMICDEPTH || BB.indexOf && BB.indexOf("LOGARITHMICDEPTH") >= 0) {
-         const BB = GB.activeCamera;
-         1 === BB.mode && YB.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), OB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
-       }
-     }
-     const JB = {
-         r: 0,
-         g: 0,
-         b: 0
- ... (137 more removed lines; see GitHub link above)
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38276),
+       PW = OW(38241),
+       LW = OW(41511),
+       cW = OW(38299),
+       wW = OW(41415),
+       tW = OW(41420),
+       ZW = OW(41626),
+       xW = OW(38939),
+       lW = OW(41574);
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1905-L1973` → after: `L714-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L714-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L714-L737) · [Before (L1905-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1905-L1973)

```diff
-       (OB.INSTANCES || OB.THIN_INSTANCES) && pB(BB, !!OB.PREPASS_VELOCITY), OB.INSTANCESCOLOR && BB.push("instanceColor")
-     }
- 
-     function uB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
-         YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         DB = 0;
-       for (let QB = 0; QB < GB && BB["LIGHT" + QB]; QB++) QB > 0 && (DB = YB + QB, OB.addFallback(DB, "LIGHT" + QB)), BB.SHADOWS || (BB["SHADOW" + QB] && OB.addFallback(YB, "SHADOW" + QB), BB["SHADOWPCF" + QB] && OB.addFallback(YB, "SHADOWPCF" + QB), BB["SHADOWPCSS" + QB] && OB.a … [truncated]
-       return DB
-     }
- 
-     function mB(BB, OB, GB, YB, DB, QB, oB) {
-       let jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         JB = arguments.length > 9 ? arguments[9] : void 0,
-         MB = arguments.length > 10 ? arguments[10] : void 0;
- ... (53 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const mW = iW.width,
+         EW = iW.height;
+       if (WW instanceof Float32Array) {
+         let iW = WW.byteLength / WW.BYTES_PER_ELEMENT;
+         const OW = new Uint8Array(iW);
+         for (; --iW >= 0;) {
+           let mW = WW[iW];
+           mW < 0 ? mW = 0 : mW > 1 && (mW = 1), OW[iW] = 255 * mW
+         }
+         WW = OW
+       }
+       const NW = document.createElement("canvas");
+       NW.width = mW, NW.height = EW;
+       const PW = NW.getContext("2d");
+       if (!PW) return null;
+ ... (8 more added lines; see GitHub link above)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1976-L2014` → after: `L740-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L740-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L740-L746) · [Before (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L1976-L2014)

```diff
-     function iB(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
-         QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       if (OB && jB.d.ReflectionTextureEnabled) {
-         if (!OB.isReadyOrNotBlocking()) return !1;
-         GB._needNormals = !0, GB.REFLECTION = !0, GB.GAMMAREFLECTION = OB.gammaSpace, GB.RGBDREFLECTION = OB.isRGBD, GB.LODINREFLECTIONALPHA = OB.lodLevelInAlpha, GB.LINEARSPECULARREFLECTION = OB.linearSpecularLOD, GB.USEIRRADIANCEMAP = !1, GB.LODBASEDMICROSFURACE = BB.Lp().getCa … [truncated]
-         const oB = BB.Lp();
-         switch (YB && DB > 0 ? (GB.NUM_SAMPLES = "" + DB, oB._features.needTypeSuffixInShaderConstants && (GB.NUM_SAMPLES = GB.NUM_SAMPLES + "u"), GB.REALTIME_FILTERING = !0, BB.iblCdfGenerator && (GB.IBL_CDF_FILTERING = !0)) : GB.REALTIME_FILTERING = !1, GB.INVERTCUBICMAP = 6 == … [truncated]
-           case 0:
-             GB.REFLECTIONMAP_EXPLICIT = !0;
-             break;
-           case 2:
-             GB.REFLECTIONMAP_PLANAR = !0;
-             break;
-           case 4:
- ... (23 more removed lines; see GitHub link above)
+     function bW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const mW = WW.getInternalTexture();
+       if (!mW) return null;
+       const EW = WW._readPixelsSync(iW, OW);
+       return EW ? AW(EW, WW.getSize(), mW.invertY) : null
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2016-L2035` → after: `L748-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L748-L754) · [Before (L2016-L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2016-L2035)

```diff
- 
-     function LB(BB, OB, GB, YB, DB, oB, jB) {
-       switch (jB.needNormals = !0, void 0 === DB["LIGHT" + YB] && (jB.needRebuild = !0), DB["LIGHT" + YB] = !0, DB["SPOTLIGHT" + YB] = !1, DB["HEMILIGHT" + YB] = !1, DB["POINTLIGHT" + YB] = !1, DB["DIRLIGHT" + YB] = !1, DB["AREALIGHT" + YB] = !1, DB["CLUSTLIGHT" + YB] = !1, GB.pr … [truncated]
-         case QB.c.FALLOFF_GLTF:
-           DB["LIGHT_FALLOFF_GLTF" + YB] = !0;
-           break;
-         case QB.c.FALLOFF_PHYSICAL:
-           DB["LIGHT_FALLOFF_PHYSICAL" + YB] = !0;
-           break;
-         case QB.c.FALLOFF_STANDARD:
-           DB["LIGHT_FALLOFF_STANDARD" + YB] = !0
-       }
-       if (oB && !GB.specular.equalsFloats(0, 0, 0) && (jB.specularEnabled = !0), DB["SHADOW" + YB] = !1, DB["SHADOWCSM" + YB] = !1, DB["SHADOWCSMDEBUG" + YB] = !1, DB["SHADOWCSMNUM_CASCADES" + YB] = !1, DB["SHADOWCSMUSESHADOWMAXZ" + YB] = !1, DB["SHADOWCSMNOBLEND" + YB] = !1, DB[ … [truncated]
-         const OB = GB.getShadowGenerator(BB.activeCamera) ?? GB.getShadowGenerator();
-         if (OB) {
-           const BB = OB.getShadowMap();
- ... (4 more removed lines; see GitHub link above)
+     async function jW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const mW = WW.getInternalTexture();
+       if (!mW) return null;
+       const EW = await WW.readPixels(iW, OW);
+       return EW ? AW(EW, WW.getSize(), mW.invertY) : null
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2037-L2048` → after: `L756-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L756-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L756-L789) · [Before (L2037-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2037-L2048)

```diff
- 
-     function gB(BB, OB, GB, YB, DB) {
-       let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         yB = function(BB, OB) {
-           let GB = !1;
-           if (BB.activeCamera) {
-             const YB = OB.CAMERA_ORTHOGRAPHIC ? 1 : 0,
-               DB = OB.CAMERA_PERSPECTIVE ? 1 : 0,
-               QB = 1 === BB.activeCamera.mode ? 1 : 0,
-               oB = 0 === BB.activeCamera.mode ? 1 : 0;
-             (YB ^ QB || DB ^ oB) && (OB.CAMERA_ORTHOGRAPHIC = 1 === QB, OB.CAMERA_PERSPECTIVE = 1 === oB, GB = !0)
+     var UW = OW(41940),
+       kW = OW(41538);
+     let sW = (() => {
+         var WW;
+         let iW, OW, AW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW = LW.c,
+           uW = [],
+           oW = [],
+           dW = [],
+           eW = [],
+           vW = [],
+           gW = [],
+           DW = [],
+           VW = [],
+           pW = [],
+           fW = [],
+           CW = [],
+ ... (18 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2050-L2081` → after: `L791-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L791-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L791-L851) · [Before (L2050-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2050-L2081)

```diff
-           return GB
-         }(BB, YB);
-       !1 !== QB && (yB = (0, oB.k)(GB, BB, YB)), YB.DEPTHPREPASS !== !OB.getColorWrite() && (YB.DEPTHPREPASS = !YB.DEPTHPREPASS, yB = !0), YB.INSTANCES !== DB && (YB.INSTANCES = DB, yB = !0), YB.THIN_INSTANCES !== jB && (YB.THIN_INSTANCES = jB, yB = !0), yB && YB.markAsUnprocesse … [truncated]
-     }
-     const rB = 40,
-       XB = 64,
-       wB = new WeakMap,
-       EB = new WeakSet;
- 
-     function cB(BB, OB, GB, DB) {
-       let QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-         jB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       if (!OB._areAttributesDirty && OB._needNormals === OB._normals && OB._needUVs === OB._uvs) return !1;
-       OB._normals = OB._needNormals, OB._uvs = OB._needUVs, OB.NORMAL = OB._needNormals && BB.isVerticesDataPresent("normal"), OB._needNormals && BB.isVerticesDataPresent("tangent") && (OB.TANGENT = !0);
-       for (let YB = 1; YB <= 6; ++YB) OB["UV" + YB] = !!OB._needUVs && BB.isVerticesDataPresent(`uv${1===YB?"":YB}`);
- ... (16 more removed lines; see GitHub link above)
+           get noMipmap() {
+             return this._noMipmap
+           }
+           get mimeType() {
+             return this._mimeType
+           }
+           set isBlocking(WW) {
+             this._isBlocking = WW
+           }
+           get isBlocking() {
+             return this._isBlocking
+           }
+           get invertY() {
+             return this._invertY
+           }
+           constructor(iW, OW, EW, PW) {
+ ... (45 more added lines; see GitHub link above)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2083-L2092` → after: `L853-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L853-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L853-L900) · [Before (L2083-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2083-L2092)

```diff
-             const oB = !0 === OB.MULTIVIEW,
-               jB = 2 * OB.BonesPerMesh + (oB ? 1 : 0);
-             if (wB.get(BB.skeleton) !== jB) {
-               wB.set(BB.skeleton, jB);
-               const GB = DB.Lp().getCaps().maxVertexUniformVectors;
-               if (GB && !EB.has(BB.skeleton)) {
-                 const DB = 4 * OB.BonesPerMesh,
-                   QB = oB ? XB : rB,
-                   jB = Math.max(GB - QB, 0);
-                 (DB > jB || oB && 3 * DB > GB) && (EB.add(BB.skeleton), YB.b.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${DB} of ~${jB} usable uniform vectors${oB?" (multiview)":""} on a device reporting ${GB}. This can e … [truncated]
+           }
+           updateURL(WW) {
+             let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               OW = arguments.length > 2 ? arguments[2] : void 0,
+               mW = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.bD().markAllMaterialsAsDirty(1, (WW => WW.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = WW), this.url = WW, this._buffer = iW, this._forcedExtension = mW, this.delayLoadState = 4;
+             const EW = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               EW ? EW() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), OW && OW()
+             }, this.delayLoad()
+           }
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const WW = this.bD();
+             if (!WW) return;
+             let iW = this.url;
+ ... (32 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2096-L2325` → after: `L907-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L907-L922) · [Before (L2096-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2096-L2325)

```diff
-         } else OB.NUM_BONE_INFLUENCERS = 0, OB.BonesPerMesh = 0, void 0 !== OB.BONETEXTURE && (OB.BONETEXTURE = !1)
-       }(BB, OB), QB && function(BB, OB) {
-         const GB = BB.morphTargetManager;
-         GB ? (OB.MORPHTARGETS_UV = GB.supportsUVs && OB.UV1, OB.MORPHTARGETS_UV2 = GB.supportsUV2s && OB.UV2, OB.MORPHTARGETS_TANGENT = GB.supportsTangents && OB.TANGENT, OB.MORPHTARGETS_NORMAL = GB.supportsNormals && OB.NORMAL, OB.MORPHTARGETS_POSITION = GB.supportsPositions, OB … [truncated]
-       }(BB, OB), jB && function(BB, OB) {
-         const GB = BB.bakedVertexAnimationManager;
-         OB.BAKED_VERTEX_ANIMATION_TEXTURE = !(!GB || !GB.isEnabled)
-       }(BB, OB), !0
-     }
- 
-     function hB(BB, OB) {
-       if (BB.activeCamera) {
-         const GB = OB.MULTIVIEW;
-         OB.MULTIVIEW = null !== BB.activeCamera.outputRenderTarget && BB.activeCamera.outputRenderTarget.getViewCount() > 1, OB.MULTIVIEW != GB && OB.markAsUnprocessed()
-       }
-     }
- ... (214 more removed lines; see GitHub link above)
+           clone() {
+             const iW = {
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
+             return kW.d.Clone((() => new WW(this._texture ? this._texture.url : null, this.bD(), iW)), this)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2327-L2333` → after: `L924-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L924-L935) · [Before (L2327-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2327-L2333)

```diff
-         }
-         static extractMinAndMax(BB, OB, GB, YB, DB, QB) {
-           for (let oB = OB, jB = OB * YB; oB < OB + GB; oB++, jB += YB) {
-             const OB = BB[jB],
-               GB = BB[jB + 1],
-               YB = BB[jB + 2];
-             DB.minimizeInPlaceFromFloats(OB, GB, YB), QB.maximizeInPlaceFromFloats(OB, GB, YB)
+           serialize() {
+             const iW = this.name;
+             WW.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
+             const OW = super.serialize(WW._SerializeInternalTextureUniqueId);
+             if (!OW) return null;
+             if (WW.SerializeBuffers || WW.ForceSerializeBuffers)
+               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) OW.base64String = this._buffer, OW.name = OW.name.replace("data:", "");
+               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
+               const WW = this.mimeType || "image/png";
+               OW.base64String = `data:${WW};base64,${(0,lW.h)(this._buffer)}`
+             } else(WW.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (OW.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? bW(this) : jW(this));
+             return OW.invertY = this._invertY, OW.samplingMode = this.samplingMode, OW._creationFlags = this._creationFlags, OW._useSRGBBuffer = this._useSRGBBuffer, WW._SerializeInternalTextureUniqueId && (OW.internalTextureUniqueId = this._texture?.uniqueId), OW.internalTexture … [truncated]
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2335-L2379` → after: `L937-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L937-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L937-L1228) · [Before (L2335-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2335-L2379)

```diff
-         }
-       }, (() => {
-         const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         OB = [QB.j.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], GB = [QB.j.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, YB.h)(BB, null, OB, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
-           private: !1,
-           access: {
-             has: BB => "extractMinAndMaxIndexed" in BB,
-             get: BB => BB.extractMinAndMaxIndexed
-           },
- ... (29 more removed lines; see GitHub link above)
+           getClassName() {
+             return "Texture"
+           }
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+           }
+           static Parse(iW, OW, mW) {
+             if (iW.customType) {
+               const WW = ZW.b.Instantiate(iW.customType).Parse(iW, OW, mW);
+               return iW.samplingMode && WW.updateSamplingMode && WW._samplingMode && WW._samplingMode !== iW.samplingMode && WW.updateSamplingMode(iW.samplingMode), WW
+             }
+             if (iW.isCube && !iW.isRenderTarget) return WW._CubeTextureParser(iW, OW, mW);
+             const EW = void 0 !== iW.internalTextureUniqueId;
+             if (!iW.name && !iW.isRenderTarget && !EW) return null;
+             let NW;
+             if (EW) {
+ ... (276 more added lines; see GitHub link above)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2381-L2389` → after: `L1230-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1230-L1231) · [Before (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2381-L2389)

```diff
-     function yB(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         QB = arguments.length > 4 ? arguments[4] : void 0;
-       const jB = new DB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         yB = new DB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return QB || (QB = 3), oB.extractMinAndMax(BB, OB, GB, QB, jB, yB), YB && (jB.x -= jB.x * YB.x + YB.y, jB.y -= jB.y * YB.x + YB.y, jB.z -= jB.z * YB.x + YB.y, yB.x += yB.x * YB.x + YB.y, yB.y += yB.y * YB.x + YB.y, yB.z += yB.z * YB.x + YB.y), {
-         minimum: jB,
-         maximum: yB
-       }
+     function KW() {
+       MW || (MW = !0, (0, cW.h)("BABYLON.Texture", sW), kW.d._TextureParser = sW.Parse)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2392` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1234) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2392)

```diff
-   41287: (BB, OB, GB) => {
+   41531: (WW, iW, OW) => {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2394` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1236) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2394)

```diff
-       c: () => MB
+       d: () => mW
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2403-L2506` → after: `L1239-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1239-L1240) · [Before (L2403-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2403-L2506)

```diff
-       get materialDefines() {
-         const BB = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
-         return "string" === typeof BB ? null : BB
-       }
-       set materialDefines(BB) {
-         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = BB
-       }
-       _getDrawWrapper(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         BB = BB ?? this._engine.currentRenderPassId;
-         let GB = this._drawWrappers[BB];
-         return !GB && OB && (this._drawWrappers[BB] = GB = new yB.d(this._mesh.JF().Lp())), GB
-       }
-       _removeDrawWrapper(BB) {
-         let OB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[BB]?.dispose(OB), this._drawWrappers[BB] = void 0
- ... (88 more removed lines; see GitHub link above)
+       constructor(WW, iW) {
+         this.width = WW, this.height = iW
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2508-L2510` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1242-L1243) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2508-L2510)

```diff
-       updateBoundingInfo(BB) {
-         let OB = this.Gw();
-         return OB || (this.refreshBoundingInfo(), OB = this.Gw()), OB && OB.update(BB), this
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2512-L2514` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1245-L1246) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2512-L2514)

```diff
-       isInFrustum(BB) {
-         const OB = this.Gw();
-         return !!OB && OB.isInFrustum(BB, this._mesh.cullingStrategy)
+       getClassName() {
+         return "Size"
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2516-L2518` → after: `L1248-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1248-L1250) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2516-L2518)

```diff
-       isCompletelyInFrustum(BB) {
-         const OB = this.Gw();
-         return !!OB && OB.isCompletelyInFrustum(BB)
+       getHashCode() {
+         let WW = 0 | this.width;
+         return WW = 397 * WW ^ this.height, WW
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2520-L2521` → after: `L1252-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1252-L1253) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2520-L2521)

```diff
-       render(BB) {
-         return this._renderingMesh.render(this, BB, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       HJ(WW) {
+         this.width = WW.width, this.height = WW.height
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2523-L2534` → after: `L1255-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1255-L1256) · [Before (L2523-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2523-L2534)

```diff
-       _getLinesIndexBuffer(BB, OB) {
-         if (!this._linesIndexBuffer) {
-           const GB = 6 * Math.floor(this.indexCount / 3),
-             YB = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(GB) : new Uint16Array(GB);
-           let DB = 0;
-           if (0 === BB.length)
-             for (let BB = this.indexStart; BB < this.indexStart + this.indexCount; BB += 3) YB[DB++] = BB, YB[DB++] = BB + 1, YB[DB++] = BB + 1, YB[DB++] = BB + 2, YB[DB++] = BB + 2, YB[DB++] = BB;
-           else
-             for (let OB = this.indexStart; OB < this.indexStart + this.indexCount; OB += 3) YB[DB++] = BB[OB], YB[DB++] = BB[OB + 1], YB[DB++] = BB[OB + 1], YB[DB++] = BB[OB + 2], YB[DB++] = BB[OB + 2], YB[DB++] = BB[OB];
-           this._linesIndexBuffer = OB.createIndexBuffer(YB), this._linesIndexCount = YB.length
-         }
-         return this._linesIndexBuffer
+       yWW(WW, iW) {
+         return this.width = WW, this.height = iW, this
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2536-L2538` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1258-L1259) · [Before (L2536-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2536-L2538)

```diff
-       canIntersects(BB) {
-         const OB = this.Gw();
-         return !!OB && BB.intersectsBox(OB.boundingBox)
+       set(WW, iW) {
+         return this.yWW(WW, iW)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2540-L2554` → after: `L1261-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1261-L1262) · [Before (L2540-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2540-L2554)

```diff
-       intersects(BB, OB, GB, YB, DB) {
-         const QB = this.cp();
-         if (!QB) return null;
-         let oB = 3,
-           jB = !1;
-         switch (QB.fillMode) {
-           case 3:
-           case 5:
-           case 6:
-           case 8:
-             return null;
-           case 7:
-             oB = 1, jB = !0
-         }
-         return 4 === QB.fillMode ? GB.length ? this._intersectLines(BB, OB, GB, this._mesh.intersectionThreshold, YB) : this._intersectUnIndexedLines(BB, OB, GB, this._mesh.intersectionThreshold, YB) : !GB.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(BB, OB … [truncated]
+       multiplyByFloats(WW, iW) {
+         return new mW(this.width * WW, this.height * iW)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2556-L2564` → after: `L1264-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1264-L1265) · [Before (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2556-L2564)

```diff
-       _intersectLines(BB, OB, GB, YB, DB) {
-         let oB = null;
-         for (let jB = this.indexStart; jB < this.indexStart + this.indexCount; jB += 2) {
-           const yB = OB[GB[jB]],
-             JB = OB[GB[jB + 1]],
-             MB = BB.intersectionSegment(yB, JB, YB);
-           if (!(MB < 0) && ((DB || !oB || MB < oB.distance) && (oB = new QB.c(null, null, MB), oB.faceId = jB / 2, DB))) break
-         }
-         return oB
+       clone() {
+         return new mW(this.width, this.height)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2566-L2599` → after: `L1267-L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1267-L1268) · [Before (L2566-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2566-L2599)

```diff
-       _intersectUnIndexedLines(BB, OB, GB, YB, DB) {
-         let oB = null;
-         for (let jB = this.verticesStart; jB < this.verticesStart + this.verticesCount; jB += 2) {
-           const GB = OB[jB],
-             yB = OB[jB + 1],
-             JB = BB.intersectionSegment(GB, yB, YB);
-           if (!(JB < 0) && ((DB || !oB || JB < oB.distance) && (oB = new QB.c(null, null, JB), oB.faceId = jB / 2, DB))) break
-         }
-         return oB
-       }
-       _intersectTriangles(BB, OB, GB, YB, DB, QB, oB) {
-         let jB = null,
-           yB = -1;
-         for (let JB = this.indexStart; JB < this.indexStart + this.indexCount - (3 - YB); JB += YB) {
-           yB++;
-           const YB = GB[JB],
- ... (18 more removed lines; see GitHub link above)
+       equals(WW) {
+         return !!WW && (this.width === WW.width && this.height === WW.height)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2601-L2614` → after: `L1270-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1270-L1271) · [Before (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2601-L2614)

```diff
-       _intersectUnIndexedTriangles(BB, OB, GB, YB, DB) {
-         let QB = null;
-         for (let oB = this.verticesStart; oB < this.verticesStart + this.verticesCount; oB += 3) {
-           const GB = OB[oB],
-             jB = OB[oB + 1],
-             yB = OB[oB + 2];
-           if (DB && !DB(GB, jB, yB, BB, -1, -1, -1)) continue;
-           const JB = BB.intersectsTriangle(GB, jB, yB);
-           if (JB) {
-             if (JB.distance < 0) continue;
-             if ((YB || !QB || JB.distance < QB.distance) && (QB = JB, QB.faceId = oB / 3, YB)) break
-           }
-         }
-         return QB
+       get surface() {
+         return this.width * this.height
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2616-L2617` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1273-L1274) · [Before (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2616-L2617)

```diff
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
+       static Zero() {
+         return new mW(0, 0)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2619-L2626` → after: `L1276-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1276-L1277) · [Before (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2619-L2626)

```diff
-       clone(BB, OB) {
-         const GB = new MB(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, BB, OB, !1);
-         if (!this.IsGlobal) {
-           const BB = this.Gw();
-           if (!BB) return GB;
-           GB._boundingInfo = new oB.e(BB.minimum, BB.maximum)
-         }
-         return GB
+       add(WW) {
+         return new mW(this.width + WW.width, this.height + WW.height)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2628-L2632` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1279-L1280) · [Before (L2628-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2628-L2632)

```diff
-       dispose() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._linesIndexBuffer && (this._mesh.JF().Lp()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const OB = this._mesh.iW.indexOf(this);
-         this._mesh.iW.splice(OB, 1), this.resetDrawCache(void 0, BB)
+       subtract(WW) {
+         return new mW(this.width - WW.width, this.height - WW.height)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2634-L2635` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1282-L1283) · [Before (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2634-L2635)

```diff
-       getClassName() {
-         return "SubMesh"
+       scale(WW) {
+         return new mW(this.width * WW, this.height * WW)
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2637-L2646` → after: `L1285-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1285-L1288) · [Before (L2637-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2637-L2646)

```diff
-       static CreateFromIndices(BB, OB, GB, YB, DB) {
-         let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           oB = Number.MAX_VALUE,
-           jB = -Number.MAX_VALUE;
-         const yB = (DB || YB).KDB();
-         for (let JB = OB; JB < OB + GB; JB++) {
-           const BB = yB[JB];
-           BB < oB && (oB = BB), BB > jB && (jB = BB)
-         }
-         return new MB(BB, oB, jB - oB + 1, OB, GB, YB, DB, QB)
+       static Lerp(WW, iW, OW) {
+         const EW = WW.width + (iW.width - WW.width) * OW,
+           NW = WW.height + (iW.height - WW.height) * OW;
+         return new mW(EW, NW)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2648` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/291.js#L1290) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/291.js#L2648)

```diff
-     }(YB = MB.prototype).projectToRef ?? (YB.projectToRef = (0, JB.g)("SubMesh", "projectToRef"))
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L4)

```diff
-   44726: (BB, OB, GB) => {
+   41753: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L6-L172` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L6-L7) · [Before (L6-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L6-L172)

```diff
-       b: () => YB
-     });
-     class YB {}
-     YB.AUTOSAMPLERSUFFIX = "Sampler", YB.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", YB.ALPHA_DISABLE = 0, YB.ALPHA_ADD = 1, YB.ALPHA_COMBINE = 2, YB.ALPHA_SUBTRACT = 3, YB.ALPHA_MULTIPLY = 4, YB.ALPHA_MAXIMIZED = 5, YB.ALPHA_ONEONE = 6, YB.ALPHA_PREMULTIPLIED = 7, YB.ALPH … [truncated]
-   },
-   44702: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => yB
-     });
-     var YB = GB(40998),
-       DB = GB(41004),
-       QB = GB(37778),
-       oB = GB(41250),
-       jB = GB(41226);
-     let yB = (() => {
-       var BB;
- ... (151 more removed lines; see GitHub link above)
+       d: () => PW,
+       f: () => LW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L174-L188` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L9-L15) · [Before (L174-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L174-L188)

```diff
-     var YB = GB(41470);
-     class DB extends YB.e {
-       constructor(BB, OB, GB, DB, QB) {
-         let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           yB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           MB = arguments.length > 9 ? arguments[9] : void 0,
-           PB = arguments.length > 10 ? arguments[10] : void 0,
-           zB = arguments.length > 11 ? arguments[11] : void 0,
-           lB = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, QB, !oB, jB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, MB), this.format = DB, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== JB || (yB = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== JB || (yB = … [truncated]
-       }
-       update(BB) {
-         this.updateMipLevel(BB, 0)
+     var mW = OW(39911),
+       EW = OW(41538),
+       NW = OW(41723),
+       PW = {};
+     class LW {
+       constructor(WW) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = WW, this.checkInputs = () => {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L190-L191` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L17-L19) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L190-L191)

```diff
-       updateMipLevel(BB, OB) {
-         this._getEngine().updateRawTexture(this._texture, BB, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, OB), this._waitingForData = !1
+       add(WW) {
+         const iW = WW.getSimpleName();
+         this.attached[iW] ? mW.b.Warn("camera input of type " + iW + " already exists on camera") : (this.attached[iW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(t … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L193-L196` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L21-L25) · [Before (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L193-L196)

```diff
-       clone() {
-         if (!this._texture) return super.clone();
-         const BB = new DB(null, this.getSize().width, this.getSize().height, this.format, this.JF(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
-         return BB._texture = this._texture, this._texture.incrementReferences(), BB
+       remove(WW) {
+         for (const iW in this.attached) {
+           const OW = this.attached[iW];
+           if (OW === WW) return OW.detachControl(), OW.camera = null, delete this.attached[iW], void this.rebuildInputCheck()
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L198-L199` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L27-L31) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L198-L199)

```diff
-       isReady() {
-         return super.isReady() && !this._waitingForData
+       removeByType(WW) {
+         for (const iW in this.attached) {
+           const OW = this.attached[iW];
+           OW.getClassName() === WW && (OW.detachControl(), OW.camera = null, delete this.attached[iW], this.rebuildInputCheck())
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L201-L202` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L33-L37) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L201-L202)

```diff
-       static CreateLuminanceTexture(BB, OB, GB, YB) {
-         return new DB(BB, OB, GB, 1, YB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       _addCheckInputs(WW) {
+         const iW = this.checkInputs;
+         return () => {
+           iW(), WW()
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L204-L205` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L39-L40) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L204-L205)

```diff
-       static CreateLuminanceAlphaTexture(BB, OB, GB, YB) {
-         return new DB(BB, OB, GB, 2, YB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       attachInput(WW) {
+         this.attachedToElement && WW.attachControl(this.noPreventDefault)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L207-L208` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L42-L47) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L207-L208)

```diff
-       static CreateAlphaTexture(BB, OB, GB, YB) {
-         return new DB(BB, OB, GB, 0, YB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
+       attachElement() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           WW = !NW.e.ForceAttachControlToAlwaysPreventDefault && WW, this.attachedToElement = !0, this.noPreventDefault = WW;
+           for (const iW in this.attached) this.attached[iW].attachControl(WW)
+         }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L210-L211` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L49-L52) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L210-L211)

```diff
-       static CreateRGBTexture(BB, OB, GB, YB) {
-         return new DB(BB, OB, GB, 4, YB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       detachElement() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const iW in this.attached) this.attached[iW].detachControl(), WW && (this.attached[iW].camera = null);
+         this.attachedToElement = !1
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L213-L214` → after: `L54-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L54-L59) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L213-L214)

```diff
-       static CreateRGBATexture(BB, OB, GB, YB) {
-         return new DB(BB, OB, GB, 5, YB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const WW in this.attached) {
+           const iW = this.attached[WW];
+           iW.checkInputs && (this.checkInputs = this._addCheckInputs(iW.checkInputs.bind(iW)))
+         }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L216-L217` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L61-L62) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L216-L217)

```diff
-       static CreateRGBAStorageTexture(BB, OB, GB, YB) {
-         return new DB(BB, OB, GB, 5, YB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L219-L223` → after: `L64-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L64-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L64-L71) · [Before (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L219-L223)

```diff
-       static CreateRTexture(BB, OB, GB, QB) {
-         let oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           jB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           yB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : YB.e.TRILINEAR_SAMPLINGMODE;
-         return new DB(BB, OB, GB, 6, QB, oB, jB, yB, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
+       serialize(WW) {
+         const iW = {};
+         for (const OW in this.attached) {
+           const WW = this.attached[OW],
+             mW = EW.d.Serialize(WW);
+           iW[WW.getClassName()] = mW
+         }
+         WW.inputsmgr = iW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L225-L229` → after: `L73-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L73-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/292.js#L73-L92) · [Before (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/292.js#L225-L229)

```diff
-       static CreateRStorageTexture(BB, OB, GB, QB) {
-         let oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           jB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           yB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : YB.e.TRILINEAR_SAMPLINGMODE;
-         return new DB(BB, OB, GB, 6, QB, oB, jB, yB, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
+       parse(WW) {
+         const iW = WW.inputsmgr;
+         if (iW) {
+           this.clear();
+           for (const WW in iW) {
+             const OW = PW[WW];
+             if (OW) {
+               const mW = iW[WW],
+                 NW = EW.d.Parse((() => new OW), mW, null);
+               this.add(NW)
+             }
+           }
+         } else
+           for (const OW in this.attached) {
+             const iW = PW[this.attached[OW].getClassName()];
+             if (iW) {
+ ... (4 more added lines; see GitHub link above)
```
