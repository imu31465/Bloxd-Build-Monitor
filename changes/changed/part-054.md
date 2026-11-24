# Changed — Bundle Modifications Report (Part 054 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `54 / 140` (**431** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 053](part-053.md) · [Part 055 →](part-055.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (169 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L631-L632` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L631-L632) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L631-L632)

```diff
-               const mm = hm.nB ?? hm.sensitivity ?? 1 / this.angularSensibilityX,
-                 Am = hm.JB ?? hm.sensitivity ?? 1 / this.angularSensibilityY;
+               const DD = pD.uF ?? pD.sensitivity ?? 1 / this.angularSensibilityX,
+                 sD = pD.vF ?? pD.sensitivity ?? 1 / this.angularSensibilityY;
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L653)

```diff
-           Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], xm = [(0, Am.J)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
+           zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], rD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L666)

```diff
-           }, pm, Em), (0, hm.g)(null, null, fm, {
+           }, AD, UD), (0, pD.i)(null, null, wD, {
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L679)

```diff
-           }, om, Om), (0, hm.g)(null, null, am, {
+           }, fD, ID), (0, pD.i)(null, null, KD, {
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L692)

```diff
-           }, Ym, qm), (0, hm.g)(null, null, xm, {
+           }, BD, GD), (0, pD.i)(null, null, rD, {
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L705)

```diff
-           }, jm, Vm), (0, hm.g)(null, null, wm, {
+           }, hD, nD), (0, pD.i)(null, null, LD, {
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L718` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L718) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L718)

```diff
-           }, Im, Km), (0, hm.g)(null, null, Dm, {
+           }, MD, OD), (0, pD.i)(null, null, cD, {
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L731)

```diff
-           }, Qm, nm), (0, hm.g)(null, null, im, {
+           }, JD, ED), (0, pD.i)(null, null, gD, {
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L752-L753` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L752-L753) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L752-L753)

```diff
-     Km.c.ArcRotateCameraPointersInput = cm;
-     var zm = fm(40287);
+     OD.d.ArcRotateCameraPointersInput = XD;
+     var VD = wD(40108);
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L779)

```diff
-           this.camera = (0, hm.i)(this, Ym), this.keysUp = (0, hm.i)(this, qm, [38]), this.keysDown = ((0, hm.i)(this, jm), (0, hm.i)(this, Vm, [40])), this.keysLeft = ((0, hm.i)(this, Im), (0, hm.i)(this, Km, [37])), this.keysRight = ((0, hm.i)(this, nm), (0, hm.i)(this, Jm, [39 … [truncated]
+           this.camera = (0, pD.m)(this, BD), this.keysUp = (0, pD.m)(this, GD, [38]), this.keysDown = ((0, pD.m)(this, hD), (0, pD.m)(this, nD, [40])), this.keysLeft = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, [37])), this.keysRight = ((0, pD.m)(this, ED), (0, pD.m)(this, QD, [39 … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L784)

```diff
-           }, this._rotateDirection = new xm.l, this._panDirection = new xm.l
+           }, this._rotateDirection = new rD.r, this._panDirection = new rD.r
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L809)

```diff
-           mm = Qm.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.wG(), this._engine = this._scene.dO(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           DD = JD.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Ul(), this._engine = this._scene.iI(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L858)

```diff
-         Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.J)()], Em = [(0, Am.J)()], om = [(0, Am.J)()], Om = [(0, Am.J)()], (0, hm.g)(mm, null, Om, {
+         zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], fD = [(0, sD.C)()], ID = [(0, sD.C)()], (0, pD.i)(DD, null, ID, {
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L868)

```diff
-         }, null, Ym), (0, hm.g)(null, null, Tm, {
+         }, null, BD), (0, pD.i)(null, null, zD, {
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L881)

```diff
-         }, qm, jm), (0, hm.g)(null, null, fm, {
+         }, GD, hD), (0, pD.i)(null, null, wD, {
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L894)

```diff
-         }, Vm, Im), (0, hm.g)(null, null, am, {
+         }, nD, MD), (0, pD.i)(null, null, KD, {
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L907)

```diff
-         }, Km, nm), (0, hm.g)(null, null, wm, {
+         }, OD, ED), (0, pD.i)(null, null, LD, {
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L920)

```diff
-         }, Jm, cm), (0, hm.g)(null, null, Dm, {
+         }, QD, XD), (0, pD.i)(null, null, cD, {
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L933)

```diff
-         }, Zm, km), (0, hm.g)(null, null, im, {
+         }, PD, CD), (0, pD.i)(null, null, gD, {
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L946)

```diff
-         }, bm, Sm), (0, hm.g)(null, null, Rm, {
+         }, xD, TD), (0, pD.i)(null, null, RD, {
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L959)

```diff
-         }, em, Nm), (0, hm.g)(null, null, pm, {
+         }, bD, jD), (0, pD.i)(null, null, AD, {
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L972)

```diff
-         }, Gm, Xm), (0, hm.g)(null, null, Em, {
+         }, dD, SD), (0, pD.i)(null, null, UD, {
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L985)

```diff
-         }, Pm, Hm), (0, hm.g)(null, null, om, {
+         }, iD, lD), (0, pD.i)(null, null, fD, {
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1006-L1008` → after: `L1006-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1006-L1008) · [Before (L1006-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1006-L1008)

```diff
-     Km.c.ArcRotateCameraKeyboardMoveInput = Zm;
-     var km = fm(37821),
-       bm = fm(40292);
+     OD.d.ArcRotateCameraKeyboardMoveInput = PD;
+     var CD = wD(37754),
+       xD = wD(40115);
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1019)

```diff
-           this.wheelPrecision = (0, hm.i)(this, Dm, 3), this.zoomToMouseLocation = ((0, hm.i)(this, im), (0, hm.i)(this, pm, !1)), this.wheelDeltaPercentage = ((0, hm.i)(this, om), (0, hm.i)(this, Om, 0)), this.customComputeDeltaFromMouseWheel = ((0, hm.i)(this, Ym), null), this. … [truncated]
+           this.wheelPrecision = (0, pD.m)(this, cD, 3), this.zoomToMouseLocation = ((0, pD.m)(this, gD), (0, pD.m)(this, AD, !1)), this.wheelDeltaPercentage = ((0, pD.m)(this, fD), (0, pD.m)(this, ID, 0)), this.customComputeDeltaFromMouseWheel = ((0, pD.m)(this, BD), null), this. … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1031)

```diff
-             const Am = fm.deltaMode === bm.c.DOM_DELTA_LINE ? 40 : 1,
+             const sD = wD.deltaMode === xD.e.DOM_DELTA_LINE ? 40 : 1,
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1047)

```diff
-           }, this._observer = this.camera.wG()._inputManager._addCameraPointerObserver(this._wheel, Rm.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Y5(0)
+           }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._wheel, RD.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.I9(0)
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1050)

```diff
-           this._observer && (this.camera.wG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+           this._observer && (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1058)

```diff
-             this._inertialPanning.scaleInPlace(Tm), this._zoomToMouseRadiusOffset *= Tm, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Em.c && (this._zoomToMouseRadiusOffset = 0)
+             this._inertialPanning.scaleInPlace(zD), this._zoomToMouseRadiusOffset *= zD, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < UD.b && (this._zoomToMouseRadiusOffset = 0)
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1070` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1070) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1070)

```diff
-           this._hitPlane = km.d.FromPositionAndNormal(mm.target, Tm)
+           this._hitPlane = CD.e.FromPositionAndNormal(DD.target, zD)
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1074` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1074) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1074)

```diff
-             Tm = mm.wG(),
+             zD = DD.Ul(),
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1076)

```diff
-           0 === mm.targetScreenOffset.x && 0 === mm.targetScreenOffset.y || (this._viewOffset.set(mm.targetScreenOffset.x, mm.targetScreenOffset.y, 0), mm.getViewMatrix().invertToRef(mm._cameraTransformMatrix), this._globalOffset = xm.p.TransformNormal(this._viewOffset, mm._camer … [truncated]
+           0 === DD.targetScreenOffset.x && 0 === DD.targetScreenOffset.y || (this._viewOffset.set(DD.targetScreenOffset.x, DD.targetScreenOffset.y, 0), DD.getViewMatrix().invertToRef(DD._cameraTransformMatrix), this._globalOffset = rD.s.TransformNormal(this._viewOffset, DD._camer … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1094)

```diff
-             wm = xm.j.WO[6];
+             LD = rD.n.WI[6];
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1098)

```diff
-           Math.abs(mm.x) < Em.c && (mm.x = 0), Math.abs(mm.y) < Em.c && (mm.y = 0), Math.abs(mm.z) < Em.c && (mm.z = 0)
+           Math.abs(DD.x) < UD.b && (DD.x = 0), Math.abs(DD.y) < UD.b && (DD.y = 0), Math.abs(DD.z) < UD.b && (DD.z = 0)
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1102)

```diff
-         Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
+         zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1115)

```diff
-         }, Dm, im), (0, hm.g)(null, null, fm, {
+         }, cD, gD), (0, pD.i)(null, null, wD, {
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1128` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1128) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1128)

```diff
-         }, pm, om), (0, hm.g)(null, null, am, {
+         }, AD, fD), (0, pD.i)(null, null, KD, {
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1149-L1151` → after: `L1149-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1149-L1151) · [Before (L1149-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1149-L1151)

```diff
-     Km.c.ArcRotateCameraMouseWheelInput = Sm;
-     var em, Nm, Gm = fm(39993);
-     class Xm extends Km.g {
+     OD.d.ArcRotateCameraMouseWheelInput = TD;
+     var bD, jD, dD = wD(39808);
+     class SD extends OD.h {
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1164-L1168` → after: `L1164-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1164-L1168) · [Before (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1164-L1168)

```diff
-     }(em = Xm.prototype).addVRDeviceOrientation ?? (em.addVRDeviceOrientation = (0, Gm.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Nm = Xm.prototype).addGamepad ?? (Nm.addGamepad = (0, Gm.f)("ArcRotateCameraInputsManager", "addGamepad"));
-     var Pm = fm(37224),
-       Hm = fm(40334),
-       ym = fm(40337);
-     class Cm extends Hm.e {
+     }(bD = SD.prototype).addVRDeviceOrientation ?? (bD.addVRDeviceOrientation = (0, dD.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (jD = SD.prototype).addGamepad ?? (jD.addGamepad = (0, dD.h)("ArcRotateCameraInputsManager", "addGamepad"));
+     var iD = wD(37134),
+       lD = wD(40162),
+       WD = wD(40171);
+     class ND extends lD.b {
```

#### 78. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1170)

```diff
-         super(mm, Tm, fm), this.input = new ym.b({
+         super(DD, zD, wD), this.input = new WD.d({
```

#### 79. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1225)

```diff
-       return isNaN(mm) ? Tm : mm
+       return isNaN(DD) ? zD : DD
```

#### 80. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1279)

```diff
-             return this.vW
+             return this.bq
```

#### 81. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1300)

```diff
-             this._upToYMatrix || (this._yToUpMatrix = new xm.e, this._upToYMatrix = new xm.e, this._upVector = xm.p.Zero()), mm.normalize(), this._upVector.ZZ(mm), this.setMatUp()
+             this._upToYMatrix || (this._yToUpMatrix = new rD.e, this._upToYMatrix = new rD.e, this._upVector = rD.s.Zero()), DD.normalize(), this._upVector.pC(DD), this.setMatUp()
```

#### 82. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1306)

```diff
-             xm.e.RotationAlignToRef(xm.p.UpReadOnly, this._upVector, this._yToUpMatrix), xm.e.RotationAlignToRef(this._upVector, xm.p.UpReadOnly, this._upToYMatrix)
+             rD.e.RotationAlignToRef(rD.s.UpReadOnly, this._upVector, this._yToUpMatrix), rD.e.RotationAlignToRef(this._upVector, rD.s.UpReadOnly, this._upToYMatrix)
```

#### 83. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1526)

```diff
-             super(mm, xm.p.Zero(), Dm, Rm), im = this, this.alpha = ((0, hm.i)(this, Um), (0, hm.i)(this, dm, void 0)), this.beta = ((0, hm.i)(this, gm), (0, hm.i)(this, Wm, void 0)), this.radius = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
+             super(DD, rD.s.Zero(), cD, RD), gD = this, this.alpha = ((0, pD.m)(this, vD), (0, pD.m)(this, tD, void 0)), this.beta = ((0, pD.m)(this, FD), (0, pD.m)(this, YD, void 0)), this.radius = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1528)

```diff
-               fm ? (im.setPosition(Tm), im.cE && im.cE(fm)) : im._previousPosition.ZZ(im._position);
+               wD ? (gD.setPosition(zD), gD.GU && gD.GU(wD)) : gD._previousPosition.pC(gD._position);
```

#### 85. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1535)

```diff
-               im._computationVector.Z8(im.radius * hm * xm, im.radius * am, im.radius * Am * xm), wm.addToRef(im._computationVector, im._newPosition), im._position.ZZ(im._newPosition);
+               gD._computationVector.Z2(gD.radius * pD * rD, gD.radius * KD, gD.radius * sD * rD), LD.addToRef(gD._computationVector, gD._newPosition), gD._position.pC(gD._newPosition);
```

#### 86. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1537-L1538` → after: `L1537-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1537-L1538) · [Before (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1537-L1538)

```diff
-               im.allowUpsideDown && im.beta < 0 && (Dm = Dm.clone(), Dm = Dm.GA()), im._computeViewMatrix(im._position, wm, Dm), im._viewMatrix.addAtIndex(12, im.targetScreenOffset.x), im._viewMatrix.addAtIndex(13, im.targetScreenOffset.y), im._collisionTriggered = !1
-             }, this.vW = xm.p.Zero(), wm && this.setTarget(wm), this.alpha = Tm, this.beta = fm, this.radius = Am, this.getViewMatrix(), this.inputs = new Xm(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Cm(this.wG(), this._position), this.mo … [truncated]
+               gD.allowUpsideDown && gD.beta < 0 && (cD = cD.clone(), cD = cD.ep()), gD._computeViewMatrix(gD._position, LD, cD), gD._viewMatrix.addAtIndex(12, gD.targetScreenOffset.x), gD._viewMatrix.addAtIndex(13, gD.targetScreenOffset.y), gD._collisionTriggered = !1
+             }, this.bq = rD.s.Zero(), LD && this.setTarget(LD), this.alpha = zD, this.beta = wD, this.radius = sD, this.getViewMatrix(), this.inputs = new SD(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new ND(this.Ul(), this._position), this.mo … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1541)

```diff
-             super._initCache(), this._cache.vW = new xm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = xm.l.Zero()
+             super._initCache(), this._cache.bq = new rD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = rD.r.Zero()
```

#### 88. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1544` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1544) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1544)

```diff
-             mm || super._updateCache(), this._cache.vW.ZZ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.ZZ(this.targetScreenOffset)
+             DD || super._updateCache(), this._cache.bq.pC(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.pC(this.targetScreenOffset)
```

#### 89. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1549)

```diff
-               this._targetBoundingCenter ? mm.addToRef(this._targetBoundingCenter, this.vW) : this.vW.ZZ(mm)
+               this._targetBoundingCenter ? DD.addToRef(this._targetBoundingCenter, this.bq) : this.bq.pC(DD)
```

#### 90. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1552` → after: `L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1552) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1552)

```diff
-             return mm || this.vW
+             return DD || this.bq
```

#### 91. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1558)

```diff
-             return this.hasStateStored() && this.restoreStateInterpolationFactor > Em.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
+             return this.hasStateStored() && this.restoreStateInterpolationFactor > UD.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1570)

```diff
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != am ? this._currentInterpolationFactor = am : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != KD ? this._currentInterpolationFactor = KD : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1573` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1573) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1573)

```diff
-             return !!super._isSynchronizedViewMatrix() && (this._cache.vW.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+             return !!super._isSynchronizedViewMatrix() && (this._cache.bq.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1592-L1593` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1592-L1593) · [Before (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1592-L1593)

```diff
-             const fm = xm.j.WO[0].Z8(mm, Tm, Tm);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), fm.multiplyInPlace(this.panningAxis), xm.p.TransformNormalToRef(fm, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+             const wD = rD.n.WI[0].Z2(DD, zD, zD);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), wD.multiplyInPlace(this.panningAxis), rD.s.TransformNormalToRef(wD, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
```

#### 95. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1595-L1596` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1595-L1596) · [Before (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1595-L1596)

```diff
-                 Tm = xm.p.CrossToRef(this._transformedDirection, mm, this._transformedDirection);
-               xm.p.CrossToRef(mm, Tm, this._transformedDirection)
+                 zD = rD.s.CrossToRef(this._transformedDirection, DD, this._transformedDirection);
+               rD.s.CrossToRef(DD, zD, this._transformedDirection)
```

#### 96. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1600-L1601` → after: `L1600-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1600-L1601) · [Before (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1600-L1601)

```diff
-                 this._transformedDirection.addInPlace(this.vW);
-                 xm.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.vW.ZZ(this._transformedDirection)
+                 this._transformedDirection.addInPlace(this.bq);
+                 rD.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.bq.pC(this._transformedDirection)
```

#### 97. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1604-L1605` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1604-L1605) · [Before (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1604-L1605)

```diff
-                   const mm = xm.j.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(mm), mm.transposeToRef(mm), xm.p.TransformCoordinatesToRef(this._transformedDirection, mm, this._transformedDirection)
+                   const DD = rD.n.Matrix[0];
+                   this.parent.getWorldMatrix().getRotationMatrixToRef(DD), DD.transposeToRef(DD), rD.s.TransformCoordinatesToRef(this._transformedDirection, DD, this._transformedDirection)
```

#### 98. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1607)

```diff
-                 this.vW.addInPlace(this._transformedDirection)
+                 this.bq.addInPlace(this._transformedDirection)
```

#### 99. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1626)

```diff
-               const Tm = this._scene.dO().getDeltaTime() / 1e3,
+               const zD = this._scene.iI().getDeltaTime() / 1e3,
```

#### 100. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1630-L1631)

```diff
-                 const Tm = xm.j.WO[0].set(rm(this._goalTarget.x, this.vW.x), rm(this._goalTarget.y, this.vW.y), rm(this._goalTarget.z, this.vW.z));
-                 xm.p.LerpToRef(this.target, Tm, fm, this.vW), 10 * xm.p.Distance(this.target, Tm) / hm < Em.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.ZZ(Tm), this.setTarget(this.target, !1, !0, !0)) : mm = !0
+                 const zD = rD.n.WI[0].set(ZD(this._goalTarget.x, this.bq.x), ZD(this._goalTarget.y, this.bq.y), ZD(this._goalTarget.z, this.bq.z));
+                 rD.s.LerpToRef(this.target, zD, wD, this.bq), 10 * rD.s.Distance(this.target, zD) / pD < UD.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.pC(zD), this.setTarget(this.target, !1, !0, !0)) : DD = !0
```

#### 101. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1634-L1636` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1634-L1636) · [Before (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1634-L1636)

```diff
-                 const Tm = xm.h.RotationAlphaBetaGammaToRef(rm(this._goalAlpha, this.alpha), rm(this._goalBeta, this.beta), 0, xm.j.Quaternion[0]),
-                   hm = xm.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, xm.j.Quaternion[1]),
-                   Am = xm.h.SlerpToRef(hm, Tm, fm, xm.j.Quaternion[2]);
+                 const zD = rD.i.RotationAlphaBetaGammaToRef(ZD(this._goalAlpha, this.alpha), ZD(this._goalBeta, this.beta), 0, rD.n.Quaternion[0]),
+                   pD = rD.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, rD.n.Quaternion[1]),
+                   sD = rD.i.SlerpToRef(pD, zD, wD, rD.n.Quaternion[2]);
```

#### 102. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1638-L1639` → after: `L1638-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1638-L1639) · [Before (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1638-L1639)

```diff
-                 const am = Am.toAlphaBetaGammaToRef(xm.j.WO[0]);
-                 if (this.alpha = am.x, this.beta = am.y, Am.isApprox(Tm, Em.c / 5)) {
+                 const KD = sD.toAlphaBetaGammaToRef(rD.n.WI[0]);
+                 if (this.alpha = KD.x, this.beta = KD.y, sD.isApprox(zD, UD.b / 5)) {
```

#### 103. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1641)

```diff
-                   const mm = Tm.toAlphaBetaGammaToRef(xm.j.WO[0]);
+                   const DD = zD.toAlphaBetaGammaToRef(rD.n.WI[0]);
```

#### 104. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1645-L1647` → after: `L1645-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1645-L1647) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (hm - this.radius) * fm, Math.abs(hm / this.radius - 1) < Em.c ? (this._goalRadius = NaN, this.radius = hm) : mm = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const Tm = xm.j.Vector2[0].set(rm(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), rm(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 xm.l.LerpToRef(this.targetScreenOffset, Tm, fm, this.targetScreenOffset), xm.l.Distance(this.targetScreenOffset, Tm) < Em.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.ZZ(Tm)) : mm = !0
+               if (isNaN(this._goalRadius) || (this.radius += (pD - this.radius) * wD, Math.abs(pD / this.radius - 1) < UD.b ? (this._goalRadius = NaN, this.radius = pD) : DD = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
+                 const zD = rD.n.Vector2[0].set(ZD(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), ZD(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
+                 rD.r.LerpToRef(this.targetScreenOffset, zD, wD, this.targetScreenOffset), rD.r.Distance(this.targetScreenOffset, zD) < UD.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.pC(zD)) : DD = !0
```

#### 105. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1657)

```diff
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xm.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || rD.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1668` → after: `L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1668) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1668)

```diff
-             this._position.equals(mm) || (this._position.ZZ(mm), this.rebuildAnglesAndRadius())
+             this._position.equals(DD) || (this._position.pC(DD), this.rebuildAnglesAndRadius())
```

#### 107. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1674)

```diff
-             if (hm = this.overrideCloneAlphaBetaRadius ?? hm, mm.computeWorldMatrix) Tm && mm.DH ? this._targetBoundingCenter = mm.DH().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, mm.computeWorldMatrix(), this._targetHost = mm, this.vW = this._getTargetPo … [truncated]
+             if (pD = this.overrideCloneAlphaBetaRadius ?? pD, DD.computeWorldMatrix) zD && DD.FW ? this._targetBoundingCenter = DD.FW().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, DD.computeWorldMatrix(), this._targetHost = DD, this.bq = this._getTargetPo … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1679)

```diff
-               this._targetHost = null, this.vW = Tm, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
+               this._targetHost = null, this.bq = zD, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
```

#### 109. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1690-L1691` → after: `L1690-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1690-L1691) · [Before (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1690-L1691)

```diff
-             if (this._computationVector.Z8(this.radius * mm * hm, this.radius * fm, this.radius * Tm * hm), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xm.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
-               const mm = this.wG().collisionCoordinator;
+             if (this._computationVector.Z2(this.radius * DD * pD, this.radius * wD, this.radius * zD * pD), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || rD.s.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
+               const DD = this.Ul().collisionCoordinator;
```

#### 110. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1694)

```diff
-               this._position.ZZ(this._newPosition);
+               this._position.pC(this._newPosition);
```

#### 111. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1696)

```diff
-               this.allowUpsideDown && hm < 0 && (mm = mm.GA()), this._computeViewMatrix(this._position, Am, mm), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
+               this.allowUpsideDown && pD < 0 && (DD = DD.ep()), this._computeViewMatrix(this._position, sD, DD), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
```

#### 112. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1698` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1698) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1698)

```diff
-             return this._currentTarget.ZZ(Am), this._viewMatrix
+             return this._currentTarget.pC(sD), this._viewMatrix
```

#### 113. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1702-L1703` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1702-L1703) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1702-L1703)

```diff
-             mm = mm || this.wG().meshes;
-             const fm = im.d.MinMax(mm);
+             DD = DD || this.Ul().meshes;
+             const wD = gD.e.MinMax(DD);
```

#### 114. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1705-L1706)

```diff
-             if (hm = Math.max(Math.min(hm, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = hm * this.zoomOnFactor, this.mode === Vm.b.ORTHOGRAPHIC_CAMERA) {
-               const mm = this.wG().dO().getAspectRatio(this),
+             if (pD = Math.max(Math.min(pD, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = pD * this.zoomOnFactor, this.mode === nD.c.ORTHOGRAPHIC_CAMERA) {
+               const DD = this.Ul().iI().getAspectRatio(this),
```

#### 115. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1719-L1720` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1719-L1720) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1719-L1720)

```diff
-               const hm = mm || this.wG().meshes;
-               Tm = im.d.MinMax(hm), fm = xm.p.Distance(Tm.min, Tm.max)
+               const pD = DD || this.Ul().meshes;
+               zD = gD.e.MinMax(pD), wD = rD.s.Distance(zD.min, zD.max)
```

#### 116. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1724)

```diff
-             this.vW = im.d.Center(Tm), hm || (this.maxZ = 2 * fm)
+             this.bq = gD.e.Center(zD), pD || (this.maxZ = 2 * wD)
```

#### 117. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1729-L1733` → after: `L1729-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1729-L1733) · [Before (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1729-L1733)

```diff
-               case Vm.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Vm.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Vm.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Vm.b.RIG_MODE_VR:
+               case nD.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case nD.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case nD.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case nD.c.RIG_MODE_VR:
```

#### 118. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1736)

```diff
-               case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 119. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1739)

```diff
-             const Am = new mm(Tm, this.alpha + hm, this.beta, this.radius, this.vW, this.wG());
+             const sD = new DD(zD, this.alpha + pD, this.beta, this.radius, this.bq, this.Ul());
```

#### 120. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1746-L1750` → after: `L1746-L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1746-L1750) · [Before (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1746-L1750)

```diff
-               case Vm.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case Vm.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case Vm.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case Vm.b.RIG_MODE_VR:
+               case nD.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case nD.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case nD.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case nD.c.RIG_MODE_VR:
```

#### 121. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1753)

```diff
-               case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 122. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1760-L1761)

```diff
-             const hm = xm.p.Distance(mm, Tm),
-               Am = this.wG().dO().getAspectRatio(this),
+             const pD = rD.s.Distance(DD, zD),
+               sD = this.Ul().iI().getAspectRatio(this),
```

#### 123. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1777)

```diff
-           Tm = [(0, Am.J)()], fm = [(0, Am.J)()], Dm = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.F)("target")], Om = [(0, Am.v)("targetHost")], Ym = [(0, Am.J)()], Km = [(0, Am.J)()], nm = [(0, Am.J)()], Jm = [(0, Am.J)()], cm = [(0, Am.J)()], zm = [(0, Am.J)()], Zm = [(0,  … [truncated]
+           zD = [(0, sD.C)()], wD = [(0, sD.C)()], cD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.B)("target")], ID = [(0, sD.q)("targetHost")], BD = [(0, sD.C)()], OD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.C)()], XD = [(0, sD.C)()], VD = [(0, sD.C)()], PD = [(0,  … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1787)

```diff
-           }, null, Um), (0, hm.g)(mm, null, Km, {
+           }, null, vD), (0, pD.i)(DD, null, OD, {
```

#### 125. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1797)

```diff
-           }, null, Um), (0, hm.g)(mm, null, nm, {
+           }, null, vD), (0, pD.i)(DD, null, ED, {
```

#### 126. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1807)

```diff
-           }, null, Um), (0, hm.g)(mm, null, ym, {
+           }, null, vD), (0, pD.i)(DD, null, WD, {
```

#### 127. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1817)

```diff
-           }, null, Um), (0, hm.g)(mm, null, sm, {
+           }, null, vD), (0, pD.i)(DD, null, yD, {
```

#### 128. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1827)

```diff
-           }, null, Um), (0, hm.g)(null, null, Tm, {
+           }, null, vD), (0, pD.i)(null, null, zD, {
```

#### 129. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1840)

```diff
-           }, dm, gm), (0, hm.g)(null, null, fm, {
+           }, tD, FD), (0, pD.i)(null, null, wD, {
```

#### 130. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1853)

```diff
-           }, Wm, Fm), (0, hm.g)(null, null, Dm, {
+           }, YD, HD), (0, pD.i)(null, null, cD, {
```

#### 131. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1866` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1866) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1866)

```diff
-           }, mT, TT), (0, hm.g)(null, null, Rm, {
+           }, qD, Dz), (0, pD.i)(null, null, RD, {
```

#### 132. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1879)

```diff
-           }, fT, hT), (0, hm.g)(null, null, pm, {
+           }, zz, wz), (0, pD.i)(null, null, AD, {
```

#### 133. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1881)

```diff
-             name: "vW",
+             name: "bq",
```

#### 134. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1885-L1886)

```diff
-               has: mm => "vW" in mm,
-               get: mm => mm.vW,
+               has: DD => "bq" in DD,
+               get: DD => DD.bq,
```

#### 135. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1888)

```diff
-                 mm.vW = Tm
+                 DD.bq = zD
```

#### 136. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1892` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1892) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1892)

```diff
-           }, AT, aT), (0, hm.g)(null, null, Om, {
+           }, pz, sz), (0, pD.i)(null, null, ID, {
```

#### 137. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1905)

```diff
-           }, xT, wT), (0, hm.g)(null, null, Jm, {
+           }, Kz, rz), (0, pD.i)(null, null, QD, {
```

#### 138. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1918)

```diff
-           }, DT, iT), (0, hm.g)(null, null, cm, {
+           }, Lz, cz), (0, pD.i)(null, null, XD, {
```

#### 139. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1931` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1931) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1931)

```diff
-           }, RT, pT), (0, hm.g)(null, null, zm, {
+           }, gz, Rz), (0, pD.i)(null, null, VD, {
```

#### 140. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1944)

```diff
-           }, ET, oT), (0, hm.g)(null, null, Zm, {
+           }, Az, Uz), (0, pD.i)(null, null, PD, {
```

#### 141. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1957)

```diff
-           }, OT, YT), (0, hm.g)(null, null, km, {
+           }, fz, Iz), (0, pD.i)(null, null, CD, {
```

#### 142. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1970)

```diff
-           }, qT, jT), (0, hm.g)(null, null, bm, {
+           }, Bz, Gz), (0, pD.i)(null, null, xD, {
```

#### 143. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1983)

```diff
-           }, VT, IT), (0, hm.g)(null, null, Sm, {
+           }, hz, nz), (0, pD.i)(null, null, TD, {
```

#### 144. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L1996)

```diff
-           }, KT, QT), (0, hm.g)(null, null, em, {
+           }, Mz, Oz), (0, pD.i)(null, null, bD, {
```

#### 145. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2009)

```diff
-           }, nT, JT), (0, hm.g)(null, null, Nm, {
+           }, Jz, Ez), (0, pD.i)(null, null, jD, {
```

#### 146. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2022)

```diff
-           }, cT, zT), (0, hm.g)(null, null, Gm, {
+           }, Qz, Xz), (0, pD.i)(null, null, dD, {
```

#### 147. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2035)

```diff
-           }, ZT, kT), (0, hm.g)(null, null, Pm, {
+           }, Vz, Pz), (0, pD.i)(null, null, iD, {
```

#### 148. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2048` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2048) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2048)

```diff
-           }, bT, ST), (0, hm.g)(null, null, Hm, {
+           }, Cz, xz), (0, pD.i)(null, null, lD, {
```

#### 149. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2061)

```diff
-           }, eT, NT), (0, hm.g)(null, null, lm, {
+           }, Tz, bz), (0, pD.i)(null, null, kD, {
```

#### 150. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2074)

```diff
-           }, GT, XT), (0, hm.g)(null, null, Mm, {
+           }, jz, dz), (0, pD.i)(null, null, mD, {
```

#### 151. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2087)

```diff
-           }, PT, HT), (0, hm.g)(null, null, um, {
+           }, Sz, iz), (0, pD.i)(null, null, eD, {
```

#### 152. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2100)

```diff
-           }, yT, CT), (0, hm.g)(null, null, Bm, {
+           }, lz, Wz), (0, pD.i)(null, null, oD, {
```

#### 153. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2113)

```diff
-           }, rT, sT), (0, hm.g)(null, null, Lm, {
+           }, Nz, Zz), (0, pD.i)(null, null, aD, {
```

#### 154. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2135)

```diff
-     lm || (lm = !0, Dm.c.AddNodeConstructor("ArcRotateCamera", ((mm, Tm) => () => new sm(mm, 0, 0, 1, xm.p.Zero(), Tm))), (0, Pm.d)("BABYLON.ArcRotateCamera", sm))
+     kD || (kD = !0, cD.b.AddNodeConstructor("ArcRotateCamera", ((DD, zD) => () => new yD(DD, 0, 0, 1, rD.s.Zero(), zD))), (0, iD.i)("BABYLON.ArcRotateCamera", yD))
```

#### 155. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2137)

```diff
-   40344: (mm, Tm, fm) => {
+   40183: (DD, zD, wD) => {
```

#### 156. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2139)

```diff
-       c: () => hm.e
+       e: () => pD.d
```

#### 157. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2141` → after: `L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2141) · [Before (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2141)

```diff
-     var hm = fm(40347);
+     var pD = wD(40186);
```

#### 158. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2144)

```diff
-   40347: (mm, Tm, fm) => {
+   40186: (DD, zD, wD) => {
```

#### 159. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2146)

```diff
-       e: () => Rm,
+       d: () => RD,
```

#### 160. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2149-L2155` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2149-L2155) · [Before (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2149-L2155)

```diff
-     var hm = fm(40113),
-       Am = fm(40119),
-       am = fm(37185),
-       xm = fm(37336),
-       wm = fm(40355),
-       Dm = fm(40326),
-       im = fm(37224);
+     var pD = wD(39921),
+       sD = wD(39927),
+       KD = wD(37079),
+       rD = wD(37273),
+       LD = wD(40189),
+       cD = wD(40155),
+       gD = wD(37134);
```

#### 161. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2158)

```diff
-         let Tm, fm, Dm = wm.e,
+         let zD, wD, cD = LD.c,
```

#### 162. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2165)

```diff
-             super(mm, fm, Am), this.groundColor = (0, hm.i)(this, im, new xm.b(0, 0, 0)), this.direction = ((0, hm.i)(this, Rm), (0, hm.i)(this, pm, void 0)), (0, hm.i)(this, Em), this.direction = Tm || am.p.Up()
+             super(DD, wD, sD), this.groundColor = (0, pD.m)(this, gD, new rD.d(0, 0, 0)), this.direction = ((0, pD.m)(this, RD), (0, pD.m)(this, AD, void 0)), (0, pD.m)(this, UD), this.direction = zD || KD.s.Up()
```

#### 163. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2174)

```diff
-             return this.direction = am.p.Normalize(mm.subtract(am.p.Zero())), this.direction
+             return this.direction = KD.s.Normalize(DD.subtract(KD.s.Zero())), this.direction
```

#### 164. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2180)

```diff
-             const fm = am.p.Normalize(this.direction);
+             const wD = KD.s.Normalize(this.direction);
```

#### 165. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2184)

```diff
-             const fm = am.p.Normalize(this.direction);
+             const wD = KD.s.Normalize(this.direction);
```

#### 166. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2191)

```diff
-             return wm.e.LIGHTTYPEID_HEMISPHERICLIGHT
+             return LD.c.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 167. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2198)

```diff
-           Tm = [(0, Am.k)()], fm = [(0, Am.F)()], (0, hm.g)(null, null, Tm, {
+           zD = [(0, sD.k)()], wD = [(0, sD.B)()], (0, pD.i)(null, null, zD, {
```

#### 168. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2211)

```diff
-           }, im, Rm), (0, hm.g)(null, null, fm, {
+           }, gD, RD), (0, pD.i)(null, null, wD, {
```

#### 169. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/260.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/260.js#L2235)

```diff
-       pm || (pm = !0, Dm.c.AddNodeConstructor("Light_Type_3", ((mm, Tm) => () => new Rm(mm, am.p.Zero(), Tm))), (0, im.d)("BABYLON.HemisphericLight", Rm))
+       AD || (AD = !0, cD.b.AddNodeConstructor("Light_Type_3", ((DD, zD) => () => new RD(DD, KD.s.Zero(), zD))), (0, gD.i)("BABYLON.HemisphericLight", RD))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (249 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40498: (mm, Tm, fm) => {
+   40322: (DD, zD, wD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L6)

```diff
-       c: () => Am
+       b: () => sD
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L8)

```diff
-     var hm = fm(40122);
+     var pD = wD(39930);
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L32)

```diff
-           mm !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !mm && this.wG ? this._imageProcessingConfiguration = this.w … [truncated]
+           DD !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !DD && this.Ul ? this._imageProcessingConfiguration = this.U … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L81)

```diff
-   40371: (mm, Tm, fm) => {
+   40211: (DD, zD, wD) => {
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L83)

```diff
-       c: () => am,
+       b: () => KD,
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L86)

```diff
-     var hm = fm(40379);
+     var pD = wD(40217);
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L95)

```diff
-     class am extends hm.c {
+     class KD extends pD.d {
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L101)

```diff
-   40453: (mm, Tm, fm) => {
+   40285: (DD, zD, wD) => {
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L103)

```diff
-       d: () => pm
+       b: () => AD
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L105-L112` → after: `L105-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L105-L112) · [Before (L105-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L105-L112)

```diff
-     var hm = fm(40113),
-       Am = fm(40383),
-       am = fm(40119),
-       xm = fm(40440),
-       wm = fm(40379),
-       Dm = fm(40458),
-       im = fm(40428);
-     class Rm extends wm.c {
+     var pD = wD(39921),
+       sD = wD(40220),
+       KD = wD(39927),
+       rD = wD(40266),
+       LD = wD(40217),
+       cD = wD(40291),
+       gD = wD(40254);
+     class RD extends LD.d {
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L119)

```diff
-       let pm, Em, om, Om, Ym, qm, jm = Dm.e,
+       let AD, UD, fD, ID, BD, GD, hD = cD.c,
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L134)

```diff
-           return (0, hm.b)(this, Tm, "f")
+           return (0, pD.c)(this, zD, "f")
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L137)

```diff
-           (0, hm.c)(this, Tm, mm, "f")
+           (0, pD.g)(this, zD, DD, "f")
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L140)

```diff
-           return (0, hm.b)(this, fm, "f")
+           return (0, pD.c)(this, wD, "f")
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L143)

```diff
-           (0, hm.c)(this, fm, mm, "f")
+           (0, pD.g)(this, wD, DD, "f")
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L146)

```diff
-           return (0, hm.b)(this, wm, "f")
+           return (0, pD.c)(this, LD, "f")
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L149)

```diff
-           (0, hm.c)(this, wm, mm, "f")
+           (0, pD.g)(this, LD, DD, "f")
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L159)

```diff
-           super(mm, "DetailMap", 140, new Rm, am), this._texture = null, Tm.set(this, (0, hm.i)(this, Vm, void 0)), this.diffuseBlendLevel = ((0, hm.i)(this, Im), (0, hm.i)(this, Km, 1)), this.roughnessBlendLevel = ((0, hm.i)(this, Qm), (0, hm.i)(this, nm, 1)), this.bumpLevel = ( … [truncated]
+           super(DD, "DetailMap", 140, new RD, KD), this._texture = null, zD.set(this, (0, pD.m)(this, nD, void 0)), this.diffuseBlendLevel = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, 1)), this.roughnessBlendLevel = ((0, pD.m)(this, JD), (0, pD.m)(this, ED, 1)), this.bumpLevel = ( … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L167-L168` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L167-L168) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L167-L168)

```diff
-             const fm = Tm.dO();
-             mm._areTexturesDirty && (fm.getCaps().standardDerivatives && this._texture && xm.d.DetailTextureEnabled && this._isEnabled ? ((0, im.$)(this._texture, mm, "DETAIL"), mm.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : mm.DETAIL = !1)
+             const wD = zD.iI();
+             DD._areTexturesDirty && (wD.getCaps().standardDerivatives && this._texture && rD.d.DetailTextureEnabled && this._isEnabled ? ((0, gD.eb)(this._texture, DD, "DETAIL"), DD.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : DD.DETAIL = !1)
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L174)

```diff
-           mm.useUbo && fm && mm.isSync || this._texture && xm.d.DetailTextureEnabled && (mm.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, im.x)(this._texture, mm, "detail")), Tm.texturesEnabled  … [truncated]
+           DD.useUbo && wD && DD.isSync || this._texture && rD.d.DetailTextureEnabled && (DD.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, gD.z)(this._texture, DD, "detail")), zD.texturesEnabled  … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L209)

```diff
-         pm = [(0, am.A)("detailTexture"), (0, am.c)("_markAllSubMeshesAsTexturesDirty")], Em = [(0, am.J)()], om = [(0, am.J)()], Om = [(0, am.J)()], Ym = [(0, am.J)(), (0, am.c)("_markAllSubMeshesAsTexturesDirty")], qm = [(0, am.J)(), (0, am.c)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+         AD = [(0, KD.w)("detailTexture"), (0, KD.e)("_markAllSubMeshesAsTexturesDirty")], UD = [(0, KD.C)()], fD = [(0, KD.C)()], ID = [(0, KD.C)()], BD = [(0, KD.C)(), (0, KD.e)("_markAllSubMeshesAsTexturesDirty")], GD = [(0, KD.C)(), (0, KD.e)("_markAllSubMeshesAsTexturesDirty" … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L222)

```diff
-         }, Vm, Im), (0, hm.g)(mm, null, Ym, {
+         }, nD, MD), (0, pD.i)(DD, null, BD, {
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L235)

```diff
-         }, Zm, km), (0, hm.g)(mm, null, qm, {
+         }, PD, CD), (0, pD.i)(DD, null, GD, {
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L248)

```diff
-         }, bm, Sm), (0, hm.g)(null, null, Em, {
+         }, xD, TD), (0, pD.i)(null, null, UD, {
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L261)

```diff
-         }, Km, Qm), (0, hm.g)(null, null, om, {
+         }, OD, JD), (0, pD.i)(null, null, fD, {
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L274)

```diff
-         }, nm, Jm), (0, hm.g)(null, null, Om, {
+         }, ED, QD), (0, pD.i)(null, null, ID, {
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L296)

```diff
-   40379: (mm, Tm, fm) => {
+   40217: (DD, zD, wD) => {
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L298)

```diff
-       c: () => hm
+       d: () => pD
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L395)

```diff
-   40483: (mm, Tm, fm) => {
+   40307: (DD, zD, wD) => {
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L397-L399` → after: `L397-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L397-L399) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L397-L399)

```diff
-       c: () => wm,
-       f: () => xm,
-       j: () => am
+       d: () => LD,
+       h: () => rD,
+       k: () => KD
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L401)

```diff
-     var hm, Am = fm(37185);
+     var pD, sD = wD(37079);
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L406)

```diff
-       if (!Number.isInteger(hm) || hm < 0 || hm > fm) throw new Error(`Invalid geometry object ID ${hm} for mesh "${mm.name}". Object IDs must be integers between 0 and 0x${fm.toString(16).toUpperCase()}.`);
+       if (!Number.isInteger(pD) || pD < 0 || pD > wD) throw new Error(`Invalid geometry object ID ${pD} for mesh "${DD.name}". Object IDs must be integers between 0 and 0x${wD.toString(16).toUpperCase()}.`);
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L412)

```diff
-       if (!Number.isInteger(fm) || fm < 0 || fm > 255 || 0 !== fm && 0 === (63 & fm)) throw new Error(`Invalid geometry mesh-blending tag ${fm} for mesh "${mm.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       if (!Number.isInteger(wD) || wD < 0 || wD > 255 || 0 !== wD && 0 === (63 & wD)) throw new Error(`Invalid geometry mesh-blending tag ${wD} for mesh "${DD.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L443)

```diff
-           void 0 !== mm && (Am += `#define ${am.define}\n#define ${am.defineIndex} ${mm}\n`)
+           void 0 !== DD && (sD += `#define ${KD.define}\n#define ${KD.defineIndex} ${DD}\n`)
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L445)

```diff
-         hm.objectIdIsRedFormat && (Am += "#define PREPASS_OBJECT_ID_R8\n"), hm._defines = Am + `#define SCENE_MRT_COUNT ${Tm.length}\n`
+         pD.objectIdIsRedFormat && (sD += "#define PREPASS_OBJECT_ID_R8\n"), pD._defines = sD + `#define SCENE_MRT_COUNT ${zD.length}\n`
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L479-L480` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L479-L480) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L479-L480)

```diff
-           if (fm.jK)
-             for (const Tm of fm.jK) Tm._removeDrawWrapper(mm)
+           if (wD.QE)
+             for (const zD of wD.QE) zD._removeDrawWrapper(DD)
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L500-L501)

```diff
-         const im = fm.wG(),
-           Rm = im.dO();
+         const gD = wD.Ul(),
+           RD = gD.iI();
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L506)

```diff
-           else if (hm > mm) throw new Error(`Invalid geometry object ID ${hm} for mesh "${fm.name}". Object IDs must be integers between 0 and 0x${mm.toString(16).toUpperCase()}.`);
+           else if (pD > DD) throw new Error(`Invalid geometry object ID ${pD} for mesh "${wD.name}". Object IDs must be integers between 0 and 0x${DD.toString(16).toUpperCase()}.`);
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L516)

```diff
-           if (mm[fm.uniqueId] || (mm[fm.uniqueId] = hm.clone(), Dm.previousWorldMatrices[fm.uniqueId] = hm.clone()), Am[fm.uniqueId] !== Rm.frameId && (Dm.previousWorldMatrices[fm.uniqueId].ZZ(mm[fm.uniqueId]), Am[fm.uniqueId] = Rm.frameId), mm[fm.uniqueId].ZZ(hm), -1 === Dm.last … [truncated]
+           if (DD[wD.uniqueId] || (DD[wD.uniqueId] = pD.clone(), cD.previousWorldMatrices[wD.uniqueId] = pD.clone()), sD[wD.uniqueId] !== RD.frameId && (cD.previousWorldMatrices[wD.uniqueId].pC(DD[wD.uniqueId]), sD[wD.uniqueId] = RD.frameId), DD[wD.uniqueId].pC(pD), -1 === cD.last … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L630)

```diff
-   40458: (mm, Tm, fm) => {
+   40291: (DD, zD, wD) => {
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L632-L633` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L632-L633) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L632-L633)

```diff
-       e: () => Em,
-       f: () => Om
+       c: () => UD,
+       g: () => ID
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L635-L638` → after: `L635-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L635-L638) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L635-L638)

```diff
-     var hm = fm(40113),
-       Am = fm(40119),
-       am = fm(4e4),
-       xm = fm(39960);
+     var pD = wD(39921),
+       sD = wD(39927),
+       KD = wD(39813),
+       rD = wD(39776);
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L642)

```diff
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = mm, this._scene = mm.wG(), this._engine = this._scene.dO()
+         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = DD, this._scene = DD.Ul(), this._engine = this._scene.iI()
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L647)

```diff
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !mm.isCompatible(this._material.shaderLanguage)) throw `The plugin "${mm.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
+         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !DD.isCompatible(this._material.shaderLanguage)) throw `The plugin "${DD.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L747)

```diff
-                             mm = `${Tm.type}f`
+                             DD = `${zD.type}f`
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L749-L750` → after: `L749-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L749-L750) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L749-L750)

```diff
-                         this._uboDeclaration += hm > 0 ? `uniform ${Tm.name}: array<${mm}, ${hm}>;\n` : `uniform ${Tm.name}: ${mm};\n`
-                       } else this._uboDeclaration += `${Tm.type} ${Tm.name}${hm>0?`[${hm}]`:""};\n`
+                         this._uboDeclaration += pD > 0 ? `uniform ${zD.name}: array<${DD}, ${pD}>;\n` : `uniform ${zD.name}: ${DD};\n`
+                       } else this._uboDeclaration += `${zD.type} ${zD.name}${pD>0?`[${pD}]`:""};\n`
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L790)

```diff
-                 fhm: this._engine.fhm,
+                 OpD: this._engine.OpD,
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L792)

```diff
-               }), Dm.isFragment = "fragment" === fm, (0, am.e)(im, Dm, (mm => im = mm))), Am += im + "\n")
+               }), cD.isFragment = "fragment" === wD, (0, KD.h)(gD, cD, (DD => gD = DD))), sD += gD + "\n")
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L829-L830)

```diff
-     var Rm = fm(40129),
-       pm = fm(37224);
+     var RD = wD(39939),
+       AD = wD(37134);
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L852)

```diff
-             this.name = (0, hm.i)(this, wm, void 0), this.priority = ((0, hm.i)(this, im), (0, hm.i)(this, pm, 500)), this.resolveIncludes = ((0, hm.i)(this, Em), (0, hm.i)(this, om, !1)), this.registerForExtraEvents = ((0, hm.i)(this, Om), (0, hm.i)(this, Ym, !1)), this.doNotSer … [truncated]
+             this.name = (0, pD.m)(this, LD, void 0), this.priority = ((0, pD.m)(this, gD), (0, pD.m)(this, AD, 500)), this.resolveIncludes = ((0, pD.m)(this, UD), (0, pD.m)(this, fD, !1)), this.registerForExtraEvents = ((0, pD.m)(this, ID), (0, pD.m)(this, BD, !1)), this.doNotSer … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L910)

```diff
-           Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], xm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
+           zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], rD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L923)

```diff
-           }, wm, im), (0, hm.g)(null, null, fm, {
+           }, LD, gD), (0, pD.i)(null, null, wD, {
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L936)

```diff
-           }, pm, Em), (0, hm.g)(null, null, am, {
+           }, AD, UD), (0, pD.i)(null, null, KD, {
```

#### 55. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L949)

```diff
-           }, om, Om), (0, hm.g)(null, null, xm, {
+           }, fD, ID), (0, pD.i)(null, null, rD, {
```

#### 56. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L973)

```diff
-       om || (om = !0, (0, pm.d)("BABYLON.MaterialPluginBase", Em))
+       fD || (fD = !0, (0, AD.i)("BABYLON.MaterialPluginBase", UD))
```

#### 57. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L976)

```diff
-   40369: (mm, Tm, fm) => {
+   40208: (DD, zD, wD) => {
```

#### 58. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L991-L992` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L991-L992) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L991-L992)

```diff
-           const Am = Tm.dO();
-           this.currentViewProjection.updateFlag !== Tm.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Am.frameId, this.previousViewProjection.ZZ(this.currentViewProjection), this.currentViewProjection.ZZ(Tm.getTransformMatrix())) : this._lastUpdateFrameId !== Am.fra … [truncated]
+           const sD = zD.iI();
+           this.currentViewProjection.updateFlag !== zD.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = sD.frameId, this.previousViewProjection.pC(this.currentViewProjection), this.currentViewProjection.pC(zD.getTransformMatrix())) : this._lastUpdateFrameId !== sD.fra … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L997)

```diff
-   40493: (mm, Tm, fm) => {
+   40318: (DD, zD, wD) => {
```

#### 60. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1006)

```diff
-       b: () => hm
+       e: () => pD
```

#### 61. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1009)

```diff
-   40357: (mm, Tm, fm) => {
+   40192: (DD, zD, wD) => {
```

#### 62. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1011)

```diff
-       StandardMaterial: () => hm.h
+       StandardMaterial: () => pD.e
```

#### 63. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1013` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1013) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1013)

```diff
-     var hm = fm(40364);
+     var pD = wD(40199);
```

#### 64. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1016)

```diff
-   40364: (mm, Tm, fm) => {
+   40199: (DD, zD, wD) => {
```

#### 65. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1019)

```diff
-       h: () => Xm
+       e: () => SD
```

#### 66. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1021-L1022` → after: `L1021-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1021-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1021-L1029) · [Before (L1021-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1021-L1022)

```diff
-     var hm = fm(40113),
-       Am = fm(40119),
+     var pD = wD(39921),
+       sD = wD(39927),
+       KD = wD(40043),
+       rD = wD(40022),
+       LD = wD(37273),
+       cD = wD(40066),
+       gD = wD(40208),
+       RD = wD(40211),
+       AD = wD(40046),
```

#### 67. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1024-L1046` → after: `L1031-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1031-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1031-L1046) · [Before (L1024-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1024-L1046)

```diff
-       xm = fm(40199),
-       wm = fm(37336),
-       Dm = fm(40251),
-       im = fm(40369),
-       Rm = fm(40371),
-       pm = fm(40226),
-       Em = fm(40383),
-       om = fm(40379),
-       Om = fm(40445),
-       Ym = fm(40440),
-       qm = fm(40447),
-       jm = fm(40453),
-       Vm = fm(40432),
-       Im = fm(40465),
-       Km = fm(40428),
-       Qm = fm(40129),
- ... (7 more removed lines; see GitHub link above)
+       fD = wD(40217),
+       ID = wD(40270),
+       BD = wD(40266),
+       GD = wD(40278),
+       hD = wD(40285),
+       nD = wD(40263),
+       MD = wD(40299),
+       OD = wD(40254),
+       JD = wD(39939),
+       ED = wD(40302),
+       QD = wD(40307),
+       XD = wD(40315),
+       VD = wD(40318),
+       PD = wD(40322),
+       CD = wD(37134),
+       xD = wD(39808);
```

#### 68. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1051` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1051) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1051)

```diff
-     class em extends((0, zm.b)((0, cm.e)(om.c))) {}
+     class bD extends((0, VD.e)((0, XD.b)(fD.d))) {}
```

#### 69. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1057` → after: `L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1057) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1057)

```diff
-     class Gm extends((0, Zm.c)(Om.d)) {}
+     class dD extends((0, PD.b)(ID.d)) {}
```

#### 70. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1060-L1061` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1060) · [Before (L1060-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1060-L1061)

```diff
-         let aT, xT, wT, DT, iT, RT, pT, ET, oT, OT, YT, qT, jT, VT, IT, KT, QT, nT, JT, cT, zT, ZT, kT, bT, ST, eT, NT, GT, XT, PT, HT, yT, CT, rT, sT, lT, MT, uT, BT, LT, vT, tT, UT, dT, gT, WT, FT, mf, Tf, ff, hf, Af, af, xf, wf, Df, Rf, pf, Ef, of, Of, Yf, qf, jf, Vf, If, Kf,  … [truncated]
-           Sf = [],
+         let sz, Kz, rz, Lz, cz, gz, Rz, Az, Uz, fz, Iz, Bz, Gz, hz, nz, Mz, Oz, Jz, Ez, Qz, Xz, Vz, Pz, Cz, xz, Tz, bz, jz, dz, Sz, iz, lz, Wz, Nz, Zz, yz, kz, mz, ez, oz, az, uz, vz, tz, Fz, Yz, Hz, qz, Dw, zw, ww, pw, sw, Kw, rw, Lw, gw, Rw, Aw, Uw, fw, Iw, Bw, Gw, hw, nw, Mw,  … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1209` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1209) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1209)

```diff
-             return (0, hm.b)(this, Tm, "f")
+             return (0, pD.c)(this, zD, "f")
```

#### 72. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1212)

```diff
-             (0, hm.c)(this, Tm, mm, "f")
+             (0, pD.g)(this, zD, DD, "f")
```

#### 73. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1215` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1215) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1215)

```diff
-             return (0, hm.b)(this, Rm, "f")
+             return (0, pD.c)(this, RD, "f")
```

#### 74. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1218)

```diff
-             (0, hm.c)(this, Rm, mm, "f")
+             (0, pD.g)(this, RD, DD, "f")
```

#### 75. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1221)

```diff
-             return (0, hm.b)(this, om, "f")
+             return (0, pD.c)(this, fD, "f")
```

#### 76. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1224)

```diff
-             (0, hm.c)(this, om, mm, "f")
+             (0, pD.g)(this, fD, DD, "f")
```

#### 77. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1227)

```diff
-             return (0, hm.b)(this, cm, "f")
+             return (0, pD.c)(this, XD, "f")
```

#### 78. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1230` → after: `L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1230) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1230)

```diff
-             (0, hm.c)(this, cm, mm, "f")
+             (0, pD.g)(this, XD, DD, "f")
```

#### 79. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1233` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1233) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1233)

```diff
-             return (0, hm.b)(this, zm, "f")
+             return (0, pD.c)(this, VD, "f")
```

#### 80. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1236)

```diff
-             (0, hm.c)(this, zm, mm, "f")
+             (0, pD.g)(this, VD, DD, "f")
```

#### 81. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1239)

```diff
-             return (0, hm.b)(this, Zm, "f")
+             return (0, pD.c)(this, PD, "f")
```

#### 82. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1242` → after: `L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1242) · [Before (L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1242)

```diff
-             (0, hm.c)(this, Zm, mm, "f")
+             (0, pD.g)(this, PD, DD, "f")
```

#### 83. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1245)

```diff
-             return (0, hm.b)(this, km, "f")
+             return (0, pD.c)(this, CD, "f")
```

#### 84. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1248` → after: `L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1248) · [Before (L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1248)

```diff
-             (0, hm.c)(this, km, mm, "f")
+             (0, pD.g)(this, CD, DD, "f")
```

#### 85. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1251` → after: `L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1251) · [Before (L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1251)

```diff
-             return (0, hm.b)(this, bm, "f")
+             return (0, pD.c)(this, xD, "f")
```

#### 86. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1254)

```diff
-             (0, hm.c)(this, bm, mm, "f")
+             (0, pD.g)(this, xD, DD, "f")
```

#### 87. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1257)

```diff
-             return (0, hm.b)(this, em, "f")
+             return (0, pD.c)(this, bD, "f")
```

#### 88. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1260)

```diff
-             (0, hm.c)(this, em, mm, "f")
+             (0, pD.g)(this, bD, DD, "f")
```

#### 89. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1263` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1263) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1263)

```diff
-             return (0, hm.b)(this, Xm, "f")
+             return (0, pD.c)(this, SD, "f")
```

#### 90. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1266)

```diff
-             (0, hm.c)(this, Xm, mm, "f")
+             (0, pD.g)(this, SD, DD, "f")
```

#### 91. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1269` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1269) · [Before (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1269)

```diff
-             return (0, hm.b)(this, Pm, "f")
+             return (0, pD.c)(this, iD, "f")
```

#### 92. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1272` → after: `L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1272) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1272)

```diff
-             (0, hm.c)(this, Pm, mm, "f")
+             (0, pD.g)(this, iD, DD, "f")
```

#### 93. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1275` → after: `L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1275) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1275)

```diff
-             return (0, hm.b)(this, Hm, "f")
+             return (0, pD.c)(this, lD, "f")
```

#### 94. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1278` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1278) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1278)

```diff
-             (0, hm.c)(this, Hm, mm, "f")
+             (0, pD.g)(this, lD, DD, "f")
```

#### 95. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1281)

```diff
-             return (0, hm.b)(this, ym, "f")
+             return (0, pD.c)(this, WD, "f")
```

#### 96. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1284)

```diff
-             (0, hm.c)(this, ym, mm, "f")
+             (0, pD.g)(this, WD, DD, "f")
```

#### 97. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1287` → after: `L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1287) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1287)

```diff
-             return (0, hm.b)(this, Cm, "f")
+             return (0, pD.c)(this, ND, "f")
```

#### 98. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1290)

```diff
-             (0, hm.c)(this, Cm, mm, "f")
+             (0, pD.g)(this, ND, DD, "f")
```

#### 99. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1293)

```diff
-             return (0, hm.b)(this, rm, "f")
+             return (0, pD.c)(this, ZD, "f")
```

#### 100. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1296)

```diff
-             (0, hm.c)(this, rm, mm, "f")
+             (0, pD.g)(this, ZD, DD, "f")
```

#### 101. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1299)

```diff
-             return (0, hm.b)(this, sm, "f")
+             return (0, pD.c)(this, yD, "f")
```

#### 102. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1302)

```diff
-             (0, hm.c)(this, sm, mm, "f")
+             (0, pD.g)(this, yD, DD, "f")
```

#### 103. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1305)

```diff
-             return (0, hm.b)(this, lm, "f")
+             return (0, pD.c)(this, kD, "f")
```

#### 104. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1308)

```diff
-             (0, hm.c)(this, lm, mm, "f")
+             (0, pD.g)(this, kD, DD, "f")
```

#### 105. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1311)

```diff
-             return (0, hm.b)(this, Mm, "f")
+             return (0, pD.c)(this, mD, "f")
```

#### 106. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1314)

```diff
-             (0, hm.c)(this, Mm, mm, "f")
+             (0, pD.g)(this, mD, DD, "f")
```

#### 107. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1317)

```diff
-             return (0, hm.b)(this, um, "f")
+             return (0, pD.c)(this, eD, "f")
```

#### 108. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1320` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1320) · [Before (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1320)

```diff
-             (0, hm.c)(this, um, mm, "f")
+             (0, pD.g)(this, eD, DD, "f")
```

#### 109. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1323)

```diff
-             return (0, hm.b)(this, Bm, "f")
+             return (0, pD.c)(this, oD, "f")
```

#### 110. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1326)

```diff
-             (0, hm.c)(this, Bm, mm, "f")
+             (0, pD.g)(this, oD, DD, "f")
```

#### 111. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1329)

```diff
-             return (0, hm.b)(this, Lm, "f")
+             return (0, pD.c)(this, aD, "f")
```

#### 112. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1332)

```diff
-             (0, hm.c)(this, Lm, mm, "f")
+             (0, pD.g)(this, aD, DD, "f")
```

#### 113. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1335)

```diff
-             return (0, hm.b)(this, tm, "f")
+             return (0, pD.c)(this, uD, "f")
```

#### 114. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1338)

```diff
-             (0, hm.c)(this, tm, mm, "f")
+             (0, pD.g)(this, uD, DD, "f")
```

#### 115. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1341)

```diff
-             return (0, hm.b)(this, Um, "f")
+             return (0, pD.c)(this, vD, "f")
```

#### 116. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1344)

```diff
-             (0, hm.c)(this, Um, mm, "f")
+             (0, pD.g)(this, vD, DD, "f")
```

#### 117. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1347` → after: `L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1347) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1347)

```diff
-             return (0, hm.b)(this, dm, "f")
+             return (0, pD.c)(this, tD, "f")
```

#### 118. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1350)

```diff
-             (0, hm.c)(this, dm, mm, "f")
+             (0, pD.g)(this, tD, DD, "f")
```

#### 119. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1353` → after: `L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1353) · [Before (L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1353)

```diff
-             return (0, hm.b)(this, gm, "f")
+             return (0, pD.c)(this, FD, "f")
```

#### 120. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1356)

```diff
-             (0, hm.c)(this, gm, mm, "f")
+             (0, pD.g)(this, FD, DD, "f")
```

#### 121. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1359)

```diff
-             return (0, hm.b)(this, Wm, "f")
+             return (0, pD.c)(this, YD, "f")
```

#### 122. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1362)

```diff
-             (0, hm.c)(this, Wm, mm, "f")
+             (0, pD.g)(this, YD, DD, "f")
```

#### 123. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1365)

```diff
-             return (0, hm.b)(this, Fm, "f")
+             return (0, pD.c)(this, HD, "f")
```

#### 124. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1368)

```diff
-             (0, hm.c)(this, Fm, mm, "f")
+             (0, pD.g)(this, HD, DD, "f")
```

#### 125. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1371)

```diff
-             return (0, hm.b)(this, mT, "f")
+             return (0, pD.c)(this, qD, "f")
```

#### 126. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1374)

```diff
-             (0, hm.c)(this, mT, mm, "f")
+             (0, pD.g)(this, qD, DD, "f")
```

#### 127. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1377` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1377) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1377)

```diff
-             return (0, hm.b)(this, TT, "f")
+             return (0, pD.c)(this, Dz, "f")
```

#### 128. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1380)

```diff
-             (0, hm.c)(this, TT, mm, "f")
+             (0, pD.g)(this, Dz, DD, "f")
```

#### 129. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1383` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1383) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1383)

```diff
-             return (0, hm.b)(this, fT, "f")
+             return (0, pD.c)(this, zz, "f")
```

#### 130. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1386)

```diff
-             (0, hm.c)(this, fT, mm, "f")
+             (0, pD.g)(this, zz, DD, "f")
```

#### 131. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1389` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1389) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1389)

```diff
-             return (0, hm.b)(this, hT, "f")
+             return (0, pD.c)(this, wz, "f")
```

#### 132. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1392)

```diff
-             (0, hm.c)(this, hT, mm, "f")
+             (0, pD.g)(this, wz, DD, "f")
```

#### 133. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1395)

```diff
-             return (0, hm.b)(this, AT, "f")
+             return (0, pD.c)(this, pz, "f")
```

#### 134. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1398)

```diff
-             (0, hm.c)(this, AT, mm, "f")
+             (0, pD.g)(this, pz, DD, "f")
```

#### 135. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1407` → after: `L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1407) · [Before (L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1407)

```diff
-             super(fm, Am, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || mm.ForceGLSL), this._diffuseTexture = (0, hm.i)(this, Sf, null), Tm.set(this, ((0, hm.i)(this, ef), (0, hm.i)(this, Nf, void 0))), this._ambientTexture = ((0, hm.i)(this, Gf), (0, … [truncated]
+             super(wD, sD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || DD.ForceGLSL), this._diffuseTexture = (0, pD.m)(this, Cw, null), zD.set(this, ((0, pD.m)(this, xw), (0, pD.m)(this, Tw, void 0))), this._ambientTexture = ((0, pD.m)(this, bw), (0, … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1419)

```diff
-             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Em.d.MATERIAL_ALPHATEST)
+             return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === UD.b.MATERIAL_ALPHATEST)
```

#### 137. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1422)

```diff
-             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Em.d.MATERIAL_OPAQUE
+             return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== UD.b.MATERIAL_OPAQUE
```

#### 138. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1436)

```diff
-             const am = this.wG(),
+             const KD = this.Ul(),
```

#### 139. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1439-L1443` → after: `L1439-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1439-L1443) · [Before (L1439-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1439-L1443)

```diff
-             const wm = am.dO();
-             if (xm._needNormals = (0, Km.Z)(am, Tm, xm, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Km.e)(am, Tm, this._maxSimultaneousLights, this._disableLighting)) return !1;
-             (0, Km.fb)(am, xm);
-             const Rm = this.needAlphaBlendingForMesh(Tm) && this.wG().useOrderIndependentTransparency;
-             if ((0, Km.ib)(am, xm, this.canRenderToMRT && !Rm), (0, Km.gb)(am, xm, Rm), Jm.c.PrepareDefines(wm.currentRenderPassId, Tm, xm), xm._areTexturesDirty) {
+             const LD = KD.iI();
+             if (rD._needNormals = (0, OD.bb)(KD, zD, rD, !0, this._maxSimultaneousLights, this._disableLighting), !(0, OD.e)(KD, zD, this._maxSimultaneousLights, this._disableLighting)) return !1;
+             (0, OD.kb)(KD, rD);
+             const RD = this.needAlphaBlendingForMesh(zD) && this.Ul().useOrderIndependentTransparency;
+             if ((0, OD.qb)(KD, rD, this.canRenderToMRT && !RD), (0, OD.nb)(KD, rD, RD), QD.d.PrepareDefines(LD.currentRenderPassId, zD, rD), rD._areTexturesDirty) {
```

#### 140. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1449)

```diff
-                   (0, Km.$)(this._diffuseTexture, xm, "DIFFUSE")
+                   (0, OD.eb)(this._diffuseTexture, rD, "DIFFUSE")
```

#### 141. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1453` → after: `L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1453) · [Before (L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1453)

```diff
-                   (0, Km.$)(this._ambientTexture, xm, "AMBIENT")
+                   (0, OD.eb)(this._ambientTexture, rD, "AMBIENT")
```

#### 142. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1457` → after: `L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1457) · [Before (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1457)

```diff
-                   (0, Km.$)(this._opacityTexture, xm, "OPACITY"), xm.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
+                   (0, OD.eb)(this._opacityTexture, rD, "OPACITY"), rD.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
```

#### 143. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1459)

```diff
-                 if (this._reflectionTexture && mm.ReflectionTextureEnabled ? (xm.ROUGHNESS = this._roughness > 0, xm.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (xm.ROUGHNESS = !1, xm.REFLECTIONOVERALPHA = !1), !(0, Km.V)(am, this._reflectionTexture, xm)) return !1;
+                 if (this._reflectionTexture && DD.ReflectionTextureEnabled ? (rD.ROUGHNESS = this._roughness > 0, rD.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (rD.ROUGHNESS = !1, rD.REFLECTIONOVERALPHA = !1), !(0, OD.Z)(KD, this._reflectionTexture, rD)) return !1;
```

#### 144. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1462)

```diff
-                   (0, Km.$)(this._emissiveTexture, xm, "EMISSIVE")
+                   (0, OD.eb)(this._emissiveTexture, rD, "EMISSIVE")
```

#### 145. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1466)

```diff
-                   (0, Km.$)(this._lightmapTexture, xm, "LIGHTMAP"), xm.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, xm.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
+                   (0, OD.eb)(this._lightmapTexture, rD, "LIGHTMAP"), rD.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, rD.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
```

#### 146. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1470)

```diff
-                   (0, Km.$)(this._specularTexture, xm, "SPECULAR"), xm.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
+                   (0, OD.eb)(this._specularTexture, rD, "SPECULAR"), rD.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
```

#### 147. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1472)

```diff
-                 if (am.dO().getCaps().standardDerivatives && this._bumpTexture && mm.BumpTextureEnabled) {
+                 if (KD.iI().getCaps().standardDerivatives && this._bumpTexture && DD.BumpTextureEnabled) {
```

#### 148. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1474` → after: `L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1474) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1474)

```diff
-                   (0, Km.$)(this._bumpTexture, xm, "BUMP"), xm.PARALLAX = this._useParallax, xm.PARALLAX_RHS = am.useRightHandedSystem, xm.PARALLAXOCCLUSION = this._useParallaxOcclusion, xm.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
+                   (0, OD.eb)(this._bumpTexture, rD, "BUMP"), rD.PARALLAX = this._useParallax, rD.PARALLAX_RHS = KD.useRightHandedSystem, rD.PARALLAXOCCLUSION = this._useParallaxOcclusion, rD.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
```

#### 149. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1492` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1492) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1492)

```diff
-             (0, Km.db)(Tm, am, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Tm), xm, this._applyDecalMapAfterDetailMap, this._useVertexPulling, fm.getRenderingMesh(), this._isVertexOutputInvariant), (0, Km.U)(am, wm, this, xm, hm, nul … [truncated]
+             (0, OD.hb)(zD, KD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zD), rD, this._applyDecalMapAfterDetailMap, this._useVertexPulling, wD.getRenderingMesh(), this._isVertexOutputInvariant), (0, OD.V)(KD, LD, this, rD, pD, nul … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1497-L1502` → after: `L1497-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1497-L1502) · [Before (L1497-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1497-L1502)

```diff
-               const Am = new qm.e;
-               xm.REFLECTION && Am.addFallback(0, "REFLECTION"), xm.SPECULAR && Am.addFallback(0, "SPECULAR"), xm.BUMP && Am.addFallback(0, "BUMP"), xm.PARALLAX && Am.addFallback(1, "PARALLAX"), xm.PARALLAX_RHS && Am.addFallback(1, "PARALLAX_RHS"), xm.PARALLAXOCCLUSION && Am.addFa … [truncated]
-               const Rm = [Dm.m.PositionKind];
-               xm.NORMAL && Rm.push(Dm.m.NormalKind), xm.TANGENT && Rm.push(Dm.m.TangentKind);
-               for (let mm = 1; mm <= 6; ++mm) xm["UV" + mm] && Rm.push(`uv${1===mm?"":mm}`);
-               xm.VERTEXCOLOR && Rm.push(Dm.m.ColorKind), (0, Km.F)(Rm, Tm, xm, Am), (0, Km.J)(Rm, xm), (0, Km.L)(Rm, Tm, xm), (0, Km.E)(Rm, Tm, xm);
+               const sD = new GD.b;
+               rD.REFLECTION && sD.addFallback(0, "REFLECTION"), rD.SPECULAR && sD.addFallback(0, "SPECULAR"), rD.BUMP && sD.addFallback(0, "BUMP"), rD.PARALLAX && sD.addFallback(1, "PARALLAX"), rD.PARALLAX_RHS && sD.addFallback(1, "PARALLAX_RHS"), rD.PARALLAXOCCLUSION && sD.addFa … [truncated]
+               const RD = [cD.k.PositionKind];
+               rD.NORMAL && RD.push(cD.k.NormalKind), rD.TANGENT && RD.push(cD.k.TangentKind);
+               for (let DD = 1; DD <= 6; ++DD) rD["UV" + DD] && RD.push(`uv${1===DD?"":DD}`);
+               rD.VERTEXCOLOR && RD.push(cD.k.ColorKind), (0, OD.H)(RD, zD, rD, sD), (0, OD.K)(RD, rD), (0, OD.L)(RD, zD, rD), (0, OD.G)(RD, zD, rD);
```

#### 151. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1506)

```diff
-               (0, Km.mb)(Om, Ym, !1);
+               (0, OD.xb)(ID, BD, !1);
```

#### 152. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1512)

```diff
-               if (this._eventInfo.fallbacks = Am, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = xm, this._eventInfo.uniforms = Om, this._eventInfo.attributes = Rm, this._eventInfo.samplers = Ym, this._eventInfo.uniformBuffersNames = jm, this._eventInfo.customCode =  … [truncated]
+               if (this._eventInfo.fallbacks = sD, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = rD, this._eventInfo.uniforms = ID, this._eventInfo.attributes = RD, this._eventInfo.samplers = BD, this._eventInfo.uniformBuffersNames = hD, this._eventInfo.customCode =  … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1519)

```diff
-                 }), (0, Vm.c)(Om), this._useVertexPulling) {
+                 }), (0, nD.e)(ID), this._useVertexPulling) {
```

#### 154. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1522-L1523` → after: `L1522-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1522-L1523) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1522-L1523)

```diff
-                 Tm && (this._vertexPullingMetadata = (0, Im.f)(Tm), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((mm, Tm) => {
-                   Om.push(`vp_${Tm}_info`)
+                 zD && (this._vertexPullingMetadata = (0, MD.e)(zD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, zD) => {
+                   ID.push(`vp_${zD}_info`)
```

#### 155. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1530)

```diff
-                 Zm = am.dO().createEffect(om, {
+                 PD = KD.iI().createEffect(fD, {
```

#### 156. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1555)

```diff
-             mm.addUniform("diffuseLeftColor", 4), mm.addUniform("diffuseRightColor", 4), mm.addUniform("opacityParts", 4), mm.addUniform("reflectionLeftColor", 4), mm.addUniform("reflectionRightColor", 4), mm.addUniform("refractionLeftColor", 4), mm.addUniform("refractionRightCol … [truncated]
+             DD.addUniform("diffuseLeftColor", 4), DD.addUniform("diffuseRightColor", 4), DD.addUniform("opacityParts", 4), DD.addUniform("reflectionLeftColor", 4), DD.addUniform("reflectionRightColor", 4), DD.addUniform("refractionLeftColor", 4), DD.addUniform("refractionRightCol … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1558)

```diff
-             const Am = this.wG(),
+             const sD = this.Ul(),
```

#### 158. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1563)

```diff
-             this._activeEffect = Dm, fm.getMeshUniformBuffer().bindToEffect(Dm, "Mesh"), fm.transferToEffect(Tm), this._uniformBuffer.bindToEffect(Dm, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Am, fm, Tm, this.isFrozen), Jm.c.Bind(Am.dO().currentRe … [truncated]
+             this._activeEffect = cD, wD.getMeshUniformBuffer().bindToEffect(cD, "Mesh"), wD.transferToEffect(zD), this._uniformBuffer.bindToEffect(cD, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, sD, wD, zD, this.isFrozen), QD.d.Bind(sD.iI().currentRe … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1569-L1570` → after: `L1569-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1569-L1570) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1569-L1570)

```diff
-               Em = Am.dO()._features.needToAlwaysBindUniformBuffers;
-             (0, Km.f)(fm, Dm), this._vertexPullingMetadata && (0, Im.c)(Dm, this._vertexPullingMetadata);
+               UD = sD.iI()._features.needToAlwaysBindUniformBuffers;
+             (0, OD.h)(wD, cD), this._vertexPullingMetadata && (0, MD.d)(cD, this._vertexPullingMetadata);
```

#### 160. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1576)

```diff
-                     const mm = wm.e.Color3[0];
+                     const DD = LD.l.Color3[0];
```

#### 161. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1581)

```diff
-                 if (am.ALPHATEST && om.updateFloat("alphaCutOff", this.alphaCutOff), Am.texturesEnabled && (this._diffuseTexture && mm.DiffuseTextureEnabled && (om.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Km.x)(this._di … [truncated]
+                 if (KD.ALPHATEST && fD.updateFloat("alphaCutOff", this.alphaCutOff), sD.texturesEnabled && (this._diffuseTexture && DD.DiffuseTextureEnabled && (fD.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, OD.z)(this._di … [truncated]
```

#### 162. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1583)

```diff
-                   if (this._refractionTexture.isCube || (om.K9("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (mm = this._refractionTexture.depth)), om.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
+                   if (this._refractionTexture.isCube || (fD.i5("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (DD = this._refractionTexture.depth)), fD.updateFloat4("vRefractionInfos", this._refractionTexture.level, thi … [truncated]
```

#### 163. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1588)

```diff
-                 this.pointsCloud && om.updateFloat("pointSize", this.pointSize), om.updateColor4("vSpecularColor", this.specularColor, this.specularPower), om.updateColor3("vEmissiveColor", mm.EmissiveTextureEnabled ? this.emissiveColor : wm.b.BlackReadOnly), om.updateColor4("vDi … [truncated]
+                 this.pointsCloud && fD.updateFloat("pointSize", this.pointSize), fD.updateColor4("vSpecularColor", this.specularColor, this.specularPower), fD.updateColor3("vEmissiveColor", DD.EmissiveTextureEnabled ? this.emissiveColor : LD.d.BlackReadOnly), fD.updateColor4("vDi … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1590)

```diff
-               Am.texturesEnabled && (this._diffuseTexture && mm.DiffuseTextureEnabled && Dm.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && mm.AmbientTextureEnabled && Dm.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && mm.Op … [truncated]
+               sD.texturesEnabled && (this._diffuseTexture && DD.DiffuseTextureEnabled && cD.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && DD.AmbientTextureEnabled && cD.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && DD.Op … [truncated]
```

#### 165. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1592)

```diff
-             !pm && this.isFrozen && !Em || !Am.lightsEnabled || this._disableLighting || (0, Km.p)(Am, fm, Dm, am, this._maxSimultaneousLights), !pm && this.isFrozen || ((Am.fogEnabled && fm.applyFog && Am.fogMode !== xm.f.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
+             !AD && this.isFrozen && !UD || !sD.lightsEnabled || this._disableLighting || (0, OD.p)(sD, wD, cD, KD, this._maxSimultaneousLights), !AD && this.isFrozen || ((sD.fogEnabled && wD.applyFog && sD.fogMode !== rD.e.FOGMODE_NONE || this._reflectionTexture || this._refracti … [truncated]
```

#### 166. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1596` → after: `L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1596) · [Before (L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1596)

```diff
-             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === mm.prototype.isReadyForSubMesh && this.bindForSubMesh === mm.prototype.bindForSubMesh && this._mustRebind === Om.d.prototy … [truncated]
+             return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === DD.prototype.isReadyForSubMesh && this.bindForSubMesh === DD.prototype.bindForSubMesh && this._mustRebind === ID.d.prototy … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1624)

```diff
-             const Am = Qm.d.Clone((() => new mm(Tm, this.wG())), this, {
+             const sD = JD.d.Clone((() => new DD(zD, this.Ul())), this, {
```

#### 168. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1631)

```diff
-             return Tm.stencil && Am.stencil.parse(Tm.stencil, fm, hm), Em.d._ParsePlugins(Tm, Am, fm, hm), Am
+             return zD.stencil && sD.stencil.parse(zD.stencil, wD, pD), UD.b._ParsePlugins(zD, sD, wD, pD), sD
```

#### 169. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1707)

```diff
-           aT = [(0, Am.A)("diffuseTexture")], xT = [(0, Am.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], wT = [(0, Am.A)("ambientTexture")], DT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], iT = [(0, Am.A)("opacityTexture")], RT = [(0, Am.c)("_markAllSubMeshesAsTexturesAnd … [truncated]
+           sz = [(0, sD.w)("diffuseTexture")], Kz = [(0, sD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], rz = [(0, sD.w)("ambientTexture")], Lz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, sD.w)("opacityTexture")], gz = [(0, sD.e)("_markAllSubMeshesAsTexturesAnd … [truncated]
```

#### 170. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1717)

```diff
-           })], eT = [(0, Am.J)("useEmissiveAsIllumination")], NT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], GT = [(0, Am.J)("linkEmissiveWithDiffuse")], XT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], PT = [(0, Am.J)("useSpecularOverAlpha")], HT = [(0, Am.c)("_markA … [truncated]
+           })], Tz = [(0, sD.C)("useEmissiveAsIllumination")], bz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, sD.C)("linkEmissiveWithDiffuse")], dz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, sD.C)("useSpecularOverAlpha")], iz = [(0, sD.e)("_markA … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1730)

```diff
-           }, Nf, Gf), (0, hm.g)(mm, null, DT, {
+           }, Tw, bw), (0, pD.i)(DD, null, Lz, {
```

#### 172. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1743)

```diff
-           }, Hf, yf), (0, hm.g)(mm, null, RT, {
+           }, Sw, iw), (0, pD.i)(DD, null, gz, {
```

#### 173. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1756)

```diff
-           }, sf, lf), (0, hm.g)(mm, null, ET, {
+           }, Nw, Zw), (0, pD.i)(DD, null, Az, {
```

#### 174. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1769` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1769) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1769)

```diff
-           }, Bf, Lf), (0, hm.g)(mm, null, OT, {
+           }, mw, ew), (0, pD.i)(DD, null, fz, {
```

#### 175. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1782)

```diff
-           }, Uf, df), (0, hm.g)(mm, null, qT, {
+           }, uw, vw), (0, pD.i)(DD, null, Bz, {
```

#### 176. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1795)

```diff
-           }, Ff, mh), (0, hm.g)(mm, null, VT, {
+           }, Yw, Hw), (0, pD.i)(DD, null, hz, {
```

#### 177. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1808)

```diff
-           }, hh, Ah), (0, hm.g)(mm, null, KT, {
+           }, zp, wp), (0, pD.i)(DD, null, Mz, {
```

#### 178. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1821)

```diff
-           }, wh, Dh), (0, hm.g)(mm, null, nT, {
+           }, Kp, rp), (0, pD.i)(DD, null, Jz, {
```

#### 179. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1834)

```diff
-           }, ph, Eh), (0, hm.g)(mm, null, ST, {
+           }, gp, Rp), (0, pD.i)(DD, null, xz, {
```

#### 180. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1847)

```diff
-           }, zh, Zh), (0, hm.g)(mm, null, NT, {
+           }, Qp, Xp), (0, pD.i)(DD, null, bz, {
```

#### 181. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1860)

```diff
-           }, Sh, eh), (0, hm.g)(mm, null, XT, {
+           }, Cp, xp), (0, pD.i)(DD, null, dz, {
```

#### 182. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1873)

```diff
-           }, Xh, Ph), (0, hm.g)(mm, null, HT, {
+           }, jp, dp), (0, pD.i)(DD, null, iz, {
```

#### 183. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1886` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1886) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1886)

```diff
-           }, Ch, rh), (0, hm.g)(mm, null, CT, {
+           }, lp, Wp), (0, pD.i)(DD, null, Wz, {
```

#### 184. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1899)

```diff
-           }, Mh, uh), (0, hm.g)(mm, null, sT, {
+           }, yp, kp), (0, pD.i)(DD, null, Zz, {
```

#### 185. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1912)

```diff
-           }, vh, th), (0, hm.g)(mm, null, MT, {
+           }, op, ap), (0, pD.i)(DD, null, kz, {
```

#### 186. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1925)

```diff
-           }, gh, Wh), (0, hm.g)(mm, null, BT, {
+           }, Fp, Yp), (0, pD.i)(DD, null, ez, {
```

#### 187. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1938` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1938) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1938)

```diff
-           }, TA, fA), (0, hm.g)(mm, null, vT, {
+           }, Ds, zs), (0, pD.i)(DD, null, az, {
```

#### 188. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1951)

```diff
-           }, aA, xA), (0, hm.g)(mm, null, dT, {
+           }, ss, Ks), (0, pD.i)(DD, null, tz, {
```

#### 189. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1964)

```diff
-           }, pA, EA), (0, hm.g)(mm, null, Tf, {
+           }, Rs, As), (0, pD.i)(DD, null, Dw, {
```

#### 190. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1977)

```diff
-           }, QA, nA), (0, hm.g)(mm, null, hf, {
+           }, Os, Es), (0, pD.i)(DD, null, ww, {
```

#### 191. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L1990)

```diff
-           }, zA, ZA), (0, hm.g)(mm, null, af, {
+           }, Vs, Ps), (0, pD.i)(DD, null, sw, {
```

#### 192. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2003)

```diff
-           }, SA, eA), (0, hm.g)(mm, null, wf, {
+           }, Ts, bs), (0, pD.i)(DD, null, rw, {
```

#### 193. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2016)

```diff
-           }, XA, PA), (0, hm.g)(mm, null, Rf, {
+           }, is, ls), (0, pD.i)(DD, null, gw, {
```

#### 194. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2029)

```diff
-           }, CA, rA), (0, hm.g)(mm, null, Ef, {
+           }, Zs, ys), (0, pD.i)(DD, null, Aw, {
```

#### 195. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2042)

```diff
-           }, MA, uA), (0, hm.g)(mm, null, Of, {
+           }, es, os), (0, pD.i)(DD, null, fw, {
```

#### 196. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2055)

```diff
-           }, vA, tA), (0, hm.g)(mm, null, qf, {
+           }, vs, ts), (0, pD.i)(DD, null, Bw, {
```

#### 197. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2068)

```diff
-           }, gA, WA), (0, hm.g)(mm, null, Vf, {
+           }, Hs, qs), (0, pD.i)(DD, null, hw, {
```

#### 198. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2081)

```diff
-           }, Ta, fa), (0, hm.g)(mm, null, Kf, {
+           }, wK, pK), (0, pD.i)(DD, null, Mw, {
```

#### 199. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2094` → after: `L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2094) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2094)

```diff
-           }, aa, xa), (0, hm.g)(mm, null, nf, {
+           }, rK, LK), (0, pD.i)(DD, null, Jw, {
```

#### 200. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2107)

```diff
-           }, ia, Ra), (0, hm.g)(mm, null, zf, {
+           }, RK, AK), (0, pD.i)(DD, null, Qw, {
```

#### 201. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2120` → after: `L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2120) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2120)

```diff
-           }, oa, Oa), (0, hm.g)(mm, null, kf, {
+           }, IK, BK), (0, pD.i)(DD, null, Vw, {
```

#### 202. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2133)

```diff
-           }, ja, Va), (0, hm.g)(null, null, aT, {
+           }, nK, MK), (0, pD.i)(null, null, sz, {
```

#### 203. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2146)

```diff
-           }, Sf, ef), (0, hm.g)(null, null, wT, {
+           }, Cw, xw), (0, pD.i)(null, null, rz, {
```

#### 204. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2159` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2159) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2159)

```diff
-           }, Xf, Pf), (0, hm.g)(null, null, iT, {
+           }, jw, dw), (0, pD.i)(null, null, cz, {
```

#### 205. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2172)

```diff
-           }, Cf, rf), (0, hm.g)(null, null, pT, {
+           }, lw, Ww), (0, pD.i)(null, null, Rz, {
```

#### 206. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2185)

```diff
-           }, Mf, uf), (0, hm.g)(null, null, oT, {
+           }, yw, kw), (0, pD.i)(null, null, Uz, {
```

#### 207. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2198)

```diff
-           }, vf, tf), (0, hm.g)(null, null, YT, {
+           }, ow, aw), (0, pD.i)(null, null, Iz, {
```

#### 208. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2211)

```diff
-           }, gf, Wf), (0, hm.g)(null, null, jT, {
+           }, tw, Fw), (0, pD.i)(null, null, Gz, {
```

#### 209. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2224)

```diff
-           }, Th, fh), (0, hm.g)(null, null, IT, {
+           }, qw, Dp), (0, pD.i)(null, null, nz, {
```

#### 210. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2237)

```diff
-           }, ah, xh), (0, hm.g)(null, null, QT, {
+           }, pp, sp), (0, pD.i)(null, null, Oz, {
```

#### 211. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2250)

```diff
-           }, ih, Rh), (0, hm.g)(null, null, JT, {
+           }, Lp, cp), (0, pD.i)(null, null, Ez, {
```

#### 212. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2263)

```diff
-           }, oh, Oh), (0, hm.g)(null, null, cT, {
+           }, Ap, Up), (0, pD.i)(null, null, Qz, {
```

#### 213. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2276` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2276) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2276)

```diff
-           }, Yh, qh), (0, hm.g)(null, null, zT, {
+           }, fp, Ip), (0, pD.i)(null, null, Xz, {
```

#### 214. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2289)

```diff
-           }, jh, Vh), (0, hm.g)(null, null, ZT, {
+           }, Bp, Gp), (0, pD.i)(null, null, Vz, {
```

#### 215. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2302)

```diff
-           }, Ih, Kh), (0, hm.g)(null, null, kT, {
+           }, hp, np), (0, pD.i)(null, null, Pz, {
```

#### 216. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2315)

```diff
-           }, Qh, nh), (0, hm.g)(null, null, bT, {
+           }, Mp, Op), (0, pD.i)(null, null, Cz, {
```

#### 217. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2328` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2328) · [Before (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2328)

```diff
-           }, Jh, ch), (0, hm.g)(null, null, eT, {
+           }, Jp, Ep), (0, pD.i)(null, null, Tz, {
```

#### 218. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2341)

```diff
-           }, kh, bh), (0, hm.g)(null, null, GT, {
+           }, Vp, Pp), (0, pD.i)(null, null, jz, {
```

#### 219. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2354` → after: `L2354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2354) · [Before (L2354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2354)

```diff
-           }, Nh, Gh), (0, hm.g)(null, null, PT, {
+           }, Tp, bp), (0, pD.i)(null, null, Sz, {
```

#### 220. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2367)

```diff
-           }, Hh, yh), (0, hm.g)(null, null, yT, {
+           }, Sp, ip), (0, pD.i)(null, null, lz, {
```

#### 221. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2380)

```diff
-           }, sh, lh), (0, hm.g)(null, null, rT, {
+           }, Np, Zp), (0, pD.i)(null, null, Nz, {
```

#### 222. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2393)

```diff
-           }, Bh, Lh), (0, hm.g)(null, null, lT, {
+           }, mp, ep), (0, pD.i)(null, null, yz, {
```

#### 223. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2406)

```diff
-           }, Uh, dh), (0, hm.g)(null, null, uT, {
+           }, vp, tp), (0, pD.i)(null, null, mz, {
```

#### 224. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2419)

```diff
-           }, Fh, mA), (0, hm.g)(null, null, LT, {
+           }, Hp, qp), (0, pD.i)(null, null, oz, {
```

#### 225. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2432` → after: `L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2432) · [Before (L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2432)

```diff
-           }, hA, AA), (0, hm.g)(null, null, tT, {
+           }, ws, ps), (0, pD.i)(null, null, uz, {
```

#### 226. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2445` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2445) · [Before (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2445)

```diff
-           }, wA, DA), (0, hm.g)(null, null, UT, {
+           }, rs, Ls), (0, pD.i)(null, null, vz, {
```

#### 227. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2458)

```diff
-           }, iA, RA), (0, hm.g)(null, null, gT, {
+           }, cs, gs), (0, pD.i)(null, null, Fz, {
```

#### 228. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2471` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2471) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2471)

```diff
-           }, oA, OA), (0, hm.g)(null, null, WT, {
+           }, Us, fs), (0, pD.i)(null, null, Yz, {
```

#### 229. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2484` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2484) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2484)

```diff
-           }, YA, qA), (0, hm.g)(null, null, FT, {
+           }, Is, Bs), (0, pD.i)(null, null, Hz, {
```

#### 230. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2497)

```diff
-           }, jA, VA), (0, hm.g)(null, null, mf, {
+           }, Gs, hs), (0, pD.i)(null, null, qz, {
```

#### 231. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2510` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2510) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2510)

```diff
-           }, IA, KA), (0, hm.g)(null, null, ff, {
+           }, ns, Ms), (0, pD.i)(null, null, zw, {
```

#### 232. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2523)

```diff
-           }, JA, cA), (0, hm.g)(null, null, Af, {
+           }, Qs, Xs), (0, pD.i)(null, null, pw, {
```

#### 233. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2536)

```diff
-           }, kA, bA), (0, hm.g)(null, null, xf, {
+           }, Cs, xs), (0, pD.i)(null, null, Kw, {
```

#### 234. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2549` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2549) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2549)

```diff
-           }, NA, GA), (0, hm.g)(null, null, Df, {
+           }, ds, Ss), (0, pD.i)(null, null, Lw, {
```

#### 235. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2562)

```diff
-           }, HA, yA), (0, hm.g)(null, null, pf, {
+           }, Ws, Ns), (0, pD.i)(null, null, Rw, {
```

#### 236. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2575)

```diff
-           }, sA, lA), (0, hm.g)(null, null, of, {
+           }, ks, ms), (0, pD.i)(null, null, Uw, {
```

#### 237. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2588` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2588) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2588)

```diff
-           }, BA, LA), (0, hm.g)(null, null, Yf, {
+           }, as, us), (0, pD.i)(null, null, Iw, {
```

#### 238. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2601` → after: `L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2601) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2601)

```diff
-           }, UA, dA), (0, hm.g)(null, null, jf, {
+           }, Fs, Ys), (0, pD.i)(null, null, Gw, {
```

#### 239. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2614)

```diff
-           }, FA, ma), (0, hm.g)(null, null, If, {
+           }, DK, zK), (0, pD.i)(null, null, nw, {
```

#### 240. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2627` → after: `L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2627) · [Before (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2627)

```diff
-           }, ha, Aa), (0, hm.g)(null, null, Qf, {
+           }, sK, KK), (0, pD.i)(null, null, Ow, {
```

#### 241. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2640` → after: `L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2640) · [Before (L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2640)

```diff
-           }, wa, Da), (0, hm.g)(null, null, Jf, {
+           }, cK, gK), (0, pD.i)(null, null, Ew, {
```

#### 242. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2653` → after: `L2653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2653) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2653)

```diff
-           }, pa, Ea), (0, hm.g)(null, null, Zf, {
+           }, UK, fK), (0, pD.i)(null, null, Xw, {
```

#### 243. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2672)

```diff
-         })(), mm.ForceGLSL = !1, mm._ShaderLoader = new nm.e((() => [Promise.all([fm.e(317), fm.e(316)]).then((() => fm(41885))), Promise.all([fm.e(322), fm.e(318), fm.e(331), fm.e(321)]).then((() => fm(42072)))]), (() => [Promise.all([fm.e(338), fm.e(333)]).then((() => fm(42234) … [truncated]
+         })(), DD.ForceGLSL = !1, DD._ShaderLoader = new ED.d((() => [Promise.all([wD.e(317), wD.e(316)]).then((() => wD(41785))), Promise.all([wD.e(322), wD.e(318), wD.e(331), wD.e(321)]).then((() => wD(41955)))]), (() => [Promise.all([wD.e(338), wD.e(333)]).then((() => wD(42087) … [truncated]
```

#### 244. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2677)

```diff
-       Pm || (Pm = !0, (0, pm.f)(), (0, km.d)("BABYLON.StandardMaterial", Xm), xm.f.DefaultMaterialFactory = mm => new Xm("default material", mm))
+       iD || (iD = !0, (0, AD.h)(), (0, CD.i)("BABYLON.StandardMaterial", SD), rD.e.DefaultMaterialFactory = DD => new SD("default material", DD))
```

#### 245. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2679)

```diff
-     Object.getOwnPropertyDescriptor(Xm.prototype, "decalMap") || Object.defineProperty(Xm.prototype, "decalMap", (0, bm.e)("StandardMaterial", "decalMap"))
+     Object.getOwnPropertyDescriptor(SD.prototype, "decalMap") || Object.defineProperty(SD.prototype, "decalMap", (0, xD.g)("StandardMaterial", "decalMap"))
```

#### 246. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2681)

```diff
-   40491: (mm, Tm, fm) => {
+   40315: (DD, zD, wD) => {
```

#### 247. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2690)

```diff
-       e: () => hm
+       b: () => pD
```

#### 248. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2693` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2693) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2693)

```diff
-   40474: (mm, Tm, fm) => {
+   40302: (DD, zD, wD) => {
```

#### 249. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2695` → after: `L2695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/261.js#L2695) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/261.js#L2695)

```diff
-       e: () => hm
+       d: () => pD
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (235 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   40399: (mm, Tm, fm) => {
+   40231: (DD, zD, wD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       e: () => hm
+       d: () => pD
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L14)

```diff
-   40408: (mm, Tm, fm) => {
+   40239: (DD, zD, wD) => {
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L16)

```diff
-       c: () => xm
+       b: () => rD
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L18-L20` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L18-L20) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L18-L20)

```diff
-     var hm = fm(37197),
-       Am = fm(37185),
-       am = fm(37191);
+     var pD = wD(37094),
+       sD = wD(37079),
+       KD = wD(37088);
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L23)

```diff
-         this.vectors = (0, hm.c)(8, Am.p.Zero), this.center = Am.p.Zero(), this.centerWorld = Am.p.Zero(), this.extendSize = Am.p.Zero(), this.extendSizeWorld = Am.p.Zero(), this.directions = (0, hm.c)(3, Am.p.Zero), this.vectorsWorld = (0, hm.c)(8, Am.p.Zero), this.minimumWorld  … [truncated]
+         this.vectors = (0, pD.b)(8, sD.s.Zero), this.center = sD.s.Zero(), this.centerWorld = sD.s.Zero(), this.extendSize = sD.s.Zero(), this.extendSizeWorld = sD.s.Zero(), this.directions = (0, pD.b)(3, sD.s.Zero), this.vectorsWorld = (0, pD.b)(8, sD.s.Zero), this.minimumWorld  … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L33)

```diff
-         this.minimum.Z8(hm, am, xm), this.maximum.Z8(wm, Dm, im), Rm[0].Z8(hm, am, xm), Rm[1].Z8(wm, Dm, im), Rm[2].Z8(wm, am, xm), Rm[3].Z8(hm, Dm, xm), Rm[4].Z8(hm, am, im), Rm[5].Z8(wm, Dm, xm), Rm[6].Z8(hm, Dm, im), Rm[7].Z8(wm, am, im), Tm.addToRef(mm, this.center).scaleInPl … [truncated]
+         this.minimum.Z2(pD, KD, rD), this.maximum.Z2(LD, cD, gD), RD[0].Z2(pD, KD, rD), RD[1].Z2(LD, cD, gD), RD[2].Z2(LD, KD, rD), RD[3].Z2(pD, cD, rD), RD[4].Z2(pD, KD, gD), RD[5].Z2(LD, cD, rD), RD[6].Z2(pD, cD, gD), RD[7].Z2(LD, KD, gD), zD.addToRef(DD, this.center).scaleInPl … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L56-L58)

```diff
-           Tm.ZZ(this.minimum), fm.ZZ(this.maximum);
-           for (let mm = 0; mm < 8; ++mm) am[mm].ZZ(xm[mm]);
-           this.extendSizeWorld.ZZ(this.extendSize), this.centerWorld.ZZ(this.center)
+           zD.pC(this.minimum), wD.pC(this.maximum);
+           for (let DD = 0; DD < 8; ++DD) KD[DD].pC(rD[DD]);
+           this.extendSizeWorld.pC(this.extendSize), this.centerWorld.pC(this.center)
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L60)

```diff
-           Tm.Y5(Number.MAX_VALUE), fm.Y5(-Number.MAX_VALUE);
+           zD.I9(Number.MAX_VALUE), wD.I9(-Number.MAX_VALUE);
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L63)

```diff
-             Am.p.TransformCoordinatesToRef(xm[hm], mm, wm), Tm.minimizeInPlace(wm), fm.maximizeInPlace(wm)
+             sD.s.TransformCoordinatesToRef(rD[pD], DD, LD), zD.minimizeInPlace(LD), wD.maximizeInPlace(LD)
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L67)

```diff
-         Am.p.FromArrayToRef(mm.m, 0, hm[0]), Am.p.FromArrayToRef(mm.m, 4, hm[1]), Am.p.FromArrayToRef(mm.m, 8, hm[2]), this._worldMatrix = mm
+         sD.s.FromArrayToRef(DD.m, 0, pD[0]), sD.s.FromArrayToRef(DD.m, 4, pD[1]), sD.s.FromArrayToRef(DD.m, 8, pD[2]), this._worldMatrix = DD
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L87)

```diff
-           om = -am.c;
+           fD = -KD.b;
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L118-L119)

```diff
-         Am.p.ClampToRef(fm, mm, Tm, am);
-         return Am.p.DistanceSquared(fm, am) <= hm * hm
+         sD.s.ClampToRef(wD, DD, zD, KD);
+         return sD.s.DistanceSquared(wD, KD) <= pD * pD
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L142)

```diff
-     xm._TmpVector3 = (0, hm.c)(3, Am.p.Zero)
+     rD._TmpVector3 = (0, pD.b)(3, sD.s.Zero)
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L144)

```diff
-   40404: (mm, Tm, fm) => {
+   40234: (DD, zD, wD) => {
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L148-L150` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L148-L150) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L148-L150)

```diff
-     var hm = fm(37197),
-       Am = fm(37185),
-       am = fm(40408);
+     var pD = wD(37094),
+       sD = wD(37079),
+       KD = wD(40239);
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L153)

```diff
-         this.center = Am.p.Zero(), this.centerWorld = Am.p.Zero(), this.minimum = Am.p.Zero(), this.maximum = Am.p.Zero(), this.reConstruct(mm, Tm, fm)
+         this.center = sD.s.Zero(), this.centerWorld = sD.s.Zero(), this.minimum = sD.s.Zero(), this.maximum = sD.s.Zero(), this.reConstruct(DD, zD, wD)
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L156-L157` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L156-L157) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L156-L157)

```diff
-         this.minimum.ZZ(mm), this.maximum.ZZ(Tm);
-         const hm = Am.p.Distance(mm, Tm);
+         this.minimum.pC(DD), this.maximum.pC(zD);
+         const pD = sD.s.Distance(DD, zD);
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L175)

```diff
-         if (mm.isIdentity()) this.centerWorld.ZZ(this.center), this.radiusWorld = this.radius;
+         if (DD.isIdentity()) this.centerWorld.pC(this.center), this.radiusWorld = this.radius;
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L177)

```diff
-           Am.p.TransformCoordinatesToRef(this.center, mm, this.centerWorld);
+           sD.s.TransformCoordinatesToRef(this.center, DD, this.centerWorld);
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L179)

```diff
-           Am.p.TransformNormalFromFloatsToRef(1, 1, 1, mm, Tm), this.radiusWorld = Math.max(Math.abs(Tm.x), Math.abs(Tm.y), Math.abs(Tm.z)) * this.radius
+           sD.s.TransformNormalFromFloatsToRef(1, 1, 1, DD, zD), this.radiusWorld = Math.max(Math.abs(zD.x), Math.abs(zD.y), Math.abs(zD.z)) * this.radius
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L196)

```diff
-         const Tm = Am.p.DistanceSquared(this.centerWorld, mm);
+         const zD = sD.s.DistanceSquared(this.centerWorld, DD);
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L200)

```diff
-         const fm = Am.p.DistanceSquared(mm.centerWorld, Tm.centerWorld),
+         const wD = sD.s.DistanceSquared(DD.centerWorld, zD.centerWorld),
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L205)

```diff
-         this._TmpVector3[0].ZZ(mm), this._TmpVector3[1].Z8(0, 0, Tm), this._TmpVector3[2].ZZ(mm), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].zhm(this._TmpVector3[1]);
+         this._TmpVector3[0].pC(DD), this._TmpVector3[1].Z2(0, 0, zD), this._TmpVector3[2].pC(DD), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].apD(this._TmpVector3[1]);
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L210)

```diff
-     xm._TmpVector3 = (0, hm.c)(3, Am.p.Zero);
+     rD._TmpVector3 = (0, pD.b)(3, sD.s.Zero);
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L220-L221)

```diff
-         const hm = Am.p.Dot(Tm.centerWorld, mm),
-           am = Math.abs(Am.p.Dot(Tm.directions[0], mm)) * Tm.extendSize.x + Math.abs(Am.p.Dot(Tm.directions[1], mm)) * Tm.extendSize.y + Math.abs(Am.p.Dot(Tm.directions[2], mm)) * Tm.extendSize.z;
+         const pD = sD.s.Dot(zD.centerWorld, DD),
+           KD = Math.abs(sD.s.Dot(zD.directions[0], DD)) * zD.extendSize.x + Math.abs(sD.s.Dot(zD.directions[1], DD)) * zD.extendSize.y + Math.abs(sD.s.Dot(zD.directions[2], DD)) * zD.extendSize.z;
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L227)

```diff
-         this._isLocked = !1, this.boundingBox = new am.c(mm, Tm, fm), this.Shm = new xm(mm, Tm, fm)
+         this._isLocked = !1, this.boundingBox = new KD.b(DD, zD, wD), this.FpD = new rD(DD, zD, wD)
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L230)

```diff
-         this.boundingBox.reConstruct(mm, Tm, fm), this.Shm.reConstruct(mm, Tm, fm)
+         this.boundingBox.reConstruct(DD, zD, wD), this.FpD.reConstruct(DD, zD, wD)
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L245)

```diff
-         this._isLocked || (this.boundingBox._update(mm), this.Shm._update(mm))
+         this._isLocked || (this.boundingBox._update(DD), this.FpD._update(DD))
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L248-L250` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L248-L250) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L248-L250)

```diff
-         const fm = pm._TmpVector3[0].ZZ(mm).zhm(Tm),
-           hm = pm._TmpVector3[1].ZZ(mm).addInPlace(Tm);
-         return this.boundingBox.reConstruct(fm, hm, this.boundingBox.getWorldMatrix()), this.Shm.reConstruct(fm, hm, this.boundingBox.getWorldMatrix()), this
+         const wD = AD._TmpVector3[0].pC(DD).apD(zD),
+           pD = AD._TmpVector3[1].pC(DD).addInPlace(zD);
+         return this.boundingBox.reConstruct(wD, pD, this.boundingBox.getWorldMatrix()), this.FpD.reConstruct(wD, pD, this.boundingBox.getWorldMatrix()), this
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L253-L254)

```diff
-         const Tm = Am.p.Minimize(this.minimum, mm),
-           fm = Am.p.Maximize(this.maximum, mm);
+         const zD = sD.s.Minimize(this.minimum, DD),
+           wD = sD.s.Maximize(this.maximum, DD);
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L258)

```diff
-         const Tm = Am.j.Matrix[0];
+         const zD = sD.n.Matrix[0];
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L260-L261` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L260-L261) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L260-L261)

```diff
-         const fm = Am.j.WO[0];
-         return Am.p.TransformCoordinatesToRef(mm.boundingBox.minimumWorld, Tm, fm), this.encapsulate(fm), Am.p.TransformCoordinatesToRef(mm.boundingBox.maximumWorld, Tm, fm), this.encapsulate(fm), this
+         const wD = sD.n.WI[0];
+         return sD.s.TransformCoordinatesToRef(DD.boundingBox.minimumWorld, zD, wD), this.encapsulate(wD), sD.s.TransformCoordinatesToRef(DD.boundingBox.maximumWorld, zD, wD), this.encapsulate(wD), this
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L264)

```diff
-         return this.boundingBox.scale(mm), this.Shm.scale(mm), this
+         return this.boundingBox.scale(DD), this.FpD.scale(DD), this
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L268-L269)

```diff
-         if ((2 === Tm || 3 === Tm) && this.Shm.isCenterInFrustum(mm)) return !0;
-         if (!this.Shm.isInFrustum(mm)) return !1;
+         if ((2 === zD || 3 === zD) && this.FpD.isCenterInFrustum(DD)) return !0;
+         if (!this.FpD.isInFrustum(DD)) return !1;
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L280)

```diff
-         return mm._canDoCollision(this.Shm.centerWorld, this.Shm.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+         return DD._canDoCollision(this.FpD.centerWorld, this.FpD.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L283)

```diff
-         return !!this.Shm.centerWorld && (!!this.Shm.intersectsPoint(mm) && !!this.boundingBox.intersectsPoint(mm))
+         return !!this.FpD.centerWorld && (!!this.FpD.intersectsPoint(DD) && !!this.boundingBox.intersectsPoint(DD))
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L286-L287` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L286-L287) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L286-L287)

```diff
-         if (!xm.Intersects(this.Shm, mm.Shm)) return !1;
-         if (!am.c.Intersects(this.boundingBox, mm.boundingBox)) return !1;
+         if (!rD.Intersects(this.FpD, DD.FpD)) return !1;
+         if (!KD.b.Intersects(this.boundingBox, DD.boundingBox)) return !1;
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L291)

```diff
-         return !!Rm(fm.directions[0], fm, hm) && (!!Rm(fm.directions[1], fm, hm) && (!!Rm(fm.directions[2], fm, hm) && (!!Rm(hm.directions[0], fm, hm) && (!!Rm(hm.directions[1], fm, hm) && (!!Rm(hm.directions[2], fm, hm) && (!!Rm(Am.p.Cross(fm.directions[0], hm.directions[0]), fm … [truncated]
+         return !!RD(wD.directions[0], wD, pD) && (!!RD(wD.directions[1], wD, pD) && (!!RD(wD.directions[2], wD, pD) && (!!RD(pD.directions[0], wD, pD) && (!!RD(pD.directions[1], wD, pD) && (!!RD(pD.directions[2], wD, pD) && (!!RD(sD.s.Cross(wD.directions[0], pD.directions[0]), wD … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L294)

```diff
-     pm._TmpVector3 = (0, hm.c)(2, Am.p.Zero)
+     AD._TmpVector3 = (0, pD.b)(2, sD.s.Zero)
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L296)

```diff
-   40432: (mm, Tm, fm) => {
+   40263: (DD, zD, wD) => {
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L298-L301` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L298-L301) · [Before (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L298-L301)

```diff
-       c: () => am,
-       d: () => Dm,
-       g: () => wm,
-       k: () => xm
+       e: () => KD,
+       f: () => cD,
+       j: () => LD,
+       n: () => rD
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L303-L304)

```diff
-     var hm = fm(40259),
-       Am = fm(37185);
+     var pD = wD(40082),
+       sD = wD(37079);
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L338-L339)

```diff
-         const am = hm.b.wG()?.floatingOriginOffset || Am.p.ZeroReadOnly;
-         mm.setFloat4(Tm, fm.normal.x, fm.normal.y, fm.normal.z, fm.d + Am.p.Dot(fm.normal, am))
+         const KD = pD.e.Ul()?.floatingOriginOffset || sD.s.ZeroReadOnly;
+         DD.setFloat4(zD, wD.normal.x, wD.normal.y, wD.normal.z, wD.d + sD.s.Dot(wD.normal, KD))
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L343)

```diff
-   40447: (mm, Tm, fm) => {
+   40278: (DD, zD, wD) => {
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L345)

```diff
-       e: () => hm
+       b: () => pD
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L366)

```diff
-           const fm = this._mesh.wG();
+           const wD = this._mesh.Ul();
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L372-L373)

```diff
-                 else if (hm.jK)
-                 for (const mm of hm.jK) {
+                 else if (pD.QE)
+                 for (const DD of pD.QE) {
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L391)

```diff
-   40383: (mm, Tm, fm) => {
+   40220: (DD, zD, wD) => {
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L393)

```diff
-       d: () => Vm
+       b: () => nD
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L395-L405` → after: `L395-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/262.js#L395-L405) · [Before (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/262.js#L395-L405)

```diff
-     var hm = fm(40113),
-       Am = fm(40119),
-       am = fm(40203),
-       xm = fm(37203),
-       wm = fm(37201),
-       Dm = fm(40391),
-       im = fm(40235),
-       Rm = fm(38766),
-       pm = fm(37821),
-       Em = fm(40423),
-       om = fm(40129);
+     var pD = wD(39921),
+       sD = wD(39927),
+       KD = wD(40027),
+       rD = wD(37119),
+       LD = wD(37110),
+       cD = wD(40224),
+       gD = wD(40055),
+       RD = wD(38662),
+       AD = wD(37754),
+       UD = wD(40249),
+       fD = wD(39939);
```
