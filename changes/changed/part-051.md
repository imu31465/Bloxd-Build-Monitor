# Changed — Bundle Modifications Report (Part 051 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `51 / 141` (**437** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (538 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 482. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8965` → after: `L8965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L8965) · [Before (L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L8965)

```diff
-           if ((oB || (GB = IB._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), GB ? GB[1] = -1 : (GB = [IB, -1], IB._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, GB))), !IB.isBlocked) && (ZB && this._totalVertices.addCount(IB.getTotalVertices() … [truncated]
+           if ((Dt || (mt = et._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), mt ? mt[1] = -1 : (mt = [et, -1], et._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, mt))), !et.isBlocked) && (Vt && this._totalVertices.addCount(et.getTotalVertices() … [truncated]
```

#### 483. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8968` → after: `L8968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L8968) · [Before (L8968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L8968)

```diff
-             if (vB !== IB && 0 !== vB.billboardMode && vB.computeWorldMatrix(), IB._preActivate(), IB.isVisible && IB.visibility > 0 && 0 !== (IB.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || IB.RN || IB.isInFrustum(this._frustumPlanes))) {
+             if (dt !== et && 0 !== dt.billboardMode && dt.computeWorldMatrix(), et._preActivate(), et.isVisible && et.visibility > 0 && 0 !== (et.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || et.Cf || et.isInFrustum(this._frustumPlanes))) {
```

#### 484. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8973` → after: `L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L8973) · [Before (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L8973)

```diff
-               IB._activate(this._renderId, !1) && (IB.vR ? IB._internalAbstractMeshDataInfo._actAsRegularMesh && (vB = IB) : vB._internalAbstractMeshDataInfo._onlyForInstances = !1, vB._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(IB, vB)), IB._postActivate()
+               et._activate(this._renderId, !1) && (et.pI ? et._internalAbstractMeshDataInfo._actAsRegularMesh && (dt = et) : dt._internalAbstractMeshDataInfo._onlyForInstances = !1, dt._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(et, dt)), et._postActivate()
```

#### 485. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8979-L8980` → after: `L8979-L8980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L8979-L8980) · [Before (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L8979-L8980)

```diff
-           for (let BB = 0; BB < this.DW.length; BB++) {
-             const IB = this.DW[BB];
+           for (let tt = 0; tt < this.PJ.length; tt++) {
+             const et = this.PJ[tt];
```

#### 486. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8993-L8994` → after: `L8993-L8994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8993-L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L8993-L8994) · [Before (L8993-L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L8993-L8994)

```diff
-         let ZB = BB.sJB || BB.vR || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || IB.RN;
-         if (IB && IB.EW && IB.EW.length > 0) {
+         let Vt = tt.cqt || tt.pI || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || et.Cf;
+         if (et && et.vJ && et.vJ.length > 0) {
```

#### 487. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9046` → after: `L9046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9046) · [Before (L9046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9046)

```diff
-             TB.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
+             Ot.l.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
```

#### 488. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9056` → after: `L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9056) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9056)

```diff
-             IB && BB && (IB.renderList.data = BB, IB.renderList.length = BB.length), TB.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+             et && tt && (et.renderList.data = tt, et.renderList.length = tt.length), Ot.l.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
```

#### 489. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9106` → after: `L9106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9106) · [Before (L9106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9106)

```diff
-                   JB = TB.yJB(IB, BB.usePreciseIntersection),
+                   qt = Ot.uqt(et, tt.usePreciseIntersection),
```

#### 490. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9126` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9126) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9126)

```diff
-           for (oB = Math.min(oB, JB); BB > 0 && TB < oB;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = IB * ZB, this._animate(IB), this.onAfterAnimationsObservable.notifyObservers(this), this.Gl && this._advancePhysicsEngineStep(IB), this.onAfterStepO … [truncated]
+           for (Dt = Math.min(Dt, qt); tt > 0 && Ot < Dt;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = et * Vt, this._animate(et), this.onAfterAnimationsObservable.notifyObservers(this), this.zk && this._advancePhysicsEngineStep(et), this.onAfterStepO … [truncated]
```

#### 491. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9130` → after: `L9130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9130) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9130)

```diff
-           this._animationRatio = .06 * BB, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.Gl && this._advancePhysicsEngineStep(BB)
+           this._animationRatio = .06 * tt, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.zk && this._advancePhysicsEngineStep(tt)
```

#### 492. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9165` → after: `L9165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9165) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9165)

```diff
-           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), TB.j.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
+           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Ot.l.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
```

#### 493. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9171` → after: `L9171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9171) · [Before (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9171)

```diff
-           TB.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+           Ot.l.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
```

#### 494. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9195` → after: `L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9195) · [Before (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9195)

```diff
-               ZB._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ZB.isBlocked || (this._totalVertices.addCount(ZB.getTotalVertices(), !1), ZB.isReady() && ZB.isEnabled() && !ZB.ek.hasAZeroComponent && (ZB.computeWorldMatrix(BB), ZB.actionManager && ZB.actionManager.hasSpe … [truncated]
+               Vt._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Vt.isBlocked || (this._totalVertices.addCount(Vt.getTotalVertices(), !1), Vt.isReady() && Vt.isEnabled() && !Vt.cj.hasAZeroComponent && (Vt.computeWorldMatrix(tt), Vt.actionManager && Vt.actionManager.hasSpe … [truncated]
```

#### 495. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9198-L9199` → after: `L9198-L9199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9198-L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9198-L9199) · [Before (L9198-L9199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9198-L9199)

```diff
-               for (let BB = 0; BB < this.DW.length; BB++) {
-                 const IB = this.DW[BB];
+               for (let tt = 0; tt < this.PJ.length; tt++) {
+                 const et = this.PJ[tt];
```

#### 496. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9220` → after: `L9220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9220) · [Before (L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9220)

```diff
-         if (this.mC) return;
+         if (this.bC) return;
```

#### 497. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9229` → after: `L9229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9229) · [Before (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9229)

```diff
-         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), qB.c.JR = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
+         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), yt.b.vI = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
```

#### 498. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9248` → after: `L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9248) · [Before (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9248)

```diff
-             TB.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
+             Ot.l.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
```

#### 499. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9254` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9254) · [Before (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9254)

```diff
-             TB.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
+             Ot.l.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 500. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9291-L9292` → after: `L9291-L9292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9291-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9291-L9292) · [Before (L9291-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9291-L9292)

```diff
-         if (this.mC) return;
-         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+         if (this.bC) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
```

#### 501. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9301` → after: `L9301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9301) · [Before (L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9301)

```diff
-           this.oR.notifyObservers(this)
+           this.ZI.notifyObservers(this)
```

#### 502. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9311` → after: `L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9311) · [Before (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9311)

```diff
-         this._disposeList(ZB), this._disposeList(this.DW), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
+         this._disposeList(Vt), this._disposeList(this.PJ), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
```

#### 503. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9313-L9315` → after: `L9313-L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9313-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9313-L9315) · [Before (L9313-L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9313-L9315)

```diff
-         if (TB > -1 && this._engine.scenes.splice(TB, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, qB.j)(), dB.e._LastCreatedScene === this) {
-           dB.e._LastCreatedScene = null;
-           let BB = dB.e.Instances.length - 1;
+         if (Ot > -1 && this._engine.scenes.splice(Ot, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, yt.d)(), Jt.d._LastCreatedScene === this) {
+           Jt.d._LastCreatedScene = null;
+           let tt = Jt.d.Instances.length - 1;
```

#### 504. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9317` → after: `L9317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9317) · [Before (L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9317)

```diff
-             const IB = dB.e.Instances[BB];
+             const et = Jt.d.Instances[tt];
```

#### 505. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9319` → after: `L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9319) · [Before (L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9319)

```diff
-               dB.e._LastCreatedScene = IB.scenes[this._engine.scenes.length - 1];
+               Jt.d._LastCreatedScene = et.scenes[this._engine.scenes.length - 1];
```

#### 506. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9325` → after: `L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9325) · [Before (L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9325)

```diff
-         TB = this._engine._virtualScenes.indexOf(this), TB > -1 && this._engine._virtualScenes.splice(TB, 1), this._engine.wipeCaches(!0), this.oR.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
+         Ot = this._engine._virtualScenes.indexOf(this), Ot > -1 && this._engine._virtualScenes.splice(Ot, 1), this._engine.wipeCaches(!0), this.ZI.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 507. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9348-L9349` → after: `L9348-L9349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9348-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9348-L9349) · [Before (L9348-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9348-L9349)

```diff
-         const IB = new nB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           ZB = new nB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         const et = new Xt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           Vt = new Xt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 508. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9353-L9354` → after: `L9353-L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9353-L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9353-L9354) · [Before (L9353-L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9353-L9354)

```diff
-           if (JB.computeWorldMatrix(!0), !JB.EW || 0 === JB.EW.length || JB.infiniteDistance) continue;
-           const BB = JB.qm(),
+           if (qt.computeWorldMatrix(!0), !qt.vJ || 0 === qt.vJ.length || qt.infiniteDistance) continue;
+           const tt = qt.fL(),
```

#### 509. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9357` → after: `L9357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9357) · [Before (L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9357)

```diff
-           nB.s.CheckExtends(TB, IB, ZB), nB.s.CheckExtends(oB, IB, ZB)
+           Xt.n.CheckExtends(Ot, et, Vt), Xt.n.CheckExtends(Dt, et, Vt)
```

#### 510. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9360-L9361` → after: `L9360-L9361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9360-L9361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9360-L9361) · [Before (L9360-L9361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9360-L9361)

```diff
-           min: nB.s.Zero(),
-           max: nB.s.Zero()
+           min: Xt.n.Zero(),
+           max: Xt.n.Zero()
```

#### 511. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9368` → after: `L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9368) · [Before (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9368)

```diff
-         throw (0, CB.m)("Ray")
+         throw (0, Ct.e)("Ray")
```

#### 512. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9371)

```diff
-         throw (0, CB.m)("Ray")
+         throw (0, Ct.e)("Ray")
```

#### 513. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9374` → after: `L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9374) · [Before (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9374)

```diff
-         throw (0, CB.m)("Ray")
+         throw (0, Ct.e)("Ray")
```

#### 514. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9377` → after: `L9377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9377) · [Before (L9377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9377)

```diff
-         throw (0, CB.m)("Ray")
+         throw (0, Ct.e)("Ray")
```

#### 515. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9380-L9381` → after: `L9380-L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9380-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9380-L9381) · [Before (L9380-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9380-L9381)

```diff
-         const GB = (0, CB.m)("Ray", !0);
-         return GB && BZ.d.Warn(GB), new FB.e
+         const mt = (0, Ct.e)("Ray", !0);
+         return mt && eV.d.Warn(mt), new Et.b
```

#### 516. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9384-L9385` → after: `L9384-L9385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9384-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9384-L9385) · [Before (L9384-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9384-L9385)

```diff
-         const oB = (0, CB.m)("Ray", !0);
-         return oB && BZ.d.Warn(oB), new FB.e
+         const Dt = (0, Ct.e)("Ray", !0);
+         return Dt && eV.d.Warn(Dt), new Et.b
```

#### 517. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9388` → after: `L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9388) · [Before (L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9388)

```diff
-         throw (0, CB.m)("Ray")
+         throw (0, Ct.e)("Ray")
```

#### 518. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9391)

```diff
-         throw (0, CB.m)("Ray")
+         throw (0, Ct.e)("Ray")
```

#### 519. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9394` → after: `L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9394) · [Before (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9394)

```diff
-         throw (0, CB.m)("Ray")
+         throw (0, Ct.e)("Ray")
```

#### 520. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9407` → after: `L9407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9407) · [Before (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9407)

```diff
-         for (const BB of this.DW) BB.rebuild();
+         for (const tt of this.PJ) tt.rebuild();
```

#### 521. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9420` → after: `L9420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9420) · [Before (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9420)

```diff
-           cB.b && cB.b.MatchesQuery(oB, IB) && (!ZB || ZB(oB)) && TB.push(oB)
+           Ht.d && Ht.d.MatchesQuery(Dt, et) && (!Vt || Vt(Dt)) && Ot.push(Dt)
```

#### 522. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9464` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9464) · [Before (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9464)

```diff
-           for (const ZB of this.materials) IB && !IB(ZB) || ZB.GZB(BB)
+           for (const Vt of this.materials) et && !et(Vt) || Vt.fVt(tt)
```

#### 523. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9467` → after: `L9467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9467) · [Before (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9467)

```diff
-         const vB = (0, EB.j)(BB, IB, ZB, TB ? this.offlineProvider : void 0, JB, oB, GB);
+         const dt = (0, Tt.o)(tt, et, Vt, Ot ? this.offlineProvider : void 0, qt, Dt, mt);
```

#### 524. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9483)

```diff
-         const TB = `${BB}|${IB?"binary":"string"}`;
+         const Ot = `${tt}|${et?"binary":"string"}`;
```

#### 525. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9498` → after: `L9498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9498) · [Before (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9498)

```diff
-         const vB = (0, EB.r)(BB, IB, ZB, TB ? this.offlineProvider : void 0, JB, oB, GB);
+         const dt = (0, Tt.y)(tt, et, Vt, Ot ? this.offlineProvider : void 0, qt, Dt, mt);
```

#### 526. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9513)

```diff
-         const oB = (0, EB.m)(BB, IB, ZB, TB, JB);
+         const Dt = (0, Tt.r)(tt, et, Vt, Ot, qt);
```

#### 527. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9528` → after: `L9528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9528) · [Before (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9528)

```diff
-         throw (0, CB.m)("performanceViewerSceneExtension")
+         throw (0, Ct.e)("performanceViewerSceneExtension")
```

#### 528. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9599` → after: `L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9599) · [Before (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9599)

```diff
-     }(SB = oZ.prototype).sortActiveAnimatables ?? (SB.sortActiveAnimatables = (0, CB.j)("Scene", "sortActiveAnimatables")), (BI = oZ.prototype).beginWeightedAnimation ?? (BI.beginWeightedAnimation = (0, CB.j)("Scene", "beginWeightedAnimation")), (II = oZ.prototype).beginAnimation … [truncated]
+     }(te = mV.prototype).sortActiveAnimatables ?? (te.sortActiveAnimatables = (0, Ct.d)("Scene", "sortActiveAnimatables")), (ee = mV.prototype).beginWeightedAnimation ?? (ee.beginWeightedAnimation = (0, Ct.d)("Scene", "beginWeightedAnimation")), (Ve = mV.prototype).beginAnimation … [truncated]
```

#### 529. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9601` → after: `L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9601) · [Before (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9601)

```diff
-   40215: (BB, IB, ZB) => {
+   40366: (tt, et, Vt) => {
```

#### 530. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9603-L9604` → after: `L9603-L9604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9603-L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9603-L9604) · [Before (L9603-L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9603-L9604)

```diff
-       c: () => TB,
-       d: () => JB
+       e: () => Ot,
+       f: () => qt
```

#### 531. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9607` → after: `L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9607) · [Before (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9607)

```diff
-     TB.NAME_EFFECTLAYER = "EffectLayer", TB.NAME_LAYER = "Layer", TB.NAME_LENSFLARESYSTEM = "LensFlareSystem", TB.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", TB.NAME_PARTICLESYSTEM = "ParticleSystem", TB.NAME_GAMEPAD = "Gamepad", TB.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
+     Ot.NAME_EFFECTLAYER = "EffectLayer", Ot.NAME_LAYER = "Layer", Ot.NAME_LENSFLARESYSTEM = "LensFlareSystem", Ot.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Ot.NAME_PARTICLESYSTEM = "ParticleSystem", Ot.NAME_GAMEPAD = "Gamepad", Ot.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
```

#### 532. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9631)

```diff
-   40061: (BB, IB, ZB) => {
+   40211: (tt, et, Vt) => {
```

#### 533. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9633-L9635` → after: `L9633-L9634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9633-L9634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9633-L9634) · [Before (L9633-L9635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9633-L9635)

```diff
-       b: () => GB,
-       f: () => vB,
-       j: () => TB,
+       e: () => mt,
+       i: () => dt,
```

#### 534. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9637` → after: `L9636-L9637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9636-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9636-L9637) · [Before (L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9637)

```diff
-       p: () => oB
+       m: () => qt,
+       q: () => Dt
```

#### 535. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9645` → after: `L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9645) · [Before (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9645)

```diff
-       for (var vB, kB = TB.kind, cB = "getter" === kB ? "get" : "setter" === kB ? "set" : "value", nB = !IB && BB ? TB.static ? BB : BB.prototype : null, hB = IB || (nB ? Object.getOwnPropertyDescriptor(nB, TB.name) : {}), zB = !1, FB = ZB.length - 1; FB >= 0; FB--) {
+       for (var dt, jt = Ot.kind, Ht = "getter" === jt ? "get" : "setter" === jt ? "set" : "value", Xt = !et && tt ? Ot.static ? tt : tt.prototype : null, Qt = et || (Xt ? Object.getOwnPropertyDescriptor(Xt, Ot.name) : {}), lt = !1, Et = Vt.length - 1; Et >= 0; Et--) {
```

#### 536. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9668)

```diff
-       return TB ? ZB : void 0
+       return Ot ? Vt : void 0
```

#### 537. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9682-L9683` → after: `L9682-L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9682-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9682-L9683) · [Before (L9682-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9682-L9683)

```diff
-       if ("function" === typeof IB ? BB !== IB || !TB : !IB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === ZB ? TB : "a" === ZB ? TB.call(BB) : TB ? TB.value : IB.get(BB)
+       if ("function" === typeof et ? tt !== et || !Ot : !et.has(tt)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
+       return "m" === Vt ? Ot : "a" === Vt ? Ot.call(tt) : Ot ? Ot.value : et.get(tt)
```

#### 538. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L9689-L9690` → after: `L9689-L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L9689-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/256.js#L9689-L9690) · [Before (L9689-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/256.js#L9689-L9690)

```diff
-       if ("function" === typeof IB ? BB !== IB || !JB : !IB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === TB ? JB.call(BB, ZB) : JB ? JB.value = ZB : IB.set(BB, ZB), ZB
+       if ("function" === typeof et ? tt !== et || !qt : !et.has(tt)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
+       return "a" === Ot ? qt.call(tt, Vt) : qt ? qt.value = Vt : et.set(tt, Vt), Vt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   39905: (BB, IB, ZB) => {
+   40061: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/257.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/257.js#L6)

```diff
-       c: () => TB
+       b: () => Ot
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/257.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/257.js#L21)

```diff
-   61317: (BB, IB, ZB) => {
+   61532: (tt, et, Vt) => {
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/257.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/257.js#L25)

```diff
-     var TB = ZB(39905);
+     var Ot = Vt(40061);
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/257.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/257.js#L28)

```diff
-     TB.c.ShadersStore[JB] || (TB.c.ShadersStore[JB] = oB);
+     Ot.b.ShadersStore[qt] || (Ot.b.ShadersStore[qt] = Dt);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (90 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   40129: (BB, IB, ZB) => {
+   40270: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L7-L8` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L7) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L7-L8)

```diff
-       i: () => hB,
-       j: () => kB,
+       h: () => Qt,
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L10-L12` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L9-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L10-L12)

```diff
-       p: () => cB,
-       q: () => vB,
-       s: () => nB
+       o: () => Et,
+       s: () => Ht,
+       v: () => dt,
+       z: () => Xt
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L14-L15)

```diff
-     var TB = ZB(38718),
-       JB = ZB(40134);
+     var Ot = Vt(38899),
+       qt = Vt(40272);
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L21)

```diff
-           return TB && (IB = Math.max(IB / 127, -1)), IB
+           return Ot && (et = Math.max(et / 127, -1)), et
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L25)

```diff
-           return TB && (IB /= 255), IB
+           return Ot && (et /= 255), et
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L29)

```diff
-           return TB && (IB = Math.max(IB / 32767, -1)), IB
+           return Ot && (et = Math.max(et / 32767, -1)), et
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L33)

```diff
-           return TB && (IB /= 65535), IB
+           return Ot && (et /= 65535), et
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L36)

```diff
-           return (0, JB.c)(BB.getUint16(ZB, !0));
+           return (0, qt.e)(tt.getUint16(Vt, !0));
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L44)

```diff
-           throw new Error(`Invalid component type ${IB}`)
+           throw new Error(`Invalid component type ${et}`)
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L63)

```diff
-           BB.setUint16(ZB, (0, JB.h)(oB), !0);
+           tt.setUint16(Vt, (0, qt.k)(Dt), !0);
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L75)

```diff
-           throw new Error(`Invalid component type ${IB}`)
+           throw new Error(`Invalid component type ${et}`)
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L93)

```diff
-           throw new Error(`Invalid type '${BB}'`)
+           throw new Error(`Invalid type '${tt}'`)
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L164)

```diff
-               throw new Error(`Invalid component type '${BB}'`)
+               throw new Error(`Invalid component type '${tt}'`)
```

#### 15. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L237)

```diff
-   39939: (BB, IB, ZB) => {
+   40082: (tt, et, Vt) => {
```

#### 16. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L239-L241` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L239-L240) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L239-L241)

```diff
-       e: () => wB,
-       i: () => QB,
-       l: () => sB,
+       c: () => ht,
+       g: () => ut,
```

#### 17. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L243` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L242-L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L243)

```diff
-       n: () => jB
+       h: () => Pt,
+       m: () => Zt
```

#### 18. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L339)

```diff
-             IB.length -= 2, IB.push(`(${TB}${ZB}${BB})`)
+             et.length -= 2, et.push(`(${Ot}${Vt}${tt})`)
```

#### 19. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L442-L443` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L442-L443) · [Before (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L442-L443)

```diff
-     var zB = ZB(39931),
-       FB = ZB(39926);
+     var lt = Vt(40080),
+       Et = Vt(40076);
```

#### 20. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L463)

```diff
-             const ZB = IB.shouldUseHighPrecisionShader; - 1 === BB.indexOf("precision highp float") ? BB = ZB ? "precision highp float;\n" + BB : "precision mediump float;\n" + BB : ZB || (BB = BB.replace("precision highp float", "precision mediump float"));
+             const Vt = et.shouldUseHighPrecisionShader; - 1 === tt.indexOf("precision highp float") ? tt = Vt ? "precision highp float;\n" + tt : "precision mediump float;\n" + tt : Vt || (tt = tt.replace("precision highp float", "precision mediump float"));
```

#### 21. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L517)

```diff
-           const TB = "&&" == JB ? new nB : new cB;
+           const Ot = "&&" == qt ? new Xt : new Ht;
```

#### 22. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L553)

```diff
-                 TB.children.push(GB), iB(BB, TB, GB, ZB);
+                 Ot.children.push(mt), St(tt, Ot, mt, Vt);
```

#### 23. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L565)

```diff
-                 TB.children.push(GB), iB(BB, TB, GB, ZB);
+                 Ot.children.push(mt), St(tt, Ot, mt, Vt);
```

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L571)

```diff
-                 IB.children.push(TB), TB.children.push(GB), iB(BB, TB, GB, ZB);
+                 et.children.push(Ot), Ot.children.push(mt), St(tt, Ot, mt, Vt);
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L600)

```diff
-       return 0 === BB.processor?.shaderLanguage && (TB.GL_ES = "true"), TB.__VERSION__ = BB.version, TB[BB.platformName] = "true", (0, FB.j)(TB, IB?.isNDCHalfZRange, IB?.iTB, IB?.useExactSrgbConversions), TB
+       return 0 === tt.processor?.shaderLanguage && (Ot.GL_ES = "true"), Ot.__VERSION__ = tt.version, Ot[tt.platformName] = "true", (0, Et.i)(Ot, et?.isNDCHalfZRange, et?.LOt, et?.useExactSrgbConversions), Ot
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L651)

```diff
-         throw (0, zB.m)("FileTools")
+         throw (0, lt.e)("FileTools")
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L655)

```diff
-   39926: (BB, IB, ZB) => {
+   40076: (tt, et, Vt) => {
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L658` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L658-L659) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L658)

```diff
-       g: () => oB,
+       f: () => Dt,
+       i: () => dt,
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L660-L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L661) · [Before (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L660-L661)

```diff
-       k: () => GB,
-       n: () => kB
+       k: () => jt
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L663)

```diff
-     var TB = ZB(39931);
+     var Ot = Vt(40080);
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L672)

```diff
-       if (!cB) throw (0, TB.m)("FileTools");
+       if (!Ht) throw (0, Ot.e)("FileTools");
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L690)

```diff
-           return TB && BB.set(new Int8Array(TB)), BB
+           return Ot && tt.set(new Int8Array(Ot)), tt
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L694)

```diff
-           return TB && BB.set(new Uint8Array(TB)), BB
+           return Ot && tt.set(new Uint8Array(Ot)), tt
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L698)

```diff
-           return TB && BB.set(new Int16Array(TB)), BB
+           return Ot && tt.set(new Int16Array(Ot)), tt
```

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L706)

```diff
-           return TB && BB.set(new Uint16Array(TB)), BB
+           return Ot && tt.set(new Uint16Array(Ot)), tt
```

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L710)

```diff
-           return TB && BB.set(new Int32Array(TB)), BB
+           return Ot && tt.set(new Int32Array(Ot)), tt
```

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L719)

```diff
-           return TB && BB.set(new Uint32Array(TB)), BB
+           return Ot && tt.set(new Uint32Array(Ot)), tt
```

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L723)

```diff
-           return TB && BB.set(new Float32Array(TB)), BB
+           return Ot && tt.set(new Float32Array(Ot)), tt
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L730)

```diff
-   39931: (BB, IB, ZB) => {
+   40080: (tt, et, Vt) => {
```

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L733-L735` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L734-L735) · [Before (L733-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L733-L735)

```diff
-       g: () => nB,
-       j: () => kB,
-       m: () => JB
+       d: () => jt,
+       e: () => qt
```

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !TB[BB]) return TB[BB] = !0, `${BB} needs to be imported before as it contains a side-effect required by your code.`
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Ot[tt]) return Ot[tt] = !0, `${tt} needs to be imported before as it contains a side-effect required by your code.`
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L750-L751)

```diff
-           const ZB = `${BB}.${IB}`;
-           oB[ZB] || (oB[ZB] = !0, console.warn(`[Babylon.js] ${ZB}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+           const Vt = `${tt}.${et}`;
+           Dt[Vt] || (Dt[Vt] = !0, console.warn(`[Babylon.js] ${Vt}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
```

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L777)

```diff
-   39912: (BB, IB, ZB) => {
+   40068: (tt, et, Vt) => {
```

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L798` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L798) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L798)

```diff
-       g: () => oB,
+       d: () => Dt,
```

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L800)

```diff
-       l: () => TB
+       j: () => Ot
```

#### 46. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L803)

```diff
-   40122: (BB, IB, ZB) => {
+   40257: (tt, et, Vt) => {
```

#### 47. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L805-L807` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L805-L807) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L805-L807)

```diff
-       c: () => TB,
-       f: () => JB,
-       g: () => oB
+       b: () => Ot,
+       e: () => qt,
+       f: () => Dt
```

#### 48. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L826)

```diff
-   40110: (BB, IB, ZB) => {
+   40249: (tt, et, Vt) => {
```

#### 49. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L828-L829` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L828) · [Before (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L828-L829)

```diff
-       c: () => HB,
-       d: () => WB,
+       b: () => It,
```

#### 50. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L833-L835` → after: `L831-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L831-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L831-L833) · [Before (L833-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L833-L835)

```diff
-       l: () => QB,
-       m: () => sB,
-       q: () => rB,
+       k: () => ct,
+       o: () => ht,
+       p: () => ut,
```

#### 51. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L837` → after: `L835-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L835-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L835-L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L837)

```diff
-       s: () => dB
+       u: () => kt,
+       y: () => vt,
+       z: () => Jt
```

#### 52. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L839-L841` → after: `L839-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L839-L841) · [Before (L839-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L839-L841)

```diff
-     var TB = ZB(40118),
-       JB = ZB(39912),
-       oB = ZB(37153);
+     var Ot = Vt(40255),
+       qt = Vt(40068),
+       Dt = Vt(37367);
```

#### 53. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L844-L851` → after: `L844-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L844-L851) · [Before (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L844-L851)

```diff
-     var vB = ZB(40122),
-       kB = ZB(40124),
-       cB = ZB(37147),
-       nB = ZB(39926),
-       hB = ZB(39939),
-       zB = ZB(38718),
-       FB = ZB(39943),
-       NB = ZB(40129);
+     var dt = Vt(40257),
+       jt = Vt(40261),
+       Ht = Vt(37359),
+       Xt = Vt(40076),
+       Qt = Vt(40082),
+       lt = Vt(38899),
+       Et = Vt(40085),
+       ft = Vt(40270);
```

#### 54. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L853` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L853) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L853)

```diff
-     class qB extends vB.g {
+     class yt extends dt.f {
```

#### 55. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L855)

```diff
-         super(BB, vB.f.LoadFileError), this.name = "LoadFileError", vB.c._setPrototypeOf(this, qB.prototype), IB instanceof TB.d ? this.request = IB : this.file = IB
+         super(tt, dt.e.LoadFileError), this.name = "LoadFileError", dt.b._setPrototypeOf(this, yt.prototype), et instanceof Ot.e ? this.request = et : this.file = et
```

#### 56. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L858)

```diff
-     class yB extends vB.g {
+     class Nt extends dt.f {
```

#### 57. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L860)

```diff
-         super(BB, vB.f.RequestFileError), this.request = IB, this.name = "RequestFileError", vB.c._setPrototypeOf(this, yB.prototype)
+         super(tt, dt.e.RequestFileError), this.request = et, this.name = "RequestFileError", dt.b._setPrototypeOf(this, Nt.prototype)
```

#### 58. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L863)

```diff
-     class UB extends vB.g {
+     class Mt extends dt.f {
```

#### 59. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L865)

```diff
-         super(BB, vB.f.ReadFileError), this.file = IB, this.name = "ReadFileError", vB.c._setPrototypeOf(this, UB.prototype)
+         super(tt, dt.e.ReadFileError), this.file = et, this.name = "ReadFileError", dt.b._setPrototypeOf(this, Mt.prototype)
```

#### 60. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L897)

```diff
-           hB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cB.e.LastCreatedEngine;
+           Qt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ht.d.LastCreatedEngine;
```

#### 61. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L903)

```diff
-             const IB = BB instanceof ArrayBuffer ? BB : (0, NB.l)(BB);
+             const et = tt instanceof ArrayBuffer ? tt : (0, ft.o)(tt);
```

#### 62. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L920)

```diff
-             IB = BB instanceof ArrayBuffer ? BB : (0, NB.l)(BB), oB = URL.createObjectURL(new Blob([IB], {
+             et = tt instanceof ArrayBuffer ? tt : (0, ft.o)(tt), Dt = URL.createObjectURL(new Blob([et], {
```

#### 63. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L923)

```diff
-           } else oB = `data:${vB};base64,` + (0, kB.h)(BB);
+           } else Dt = `data:${dt};base64,` + (0, jt.j)(tt);
```

#### 64. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L928)

```diff
-             ZB(`Error while trying to load image: ${0===TB.indexOf("http")||TB.length<=128?TB:TB.slice(0,128)+"..."}`, IB)
+             Vt(`Error while trying to load image: ${0===Ot.indexOf("http")||Ot.length<=128?Ot:Ot.slice(0,128)+"..."}`, et)
```

#### 65. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L973)

```diff
-             if (BB.blockedURI !== gB.src || "JN" === BB.disposition) return;
+             if (tt.blockedURI !== wt.src || "iE" === tt.disposition) return;
```

#### 66. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L975-L976` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L975-L976) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L975-L976)

```diff
-             const IB = new Error(`CSP violation of policy ${BB.effectiveDirective} ${BB.blockedURI}. Current policy is ${BB.originalPolicy}`);
-             cB.e.UseFallbackTexture = !1, FB(IB), zB && gB.src && URL.revokeObjectURL(gB.src), gB.src = ""
+             const et = new Error(`CSP violation of policy ${tt.effectiveDirective} ${tt.blockedURI}. Current policy is ${tt.originalPolicy}`);
+             Ht.d.UseFallbackTexture = !1, Et(et), lt && wt.src && URL.revokeObjectURL(wt.src), wt.src = ""
```

#### 67. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L984)

```diff
-             UB || QB || !TB.d.IsCustomRequestAvailable ? gB.src = oB : wB(oB, ((BB, IB, ZB) => {
+             Mt || ut || !Ot.e.IsCustomRequestAvailable ? wt.src = Dt : ht(Dt, ((tt, et, Vt) => {
```

#### 68. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L986)

```diff
-                   type: !vB && ZB ? ZB : vB
+                   type: !dt && Vt ? Vt : dt
```

#### 69. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1023` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1023) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1023)

```diff
-             onCompleteObservable: new oB.b,
+             onCompleteObservable: new Dt.c,
```

#### 70. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1027)

```diff
-           JB(new UB(`Unable to read ${BB.name}`, BB))
+           qt(new Mt(`Unable to read ${tt.name}`, tt))
```

#### 71. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1049` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1049) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1049)

```diff
-             onCompleteObservable: new oB.b,
+             onCompleteObservable: new Dt.c,
```

#### 72. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1058)

```diff
-           return FB.b.SetImmediate((() => {
+           return Et.c.SetImmediate((() => {
```

#### 73. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1069)

```diff
-         null !== GB && (GB ?? (GB = cB.e.LastCreatedScene?.offlineProvider)), BB = WB.CleanUrl(BB), BB = WB.PreprocessUrl(BB);
+         null !== mt && (mt ?? (mt = Ht.d.LastCreatedScene?.offlineProvider)), tt = bt.CleanUrl(tt), tt = bt.PreprocessUrl(tt);
```

#### 74. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1073` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1073) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1073)

```diff
-             onCompleteObservable: new oB.b,
+             onCompleteObservable: new Dt.c,
```

#### 75. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1077` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1077) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1077)

```diff
-             let BB, oB = new TB.d,
+             let tt, Dt = new Ot.e,
```

#### 76. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1101` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1101) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1101)

```diff
-                       if (BB && oB.removeEventListener("readystatechange", BB), oB.status >= 200 && oB.status < 300 || 0 === oB.status && (!(0, JB.l)() || iB())) {
+                       if (tt && Dt.removeEventListener("readystatechange", tt), Dt.status >= 200 && Dt.status < 300 || 0 === Dt.status && (!(0, qt.j)() || St())) {
```

#### 77. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1115)

```diff
-                         if (-1 !== BB) return cB(), oB = new TB.d, void(GB = setTimeout((() => UB(zB + 1)), BB))
+                         if (-1 !== tt) return Ht(), Dt = new Ot.e, void(mt = setTimeout((() => Mt(lt + 1)), tt))
```

#### 78. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1152` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1152) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1152)

```diff
-           case "uH":
+           case "oR":
```

#### 79. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1186` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1186) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1186)

```diff
-       return (0, kB.b)(BB.split(",")[1])
+       return (0, jt.d)(tt.split(",")[1])
```

#### 80. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1188)

```diff
-     const MB = BB => (0, kB.d)(BB.split(",")[1]);
+     const Pt = tt => (0, jt.f)(tt.split(",")[1]);
```

#### 81. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1238)

```diff
-       RB || (RB = !0, PB(HB, MB, WB, pB, iB, wB, QB, sB, OB, dB), nB.c.loadFile = wB, nB.c.loadImage = QB, hB.n.loadFile = wB)
+       Ft || (Ft = !0, Lt(It, Pt, bt, ct, St, ht, ut, Kt, vt, Jt), Xt.c.loadFile = ht, Xt.c.loadImage = ut, Qt.m.loadFile = ht)
```

#### 82. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1241` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1241) · [Before (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1241)

```diff
-   40134: (BB, IB, ZB) => {
+   40272: (tt, et, Vt) => {
```

#### 83. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1245` → after: `L1244-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1244-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1244-L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1245)

```diff
-       h: () => GB
+       i: () => Dt,
+       k: () => mt
```

#### 84. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1300)

```diff
-   40124: (BB, IB, ZB) => {
+   40261: (tt, et, Vt) => {
```

#### 85. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1304` → after: `L1303-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1303-L1304) · [Before (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1304)

```diff
-       h: () => TB
+       f: () => qt,
+       j: () => Ot
```

#### 86. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1325)

```diff
-   39943: (BB, IB, ZB) => {
+   40085: (tt, et, Vt) => {
```

#### 87. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1327-L1328` → after: `L1327-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1327-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1327-L1328) · [Before (L1327-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1327-L1328)

```diff
-       b: () => JB,
-       f: () => GB
+       c: () => qt,
+       g: () => mt
```

#### 88. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1360` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1360) · [Before (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1360)

```diff
-   40118: (BB, IB, ZB) => {
+   40255: (tt, et, Vt) => {
```

#### 89. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1362)

```diff
-       d: () => TB
+       e: () => Ot
```

#### 90. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1438` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/258.js#L1438) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/258.js#L1438)

```diff
-               } else oB(new Error(`HTTP ${GB.status} loading '${GB.requestURL}': ${GB.statusText}`))
+               } else Dt(new Error(`HTTP ${mt.status} loading '${mt.requestURL}': ${mt.statusText}`))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   40154: (BB, IB, ZB) => {
+   40307: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L8-L9)

```diff
-     var TB = ZB(38718),
-       JB = ZB(37170);
+     var Ot = Vt(38899),
+       qt = Vt(37390);
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L24)

```diff
-   39959: (BB, IB, ZB) => {
+   40098: (tt, et, Vt) => {
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L26)

```diff
-       c: () => JB
+       b: () => qt
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L28)

```diff
-     var TB = ZB(39912);
+     var Ot = Vt(40068);
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L31)

```diff
-         return (0, TB.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+         return (0, Ot.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L35)

```diff
-   39993: (BB, IB, ZB) => {
+   40131: (tt, et, Vt) => {
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L51)

```diff
-       return IB - BB > BB - ZB ? ZB : IB
+       return et - tt > tt - Vt ? Vt : et
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L77-L81` → after: `L77-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L77-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L77-L81) · [Before (L77-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L77-L81)

```diff
-       d: () => vB,
-       f: () => kB,
-       i: () => TB,
-       m: () => JB,
-       p: () => oB
+       e: () => dt,
+       g: () => jt,
+       h: () => Ot,
+       l: () => qt,
+       n: () => Dt
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L84)

```diff
-   40152: (BB, IB, ZB) => {
+   40300: (tt, et, Vt) => {
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L87-L89` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L87-L89) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L87-L89)

```diff
-       f: () => CB,
-       j: () => yB,
-       k: () => UB
+       h: () => Ct,
+       l: () => Nt,
+       o: () => Mt
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L91-L103` → after: `L91-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L91-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L91-L103) · [Before (L91-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L91-L103)

```diff
-     var TB, JB = ZB(37153),
-       oB = ZB(39912),
-       GB = ZB(38718),
-       vB = ZB(38714),
-       kB = ZB(39959),
-       cB = ZB(39931),
-       nB = ZB(40118),
-       hB = ZB(37147),
-       zB = ZB(40110),
-       FB = ZB(39943),
-       NB = ZB(40154),
-       gB = ZB(37964),
-       qB = ZB(39993);
+     var Ot, qt = Vt(37367),
+       Dt = Vt(40068),
+       mt = Vt(38899),
+       dt = Vt(38897),
+       jt = Vt(40098),
+       Ht = Vt(40080),
+       Xt = Vt(40255),
+       Qt = Vt(37359),
+       lt = Vt(40249),
+       Et = Vt(40085),
+       ft = Vt(40307),
+       wt = Vt(38159),
+       yt = Vt(40131);
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L106)

```diff
-         return zB.d.BaseUrl
+         return lt.f.BaseUrl
```

#### 14. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L109)

```diff
-         zB.d.BaseUrl = BB
+         lt.f.BaseUrl = tt
```

#### 15. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L112)

```diff
-         return zB.d.CleanUrl
+         return lt.f.CleanUrl
```

#### 16. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L115)

```diff
-         zB.d.CleanUrl = BB
+         lt.f.CleanUrl = tt
```

#### 17. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L121)

```diff
-         zB.d.ScriptBaseUrl = BB
+         lt.f.ScriptBaseUrl = tt
```

#### 18. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L124)

```diff
-         return zB.d.ScriptBaseUrl
+         return lt.f.ScriptBaseUrl
```

#### 19. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L130)

```diff
-         zB.d.ScriptPreprocessUrl = BB
+         lt.f.ScriptPreprocessUrl = tt
```

#### 20. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L133)

```diff
-         return zB.d.ScriptPreprocessUrl
+         return lt.f.ScriptPreprocessUrl
```

#### 21. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L136)

```diff
-         return zB.d.DefaultRetryStrategy
+         return lt.f.DefaultRetryStrategy
```

#### 22. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L139)

```diff
-         zB.d.DefaultRetryStrategy = BB
+         lt.f.DefaultRetryStrategy = tt
```

#### 23. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L142)

```diff
-         return zB.d.CorsBehavior
+         return lt.f.CorsBehavior
```

#### 24. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L145)

```diff
-         zB.d.CorsBehavior = BB
+         lt.f.CorsBehavior = tt
```

#### 25. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L148)

```diff
-         return hB.e.UseFallbackTexture
+         return Qt.d.UseFallbackTexture
```

#### 26. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L151)

```diff
-         hB.e.UseFallbackTexture = BB
+         Qt.d.UseFallbackTexture = tt
```

#### 27. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L160)

```diff
-         return hB.e.FallbackTexture
+         return Qt.d.FallbackTexture
```

#### 28. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L163)

```diff
-         hB.e.FallbackTexture = BB
+         Qt.d.FallbackTexture = tt
```

#### 29. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L176)

```diff
-         FB.b.SetImmediate(BB)
+         Et.c.SetImmediate(tt)
```

#### 30. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L186)

```diff
-         return IB < 0 ? BB : BB.substring(IB + 1)
+         return et < 0 ? tt : tt.substring(et + 1)
```

#### 31. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L191)

```diff
-         return ZB < 0 ? IB ? BB : "" : BB.substring(0, ZB + 1)
+         return Vt < 0 ? et ? tt : "" : tt.substring(0, Vt + 1)
```

#### 32. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L206)

```diff
-         return !0 === IB || void 0 !== BB && null != BB ? Array.isArray(BB) ? BB : [BB] : null
+         return !0 === et || void 0 !== tt && null != tt ? Array.isArray(tt) ? tt : [tt] : null
```

#### 33. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L209)

```diff
-         return (0, oB.l)() && !window.PointerEvent ? "mouse" : "pointer"
+         return (0, Dt.j)() && !window.PointerEvent ? "mouse" : "pointer"
```

#### 34. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L212)

```diff
-         (0, zB.s)(BB, IB)
+         (0, lt.z)(tt, et)
```

#### 35. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L218)

```diff
-         return zB.d.PreprocessUrl
+         return lt.f.PreprocessUrl
```

#### 36. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L221)

```diff
-         zB.d.PreprocessUrl = BB
+         lt.f.PreprocessUrl = tt
```

#### 37. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L224)

```diff
-         return (0, zB.l)(BB, IB, ZB, TB, JB, oB)
+         return (0, lt.p)(tt, et, Vt, Ot, qt, Dt)
```

#### 38. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L227)

```diff
-         return (0, zB.j)(BB, IB, ZB, TB, JB, oB)
+         return (0, lt.o)(tt, et, Vt, Ot, qt, Dt)
```

#### 39. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L232)

```diff
-           (0, zB.j)(BB, (BB => {
+           (0, lt.o)(tt, (tt => {
```

#### 40. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L254)

```diff
-           const IB = `${TB._DefaultCdnUrl}/v${TB._CdnVersion}`;
+           const et = `${Ot._DefaultCdnUrl}/v${Ot._CdnVersion}`;
```

#### 41. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L288)

```diff
-             ZB?.(`Unable to load script '${BB}' in worker`, kB)
+             Vt?.(`Unable to load script '${tt}' in worker`, jt)
```

#### 42. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L292)

```diff
-         if (!(0, oB.l)()) return void ZB?.(`Cannot load script '${BB}' outside of a window or a worker`);
+         if (!(0, Dt.j)()) return void Vt?.(`Cannot load script '${tt}' outside of a window or a worker`);
```

#### 43. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L298)

```diff
-           ZB && ZB(`Unable to load script '${BB}'`, IB)
+           Vt && Vt(`Unable to load script '${tt}'`, et)
```

#### 44. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L313` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L313) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L313)

```diff
-             onCompleteObservable: new JB.b,
+             onCompleteObservable: new qt.c,
```

#### 45. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L323)

```diff
-         return (0, zB.m)(BB, IB, ZB, TB, JB)
+         return (0, lt.r)(tt, et, Vt, Ot, qt)
```

#### 46. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L334)

```diff
-         vB.b.DeepCopy(BB, IB, ZB, TB)
+         dt.d.DeepCopy(tt, et, Vt, Ot)
```

#### 47. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L360)

```diff
-         throw (0, cB.m)("DumpTools")
+         throw (0, Ht.e)("DumpTools")
```

#### 48. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L363)

```diff
-         throw (0, cB.m)("DumpTools")
+         throw (0, Ht.e)("DumpTools")
```

#### 49. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L366)

```diff
-         throw (0, cB.m)("DumpTools")
+         throw (0, Ht.e)("DumpTools")
```

#### 50. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L441)

```diff
-         throw (0, cB.m)("ScreenshotTools")
+         throw (0, Ht.e)("ScreenshotTools")
```

#### 51. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L444)

```diff
-         throw (0, cB.m)("ScreenshotTools")
+         throw (0, Ht.e)("ScreenshotTools")
```

#### 52. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L447)

```diff
-         throw (0, cB.m)("ScreenshotTools")
+         throw (0, Ht.e)("ScreenshotTools")
```

#### 53. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L450)

```diff
-         throw (0, cB.m)("ScreenshotTools")
+         throw (0, Ht.e)("ScreenshotTools")
```

#### 54. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L453)

```diff
-         return (0, gB.d)()
+         return (0, wt.b)()
```

#### 55. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L456)

```diff
-         return (0, zB.g)(BB)
+         return (0, lt.k)(tt)
```

#### 56. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L459)

```diff
-         return (0, zB.c)(BB)
+         return (0, lt.b)(tt)
```

#### 57. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L490)

```diff
-           if (!(0, oB.l)()) return;
+           if (!(0, Dt.j)()) return;
```

#### 58. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L508)

```diff
-           if (TB._NativePerformanceCounterHandles.has(BB)) TB.Warn(`Performance counter with name ${BB} is already started.`);
+           if (Ot._NativePerformanceCounterHandles.has(tt)) Ot.Warn(`Performance counter with name ${tt} is already started.`);
```

#### 59. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L517)

```diff
-           IB ? (_native.endPerformanceCounter(IB), TB._NativePerformanceCounterHandles.delete(BB)) : TB.Warn(`Performance counter with name ${BB} was not started.`)
+           et ? (_native.endPerformanceCounter(et), Ot._NativePerformanceCounterHandles.delete(tt)) : Ot.Warn(`Performance counter with name ${tt} was not started.`)
```

#### 60. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L521)

```diff
-         return kB.c.Now
+         return jt.b.Now
```

#### 61. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L529)

```diff
-             ZB = (IB ? BB : Object.getPrototypeOf(BB)).constructor.__bjsclassName__
+             Vt = (et ? tt : Object.getPrototypeOf(tt)).constructor.__bjsclassName__
```

#### 62. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L547)

```diff
-             const JB = IB ? BB : Object.getPrototypeOf(BB);
+             const qt = et ? tt : Object.getPrototypeOf(tt);
```

#### 63. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L552)

```diff
-         return ZB ? (null != TB ? TB + "." : "") + ZB : null
+         return Vt ? (null != Ot ? Ot + "." : "") + Vt : null
```

#### 64. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L568)

```diff
-         ZB.__bjsclassName__ = BB, ZB.__bjsmoduleName__ = null != IB ? IB : null
+         Vt.__bjsclassName__ = tt, Vt.__bjsmoduleName__ = null != et ? et : null
```

#### 65. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L571)

```diff
-     TB = yB, yB.AssetBaseUrl = "", yB.UseCustomRequestHeaders = !1, yB.CustomRequestHeaders = nB.d.CustomRequestHeaders, yB.GetDOMTextContent = oB.c, yB._DefaultCdnUrl = "https://cdn.babylonjs.com", yB._CdnVersion = "9.28.0", yB._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
+     Ot = Nt, Nt.AssetBaseUrl = "", Nt.UseCustomRequestHeaders = !1, Nt.CustomRequestHeaders = Xt.e.CustomRequestHeaders, Nt.GetDOMTextContent = Dt.c, Nt._DefaultCdnUrl = "https://cdn.babylonjs.com", Nt._CdnVersion = "9.28.0", Nt._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L576)

```diff
-     }, yB.NoneLogLevel = GB.d.NoneLogLevel, yB.MessageLogLevel = GB.d.MessageLogLevel, yB.WarningLogLevel = GB.d.WarningLogLevel, yB.ErrorLogLevel = GB.d.ErrorLogLevel, yB.AllLogLevel = GB.d.AllLogLevel, yB.IsWindowObjectExist = oB.l, yB.PerformanceNoneLogLevel = 0, yB.Performanc … [truncated]
+     }, Nt.NoneLogLevel = mt.d.NoneLogLevel, Nt.MessageLogLevel = mt.d.MessageLogLevel, Nt.WarningLogLevel = mt.d.WarningLogLevel, Nt.ErrorLogLevel = mt.d.ErrorLogLevel, Nt.AllLogLevel = mt.d.AllLogLevel, Nt.IsWindowObjectExist = Dt.j, Nt.PerformanceNoneLogLevel = 0, Nt.Performanc … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/259.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/259.js#L612)

```diff
-       dB || (dB = !0, yB.Mix = qB.m, yB.IsExponentOfTwo = qB.i, hB.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+       Jt || (Jt = !0, Nt.Mix = yt.l, Nt.IsExponentOfTwo = yt.h, Qt.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L4)

```diff
-   40480: (BB, IB, ZB) => {
+   40628: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L6)

```diff
-       e: () => TB
+       b: () => Ot
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L10)

```diff
-   40052: (BB, IB, ZB) => {
+   40202: (tt, et, Vt) => {
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L12)

```diff
-       e: () => NB
+       b: () => ft
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L14-L20` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L14-L20) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L14-L20)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(37153),
-       GB = ZB(37120),
-       vB = ZB(37147),
-       kB = ZB(37964),
-       cB = ZB(40077);
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(37367),
+       mt = Vt(37336),
+       dt = Vt(37359),
+       jt = Vt(38159),
+       Ht = Vt(40222);
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L62)

```diff
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = cB.b.Zero(), this._cachedBaseSize = cB.b.Zero(), this._initialSamplingMode = 2, this._texture = nB. … [truncated]
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Ht.e.Zero(), this._cachedBaseSize = Ht.e.Zero(), this._initialSamplingMode = 2, this._texture = Xt. … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L95-L96)

```diff
-     var hB, zB = ZB(40085),
-       FB = ZB(39931);
+     var Qt, lt = Vt(40230),
+       Et = Vt(40080);
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L172)

```diff
-           this._texture ? this._texture.isCube = BB : this._isCube = BB
+           this._texture ? this._texture.isCube = tt : this._isCube = tt
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L197)

```diff
-           this.JR()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))
+           this.vI()?.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this)))
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L203)

```diff
-           BB !== this.isRGBD && (this._texture && (this._texture._isRGBD = BB), this.JR()?.markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this))))
+           tt !== this.isRGBD && (this._texture && (this._texture._isRGBD = tt), this.vI()?.markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this))))
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L233)

```diff
-           return this._uid || (this._uid = (0, kB.d)()), this._uid
+           return this._uid || (this._uid = (0, jt.b)()), this._uid
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L242)

```diff
-           this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
+           this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L255)

```diff
-           super(null), this.uniqueId = ((0, TB.l)(this, rB), (0, TB.l)(this, mB, void 0)), this.name = ((0, TB.l)(this, XB), (0, TB.l)(this, LB, void 0)), this.displayName = ((0, TB.l)(this, eB), (0, TB.l)(this, uB, void 0)), this.metadata = ((0, TB.l)(this, fB), (0, TB.l)(this,  … [truncated]
+           super(null), this.uniqueId = ((0, Ot.m)(this, kt), (0, Ot.m)(this, Gt, void 0)), this.name = ((0, Ot.m)(this, zt), (0, Ot.m)(this, ot, void 0)), this.displayName = ((0, Ot.m)(this, rt), (0, Ot.m)(this, Ut, void 0)), this.metadata = ((0, Ot.m)(this, At), (0, Ot.m)(this,  … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L264)

```diff
-           return GB.b.IdentityReadOnly
+           return mt.c.IdentityReadOnly
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L267)

```diff
-           return GB.b.IdentityReadOnly
+           return mt.c.IdentityReadOnly
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L301)

```diff
-           const BB = this.JR();
+           const tt = this.vI();
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L364)

```diff
-           this.oR.notifyObservers(this), this.oR.clear(), this.metadata = null, super.dispose()
+           this.ZI.notifyObservers(this), this.ZI.clear(), this.metadata = null, super.dispose()
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L369-L370)

```diff
-           const IB = zB.b.Serialize(this);
-           return zB.b.AppendSerializedAnimations(this, IB), IB
+           const et = lt.d.Serialize(this);
+           return lt.d.AppendSerializedAnimations(this, et), et
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L391)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], cB = [(0, JB.C)()], hB = [(0, JB.C)()], FB = [(0, JB.C)("hasAlpha")], NB = [(0, JB.C)("getAlphaFromRGB")], gB = [(0, JB.C)()], qB = [(0, JB.C)("coordinatesIndex")], yB = [(0, JB.C)()], UB = [(0, JB.C)("coordinatesMode")], WB = [(0,  … [truncated]
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], Ht = [(0, qt.P)()], Qt = [(0, qt.P)()], Et = [(0, qt.P)("hasAlpha")], ft = [(0, qt.P)("getAlphaFromRGB")], wt = [(0, qt.P)()], yt = [(0, qt.P)("coordinatesIndex")], Nt = [(0, qt.P)()], Mt = [(0, qt.P)("coordinatesMode")], bt = [(0,  … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L401)

```diff
-         }, null, rB), (0, TB.j)(BB, null, dB, {
+         }, null, kt), (0, Ot.l)(tt, null, Jt, {
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L411)

```diff
-         }, null, rB), (0, TB.j)(BB, null, sB, {
+         }, null, kt), (0, Ot.l)(tt, null, Kt, {
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L421)

```diff
-         }, null, rB), (0, TB.j)(BB, null, wB, {
+         }, null, kt), (0, Ot.l)(tt, null, ht, {
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L431)

```diff
-         }, null, rB), (0, TB.j)(BB, null, OB, {
+         }, null, kt), (0, Ot.l)(tt, null, vt, {
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L441)

```diff
-         }, null, rB), (0, TB.j)(BB, null, YB, {
+         }, null, kt), (0, Ot.l)(tt, null, Wt, {
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L451)

```diff
-         }, null, rB), (0, TB.j)(BB, null, aB, {
+         }, null, kt), (0, Ot.l)(tt, null, Rt, {
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L461)

```diff
-         }, null, rB), (0, TB.j)(BB, null, HB, {
+         }, null, kt), (0, Ot.l)(tt, null, It, {
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L471)

```diff
-         }, null, rB), (0, TB.j)(BB, null, MB, {
+         }, null, kt), (0, Ot.l)(tt, null, Pt, {
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L481)

```diff
-         }, null, rB), (0, TB.j)(BB, null, jB, {
+         }, null, kt), (0, Ot.l)(tt, null, Zt, {
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L491)

```diff
-         }, null, rB), (0, TB.j)(null, null, IB, {
+         }, null, kt), (0, Ot.l)(null, null, et, {
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L504)

```diff
-         }, mB, XB), (0, TB.j)(null, null, ZB, {
+         }, Gt, zt), (0, Ot.l)(null, null, Vt, {
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L517)

```diff
-         }, LB, eB), (0, TB.j)(null, null, cB, {
+         }, ot, rt), (0, Ot.l)(null, null, Ht, {
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L530)

```diff
-         }, uB, fB), (0, TB.j)(null, null, hB, {
+         }, Ut, At), (0, Ot.l)(null, null, Qt, {
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L543)

```diff
-         }, lB, AB), (0, TB.j)(null, null, FB, {
+         }, it, Yt), (0, Ot.l)(null, null, Et, {
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L556)

```diff
-         }, tB, bB), (0, TB.j)(null, null, NB, {
+         }, Bt, pt), (0, Ot.l)(null, null, ft, {
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L569)

```diff
-         }, xB, EB), (0, TB.j)(null, null, gB, {
+         }, xt, Tt), (0, Ot.l)(null, null, wt, {
```

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L582)

```diff
-         }, DB, KB), (0, TB.j)(null, null, qB, {
+         }, gt, st), (0, Ot.l)(null, null, yt, {
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L595)

```diff
-         }, VB, SB), (0, TB.j)(null, null, yB, {
+         }, nt, te), (0, Ot.l)(null, null, Nt, {
```

#### 38. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L608)

```diff
-         }, BI, II), (0, TB.j)(null, null, UB, {
+         }, ee, Ve), (0, Ot.l)(null, null, Mt, {
```

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L621)

```diff
-         }, ZI, TI), (0, TB.j)(null, null, CB, {
+         }, Oe, qe), (0, Ot.l)(null, null, Ct, {
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L634)

```diff
-         }, JI, oI), (0, TB.j)(null, null, QB, {
+         }, De, me), (0, Ot.l)(null, null, ut, {
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L647)

```diff
-         }, GI, vI), (0, TB.j)(null, null, iB, {
+         }, de, je), (0, Ot.l)(null, null, St, {
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L660)

```diff
-         }, kI, cI), (0, TB.j)(null, null, pB, {
+         }, He, Xe), (0, Ot.l)(null, null, ct, {
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L673)

```diff
-         }, nI, hI), (0, TB.j)(null, null, PB, {
+         }, Qe, le), (0, Ot.l)(null, null, Lt, {
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L694)

```diff
-     (hB = NB.prototype).forceSphericalPolynomialsRecompute ?? (hB.forceSphericalPolynomialsRecompute = (0, FB.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(NB.prototype, "sphericalPolynomial") || Object.defineProperty(NB.prototype, "sph … [truncated]
+     (Qt = ft.prototype).forceSphericalPolynomialsRecompute ?? (Qt.forceSphericalPolynomialsRecompute = (0, Et.d)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(ft.prototype, "sphericalPolynomial") || Object.defineProperty(ft.prototype, "sph … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L696)

```diff
-   40521: (BB, IB, ZB) => {
+   40661: (tt, et, Vt) => {
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L698-L699` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L698-L699) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L698-L699)

```diff
-       c: () => CB,
-       e: () => WB
+       d: () => Ct,
+       f: () => bt
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L701-L711` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L701-L711) · [Before (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L701-L711)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(37153),
-       GB = ZB(37120),
-       vB = ZB(40052),
-       kB = ZB(37170),
-       cB = ZB(39931),
-       nB = ZB(39943),
-       hB = ZB(40154),
-       zB = ZB(37824),
-       FB = ZB(40124);
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(37367),
+       mt = Vt(37336),
+       dt = Vt(40202),
+       jt = Vt(37390),
+       Ht = Vt(40080),
+       Xt = Vt(40085),
+       Qt = Vt(40307),
+       lt = Vt(38016),
+       Et = Vt(40261);
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L756-L757` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L756-L757) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L756-L757)

```diff
-     var yB = ZB(40480),
-       UB = ZB(40085);
+     var Nt = Vt(40628),
+       Mt = Vt(40230);
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L760)

```diff
-         let IB, ZB, NB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB = vB.e,
+         let et, Vt, ft, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt = dt.b,
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L789` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L789) · [Before (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L789)

```diff
-             throw (0, cB.m)("VideoTexture")
+             throw (0, Ht.e)("VideoTexture")
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L817)

```diff
-             super(ZB), this.url = ((0, TB.l)(this, HB), (0, TB.l)(this, MB, null)), this.uOffset = ((0, TB.l)(this, jB), (0, TB.l)(this, PB, 0)), this.vOffset = ((0, TB.l)(this, RB), (0, TB.l)(this, rB, 0)), this.uScale = ((0, TB.l)(this, mB), (0, TB.l)(this, XB, 1)), this.vScale … [truncated]
+             super(Vt), this.url = ((0, Ot.m)(this, It), (0, Ot.m)(this, Pt, null)), this.uOffset = ((0, Ot.m)(this, Zt), (0, Ot.m)(this, Lt, 0)), this.vOffset = ((0, Ot.m)(this, Ft), (0, Ot.m)(this, kt, 0)), this.uScale = ((0, Ot.m)(this, Gt), (0, Ot.m)(this, zt, 1)), this.vScale … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L821-L822` → after: `L821-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L821-L822) · [Before (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L821-L822)

```diff
-             "object" === typeof JB && null !== JB ? (vB = JB.noMipmap ?? !1, GB = JB.invertY ?? !yB.e, kB = JB.samplingMode ?? BB.TRILINEAR_SAMPLINGMODE, cB = JB.onLoad ?? null, hB = JB.onError ?? null, zB = JB.buffer ?? null, FB = JB.deleteBuffer ?? !1, NB = JB.format, gB = JB.m … [truncated]
-             const sB = this.JR(),
+             "object" === typeof qt && null !== qt ? (dt = qt.noMipmap ?? !1, mt = qt.invertY ?? !Nt.b, jt = qt.samplingMode ?? tt.TRILINEAR_SAMPLINGMODE, Ht = qt.onLoad ?? null, Qt = qt.onError ?? null, lt = qt.buffer ?? null, Et = qt.deleteBuffer ?? !1, ft = qt.format, wt = qt.m … [truncated]
+             const Kt = this.vI(),
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L837)

```diff
-               if (this._texture.isReady) nB.b.SetImmediate((() => OB()));
+               if (this._texture.isReady) Xt.c.SetImmediate((() => vt()));
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L858)

```diff
-             this.url && (this.releaseInternalTexture(), this.JR().markAllMaterialsAsDirty(1, (BB => BB.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = BB), this.url = BB, this._buffer = IB, this._forcedExtension = TB, this.delayLoadState = 4;
+             this.url && (this.releaseInternalTexture(), this.vI().markAllMaterialsAsDirty(1, (tt => tt.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = tt), this.url = tt, this._buffer = et, this._forcedExtension = Ot, this.delayLoadState = 4;
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L866` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L866) · [Before (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L866)

```diff
-             const BB = this.JR();
+             const tt = this.vI();
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L869)

```diff
-             !IB && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (IB = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(IB, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+             !et && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (et = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(et, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L872)

```diff
-             BB *= this._cachedUScale, IB *= this._cachedVScale, BB -= this.uRotationCenter * this._cachedUScale, IB -= this.vRotationCenter * this._cachedVScale, ZB -= this.wRotationCenter, GB.s.TransformCoordinatesFromFloatsToRef(BB, IB, ZB, this._rowGenerationMatrix, TB), TB.x  … [truncated]
+             tt *= this._cachedUScale, et *= this._cachedVScale, tt -= this.uRotationCenter * this._cachedUScale, et -= this.vRotationCenter * this._cachedVScale, Vt -= this.wRotationCenter, mt.n.TransformCoordinatesFromFloatsToRef(tt, et, Vt, this._rowGenerationMatrix, Ot), Ot.x  … [truncated]
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L877-L878` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L877-L878) · [Before (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L877-L878)

```diff
-             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * BB, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
-             const IB = this.JR();
+             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * tt, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
+             const et = this.vI();
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L884)

```diff
-             const IB = this.JR();
+             const et = this.vI();
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L890` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L890) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L890)

```diff
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = GB.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = GB.b.Zero());
+             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = mt.c.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = mt.c.Zero());
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L894)

```diff
-                 GB.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
+                 mt.c.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L897)

```diff
-                 GB.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
+                 mt.c.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L903)

```diff
-                 GB.b.IdentityToRef(this._cachedReflectionTextureMatrix)
+                 mt.c.IdentityToRef(this._cachedReflectionTextureMatrix)
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L922` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L922) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L922)

```diff
-             return UB.b.Clone((() => new BB(this._texture ? this._texture.url : null, this.JR(), IB)), this)
+             return Mt.d.Clone((() => new tt(this._texture ? this._texture.url : null, this.vI(), et)), this)
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L933)

```diff
-               ZB.base64String = `data:${BB};base64,${(0,FB.h)(this._buffer)}`
+               Vt.base64String = `data:${tt};base64,${(0,Et.j)(this._buffer)}`
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L953` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L953) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L953)

```diff
-               const BB = ZB.PN().getLoadedTexturesCache();
+               const tt = Vt.Jf().getLoadedTexturesCache();
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L973)

```diff
-             return UB.b.Parse((() => {
+             return Mt.d.Parse((() => {
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L977)

```diff
-                 return TB._waitingRenderList = IB.renderList, TB.mirrorPlane = zB.c.FromArray(IB.mirrorPlane), GB(TB), TB
+                 return Ot._waitingRenderList = et.renderList, Ot.mirrorPlane = lt.b.FromArray(et.mirrorPlane), mt(Ot), Ot
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1048` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1048) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1048)

```diff
-           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], NB = [(0, JB.C)()], WB = [(0, JB.C)()], dB = [(0, JB.C)()], CB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.C)()], wB = [(0, JB.C)()], OB = [(0, JB.C)()], YB = [(0, JB.C)()], iB = [(0, JB.C)()], pB = [(0, JB.C)()], (0, TB.j)( … [truncated]
+           et = [(0, qt.P)()], Vt = [(0, qt.P)()], ft = [(0, qt.P)()], bt = [(0, qt.P)()], Jt = [(0, qt.P)()], Ct = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.P)()], ht = [(0, qt.P)()], vt = [(0, qt.P)()], Wt = [(0, qt.P)()], St = [(0, qt.P)()], ct = [(0, qt.P)()], (0, Ot.l)( … [truncated]
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1058)

```diff
-           }, null, HB), (0, TB.j)(null, null, IB, {
+           }, null, It), (0, Ot.l)(null, null, et, {
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1071)

```diff
-           }, MB, jB), (0, TB.j)(null, null, ZB, {
+           }, Pt, Zt), (0, Ot.l)(null, null, Vt, {
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1084)

```diff
-           }, PB, RB), (0, TB.j)(null, null, NB, {
+           }, Lt, Ft), (0, Ot.l)(null, null, ft, {
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1097)

```diff
-           }, rB, mB), (0, TB.j)(null, null, WB, {
+           }, kt, Gt), (0, Ot.l)(null, null, bt, {
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1110)

```diff
-           }, XB, LB), (0, TB.j)(null, null, dB, {
+           }, zt, ot), (0, Ot.l)(null, null, Jt, {
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1123` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1123) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1123)

```diff
-           }, eB, uB), (0, TB.j)(null, null, CB, {
+           }, rt, Ut), (0, Ot.l)(null, null, Ct, {
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1136)

```diff
-           }, fB, lB), (0, TB.j)(null, null, QB, {
+           }, At, it), (0, Ot.l)(null, null, ut, {
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1149` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1149) · [Before (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1149)

```diff
-           }, AB, tB), (0, TB.j)(null, null, sB, {
+           }, Yt, Bt), (0, Ot.l)(null, null, Kt, {
```

#### 78. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1162` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1162) · [Before (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1162)

```diff
-           }, bB, xB), (0, TB.j)(null, null, wB, {
+           }, pt, xt), (0, Ot.l)(null, null, ht, {
```

#### 79. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1175` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1175) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1175)

```diff
-           }, EB, DB), (0, TB.j)(null, null, OB, {
+           }, Tt, gt), (0, Ot.l)(null, null, vt, {
```

#### 80. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1188)

```diff
-           }, KB, VB), (0, TB.j)(null, null, YB, {
+           }, st, nt), (0, Ot.l)(null, null, Wt, {
```

#### 81. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1201` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1201) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1201)

```diff
-           }, SB, BI), (0, TB.j)(null, null, iB, {
+           }, te, ee), (0, Ot.l)(null, null, St, {
```

#### 82. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1220-L1221` → after: `L1220-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1220-L1221) · [Before (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1220-L1221)

```diff
-         })(), BB.SerializeBuffers = !0, BB.ForceSerializeBuffers = !1, BB.OnTextureLoadErrorObservable = new oB.b, BB._SerializeInternalTextureUniqueId = !1, BB._CubeTextureParser = (BB, IB, ZB) => {
-           throw (0, cB.m)("CubeTexture")
+         })(), tt.SerializeBuffers = !0, tt.ForceSerializeBuffers = !1, tt.OnTextureLoadErrorObservable = new Dt.c, tt._SerializeInternalTextureUniqueId = !1, tt._CubeTextureParser = (tt, et, Vt) => {
+           throw (0, Ht.e)("CubeTexture")
```

#### 83. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1223` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1223) · [Before (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1223)

```diff
-           throw (0, cB.m)("MirrorTexture")
+           throw (0, Ht.e)("MirrorTexture")
```

#### 84. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1225)

```diff
-           throw (0, cB.m)("RenderTargetTexture")
+           throw (0, Ht.e)("RenderTargetTexture")
```

#### 85. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1231)

```diff
-       dB || (dB = !0, (0, kB.i)("BABYLON.Texture", WB), UB.b._TextureParser = WB.Parse)
+       Jt || (Jt = !0, (0, jt.i)("BABYLON.Texture", bt), Mt.d._TextureParser = bt.Parse)
```

#### 86. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1234)

```diff
-   40077: (BB, IB, ZB) => {
+   40222: (tt, et, Vt) => {
```

#### 87. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1236)

```diff
-       b: () => TB
+       e: () => Ot
```

#### 88. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1255` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1255) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1255)

```diff
-       cBB(BB, IB) {
+       W9(tt, et) {
```

#### 89. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1259` → after: `L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/260.js#L1259) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/260.js#L1259)

```diff
-         return this.cBB(BB, IB)
+         return this.W9(tt, et)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40291: (BB, IB, ZB) => {
+   40431: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L6-L7)

```diff
-       c: () => GB,
-       f: () => vB
+       e: () => mt,
+       g: () => dt
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L9-L11)

```diff
-     var TB = ZB(38718),
-       JB = ZB(40085),
-       oB = ZB(40269),
+     var Ot = Vt(38899),
+       qt = Vt(40230),
+       Dt = Vt(40409),
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L68)

```diff
-             TB = JB.b.Serialize(BB);
+             Ot = qt.d.Serialize(tt);
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L81)

```diff
-                 oB = JB.b.Parse((() => new ZB), TB, null);
+                 Dt = qt.d.Parse((() => new Vt), Ot, null);
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L89)

```diff
-               const TB = JB.b.Parse((() => new IB), BB, null);
+               const Ot = qt.d.Parse((() => new et), tt, null);
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L96)

```diff
-   41162: (BB, IB, ZB) => {
+   41339: (tt, et, Vt) => {
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L98)

```diff
-       b: () => WB
+       e: () => bt
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L100-L107` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L100-L101) · [Before (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L100-L107)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(39943),
-       GB = ZB(37120),
-       vB = ZB(40052),
-       kB = ZB(40521),
-       cB = ZB(37170),
-       nB = ZB(37153),
+     var Ot = Vt(40211),
+       qt = Vt(40213),
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L109-L114` → after: `L103-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L103-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L103-L114) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L109-L114)

```diff
-       zB = ZB(39885),
-       FB = ZB(38718),
-       NB = ZB(40110),
-       gB = ZB(37964),
-       qB = ZB(40141);
-     var yB = ZB(39951);
+       mt = Vt(37336),
+       dt = Vt(40202),
+       jt = Vt(40661),
+       Ht = Vt(37390),
+       Xt = Vt(37367),
+       Qt = Vt(40230),
+       lt = Vt(40037),
+       Et = Vt(38899),
+       ft = Vt(40249),
+       wt = Vt(38159),
+       yt = Vt(40281);
+     var Nt = Vt(40092);
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L118)

```diff
-         let IB, ZB, cB, WB, dB, CB, QB, sB, wB, OB = vB.e,
+         let et, Vt, Ht, bt, Jt, Ct, ut, Kt, ht, vt = dt.b,
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L138)

```diff
-             const IB = this.JR();
+             const et = this.vI();
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L145)

```diff
-             this._rotationY = BB, this.setReflectionTextureMatrix(GB.b.RotationY(this._rotationY))
+             this._rotationY = tt, this.setReflectionTextureMatrix(mt.c.RotationY(this._rotationY))
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L170)

```diff
-             super(IB), this._delayedOnLoad = (0, TB.l)(this, YB), this.onLoadObservable = new nB.b, this.url = (0, TB.l)(this, iB, void 0), this.boundingBoxPosition = ((0, TB.l)(this, pB), (0, TB.l)(this, aB, GB.s.Zero())), this._boundingBoxSize = (0, TB.l)(this, HB), this._rotat … [truncated]
+             super(et), this._delayedOnLoad = (0, Ot.m)(this, Wt), this.onLoadObservable = new Xt.c, this.url = (0, Ot.m)(this, St, void 0), this.boundingBoxPosition = ((0, Ot.m)(this, ct), (0, Ot.m)(this, Rt, mt.n.Zero())), this._boundingBoxSize = (0, Ot.m)(this, It), this._rotat … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L177)

```diff
-             }, yB.c.prototype._cascadeLoadFiles = function(BB, IB, ZB) {
+             }, Nt.d.prototype._cascadeLoadFiles = function(tt, et, Vt) {
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L182)

```diff
-             }, yB.c.prototype._cascadeLoadImgs = function(BB, IB, ZB, TB) {
+             }, Nt.d.prototype._cascadeLoadImgs = function(tt, et, Vt, Ot) {
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L188)

```diff
-             }, yB.c.prototype._partialLoadImg = function(BB, IB, ZB, TB, JB, oB) {
+             }, Nt.d.prototype._partialLoadImg = function(tt, et, Vt, Ot, qt, Dt) {
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L191-L192` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L191-L192) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L191-L192)

```diff
-               const kB = (0, gB.d)();
-               (0, NB.l)(BB, (BB => {
+               const jt = (0, wt.b)();
+               (0, ft.p)(tt, (tt => {
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L197)

```diff
-             }, yB.c.prototype.createCubeTextureBase = function(BB, IB, ZB, TB) {
+             }, Nt.d.prototype.createCubeTextureBase = function(tt, et, Vt, Ot) {
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L210)

```diff
-               const WB = hB || new zB.b(this, 7);
+               const bt = Qt || new lt.d(this, 7);
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L219)

```diff
-                 QB = (0, qB.b)(CB),
+                 ut = (0, yt.d)(Ct),
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L224)

```diff
-                   BB === dB ? oB && sB(oB.status + " " + oB.statusText, hB) : (FB.d.Warn(`Failed to load ${BB}, falling back to the ${dB}`), this.createCubeTextureBase(dB, IB, ZB, !!TB, JB, sB, GB, vB, kB, cB, nB, WB, NB, gB, yB, UB))
+                   tt === Jt ? Dt && Kt(Dt.status + " " + Dt.statusText, Qt) : (Et.d.Warn(`Failed to load ${tt}, falling back to the ${Jt}`), this.createCubeTextureBase(Jt, et, Vt, !!Ot, qt, Kt, mt, dt, jt, Ht, Xt, bt, ft, wt, Nt, Mt))
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L241)

```diff
-             }), this.name = BB, this.url = BB, this._noMipmap = oB, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = GB.b.Identity(), this.coordinatesMode = kB.e.CUBIC_MODE;
+             }), this.name = tt, this.url = tt, this._noMipmap = Dt, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = mt.c.Identity(), this.coordinatesMode = jt.f.CUBIC_MODE;
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L243)

```diff
-             null === JB || Array.isArray(JB) ? (this._noMipmap = oB, this._format = WB, this._createPolynomials = QB, ZB = JB, this._loaderOptions = OB, this._useSRGBBuffer = fB, this._lodScale = sB, this._lodOffset = wB) : (ZB = JB.extensions ?? null, this._noMipmap = JB.noMipma … [truncated]
+             null === qt || Array.isArray(qt) ? (this._noMipmap = Dt, this._format = bt, this._createPolynomials = ut, Vt = qt, this._loaderOptions = vt, this._useSRGBBuffer = At, this._lodScale = Kt, this._lodOffset = ht) : (Vt = qt.extensions ?? null, this._noMipmap = qt.noMipma … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L278-L282` → after: `L278-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L278-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L278-L282) · [Before (L278-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L278-L282)

```diff
-             if (BB.isIdentity() !== this._textureMatrix.isIdentity() && this.JR()?.markAllMaterialsAsDirty(1, (BB => -1 !== BB.getActiveTextures().indexOf(this))), this._textureMatrix = BB, !this.JR()?.useRightHandedSystem) return;
-             const IB = GB.m.rN[0],
-               ZB = GB.m.Quaternion[0],
-               TB = GB.m.rN[1];
-             this._textureMatrix.decompose(IB, ZB, TB), ZB.z *= -1, ZB.w *= -1, GB.b.ComposeToRef(IB, ZB, TB, this._textureMatrixRefraction)
+             if (tt.isIdentity() !== this._textureMatrix.isIdentity() && this.vI()?.markAllMaterialsAsDirty(1, (tt => -1 !== tt.getActiveTextures().indexOf(this))), this._textureMatrix = tt, !this.vI()?.useRightHandedSystem) return;
+             const et = mt.k.uf[0],
+               Vt = mt.k.Quaternion[0],
+               Ot = mt.k.uf[1];
+             this._textureMatrix.decompose(et, Vt, Ot), Vt.z *= -1, Vt.w *= -1, mt.c.ComposeToRef(et, Vt, Ot, this._textureMatrixRefraction)
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L285)

```diff
-             return this.JR()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
+             return this.vI()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L290)

```diff
-             const ZB = this.JR(),
+             const Vt = this.vI(),
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L294)

```diff
-                 this.onLoadObservable.notifyObservers(this), TB && (TB.dispose(), this.JR()?.markAllMaterialsAsDirty(1)), BB && BB()
+                 this.onLoadObservable.notifyObservers(this), Ot && (Ot.dispose(), this.vI()?.markAllMaterialsAsDirty(1)), tt && tt()
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L300)

```diff
-                 }, IB && IB(BB, ZB), kB.e.OnTextureLoadErrorObservable.notifyObservers(this)
+                 }, et && et(tt, Vt), jt.f.OnTextureLoadErrorObservable.notifyObservers(this)
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L302)

```diff
-             this._texture ? this._texture.isReady ? oB.b.SetImmediate((() => JB())) : this._texture.onLoadedObservable.add((() => JB())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ZB, this._lodScale, this._lodOffset, BB, GB, th … [truncated]
+             this._texture ? this._texture.isReady ? Dt.c.SetImmediate((() => qt())) : this._texture.onLoadedObservable.add((() => qt())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, Vt, this._lodScale, this._lodOffset, tt, mt, th … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L307-L308` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L307-L308) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L307-L308)

```diff
-               TB = hB.b.Clone((() => {
-                 const ZB = new BB(this.url, this.JR() || this._getEngine(), this._extensions, this._noMipmap, this._files);
+               Ot = Qt.d.Clone((() => {
+                 const Vt = new tt(this.url, this.vI() || this._getEngine(), this._extensions, this._noMipmap, this._files);
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L315)

```diff
-           IB = [(0, JB.C)()], ZB = [(0, JB.A)()], cB = [(0, JB.A)()], WB = [(0, JB.C)("rotationY")], dB = [(0, JB.C)("files")], CB = [(0, JB.C)("forcedExtension")], QB = [(0, JB.C)("extensions")], sB = [(0, JB.p)("textureMatrix")], wB = [(0, JB.p)("textureMatrixRefraction")], (0, … [truncated]
+           et = [(0, qt.P)()], Vt = [(0, qt.M)()], Ht = [(0, qt.M)()], bt = [(0, qt.P)("rotationY")], Jt = [(0, qt.P)("files")], Ct = [(0, qt.P)("forcedExtension")], ut = [(0, qt.P)("extensions")], Kt = [(0, qt.z)("textureMatrix")], ht = [(0, qt.z)("textureMatrixRefraction")], (0, … [truncated]
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L325)

```diff
-           }, null, YB), (0, TB.j)(BB, null, WB, {
+           }, null, Wt), (0, Ot.l)(tt, null, bt, {
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L337)

```diff
-           }, null, YB), (0, TB.j)(null, null, IB, {
+           }, null, Wt), (0, Ot.l)(null, null, et, {
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L350)

```diff
-           }, iB, pB), (0, TB.j)(null, null, ZB, {
+           }, St, ct), (0, Ot.l)(null, null, Vt, {
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L363)

```diff
-           }, aB, HB), (0, TB.j)(null, null, dB, {
+           }, Rt, It), (0, Ot.l)(null, null, Jt, {
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L376)

```diff
-           }, MB, jB), (0, TB.j)(null, null, CB, {
+           }, Pt, Zt), (0, Ot.l)(null, null, Ct, {
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L389)

```diff
-           }, PB, RB), (0, TB.j)(null, null, QB, {
+           }, Lt, Ft), (0, Ot.l)(null, null, ut, {
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L402)

```diff
-           }, rB, mB), (0, TB.j)(null, null, sB, {
+           }, kt, Gt), (0, Ot.l)(null, null, Kt, {
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L415)

```diff
-           }, XB, LB), (0, TB.j)(null, null, wB, {
+           }, zt, ot), (0, Ot.l)(null, null, ht, {
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L454)

```diff
-       const TB = hB.b.Parse((() => {
+       const Ot = Qt.d.Parse((() => {
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L458)

```diff
-       if (BB.boundingBoxPosition && (TB.boundingBoxPosition = GB.s.FromArray(BB.boundingBoxPosition)), BB.boundingBoxSize && (TB.boundingBoxSize = GB.s.FromArray(BB.boundingBoxSize)), BB.animations)
+       if (tt.boundingBoxPosition && (Ot.boundingBoxPosition = mt.n.FromArray(tt.boundingBoxPosition)), tt.boundingBoxSize && (Ot.boundingBoxSize = mt.n.FromArray(tt.boundingBoxSize)), tt.animations)
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L466)

```diff
-     dB || (dB = !0, WB.CreateFromImages = CB, WB.CreateFromPrefilteredData = QB, WB.Parse = sB, kB.e._CubeTextureParser = sB, (0, cB.i)("BABYLON.CubeTexture", WB))
+     Jt || (Jt = !0, bt.CreateFromImages = Ct, bt.CreateFromPrefilteredData = ut, bt.Parse = Kt, jt.f._CubeTextureParser = Kt, (0, Ht.i)("BABYLON.CubeTexture", bt))
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L468)

```diff
-   41203: (BB, IB, ZB) => {
+   41394: (tt, et, Vt) => {
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L472-L476` → after: `L472-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L472-L476) · [Before (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L472-L476)

```diff
-     var TB = ZB(38718),
-       JB = ZB(40521),
-       oB = ZB(39993),
-       GB = ZB(39895),
-       vB = ZB(39885);
+     var Ot = Vt(38899),
+       qt = Vt(40661),
+       Dt = Vt(40131),
+       mt = Vt(40048),
+       dt = Vt(40037);
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L478)

```diff
-     class cB extends JB.e {
+     class Ht extends qt.f {
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L485-L487` → after: `L485-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L485-L487) · [Before (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L485-L487)

```diff
-         super(null, zB ? ZB : ZB?.lg, zB ? !TB : ZB, hB, cB, void 0, void 0, void 0, void 0, nB), kB || (kB = !0, GB.ThinEngine.prototype.createDynamicTexture = function(BB, IB, ZB, TB) {
-           const JB = new vB.b(this, 4);
-           return JB.baseWidth = BB, JB.baseHeight = IB, ZB && (BB = this.needPOTTextures ? (0, oB.f)(BB, this._caps.maxTextureSize) : BB, IB = this.needPOTTextures ? (0, oB.f)(IB, this._caps.maxTextureSize) : IB), JB.width = BB, JB.height = IB, JB.isReady = !1, JB.generateMipMaps … [truncated]
+         super(null, lt ? Vt : Vt?.Fw, lt ? !Ot : Vt, Qt, Ht, void 0, void 0, void 0, void 0, Xt), jt || (jt = !0, mt.ThinEngine.prototype.createDynamicTexture = function(tt, et, Vt, Ot) {
+           const qt = new dt.d(this, 4);
+           return qt.baseWidth = tt, qt.baseHeight = et, Vt && (tt = this.needPOTTextures ? (0, Dt.g)(tt, this._caps.maxTextureSize) : tt, et = this.needPOTTextures ? (0, Dt.g)(et, this._caps.maxTextureSize) : et), qt.width = tt, qt.height = et, qt.isReady = !1, qt.generateMipMaps … [truncated]
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L501)

```diff
-         }), this.name = BB, this.wrapU = JB.e.CLAMP_ADDRESSMODE, this.wrapV = JB.e.CLAMP_ADDRESSMODE, this._generateMipMaps = TB;
+         }), this.name = tt, this.wrapU = qt.f.CLAMP_ADDRESSMODE, this.wrapV = qt.f.CLAMP_ADDRESSMODE, this._generateMipMaps = Ot;
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L559` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L559) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L559)

```diff
-         const BB = this.JR();
+         const tt = this.vI();
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L566)

```diff
-         const BB = this.JR();
+         const tt = this.vI();
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L579)

```diff
-   41179: (BB, IB, ZB) => {
+   41361: (tt, et, Vt) => {
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L581` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L581) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L581)

```diff
-       b: () => JB
+       c: () => qt
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L583-L584` → after: `L583-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L583-L584) · [Before (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L583-L584)

```diff
-     var TB = ZB(40521);
-     class JB extends TB.e {
+     var Ot = Vt(40661);
+     class qt extends Ot.f {
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L591)

```diff
-           cB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : TB.e.TRILINEAR_SAMPLINGMODE,
+           Ht = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Ot.f.TRILINEAR_SAMPLINGMODE,
```

#### 55. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L595)

```diff
-         super(null, GB, !vB, kB), this.format = oB, this._texture = GB.PN().createRawTexture2DArray(BB, IB, ZB, JB, oB, vB, kB, cB, null, nB, hB ?? 0, zB), this._depth = JB, this.is2DArray = !0
+         super(null, mt, !dt, jt), this.format = Dt, this._texture = mt.Jf().createRawTexture2DArray(tt, et, Vt, qt, Dt, dt, jt, Ht, null, Xt, Qt ?? 0, lt), this._depth = qt, this.is2DArray = !0
```

#### 56. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L608)

```diff
-   41176: (BB, IB, ZB) => {
+   41355: (tt, et, Vt) => {
```

#### 57. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L610)

```diff
-       b: () => TB.e
+       d: () => Ot.e
```

#### 58. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L612)

```diff
-     var TB = ZB(40408);
+     var Ot = Vt(40551);
```

#### 59. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L615)

```diff
-   40143: (BB, IB, ZB) => {
+   40289: (tt, et, Vt) => {
```

#### 60. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L617)

```diff
-       b: () => TB.e
+       c: () => Ot.d
```

#### 61. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/261.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/261.js#L619)

```diff
-     var TB = ZB(40148);
+     var Ot = Vt(40296);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   40253: (BB, IB, ZB) => {
+   40397: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       e: () => YB
+       c: () => Wt
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L14` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L8-L14) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L8-L14)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(37120),
-       GB = ZB(40261),
-       vB = ZB(40291),
-       kB = ZB(40226),
-       cB = ZB(40152);
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(37336),
+       mt = Vt(40401),
+       dt = Vt(40431),
+       jt = Vt(40379),
+       Ht = Vt(40300);
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L41)

```diff
-           this.keysUp = (0, TB.l)(this, yB, [38]), this.keysUpward = ((0, TB.l)(this, UB), (0, TB.l)(this, WB, [33])), this.keysDown = ((0, TB.l)(this, dB), (0, TB.l)(this, CB, [40])), this.keysDownward = ((0, TB.l)(this, QB), (0, TB.l)(this, sB, [34])), this.keysLeft = ((0, TB.l … [truncated]
+           this.keysUp = (0, Ot.m)(this, Nt, [38]), this.keysUpward = ((0, Ot.m)(this, Mt), (0, Ot.m)(this, bt, [33])), this.keysDown = ((0, Ot.m)(this, Jt), (0, Ot.m)(this, Ct, [40])), this.keysDownward = ((0, Ot.m)(this, ut), (0, Ot.m)(this, Kt, [34])), this.keysLeft = ((0, Ot.m … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L44)

```diff
-           BB = cB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JR(), this._engine = this._scene.PN(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           tt = Ht.l.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.vI(), this._engine = this._scene.Jf(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L49)

```diff
-               if (IB.type === kB.b.KEYDOWN) {
+               if (et.type === jt.c.KEYDOWN) {
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L69)

```diff
-               GB = BB._localDirection.cBB(0, 0, 0);
+               mt = tt._localDirection.W9(0, 0, 0);
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L75)

```diff
-               GB.normalize().scaleInPlace(IB), BB.JR().useRightHandedSystem && (GB.z *= -1), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), oB.s.TransformNormalToRef(GB, BB._cameraTransformMatrix, BB._transformedDirection), BB.cameraDirection.addInPlace(BB._transforme … [truncated]
+               mt.normalize().scaleInPlace(et), tt.vI().useRightHandedSystem && (mt.z *= -1), tt.getViewMatrix().invertToRef(tt._cameraTransformMatrix), Dt.n.TransformNormalToRef(mt, tt._cameraTransformMatrix, tt._transformedDirection), tt.cameraDirection.addInPlace(tt._transforme … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L94)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], qB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], Et = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], yt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L107)

```diff
-         }, yB, UB), (0, TB.j)(null, null, ZB, {
+         }, Nt, Mt), (0, Ot.l)(null, null, Vt, {
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L120)

```diff
-         }, WB, dB), (0, TB.j)(null, null, GB, {
+         }, bt, Jt), (0, Ot.l)(null, null, mt, {
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L133)

```diff
-         }, CB, QB), (0, TB.j)(null, null, vB, {
+         }, Ct, ut), (0, Ot.l)(null, null, dt, {
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L146)

```diff
-         }, sB, wB), (0, TB.j)(null, null, nB, {
+         }, Kt, ht), (0, Ot.l)(null, null, Xt, {
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L159)

```diff
-         }, OB, YB), (0, TB.j)(null, null, hB, {
+         }, vt, Wt), (0, Ot.l)(null, null, Qt, {
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L172)

```diff
-         }, iB, pB), (0, TB.j)(null, null, zB, {
+         }, St, ct), (0, Ot.l)(null, null, lt, {
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L185)

```diff
-         }, aB, HB), (0, TB.j)(null, null, FB, {
+         }, Rt, It), (0, Ot.l)(null, null, Et, {
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L198)

```diff
-         }, MB, jB), (0, TB.j)(null, null, NB, {
+         }, Pt, Zt), (0, Ot.l)(null, null, ft, {
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L211)

```diff
-         }, PB, RB), (0, TB.j)(null, null, gB, {
+         }, Lt, Ft), (0, Ot.l)(null, null, wt, {
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L224)

```diff
-         }, rB, mB), (0, TB.j)(null, null, qB, {
+         }, kt, Gt), (0, Ot.l)(null, null, yt, {
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L245-L247` → after: `L245-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L245-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L245-L247) · [Before (L245-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L245-L247)

```diff
-     vB.c.FreeCameraKeyboardMoveInput = nB;
-     var hB = ZB(37153),
-       zB = ZB(40224);
+     dt.e.FreeCameraKeyboardMoveInput = Xt;
+     var Qt = Vt(37367),
+       lt = Vt(40373);
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L259-L260)

```diff
-           const TB = ZB.uD ?? ZB.sensitivity ?? 1 / this.angularSensibility,
-             JB = ZB.lD ?? ZB.sensitivity ?? 1 / this.angularSensibility;
+           const Ot = Vt.fY ?? Vt.sensitivity ?? 1 / this.angularSensibility,
+             qt = Vt.aY ?? Vt.sensitivity ?? 1 / this.angularSensibility;
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L265)

```diff
-           this.touchEnabled = BB, this.buttons = (0, TB.l)(this, oB, [0, 1, 2]), this.angularSensibility = ((0, TB.l)(this, GB), (0, TB.l)(this, vB, 2e3)), this._pointerInput = (0, TB.l)(this, kB), this._previousPosition = null, this.onPointerMovedObservable = new hB.b, this._all … [truncated]
+           this.touchEnabled = tt, this.buttons = (0, Ot.m)(this, Dt, [0, 1, 2]), this.angularSensibility = ((0, Ot.m)(this, mt), (0, Ot.m)(this, dt, 2e3)), this._pointerInput = (0, Ot.m)(this, jt), this._previousPosition = null, this.onPointerMovedObservable = new Qt.c, this._all … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L268-L269)

```diff
-           BB = cB.j.BackCompatCameraNoPreventDefault(arguments);
-           const IB = this.camera.PN(),
+           tt = Ht.l.BackCompatCameraNoPreventDefault(arguments);
+           const et = this.camera.Jf(),
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L275)

```diff
-             if (TB.type !== zB.d.POINTERMOVE && -1 === this.buttons.indexOf(JB.button)) return;
+             if (Ot.type !== lt.c.POINTERMOVE && -1 === this.buttons.indexOf(qt.button)) return;
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L277)

```diff
-             if (TB.type === zB.d.POINTERDOWN) {
+             if (Ot.type === lt.c.POINTERDOWN) {
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L286)

```diff
-             } else if (TB.type === zB.d.POINTERUP) {
+             } else if (Ot.type === lt.c.POINTERUP) {
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L292)

```diff
-             } else if (TB.type === zB.d.POINTERMOVE && (this._activePointerId === JB.pointerId || !oB))
+             } else if (Ot.type === lt.c.POINTERMOVE && (this._activePointerId === qt.pointerId || !Dt))
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L310)

```diff
-           }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._pointerInput, zB.d.POINTERDOWN | zB.d.POINTERUP | zB.d.POINTERMOVE), ZB && (this._contextMenuBind = BB => this.onContextMenu(BB), ZB.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
+           }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._pointerInput, lt.c.POINTERDOWN | lt.c.POINTERUP | lt.c.POINTERMOVE), Vt && (this._contextMenuBind = tt => this.onContextMenu(tt), Vt.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L317-L318` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L317-L318) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L317-L318)

```diff
-             if (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const BB = this.camera.PN().getInputElement();
+             if (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
+               const tt = this.camera.Jf().getInputElement();
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L333)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L346)

```diff
-         }, oB, GB), (0, TB.j)(null, null, ZB, {
+         }, Dt, mt), (0, Ot.l)(null, null, Vt, {
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L367-L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L367-L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L367-L368)

```diff
-     vB.c.FreeCameraMouseInput = FB;
-     var NB = ZB(40232);
+     dt.e.FreeCameraMouseInput = Et;
+     var ft = Vt(40386);
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L379)

```diff
-           this.wheelPrecisionX = (0, TB.l)(this, GB, 3), this.wheelPrecisionY = ((0, TB.l)(this, vB), (0, TB.l)(this, kB, 3)), this.wheelPrecisionZ = ((0, TB.l)(this, nB), (0, TB.l)(this, FB, 3)), this.onChangedObservable = ((0, TB.l)(this, gB), new hB.b), this._wheelDeltaX = 0,  … [truncated]
+           this.wheelPrecisionX = (0, Ot.m)(this, mt, 3), this.wheelPrecisionY = ((0, Ot.m)(this, dt), (0, Ot.m)(this, jt, 3)), this.wheelPrecisionZ = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Et, 3)), this.onChangedObservable = ((0, Ot.m)(this, wt), new Qt.c), this._wheelDeltaX = 0,  … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L382-L383)

```diff
-           BB = cB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = IB => {
-             if (IB.type !== zB.d.POINTERWHEEL) return;
+           tt = Ht.l.BackCompatCameraNoPreventDefault(arguments), this._wheel = et => {
+             if (et.type !== lt.c.POINTERWHEEL) return;
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L385)

```diff
-               TB = ZB.deltaMode === NB.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
+               Ot = Vt.deltaMode === ft.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L387` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L387) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L387)

```diff
-           }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._wheel, zB.d.POINTERWHEEL)
+           }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._wheel, lt.c.POINTERWHEEL)
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L390)

```diff
-           this._observer && (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+           this._observer && (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L407)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L420)

```diff
-         }, GB, vB), (0, TB.j)(null, null, ZB, {
+         }, mt, dt), (0, Ot.l)(null, null, Vt, {
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L433)

```diff
-         }, kB, nB), (0, TB.j)(null, null, oB, {
+         }, jt, Xt), (0, Ot.l)(null, null, Dt, {
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L464)

```diff
-           super(...arguments), this.camera = (0, TB.l)(this, NB), this._moveRelative = oB.s.Zero(), this._rotateRelative = oB.s.Zero(), this._moveScene = oB.s.Zero(), this._wheelXAction = qB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = qB.MoveRelative, thi … [truncated]
+           super(...arguments), this.camera = (0, Ot.m)(this, ft), this._moveRelative = Dt.n.Zero(), this._rotateRelative = Dt.n.Zero(), this._moveScene = Dt.n.Zero(), this._wheelXAction = yt.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = yt.MoveRelative, thi … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L525-L526` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L525-L526) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L525-L526)

```diff
-           this._moveRelative.K9(0), this._rotateRelative.K9(0), this._moveScene.K9(0), this._updateCamera(), this.camera.JR().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const BB = oB.b.Zero();
+           this._moveRelative.S_(0), this._rotateRelative.S_(0), this._moveScene.S_(0), this._updateCamera(), this.camera.vI().useRightHandedSystem && (this._moveRelative.z *= -1);
+           const tt = Dt.c.Zero();
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L528-L529` → after: `L528-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L528-L529) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L528-L529)

```diff
-           const IB = oB.s.Zero();
-           oB.s.TransformNormalToRef(this._moveRelative, BB, IB), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(IB), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+           const et = Dt.n.Zero();
+           Dt.n.TransformNormalToRef(this._moveRelative, tt, et), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(et), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L561)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], (0, TB.j)(BB, null, IB, {
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], (0, Ot.l)(tt, null, et, {
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L573)

```diff
-         }, null, NB), (0, TB.j)(BB, null, ZB, {
+         }, null, ft), (0, Ot.l)(tt, null, Vt, {
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L585)

```diff
-         }, null, NB), (0, TB.j)(BB, null, GB, {
+         }, null, ft), (0, Ot.l)(tt, null, mt, {
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L597)

```diff
-         }, null, NB), (0, TB.j)(BB, null, vB, {
+         }, null, ft), (0, Ot.l)(tt, null, dt, {
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L609)

```diff
-         }, null, NB), (0, TB.j)(BB, null, kB, {
+         }, null, ft), (0, Ot.l)(tt, null, jt, {
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L621)

```diff
-         }, null, NB), (0, TB.j)(BB, null, cB, {
+         }, null, ft), (0, Ot.l)(tt, null, Ht, {
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L633)

```diff
-         }, null, NB), (0, TB.j)(BB, null, nB, {
+         }, null, ft), (0, Ot.l)(tt, null, Xt, {
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L645)

```diff
-         }, null, NB), (0, TB.j)(BB, null, hB, {
+         }, null, ft), (0, Ot.l)(tt, null, Qt, {
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L657)

```diff
-         }, null, NB), (0, TB.j)(BB, null, zB, {
+         }, null, ft), (0, Ot.l)(tt, null, lt, {
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L677)

```diff
-     vB.c.FreeCameraMouseWheelInput = yB;
+     dt.e.FreeCameraMouseWheelInput = Nt;
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L687)

```diff
-           this.allowMouse = BB, this.touchAngularSensibility = (0, TB.l)(this, GB, 2e5), this.touchMoveSensibility = ((0, TB.l)(this, vB), (0, TB.l)(this, kB, 250)), this.singleFingerRotate = ((0, TB.l)(this, nB), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+           this.allowMouse = tt, this.touchAngularSensibility = (0, Ot.m)(this, mt, 2e5), this.touchMoveSensibility = ((0, Ot.m)(this, dt), (0, Ot.m)(this, jt, 250)), this.singleFingerRotate = ((0, Ot.m)(this, Xt), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L690)

```diff
-           BB = cB.j.BackCompatCameraNoPreventDefault(arguments);
+           tt = Ht.l.BackCompatCameraNoPreventDefault(arguments);
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L698)

```diff
-                 if (ZB.type === zB.d.POINTERDOWN) {
+                 if (Vt.type === lt.c.POINTERDOWN) {
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L704)

```diff
-                 } else if (ZB.type === zB.d.POINTERUP) {
+                 } else if (Vt.type === lt.c.POINTERUP) {
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L710)

```diff
-               } else if (ZB.type === zB.d.POINTERMOVE) {
+               } else if (Vt.type === lt.c.POINTERMOVE) {
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L715-L716` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L715-L716) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L715-L716)

```diff
-             }), this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._pointerInput, zB.d.POINTERDOWN | zB.d.POINTERUP | zB.d.POINTERMOVE), this._onLostFocus) {
-             const BB = this.camera.PN().getInputElement();
+             }), this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._pointerInput, lt.c.POINTERDOWN | lt.c.POINTERUP | lt.c.POINTERMOVE), this._onLostFocus) {
+             const tt = this.camera.Jf().getInputElement();
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L722-L723` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L722-L723) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L722-L723)

```diff
-             if (this._observer && (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const BB = this.camera.PN().getInputElement();
+             if (this._observer && (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const tt = this.camera.Jf().getInputElement();
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L745-L746` → after: `L745-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L745-L746) · [Before (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L745-L746)

```diff
-               JB = oB.m.rN[0];
-             JB.cBB(0, 0, IB * this._offsetY * ZB), oB.b.RotationYawPitchRollToRef(BB.rotation.y, BB.rotation.x, 0, BB._cameraRotationMatrix), oB.s.TransformCoordinatesToRef(JB, BB._cameraRotationMatrix, JB), BB.cameraDirection.addInPlace(JB)
+               qt = Dt.k.uf[0];
+             qt.W9(0, 0, et * this._offsetY * Vt), Dt.c.RotationYawPitchRollToRef(tt.rotation.y, tt.rotation.x, 0, tt._cameraRotationMatrix), Dt.n.TransformCoordinatesToRef(qt, tt._cameraRotationMatrix, qt), tt.cameraDirection.addInPlace(qt)
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L757)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L770)

```diff
-         }, GB, vB), (0, TB.j)(null, null, ZB, {
+         }, mt, dt), (0, Ot.l)(null, null, Vt, {
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L791-L793` → after: `L791-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L791-L793) · [Before (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L791-L793)

```diff
-     vB.c.FreeCameraTouchInput = UB;
-     var WB, dB, CB, QB = ZB(39931);
-     class sB extends vB.f {
+     dt.e.FreeCameraTouchInput = Mt;
+     var bt, Jt, Ct, ut = Vt(40080);
+     class Kt extends dt.g {
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L819-L821` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L819-L821) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L819-L821)

```diff
-     }(WB = sB.prototype).addDeviceOrientation ?? (WB.addDeviceOrientation = (0, QB.j)("FreeCameraInputsManager", "addDeviceOrientation")), (dB = sB.prototype).addVirtualJoystick ?? (dB.addVirtualJoystick = (0, QB.j)("FreeCameraInputsManager", "addVirtualJoystick")), (CB = sB.prot … [truncated]
-     var wB = ZB(39951),
-       OB = ZB(37170);
+     }(bt = Kt.prototype).addDeviceOrientation ?? (bt.addDeviceOrientation = (0, ut.d)("FreeCameraInputsManager", "addDeviceOrientation")), (Jt = Kt.prototype).addVirtualJoystick ?? (Jt.addVirtualJoystick = (0, ut.d)("FreeCameraInputsManager", "addVirtualJoystick")), (Ct = Kt.prot … [truncated]
+     var ht = Vt(40092),
+       vt = Vt(37390);
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L824` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L824) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L824)

```diff
-         let IB, ZB, vB, kB, nB = GB.d,
+         let et, Vt, dt, jt, Xt = mt.f,
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L924)

```diff
-             super(BB, IB, ZB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), JB = this, this.ellipsoid = (0, TB.l)(this, hB, new oB.s(.5, 1, .5)), this.ellipsoidOffset = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, new oB.s(0, 0, 0))), this.checkCollisions = (( … [truncated]
+             super(tt, et, Vt, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), qt = this, this.ellipsoid = (0, Ot.m)(this, Qt, new Dt.n(.5, 1, .5)), this.ellipsoidOffset = ((0, Ot.m)(this, lt), (0, Ot.m)(this, Et, new Dt.n(0, 0, 0))), this.checkCollisions = (( … [truncated]
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L926)

```diff
-               JB._newPosition.TY(IB), JB._newPosition.subtractToRef(JB._oldPosition, JB._diffPosition), JB._diffPosition.length() > wB.c.CollisionsEpsilon && (JB.position.addToRef(JB._diffPosition, JB._deferredPositionUpdate), JB._deferOnly ? JB._deferredUpdated = !0 : JB.positio … [truncated]
+               qt._newPosition.rK(et), qt._newPosition.subtractToRef(qt._oldPosition, qt._diffPosition), qt._diffPosition.length() > ht.d.CollisionsEpsilon && (qt.position.addToRef(qt._diffPosition, qt._deferredPositionUpdate), qt._deferOnly ? qt._deferredUpdated = !0 : qt.positio … [truncated]
```
