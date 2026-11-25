# Changed — Bundle Modifications Report (Part 052 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `52 / 141` (**424** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 69. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L930)

```diff
-             IB = cB.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(IB)
+             et = Ht.l.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(et)
```

#### 70. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L933)

```diff
-             this.inputs.detachElement(), this.cameraDirection = new oB.s(0, 0, 0), this.cameraRotation = new oB.p(0, 0)
+             this.inputs.detachElement(), this.cameraDirection = new Dt.n(0, 0, 0), this.cameraRotation = new Dt.m(0, 0)
```

#### 71. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L943-L944` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L943-L944) · [Before (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L943-L944)

```diff
-             IB = this.parent ? oB.s.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, IB.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const ZB = this.JR().collisionCoordinator;
+             et = this.parent ? Dt.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, et.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
+             const Vt = this.vI().collisionCoordinator;
```

#### 72. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L947)

```diff
-             this.applyGravity && (TB = BB.add(this.JR().gravity)), ZB.getNewPosition(this._oldPosition, TB, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+             this.applyGravity && (Ot = tt.add(this.vI().gravity)), Vt.getNewPosition(this._oldPosition, Ot, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
```

#### 73. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L950)

```diff
-             this._localDirection || (this._localDirection = oB.s.Zero(), this._transformedDirection = oB.s.Zero()), this.inputs.checkInputs(), super._checkInputs()
+             this._localDirection || (this._localDirection = Dt.n.Zero(), this._transformedDirection = Dt.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
```

#### 74. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L962)

```diff
-             this.checkCollisions && this.JR().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
+             this.checkCollisions && this.vI().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
```

#### 75. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L972)

```diff
-           IB = [(0, JB.A)()], ZB = [(0, JB.A)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+           et = [(0, qt.M)()], Vt = [(0, qt.M)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 76. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L985)

```diff
-           }, hB, zB), (0, TB.j)(null, null, ZB, {
+           }, Qt, lt), (0, Ot.l)(null, null, Vt, {
```

#### 77. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L998)

```diff
-           }, FB, NB), (0, TB.j)(null, null, vB, {
+           }, Et, ft), (0, Ot.l)(null, null, dt, {
```

#### 78. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/262.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/262.js#L1011)

```diff
-           }, gB, qB), (0, TB.j)(null, null, kB, {
+           }, wt, yt), (0, Ot.l)(null, null, jt, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L4)

```diff
-   40310: (BB, IB, ZB) => {
+   40445: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L6)

```diff
-       b: () => zB
+       e: () => lt
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L8-L16)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(37120),
-       GB = ZB(37311),
-       vB = ZB(40272),
-       kB = ZB(40177),
-       cB = ZB(37170),
-       nB = ZB(40245),
-       hB = ZB(40085);
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(37336),
+       mt = Vt(37513),
+       dt = Vt(40415),
+       jt = Vt(40337),
+       Ht = Vt(37390),
+       Xt = Vt(40395),
+       Qt = Vt(40230);
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L19)

```diff
-       let ZB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB = vB.e,
+       let Vt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht = dt.d,
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L61)

```diff
-           return (0, TB.b)(this, IB, "f")
+           return (0, Ot.e)(this, et, "f")
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L64)

```diff
-           (0, TB.f)(this, IB, BB, "f")
+           (0, Ot.i)(this, et, tt, "f")
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L109)

```diff
-           super(ZB, JB, !1), this.diffuse = ((0, TB.l)(this, OB), (0, TB.l)(this, YB, new GB.c(1, 1, 1))), this.specular = ((0, TB.l)(this, iB), (0, TB.l)(this, pB, new GB.c(1, 1, 1))), this.falloffType = ((0, TB.l)(this, aB), (0, TB.l)(this, HB, BB.FALLOFF_DEFAULT)), this.intens … [truncated]
+           super(Vt, qt, !1), this.diffuse = ((0, Ot.m)(this, vt), (0, Ot.m)(this, Wt, new mt.b(1, 1, 1))), this.specular = ((0, Ot.m)(this, St), (0, Ot.m)(this, ct, new mt.b(1, 1, 1))), this.falloffType = ((0, Ot.m)(this, Rt), (0, Ot.m)(this, It, tt.FALLOFF_DEFAULT)), this.intens … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L121)

```diff
-             this.transferToEffect(ZB, oB), this.diffuse.scaleToRef(BB, GB.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", GB.k.Color3[0], this.range, oB), TB && (this.specular.scaleToRef(BB, GB.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", GB.k. … [truncated]
+             this.transferToEffect(Vt, Dt), this.diffuse.scaleToRef(tt, mt.f.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", mt.f.Color3[0], this.range, Dt), Ot && (this.specular.scaleToRef(tt, mt.f.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", mt.f. … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L139)

```diff
-           super._syncParentEnabledState(), this.mC() || this._resyncMeshes()
+           super._syncParentEnabledState(), this.bC() || this._resyncMeshes()
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L142)

```diff
-           super.qY(BB), this._resyncMeshes()
+           super.Av(tt), this._resyncMeshes()
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L152)

```diff
-           return oB.s.Zero()
+           return Dt.n.Zero()
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L166)

```diff
-           if (this.JR().stopAnimation(this), this._parentContainer) {
+           if (this.vI().stopAnimation(this), this._parentContainer) {
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L170-L171` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L170-L171) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L170-L171)

```diff
-           for (const ZB of this.JR().meshes) ZB._removeLightSource(this, !0);
-           this._uniformBuffer.dispose(), this.JR().removeLight(this), super.dispose(BB, IB)
+           for (const Vt of this.vI().meshes) Vt._removeLightSource(this, !0);
+           this._uniformBuffer.dispose(), this.vI().removeLight(this), super.dispose(tt, et)
```

#### 14. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L181)

```diff
-           const TB = BB.GetConstructorFromName(this.getTypeID(), IB, this.JR());
+           const Ot = tt.GetConstructorFromName(this.getTypeID(), et, this.vI());
```

#### 15. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L183-L184)

```diff
-           const JB = hB.b.Clone(TB, this);
-           return IB && (JB.name = IB), ZB && (JB.parent = ZB), JB.qY(this.isEnabled()), this.onClonedObservable.notifyObservers(JB), JB
+           const qt = Qt.d.Clone(Ot, this);
+           return et && (qt.name = et), Vt && (qt.parent = Vt), qt.Av(this.isEnabled()), this.onClonedObservable.notifyObservers(qt), qt
```

#### 16. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L187)

```diff
-           const BB = hB.b.Serialize(this);
+           const tt = Qt.d.Serialize(this);
```

#### 17. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L196)

```diff
-           return hB.b.AppendSerializedAnimations(this, BB), BB.vq = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
+           return Qt.d.AppendSerializedAnimations(this, tt), tt.nw = this.serializeAnimationRanges(), tt.isEnabled = this.isEnabled(), tt
```

#### 18. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L199)

```diff
-           const TB = vB.e.Construct("Light_Type_" + BB, IB, ZB);
+           const Ot = dt.d.Construct("Light_Type_" + tt, et, Vt);
```

#### 19. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L206)

```diff
-           const oB = hB.b.Parse(JB, IB, ZB, TB);
+           const Dt = Qt.d.Parse(qt, et, Vt, Ot);
```

#### 20. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L213)

```diff
-             vB.e.ParseAnimationRanges(oB, IB, ZB)
+             dt.d.ParseAnimationRanges(Dt, et, Vt)
```

#### 21. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L215)

```diff
-           return IB.autoAnimate && ZB.beginAnimation(oB, IB.autoAnimateFrom, IB.autoAnimateTo, IB.autoAnimateLoop, IB.autoAnimateSpeed || 1), void 0 !== IB.isEnabled && oB.qY(IB.isEnabled), oB._onParsed(IB, ZB, TB), oB
+           return et.autoAnimate && Vt.beginAnimation(Dt, et.autoAnimateFrom, et.autoAnimateTo, et.autoAnimateLoop, et.autoAnimateSpeed || 1), void 0 !== et.isEnabled && Dt.Av(et.isEnabled), Dt._onParsed(et, Vt, Ot), Dt
```

#### 22. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L252)

```diff
-             for (const BB of this.JR().meshes) BB._resyncLightSource(this)
+             for (const tt of this.vI().meshes) tt._resyncLightSource(this)
```

#### 23. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L255)

```diff
-           for (const BB of this.JR().meshes) - 1 !== BB.lightSources.indexOf(this) && BB._markSubMeshesAsLightDirty()
+           for (const tt of this.vI().meshes) - 1 !== tt.lightSources.indexOf(this) && tt._markSubMeshesAsLightDirty()
```

#### 24. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L258)

```diff
-           this._photometricScale = this._getPhotometricScale(), this.JR().resetCachedMaterial()
+           this._photometricScale = this._getPhotometricScale(), this.vI().resetCachedMaterial()
```

#### 25. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L298-L299)

```diff
-           const BB = this.JR();
-           0 != this._renderPriority && (BB.requireLightSorting = !0), this.JR().sortLightsByPriority()
+           const tt = this.vI();
+           0 != this._renderPriority && (tt.requireLightSorting = !0), this.vI().sortLightsByPriority()
```

#### 26. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L309)

```diff
-         ZB = [(0, JB.l)()], zB = [(0, JB.l)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], qB = [(0, JB.C)()], yB = [(0, JB.C)()], UB = [(0, JB.C)()], WB = [(0, JB.e)("_reorderLightsInScene")], dB = [(0, JB.C)("shadowEnabled")], CB = [(0, JB.C)("excludeWithLayerM … [truncated]
+         Vt = [(0, qt.t)()], lt = [(0, qt.t)()], Et = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], yt = [(0, qt.P)()], Nt = [(0, qt.P)()], Mt = [(0, qt.P)()], bt = [(0, qt.i)("_reorderLightsInScene")], Jt = [(0, qt.P)("shadowEnabled")], Ct = [(0, qt.P)("excludeWithLayerM … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L319)

```diff
-         }, null, OB), (0, TB.j)(BB, null, qB, {
+         }, null, vt), (0, Ot.l)(tt, null, yt, {
```

#### 28. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L329)

```diff
-         }, null, OB), (0, TB.j)(BB, null, yB, {
+         }, null, vt), (0, Ot.l)(tt, null, Nt, {
```

#### 29. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L339)

```diff
-         }, null, OB), (0, TB.j)(BB, null, WB, {
+         }, null, vt), (0, Ot.l)(tt, null, bt, {
```

#### 30. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L352)

```diff
-         }, mB, XB), (0, TB.j)(null, null, ZB, {
+         }, Gt, zt), (0, Ot.l)(null, null, Vt, {
```

#### 31. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L365)

```diff
-         }, YB, iB), (0, TB.j)(null, null, zB, {
+         }, Wt, St), (0, Ot.l)(null, null, lt, {
```

#### 32. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L378)

```diff
-         }, pB, aB), (0, TB.j)(null, null, FB, {
+         }, ct, Rt), (0, Ot.l)(null, null, Et, {
```

#### 33. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L391)

```diff
-         }, HB, MB), (0, TB.j)(null, null, NB, {
+         }, It, Pt), (0, Ot.l)(null, null, ft, {
```

#### 34. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L404)

```diff
-         }, jB, PB), (0, TB.j)(null, null, UB, {
+         }, Zt, Lt), (0, Ot.l)(null, null, Mt, {
```

#### 35. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L417)

```diff
-         }, RB, rB), (0, TB.j)(null, null, dB, {
+         }, Ft, kt), (0, Ot.l)(null, null, Jt, {
```

#### 36. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L430)

```diff
-         }, LB, eB), (0, TB.j)(null, null, CB, {
+         }, ot, rt), (0, Ot.l)(null, null, Ct, {
```

#### 37. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L443)

```diff
-         }, uB, fB), (0, TB.j)(null, null, QB, {
+         }, Ut, At), (0, Ot.l)(null, null, ut, {
```

#### 38. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L456)

```diff
-         }, lB, AB), (0, TB.j)(null, null, sB, {
+         }, it, Yt), (0, Ot.l)(null, null, Kt, {
```

#### 39. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L478)

```diff
-   40272: (BB, IB, ZB) => {
+   40415: (tt, et, Vt) => {
```

#### 40. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L480)

```diff
-       e: () => hB
+       d: () => Qt
```

#### 41. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L482-L488` → after: `L482-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L482-L488) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L482-L488)

```diff
-     var TB = ZB(40061),
-       JB = ZB(37120),
-       oB = ZB(40065),
-       GB = ZB(37153),
-       vB = ZB(37147),
-       kB = ZB(39931),
-       cB = ZB(40085);
+     var Ot = Vt(40211),
+       qt = Vt(37336),
+       Dt = Vt(40213),
+       mt = Vt(37367),
+       dt = Vt(37359),
+       jt = Vt(40080),
+       Ht = Vt(40230);
```

#### 42. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L491)

```diff
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new GB.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new mt.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L575)

```diff
-           this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
+           this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
```

#### 44. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L582)

```diff
-           return (BB = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (BB._onEffectiveEnabledStateChangedObservable = new GB.b)
+           return (tt = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (tt._onEffectiveEnabledStateChangedObservable = new mt.c)
```

#### 45. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L590)

```diff
-           this._isDirty = !1, this._nodeDataStorage = new nB, this.name = (0, TB.l)(this, NB, void 0), this.id = ((0, TB.l)(this, gB), (0, TB.l)(this, qB, void 0)), this.uniqueId = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, void 0)), this.state = ((0, TB.l)(this, WB), (0, TB.l)(th … [truncated]
+           this._isDirty = !1, this._nodeDataStorage = new Xt, this.name = (0, Ot.m)(this, ft, void 0), this.id = ((0, Ot.m)(this, wt), (0, Ot.m)(this, yt, void 0)), this.uniqueId = ((0, Ot.m)(this, Nt), (0, Ot.m)(this, Mt, void 0)), this.state = ((0, Ot.m)(this, bt), (0, Ot.m)(th … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L596` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L596) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L596)

```diff
-           return this._scene.PN()
+           return this._scene.Jf()
```

#### 47. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L650)

```diff
-         GZB(BB) {
+         fVt(tt) {
```

#### 48. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L728)

```diff
-           const JB = cB.b.Clone((() => new BB(IB, this.JR())), this);
+           const qt = Ht.d.Clone((() => new tt(et, this.vI())), this);
```

#### 49. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L759)

```diff
-           return this._worldMatrix || (this._worldMatrix = JB.b.Identity()), this._worldMatrix
+           return this._worldMatrix || (this._worldMatrix = qt.c.Identity()), this._worldMatrix
```

#### 50. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L767)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.oR.notifyObservers(this), this.oR.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
+           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.ZI.notifyObservers(this), this.ZI.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
```

#### 51. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L772-L774` → after: `L772-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L772-L774) · [Before (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L772-L774)

```diff
-           if (IB.vq)
-             for (let TB = 0; TB < IB.vq.length; TB++) {
-               const ZB = IB.vq[TB];
+           if (et.nw)
+             for (let Ot = 0; Ot < et.nw.length; Ot++) {
+               const Vt = et.nw[Ot];
```

#### 52. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L781)

```diff
-           this.JR().incrementRenderId(), this.computeWorldMatrix(!0);
+           this.vI().incrementRenderId(), this.computeWorldMatrix(!0);
```

#### 53. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L783-L784` → after: `L783-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L783-L784) · [Before (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L783-L784)

```diff
-           if (oB.qm && oB.EW) {
-             const ZB = oB.qm();
+           if (Dt.fL && Dt.vJ) {
+             const Vt = Dt.fL();
```

#### 54. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L786)

```diff
-           } else BB = new JB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), IB = new JB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+           } else tt = new qt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), et = new qt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 55. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L792-L793` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L792-L793) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L792-L793)

```diff
-               if (!ZB.qm || 0 === ZB.getTotalVertices()) continue;
-               const GB = ZB.qm().boundingBox,
+               if (!Vt.fL || 0 === Vt.getTotalVertices()) continue;
+               const mt = Vt.fL().boundingBox,
```

#### 56. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L796)

```diff
-               JB.s.CheckExtends(vB, BB, IB), JB.s.CheckExtends(kB, BB, IB)
+               qt.n.CheckExtends(dt, tt, et), qt.n.CheckExtends(jt, tt, et)
```

#### 57. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L806)

```diff
-         IB = [(0, oB.C)()], ZB = [(0, oB.C)()], hB = [(0, oB.C)()], zB = [(0, oB.C)()], FB = [(0, oB.C)()], (0, TB.j)(null, null, IB, {
+         et = [(0, Dt.P)()], Vt = [(0, Dt.P)()], Qt = [(0, Dt.P)()], lt = [(0, Dt.P)()], Et = [(0, Dt.P)()], (0, Ot.l)(null, null, et, {
```

#### 58. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L819)

```diff
-         }, NB, gB), (0, TB.j)(null, null, ZB, {
+         }, ft, wt), (0, Ot.l)(null, null, Vt, {
```

#### 59. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L832)

```diff
-         }, qB, yB), (0, TB.j)(null, null, hB, {
+         }, yt, Nt), (0, Ot.l)(null, null, Qt, {
```

#### 60. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L845)

```diff
-         }, UB, WB), (0, TB.j)(null, null, zB, {
+         }, Mt, bt), (0, Ot.l)(null, null, lt, {
```

#### 61. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L858)

```diff
-         }, dB, CB), (0, TB.j)(null, null, FB, {
+         }, Jt, Ct), (0, Ot.l)(null, null, Et, {
```

#### 62. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/263.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/263.js#L878)

```diff
-         throw (0, kB.m)("AnimationRange")
+         throw (0, jt.e)("AnimationRange")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (177 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   41111: (BB, IB, ZB) => {
+   41289: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L17` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L8-L17) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L8-L17)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(37153),
-       GB = ZB(37120),
-       vB = ZB(37158),
-       kB = ZB(40272),
-       cB = ZB(40448),
-       nB = ZB(40224),
-       hB = ZB(39959),
-       zB = ZB(37129);
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(37367),
+       mt = Vt(37336),
+       dt = Vt(37372),
+       jt = Vt(40415),
+       Ht = Vt(40601),
+       Xt = Vt(40373),
+       Qt = Vt(40098),
+       lt = Vt(37342);
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L58)

```diff
-         const IB = this._attachedCamera.JR();
+         const et = this._attachedCamera.vI();
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L60)

```diff
-           BB.type !== nB.d.POINTERDOWN ? BB.type === nB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+           tt.type !== Xt.c.POINTERDOWN ? tt.type === Xt.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L63)

```diff
-           const BB = hB.c.Now;
+           const tt = Qt.b.Now;
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L73)

```diff
-         const BB = this._attachedCamera.JR();
+         const tt = this._attachedCamera.vI();
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L77)

```diff
-         this._lastInteractionTime = BB ?? hB.c.Now
+         this._lastInteractionTime = tt ?? Qt.b.Now
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L80)

```diff
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < zB.d
+         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < lt.e
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L88)

```diff
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (BB = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? BB : this._userIsZooming()
+         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (tt = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? tt : this._userIsZooming()
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L91)

```diff
-         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = hB.c.Now)
+         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Qt.b.Now)
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L97)

```diff
-     ZB(41115);
+     Vt(41293);
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L123)

```diff
-     var gB = ZB(41124);
+     var wt = Vt(41298);
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L139-L140` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L139-L140) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L139-L140)

```diff
-           if (BB && (BB.computeWorldMatrix(!0), BB.qm)) {
-             const IB = BB.qm().diagonalLength;
+           if (tt && (tt.computeWorldMatrix(!0), tt.fL)) {
+             const et = tt.fL().diagonalLength;
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L162-L163)

```diff
-         this._radiusBounceTransition || (qB.EasingFunction.setEasingMode(qB.EasingMode), this._radiusBounceTransition = gB.b.CreateAnimation("radius", gB.b.ANIMATIONTYPE_FLOAT, 60, qB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const IB = gB.b.TransitionTo("radius", this._attachedCamera.radius + BB, this._attachedCamera, this._attachedCamera.JR(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         this._radiusBounceTransition || (yt.EasingFunction.setEasingMode(yt.EasingMode), this._radiusBounceTransition = wt.d.CreateAnimation("radius", wt.d.ANIMATIONTYPE_FLOAT, 60, yt.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const et = wt.d.TransitionTo("radius", this._attachedCamera.radius + tt, this._attachedCamera, this._attachedCamera.vI(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L185)

```diff
-         this.onTargetFramingAnimationEndObservable = new oB.b, this._mode = yB.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
+         this.onTargetFramingAnimationEndObservable = new Dt.c, this._mode = Nt.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L244)

```diff
-         const IB = this._attachedCamera.JR();
+         const et = this._attachedCamera.vI();
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L246)

```diff
-           BB.type !== nB.d.POINTERDOWN ? BB.type === nB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+           tt.type !== Xt.c.POINTERDOWN ? tt.type === Xt.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L248)

```diff
-           BB && BB.qm && this.zoomOnMesh(BB, void 0, (() => {
+           tt && tt.fL && this.zoomOnMesh(tt, void 0, (() => {
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L257)

```diff
-         const BB = this._attachedCamera.JR();
+         const tt = this._attachedCamera.vI();
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L264)

```diff
-         const TB = BB.qm().boundingBox;
+         const Ot = tt.fL().boundingBox;
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L277-L278` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L277-L278) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L277-L278)

```diff
-         const TB = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           JB = new GB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         const Ot = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           qt = new mt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L281)

```diff
-           GB.s.CheckExtends(IB.min, TB, JB), GB.s.CheckExtends(IB.max, TB, JB)
+           mt.n.CheckExtends(et.min, Ot, qt), mt.n.CheckExtends(et.max, Ot, qt)
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L293)

```diff
-         if (TB) ZB = new GB.s(0, vB, 0);
+         if (Ot) Vt = new mt.n(0, dt, 0);
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L296)

```diff
-           ZB = new GB.s(IB.x, vB, IB.z)
+           Vt = new mt.n(et.x, dt, et.z)
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L298-L299)

```diff
-         this._vectorTransition || (this._vectorTransition = gB.b.CreateAnimation("target", gB.b.ANIMATIONTYPE_VECTOR3, 60, yB.EasingFunction)), this._betaIsAnimating = !0;
-         let cB = gB.b.TransitionTo("target", ZB, this._attachedCamera, this._attachedCamera.JR(), 60, this._vectorTransition, this._framingTime);
+         this._vectorTransition || (this._vectorTransition = wt.d.CreateAnimation("target", wt.d.ANIMATIONTYPE_VECTOR3, 60, Nt.EasingFunction)), this._betaIsAnimating = !0;
+         let Ht = wt.d.TransitionTo("target", Vt, this._attachedCamera, this._attachedCamera.vI(), 60, this._vectorTransition, this._framingTime);
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L310)

```diff
-         return this._radiusTransition || (this._radiusTransition = gB.b.CreateAnimation("radius", gB.b.ANIMATIONTYPE_FLOAT, 60, yB.EasingFunction)), cB = gB.b.TransitionTo("radius", nB, this._attachedCamera, this._attachedCamera.JR(), 60, this._radiusTransition, this._framingTime … [truncated]
+         return this._radiusTransition || (this._radiusTransition = wt.d.CreateAnimation("radius", wt.d.ANIMATIONTYPE_FLOAT, 60, Nt.EasingFunction)), Ht = wt.d.TransitionTo("radius", Xt, this._attachedCamera, this._attachedCamera.vI(), 60, this._radiusTransition, this._framingTime … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L322)

```diff
-         const BB = hB.c.Now - this._lastInteractionTime,
+         const tt = Qt.b.Now - this._lastInteractionTime,
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L326-L327` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L326-L327) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L326-L327)

```diff
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = gB.b.CreateAnimation("beta", gB.b.ANIMATIONTYPE_FLOAT, 60, yB.EasingFunction));
-           const BB = gB.b.TransitionTo("beta", IB, this._attachedCamera, this._attachedCamera.JR(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = wt.d.CreateAnimation("beta", wt.d.ANIMATIONTYPE_FLOAT, 60, Nt.EasingFunction));
+           const tt = wt.d.TransitionTo("beta", et, this._attachedCamera, this._attachedCamera.vI(), 60, this._betaTransition, this._elevationReturnTime, (() => {
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L337)

```diff
-         this.isUserIsMoving && (this._lastInteractionTime = hB.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+         this.isUserIsMoving && (this._lastInteractionTime = Qt.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L352)

```diff
-         return this.exponent <= 0 ? BB : (Math.exp(this.exponent * BB) - 1) / (Math.exp(this.exponent) - 1)
+         return this.exponent <= 0 ? tt : (Math.exp(this.exponent * tt) - 1) / (Math.exp(this.exponent) - 1)
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L355-L358` → after: `L355-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L355-L358) · [Before (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L355-L358)

```diff
-     var UB = ZB(40269),
-       WB = ZB(40261),
-       dB = ZB(40291),
-       CB = ZB(40152);
+     var Mt = Vt(40409),
+       bt = Vt(40401),
+       Jt = Vt(40431),
+       Ct = Vt(40300);
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L365)

```diff
-             this._currentMousePointerIdDown = -1, this.buttons = (0, TB.l)(this, ZB, [0, 1, 2]), this._pointerInput = (0, TB.l)(this, oB)
+             this._currentMousePointerIdDown = -1, this.buttons = (0, Ot.m)(this, Vt, [0, 1, 2]), this._pointerInput = (0, Ot.m)(this, Dt)
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L368-L369)

```diff
-             BB = CB.j.BackCompatCameraNoPreventDefault(arguments);
-             const IB = this.camera.PN(),
+             tt = Ct.l.BackCompatCameraNoPreventDefault(arguments);
+             const et = this.camera.Jf(),
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L376)

```diff
-               if (oB.type !== nB.d.POINTERMOVE && -1 === this.buttons.indexOf(GB.button)) return;
+               if (Dt.type !== Xt.c.POINTERMOVE && -1 === this.buttons.indexOf(mt.button)) return;
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L383-L387` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L383-L387) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L383-L387)

```diff
-                 if (oB.type !== nB.d.POINTERDOWN && oB.type !== nB.d.POINTERDOUBLETAP && vB && this._pointA?.pointerId !== GB.pointerId && this._pointB?.pointerId !== GB.pointerId) return;
-                 if (oB.type !== nB.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !vB)
-                   if (oB.type === nB.d.POINTERDOUBLETAP) this.onDoubleTap(GB.pointerType, GB);
-                   else if (oB.type !== nB.d.POINTERUP || this._currentMousePointerIdDown !== GB.pointerId && !vB) {
-                   if (oB.type === nB.d.POINTERMOVE)
+                 if (Dt.type !== Xt.c.POINTERDOWN && Dt.type !== Xt.c.POINTERDOUBLETAP && dt && this._pointA?.pointerId !== mt.pointerId && this._pointB?.pointerId !== mt.pointerId) return;
+                 if (Dt.type !== Xt.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !dt)
+                   if (Dt.type === Xt.c.POINTERDOUBLETAP) this.onDoubleTap(mt.pointerType, mt);
+                   else if (Dt.type !== Xt.c.POINTERUP || this._currentMousePointerIdDown !== mt.pointerId && !dt) {
+                   if (Dt.type === Xt.c.POINTERMOVE)
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L434)

```diff
-             }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._pointerInput, nB.d.POINTERDOWN | nB.d.POINTERUP | nB.d.POINTERMOVE | nB.d.POINTERDOUBLETAP), this._onLostFocus = () => {
+             }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._pointerInput, Xt.c.POINTERDOWN | Xt.c.POINTERUP | Xt.c.POINTERMOVE | Xt.c.POINTERDOUBLETAP), this._onLostFocus = () => {
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L437-L438)

```diff
-             const oB = this.camera.JR().PN().getHostWindow();
-             oB && CB.j.RegisterTopRootEvents(oB, [{
+             const Dt = this.camera.vI().Jf().getHostWindow();
+             Dt && Ct.l.RegisterTopRootEvents(Dt, [{
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L445-L446)

```diff
-               const BB = this.camera.JR().PN().getHostWindow();
-               BB && CB.j.UnregisterTopRootEvents(BB, [{
+               const tt = this.camera.vI().Jf().getHostWindow();
+               tt && Ct.l.UnregisterTopRootEvents(tt, [{
```

#### 39. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L452-L453` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L452-L453) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L452-L453)

```diff
-               if (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
-                 const BB = this.camera.JR().PN().getInputElement();
+               if (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
+                 const tt = this.camera.vI().Jf().getInputElement();
```

#### 40. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L477)

```diff
-           IB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+           et = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 41. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L509)

```diff
-             super(...arguments), this.pinchZoom = (0, TB.l)(this, vB, !0), this.multiTouchPanning = ((0, TB.l)(this, kB), (0, TB.l)(this, cB, !0)), this.multiTouchPanAndZoom = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, !0)), this._isPinching = ((0, TB.l)(this, zB), !1), this._twoF … [truncated]
+             super(...arguments), this.pinchZoom = (0, Ot.m)(this, dt, !0), this.multiTouchPanning = ((0, Ot.m)(this, jt), (0, Ot.m)(this, Ht, !0)), this.multiTouchPanAndZoom = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Qt, !0)), this._isPinching = ((0, Ot.m)(this, lt), !1), this._twoF … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L524)

```diff
-           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+           et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 43. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L537)

```diff
-           }, vB, kB), (0, TB.j)(null, null, ZB, {
+           }, dt, jt), (0, Ot.l)(null, null, Vt, {
```

#### 44. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L550)

```diff
-           }, cB, nB), (0, TB.j)(null, null, oB, {
+           }, Ht, Xt), (0, Ot.l)(null, null, Dt, {
```

#### 45. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L590)

```diff
-             super(...arguments), this.buttons = (0, TB.l)(this, hB, [0, 1, 2]), this.angularSensibilityX = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, 1e3)), this.angularSensibilityY = ((0, TB.l)(this, NB), (0, TB.l)(this, gB, 1e3)), this.pinchPrecision = ((0, TB.l)(this, qB), (0,  … [truncated]
+             super(...arguments), this.buttons = (0, Ot.m)(this, Qt, [0, 1, 2]), this.angularSensibilityX = ((0, Ot.m)(this, lt), (0, Ot.m)(this, Et, 1e3)), this.angularSensibilityY = ((0, Ot.m)(this, ft), (0, Ot.m)(this, wt, 1e3)), this.pinchPrecision = ((0, Ot.m)(this, yt), (0,  … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L625)

```diff
-             const TB = this._activeEntry ?? (this.camera.PN().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
+             const Ot = this._activeEntry ?? (this.camera.Jf().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
```

#### 47. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L631-L632` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L631-L632) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L631-L632)

```diff
-               const BB = TB.uD ?? TB.sensitivity ?? 1 / this.angularSensibilityX,
-                 JB = TB.lD ?? TB.sensitivity ?? 1 / this.angularSensibilityY;
+               const tt = Ot.fY ?? Ot.sensitivity ?? 1 / this.angularSensibilityX,
+                 qt = Ot.aY ?? Ot.sensitivity ?? 1 / this.angularSensibilityY;
```

#### 48. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L653)

```diff
-           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+           et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 49. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L666)

```diff
-           }, hB, zB), (0, TB.j)(null, null, ZB, {
+           }, Qt, lt), (0, Ot.l)(null, null, Vt, {
```

#### 50. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L679)

```diff
-           }, FB, NB), (0, TB.j)(null, null, oB, {
+           }, Et, ft), (0, Ot.l)(null, null, Dt, {
```

#### 51. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L692)

```diff
-           }, gB, qB), (0, TB.j)(null, null, GB, {
+           }, wt, yt), (0, Ot.l)(null, null, mt, {
```

#### 52. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L705)

```diff
-           }, yB, UB), (0, TB.j)(null, null, vB, {
+           }, Nt, Mt), (0, Ot.l)(null, null, dt, {
```

#### 53. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L718` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L718) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L718)

```diff
-           }, WB, dB), (0, TB.j)(null, null, kB, {
+           }, bt, Jt), (0, Ot.l)(null, null, jt, {
```

#### 54. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L731)

```diff
-           }, CB, QB), (0, TB.j)(null, null, cB, {
+           }, Ct, ut), (0, Ot.l)(null, null, Ht, {
```

#### 55. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L752-L753` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L752-L753) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L752-L753)

```diff
-     dB.c.ArcRotateCameraPointersInput = wB;
-     var OB = ZB(40226);
+     Jt.e.ArcRotateCameraPointersInput = ht;
+     var vt = Vt(40379);
```

#### 56. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L779)

```diff
-           this.camera = (0, TB.l)(this, gB), this.keysUp = (0, TB.l)(this, qB, [38]), this.keysDown = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, [40])), this.keysLeft = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, [37])), this.keysRight = ((0, TB.l)(this, QB), (0, TB.l)(this, sB, [39 … [truncated]
+           this.camera = (0, Ot.m)(this, wt), this.keysUp = (0, Ot.m)(this, yt, [38]), this.keysDown = ((0, Ot.m)(this, Nt), (0, Ot.m)(this, Mt, [40])), this.keysLeft = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, [37])), this.keysRight = ((0, Ot.m)(this, ut), (0, Ot.m)(this, Kt, [39 … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L784)

```diff
-           }, this._rotateDirection = new GB.p, this._panDirection = new GB.p
+           }, this._rotateDirection = new mt.m, this._panDirection = new mt.m
```

#### 58. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L809)

```diff
-           BB = CB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JR(), this._engine = this._scene.PN(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           tt = Ct.l.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.vI(), this._engine = this._scene.Jf(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 59. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L814)

```diff
-               if (IB.type === OB.b.KEYDOWN) {
+               if (et.type === vt.c.KEYDOWN) {
```

#### 60. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L858)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], (0, TB.j)(BB, null, NB, {
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], Et = [(0, qt.P)()], ft = [(0, qt.P)()], (0, Ot.l)(tt, null, ft, {
```

#### 61. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L868)

```diff
-         }, null, gB), (0, TB.j)(null, null, IB, {
+         }, null, wt), (0, Ot.l)(null, null, et, {
```

#### 62. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L881)

```diff
-         }, qB, yB), (0, TB.j)(null, null, ZB, {
+         }, yt, Nt), (0, Ot.l)(null, null, Vt, {
```

#### 63. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L894)

```diff
-         }, UB, WB), (0, TB.j)(null, null, oB, {
+         }, Mt, bt), (0, Ot.l)(null, null, Dt, {
```

#### 64. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L907)

```diff
-         }, dB, QB), (0, TB.j)(null, null, vB, {
+         }, Jt, ut), (0, Ot.l)(null, null, dt, {
```

#### 65. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L920)

```diff
-         }, sB, wB), (0, TB.j)(null, null, kB, {
+         }, Kt, ht), (0, Ot.l)(null, null, jt, {
```

#### 66. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L933)

```diff
-         }, YB, iB), (0, TB.j)(null, null, cB, {
+         }, Wt, St), (0, Ot.l)(null, null, Ht, {
```

#### 67. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L946)

```diff
-         }, pB, aB), (0, TB.j)(null, null, nB, {
+         }, ct, Rt), (0, Ot.l)(null, null, Xt, {
```

#### 68. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L959)

```diff
-         }, HB, MB), (0, TB.j)(null, null, hB, {
+         }, It, Pt), (0, Ot.l)(null, null, Qt, {
```

#### 69. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L972)

```diff
-         }, jB, PB), (0, TB.j)(null, null, zB, {
+         }, Zt, Lt), (0, Ot.l)(null, null, lt, {
```

#### 70. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L985)

```diff
-         }, RB, rB), (0, TB.j)(null, null, FB, {
+         }, Ft, kt), (0, Ot.l)(null, null, Et, {
```

#### 71. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1006-L1008` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1006-L1008) · [Before (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1006-L1008)

```diff
-     dB.c.ArcRotateCameraKeyboardMoveInput = YB;
-     var iB = ZB(37824),
-       pB = ZB(40232);
+     Jt.e.ArcRotateCameraKeyboardMoveInput = Wt;
+     var St = Vt(38016),
+       ct = Vt(40386);
```

#### 72. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1019)

```diff
-           this.wheelPrecision = (0, TB.l)(this, kB, 3), this.zoomToMouseLocation = ((0, TB.l)(this, cB), (0, TB.l)(this, hB, !1)), this.wheelDeltaPercentage = ((0, TB.l)(this, FB), (0, TB.l)(this, NB, 0)), this.customComputeDeltaFromMouseWheel = ((0, TB.l)(this, gB), null), this. … [truncated]
+           this.wheelPrecision = (0, Ot.m)(this, jt, 3), this.zoomToMouseLocation = ((0, Ot.m)(this, Ht), (0, Ot.m)(this, Qt, !1)), this.wheelDeltaPercentage = ((0, Ot.m)(this, Et), (0, Ot.m)(this, ft, 0)), this.customComputeDeltaFromMouseWheel = ((0, Ot.m)(this, wt), null), this. … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1027-L1028` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1027-L1028) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1027-L1028)

```diff
-           BB = CB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = IB => {
-             if (IB.type !== nB.d.POINTERWHEEL) return;
+           tt = Ct.l.BackCompatCameraNoPreventDefault(arguments), this._wheel = et => {
+             if (et.type !== Xt.c.POINTERWHEEL) return;
```

#### 74. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1031)

```diff
-             const JB = ZB.deltaMode === pB.d.DOM_DELTA_LINE ? 40 : 1,
+             const qt = Vt.deltaMode === ct.e.DOM_DELTA_LINE ? 40 : 1,
```

#### 75. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1047)

```diff
-           }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._wheel, nB.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.K9(0)
+           }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._wheel, Xt.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.S_(0)
```

#### 76. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1050)

```diff
-           this._observer && (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+           this._observer && (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
```

#### 77. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1058)

```diff
-             this._inertialPanning.scaleInPlace(IB), this._zoomToMouseRadiusOffset *= IB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < zB.d && (this._zoomToMouseRadiusOffset = 0)
+             this._inertialPanning.scaleInPlace(et), this._zoomToMouseRadiusOffset *= et, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < lt.e && (this._zoomToMouseRadiusOffset = 0)
```

#### 78. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1070` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1070) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1070)

```diff
-           this._hitPlane = iB.c.FromPositionAndNormal(BB.target, IB)
+           this._hitPlane = St.b.FromPositionAndNormal(tt.target, et)
```

#### 79. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1074-L1076` → after: `L1074-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1074-L1076) · [Before (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1074-L1076)

```diff
-             IB = BB.JR(),
-             ZB = IB.createPickingRay(IB.pointerX, IB.pointerY, GB.b.Identity(), BB, !1);
-           0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = GB.s.TransformNormal(this._viewOffset, BB._camer … [truncated]
+             et = tt.vI(),
+             Vt = et.createPickingRay(et.pointerX, et.pointerY, mt.c.Identity(), tt, !1);
+           0 === tt.targetScreenOffset.x && 0 === tt.targetScreenOffset.y || (this._viewOffset.set(tt.targetScreenOffset.x, tt.targetScreenOffset.y, 0), tt.getViewMatrix().invertToRef(tt._cameraTransformMatrix), this._globalOffset = mt.n.TransformNormal(this._viewOffset, tt._camer … [truncated]
```

#### 80. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1094)

```diff
-             vB = GB.m.rN[6];
+             dt = mt.k.uf[6];
```

#### 81. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1098)

```diff
-           Math.abs(BB.x) < zB.d && (BB.x = 0), Math.abs(BB.y) < zB.d && (BB.y = 0), Math.abs(BB.z) < zB.d && (BB.z = 0)
+           Math.abs(tt.x) < lt.e && (tt.x = 0), Math.abs(tt.y) < lt.e && (tt.y = 0), Math.abs(tt.z) < lt.e && (tt.z = 0)
```

#### 82. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1102)

```diff
-         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+         et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 83. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1115)

```diff
-         }, kB, cB), (0, TB.j)(null, null, ZB, {
+         }, jt, Ht), (0, Ot.l)(null, null, Vt, {
```

#### 84. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1128` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1128) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1128)

```diff
-         }, hB, FB), (0, TB.j)(null, null, oB, {
+         }, Qt, Et), (0, Ot.l)(null, null, Dt, {
```

#### 85. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1149-L1151` → after: `L1149-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1149-L1151) · [Before (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1149-L1151)

```diff
-     dB.c.ArcRotateCameraMouseWheelInput = aB;
-     var HB, MB, jB = ZB(39931);
-     class PB extends dB.f {
+     Jt.e.ArcRotateCameraMouseWheelInput = Rt;
+     var It, Pt, Zt = Vt(40080);
+     class Lt extends Jt.g {
```

#### 86. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1164-L1168` → after: `L1164-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1164-L1168) · [Before (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1164-L1168)

```diff
-     }(HB = PB.prototype).addVRDeviceOrientation ?? (HB.addVRDeviceOrientation = (0, jB.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (MB = PB.prototype).addGamepad ?? (MB.addGamepad = (0, jB.j)("ArcRotateCameraInputsManager", "addGamepad"));
-     var RB = ZB(37170),
-       rB = ZB(40281),
-       mB = ZB(40284);
-     class XB extends rB.e {
+     }(It = Lt.prototype).addVRDeviceOrientation ?? (It.addVRDeviceOrientation = (0, Zt.d)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Pt = Lt.prototype).addGamepad ?? (Pt.addGamepad = (0, Zt.d)("ArcRotateCameraInputsManager", "addGamepad"));
+     var Ft = Vt(37390),
+       kt = Vt(40422),
+       Gt = Vt(40426);
+     class zt extends kt.c {
```

#### 87. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1170)

```diff
-         super(BB, IB, ZB), this.input = new mB.d({
+         super(tt, et, Vt), this.input = new Gt.b({
```

#### 88. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1225)

```diff
-       return isNaN(BB) ? IB : BB
+       return isNaN(tt) ? et : tt
```

#### 89. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1229` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1229) · [Before (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1229)

```diff
-         let IB, ZB, kB, nB, hB, NB, gB, dB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, RB, rB, mB, eB, uB, fB, lB, AB, tB, bB = WB.d,
+         let et, Vt, jt, Xt, Qt, ft, wt, Jt, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Ft, kt, Gt, rt, Ut, At, it, Yt, Bt, pt = bt.f,
```

#### 90. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1279)

```diff
-             return this.J7
+             return this.aT
```

#### 91. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1300)

```diff
-             this._upToYMatrix || (this._yToUpMatrix = new GB.b, this._upToYMatrix = new GB.b, this._upVector = GB.s.Zero()), BB.normalize(), this._upVector.TY(BB), this.setMatUp()
+             this._upToYMatrix || (this._yToUpMatrix = new mt.c, this._upToYMatrix = new mt.c, this._upVector = mt.n.Zero()), tt.normalize(), this._upVector.rK(tt), this.setMatUp()
```

#### 92. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1306)

```diff
-             GB.b.RotationAlignToRef(GB.s.UpReadOnly, this._upVector, this._yToUpMatrix), GB.b.RotationAlignToRef(this._upVector, GB.s.UpReadOnly, this._upToYMatrix)
+             mt.c.RotationAlignToRef(mt.n.UpReadOnly, this._upVector, this._yToUpMatrix), mt.c.RotationAlignToRef(this._upVector, mt.n.UpReadOnly, this._upToYMatrix)
```

#### 93. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1526)

```diff
-             super(BB, GB.s.Zero(), kB, nB), cB = this, this.alpha = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, void 0)), this.beta = ((0, TB.l)(this, DB), (0, TB.l)(this, KB, void 0)), this.radius = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
+             super(tt, mt.n.Zero(), jt, Xt), Ht = this, this.alpha = ((0, Ot.m)(this, xt), (0, Ot.m)(this, Tt, void 0)), this.beta = ((0, Ot.m)(this, gt), (0, Ot.m)(this, st, void 0)), this.radius = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1528)

```diff
-               ZB ? (cB.setPosition(IB), cB.Wz && cB.Wz(ZB)) : cB._previousPosition.TY(cB._position);
+               Vt ? (Ht.setPosition(et), Ht.Hl && Ht.Hl(Vt)) : Ht._previousPosition.rK(Ht._position);
```

#### 95. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1535)

```diff
-               cB._computationVector.cBB(cB.radius * TB * GB, cB.radius * oB, cB.radius * JB * GB), vB.addToRef(cB._computationVector, cB._newPosition), cB._position.TY(cB._newPosition);
+               Ht._computationVector.W9(Ht.radius * Ot * mt, Ht.radius * Dt, Ht.radius * qt * mt), dt.addToRef(Ht._computationVector, Ht._newPosition), Ht._position.rK(Ht._newPosition);
```

#### 96. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1537-L1538` → after: `L1537-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1537-L1538) · [Before (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1537-L1538)

```diff
-               cB.allowUpsideDown && cB.beta < 0 && (kB = kB.clone(), kB = kB.dv()), cB._computeViewMatrix(cB._position, vB, kB), cB._viewMatrix.addAtIndex(12, cB.targetScreenOffset.x), cB._viewMatrix.addAtIndex(13, cB.targetScreenOffset.y), cB._collisionTriggered = !1
-             }, this.J7 = GB.s.Zero(), vB && this.setTarget(vB), this.alpha = IB, this.beta = ZB, this.radius = JB, this.getViewMatrix(), this.inputs = new PB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new XB(this.JR(), this._position), this.mo … [truncated]
+               Ht.allowUpsideDown && Ht.beta < 0 && (jt = jt.clone(), jt = jt.gq()), Ht._computeViewMatrix(Ht._position, dt, jt), Ht._viewMatrix.addAtIndex(12, Ht.targetScreenOffset.x), Ht._viewMatrix.addAtIndex(13, Ht.targetScreenOffset.y), Ht._collisionTriggered = !1
+             }, this.aT = mt.n.Zero(), dt && this.setTarget(dt), this.alpha = et, this.beta = Vt, this.radius = qt, this.getViewMatrix(), this.inputs = new Lt(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new zt(this.vI(), this._position), this.mo … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1541)

```diff
-             super._initCache(), this._cache.J7 = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = GB.p.Zero()
+             super._initCache(), this._cache.aT = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = mt.m.Zero()
```

#### 98. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1544` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1544) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1544)

```diff
-             BB || super._updateCache(), this._cache.J7.TY(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.TY(this.targetScreenOffset)
+             tt || super._updateCache(), this._cache.aT.rK(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.rK(this.targetScreenOffset)
```

#### 99. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1549)

```diff
-               this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.J7) : this.J7.TY(BB)
+               this._targetBoundingCenter ? tt.addToRef(this._targetBoundingCenter, this.aT) : this.aT.rK(tt)
```

#### 100. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1552` → after: `L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1552) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1552)

```diff
-             return BB || this.J7
+             return tt || this.aT
```

#### 101. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1558)

```diff
-             return this.hasStateStored() && this.restoreStateInterpolationFactor > zB.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
+             return this.hasStateStored() && this.restoreStateInterpolationFactor > lt.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1570)

```diff
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != oB ? this._currentInterpolationFactor = oB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Dt ? this._currentInterpolationFactor = Dt : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1573` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1573) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1573)

```diff
-             return !!super._isSynchronizedViewMatrix() && (this._cache.J7.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+             return !!super._isSynchronizedViewMatrix() && (this._cache.aT.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1579` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1579) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1579)

```diff
-             IB = CB.j.BackCompatCameraNoPreventDefault(JB), this._useCtrlForPanning = ZB, this._panningMouseButton = TB, "boolean" === typeof JB[0] && (JB.length > 1 && (this._useCtrlForPanning = JB[1]), JB.length > 2 && (this._panningMouseButton = JB[2])), this.inputs.attachElem … [truncated]
+             et = Ct.l.BackCompatCameraNoPreventDefault(qt), this._useCtrlForPanning = Vt, this._panningMouseButton = Ot, "boolean" === typeof qt[0] && (qt.length > 1 && (this._useCtrlForPanning = qt[1]), qt.length > 2 && (this._panningMouseButton = qt[2])), this.inputs.attachElem … [truncated]
```

#### 105. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1592-L1593` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1592-L1593) · [Before (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1592-L1593)

```diff
-             const ZB = GB.m.rN[0].cBB(BB, IB, IB);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZB.multiplyInPlace(this.panningAxis), GB.s.TransformNormalToRef(ZB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+             const Vt = mt.k.uf[0].W9(tt, et, et);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Vt.multiplyInPlace(this.panningAxis), mt.n.TransformNormalToRef(Vt, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
```

#### 106. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1595-L1596` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1595-L1596) · [Before (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1595-L1596)

```diff
-                 IB = GB.s.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
-               GB.s.CrossToRef(BB, IB, this._transformedDirection)
+                 et = mt.n.CrossToRef(this._transformedDirection, tt, this._transformedDirection);
+               mt.n.CrossToRef(tt, et, this._transformedDirection)
```

#### 107. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1600-L1601` → after: `L1600-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1600-L1601) · [Before (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1600-L1601)

```diff
-                 this._transformedDirection.addInPlace(this.J7);
-                 GB.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.J7.TY(this._transformedDirection)
+                 this._transformedDirection.addInPlace(this.aT);
+                 mt.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.aT.rK(this._transformedDirection)
```

#### 108. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1604-L1605` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1604-L1605) · [Before (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1604-L1605)

```diff
-                   const BB = GB.m.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), GB.s.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
+                   const tt = mt.k.Matrix[0];
+                   this.parent.getWorldMatrix().getRotationMatrixToRef(tt), tt.transposeToRef(tt), mt.n.TransformCoordinatesToRef(this._transformedDirection, tt, this._transformedDirection)
```

#### 109. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1607)

```diff
-                 this.J7.addInPlace(this._transformedDirection)
+                 this.aT.addInPlace(this._transformedDirection)
```

#### 110. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1626)

```diff
-               const IB = this._scene.PN().getDeltaTime() / 1e3,
+               const et = this._scene.Jf().getDeltaTime() / 1e3,
```

#### 111. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1630-L1631)

```diff
-                 const IB = GB.m.rN[0].set(LB(this._goalTarget.x, this.J7.x), LB(this._goalTarget.y, this.J7.y), LB(this._goalTarget.z, this.J7.z));
-                 GB.s.LerpToRef(this.target, IB, ZB, this.J7), 10 * GB.s.Distance(this.target, IB) / TB < zB.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.TY(IB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
+                 const et = mt.k.uf[0].set(ot(this._goalTarget.x, this.aT.x), ot(this._goalTarget.y, this.aT.y), ot(this._goalTarget.z, this.aT.z));
+                 mt.n.LerpToRef(this.target, et, Vt, this.aT), 10 * mt.n.Distance(this.target, et) / Ot < lt.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.rK(et), this.setTarget(this.target, !1, !0, !0)) : tt = !0
```

#### 112. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1634-L1636` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1634-L1636) · [Before (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1634-L1636)

```diff
-                 const IB = GB.f.RotationAlphaBetaGammaToRef(LB(this._goalAlpha, this.alpha), LB(this._goalBeta, this.beta), 0, GB.m.Quaternion[0]),
-                   TB = GB.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, GB.m.Quaternion[1]),
-                   JB = GB.f.SlerpToRef(TB, IB, ZB, GB.m.Quaternion[2]);
+                 const et = mt.e.RotationAlphaBetaGammaToRef(ot(this._goalAlpha, this.alpha), ot(this._goalBeta, this.beta), 0, mt.k.Quaternion[0]),
+                   Ot = mt.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, mt.k.Quaternion[1]),
+                   qt = mt.e.SlerpToRef(Ot, et, Vt, mt.k.Quaternion[2]);
```

#### 113. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1638-L1639` → after: `L1638-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1638-L1639) · [Before (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1638-L1639)

```diff
-                 const oB = JB.toAlphaBetaGammaToRef(GB.m.rN[0]);
-                 if (this.alpha = oB.x, this.beta = oB.y, JB.isApprox(IB, zB.d / 5)) {
+                 const Dt = qt.toAlphaBetaGammaToRef(mt.k.uf[0]);
+                 if (this.alpha = Dt.x, this.beta = Dt.y, qt.isApprox(et, lt.e / 5)) {
```

#### 114. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1641)

```diff
-                   const BB = IB.toAlphaBetaGammaToRef(GB.m.rN[0]);
+                   const tt = et.toAlphaBetaGammaToRef(mt.k.uf[0]);
```

#### 115. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1645-L1647` → after: `L1645-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1645-L1647) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (TB - this.radius) * ZB, Math.abs(TB / this.radius - 1) < zB.d ? (this._goalRadius = NaN, this.radius = TB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const IB = GB.m.Vector2[0].set(LB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), LB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 GB.p.LerpToRef(this.targetScreenOffset, IB, ZB, this.targetScreenOffset), GB.p.Distance(this.targetScreenOffset, IB) < zB.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.TY(IB)) : BB = !0
+               if (isNaN(this._goalRadius) || (this.radius += (Ot - this.radius) * Vt, Math.abs(Ot / this.radius - 1) < lt.e ? (this._goalRadius = NaN, this.radius = Ot) : tt = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
+                 const et = mt.k.Vector2[0].set(ot(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), ot(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
+                 mt.m.LerpToRef(this.targetScreenOffset, et, Vt, this.targetScreenOffset), mt.m.Distance(this.targetScreenOffset, et) < lt.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.rK(et)) : tt = !0
```

#### 116. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1657)

```diff
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || GB.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mt.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
```

#### 117. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1668` → after: `L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1668) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1668)

```diff
-             this._position.equals(BB) || (this._position.TY(BB), this.rebuildAnglesAndRadius())
+             this._position.equals(tt) || (this._position.rK(tt), this.rebuildAnglesAndRadius())
```

#### 118. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1674)

```diff
-             if (TB = this.overrideCloneAlphaBetaRadius ?? TB, BB.computeWorldMatrix) IB && BB.qm ? this._targetBoundingCenter = BB.qm().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.J7 = this._getTargetPo … [truncated]
+             if (Ot = this.overrideCloneAlphaBetaRadius ?? Ot, tt.computeWorldMatrix) et && tt.fL ? this._targetBoundingCenter = tt.fL().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, tt.computeWorldMatrix(), this._targetHost = tt, this.aT = this._getTargetPo … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1679)

```diff
-               this._targetHost = null, this.J7 = IB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
+               this._targetHost = null, this.aT = et, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
```

#### 120. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1690-L1691` → after: `L1690-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1690-L1691) · [Before (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1690-L1691)

```diff
-             if (this._computationVector.cBB(this.radius * BB * TB, this.radius * ZB, this.radius * IB * TB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || GB.s.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
-               const BB = this.JR().collisionCoordinator;
+             if (this._computationVector.W9(this.radius * tt * Ot, this.radius * Vt, this.radius * et * Ot), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mt.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
+               const tt = this.vI().collisionCoordinator;
```

#### 121. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1694)

```diff
-               this._position.TY(this._newPosition);
+               this._position.rK(this._newPosition);
```

#### 122. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1696)

```diff
-               this.allowUpsideDown && TB < 0 && (BB = BB.dv()), this._computeViewMatrix(this._position, JB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
+               this.allowUpsideDown && Ot < 0 && (tt = tt.gq()), this._computeViewMatrix(this._position, qt, tt), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
```

#### 123. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1698` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1698) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1698)

```diff
-             return this._currentTarget.TY(JB), this._viewMatrix
+             return this._currentTarget.rK(qt), this._viewMatrix
```

#### 124. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1702-L1703` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1702-L1703) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1702-L1703)

```diff
-             BB = BB || this.JR().meshes;
-             const ZB = cB.c.MinMax(BB);
+             tt = tt || this.vI().meshes;
+             const Vt = Ht.d.MinMax(tt);
```

#### 125. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1706` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1706) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1706)

```diff
-               const BB = this.JR().PN().getAspectRatio(this),
+               const tt = this.vI().Jf().getAspectRatio(this),
```

#### 126. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1719-L1720` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1719-L1720) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1719-L1720)

```diff
-               const TB = BB || this.JR().meshes;
-               IB = cB.c.MinMax(TB), ZB = GB.s.Distance(IB.min, IB.max)
+               const Ot = tt || this.vI().meshes;
+               et = Ht.d.MinMax(Ot), Vt = mt.n.Distance(et.min, et.max)
```

#### 127. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1724)

```diff
-             this.J7 = cB.c.Center(IB), TB || (this.maxZ = 2 * ZB)
+             this.aT = Ht.d.Center(et), Ot || (this.maxZ = 2 * Vt)
```

#### 128. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1739)

```diff
-             const JB = new BB(IB, this.alpha + TB, this.beta, this.radius, this.J7, this.JR());
+             const qt = new tt(et, this.alpha + Ot, this.beta, this.radius, this.aT, this.vI());
```

#### 129. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1760-L1761)

```diff
-             const TB = GB.s.Distance(BB, IB),
-               JB = this.JR().PN().getAspectRatio(this),
+             const Ot = mt.n.Distance(tt, et),
+               qt = this.vI().Jf().getAspectRatio(this),
```

#### 130. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1777)

```diff
-           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], kB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.A)("target")], NB = [(0, JB.q)("targetHost")], gB = [(0, JB.C)()], dB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.C)()], wB = [(0, JB.C)()], OB = [(0, JB.C)()], YB = [(0,  … [truncated]
+           et = [(0, qt.P)()], Vt = [(0, qt.P)()], jt = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.M)("target")], ft = [(0, qt.B)("targetHost")], wt = [(0, qt.P)()], Jt = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.P)()], ht = [(0, qt.P)()], vt = [(0, qt.P)()], Wt = [(0,  … [truncated]
```

#### 131. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1787)

```diff
-           }, null, xB), (0, TB.j)(BB, null, dB, {
+           }, null, xt), (0, Ot.l)(tt, null, Jt, {
```

#### 132. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1797)

```diff
-           }, null, xB), (0, TB.j)(BB, null, QB, {
+           }, null, xt), (0, Ot.l)(tt, null, ut, {
```

#### 133. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1807)

```diff
-           }, null, xB), (0, TB.j)(BB, null, mB, {
+           }, null, xt), (0, Ot.l)(tt, null, Gt, {
```

#### 134. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1817)

```diff
-           }, null, xB), (0, TB.j)(BB, null, eB, {
+           }, null, xt), (0, Ot.l)(tt, null, rt, {
```

#### 135. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1827)

```diff
-           }, null, xB), (0, TB.j)(null, null, IB, {
+           }, null, xt), (0, Ot.l)(null, null, et, {
```

#### 136. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1840)

```diff
-           }, EB, DB), (0, TB.j)(null, null, ZB, {
+           }, Tt, gt), (0, Ot.l)(null, null, Vt, {
```

#### 137. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1853)

```diff
-           }, KB, VB), (0, TB.j)(null, null, kB, {
+           }, st, nt), (0, Ot.l)(null, null, jt, {
```

#### 138. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1866` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1866) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1866)

```diff
-           }, SB, BI), (0, TB.j)(null, null, nB, {
+           }, te, ee), (0, Ot.l)(null, null, Xt, {
```

#### 139. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1879)

```diff
-           }, II, ZI), (0, TB.j)(null, null, hB, {
+           }, Ve, Oe), (0, Ot.l)(null, null, Qt, {
```

#### 140. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1881)

```diff
-             name: "J7",
+             name: "aT",
```

#### 141. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1885-L1886)

```diff
-               has: BB => "J7" in BB,
-               get: BB => BB.J7,
+               has: tt => "aT" in tt,
+               get: tt => tt.aT,
```

#### 142. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1888)

```diff
-                 BB.J7 = IB
+                 tt.aT = et
```

#### 143. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1892` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1892) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1892)

```diff
-           }, TI, JI), (0, TB.j)(null, null, NB, {
+           }, qe, De), (0, Ot.l)(null, null, ft, {
```

#### 144. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1905)

```diff
-           }, oI, GI), (0, TB.j)(null, null, sB, {
+           }, me, de), (0, Ot.l)(null, null, Kt, {
```

#### 145. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1918)

```diff
-           }, vI, kI), (0, TB.j)(null, null, wB, {
+           }, je, He), (0, Ot.l)(null, null, ht, {
```

#### 146. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1931` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1931) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1931)

```diff
-           }, cI, nI), (0, TB.j)(null, null, OB, {
+           }, Xe, Qe), (0, Ot.l)(null, null, vt, {
```

#### 147. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1944)

```diff
-           }, hI, zI), (0, TB.j)(null, null, YB, {
+           }, le, Ee), (0, Ot.l)(null, null, Wt, {
```

#### 148. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1957)

```diff
-           }, FI, NI), (0, TB.j)(null, null, iB, {
+           }, fe, we), (0, Ot.l)(null, null, St, {
```

#### 149. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1970)

```diff
-           }, gI, qI), (0, TB.j)(null, null, pB, {
+           }, ye, Ne), (0, Ot.l)(null, null, ct, {
```

#### 150. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1983)

```diff
-           }, yI, UI), (0, TB.j)(null, null, aB, {
+           }, ae, Me), (0, Ot.l)(null, null, Rt, {
```

#### 151. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L1996)

```diff
-           }, WI, dI), (0, TB.j)(null, null, HB, {
+           }, be, Je), (0, Ot.l)(null, null, It, {
```

#### 152. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2009)

```diff
-           }, CI, QI), (0, TB.j)(null, null, MB, {
+           }, Ce, ue), (0, Ot.l)(null, null, Pt, {
```

#### 153. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2022)

```diff
-           }, sI, wI), (0, TB.j)(null, null, jB, {
+           }, Ke, he), (0, Ot.l)(null, null, Zt, {
```

#### 154. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2035)

```diff
-           }, OI, YI), (0, TB.j)(null, null, RB, {
+           }, ve, We), (0, Ot.l)(null, null, Ft, {
```

#### 155. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2048` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2048) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2048)

```diff
-           }, iI, pI), (0, TB.j)(null, null, rB, {
+           }, Se, ce), (0, Ot.l)(null, null, kt, {
```

#### 156. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2061)

```diff
-           }, aI, HI), (0, TB.j)(null, null, uB, {
+           }, Re, Ie), (0, Ot.l)(null, null, Ut, {
```

#### 157. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2074)

```diff
-           }, MI, jI), (0, TB.j)(null, null, fB, {
+           }, Pe, Ze), (0, Ot.l)(null, null, At, {
```

#### 158. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2087)

```diff
-           }, PI, RI), (0, TB.j)(null, null, lB, {
+           }, Le, Fe), (0, Ot.l)(null, null, it, {
```

#### 159. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2100)

```diff
-           }, rI, mI), (0, TB.j)(null, null, AB, {
+           }, ke, Ge), (0, Ot.l)(null, null, Yt, {
```

#### 160. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2113)

```diff
-           }, XI, LI), (0, TB.j)(null, null, tB, {
+           }, ze, oe), (0, Ot.l)(null, null, Bt, {
```

#### 161. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2135)

```diff
-     uB || (uB = !0, kB.e.AddNodeConstructor("ArcRotateCamera", ((BB, IB) => () => new eB(BB, 0, 0, 1, GB.s.Zero(), IB))), (0, RB.i)("BABYLON.ArcRotateCamera", eB))
+     Ut || (Ut = !0, jt.d.AddNodeConstructor("ArcRotateCamera", ((tt, et) => () => new rt(tt, 0, 0, 1, mt.n.Zero(), et))), (0, Ft.i)("BABYLON.ArcRotateCamera", rt))
```

#### 162. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2137)

```diff
-   40297: (BB, IB, ZB) => {
+   40433: (tt, et, Vt) => {
```

#### 163. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2139)

```diff
-       d: () => TB.e
+       c: () => Ot.b
```

#### 164. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2141-L2142` → after: `L2141-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2141-L2142) · [Before (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2141-L2142)

```diff
-     var TB = ZB(40305);
-     (0, TB.h)()
+     var Ot = Vt(40438);
+     (0, Ot.f)()
```

#### 165. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2144)

```diff
-   40305: (BB, IB, ZB) => {
+   40438: (tt, et, Vt) => {
```

#### 166. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2146-L2147` → after: `L2146-L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2146-L2147) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2146-L2147)

```diff
-       e: () => nB,
-       h: () => zB
+       b: () => Xt,
+       f: () => lt
```

#### 167. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2149-L2155` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2149-L2155) · [Before (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2149-L2155)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(37120),
-       GB = ZB(37311),
-       vB = ZB(40310),
-       kB = ZB(40272),
-       cB = ZB(37170);
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(37336),
+       mt = Vt(37513),
+       dt = Vt(40445),
+       jt = Vt(40415),
+       Ht = Vt(37390);
```

#### 168. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2158)

```diff
-         let IB, ZB, kB = vB.b,
+         let et, Vt, jt = dt.e,
```

#### 169. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2165)

```diff
-             super(BB, ZB, JB), this.groundColor = (0, TB.l)(this, cB, new GB.c(0, 0, 0)), this.direction = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, void 0)), (0, TB.l)(this, zB), this.direction = IB || oB.s.Up()
+             super(tt, Vt, qt), this.groundColor = (0, Ot.m)(this, Ht, new mt.b(0, 0, 0)), this.direction = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Qt, void 0)), (0, Ot.m)(this, lt), this.direction = et || Dt.n.Up()
```

#### 170. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2174)

```diff
-             return this.direction = oB.s.Normalize(BB.subtract(oB.s.Zero())), this.direction
+             return this.direction = Dt.n.Normalize(tt.subtract(Dt.n.Zero())), this.direction
```

#### 171. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2180)

```diff
-             const ZB = oB.s.Normalize(this.direction);
+             const Vt = Dt.n.Normalize(this.direction);
```

#### 172. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2184)

```diff
-             const ZB = oB.s.Normalize(this.direction);
+             const Vt = Dt.n.Normalize(this.direction);
```

#### 173. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2188)

```diff
-             return this._worldMatrix || (this._worldMatrix = oB.b.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = Dt.c.Identity()), this._worldMatrix
```

#### 174. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2191)

```diff
-             return vB.b.LIGHTTYPEID_HEMISPHERICLIGHT
+             return dt.e.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 175. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2198)

```diff
-           IB = [(0, JB.l)()], ZB = [(0, JB.A)()], (0, TB.j)(null, null, IB, {
+           et = [(0, qt.t)()], Vt = [(0, qt.M)()], (0, Ot.l)(null, null, et, {
```

#### 176. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2211)

```diff
-           }, cB, nB), (0, TB.j)(null, null, ZB, {
+           }, Ht, Xt), (0, Ot.l)(null, null, Vt, {
```

#### 177. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/264.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/264.js#L2235)

```diff
-       hB || (hB = !0, kB.e.AddNodeConstructor("Light_Type_3", ((BB, IB) => () => new nB(BB, oB.s.Zero(), IB))), (0, cB.i)("BABYLON.HemisphericLight", nB))
+       Qt || (Qt = !0, jt.d.AddNodeConstructor("Light_Type_3", ((tt, et) => () => new Xt(tt, Dt.n.Zero(), et))), (0, Ht.i)("BABYLON.HemisphericLight", Xt))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (238 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   40443: (BB, IB, ZB) => {
+   40592: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L6)

```diff
-       b: () => JB
+       c: () => qt
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L8)

```diff
-     var TB = ZB(40071);
+     var Ot = Vt(40215);
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L32)

```diff
-           BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.JR ? this._imageProcessingConfiguration = this.J … [truncated]
+           tt !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !tt && this.vI ? this._imageProcessingConfiguration = this.v … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L81)

```diff
-   40333: (BB, IB, ZB) => {
+   40463: (tt, et, Vt) => {
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L83-L84` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L83-L84) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L83-L84)

```diff
-       b: () => oB,
-       c: () => JB
+       c: () => Dt,
+       e: () => qt
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L86)

```diff
-     var TB = ZB(40335);
+     var Ot = Vt(40466);
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L101)

```diff
-   40400: (BB, IB, ZB) => {
+   40546: (tt, et, Vt) => {
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L105-L111` → after: `L105-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L105-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L105-L111) · [Before (L105-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L105-L111)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40339),
-       oB = ZB(40065),
-       GB = ZB(40383),
-       vB = ZB(40335),
-       kB = ZB(40408),
-       cB = ZB(40371);
+     var Ot = Vt(40211),
+       qt = Vt(40474),
+       Dt = Vt(40213),
+       mt = Vt(40525),
+       dt = Vt(40466),
+       jt = Vt(40551),
+       Ht = Vt(40514);
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L134)

```diff
-           return (0, TB.b)(this, IB, "f")
+           return (0, Ot.e)(this, et, "f")
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L137)

```diff
-           (0, TB.f)(this, IB, BB, "f")
+           (0, Ot.i)(this, et, tt, "f")
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L140)

```diff
-           return (0, TB.b)(this, ZB, "f")
+           return (0, Ot.e)(this, Vt, "f")
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L143)

```diff
-           (0, TB.f)(this, ZB, BB, "f")
+           (0, Ot.i)(this, Vt, tt, "f")
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L146)

```diff
-           return (0, TB.b)(this, vB, "f")
+           return (0, Ot.e)(this, dt, "f")
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L149)

```diff
-           (0, TB.f)(this, vB, BB, "f")
+           (0, Ot.i)(this, dt, tt, "f")
```

#### 16. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L159)

```diff
-           super(BB, "DetailMap", 140, new nB, oB), this._texture = null, IB.set(this, (0, TB.l)(this, UB, void 0)), this.diffuseBlendLevel = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, 1)), this.roughnessBlendLevel = ((0, TB.l)(this, CB), (0, TB.l)(this, QB, 1)), this.bumpLevel = ( … [truncated]
+           super(tt, "DetailMap", 140, new Xt, Dt), this._texture = null, et.set(this, (0, Ot.m)(this, Mt, void 0)), this.diffuseBlendLevel = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, 1)), this.roughnessBlendLevel = ((0, Ot.m)(this, Ct), (0, Ot.m)(this, ut, 1)), this.bumpLevel = ( … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L167)

```diff
-             const ZB = IB.PN();
+             const Vt = et.Jf();
```

#### 18. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L174)

```diff
-           BB.useUbo && ZB && BB.isSync || this._texture && GB.e.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, cB.y)(this._texture, BB, "detail")), IB.texturesEnabled  … [truncated]
+           tt.useUbo && Vt && tt.isSync || this._texture && mt.e.DetailTextureEnabled && (tt.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Ht.w)(this._texture, tt, "detail")), et.texturesEnabled  … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L209)

```diff
-         hB = [(0, oB.v)("detailTexture"), (0, oB.e)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, oB.C)()], FB = [(0, oB.C)()], NB = [(0, oB.C)()], gB = [(0, oB.C)(), (0, oB.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, oB.C)(), (0, oB.e)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+         Qt = [(0, Dt.E)("detailTexture"), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty")], lt = [(0, Dt.P)()], Et = [(0, Dt.P)()], ft = [(0, Dt.P)()], wt = [(0, Dt.P)(), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, Dt.P)(), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty" … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L222)

```diff
-         }, UB, WB), (0, TB.j)(BB, null, gB, {
+         }, Mt, bt), (0, Ot.l)(tt, null, wt, {
```

#### 21. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L235)

```diff
-         }, YB, iB), (0, TB.j)(BB, null, qB, {
+         }, Wt, St), (0, Ot.l)(tt, null, yt, {
```

#### 22. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L248)

```diff
-         }, pB, aB), (0, TB.j)(null, null, zB, {
+         }, ct, Rt), (0, Ot.l)(null, null, lt, {
```

#### 23. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L261)

```diff
-         }, dB, CB), (0, TB.j)(null, null, FB, {
+         }, Jt, Ct), (0, Ot.l)(null, null, Et, {
```

#### 24. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L274)

```diff
-         }, QB, sB), (0, TB.j)(null, null, NB, {
+         }, ut, Kt), (0, Ot.l)(null, null, ft, {
```

#### 25. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L296)

```diff
-   40335: (BB, IB, ZB) => {
+   40466: (tt, et, Vt) => {
```

#### 26. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L395)

```diff
-   40431: (BB, IB, ZB) => {
+   40575: (tt, et, Vt) => {
```

#### 27. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L397)

```diff
-       b: () => vB,
+       c: () => dt,
```

#### 28. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L401)

```diff
-     var TB, JB = ZB(37120);
+     var Ot, qt = Vt(37336);
```

#### 29. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L406)

```diff
-       if (!Number.isInteger(TB) || TB < 0 || TB > ZB) throw new Error(`Invalid geometry object ID ${TB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${ZB.toString(16).toUpperCase()}.`);
+       if (!Number.isInteger(Ot) || Ot < 0 || Ot > Vt) throw new Error(`Invalid geometry object ID ${Ot} for mesh "${tt.name}". Object IDs must be integers between 0 and 0x${Vt.toString(16).toUpperCase()}.`);
```

#### 30. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L412)

```diff
-       if (!Number.isInteger(ZB) || ZB < 0 || ZB > 255 || 0 !== ZB && 0 === (63 & ZB)) throw new Error(`Invalid geometry mesh-blending tag ${ZB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       if (!Number.isInteger(Vt) || Vt < 0 || Vt > 255 || 0 !== Vt && 0 === (63 & Vt)) throw new Error(`Invalid geometry mesh-blending tag ${Vt} for mesh "${tt.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
```

#### 31. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L422-L423)

```diff
-           previousViewProjection: JB.b.Zero(),
-           currentViewProjection: JB.b.Zero(),
+           previousViewProjection: qt.c.Zero(),
+           currentViewProjection: qt.c.Zero(),
```

#### 32. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L443)

```diff
-           void 0 !== BB && (JB += `#define ${oB.define}\n#define ${oB.defineIndex} ${BB}\n`)
+           void 0 !== tt && (qt += `#define ${Dt.define}\n#define ${Dt.defineIndex} ${tt}\n`)
```

#### 33. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L445)

```diff
-         TB.objectIdIsRedFormat && (JB += "#define PREPASS_OBJECT_ID_R8\n"), TB._defines = JB + `#define SCENE_MRT_COUNT ${IB.length}\n`
+         Ot.objectIdIsRedFormat && (qt += "#define PREPASS_OBJECT_ID_R8\n"), Ot._defines = qt + `#define SCENE_MRT_COUNT ${et.length}\n`
```

#### 34. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L479-L480` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L479-L480) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L479-L480)

```diff
-           if (ZB.EW)
-             for (const IB of ZB.EW) IB._removeDrawWrapper(BB)
+           if (Vt.vJ)
+             for (const et of Vt.vJ) et._removeDrawWrapper(tt)
```

#### 35. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L500-L501)

```diff
-         const cB = ZB.JR(),
-           nB = cB.PN();
+         const Ht = Vt.vI(),
+           Xt = Ht.Jf();
```

#### 36. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L506)

```diff
-           else if (TB > BB) throw new Error(`Invalid geometry object ID ${TB} for mesh "${ZB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
+           else if (Ot > tt) throw new Error(`Invalid geometry object ID ${Ot} for mesh "${Vt.name}". Object IDs must be integers between 0 and 0x${tt.toString(16).toUpperCase()}.`);
```

#### 37. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L516)

```diff
-           if (BB[ZB.uniqueId] || (BB[ZB.uniqueId] = TB.clone(), kB.previousWorldMatrices[ZB.uniqueId] = TB.clone()), JB[ZB.uniqueId] !== nB.frameId && (kB.previousWorldMatrices[ZB.uniqueId].TY(BB[ZB.uniqueId]), JB[ZB.uniqueId] = nB.frameId), BB[ZB.uniqueId].TY(TB), -1 === kB.last … [truncated]
+           if (tt[Vt.uniqueId] || (tt[Vt.uniqueId] = Ot.clone(), jt.previousWorldMatrices[Vt.uniqueId] = Ot.clone()), qt[Vt.uniqueId] !== Xt.frameId && (jt.previousWorldMatrices[Vt.uniqueId].rK(tt[Vt.uniqueId]), qt[Vt.uniqueId] = Xt.frameId), tt[Vt.uniqueId].rK(Ot), -1 === jt.last … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L630)

```diff
-   40408: (BB, IB, ZB) => {
+   40551: (tt, et, Vt) => {
```

#### 39. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L635-L638` → after: `L635-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L635-L638) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L635-L638)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(39939),
-       GB = ZB(39905);
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(40082),
+       mt = Vt(40061);
```

#### 40. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L642)

```diff
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.JR(), this._engine = this._scene.PN()
+         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = tt, this._scene = tt.vI(), this._engine = this._scene.Jf()
```

#### 41. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L647)

```diff
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !BB.isCompatible(this._material.shaderLanguage)) throw `The plugin "${BB.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
+         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !tt.isCompatible(this._material.shaderLanguage)) throw `The plugin "${tt.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L747)

```diff
-                             BB = `${IB.type}f`
+                             tt = `${et.type}f`
```

#### 43. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L749-L750)

```diff
-                         this._uboDeclaration += TB > 0 ? `uniform ${IB.name}: array<${BB}, ${TB}>;\n` : `uniform ${IB.name}: ${BB};\n`
-                       } else this._uboDeclaration += `${IB.type} ${IB.name}${TB>0?`[${TB}]`:""};\n`
+                         this._uboDeclaration += Ot > 0 ? `uniform ${et.name}: array<${tt}, ${Ot}>;\n` : `uniform ${et.name}: ${tt};\n`
+                       } else this._uboDeclaration += `${et.type} ${et.name}${Ot>0?`[${Ot}]`:""};\n`
```

#### 44. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L784-L785` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L784-L785) · [Before (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L784-L785)

```diff
-                 shadersRepository: GB.c.GetShadersRepository(vB),
-                 includesShadersStore: GB.c.GetIncludesShadersStore(vB),
+                 shadersRepository: mt.b.GetShadersRepository(dt),
+                 includesShadersStore: mt.b.GetIncludesShadersStore(dt),
```

#### 45. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L790)

```diff
-                 iTB: this._engine.iTB,
+                 LOt: this._engine.LOt,
```

#### 46. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L792)

```diff
-               }), kB.isFragment = "fragment" === ZB, (0, oB.j)(cB, kB, (BB => cB = BB))), JB += cB + "\n")
+               }), jt.isFragment = "fragment" === Vt, (0, Dt.h)(Ht, jt, (tt => Ht = tt))), qt += Ht + "\n")
```

#### 47. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L829-L830)

```diff
-     var nB = ZB(40085),
-       hB = ZB(37170);
+     var Xt = Vt(40230),
+       Qt = Vt(37390);
```

#### 48. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L852)

```diff
-             this.name = (0, TB.l)(this, vB, void 0), this.priority = ((0, TB.l)(this, cB), (0, TB.l)(this, hB, 500)), this.resolveIncludes = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, !1)), this.registerForExtraEvents = ((0, TB.l)(this, NB), (0, TB.l)(this, gB, !1)), this.doNotSer … [truncated]
+             this.name = (0, Ot.m)(this, dt, void 0), this.priority = ((0, Ot.m)(this, Ht), (0, Ot.m)(this, Qt, 500)), this.resolveIncludes = ((0, Ot.m)(this, lt), (0, Ot.m)(this, Et, !1)), this.registerForExtraEvents = ((0, Ot.m)(this, ft), (0, Ot.m)(this, wt, !1)), this.doNotSer … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L900)

```diff
-             nB.b.Clone((() => BB), this)
+             Xt.d.Clone((() => tt), this)
```

#### 50. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L903)

```diff
-             return nB.b.Serialize(this)
+             return Xt.d.Serialize(this)
```

#### 51. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L906)

```diff
-             nB.b.Parse((() => this), BB, IB, ZB)
+             Xt.d.Parse((() => this), tt, et, Vt)
```

#### 52. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L910)

```diff
-           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
+           et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], mt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
```

#### 53. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L923)

```diff
-           }, vB, cB), (0, TB.j)(null, null, ZB, {
+           }, dt, Ht), (0, Ot.l)(null, null, Vt, {
```

#### 54. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L936)

```diff
-           }, hB, zB), (0, TB.j)(null, null, oB, {
+           }, Qt, lt), (0, Ot.l)(null, null, Dt, {
```

#### 55. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L949)

```diff
-           }, FB, NB), (0, TB.j)(null, null, GB, {
+           }, Et, ft), (0, Ot.l)(null, null, mt, {
```

#### 56. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L976)

```diff
-   40330: (BB, IB, ZB) => {
+   40461: (tt, et, Vt) => {
```

#### 57. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L978)

```diff
-       e: () => TB
+       b: () => Ot
```

#### 58. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L991-L992` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L991-L992) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L991-L992)

```diff
-           const JB = IB.PN();
-           this.currentViewProjection.updateFlag !== IB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = JB.frameId, this.previousViewProjection.TY(this.currentViewProjection), this.currentViewProjection.TY(IB.getTransformMatrix())) : this._lastUpdateFrameId !== JB.fra … [truncated]
+           const qt = et.Jf();
+           this.currentViewProjection.updateFlag !== et.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = qt.frameId, this.previousViewProjection.rK(this.currentViewProjection), this.currentViewProjection.rK(et.getTransformMatrix())) : this._lastUpdateFrameId !== qt.fra … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L997)

```diff
-   40437: (BB, IB, ZB) => {
+   40587: (tt, et, Vt) => {
```

#### 60. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1009)

```diff
-   40318: (BB, IB, ZB) => {
+   40452: (tt, et, Vt) => {
```

#### 61. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1011)

```diff
-       StandardMaterial: () => TB.f
+       StandardMaterial: () => Ot.d
```

#### 62. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1013-L1014` → after: `L1013-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1013-L1014) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1013-L1014)

```diff
-     var TB = ZB(40322);
-     (0, TB.d)()
+     var Ot = Vt(40456);
+     (0, Ot.b)()
```

#### 63. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1016)

```diff
-   40322: (BB, IB, ZB) => {
+   40456: (tt, et, Vt) => {
```

#### 64. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1018-L1019` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1018-L1019) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1018-L1019)

```diff
-       d: () => rB,
-       f: () => PB
+       b: () => kt,
+       d: () => Lt
```

#### 65. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1021-L1046` → after: `L1021-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1021-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1021-L1046) · [Before (L1021-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1021-L1046)

```diff
-     var TB = ZB(40061),
-       JB = ZB(40065),
-       oB = ZB(40163),
-       GB = ZB(40148),
-       vB = ZB(37311),
-       kB = ZB(40188),
-       cB = ZB(40330),
-       nB = ZB(40333),
-       hB = ZB(40166),
-       zB = ZB(40339),
-       FB = ZB(40335),
-       NB = ZB(40390),
-       gB = ZB(40383),
-       qB = ZB(40395),
-       yB = ZB(40400),
-       UB = ZB(40380),
- ... (10 more removed lines; see GitHub link above)
+     var Ot = Vt(40211),
+       qt = Vt(40213),
+       Dt = Vt(40311),
+       mt = Vt(40296),
+       dt = Vt(37513),
+       jt = Vt(40343),
+       Ht = Vt(40461),
+       Xt = Vt(40463),
+       Qt = Vt(40313),
+       lt = Vt(40474),
+       Et = Vt(40466),
+       ft = Vt(40531),
+       wt = Vt(40525),
+       yt = Vt(40540),
+       Nt = Vt(40546),
+       Mt = Vt(40520),
+ ... (10 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1051-L1052)

```diff
-     class HB extends((0, OB.b)((0, wB.b)(FB.e))) {}
-     class MB extends((0, nB.c)(HB)) {
+     class It extends((0, vt.b)((0, ht.e)(Et.e))) {}
+     class Pt extends((0, Xt.e)(It)) {
```

#### 67. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1057)

```diff
-     class jB extends((0, YB.b)(NB.b)) {}
+     class Zt extends((0, Wt.c)(ft.e)) {}
```

#### 68. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1209` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1209) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1209)

```diff
-             return (0, TB.b)(this, IB, "f")
+             return (0, Ot.e)(this, et, "f")
```

#### 69. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1212)

```diff
-             (0, TB.f)(this, IB, BB, "f")
+             (0, Ot.i)(this, et, tt, "f")
```

#### 70. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1215` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1215) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1215)

```diff
-             return (0, TB.b)(this, nB, "f")
+             return (0, Ot.e)(this, Xt, "f")
```

#### 71. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1218)

```diff
-             (0, TB.f)(this, nB, BB, "f")
+             (0, Ot.i)(this, Xt, tt, "f")
```

#### 72. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1221)

```diff
-             return (0, TB.b)(this, FB, "f")
+             return (0, Ot.e)(this, Et, "f")
```

#### 73. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1224)

```diff
-             (0, TB.f)(this, FB, BB, "f")
+             (0, Ot.i)(this, Et, tt, "f")
```

#### 74. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1227)

```diff
-             return (0, TB.b)(this, wB, "f")
+             return (0, Ot.e)(this, ht, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1230)

```diff
-             (0, TB.f)(this, wB, BB, "f")
+             (0, Ot.i)(this, ht, tt, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1233` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1233) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1233)

```diff
-             return (0, TB.b)(this, OB, "f")
+             return (0, Ot.e)(this, vt, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1236)

```diff
-             (0, TB.f)(this, OB, BB, "f")
+             (0, Ot.i)(this, vt, tt, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1239)

```diff
-             return (0, TB.b)(this, YB, "f")
+             return (0, Ot.e)(this, Wt, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1242)

```diff
-             (0, TB.f)(this, YB, BB, "f")
+             (0, Ot.i)(this, Wt, tt, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1245)

```diff
-             return (0, TB.b)(this, iB, "f")
+             return (0, Ot.e)(this, St, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1248)

```diff
-             (0, TB.f)(this, iB, BB, "f")
+             (0, Ot.i)(this, St, tt, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1251)

```diff
-             return (0, TB.b)(this, pB, "f")
+             return (0, Ot.e)(this, ct, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1254)

```diff
-             (0, TB.f)(this, pB, BB, "f")
+             (0, Ot.i)(this, ct, tt, "f")
```

#### 84. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1257)

```diff
-             return (0, TB.b)(this, HB, "f")
+             return (0, Ot.e)(this, It, "f")
```

#### 85. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1260)

```diff
-             (0, TB.f)(this, HB, BB, "f")
+             (0, Ot.i)(this, It, tt, "f")
```

#### 86. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1263` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1263) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1263)

```diff
-             return (0, TB.b)(this, PB, "f")
+             return (0, Ot.e)(this, Lt, "f")
```

#### 87. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1266)

```diff
-             (0, TB.f)(this, PB, BB, "f")
+             (0, Ot.i)(this, Lt, tt, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1269` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1269) · [Before (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1269)

```diff
-             return (0, TB.b)(this, RB, "f")
+             return (0, Ot.e)(this, Ft, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1272)

```diff
-             (0, TB.f)(this, RB, BB, "f")
+             (0, Ot.i)(this, Ft, tt, "f")
```

#### 90. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1275` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1275) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1275)

```diff
-             return (0, TB.b)(this, rB, "f")
+             return (0, Ot.e)(this, kt, "f")
```

#### 91. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1278)

```diff
-             (0, TB.f)(this, rB, BB, "f")
+             (0, Ot.i)(this, kt, tt, "f")
```

#### 92. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1281)

```diff
-             return (0, TB.b)(this, mB, "f")
+             return (0, Ot.e)(this, Gt, "f")
```

#### 93. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1284)

```diff
-             (0, TB.f)(this, mB, BB, "f")
+             (0, Ot.i)(this, Gt, tt, "f")
```

#### 94. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1287)

```diff
-             return (0, TB.b)(this, XB, "f")
+             return (0, Ot.e)(this, zt, "f")
```

#### 95. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1290)

```diff
-             (0, TB.f)(this, XB, BB, "f")
+             (0, Ot.i)(this, zt, tt, "f")
```

#### 96. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1293)

```diff
-             return (0, TB.b)(this, LB, "f")
+             return (0, Ot.e)(this, ot, "f")
```

#### 97. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1296)

```diff
-             (0, TB.f)(this, LB, BB, "f")
+             (0, Ot.i)(this, ot, tt, "f")
```

#### 98. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1299)

```diff
-             return (0, TB.b)(this, eB, "f")
+             return (0, Ot.e)(this, rt, "f")
```

#### 99. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1302)

```diff
-             (0, TB.f)(this, eB, BB, "f")
+             (0, Ot.i)(this, rt, tt, "f")
```

#### 100. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1305)

```diff
-             return (0, TB.b)(this, uB, "f")
+             return (0, Ot.e)(this, Ut, "f")
```

#### 101. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1308)

```diff
-             (0, TB.f)(this, uB, BB, "f")
+             (0, Ot.i)(this, Ut, tt, "f")
```

#### 102. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1311)

```diff
-             return (0, TB.b)(this, fB, "f")
+             return (0, Ot.e)(this, At, "f")
```

#### 103. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1314)

```diff
-             (0, TB.f)(this, fB, BB, "f")
+             (0, Ot.i)(this, At, tt, "f")
```

#### 104. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1317)

```diff
-             return (0, TB.b)(this, lB, "f")
+             return (0, Ot.e)(this, it, "f")
```

#### 105. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1320` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1320) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1320)

```diff
-             (0, TB.f)(this, lB, BB, "f")
+             (0, Ot.i)(this, it, tt, "f")
```

#### 106. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1323)

```diff
-             return (0, TB.b)(this, AB, "f")
+             return (0, Ot.e)(this, Yt, "f")
```

#### 107. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1326)

```diff
-             (0, TB.f)(this, AB, BB, "f")
+             (0, Ot.i)(this, Yt, tt, "f")
```

#### 108. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1329)

```diff
-             return (0, TB.b)(this, tB, "f")
+             return (0, Ot.e)(this, Bt, "f")
```

#### 109. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1332)

```diff
-             (0, TB.f)(this, tB, BB, "f")
+             (0, Ot.i)(this, Bt, tt, "f")
```

#### 110. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1335)

```diff
-             return (0, TB.b)(this, bB, "f")
+             return (0, Ot.e)(this, pt, "f")
```

#### 111. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1338)

```diff
-             (0, TB.f)(this, bB, BB, "f")
+             (0, Ot.i)(this, pt, tt, "f")
```

#### 112. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1341)

```diff
-             return (0, TB.b)(this, xB, "f")
+             return (0, Ot.e)(this, xt, "f")
```

#### 113. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1344)

```diff
-             (0, TB.f)(this, xB, BB, "f")
+             (0, Ot.i)(this, xt, tt, "f")
```

#### 114. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1347` → after: `L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1347) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1347)

```diff
-             return (0, TB.b)(this, EB, "f")
+             return (0, Ot.e)(this, Tt, "f")
```

#### 115. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1350)

```diff
-             (0, TB.f)(this, EB, BB, "f")
+             (0, Ot.i)(this, Tt, tt, "f")
```

#### 116. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1353` → after: `L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1353) · [Before (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1353)

```diff
-             return (0, TB.b)(this, DB, "f")
+             return (0, Ot.e)(this, gt, "f")
```

#### 117. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1356)

```diff
-             (0, TB.f)(this, DB, BB, "f")
+             (0, Ot.i)(this, gt, tt, "f")
```

#### 118. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1359)

```diff
-             return (0, TB.b)(this, KB, "f")
+             return (0, Ot.e)(this, st, "f")
```

#### 119. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1362)

```diff
-             (0, TB.f)(this, KB, BB, "f")
+             (0, Ot.i)(this, st, tt, "f")
```

#### 120. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1365)

```diff
-             return (0, TB.b)(this, VB, "f")
+             return (0, Ot.e)(this, nt, "f")
```

#### 121. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1368)

```diff
-             (0, TB.f)(this, VB, BB, "f")
+             (0, Ot.i)(this, nt, tt, "f")
```

#### 122. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1371)

```diff
-             return (0, TB.b)(this, SB, "f")
+             return (0, Ot.e)(this, te, "f")
```

#### 123. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1374)

```diff
-             (0, TB.f)(this, SB, BB, "f")
+             (0, Ot.i)(this, te, tt, "f")
```

#### 124. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1377` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1377) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1377)

```diff
-             return (0, TB.b)(this, BI, "f")
+             return (0, Ot.e)(this, ee, "f")
```

#### 125. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1380)

```diff
-             (0, TB.f)(this, BI, BB, "f")
+             (0, Ot.i)(this, ee, tt, "f")
```

#### 126. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1383` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1383) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1383)

```diff
-             return (0, TB.b)(this, II, "f")
+             return (0, Ot.e)(this, Ve, "f")
```

#### 127. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1386)

```diff
-             (0, TB.f)(this, II, BB, "f")
+             (0, Ot.i)(this, Ve, tt, "f")
```

#### 128. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1389` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1389) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1389)

```diff
-             return (0, TB.b)(this, ZI, "f")
+             return (0, Ot.e)(this, Oe, "f")
```

#### 129. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1392)

```diff
-             (0, TB.f)(this, ZI, BB, "f")
+             (0, Ot.i)(this, Oe, tt, "f")
```

#### 130. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1395)

```diff
-             return (0, TB.b)(this, TI, "f")
+             return (0, Ot.e)(this, qe, "f")
```

#### 131. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1398)

```diff
-             (0, TB.f)(this, TI, BB, "f")
+             (0, Ot.i)(this, qe, tt, "f")
```

#### 132. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1407` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1407) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1407)

```diff
-             super(ZB, JB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, TB.l)(this, YZ, null), IB.set(this, ((0, TB.l)(this, iZ), (0, TB.l)(this, pZ, void 0))), this._ambientTexture = ((0, TB.l)(this, aZ), (0, … [truncated]
+             super(Vt, qt, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || tt.ForceGLSL), this._diffuseTexture = (0, Ot.m)(this, WV, null), et.set(this, ((0, Ot.m)(this, SV), (0, Ot.m)(this, cV, void 0))), this._ambientTexture = ((0, Ot.m)(this, RV), (0, … [truncated]
```

#### 133. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1419)

```diff
-             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === zB.e.MATERIAL_ALPHATEST)
+             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === lt.c.MATERIAL_ALPHATEST)
```

#### 134. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1422)

```diff
-             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== zB.e.MATERIAL_OPAQUE
+             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== lt.c.MATERIAL_OPAQUE
```

#### 135. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1436)

```diff
-             const oB = this.JR(),
+             const Dt = this.vI(),
```

#### 136. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1439-L1443` → after: `L1439-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1439-L1443) · [Before (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1439-L1443)

```diff
-             const vB = oB.PN();
-             if (GB._needNormals = (0, dB.Y)(oB, IB, GB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, dB.c)(oB, IB, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, dB.fb)(oB, GB);
-             const nB = this.needAlphaBlendingForMesh(IB) && this.JR().useOrderIndependentTransparency;
-             if ((0, dB.kb)(oB, GB, this.canRenderToMRT && !nB), (0, dB.gb)(oB, GB, nB), sB.b.PrepareDefines(vB.currentRenderPassId, IB, GB), GB._areTexturesDirty) {
+             const dt = Dt.Jf();
+             if (mt._needNormals = (0, Jt.Y)(Dt, et, mt, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Jt.e)(Dt, et, this._maxSimultaneousLights, this._disableLighting)) return !1;
+             (0, Jt.gb)(Dt, mt);
+             const Xt = this.needAlphaBlendingForMesh(et) && this.vI().useOrderIndependentTransparency;
+             if ((0, Jt.jb)(Dt, mt, this.canRenderToMRT && !Xt), (0, Jt.ib)(Dt, mt, Xt), Kt.c.PrepareDefines(dt.currentRenderPassId, et, mt), mt._areTexturesDirty) {
```

#### 137. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1459)

```diff
-                 if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (GB.ROUGHNESS = this._roughness > 0, GB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (GB.ROUGHNESS = !1, GB.REFLECTIONOVERALPHA = !1), !(0, dB.W)(oB, this._reflectionTexture, GB)) return !1;
+                 if (this._reflectionTexture && tt.ReflectionTextureEnabled ? (mt.ROUGHNESS = this._roughness > 0, mt.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (mt.ROUGHNESS = !1, mt.REFLECTIONOVERALPHA = !1), !(0, Jt.X)(Dt, this._reflectionTexture, mt)) return !1;
```

#### 138. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1472)

```diff
-                 if (oB.PN().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
+                 if (Dt.Jf().getCaps().standardDerivatives && this._bumpTexture && tt.BumpTextureEnabled) {
```

#### 139. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1497-L1502` → after: `L1497-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1497-L1502) · [Before (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1497-L1502)

```diff
-               const JB = new qB.e;
-               GB.REFLECTION && JB.addFallback(0, "REFLECTION"), GB.SPECULAR && JB.addFallback(0, "SPECULAR"), GB.BUMP && JB.addFallback(0, "BUMP"), GB.PARALLAX && JB.addFallback(1, "PARALLAX"), GB.PARALLAX_RHS && JB.addFallback(1, "PARALLAX_RHS"), GB.PARALLAXOCCLUSION && JB.addFa … [truncated]
-               const nB = [kB.i.PositionKind];
-               GB.NORMAL && nB.push(kB.i.NormalKind), GB.TANGENT && nB.push(kB.i.TangentKind);
-               for (let BB = 1; BB <= 6; ++BB) GB["UV" + BB] && nB.push(`uv${1===BB?"":BB}`);
-               GB.VERTEXCOLOR && nB.push(kB.i.ColorKind), (0, dB.I)(nB, IB, GB, JB), (0, dB.L)(nB, GB), (0, dB.M)(nB, IB, GB), (0, dB.F)(nB, IB, GB);
+               const qt = new yt.b;
+               mt.REFLECTION && qt.addFallback(0, "REFLECTION"), mt.SPECULAR && qt.addFallback(0, "SPECULAR"), mt.BUMP && qt.addFallback(0, "BUMP"), mt.PARALLAX && qt.addFallback(1, "PARALLAX"), mt.PARALLAX_RHS && qt.addFallback(1, "PARALLAX_RHS"), mt.PARALLAXOCCLUSION && qt.addFa … [truncated]
+               const Xt = [jt.m.PositionKind];
+               mt.NORMAL && Xt.push(jt.m.NormalKind), mt.TANGENT && Xt.push(jt.m.TangentKind);
+               for (let tt = 1; tt <= 6; ++tt) mt["UV" + tt] && Xt.push(`uv${1===tt?"":tt}`);
+               mt.VERTEXCOLOR && Xt.push(jt.m.ColorKind), (0, Jt.H)(Xt, et, mt, qt), (0, Jt.L)(Xt, mt), (0, Jt.M)(Xt, et, mt), (0, Jt.D)(Xt, et, mt);
```

#### 140. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1506)

```diff
-               (0, dB.rb)(NB, gB, !1);
+               (0, Jt.lb)(ft, wt, !1);
```

#### 141. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1512)

```diff
-               if (this._eventInfo.fallbacks = JB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = GB, this._eventInfo.uniforms = NB, this._eventInfo.attributes = nB, this._eventInfo.samplers = gB, this._eventInfo.uniformBuffersNames = yB, this._eventInfo.customCode =  … [truncated]
+               if (this._eventInfo.fallbacks = qt, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = mt, this._eventInfo.uniforms = ft, this._eventInfo.attributes = Xt, this._eventInfo.samplers = wt, this._eventInfo.uniformBuffersNames = Nt, this._eventInfo.customCode =  … [truncated]
```

#### 142. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1519)

```diff
-                 }), (0, UB.c)(NB), this._useVertexPulling) {
+                 }), (0, Mt.e)(ft), this._useVertexPulling) {
```

#### 143. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1522-L1523` → after: `L1522-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1522-L1523) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1522-L1523)

```diff
-                 IB && (this._vertexPullingMetadata = (0, WB.d)(IB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, IB) => {
-                   NB.push(`vp_${IB}_info`)
+                 et && (this._vertexPullingMetadata = (0, bt.h)(et), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((tt, et) => {
+                   ft.push(`vp_${et}_info`)
```

#### 144. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1530)

```diff
-                 YB = oB.PN().createEffect(FB, {
+                 Wt = Dt.Jf().createEffect(Et, {
```

#### 145. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1555)

```diff
-             BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightCol … [truncated]
+             tt.addUniform("diffuseLeftColor", 4), tt.addUniform("diffuseRightColor", 4), tt.addUniform("opacityParts", 4), tt.addUniform("reflectionLeftColor", 4), tt.addUniform("reflectionRightColor", 4), tt.addUniform("refractionLeftColor", 4), tt.addUniform("refractionRightCol … [truncated]
```

#### 146. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1558)

```diff
-             const JB = this.JR(),
+             const qt = this.vI(),
```

#### 147. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1563)

```diff
-             this._activeEffect = kB, ZB.getMeshUniformBuffer().bindToEffect(kB, "Mesh"), ZB.transferToEffect(IB), this._uniformBuffer.bindToEffect(kB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, JB, ZB, IB, this.isFrozen), sB.b.Bind(JB.PN().currentRe … [truncated]
+             this._activeEffect = jt, Vt.getMeshUniformBuffer().bindToEffect(jt, "Mesh"), Vt.transferToEffect(et), this._uniformBuffer.bindToEffect(jt, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qt, Vt, et, this.isFrozen), Kt.c.Bind(qt.Jf().currentRe … [truncated]
```

#### 148. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1569-L1570)

```diff
-               zB = JB.PN()._features.needToAlwaysBindUniformBuffers;
-             (0, dB.e)(ZB, kB), this._vertexPullingMetadata && (0, WB.c)(kB, this._vertexPullingMetadata);
+               lt = qt.Jf()._features.needToAlwaysBindUniformBuffers;
+             (0, Jt.f)(Vt, jt), this._vertexPullingMetadata && (0, bt.d)(jt, this._vertexPullingMetadata);
```

#### 149. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1576)

```diff
-                     const BB = vB.k.Color3[0];
+                     const tt = dt.f.Color3[0];
```

#### 150. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1581)

```diff
-                 if (oB.ALPHATEST && FB.updateFloat("alphaCutOff", this.alphaCutOff), JB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (FB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, dB.y)(this._di … [truncated]
+                 if (Dt.ALPHATEST && Et.updateFloat("alphaCutOff", this.alphaCutOff), qt.texturesEnabled && (this._diffuseTexture && tt.DiffuseTextureEnabled && (Et.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Jt.w)(this._di … [truncated]
```

#### 151. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1583)

```diff
-                   if (this._refractionTexture.isCube || (FB.T6("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), FB.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
+                   if (this._refractionTexture.isCube || (Et.x_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (tt = this._refractionTexture.depth)), Et.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
```

#### 152. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1588)

```diff
-                 this.pointsCloud && FB.updateFloat("pointSize", this.pointSize), FB.updateColor4("vSpecularColor", this.specularColor, this.specularPower), FB.updateColor3("vEmissiveColor", BB.EmissiveTextureEnabled ? this.emissiveColor : vB.c.BlackReadOnly), FB.updateColor4("vDi … [truncated]
+                 this.pointsCloud && Et.updateFloat("pointSize", this.pointSize), Et.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Et.updateColor3("vEmissiveColor", tt.EmissiveTextureEnabled ? this.emissiveColor : dt.b.BlackReadOnly), Et.updateColor4("vDi … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1590)

```diff
-               JB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && kB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && kB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.Op … [truncated]
+               qt.texturesEnabled && (this._diffuseTexture && tt.DiffuseTextureEnabled && jt.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && tt.AmbientTextureEnabled && jt.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && tt.Op … [truncated]
```

#### 154. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1592)

```diff
-             !hB && this.isFrozen && !zB || !JB.lightsEnabled || this._disableLighting || (0, dB.p)(JB, ZB, kB, oB, this._maxSimultaneousLights), !hB && this.isFrozen || ((JB.fogEnabled && ZB.applyFog && JB.fogMode !== GB.e.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
+             !Qt && this.isFrozen && !lt || !qt.lightsEnabled || this._disableLighting || (0, Jt.o)(qt, Vt, jt, Dt, this._maxSimultaneousLights), !Qt && this.isFrozen || ((qt.fogEnabled && Vt.applyFog && qt.fogMode !== mt.d.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
```

#### 155. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1596)

```diff
-             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === NB.b.prototy … [truncated]
+             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === tt.prototype.isReadyForSubMesh && this.bindForSubMesh === tt.prototype.bindForSubMesh && this._mustRebind === ft.e.prototy … [truncated]
```

#### 156. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1624)

```diff
-             const JB = CB.b.Clone((() => new BB(IB, this.JR())), this, {
+             const qt = Ct.d.Clone((() => new tt(et, this.vI())), this, {
```

#### 157. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1630-L1631)

```diff
-             const JB = CB.b.Parse((() => new BB(IB.name, ZB)), IB, ZB, TB);
-             return IB.stencil && JB.stencil.parse(IB.stencil, ZB, TB), zB.e._ParsePlugins(IB, JB, ZB, TB), JB
+             const qt = Ct.d.Parse((() => new tt(et.name, Vt)), et, Vt, Ot);
+             return et.stencil && qt.stencil.parse(et.stencil, Vt, Ot), lt.c._ParsePlugins(et, qt, Vt, Ot), qt
```

#### 158. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1707)

```diff
-           JI = [(0, JB.v)("diffuseTexture")], oI = [(0, JB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], GI = [(0, JB.v)("ambientTexture")], vI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], kI = [(0, JB.v)("opacityTexture")], cI = [(0, JB.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
+           De = [(0, qt.E)("diffuseTexture")], me = [(0, qt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], de = [(0, qt.E)("ambientTexture")], je = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], He = [(0, qt.E)("opacityTexture")], Xe = [(0, qt.i)("_markAllSubMeshesAsTexturesAnd … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1717)

```diff
-           })], aI = [(0, JB.C)("useEmissiveAsIllumination")], HI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, JB.C)("linkEmissiveWithDiffuse")], jI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], PI = [(0, JB.C)("useSpecularOverAlpha")], RI = [(0, JB.e)("_markA … [truncated]
+           })], Re = [(0, qt.P)("useEmissiveAsIllumination")], Ie = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Pe = [(0, qt.P)("linkEmissiveWithDiffuse")], Ze = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, qt.P)("useSpecularOverAlpha")], Fe = [(0, qt.i)("_markA … [truncated]
```

#### 160. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1730)

```diff
-           }, pZ, aZ), (0, TB.j)(BB, null, vI, {
+           }, cV, RV), (0, Ot.l)(tt, null, je, {
```

#### 161. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1743)

```diff
-           }, jZ, PZ), (0, TB.j)(BB, null, cI, {
+           }, ZV, LV), (0, Ot.l)(tt, null, Xe, {
```

#### 162. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1756)

```diff
-           }, mZ, XZ), (0, TB.j)(BB, null, hI, {
+           }, GV, zV), (0, Ot.l)(tt, null, le, {
```

#### 163. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1769` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1769) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1769)

```diff
-           }, uZ, fZ), (0, TB.j)(BB, null, FI, {
+           }, UV, AV), (0, Ot.l)(tt, null, fe, {
```

#### 164. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1782)

```diff
-           }, tZ, bZ), (0, TB.j)(BB, null, gI, {
+           }, BV, pV), (0, Ot.l)(tt, null, ye, {
```

#### 165. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1795)

```diff
-           }, DZ, KZ), (0, TB.j)(BB, null, yI, {
+           }, gV, sV), (0, Ot.l)(tt, null, ae, {
```

#### 166. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1808)

```diff
-           }, BT, IT), (0, TB.j)(BB, null, WI, {
+           }, eO, VO), (0, Ot.l)(tt, null, be, {
```

#### 167. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1821)

```diff
-           }, JT, oT), (0, TB.j)(BB, null, CI, {
+           }, DO, mO), (0, Ot.l)(tt, null, Ce, {
```

#### 168. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1834)

```diff
-           }, kT, cT), (0, TB.j)(BB, null, pI, {
+           }, HO, XO), (0, Ot.l)(tt, null, ce, {
```

#### 169. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1847)

```diff
-           }, QT, sT), (0, TB.j)(BB, null, HI, {
+           }, uO, KO), (0, Ot.l)(tt, null, Ie, {
```

#### 170. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1860)

```diff
-           }, YT, iT), (0, TB.j)(BB, null, jI, {
+           }, WO, SO), (0, Ot.l)(tt, null, Ze, {
```

#### 171. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1873)

```diff
-           }, HT, MT), (0, TB.j)(BB, null, RI, {
+           }, IO, PO), (0, Ot.l)(tt, null, Fe, {
```

#### 172. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1886` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1886) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1886)

```diff
-           }, RT, rT), (0, TB.j)(BB, null, mI, {
+           }, FO, kO), (0, Ot.l)(tt, null, Ge, {
```

#### 173. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1899)

```diff
-           }, LT, eT), (0, TB.j)(BB, null, LI, {
+           }, oO, rO), (0, Ot.l)(tt, null, oe, {
```

#### 174. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1912)

```diff
-           }, lT, AT), (0, TB.j)(BB, null, uI, {
+           }, iO, YO), (0, Ot.l)(tt, null, Ue, {
```

#### 175. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/265.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/265.js#L1925)

```diff
-           }, xT, ET), (0, TB.j)(BB, null, lI, {
+           }, xO, TO), (0, Ot.l)(tt, null, ie, {
```
