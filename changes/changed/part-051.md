# Changed — Bundle Modifications Report (Part 051 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `51 / 137` (**425** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (176 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L296)

```diff
-           zB = new IB.m(jB.x, NB, jB.z)
+           ZB = new GB.s(IB.x, vB, IB.z)
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L298-L299)

```diff
-         this._vectorTransition || (this._vectorTransition = mB.e.CreateAnimation("target", mB.e.ANIMATIONTYPE_VECTOR3, 60, kB.EasingFunction)), this._betaIsAnimating = !0;
-         let UB = mB.e.TransitionTo("target", zB, this._attachedCamera, this._attachedCamera.aY(), 60, this._vectorTransition, this._framingTime);
+         this._vectorTransition || (this._vectorTransition = gB.b.CreateAnimation("target", gB.b.ANIMATIONTYPE_VECTOR3, 60, yB.EasingFunction)), this._betaIsAnimating = !0;
+         let cB = gB.b.TransitionTo("target", ZB, this._attachedCamera, this._attachedCamera.JR(), 60, this._vectorTransition, this._framingTime);
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L310)

```diff
-         return this._radiusTransition || (this._radiusTransition = mB.e.CreateAnimation("radius", mB.e.ANIMATIONTYPE_FLOAT, 60, kB.EasingFunction)), UB = mB.e.TransitionTo("radius", aB, this._attachedCamera, this._attachedCamera.aY(), 60, this._radiusTransition, this._framingTime … [truncated]
+         return this._radiusTransition || (this._radiusTransition = gB.b.CreateAnimation("radius", gB.b.ANIMATIONTYPE_FLOAT, 60, yB.EasingFunction)), cB = gB.b.TransitionTo("radius", nB, this._attachedCamera, this._attachedCamera.JR(), 60, this._radiusTransition, this._framingTime … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L322)

```diff
-         const BB = pB.e.Now - this._lastInteractionTime,
+         const BB = hB.c.Now - this._lastInteractionTime,
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L326-L327` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L326-L327) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L326-L327)

```diff
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = mB.e.CreateAnimation("beta", mB.e.ANIMATIONTYPE_FLOAT, 60, kB.EasingFunction));
-           const BB = mB.e.TransitionTo("beta", jB, this._attachedCamera, this._attachedCamera.aY(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = gB.b.CreateAnimation("beta", gB.b.ANIMATIONTYPE_FLOAT, 60, yB.EasingFunction));
+           const BB = gB.b.TransitionTo("beta", IB, this._attachedCamera, this._attachedCamera.JR(), 60, this._betaTransition, this._elevationReturnTime, (() => {
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L337)

```diff
-         this.isUserIsMoving && (this._lastInteractionTime = pB.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+         this.isUserIsMoving && (this._lastInteractionTime = hB.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L355-L358` → after: `L355-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L355-L358) · [Before (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L355-L358)

```diff
-     var GB = zB(40301),
-       LB = zB(40292),
-       gB = zB(40330),
-       tB = zB(40164);
+     var UB = ZB(40269),
+       WB = ZB(40261),
+       dB = ZB(40291),
+       CB = ZB(40152);
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L365)

```diff
-             this._currentMousePointerIdDown = -1, this.buttons = (0, QB.g)(this, zB, [0, 1, 2]), this._pointerInput = (0, QB.g)(this, dB)
+             this._currentMousePointerIdDown = -1, this.buttons = (0, TB.l)(this, ZB, [0, 1, 2]), this._pointerInput = (0, TB.l)(this, oB)
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L368-L369)

```diff
-             BB = tB.i.BackCompatCameraNoPreventDefault(arguments);
-             const jB = this.camera.wJ(),
+             BB = CB.j.BackCompatCameraNoPreventDefault(arguments);
+             const IB = this.camera.PN(),
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L376)

```diff
-               if (dB.type !== aB.b.POINTERMOVE && -1 === this.buttons.indexOf(IB.button)) return;
+               if (oB.type !== nB.d.POINTERMOVE && -1 === this.buttons.indexOf(GB.button)) return;
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L383-L387` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L383-L387) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L383-L387)

```diff
-                 if (dB.type !== aB.b.POINTERDOWN && dB.type !== aB.b.POINTERDOUBLETAP && NB && this._pointA?.pointerId !== IB.pointerId && this._pointB?.pointerId !== IB.pointerId) return;
-                 if (dB.type !== aB.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !NB)
-                   if (dB.type === aB.b.POINTERDOUBLETAP) this.onDoubleTap(IB.pointerType, IB);
-                   else if (dB.type !== aB.b.POINTERUP || this._currentMousePointerIdDown !== IB.pointerId && !NB) {
-                   if (dB.type === aB.b.POINTERMOVE)
+                 if (oB.type !== nB.d.POINTERDOWN && oB.type !== nB.d.POINTERDOUBLETAP && vB && this._pointA?.pointerId !== GB.pointerId && this._pointB?.pointerId !== GB.pointerId) return;
+                 if (oB.type !== nB.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !vB)
+                   if (oB.type === nB.d.POINTERDOUBLETAP) this.onDoubleTap(GB.pointerType, GB);
+                   else if (oB.type !== nB.d.POINTERUP || this._currentMousePointerIdDown !== GB.pointerId && !vB) {
+                   if (oB.type === nB.d.POINTERMOVE)
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L434)

```diff
-             }, this._observer = this.camera.aY()._inputManager._addCameraPointerObserver(this._pointerInput, aB.b.POINTERDOWN | aB.b.POINTERUP | aB.b.POINTERMOVE | aB.b.POINTERDOUBLETAP), this._onLostFocus = () => {
+             }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._pointerInput, nB.d.POINTERDOWN | nB.d.POINTERUP | nB.d.POINTERMOVE | nB.d.POINTERDOUBLETAP), this._onLostFocus = () => {
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L437-L438)

```diff
-             const dB = this.camera.aY().wJ().getHostWindow();
-             dB && tB.i.RegisterTopRootEvents(dB, [{
+             const oB = this.camera.JR().PN().getHostWindow();
+             oB && CB.j.RegisterTopRootEvents(oB, [{
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L445-L446)

```diff
-               const BB = this.camera.aY().wJ().getHostWindow();
-               BB && tB.i.UnregisterTopRootEvents(BB, [{
+               const BB = this.camera.JR().PN().getHostWindow();
+               BB && CB.j.UnregisterTopRootEvents(BB, [{
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L452-L453` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L452-L453) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L452-L453)

```diff
-               if (this.camera.aY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
-                 const BB = this.camera.aY().wJ().getInputElement();
+               if (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
+                 const BB = this.camera.JR().PN().getInputElement();
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L477)

```diff
-           jB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
+           IB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
```

#### 39. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L509)

```diff
-             super(...arguments), this.pinchZoom = (0, QB.g)(this, NB, !0), this.multiTouchPanning = ((0, QB.g)(this, uB), (0, QB.g)(this, UB, !0)), this.multiTouchPanAndZoom = ((0, QB.g)(this, aB), (0, QB.g)(this, pB, !0)), this._isPinching = ((0, QB.g)(this, rB), !1), this._twoF … [truncated]
+             super(...arguments), this.pinchZoom = (0, TB.l)(this, vB, !0), this.multiTouchPanning = ((0, TB.l)(this, kB), (0, TB.l)(this, cB, !0)), this.multiTouchPanAndZoom = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, !0)), this._isPinching = ((0, TB.l)(this, zB), !1), this._twoF … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L524)

```diff
-           jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
+           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
```

#### 41. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L537)

```diff
-           }, NB, uB), (0, QB.e)(null, null, zB, {
+           }, vB, kB), (0, TB.j)(null, null, ZB, {
```

#### 42. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L550)

```diff
-           }, UB, aB), (0, QB.e)(null, null, dB, {
+           }, cB, nB), (0, TB.j)(null, null, oB, {
```

#### 43. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L590)

```diff
-             super(...arguments), this.buttons = (0, QB.g)(this, pB, [0, 1, 2]), this.angularSensibilityX = ((0, QB.g)(this, rB), (0, QB.g)(this, sB, 1e3)), this.angularSensibilityY = ((0, QB.g)(this, JB), (0, QB.g)(this, mB, 1e3)), this.pinchPrecision = ((0, QB.g)(this, yB), (0,  … [truncated]
+             super(...arguments), this.buttons = (0, TB.l)(this, hB, [0, 1, 2]), this.angularSensibilityX = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, 1e3)), this.angularSensibilityY = ((0, TB.l)(this, NB), (0, TB.l)(this, gB, 1e3)), this.pinchPrecision = ((0, TB.l)(this, qB), (0,  … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L625)

```diff
-             const QB = this._activeEntry ?? (this.camera.wJ().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
+             const TB = this._activeEntry ?? (this.camera.PN().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
```

#### 45. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L631-L632` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L631-L632) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L631-L632)

```diff
-               const BB = QB.Kl ?? QB.sensitivity ?? 1 / this.angularSensibilityX,
-                 nB = QB.Rl ?? QB.sensitivity ?? 1 / this.angularSensibilityY;
+               const BB = TB.uD ?? TB.sensitivity ?? 1 / this.angularSensibilityX,
+                 JB = TB.lD ?? TB.sensitivity ?? 1 / this.angularSensibilityY;
```

#### 46. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L653)

```diff
-           jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], IB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
+           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
```

#### 47. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L666)

```diff
-           }, pB, rB), (0, QB.e)(null, null, zB, {
+           }, hB, zB), (0, TB.j)(null, null, ZB, {
```

#### 48. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L679)

```diff
-           }, sB, JB), (0, QB.e)(null, null, dB, {
+           }, FB, NB), (0, TB.j)(null, null, oB, {
```

#### 49. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L692)

```diff
-           }, mB, yB), (0, QB.e)(null, null, IB, {
+           }, gB, qB), (0, TB.j)(null, null, GB, {
```

#### 50. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L705)

```diff
-           }, kB, GB), (0, QB.e)(null, null, NB, {
+           }, yB, UB), (0, TB.j)(null, null, vB, {
```

#### 51. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L718` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L718) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L718)

```diff
-           }, LB, gB), (0, QB.e)(null, null, uB, {
+           }, WB, dB), (0, TB.j)(null, null, kB, {
```

#### 52. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L731)

```diff
-           }, tB, SB), (0, QB.e)(null, null, UB, {
+           }, CB, QB), (0, TB.j)(null, null, cB, {
```

#### 53. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L752-L753` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L752-L753) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L752-L753)

```diff
-     gB.e.ArcRotateCameraPointersInput = EB;
-     var iB = zB(40264);
+     dB.c.ArcRotateCameraPointersInput = wB;
+     var OB = ZB(40226);
```

#### 54. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L779)

```diff
-           this.camera = (0, QB.g)(this, mB), this.keysUp = (0, QB.g)(this, yB, [38]), this.keysDown = ((0, QB.g)(this, kB), (0, QB.g)(this, GB, [40])), this.keysLeft = ((0, QB.g)(this, LB), (0, QB.g)(this, gB, [37])), this.keysRight = ((0, QB.g)(this, SB), (0, QB.g)(this, MB, [39 … [truncated]
+           this.camera = (0, TB.l)(this, gB), this.keysUp = (0, TB.l)(this, qB, [38]), this.keysDown = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, [40])), this.keysLeft = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, [37])), this.keysRight = ((0, TB.l)(this, QB), (0, TB.l)(this, sB, [39 … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L784)

```diff
-           }, this._rotateDirection = new IB.i, this._panDirection = new IB.i
+           }, this._rotateDirection = new GB.p, this._panDirection = new GB.p
```

#### 56. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L809)

```diff
-           BB = tB.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aY(), this._engine = this._scene.wJ(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           BB = CB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JR(), this._engine = this._scene.PN(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 57. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L814)

```diff
-               if (jB.type === iB.e.KEYDOWN) {
+               if (IB.type === OB.b.KEYDOWN) {
```

#### 58. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L858)

```diff
-         jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], sB = [(0, nB.A)()], JB = [(0, nB.A)()], (0, QB.e)(BB, null, JB, {
+         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], (0, TB.j)(BB, null, NB, {
```

#### 59. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L868)

```diff
-         }, null, mB), (0, QB.e)(null, null, jB, {
+         }, null, gB), (0, TB.j)(null, null, IB, {
```

#### 60. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L881)

```diff
-         }, yB, kB), (0, QB.e)(null, null, zB, {
+         }, qB, yB), (0, TB.j)(null, null, ZB, {
```

#### 61. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L894)

```diff
-         }, GB, LB), (0, QB.e)(null, null, dB, {
+         }, UB, WB), (0, TB.j)(null, null, oB, {
```

#### 62. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L907)

```diff
-         }, gB, SB), (0, QB.e)(null, null, NB, {
+         }, dB, QB), (0, TB.j)(null, null, vB, {
```

#### 63. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L920)

```diff
-         }, MB, EB), (0, QB.e)(null, null, uB, {
+         }, sB, wB), (0, TB.j)(null, null, kB, {
```

#### 64. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L933)

```diff
-         }, qB, fB), (0, QB.e)(null, null, UB, {
+         }, YB, iB), (0, TB.j)(null, null, cB, {
```

#### 65. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L946)

```diff
-         }, oB, HB), (0, QB.e)(null, null, aB, {
+         }, pB, aB), (0, TB.j)(null, null, nB, {
```

#### 66. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L959)

```diff
-         }, DB, FB), (0, QB.e)(null, null, pB, {
+         }, HB, MB), (0, TB.j)(null, null, hB, {
```

#### 67. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L972)

```diff
-         }, YB, VB), (0, QB.e)(null, null, rB, {
+         }, jB, PB), (0, TB.j)(null, null, zB, {
```

#### 68. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L985)

```diff
-         }, hB, XB), (0, QB.e)(null, null, sB, {
+         }, RB, rB), (0, TB.j)(null, null, FB, {
```

#### 69. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1006-L1008` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1006-L1008) · [Before (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1006-L1008)

```diff
-     gB.e.ArcRotateCameraKeyboardMoveInput = qB;
-     var fB = zB(37869),
-       oB = zB(40268);
+     dB.c.ArcRotateCameraKeyboardMoveInput = YB;
+     var iB = ZB(37824),
+       pB = ZB(40232);
```

#### 70. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1019)

```diff
-           this.wheelPrecision = (0, QB.g)(this, uB, 3), this.zoomToMouseLocation = ((0, QB.g)(this, UB), (0, QB.g)(this, pB, !1)), this.wheelDeltaPercentage = ((0, QB.g)(this, sB), (0, QB.g)(this, JB, 0)), this.customComputeDeltaFromMouseWheel = ((0, QB.g)(this, mB), null), this. … [truncated]
+           this.wheelPrecision = (0, TB.l)(this, kB, 3), this.zoomToMouseLocation = ((0, TB.l)(this, cB), (0, TB.l)(this, hB, !1)), this.wheelDeltaPercentage = ((0, TB.l)(this, FB), (0, TB.l)(this, NB, 0)), this.customComputeDeltaFromMouseWheel = ((0, TB.l)(this, gB), null), this. … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1027-L1028` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1027-L1028) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1027-L1028)

```diff
-           BB = tB.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = jB => {
-             if (jB.type !== aB.b.POINTERWHEEL) return;
+           BB = CB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = IB => {
+             if (IB.type !== nB.d.POINTERWHEEL) return;
```

#### 72. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1031)

```diff
-             const nB = zB.deltaMode === oB.c.DOM_DELTA_LINE ? 40 : 1,
+             const JB = ZB.deltaMode === pB.d.DOM_DELTA_LINE ? 40 : 1,
```

#### 73. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1047)

```diff
-           }, this._observer = this.camera.aY()._inputManager._addCameraPointerObserver(this._wheel, aB.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.S_(0)
+           }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._wheel, nB.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.K9(0)
```

#### 74. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1050)

```diff
-           this._observer && (this.camera.aY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+           this._observer && (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
```

#### 75. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1058)

```diff
-             this._inertialPanning.scaleInPlace(jB), this._zoomToMouseRadiusOffset *= jB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < rB.c && (this._zoomToMouseRadiusOffset = 0)
+             this._inertialPanning.scaleInPlace(IB), this._zoomToMouseRadiusOffset *= IB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < zB.d && (this._zoomToMouseRadiusOffset = 0)
```

#### 76. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1074-L1076` → after: `L1074-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1074-L1076) · [Before (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1074-L1076)

```diff
-             jB = BB.aY(),
-             zB = jB.createPickingRay(jB.pointerX, jB.pointerY, IB.c.Identity(), BB, !1);
-           0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = IB.m.TransformNormal(this._viewOffset, BB._camer … [truncated]
+             IB = BB.JR(),
+             ZB = IB.createPickingRay(IB.pointerX, IB.pointerY, GB.b.Identity(), BB, !1);
+           0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = GB.s.TransformNormal(this._viewOffset, BB._camer … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1094)

```diff
-             NB = IB.h.KJ[6];
+             vB = GB.m.rN[6];
```

#### 78. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1098)

```diff
-           Math.abs(BB.x) < rB.c && (BB.x = 0), Math.abs(BB.y) < rB.c && (BB.y = 0), Math.abs(BB.z) < rB.c && (BB.z = 0)
+           Math.abs(BB.x) < zB.d && (BB.x = 0), Math.abs(BB.y) < zB.d && (BB.y = 0), Math.abs(BB.z) < zB.d && (BB.z = 0)
```

#### 79. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1102)

```diff
-         jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
+         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
```

#### 80. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1115)

```diff
-         }, uB, UB), (0, QB.e)(null, null, zB, {
+         }, kB, cB), (0, TB.j)(null, null, ZB, {
```

#### 81. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1128` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1128) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1128)

```diff
-         }, pB, sB), (0, QB.e)(null, null, dB, {
+         }, hB, FB), (0, TB.j)(null, null, oB, {
```

#### 82. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1149-L1150` → after: `L1149-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1149-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1149-L1150) · [Before (L1149-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1149-L1150)

```diff
-     gB.e.ArcRotateCameraMouseWheelInput = HB;
-     var DB, FB, YB = zB(39965);
+     dB.c.ArcRotateCameraMouseWheelInput = aB;
+     var HB, MB, jB = ZB(39931);
```

#### 83. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1164-L1168` → after: `L1164-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1164-L1168) · [Before (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1164-L1168)

```diff
-     }(DB = VB.prototype).addVRDeviceOrientation ?? (DB.addVRDeviceOrientation = (0, YB.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (FB = VB.prototype).addGamepad ?? (FB.addGamepad = (0, YB.i)("ArcRotateCameraInputsManager", "addGamepad"));
-     var hB = zB(37222),
-       XB = zB(40319),
-       ZB = zB(40324);
-     class AB extends XB.c {
+     }(HB = PB.prototype).addVRDeviceOrientation ?? (HB.addVRDeviceOrientation = (0, jB.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (MB = PB.prototype).addGamepad ?? (MB.addGamepad = (0, jB.j)("ArcRotateCameraInputsManager", "addGamepad"));
+     var RB = ZB(37170),
+       rB = ZB(40281),
+       mB = ZB(40284);
+     class XB extends rB.e {
```

#### 84. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1170)

```diff
-         super(BB, jB, zB), this.input = new ZB.c({
+         super(BB, IB, ZB), this.input = new mB.d({
```

#### 85. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1225)

```diff
-       return isNaN(BB) ? jB : BB
+       return isNaN(BB) ? IB : BB
```

#### 86. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1229` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1229) · [Before (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1229)

```diff
-         let jB, zB, uB, aB, pB, JB, mB, gB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, hB, XB, ZB, PB, WB, eB, lB, wB, xB, KB = LB.g,
+         let IB, ZB, kB, nB, hB, NB, gB, dB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, RB, rB, mB, eB, uB, fB, lB, AB, tB, bB = WB.d,
```

#### 87. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1279)

```diff
-             return this.WC
+             return this.J7
```

#### 88. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1300)

```diff
-             this._upToYMatrix || (this._yToUpMatrix = new IB.c, this._upToYMatrix = new IB.c, this._upVector = IB.m.Zero()), BB.normalize(), this._upVector.jH(BB), this.setMatUp()
+             this._upToYMatrix || (this._yToUpMatrix = new GB.b, this._upToYMatrix = new GB.b, this._upVector = GB.s.Zero()), BB.normalize(), this._upVector.TY(BB), this.setMatUp()
```

#### 89. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1306)

```diff
-             IB.c.RotationAlignToRef(IB.m.UpReadOnly, this._upVector, this._yToUpMatrix), IB.c.RotationAlignToRef(this._upVector, IB.m.UpReadOnly, this._upToYMatrix)
+             GB.b.RotationAlignToRef(GB.s.UpReadOnly, this._upVector, this._yToUpMatrix), GB.b.RotationAlignToRef(this._upVector, GB.s.UpReadOnly, this._upToYMatrix)
```

#### 90. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1526)

```diff
-             super(BB, IB.m.Zero(), uB, aB), UB = this, this.alpha = ((0, QB.g)(this, CB), (0, QB.g)(this, cB, void 0)), this.beta = ((0, QB.g)(this, bB), (0, QB.g)(this, vB, void 0)), this.radius = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
+             super(BB, GB.s.Zero(), kB, nB), cB = this, this.alpha = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, void 0)), this.beta = ((0, TB.l)(this, DB), (0, TB.l)(this, KB, void 0)), this.radius = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
```

#### 91. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1528)

```diff
-               zB ? (UB.setPosition(jB), UB.Jr && UB.Jr(zB)) : UB._previousPosition.jH(UB._position);
+               ZB ? (cB.setPosition(IB), cB.Wz && cB.Wz(ZB)) : cB._previousPosition.TY(cB._position);
```

#### 92. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1535)

```diff
-               UB._computationVector.U3(UB.radius * QB * IB, UB.radius * dB, UB.radius * nB * IB), NB.addToRef(UB._computationVector, UB._newPosition), UB._position.jH(UB._newPosition);
+               cB._computationVector.cBB(cB.radius * TB * GB, cB.radius * oB, cB.radius * JB * GB), vB.addToRef(cB._computationVector, cB._newPosition), cB._position.TY(cB._newPosition);
```

#### 93. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1537-L1538` → after: `L1537-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1537-L1538) · [Before (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1537-L1538)

```diff
-               UB.allowUpsideDown && UB.beta < 0 && (uB = uB.clone(), uB = uB.bu()), UB._computeViewMatrix(UB._position, NB, uB), UB._viewMatrix.addAtIndex(12, UB.targetScreenOffset.x), UB._viewMatrix.addAtIndex(13, UB.targetScreenOffset.y), UB._collisionTriggered = !1
-             }, this.WC = IB.m.Zero(), NB && this.setTarget(NB), this.alpha = jB, this.beta = zB, this.radius = nB, this.getViewMatrix(), this.inputs = new VB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new AB(this.aY(), this._position), this.mo … [truncated]
+               cB.allowUpsideDown && cB.beta < 0 && (kB = kB.clone(), kB = kB.dv()), cB._computeViewMatrix(cB._position, vB, kB), cB._viewMatrix.addAtIndex(12, cB.targetScreenOffset.x), cB._viewMatrix.addAtIndex(13, cB.targetScreenOffset.y), cB._collisionTriggered = !1
+             }, this.J7 = GB.s.Zero(), vB && this.setTarget(vB), this.alpha = IB, this.beta = ZB, this.radius = JB, this.getViewMatrix(), this.inputs = new PB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new XB(this.JR(), this._position), this.mo … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1541)

```diff
-             super._initCache(), this._cache.WC = new IB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = IB.i.Zero()
+             super._initCache(), this._cache.J7 = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = GB.p.Zero()
```

#### 95. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1544` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1544) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1544)

```diff
-             BB || super._updateCache(), this._cache.WC.jH(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.jH(this.targetScreenOffset)
+             BB || super._updateCache(), this._cache.J7.TY(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.TY(this.targetScreenOffset)
```

#### 96. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1549)

```diff
-               this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.WC) : this.WC.jH(BB)
+               this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.J7) : this.J7.TY(BB)
```

#### 97. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1552` → after: `L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1552) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1552)

```diff
-             return BB || this.WC
+             return BB || this.J7
```

#### 98. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1558)

```diff
-             return this.hasStateStored() && this.restoreStateInterpolationFactor > rB.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
+             return this.hasStateStored() && this.restoreStateInterpolationFactor > zB.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
```

#### 99. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1570)

```diff
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != dB ? this._currentInterpolationFactor = dB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != oB ? this._currentInterpolationFactor = oB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1573` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1573) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1573)

```diff
-             return !!super._isSynchronizedViewMatrix() && (this._cache.WC.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+             return !!super._isSynchronizedViewMatrix() && (this._cache.J7.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
```

#### 101. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1579` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1579) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1579)

```diff
-             jB = tB.i.BackCompatCameraNoPreventDefault(nB), this._useCtrlForPanning = zB, this._panningMouseButton = QB, "boolean" === typeof nB[0] && (nB.length > 1 && (this._useCtrlForPanning = nB[1]), nB.length > 2 && (this._panningMouseButton = nB[2])), this.inputs.attachElem … [truncated]
+             IB = CB.j.BackCompatCameraNoPreventDefault(JB), this._useCtrlForPanning = ZB, this._panningMouseButton = TB, "boolean" === typeof JB[0] && (JB.length > 1 && (this._useCtrlForPanning = JB[1]), JB.length > 2 && (this._panningMouseButton = JB[2])), this.inputs.attachElem … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1592-L1593` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1592-L1593) · [Before (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1592-L1593)

```diff
-             const zB = IB.h.KJ[0].U3(BB, jB, jB);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), zB.multiplyInPlace(this.panningAxis), IB.m.TransformNormalToRef(zB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+             const ZB = GB.m.rN[0].cBB(BB, IB, IB);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZB.multiplyInPlace(this.panningAxis), GB.s.TransformNormalToRef(ZB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
```

#### 103. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1595-L1596` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1595-L1596) · [Before (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1595-L1596)

```diff
-                 jB = IB.m.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
-               IB.m.CrossToRef(BB, jB, this._transformedDirection)
+                 IB = GB.s.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
+               GB.s.CrossToRef(BB, IB, this._transformedDirection)
```

#### 104. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1600-L1601` → after: `L1600-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1600-L1601) · [Before (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1600-L1601)

```diff
-                 this._transformedDirection.addInPlace(this.WC);
-                 IB.m.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.WC.jH(this._transformedDirection)
+                 this._transformedDirection.addInPlace(this.J7);
+                 GB.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.J7.TY(this._transformedDirection)
```

#### 105. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1604-L1605` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1604-L1605) · [Before (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1604-L1605)

```diff
-                   const BB = IB.h.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), IB.m.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
+                   const BB = GB.m.Matrix[0];
+                   this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), GB.s.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
```

#### 106. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1607)

```diff
-                 this.WC.addInPlace(this._transformedDirection)
+                 this.J7.addInPlace(this._transformedDirection)
```

#### 107. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1626)

```diff
-               const jB = this._scene.wJ().getDeltaTime() / 1e3,
+               const IB = this._scene.PN().getDeltaTime() / 1e3,
```

#### 108. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1630-L1631)

```diff
-                 const jB = IB.h.KJ[0].set(TB(this._goalTarget.x, this.WC.x), TB(this._goalTarget.y, this.WC.y), TB(this._goalTarget.z, this.WC.z));
-                 IB.m.LerpToRef(this.target, jB, zB, this.WC), 10 * IB.m.Distance(this.target, jB) / QB < rB.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.jH(jB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
+                 const IB = GB.m.rN[0].set(LB(this._goalTarget.x, this.J7.x), LB(this._goalTarget.y, this.J7.y), LB(this._goalTarget.z, this.J7.z));
+                 GB.s.LerpToRef(this.target, IB, ZB, this.J7), 10 * GB.s.Distance(this.target, IB) / TB < zB.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.TY(IB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
```

#### 109. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1634-L1636` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1634-L1636) · [Before (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1634-L1636)

```diff
-                 const jB = IB.d.RotationAlphaBetaGammaToRef(TB(this._goalAlpha, this.alpha), TB(this._goalBeta, this.beta), 0, IB.h.Quaternion[0]),
-                   QB = IB.d.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, IB.h.Quaternion[1]),
-                   nB = IB.d.SlerpToRef(QB, jB, zB, IB.h.Quaternion[2]);
+                 const IB = GB.f.RotationAlphaBetaGammaToRef(LB(this._goalAlpha, this.alpha), LB(this._goalBeta, this.beta), 0, GB.m.Quaternion[0]),
+                   TB = GB.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, GB.m.Quaternion[1]),
+                   JB = GB.f.SlerpToRef(TB, IB, ZB, GB.m.Quaternion[2]);
```

#### 110. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1638-L1639` → after: `L1638-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1638-L1639) · [Before (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1638-L1639)

```diff
-                 const dB = nB.toAlphaBetaGammaToRef(IB.h.KJ[0]);
-                 if (this.alpha = dB.x, this.beta = dB.y, nB.isApprox(jB, rB.c / 5)) {
+                 const oB = JB.toAlphaBetaGammaToRef(GB.m.rN[0]);
+                 if (this.alpha = oB.x, this.beta = oB.y, JB.isApprox(IB, zB.d / 5)) {
```

#### 111. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1641)

```diff
-                   const BB = jB.toAlphaBetaGammaToRef(IB.h.KJ[0]);
+                   const BB = IB.toAlphaBetaGammaToRef(GB.m.rN[0]);
```

#### 112. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1645-L1647` → after: `L1645-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1645-L1647) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (QB - this.radius) * zB, Math.abs(QB / this.radius - 1) < rB.c ? (this._goalRadius = NaN, this.radius = QB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const jB = IB.h.Vector2[0].set(TB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), TB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 IB.i.LerpToRef(this.targetScreenOffset, jB, zB, this.targetScreenOffset), IB.i.Distance(this.targetScreenOffset, jB) < rB.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.jH(jB)) : BB = !0
+               if (isNaN(this._goalRadius) || (this.radius += (TB - this.radius) * ZB, Math.abs(TB / this.radius - 1) < zB.d ? (this._goalRadius = NaN, this.radius = TB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
+                 const IB = GB.m.Vector2[0].set(LB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), LB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
+                 GB.p.LerpToRef(this.targetScreenOffset, IB, ZB, this.targetScreenOffset), GB.p.Distance(this.targetScreenOffset, IB) < zB.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.TY(IB)) : BB = !0
```

#### 113. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1657)

```diff
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || IB.m.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || GB.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
```

#### 114. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1668` → after: `L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1668) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1668)

```diff
-             this._position.equals(BB) || (this._position.jH(BB), this.rebuildAnglesAndRadius())
+             this._position.equals(BB) || (this._position.TY(BB), this.rebuildAnglesAndRadius())
```

#### 115. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1674)

```diff
-             if (QB = this.overrideCloneAlphaBetaRadius ?? QB, BB.computeWorldMatrix) jB && BB.rV ? this._targetBoundingCenter = BB.rV().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.WC = this._getTargetPo … [truncated]
+             if (TB = this.overrideCloneAlphaBetaRadius ?? TB, BB.computeWorldMatrix) IB && BB.qm ? this._targetBoundingCenter = BB.qm().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.J7 = this._getTargetPo … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1679)

```diff
-               this._targetHost = null, this.WC = jB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
+               this._targetHost = null, this.J7 = IB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
```

#### 117. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1690-L1691` → after: `L1690-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1690-L1691) · [Before (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1690-L1691)

```diff
-             if (this._computationVector.U3(this.radius * BB * QB, this.radius * zB, this.radius * jB * QB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || IB.m.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
-               const BB = this.aY().collisionCoordinator;
+             if (this._computationVector.cBB(this.radius * BB * TB, this.radius * ZB, this.radius * IB * TB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || GB.s.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
+               const BB = this.JR().collisionCoordinator;
```

#### 118. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1694)

```diff
-               this._position.jH(this._newPosition);
+               this._position.TY(this._newPosition);
```

#### 119. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1696)

```diff
-               this.allowUpsideDown && QB < 0 && (BB = BB.bu()), this._computeViewMatrix(this._position, nB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
+               this.allowUpsideDown && TB < 0 && (BB = BB.dv()), this._computeViewMatrix(this._position, JB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
```

#### 120. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1698` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1698) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1698)

```diff
-             return this._currentTarget.jH(nB), this._viewMatrix
+             return this._currentTarget.TY(JB), this._viewMatrix
```

#### 121. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1702-L1703` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1702-L1703) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1702-L1703)

```diff
-             BB = BB || this.aY().meshes;
-             const zB = UB.b.MinMax(BB);
+             BB = BB || this.JR().meshes;
+             const ZB = cB.c.MinMax(BB);
```

#### 122. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1705-L1706)

```diff
-             if (QB = Math.max(Math.min(QB, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = QB * this.zoomOnFactor, this.mode === GB.b.ORTHOGRAPHIC_CAMERA) {
-               const BB = this.aY().wJ().getAspectRatio(this),
+             if (TB = Math.max(Math.min(TB, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = TB * this.zoomOnFactor, this.mode === UB.c.ORTHOGRAPHIC_CAMERA) {
+               const BB = this.JR().PN().getAspectRatio(this),
```

#### 123. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1719-L1720` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1719-L1720) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1719-L1720)

```diff
-               const QB = BB || this.aY().meshes;
-               jB = UB.b.MinMax(QB), zB = IB.m.Distance(jB.min, jB.max)
+               const TB = BB || this.JR().meshes;
+               IB = cB.c.MinMax(TB), ZB = GB.s.Distance(IB.min, IB.max)
```

#### 124. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1724)

```diff
-             this.WC = UB.b.Center(jB), QB || (this.maxZ = 2 * zB)
+             this.J7 = cB.c.Center(IB), TB || (this.maxZ = 2 * ZB)
```

#### 125. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1729-L1733` → after: `L1729-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1729-L1733) · [Before (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1729-L1733)

```diff
-               case GB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case GB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case GB.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case GB.b.RIG_MODE_VR:
+               case UB.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case UB.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case UB.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case UB.c.RIG_MODE_VR:
```

#### 126. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1736)

```diff
-               case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 127. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1739)

```diff
-             const nB = new BB(jB, this.alpha + QB, this.beta, this.radius, this.WC, this.aY());
+             const JB = new BB(IB, this.alpha + TB, this.beta, this.radius, this.J7, this.JR());
```

#### 128. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1746-L1750` → after: `L1746-L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1746-L1750) · [Before (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1746-L1750)

```diff
-               case GB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case GB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case GB.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case GB.b.RIG_MODE_VR:
+               case UB.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case UB.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case UB.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case UB.c.RIG_MODE_VR:
```

#### 129. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1753)

```diff
-               case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 130. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1760-L1761)

```diff
-             const QB = IB.m.Distance(BB, jB),
-               nB = this.aY().wJ().getAspectRatio(this),
+             const TB = GB.s.Distance(BB, IB),
+               JB = this.JR().PN().getAspectRatio(this),
```

#### 131. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1777)

```diff
-           jB = [(0, nB.A)()], zB = [(0, nB.A)()], uB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.x)("target")], JB = [(0, nB.s)("targetHost")], mB = [(0, nB.A)()], gB = [(0, nB.A)()], SB = [(0, nB.A)()], MB = [(0, nB.A)()], EB = [(0, nB.A)()], iB = [(0, nB.A)()], qB = [(0,  … [truncated]
+           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], kB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.A)("target")], NB = [(0, JB.q)("targetHost")], gB = [(0, JB.C)()], dB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.C)()], wB = [(0, JB.C)()], OB = [(0, JB.C)()], YB = [(0,  … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1787)

```diff
-           }, null, CB), (0, QB.e)(BB, null, gB, {
+           }, null, xB), (0, TB.j)(BB, null, dB, {
```

#### 133. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1797)

```diff
-           }, null, CB), (0, QB.e)(BB, null, SB, {
+           }, null, xB), (0, TB.j)(BB, null, QB, {
```

#### 134. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1807)

```diff
-           }, null, CB), (0, QB.e)(BB, null, ZB, {
+           }, null, xB), (0, TB.j)(BB, null, mB, {
```

#### 135. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1817)

```diff
-           }, null, CB), (0, QB.e)(BB, null, PB, {
+           }, null, xB), (0, TB.j)(BB, null, eB, {
```

#### 136. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1827)

```diff
-           }, null, CB), (0, QB.e)(null, null, jB, {
+           }, null, xB), (0, TB.j)(null, null, IB, {
```

#### 137. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1840)

```diff
-           }, cB, bB), (0, QB.e)(null, null, zB, {
+           }, EB, DB), (0, TB.j)(null, null, ZB, {
```

#### 138. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1853)

```diff
-           }, vB, RB), (0, QB.e)(null, null, uB, {
+           }, KB, VB), (0, TB.j)(null, null, kB, {
```

#### 139. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1866` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1866) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1866)

```diff
-           }, OB, Bj), (0, QB.e)(null, null, aB, {
+           }, SB, BI), (0, TB.j)(null, null, nB, {
```

#### 140. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1879)

```diff
-           }, jj, zj), (0, QB.e)(null, null, pB, {
+           }, II, ZI), (0, TB.j)(null, null, hB, {
```

#### 141. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1881)

```diff
-             name: "WC",
+             name: "J7",
```

#### 142. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1885-L1886)

```diff
-               has: BB => "WC" in BB,
-               get: BB => BB.WC,
+               has: BB => "J7" in BB,
+               get: BB => BB.J7,
```

#### 143. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1888)

```diff
-                 BB.WC = jB
+                 BB.J7 = IB
```

#### 144. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1892` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1892) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1892)

```diff
-           }, Qj, nj), (0, QB.e)(null, null, JB, {
+           }, TI, JI), (0, TB.j)(null, null, NB, {
```

#### 145. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1905)

```diff
-           }, dj, Ij), (0, QB.e)(null, null, MB, {
+           }, oI, GI), (0, TB.j)(null, null, sB, {
```

#### 146. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1918)

```diff
-           }, Nj, uj), (0, QB.e)(null, null, EB, {
+           }, vI, kI), (0, TB.j)(null, null, wB, {
```

#### 147. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1931` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1931) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1931)

```diff
-           }, Uj, aj), (0, QB.e)(null, null, iB, {
+           }, cI, nI), (0, TB.j)(null, null, OB, {
```

#### 148. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1944)

```diff
-           }, pj, rj), (0, QB.e)(null, null, qB, {
+           }, hI, zI), (0, TB.j)(null, null, YB, {
```

#### 149. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1957)

```diff
-           }, sj, Jj), (0, QB.e)(null, null, fB, {
+           }, FI, NI), (0, TB.j)(null, null, iB, {
```

#### 150. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1970)

```diff
-           }, mj, yj), (0, QB.e)(null, null, oB, {
+           }, gI, qI), (0, TB.j)(null, null, pB, {
```

#### 151. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1983)

```diff
-           }, kj, Gj), (0, QB.e)(null, null, HB, {
+           }, yI, UI), (0, TB.j)(null, null, aB, {
```

#### 152. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L1996)

```diff
-           }, Lj, gj), (0, QB.e)(null, null, DB, {
+           }, WI, dI), (0, TB.j)(null, null, HB, {
```

#### 153. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2009)

```diff
-           }, tj, Sj), (0, QB.e)(null, null, FB, {
+           }, CI, QI), (0, TB.j)(null, null, MB, {
```

#### 154. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2022)

```diff
-           }, Mj, Ej), (0, QB.e)(null, null, YB, {
+           }, sI, wI), (0, TB.j)(null, null, jB, {
```

#### 155. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2035)

```diff
-           }, ij, qj), (0, QB.e)(null, null, hB, {
+           }, OI, YI), (0, TB.j)(null, null, RB, {
```

#### 156. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2048` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2048) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2048)

```diff
-           }, fj, oj), (0, QB.e)(null, null, XB, {
+           }, iI, pI), (0, TB.j)(null, null, rB, {
```

#### 157. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2061)

```diff
-           }, Hj, Dj), (0, QB.e)(null, null, WB, {
+           }, aI, HI), (0, TB.j)(null, null, uB, {
```

#### 158. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2074)

```diff
-           }, Fj, Yj), (0, QB.e)(null, null, eB, {
+           }, MI, jI), (0, TB.j)(null, null, fB, {
```

#### 159. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2087)

```diff
-           }, Vj, hj), (0, QB.e)(null, null, lB, {
+           }, PI, RI), (0, TB.j)(null, null, lB, {
```

#### 160. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2100)

```diff
-           }, Xj, Zj), (0, QB.e)(null, null, wB, {
+           }, rI, mI), (0, TB.j)(null, null, AB, {
```

#### 161. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2113)

```diff
-           }, Aj, Tj), (0, QB.e)(null, null, xB, {
+           }, XI, LI), (0, TB.j)(null, null, tB, {
```

#### 162. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2135)

```diff
-     WB || (WB = !0, uB.c.AddNodeConstructor("ArcRotateCamera", ((BB, jB) => () => new PB(BB, 0, 0, 1, IB.m.Zero(), jB))), (0, hB.d)("BABYLON.ArcRotateCamera", PB))
+     uB || (uB = !0, kB.e.AddNodeConstructor("ArcRotateCamera", ((BB, IB) => () => new eB(BB, 0, 0, 1, GB.s.Zero(), IB))), (0, RB.i)("BABYLON.ArcRotateCamera", eB))
```

#### 163. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2137)

```diff
-   40335: (BB, jB, zB) => {
+   40297: (BB, IB, ZB) => {
```

#### 164. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2139)

```diff
-       e: () => QB.e
+       d: () => TB.e
```

#### 165. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2141-L2142` → after: `L2141-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2141-L2142) · [Before (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2141-L2142)

```diff
-     var QB = zB(40339);
-     (0, QB.f)()
+     var TB = ZB(40305);
+     (0, TB.h)()
```

#### 166. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2144)

```diff
-   40339: (BB, jB, zB) => {
+   40305: (BB, IB, ZB) => {
```

#### 167. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2147` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2147) · [Before (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2147)

```diff
-       f: () => rB
+       h: () => zB
```

#### 168. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2149-L2155` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2149-L2155) · [Before (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2149-L2155)

```diff
-     var QB = zB(40066),
-       nB = zB(40068),
-       dB = zB(37171),
-       IB = zB(37379),
-       NB = zB(40344),
-       uB = zB(40306),
-       UB = zB(37222);
+     var TB = ZB(40061),
+       JB = ZB(40065),
+       oB = ZB(37120),
+       GB = ZB(37311),
+       vB = ZB(40310),
+       kB = ZB(40272),
+       cB = ZB(37170);
```

#### 169. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2165)

```diff
-             super(BB, zB, nB), this.groundColor = (0, QB.g)(this, UB, new IB.d(0, 0, 0)), this.direction = ((0, QB.g)(this, aB), (0, QB.g)(this, pB, void 0)), (0, QB.g)(this, rB), this.direction = jB || dB.m.Up()
+             super(BB, ZB, JB), this.groundColor = (0, TB.l)(this, cB, new GB.c(0, 0, 0)), this.direction = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, void 0)), (0, TB.l)(this, zB), this.direction = IB || oB.s.Up()
```

#### 170. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2174)

```diff
-             return this.direction = dB.m.Normalize(BB.subtract(dB.m.Zero())), this.direction
+             return this.direction = oB.s.Normalize(BB.subtract(oB.s.Zero())), this.direction
```

#### 171. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2180)

```diff
-             const zB = dB.m.Normalize(this.direction);
+             const ZB = oB.s.Normalize(this.direction);
```

#### 172. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2184)

```diff
-             const zB = dB.m.Normalize(this.direction);
+             const ZB = oB.s.Normalize(this.direction);
```

#### 173. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2188)

```diff
-             return this._worldMatrix || (this._worldMatrix = dB.c.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = oB.b.Identity()), this._worldMatrix
```

#### 174. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2198)

```diff
-           jB = [(0, nB.i)()], zB = [(0, nB.x)()], (0, QB.e)(null, null, jB, {
+           IB = [(0, JB.l)()], ZB = [(0, JB.A)()], (0, TB.j)(null, null, IB, {
```

#### 175. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2211)

```diff
-           }, UB, aB), (0, QB.e)(null, null, zB, {
+           }, cB, nB), (0, TB.j)(null, null, ZB, {
```

#### 176. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/264.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/264.js#L2235)

```diff
-       pB || (pB = !0, uB.c.AddNodeConstructor("Light_Type_3", ((BB, jB) => () => new aB(BB, dB.m.Zero(), jB))), (0, UB.d)("BABYLON.HemisphericLight", aB))
+       hB || (hB = !0, kB.e.AddNodeConstructor("Light_Type_3", ((BB, IB) => () => new nB(BB, oB.s.Zero(), IB))), (0, cB.i)("BABYLON.HemisphericLight", nB))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (236 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   40491: (BB, jB, zB) => {
+   40443: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L6)

```diff
-       d: () => nB
+       b: () => JB
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L8)

```diff
-     var QB = zB(40076);
+     var TB = ZB(40071);
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L32)

```diff
-           BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.aY ? this._imageProcessingConfiguration = this.a … [truncated]
+           BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.JR ? this._imageProcessingConfiguration = this.J … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L81)

```diff
-   40373: (BB, jB, zB) => {
+   40333: (BB, IB, ZB) => {
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L83-L84` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L83-L84) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L83-L84)

```diff
-       c: () => dB,
-       e: () => nB
+       b: () => oB,
+       c: () => JB
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L86)

```diff
-     var QB = zB(40376);
+     var TB = ZB(40335);
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L95)

```diff
-     class dB extends QB.b {
+     class oB extends TB.e {
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L101)

```diff
-   40451: (BB, jB, zB) => {
+   40400: (BB, IB, ZB) => {
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L105-L112` → after: `L105-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L105-L112) · [Before (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L105-L112)

```diff
-     var QB = zB(40066),
-       nB = zB(40380),
-       dB = zB(40068),
-       IB = zB(40435),
-       NB = zB(40376),
-       uB = zB(40457),
-       UB = zB(40428);
-     class aB extends NB.b {
+     var TB = ZB(40061),
+       JB = ZB(40339),
+       oB = ZB(40065),
+       GB = ZB(40383),
+       vB = ZB(40335),
+       kB = ZB(40408),
+       cB = ZB(40371);
+     class nB extends vB.e {
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L119)

```diff
-       let pB, rB, sB, JB, mB, yB, kB = uB.c,
+       let hB, zB, FB, NB, gB, qB, yB = kB.e,
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L137)

```diff
-           (0, QB.d)(this, jB, BB, "f")
+           (0, TB.f)(this, IB, BB, "f")
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L143)

```diff
-           (0, QB.d)(this, zB, BB, "f")
+           (0, TB.f)(this, ZB, BB, "f")
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L149)

```diff
-           (0, QB.d)(this, NB, BB, "f")
+           (0, TB.f)(this, vB, BB, "f")
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L159)

```diff
-           super(BB, "DetailMap", 140, new aB, dB), this._texture = null, jB.set(this, (0, QB.g)(this, GB, void 0)), this.diffuseBlendLevel = ((0, QB.g)(this, LB), (0, QB.g)(this, gB, 1)), this.roughnessBlendLevel = ((0, QB.g)(this, tB), (0, QB.g)(this, SB, 1)), this.bumpLevel = ( … [truncated]
+           super(BB, "DetailMap", 140, new nB, oB), this._texture = null, IB.set(this, (0, TB.l)(this, UB, void 0)), this.diffuseBlendLevel = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, 1)), this.roughnessBlendLevel = ((0, TB.l)(this, CB), (0, TB.l)(this, QB, 1)), this.bumpLevel = ( … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L162)

```diff
-           return !this._isEnabled || !(BB._areTexturesDirty && jB.texturesEnabled && zB.getCaps().standardDerivatives && this._texture && IB.d.DetailTextureEnabled && !this._texture.isReady())
+           return !this._isEnabled || !(BB._areTexturesDirty && IB.texturesEnabled && ZB.getCaps().standardDerivatives && this._texture && GB.e.DetailTextureEnabled && !this._texture.isReady())
```

#### 17. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L167-L168` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L167-L168) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L167-L168)

```diff
-             const zB = jB.wJ();
-             BB._areTexturesDirty && (zB.getCaps().standardDerivatives && this._texture && IB.d.DetailTextureEnabled && this._isEnabled ? ((0, UB.cb)(this._texture, BB, "DETAIL"), BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : BB.DETAIL = !1)
+             const ZB = IB.PN();
+             BB._areTexturesDirty && (ZB.getCaps().standardDerivatives && this._texture && GB.e.DetailTextureEnabled && this._isEnabled ? ((0, cB.ab)(this._texture, BB, "DETAIL"), BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : BB.DETAIL = !1)
```

#### 18. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L174)

```diff
-           BB.useUbo && zB && BB.isSync || this._texture && IB.d.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, UB.A)(this._texture, BB, "detail")), jB.texturesEnabled  … [truncated]
+           BB.useUbo && ZB && BB.isSync || this._texture && GB.e.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, cB.y)(this._texture, BB, "detail")), IB.texturesEnabled  … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L209)

```diff
-         pB = [(0, dB.v)("detailTexture"), (0, dB.e)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, dB.A)()], sB = [(0, dB.A)()], JB = [(0, dB.A)()], mB = [(0, dB.A)(), (0, dB.e)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, dB.A)(), (0, dB.e)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+         hB = [(0, oB.v)("detailTexture"), (0, oB.e)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, oB.C)()], FB = [(0, oB.C)()], NB = [(0, oB.C)()], gB = [(0, oB.C)(), (0, oB.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, oB.C)(), (0, oB.e)("_markAllSubMeshesAsTexturesDirty" … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L222)

```diff
-         }, GB, LB), (0, QB.e)(BB, null, mB, {
+         }, UB, WB), (0, TB.j)(BB, null, gB, {
```

#### 21. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L235)

```diff
-         }, qB, fB), (0, QB.e)(BB, null, yB, {
+         }, YB, iB), (0, TB.j)(BB, null, qB, {
```

#### 22. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L248)

```diff
-         }, oB, HB), (0, QB.e)(null, null, rB, {
+         }, pB, aB), (0, TB.j)(null, null, zB, {
```

#### 23. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L261)

```diff
-         }, gB, tB), (0, QB.e)(null, null, sB, {
+         }, dB, CB), (0, TB.j)(null, null, FB, {
```

#### 24. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L274)

```diff
-         }, SB, MB), (0, QB.e)(null, null, JB, {
+         }, QB, sB), (0, TB.j)(null, null, NB, {
```

#### 25. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L296)

```diff
-   40376: (BB, jB, zB) => {
+   40335: (BB, IB, ZB) => {
```

#### 26. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L298)

```diff
-       b: () => QB
+       e: () => TB
```

#### 27. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L395)

```diff
-   40475: (BB, jB, zB) => {
+   40431: (BB, IB, ZB) => {
```

#### 28. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L397-L398` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L397-L398) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L397-L398)

```diff
-       c: () => NB,
-       f: () => IB,
+       b: () => vB,
+       e: () => GB,
```

#### 29. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L401)

```diff
-     var QB, nB = zB(37171);
+     var TB, JB = ZB(37120);
```

#### 30. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L406)

```diff
-       if (!Number.isInteger(QB) || QB < 0 || QB > zB) throw new Error(`Invalid geometry object ID ${QB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${zB.toString(16).toUpperCase()}.`);
+       if (!Number.isInteger(TB) || TB < 0 || TB > ZB) throw new Error(`Invalid geometry object ID ${TB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${ZB.toString(16).toUpperCase()}.`);
```

#### 31. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L412)

```diff
-       if (!Number.isInteger(zB) || zB < 0 || zB > 255 || 0 !== zB && 0 === (63 & zB)) throw new Error(`Invalid geometry mesh-blending tag ${zB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       if (!Number.isInteger(ZB) || ZB < 0 || ZB > 255 || 0 !== ZB && 0 === (63 & ZB)) throw new Error(`Invalid geometry mesh-blending tag ${ZB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
```

#### 32. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L422-L423)

```diff
-           previousViewProjection: nB.c.Zero(),
-           currentViewProjection: nB.c.Zero(),
+           previousViewProjection: JB.b.Zero(),
+           currentViewProjection: JB.b.Zero(),
```

#### 33. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L443)

```diff
-           void 0 !== BB && (nB += `#define ${dB.define}\n#define ${dB.defineIndex} ${BB}\n`)
+           void 0 !== BB && (JB += `#define ${oB.define}\n#define ${oB.defineIndex} ${BB}\n`)
```

#### 34. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L445)

```diff
-         QB.objectIdIsRedFormat && (nB += "#define PREPASS_OBJECT_ID_R8\n"), QB._defines = nB + `#define SCENE_MRT_COUNT ${jB.length}\n`
+         TB.objectIdIsRedFormat && (JB += "#define PREPASS_OBJECT_ID_R8\n"), TB._defines = JB + `#define SCENE_MRT_COUNT ${IB.length}\n`
```

#### 35. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L479-L480` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L479-L480) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L479-L480)

```diff
-           if (zB.cL)
-             for (const jB of zB.cL) jB._removeDrawWrapper(BB)
+           if (ZB.EW)
+             for (const IB of ZB.EW) IB._removeDrawWrapper(BB)
```

#### 36. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L500-L501)

```diff
-         const UB = zB.aY(),
-           aB = UB.wJ();
+         const cB = ZB.JR(),
+           nB = cB.PN();
```

#### 37. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L506)

```diff
-           else if (QB > BB) throw new Error(`Invalid geometry object ID ${QB} for mesh "${zB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
+           else if (TB > BB) throw new Error(`Invalid geometry object ID ${TB} for mesh "${ZB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
```

#### 38. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L516)

```diff
-           if (BB[zB.uniqueId] || (BB[zB.uniqueId] = QB.clone(), uB.previousWorldMatrices[zB.uniqueId] = QB.clone()), nB[zB.uniqueId] !== aB.frameId && (uB.previousWorldMatrices[zB.uniqueId].jH(BB[zB.uniqueId]), nB[zB.uniqueId] = aB.frameId), BB[zB.uniqueId].jH(QB), -1 === uB.last … [truncated]
+           if (BB[ZB.uniqueId] || (BB[ZB.uniqueId] = TB.clone(), kB.previousWorldMatrices[ZB.uniqueId] = TB.clone()), JB[ZB.uniqueId] !== nB.frameId && (kB.previousWorldMatrices[ZB.uniqueId].TY(BB[ZB.uniqueId]), JB[ZB.uniqueId] = nB.frameId), BB[ZB.uniqueId].TY(TB), -1 === kB.last … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L630)

```diff
-   40457: (BB, jB, zB) => {
+   40408: (BB, IB, ZB) => {
```

#### 40. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L632-L633` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L632-L633) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L632-L633)

```diff
-       c: () => rB,
-       f: () => JB
+       e: () => zB,
+       h: () => NB
```

#### 41. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L635-L638` → after: `L635-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L635-L638) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L635-L638)

```diff
-     var QB = zB(40066),
-       nB = zB(40068),
-       dB = zB(39974),
-       IB = zB(39932);
+     var TB = ZB(40061),
+       JB = ZB(40065),
+       oB = ZB(39939),
+       GB = ZB(39905);
```

#### 42. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L642)

```diff
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.aY(), this._engine = this._scene.wJ()
+         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.JR(), this._engine = this._scene.PN()
```

#### 43. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L747)

```diff
-                             BB = `${jB.type}f`
+                             BB = `${IB.type}f`
```

#### 44. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L749-L750)

```diff
-                         this._uboDeclaration += QB > 0 ? `uniform ${jB.name}: array<${BB}, ${QB}>;\n` : `uniform ${jB.name}: ${BB};\n`
-                       } else this._uboDeclaration += `${jB.type} ${jB.name}${QB>0?`[${QB}]`:""};\n`
+                         this._uboDeclaration += TB > 0 ? `uniform ${IB.name}: array<${BB}, ${TB}>;\n` : `uniform ${IB.name}: ${BB};\n`
+                       } else this._uboDeclaration += `${IB.type} ${IB.name}${TB>0?`[${TB}]`:""};\n`
```

#### 45. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L784-L785` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L784-L785) · [Before (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L784-L785)

```diff
-                 shadersRepository: IB.e.GetShadersRepository(NB),
-                 includesShadersStore: IB.e.GetIncludesShadersStore(NB),
+                 shadersRepository: GB.c.GetShadersRepository(vB),
+                 includesShadersStore: GB.c.GetIncludesShadersStore(vB),
```

#### 46. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L790)

```diff
-                 jQB: this._engine.jQB,
+                 iTB: this._engine.iTB,
```

#### 47. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L792)

```diff
-               }), uB.isFragment = "fragment" === zB, (0, dB.h)(UB, uB, (BB => UB = BB))), nB += UB + "\n")
+               }), kB.isFragment = "fragment" === ZB, (0, oB.j)(cB, kB, (BB => cB = BB))), JB += cB + "\n")
```

#### 48. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L829-L830)

```diff
-     var aB = zB(40086),
-       pB = zB(37222);
+     var nB = ZB(40085),
+       hB = ZB(37170);
```

#### 49. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L852)

```diff
-             this.name = (0, QB.g)(this, NB, void 0), this.priority = ((0, QB.g)(this, UB), (0, QB.g)(this, pB, 500)), this.resolveIncludes = ((0, QB.g)(this, rB), (0, QB.g)(this, sB, !1)), this.registerForExtraEvents = ((0, QB.g)(this, JB), (0, QB.g)(this, mB, !1)), this.doNotSer … [truncated]
+             this.name = (0, TB.l)(this, vB, void 0), this.priority = ((0, TB.l)(this, cB), (0, TB.l)(this, hB, 500)), this.resolveIncludes = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, !1)), this.registerForExtraEvents = ((0, TB.l)(this, NB), (0, TB.l)(this, gB, !1)), this.doNotSer … [truncated]
```

#### 50. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L910)

```diff
-           jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], IB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
+           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
```

#### 51. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L923)

```diff
-           }, NB, UB), (0, QB.e)(null, null, zB, {
+           }, vB, cB), (0, TB.j)(null, null, ZB, {
```

#### 52. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L936)

```diff
-           }, pB, rB), (0, QB.e)(null, null, dB, {
+           }, hB, zB), (0, TB.j)(null, null, oB, {
```

#### 53. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L949)

```diff
-           }, sB, JB), (0, QB.e)(null, null, IB, {
+           }, FB, NB), (0, TB.j)(null, null, GB, {
```

#### 54. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L973)

```diff
-       sB || (sB = !0, (0, pB.d)("BABYLON.MaterialPluginBase", rB))
+       FB || (FB = !0, (0, hB.i)("BABYLON.MaterialPluginBase", zB))
```

#### 55. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L976)

```diff
-   40364: (BB, jB, zB) => {
+   40330: (BB, IB, ZB) => {
```

#### 56. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L991-L992` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L991-L992) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L991-L992)

```diff
-           const nB = jB.wJ();
-           this.currentViewProjection.updateFlag !== jB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = nB.frameId, this.previousViewProjection.jH(this.currentViewProjection), this.currentViewProjection.jH(jB.getTransformMatrix())) : this._lastUpdateFrameId !== nB.fra … [truncated]
+           const JB = IB.PN();
+           this.currentViewProjection.updateFlag !== IB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = JB.frameId, this.previousViewProjection.TY(this.currentViewProjection), this.currentViewProjection.TY(IB.getTransformMatrix())) : this._lastUpdateFrameId !== JB.fra … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L997)

```diff
-   40482: (BB, jB, zB) => {
+   40437: (BB, IB, ZB) => {
```

#### 58. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1009)

```diff
-   40350: (BB, jB, zB) => {
+   40318: (BB, IB, ZB) => {
```

#### 59. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1011)

```diff
-       StandardMaterial: () => QB.e
+       StandardMaterial: () => TB.f
```

#### 60. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1013-L1014` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1013-L1014) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1013-L1014)

```diff
-     var QB = zB(40355);
-     (0, QB.c)()
+     var TB = ZB(40322);
+     (0, TB.d)()
```

#### 61. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1016)

```diff
-   40355: (BB, jB, zB) => {
+   40322: (BB, IB, ZB) => {
```

#### 62. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1018-L1019` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1018-L1019) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1018-L1019)

```diff
-       c: () => XB,
-       e: () => VB
+       d: () => rB,
+       f: () => PB
```

#### 63. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1021-L1029` → after: `L1021-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1021-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1021-L1035) · [Before (L1021-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1021-L1029)

```diff
-     var QB = zB(40066),
-       nB = zB(40068),
-       dB = zB(40171),
-       IB = zB(40156),
-       NB = zB(37379),
-       uB = zB(40211),
-       UB = zB(40364),
-       aB = zB(40373),
-       pB = zB(40180),
+     var TB = ZB(40061),
+       JB = ZB(40065),
+       oB = ZB(40163),
+       GB = ZB(40148),
+       vB = ZB(37311),
+       kB = ZB(40188),
+       cB = ZB(40330),
+       nB = ZB(40333),
+       hB = ZB(40166),
+       zB = ZB(40339),
+       FB = ZB(40335),
+       NB = ZB(40390),
+       gB = ZB(40383),
+       qB = ZB(40395),
+       yB = ZB(40400),
```

#### 64. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1031-L1046` → after: `L1037-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1037-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1037-L1046) · [Before (L1031-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1031-L1046)

```diff
-       sB = zB(40376),
-       JB = zB(40438),
-       mB = zB(40435),
-       yB = zB(40445),
-       kB = zB(40451),
-       GB = zB(40432),
-       LB = zB(40466),
-       gB = zB(40428),
-       tB = zB(40086),
-       SB = zB(40473),
-       MB = zB(40475),
-       EB = zB(40478),
-       iB = zB(40482),
-       qB = zB(40491),
-       fB = zB(37222),
-       oB = zB(39965);
+       WB = ZB(40416),
+       dB = ZB(40371),
+       CB = ZB(40085),
+       QB = ZB(40425),
+       sB = ZB(40431),
+       wB = ZB(40433),
+       OB = ZB(40437),
+       YB = ZB(40443),
+       iB = ZB(37170),
+       pB = ZB(39931);
```

#### 65. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1051-L1052)

```diff
-     class DB extends((0, iB.b)((0, EB.d)(sB.b))) {}
-     class FB extends((0, aB.e)(DB)) {
+     class HB extends((0, OB.b)((0, wB.b)(FB.e))) {}
+     class MB extends((0, nB.c)(HB)) {
```

#### 66. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1057)

```diff
-     class YB extends((0, qB.d)(JB.e)) {}
+     class jB extends((0, YB.b)(NB.b)) {}
```

#### 67. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1212)

```diff
-             (0, QB.d)(this, jB, BB, "f")
+             (0, TB.f)(this, IB, BB, "f")
```

#### 68. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1218)

```diff
-             (0, QB.d)(this, aB, BB, "f")
+             (0, TB.f)(this, nB, BB, "f")
```

#### 69. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1224)

```diff
-             (0, QB.d)(this, sB, BB, "f")
+             (0, TB.f)(this, FB, BB, "f")
```

#### 70. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1230)

```diff
-             (0, QB.d)(this, EB, BB, "f")
+             (0, TB.f)(this, wB, BB, "f")
```

#### 71. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1236)

```diff
-             (0, QB.d)(this, iB, BB, "f")
+             (0, TB.f)(this, OB, BB, "f")
```

#### 72. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1242)

```diff
-             (0, QB.d)(this, qB, BB, "f")
+             (0, TB.f)(this, YB, BB, "f")
```

#### 73. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1248)

```diff
-             (0, QB.d)(this, fB, BB, "f")
+             (0, TB.f)(this, iB, BB, "f")
```

#### 74. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1254)

```diff
-             (0, QB.d)(this, oB, BB, "f")
+             (0, TB.f)(this, pB, BB, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1260)

```diff
-             (0, QB.d)(this, DB, BB, "f")
+             (0, TB.f)(this, HB, BB, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1266)

```diff
-             (0, QB.d)(this, VB, BB, "f")
+             (0, TB.f)(this, PB, BB, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1272)

```diff
-             (0, QB.d)(this, hB, BB, "f")
+             (0, TB.f)(this, RB, BB, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1278)

```diff
-             (0, QB.d)(this, XB, BB, "f")
+             (0, TB.f)(this, rB, BB, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1284)

```diff
-             (0, QB.d)(this, ZB, BB, "f")
+             (0, TB.f)(this, mB, BB, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1290)

```diff
-             (0, QB.d)(this, AB, BB, "f")
+             (0, TB.f)(this, XB, BB, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1296)

```diff
-             (0, QB.d)(this, TB, BB, "f")
+             (0, TB.f)(this, LB, BB, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1302)

```diff
-             (0, QB.d)(this, PB, BB, "f")
+             (0, TB.f)(this, eB, BB, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1308)

```diff
-             (0, QB.d)(this, WB, BB, "f")
+             (0, TB.f)(this, uB, BB, "f")
```

#### 84. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1314)

```diff
-             (0, QB.d)(this, eB, BB, "f")
+             (0, TB.f)(this, fB, BB, "f")
```

#### 85. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1320` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1320) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1320)

```diff
-             (0, QB.d)(this, lB, BB, "f")
+             (0, TB.f)(this, lB, BB, "f")
```

#### 86. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1326)

```diff
-             (0, QB.d)(this, wB, BB, "f")
+             (0, TB.f)(this, AB, BB, "f")
```

#### 87. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1332)

```diff
-             (0, QB.d)(this, xB, BB, "f")
+             (0, TB.f)(this, tB, BB, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1338)

```diff
-             (0, QB.d)(this, KB, BB, "f")
+             (0, TB.f)(this, bB, BB, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1344)

```diff
-             (0, QB.d)(this, CB, BB, "f")
+             (0, TB.f)(this, xB, BB, "f")
```

#### 90. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1350)

```diff
-             (0, QB.d)(this, cB, BB, "f")
+             (0, TB.f)(this, EB, BB, "f")
```

#### 91. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1356)

```diff
-             (0, QB.d)(this, bB, BB, "f")
+             (0, TB.f)(this, DB, BB, "f")
```

#### 92. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1362)

```diff
-             (0, QB.d)(this, vB, BB, "f")
+             (0, TB.f)(this, KB, BB, "f")
```

#### 93. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1368)

```diff
-             (0, QB.d)(this, RB, BB, "f")
+             (0, TB.f)(this, VB, BB, "f")
```

#### 94. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1374)

```diff
-             (0, QB.d)(this, OB, BB, "f")
+             (0, TB.f)(this, SB, BB, "f")
```

#### 95. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1380)

```diff
-             (0, QB.d)(this, Bj, BB, "f")
+             (0, TB.f)(this, BI, BB, "f")
```

#### 96. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1386)

```diff
-             (0, QB.d)(this, jj, BB, "f")
+             (0, TB.f)(this, II, BB, "f")
```

#### 97. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1392)

```diff
-             (0, QB.d)(this, zj, BB, "f")
+             (0, TB.f)(this, ZI, BB, "f")
```

#### 98. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1398)

```diff
-             (0, QB.d)(this, Qj, BB, "f")
+             (0, TB.f)(this, TI, BB, "f")
```

#### 99. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1407` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1407) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1407)

```diff
-             super(zB, nB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, QB.g)(this, qz, null), jB.set(this, ((0, QB.g)(this, fz), (0, QB.g)(this, oz, void 0))), this._ambientTexture = ((0, QB.g)(this, Hz), (0, … [truncated]
+             super(ZB, JB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, TB.l)(this, YZ, null), IB.set(this, ((0, TB.l)(this, iZ), (0, TB.l)(this, pZ, void 0))), this._ambientTexture = ((0, TB.l)(this, aZ), (0, … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1419)

```diff
-             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === rB.b.MATERIAL_ALPHATEST)
+             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === zB.e.MATERIAL_ALPHATEST)
```

#### 101. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1422)

```diff
-             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== rB.b.MATERIAL_OPAQUE
+             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== zB.e.MATERIAL_OPAQUE
```

#### 102. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1436)

```diff
-             const dB = this.aY(),
+             const oB = this.JR(),
```

#### 103. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1439-L1443` → after: `L1439-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1439-L1443) · [Before (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1439-L1443)

```diff
-             const NB = dB.wJ();
-             if (IB._needNormals = (0, gB.ab)(dB, jB, IB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, gB.c)(dB, jB, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, gB.gb)(dB, IB);
-             const aB = this.needAlphaBlendingForMesh(jB) && this.aY().useOrderIndependentTransparency;
-             if ((0, gB.lb)(dB, IB, this.canRenderToMRT && !aB), (0, gB.hb)(dB, IB, aB), MB.c.PrepareDefines(NB.currentRenderPassId, jB, IB), IB._areTexturesDirty) {
+             const vB = oB.PN();
+             if (GB._needNormals = (0, dB.Y)(oB, IB, GB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, dB.c)(oB, IB, this._maxSimultaneousLights, this._disableLighting)) return !1;
+             (0, dB.fb)(oB, GB);
+             const nB = this.needAlphaBlendingForMesh(IB) && this.JR().useOrderIndependentTransparency;
+             if ((0, dB.kb)(oB, GB, this.canRenderToMRT && !nB), (0, dB.gb)(oB, GB, nB), sB.b.PrepareDefines(vB.currentRenderPassId, IB, GB), GB._areTexturesDirty) {
```

#### 104. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1449)

```diff
-                   (0, gB.cb)(this._diffuseTexture, IB, "DIFFUSE")
+                   (0, dB.ab)(this._diffuseTexture, GB, "DIFFUSE")
```

#### 105. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1453` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1453) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1453)

```diff
-                   (0, gB.cb)(this._ambientTexture, IB, "AMBIENT")
+                   (0, dB.ab)(this._ambientTexture, GB, "AMBIENT")
```

#### 106. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1457` → after: `L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1457) · [Before (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1457)

```diff
-                   (0, gB.cb)(this._opacityTexture, IB, "OPACITY"), IB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
+                   (0, dB.ab)(this._opacityTexture, GB, "OPACITY"), GB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
```

#### 107. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1459)

```diff
-                 if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (IB.ROUGHNESS = this._roughness > 0, IB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (IB.ROUGHNESS = !1, IB.REFLECTIONOVERALPHA = !1), !(0, gB.Y)(dB, this._reflectionTexture, IB)) return !1;
+                 if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (GB.ROUGHNESS = this._roughness > 0, GB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (GB.ROUGHNESS = !1, GB.REFLECTIONOVERALPHA = !1), !(0, dB.W)(oB, this._reflectionTexture, GB)) return !1;
```

#### 108. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1462)

```diff
-                   (0, gB.cb)(this._emissiveTexture, IB, "EMISSIVE")
+                   (0, dB.ab)(this._emissiveTexture, GB, "EMISSIVE")
```

#### 109. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1466)

```diff
-                   (0, gB.cb)(this._lightmapTexture, IB, "LIGHTMAP"), IB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, IB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
+                   (0, dB.ab)(this._lightmapTexture, GB, "LIGHTMAP"), GB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, GB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
```

#### 110. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1470)

```diff
-                   (0, gB.cb)(this._specularTexture, IB, "SPECULAR"), IB.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
+                   (0, dB.ab)(this._specularTexture, GB, "SPECULAR"), GB.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
```

#### 111. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1472)

```diff
-                 if (dB.wJ().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
+                 if (oB.PN().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
```

#### 112. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1474)

```diff
-                   (0, gB.cb)(this._bumpTexture, IB, "BUMP"), IB.PARALLAX = this._useParallax, IB.PARALLAX_RHS = dB.useRightHandedSystem, IB.PARALLAXOCCLUSION = this._useParallaxOcclusion, IB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
+                   (0, dB.ab)(this._bumpTexture, GB, "BUMP"), GB.PARALLAX = this._useParallax, GB.PARALLAX_RHS = oB.useRightHandedSystem, GB.PARALLAXOCCLUSION = this._useParallaxOcclusion, GB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
```

#### 113. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1492)

```diff
-             (0, gB.db)(jB, dB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(jB), IB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, zB.getRenderingMesh(), this._isVertexOutputInvariant), (0, gB.U)(dB, NB, this, IB, QB, nul … [truncated]
+             (0, dB.eb)(IB, oB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(IB), GB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZB.getRenderingMesh(), this._isVertexOutputInvariant), (0, dB.V)(oB, vB, this, GB, TB, nul … [truncated]
```

#### 114. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1497-L1500` → after: `L1497-L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1497-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1497-L1500) · [Before (L1497-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1497-L1500)

```diff
-               const nB = new yB.c;
-               IB.REFLECTION && nB.addFallback(0, "REFLECTION"), IB.SPECULAR && nB.addFallback(0, "SPECULAR"), IB.BUMP && nB.addFallback(0, "BUMP"), IB.PARALLAX && nB.addFallback(1, "PARALLAX"), IB.PARALLAX_RHS && nB.addFallback(1, "PARALLAX_RHS"), IB.PARALLAXOCCLUSION && nB.addFa … [truncated]
-               const aB = [uB.l.PositionKind];
-               IB.NORMAL && aB.push(uB.l.NormalKind), IB.TANGENT && aB.push(uB.l.TangentKind);
+               const JB = new qB.e;
+               GB.REFLECTION && JB.addFallback(0, "REFLECTION"), GB.SPECULAR && JB.addFallback(0, "SPECULAR"), GB.BUMP && JB.addFallback(0, "BUMP"), GB.PARALLAX && JB.addFallback(1, "PARALLAX"), GB.PARALLAX_RHS && JB.addFallback(1, "PARALLAX_RHS"), GB.PARALLAXOCCLUSION && JB.addFa … [truncated]
+               const nB = [kB.i.PositionKind];
+               GB.NORMAL && nB.push(kB.i.NormalKind), GB.TANGENT && nB.push(kB.i.TangentKind);
```

#### 115. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1502` → after: `L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1502) · [Before (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1502)

```diff
-               IB.VERTEXCOLOR && aB.push(uB.l.ColorKind), (0, gB.J)(aB, jB, IB, nB), (0, gB.K)(aB, IB), (0, gB.N)(aB, jB, IB), (0, gB.H)(aB, jB, IB);
+               GB.VERTEXCOLOR && nB.push(kB.i.ColorKind), (0, dB.I)(nB, IB, GB, JB), (0, dB.L)(nB, GB), (0, dB.M)(nB, IB, GB), (0, dB.F)(nB, IB, GB);
```

#### 116. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1512)

```diff
-               if (this._eventInfo.fallbacks = nB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = IB, this._eventInfo.uniforms = JB, this._eventInfo.attributes = aB, this._eventInfo.samplers = mB, this._eventInfo.uniformBuffersNames = kB, this._eventInfo.customCode =  … [truncated]
+               if (this._eventInfo.fallbacks = JB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = GB, this._eventInfo.uniforms = NB, this._eventInfo.attributes = nB, this._eventInfo.samplers = gB, this._eventInfo.uniformBuffersNames = yB, this._eventInfo.customCode =  … [truncated]
```

#### 117. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1523` → after: `L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1523) · [Before (L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1523)

```diff
-                   JB.push(`vp_${jB}_info`)
+                   NB.push(`vp_${IB}_info`)
```

#### 118. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1530)

```diff
-                 qB = dB.wJ().createEffect(sB, {
+                 YB = oB.PN().createEffect(FB, {
```

#### 119. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1555)

```diff
-             BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightCol … [truncated]
+             BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightCol … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1558)

```diff
-             const nB = this.aY(),
+             const JB = this.JR(),
```

#### 121. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1563)

```diff
-             this._activeEffect = uB, zB.getMeshUniformBuffer().bindToEffect(uB, "Mesh"), zB.transferToEffect(jB), this._uniformBuffer.bindToEffect(uB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, nB, zB, jB, this.isFrozen), MB.c.Bind(nB.wJ().currentRe … [truncated]
+             this._activeEffect = kB, ZB.getMeshUniformBuffer().bindToEffect(kB, "Mesh"), ZB.transferToEffect(IB), this._uniformBuffer.bindToEffect(kB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, JB, ZB, IB, this.isFrozen), sB.b.Bind(JB.PN().currentRe … [truncated]
```

#### 122. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1569-L1570)

```diff
-               rB = nB.wJ()._features.needToAlwaysBindUniformBuffers;
-             (0, gB.f)(zB, uB), this._vertexPullingMetadata && (0, LB.c)(uB, this._vertexPullingMetadata);
+               zB = JB.PN()._features.needToAlwaysBindUniformBuffers;
+             (0, dB.e)(ZB, kB), this._vertexPullingMetadata && (0, WB.c)(kB, this._vertexPullingMetadata);
```

#### 123. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1576)

```diff
-                     const BB = NB.o.Color3[0];
+                     const BB = vB.k.Color3[0];
```

#### 124. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1581)

```diff
-                 if (dB.ALPHATEST && sB.updateFloat("alphaCutOff", this.alphaCutOff), nB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (sB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, gB.A)(this._di … [truncated]
+                 if (oB.ALPHATEST && FB.updateFloat("alphaCutOff", this.alphaCutOff), JB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (FB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, dB.y)(this._di … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1583)

```diff
-                   if (this._refractionTexture.isCube || (sB.l_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), sB.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
+                   if (this._refractionTexture.isCube || (FB.T6("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), FB.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
```

#### 126. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1588)

```diff
-                 this.pointsCloud && sB.updateFloat("pointSize", this.pointSize), sB.updateColor4("vSpecularColor", this.specularColor, this.specularPower), sB.updateColor3("vEmissiveColor", BB.EmissiveTextureEnabled ? this.emissiveColor : NB.d.BlackReadOnly), sB.updateColor4("vDi … [truncated]
+                 this.pointsCloud && FB.updateFloat("pointSize", this.pointSize), FB.updateColor4("vSpecularColor", this.specularColor, this.specularPower), FB.updateColor3("vEmissiveColor", BB.EmissiveTextureEnabled ? this.emissiveColor : vB.c.BlackReadOnly), FB.updateColor4("vDi … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1590)

```diff
-               nB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && uB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && uB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.Op … [truncated]
+               JB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && kB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && kB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.Op … [truncated]
```

#### 128. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1592)

```diff
-             !pB && this.isFrozen && !rB || !nB.lightsEnabled || this._disableLighting || (0, gB.t)(nB, zB, uB, dB, this._maxSimultaneousLights), !pB && this.isFrozen || ((nB.fogEnabled && zB.applyFog && nB.fogMode !== IB.g.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
+             !hB && this.isFrozen && !zB || !JB.lightsEnabled || this._disableLighting || (0, dB.p)(JB, ZB, kB, oB, this._maxSimultaneousLights), !hB && this.isFrozen || ((JB.fogEnabled && ZB.applyFog && JB.fogMode !== GB.e.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1596)

```diff
-             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === JB.e.prototy … [truncated]
+             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === NB.b.prototy … [truncated]
```

#### 130. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1624)

```diff
-             const nB = tB.b.Clone((() => new BB(jB, this.aY())), this, {
+             const JB = CB.b.Clone((() => new BB(IB, this.JR())), this, {
```

#### 131. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1631)

```diff
-             return jB.stencil && nB.stencil.parse(jB.stencil, zB, QB), rB.b._ParsePlugins(jB, nB, zB, QB), nB
+             return IB.stencil && JB.stencil.parse(IB.stencil, ZB, TB), zB.e._ParsePlugins(IB, JB, ZB, TB), JB
```

#### 132. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1634` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1634) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1634)

```diff
-             return mB.d.DiffuseTextureEnabled
+             return gB.e.DiffuseTextureEnabled
```

#### 133. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1637)

```diff
-             mB.d.DiffuseTextureEnabled = BB
+             gB.e.DiffuseTextureEnabled = BB
```

#### 134. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1640)

```diff
-             return mB.d.DetailTextureEnabled
+             return gB.e.DetailTextureEnabled
```

#### 135. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1643)

```diff
-             mB.d.DetailTextureEnabled = BB
+             gB.e.DetailTextureEnabled = BB
```

#### 136. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1646)

```diff
-             return mB.d.AmbientTextureEnabled
+             return gB.e.AmbientTextureEnabled
```

#### 137. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1649` → after: `L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1649) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1649)

```diff
-             mB.d.AmbientTextureEnabled = BB
+             gB.e.AmbientTextureEnabled = BB
```

#### 138. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1652` → after: `L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1652) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1652)

```diff
-             return mB.d.OpacityTextureEnabled
+             return gB.e.OpacityTextureEnabled
```

#### 139. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1655)

```diff
-             mB.d.OpacityTextureEnabled = BB
+             gB.e.OpacityTextureEnabled = BB
```

#### 140. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1658)

```diff
-             return mB.d.ReflectionTextureEnabled
+             return gB.e.ReflectionTextureEnabled
```

#### 141. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1661` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1661) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1661)

```diff
-             mB.d.ReflectionTextureEnabled = BB
+             gB.e.ReflectionTextureEnabled = BB
```

#### 142. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1664)

```diff
-             return mB.d.EmissiveTextureEnabled
+             return gB.e.EmissiveTextureEnabled
```

#### 143. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1667)

```diff
-             mB.d.EmissiveTextureEnabled = BB
+             gB.e.EmissiveTextureEnabled = BB
```

#### 144. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1670` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1670) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1670)

```diff
-             return mB.d.SpecularTextureEnabled
+             return gB.e.SpecularTextureEnabled
```

#### 145. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1673)

```diff
-             mB.d.SpecularTextureEnabled = BB
+             gB.e.SpecularTextureEnabled = BB
```

#### 146. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1676)

```diff
-             return mB.d.BumpTextureEnabled
+             return gB.e.BumpTextureEnabled
```

#### 147. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1679)

```diff
-             mB.d.BumpTextureEnabled = BB
+             gB.e.BumpTextureEnabled = BB
```

#### 148. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1682` → after: `L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1682) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1682)

```diff
-             return mB.d.LightmapTextureEnabled
+             return gB.e.LightmapTextureEnabled
```

#### 149. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1685` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1685) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1685)

```diff
-             mB.d.LightmapTextureEnabled = BB
+             gB.e.LightmapTextureEnabled = BB
```

#### 150. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1688)

```diff
-             return mB.d.RefractionTextureEnabled
+             return gB.e.RefractionTextureEnabled
```

#### 151. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1691)

```diff
-             mB.d.RefractionTextureEnabled = BB
+             gB.e.RefractionTextureEnabled = BB
```

#### 152. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1694)

```diff
-             return mB.d.ColorGradingTextureEnabled
+             return gB.e.ColorGradingTextureEnabled
```

#### 153. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1697)

```diff
-             mB.d.ColorGradingTextureEnabled = BB
+             gB.e.ColorGradingTextureEnabled = BB
```

#### 154. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1700)

```diff
-             return mB.d.FresnelEnabled
+             return gB.e.FresnelEnabled
```

#### 155. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1703)

```diff
-             mB.d.FresnelEnabled = BB
+             gB.e.FresnelEnabled = BB
```

#### 156. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1707)

```diff
-           nj = [(0, nB.v)("diffuseTexture")], dj = [(0, nB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ij = [(0, nB.v)("ambientTexture")], Nj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], uj = [(0, nB.v)("opacityTexture")], Uj = [(0, nB.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
+           JI = [(0, JB.v)("diffuseTexture")], oI = [(0, JB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], GI = [(0, JB.v)("ambientTexture")], vI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], kI = [(0, JB.v)("opacityTexture")], cI = [(0, JB.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1717)

```diff
-           })], Hj = [(0, nB.A)("useEmissiveAsIllumination")], Dj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Fj = [(0, nB.A)("linkEmissiveWithDiffuse")], Yj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Vj = [(0, nB.A)("useSpecularOverAlpha")], hj = [(0, nB.e)("_markA … [truncated]
+           })], aI = [(0, JB.C)("useEmissiveAsIllumination")], HI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, JB.C)("linkEmissiveWithDiffuse")], jI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], PI = [(0, JB.C)("useSpecularOverAlpha")], RI = [(0, JB.e)("_markA … [truncated]
```

#### 158. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1730)

```diff
-           }, oz, Hz), (0, QB.e)(BB, null, Nj, {
+           }, pZ, aZ), (0, TB.j)(BB, null, vI, {
```

#### 159. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1743)

```diff
-           }, Yz, Vz), (0, QB.e)(BB, null, Uj, {
+           }, jZ, PZ), (0, TB.j)(BB, null, cI, {
```

#### 160. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1756)

```diff
-           }, Zz, Az), (0, QB.e)(BB, null, pj, {
+           }, mZ, XZ), (0, TB.j)(BB, null, hI, {
```

#### 161. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1769` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1769) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1769)

```diff
-           }, Wz, ez), (0, QB.e)(BB, null, sj, {
+           }, uZ, fZ), (0, TB.j)(BB, null, FI, {
```

#### 162. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1782)

```diff
-           }, xz, Kz), (0, QB.e)(BB, null, mj, {
+           }, tZ, bZ), (0, TB.j)(BB, null, gI, {
```

#### 163. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1795)

```diff
-           }, bz, vz), (0, QB.e)(BB, null, kj, {
+           }, DZ, KZ), (0, TB.j)(BB, null, yI, {
```

#### 164. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1808)

```diff
-           }, BQ, jQ), (0, QB.e)(BB, null, Lj, {
+           }, BT, IT), (0, TB.j)(BB, null, WI, {
```

#### 165. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1821)

```diff
-           }, nQ, dQ), (0, QB.e)(BB, null, tj, {
+           }, JT, oT), (0, TB.j)(BB, null, CI, {
```

#### 166. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1834)

```diff
-           }, uQ, UQ), (0, QB.e)(BB, null, oj, {
+           }, kT, cT), (0, TB.j)(BB, null, pI, {
```

#### 167. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1847)

```diff
-           }, SQ, MQ), (0, QB.e)(BB, null, Dj, {
+           }, QT, sT), (0, TB.j)(BB, null, HI, {
```

#### 168. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1860)

```diff
-           }, qQ, fQ), (0, QB.e)(BB, null, Yj, {
+           }, YT, iT), (0, TB.j)(BB, null, jI, {
```

#### 169. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1873)

```diff
-           }, DQ, FQ), (0, QB.e)(BB, null, hj, {
+           }, HT, MT), (0, TB.j)(BB, null, RI, {
```

#### 170. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1886` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1886) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1886)

```diff
-           }, hQ, XQ), (0, QB.e)(BB, null, Zj, {
+           }, RT, rT), (0, TB.j)(BB, null, mI, {
```

#### 171. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1899)

```diff
-           }, TQ, PQ), (0, QB.e)(BB, null, Tj, {
+           }, LT, eT), (0, TB.j)(BB, null, LI, {
```

#### 172. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1912)

```diff
-           }, lQ, wQ), (0, QB.e)(BB, null, Wj, {
+           }, lT, AT), (0, TB.j)(BB, null, uI, {
```

#### 173. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1925)

```diff
-           }, CQ, cQ), (0, QB.e)(BB, null, lj, {
+           }, xT, ET), (0, TB.j)(BB, null, lI, {
```

#### 174. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1938` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1938) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1938)

```diff
-           }, RQ, OQ), (0, QB.e)(BB, null, xj, {
+           }, VT, ST), (0, TB.j)(BB, null, tI, {
```

#### 175. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1951)

```diff
-           }, zn, Qn), (0, QB.e)(BB, null, cj, {
+           }, ZJ, TJ), (0, TB.j)(BB, null, EI, {
```

#### 176. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1964)

```diff
-           }, un, Un), (0, QB.e)(BB, null, Bz, {
+           }, kJ, cJ), (0, TB.j)(BB, null, BZ, {
```

#### 177. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1977)

```diff
-           }, Gn, Ln), (0, QB.e)(BB, null, zz, {
+           }, UJ, WJ), (0, TB.j)(BB, null, ZZ, {
```

#### 178. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L1990)

```diff
-           }, Sn, Mn), (0, QB.e)(BB, null, nz, {
+           }, QJ, sJ), (0, TB.j)(BB, null, JZ, {
```

#### 179. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2003)

```diff
-           }, fn, Hn), (0, QB.e)(BB, null, Iz, {
+           }, YJ, iJ), (0, TB.j)(BB, null, GZ, {
```

#### 180. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2016)

```diff
-           }, Yn, Vn), (0, QB.e)(BB, null, uz, {
+           }, HJ, MJ), (0, TB.j)(BB, null, kZ, {
```

#### 181. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2029)

```diff
-           }, Zn, An), (0, QB.e)(BB, null, az, {
+           }, RJ, rJ), (0, TB.j)(BB, null, nZ, {
```

#### 182. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2042)

```diff
-           }, Wn, en), (0, QB.e)(BB, null, rz, {
+           }, LJ, eJ), (0, TB.j)(BB, null, zZ, {
```

#### 183. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2055)

```diff
-           }, Kn, Cn), (0, QB.e)(BB, null, Jz, {
+           }, lJ, AJ), (0, TB.j)(BB, null, NZ, {
```

#### 184. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2068)

```diff
-           }, vn, Rn), (0, QB.e)(BB, null, yz, {
+           }, xJ, EJ), (0, TB.j)(BB, null, qZ, {
```

#### 185. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2081)

```diff
-           }, jd, zd), (0, QB.e)(BB, null, Gz, {
+           }, VJ, SJ), (0, TB.j)(BB, null, UZ, {
```

#### 186. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2094` → after: `L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2094) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2094)

```diff
-           }, dd, Id), (0, QB.e)(BB, null, gz, {
+           }, Zo, To), (0, TB.j)(BB, null, dZ, {
```

#### 187. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2107)

```diff
-           }, Ud, pd), (0, QB.e)(BB, null, Sz, {
+           }, Go, vo), (0, TB.j)(BB, null, QZ, {
```

#### 188. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2120` → after: `L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2120) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2120)

```diff
-           }, Jd, md), (0, QB.e)(BB, null, Ez, {
+           }, no, ho), (0, TB.j)(BB, null, wZ, {
```

#### 189. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2133)

```diff
-           }, Gd, Ld), (0, QB.e)(null, null, nj, {
+           }, No, go), (0, TB.j)(null, null, JI, {
```

#### 190. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2146)

```diff
-           }, qz, fz), (0, QB.e)(null, null, Ij, {
+           }, YZ, iZ), (0, TB.j)(null, null, GI, {
```

#### 191. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2159` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2159) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2159)

```diff
-           }, Dz, Fz), (0, QB.e)(null, null, uj, {
+           }, HZ, MZ), (0, TB.j)(null, null, kI, {
```

#### 192. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2172)

```diff
-           }, hz, Xz), (0, QB.e)(null, null, aj, {
+           }, RZ, rZ), (0, TB.j)(null, null, nI, {
```

#### 193. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2185)

```diff
-           }, Tz, Pz), (0, QB.e)(null, null, rj, {
+           }, LZ, eZ), (0, TB.j)(null, null, zI, {
```

#### 194. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2198)

```diff
-           }, lz, wz), (0, QB.e)(null, null, Jj, {
+           }, lZ, AZ), (0, TB.j)(null, null, NI, {
```

#### 195. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2211)

```diff
-           }, Cz, cz), (0, QB.e)(null, null, yj, {
+           }, xZ, EZ), (0, TB.j)(null, null, qI, {
```

#### 196. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2224)

```diff
-           }, Rz, Oz), (0, QB.e)(null, null, Gj, {
+           }, VZ, SZ), (0, TB.j)(null, null, UI, {
```

#### 197. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2237)

```diff
-           }, zQ, QQ), (0, QB.e)(null, null, gj, {
+           }, ZT, TT), (0, TB.j)(null, null, dI, {
```

#### 198. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2250)

```diff
-           }, IQ, NQ), (0, QB.e)(null, null, Sj, {
+           }, GT, vT), (0, TB.j)(null, null, QI, {
```

#### 199. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2263)

```diff
-           }, aQ, pQ), (0, QB.e)(null, null, Mj, {
+           }, nT, hT), (0, TB.j)(null, null, sI, {
```

#### 200. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2276` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2276) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2276)

```diff
-           }, rQ, sQ), (0, QB.e)(null, null, Ej, {
+           }, zT, FT), (0, TB.j)(null, null, wI, {
```

#### 201. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2289)

```diff
-           }, JQ, mQ), (0, QB.e)(null, null, ij, {
+           }, NT, gT), (0, TB.j)(null, null, OI, {
```

#### 202. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2302)

```diff
-           }, yQ, kQ), (0, QB.e)(null, null, qj, {
+           }, qT, yT), (0, TB.j)(null, null, YI, {
```

#### 203. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2315)

```diff
-           }, GQ, LQ), (0, QB.e)(null, null, fj, {
+           }, UT, WT), (0, TB.j)(null, null, iI, {
```

#### 204. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2328` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2328) · [Before (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2328)

```diff
-           }, gQ, tQ), (0, QB.e)(null, null, Hj, {
+           }, dT, CT), (0, TB.j)(null, null, aI, {
```

#### 205. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2341)

```diff
-           }, EQ, iQ), (0, QB.e)(null, null, Fj, {
+           }, wT, OT), (0, TB.j)(null, null, MI, {
```

#### 206. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2354` → after: `L2354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2354) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2354)

```diff
-           }, oQ, HQ), (0, QB.e)(null, null, Vj, {
+           }, pT, aT), (0, TB.j)(null, null, PI, {
```

#### 207. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2367)

```diff
-           }, YQ, VQ), (0, QB.e)(null, null, Xj, {
+           }, jT, PT), (0, TB.j)(null, null, rI, {
```

#### 208. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2380)

```diff
-           }, ZQ, AQ), (0, QB.e)(null, null, Aj, {
+           }, mT, XT), (0, TB.j)(null, null, XI, {
```

#### 209. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2393)

```diff
-           }, WQ, eQ), (0, QB.e)(null, null, Pj, {
+           }, uT, fT), (0, TB.j)(null, null, eI, {
```

#### 210. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2406)

```diff
-           }, xQ, KQ), (0, QB.e)(null, null, ej, {
+           }, tT, bT), (0, TB.j)(null, null, fI, {
```

#### 211. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2419)

```diff
-           }, bQ, vQ), (0, QB.e)(null, null, wj, {
+           }, DT, KT), (0, TB.j)(null, null, AI, {
```

#### 212. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2432` → after: `L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2432) · [Before (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2432)

```diff
-           }, Bn, jn), (0, QB.e)(null, null, Kj, {
+           }, BJ, IJ), (0, TB.j)(null, null, bI, {
```

#### 213. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2445` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2445) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2445)

```diff
-           }, nn, dn), (0, QB.e)(null, null, Cj, {
+           }, JJ, oJ), (0, TB.j)(null, null, xI, {
```

#### 214. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2458)

```diff
-           }, In, Nn), (0, QB.e)(null, null, bj, {
+           }, GJ, vJ), (0, TB.j)(null, null, DI, {
```

#### 215. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2471` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2471) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2471)

```diff
-           }, an, pn), (0, QB.e)(null, null, vj, {
+           }, nJ, hJ), (0, TB.j)(null, null, KI, {
```

#### 216. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2484` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2484) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2484)

```diff
-           }, rn, sn), (0, QB.e)(null, null, Rj, {
+           }, zJ, FJ), (0, TB.j)(null, null, VI, {
```

#### 217. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2497)

```diff
-           }, Jn, mn), (0, QB.e)(null, null, Oj, {
+           }, NJ, gJ), (0, TB.j)(null, null, SI, {
```

#### 218. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2510` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2510) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2510)

```diff
-           }, yn, kn), (0, QB.e)(null, null, jz, {
+           }, qJ, yJ), (0, TB.j)(null, null, IZ, {
```

#### 219. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2523)

```diff
-           }, gn, tn), (0, QB.e)(null, null, Qz, {
+           }, dJ, CJ), (0, TB.j)(null, null, TZ, {
```

#### 220. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2536)

```diff
-           }, En, qn), (0, QB.e)(null, null, dz, {
+           }, wJ, OJ), (0, TB.j)(null, null, oZ, {
```

#### 221. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2549` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2549) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2549)

```diff
-           }, Dn, Fn), (0, QB.e)(null, null, Nz, {
+           }, pJ, aJ), (0, TB.j)(null, null, vZ, {
```

#### 222. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2562)

```diff
-           }, hn, Xn), (0, QB.e)(null, null, Uz, {
+           }, jJ, PJ), (0, TB.j)(null, null, cZ, {
```

#### 223. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2575)

```diff
-           }, Tn, Pn), (0, QB.e)(null, null, pz, {
+           }, mJ, XJ), (0, TB.j)(null, null, hZ, {
```

#### 224. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2588` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2588) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2588)

```diff
-           }, wn, xn), (0, QB.e)(null, null, sz, {
+           }, uJ, fJ), (0, TB.j)(null, null, FZ, {
```

#### 225. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2601` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2601) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2601)

```diff
-           }, cn, bn), (0, QB.e)(null, null, mz, {
+           }, tJ, bJ), (0, TB.j)(null, null, gZ, {
```

#### 226. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2614)

```diff
-           }, On, Bd), (0, QB.e)(null, null, kz, {
+           }, DJ, KJ), (0, TB.j)(null, null, yZ, {
```

#### 227. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2627` → after: `L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2627) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2627)

```diff
-           }, Qd, nd), (0, QB.e)(null, null, Lz, {
+           }, Bo, Io), (0, TB.j)(null, null, WZ, {
```

#### 228. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2640` → after: `L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2640) · [Before (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2640)

```diff
-           }, Nd, ud), (0, QB.e)(null, null, tz, {
+           }, Jo, oo), (0, TB.j)(null, null, CZ, {
```

#### 229. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2653` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2653) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2653)

```diff
-           }, rd, sd), (0, QB.e)(null, null, Mz, {
+           }, ko, co), (0, TB.j)(null, null, sZ, {
```

#### 230. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2672)

```diff
-         })(), BB.ForceGLSL = !1, BB._ShaderLoader = new SB.c((() => [Promise.all([zB.e(322), zB.e(321)]).then((() => zB(41957))), Promise.all([zB.e(327), zB.e(323), zB.e(336), zB.e(326)]).then((() => zB(42159)))]), (() => [Promise.all([zB.e(343), zB.e(338)]).then((() => zB(42319) … [truncated]
+         })(), BB.ForceGLSL = !1, BB._ShaderLoader = new QB.d((() => [Promise.all([ZB.e(322), ZB.e(321)]).then((() => ZB(41895))), Promise.all([ZB.e(327), ZB.e(323), ZB.e(336), ZB.e(326)]).then((() => ZB(42088)))]), (() => [Promise.all([ZB.e(343), ZB.e(338)]).then((() => ZB(42226) … [truncated]
```

#### 231. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2677)

```diff
-       hB || (hB = !0, (0, pB.e)(), (0, fB.d)("BABYLON.StandardMaterial", VB), IB.g.DefaultMaterialFactory = BB => new VB("default material", BB))
+       RB || (RB = !0, (0, hB.d)(), (0, iB.i)("BABYLON.StandardMaterial", PB), GB.e.DefaultMaterialFactory = BB => new PB("default material", BB))
```

#### 232. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2679)

```diff
-     Object.getOwnPropertyDescriptor(VB.prototype, "decalMap") || Object.defineProperty(VB.prototype, "decalMap", (0, oB.f)("StandardMaterial", "decalMap"))
+     Object.getOwnPropertyDescriptor(PB.prototype, "decalMap") || Object.defineProperty(PB.prototype, "decalMap", (0, pB.g)("StandardMaterial", "decalMap"))
```

#### 233. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2681)

```diff
-   40478: (BB, jB, zB) => {
+   40433: (BB, IB, ZB) => {
```

#### 234. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2690)

```diff
-       d: () => QB
+       b: () => TB
```

#### 235. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2693)

```diff
-   40473: (BB, jB, zB) => {
+   40425: (BB, IB, ZB) => {
```

#### 236. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L2695` → after: `L2695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/265.js#L2695) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/265.js#L2695)

```diff
-       c: () => QB
+       d: () => TB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (219 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L4)

```diff
-   40396: (BB, jB, zB) => {
+   40343: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L6)

```diff
-       d: () => QB
+       c: () => TB
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L14)

```diff
-   40412: (BB, jB, zB) => {
+   40354: (BB, IB, ZB) => {
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L16)

```diff
-       e: () => IB
+       d: () => GB
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L18-L20` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L18-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L18-L20)

```diff
-     var QB = zB(37186),
-       nB = zB(37171),
-       dB = zB(37178);
+     var TB = ZB(37131),
+       JB = ZB(37120),
+       oB = ZB(37129);
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L23)

```diff
-         this.vectors = (0, QB.c)(8, nB.m.Zero), this.center = nB.m.Zero(), this.centerWorld = nB.m.Zero(), this.extendSize = nB.m.Zero(), this.extendSizeWorld = nB.m.Zero(), this.directions = (0, QB.c)(3, nB.m.Zero), this.vectorsWorld = (0, QB.c)(8, nB.m.Zero), this.minimumWorld  … [truncated]
+         this.vectors = (0, TB.b)(8, JB.s.Zero), this.center = JB.s.Zero(), this.centerWorld = JB.s.Zero(), this.extendSize = JB.s.Zero(), this.extendSizeWorld = JB.s.Zero(), this.directions = (0, TB.b)(3, JB.s.Zero), this.vectorsWorld = (0, TB.b)(8, JB.s.Zero), this.minimumWorld  … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L33)

```diff
-         this.minimum.U3(QB, dB, IB), this.maximum.U3(NB, uB, UB), aB[0].U3(QB, dB, IB), aB[1].U3(NB, uB, UB), aB[2].U3(NB, dB, IB), aB[3].U3(QB, uB, IB), aB[4].U3(QB, dB, UB), aB[5].U3(NB, uB, IB), aB[6].U3(QB, uB, UB), aB[7].U3(NB, dB, UB), jB.addToRef(BB, this.center).scaleInPl … [truncated]
+         this.minimum.cBB(TB, oB, GB), this.maximum.cBB(vB, kB, cB), nB[0].cBB(TB, oB, GB), nB[1].cBB(vB, kB, cB), nB[2].cBB(vB, oB, GB), nB[3].cBB(TB, kB, GB), nB[4].cBB(TB, oB, cB), nB[5].cBB(vB, kB, GB), nB[6].cBB(TB, kB, cB), nB[7].cBB(vB, oB, cB), IB.addToRef(BB, this.center) … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L56-L58)

```diff
-           jB.jH(this.minimum), zB.jH(this.maximum);
-           for (let BB = 0; BB < 8; ++BB) dB[BB].jH(IB[BB]);
-           this.extendSizeWorld.jH(this.extendSize), this.centerWorld.jH(this.center)
+           IB.TY(this.minimum), ZB.TY(this.maximum);
+           for (let BB = 0; BB < 8; ++BB) oB[BB].TY(GB[BB]);
+           this.extendSizeWorld.TY(this.extendSize), this.centerWorld.TY(this.center)
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L60)

```diff
-           jB.S_(Number.MAX_VALUE), zB.S_(-Number.MAX_VALUE);
+           IB.K9(Number.MAX_VALUE), ZB.K9(-Number.MAX_VALUE);
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L63)

```diff
-             nB.m.TransformCoordinatesToRef(IB[QB], BB, NB), jB.minimizeInPlace(NB), zB.maximizeInPlace(NB)
+             JB.s.TransformCoordinatesToRef(GB[TB], BB, vB), IB.minimizeInPlace(vB), ZB.maximizeInPlace(vB)
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L67)

```diff
-         nB.m.FromArrayToRef(BB.m, 0, QB[0]), nB.m.FromArrayToRef(BB.m, 4, QB[1]), nB.m.FromArrayToRef(BB.m, 8, QB[2]), this._worldMatrix = BB
+         JB.s.FromArrayToRef(BB.m, 0, TB[0]), JB.s.FromArrayToRef(BB.m, 4, TB[1]), JB.s.FromArrayToRef(BB.m, 8, TB[2]), this._worldMatrix = BB
```

#### 12. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L87)

```diff
-           sB = -dB.c;
+           FB = -oB.d;
```

#### 13. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L118-L119)

```diff
-         nB.m.ClampToRef(zB, BB, jB, dB);
-         return nB.m.DistanceSquared(zB, dB) <= QB * QB
+         JB.s.ClampToRef(ZB, BB, IB, oB);
+         return JB.s.DistanceSquared(ZB, oB) <= TB * TB
```

#### 14. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L142)

```diff
-     IB._TmpVector3 = (0, QB.c)(3, nB.m.Zero)
+     GB._TmpVector3 = (0, TB.b)(3, JB.s.Zero)
```

#### 15. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L144)

```diff
-   40404: (BB, jB, zB) => {
+   40351: (BB, IB, ZB) => {
```

#### 16. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L146)

```diff
-       c: () => pB
+       d: () => hB
```

#### 17. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L148-L150` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L148-L150) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L148-L150)

```diff
-     var QB = zB(37186),
-       nB = zB(37171),
-       dB = zB(40412);
+     var TB = ZB(37131),
+       JB = ZB(37120),
+       oB = ZB(40354);
```

#### 18. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L153)

```diff
-         this.center = nB.m.Zero(), this.centerWorld = nB.m.Zero(), this.minimum = nB.m.Zero(), this.maximum = nB.m.Zero(), this.reConstruct(BB, jB, zB)
+         this.center = JB.s.Zero(), this.centerWorld = JB.s.Zero(), this.minimum = JB.s.Zero(), this.maximum = JB.s.Zero(), this.reConstruct(BB, IB, ZB)
```

#### 19. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L156-L158` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L156-L158) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L156-L158)

```diff
-         this.minimum.jH(BB), this.maximum.jH(jB);
-         const QB = nB.m.Distance(BB, jB);
-         jB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * QB, this._update(zB || nB.c.IdentityReadOnly)
+         this.minimum.TY(BB), this.maximum.TY(IB);
+         const TB = JB.s.Distance(BB, IB);
+         IB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * TB, this._update(ZB || JB.b.IdentityReadOnly)
```

#### 20. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L175)

```diff
-         if (BB.isIdentity()) this.centerWorld.jH(this.center), this.radiusWorld = this.radius;
+         if (BB.isIdentity()) this.centerWorld.TY(this.center), this.radiusWorld = this.radius;
```

#### 21. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L177)

```diff
-           nB.m.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
+           JB.s.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
```

#### 22. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L179)

```diff
-           nB.m.TransformNormalFromFloatsToRef(1, 1, 1, BB, jB), this.radiusWorld = Math.max(Math.abs(jB.x), Math.abs(jB.y), Math.abs(jB.z)) * this.radius
+           JB.s.TransformNormalFromFloatsToRef(1, 1, 1, BB, IB), this.radiusWorld = Math.max(Math.abs(IB.x), Math.abs(IB.y), Math.abs(IB.z)) * this.radius
```

#### 23. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L196)

```diff
-         const jB = nB.m.DistanceSquared(this.centerWorld, BB);
+         const IB = JB.s.DistanceSquared(this.centerWorld, BB);
```

#### 24. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L200)

```diff
-         const zB = nB.m.DistanceSquared(BB.centerWorld, jB.centerWorld),
+         const ZB = JB.s.DistanceSquared(BB.centerWorld, IB.centerWorld),
```

#### 25. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L205)

```diff
-         this._TmpVector3[0].jH(BB), this._TmpVector3[1].U3(0, 0, jB), this._TmpVector3[2].jH(BB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].MQB(this._TmpVector3[1]);
+         this._TmpVector3[0].TY(BB), this._TmpVector3[1].cBB(0, 0, IB), this._TmpVector3[2].TY(BB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].VTB(this._TmpVector3[1]);
```

#### 26. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L207)

```diff
-         return QB._worldMatrix = zB || nB.c.Identity(), QB
+         return TB._worldMatrix = ZB || JB.b.Identity(), TB
```

#### 27. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L210)

```diff
-     IB._TmpVector3 = (0, QB.c)(3, nB.m.Zero);
+     GB._TmpVector3 = (0, TB.b)(3, JB.s.Zero);
```

#### 28. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L220-L221)

```diff
-         const QB = nB.m.Dot(jB.centerWorld, BB),
-           dB = Math.abs(nB.m.Dot(jB.directions[0], BB)) * jB.extendSize.x + Math.abs(nB.m.Dot(jB.directions[1], BB)) * jB.extendSize.y + Math.abs(nB.m.Dot(jB.directions[2], BB)) * jB.extendSize.z;
+         const TB = JB.s.Dot(IB.centerWorld, BB),
+           oB = Math.abs(JB.s.Dot(IB.directions[0], BB)) * IB.extendSize.x + Math.abs(JB.s.Dot(IB.directions[1], BB)) * IB.extendSize.y + Math.abs(JB.s.Dot(IB.directions[2], BB)) * IB.extendSize.z;
```

#### 29. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L227)

```diff
-         this._isLocked = !1, this.boundingBox = new dB.e(BB, jB, zB), this.fQB = new IB(BB, jB, zB)
+         this._isLocked = !1, this.boundingBox = new oB.d(BB, IB, ZB), this.ZJB = new GB(BB, IB, ZB)
```

#### 30. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L230)

```diff
-         this.boundingBox.reConstruct(BB, jB, zB), this.fQB.reConstruct(BB, jB, zB)
+         this.boundingBox.reConstruct(BB, IB, ZB), this.ZJB.reConstruct(BB, IB, ZB)
```

#### 31. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L245)

```diff
-         this._isLocked || (this.boundingBox._update(BB), this.fQB._update(BB))
+         this._isLocked || (this.boundingBox._update(BB), this.ZJB._update(BB))
```

#### 32. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L248-L250` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L248-L250) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L248-L250)

```diff
-         const zB = pB._TmpVector3[0].jH(BB).MQB(jB),
-           QB = pB._TmpVector3[1].jH(BB).addInPlace(jB);
-         return this.boundingBox.reConstruct(zB, QB, this.boundingBox.getWorldMatrix()), this.fQB.reConstruct(zB, QB, this.boundingBox.getWorldMatrix()), this
+         const ZB = hB._TmpVector3[0].TY(BB).VTB(IB),
+           TB = hB._TmpVector3[1].TY(BB).addInPlace(IB);
+         return this.boundingBox.reConstruct(ZB, TB, this.boundingBox.getWorldMatrix()), this.ZJB.reConstruct(ZB, TB, this.boundingBox.getWorldMatrix()), this
```

#### 33. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L253-L254)

```diff
-         const jB = nB.m.Minimize(this.minimum, BB),
-           zB = nB.m.Maximize(this.maximum, BB);
+         const IB = JB.s.Minimize(this.minimum, BB),
+           ZB = JB.s.Maximize(this.maximum, BB);
```

#### 34. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L258)

```diff
-         const jB = nB.h.Matrix[0];
+         const IB = JB.m.Matrix[0];
```

#### 35. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L260-L261)

```diff
-         const zB = nB.h.KJ[0];
-         return nB.m.TransformCoordinatesToRef(BB.boundingBox.minimumWorld, jB, zB), this.encapsulate(zB), nB.m.TransformCoordinatesToRef(BB.boundingBox.maximumWorld, jB, zB), this.encapsulate(zB), this
+         const ZB = JB.m.rN[0];
+         return JB.s.TransformCoordinatesToRef(BB.boundingBox.minimumWorld, IB, ZB), this.encapsulate(ZB), JB.s.TransformCoordinatesToRef(BB.boundingBox.maximumWorld, IB, ZB), this.encapsulate(ZB), this
```
