# Changed — Bundle Modifications Report (Part 048 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `48 / 141` (**418** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 047](part-047.md) · [Part 049 →](part-049.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (877 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 59. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L652)

```diff
-         const tt = this._scene.Jf().getDeltaTime(),
+         const BB = this._scene.PN().getDeltaTime(),
```

#### 60. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L654-L656` → after: `L654-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L654-L656) · [Before (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L654-L656)

```diff
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
-         this.panDeltaCurrentFrame.S_(0), this.rotationDeltaCurrentFrame.S_(0), this.zoomDeltaCurrentFrame = 0;
-         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.W9(this._calculateCurrentVelocity(this._pa … [truncated]
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.K9(0), this.rotationDeltaCurrentFrame.K9(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.cBB(this._calculateCurrentVelocity(this._p … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L659)

```diff
-         this._rotationVelocity.S_(0), this.rotationAccumulatedPixels.S_(0)
+         this._rotationVelocity.K9(0), this.rotationAccumulatedPixels.K9(0)
```

#### 62. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L662)

```diff
-         this._panVelocity.S_(0), this.panAccumulatedPixels.S_(0)
+         this._panVelocity.K9(0), this.panAccumulatedPixels.K9(0)
```

#### 63. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L671)

```diff
-         const et = this._scene.Jf().getDeltaTime(),
+         const IB = this._scene.PN().getDeltaTime(),
```

#### 64. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L682)

```diff
-         return tt > 0 ? tt : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
+         return BB > 0 ? BB : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
```

#### 65. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L686)

```diff
-         const qt = this._scene.Jf().getDeltaTime(),
+         const JB = this._scene.PN().getDeltaTime(),
```

#### 66. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L692)

```diff
-           Ot += et / Dt * (tt > 0 ? (1 - mt) / tt : 1)
+           TB += IB / oB * (BB > 0 ? (1 - GB) / BB : 1)
```

#### 67. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L698)

```diff
-   40426: (tt, et, Vt) => {
+   40284: (BB, IB, ZB) => {
```

#### 68. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L700)

```diff
-       b: () => Ot
+       d: () => TB
```

#### 69. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L812)

```diff
-   40401: (tt, et, Vt) => {
+   40261: (BB, IB, ZB) => {
```

#### 70. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L814-L815` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L814-L815) · [Before (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L814-L815)

```diff
-       b: () => Nt,
-       f: () => wt
+       c: () => yB,
+       d: () => gB
```

#### 71. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L817-L826` → after: `L817-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L817-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L817-L826) · [Before (L817-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L817-L826)

```diff
-     var Ot = Vt(40211),
-       qt = Vt(40213),
-       Dt = Vt(40409),
-       mt = Vt(37336),
-       dt = Vt(37342),
-       jt = Vt(40418),
-       Ht = Vt(40415),
-       Xt = Vt(40422),
-       Qt = Vt(40426);
-     class lt extends Xt.c {
+     var TB = ZB(40061),
+       JB = ZB(40065),
+       oB = ZB(40269),
+       GB = ZB(37120),
+       vB = ZB(37129),
+       kB = ZB(40277),
+       cB = ZB(40272),
+       nB = ZB(40281),
+       hB = ZB(40284);
+     class zB extends nB.e {
```

#### 72. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L828)

```diff
-         super(tt, et, Vt), this.input = new Qt.b({
+         super(BB, IB, ZB), this.input = new hB.d({
```

#### 73. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L856-L857` → after: `L856-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L856-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L856-L857) · [Before (L856-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L856-L857)

```diff
-     const Et = mt.c.Zero(),
-       ft = mt.e.Identity();
+     const FB = GB.b.Zero(),
+       NB = GB.f.Identity();
```

#### 74. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L877` → after: `L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L877) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L877)

```diff
-             super(tt, et, Vt, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new mt.n(0, 0, 0), this.cameraRotation = new mt.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Ot.m)(this, wt, !1), this.rotation =  … [truncated]
+             super(BB, IB, ZB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new GB.s(0, 0, 0), this.cameraRotation = new GB.p(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, TB.l)(this, gB, !1), this.rotation =  … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L881-L882` → after: `L881-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L881-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L881-L882) · [Before (L881-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L881-L882)

```diff
-             const et = mt.k.uf[0],
-               Vt = mt.k.uf[1];
+             const IB = GB.m.rN[0],
+               ZB = GB.m.rN[1];
```

#### 76. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L897)

```diff
-             return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.c … [truncated]
+             return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.c … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L900)

```diff
-             super._initCache(), this._cache.lockedTarget = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new mt.e(Number.MAX_VALUE, Number.MAX … [truncated]
+             super._initCache(), this._cache.lockedTarget = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new GB.f(Number.MAX_VALUE, Number.MAX … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L905)

```diff
-             et ? this._cache.lockedTarget ? this._cache.lockedTarget.rK(et) : this._cache.lockedTarget = et.clone() : this._cache.lockedTarget = null, this._cache.rotation.rK(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.rK(this.rotationQuaternion)
+             IB ? this._cache.lockedTarget ? this._cache.lockedTarget.TY(IB) : this._cache.lockedTarget = IB.clone() : this._cache.lockedTarget = null, this._cache.rotation.TY(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.TY(this.rotationQuaternion)
```

#### 79. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L913)

```diff
-             const tt = this.Jf();
+             const BB = this.PN();
```

#### 80. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L917)

```diff
-             this.upVector.normalize(), this._initialFocalDistance = tt.subtract(this.position).length(), this.position.z === tt.z && (this.position.z += dt.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.vI().useRightHandedSystem ? mt.c.LookAtR … [truncated]
+             this.upVector.normalize(), this._initialFocalDistance = BB.subtract(this.position).length(), this.position.z === BB.z && (this.position.z += vB.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.JR().useRightHandedSystem ? GB.b.LookAtR … [truncated]
```

#### 81. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L919` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L919) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L919)

```diff
-             mt.e.FromRotationMatrixToRef(Et, et), et.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
+             GB.f.FromRotationMatrixToRef(FB, IB), IB.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
```

#### 82. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L934-L935` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L934-L935) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L934-L935)

```diff
-             if (this.parent) return this.parent.getWorldMatrix().invertToRef(mt.k.Matrix[0]), mt.n.TransformNormalToRef(this.cameraDirection, mt.k.Matrix[0], mt.k.uf[0]), this._deferredPositionUpdate.addInPlace(mt.k.uf[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this … [truncated]
-             this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.rK(this._deferredPositionUpdate)
+             if (this.parent) return this.parent.getWorldMatrix().invertToRef(GB.m.Matrix[0]), GB.s.TransformNormalToRef(this.cameraDirection, GB.m.Matrix[0], GB.m.rN[0]), this._deferredPositionUpdate.addInPlace(GB.m.rN[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this … [truncated]
+             this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.TY(this._deferredPositionUpdate)
```

#### 83. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L940)

```diff
-             tt.panAccumulatedPixels.addInPlace(this.cameraDirection), tt.rotationAccumulatedPixels.x += this.cameraRotation.x, tt.rotationAccumulatedPixels.y += this.cameraRotation.y, tt.computeCurrentFrameDeltas(), this.cameraDirection.rK(tt.panDeltaCurrentFrame), this.cameraRot … [truncated]
+             BB.panAccumulatedPixels.addInPlace(this.cameraDirection), BB.rotationAccumulatedPixels.x += this.cameraRotation.x, BB.rotationAccumulatedPixels.y += this.cameraRotation.y, BB.computeCurrentFrameDeltas(), this.cameraDirection.TY(BB.panDeltaCurrentFrame), this.cameraRot … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L942)

```diff
-             !et && Math.abs(this.cameraDirection.x) < Vt && Math.abs(this.cameraDirection.y) < Vt && Math.abs(this.cameraDirection.z) < Vt && (this.cameraDirection.S_(0), tt.resetPanVelocity());
+             !IB && Math.abs(this.cameraDirection.x) < ZB && Math.abs(this.cameraDirection.y) < ZB && Math.abs(this.cameraDirection.z) < ZB && (this.cameraDirection.K9(0), BB.resetPanVelocity());
```

#### 85. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L946)

```diff
-             if (this._deferredUpdated = !1, this._deferredRotationUpdate.rK(this.rotation), this._deferredPositionUpdate.rK(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.rK(this.rotationQuaternion), qt && this._updatePosition(), Dt) {
+             if (this._deferredUpdated = !1, this._deferredRotationUpdate.TY(this.rotation), this._deferredPositionUpdate.TY(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.TY(this.rotationQuaternion), JB && this._updatePosition(), oB) {
```

#### 86. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L951-L952` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L951-L952) · [Before (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L951-L952)

```diff
-               if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.rK(this._deferredRotationUpdate), this.rotationQuaternion) {
-                 this._deferredRotationUpdate.lengthSquared() && (mt.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 :  … [truncated]
+               if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.TY(this._deferredRotationUpdate), this.rotationQuaternion) {
+                 this._deferredRotationUpdate.lengthSquared() && (GB.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 :  … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L955)

```diff
-             this.cameraDirection.S_(0), this.cameraRotation.set(0, 0), super._checkInputs()
+             this.cameraDirection.K9(0), this.cameraRotation.set(0, 0), super._checkInputs()
```

#### 88. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L958` → after: `L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L958) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L958)

```diff
-             this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : mt.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
+             this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : GB.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
```

#### 89. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L961)

```diff
-             return mt.n.TransformNormalToRef(mt.n.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
+             return GB.s.TransformNormalToRef(GB.s.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
```

#### 90. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L964` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L964) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L964)

```diff
-             return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuat … [truncated]
+             return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuat … [truncated]
```

#### 91. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L967)

```diff
-             if (this.vI().useRightHandedSystem ? mt.c.LookAtRHToRef(tt, et, Vt, this._viewMatrix) : mt.c.LookAtLHToRef(tt, et, Vt, this._viewMatrix), this.parent) {
+             if (this.JR().useRightHandedSystem ? GB.b.LookAtRHToRef(BB, IB, ZB, this._viewMatrix) : GB.b.LookAtLHToRef(BB, IB, ZB, this._viewMatrix), this.parent) {
```

#### 92. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L974-L975` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L974-L975) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L974-L975)

```diff
-               const Vt = new tt(et, this.position.clone(), this.vI());
-               return Vt.isRigCamera = !0, Vt.rigParent = this, this.cameraRigMode === Dt.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new mt.e), Vt._cameraRigParams = {}, Vt.rotationQuaternion = new mt.e), Vt.mode = this.mode, Vt.orthoLeft = this.orthoL … [truncated]
+               const ZB = new BB(IB, this.position.clone(), this.JR());
+               return ZB.isRigCamera = !0, ZB.rigParent = this, this.cameraRigMode === oB.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new GB.f), ZB._cameraRigParams = {}, ZB.rotationQuaternion = new GB.f), ZB.mode = this.mode, ZB.orthoLeft = this.orthoL … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L994` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L994) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L994)

```diff
-                 tt.rotationQuaternion && et.rotationQuaternion && this.rotationQuaternion ? (tt.rotationQuaternion.rK(this.rotationQuaternion), et.rotationQuaternion.rK(this.rotationQuaternion)) : (tt.rotation.rK(this.rotation), et.rotation.rK(this.rotation)), tt.position.rK(this … [truncated]
+                 BB.rotationQuaternion && IB.rotationQuaternion && this.rotationQuaternion ? (BB.rotationQuaternion.TY(this.rotationQuaternion), IB.rotationQuaternion.TY(this.rotationQuaternion)) : (BB.rotation.TY(this.rotation), IB.rotation.TY(this.rotation)), BB.position.TY(this … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1001)

```diff
-             mt.c.TranslationToRef(-Ot.x, -Ot.y, -Ot.z, tt._TargetTransformMatrix), tt._TargetTransformMatrix.multiplyToRef(mt.c.RotationAxis(Vt.upVector, et), tt._RigCamTransformMatrix), mt.c.TranslationToRef(Ot.x, Ot.y, Ot.z, tt._TargetTransformMatrix), tt._RigCamTransformMatrix … [truncated]
+             GB.b.TranslationToRef(-TB.x, -TB.y, -TB.z, BB._TargetTransformMatrix), BB._TargetTransformMatrix.multiplyToRef(GB.b.RotationAxis(ZB.upVector, IB), BB._RigCamTransformMatrix), GB.b.TranslationToRef(TB.x, TB.y, TB.z, BB._TargetTransformMatrix), BB._RigCamTransformMatrix … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1008)

```diff
-           et = [(0, qt.P)()], Vt = [(0, qt.M)()], Ht = [(0, qt.P)()], Xt = [(0, qt.B)("lockedTargetId")], (0, Ot.l)(null, null, et, {
+           IB = [(0, JB.C)()], ZB = [(0, JB.A)()], cB = [(0, JB.C)()], nB = [(0, JB.q)("lockedTargetId")], (0, TB.j)(null, null, IB, {
```

#### 96. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1021)

```diff
-           }, wt, yt), (0, Ot.l)(null, null, Vt, {
+           }, gB, qB), (0, TB.j)(null, null, ZB, {
```

#### 97. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1034` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1034) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1034)

```diff
-           }, Nt, Mt), (0, Ot.l)(null, null, Ht, {
+           }, yB, UB), (0, TB.j)(null, null, cB, {
```

#### 98. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1047)

```diff
-           }, bt, Jt), (0, Ot.l)(null, null, Xt, {
+           }, WB, dB), (0, TB.j)(null, null, nB, {
```

#### 99. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1066)

```diff
-         })(), tt._RigCamTransformMatrix = new mt.c, tt._TargetTransformMatrix = new mt.c, tt._TargetFocalPoint = new mt.n, tt
+         })(), BB._RigCamTransformMatrix = new GB.b, BB._TargetTransformMatrix = new GB.b, BB._TargetFocalPoint = new GB.s, BB
```

#### 100. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1071)

```diff
-       yt || (yt = !0, Ht.d.AddNodeConstructor("TargetCamera", ((tt, et) => () => new wt(tt, mt.n.Zero(), et))))
+       qB || (qB = !0, cB.e.AddNodeConstructor("TargetCamera", ((BB, IB) => () => new gB(BB, GB.s.Zero(), IB))))
```

#### 101. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1074` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1074) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1074)

```diff
-   40158: (tt, et, Vt) => {
+   40015: (BB, IB, ZB) => {
```

#### 102. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1078` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1078) · [Before (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1078)

```diff
-     var Ot = Vt(40092);
+     var TB = ZB(39951);
```

#### 103. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1082` → after: `L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1082) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1082)

```diff
-       qt || (qt = !0, Ot.d.prototype.getInputElement = function() {
+       JB || (JB = !0, TB.c.prototype.getInputElement = function() {
```

#### 104. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1084)

```diff
-       }, Ot.d.prototype.getRenderingCanvasClientRect = function() {
+       }, TB.c.prototype.getRenderingCanvasClientRect = function() {
```

#### 105. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1086)

```diff
-       }, Ot.d.prototype.getInputElementClientRect = function() {
+       }, TB.c.prototype.getInputElementClientRect = function() {
```

#### 106. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1088)

```diff
-       }, Ot.d.prototype.getAspectRatio = function(tt) {
+       }, TB.c.prototype.getAspectRatio = function(BB) {
```

#### 107. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1092)

```diff
-       }, Ot.d.prototype.getScreenAspectRatio = function() {
+       }, TB.c.prototype.getScreenAspectRatio = function() {
```

#### 108. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1094)

```diff
-       }, Ot.d.prototype._verifyPointerLock = function() {
+       }, TB.c.prototype._verifyPointerLock = function() {
```

#### 109. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1099-L1101` → after: `L1099-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1099-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1099-L1101) · [Before (L1099-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1099-L1101)

```diff
-   40246: (tt, et, Vt) => {
-     var Ot = Vt(40092),
-       qt = Vt(40249);
+   40103: (BB, IB, ZB) => {
+     var TB = ZB(39951),
+       JB = ZB(40110);
```

#### 110. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1103` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1103) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1103)

```diff
-     Dt || (Dt = !0, (0, qt.u)(), Ot.d.prototype._loadFileAsync = async function(tt, et, Vt) {
+     oB || (oB = !0, (0, JB.q)(), TB.c.prototype._loadFileAsync = async function(BB, IB, ZB) {
```

#### 111. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1113-L1114` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1113-L1114) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1113-L1114)

```diff
-   40244: (tt, et, Vt) => {
-     (0, Vt(40164).b)()
+   40094: (BB, IB, ZB) => {
+     (0, ZB(40021).b)()
```

#### 112. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1116)

```diff
-   40164: (tt, et, Vt) => {
+   40021: (BB, IB, ZB) => {
```

#### 113. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1120)

```diff
-     var Ot = Vt(40092);
+     var TB = ZB(39951);
```

#### 114. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1124` → after: `L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1124) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1124)

```diff
-       qt || (qt = !0, Ot.d.prototype.getRenderPassNames = function() {
+       JB || (JB = !0, TB.c.prototype.getRenderPassNames = function() {
```

#### 115. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1126)

```diff
-       }, Ot.d.prototype.getCurrentRenderPassName = function() {
+       }, TB.c.prototype.getCurrentRenderPassName = function() {
```

#### 116. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1128-L1129` → after: `L1128-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1128-L1129) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1128-L1129)

```diff
-       }, Ot.d.prototype.createRenderPassId = function(tt) {
-         const et = ++Ot.d._RenderPassIdCounter;
+       }, TB.c.prototype.createRenderPassId = function(BB) {
+         const IB = ++TB.c._RenderPassIdCounter;
```

#### 117. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1131` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1131) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1131)

```diff
-       }, Ot.d.prototype.releaseRenderPassId = function(tt) {
+       }, TB.c.prototype.releaseRenderPassId = function(BB) {
```

#### 118. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1137-L1139` → after: `L1137-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1137-L1139) · [Before (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1137-L1139)

```diff
-             if (Ot._releaseRenderPassId(tt), Ot.vJ)
-               for (let et = 0; et < Ot.vJ.length; ++et) {
-                 Ot.vJ[et]._removeDrawWrapper(tt)
+             if (TB._releaseRenderPassId(BB), TB.EW)
+               for (let IB = 0; IB < TB.EW.length; ++IB) {
+                 TB.EW[IB]._removeDrawWrapper(BB)
```

#### 119. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1147-L1149` → after: `L1147-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1147-L1149) · [Before (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1147-L1149)

```diff
-   40278: (tt, et, Vt) => {
-     var Ot = Vt(40281),
-       qt = Vt(40092);
+   40137: (BB, IB, ZB) => {
+     var TB = ZB(40141),
+       JB = ZB(39951);
```

#### 120. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1151)

```diff
-     Dt || (Dt = !0, qt.d.GetCompatibleTextureLoader = Ot.d)
+     oB || (oB = !0, JB.c.GetCompatibleTextureLoader = TB.b)
```

#### 121. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1153)

```diff
-   40168: (tt, et, Vt) => {
+   40023: (BB, IB, ZB) => {
```

#### 122. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1157)

```diff
-     var Ot = Vt(40048);
+     var TB = ZB(39895);
```

#### 123. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1176-L1182` → after: `L1176-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1176-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1176-L1182) · [Before (L1176-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1176-L1182)

```diff
-   40182: (tt, et, Vt) => {
-     var Ot = Vt(40037),
-       qt = Vt(38899),
-       Dt = Vt(40048),
-       mt = Vt(40188),
-       dt = Vt(40148);
-     class jt extends mt.d {
+   40034: (BB, IB, ZB) => {
+     var TB = ZB(39885),
+       JB = ZB(38718),
+       oB = ZB(39895),
+       GB = ZB(40042),
+       vB = ZB(40003);
+     class kB extends GB.c {
```

#### 124. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1191` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1191) · [Before (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1191)

```diff
-           Vt._bindUnboundFramebuffer(this._MSAAFramebuffer), Ot.framebufferRenderbuffer(Ot.FRAMEBUFFER, (0, dt.b)(tt.format) ? Ot.DEPTH_STENCIL_ATTACHMENT : Ot.DEPTH_ATTACHMENT, Ot.RENDERBUFFER, qt.getMSAARenderBuffer()), Vt._bindUnboundFramebuffer(et)
+           ZB._bindUnboundFramebuffer(this._MSAAFramebuffer), TB.framebufferRenderbuffer(TB.FRAMEBUFFER, (0, vB.c)(BB.format) ? TB.DEPTH_STENCIL_ATTACHMENT : TB.DEPTH_ATTACHMENT, TB.RENDERBUFFER, JB.getMSAARenderBuffer()), ZB._bindUnboundFramebuffer(IB)
```

#### 125. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1239)

```diff
-         if (mt._bindUnboundFramebuffer(Dt), mt.Vw > 1) {
+         if (GB._bindUnboundFramebuffer(oB), GB.cg > 1) {
```

#### 126. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1245)

```diff
-           const Dt = void 0 !== Vt ? tt.TEXTURE_CUBE_MAP_POSITIVE_X + Vt : tt.TEXTURE_2D;
+           const oB = void 0 !== ZB ? BB.TEXTURE_CUBE_MAP_POSITIVE_X + ZB : BB.TEXTURE_2D;
```

#### 127. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1316` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1316) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1316)

```diff
-       const Xt = new Ot.d(this, 12);
+       const nB = new TB.b(this, 12);
```

#### 128. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1325)

```diff
-         if (15 !== Qt.depthTextureFormat && 16 !== Qt.depthTextureFormat && 17 !== Qt.depthTextureFormat && 13 !== Qt.depthTextureFormat && 14 !== Qt.depthTextureFormat && 18 !== Qt.depthTextureFormat) return qt.d.Error(`Depth texture ${Qt.depthTextureFormat} format is not suppor … [truncated]
+         if (15 !== hB.depthTextureFormat && 16 !== hB.depthTextureFormat && 17 !== hB.depthTextureFormat && 13 !== hB.depthTextureFormat && 14 !== hB.depthTextureFormat && 18 !== hB.depthTextureFormat) return JB.d.Error(`Depth texture ${hB.depthTextureFormat} format is not suppor … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1328` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1328) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1328)

```diff
-       const lt = (0, dt.b)(Xt.format),
+       const zB = (0, vB.c)(nB.format),
```

#### 130. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1334)

```diff
-       if (this.Vw < 2 || !tt) return 1;
+       if (this.cg < 2 || !BB) return 1;
```

#### 131. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1360` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1360) · [Before (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1360)

```diff
-       Ht.texParameteri(Xt, Ht.TEXTURE_MAG_FILTER, Qt.mag), Ht.texParameteri(Xt, Ht.TEXTURE_MIN_FILTER, Qt.min), Ht.texParameteri(Xt, Ht.TEXTURE_WRAP_S, Ht.CLAMP_TO_EDGE), Ht.texParameteri(Xt, Ht.TEXTURE_WRAP_T, Ht.CLAMP_TO_EDGE), this.Vw > 1 && (0 === Ot ? (Ht.texParameteri(Xt, H … [truncated]
+       cB.texParameteri(nB, cB.TEXTURE_MAG_FILTER, hB.mag), cB.texParameteri(nB, cB.TEXTURE_MIN_FILTER, hB.min), cB.texParameteri(nB, cB.TEXTURE_WRAP_S, cB.CLAMP_TO_EDGE), cB.texParameteri(nB, cB.TEXTURE_WRAP_T, cB.CLAMP_TO_EDGE), this.cg > 1 && (0 === TB ? (cB.texParameteri(nB, c … [truncated]
```

#### 132. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1363)

```diff
-   40023: (tt, et, Vt) => {
+   39872: (BB, IB, ZB) => {
```

#### 133. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1365)

```diff
-       e: () => Ot.c
+       e: () => TB.e
```

#### 134. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1367-L1369` → after: `L1367-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1367-L1369) · [Before (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1367-L1369)

```diff
-     var Ot = Vt(40031);
-     (0, Vt(40168).c)();
-     var qt = Vt(40048);
+     var TB = ZB(39876);
+     (0, ZB(40023).c)();
+     var JB = ZB(39895);
```

#### 135. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1390-L1392` → after: `L1390-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1390-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1390-L1392) · [Before (L1390-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1390-L1392)

```diff
-     var mt = Vt(40037),
-       dt = Vt(38899),
-       jt = Vt(40131);
+     var GB = ZB(39885),
+       vB = ZB(38718),
+       kB = ZB(39993);
```

#### 136. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1413)

```diff
-             ft = new mt.d(this, Et);
+             NB = new GB.b(this, FB);
```

#### 137. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1444` → after: `L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1444) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1444)

```diff
-         const Qt = new mt.d(this, 3);
+         const hB = new GB.b(this, 3);
```

#### 138. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1451)

```diff
-           lt = new mt.d(this, 8);
+           zB = new GB.b(this, 8);
```

#### 139. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1459)

```diff
-         if (!this.needPOTTextures || (0, jt.h)(lt.width) && (0, jt.h)(lt.height) || (qt = !1), tt) this.updateRawCubeTexture(lt, tt, Vt, Ot, Dt, Xt);
+         if (!this.needPOTTextures || (0, kB.i)(zB.width) && (0, kB.i)(zB.height) || (JB = !1), BB) this.updateRawCubeTexture(zB, BB, ZB, TB, oB, nB);
```

#### 140. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1483)

```diff
-         }(!this.needPOTTextures || (0, jt.h)(et.width) && (0, jt.h)(et.height)) && et.generateMipMaps && 0 === dt && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), et.isReady = !0
+         }(!this.needPOTTextures || (0, kB.i)(IB.width) && (0, kB.i)(IB.height)) && IB.generateMipMaps && 0 === vB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), IB.isReady = !0
```

#### 141. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1499)

```diff
-             const mt = Ot instanceof Promise ? await Ot : Ot,
+             const GB = TB instanceof Promise ? await TB : TB,
```

#### 142. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1526)

```diff
-     var Xt = Vt(40076);
+     var nB = ZB(39926);
```

#### 143. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1545)

```diff
-       return dt ? Dt || (Dt = (0, Xt.k)(tt.type, 4 * et * Vt)) : lt === Qt.UNSIGNED_BYTE ? (Dt || (Dt = new Uint8Array(4 * et * Vt)), lt = Qt.UNSIGNED_BYTE) : (Dt || (Dt = new Float32Array(4 * et * Vt)), lt = Qt.FLOAT), mt && this.flushFramebuffer(), Qt.readPixels(jt, Ht, et, Vt, … [truncated]
+       return vB ? oB || (oB = (0, nB.n)(BB.type, 4 * IB * ZB)) : zB === hB.UNSIGNED_BYTE ? (oB || (oB = new Uint8Array(4 * IB * ZB)), zB = hB.UNSIGNED_BYTE) : (oB || (oB = new Float32Array(4 * IB * ZB)), zB = hB.FLOAT), GB && this.flushFramebuffer(), hB.readPixels(kB, cB, IB, ZB, … [truncated]
```

#### 144. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1555)

```diff
-     }), (0, Vt(40177).e)();
+     }), (0, ZB(40025).c)();
```

#### 145. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1558-L1559` → after: `L1558-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1558-L1559) · [Before (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1558-L1559)

```diff
-       const Vt = new mt.d(this, 12);
-       if (Vt.isCube = !0, 1 === this.Vw) return dt.d.Error("Depth cube texture is not supported by WebGL 1."), Vt;
+       const ZB = new GB.b(this, 12);
+       if (ZB.isCube = !0, 1 === this.cg) return vB.d.Error("Depth cube texture is not supported by WebGL 1."), ZB;
```

#### 146. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1586)

```diff
-         const Vt = this.needPOTTextures ? (0, jt.g)(et[0].width, this._caps.maxCubemapTextureSize) : et[0].width,
+         const ZB = this.needPOTTextures ? (0, kB.f)(IB[0].width, this._caps.maxCubemapTextureSize) : IB[0].width,
```

#### 147. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1592)

```diff
-         tt._useSRGBBuffer && 1 === this.Vw && (Qt = Xt);
+         BB._useSRGBBuffer && 1 === this.cg && (hB = nB);
```

#### 148. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1607)

```diff
-     Vt(40182);
+     ZB(40034);
```

#### 149. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1626)

```diff
-         Dt = new mt.d(this, 5);
+         oB = new GB.b(this, 5);
```

#### 150. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1634-L1635` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1634-L1635) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1634-L1635)

```diff
-     var wt = Vt(40194),
-       yt = Vt(40202);
+     var gB = ZB(40044),
+       qB = ZB(40052);
```

#### 151. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1647)

```diff
-         if (Qt ? tt.info.sphericalPolynomial && (jt._sphericalPolynomial = tt.info.sphericalPolynomial) : jt._sphericalPolynomial = jt._sphericalPolynomial ?? new wt.g, jt._source = 9, this.getCaps().textureLOD) return void(Dt && Dt(jt));
+         if (hB ? BB.info.sphericalPolynomial && (kB._sphericalPolynomial = BB.info.sphericalPolynomial) : kB._sphericalPolynomial = kB._sphericalPolynomial ?? new gB.f, kB._source = 9, this.getCaps().textureLOD) return void(oB && oB(kB));
```

#### 152. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1653)

```diff
-         } = await Vt.e(311).then((() => Vt(42023))), Et = [];
+         } = await ZB.e(311).then((() => ZB(41790))), FB = [];
```

#### 153. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1660)

```diff
-             Mt = new mt.d(this, 2);
+             UB = new GB.b(this, 2);
```

#### 154. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1667)

```diff
-           const bt = new yt.b(et);
+           const WB = new qB.e(IB);
```

#### 155. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1673)

```diff
-     var Mt = Vt(40119);
+     var UB = ZB(39976);
```

#### 156. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1678)

```diff
-       const Ot = new Mt.e(Vt);
+       const TB = new UB.d(ZB);
```

#### 157. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1683)

```diff
-       const Ot = new Mt.e(Vt);
+       const TB = new UB.d(ZB);
```

#### 158. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1696-L1697` → after: `L1696-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1696-L1697) · [Before (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1696-L1697)

```diff
-     var Jt = Vt(40068),
-       Ct = Vt(40092);
+     var dB = ZB(39912),
+       CB = ZB(39951);
```

#### 159. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1699-L1700` → after: `L1699-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1699-L1700) · [Before (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1699-L1700)

```diff
-     ut || (ut = !0, Ct.d.prototype.displayLoadingUI = function() {
-       if (!(0, Jt.j)()) return;
+     QB || (QB = !0, CB.c.prototype.displayLoadingUI = function() {
+       if (!(0, dB.l)()) return;
```

#### 160. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1703-L1704` → after: `L1703-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1703-L1704) · [Before (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1703-L1704)

```diff
-     }, Ct.d.prototype.hideLoadingUI = function() {
-       if (!(0, Jt.j)()) return;
+     }, CB.c.prototype.hideLoadingUI = function() {
+       if (!(0, dB.l)()) return;
```

#### 161. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1707)

```diff
-     }, Object.defineProperty(Ct.d.prototype, "loadingScreen", {
+     }, Object.defineProperty(CB.c.prototype, "loadingScreen", {
```

#### 162. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1709)

```diff
-         return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Ct.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
+         return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = CB.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
```

#### 163. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1716)

```diff
-     }), Object.defineProperty(Ct.d.prototype, "loadingUIText", {
+     }), Object.defineProperty(CB.c.prototype, "loadingUIText", {
```

#### 164. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1722)

```diff
-     }), Object.defineProperty(Ct.d.prototype, "loadingUIBackgroundColor", {
+     }), Object.defineProperty(CB.c.prototype, "loadingUIBackgroundColor", {
```

#### 165. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1728` → after: `L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1728) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1728)

```diff
-     })), (0, Vt(40158).d)();
+     })), (0, ZB(40015).d)();
```

#### 166. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1730)

```diff
-     Kt || (Kt = !0, Ct.d.prototype.getInputElement = function() {
+     sB || (sB = !0, CB.c.prototype.getInputElement = function() {
```

#### 167. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1732` → after: `L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1732) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1732)

```diff
-     }, Ct.d.prototype.getDepthFunction = function() {
+     }, CB.c.prototype.getDepthFunction = function() {
```

#### 168. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1734)

```diff
-     }, Ct.d.prototype.setDepthFunction = function(tt) {
+     }, CB.c.prototype.setDepthFunction = function(BB) {
```

#### 169. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1736)

```diff
-     }, Ct.d.prototype.setDepthFunctionToGreater = function() {
+     }, CB.c.prototype.setDepthFunctionToGreater = function() {
```

#### 170. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1738)

```diff
-     }, Ct.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
+     }, CB.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
```

#### 171. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1740)

```diff
-     }, Ct.d.prototype.setDepthFunctionToLess = function() {
+     }, CB.c.prototype.setDepthFunctionToLess = function() {
```

#### 172. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1742` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1742) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1742)

```diff
-     }, Ct.d.prototype.setDepthFunctionToLessOrEqual = function() {
+     }, CB.c.prototype.setDepthFunctionToLessOrEqual = function() {
```

#### 173. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1744` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1744) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1744)

```diff
-     }, Ct.d.prototype.getDepthWrite = function() {
+     }, CB.c.prototype.getDepthWrite = function() {
```

#### 174. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1746` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1746) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1746)

```diff
-     }, Ct.d.prototype.setDepthWrite = function(tt) {
+     }, CB.c.prototype.setDepthWrite = function(BB) {
```

#### 175. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1748)

```diff
-     }, Ct.d.prototype.setAlphaConstants = function(tt, et, Vt, Ot) {
+     }, CB.c.prototype.setAlphaConstants = function(BB, IB, ZB, TB) {
```

#### 176. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1750)

```diff
-     }, Ct.d.prototype.getAlphaMode = function() {
+     }, CB.c.prototype.getAlphaMode = function() {
```

#### 177. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1753)

```diff
-     }, Ct.d.prototype.getAlphaEquation = function() {
+     }, CB.c.prototype.getAlphaEquation = function() {
```

#### 178. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1758)

```diff
-     ht || (ht = !0, Ct.d.prototype.getStencilBuffer = function() {
+     wB || (wB = !0, CB.c.prototype.getStencilBuffer = function() {
```

#### 179. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1760)

```diff
-     }, Ct.d.prototype.setStencilBuffer = function(tt) {
+     }, CB.c.prototype.setStencilBuffer = function(BB) {
```

#### 180. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1762` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1762) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1762)

```diff
-     }, Ct.d.prototype.getStencilMask = function() {
+     }, CB.c.prototype.getStencilMask = function() {
```

#### 181. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1764)

```diff
-     }, Ct.d.prototype.setStencilMask = function(tt) {
+     }, CB.c.prototype.setStencilMask = function(BB) {
```

#### 182. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1766)

```diff
-     }, Ct.d.prototype.getStencilFunction = function() {
+     }, CB.c.prototype.getStencilFunction = function() {
```

#### 183. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1768` → after: `L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1768) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1768)

```diff
-     }, Ct.d.prototype.getStencilBackFunction = function() {
+     }, CB.c.prototype.getStencilBackFunction = function() {
```

#### 184. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1770` → after: `L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1770) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1770)

```diff
-     }, Ct.d.prototype.getStencilFunctionReference = function() {
+     }, CB.c.prototype.getStencilFunctionReference = function() {
```

#### 185. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1772` → after: `L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1772) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1772)

```diff
-     }, Ct.d.prototype.getStencilFunctionMask = function() {
+     }, CB.c.prototype.getStencilFunctionMask = function() {
```

#### 186. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1774` → after: `L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1774) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1774)

```diff
-     }, Ct.d.prototype.setStencilFunction = function(tt) {
+     }, CB.c.prototype.setStencilFunction = function(BB) {
```

#### 187. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1776` → after: `L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1776) · [Before (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1776)

```diff
-     }, Ct.d.prototype.setStencilBackFunction = function(tt) {
+     }, CB.c.prototype.setStencilBackFunction = function(BB) {
```

#### 188. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1778)

```diff
-     }, Ct.d.prototype.setStencilFunctionReference = function(tt) {
+     }, CB.c.prototype.setStencilFunctionReference = function(BB) {
```

#### 189. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1780)

```diff
-     }, Ct.d.prototype.setStencilFunctionMask = function(tt) {
+     }, CB.c.prototype.setStencilFunctionMask = function(BB) {
```

#### 190. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1782)

```diff
-     }, Ct.d.prototype.getStencilOperationFail = function() {
+     }, CB.c.prototype.getStencilOperationFail = function() {
```

#### 191. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1784` → after: `L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1784) · [Before (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1784)

```diff
-     }, Ct.d.prototype.getStencilBackOperationFail = function() {
+     }, CB.c.prototype.getStencilBackOperationFail = function() {
```

#### 192. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1786)

```diff
-     }, Ct.d.prototype.getStencilOperationDepthFail = function() {
+     }, CB.c.prototype.getStencilOperationDepthFail = function() {
```

#### 193. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1788` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1788) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1788)

```diff
-     }, Ct.d.prototype.getStencilBackOperationDepthFail = function() {
+     }, CB.c.prototype.getStencilBackOperationDepthFail = function() {
```

#### 194. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1790)

```diff
-     }, Ct.d.prototype.getStencilOperationPass = function() {
+     }, CB.c.prototype.getStencilOperationPass = function() {
```

#### 195. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1792)

```diff
-     }, Ct.d.prototype.getStencilBackOperationPass = function() {
+     }, CB.c.prototype.getStencilBackOperationPass = function() {
```

#### 196. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1794)

```diff
-     }, Ct.d.prototype.setStencilOperationFail = function(tt) {
+     }, CB.c.prototype.setStencilOperationFail = function(BB) {
```

#### 197. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1796` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1796) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1796)

```diff
-     }, Ct.d.prototype.setStencilBackOperationFail = function(tt) {
+     }, CB.c.prototype.setStencilBackOperationFail = function(BB) {
```

#### 198. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1798)

```diff
-     }, Ct.d.prototype.setStencilOperationDepthFail = function(tt) {
+     }, CB.c.prototype.setStencilOperationDepthFail = function(BB) {
```

#### 199. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1800)

```diff
-     }, Ct.d.prototype.setStencilBackOperationDepthFail = function(tt) {
+     }, CB.c.prototype.setStencilBackOperationDepthFail = function(BB) {
```

#### 200. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1802` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1802) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1802)

```diff
-     }, Ct.d.prototype.setStencilOperationPass = function(tt) {
+     }, CB.c.prototype.setStencilOperationPass = function(BB) {
```

#### 201. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1804)

```diff
-     }, Ct.d.prototype.setStencilBackOperationPass = function(tt) {
+     }, CB.c.prototype.setStencilBackOperationPass = function(BB) {
```

#### 202. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1806)

```diff
-     }, Ct.d.prototype.cacheStencilState = function() {
+     }, CB.c.prototype.cacheStencilState = function() {
```

#### 203. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1808)

```diff
-     }, Ct.d.prototype.restoreStencilState = function() {
+     }, CB.c.prototype.restoreStencilState = function() {
```

#### 204. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1811` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1811) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1811)

```diff
-     Vt(40244);
+     ZB(40094);
```

#### 205. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1813)

```diff
-     vt || (vt = !0, Ct.d.prototype.createDepthStencilTexture = function(tt, et, Vt) {
+     OB || (OB = !0, CB.c.prototype.createDepthStencilTexture = function(BB, IB, ZB) {
```

#### 206. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1820)

```diff
-     Vt(40246), Vt(40278);
+     ZB(40103), ZB(40137);
```

#### 207. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1830)

```diff
-   40031: (tt, et, Vt) => {
+   39876: (BB, IB, ZB) => {
```

#### 208. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1832)

```diff
-       c: () => Ct
+       e: () => CB
```

#### 209. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1834-L1837` → after: `L1834-L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1834-L1837) · [Before (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1834-L1837)

```diff
-     var Ot = Vt(40037),
-       qt = Vt(37359),
-       Dt = Vt(40048),
-       mt = Vt(40098);
+     var TB = ZB(39885),
+       JB = ZB(37147),
+       oB = ZB(39895),
+       GB = ZB(39959);
```

#### 210. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1844` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1844) · [Before (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1844)

```diff
-         let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.b.Now;
+         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.c.Now;
```

#### 211. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1913-L1917` → after: `L1913-L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1913-L1917) · [Before (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1913-L1917)

```diff
-     var Ht = Vt(40119),
-       Xt = Vt(38899),
-       Qt = Vt(40140),
-       lt = Vt(40092),
-       Et = Vt(40068);
+     var cB = ZB(39976),
+       nB = ZB(38718),
+       hB = ZB(39995),
+       zB = ZB(39951),
+       FB = ZB(39912);
```

#### 212. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1921)

```diff
-         if (!(0, Et.d)() || !document.body) return null;
+         if (!(0, FB.g)() || !document.body) return null;
```

#### 213. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1939)

```diff
-         return wt(mt) ? mt : null
+         return gB(GB) ? GB : null
```

#### 214. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1945)

```diff
-           "undefined" !== typeof OffscreenCanvas ? et = new OffscreenCanvas(64, 64) : (0, Et.d)() && "function" === typeof document.createElement && (et = document.createElement("canvas"), et.width = 64, et.height = 64);
+           "undefined" !== typeof OffscreenCanvas ? IB = new OffscreenCanvas(64, 64) : (0, FB.g)() && "function" === typeof document.createElement && (IB = document.createElement("canvas"), IB.width = 64, IB.height = 64);
```

#### 215. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1957)

```diff
-           return wt(mt) ? mt : null
+           return gB(GB) ? GB : null
```

#### 216. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1992-L1995` → after: `L1992-L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1992-L1995) · [Before (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1992-L1995)

```diff
-     var Nt = Vt(40155),
-       Mt = Vt(40085),
-       bt = Vt(40158),
-       Jt = Vt(40164);
+     var yB = ZB(40010),
+       UB = ZB(39943),
+       WB = ZB(40015),
+       dB = ZB(40021);
```

#### 217. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L1998)

```diff
-         return lt.d.NpmPackage
+         return zB.c.NpmPackage
```

#### 218. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2001` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2001) · [Before (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2001)

```diff
-         return lt.d.Version
+         return zB.c.Version
```

#### 219. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2004)

```diff
-         return qt.d.Instances
+         return JB.e.Instances
```

#### 220. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2007)

```diff
-         return qt.d.LastCreatedEngine
+         return JB.e.LastCreatedEngine
```

#### 221. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2010)

```diff
-         return qt.d.LastCreatedScene
+         return JB.e.LastCreatedScene
```

#### 222. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2013` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2013) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2013)

```diff
-         return lt.d.DefaultLoadingScreenFactory(tt)
+         return zB.c.DefaultLoadingScreenFactory(BB)
```

#### 223. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2026)

```diff
-         (0, bt.d)(), (0, Jt.b)(), super(tt, et, Vt, Ot), this._performanceMonitor = new dt, this._drawCalls = new Nt.e, tt && (this._features.supportRenderPasses = !0)
+         (0, WB.d)(), (0, dB.b)(), super(BB, IB, ZB, TB), this._performanceMonitor = new vB, this._drawCalls = new yB.c, BB && (this._features.supportRenderPasses = !0)
```

#### 224. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2050)

```diff
-             }(et), !lt.d.audioEngine && Vt.audioEngine && lt.d.AudioEngineFactory && (lt.d.audioEngine = lt.d.AudioEngineFactory(tt.getRenderingCanvas(), tt.getAudioContext(), tt.getAudioDestination())), (0, Et.d)() && (tt._onFullscreenChange = () => {
+             }(IB), !zB.c.audioEngine && ZB.audioEngine && zB.c.AudioEngineFactory && (zB.c.audioEngine = zB.c.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, FB.g)() && (BB._onFullscreenChange = () => {
```

#### 225. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2054` → after: `L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2054) · [Before (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2054)

```diff
-             }, document.addEventListener("pointerlockchange", tt._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", tt._onPointerLockChange, !1)), tt.enableOfflineSupport = void 0 !== lt.d.OfflineProviderFactory, tt._deterministicLockstep = !!Vt.deter … [truncated]
+             }, document.addEventListener("pointerlockchange", BB._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", BB._onPointerLockChange, !1)), BB.enableOfflineSupport = void 0 !== zB.c.OfflineProviderFactory, BB._deterministicLockstep = !!ZB.deter … [truncated]
```

#### 226. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2075` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2075) · [Before (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2075)

```diff
-               qt(`Error loading image ${Dt.src}`)
+               JB(`Error loading image ${oB.src}`)
```

#### 227. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2134)

```diff
-         this._measureFps(), super.QJ()
+         this._measureFps(), super.dW()
```

#### 228. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2150)

```diff
-         if (Ot.attachShader(Dt, et), Ot.attachShader(Dt, Vt), this.Vw > 1 && qt) {
+         if (TB.attachShader(oB, IB), TB.attachShader(oB, ZB), this.cg > 1 && JB) {
```

#### 229. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2154` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2154) · [Before (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2154)

```diff
-         return Ot.linkProgram(Dt), this.Vw > 1 && qt && this.bindTransformFeedback(null), tt.context = Ot, tt.vertexShader = et, tt.fragmentShader = Vt, tt.isParallelCompiled || this._finalizePipelineContext(tt), Dt
+         return TB.linkProgram(oB), this.cg > 1 && JB && this.bindTransformFeedback(null), BB.context = TB, BB.vertexShader = IB, BB.fragmentShader = ZB, BB.isParallelCompiled || this._finalizePipelineContext(BB), oB
```

#### 230. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2199-L2200` → after: `L2199-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2199-L2200) · [Before (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2199-L2200)

```diff
-         const mt = new Qt.d(tt, this._gl),
-           dt = new Ot.d(this, 15, !0);
+         const GB = new hB.c(BB, this._gl),
+           vB = new TB.b(this, 15, !0);
```

#### 231. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2209)

```diff
-           } tt._hardwareTexture = new Qt.d(et, this._gl), tt.isReady = !0, tt._cachedCoordinatesMode = null, tt._cachedWrapU = null, tt._cachedWrapV = null, tt._cachedWrapR = null, tt._cachedAnisotropicFilteringLevel = null;
+           } BB._hardwareTexture = new hB.c(IB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
```

#### 232. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2237)

```diff
-         if (1 === this.Vw) return void Xt.d.Error("WebGL 1 does not support texture comparison.");
+         if (1 === this.cg) return void nB.d.Error("WebGL 1 does not support texture comparison.");
```

#### 233. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2244-L2245` → after: `L2244-L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2244-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2244-L2245) · [Before (L2244-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2244-L2245)

```diff
-         const Vt = new Ht.e(et);
-         return Vt.uQ = tt, this.bindArrayBuffer(Vt), this._gl.bufferData(this._gl.ARRAY_BUFFER, tt, this._gl.DYNAMIC_DRAW), Vt.references = 1, Vt
+         const ZB = new cB.d(IB);
+         return ZB.ah = BB, this.bindArrayBuffer(ZB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), ZB.references = 1, ZB
```

#### 234. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2255)

```diff
-           (0, Mt.g)((() => {
+           (0, UB.f)((() => {
```

#### 235. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2273)

```diff
-             1 === qt.d.Instances.length && lt.d.audioEngine && (lt.d.audioEngine.dispose(), lt.d.audioEngine = null);
+             1 === JB.e.Instances.length && zB.c.audioEngine && (zB.c.audioEngine.dispose(), zB.c.audioEngine = null);
```

#### 236. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2275)

```diff
-             Vt && "function" === typeof Vt.removeEventListener && (Vt.removeEventListener("blur", tt._onBlur), Vt.removeEventListener("focus", tt._onFocus)), et && (et.removeEventListener("focus", tt._onCanvasFocus), et.removeEventListener("blur", tt._onCanvasBlur), et.removeEven … [truncated]
+             ZB && "function" === typeof ZB.removeEventListener && (ZB.removeEventListener("blur", BB._onBlur), ZB.removeEventListener("focus", BB._onFocus)), IB && (IB.removeEventListener("focus", BB._onCanvasFocus), IB.removeEventListener("blur", BB._onCanvasBlur), IB.removeEven … [truncated]
```

#### 237. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2281)

```diff
-   40188: (tt, et, Vt) => {
+   40042: (BB, IB, ZB) => {
```

#### 238. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2283)

```diff
-       d: () => qt
+       c: () => JB
```

#### 239. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2285` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2285) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2285)

```diff
-     var Ot = Vt(40148);
+     var TB = ZB(40003);
```

#### 240. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2291)

```diff
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = tt, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, t … [truncated]
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, B … [truncated]
```

#### 241. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2340)

```diff
-         return et.isCube ? 6 * Vt + Ot : et.is3D ? 0 : Vt
+         return IB.isCube ? 6 * ZB + TB : IB.is3D ? 0 : ZB
```

#### 242. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2362)

```diff
-         Array.isArray(tt) ? this._textures = tt : this._textures = tt ? [tt] : null
+         Array.isArray(BB) ? this._textures = BB : this._textures = BB ? [BB] : null
```

#### 243. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2436` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2436) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2436)

```diff
-                 ydt: Ot,
+                 GvB: TB,
```

#### 244. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2497)

```diff
-   40621: (tt, et, Vt) => {
+   40473: (BB, IB, ZB) => {
```

#### 245. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2529)

```diff
-   40281: (tt, et, Vt) => {
+   40141: (BB, IB, ZB) => {
```

#### 246. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2531` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2531) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2531)

```diff
-       d: () => mt
+       b: () => GB
```

#### 247. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2533)

```diff
-     var Ot = Vt(38899);
+     var TB = ZB(38718);
```

#### 248. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2539)

```diff
-       })(tt) && Ot.d.Warn(`Extension with the name '${tt}' already exists`), qt.set(tt, et)
+       })(BB) && TB.d.Warn(`Extension with the name '${BB}' already exists`), JB.set(BB, IB)
```

#### 249. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2543)

```diff
-       "image/ktx" !== et && "image/ktx2" !== et || (tt = ".ktx"), qt.has(tt) || (tt.endsWith(".ies") && Dt(".ies", (async () => await Vt.e(314).then((() => Vt(42040))).then((tt => new tt._IESTextureLoader)))), tt.endsWith(".dds") && Dt(".dds", (async () => await Vt.e(312).then((( … [truncated]
+       "image/ktx" !== IB && "image/ktx2" !== IB || (BB = ".ktx"), JB.has(BB) || (BB.endsWith(".ies") && oB(".ies", (async () => await ZB.e(314).then((() => ZB(41798))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && oB(".dds", (async () => await ZB.e(312).then((( … [truncated]
```

#### 250. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2548)

```diff
-   40642: (tt, et, Vt) => {
+   40498: (BB, IB, ZB) => {
```

#### 251. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2550-L2551` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2550-L2551) · [Before (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2550-L2551)

```diff
-       e: () => mt,
-       i: () => Ht
+       c: () => GB,
+       d: () => cB
```

#### 252. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2553-L2557` → after: `L2553-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2553-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2553-L2557) · [Before (L2553-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2553-L2557)

```diff
-     var Ot = Vt(40474),
-       qt = Vt(40239),
-       Dt = Vt(37390);
-     class mt extends Ot.c {
-       get N9() {
+     var TB = ZB(40339),
+       JB = ZB(40092),
+       oB = ZB(37170);
+     class GB extends TB.e {
+       get JBB() {
```

#### 253. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2560)

```diff
-       set N9(tt) {
+       set JBB(BB) {
```

#### 254. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2564` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2564) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2564)

```diff
-         return this.N9
+         return this.JBB
```

#### 255. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2567` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2567) · [Before (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2567)

```diff
-         super(tt, et, !0), this._waitingSubMaterialsUniqueIds = [], this.vI().addMultiMaterial(this), this.N9 = [], this._storeEffectOnSubMeshes = !0
+         super(BB, IB, !0), this._waitingSubMaterialsUniqueIds = [], this.JR().addMultiMaterial(this), this.JBB = [], this._storeEffectOnSubMeshes = !0
```

#### 256. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2584)

```diff
-         return tt < 0 || tt >= this.N9.length ? this.vI().defaultMaterial : this.N9[tt]
+         return BB < 0 || BB >= this.JBB.length ? this.JR().defaultMaterial : this.JBB[BB]
```

#### 257. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2587)

```diff
-         return super.getActiveTextures().concat(...this.N9.map((tt => tt ? tt.getActiveTextures() : [])))
+         return super.getActiveTextures().concat(...this.JBB.map((BB => BB ? BB.getActiveTextures() : [])))
```

#### 258. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2591-L2592` → after: `L2591-L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2591-L2592) · [Before (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2591-L2592)

```diff
-         for (let et = 0; et < this.N9.length; et++)
-           if (this.N9[et]?.hasTexture(tt)) return !0;
+         for (let IB = 0; IB < this.JBB.length; IB++)
+           if (this.JBB[IB]?.hasTexture(BB)) return !0;
```

#### 259. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2599-L2600` → after: `L2599-L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2599-L2600) · [Before (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2599-L2600)

```diff
-         for (let Ot = 0; Ot < this.N9.length; Ot++) {
-           const qt = this.N9[Ot];
+         for (let TB = 0; TB < this.JBB.length; TB++) {
+           const JB = this.JBB[TB];
```

#### 260. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2612-L2613` → after: `L2612-L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2612-L2613) · [Before (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2612-L2613)

```diff
-         const Vt = new mt(tt, this.vI());
-         for (let Ot = 0; Ot < this.N9.length; Ot++) {
+         const ZB = new GB(BB, this.JR());
+         for (let TB = 0; TB < this.JBB.length; TB++) {
```

#### 261. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2615-L2616` → after: `L2615-L2616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2615-L2616) · [Before (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2615-L2616)

```diff
-           const Dt = this.N9[Ot];
-           qt = et && Dt ? Dt.clone(tt + "-" + Dt.name) : this.N9[Ot], Vt.N9.push(qt)
+           const oB = this.JBB[TB];
+           JB = IB && oB ? oB.clone(BB + "-" + oB.name) : this.JBB[TB], ZB.JBB.push(JB)
```

#### 262. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2622-L2624` → after: `L2622-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2622-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2622-L2624) · [Before (L2622-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2622-L2624)

```diff
-         tt.name = this.name, tt.id = this.id, tt.uniqueId = this.uniqueId, qt.d && (tt.tags = qt.d.GetTags(this)), tt.materialsUniqueIds = [], tt.materials = [];
-         for (let et = 0; et < this.N9.length; et++) {
-           const Vt = this.N9[et];
+         BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, JB.b && (BB.tags = JB.b.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
+         for (let IB = 0; IB < this.JBB.length; IB++) {
+           const ZB = this.JBB[IB];
```

#### 263. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2630` → after: `L2630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2630) · [Before (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2630)

```diff
-         const Ot = this.vI();
+         const TB = this.JR();
```

#### 264. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2633-L2634` → after: `L2633-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2633-L2634) · [Before (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2633-L2634)

```diff
-           for (let Dt = 0; Dt < this.N9.length; Dt++) {
-             const Vt = this.N9[Dt];
+           for (let oB = 0; oB < this.JBB.length; oB++) {
+             const ZB = this.JBB[oB];
```

#### 265. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2645` → after: `L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2645) · [Before (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2645)

```diff
-       if (Vt.id = tt.id, Vt._loadedUniqueId = tt.uniqueId, qt.d && qt.d.AddTagsTo(Vt, tt.tags), tt.materialsUniqueIds) Vt._waitingSubMaterialsUniqueIds = tt.materialsUniqueIds;
+       if (ZB.id = BB.id, ZB._loadedUniqueId = BB.uniqueId, JB.b && JB.b.AddTagsTo(ZB, BB.tags), BB.materialsUniqueIds) ZB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
```

#### 266. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2647` → after: `L2647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2647) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2647)

```diff
-         for (const Ot of tt.materials) Vt.N9.push(et.getLastMaterialById(Ot));
+         for (const TB of BB.materials) ZB.JBB.push(IB.getLastMaterialById(TB));
```

#### 267. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2655` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2655) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2655)

```diff
-   40418: (tt, et, Vt) => {
+   40277: (BB, IB, ZB) => {
```

#### 268. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2657` → after: `L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2657) · [Before (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2657)

```diff
-       b: () => mt
+       c: () => GB
```

#### 269. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2659` → after: `L2659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2659) · [Before (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2659)

```diff
-     var Ot, qt, Dt = Vt(37336);
+     var TB, JB, oB = ZB(37120);
```

#### 270. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2664` → after: `L2664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2664) · [Before (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2664)

```diff
-     mt.X = new Dt.n(1, 0, 0), mt.Y = new Dt.n(0, 1, 0), mt.Z = new Dt.n(0, 0, 1),
+     GB.X = new oB.s(1, 0, 0), GB.Y = new oB.s(0, 1, 0), GB.Z = new oB.s(0, 0, 1),
```

#### 271. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2669` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2669) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2669)

```diff
-   40194: (tt, et, Vt) => {
+   40044: (BB, IB, ZB) => {
```

#### 272. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2671-L2672` → after: `L2671-L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2671-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2671-L2672) · [Before (L2671-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2671-L2672)

```diff
-       e: () => jt,
-       g: () => Ht
+       c: () => kB,
+       f: () => cB
```

#### 273. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2674)

```diff
-     var Ot = Vt(37336);
+     var TB = ZB(37120);
```

#### 274. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2681)

```diff
-         this.preScaled = !1, this.l00 = Ot.n.Zero(), this.l1_1 = Ot.n.Zero(), this.l10 = Ot.n.Zero(), this.l11 = Ot.n.Zero(), this.l2_2 = Ot.n.Zero(), this.l2_1 = Ot.n.Zero(), this.l20 = Ot.n.Zero(), this.l21 = Ot.n.Zero(), this.l22 = Ot.n.Zero()
+         this.preScaled = !1, this.l00 = TB.s.Zero(), this.l1_1 = TB.s.Zero(), this.l10 = TB.s.Zero(), this.l11 = TB.s.Zero(), this.l2_2 = TB.s.Zero(), this.l2_1 = TB.s.Zero(), this.l20 = TB.s.Zero(), this.l21 = TB.s.Zero(), this.l22 = TB.s.Zero()
```

#### 275. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2684-L2687` → after: `L2684-L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2684-L2687) · [Before (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2684-L2687)

```diff
-         Ot.k.uf[0].set(et.r, et.g, et.b);
-         const qt = Ot.k.uf[0],
-           Dt = Ot.k.uf[1];
-         qt.scaleToRef(Vt, Dt), Dt.scaleToRef(mt(0, tt), Ot.k.uf[2]), this.l00.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(1, tt), Ot.k.uf[2]), this.l1_1.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(2, tt), Ot.k.uf[2]), this.l10.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(3, tt), Ot.k.uf[2] … [truncated]
+         TB.m.rN[0].set(IB.r, IB.g, IB.b);
+         const JB = TB.m.rN[0],
+           oB = TB.m.rN[1];
+         JB.scaleToRef(ZB, oB), oB.scaleToRef(GB(0, BB), TB.m.rN[2]), this.l00.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(1, BB), TB.m.rN[2]), this.l1_1.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(2, BB), TB.m.rN[2]), this.l10.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(3, BB), TB.m.rN[2] … [truncated]
```

#### 276. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2702)

```diff
-         return Ot.n.FromArrayToRef(tt[0], 0, this.l00), Ot.n.FromArrayToRef(tt[1], 0, this.l1_1), Ot.n.FromArrayToRef(tt[2], 0, this.l10), Ot.n.FromArrayToRef(tt[3], 0, this.l11), Ot.n.FromArrayToRef(tt[4], 0, this.l2_2), Ot.n.FromArrayToRef(tt[5], 0, this.l2_1), Ot.n.FromArrayTo … [truncated]
+         return TB.s.FromArrayToRef(BB[0], 0, this.l00), TB.s.FromArrayToRef(BB[1], 0, this.l1_1), TB.s.FromArrayToRef(BB[2], 0, this.l10), TB.s.FromArrayToRef(BB[3], 0, this.l11), TB.s.FromArrayToRef(BB[4], 0, this.l2_2), TB.s.FromArrayToRef(BB[5], 0, this.l2_1), TB.s.FromArrayTo … [truncated]
```

#### 277. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2705` → after: `L2705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2705) · [Before (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2705)

```diff
-         return Ot.n.FromFloatsToRef(tt[0], tt[1], tt[2], this.l00), Ot.n.FromFloatsToRef(tt[3], tt[4], tt[5], this.l1_1), Ot.n.FromFloatsToRef(tt[6], tt[7], tt[8], this.l10), Ot.n.FromFloatsToRef(tt[9], tt[10], tt[11], this.l11), Ot.n.FromFloatsToRef(tt[12], tt[13], tt[14], this. … [truncated]
+         return TB.s.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), TB.s.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), TB.s.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), TB.s.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), TB.s.FromFloatsToRef(BB[12], BB[13], BB[14], this. … [truncated]
```

#### 278. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2717` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2717) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2717)

```diff
-         this.x = Ot.n.Zero(), this.y = Ot.n.Zero(), this.z = Ot.n.Zero(), this.xx = Ot.n.Zero(), this.yy = Ot.n.Zero(), this.zz = Ot.n.Zero(), this.xy = Ot.n.Zero(), this.yz = Ot.n.Zero(), this.zx = Ot.n.Zero()
+         this.x = TB.s.Zero(), this.y = TB.s.Zero(), this.z = TB.s.Zero(), this.xx = TB.s.Zero(), this.yy = TB.s.Zero(), this.zz = TB.s.Zero(), this.xy = TB.s.Zero(), this.yz = TB.s.Zero(), this.zx = TB.s.Zero()
```

#### 279. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2723-L2724` → after: `L2723-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2723-L2724) · [Before (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2723-L2724)

```diff
-         Ot.k.uf[0].W9(tt.r, tt.g, tt.b);
-         const et = Ot.k.uf[0];
+         TB.m.rN[0].cBB(BB.r, BB.g, BB.b);
+         const IB = TB.m.rN[0];
```

#### 280. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2731)

```diff
-         return this._harmonics = tt, this.x.rK(tt.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.rK(tt.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.rK(tt.l10), this.z.scaleInPlace(1.02333), this.xx.rK(tt.l00), Ot.k.uf[0].rK(tt.l20).scaleInPlace(.24770 … [truncated]
+         return this._harmonics = BB, this.x.TY(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.TY(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.TY(BB.l10), this.z.scaleInPlace(1.02333), this.xx.TY(BB.l00), TB.m.rN[0].TY(BB.l20).scaleInPlace(.24770 … [truncated]
```

#### 281. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2738` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2738) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2738)

```diff
-         return Ot.n.FromArrayToRef(tt[0], 0, et.x), Ot.n.FromArrayToRef(tt[1], 0, et.y), Ot.n.FromArrayToRef(tt[2], 0, et.z), Ot.n.FromArrayToRef(tt[3], 0, et.xx), Ot.n.FromArrayToRef(tt[4], 0, et.yy), Ot.n.FromArrayToRef(tt[5], 0, et.zz), Ot.n.FromArrayToRef(tt[6], 0, et.yz), Ot … [truncated]
+         return TB.s.FromArrayToRef(BB[0], 0, IB.x), TB.s.FromArrayToRef(BB[1], 0, IB.y), TB.s.FromArrayToRef(BB[2], 0, IB.z), TB.s.FromArrayToRef(BB[3], 0, IB.xx), TB.s.FromArrayToRef(BB[4], 0, IB.yy), TB.s.FromArrayToRef(BB[5], 0, IB.zz), TB.s.FromArrayToRef(BB[6], 0, IB.yz), TB … [truncated]
```

#### 282. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2742)

```diff
-   40633: (tt, et, Vt) => {
+   40488: (BB, IB, ZB) => {
```

#### 283. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2744-L2745` → after: `L2744-L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2744-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2744-L2745) · [Before (L2744-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2744-L2745)

```diff
-       e: () => Pt,
-       f: () => Lt
+       b: () => MB,
+       d: () => PB
```

#### 284. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2747-L2755` → after: `L2747-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2747-L2755) · [Before (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2747-L2755)

```diff
-     var Ot = Vt(40211),
-       qt = Vt(37367),
-       Dt = Vt(37336),
-       mt = Vt(40343),
-       dt = Vt(40608),
-       jt = Vt(40638),
-       Ht = Vt(40340),
-       Xt = Vt(40490),
-       Qt = Vt(40337);
+     var TB = ZB(40061),
+       JB = ZB(37153),
+       oB = ZB(37120),
+       GB = ZB(40188),
+       vB = ZB(40463),
+       kB = ZB(40492),
+       cB = ZB(40185),
+       nB = ZB(40351),
+       hB = ZB(40177);
```

#### 285. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2758` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2758) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2758)

```diff
-         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Dt.n(0, 0, 0), this._diffPositionForCollisions = new Dt.n(0, 0, 0), this._collisionResponse = !0
+         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new oB.s(0, 0, 0), this._diffPositionForCollisions = new oB.s(0, 0, 0), this._collisionResponse = !0
```

#### 286. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2761-L2770` → after: `L2761-L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2761-L2770) · [Before (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2761-L2770)

```diff
-     var Et, ft, wt, yt = Vt(40080),
-       Nt = Vt(40272),
-       Mt = Vt(40503),
-       bt = Vt(37513),
-       Jt = Vt(37342),
-       Ct = Vt(40418),
-       ut = Vt(38899),
-       Kt = Vt(40213),
-       ht = Vt(40092),
-       vt = Vt(37390);
+     var FB, NB, gB, qB = ZB(39931),
+       yB = ZB(40134),
+       UB = ZB(40361),
+       WB = ZB(37311),
+       dB = ZB(37129),
+       CB = ZB(40277),
+       QB = ZB(38718),
+       sB = ZB(40065),
+       wB = ZB(39951),
+       OB = ZB(37170);
```

#### 287. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2777)

```diff
-       tt instanceof Float32Array ? Dt.c.FromArrayToRef(tt, et, Vt) : Vt.W9((0, Nt.e)(tt[et]), (0, Nt.e)(tt[et + 1]), (0, Nt.e)(tt[et + 2]), (0, Nt.e)(tt[et + 3]), (0, Nt.e)(tt[et + 4]), (0, Nt.e)(tt[et + 5]), (0, Nt.e)(tt[et + 6]), (0, Nt.e)(tt[et + 7]), (0, Nt.e)(tt[et + 8]), (0 … [truncated]
+       BB instanceof Float32Array ? oB.b.FromArrayToRef(BB, IB, ZB) : ZB.cBB((0, yB.c)(BB[IB]), (0, yB.c)(BB[IB + 1]), (0, yB.c)(BB[IB + 2]), (0, yB.c)(BB[IB + 3]), (0, yB.c)(BB[IB + 4]), (0, yB.c)(BB[IB + 5]), (0, yB.c)(BB[IB + 6]), (0, yB.c)(BB[IB + 7]), (0, yB.c)(BB[IB + 8]), ( … [truncated]
```

#### 288. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2795-L2797` → after: `L2795-L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2795-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2795-L2797) · [Before (L2795-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2795-L2797)

```diff
-       const yt = Dt.k.uf[0],
-         Nt = Dt.k.Matrix[0],
-         Mt = Dt.k.Matrix[1],
+       const qB = oB.m.rN[0],
+         yB = oB.m.Matrix[0],
+         UB = oB.m.Matrix[1],
```

#### 289. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2799` → after: `L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2799) · [Before (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2799)

```diff
-         Jt = et === mt.m.NormalKind ? Dt.n.TransformNormalFromFloatsToRef : Dt.n.TransformCoordinatesFromFloatsToRef;
+         dB = IB === GB.i.NormalKind ? oB.s.TransformNormalFromFloatsToRef : oB.s.TransformCoordinatesFromFloatsToRef;
```

#### 290. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2811` → after: `L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2811) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2811)

```diff
-         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Dt.n.Zero(), this.subDiv = {
+         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = oB.s.Zero(), this.subDiv = {
```

#### 291. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2826` → after: `L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2826) · [Before (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2826)

```diff
-         let et, lt = jt.d,
+         let IB, zB = kB.g,
```

#### 292. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2830)

```diff
-             return jt.d.BILLBOARDMODE_NONE
+             return kB.g.BILLBOARDMODE_NONE
```

#### 293. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2833` → after: `L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2833) · [Before (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2833)

```diff
-             return jt.d.BILLBOARDMODE_X
+             return kB.g.BILLBOARDMODE_X
```

#### 294. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2836` → after: `L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2836) · [Before (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2836)

```diff
-             return jt.d.BILLBOARDMODE_Y
+             return kB.g.BILLBOARDMODE_Y
```

#### 295. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2839` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2839) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2839)

```diff
-             return jt.d.BILLBOARDMODE_Z
+             return kB.g.BILLBOARDMODE_Z
```

#### 296. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2842` → after: `L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2842) · [Before (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2842)

```diff
-             return jt.d.BILLBOARDMODE_ALL
+             return kB.g.BILLBOARDMODE_ALL
```

#### 297. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2845` → after: `L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2845) · [Before (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2845)

```diff
-             return jt.d.BILLBOARDMODE_USE_POSITION
+             return kB.g.BILLBOARDMODE_USE_POSITION
```

#### 298. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2947` → after: `L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L2947) · [Before (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L2947)

```diff
-             this._internalAbstractMeshDataInfo._material !== tt && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
+             this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
```

#### 299. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3042)

```diff
-             switch (super(et, Ot, !1), Vt = this, this._internalAbstractMeshDataInfo = new It, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = tt.CULLINGSTRATEGY … [truncated]
+             switch (super(IB, TB, !1), ZB = this, this._internalAbstractMeshDataInfo = new HB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY … [truncated]
```

#### 300. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3045-L3046` → after: `L3045-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3045-L3046) · [Before (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3045-L3046)

```diff
-                 eZ: null
-               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new qt.c, this._onCollisionPositionChange = function(tt, et) {
+                 yR: null
+               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new JB.b, this._onCollisionPositionChange = function(BB, IB) {
```

#### 301. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3048-L3049` → after: `L3048-L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3048-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3048-L3049) · [Before (L3048-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3048-L3049)

```diff
-                 et.subtractToRef(Vt._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Vt._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Vt._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
-               }, Ot = this.vI(), this.layerMask = Ot.defaultRenderableLayerMask, Ot.oOt(this), this._resyncLightSources(), this._uniformBuffer = new Qt.c(this.vI().Jf(), void 0, void 0, et, !this.vI().Jf().isWebGPU), this._buildUniformLayout(), Ot.performancePriority) {
+                 IB.subtractToRef(ZB._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ZB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ZB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
+               }, TB = this.JR(), this.layerMask = TB.defaultRenderableLayerMask, TB.jTB(this), this._resyncLightSources(), this._uniformBuffer = new hB.d(this.JR().PN(), void 0, void 0, IB, !this.JR().PN().isWebGPU), this._buildUniformLayout(), TB.performancePriority) {
```

#### 302. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3051` → after: `L3051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3051) · [Before (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3051)

```diff
-                 this.hf = !0;
+                 this.XN = !0;
```

#### 303. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3053` → after: `L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3053) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3053)

```diff
-                 this.Cf = !0, this.Gw = !1
+                 this.RN = !0, this.tg = !1
```

#### 304. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3061` → after: `L3061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3061) · [Before (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3061)

```diff
-             et.x_("world", tt), et.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), et.update()
+             IB.T6("world", BB), IB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), IB.update()
```

#### 305. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3074` → after: `L3074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3074) · [Before (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3074)

```diff
-             et += ", # of submeshes: " + (this.vJ ? this.vJ.length : 0);
+             IB += ", # of submeshes: " + (this.EW ? this.EW.length : 0);
```

#### 306. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3076` → after: `L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3076) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3076)

```diff
-             return Vt && (et += ", skeleton: " + Vt.name), tt && (et += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], et += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.eZ ? "YES" : "NO")), et
+             return ZB && (IB += ", skeleton: " + ZB.name), BB && (IB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], IB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.yR ? "YES" : "NO")), IB
```

#### 307. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3079` → after: `L3079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3079) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3079)

```diff
-             return this._masterMesh && this.billboardMode !== jt.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
+             return this._masterMesh && this.billboardMode !== kB.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
```

#### 308. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3091-L3092` → after: `L3091-L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3091-L3092) · [Before (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3091-L3092)

```diff
-             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.vJ) {
-               for (const tt of this.vJ) tt._rebuild();
+             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.EW) {
+               for (const BB of this.EW) BB._rebuild();
```

#### 309. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3098` → after: `L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3098) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3098)

```diff
-             for (const tt of this.vI().lights) tt.isEnabled() && tt.canAffectMesh(this) && this._lightSources.push(tt);
+             for (const BB of this.JR().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
```

#### 310. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3115` → after: `L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3115) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3115)

```diff
-             for (const tt of this.vJ) tt.setEffect(null)
+             for (const BB of this.EW) BB.setEffect(null)
```

#### 311. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3121-L3122` → after: `L3121-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3121-L3122) · [Before (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3121-L3122)

```diff
-             if (this.vJ)
-               for (const et of this.vJ)
+             if (this.EW)
+               for (const IB of this.EW)
```

#### 312. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3138-L3139` → after: `L3138-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3138-L3139) · [Before (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3138-L3139)

```diff
-           fVt(tt) {
-             return this._currentRenderId = Number.MAX_VALUE, super.fVt(tt), this._isDirty = !0, this
+           GZB(BB) {
+             return this._currentRenderId = Number.MAX_VALUE, super.GZB(BB), this._isDirty = !0, this
```

#### 313. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3143-L3144` → after: `L3143-L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3143-L3144) · [Before (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3143-L3144)

```diff
-             if (this.vJ)
-               for (const Vt of this.vJ) Vt.resetDrawCache(tt, et)
+             if (this.EW)
+               for (const ZB of this.EW) ZB.resetDrawCache(BB, IB)
```

#### 314. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3158` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3158) · [Before (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3158)

```diff
-           zOt() {
+           MTB() {
```

#### 315. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3177` → after: `L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3177) · [Before (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3177)

```diff
-             return this._masterMesh ? this._masterMesh.fL() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
+             return this._masterMesh ? this._masterMesh.qm() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
```

#### 316. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3180` → after: `L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3180) · [Before (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3180)

```diff
-             return this.rawBoundingInfo ?? this.fL()
+             return this.rawBoundingInfo ?? this.qm()
```

#### 317. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3189)

```diff
-             return this._boundingInfo = new Xt.c(tt, et, Vt), this._boundingInfo
+             return this._boundingInfo = new nB.d(BB, IB, ZB), this._boundingInfo
```

#### 318. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3198` → after: `L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3198) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3198)

```diff
-             return this.skeleton && this.vI().skeletonsEnabled && this.isVerticesDataPresent(mt.m.MatricesIndicesKind) && this.isVerticesDataPresent(mt.m.MatricesWeightsKind)
+             return this.skeleton && this.JR().skeletonsEnabled && this.isVerticesDataPresent(GB.i.MatricesIndicesKind) && this.isVerticesDataPresent(GB.i.MatricesWeightsKind)
```

#### 319. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3209` → after: `L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3209) · [Before (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3209)

```diff
-             return this._masterMesh && this.billboardMode === jt.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
+             return this._masterMesh && this.billboardMode === kB.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
```

#### 320. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3217` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3217) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3217)

```diff
-           get cqt() {
+           get sJB() {
```

#### 321. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3227-L3229` → after: `L3227-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3227-L3229) · [Before (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3227-L3229)

```diff
-             const Ot = new Dt.c;
-             (this.rotationQuaternion ? this.rotationQuaternion : Dt.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Ot);
-             const qt = Dt.n.Zero(),
+             const TB = new oB.b;
+             (this.rotationQuaternion ? this.rotationQuaternion : oB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(TB);
+             const JB = oB.s.Zero(),
```

#### 322. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3231` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3231) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3231)

```diff
-             return Dt.n.TransformCoordinatesFromFloatsToRef(tt * mt, et, Vt * mt, Ot, qt), qt
+             return oB.s.TransformCoordinatesFromFloatsToRef(BB * GB, IB, ZB * GB, TB, JB), JB
```

#### 323. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3238)

```diff
-             return new Dt.n(tt * Ot, et, Vt * Ot)
+             return new oB.s(BB * TB, IB, ZB * TB)
```

#### 324. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3242-L3243` → after: `L3242-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3242-L3243) · [Before (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3242-L3243)

```diff
-               const Vt = (0, Mt.f)(tt, 0, this.getTotalVertices(), et);
-               this._boundingInfo ? this._boundingInfo.reConstruct(Vt.minimum, Vt.maximum) : this._boundingInfo = new Xt.c(Vt.minimum, Vt.maximum)
+               const ZB = (0, UB.e)(BB, 0, this.getTotalVertices(), IB);
+               this._boundingInfo ? this._boundingInfo.reConstruct(ZB.minimum, ZB.maximum) : this._boundingInfo = new nB.d(ZB.minimum, ZB.maximum)
```

#### 325. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3245-L3246` → after: `L3245-L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3245-L3246) · [Before (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3245-L3246)

```diff
-             if (this.vJ)
-               for (let Vt = 0; Vt < this.vJ.length; Vt++) this.vJ[Vt].refreshBoundingInfo(tt);
+             if (this.EW)
+               for (let ZB = 0; ZB < this.EW.length; ZB++) this.EW[ZB].refreshBoundingInfo(BB);
```

#### 326. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3250-L3251` → after: `L3250-L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3250-L3251) · [Before (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3250-L3251)

```diff
-             if (this._boundingInfo ? this._boundingInfo.reConstruct(tt.minimum, tt.maximum) : this._boundingInfo = new Xt.c(tt.minimum, tt.maximum), this.vJ)
-               for (let et = 0; et < this.vJ.length; et++) this.vJ[et].refreshBoundingInfo(null);
+             if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new nB.d(BB.minimum, BB.maximum), this.EW)
+               for (let IB = 0; IB < this.EW.length; IB++) this.EW[IB].refreshBoundingInfo(null);
```

#### 327. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3256-L3259` → after: `L3256-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3256-L3259) · [Before (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3256-L3259)

```diff
-               const Ht = Dt.k.uf[0],
-                 Xt = Dt.k.Matrix[0],
-                 Qt = Dt.k.Matrix[1],
-                 lt = et === mt.m.NormalKind ? Dt.n.TransformNormalFromFloatsToRef : Dt.n.TransformCoordinatesFromFloatsToRef;
+               const cB = oB.m.rN[0],
+                 nB = oB.m.Matrix[0],
+                 hB = oB.m.Matrix[1],
+                 zB = IB === GB.i.NormalKind ? oB.s.TransformNormalFromFloatsToRef : oB.s.TransformCoordinatesFromFloatsToRef;
```

#### 328. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3262` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3262) · [Before (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3262)

```diff
-                 for (Xt.reset(), et = 0; et < 4; et++) ft = qt[Et + et], ft > 0 && (Dt.c.FromFloat32ArrayToRefScaled(Vt, Math.floor(16 * Ot[Et + et]), ft, Qt), Xt.addToSelf(Qt));
+                 for (nB.reset(), IB = 0; IB < 4; IB++) NB = JB[FB + IB], NB > 0 && (oB.b.FromFloat32ArrayToRefScaled(ZB, Math.floor(16 * TB[FB + IB]), NB, hB), nB.addToSelf(hB));
```

#### 329. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3264` → after: `L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3264) · [Before (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3264)

```diff
-                   for (et = 0; et < 4; et++) ft = jt[Et + et], ft > 0 && (Dt.c.FromFloat32ArrayToRefScaled(Vt, Math.floor(16 * dt[Et + et]), ft, Qt), Xt.addToSelf(Qt));
+                   for (IB = 0; IB < 4; IB++) NB = kB[FB + IB], NB > 0 && (oB.b.FromFloat32ArrayToRefScaled(ZB, Math.floor(16 * vB[FB + IB]), NB, hB), nB.addToSelf(hB));
```

#### 330. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3270)

```diff
-             let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mt.m.PositionKind;
+             let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GB.i.PositionKind;
```

#### 331. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3283` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3283) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3283)

```diff
-                 case mt.m.PositionKind:
+                 case GB.i.PositionKind:
```

#### 332. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3286` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3286) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3286)

```diff
-                 case mt.m.NormalKind:
+                 case GB.i.NormalKind:
```

#### 333. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3289)

```diff
-                 case mt.m.TangentKind:
+                 case GB.i.TangentKind:
```

#### 334. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3292)

```diff
-                 case mt.m.UVKind:
+                 case GB.i.UVKind:
```

#### 335. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3295)

```diff
-                 case mt.m.UV2Kind:
+                 case GB.i.UV2Kind:
```

#### 336. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3298` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3298) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3298)

```diff
-                 case mt.m.ColorKind:
+                 case GB.i.ColorKind:
```

#### 337. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3320-L3321` → after: `L3320-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3320-L3321) · [Before (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3320-L3321)

```diff
-               const tt = dt(mt.m.MatricesIndicesKind),
-                 qt = dt(mt.m.MatricesWeightsKind);
+               const BB = vB(GB.i.MatricesIndicesKind),
+                 JB = vB(GB.i.MatricesWeightsKind);
```

#### 338. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3324-L3325` → after: `L3324-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3324-L3325) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3324-L3325)

```diff
-                   Xt = Dt ? dt(mt.m.MatricesIndicesExtraKind) : null,
-                   Qt = Dt ? dt(mt.m.MatricesWeightsExtraKind) : null;
+                   nB = oB ? vB(GB.i.MatricesIndicesExtraKind) : null,
+                   hB = oB ? vB(GB.i.MatricesWeightsExtraKind) : null;
```

#### 339. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3330-L3331` → after: `L3330-L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3330-L3331) · [Before (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3330-L3331)

```diff
-               const et = dt(mt.m.MatricesIndicesKind),
-                 qt = dt(mt.m.MatricesWeightsKind);
+               const IB = vB(GB.i.MatricesIndicesKind),
+                 JB = vB(GB.i.MatricesWeightsKind);
```

#### 340. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3334-L3335)

```diff
-                   jt = Dt ? dt(mt.m.MatricesIndicesExtraKind) : null,
-                   Ht = Dt ? dt(mt.m.MatricesWeightsExtraKind) : null,
+                   kB = oB ? vB(GB.i.MatricesIndicesExtraKind) : null,
+                   cB = oB ? vB(GB.i.MatricesWeightsExtraKind) : null,
```

#### 341. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3340)

```diff
-             if (!1 !== et.updatePositionsArray && Ot === mt.m.PositionKind) {
+             if (!1 !== IB.updatePositionsArray && TB === GB.i.PositionKind) {
```

#### 342. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3344-L3345` → after: `L3344-L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3344-L3345) · [Before (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3344-L3345)

```diff
-                 for (let Vt = et; Vt < tt.length; Vt++) tt[Vt] = new Dt.n;
-               for (let Ot = 0, qt = 0; Ot < tt.length; Ot++, qt += 3) tt[Ot].W9(Vt[qt], Vt[qt + 1], Vt[qt + 2]);
+                 for (let ZB = IB; ZB < BB.length; ZB++) BB[ZB] = new oB.s;
+               for (let TB = 0, JB = 0; TB < BB.length; TB++, JB += 3) BB[TB].cBB(ZB[JB], ZB[JB + 1], ZB[JB + 2]);
```

#### 343. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3357` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3357) · [Before (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3357)

```diff
-             }, null, mt.m.NormalKind)
+             }, null, GB.i.NormalKind)
```

#### 344. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3367)

```diff
-             }, Vt, mt.m.PositionKind)
+             }, ZB, GB.i.PositionKind)
```

#### 345. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3370` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3370) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3370)

```diff
-             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Xt.c(Dt.n.Zero(), Dt.n.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new nB.d(oB.s.Zero(), oB.s.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 346. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3373-L3374` → after: `L3373-L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3373-L3374) · [Before (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3373-L3374)

```diff
-             if (!this.vJ) return this;
-             const et = this.vJ.length;
+             if (!this.EW) return this;
+             const IB = this.EW.length;
```

#### 347. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3376` → after: `L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3376) · [Before (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3376)

```diff
-               const Ot = this.vJ[Vt];
+               const TB = this.EW[ZB];
```

#### 348. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3382` → after: `L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3382) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3382)

```diff
-             this.hf || (this._boundingInfoIsDirty = !0)
+             this.XN || (this._boundingInfoIsDirty = !0)
```

#### 349. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3385` → after: `L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3385) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3385)

```diff
-             return this.fL().isInFrustum(tt, this.cullingStrategy)
+             return this.qm().isInFrustum(BB, this.cullingStrategy)
```

#### 350. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3388` → after: `L3388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3388) · [Before (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3388)

```diff
-             return this.fL().isCompletelyInFrustum(tt)
+             return this.qm().isCompletelyInFrustum(BB)
```

#### 351. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3390` → after: `L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3390) · [Before (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3390)

```diff
-           uqt(tt) {
+           yJB(BB) {
```

#### 352. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3393-L3394` → after: `L3393-L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3393-L3394) · [Before (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3393-L3394)

```diff
-             const Ot = this.fL(),
-               qt = tt.fL();
+             const TB = this.qm(),
+               JB = BB.qm();
```

#### 353. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3398` → after: `L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3398) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3398)

```diff
-                 if (Dt.uqt(tt, et, !0)) return !0;
+                 if (oB.yJB(BB, IB, !0)) return !0;
```

#### 354. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3402` → after: `L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3402) · [Before (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3402)

```diff
-             return this.fL().intersectsPoint(tt)
+             return this.qm().intersectsPoint(BB)
```

#### 355. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3416)

```diff
-             const Vt = this.vI().collisionCoordinator;
+             const ZB = this.JR().collisionCoordinator;
```

#### 356. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3425)

```diff
-               for (let qt = Vt; qt < Ot; qt++) tt._lastColliderWorldVertices.push(Dt.n.TransformCoordinates(this._positions[qt], et))
+               for (let JB = ZB; JB < TB; JB++) BB._lastColliderWorldVertices.push(oB.s.TransformCoordinates(this._positions[JB], IB))
```

#### 357. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3427)

```diff
-             return Vt._collide(tt._trianglePlanes, tt._lastColliderWorldVertices, this.zOt(), tt.indexStart, tt.indexStart + tt.indexCount, tt.verticesStart, !!tt.vf(), this, this._shouldConvertRHS(), 7 === tt.vf()?.fillMode), this
+             return ZB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.MTB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.LN(), this, this._shouldConvertRHS(), 7 === BB.LN()?.fillMode), this
```

#### 358. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3442-L3445` → after: `L3442-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3442-L3445) · [Before (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3442-L3445)

```diff
-             if (!this.fL()._checkCollision(tt)) return this;
-             const et = Dt.k.Matrix[0],
-               Vt = Dt.k.Matrix[1];
-             return Dt.c.ScalingToRef(1 / tt._radius.x, 1 / tt._radius.y, 1 / tt._radius.z, et), this.worldMatrixFromCache.multiplyToRef(et, Vt), this._processCollisionsForSubMeshes(tt, Vt), this
+             if (!this.qm()._checkCollision(BB)) return this;
+             const IB = oB.m.Matrix[0],
+               ZB = oB.m.Matrix[1];
+             return oB.b.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, IB), this.worldMatrixFromCache.multiplyToRef(IB, ZB), this._processCollisionsForSubMeshes(BB, ZB), this
```

#### 359. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3454` → after: `L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3454) · [Before (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3454)

```diff
-             const dt = new Ht.b,
+             const vB = new cB.e,
```

#### 360. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3457-L3460` → after: `L3457-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3457-L3460) · [Before (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3457-L3460)

```diff
-               Qt = this.fL();
-             if (!this.vJ) return dt;
-             if (!mt && (!tt.intersectsSphere(Qt.jqt, Xt) || !tt.intersectsBox(Qt.boundingBox, Xt))) return dt;
-             if (Ot) return dt.hit = !mt, dt.pickedMesh = mt ? null : this, dt.distance = mt ? 0 : Dt.n.Distance(tt.origin, Qt.jqt.center), dt.subMeshId = 0, dt;
+               hB = this.qm();
+             if (!this.EW) return vB;
+             if (!GB && (!BB.intersectsSphere(hB.ZJB, nB) || !BB.intersectsBox(hB.boundingBox, nB))) return vB;
+             if (TB) return vB.hit = !GB, vB.pickedMesh = GB ? null : this, vB.distance = GB ? 0 : oB.s.Distance(BB.origin, hB.ZJB.center), vB.subMeshId = 0, vB;
```

#### 361. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3467` → after: `L3467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3467) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3467)

```diff
-               const tt = Et.data[Dt].vf();
+               const BB = FB.data[oB].LN();
```

#### 362. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3473)

```diff
-             if (!wt) return dt.hit = !0, dt.pickedMesh = this, dt.distance = Dt.n.Distance(tt.origin, Qt.jqt.center), dt.subMeshId = -1, dt;
+             if (!gB) return vB.hit = !0, vB.pickedMesh = this, vB.distance = oB.s.Distance(BB.origin, hB.ZJB.center), vB.subMeshId = -1, vB;
```

#### 363. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3477` → after: `L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3477) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3477)

```diff
-               const qt = Ot.intersects(tt, this._positions, this.zOt(), et, Vt);
+               const JB = TB.intersects(BB, this._positions, this.MTB(), IB, ZB);
```

#### 364. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3482-L3486` → after: `L3482-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3482-L3486) · [Before (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3482-L3486)

```diff
-                 Vt = Dt.k.uf[0],
-                 Ot = Dt.k.uf[1];
-               Dt.n.TransformCoordinatesToRef(tt.origin, et, Vt), tt.direction.scaleToRef(lt.distance, Ot);
-               const mt = Dt.n.TransformNormal(Ot, et).addInPlace(Vt);
-               return dt.hit = !0, dt.distance = Dt.n.Distance(Vt, mt), dt.pickedPoint = mt, dt.pickedMesh = this, dt.bu = lt.bu || 0, dt.bv = lt.bv || 0, dt.subMeshFaceId = lt.faceId, dt.faceId = lt.faceId + Et.data[lt._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
+                 ZB = oB.m.rN[0],
+                 TB = oB.m.rN[1];
+               oB.s.TransformCoordinatesToRef(BB.origin, IB, ZB), BB.direction.scaleToRef(zB.distance, TB);
+               const GB = oB.s.TransformNormal(TB, IB).addInPlace(ZB);
+               return vB.hit = !0, vB.distance = oB.s.Distance(ZB, GB), vB.pickedPoint = GB, vB.pickedMesh = this, vB.bu = zB.bu || 0, vB.bv = zB.bv || 0, vB.subMeshFaceId = zB.faceId, vB.faceId = zB.faceId + FB.data[zB._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
```

#### 365. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3495-L3497` → after: `L3495-L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3495-L3497) · [Before (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3495-L3497)

```diff
-             if (this.vJ)
-               for (; this.vJ.length;) this.vJ[0].dispose(tt);
-             else this.vJ = [];
+             if (this.EW)
+               for (; this.EW.length;) this.EW[0].dispose(BB);
+             else this.EW = [];
```

#### 366. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3502)

```diff
-             const Ot = this.vI();
+             const TB = this.JR();
```

#### 367. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3522-L3523` → after: `L3522-L3523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3522-L3523) · [Before (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3522-L3523)

```diff
-             const Dt = Ot.Jf();
-             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Dt.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Dt.wipeCaches(), Ot.wZ(this), this._parentContainer) {
+             const oB = TB.PN();
+             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, oB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), oB.wipeCaches(), TB.jR(this), this._parentContainer) {
```

#### 368. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3528` → after: `L3528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3528) · [Before (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3528)

```diff
-               for (et = 0; et < Ot.PJ.length; et++) Ot.PJ[et].emitter === this && (Ot.PJ[et].dispose(), et--);
+               for (IB = 0; IB < TB.DW.length; IB++) TB.DW[IB].emitter === this && (TB.DW[IB].dispose(), IB--);
```

#### 369. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3533-L3534` → after: `L3533-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3533-L3534) · [Before (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3533-L3534)

```diff
-             tt.facetNormals || (tt.facetNormals = []), tt.facetPositions || (tt.facetPositions = []), tt.facetPartitioning || (tt.facetPartitioning = new Array), tt.facetNb = this.zOt().length / 3 | 0, tt.partitioningSubdivisions = tt.partitioningSubdivisions ? tt.partitioningSub … [truncated]
-             for (let et = 0; et < tt.facetNb; et++) tt.facetNormals[et] = Dt.n.Zero(), tt.facetPositions[et] = Dt.n.Zero();
+             BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.MTB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSub … [truncated]
+             for (let IB = 0; IB < BB.facetNb; IB++) BB.facetNormals[IB] = oB.s.Zero(), BB.facetPositions[IB] = oB.s.Zero();
```

#### 370. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3540-L3543` → after: `L3540-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3540-L3543) · [Before (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3540-L3543)

```diff
-             const et = this.getVerticesData(mt.m.PositionKind),
-               Vt = this.zOt(),
-               Ot = this.getVerticesData(mt.m.NormalKind)?.slice(),
-               qt = this.fL();
+             const IB = this.getVerticesData(GB.i.PositionKind),
+               ZB = this.MTB(),
+               TB = this.getVerticesData(GB.i.NormalKind)?.slice(),
+               JB = this.qm();
```

#### 371. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3558-L3559` → after: `L3558-L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3558-L3559) · [Before (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3558-L3559)

```diff
-                 const et = this.vI().activeCamera;
-                 tt.facetDepthSortFrom = et ? et.position : Dt.n.Zero()
+                 const IB = this.JR().activeCamera;
+                 BB.facetDepthSortFrom = IB ? IB.position : oB.s.Zero()
```

#### 372. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3569)

```diff
-               tt.invertedMatrix = Dt.c.Identity(), tt.facetDepthSortOrigin = Dt.n.Zero()
+               BB.invertedMatrix = oB.b.Identity(), BB.facetDepthSortOrigin = oB.s.Zero()
```

#### 373. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3571)

```diff
-             tt.bbSize.x = qt.maximum.x - qt.minimum.x > Jt.e ? qt.maximum.x - qt.minimum.x : Jt.e, tt.bbSize.y = qt.maximum.y - qt.minimum.y > Jt.e ? qt.maximum.y - qt.minimum.y : Jt.e, tt.bbSize.z = qt.maximum.z - qt.minimum.z > Jt.e ? qt.maximum.z - qt.minimum.z : Jt.e;
+             BB.bbSize.x = JB.maximum.x - JB.minimum.x > dB.d ? JB.maximum.x - JB.minimum.x : dB.d, BB.bbSize.y = JB.maximum.y - JB.minimum.y > dB.d ? JB.maximum.y - JB.minimum.y : dB.d, BB.bbSize.z = JB.maximum.z - JB.minimum.z > dB.d ? JB.maximum.z - JB.minimum.z : dB.d;
```

#### 374. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3573)

```diff
-             if (jt = jt > tt.bbSize.z ? jt : tt.bbSize.z, tt.subDiv.max = tt.partitioningSubdivisions, tt.subDiv.X = Math.floor(tt.subDiv.max * tt.bbSize.x / jt), tt.subDiv.Y = Math.floor(tt.subDiv.max * tt.bbSize.y / jt), tt.subDiv.Z = Math.floor(tt.subDiv.max * tt.bbSize.z / jt … [truncated]
+             if (kB = kB > BB.bbSize.z ? kB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / kB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / kB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / kB … [truncated]
```

#### 375. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3597)

```diff
-             const et = Dt.n.Zero();
+             const IB = oB.s.Zero();
```

#### 376. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3603)

```diff
-             return Dt.n.TransformCoordinatesToRef(Vt, Ot, et), this
+             return oB.s.TransformCoordinatesToRef(ZB, TB, IB), this
```

#### 377. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3606)

```diff
-             const et = Dt.n.Zero();
+             const IB = oB.s.Zero();
```

#### 378. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3611)

```diff
-             return Dt.n.TransformNormalToRef(Vt, this.getWorldMatrix(), et), this
+             return oB.s.TransformNormalToRef(ZB, this.getWorldMatrix(), IB), this
```

#### 379. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3614` → after: `L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3614) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3614)

```diff
-             const Ot = this.fL(),
+             const TB = this.qm(),
```

#### 380. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3625` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3625) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3625)

```diff
-               jt = Dt.k.Matrix[5];
+               kB = oB.m.Matrix[5];
```

#### 381. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3627-L3628` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3627-L3628) · [Before (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3627-L3628)

```diff
-             const Ht = Dt.k.uf[8];
-             Dt.n.TransformCoordinatesFromFloatsToRef(tt, et, Vt, jt, Ht);
+             const cB = oB.m.rN[8];
+             oB.s.TransformCoordinatesFromFloatsToRef(BB, IB, ZB, kB, cB);
```

#### 382. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3630` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3630) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3630)

```diff
-             return Ot && Dt.n.TransformCoordinatesFromFloatsToRef(Ot.x, Ot.y, Ot.z, dt, Ot), Xt
+             return TB && oB.s.TransformCoordinatesFromFloatsToRef(TB.x, TB.y, TB.z, vB, TB), nB
```

#### 383. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3655-L3656` → after: `L3655-L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3655-L3656) · [Before (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3655-L3656)

```diff
-             const et = this.getVerticesData(mt.m.PositionKind),
-               Vt = this.zOt();
+             const IB = this.getVerticesData(GB.i.PositionKind),
+               ZB = this.MTB();
```

#### 384. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3658-L3660` → after: `L3658-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3658-L3660) · [Before (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3658-L3660)

```diff
-             return Ot = this.isVerticesDataPresent(mt.m.NormalKind) ? this.getVerticesData(mt.m.NormalKind) : [], dt.d.ComputeNormals(et, Vt, Ot, {
-               useRightHandedSystem: this.vI().useRightHandedSystem
-             }), this.setVerticesData(mt.m.NormalKind, Ot, tt), this
+             return TB = this.isVerticesDataPresent(GB.i.NormalKind) ? this.getVerticesData(GB.i.NormalKind) : [], vB.c.ComputeNormals(IB, ZB, TB, {
+               useRightHandedSystem: this.JR().useRightHandedSystem
+             }), this.setVerticesData(GB.i.NormalKind, TB, BB), this
```

#### 385. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3663` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3663) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3663)

```diff
-             const tt = this.zOt();
+             const BB = this.MTB();
```

#### 386. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3667` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3667) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3667)

```diff
-             } = await Vt.e(356).then((() => Vt(42791)));
+             } = await ZB.e(356).then((() => ZB(42552)));
```

#### 387. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3671-L3674` → after: `L3671-L3674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3671-L3674) · [Before (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3671-L3674)

```diff
-             et || (et = Ct.b.Y);
-             const Vt = Dt.k.uf[0],
-               Ot = Dt.k.uf[1];
-             return Dt.n.CrossToRef(et, tt, Ot), Dt.n.CrossToRef(tt, Ot, Vt), this.rotationQuaternion ? Dt.e.RotationQuaternionFromAxisToRef(Vt, tt, Ot, this.rotationQuaternion) : Dt.n.RotationFromAxisToRef(Vt, tt, Ot, this.rotation), this
+             IB || (IB = CB.c.Y);
+             const ZB = oB.m.rN[0],
+               TB = oB.m.rN[1];
+             return oB.s.CrossToRef(IB, BB, TB), oB.s.CrossToRef(BB, TB, ZB), this.rotationQuaternion ? oB.f.RotationQuaternionFromAxisToRef(ZB, BB, TB, this.rotationQuaternion) : oB.s.RotationFromAxisToRef(ZB, BB, TB, this.rotation), this
```

#### 388. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3680` → after: `L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3680) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3680)

```diff
-             throw (0, yt.e)("EdgesRenderer")
+             throw (0, qB.m)("EdgesRenderer")
```

#### 389. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3683` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3683) · [Before (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3683)

```diff
-             throw (0, yt.e)("EdgesRenderer")
+             throw (0, qB.m)("EdgesRenderer")
```

#### 390. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3686` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3686) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3686)

```diff
-             return this._scene.PJ.filter((tt => tt.emitter === this))
+             return this._scene.DW.filter((BB => BB.emitter === this))
```

#### 391. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3690` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3690) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3690)

```diff
-           et = [Kt.l.filter((function() {
+           IB = [sB.h.filter((function() {
```

#### 392. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3692` → after: `L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3692) · [Before (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3692)

```diff
-           }))], (0, Ot.l)(tt, null, et, {
+           }))], (0, TB.j)(BB, null, IB, {
```

#### 393. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3708` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3708) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3708)

```diff
-         })(), tt.OCCLUSION_TYPE_NONE = ((0, Ot.m)(tt, Et), 0), tt.OCCLUSION_TYPE_OPTIMISTIC = 1, tt.OCCLUSION_TYPE_STRICT = 2, tt.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, tt.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, tt.CULLINGSTRATEGY_STANDARD = 0, tt.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
+         })(), BB.OCCLUSION_TYPE_NONE = ((0, TB.l)(BB, FB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
```

#### 394. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3714` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3714) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3714)

```diff
-     }(Et = Pt.prototype).createOrUpdateSubmeshesOctree ?? (Et.createOrUpdateSubmeshesOctree = (0, yt.d)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (ft = Pt.prototype).getPhysicsImpostor ?? (ft.getPhysicsImpostor = (0, yt.d)("AbstractMesh", "getPhysicsImpostor")), (wt = Pt … [truncated]
+     }(FB = MB.prototype).createOrUpdateSubmeshesOctree ?? (FB.createOrUpdateSubmeshesOctree = (0, qB.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (NB = MB.prototype).getPhysicsImpostor ?? (NB.getPhysicsImpostor = (0, qB.j)("AbstractMesh", "getPhysicsImpostor")), (gB = MB … [truncated]
```

#### 395. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3716` → after: `L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3716) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3716)

```diff
-   40614: (tt, et, Vt) => {
+   40469: (BB, IB, ZB) => {
```

#### 396. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3718` → after: `L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3718) · [Before (L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3718)

```diff
-       d: () => Nt
+       e: () => yB
```

#### 397. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3720-L3733` → after: `L3720-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3720-L3733) · [Before (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3720-L3733)

```diff
-     var Ot = Vt(37336),
-       qt = Vt(37513),
-       Dt = Vt(40608),
-       mt = Vt(40343),
-       dt = Vt(40476),
-       jt = Vt(40621),
-       Ht = Vt(40490),
-       Xt = Vt(40300),
-       Qt = Vt(38899),
-       lt = Vt(40239),
-       Et = Vt(40503),
-       ft = Vt(37359),
-       wt = Vt(40628),
-       yt = Vt(40270);
+     var TB = ZB(37120),
+       JB = ZB(37311),
+       oB = ZB(40463),
+       GB = ZB(40188),
+       vB = ZB(40341),
+       kB = ZB(40473),
+       cB = ZB(40351),
+       nB = ZB(40152),
+       hB = ZB(38718),
+       zB = ZB(40092),
+       FB = ZB(40361),
+       NB = ZB(37147),
+       gB = ZB(40480),
+       qB = ZB(40129);
```

#### 398. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3739` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3739) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3739)

```diff
-         this._boundingBias ? this._boundingBias.rK(tt) : this._boundingBias = tt.clone(), this._updateBoundingInfo(!0, null)
+         this._boundingBias ? this._boundingBias.TY(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
```

#### 399. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3742)

```diff
-         const et = new Nt(Nt.RandomId(), tt.vI());
+         const IB = new yB(yB.RandomId(), BB.JR());
```

#### 400. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3753-L3755` → after: `L3753-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3753-L3755) · [Before (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3753-L3755)

```diff
-           minimum: new Ot.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-           maximum: new Ot.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
-         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = et || ft.d.LastCreatedScene, this._scene && (this.id = tt, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
+           minimum: new TB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+           maximum: new TB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
+         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = IB || NB.e.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
```

#### 401. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3789` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3789) · [Before (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3789)

```diff
-         const qt = new mt.m(this._engine, et, tt, {
+         const JB = new GB.i(this._engine, IB, BB, {
```

#### 402. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3807` → after: `L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3807) · [Before (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3807)

```diff
-         if (qt === mt.m.PositionKind) {
+         if (JB === GB.i.PositionKind) {
```

#### 403. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3809-L3810` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3809-L3810) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3809-L3810)

```diff
-           const Vt = this._extend && this._extend.minimum || new Ot.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-             qt = this._extend && this._extend.maximum || new Ot.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
+           const ZB = this._extend && this._extend.minimum || new TB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+             JB = this._extend && this._extend.maximum || new TB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
```

#### 404. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3826)

```diff
-         Ot && (Ot.update(et), tt === mt.m.PositionKind && this._updateBoundingInfo(Vt, et), this._notifyUpdate(tt))
+         TB && (TB.update(IB), BB === GB.i.PositionKind && this._updateBoundingInfo(ZB, IB), this._notifyUpdate(BB))
```

#### 405. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3832-L3833` → after: `L3832-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3832-L3833) · [Before (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3832-L3833)

```diff
-             et.hasBoundingInfo ? et.fL().reConstruct(this._extend.minimum, this._extend.maximum) : et.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
-             const tt = et.vJ;
+             IB.hasBoundingInfo ? IB.qm().reConstruct(this._extend.minimum, this._extend.maximum) : IB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
+             const BB = IB.EW;
```

#### 406. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3860` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3860) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3860)

```diff
-         Ot && (0, yt.h)(Ot, Vt.getSize(), Vt.type, Vt.byteOffset, Vt.byteStride, Vt.normalized, this._totalVertices, et[tt])
+         TB && (0, qB.i)(TB, ZB.getSize(), ZB.type, ZB.byteOffset, ZB.byteStride, ZB.normalized, this._totalVertices, IB[BB])
```

#### 407. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3910` → after: `L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3910) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3910)

```diff
-       zOt(tt, et) {
+       MTB(BB, IB) {
```

#### 408. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3940-L3941` → after: `L3940-L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3940-L3941) · [Before (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3940-L3941)

```diff
-           if (!tt && (tt = this.getVerticesData(mt.m.PositionKind), !tt)) return;
-           this._extend = (0, Et.f)(tt, 0, this._totalVertices, this.boundingBias, 3)
+           if (!BB && (BB = this.getVerticesData(GB.i.PositionKind), !BB)) return;
+           this._extend = (0, FB.e)(BB, 0, this._totalVertices, this.boundingBias, 3)
```

#### 409. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3947` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3947) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3947)

```diff
-           Vt._buffer.getBuffer() || Vt.create(), et === mt.m.PositionKind && (this._extend || this._updateExtend(), tt.buildBoundingInfo(this._extend.minimum, this._extend.maximum), tt._createGlobalSubMesh(tt.isUnIndexed), tt._updateBoundingInfo())
+           ZB._buffer.getBuffer() || ZB.create(), IB === GB.i.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
```

#### 410. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3968)

```diff
-             tt.removePendingData(this), tt.bC || Qt.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Vt}`)
+             BB.removePendingData(this), BB.mC || hB.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ZB}`)
```

#### 411. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3973` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3973) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3973)

```diff
-         const tt = this.zOt(!1);
+         const BB = this.MTB(!1);
```

#### 412. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3981)

```diff
-         const et = this.getVerticesData(mt.m.PositionKind, !1);
+         const IB = this.getVerticesData(GB.i.PositionKind, !1);
```

#### 413. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3984` → after: `L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3984) · [Before (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3984)

```diff
-           this.setVerticesData(mt.m.PositionKind, et, !1)
+           this.setVerticesData(GB.i.PositionKind, IB, !1)
```

#### 414. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3986` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3986) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3986)

```diff
-         const Vt = this.getVerticesData(mt.m.NormalKind, !1);
+         const ZB = this.getVerticesData(GB.i.NormalKind, !1);
```

#### 415. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3989` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3989) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3989)

```diff
-           this.setVerticesData(mt.m.NormalKind, Vt, !1)
+           this.setVerticesData(GB.i.NormalKind, ZB, !1)
```

#### 416. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3997` → after: `L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3997) · [Before (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3997)

```diff
-         const tt = this.getVerticesData(mt.m.PositionKind);
+         const BB = this.getVerticesData(GB.i.PositionKind);
```

#### 417. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3999` → after: `L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L3999) · [Before (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L3999)

```diff
-         for (let et = 3 * this._positionsCache.length, Vt = this._positionsCache.length; et < tt.length; et += 3, ++Vt) this._positionsCache[Vt] = Ot.n.FromArray(tt, et);
+         for (let IB = 3 * this._positionsCache.length, ZB = this._positionsCache.length; IB < BB.length; IB += 3, ++ZB) this._positionsCache[ZB] = TB.s.FromArray(BB, IB);
```

#### 418. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4030)

```diff
-           Vt = this.zOt(void 0, !0);
+           ZB = this.MTB(void 0, !0);
```

#### 419. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4051-L4052` → after: `L4051-L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4051-L4052) · [Before (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4051-L4052)

```diff
-           const Et = (0, yt.z)(Vt, dt, jt, Ht, Xt, lt, !0),
-             ft = new mt.m(this._engine, Et, Ot, {
+           const FB = (0, qB.s)(ZB, vB, kB, cB, nB, zB, !0),
+             NB = new GB.i(this._engine, FB, TB, {
```

#### 420. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4066` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4066) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4066)

```diff
-         return et._boundingInfo = new Ht.c(this._extend.minimum, this._extend.maximum), et
+         return IB._boundingInfo = new cB.d(this._extend.minimum, this._extend.maximum), IB
```

#### 421. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4070)

```diff
-         return tt.id = this.id, tt.uniqueId = this.uniqueId, tt.updatable = this._updatable, lt.d && lt.d.HasTags(this) && (tt.tags = lt.d.GetTags(this)), tt
+         return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, zB.b && zB.b.HasTags(this) && (BB.tags = zB.b.GetTags(this)), BB
```

#### 422. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4073` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4073) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4073)

```diff
-         return Array.isArray(tt) ? tt : Array.prototype.slice.call(tt)
+         return Array.isArray(BB) ? BB : Array.prototype.slice.call(BB)
```

#### 423. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4081` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4081) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4081)

```diff
-         return this.isVerticesDataPresent(mt.m.PositionKind) && (tt.positions = this._toNumberArray(this.getVerticesData(mt.m.PositionKind)), this.isVertexBufferUpdatable(mt.m.PositionKind) && (tt.positionsUpdatable = !0)), this.isVerticesDataPresent(mt.m.NormalKind) && (tt.norma … [truncated]
+         return this.isVerticesDataPresent(GB.i.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(GB.i.PositionKind)), this.isVertexBufferUpdatable(GB.i.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(GB.i.NormalKind) && (BB.norma … [truncated]
```

#### 424. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4088)

```diff
-         return Xt.l.RandomId()
+         return nB.j.RandomId()
```

#### 425. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4096` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4096) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4096)

```diff
-         const Vt = et.vI(),
+         const ZB = IB.JR(),
```

#### 426. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4106` → after: `L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4106) · [Before (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4106)

```diff
-             et.setVerticesData(mt.m.PositionKind, Ot, !1)
+             IB.setVerticesData(GB.i.PositionKind, TB, !1)
```

#### 427. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4110` → after: `L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4110) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4110)

```diff
-             et.setVerticesData(mt.m.NormalKind, Ot, !1)
+             IB.setVerticesData(GB.i.NormalKind, TB, !1)
```

#### 428. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4114)

```diff
-             et.setVerticesData(mt.m.TangentKind, Ot, !1)
+             IB.setVerticesData(GB.i.TangentKind, TB, !1)
```

#### 429. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4118` → after: `L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4118) · [Before (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4118)

```diff
-             if (wt.b)
+             if (gB.e)
```

#### 430. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4120` → after: `L4120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4120) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4120)

```diff
-             et.setVerticesData(mt.m.UVKind, Ot, !1)
+             IB.setVerticesData(GB.i.UVKind, TB, !1)
```

#### 431. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4124` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4124) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4124)

```diff
-             if (wt.b)
+             if (gB.e)
```

#### 432. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4126` → after: `L4126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4126) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4126)

```diff
-             et.setVerticesData(mt.m.UV2Kind, Ot, !1)
+             IB.setVerticesData(GB.i.UV2Kind, TB, !1)
```

#### 433. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4130` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4130) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4130)

```diff
-             if (wt.b)
+             if (gB.e)
```

#### 434. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4132` → after: `L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4132) · [Before (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4132)

```diff
-             et.setVerticesData(mt.m.UV3Kind, Ot, !1)
+             IB.setVerticesData(GB.i.UV3Kind, TB, !1)
```

#### 435. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4136)

```diff
-             if (wt.b)
+             if (gB.e)
```

#### 436. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4138` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4138) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4138)

```diff
-             et.setVerticesData(mt.m.UV4Kind, Ot, !1)
+             IB.setVerticesData(GB.i.UV4Kind, TB, !1)
```

#### 437. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4142` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4142) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4142)

```diff
-             if (wt.b)
+             if (gB.e)
```

#### 438. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4144` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4144) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4144)

```diff
-             et.setVerticesData(mt.m.UV5Kind, Ot, !1)
+             IB.setVerticesData(GB.i.UV5Kind, TB, !1)
```

#### 439. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4148` → after: `L4148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4148) · [Before (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4148)

```diff
-             if (wt.b)
+             if (gB.e)
```

#### 440. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4150` → after: `L4150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4150) · [Before (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4150)

```diff
-             et.setVerticesData(mt.m.UV6Kind, Ot, !1)
+             IB.setVerticesData(GB.i.UV6Kind, TB, !1)
```

#### 441. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4154` → after: `L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4154) · [Before (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4154)

```diff
-             et.setVerticesData(mt.m.ColorKind, Ot, !1, Vt.colorsAttrDesc.stride)
+             IB.setVerticesData(GB.i.ColorKind, TB, !1, ZB.colorsAttrDesc.stride)
```

#### 442. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4163` → after: `L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4163) · [Before (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4163)

```diff
-             et.setVerticesData(mt.m.MatricesIndicesKind, qt, !1)
+             IB.setVerticesData(GB.i.MatricesIndicesKind, JB, !1)
```

#### 443. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4172` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4172) · [Before (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4172)

```diff
-             et.setVerticesData(mt.m.MatricesIndicesExtraKind, qt, !1)
+             IB.setVerticesData(GB.i.MatricesIndicesExtraKind, JB, !1)
```

#### 444. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4176` → after: `L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4176) · [Before (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4176)

```diff
-             et.setVerticesData(mt.m.MatricesWeightsKind, Ot, !1)
+             IB.setVerticesData(GB.i.MatricesWeightsKind, TB, !1)
```

#### 445. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4184` → after: `L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4184) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4184)

```diff
-             et.vJ = [];
+             IB.EW = [];
```

#### 446. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4191)

```diff
-               dt.d.AddToMesh(Vt, qt, Dt, mt, jt, et)
+               vB.e.AddToMesh(ZB, JB, oB, GB, kB, IB)
```

#### 447. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4195-L4196` → after: `L4195-L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4195-L4196) · [Before (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4195-L4196)

```diff
-           if (et.setVerticesData(mt.m.PositionKind, tt.positions, tt.positions._updatable || tt.positionsUpdatable), et.setVerticesData(mt.m.NormalKind, tt.normals, tt.normals._updatable || tt.normalsUpdatable), tt.tangents && et.setVerticesData(mt.m.TangentKind, tt.tangents, tt. … [truncated]
-             if (tt.matricesIndices._isExpanded || tt.matricesIndicesExpanded) delete tt.matricesIndices._isExpanded, delete tt.matricesIndicesExpanded, et.setVerticesData(mt.m.MatricesIndicesKind, tt.matricesIndices, tt.matricesIndices._updatable || tt.matricesIndicesUpdatable);
+           if (IB.setVerticesData(GB.i.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), IB.setVerticesData(GB.i.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && IB.setVerticesData(GB.i.TangentKind, BB.tangents, BB. … [truncated]
+             if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, IB.setVerticesData(GB.i.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
```

#### 448. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4203` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4203) · [Before (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4203)

```diff
-               et.setVerticesData(mt.m.MatricesIndicesKind, Vt, tt.matricesIndices._updatable || tt.matricesIndicesUpdatable)
+               IB.setVerticesData(GB.i.MatricesIndicesKind, ZB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
```

#### 449. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4205` → after: `L4205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4205) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4205)

```diff
-             if (tt.matricesIndicesExtraExpanded || tt.matricesIndicesExtra._isExpanded) delete tt.matricesIndices._isExpanded, delete tt.matricesIndicesExtraExpanded, et.setVerticesData(mt.m.MatricesIndicesExtraKind, tt.matricesIndicesExtra, tt.matricesIndicesExtra._updatable ||  … [truncated]
+             if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, IB.setVerticesData(GB.i.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable ||  … [truncated]
```

#### 450. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4212-L4213` → after: `L4212-L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4212-L4213) · [Before (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4212-L4213)

```diff
-               et.setVerticesData(mt.m.MatricesIndicesExtraKind, Vt, tt.matricesIndicesExtra._updatable || tt.matricesIndicesExtraUpdatable)
-             } tt.matricesWeights && (Nt._CleanMatricesWeights(tt, et), et.setVerticesData(mt.m.MatricesWeightsKind, tt.matricesWeights, tt.matricesWeights._updatable)), tt.matricesWeightsExtra && et.setVerticesData(mt.m.MatricesWeightsExtraKind, tt.matricesWeightsExtra, tt.matric … [truncated]
+               IB.setVerticesData(GB.i.MatricesIndicesExtraKind, ZB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
+             } BB.matricesWeights && (yB._CleanMatricesWeights(BB, IB), IB.setVerticesData(GB.i.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && IB.setVerticesData(GB.i.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matric … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4215-L4219` → after: `L4215-L4219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4215-L4219) · [Before (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4215-L4219)

```diff
-         if (tt.vJ) {
-           et.vJ = [];
-           for (let Vt = 0; Vt < tt.vJ.length; Vt++) {
-             const Ot = tt.vJ[Vt];
-             dt.d.AddToMesh(Ot.materialIndex, Ot.verticesStart, Ot.verticesCount, Ot.indexStart, Ot.indexCount, et)
+         if (BB.EW) {
+           IB.EW = [];
+           for (let ZB = 0; ZB < BB.EW.length; ZB++) {
+             const TB = BB.EW[ZB];
+             vB.e.AddToMesh(TB.materialIndex, TB.verticesStart, TB.verticesCount, TB.indexStart, TB.indexCount, IB)
```

#### 452. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4230` → after: `L4230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4230) · [Before (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4230)

```diff
-           const Vt = et.vI().getLastSkeletonById(tt.skeletonId);
+           const ZB = IB.JR().getLastSkeletonById(BB.skeletonId);
```

#### 453. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4234-L4235` → after: `L4234-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4234-L4235) · [Before (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4234-L4235)

```diff
-         const qt = et.getVerticesData(mt.m.MatricesIndicesKind),
-           Dt = et.getVerticesData(mt.m.MatricesIndicesExtraKind),
+         const JB = IB.getVerticesData(GB.i.MatricesIndicesKind),
+           oB = IB.getVerticesData(GB.i.MatricesIndicesExtraKind),
```

#### 454. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4259` → after: `L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4259) · [Before (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4259)

```diff
-         et.setVerticesData(mt.m.MatricesIndicesKind, qt), tt.matricesWeightsExtra && et.setVerticesData(mt.m.MatricesIndicesExtraKind, Dt)
+         IB.setVerticesData(GB.i.MatricesIndicesKind, JB), BB.matricesWeightsExtra && IB.setVerticesData(GB.i.MatricesIndicesExtraKind, oB)
```

#### 455. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4263` → after: `L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4263) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4263)

```diff
-         return qt._loadedUniqueId = tt.uniqueId, lt.d && lt.d.AddTagsTo(qt, tt.tags), tt.delayLoadingFile ? (qt.delayLoadState = 4, qt.delayLoadingFile = Vt + tt.delayLoadingFile, qt._boundingInfo = new Ht.c(Ot.n.FromArray(tt.boundingBoxMinimum), Ot.n.FromArray(tt.boundingBoxMaxi … [truncated]
+         return JB._loadedUniqueId = BB.uniqueId, zB.b && zB.b.AddTagsTo(JB, BB.tags), BB.delayLoadingFile ? (JB.delayLoadState = 4, JB.delayLoadingFile = ZB + BB.delayLoadingFile, JB._boundingInfo = new cB.d(TB.s.FromArray(BB.boundingBoxMinimum), TB.s.FromArray(BB.boundingBoxMaxi … [truncated]
```

#### 456. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4267` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4267) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4267)

```diff
-   40656: (tt, et, Vt) => {
+   40510: (BB, IB, ZB) => {
```

#### 457. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4270` → after: `L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4270) · [Before (L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4270)

```diff
-       d: () => ft
+       f: () => NB
```

#### 458. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4272-L4280` → after: `L4272-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4272-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4272-L4280) · [Before (L4272-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4272-L4280)

```diff
-     var Ot = Vt(37336),
-       qt = Vt(38899),
-       Dt = Vt(40633),
-       mt = Vt(40601),
-       dt = Vt(38897),
-       jt = Vt(40638),
-       Ht = Vt(40343),
-       Xt = Vt(37390);
-     class Qt extends Dt.e {
+     var TB = ZB(37120),
+       JB = ZB(38718),
+       oB = ZB(40488),
+       GB = ZB(40448),
+       vB = ZB(38714),
+       kB = ZB(40492),
+       cB = ZB(40188),
+       nB = ZB(37170);
+     class hB extends oB.b {
```

#### 459. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4282` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4282) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4282)

```diff
-         super(tt, et.vI()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, et.Y_(this), this._sourceMesh = et, this._unIndexed = et._unIndexed, this.position.rK(et.position), this.rotation.rK(et.rotation), this.cj.rK(et.cj), et.rotationQuaternion && (this. … [truncated]
+         super(BB, IB.JR()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, IB.K3(this), this._sourceMesh = IB, this._unIndexed = IB._unIndexed, this.position.TY(IB.position), this.rotation.TY(IB.rotation), this.ek.TY(IB.ek), IB.rotationQuaternion && (this. … [truncated]
```

#### 460. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4286` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4286) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4286)

```diff
-           const tt = et.fL();
+           const BB = IB.qm();
```

#### 461. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4342` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4342) · [Before (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4342)

```diff
-       get Rqt() {
+       get wJB() {
```

#### 462. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4365` → after: `L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4365) · [Before (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4365)

```diff
-         return this.Rqt && this.Rqt.setVerticesData(tt, et, Vt, Ot), this.Rqt
+         return this.wJB && this.wJB.setVerticesData(BB, IB, ZB, TB), this.wJB
```

#### 463. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4368` → after: `L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4368) · [Before (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4368)

```diff
-         return this.Rqt && this.Rqt.updateVerticesData(tt, et, Vt, Ot), this.Rqt
+         return this.wJB && this.wJB.updateVerticesData(BB, IB, ZB, TB), this.wJB
```

#### 464. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4372` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4372) · [Before (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4372)

```diff
-         return this.Rqt && this.Rqt.setIndices(tt, et), this.Rqt
+         return this.wJB && this.wJB.setIndices(BB, IB), this.wJB
```

#### 465. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4377-L4378` → after: `L4377-L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4377-L4378) · [Before (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4377-L4378)

```diff
-       zOt() {
-         return this._sourceMesh.zOt()
+       MTB() {
+         return this._sourceMesh.MTB()
```

#### 466. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4386-L4387` → after: `L4386-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4386-L4387) · [Before (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4386-L4387)

```diff
-         if (this.hasBoundingInfo && this.fL().isLocked) return this;
-         tt = "object" === typeof et ? et : {
+         if (this.hasBoundingInfo && this.qm().isLocked) return this;
+         BB = "object" === typeof IB ? IB : {
```

#### 467. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4392` → after: `L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4392) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4392)

```diff
-         return this._refreshBoundingInfo(this._sourceMesh._getData(tt, null, Ht.m.PositionKind), Ot), this
+         return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, cB.i.PositionKind), TB), this
```

#### 468. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4398)

```diff
-         if (super._activate(tt, et), this._sourceMesh.vJ || qt.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
+         if (super._activate(BB, IB), this._sourceMesh.EW || JB.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
```

#### 469. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4410-L4411` → after: `L4410-L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4410-L4411) · [Before (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4410-L4411)

```diff
-         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== jt.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
-           this._billboardWorldMatrix || (this._billboardWorldMatrix = new Ot.c);
+         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== kB.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
+           this._billboardWorldMatrix || (this._billboardWorldMatrix = new TB.b);
```

#### 470. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4413` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4413) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4413)

```diff
-           return this._currentLOD._masterMesh = this, Ot.k.uf[7].rK(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.rK(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.rK(Ot.k.uf[7]), this._currentLOD._masterMesh = … [truncated]
+           return this._currentLOD._masterMesh = this, TB.m.rN[7].TY(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.TY(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.TY(TB.m.rN[7]), this._currentLOD._masterMesh = … [truncated]
```

#### 471. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4422)

```diff
-         const et = this.Rqt.getLODLevels();
+         const IB = this.wJB.getLODLevels();
```

#### 472. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4424-L4426` → after: `L4424-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4424-L4426) · [Before (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4424-L4426)

```diff
-           const et = this.fL();
-           this._currentLOD = this.Rqt.getLOD(tt, et.jqt)
-         } else this._currentLOD = this.Rqt;
+           const IB = this.qm();
+           this._currentLOD = this.wJB.getLOD(BB, IB.ZJB)
+         } else this._currentLOD = this.wJB;
```

#### 473. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4430` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4430) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4430)

```diff
-         return this.Rqt._preActivateForIntermediateRendering(tt)
+         return this.wJB._preActivateForIntermediateRendering(BB)
```

#### 474. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4433-L4434` → after: `L4433-L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4433-L4434) · [Before (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4433-L4434)

```diff
-         if (this.releaseSubMeshes(), this._sourceMesh.vJ)
-           for (let tt = 0; tt < this._sourceMesh.vJ.length; tt++) this._sourceMesh.vJ[tt].clone(this, this._sourceMesh);
+         if (this.releaseSubMeshes(), this._sourceMesh.EW)
+           for (let BB = 0; BB < this._sourceMesh.EW.length; BB++) this._sourceMesh.EW[BB].clone(this, this._sourceMesh);
```

#### 475. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4441` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4441) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4441)

```diff
-         return this.hasBoundingInfo ? this.fL().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+         return this.hasBoundingInfo ? this.qm().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 476. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4447-L4449` → after: `L4447-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/255.js#L4447-L4449) · [Before (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/255.js#L4447-L4449)

```diff
-         if (dt.d.DeepCopy(this, Ot, ["name", "vJ", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "Rqt", "pI", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "cqt", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
-           for (let qt = 0; qt < this.vI().meshes.length; qt++) {
-             const tt = this.vI().meshes[qt];
+         if (vB.b.DeepCopy(this, TB, ["name", "EW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "wJB", "vR", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "sJB", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
+           for (let JB = 0; JB < this.JR().meshes.length; JB++) {
+             const BB = this.JR().meshes[JB];
```
