# Changed — Bundle Modifications Report (Part 053 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `53 / 140` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 052](part-052.md) · [Part 054 →](part-054.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L525-L526` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L525-L526) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L525-L526)

```diff
-           this._moveRelative.o_(0), this._rotateRelative.o_(0), this._moveScene.o_(0), this._updateCamera(), this.camera.lL().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const SS = XS.e.Zero();
+           this._moveRelative.I6(0), this._rotateRelative.I6(0), this._moveScene.I6(0), this._updateCamera(), this.camera.mG().useRightHandedSystem && (this._moveRelative.z *= -1);
+           const kk = ik.c.Zero();
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L528-L529` → after: `L528-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L528-L529) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L528-L529)

```diff
-           const HS = XS.n.Zero();
-           XS.n.TransformNormalToRef(this._moveRelative, SS, HS), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(HS), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+           const Fk = ik.t.Zero();
+           ik.t.TransformNormalToRef(this._moveRelative, kk, Fk), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Fk), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L561)

```diff
-         HS = [(0, bS.M)()], gS = [(0, bS.M)()], xS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], (0, tS.j)(SS, null, HS, {
+         Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], (0, Xk.j)(kk, null, Fk, {
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L677)

```diff
-     NS.e.FreeCameraMouseWheelInput = CS;
+     lk.d.FreeCameraMouseWheelInput = Jk;
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L687)

```diff
-           this.allowMouse = SS, this.touchAngularSensibility = (0, tS.k)(this, xS, 2e5), this.touchMoveSensibility = ((0, tS.k)(this, NS), (0, tS.k)(this, qS, 250)), this.singleFingerRotate = ((0, tS.k)(this, IS), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+           this.allowMouse = kk, this.touchAngularSensibility = (0, Xk.n)(this, yk, 2e5), this.touchMoveSensibility = ((0, Xk.n)(this, lk), (0, Xk.n)(this, ak, 250)), this.singleFingerRotate = ((0, Xk.n)(this, Lk), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L690)

```diff
-           SS = uS.k.BackCompatCameraNoPreventDefault(arguments);
+           kk = qk.h.BackCompatCameraNoPreventDefault(arguments);
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L715-L716` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L715-L716) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L715-L716)

```diff
-             }), this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._pointerInput, kS.d.POINTERDOWN | kS.d.POINTERUP | kS.d.POINTERMOVE), this._onLostFocus) {
-             const SS = this.camera.AK().getInputElement();
+             }), this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._pointerInput, Zk.d.POINTERDOWN | Zk.d.POINTERUP | Zk.d.POINTERMOVE), this._onLostFocus) {
+             const kk = this.camera.Oe().getInputElement();
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L722-L723` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L722-L723) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L722-L723)

```diff
-             if (this._observer && (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const SS = this.camera.AK().getInputElement();
+             if (this._observer && (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const kk = this.camera.Oe().getInputElement();
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L745-L746` → after: `L745-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L745-L746) · [Before (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L745-L746)

```diff
-               bS = XS.l.VK[0];
-             bS.I5(0, 0, HS * this._offsetY * gS), XS.e.RotationYawPitchRollToRef(SS.rotation.y, SS.rotation.x, 0, SS._cameraRotationMatrix), XS.n.TransformCoordinatesToRef(bS, SS._cameraRotationMatrix, bS), SS.cameraDirection.addInPlace(bS)
+               Tk = ik.l.Ge[0];
+             Tk.t5(0, 0, Fk * this._offsetY * Ik), ik.c.RotationYawPitchRollToRef(kk.rotation.y, kk.rotation.x, 0, kk._cameraRotationMatrix), ik.t.TransformCoordinatesToRef(Tk, kk._cameraRotationMatrix, Tk), kk.cameraDirection.addInPlace(Tk)
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L757)

```diff
-         HS = [(0, bS.M)()], gS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+         Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L791-L793` → after: `L791-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L791-L793) · [Before (L791-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L791-L793)

```diff
-     NS.e.FreeCameraTouchInput = nS;
-     var PS, QS, DS, wS = gS(39926);
-     class hS extends NS.f {
+     lk.d.FreeCameraTouchInput = xk;
+     var Pk, Kk, Qk, sk = Ik(39863);
+     class Vk extends lk.h {
```

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L819-L821` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L819-L821) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L819-L821)

```diff
-     }(PS = hS.prototype).addDeviceOrientation ?? (PS.addDeviceOrientation = (0, wS.i)("FreeCameraInputsManager", "addDeviceOrientation")), (QS = hS.prototype).addVirtualJoystick ?? (QS.addVirtualJoystick = (0, wS.i)("FreeCameraInputsManager", "addVirtualJoystick")), (DS = hS.prot … [truncated]
-     var ZS = gS(39939),
-       JS = gS(37164);
+     }(Pk = Vk.prototype).addDeviceOrientation ?? (Pk.addDeviceOrientation = (0, sk.h)("FreeCameraInputsManager", "addDeviceOrientation")), (Kk = Vk.prototype).addVirtualJoystick ?? (Kk.addVirtualJoystick = (0, sk.h)("FreeCameraInputsManager", "addVirtualJoystick")), (Qk = Vk.prot … [truncated]
+     var zk = Ik(39885),
+       Sk = Ik(37201);
```

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L824` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L824) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L824)

```diff
-         let HS, gS, NS, qS, IS = xS.h,
+         let Fk, Ik, lk, ak, Lk = yk.e,
```

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L924)

```diff
-             super(SS, HS, gS, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), bS = this, this.ellipsoid = (0, tS.k)(this, fS, new XS.n(.5, 1, .5)), this.ellipsoidOffset = ((0, tS.k)(this, kS), (0, tS.k)(this, aS, new XS.n(0, 0, 0))), this.checkCollisions = (( … [truncated]
+             super(kk, Fk, Ik, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Tk = this, this.ellipsoid = (0, Xk.n)(this, tk, new ik.t(.5, 1, .5)), this.ellipsoidOffset = ((0, Xk.n)(this, Zk), (0, Xk.n)(this, jk, new ik.t(0, 0, 0))), this.checkCollisions = (( … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L926)

```diff
-               bS._newPosition.dJ(HS), bS._newPosition.subtractToRef(bS._oldPosition, bS._diffPosition), bS._diffPosition.length() > ZS.b.CollisionsEpsilon && (bS.position.addToRef(bS._diffPosition, bS._deferredPositionUpdate), bS._deferOnly ? bS._deferredUpdated = !0 : bS.positio … [truncated]
+               Tk._newPosition.kS(Fk), Tk._newPosition.subtractToRef(Tk._oldPosition, Tk._diffPosition), Tk._diffPosition.length() > zk.c.CollisionsEpsilon && (Tk.position.addToRef(Tk._diffPosition, Tk._deferredPositionUpdate), Tk._deferOnly ? Tk._deferredUpdated = !0 : Tk.positio … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L930)

```diff
-             HS = uS.k.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(HS)
+             Fk = qk.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Fk)
```

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L933)

```diff
-             this.inputs.detachElement(), this.cameraDirection = new XS.n(0, 0, 0), this.cameraRotation = new XS.m(0, 0)
+             this.inputs.detachElement(), this.cameraDirection = new ik.t(0, 0, 0), this.cameraRotation = new ik.p(0, 0)
```

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L943-L944` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L943-L944) · [Before (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L943-L944)

```diff
-             HS = this.parent ? XS.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, HS.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const gS = this.lL().collisionCoordinator;
+             Fk = this.parent ? ik.t.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Fk.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
+             const Ik = this.mG().collisionCoordinator;
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L947)

```diff
-             this.applyGravity && (tS = SS.add(this.lL().gravity)), gS.getNewPosition(this._oldPosition, tS, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+             this.applyGravity && (Xk = kk.add(this.mG().gravity)), Ik.getNewPosition(this._oldPosition, Xk, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
```

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L950)

```diff
-             this._localDirection || (this._localDirection = XS.n.Zero(), this._transformedDirection = XS.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
+             this._localDirection || (this._localDirection = ik.t.Zero(), this._transformedDirection = ik.t.Zero()), this.inputs.checkInputs(), super._checkInputs()
```

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L962)

```diff
-             this.checkCollisions && this.lL().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
+             this.checkCollisions && this.mG().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
```

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/258.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/258.js#L972)

```diff
-           HS = [(0, bS.I)()], gS = [(0, bS.I)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+           Fk = [(0, Tk.H)()], Ik = [(0, Tk.H)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   40304: (SS, HS, gS) => {
+   40265: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L6)

```diff
-       e: () => kS
+       b: () => Zk
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L8-L16)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(37117),
-       xS = gS(37300),
-       NS = gS(40256),
-       qS = gS(40169),
-       uS = gS(37164),
-       IS = gS(40229),
-       fS = gS(40068);
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(37153),
+       yk = Ik(37331),
+       lk = Ik(40218),
+       ak = Ik(40134),
+       qk = Ik(37201),
+       Lk = Ik(40195),
+       tk = Ik(40021);
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L19)

```diff
-       let gS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS = NS.e,
+       let Ik, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk = lk.b,
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L64)

```diff
-           (0, tS.h)(this, HS, SS, "f")
+           (0, Xk.f)(this, Fk, kk, "f")
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L109)

```diff
-           super(gS, bS, !1), this.diffuse = ((0, tS.k)(this, JS), (0, tS.k)(this, OS, new xS.b(1, 1, 1))), this.specular = ((0, tS.k)(this, dS), (0, tS.k)(this, cS, new xS.b(1, 1, 1))), this.falloffType = ((0, tS.k)(this, vS), (0, tS.k)(this, ES, SS.FALLOFF_DEFAULT)), this.intens … [truncated]
+           super(Ik, Tk, !1), this.diffuse = ((0, Xk.n)(this, Sk), (0, Xk.n)(this, vk, new yk.e(1, 1, 1))), this.specular = ((0, Xk.n)(this, Ek), (0, Xk.n)(this, Ok, new yk.e(1, 1, 1))), this.falloffType = ((0, Xk.n)(this, nk), (0, Xk.n)(this, Gk, kk.FALLOFF_DEFAULT)), this.intens … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L121)

```diff
-             this.transferToEffect(gS, XS), this.diffuse.scaleToRef(SS, xS.i.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", xS.i.Color3[0], this.range, XS), tS && (this.specular.scaleToRef(SS, xS.i.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", xS.i. … [truncated]
+             this.transferToEffect(Ik, ik), this.diffuse.scaleToRef(kk, yk.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", yk.k.Color3[0], this.range, ik), Xk && (this.specular.scaleToRef(kk, yk.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", yk.k. … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L139)

```diff
-           super._syncParentEnabledState(), this.Ow() || this._resyncMeshes()
+           super._syncParentEnabledState(), this.Hs() || this._resyncMeshes()
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L142)

```diff
-           super.MJ(SS), this._resyncMeshes()
+           super.Av(kk), this._resyncMeshes()
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L152)

```diff
-           return XS.n.Zero()
+           return ik.t.Zero()
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L166)

```diff
-           if (this.lL().stopAnimation(this), this._parentContainer) {
+           if (this.mG().stopAnimation(this), this._parentContainer) {
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L170-L171` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L170-L171) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L170-L171)

```diff
-           for (const gS of this.lL().meshes) gS._removeLightSource(this, !0);
-           this._uniformBuffer.dispose(), this.lL().removeLight(this), super.dispose(SS, HS)
+           for (const Ik of this.mG().meshes) Ik._removeLightSource(this, !0);
+           this._uniformBuffer.dispose(), this.mG().removeLight(this), super.dispose(kk, Fk)
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L181)

```diff
-           const tS = SS.GetConstructorFromName(this.getTypeID(), HS, this.lL());
+           const Xk = kk.GetConstructorFromName(this.getTypeID(), Fk, this.mG());
```

#### 14. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L184)

```diff
-           return HS && (bS.name = HS), gS && (bS.parent = gS), bS.MJ(this.isEnabled()), this.onClonedObservable.notifyObservers(bS), bS
+           return Fk && (Tk.name = Fk), Ik && (Tk.parent = Ik), Tk.Av(this.isEnabled()), this.onClonedObservable.notifyObservers(Tk), Tk
```

#### 15. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L196)

```diff
-           return fS.b.AppendSerializedAnimations(this, SS), SS.HG = this.serializeAnimationRanges(), SS.isEnabled = this.isEnabled(), SS
+           return tk.b.AppendSerializedAnimations(this, kk), kk.nZ = this.serializeAnimationRanges(), kk.isEnabled = this.isEnabled(), kk
```

#### 16. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L199)

```diff
-           const tS = NS.e.Construct("Light_Type_" + SS, HS, gS);
+           const Xk = lk.b.Construct("Light_Type_" + kk, Fk, Ik);
```

#### 17. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L210)

```diff
-                 tS = (0, uS.d)("BABYLON.Animation");
+                 Xk = (0, qk.b)("BABYLON.Animation");
```

#### 18. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L213)

```diff
-             NS.e.ParseAnimationRanges(XS, HS, gS)
+             lk.b.ParseAnimationRanges(ik, Fk, Ik)
```

#### 19. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L215)

```diff
-           return HS.autoAnimate && gS.beginAnimation(XS, HS.autoAnimateFrom, HS.autoAnimateTo, HS.autoAnimateLoop, HS.autoAnimateSpeed || 1), void 0 !== HS.isEnabled && XS.MJ(HS.isEnabled), XS._onParsed(HS, gS, tS), XS
+           return Fk.autoAnimate && Ik.beginAnimation(ik, Fk.autoAnimateFrom, Fk.autoAnimateTo, Fk.autoAnimateLoop, Fk.autoAnimateSpeed || 1), void 0 !== Fk.isEnabled && ik.Av(Fk.isEnabled), ik._onParsed(Fk, Ik, Xk), ik
```

#### 20. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L252)

```diff
-             for (const SS of this.lL().meshes) SS._resyncLightSource(this)
+             for (const kk of this.mG().meshes) kk._resyncLightSource(this)
```

#### 21. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L255)

```diff
-           for (const SS of this.lL().meshes) - 1 !== SS.lightSources.indexOf(this) && SS._markSubMeshesAsLightDirty()
+           for (const kk of this.mG().meshes) - 1 !== kk.lightSources.indexOf(this) && kk._markSubMeshesAsLightDirty()
```

#### 22. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L258)

```diff
-           this._photometricScale = this._getPhotometricScale(), this.lL().resetCachedMaterial()
+           this._photometricScale = this._getPhotometricScale(), this.mG().resetCachedMaterial()
```

#### 23. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L298-L299)

```diff
-           const SS = this.lL();
-           0 != this._renderPriority && (SS.requireLightSorting = !0), this.lL().sortLightsByPriority()
+           const kk = this.mG();
+           0 != this._renderPriority && (kk.requireLightSorting = !0), this.mG().sortLightsByPriority()
```

#### 24. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L309)

```diff
-         gS = [(0, bS.k)()], kS = [(0, bS.k)()], aS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], GS = [(0, bS.M)()], CS = [(0, bS.M)()], nS = [(0, bS.M)()], PS = [(0, bS.d)("_reorderLightsInScene")], QS = [(0, bS.M)("shadowEnabled")], DS = [(0, bS.M)("excludeWithLayerM … [truncated]
+         Ik = [(0, Tk.n)()], Zk = [(0, Tk.n)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], Hk = [(0, Tk.J)()], Jk = [(0, Tk.J)()], xk = [(0, Tk.J)()], Pk = [(0, Tk.e)("_reorderLightsInScene")], Kk = [(0, Tk.J)("shadowEnabled")], Qk = [(0, Tk.J)("excludeWithLayerM … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L475)

```diff
-       })(), SS.FALLOFF_DEFAULT = IS.e.FALLOFF_DEFAULT, SS.FALLOFF_PHYSICAL = IS.e.FALLOFF_PHYSICAL, SS.FALLOFF_GLTF = IS.e.FALLOFF_GLTF, SS.FALLOFF_STANDARD = IS.e.FALLOFF_STANDARD, SS.LIGHTMAP_DEFAULT = IS.e.LIGHTMAP_DEFAULT, SS.LIGHTMAP_SPECULAR = IS.e.LIGHTMAP_SPECULAR, SS.LIG … [truncated]
+       })(), kk.FALLOFF_DEFAULT = Lk.b.FALLOFF_DEFAULT, kk.FALLOFF_PHYSICAL = Lk.b.FALLOFF_PHYSICAL, kk.FALLOFF_GLTF = Lk.b.FALLOFF_GLTF, kk.FALLOFF_STANDARD = Lk.b.FALLOFF_STANDARD, kk.LIGHTMAP_DEFAULT = Lk.b.LIGHTMAP_DEFAULT, kk.LIGHTMAP_SPECULAR = Lk.b.LIGHTMAP_SPECULAR, kk.LIG … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L478)

```diff
-   40256: (SS, HS, gS) => {
+   40218: (kk, Fk, Ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L480)

```diff
-       e: () => fS
+       b: () => tk
```

#### 28. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L482-L488` → after: `L482-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L482-L488) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L482-L488)

```diff
-     var tS = gS(40041),
-       bS = gS(37117),
-       XS = gS(40048),
-       xS = gS(37144),
-       NS = gS(37138),
-       qS = gS(39926),
-       uS = gS(40068);
+     var Xk = Ik(40003),
+       Tk = Ik(37153),
+       ik = Ik(40011),
+       yk = Ik(37187),
+       lk = Ik(37178),
+       ak = Ik(39863),
+       qk = Ik(40021);
```

#### 29. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L575)

```diff
-           this._onDisposeObserver && this.bY.remove(this._onDisposeObserver), this._onDisposeObserver = this.bY.add(SS)
+           this._onDisposeObserver && this.hG.remove(this._onDisposeObserver), this._onDisposeObserver = this.hG.add(kk)
```

#### 30. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L590)

```diff
-           this._isDirty = !1, this._nodeDataStorage = new IS, this.name = (0, tS.k)(this, KS, void 0), this.id = ((0, tS.k)(this, jS), (0, tS.k)(this, GS, void 0)), this.uniqueId = ((0, tS.k)(this, CS), (0, tS.k)(this, nS, void 0)), this.state = ((0, tS.k)(this, PS), (0, tS.k)(th … [truncated]
+           this._isDirty = !1, this._nodeDataStorage = new Lk, this.name = (0, Xk.n)(this, ek, void 0), this.id = ((0, Xk.n)(this, wk), (0, Xk.n)(this, Hk, void 0)), this.uniqueId = ((0, Xk.n)(this, Jk), (0, Xk.n)(this, xk, void 0)), this.state = ((0, Xk.n)(this, Pk), (0, Xk.n)(th … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L596` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L596) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L596)

```diff
-           return this._scene.AK()
+           return this._scene.Oe()
```

#### 32. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L650)

```diff
-         OHS(SS) {
+         UFk(kk) {
```

#### 33. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L728)

```diff
-           const bS = uS.b.Clone((() => new SS(HS, this.lL())), this);
+           const Tk = qk.b.Clone((() => new kk(Fk, this.mG())), this);
```

#### 34. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L759)

```diff
-           return this._worldMatrix || (this._worldMatrix = bS.e.Identity()), this._worldMatrix
+           return this._worldMatrix || (this._worldMatrix = Tk.c.Identity()), this._worldMatrix
```

#### 35. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L767)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.bY.notifyObservers(this), this.bY.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
+           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.hG.notifyObservers(this), this.hG.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
```

#### 36. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L772-L774` → after: `L772-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L772-L774) · [Before (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L772-L774)

```diff
-           if (HS.HG)
-             for (let tS = 0; tS < HS.HG.length; tS++) {
-               const gS = HS.HG[tS];
+           if (Fk.nZ)
+             for (let Xk = 0; Xk < Fk.nZ.length; Xk++) {
+               const Ik = Fk.nZ[Xk];
```

#### 37. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L781)

```diff
-           this.lL().incrementRenderId(), this.computeWorldMatrix(!0);
+           this.mG().incrementRenderId(), this.computeWorldMatrix(!0);
```

#### 38. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L783-L784` → after: `L783-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L783-L784) · [Before (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L783-L784)

```diff
-           if (XS.hA && XS.dD) {
-             const gS = XS.hA();
+           if (ik.vR && ik.lK) {
+             const Ik = ik.vR();
```

#### 39. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L786)

```diff
-           } else SS = new bS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), HS = new bS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+           } else kk = new Tk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Fk = new Tk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 40. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L792-L793` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L792-L793) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L792-L793)

```diff
-               if (!gS.hA || 0 === gS.getTotalVertices()) continue;
-               const xS = gS.hA().boundingBox,
+               if (!Ik.vR || 0 === Ik.getTotalVertices()) continue;
+               const yk = Ik.vR().boundingBox,
```

#### 41. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L796)

```diff
-               bS.n.CheckExtends(NS, SS, HS), bS.n.CheckExtends(qS, SS, HS)
+               Tk.t.CheckExtends(lk, kk, Fk), Tk.t.CheckExtends(ak, kk, Fk)
```

#### 42. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L806)

```diff
-         HS = [(0, XS.M)()], gS = [(0, XS.M)()], fS = [(0, XS.M)()], kS = [(0, XS.M)()], aS = [(0, XS.M)()], (0, tS.j)(null, null, HS, {
+         Fk = [(0, ik.J)()], Ik = [(0, ik.J)()], tk = [(0, ik.J)()], Zk = [(0, ik.J)()], jk = [(0, ik.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 43. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/259.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/259.js#L878)

```diff
-         throw (0, qS.l)("AnimationRange")
+         throw (0, ak.j)("AnimationRange")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (128 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L4)

```diff
-   41099: (SS, HS, gS) => {
+   41093: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L8-L14` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L8-L12) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L8-L14)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(37144),
-       xS = gS(37117),
-       NS = gS(37149),
-       qS = gS(40256),
-       uS = gS(40439),
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(37187),
+       yk = Ik(37153),
+       lk = Ik(37189),
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L16-L17` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L14-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L16-L17)

```diff
-       fS = gS(39946),
-       kS = gS(37123);
+       qk = Ik(40417),
+       Lk = Ik(40169),
+       tk = Ik(39891),
+       Zk = Ik(37158);
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L58)

```diff
-         const HS = this._attachedCamera.lL();
+         const Fk = this._attachedCamera.mG();
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L63)

```diff
-           const SS = fS.e.Now;
+           const kk = tk.d.Now;
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L73)

```diff
-         const SS = this._attachedCamera.lL();
+         const kk = this._attachedCamera.mG();
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L77)

```diff
-         this._lastInteractionTime = SS ?? fS.e.Now
+         this._lastInteractionTime = kk ?? tk.d.Now
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L80)

```diff
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < kS.d
+         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Zk.b
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L88)

```diff
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (SS = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? SS : this._userIsZooming()
+         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (kk = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? kk : this._userIsZooming()
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L91)

```diff
-         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = fS.e.Now)
+         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = tk.d.Now)
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L123)

```diff
-     var jS = gS(41111);
+     var wk = Ik(41107);
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L139-L140` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L139-L140) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L139-L140)

```diff
-           if (SS && (SS.computeWorldMatrix(!0), SS.hA)) {
-             const HS = SS.hA().diagonalLength;
+           if (kk && (kk.computeWorldMatrix(!0), kk.vR)) {
+             const Fk = kk.vR().diagonalLength;
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L162-L163)

```diff
-         this._radiusBounceTransition || (GS.EasingFunction.setEasingMode(GS.EasingMode), this._radiusBounceTransition = jS.d.CreateAnimation("radius", jS.d.ANIMATIONTYPE_FLOAT, 60, GS.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const HS = jS.d.TransitionTo("radius", this._attachedCamera.radius + SS, this._attachedCamera, this._attachedCamera.lL(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         this._radiusBounceTransition || (Hk.EasingFunction.setEasingMode(Hk.EasingMode), this._radiusBounceTransition = wk.c.CreateAnimation("radius", wk.c.ANIMATIONTYPE_FLOAT, 60, Hk.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const Fk = wk.c.TransitionTo("radius", this._attachedCamera.radius + kk, this._attachedCamera, this._attachedCamera.mG(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L244)

```diff
-         const HS = this._attachedCamera.lL();
+         const Fk = this._attachedCamera.mG();
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L248)

```diff
-           SS && SS.hA && this.zoomOnMesh(SS, void 0, (() => {
+           kk && kk.vR && this.zoomOnMesh(kk, void 0, (() => {
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L257)

```diff
-         const SS = this._attachedCamera.lL();
+         const kk = this._attachedCamera.mG();
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L264)

```diff
-         const tS = SS.hA().boundingBox;
+         const Xk = kk.vR().boundingBox;
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L277-L278` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L277-L278) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L277-L278)

```diff
-         const tS = new xS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           bS = new xS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         const Xk = new yk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           Tk = new yk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L281)

```diff
-           xS.n.CheckExtends(HS.min, tS, bS), xS.n.CheckExtends(HS.max, tS, bS)
+           yk.t.CheckExtends(Fk.min, Xk, Tk), yk.t.CheckExtends(Fk.max, Xk, Tk)
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L293)

```diff
-         if (tS) gS = new xS.n(0, NS, 0);
+         if (Xk) Ik = new yk.t(0, lk, 0);
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L296)

```diff
-           gS = new xS.n(HS.x, NS, HS.z)
+           Ik = new yk.t(Fk.x, lk, Fk.z)
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L298-L299)

```diff
-         this._vectorTransition || (this._vectorTransition = jS.d.CreateAnimation("target", jS.d.ANIMATIONTYPE_VECTOR3, 60, CS.EasingFunction)), this._betaIsAnimating = !0;
-         let uS = jS.d.TransitionTo("target", gS, this._attachedCamera, this._attachedCamera.lL(), 60, this._vectorTransition, this._framingTime);
+         this._vectorTransition || (this._vectorTransition = wk.c.CreateAnimation("target", wk.c.ANIMATIONTYPE_VECTOR3, 60, Jk.EasingFunction)), this._betaIsAnimating = !0;
+         let qk = wk.c.TransitionTo("target", Ik, this._attachedCamera, this._attachedCamera.mG(), 60, this._vectorTransition, this._framingTime);
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L310)

```diff
-         return this._radiusTransition || (this._radiusTransition = jS.d.CreateAnimation("radius", jS.d.ANIMATIONTYPE_FLOAT, 60, CS.EasingFunction)), uS = jS.d.TransitionTo("radius", IS, this._attachedCamera, this._attachedCamera.lL(), 60, this._radiusTransition, this._framingTime … [truncated]
+         return this._radiusTransition || (this._radiusTransition = wk.c.CreateAnimation("radius", wk.c.ANIMATIONTYPE_FLOAT, 60, Jk.EasingFunction)), qk = wk.c.TransitionTo("radius", Lk, this._attachedCamera, this._attachedCamera.mG(), 60, this._radiusTransition, this._framingTime … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L322)

```diff
-         const SS = fS.e.Now - this._lastInteractionTime,
+         const kk = tk.d.Now - this._lastInteractionTime,
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L326-L327` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L326-L327) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L326-L327)

```diff
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = jS.d.CreateAnimation("beta", jS.d.ANIMATIONTYPE_FLOAT, 60, CS.EasingFunction));
-           const SS = jS.d.TransitionTo("beta", HS, this._attachedCamera, this._attachedCamera.lL(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = wk.c.CreateAnimation("beta", wk.c.ANIMATIONTYPE_FLOAT, 60, Jk.EasingFunction));
+           const kk = wk.c.TransitionTo("beta", Fk, this._attachedCamera, this._attachedCamera.mG(), 60, this._betaTransition, this._elevationReturnTime, (() => {
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L337)

```diff
-         this.isUserIsMoving && (this._lastInteractionTime = fS.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+         this.isUserIsMoving && (this._lastInteractionTime = tk.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L352)

```diff
-         return this.exponent <= 0 ? SS : (Math.exp(this.exponent * SS) - 1) / (Math.exp(this.exponent) - 1)
+         return this.exponent <= 0 ? kk : (Math.exp(this.exponent * kk) - 1) / (Math.exp(this.exponent) - 1)
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L355-L358` → after: `L355-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L355-L358) · [Before (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L355-L358)

```diff
-     var nS = gS(40248),
-       PS = gS(40242),
-       QS = gS(40278),
-       DS = gS(40133);
+     var xk = Ik(40214),
+       Pk = Ik(40207),
+       Kk = Ik(40244),
+       Qk = Ik(40097);
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L365)

```diff
-             this._currentMousePointerIdDown = -1, this.buttons = (0, tS.k)(this, gS, [0, 1, 2]), this._pointerInput = (0, tS.k)(this, XS)
+             this._currentMousePointerIdDown = -1, this.buttons = (0, Xk.n)(this, Ik, [0, 1, 2]), this._pointerInput = (0, Xk.n)(this, ik)
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L368-L369)

```diff
-             SS = DS.k.BackCompatCameraNoPreventDefault(arguments);
-             const HS = this.camera.AK(),
+             kk = Qk.h.BackCompatCameraNoPreventDefault(arguments);
+             const Fk = this.camera.Oe(),
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L434)

```diff
-             }, this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._pointerInput, IS.d.POINTERDOWN | IS.d.POINTERUP | IS.d.POINTERMOVE | IS.d.POINTERDOUBLETAP), this._onLostFocus = () => {
+             }, this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._pointerInput, Lk.d.POINTERDOWN | Lk.d.POINTERUP | Lk.d.POINTERMOVE | Lk.d.POINTERDOUBLETAP), this._onLostFocus = () => {
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L437-L438)

```diff
-             const XS = this.camera.lL().AK().getHostWindow();
-             XS && DS.k.RegisterTopRootEvents(XS, [{
+             const ik = this.camera.mG().Oe().getHostWindow();
+             ik && Qk.h.RegisterTopRootEvents(ik, [{
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L445-L446)

```diff
-               const SS = this.camera.lL().AK().getHostWindow();
-               SS && DS.k.UnregisterTopRootEvents(SS, [{
+               const kk = this.camera.mG().Oe().getHostWindow();
+               kk && Qk.h.UnregisterTopRootEvents(kk, [{
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L452-L453` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L452-L453) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L452-L453)

```diff
-               if (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
-                 const SS = this.camera.lL().AK().getInputElement();
+               if (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
+                 const kk = this.camera.mG().Oe().getInputElement();
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L477)

```diff
-           HS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+           Fk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L509)

```diff
-             super(...arguments), this.pinchZoom = (0, tS.k)(this, NS, !0), this.multiTouchPanning = ((0, tS.k)(this, qS), (0, tS.k)(this, uS, !0)), this.multiTouchPanAndZoom = ((0, tS.k)(this, IS), (0, tS.k)(this, fS, !0)), this._isPinching = ((0, tS.k)(this, kS), !1), this._twoF … [truncated]
+             super(...arguments), this.pinchZoom = (0, Xk.n)(this, lk, !0), this.multiTouchPanning = ((0, Xk.n)(this, ak), (0, Xk.n)(this, qk, !0)), this.multiTouchPanAndZoom = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, !0)), this._isPinching = ((0, Xk.n)(this, Zk), !1), this._twoF … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L524)

```diff
-           HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+           Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 38. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L590)

```diff
-             super(...arguments), this.buttons = (0, tS.k)(this, fS, [0, 1, 2]), this.angularSensibilityX = ((0, tS.k)(this, kS), (0, tS.k)(this, aS, 1e3)), this.angularSensibilityY = ((0, tS.k)(this, KS), (0, tS.k)(this, jS, 1e3)), this.pinchPrecision = ((0, tS.k)(this, GS), (0,  … [truncated]
+             super(...arguments), this.buttons = (0, Xk.n)(this, tk, [0, 1, 2]), this.angularSensibilityX = ((0, Xk.n)(this, Zk), (0, Xk.n)(this, jk, 1e3)), this.angularSensibilityY = ((0, Xk.n)(this, ek), (0, Xk.n)(this, wk, 1e3)), this.pinchPrecision = ((0, Xk.n)(this, Hk), (0,  … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L625)

```diff
-             const tS = this._activeEntry ?? (this.camera.AK().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
+             const Xk = this._activeEntry ?? (this.camera.Oe().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L631-L632` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L631-L632) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L631-L632)

```diff
-               const SS = tS.uB ?? tS.sensitivity ?? 1 / this.angularSensibilityX,
-                 bS = tS.jB ?? tS.sensitivity ?? 1 / this.angularSensibilityY;
+               const kk = Xk.kY ?? Xk.sensitivity ?? 1 / this.angularSensibilityX,
+                 Tk = Xk.FY ?? Xk.sensitivity ?? 1 / this.angularSensibilityY;
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L653)

```diff
-           HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], xS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+           Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L752-L753` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L752-L753) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L752-L753)

```diff
-     QS.e.ArcRotateCameraPointersInput = ZS;
-     var JS = gS(40221);
+     Kk.d.ArcRotateCameraPointersInput = zk;
+     var Sk = Ik(40176);
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L779)

```diff
-           this.camera = (0, tS.k)(this, jS), this.keysUp = (0, tS.k)(this, GS, [38]), this.keysDown = ((0, tS.k)(this, CS), (0, tS.k)(this, nS, [40])), this.keysLeft = ((0, tS.k)(this, PS), (0, tS.k)(this, QS, [37])), this.keysRight = ((0, tS.k)(this, wS), (0, tS.k)(this, hS, [39 … [truncated]
+           this.camera = (0, Xk.n)(this, wk), this.keysUp = (0, Xk.n)(this, Hk, [38]), this.keysDown = ((0, Xk.n)(this, Jk), (0, Xk.n)(this, xk, [40])), this.keysLeft = ((0, Xk.n)(this, Pk), (0, Xk.n)(this, Kk, [37])), this.keysRight = ((0, Xk.n)(this, sk), (0, Xk.n)(this, Vk, [39 … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L784)

```diff
-           }, this._rotateDirection = new xS.m, this._panDirection = new xS.m
+           }, this._rotateDirection = new yk.p, this._panDirection = new yk.p
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L809)

```diff
-           SS = DS.k.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.lL(), this._engine = this._scene.AK(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           kk = Qk.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.mG(), this._engine = this._scene.Oe(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L814)

```diff
-               if (HS.type === JS.b.KEYDOWN) {
+               if (Fk.type === Sk.d.KEYDOWN) {
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L858)

```diff
-         HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], aS = [(0, bS.M)()], KS = [(0, bS.M)()], (0, tS.j)(SS, null, KS, {
+         Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], (0, Xk.j)(kk, null, ek, {
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1006-L1008` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1006-L1008) · [Before (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1006-L1008)

```diff
-     QS.e.ArcRotateCameraKeyboardMoveInput = OS;
-     var dS = gS(37791),
-       cS = gS(40223);
+     Kk.d.ArcRotateCameraKeyboardMoveInput = vk;
+     var Ek = Ik(37785),
+       Ok = Ik(40182);
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1019)

```diff
-           this.wheelPrecision = (0, tS.k)(this, qS, 3), this.zoomToMouseLocation = ((0, tS.k)(this, uS), (0, tS.k)(this, fS, !1)), this.wheelDeltaPercentage = ((0, tS.k)(this, aS), (0, tS.k)(this, KS, 0)), this.customComputeDeltaFromMouseWheel = ((0, tS.k)(this, jS), null), this. … [truncated]
+           this.wheelPrecision = (0, Xk.n)(this, ak, 3), this.zoomToMouseLocation = ((0, Xk.n)(this, qk), (0, Xk.n)(this, tk, !1)), this.wheelDeltaPercentage = ((0, Xk.n)(this, jk), (0, Xk.n)(this, ek, 0)), this.customComputeDeltaFromMouseWheel = ((0, Xk.n)(this, wk), null), this. … [truncated]
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1027)

```diff
-           SS = DS.k.BackCompatCameraNoPreventDefault(arguments), this._wheel = HS => {
+           kk = Qk.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Fk => {
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1031)

```diff
-             const bS = gS.deltaMode === cS.e.DOM_DELTA_LINE ? 40 : 1,
+             const Tk = Ik.deltaMode === Ok.c.DOM_DELTA_LINE ? 40 : 1,
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1047)

```diff
-           }, this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._wheel, IS.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.o_(0)
+           }, this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._wheel, Lk.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.I6(0)
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1050)

```diff
-           this._observer && (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+           this._observer && (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1058)

```diff
-             this._inertialPanning.scaleInPlace(HS), this._zoomToMouseRadiusOffset *= HS, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < kS.d && (this._zoomToMouseRadiusOffset = 0)
+             this._inertialPanning.scaleInPlace(Fk), this._zoomToMouseRadiusOffset *= Fk, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Zk.b && (this._zoomToMouseRadiusOffset = 0)
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1074-L1076` → after: `L1074-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1074-L1076) · [Before (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1074-L1076)

```diff
-             HS = SS.lL(),
-             gS = HS.createPickingRay(HS.pointerX, HS.pointerY, xS.e.Identity(), SS, !1);
-           0 === SS.targetScreenOffset.x && 0 === SS.targetScreenOffset.y || (this._viewOffset.set(SS.targetScreenOffset.x, SS.targetScreenOffset.y, 0), SS.getViewMatrix().invertToRef(SS._cameraTransformMatrix), this._globalOffset = xS.n.TransformNormal(this._viewOffset, SS._camer … [truncated]
+             Fk = kk.mG(),
+             Ik = Fk.createPickingRay(Fk.pointerX, Fk.pointerY, yk.c.Identity(), kk, !1);
+           0 === kk.targetScreenOffset.x && 0 === kk.targetScreenOffset.y || (this._viewOffset.set(kk.targetScreenOffset.x, kk.targetScreenOffset.y, 0), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), this._globalOffset = yk.t.TransformNormal(this._viewOffset, kk._camer … [truncated]
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1094)

```diff
-             NS = xS.l.VK[6];
+             lk = yk.l.Ge[6];
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1098)

```diff
-           Math.abs(SS.x) < kS.d && (SS.x = 0), Math.abs(SS.y) < kS.d && (SS.y = 0), Math.abs(SS.z) < kS.d && (SS.z = 0)
+           Math.abs(kk.x) < Zk.b && (kk.x = 0), Math.abs(kk.y) < Zk.b && (kk.y = 0), Math.abs(kk.z) < Zk.b && (kk.z = 0)
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1102)

```diff
-         HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+         Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1149-L1151` → after: `L1149-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1149-L1151) · [Before (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1149-L1151)

```diff
-     QS.e.ArcRotateCameraMouseWheelInput = vS;
-     var ES, LS, YS = gS(39926);
-     class AS extends QS.f {
+     Kk.d.ArcRotateCameraMouseWheelInput = nk;
+     var Gk, pk, uk = Ik(39863);
+     class bk extends Kk.h {
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1164-L1167` → after: `L1164-L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1164-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1164-L1167) · [Before (L1164-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1164-L1167)

```diff
-     }(ES = AS.prototype).addVRDeviceOrientation ?? (ES.addVRDeviceOrientation = (0, YS.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (LS = AS.prototype).addGamepad ?? (LS.addGamepad = (0, YS.i)("ArcRotateCameraInputsManager", "addGamepad"));
-     var yS = gS(37164),
-       VS = gS(40271),
-       iS = gS(40274);
+     }(Gk = bk.prototype).addVRDeviceOrientation ?? (Gk.addVRDeviceOrientation = (0, uk.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (pk = bk.prototype).addGamepad ?? (pk.addGamepad = (0, uk.h)("ArcRotateCameraInputsManager", "addGamepad"));
+     var Rk = Ik(37201),
+       Uk = Ik(40228),
+       Ck = Ik(40236);
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1170)

```diff
-         super(SS, HS, gS), this.input = new iS.c({
+         super(kk, Fk, Ik), this.input = new Ck.d({
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1225)

```diff
-       return isNaN(SS) ? HS : SS
+       return isNaN(kk) ? Fk : kk
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1229` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1229) · [Before (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1229)

```diff
-         let HS, gS, qS, IS, fS, KS, jS, QS, wS, hS, ZS, JS, OS, dS, cS, vS, ES, LS, YS, yS, VS, iS, US, pS, sS, BS, MS, FS, RS = PS.h,
+         let Fk, Ik, ak, Lk, tk, ek, wk, Kk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk, pk, uk, Rk, Uk, Ck, Wk, fk, Bk, dk, Yk, Ak, gk = Pk.e,
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1279)

```diff
-             return this.wT
+             return this.nD
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1300)

```diff
-             this._upToYMatrix || (this._yToUpMatrix = new xS.e, this._upToYMatrix = new xS.e, this._upVector = xS.n.Zero()), SS.normalize(), this._upVector.dJ(SS), this.setMatUp()
+             this._upToYMatrix || (this._yToUpMatrix = new yk.c, this._upToYMatrix = new yk.c, this._upVector = yk.t.Zero()), kk.normalize(), this._upVector.kS(kk), this.setMatUp()
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1306)

```diff
-             xS.e.RotationAlignToRef(xS.n.UpReadOnly, this._upVector, this._yToUpMatrix), xS.e.RotationAlignToRef(this._upVector, xS.n.UpReadOnly, this._upToYMatrix)
+             yk.c.RotationAlignToRef(yk.t.UpReadOnly, this._upVector, this._yToUpMatrix), yk.c.RotationAlignToRef(this._upVector, yk.t.UpReadOnly, this._upToYMatrix)
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1526)

```diff
-             super(SS, xS.n.Zero(), qS, IS), uS = this, this.alpha = ((0, tS.k)(this, TS), (0, tS.k)(this, oS, void 0)), this.beta = ((0, tS.k)(this, lS), (0, tS.k)(this, mS, void 0)), this.radius = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
+             super(kk, yk.t.Zero(), ak, Lk), qk = this, this.alpha = ((0, Xk.n)(this, mk), (0, Xk.n)(this, hk, void 0)), this.beta = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, void 0)), this.radius = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1528)

```diff
-               gS ? (uS.setPosition(HS), uS.ak && uS.ak(gS)) : uS._previousPosition.dJ(uS._position);
+               Ik ? (qk.setPosition(Fk), qk.eZ && qk.eZ(Ik)) : qk._previousPosition.kS(qk._position);
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1535)

```diff
-               uS._computationVector.I5(uS.radius * tS * xS, uS.radius * XS, uS.radius * bS * xS), NS.addToRef(uS._computationVector, uS._newPosition), uS._position.dJ(uS._newPosition);
+               qk._computationVector.t5(qk.radius * Xk * yk, qk.radius * ik, qk.radius * Tk * yk), lk.addToRef(qk._computationVector, qk._newPosition), qk._position.kS(qk._newPosition);
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1537-L1538` → after: `L1537-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1537-L1538) · [Before (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1537-L1538)

```diff
-               uS.allowUpsideDown && uS.beta < 0 && (qS = qS.clone(), qS = qS.gq()), uS._computeViewMatrix(uS._position, NS, qS), uS._viewMatrix.addAtIndex(12, uS.targetScreenOffset.x), uS._viewMatrix.addAtIndex(13, uS.targetScreenOffset.y), uS._collisionTriggered = !1
-             }, this.wT = xS.n.Zero(), NS && this.setTarget(NS), this.alpha = HS, this.beta = gS, this.radius = bS, this.getViewMatrix(), this.inputs = new AS(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new WS(this.lL(), this._position), this.mo … [truncated]
+               qk.allowUpsideDown && qk.beta < 0 && (ak = ak.clone(), ak = ak.nX()), qk._computeViewMatrix(qk._position, lk, ak), qk._viewMatrix.addAtIndex(12, qk.targetScreenOffset.x), qk._viewMatrix.addAtIndex(13, qk.targetScreenOffset.y), qk._collisionTriggered = !1
+             }, this.nD = yk.t.Zero(), lk && this.setTarget(lk), this.alpha = Fk, this.beta = Ik, this.radius = Tk, this.getViewMatrix(), this.inputs = new bk(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Nk(this.mG(), this._position), this.mo … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1541)

```diff
-             super._initCache(), this._cache.wT = new xS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = xS.m.Zero()
+             super._initCache(), this._cache.nD = new yk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = yk.p.Zero()
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1544` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1544) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1544)

```diff
-             SS || super._updateCache(), this._cache.wT.dJ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.dJ(this.targetScreenOffset)
+             kk || super._updateCache(), this._cache.nD.kS(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.kS(this.targetScreenOffset)
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1549)

```diff
-               this._targetBoundingCenter ? SS.addToRef(this._targetBoundingCenter, this.wT) : this.wT.dJ(SS)
+               this._targetBoundingCenter ? kk.addToRef(this._targetBoundingCenter, this.nD) : this.nD.kS(kk)
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1552` → after: `L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1552) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1552)

```diff
-             return SS || this.wT
+             return kk || this.nD
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1558)

```diff
-             return this.hasStateStored() && this.restoreStateInterpolationFactor > kS.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
+             return this.hasStateStored() && this.restoreStateInterpolationFactor > Zk.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1570)

```diff
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != XS ? this._currentInterpolationFactor = XS : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != ik ? this._currentInterpolationFactor = ik : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1573` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1573) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1573)

```diff
-             return !!super._isSynchronizedViewMatrix() && (this._cache.wT.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+             return !!super._isSynchronizedViewMatrix() && (this._cache.nD.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1579` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1579) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1579)

```diff
-             HS = DS.k.BackCompatCameraNoPreventDefault(bS), this._useCtrlForPanning = gS, this._panningMouseButton = tS, "boolean" === typeof bS[0] && (bS.length > 1 && (this._useCtrlForPanning = bS[1]), bS.length > 2 && (this._panningMouseButton = bS[2])), this.inputs.attachElem … [truncated]
+             Fk = Qk.h.BackCompatCameraNoPreventDefault(Tk), this._useCtrlForPanning = Ik, this._panningMouseButton = Xk, "boolean" === typeof Tk[0] && (Tk.length > 1 && (this._useCtrlForPanning = Tk[1]), Tk.length > 2 && (this._panningMouseButton = Tk[2])), this.inputs.attachElem … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1592-L1593` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1592-L1593) · [Before (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1592-L1593)

```diff
-             const gS = xS.l.VK[0].I5(SS, HS, HS);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), gS.multiplyInPlace(this.panningAxis), xS.n.TransformNormalToRef(gS, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+             const Ik = yk.l.Ge[0].t5(kk, Fk, Fk);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Ik.multiplyInPlace(this.panningAxis), yk.t.TransformNormalToRef(Ik, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
```

#### 80. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1595-L1596` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1595-L1596) · [Before (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1595-L1596)

```diff
-                 HS = xS.n.CrossToRef(this._transformedDirection, SS, this._transformedDirection);
-               xS.n.CrossToRef(SS, HS, this._transformedDirection)
+                 Fk = yk.t.CrossToRef(this._transformedDirection, kk, this._transformedDirection);
+               yk.t.CrossToRef(kk, Fk, this._transformedDirection)
```

#### 81. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1600-L1601` → after: `L1600-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1600-L1601) · [Before (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1600-L1601)

```diff
-                 this._transformedDirection.addInPlace(this.wT);
-                 xS.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.wT.dJ(this._transformedDirection)
+                 this._transformedDirection.addInPlace(this.nD);
+                 yk.t.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.nD.kS(this._transformedDirection)
```

#### 82. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1605` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1605) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1605)

```diff
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(SS), SS.transposeToRef(SS), xS.n.TransformCoordinatesToRef(this._transformedDirection, SS, this._transformedDirection)
+                   this.parent.getWorldMatrix().getRotationMatrixToRef(kk), kk.transposeToRef(kk), yk.t.TransformCoordinatesToRef(this._transformedDirection, kk, this._transformedDirection)
```

#### 83. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1607)

```diff
-                 this.wT.addInPlace(this._transformedDirection)
+                 this.nD.addInPlace(this._transformedDirection)
```

#### 84. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1626)

```diff
-               const HS = this._scene.AK().getDeltaTime() / 1e3,
+               const Fk = this._scene.Oe().getDeltaTime() / 1e3,
```

#### 85. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1630-L1631)

```diff
-                 const HS = xS.l.VK[0].set(zS(this._goalTarget.x, this.wT.x), zS(this._goalTarget.y, this.wT.y), zS(this._goalTarget.z, this.wT.z));
-                 xS.n.LerpToRef(this.target, HS, gS, this.wT), 10 * xS.n.Distance(this.target, HS) / tS < kS.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.dJ(HS), this.setTarget(this.target, !1, !0, !0)) : SS = !0
+                 const Fk = yk.l.Ge[0].set(ck(this._goalTarget.x, this.nD.x), ck(this._goalTarget.y, this.nD.y), ck(this._goalTarget.z, this.nD.z));
+                 yk.t.LerpToRef(this.target, Fk, Ik, this.nD), 10 * yk.t.Distance(this.target, Fk) / Xk < Zk.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.kS(Fk), this.setTarget(this.target, !1, !0, !0)) : kk = !0
```

#### 86. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1634-L1636` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1634-L1636) · [Before (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1634-L1636)

```diff
-                 const HS = xS.i.RotationAlphaBetaGammaToRef(zS(this._goalAlpha, this.alpha), zS(this._goalBeta, this.beta), 0, xS.l.Quaternion[0]),
-                   tS = xS.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, xS.l.Quaternion[1]),
-                   bS = xS.i.SlerpToRef(tS, HS, gS, xS.l.Quaternion[2]);
+                 const Fk = yk.f.RotationAlphaBetaGammaToRef(ck(this._goalAlpha, this.alpha), ck(this._goalBeta, this.beta), 0, yk.l.Quaternion[0]),
+                   Xk = yk.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, yk.l.Quaternion[1]),
+                   Tk = yk.f.SlerpToRef(Xk, Fk, Ik, yk.l.Quaternion[2]);
```

#### 87. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1638-L1639` → after: `L1638-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1638-L1639) · [Before (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1638-L1639)

```diff
-                 const XS = bS.toAlphaBetaGammaToRef(xS.l.VK[0]);
-                 if (this.alpha = XS.x, this.beta = XS.y, bS.isApprox(HS, kS.d / 5)) {
+                 const ik = Tk.toAlphaBetaGammaToRef(yk.l.Ge[0]);
+                 if (this.alpha = ik.x, this.beta = ik.y, Tk.isApprox(Fk, Zk.b / 5)) {
```

#### 88. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1641)

```diff
-                   const SS = HS.toAlphaBetaGammaToRef(xS.l.VK[0]);
+                   const kk = Fk.toAlphaBetaGammaToRef(yk.l.Ge[0]);
```

#### 89. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1645` → after: `L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1645) · [Before (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1645)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (tS - this.radius) * gS, Math.abs(tS / this.radius - 1) < kS.d ? (this._goalRadius = NaN, this.radius = tS) : SS = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
+               if (isNaN(this._goalRadius) || (this.radius += (Xk - this.radius) * Ik, Math.abs(Xk / this.radius - 1) < Zk.b ? (this._goalRadius = NaN, this.radius = Xk) : kk = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
```

#### 90. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1647)

```diff
-                 xS.m.LerpToRef(this.targetScreenOffset, HS, gS, this.targetScreenOffset), xS.m.Distance(this.targetScreenOffset, HS) < kS.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.dJ(HS)) : SS = !0
+                 yk.p.LerpToRef(this.targetScreenOffset, Fk, Ik, this.targetScreenOffset), yk.p.Distance(this.targetScreenOffset, Fk) < Zk.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.kS(Fk)) : kk = !0
```

#### 91. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1657)

```diff
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xS.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yk.t.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1668` → after: `L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1668) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1668)

```diff
-             this._position.equals(SS) || (this._position.dJ(SS), this.rebuildAnglesAndRadius())
+             this._position.equals(kk) || (this._position.kS(kk), this.rebuildAnglesAndRadius())
```

#### 93. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1674)

```diff
-             if (tS = this.overrideCloneAlphaBetaRadius ?? tS, SS.computeWorldMatrix) HS && SS.hA ? this._targetBoundingCenter = SS.hA().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, SS.computeWorldMatrix(), this._targetHost = SS, this.wT = this._getTargetPo … [truncated]
+             if (Xk = this.overrideCloneAlphaBetaRadius ?? Xk, kk.computeWorldMatrix) Fk && kk.vR ? this._targetBoundingCenter = kk.vR().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, kk.computeWorldMatrix(), this._targetHost = kk, this.nD = this._getTargetPo … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1679)

```diff
-               this._targetHost = null, this.wT = HS, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
+               this._targetHost = null, this.nD = Fk, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
```

#### 95. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1690-L1691` → after: `L1690-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1690-L1691) · [Before (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1690-L1691)

```diff
-             if (this._computationVector.I5(this.radius * SS * tS, this.radius * gS, this.radius * HS * tS), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xS.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
-               const SS = this.lL().collisionCoordinator;
+             if (this._computationVector.t5(this.radius * kk * Xk, this.radius * Ik, this.radius * Fk * Xk), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yk.t.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
+               const kk = this.mG().collisionCoordinator;
```

#### 96. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1694)

```diff
-               this._position.dJ(this._newPosition);
+               this._position.kS(this._newPosition);
```

#### 97. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1696)

```diff
-               this.allowUpsideDown && tS < 0 && (SS = SS.gq()), this._computeViewMatrix(this._position, bS, SS), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
+               this.allowUpsideDown && Xk < 0 && (kk = kk.nX()), this._computeViewMatrix(this._position, Tk, kk), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
```

#### 98. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1698` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1698) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1698)

```diff
-             return this._currentTarget.dJ(bS), this._viewMatrix
+             return this._currentTarget.kS(Tk), this._viewMatrix
```

#### 99. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1702-L1703` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1702-L1703) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1702-L1703)

```diff
-             SS = SS || this.lL().meshes;
-             const gS = uS.e.MinMax(SS);
+             kk = kk || this.mG().meshes;
+             const Ik = qk.b.MinMax(kk);
```

#### 100. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1705-L1706)

```diff
-             if (tS = Math.max(Math.min(tS, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = tS * this.zoomOnFactor, this.mode === nS.b.ORTHOGRAPHIC_CAMERA) {
-               const SS = this.lL().AK().getAspectRatio(this),
+             if (Xk = Math.max(Math.min(Xk, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Xk * this.zoomOnFactor, this.mode === xk.d.ORTHOGRAPHIC_CAMERA) {
+               const kk = this.mG().Oe().getAspectRatio(this),
```

#### 101. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1719-L1720` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1719-L1720) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1719-L1720)

```diff
-               const tS = SS || this.lL().meshes;
-               HS = uS.e.MinMax(tS), gS = xS.n.Distance(HS.min, HS.max)
+               const Xk = kk || this.mG().meshes;
+               Fk = qk.b.MinMax(Xk), Ik = yk.t.Distance(Fk.min, Fk.max)
```

#### 102. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1724)

```diff
-             this.wT = uS.e.Center(HS), tS || (this.maxZ = 2 * gS)
+             this.nD = qk.b.Center(Fk), Xk || (this.maxZ = 2 * Ik)
```

#### 103. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1729-L1733` → after: `L1729-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1729-L1733) · [Before (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1729-L1733)

```diff
-               case nS.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case nS.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case nS.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case nS.b.RIG_MODE_VR:
+               case xk.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case xk.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case xk.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case xk.d.RIG_MODE_VR:
```

#### 104. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1736)

```diff
-               case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 105. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1739)

```diff
-             const bS = new SS(HS, this.alpha + tS, this.beta, this.radius, this.wT, this.lL());
+             const Tk = new kk(Fk, this.alpha + Xk, this.beta, this.radius, this.nD, this.mG());
```

#### 106. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1746-L1750` → after: `L1746-L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1746-L1750) · [Before (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1746-L1750)

```diff
-               case nS.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case nS.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case nS.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case nS.b.RIG_MODE_VR:
+               case xk.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case xk.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case xk.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case xk.d.RIG_MODE_VR:
```

#### 107. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1753)

```diff
-               case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 108. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1760-L1761)

```diff
-             const tS = xS.n.Distance(SS, HS),
-               bS = this.lL().AK().getAspectRatio(this),
+             const Xk = yk.t.Distance(kk, Fk),
+               Tk = this.mG().Oe().getAspectRatio(this),
```

#### 109. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1777)

```diff
-           HS = [(0, bS.M)()], gS = [(0, bS.M)()], qS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.I)("target")], KS = [(0, bS.t)("targetHost")], jS = [(0, bS.M)()], QS = [(0, bS.M)()], wS = [(0, bS.M)()], hS = [(0, bS.M)()], ZS = [(0, bS.M)()], JS = [(0, bS.M)()], OS = [(0,  … [truncated]
+           Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ak = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.H)("target")], ek = [(0, Tk.x)("targetHost")], wk = [(0, Tk.J)()], Kk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Vk = [(0, Tk.J)()], zk = [(0, Tk.J)()], Sk = [(0, Tk.J)()], vk = [(0,  … [truncated]
```

#### 110. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1881)

```diff
-             name: "wT",
+             name: "nD",
```

#### 111. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1885-L1886)

```diff
-               has: SS => "wT" in SS,
-               get: SS => SS.wT,
+               has: kk => "nD" in kk,
+               get: kk => kk.nD,
```

#### 112. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L1888)

```diff
-                 SS.wT = HS
+                 kk.nD = Fk
```

#### 113. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2135)

```diff
-     pS || (pS = !0, qS.e.AddNodeConstructor("ArcRotateCamera", ((SS, HS) => () => new US(SS, 0, 0, 1, xS.n.Zero(), HS))), (0, yS.f)("BABYLON.ArcRotateCamera", US))
+     fk || (fk = !0, ak.b.AddNodeConstructor("ArcRotateCamera", ((kk, Fk) => () => new Wk(kk, 0, 0, 1, yk.t.Zero(), Fk))), (0, Rk.f)("BABYLON.ArcRotateCamera", Wk))
```

#### 114. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2137)

```diff
-   40286: (SS, HS, gS) => {
+   40252: (kk, Fk, Ik) => {
```

#### 115. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2139)

```diff
-       d: () => tS.d
+       d: () => Xk.b
```

#### 116. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2141-L2142` → after: `L2141-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2141-L2142) · [Before (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2141-L2142)

```diff
-     var tS = gS(40295);
-     (0, tS.h)()
+     var Xk = Ik(40259);
+     (0, Xk.e)()
```

#### 117. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2144)

```diff
-   40295: (SS, HS, gS) => {
+   40259: (kk, Fk, Ik) => {
```

#### 118. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2146-L2147` → after: `L2146-L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2146-L2147) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2146-L2147)

```diff
-       d: () => IS,
-       h: () => kS
+       b: () => Lk,
+       e: () => Zk
```

#### 119. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2149-L2155` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2149-L2155) · [Before (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2149-L2155)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(37117),
-       xS = gS(37300),
-       NS = gS(40304),
-       qS = gS(40256),
-       uS = gS(37164);
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(37153),
+       yk = Ik(37331),
+       lk = Ik(40265),
+       ak = Ik(40218),
+       qk = Ik(37201);
```

#### 120. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2158)

```diff
-         let HS, gS, qS = NS.e,
+         let Fk, Ik, ak = lk.b,
```

#### 121. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2165)

```diff
-             super(SS, gS, bS), this.groundColor = (0, tS.k)(this, uS, new xS.b(0, 0, 0)), this.direction = ((0, tS.k)(this, IS), (0, tS.k)(this, fS, void 0)), (0, tS.k)(this, kS), this.direction = HS || XS.n.Up()
+             super(kk, Ik, Tk), this.groundColor = (0, Xk.n)(this, qk, new yk.e(0, 0, 0)), this.direction = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, void 0)), (0, Xk.n)(this, Zk), this.direction = Fk || ik.t.Up()
```

#### 122. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2174)

```diff
-             return this.direction = XS.n.Normalize(SS.subtract(XS.n.Zero())), this.direction
+             return this.direction = ik.t.Normalize(kk.subtract(ik.t.Zero())), this.direction
```

#### 123. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2180)

```diff
-             const gS = XS.n.Normalize(this.direction);
+             const Ik = ik.t.Normalize(this.direction);
```

#### 124. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2184)

```diff
-             const gS = XS.n.Normalize(this.direction);
+             const Ik = ik.t.Normalize(this.direction);
```

#### 125. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2188)

```diff
-             return this._worldMatrix || (this._worldMatrix = XS.e.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = ik.c.Identity()), this._worldMatrix
```

#### 126. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2191)

```diff
-             return NS.e.LIGHTTYPEID_HEMISPHERICLIGHT
+             return lk.b.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 127. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2198)

```diff
-           HS = [(0, bS.k)()], gS = [(0, bS.I)()], (0, tS.j)(null, null, HS, {
+           Fk = [(0, Tk.n)()], Ik = [(0, Tk.H)()], (0, Xk.j)(null, null, Fk, {
```

#### 128. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/260.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/260.js#L2235)

```diff
-       fS || (fS = !0, qS.e.AddNodeConstructor("Light_Type_3", ((SS, HS) => () => new IS(SS, XS.n.Zero(), HS))), (0, uS.f)("BABYLON.HemisphericLight", IS))
+       tk || (tk = !0, ak.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new Lk(kk, ik.t.Zero(), Fk))), (0, qk.f)("BABYLON.HemisphericLight", Lk))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (161 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40428: (SS, HS, gS) => {
+   40402: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L6)

```diff
-       b: () => bS
+       e: () => Tk
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L8)

```diff
-     var tS = gS(40056);
+     var Xk = Ik(40013);
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L19)

```diff
-           const HS = (0, tS.b)(SS[Symbol.metadata]);
+           const Fk = (0, Xk.c)(kk[Symbol.metadata]);
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L32)

```diff
-           SS !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !SS && this.lL ? this._imageProcessingConfiguration = this.l … [truncated]
+           kk !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !kk && this.mG ? this._imageProcessingConfiguration = this.m … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L81)

```diff
-   40320: (SS, HS, gS) => {
+   40288: (kk, Fk, Ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L83-L84` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L83-L84) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L83-L84)

```diff
-       c: () => XS,
-       e: () => bS
+       b: () => ik,
+       f: () => Tk
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L86)

```diff
-     var tS = gS(40324);
+     var Xk = Ik(40291);
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L95)

```diff
-     class XS extends tS.c {
+     class ik extends Xk.e {
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L101)

```diff
-   40396: (SS, HS, gS) => {
+   40357: (kk, Fk, Ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L103)

```diff
-       e: () => fS
+       c: () => tk
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L105-L112` → after: `L105-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L105-L112) · [Before (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L105-L112)

```diff
-     var tS = gS(40041),
-       bS = gS(40331),
-       XS = gS(40048),
-       xS = gS(40378),
-       NS = gS(40324),
-       qS = gS(40400),
-       uS = gS(40367);
-     class IS extends NS.c {
+     var Xk = Ik(40003),
+       Tk = Ik(40295),
+       ik = Ik(40011),
+       yk = Ik(40338),
+       lk = Ik(40291),
+       ak = Ik(40363),
+       qk = Ik(40329);
+     class Lk extends lk.e {
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L119)

```diff
-       let fS, kS, aS, KS, jS, GS, CS = qS.e,
+       let tk, Zk, jk, ek, wk, Hk, Jk = ak.b,
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L137)

```diff
-           (0, tS.h)(this, HS, SS, "f")
+           (0, Xk.f)(this, Fk, kk, "f")
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L143)

```diff
-           (0, tS.h)(this, gS, SS, "f")
+           (0, Xk.f)(this, Ik, kk, "f")
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L149)

```diff
-           (0, tS.h)(this, NS, SS, "f")
+           (0, Xk.f)(this, lk, kk, "f")
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L159)

```diff
-           super(SS, "DetailMap", 140, new IS, XS), this._texture = null, HS.set(this, (0, tS.k)(this, nS, void 0)), this.diffuseBlendLevel = ((0, tS.k)(this, PS), (0, tS.k)(this, QS, 1)), this.roughnessBlendLevel = ((0, tS.k)(this, DS), (0, tS.k)(this, wS, 1)), this.bumpLevel = ( … [truncated]
+           super(kk, "DetailMap", 140, new Lk, ik), this._texture = null, Fk.set(this, (0, Xk.n)(this, xk, void 0)), this.diffuseBlendLevel = ((0, Xk.n)(this, Pk), (0, Xk.n)(this, Kk, 1)), this.roughnessBlendLevel = ((0, Xk.n)(this, Qk), (0, Xk.n)(this, sk, 1)), this.bumpLevel = ( … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L162)

```diff
-           return !this._isEnabled || !(SS._areTexturesDirty && HS.texturesEnabled && gS.getCaps().standardDerivatives && this._texture && xS.e.DetailTextureEnabled && !this._texture.isReady())
+           return !this._isEnabled || !(kk._areTexturesDirty && Fk.texturesEnabled && Ik.getCaps().standardDerivatives && this._texture && yk.d.DetailTextureEnabled && !this._texture.isReady())
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L167-L168` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L167-L168) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L167-L168)

```diff
-             const gS = HS.AK();
-             SS._areTexturesDirty && (gS.getCaps().standardDerivatives && this._texture && xS.e.DetailTextureEnabled && this._isEnabled ? ((0, uS.X)(this._texture, SS, "DETAIL"), SS.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : SS.DETAIL = !1)
+             const Ik = Fk.Oe();
+             kk._areTexturesDirty && (Ik.getCaps().standardDerivatives && this._texture && yk.d.DetailTextureEnabled && this._isEnabled ? ((0, qk.P)(this._texture, kk, "DETAIL"), kk.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : kk.DETAIL = !1)
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L174)

```diff
-           SS.useUbo && gS && SS.isSync || this._texture && xS.e.DetailTextureEnabled && (SS.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, uS.y)(this._texture, SS, "detail")), HS.texturesEnabled  … [truncated]
+           kk.useUbo && Ik && kk.isSync || this._texture && yk.d.DetailTextureEnabled && (kk.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, qk.v)(this._texture, kk, "detail")), Fk.texturesEnabled  … [truncated]
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L209)

```diff
-         fS = [(0, XS.B)("detailTexture"), (0, XS.d)("_markAllSubMeshesAsTexturesDirty")], kS = [(0, XS.M)()], aS = [(0, XS.M)()], KS = [(0, XS.M)()], jS = [(0, XS.M)(), (0, XS.d)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, XS.M)(), (0, XS.d)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+         tk = [(0, ik.B)("detailTexture"), (0, ik.e)("_markAllSubMeshesAsTexturesDirty")], Zk = [(0, ik.J)()], jk = [(0, ik.J)()], ek = [(0, ik.J)()], wk = [(0, ik.J)(), (0, ik.e)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, ik.J)(), (0, ik.e)("_markAllSubMeshesAsTexturesDirty" … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L296)

```diff
-   40324: (SS, HS, gS) => {
+   40291: (kk, Fk, Ik) => {
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L298)

```diff
-       c: () => tS
+       e: () => Xk
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L395)

```diff
-   40414: (SS, HS, gS) => {
+   40382: (kk, Fk, Ik) => {
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L399` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L398-L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L399)

```diff
-       i: () => XS
+       g: () => yk,
+       j: () => ik
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L401)

```diff
-     var tS, bS = gS(37117);
+     var Xk, Tk = Ik(37153);
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L406)

```diff
-       if (!Number.isInteger(tS) || tS < 0 || tS > gS) throw new Error(`Invalid geometry object ID ${tS} for mesh "${SS.name}". Object IDs must be integers between 0 and 0x${gS.toString(16).toUpperCase()}.`);
+       if (!Number.isInteger(Xk) || Xk < 0 || Xk > Ik) throw new Error(`Invalid geometry object ID ${Xk} for mesh "${kk.name}". Object IDs must be integers between 0 and 0x${Ik.toString(16).toUpperCase()}.`);
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L412)

```diff
-       if (!Number.isInteger(gS) || gS < 0 || gS > 255 || 0 !== gS && 0 === (63 & gS)) throw new Error(`Invalid geometry mesh-blending tag ${gS} for mesh "${SS.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       if (!Number.isInteger(Ik) || Ik < 0 || Ik > 255 || 0 !== Ik && 0 === (63 & Ik)) throw new Error(`Invalid geometry mesh-blending tag ${Ik} for mesh "${kk.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L422-L423)

```diff
-           previousViewProjection: bS.e.Zero(),
-           currentViewProjection: bS.e.Zero(),
+           previousViewProjection: Tk.c.Zero(),
+           currentViewProjection: Tk.c.Zero(),
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L443)

```diff
-           void 0 !== SS && (bS += `#define ${XS.define}\n#define ${XS.defineIndex} ${SS}\n`)
+           void 0 !== kk && (Tk += `#define ${ik.define}\n#define ${ik.defineIndex} ${kk}\n`)
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L445)

```diff
-         tS.objectIdIsRedFormat && (bS += "#define PREPASS_OBJECT_ID_R8\n"), tS._defines = bS + `#define SCENE_MRT_COUNT ${HS.length}\n`
+         Xk.objectIdIsRedFormat && (Tk += "#define PREPASS_OBJECT_ID_R8\n"), Xk._defines = Tk + `#define SCENE_MRT_COUNT ${Fk.length}\n`
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L479-L480` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L479-L480) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L479-L480)

```diff
-           if (gS.dD)
-             for (const HS of gS.dD) HS._removeDrawWrapper(SS)
+           if (Ik.lK)
+             for (const Fk of Ik.lK) Fk._removeDrawWrapper(kk)
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L500-L501)

```diff
-         const uS = gS.lL(),
-           IS = uS.AK();
+         const qk = Ik.mG(),
+           Lk = qk.Oe();
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L506)

```diff
-           else if (tS > SS) throw new Error(`Invalid geometry object ID ${tS} for mesh "${gS.name}". Object IDs must be integers between 0 and 0x${SS.toString(16).toUpperCase()}.`);
+           else if (Xk > kk) throw new Error(`Invalid geometry object ID ${Xk} for mesh "${Ik.name}". Object IDs must be integers between 0 and 0x${kk.toString(16).toUpperCase()}.`);
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L516)

```diff
-           if (SS[gS.uniqueId] || (SS[gS.uniqueId] = tS.clone(), qS.previousWorldMatrices[gS.uniqueId] = tS.clone()), bS[gS.uniqueId] !== IS.frameId && (qS.previousWorldMatrices[gS.uniqueId].dJ(SS[gS.uniqueId]), bS[gS.uniqueId] = IS.frameId), SS[gS.uniqueId].dJ(tS), -1 === qS.last … [truncated]
+           if (kk[Ik.uniqueId] || (kk[Ik.uniqueId] = Xk.clone(), ak.previousWorldMatrices[Ik.uniqueId] = Xk.clone()), Tk[Ik.uniqueId] !== Lk.frameId && (ak.previousWorldMatrices[Ik.uniqueId].kS(kk[Ik.uniqueId]), Tk[Ik.uniqueId] = Lk.frameId), kk[Ik.uniqueId].kS(Xk), -1 === ak.last … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L630)

```diff
-   40400: (SS, HS, gS) => {
+   40363: (kk, Fk, Ik) => {
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L632-L633` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L632-L633) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L632-L633)

```diff
-       e: () => kS,
-       i: () => KS
+       b: () => Zk,
+       d: () => ek
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L635-L638` → after: `L635-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L635-L638) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L635-L638)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(39930),
-       xS = gS(39899);
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(39872),
+       yk = Ik(39837);
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L642)

```diff
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = SS, this._scene = SS.lL(), this._engine = this._scene.AK()
+         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = kk, this._scene = kk.mG(), this._engine = this._scene.Oe()
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L647)

```diff
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !SS.isCompatible(this._material.shaderLanguage)) throw `The plugin "${SS.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
+         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !kk.isCompatible(this._material.shaderLanguage)) throw `The plugin "${kk.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L747)

```diff
-                             SS = `${HS.type}f`
+                             kk = `${Fk.type}f`
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L749-L750)

```diff
-                         this._uboDeclaration += tS > 0 ? `uniform ${HS.name}: array<${SS}, ${tS}>;\n` : `uniform ${HS.name}: ${SS};\n`
-                       } else this._uboDeclaration += `${HS.type} ${HS.name}${tS>0?`[${tS}]`:""};\n`
+                         this._uboDeclaration += Xk > 0 ? `uniform ${Fk.name}: array<${kk}, ${Xk}>;\n` : `uniform ${Fk.name}: ${kk};\n`
+                       } else this._uboDeclaration += `${Fk.type} ${Fk.name}${Xk>0?`[${Xk}]`:""};\n`
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L784-L785` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L784-L785) · [Before (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L784-L785)

```diff
-                 shadersRepository: xS.c.GetShadersRepository(NS),
-                 includesShadersStore: xS.c.GetIncludesShadersStore(NS),
+                 shadersRepository: yk.b.GetShadersRepository(lk),
+                 includesShadersStore: yk.b.GetIncludesShadersStore(lk),
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L790)

```diff
-                 RgS: this._engine.RgS,
+                 IXk: this._engine.IXk,
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L792)

```diff
-               }), qS.isFragment = "fragment" === gS, (0, XS.i)(uS, qS, (SS => uS = SS))), bS += uS + "\n")
+               }), ak.isFragment = "fragment" === Ik, (0, ik.g)(qk, ak, (kk => qk = kk))), Tk += qk + "\n")
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L829-L830)

```diff
-     var IS = gS(40068),
-       fS = gS(37164);
+     var Lk = Ik(40021),
+       tk = Ik(37201);
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L852)

```diff
-             this.name = (0, tS.k)(this, NS, void 0), this.priority = ((0, tS.k)(this, uS), (0, tS.k)(this, fS, 500)), this.resolveIncludes = ((0, tS.k)(this, kS), (0, tS.k)(this, aS, !1)), this.registerForExtraEvents = ((0, tS.k)(this, KS), (0, tS.k)(this, jS, !1)), this.doNotSer … [truncated]
+             this.name = (0, Xk.n)(this, lk, void 0), this.priority = ((0, Xk.n)(this, qk), (0, Xk.n)(this, tk, 500)), this.resolveIncludes = ((0, Xk.n)(this, Zk), (0, Xk.n)(this, jk, !1)), this.registerForExtraEvents = ((0, Xk.n)(this, ek), (0, Xk.n)(this, wk, !1)), this.doNotSer … [truncated]
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L910)

```diff
-           HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], xS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
+           Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L976)

```diff
-   40313: (SS, HS, gS) => {
+   40279: (kk, Fk, Ik) => {
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L978)

```diff
-       d: () => tS
+       c: () => Xk
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L991-L992` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L991-L992) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L991-L992)

```diff
-           const bS = HS.AK();
-           this.currentViewProjection.updateFlag !== HS.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = bS.frameId, this.previousViewProjection.dJ(this.currentViewProjection), this.currentViewProjection.dJ(HS.getTransformMatrix())) : this._lastUpdateFrameId !== bS.fra … [truncated]
+           const Tk = Fk.Oe();
+           this.currentViewProjection.updateFlag !== Fk.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Tk.frameId, this.previousViewProjection.kS(this.currentViewProjection), this.currentViewProjection.kS(Fk.getTransformMatrix())) : this._lastUpdateFrameId !== Tk.fra … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L997)

```diff
-   40421: (SS, HS, gS) => {
+   40393: (kk, Fk, Ik) => {
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1006)

```diff
-       c: () => tS
+       d: () => Xk
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1009)

```diff
-   40306: (SS, HS, gS) => {
+   40269: (kk, Fk, Ik) => {
```

#### 55. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1011)

```diff
-       StandardMaterial: () => tS.i
+       StandardMaterial: () => Xk.e
```

#### 56. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1013-L1014` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1013-L1014) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1013-L1014)

```diff
-     var tS = gS(40310);
-     (0, tS.e)()
+     var Xk = Ik(40277);
+     (0, Xk.b)()
```

#### 57. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1016)

```diff
-   40310: (SS, HS, gS) => {
+   40277: (kk, Fk, Ik) => {
```

#### 58. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1018-L1019` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1018-L1019) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1018-L1019)

```diff
-       e: () => VS,
-       i: () => AS
+       b: () => Uk,
+       e: () => bk
```

#### 59. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1021-L1031` → after: `L1021-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1021-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1021-L1041) · [Before (L1021-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1021-L1031)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(40144),
-       xS = gS(40131),
-       NS = gS(37300),
-       qS = gS(40183),
-       uS = gS(40313),
-       IS = gS(40320),
-       fS = gS(40152),
-       kS = gS(40331),
-       aS = gS(40324),
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(40107),
+       yk = Ik(40090),
+       lk = Ik(37331),
+       ak = Ik(40141),
+       qk = Ik(40279),
+       Lk = Ik(40288),
+       tk = Ik(40113),
+       Zk = Ik(40295),
+       jk = Ik(40291),
+       ek = Ik(40345),
+       wk = Ik(40338),
+       Hk = Ik(40349),
+       Jk = Ik(40357),
+       xk = Ik(40333),
+ ... (5 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1033-L1046` → after: `L1043-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1043-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1043-L1046) · [Before (L1033-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1033-L1046)

```diff
-       jS = gS(40378),
-       GS = gS(40392),
-       CS = gS(40396),
-       nS = gS(40375),
-       PS = gS(40405),
-       QS = gS(40367),
-       DS = gS(40068),
-       wS = gS(40412),
-       hS = gS(40414),
-       ZS = gS(40418),
-       JS = gS(40421),
-       OS = gS(40428),
-       dS = gS(37164),
-       cS = gS(39926);
+       Sk = Ik(40393),
+       vk = Ik(40402),
+       Ek = Ik(37201),
+       Ok = Ik(39863);
```

#### 61. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1051-L1052)

```diff
-     class ES extends((0, JS.c)((0, ZS.c)(aS.c))) {}
-     class LS extends((0, IS.e)(ES)) {
+     class Gk extends((0, Sk.d)((0, zk.b)(jk.e))) {}
+     class pk extends((0, Lk.f)(Gk)) {
```

#### 62. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1057)

```diff
-     class YS extends((0, OS.b)(KS.d)) {}
+     class uk extends((0, vk.e)(ek.e)) {}
```

#### 63. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1212)

```diff
-             (0, tS.h)(this, HS, SS, "f")
+             (0, Xk.f)(this, Fk, kk, "f")
```

#### 64. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1218)

```diff
-             (0, tS.h)(this, IS, SS, "f")
+             (0, Xk.f)(this, Lk, kk, "f")
```

#### 65. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1224)

```diff
-             (0, tS.h)(this, aS, SS, "f")
+             (0, Xk.f)(this, jk, kk, "f")
```

#### 66. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1230)

```diff
-             (0, tS.h)(this, ZS, SS, "f")
+             (0, Xk.f)(this, zk, kk, "f")
```

#### 67. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1236)

```diff
-             (0, tS.h)(this, JS, SS, "f")
+             (0, Xk.f)(this, Sk, kk, "f")
```

#### 68. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1242)

```diff
-             (0, tS.h)(this, OS, SS, "f")
+             (0, Xk.f)(this, vk, kk, "f")
```

#### 69. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1248)

```diff
-             (0, tS.h)(this, dS, SS, "f")
+             (0, Xk.f)(this, Ek, kk, "f")
```

#### 70. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1254)

```diff
-             (0, tS.h)(this, cS, SS, "f")
+             (0, Xk.f)(this, Ok, kk, "f")
```

#### 71. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1260)

```diff
-             (0, tS.h)(this, ES, SS, "f")
+             (0, Xk.f)(this, Gk, kk, "f")
```

#### 72. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1266)

```diff
-             (0, tS.h)(this, AS, SS, "f")
+             (0, Xk.f)(this, bk, kk, "f")
```

#### 73. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1272)

```diff
-             (0, tS.h)(this, yS, SS, "f")
+             (0, Xk.f)(this, Rk, kk, "f")
```

#### 74. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1278)

```diff
-             (0, tS.h)(this, VS, SS, "f")
+             (0, Xk.f)(this, Uk, kk, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1284)

```diff
-             (0, tS.h)(this, iS, SS, "f")
+             (0, Xk.f)(this, Ck, kk, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1290)

```diff
-             (0, tS.h)(this, WS, SS, "f")
+             (0, Xk.f)(this, Nk, kk, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1296)

```diff
-             (0, tS.h)(this, zS, SS, "f")
+             (0, Xk.f)(this, ck, kk, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1302)

```diff
-             (0, tS.h)(this, US, SS, "f")
+             (0, Xk.f)(this, Wk, kk, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1308)

```diff
-             (0, tS.h)(this, pS, SS, "f")
+             (0, Xk.f)(this, fk, kk, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1314)

```diff
-             (0, tS.h)(this, sS, SS, "f")
+             (0, Xk.f)(this, Bk, kk, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1320` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1320) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1320)

```diff
-             (0, tS.h)(this, BS, SS, "f")
+             (0, Xk.f)(this, dk, kk, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1326)

```diff
-             (0, tS.h)(this, MS, SS, "f")
+             (0, Xk.f)(this, Yk, kk, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1332)

```diff
-             (0, tS.h)(this, FS, SS, "f")
+             (0, Xk.f)(this, Ak, kk, "f")
```

#### 84. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1338)

```diff
-             (0, tS.h)(this, RS, SS, "f")
+             (0, Xk.f)(this, gk, kk, "f")
```

#### 85. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1344)

```diff
-             (0, tS.h)(this, TS, SS, "f")
+             (0, Xk.f)(this, mk, kk, "f")
```

#### 86. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1350)

```diff
-             (0, tS.h)(this, oS, SS, "f")
+             (0, Xk.f)(this, hk, kk, "f")
```

#### 87. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1356)

```diff
-             (0, tS.h)(this, lS, SS, "f")
+             (0, Xk.f)(this, rk, kk, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1362)

```diff
-             (0, tS.h)(this, mS, SS, "f")
+             (0, Xk.f)(this, Dk, kk, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1368)

```diff
-             (0, tS.h)(this, eS, SS, "f")
+             (0, Xk.f)(this, Mk, kk, "f")
```

#### 90. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1374)

```diff
-             (0, tS.h)(this, rS, SS, "f")
+             (0, Xk.f)(this, kF, kk, "f")
```

#### 91. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1380)

```diff
-             (0, tS.h)(this, SH, SS, "f")
+             (0, Xk.f)(this, FF, kk, "f")
```

#### 92. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1386)

```diff
-             (0, tS.h)(this, HH, SS, "f")
+             (0, Xk.f)(this, IF, kk, "f")
```

#### 93. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1392)

```diff
-             (0, tS.h)(this, gH, SS, "f")
+             (0, Xk.f)(this, XF, kk, "f")
```

#### 94. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1398)

```diff
-             (0, tS.h)(this, tH, SS, "f")
+             (0, Xk.f)(this, TF, kk, "f")
```

#### 95. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1407` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1407) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1407)

```diff
-             super(gS, bS, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || SS.ForceGLSL), this._diffuseTexture = (0, tS.k)(this, Og, null), HS.set(this, ((0, tS.k)(this, dg), (0, tS.k)(this, cg, void 0))), this._ambientTexture = ((0, tS.k)(this, vg), (0, … [truncated]
+             super(Ik, Tk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), this._diffuseTexture = (0, Xk.n)(this, vI, null), Fk.set(this, ((0, Xk.n)(this, EI), (0, Xk.n)(this, OI, void 0))), this._ambientTexture = ((0, Xk.n)(this, nI), (0, … [truncated]
```

#### 96. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1419)

```diff
-             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === kS.d.MATERIAL_ALPHATEST)
+             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Zk.c.MATERIAL_ALPHATEST)
```

#### 97. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1422)

```diff
-             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== kS.d.MATERIAL_OPAQUE
+             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Zk.c.MATERIAL_OPAQUE
```

#### 98. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1436)

```diff
-             const XS = this.lL(),
+             const ik = this.mG(),
```

#### 99. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1439-L1443` → after: `L1439-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1439-L1443) · [Before (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1439-L1443)

```diff
-             const NS = XS.AK();
-             if (xS._needNormals = (0, QS.T)(XS, HS, xS, !0, this._maxSimultaneousLights, this._disableLighting), !(0, QS.c)(XS, HS, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, QS.bb)(XS, xS);
-             const IS = this.needAlphaBlendingForMesh(HS) && this.lL().useOrderIndependentTransparency;
-             if ((0, QS.eb)(XS, xS, this.canRenderToMRT && !IS), (0, QS.db)(XS, xS, IS), hS.d.PrepareDefines(NS.currentRenderPassId, HS, xS), xS._areTexturesDirty) {
+             const lk = ik.Oe();
+             if (yk._needNormals = (0, Kk.M)(ik, Fk, yk, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Kk.b)(ik, Fk, this._maxSimultaneousLights, this._disableLighting)) return !1;
+             (0, Kk.T)(ik, yk);
+             const Lk = this.needAlphaBlendingForMesh(Fk) && this.mG().useOrderIndependentTransparency;
+             if ((0, Kk._)(ik, yk, this.canRenderToMRT && !Lk), (0, Kk.W)(ik, yk, Lk), Vk.e.PrepareDefines(lk.currentRenderPassId, Fk, yk), yk._areTexturesDirty) {
```

#### 100. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1449)

```diff
-                   (0, QS.X)(this._diffuseTexture, xS, "DIFFUSE")
+                   (0, Kk.P)(this._diffuseTexture, yk, "DIFFUSE")
```

#### 101. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1453` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1453) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1453)

```diff
-                   (0, QS.X)(this._ambientTexture, xS, "AMBIENT")
+                   (0, Kk.P)(this._ambientTexture, yk, "AMBIENT")
```

#### 102. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1457` → after: `L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1457) · [Before (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1457)

```diff
-                   (0, QS.X)(this._opacityTexture, xS, "OPACITY"), xS.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
+                   (0, Kk.P)(this._opacityTexture, yk, "OPACITY"), yk.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
```

#### 103. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1459)

```diff
-                 if (this._reflectionTexture && SS.ReflectionTextureEnabled ? (xS.ROUGHNESS = this._roughness > 0, xS.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (xS.ROUGHNESS = !1, xS.REFLECTIONOVERALPHA = !1), !(0, QS.S)(XS, this._reflectionTexture, xS)) return !1;
+                 if (this._reflectionTexture && kk.ReflectionTextureEnabled ? (yk.ROUGHNESS = this._roughness > 0, yk.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (yk.ROUGHNESS = !1, yk.REFLECTIONOVERALPHA = !1), !(0, Kk.I)(ik, this._reflectionTexture, yk)) return !1;
```

#### 104. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1462)

```diff
-                   (0, QS.X)(this._emissiveTexture, xS, "EMISSIVE")
+                   (0, Kk.P)(this._emissiveTexture, yk, "EMISSIVE")
```

#### 105. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1466)

```diff
-                   (0, QS.X)(this._lightmapTexture, xS, "LIGHTMAP"), xS.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, xS.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
+                   (0, Kk.P)(this._lightmapTexture, yk, "LIGHTMAP"), yk.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, yk.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
```

#### 106. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1470)

```diff
-                   (0, QS.X)(this._specularTexture, xS, "SPECULAR"), xS.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
+                   (0, Kk.P)(this._specularTexture, yk, "SPECULAR"), yk.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
```

#### 107. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1472)

```diff
-                 if (XS.AK().getCaps().standardDerivatives && this._bumpTexture && SS.BumpTextureEnabled) {
+                 if (ik.Oe().getCaps().standardDerivatives && this._bumpTexture && kk.BumpTextureEnabled) {
```

#### 108. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1474)

```diff
-                   (0, QS.X)(this._bumpTexture, xS, "BUMP"), xS.PARALLAX = this._useParallax, xS.PARALLAX_RHS = XS.useRightHandedSystem, xS.PARALLAXOCCLUSION = this._useParallaxOcclusion, xS.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
+                   (0, Kk.P)(this._bumpTexture, yk, "BUMP"), yk.PARALLAX = this._useParallax, yk.PARALLAX_RHS = ik.useRightHandedSystem, yk.PARALLAXOCCLUSION = this._useParallaxOcclusion, yk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
```

#### 109. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1492)

```diff
-             (0, QS.Z)(HS, XS, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(HS), xS, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gS.getRenderingMesh(), this._isVertexOutputInvariant), (0, QS.R)(XS, NS, this, xS, tS, null … [truncated]
+             (0, Kk.R)(Fk, ik, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Fk), yk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Ik.getRenderingMesh(), this._isVertexOutputInvariant), (0, Kk.F)(ik, lk, this, yk, Xk, null … [truncated]
```

#### 110. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1498-L1502` → after: `L1498-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1498-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1498-L1502) · [Before (L1498-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1498-L1502)

```diff
-               xS.REFLECTION && bS.addFallback(0, "REFLECTION"), xS.SPECULAR && bS.addFallback(0, "SPECULAR"), xS.BUMP && bS.addFallback(0, "BUMP"), xS.PARALLAX && bS.addFallback(1, "PARALLAX"), xS.PARALLAX_RHS && bS.addFallback(1, "PARALLAX_RHS"), xS.PARALLAXOCCLUSION && bS.addFa … [truncated]
-               const IS = [qS.h.PositionKind];
-               xS.NORMAL && IS.push(qS.h.NormalKind), xS.TANGENT && IS.push(qS.h.TangentKind);
-               for (let SS = 1; SS <= 6; ++SS) xS["UV" + SS] && IS.push(`uv${1===SS?"":SS}`);
-               xS.VERTEXCOLOR && IS.push(qS.h.ColorKind), (0, QS.F)(IS, HS, xS, bS), (0, QS.H)(IS, xS), (0, QS.K)(IS, HS, xS), (0, QS.D)(IS, HS, xS);
+               yk.REFLECTION && Tk.addFallback(0, "REFLECTION"), yk.SPECULAR && Tk.addFallback(0, "SPECULAR"), yk.BUMP && Tk.addFallback(0, "BUMP"), yk.PARALLAX && Tk.addFallback(1, "PARALLAX"), yk.PARALLAX_RHS && Tk.addFallback(1, "PARALLAX_RHS"), yk.PARALLAXOCCLUSION && Tk.addFa … [truncated]
+               const Lk = [ak.l.PositionKind];
+               yk.NORMAL && Lk.push(ak.l.NormalKind), yk.TANGENT && Lk.push(ak.l.TangentKind);
+               for (let kk = 1; kk <= 6; ++kk) yk["UV" + kk] && Lk.push(`uv${1===kk?"":kk}`);
+               yk.VERTEXCOLOR && Lk.push(ak.l.ColorKind), (0, Kk.y)(Lk, Fk, yk, Tk), (0, Kk.A)(Lk, yk), (0, Kk.C)(Lk, Fk, yk), (0, Kk.x)(Lk, Fk, yk);
```

#### 111. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1506)

```diff
-               (0, QS.lb)(KS, jS, !1);
+               (0, Kk.cb)(ek, wk, !1);
```

#### 112. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1512)

```diff
-               if (this._eventInfo.fallbacks = bS, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = xS, this._eventInfo.uniforms = KS, this._eventInfo.attributes = IS, this._eventInfo.samplers = jS, this._eventInfo.uniformBuffersNames = CS, this._eventInfo.customCode =  … [truncated]
+               if (this._eventInfo.fallbacks = Tk, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = yk, this._eventInfo.uniforms = ek, this._eventInfo.attributes = Lk, this._eventInfo.samplers = wk, this._eventInfo.uniformBuffersNames = Jk, this._eventInfo.customCode =  … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1519)

```diff
-                 }), (0, nS.e)(KS), this._useVertexPulling) {
+                 }), (0, xk.d)(ek), this._useVertexPulling) {
```

#### 114. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1522-L1523` → after: `L1522-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1522-L1523) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1522-L1523)

```diff
-                 HS && (this._vertexPullingMetadata = (0, PS.e)(HS), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((SS, HS) => {
-                   KS.push(`vp_${HS}_info`)
+                 Fk && (this._vertexPullingMetadata = (0, Pk.f)(Fk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
+                   ek.push(`vp_${Fk}_info`)
```

#### 115. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1530)

```diff
-                 OS = XS.AK().createEffect(aS, {
+                 vk = ik.Oe().createEffect(jk, {
```

#### 116. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1555)

```diff
-             SS.addUniform("diffuseLeftColor", 4), SS.addUniform("diffuseRightColor", 4), SS.addUniform("opacityParts", 4), SS.addUniform("reflectionLeftColor", 4), SS.addUniform("reflectionRightColor", 4), SS.addUniform("refractionLeftColor", 4), SS.addUniform("refractionRightCol … [truncated]
+             kk.addUniform("diffuseLeftColor", 4), kk.addUniform("diffuseRightColor", 4), kk.addUniform("opacityParts", 4), kk.addUniform("reflectionLeftColor", 4), kk.addUniform("reflectionRightColor", 4), kk.addUniform("refractionLeftColor", 4), kk.addUniform("refractionRightCol … [truncated]
```

#### 117. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1558)

```diff
-             const bS = this.lL(),
+             const Tk = this.mG(),
```

#### 118. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1563)

```diff
-             this._activeEffect = qS, gS.getMeshUniformBuffer().bindToEffect(qS, "Mesh"), gS.transferToEffect(HS), this._uniformBuffer.bindToEffect(qS, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, bS, gS, HS, this.isFrozen), hS.d.Bind(bS.AK().currentRe … [truncated]
+             this._activeEffect = ak, Ik.getMeshUniformBuffer().bindToEffect(ak, "Mesh"), Ik.transferToEffect(Fk), this._uniformBuffer.bindToEffect(ak, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Tk, Ik, Fk, this.isFrozen), Vk.e.Bind(Tk.Oe().currentRe … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1569-L1570)

```diff
-               kS = bS.AK()._features.needToAlwaysBindUniformBuffers;
-             (0, QS.f)(gS, qS), this._vertexPullingMetadata && (0, PS.b)(qS, this._vertexPullingMetadata);
+               Zk = Tk.Oe()._features.needToAlwaysBindUniformBuffers;
+             (0, Kk.e)(Ik, ak), this._vertexPullingMetadata && (0, Pk.c)(ak, this._vertexPullingMetadata);
```

#### 120. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1576)

```diff
-                     const SS = NS.i.Color3[0];
+                     const kk = lk.k.Color3[0];
```

#### 121. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1581)

```diff
-                 if (XS.ALPHATEST && aS.updateFloat("alphaCutOff", this.alphaCutOff), bS.texturesEnabled && (this._diffuseTexture && SS.DiffuseTextureEnabled && (aS.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, QS.y)(this._di … [truncated]
+                 if (ik.ALPHATEST && jk.updateFloat("alphaCutOff", this.alphaCutOff), Tk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && (jk.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Kk.v)(this._di … [truncated]
```

#### 122. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1583)

```diff
-                   if (this._refractionTexture.isCube || (aS.J7("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (SS = this._refractionTexture.depth)), aS.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
+                   if (this._refractionTexture.isCube || (jk.I9("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (kk = this._refractionTexture.depth)), jk.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
```

#### 123. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1588)

```diff
-                 this.pointsCloud && aS.updateFloat("pointSize", this.pointSize), aS.updateColor4("vSpecularColor", this.specularColor, this.specularPower), aS.updateColor3("vEmissiveColor", SS.EmissiveTextureEnabled ? this.emissiveColor : NS.b.BlackReadOnly), aS.updateColor4("vDi … [truncated]
+                 this.pointsCloud && jk.updateFloat("pointSize", this.pointSize), jk.updateColor4("vSpecularColor", this.specularColor, this.specularPower), jk.updateColor3("vEmissiveColor", kk.EmissiveTextureEnabled ? this.emissiveColor : lk.e.BlackReadOnly), jk.updateColor4("vDi … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1590)

```diff
-               bS.texturesEnabled && (this._diffuseTexture && SS.DiffuseTextureEnabled && qS.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && SS.AmbientTextureEnabled && qS.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && SS.Op … [truncated]
+               Tk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && ak.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && kk.AmbientTextureEnabled && ak.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && kk.Op … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1592)

```diff
-             !fS && this.isFrozen && !kS || !bS.lightsEnabled || this._disableLighting || (0, QS.n)(bS, gS, qS, XS, this._maxSimultaneousLights), !fS && this.isFrozen || ((bS.fogEnabled && gS.applyFog && bS.fogMode !== xS.i.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
+             !tk && this.isFrozen && !Zk || !Tk.lightsEnabled || this._disableLighting || (0, Kk.n)(Tk, Ik, ak, ik, this._maxSimultaneousLights), !tk && this.isFrozen || ((Tk.fogEnabled && Ik.applyFog && Tk.fogMode !== yk.f.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
```

#### 126. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1596)

```diff
-             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === SS.prototype.isReadyForSubMesh && this.bindForSubMesh === SS.prototype.bindForSubMesh && this._mustRebind === KS.d.prototy … [truncated]
+             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === kk.prototype.isReadyForSubMesh && this.bindForSubMesh === kk.prototype.bindForSubMesh && this._mustRebind === ek.e.prototy … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1624)

```diff
-             const bS = DS.b.Clone((() => new SS(HS, this.lL())), this, {
+             const Tk = Qk.b.Clone((() => new kk(Fk, this.mG())), this, {
```

#### 128. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1631)

```diff
-             return HS.stencil && bS.stencil.parse(HS.stencil, gS, tS), kS.d._ParsePlugins(HS, bS, gS, tS), bS
+             return Fk.stencil && Tk.stencil.parse(Fk.stencil, Ik, Xk), Zk.c._ParsePlugins(Fk, Tk, Ik, Xk), Tk
```

#### 129. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1634` → after: `L1634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1634) · [Before (L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1634)

```diff
-             return jS.e.DiffuseTextureEnabled
+             return wk.d.DiffuseTextureEnabled
```

#### 130. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1637)

```diff
-             jS.e.DiffuseTextureEnabled = SS
+             wk.d.DiffuseTextureEnabled = kk
```

#### 131. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1640)

```diff
-             return jS.e.DetailTextureEnabled
+             return wk.d.DetailTextureEnabled
```

#### 132. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1643)

```diff
-             jS.e.DetailTextureEnabled = SS
+             wk.d.DetailTextureEnabled = kk
```

#### 133. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1646)

```diff
-             return jS.e.AmbientTextureEnabled
+             return wk.d.AmbientTextureEnabled
```

#### 134. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1649` → after: `L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1649) · [Before (L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1649)

```diff
-             jS.e.AmbientTextureEnabled = SS
+             wk.d.AmbientTextureEnabled = kk
```

#### 135. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1652` → after: `L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1652) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1652)

```diff
-             return jS.e.OpacityTextureEnabled
+             return wk.d.OpacityTextureEnabled
```

#### 136. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1655)

```diff
-             jS.e.OpacityTextureEnabled = SS
+             wk.d.OpacityTextureEnabled = kk
```

#### 137. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1658)

```diff
-             return jS.e.ReflectionTextureEnabled
+             return wk.d.ReflectionTextureEnabled
```

#### 138. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1661` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1661) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1661)

```diff
-             jS.e.ReflectionTextureEnabled = SS
+             wk.d.ReflectionTextureEnabled = kk
```

#### 139. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1664)

```diff
-             return jS.e.EmissiveTextureEnabled
+             return wk.d.EmissiveTextureEnabled
```

#### 140. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1667)

```diff
-             jS.e.EmissiveTextureEnabled = SS
+             wk.d.EmissiveTextureEnabled = kk
```

#### 141. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1670` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1670) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1670)

```diff
-             return jS.e.SpecularTextureEnabled
+             return wk.d.SpecularTextureEnabled
```

#### 142. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1673)

```diff
-             jS.e.SpecularTextureEnabled = SS
+             wk.d.SpecularTextureEnabled = kk
```

#### 143. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1676)

```diff
-             return jS.e.BumpTextureEnabled
+             return wk.d.BumpTextureEnabled
```

#### 144. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1679)

```diff
-             jS.e.BumpTextureEnabled = SS
+             wk.d.BumpTextureEnabled = kk
```

#### 145. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1682` → after: `L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1682) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1682)

```diff
-             return jS.e.LightmapTextureEnabled
+             return wk.d.LightmapTextureEnabled
```

#### 146. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1685` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1685) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1685)

```diff
-             jS.e.LightmapTextureEnabled = SS
+             wk.d.LightmapTextureEnabled = kk
```

#### 147. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1688)

```diff
-             return jS.e.RefractionTextureEnabled
+             return wk.d.RefractionTextureEnabled
```

#### 148. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1691)

```diff
-             jS.e.RefractionTextureEnabled = SS
+             wk.d.RefractionTextureEnabled = kk
```

#### 149. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1694)

```diff
-             return jS.e.ColorGradingTextureEnabled
+             return wk.d.ColorGradingTextureEnabled
```

#### 150. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1697)

```diff
-             jS.e.ColorGradingTextureEnabled = SS
+             wk.d.ColorGradingTextureEnabled = kk
```

#### 151. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1700` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1700) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1700)

```diff
-             return jS.e.FresnelEnabled
+             return wk.d.FresnelEnabled
```

#### 152. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1703)

```diff
-             jS.e.FresnelEnabled = SS
+             wk.d.FresnelEnabled = kk
```

#### 153. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1707)

```diff
-           bH = [(0, bS.B)("diffuseTexture")], XH = [(0, bS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], xH = [(0, bS.B)("ambientTexture")], NH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], qH = [(0, bS.B)("opacityTexture")], uH = [(0, bS.d)("_markAllSubMeshesAsTexturesAnd … [truncated]
+           iF = [(0, Tk.B)("diffuseTexture")], yF = [(0, Tk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], lF = [(0, Tk.B)("ambientTexture")], aF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], qF = [(0, Tk.B)("opacityTexture")], LF = [(0, Tk.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L1717)

```diff
-           })], vH = [(0, bS.M)("useEmissiveAsIllumination")], EH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], LH = [(0, bS.M)("linkEmissiveWithDiffuse")], YH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], AH = [(0, bS.M)("useSpecularOverAlpha")], yH = [(0, bS.d)("_markA … [truncated]
+           })], nF = [(0, Tk.J)("useEmissiveAsIllumination")], GF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, Tk.J)("linkEmissiveWithDiffuse")], uF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], bF = [(0, Tk.J)("useSpecularOverAlpha")], RF = [(0, Tk.e)("_markA … [truncated]
```

#### 155. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L2672)

```diff
-         })(), SS.ForceGLSL = !1, SS._ShaderLoader = new wS.e((() => [Promise.all([gS.e(317), gS.e(316)]).then((() => gS(41905))), Promise.all([gS.e(322), gS.e(318), gS.e(331), gS.e(321)]).then((() => gS(42080)))]), (() => [Promise.all([gS.e(338), gS.e(333)]).then((() => gS(42228) … [truncated]
+         })(), kk.ForceGLSL = !1, kk._ShaderLoader = new sk.c((() => [Promise.all([Ik.e(317), Ik.e(316)]).then((() => Ik(41867))), Promise.all([Ik.e(322), Ik.e(318), Ik.e(331), Ik.e(321)]).then((() => Ik(42073)))]), (() => [Promise.all([Ik.e(338), Ik.e(333)]).then((() => Ik(42225) … [truncated]
```

#### 156. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L2677)

```diff
-       yS || (yS = !0, (0, fS.h)(), (0, dS.f)("BABYLON.StandardMaterial", AS), xS.i.DefaultMaterialFactory = SS => new AS("default material", SS))
+       Rk || (Rk = !0, (0, tk.e)(), (0, Ek.f)("BABYLON.StandardMaterial", bk), yk.f.DefaultMaterialFactory = kk => new bk("default material", kk))
```

#### 157. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L2679)

```diff
-     Object.getOwnPropertyDescriptor(AS.prototype, "decalMap") || Object.defineProperty(AS.prototype, "decalMap", (0, cS.f)("StandardMaterial", "decalMap"))
+     Object.getOwnPropertyDescriptor(bk.prototype, "decalMap") || Object.defineProperty(bk.prototype, "decalMap", (0, Ok.g)("StandardMaterial", "decalMap"))
```

#### 158. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L2681)

```diff
-   40418: (SS, HS, gS) => {
+   40386: (kk, Fk, Ik) => {
```

#### 159. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L2690)

```diff
-       c: () => tS
+       b: () => Xk
```

#### 160. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L2693)

```diff
-   40412: (SS, HS, gS) => {
+   40377: (kk, Fk, Ik) => {
```

#### 161. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2695` → after: `L2695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/261.js#L2695) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/261.js#L2695)

```diff
-       e: () => tS
+       c: () => Xk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (200 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   40343: (SS, HS, gS) => {
+   40304: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       e: () => tS
+       d: () => Xk
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L14)

```diff
-   40352: (SS, HS, gS) => {
+   40312: (kk, Fk, Ik) => {
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L16)

```diff
-       c: () => xS
+       d: () => yk
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L18-L20` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L18-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L18-L20)

```diff
-     var tS = gS(37129),
-       bS = gS(37117),
-       XS = gS(37123);
+     var Xk = Ik(37166),
+       Tk = Ik(37153),
+       ik = Ik(37158);
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L23)

```diff
-         this.vectors = (0, tS.d)(8, bS.n.Zero), this.center = bS.n.Zero(), this.centerWorld = bS.n.Zero(), this.extendSize = bS.n.Zero(), this.extendSizeWorld = bS.n.Zero(), this.directions = (0, tS.d)(3, bS.n.Zero), this.vectorsWorld = (0, tS.d)(8, bS.n.Zero), this.minimumWorld  … [truncated]
+         this.vectors = (0, Xk.b)(8, Tk.t.Zero), this.center = Tk.t.Zero(), this.centerWorld = Tk.t.Zero(), this.extendSize = Tk.t.Zero(), this.extendSizeWorld = Tk.t.Zero(), this.directions = (0, Xk.b)(3, Tk.t.Zero), this.vectorsWorld = (0, Xk.b)(8, Tk.t.Zero), this.minimumWorld  … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L33)

```diff
-         this.minimum.I5(tS, XS, xS), this.maximum.I5(NS, qS, uS), IS[0].I5(tS, XS, xS), IS[1].I5(NS, qS, uS), IS[2].I5(NS, XS, xS), IS[3].I5(tS, qS, xS), IS[4].I5(tS, XS, uS), IS[5].I5(NS, qS, xS), IS[6].I5(tS, qS, uS), IS[7].I5(NS, XS, uS), HS.addToRef(SS, this.center).scaleInPl … [truncated]
+         this.minimum.t5(Xk, ik, yk), this.maximum.t5(lk, ak, qk), Lk[0].t5(Xk, ik, yk), Lk[1].t5(lk, ak, qk), Lk[2].t5(lk, ik, yk), Lk[3].t5(Xk, ak, yk), Lk[4].t5(Xk, ik, qk), Lk[5].t5(lk, ak, yk), Lk[6].t5(Xk, ak, qk), Lk[7].t5(lk, ik, qk), Fk.addToRef(kk, this.center).scaleInPl … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L56-L58)

```diff
-           HS.dJ(this.minimum), gS.dJ(this.maximum);
-           for (let SS = 0; SS < 8; ++SS) XS[SS].dJ(xS[SS]);
-           this.extendSizeWorld.dJ(this.extendSize), this.centerWorld.dJ(this.center)
+           Fk.kS(this.minimum), Ik.kS(this.maximum);
+           for (let kk = 0; kk < 8; ++kk) ik[kk].kS(yk[kk]);
+           this.extendSizeWorld.kS(this.extendSize), this.centerWorld.kS(this.center)
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L60)

```diff
-           HS.o_(Number.MAX_VALUE), gS.o_(-Number.MAX_VALUE);
+           Fk.I6(Number.MAX_VALUE), Ik.I6(-Number.MAX_VALUE);
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L63)

```diff
-             bS.n.TransformCoordinatesToRef(xS[tS], SS, NS), HS.minimizeInPlace(NS), gS.maximizeInPlace(NS)
+             Tk.t.TransformCoordinatesToRef(yk[Xk], kk, lk), Fk.minimizeInPlace(lk), Ik.maximizeInPlace(lk)
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L67)

```diff
-         bS.n.FromArrayToRef(SS.m, 0, tS[0]), bS.n.FromArrayToRef(SS.m, 4, tS[1]), bS.n.FromArrayToRef(SS.m, 8, tS[2]), this._worldMatrix = SS
+         Tk.t.FromArrayToRef(kk.m, 0, Xk[0]), Tk.t.FromArrayToRef(kk.m, 4, Xk[1]), Tk.t.FromArrayToRef(kk.m, 8, Xk[2]), this._worldMatrix = kk
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L87)

```diff
-           aS = -XS.d;
+           jk = -ik.b;
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L118-L119)

```diff
-         bS.n.ClampToRef(gS, SS, HS, XS);
-         return bS.n.DistanceSquared(gS, XS) <= tS * tS
+         Tk.t.ClampToRef(Ik, kk, Fk, ik);
+         return Tk.t.DistanceSquared(Ik, ik) <= Xk * Xk
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L142)

```diff
-     xS._TmpVector3 = (0, tS.d)(3, bS.n.Zero)
+     yk._TmpVector3 = (0, Xk.b)(3, Tk.t.Zero)
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L144)

```diff
-   40346: (SS, HS, gS) => {
+   40308: (kk, Fk, Ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L146)

```diff
-       e: () => fS
+       d: () => tk
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L148-L150` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L148-L150) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L148-L150)

```diff
-     var tS = gS(37129),
-       bS = gS(37117),
-       XS = gS(40352);
+     var Xk = Ik(37166),
+       Tk = Ik(37153),
+       ik = Ik(40312);
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L153)

```diff
-         this.center = bS.n.Zero(), this.centerWorld = bS.n.Zero(), this.minimum = bS.n.Zero(), this.maximum = bS.n.Zero(), this.reConstruct(SS, HS, gS)
+         this.center = Tk.t.Zero(), this.centerWorld = Tk.t.Zero(), this.minimum = Tk.t.Zero(), this.maximum = Tk.t.Zero(), this.reConstruct(kk, Fk, Ik)
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L156-L158` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L156-L158) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L156-L158)

```diff
-         this.minimum.dJ(SS), this.maximum.dJ(HS);
-         const tS = bS.n.Distance(SS, HS);
-         HS.addToRef(SS, this.center).scaleInPlace(.5), this.radius = .5 * tS, this._update(gS || bS.e.IdentityReadOnly)
+         this.minimum.kS(kk), this.maximum.kS(Fk);
+         const Xk = Tk.t.Distance(kk, Fk);
+         Fk.addToRef(kk, this.center).scaleInPlace(.5), this.radius = .5 * Xk, this._update(Ik || Tk.c.IdentityReadOnly)
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L175)

```diff
-         if (SS.isIdentity()) this.centerWorld.dJ(this.center), this.radiusWorld = this.radius;
+         if (kk.isIdentity()) this.centerWorld.kS(this.center), this.radiusWorld = this.radius;
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L177)

```diff
-           bS.n.TransformCoordinatesToRef(this.center, SS, this.centerWorld);
+           Tk.t.TransformCoordinatesToRef(this.center, kk, this.centerWorld);
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L179)

```diff
-           bS.n.TransformNormalFromFloatsToRef(1, 1, 1, SS, HS), this.radiusWorld = Math.max(Math.abs(HS.x), Math.abs(HS.y), Math.abs(HS.z)) * this.radius
+           Tk.t.TransformNormalFromFloatsToRef(1, 1, 1, kk, Fk), this.radiusWorld = Math.max(Math.abs(Fk.x), Math.abs(Fk.y), Math.abs(Fk.z)) * this.radius
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L196)

```diff
-         const HS = bS.n.DistanceSquared(this.centerWorld, SS);
+         const Fk = Tk.t.DistanceSquared(this.centerWorld, kk);
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L200)

```diff
-         const gS = bS.n.DistanceSquared(SS.centerWorld, HS.centerWorld),
+         const Ik = Tk.t.DistanceSquared(kk.centerWorld, Fk.centerWorld),
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L205)

```diff
-         this._TmpVector3[0].dJ(SS), this._TmpVector3[1].I5(0, 0, HS), this._TmpVector3[2].dJ(SS), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].GtS(this._TmpVector3[1]);
+         this._TmpVector3[0].kS(kk), this._TmpVector3[1].t5(0, 0, Fk), this._TmpVector3[2].kS(kk), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].zXk(this._TmpVector3[1]);
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L207)

```diff
-         return tS._worldMatrix = gS || bS.e.Identity(), tS
+         return Xk._worldMatrix = Ik || Tk.c.Identity(), Xk
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L210)

```diff
-     xS._TmpVector3 = (0, tS.d)(3, bS.n.Zero);
+     yk._TmpVector3 = (0, Xk.b)(3, Tk.t.Zero);
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L220-L221)

```diff
-         const tS = bS.n.Dot(HS.centerWorld, SS),
-           XS = Math.abs(bS.n.Dot(HS.directions[0], SS)) * HS.extendSize.x + Math.abs(bS.n.Dot(HS.directions[1], SS)) * HS.extendSize.y + Math.abs(bS.n.Dot(HS.directions[2], SS)) * HS.extendSize.z;
+         const Xk = Tk.t.Dot(Fk.centerWorld, kk),
+           ik = Math.abs(Tk.t.Dot(Fk.directions[0], kk)) * Fk.extendSize.x + Math.abs(Tk.t.Dot(Fk.directions[1], kk)) * Fk.extendSize.y + Math.abs(Tk.t.Dot(Fk.directions[2], kk)) * Fk.extendSize.z;
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L227)

```diff
-         this._isLocked = !1, this.boundingBox = new XS.c(SS, HS, gS), this.QtS = new xS(SS, HS, gS)
+         this._isLocked = !1, this.boundingBox = new ik.d(kk, Fk, Ik), this.EXk = new yk(kk, Fk, Ik)
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L230)

```diff
-         this.boundingBox.reConstruct(SS, HS, gS), this.QtS.reConstruct(SS, HS, gS)
+         this.boundingBox.reConstruct(kk, Fk, Ik), this.EXk.reConstruct(kk, Fk, Ik)
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L245)

```diff
-         this._isLocked || (this.boundingBox._update(SS), this.QtS._update(SS))
+         this._isLocked || (this.boundingBox._update(kk), this.EXk._update(kk))
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L248-L250` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L248-L250) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L248-L250)

```diff
-         const gS = fS._TmpVector3[0].dJ(SS).GtS(HS),
-           tS = fS._TmpVector3[1].dJ(SS).addInPlace(HS);
-         return this.boundingBox.reConstruct(gS, tS, this.boundingBox.getWorldMatrix()), this.QtS.reConstruct(gS, tS, this.boundingBox.getWorldMatrix()), this
+         const Ik = tk._TmpVector3[0].kS(kk).zXk(Fk),
+           Xk = tk._TmpVector3[1].kS(kk).addInPlace(Fk);
+         return this.boundingBox.reConstruct(Ik, Xk, this.boundingBox.getWorldMatrix()), this.EXk.reConstruct(Ik, Xk, this.boundingBox.getWorldMatrix()), this
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L253-L254)

```diff
-         const HS = bS.n.Minimize(this.minimum, SS),
-           gS = bS.n.Maximize(this.maximum, SS);
+         const Fk = Tk.t.Minimize(this.minimum, kk),
+           Ik = Tk.t.Maximize(this.maximum, kk);
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L260-L261)

```diff
-         const gS = bS.l.VK[0];
-         return bS.n.TransformCoordinatesToRef(SS.boundingBox.minimumWorld, HS, gS), this.encapsulate(gS), bS.n.TransformCoordinatesToRef(SS.boundingBox.maximumWorld, HS, gS), this.encapsulate(gS), this
+         const Ik = Tk.l.Ge[0];
+         return Tk.t.TransformCoordinatesToRef(kk.boundingBox.minimumWorld, Fk, Ik), this.encapsulate(Ik), Tk.t.TransformCoordinatesToRef(kk.boundingBox.maximumWorld, Fk, Ik), this.encapsulate(Ik), this
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L264)

```diff
-         return this.boundingBox.scale(SS), this.QtS.scale(SS), this
+         return this.boundingBox.scale(kk), this.EXk.scale(kk), this
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L268-L269)

```diff
-         if ((2 === HS || 3 === HS) && this.QtS.isCenterInFrustum(SS)) return !0;
-         if (!this.QtS.isInFrustum(SS)) return !1;
+         if ((2 === Fk || 3 === Fk) && this.EXk.isCenterInFrustum(kk)) return !0;
+         if (!this.EXk.isInFrustum(kk)) return !1;
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L280)

```diff
-         return SS._canDoCollision(this.QtS.centerWorld, this.QtS.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+         return kk._canDoCollision(this.EXk.centerWorld, this.EXk.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L283)

```diff
-         return !!this.QtS.centerWorld && (!!this.QtS.intersectsPoint(SS) && !!this.boundingBox.intersectsPoint(SS))
+         return !!this.EXk.centerWorld && (!!this.EXk.intersectsPoint(kk) && !!this.boundingBox.intersectsPoint(kk))
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L286-L287` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L286-L287) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L286-L287)

```diff
-         if (!xS.Intersects(this.QtS, SS.QtS)) return !1;
-         if (!XS.c.Intersects(this.boundingBox, SS.boundingBox)) return !1;
+         if (!yk.Intersects(this.EXk, kk.EXk)) return !1;
+         if (!ik.d.Intersects(this.boundingBox, kk.boundingBox)) return !1;
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L291)

```diff
-         return !!IS(gS.directions[0], gS, tS) && (!!IS(gS.directions[1], gS, tS) && (!!IS(gS.directions[2], gS, tS) && (!!IS(tS.directions[0], gS, tS) && (!!IS(tS.directions[1], gS, tS) && (!!IS(tS.directions[2], gS, tS) && (!!IS(bS.n.Cross(gS.directions[0], tS.directions[0]), gS … [truncated]
+         return !!Lk(Ik.directions[0], Ik, Xk) && (!!Lk(Ik.directions[1], Ik, Xk) && (!!Lk(Ik.directions[2], Ik, Xk) && (!!Lk(Xk.directions[0], Ik, Xk) && (!!Lk(Xk.directions[1], Ik, Xk) && (!!Lk(Xk.directions[2], Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[0], Xk.directions[0]), Ik … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L294)

```diff
-     fS._TmpVector3 = (0, tS.d)(2, bS.n.Zero)
+     tk._TmpVector3 = (0, Xk.b)(2, Tk.t.Zero)
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L296)

```diff
-   40375: (SS, HS, gS) => {
+   40333: (kk, Fk, Ik) => {
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L299-L301` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L300-L301) · [Before (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L299-L301)

```diff
-       f: () => qS,
-       i: () => NS,
-       j: () => xS
+       g: () => lk,
+       h: () => yk
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L303-L304)

```diff
-     var tS = gS(40192),
-       bS = gS(37117);
+     var Xk = Ik(40152),
+       Tk = Ik(37153);
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L338-L339)

```diff
-         const XS = tS.e.lL()?.floatingOriginOffset || bS.n.ZeroReadOnly;
-         SS.setFloat4(HS, gS.normal.x, gS.normal.y, gS.normal.z, gS.d + bS.n.Dot(gS.normal, XS))
+         const ik = Xk.d.mG()?.floatingOriginOffset || Tk.t.ZeroReadOnly;
+         kk.setFloat4(Fk, Ik.normal.x, Ik.normal.y, Ik.normal.z, Ik.d + Tk.t.Dot(Ik.normal, ik))
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L343)

```diff
-   40392: (SS, HS, gS) => {
+   40349: (kk, Fk, Ik) => {
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L366)

```diff
-           const gS = this._mesh.lL();
+           const Ik = this._mesh.mG();
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L372-L373)

```diff
-                 else if (tS.dD)
-                 for (const SS of tS.dD) {
+                 else if (Xk.lK)
+                 for (const kk of Xk.lK) {
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L391)

```diff
-   40331: (SS, HS, gS) => {
+   40295: (kk, Fk, Ik) => {
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L393)

```diff
-       d: () => nS
+       c: () => xk
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L395-L405` → after: `L395-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L395-L405) · [Before (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L395-L405)

```diff
-     var tS = gS(40041),
-       bS = gS(40048),
-       XS = gS(40133),
-       xS = gS(37144),
-       NS = gS(37138),
-       qS = gS(40337),
-       uS = gS(40169),
-       IS = gS(38687),
-       fS = gS(37791),
-       kS = gS(40364),
-       aS = gS(40068);
+     var Xk = Ik(40003),
+       Tk = Ik(40011),
+       ik = Ik(40097),
+       yk = Ik(37187),
+       lk = Ik(37178),
+       ak = Ik(40297),
+       qk = Ik(40134),
+       Lk = Ik(38674),
+       tk = Ik(37785),
+       Zk = Ik(40324),
+       jk = Ik(40021);
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L411)

```diff
-           this._func = (0, tS.k)(this, GS), this.reset()
+           this._func = (0, Xk.n)(this, Hk), this.reset()
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L502)

```diff
-         HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], xS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], (0, tS.j)(SS, null, HS, {
+         Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], (0, Xk.j)(kk, null, Fk, {
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L630-L632` → after: `L630-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L630-L632) · [Before (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L630-L632)

```diff
-     var jS = gS(40367),
-       GS = gS(39950),
-       CS = gS(39926);
+     var wk = Ik(40329),
+       Hk = Ik(39902),
+       Jk = Ik(39863);
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/262.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/262.js#L691)

```diff
-           this._useVertexPulling !== HS && (this._useVertexPulling = HS, this.OHS(SS.MiscDirtyFlag))
+           this._useVertexPulling !== Fk && (this._useVertexPulling = Fk, this.UFk(kk.MiscDirtyFlag))
```
