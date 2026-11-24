# Changed — Bundle Modifications Report (Part 052 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `52 / 137` (**427** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (219 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 36. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L264)

```diff
-         return this.boundingBox.scale(BB), this.fQB.scale(BB), this
+         return this.boundingBox.scale(BB), this.ZJB.scale(BB), this
```

#### 37. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L268-L269)

```diff
-         if ((2 === jB || 3 === jB) && this.fQB.isCenterInFrustum(BB)) return !0;
-         if (!this.fQB.isInFrustum(BB)) return !1;
+         if ((2 === IB || 3 === IB) && this.ZJB.isCenterInFrustum(BB)) return !0;
+         if (!this.ZJB.isInFrustum(BB)) return !1;
```

#### 38. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L280)

```diff
-         return BB._canDoCollision(this.fQB.centerWorld, this.fQB.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
+         return BB._canDoCollision(this.ZJB.centerWorld, this.ZJB.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
```

#### 39. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L283)

```diff
-         return !!this.fQB.centerWorld && (!!this.fQB.intersectsPoint(BB) && !!this.boundingBox.intersectsPoint(BB))
+         return !!this.ZJB.centerWorld && (!!this.ZJB.intersectsPoint(BB) && !!this.boundingBox.intersectsPoint(BB))
```

#### 40. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L286-L287` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L286-L287) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L286-L287)

```diff
-         if (!IB.Intersects(this.fQB, BB.fQB)) return !1;
-         if (!dB.e.Intersects(this.boundingBox, BB.boundingBox)) return !1;
+         if (!GB.Intersects(this.ZJB, BB.ZJB)) return !1;
+         if (!oB.d.Intersects(this.boundingBox, BB.boundingBox)) return !1;
```

#### 41. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L291)

```diff
-         return !!aB(zB.directions[0], zB, QB) && (!!aB(zB.directions[1], zB, QB) && (!!aB(zB.directions[2], zB, QB) && (!!aB(QB.directions[0], zB, QB) && (!!aB(QB.directions[1], zB, QB) && (!!aB(QB.directions[2], zB, QB) && (!!aB(nB.m.Cross(zB.directions[0], QB.directions[0]), zB … [truncated]
+         return !!nB(ZB.directions[0], ZB, TB) && (!!nB(ZB.directions[1], ZB, TB) && (!!nB(ZB.directions[2], ZB, TB) && (!!nB(TB.directions[0], ZB, TB) && (!!nB(TB.directions[1], ZB, TB) && (!!nB(TB.directions[2], ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[0], TB.directions[0]), ZB … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L294)

```diff
-     pB._TmpVector3 = (0, QB.c)(2, nB.m.Zero)
+     hB._TmpVector3 = (0, TB.b)(2, JB.s.Zero)
```

#### 43. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L296)

```diff
-   40432: (BB, jB, zB) => {
+   40380: (BB, IB, ZB) => {
```

#### 44. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L299-L301` → after: `L299-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L299-L301) · [Before (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L299-L301)

```diff
-       g: () => uB,
-       i: () => NB,
-       l: () => IB
+       d: () => kB,
+       f: () => vB,
+       i: () => GB
```

#### 45. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L303-L304)

```diff
-     var QB = zB(40225),
-       nB = zB(37171);
+     var TB = ZB(40193),
+       JB = ZB(37120);
```

#### 46. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L338-L339)

```diff
-         const dB = QB.d.aY()?.floatingOriginOffset || nB.m.ZeroReadOnly;
-         BB.setFloat4(jB, zB.normal.x, zB.normal.y, zB.normal.z, zB.d + nB.m.Dot(zB.normal, dB))
+         const oB = TB.c.JR()?.floatingOriginOffset || JB.s.ZeroReadOnly;
+         BB.setFloat4(IB, ZB.normal.x, ZB.normal.y, ZB.normal.z, ZB.d + JB.s.Dot(ZB.normal, oB))
```

#### 47. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L343)

```diff
-   40445: (BB, jB, zB) => {
+   40395: (BB, IB, ZB) => {
```

#### 48. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L345)

```diff
-       c: () => QB
+       e: () => TB
```

#### 49. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L366)

```diff
-           const zB = this._mesh.aY();
+           const ZB = this._mesh.JR();
```

#### 50. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L372-L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L372-L373) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L372-L373)

```diff
-                 else if (QB.cL)
-                 for (const BB of QB.cL) {
+                 else if (TB.EW)
+                 for (const BB of TB.EW) {
```

#### 51. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L391)

```diff
-   40380: (BB, jB, zB) => {
+   40339: (BB, IB, ZB) => {
```

#### 52. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L393)

```diff
-       b: () => GB
+       e: () => UB
```

#### 53. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L395-L405` → after: `L395-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L395-L405) · [Before (L395-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L395-L405)

```diff
-     var QB = zB(40066),
-       nB = zB(40068),
-       dB = zB(40164),
-       IB = zB(37202),
-       NB = zB(37197),
-       uB = zB(40388),
-       UB = zB(40195),
-       aB = zB(38783),
-       pB = zB(37869),
-       rB = zB(40423),
-       sB = zB(40086);
+     var TB = ZB(40061),
+       JB = ZB(40065),
+       oB = ZB(40152),
+       GB = ZB(37153),
+       vB = ZB(37147),
+       kB = ZB(40341),
+       cB = ZB(40177),
+       nB = ZB(38718),
+       hB = ZB(37824),
+       zB = ZB(40369),
+       FB = ZB(40085);
```

#### 54. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L411)

```diff
-           this._func = (0, QB.g)(this, yB), this.reset()
+           this._func = (0, TB.l)(this, qB), this.reset()
```

#### 55. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L502` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L502) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L502)

```diff
-         jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], IB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], (0, QB.e)(BB, null, jB, {
+         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], (0, TB.j)(BB, null, IB, {
```

#### 56. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L512)

```diff
-         }, null, yB), (0, QB.e)(BB, null, zB, {
+         }, null, qB), (0, TB.j)(BB, null, ZB, {
```

#### 57. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L522)

```diff
-         }, null, yB), (0, QB.e)(BB, null, dB, {
+         }, null, qB), (0, TB.j)(BB, null, oB, {
```

#### 58. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L532)

```diff
-         }, null, yB), (0, QB.e)(BB, null, IB, {
+         }, null, qB), (0, TB.j)(BB, null, GB, {
```

#### 59. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L542)

```diff
-         }, null, yB), (0, QB.e)(BB, null, NB, {
+         }, null, qB), (0, TB.j)(BB, null, vB, {
```

#### 60. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L552)

```diff
-         }, null, yB), (0, QB.e)(BB, null, uB, {
+         }, null, qB), (0, TB.j)(BB, null, kB, {
```

#### 61. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L562)

```diff
-         }, null, yB), (0, QB.e)(BB, null, UB, {
+         }, null, qB), (0, TB.j)(BB, null, cB, {
```

#### 62. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L572)

```diff
-         }, null, yB), (0, QB.e)(BB, null, aB, {
+         }, null, qB), (0, TB.j)(BB, null, nB, {
```

#### 63. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L582)

```diff
-         }, null, yB), (0, QB.e)(BB, null, pB, {
+         }, null, qB), (0, TB.j)(BB, null, hB, {
```

#### 64. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L592)

```diff
-         }, null, yB), (0, QB.e)(BB, null, rB, {
+         }, null, qB), (0, TB.j)(BB, null, zB, {
```

#### 65. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L602)

```diff
-         }, null, yB), (0, QB.e)(BB, null, JB, {
+         }, null, qB), (0, TB.j)(BB, null, NB, {
```

#### 66. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L612)

```diff
-         }, null, yB), (0, QB.e)(BB, null, mB, {
+         }, null, qB), (0, TB.j)(BB, null, gB, {
```

#### 67. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L630-L632` → after: `L630-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L630-L632) · [Before (L630-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L630-L632)

```diff
-     var mB = zB(40428),
-       yB = zB(39997),
-       kB = zB(39965);
+     var gB = ZB(40371),
+       qB = ZB(39973),
+       yB = ZB(39931);
```

#### 68. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L691)

```diff
-           this._useVertexPulling !== jB && (this._useVertexPulling = jB, this.DjB(BB.MiscDirtyFlag))
+           this._useVertexPulling !== IB && (this._useVertexPulling = IB, this.GZB(BB.MiscDirtyFlag))
```

#### 69. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L706)

```diff
-           this._alpha = jB, 1 !== zB && 1 !== jB || this.DjB(BB.MiscDirtyFlag + BB.PrePassDirtyFlag)
+           this._alpha = IB, 1 !== ZB && 1 !== IB || this.GZB(BB.MiscDirtyFlag + BB.PrePassDirtyFlag)
```

#### 70. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L712)

```diff
-           this._backFaceCulling !== jB && (this._backFaceCulling = jB, this.DjB(BB.TextureDirtyFlag))
+           this._backFaceCulling !== IB && (this._backFaceCulling = IB, this.GZB(BB.TextureDirtyFlag))
```

#### 71. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L719)

```diff
-           this._textureRepetitionMode !== zB && (this._textureRepetitionMode = zB, this.DjB(BB.TextureDirtyFlag))
+           this._textureRepetitionMode !== ZB && (this._textureRepetitionMode = ZB, this.GZB(BB.TextureDirtyFlag))
```

#### 72. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L725)

```diff
-           this._cullBackFaces !== jB && (this._cullBackFaces = jB, this.DjB(BB.TextureDirtyFlag))
+           this._cullBackFaces !== IB && (this._cullBackFaces = IB, this.GZB(BB.TextureDirtyFlag))
```

#### 73. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L748)

```diff
-           this._onDisposeObserver && this.pY.remove(this._onDisposeObserver), this._onDisposeObserver = this.pY.add(BB)
+           this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
```

#### 74. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L751)

```diff
-           return this._onBindObservable || (this._onBindObservable = new IB.c), this._onBindObservable
+           return this._onBindObservable || (this._onBindObservable = new GB.b), this._onBindObservable
```

#### 75. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L757)

```diff
-           return this._onUnBindObservable || (this._onUnBindObservable = new IB.c), this._onUnBindObservable
+           return this._onUnBindObservable || (this._onUnBindObservable = new GB.b), this._onUnBindObservable
```

#### 76. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L760)

```diff
-           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new IB.c), this._onEffectCreatedObservable
+           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new GB.b), this._onEffectCreatedObservable
```

#### 77. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L773)

```diff
-           this._alphaMode[zB] !== jB && (this._alphaMode[zB] = jB, this.DjB(BB.TextureDirtyFlag))
+           this._alphaMode[ZB] !== IB && (this._alphaMode[ZB] = IB, this.GZB(BB.TextureDirtyFlag))
```

#### 78. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L785)

```diff
-           this._fogEnabled !== jB && (this._fogEnabled = jB, this.DjB(BB.MiscDirtyFlag))
+           this._fogEnabled !== IB && (this._fogEnabled = IB, this.GZB(BB.MiscDirtyFlag))
```

#### 79. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L818)

```diff
-           this._fillMode !== jB && (this._fillMode = jB, this.DjB(BB.MiscDirtyFlag))
+           this._fillMode !== IB && (this._fillMode = IB, this.GZB(BB.MiscDirtyFlag))
```

#### 80. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L824-L825` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L824-L825) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L824-L825)

```diff
-           const jB = this.aY().wJ().getCaps().fragmentDepthSupported;
-           BB && !jB && aB.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = BB && jB, this._markAllSubMeshesAsMiscDirty()
+           const IB = this.JR().PN().getCaps().fragmentDepthSupported;
+           BB && !IB && nB.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = BB && IB, this._markAllSubMeshesAsMiscDirty()
```

#### 81. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L841-L843)

```diff
-           this.customShaderNameResolve = (0, QB.g)(this, xB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, QB.g)(this, KB, void 0), this.uniqueId = ((0, QB.g)(this, CB) … [truncated]
-           const aB = zB || NB.c.LastCreatedScene;
-           aB && (this._scene = aB, this._dirtyCallbacks = {}, this._forceGLSL = uB, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
+           this.customShaderNameResolve = (0, TB.l)(this, tB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, TB.l)(this, bB, void 0), this.uniqueId = ((0, TB.l)(this, xB) … [truncated]
+           const nB = ZB || vB.e.LastCreatedScene;
+           nB && (this._scene = nB, this._dirtyCallbacks = {}, this._forceGLSL = kB, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMesh … [truncated]
```

#### 82. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L846-L847` → after: `L846-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L846-L847) · [Before (L846-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L846-L847)

```diff
-           const BB = this.aY().wJ();
-           this._uniformBuffer?.dispose(), BB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new UB.d(BB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new UB.d(this._scene.wJ(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
+           const BB = this.JR().PN();
+           this._uniformBuffer?.dispose(), BB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new cB.d(BB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new cB.d(this._scene.PN(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt  … [truncated]
```

#### 83. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L918)

```diff
-           const zB = this.aY().meshes;
+           const ZB = this.JR().meshes;
```

#### 84. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L920-L922` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L920-L922) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L920-L922)

```diff
-             if (BB.cL)
-               for (const zB of BB.cL)
-                 if (zB.bJ() === this)
+             if (BB.EW)
+               for (const ZB of BB.EW)
+                 if (ZB.LN() === this)
```

#### 85. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L924)

```diff
-           jB && this.DjB(BB.AllDirtyFlag)
+           IB && this.GZB(BB.AllDirtyFlag)
```

#### 86. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L928)

```diff
-           const QB = this._scene.wJ(),
+           const TB = this._scene.PN(),
```

#### 87. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L931)

```diff
-           return (0, yB.e)(dB) && dB.materialContext && (dB.materialContext.useVertexPulling = this.useVertexPulling), QB.enableEffect(dB), QB.setState(this.backFaceCulling, this.zOffset, !1, nB, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
+           return (0, qB.b)(oB) && oB.materialContext && (oB.materialContext.useVertexPulling = this.useVertexPulling), TB.enableEffect(oB), TB.setState(this.backFaceCulling, this.zOffset, !1, JB, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
```

#### 88. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L944)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : BB.setMatrix("view", this.aY().getViewMatrix())
+           this._useUBO ? this._needToBindSceneUbo = !0 : BB.setMatrix("view", this.JR().getViewMatrix())
```

#### 89. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L947)

```diff
-           this._useUBO ? this._needToBindSceneUbo = !0 : (BB.setMatrix("viewProjection", this.aY().getTransformMatrix()), BB.setMatrix("projection", this.aY().getProjectionMatrix()), BB.setMatrix("inverseProjection", this.aY().getInverseProjectionMatrix()))
+           this._useUBO ? this._needToBindSceneUbo = !0 : (BB.setMatrix("viewProjection", this.JR().getTransformMatrix()), BB.setMatrix("projection", this.JR().getProjectionMatrix()), BB.setMatrix("inverseProjection", this.JR().getInverseProjectionMatrix()))
```

#### 90. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L954-L955` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L954-L955) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L954-L955)

```diff
-           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && jB && (this._needToBindSceneUbo = !1, (0, mB.z)(jB, this.aY().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = BB ? BB.visibility : 1, this._onBindObservable && … [truncated]
-             const BB = this._scene.wJ();
+           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && IB && (this._needToBindSceneUbo = !1, (0, gB.v)(IB, this.JR().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = BB ? BB.visibility : 1, this._onBindObservable && … [truncated]
+             const BB = this._scene.PN();
```

#### 91. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L959)

```diff
-             const BB = this._scene.wJ();
+             const BB = this._scene.PN();
```

#### 92. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L963)

```diff
-             const BB = this._scene.wJ();
+             const BB = this._scene.PN();
```

#### 93. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L969)

```diff
-             this._scene.wJ().setDepthFunction(this._cachedDepthFunctionState)
+             this._scene.PN().setDepthFunction(this._cachedDepthFunctionState)
```

#### 94. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L972)

```diff
-             this._scene.wJ().setDepthWrite(this._cachedDepthWriteState)
+             this._scene.PN().setDepthWrite(this._cachedDepthWriteState)
```

#### 95. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L975)

```diff
-             this._scene.wJ().setColorWrite(this._cachedColorWriteState)
+             this._scene.PN().setColorWrite(this._cachedColorWriteState)
```

#### 96. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1015)

```diff
-             dB = this.aY(),
+             oB = this.JR(),
```

#### 97. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1019)

```diff
-             if (!this._scene || !this._scene.wJ()) return;
+             if (!this._scene || !this._scene.PN()) return;
```

#### 98. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1024-L1025` → after: `L1024-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1024-L1025) · [Before (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1024-L1025)

```diff
-               if (BB.cL) {
-                 const jB = new uB.d(0, 0, 0, 0, 0, BB, void 0, !1, !1);
+               if (BB.EW) {
+                 const IB = new kB.e(0, 0, 0, 0, 0, BB, void 0, !1, !1);
```

#### 99. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1043-L1044` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1043-L1044) · [Before (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1043-L1044)

```diff
-         DjB(jB) {
-           this.aY().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (BB._DirtyCallbackArray.length = 0, jB & BB.ImageProcessingDirtyFlag && BB._DirtyCallbackArray.push(BB._ImageProcessingDirtyCallBack), jB & BB.TextureDirtyFlag && BB._DirtyCallbackArray.push(BB._Textu … [truncated]
+         GZB(IB) {
+           this.JR().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (BB._DirtyCallbackArray.length = 0, IB & BB.ImageProcessingDirtyFlag && BB._DirtyCallbackArray.push(BB._ImageProcessingDirtyCallBack), IB & BB.TextureDirtyFlag && BB._DirtyCallbackArray.push(BB._Textu … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1047)

```diff
-           const BB = this.aY().meshes;
+           const BB = this.JR().meshes;
```

#### 101. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1049-L1050` → after: `L1049-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1049-L1050) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1049-L1050)

```diff
-             if (jB.cL)
-               for (const BB of jB.cL) BB.bJ() === this && BB.resetDrawCache()
+             if (IB.EW)
+               for (const BB of IB.EW) BB.LN() === this && BB.resetDrawCache()
```

#### 102. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1053` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1053) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1053)

```diff
-           const jB = this.aY();
+           const IB = this.JR();
```

#### 103. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1057-L1059` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1057-L1059) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1057-L1059)

```diff
-             if (QB.cL)
-               for (const zB of QB.cL) {
-                 if ((zB.bJ() || (jB._hasDefaultMaterial ? jB.defaultMaterial : null)) === this)
+             if (TB.EW)
+               for (const ZB of TB.EW) {
+                 if ((ZB.LN() || (IB._hasDefaultMaterial ? IB.defaultMaterial : null)) === this)
```

#### 104. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1064-L1066` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1064-L1066) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1064-L1066)

```diff
-           if (this.aY().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
-           const BB = this.aY().enablePrePassRenderer();
-           BB && BB.DjB()
+           if (this.JR().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const BB = this.JR().enablePrePassRenderer();
+           BB && BB.GZB()
```

#### 105. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1104)

```diff
-             this.pY.add((() => {
+             this.oR.add((() => {
```

#### 106. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1113` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1113) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1113)

```diff
-           const QB = this.aY();
+           const TB = this.JR();
```

#### 107. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1127)

```diff
-           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.pY.notifyObservers(this), this.pY.clear(), this._onBindObservable && this._onBind … [truncated]
+           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.oR.notifyObservers(this), this.oR.clear(), this._onBindObservable && this._onBind … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1134-L1135` → after: `L1134-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1134-L1135) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1134-L1135)

```diff
-             if (BB.cL && zB)
-               for (const QB of BB.cL) {
+             if (BB.EW && ZB)
+               for (const TB of BB.EW) {
```

#### 109. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1144` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1144) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1144)

```diff
-           BB.material !== this || BB.vQB || (BB.material = null)
+           BB.material !== this || BB.wJB || (BB.material = null)
```

#### 110. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1159)

```diff
-             if ("BABYLON.PBRMaterial" === jB.customType && jB.overloadedAlbedo && (jB.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return aB.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+             if ("BABYLON.PBRMaterial" === IB.customType && IB.overloadedAlbedo && (IB.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return nB.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
```

#### 111. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1161)

```diff
-           const nB = dB.i.Instantiate(jB.customType).Parse(jB, zB, QB);
+           const JB = oB.j.Instantiate(IB.customType).Parse(IB, ZB, TB);
```

#### 112. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1170)

```diff
-                 const BB = dB.i.Instantiate("BABYLON." + nB);
+                 const BB = oB.j.Instantiate("BABYLON." + JB);
```

#### 113. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1178` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1178) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1178)

```diff
-         jB = [(0, nB.A)()], zB = [(0, nB.A)()], kB = [(0, nB.A)()], GB = [(0, nB.A)()], LB = [(0, nB.A)()], gB = [(0, nB.A)()], tB = [(0, nB.A)()], SB = [(0, nB.A)("alpha")], MB = [(0, nB.A)("backFaceCulling")], EB = [(0, nB.A)("textureRepetitionMode")], iB = [(0, nB.A)("textureR … [truncated]
+         IB = [(0, JB.C)()], ZB = [(0, JB.C)()], yB = [(0, JB.C)()], UB = [(0, JB.C)()], WB = [(0, JB.C)()], dB = [(0, JB.C)()], CB = [(0, JB.C)()], QB = [(0, JB.C)("alpha")], sB = [(0, JB.C)("backFaceCulling")], wB = [(0, JB.C)("textureRepetitionMode")], OB = [(0, JB.C)("textureR … [truncated]
```

#### 114. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1188)

```diff
-         }, null, xB), (0, QB.e)(BB, null, WB, {
+         }, null, tB), (0, TB.j)(BB, null, uB, {
```

#### 115. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1198)

```diff
-         }, null, xB), (0, QB.e)(BB, null, eB, {
+         }, null, tB), (0, TB.j)(BB, null, fB, {
```

#### 116. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1208)

```diff
-         }, null, xB), (0, QB.e)(BB, null, wB, {
+         }, null, tB), (0, TB.j)(BB, null, AB, {
```

#### 117. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1218)

```diff
-         }, null, xB), (0, QB.e)(null, null, jB, {
+         }, null, tB), (0, TB.j)(null, null, IB, {
```

#### 118. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1231)

```diff
-         }, KB, CB), (0, QB.e)(null, null, zB, {
+         }, bB, xB), (0, TB.j)(null, null, ZB, {
```

#### 119. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1244)

```diff
-         }, cB, bB), (0, QB.e)(null, null, kB, {
+         }, EB, DB), (0, TB.j)(null, null, yB, {
```

#### 120. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1257)

```diff
-         }, vB, RB), (0, QB.e)(null, null, GB, {
+         }, KB, VB), (0, TB.j)(null, null, UB, {
```

#### 121. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1270` → after: `L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1270) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1270)

```diff
-         }, OB, Bj), (0, QB.e)(null, null, LB, {
+         }, SB, BI), (0, TB.j)(null, null, WB, {
```

#### 122. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1283` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1283) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1283)

```diff
-         }, jj, zj), (0, QB.e)(null, null, gB, {
+         }, II, ZI), (0, TB.j)(null, null, dB, {
```

#### 123. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1296)

```diff
-         }, Qj, nj), (0, QB.e)(null, null, tB, {
+         }, TI, JI), (0, TB.j)(null, null, CB, {
```

#### 124. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1309)

```diff
-         }, dj, Ij), (0, QB.e)(null, null, SB, {
+         }, oI, GI), (0, TB.j)(null, null, QB, {
```

#### 125. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1322` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1322) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1322)

```diff
-         }, Nj, uj), (0, QB.e)(null, null, MB, {
+         }, vI, kI), (0, TB.j)(null, null, sB, {
```

#### 126. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1335)

```diff
-         }, Uj, aj), (0, QB.e)(null, null, EB, {
+         }, cI, nI), (0, TB.j)(null, null, wB, {
```

#### 127. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1348)

```diff
-         }, pj, rj), (0, QB.e)(null, null, iB, {
+         }, hI, zI), (0, TB.j)(null, null, OB, {
```

#### 128. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1361)

```diff
-         }, sj, Jj), (0, QB.e)(null, null, qB, {
+         }, FI, NI), (0, TB.j)(null, null, YB, {
```

#### 129. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1374)

```diff
-         }, mj, yj), (0, QB.e)(null, null, fB, {
+         }, gI, qI), (0, TB.j)(null, null, iB, {
```

#### 130. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1387)

```diff
-         }, kj, Gj), (0, QB.e)(null, null, oB, {
+         }, yI, UI), (0, TB.j)(null, null, pB, {
```

#### 131. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1400` → after: `L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1400) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1400)

```diff
-         }, Lj, gj), (0, QB.e)(null, null, HB, {
+         }, WI, dI), (0, TB.j)(null, null, aB, {
```

#### 132. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1413)

```diff
-         }, tj, Sj), (0, QB.e)(null, null, DB, {
+         }, CI, QI), (0, TB.j)(null, null, HB, {
```

#### 133. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1426)

```diff
-         }, Mj, Ej), (0, QB.e)(null, null, FB, {
+         }, sI, wI), (0, TB.j)(null, null, MB, {
```

#### 134. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1439)

```diff
-         }, ij, qj), (0, QB.e)(null, null, YB, {
+         }, OI, YI), (0, TB.j)(null, null, jB, {
```

#### 135. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1452)

```diff
-         }, fj, oj), (0, QB.e)(null, null, VB, {
+         }, iI, pI), (0, TB.j)(null, null, PB, {
```

#### 136. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1465)

```diff
-         }, Hj, Dj), (0, QB.e)(null, null, hB, {
+         }, aI, HI), (0, TB.j)(null, null, RB, {
```

#### 137. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1478)

```diff
-         }, Fj, Yj), (0, QB.e)(null, null, XB, {
+         }, MI, jI), (0, TB.j)(null, null, rB, {
```

#### 138. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1491` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1491) · [Before (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1491)

```diff
-         }, Vj, hj), (0, QB.e)(null, null, ZB, {
+         }, PI, RI), (0, TB.j)(null, null, mB, {
```

#### 139. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1504)

```diff
-         }, Xj, Zj), (0, QB.e)(null, null, AB, {
+         }, rI, mI), (0, TB.j)(null, null, XB, {
```

#### 140. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1517)

```diff
-         }, Aj, Tj), (0, QB.e)(null, null, TB, {
+         }, XI, LI), (0, TB.j)(null, null, LB, {
```

#### 141. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1530` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1530) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1530)

```diff
-         }, Pj, Wj), (0, QB.e)(null, null, lB, {
+         }, eI, uI), (0, TB.j)(null, null, lB, {
```

#### 142. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1549)

```diff
-       })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB … [truncated]
+       })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB … [truncated]
```

#### 143. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1557` → after: `L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1557) · [Before (L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1557)

```diff
-     Object.getOwnPropertyDescriptor(GB.prototype, "pluginManager") || Object.defineProperty(GB.prototype, "pluginManager", (0, kB.f)("Material", "pluginManager"))
+     Object.getOwnPropertyDescriptor(UB.prototype, "pluginManager") || Object.defineProperty(UB.prototype, "pluginManager", (0, yB.g)("Material", "pluginManager"))
```

#### 144. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1559)

```diff
-   40435: (BB, jB, zB) => {
+   40383: (BB, IB, ZB) => {
```

#### 145. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1561)

```diff
-       d: () => nB
+       e: () => JB
```

#### 146. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1563)

```diff
-     var QB = zB(39980);
+     var TB = ZB(39951);
```

#### 147. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1718` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1718) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1718)

```diff
-   40428: (BB, jB, zB) => {
+   40371: (BB, IB, ZB) => {
```

#### 148. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1720-L1725` → after: `L1720-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1720-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1720-L1724) · [Before (L1720-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1720-L1725)

```diff
-       A: () => gB,
-       E: () => HB,
-       H: () => tB,
-       J: () => fB,
-       K: () => oB,
-       N: () => sB,
+       C: () => aB,
+       F: () => CB,
+       I: () => iB,
+       L: () => pB,
+       M: () => FB,
```

#### 149. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1727-L1728` → after: `L1726-L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1726-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1726-L1728) · [Before (L1727-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1727-L1728)

```diff
-       S: () => WB,
-       U: () => XB,
+       R: () => uB,
+       V: () => rB,
+       W: () => PB,
```

#### 150. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1732-L1734` → after: `L1732-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1732-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1732-L1734) · [Before (L1732-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1732-L1734)

```diff
-       cb: () => LB,
-       db: () => DB,
-       f: () => SB,
+       e: () => QB,
+       eb: () => HB,
+       fb: () => fB,
```

#### 151. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1736)

```diff
-       hb: () => lB,
+       h: () => hB,
```

#### 152. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1738)

```diff
-       lb: () => wB,
+       kb: () => AB,
```

#### 153. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1740-L1741` → after: `L1740-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1740-L1741) · [Before (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1740-L1741)

```diff
-       nb: () => cB,
-       q: () => GB,
+       ob: () => EB,
+       p: () => YB,
```

#### 154. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1745-L1748` → after: `L1747-L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1747-L1748) · [Before (L1745-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1745-L1748)

```diff
-       x: () => uB,
-       xb: () => JB,
-       y: () => mB,
-       z: () => yB
+       wb: () => NB,
+       y: () => dB
```

#### 155. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1750-L1754` → after: `L1750-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1750-L1754) · [Before (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1750-L1754)

```diff
-     var QB = zB(38783),
-       nB = zB(37197),
-       dB = zB(40284),
-       IB = zB(40432),
-       NB = zB(40435);
+     var TB = ZB(38718),
+       JB = ZB(37147),
+       oB = ZB(40245),
+       GB = ZB(40380),
+       vB = ZB(40383);
```

#### 156. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1759)

```diff
-         1 === BB.mode && QB.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), jB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
+         1 === BB.mode && TB.d.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), IB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
```

#### 157. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1778)

```diff
-       zB && BB.fogEnabled && (!jB || jB.applyFog) && 0 !== BB.fogMode && (zB.setFloat4("vFogInfos", BB.fogMode, BB.fogStart, BB.fogEnd, BB.fogDensity), QB ? (BB.fogColor.toLinearSpaceToRef(UB, BB.wJ().useExactSrgbConversions), zB.setColor3("vFogColor", UB)) : zB.setColor3("vFogCo … [truncated]
+       ZB && BB.fogEnabled && (!IB || IB.applyFog) && 0 !== BB.fogMode && (ZB.setFloat4("vFogInfos", BB.fogMode, BB.fogStart, BB.fogEnd, BB.fogDensity), TB ? (BB.fogColor.toLinearSpaceToRef(cB, BB.PN().useExactSrgbConversions), ZB.setColor3("vFogColor", cB)) : ZB.setColor3("vFogCo … [truncated]
```

#### 158. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1789-L1790` → after: `L1789-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1789-L1790) · [Before (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1789-L1790)

```diff
-       if (IB > 0 && nB.c.LastCreatedEngine) {
-         const NB = nB.c.LastCreatedEngine.getCaps().maxVertexAttribs,
+       if (GB > 0 && JB.e.LastCreatedEngine) {
+         const vB = JB.e.LastCreatedEngine.getCaps().maxVertexAttribs,
```

#### 159. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1799)

```diff
-         for (let zB = 0; zB < IB; zB++) UB && BB.push("position" + zB), aB && BB.push("normal" + zB), pB && BB.push("tangent" + zB), rB && BB.push("uv_" + zB), sB && BB.push("uv2_" + zB), JB && BB.push("color" + zB), BB.length > NB && QB.c.Error("Cannot add more vertex attributes … [truncated]
+         for (let ZB = 0; ZB < GB; ZB++) cB && BB.push("position" + ZB), nB && BB.push("normal" + ZB), hB && BB.push("tangent" + ZB), zB && BB.push("uv_" + ZB), FB && BB.push("uv2_" + ZB), NB && BB.push("color" + ZB), BB.length > vB && TB.d.Error("Cannot add more vertex attributes … [truncated]
```

#### 160. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1826-L1827` → after: `L1826-L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1826-L1827) · [Before (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1826-L1827)

```diff
-       if (BB.texturesEnabled && nB && NB.d.ReflectionTextureEnabled) {
-         if (zB.l_("reflectionMatrix", nB.getReflectionTextureMatrix()), zB.updateFloat2("vReflectionInfos", nB.level * BB.iblIntensity, rB), uB && nB.boundingBoxSize) {
+       if (BB.texturesEnabled && JB && vB.e.ReflectionTextureEnabled) {
+         if (ZB.T6("reflectionMatrix", JB.getReflectionTextureMatrix()), ZB.updateFloat2("vReflectionInfos", JB.level * BB.iblIntensity, zB), kB && JB.boundingBoxSize) {
```

#### 161. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1851)

```diff
-       if (QB && NB.d.ReflectionTextureEnabled) {
+       if (TB && vB.e.ReflectionTextureEnabled) {
```

#### 162. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1864)

```diff
-       jB.l_(zB + "Matrix", QB)
+       IB.T6(ZB + "Matrix", TB)
```

#### 163. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1880` → after: `L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1880) · [Before (L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1880)

```diff
-           dB && (jB.setMatrices("mBones", dB), zB && BB.aY().prePassRenderer && BB.aY().prePassRenderer.getIndex(2) && (zB.previousBones[BB.uniqueId] || (zB.previousBones[BB.uniqueId] = dB.slice()), jB.setMatrices("mPreviousBones", zB.previousBones[BB.uniqueId]), QB = dB, zB.prev … [truncated]
+           oB && (IB.setMatrices("mBones", oB), ZB && BB.JR().prePassRenderer && BB.JR().prePassRenderer.getIndex(2) && (ZB.previousBones[BB.uniqueId] || (ZB.previousBones[BB.uniqueId] = oB.slice()), IB.setMatrices("mPreviousBones", ZB.previousBones[BB.uniqueId]), TB = oB, ZB.prev … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1896)

```diff
-         MB(jB.lightSources[IB], IB, BB, zB, "boolean" === typeof QB ? QB : QB.SPECULARTERM, jB.receiveShadows)
+         sB(IB.lightSources[GB], GB, BB, ZB, "boolean" === typeof TB ? TB : TB.SPECULARTERM, IB.receiveShadows)
```

#### 165. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1947)

```diff
-         const zB = BB.wJ().getCaps().maxUniformBuffersPerShaderStage;
+         const ZB = BB.PN().getCaps().maxUniformBuffersPerShaderStage;
```

#### 166. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1963-L1964` → after: `L1963-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1963-L1964) · [Before (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1963-L1964)

```diff
-           dB || (dB = new Set, iB.set(BB, dB)), dB.has(nB) || (dB.add(nB), QB.c.Warn(`maxSimultaneousLights is ${jB} but this engine supports at most ${zB} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${nB} lights affecting this mes … [truncated]
-         }(BB.wJ(), NB, dB, Math.min(jB.lightSources.length, NB));
+           oB || (oB = new Set, OB.set(BB, oB)), oB.has(JB) || (oB.add(JB), TB.d.Warn(`maxSimultaneousLights is ${IB} but this engine supports at most ${ZB} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${JB} lights affecting this mes … [truncated]
+         }(BB.PN(), vB, oB, Math.min(IB.lightSources.length, vB));
```

#### 167. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1972)

```diff
-       const pB = BB.wJ().getCaps();
+       const hB = BB.PN().getCaps();
```

#### 168. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1980` → after: `L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1980) · [Before (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1980)

```diff
-       if (jB && NB.d.ReflectionTextureEnabled) {
+       if (IB && vB.e.ReflectionTextureEnabled) {
```

#### 169. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1982-L1983` → after: `L1982-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L1982-L1983) · [Before (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L1982-L1983)

```diff
-         zB._needNormals = !0, zB.REFLECTION = !0, zB.GAMMAREFLECTION = jB.gammaSpace, zB.RGBDREFLECTION = jB.isRGBD, zB.LODINREFLECTIONALPHA = jB.lodLevelInAlpha, zB.LINEARSPECULARREFLECTION = jB.linearSpecularLOD, zB.USEIRRADIANCEMAP = !1, zB.LODBASEDMICROSFURACE = BB.wJ().getCa … [truncated]
-         const IB = BB.wJ();
+         ZB._needNormals = !0, ZB.REFLECTION = !0, ZB.GAMMAREFLECTION = IB.gammaSpace, ZB.RGBDREFLECTION = IB.isRGBD, ZB.LODINREFLECTIONALPHA = IB.lodLevelInAlpha, ZB.LINEARSPECULARREFLECTION = IB.linearSpecularLOD, ZB.USEIRRADIANCEMAP = !1, ZB.LODBASEDMICROSFURACE = BB.PN().getCa … [truncated]
+         const GB = BB.PN();
```

#### 170. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2052)

```diff
-       !1 !== dB && (uB = (0, IB.i)(zB, BB, QB)), QB.DEPTHPREPASS !== !jB.getColorWrite() && (QB.DEPTHPREPASS = !QB.DEPTHPREPASS, uB = !0), QB.INSTANCES !== nB && (QB.INSTANCES = nB, uB = !0), QB.THIN_INSTANCES !== NB && (QB.THIN_INSTANCES = NB, uB = !0), uB && QB.markAsUnprocesse … [truncated]
+       !1 !== oB && (kB = (0, GB.f)(ZB, BB, TB)), TB.DEPTHPREPASS !== !IB.getColorWrite() && (TB.DEPTHPREPASS = !TB.DEPTHPREPASS, kB = !0), TB.INSTANCES !== JB && (TB.INSTANCES = JB, kB = !0), TB.THIN_INSTANCES !== vB && (TB.THIN_INSTANCES = vB, kB = !0), kB && TB.markAsUnprocesse … [truncated]
```

#### 171. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2065)

```diff
-       for (let QB = 1; QB <= 6; ++QB) jB["UV" + QB] = !!jB._needUVs && BB.isVerticesDataPresent(`uv${1===QB?"":QB}`);
+       for (let TB = 1; TB <= 6; ++TB) IB["UV" + TB] = !!IB._needUVs && BB.isVerticesDataPresent(`uv${1===TB?"":TB}`);
```

#### 172. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2070)

```diff
-       return BB.isVerticesDataPresent("instanceColor") && (BB.bQB || BB.hasThinInstances) && (jB.INSTANCESCOLOR = !0), nB && function(BB, jB) {
+       return BB.isVerticesDataPresent("instanceColor") && (BB.sJB || BB.hasThinInstances) && (IB.INSTANCESCOLOR = !0), JB && function(BB, IB) {
```

#### 173. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2077)

```diff
-             const nB = BB.aY(),
+             const JB = BB.JR(),
```

#### 174. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2087)

```diff
-               const zB = nB.wJ().getCaps().maxVertexUniformVectors;
+               const ZB = JB.PN().getCaps().maxVertexUniformVectors;
```

#### 175. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2090)

```diff
-                   dB = IB ? AB : ZB,
+                   oB = GB ? XB : mB,
```

#### 176. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2092)

```diff
-                 (nB > NB || IB && 3 * nB > zB) && (PB.add(BB.skeleton), QB.c.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${nB} of ~${NB} usable uniform vectors${IB?" (multiview)":""} on a device reporting ${zB}. This can e … [truncated]
+                 (JB > vB || GB && 3 * JB > ZB) && (eB.add(BB.skeleton), TB.d.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${JB} of ~${vB} usable uniform vectors${GB?" (multiview)":""} on a device reporting ${ZB}. This can e … [truncated]
```

#### 177. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2116)

```diff
-       jB.ORDER_INDEPENDENT_TRANSPARENCY = BB.useOrderIndependentTransparency && zB, jB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !BB.wJ().getCaps().textureFloatLinearFiltering, QB === jB.ORDER_INDEPENDENT_TRANSPARENCY && nB === jB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || jB.markAsU … [truncated]
+       IB.ORDER_INDEPENDENT_TRANSPARENCY = BB.useOrderIndependentTransparency && ZB, IB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !BB.PN().getCaps().textureFloatLinearFiltering, TB === IB.ORDER_INDEPENDENT_TRANSPARENCY && JB === IB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || IB.markAsU … [truncated]
```

#### 178. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2219)

```diff
-   40438: (BB, jB, zB) => {
+   40390: (BB, IB, ZB) => {
```

#### 179. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2221)

```diff
-       e: () => dB
+       b: () => oB
```

#### 180. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2223-L2225` → after: `L2223-L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2223-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2223-L2225) · [Before (L2223-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2223-L2225)

```diff
-     var QB = zB(37171),
-       nB = zB(40380);
-     class dB extends nB.b {
+     var TB = ZB(37120),
+       JB = ZB(40339);
+     class oB extends JB.e {
```

#### 181. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2228)

```diff
-         super(BB, jB, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new QB.c, this._storeEffectOnSubMeshes = zB
+         super(BB, IB, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new TB.b, this._storeEffectOnSubMeshes = ZB
```

#### 182. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2234` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2234) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2234)

```diff
-         return !!BB && (!this._storeEffectOnSubMeshes || (!BB.cL || 0 === BB.cL.length || this.isReadyForSubMesh(BB, BB.cL[0], jB)))
+         return !!BB && (!this._storeEffectOnSubMeshes || (!BB.EW || 0 === BB.EW.length || this.isReadyForSubMesh(BB, BB.EW[0], IB)))
```

#### 183. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2238)

```diff
-         return !(this.checkReadyOnEveryCall || !BB.effect || !jB || jB._renderId !== this.aY().getRenderId())
+         return !(this.checkReadyOnEveryCall || !BB.effect || !IB || IB._renderId !== this.JR().getRenderId())
```

#### 184. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2247)

```diff
-         jB && this.bindForSubMesh(BB, jB, jB.cL[0])
+         IB && this.bindForSubMesh(BB, IB, IB.EW[0])
```

#### 185. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2252` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2252) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2252)

```diff
-         super._afterBind(BB, jB, zB), this.aY()._cachedEffect = jB, zB ? zB._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
+         super._afterBind(BB, IB, ZB), this.JR()._cachedEffect = IB, ZB ? ZB._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 186. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2263)

```diff
-   40466: (BB, jB, zB) => {
+   40416: (BB, IB, ZB) => {
```

#### 187. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2302)

```diff
-         const QB = `vp_${zB}_info`;
+         const TB = `vp_${ZB}_info`;
```

#### 188. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2307)

```diff
-   40418: (BB, jB, zB) => {
+   40361: (BB, IB, ZB) => {
```

#### 189. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2312-L2314` → after: `L2312-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2312-L2314) · [Before (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2312-L2314)

```diff
-     var QB = zB(40066),
-       nB = zB(37171),
-       dB = zB(40068);
+     var TB = ZB(40061),
+       JB = ZB(37120),
+       oB = ZB(40065);
```

#### 190. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2338)

```diff
-         jB = [dB.f.filter((function() {
+         IB = [oB.h.filter((function() {
```

#### 191. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2340)

```diff
-         }))], zB = [dB.f.filter((function() {
+         }))], ZB = [oB.h.filter((function() {
```

#### 192. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2342)

```diff
-         }))], (0, QB.e)(BB, null, jB, {
+         }))], (0, TB.j)(BB, null, IB, {
```

#### 193. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2352` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2352) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2352)

```diff
-         }, null, nB), (0, QB.e)(BB, null, zB, {
+         }, null, JB), (0, TB.j)(BB, null, ZB, {
```

#### 194. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2367)

```diff
-         }), (0, QB.g)(BB, nB)
+         }), (0, TB.l)(BB, JB)
```

#### 195. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2373-L2374` → after: `L2373-L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2373-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2373-L2374) · [Before (L2373-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2373-L2374)

```diff
-       const NB = new nB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         uB = new nB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       const vB = new JB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         kB = new JB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 196. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2384-L2385` → after: `L2384-L2385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2384-L2385) · [Before (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2384-L2385)

```diff
-       const NB = new nB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         uB = new nB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       const vB = new JB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         kB = new JB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 197. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2392)

```diff
-   40388: (BB, jB, zB) => {
+   40341: (BB, IB, ZB) => {
```

#### 198. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2394)

```diff
-       d: () => aB
+       e: () => nB
```

#### 199. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2396-L2401` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2396-L2401) · [Before (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2396-L2401)

```diff
-     var QB, nB = zB(40211),
-       dB = zB(40396),
-       IB = zB(40404),
-       NB = zB(40418),
-       uB = zB(40423),
-       UB = zB(39965);
+     var TB, JB = ZB(40188),
+       oB = ZB(40343),
+       GB = ZB(40351),
+       vB = ZB(40361),
+       kB = ZB(40369),
+       cB = ZB(39931);
```

#### 200. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2414` → after: `L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2414) · [Before (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2414)

```diff
-         return !zB && jB && (this._drawWrappers[BB] = zB = new uB.e(this._mesh.aY().wJ())), zB
+         return !ZB && IB && (this._drawWrappers[BB] = ZB = new kB.c(this._mesh.JR().PN())), ZB
```

#### 201. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2453)

```diff
-         this.materialIndex = BB, this.verticesStart = jB, this.verticesCount = zB, this.indexStart = QB, this.indexCount = nB, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
+         this.materialIndex = BB, this.verticesStart = IB, this.verticesCount = ZB, this.indexStart = TB, this.indexCount = JB, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 202. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2459` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2459) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2459)

```diff
-         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.rV() : this._boundingInfo
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.qm() : this._boundingInfo
```

#### 203. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2480` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2480) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2480)

```diff
-         if (!jB) return BB && this._mesh.aY()._hasDefaultMaterial ? this._mesh.aY().defaultMaterial : null;
+         if (!IB) return BB && this._mesh.JR()._hasDefaultMaterial ? this._mesh.JR().defaultMaterial : null;
```

#### 204. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2493-L2494` → after: `L2493-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2493-L2494) · [Before (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2493-L2494)

```diff
-         if (BB || (BB = this._renderingMesh.getVerticesData(nB.l.PositionKind)), !BB) return this._boundingInfo = this._mesh.rV(), this;
-         const jB = this._renderingMesh.dQB();
+         if (BB || (BB = this._renderingMesh.getVerticesData(JB.i.PositionKind)), !BB) return this._boundingInfo = this._mesh.qm(), this;
+         const IB = this._renderingMesh.MTB();
```

#### 205. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2497)

```diff
-           const BB = this._renderingMesh.rV();
+           const BB = this._renderingMesh.qm();
```

#### 206. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2503)

```diff
-         return this._boundingInfo ? this._boundingInfo.reConstruct(zB.minimum, zB.maximum) : this._boundingInfo = new IB.c(zB.minimum, zB.maximum), this
+         return this._boundingInfo ? this._boundingInfo.reConstruct(ZB.minimum, ZB.maximum) : this._boundingInfo = new GB.d(ZB.minimum, ZB.maximum), this
```

#### 207. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2506)

```diff
-         return this.rV()._checkCollision(BB)
+         return this.qm()._checkCollision(BB)
```

#### 208. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2509-L2510` → after: `L2509-L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2509-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2509-L2510) · [Before (L2509-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2509-L2510)

```diff
-         let jB = this.rV();
-         return jB || (this.refreshBoundingInfo(), jB = this.rV()), jB && jB.update(BB), this
+         let IB = this.qm();
+         return IB || (this.refreshBoundingInfo(), IB = this.qm()), IB && IB.update(BB), this
```

#### 209. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2513` → after: `L2513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2513) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2513)

```diff
-         const jB = this.rV();
+         const IB = this.qm();
```

#### 210. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2517` → after: `L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2517) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2517)

```diff
-         const jB = this.rV();
+         const IB = this.qm();
```

#### 211. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2537` → after: `L2537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2537) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2537)

```diff
-         const jB = this.rV();
+         const IB = this.qm();
```

#### 212. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2541)

```diff
-         const dB = this.bJ();
+         const oB = this.LN();
```

#### 213. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2562)

```diff
-           if (!(aB < 0) && ((nB || !IB || aB < IB.distance) && (IB = new dB.d(null, null, aB), IB.faceId = NB / 2, nB))) break
+           if (!(nB < 0) && ((JB || !GB || nB < GB.distance) && (GB = new oB.c(null, null, nB), GB.faceId = vB / 2, JB))) break
```

#### 214. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2572)

```diff
-           if (!(UB < 0) && ((nB || !IB || UB < IB.distance) && (IB = new dB.d(null, null, UB), IB.faceId = NB / 2, nB))) break
+           if (!(cB < 0) && ((JB || !GB || cB < GB.distance) && (GB = new oB.c(null, null, cB), GB.faceId = vB / 2, JB))) break
```

#### 215. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2622` → after: `L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2622) · [Before (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2622)

```diff
-           const BB = this.rV();
+           const BB = this.qm();
```

#### 216. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2624` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2624) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2624)

```diff
-           zB._boundingInfo = new IB.c(BB.minimum, BB.maximum)
+           ZB._boundingInfo = new GB.d(BB.minimum, BB.maximum)
```

#### 217. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2630-L2632` → after: `L2630-L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2630-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2630-L2632) · [Before (L2630-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2630-L2632)

```diff
-         this._linesIndexBuffer && (this._mesh.aY().wJ()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const jB = this._mesh.cL.indexOf(this);
-         this._mesh.cL.splice(jB, 1), this.resetDrawCache(void 0, BB)
+         this._linesIndexBuffer && (this._mesh.JR().PN()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const IB = this._mesh.EW.indexOf(this);
+         this._mesh.EW.splice(IB, 1), this.resetDrawCache(void 0, BB)
```

#### 218. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2641` → after: `L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2641) · [Before (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2641)

```diff
-         const uB = (nB || QB).dQB();
+         const kB = (JB || TB).MTB();
```

#### 219. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2648` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/266.js#L2648) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/266.js#L2648)

```diff
-     }(QB = aB.prototype).projectToRef ?? (QB.projectToRef = (0, UB.i)("SubMesh", "projectToRef"))
+     }(TB = nB.prototype).projectToRef ?? (TB.projectToRef = (0, cB.j)("SubMesh", "projectToRef"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L4)

```diff
-   41686: (BB, jB, zB) => {
+   41617: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L6)

```diff
-       e: () => QB
+       b: () => TB
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L11)

```diff
-   41668: (BB, jB, zB) => {
+   41597: (BB, IB, ZB) => {
```

#### 4. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L13)

```diff
-       b: () => uB
+       d: () => kB
```

#### 5. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L15-L19` → after: `L15-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L15-L19) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L15-L19)

```diff
-     var QB = zB(40066),
-       nB = zB(40068),
-       dB = zB(37171),
-       IB = zB(40344),
-       NB = zB(40312);
+     var TB = ZB(40061),
+       JB = ZB(40065),
+       oB = ZB(37120),
+       GB = ZB(40310),
+       vB = ZB(40277);
```

#### 6. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L26)

```diff
-           super(...arguments), this._position = (0, QB.g)(this, pB), this._needProjectionMatrixCompute = !0, this._viewMatrix = dB.c.Identity(), this._projectionMatrix = dB.c.Identity()
+           super(...arguments), this._position = (0, TB.l)(this, hB), this._needProjectionMatrixCompute = !0, this._viewMatrix = oB.b.Identity(), this._projectionMatrix = oB.b.Identity()
```

#### 7. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L59)

```diff
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = dB.m.Zero()), dB.m.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = oB.s.Zero()), oB.s.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L71)

```diff
-           return this.direction = dB.m.Normalize(BB.subtract(this.position)), this.direction
+           return this.direction = oB.s.Normalize(BB.subtract(this.position)), this.direction
```

#### 9. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L75-L77` → after: `L75-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L75-L77) · [Before (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L75-L77)

```diff
-           const BB = dB.m.Cross(this.direction, NB.c.Y),
-             jB = dB.m.Cross(BB, this.direction);
-           return dB.m.RotationFromAxis(BB, jB, this.direction)
+           const BB = oB.s.Cross(this.direction, vB.c.Y),
+             IB = oB.s.Cross(BB, this.direction);
+           return oB.s.RotationFromAxis(BB, IB, this.direction)
```

#### 10. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L89)

```diff
-           super._initCache(), this._cache.position = dB.m.Zero()
+           super._initCache(), this._cache.position = oB.s.Zero()
```

#### 11. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L95)

```diff
-           return !BB && this.isSynchronized() ? (this._currentRenderId = this.aY().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.jH(this.position), this._worldMatrix || (this._worldMatrix = dB.c.Identity()), dB.c.TranslationToRef(this.position.x,  … [truncated]
+           return !BB && this.isSynchronized() ? (this._currentRenderId = this.JR().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.TY(this.position), this._worldMatrix || (this._worldMatrix = oB.b.Identity()), oB.b.TranslationToRef(this.position.x,  … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L110)

```diff
-           const jB = dB.h.KJ[0];
+           const IB = oB.m.rN[0];
```

#### 13. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L112-L114` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L112-L114) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L112-L114)

```diff
-           this.computeTransformedInformation() && (zB = this.transformedPosition), dB.m.NormalizeToRef(this.getShadowDirection(BB), jB), 1 === Math.abs(dB.m.Dot(jB, dB.m.Up())) && (jB.z = 1e-13);
-           const QB = dB.h.KJ[1];
-           return zB.addToRef(jB, QB), dB.c.LookAtLHToRef(zB, QB, dB.m.Up(), this._viewMatrix), this._viewMatrix
+           this.computeTransformedInformation() && (ZB = this.transformedPosition), oB.s.NormalizeToRef(this.getShadowDirection(BB), IB), 1 === Math.abs(oB.s.Dot(IB, oB.s.Up())) && (IB.z = 1e-13);
+           const TB = oB.m.rN[1];
+           return ZB.addToRef(IB, TB), oB.b.LookAtLHToRef(ZB, TB, oB.s.Up(), this._viewMatrix), this._viewMatrix
```

#### 14. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L121)

```diff
-         jB = [(0, nB.x)()], zB = [(0, nB.x)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], (0, QB.e)(BB, null, jB, {
+         IB = [(0, JB.A)()], ZB = [(0, JB.A)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], (0, TB.j)(BB, null, IB, {
```

#### 15. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L131)

```diff
-         }, null, pB), (0, QB.e)(BB, null, zB, {
+         }, null, hB), (0, TB.j)(BB, null, ZB, {
```

#### 16. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L141)

```diff
-         }, null, pB), (0, QB.e)(BB, null, uB, {
+         }, null, hB), (0, TB.j)(BB, null, kB, {
```

#### 17. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L151)

```diff
-         }, null, pB), (0, QB.e)(BB, null, UB, {
+         }, null, hB), (0, TB.j)(BB, null, cB, {
```

#### 18. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L170)

```diff
-   41682: (BB, jB, zB) => {
+   41610: (BB, IB, ZB) => {
```

#### 19. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L172)

```diff
-       c: () => nB
+       d: () => JB
```

#### 20. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L174-L175` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L174-L175) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L174-L175)

```diff
-     var QB = zB(40580);
-     class nB extends QB.i {
+     var TB = ZB(40521);
+     class JB extends TB.e {
```

#### 21. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L185)

```diff
-         super(null, dB, !IB, NB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, aB), this.format = nB, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== UB || (uB = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== UB || (uB = … [truncated]
+         super(null, oB, !GB, vB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, nB), this.format = JB, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== cB || (kB = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== cB || (kB = … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L195)

```diff
-         const BB = new nB(null, this.getSize().width, this.getSize().height, this.format, this.aY(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         const BB = new JB(null, this.getSize().width, this.getSize().height, this.format, this.JR(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
```

#### 23. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L222)

```diff
-           uB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QB.i.TRILINEAR_SAMPLINGMODE;
+           kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TB.e.TRILINEAR_SAMPLINGMODE;
```

#### 24. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L228)

```diff
-           uB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QB.i.TRILINEAR_SAMPLINGMODE;
+           kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TB.e.TRILINEAR_SAMPLINGMODE;
```

#### 25. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L233)

```diff
-   41718: (BB, jB, zB) => {
+   41647: (BB, IB, ZB) => {
```

#### 26. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L235)

```diff
-       e: () => QB.e
+       b: () => TB.b
```

#### 27. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L237-L238)

```diff
-     var QB = zB(40539);
-     (0, QB.g)()
+     var TB = ZB(40488);
+     (0, TB.d)()
```

#### 28. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L240)

```diff
-   41674: (BB, jB, zB) => {
+   41605: (BB, IB, ZB) => {
```

#### 29. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L242)

```diff
-       d: () => QB.b
+       c: () => TB.e
```

#### 30. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L244-L245` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L244-L245) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L244-L245)

```diff
-     var QB = zB(40564);
-     (0, QB.c)()
+     var TB = ZB(40503);
+     (0, TB.f)()
```

#### 31. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L247)

```diff
-   40564: (BB, jB, zB) => {
+   40503: (BB, IB, ZB) => {
```

#### 32. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L249-L250` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L249-L250) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L249-L250)

```diff
-       b: () => rB,
-       c: () => mB
+       e: () => zB,
+       f: () => gB
```

#### 33. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L252-L259` → after: `L252-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L252-L259) · [Before (L252-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L252-L259)

```diff
-     var QB, nB, dB = zB(37379),
-       IB = zB(40211),
-       NB = zB(40504),
-       uB = zB(40570),
-       UB = zB(40380),
-       aB = zB(40576),
-       pB = zB(39965);
-     class rB extends NB.b {
+     var TB, JB, oB = ZB(37311),
+       GB = ZB(40188),
+       vB = ZB(40448),
+       kB = ZB(40510),
+       cB = ZB(40339),
+       nB = ZB(40514),
+       hB = ZB(39931);
+     class zB extends vB.c {
```

#### 34. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L268)

```diff
-         super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, jB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = QB, this.useVertexAlpha = nB, this.color = new  … [truncated]
+         super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, IB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = TB, this.useVertexAlpha = JB, this.color = new  … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L270)

```diff
-           attributes: [IB.l.PositionKind],
+           attributes: [GB.i.PositionKind],
```

#### 36. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L277)

```diff
-         if (this.useVertexAlpha ? uB.defines.push("#define VERTEXALPHA") : uB.needAlphaBlending = !1, this.useVertexColor ? (uB.defines.push("#define VERTEXCOLOR"), uB.attributes.push(IB.l.ColorKind)) : (uB.uniforms.push("color"), this._color4 = new dB.g), NB) this.material = NB;
+         if (this.useVertexAlpha ? kB.defines.push("#define VERTEXALPHA") : kB.needAlphaBlending = !1, this.useVertexColor ? (kB.defines.push("#define VERTEXCOLOR"), kB.attributes.push(GB.i.ColorKind)) : (kB.uniforms.push("color"), this._color4 = new oB.g), vB) this.material = vB;
```

#### 37. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L279-L280` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L279-L280) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L279-L280)

```diff
-           this.aY().wJ().isWebGPU && !rB.ForceGLSL && (this._shaderLanguage = 1), uB.shaderLanguage = this._shaderLanguage, uB.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([zB.e(349).then((() => zB(42691))), zB.e(355).then((() => zB(42700)))]) : await Promise.all([zB.e(331).then((() => zB(42706))), zB.e(337).then((() => zB(42714)))])
+           this.JR().PN().isWebGPU && !zB.ForceGLSL && (this._shaderLanguage = 1), kB.shaderLanguage = this._shaderLanguage, kB.extraInitializationsAsync = async () => {
+             1 === this._shaderLanguage ? await Promise.all([ZB.e(349).then((() => ZB(42557))), ZB.e(355).then((() => ZB(42563)))]) : await Promise.all([ZB.e(331).then((() => ZB(42572))), ZB.e(337).then((() => ZB(42575)))])
```

#### 38. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L282)

```diff
-           const BB = new aB.l("colorShader", this.aY(), "color", uB, !1);
+           const BB = new nB.n("colorShader", this.JR(), "color", kB, !1);
```

#### 39. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L299)

```diff
-         this._setMaterial(BB), this.material && (this.material.fillMode = UB.b.LineListDrawMode, this.material.disableLighting = !0)
+         this._setMaterial(BB), this.material && (this.material.fillMode = cB.e.LineListDrawMode, this.material.disableLighting = !0)
```

#### 40. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L320-L321)

```diff
-         const QB = this.aY().wJ();
-         return this._unIndexed ? QB.drawArraysType(UB.b.LineListDrawMode, BB.verticesStart, BB.verticesCount, zB) : QB.drawElementsType(UB.b.LineListDrawMode, BB.indexStart, BB.indexCount, zB), this
+         const TB = this.JR().PN();
+         return this._unIndexed ? TB.drawArraysType(cB.e.LineListDrawMode, BB.verticesStart, BB.verticesCount, ZB) : TB.drawElementsType(cB.e.LineListDrawMode, BB.indexStart, BB.indexCount, ZB), this
```

#### 41. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L332)

```diff
-           return zB.source = this, new rB(BB, this.aY(), zB.parent, zB.source, zB.doNotCloneChildren)
+           return ZB.source = this, new zB(BB, this.JR(), ZB.parent, ZB.source, ZB.doNotCloneChildren)
```

#### 42. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L334)

```diff
-         return new rB(BB, this.aY(), jB, this, zB)
+         return new zB(BB, this.JR(), IB, this, ZB)
```

#### 43. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L338-L340` → after: `L338-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L338-L340) · [Before (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L338-L340)

```diff
-         if (this.vY) {
-           jB.vY = {};
-           for (const BB in this.vY) jB.vY[BB] = this.vY[BB]
+         if (this.Zm) {
+           IB.Zm = {};
+           for (const BB in this.Zm) IB.Zm[BB] = this.Zm[BB]
```

#### 44. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L345)

```diff
-         super.serialize(BB), BB.color = this.color.nQB(), BB.alpha = this.alpha
+         super.serialize(BB), BB.color = this.color.HTB(), BB.alpha = this.alpha
```

#### 45. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L349)

```diff
-         return zB.color = dB.d.FromArray(BB.color), zB.alpha = BB.alpha, zB
+         return ZB.color = oB.c.FromArray(BB.color), ZB.alpha = BB.alpha, ZB
```

#### 46. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L353` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L353) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L353)

```diff
-     class sB extends uB.d {
+     class FB extends kB.b {
```

#### 47. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L364-L365` → after: `L364-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/267.js#L364-L365) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/267.js#L364-L365)

```diff
-       JB || (JB = !0, NB.b._LinesMeshParser = (BB, jB) => rB.Parse(BB, jB))
-     }(QB = rB.prototype).enableEdgesRendering ?? (QB.enableEdgesRendering = (0, pB.i)("LinesMesh", "enableEdgesRendering")), (nB = sB.prototype).enableEdgesRendering ?? (nB.enableEdgesRendering = (0, pB.i)("InstancedLinesMesh", "enableEdgesRendering"))
+       NB || (NB = !0, vB.c._LinesMeshParser = (BB, IB) => zB.Parse(BB, IB))
+     }(TB = zB.prototype).enableEdgesRendering ?? (TB.enableEdgesRendering = (0, hB.j)("LinesMesh", "enableEdgesRendering")), (JB = FB.prototype).enableEdgesRendering ?? (JB.enableEdgesRendering = (0, hB.j)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L4)

```diff
-   40576: (BB, jB, zB) => {
+   40514: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L7-L8` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L7-L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L7-L8)

```diff
-       c: () => tB,
-       f: () => LB,
+       d: () => CB,
+       h: () => WB,
```

#### 3. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L11)

```diff
-       l: () => kB
+       n: () => yB
```

#### 4. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L13-L25` → after: `L13-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L13-L25) · [Before (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L13-L25)

```diff
-     var QB = zB(40086),
-       nB = zB(40156),
-       dB = zB(37171),
-       IB = zB(40211),
-       NB = zB(40580),
-       uB = zB(40445),
-       UB = zB(40110),
-       aB = zB(40438),
-       pB = zB(37197),
-       rB = zB(40432),
-       sB = zB(40428),
-       JB = zB(40466),
-       mB = zB(37222);
+     var TB = ZB(40085),
+       JB = ZB(40148),
+       oB = ZB(37120),
+       GB = ZB(40188),
+       vB = ZB(40521),
+       kB = ZB(40395),
+       cB = ZB(40118),
+       nB = ZB(40390),
+       hB = ZB(37147),
+       zB = ZB(40380),
+       FB = ZB(40371),
+       NB = ZB(40416),
+       gB = ZB(37170);
```

#### 5. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L30)

```diff
-     class kB extends aB.e {
+     class yB extends nB.b {
```

#### 6. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L33)

```diff
-         super(BB, jB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
+         super(BB, IB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L175-L176` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L175-L176) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L175-L176)

```diff
-         const dB = this.aY(),
-           NB = dB.wJ(),
+         const oB = this.JR(),
+           vB = oB.PN(),
```

#### 8. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L186)

```diff
-           const BB = 0 === this._options.defines[nB].indexOf("#define") ? this._options.defines[nB] : `#define ${this._options.defines[nB]}`;
+           const BB = 0 === this._options.defines[JB].indexOf("#define") ? this._options.defines[JB] : `#define ${this._options.defines[JB]}`;
```

#### 9. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L190-L191` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L190-L191) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L190-L191)

```diff
-         if (BB && BB.isVerticesDataPresent(IB.l.ColorKind) && (-1 === aB.indexOf(IB.l.ColorKind) && aB.push(IB.l.ColorKind), UB.push("#define VERTEXCOLOR")), jB && (UB.push("#define INSTANCES"), (0, sB.xb)(aB, this._materialHelperNeedsPreviousMatrices), BB?.hasThinInstances && (U … [truncated]
-           aB.push(IB.l.MatricesIndicesKind), aB.push(IB.l.MatricesWeightsKind), BB.numBoneInfluencers > 4 && (aB.push(IB.l.MatricesIndicesExtraKind), aB.push(IB.l.MatricesWeightsExtraKind));
+         if (BB && BB.isVerticesDataPresent(GB.i.ColorKind) && (-1 === nB.indexOf(GB.i.ColorKind) && nB.push(GB.i.ColorKind), cB.push("#define VERTEXCOLOR")), IB && (cB.push("#define INSTANCES"), (0, FB.wb)(nB, this._materialHelperNeedsPreviousMatrices), BB?.hasThinInstances && (c … [truncated]
+           nB.push(GB.i.MatricesIndicesKind), nB.push(GB.i.MatricesWeightsKind), BB.numBoneInfluencers > 4 && (nB.push(GB.i.MatricesIndicesExtraKind), nB.push(GB.i.MatricesWeightsExtraKind));
```

#### 10. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L193)

```diff
-           UB.push("#define NUM_BONE_INFLUENCERS " + BB.numBoneInfluencers), pB = new uB.c, pB.addCPUSkinningFallback(0, BB), jB.isUsingTextureForMatrices ? (UB.push("#define BONETEXTURE"), -1 === kB.indexOf("boneTextureInfo") && kB.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
+           cB.push("#define NUM_BONE_INFLUENCERS " + BB.numBoneInfluencers), hB = new kB.e, hB.addCPUSkinningFallback(0, BB), IB.isUsingTextureForMatrices ? (cB.push("#define BONETEXTURE"), -1 === yB.indexOf("boneTextureInfo") && yB.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L213)

```diff
-         BB && this.needAlphaTestingForMesh(BB) && UB.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, rB.c)(kB), (0, rB.l)(this, dB, UB)), dB.fogEnabled && BB?.applyFog && dB.fogMode !== nB.g.FOGMODE_NONE && (UB.push("#define FOG"), -1 === kB.indexOf("view") & … [truncated]
+         BB && this.needAlphaTestingForMesh(BB) && cB.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, zB.c)(yB), (0, zB.i)(this, oB, cB)), oB.fogEnabled && BB?.applyFog && oB.fogMode !== JB.e.FOGMODE_NONE && (cB.push("#define FOG"), -1 === yB.indexOf("view") & … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L218)

```diff
-             kB.push(`vp_${jB}_info`)
+             yB.push(`vp_${IB}_info`)
```

#### 13. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L243)

```diff
-         }, NB), QB ? zB.setEffect(fB, qB, this._materialContext) : MB && MB.setEffect(fB, qB), this._onEffectCreatedObservable && (yB.effect = fB, yB.subMesh = zB ?? BB?.cL[0] ?? null, this._onEffectCreatedObservable.notifyObservers(yB))), MB._wasPreviouslyUsingInstances = !!jB,  … [truncated]
+         }, vB), TB ? ZB.setEffect(iB, YB, this._materialContext) : sB && sB.setEffect(iB, YB), this._onEffectCreatedObservable && (qB.effect = iB, qB.subMesh = ZB ?? BB?.EW[0] ?? null, this._onEffectCreatedObservable.notifyObservers(qB))), sB._wasPreviouslyUsingInstances = !!IB,  … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L249)

```diff
-         const nB = this.aY(); - 1 !== QB.indexOf("worldView") && (BB.multiplyToRef(nB.getViewMatrix(), this._cachedWorldViewMatrix), zB.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== QB.indexOf("worldViewProjection") && (BB.multiplyToRef(nB.getTransformMatrix(), thi … [truncated]
+         const JB = this.JR(); - 1 !== TB.indexOf("worldView") && (BB.multiplyToRef(JB.getViewMatrix(), this._cachedWorldViewMatrix), ZB.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== TB.indexOf("worldViewProjection") && (BB.multiplyToRef(JB.getTransformMatrix(), thi … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L258)

```diff
-         const IB = this.aY();
+         const GB = this.JR();
```

#### 16. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L262)

```diff
-         if (dB && NB && NB.length > 0 && IB.wJ().supportsUniformBuffers)
+         if (oB && vB && vB.length > 0 && GB.PN().supportsUniformBuffers)
```

#### 17. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L269)

```diff
-                 (0, sB.z)(dB, IB.getSceneUniformBuffer()), IB.finalizeSceneUbo(), uB = !0
+                 (0, FB.v)(oB, GB.getSceneUniformBuffer()), GB.finalizeSceneUbo(), kB = !0
```

#### 18. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L275)

```diff
-           for (BB in uB || -1 === this._options.uniforms.indexOf("view") || dB.setMatrix("view", IB.getViewMatrix()), uB || -1 === this._options.uniforms.indexOf("projection") || dB.setMatrix("projection", IB.getProjectionMatrix()), uB || -1 === this._options.uniforms.indexOf("vi … [truncated]
+           for (BB in kB || -1 === this._options.uniforms.indexOf("view") || oB.setMatrix("view", GB.getViewMatrix()), kB || -1 === this._options.uniforms.indexOf("projection") || oB.setMatrix("projection", GB.getProjectionMatrix()), kB || -1 === this._options.uniforms.indexOf("vi … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L305)

```diff
-           const zB = IB.wJ(),
+           const ZB = GB.PN(),
```

#### 20. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L317)

```diff
-           (0, sB.y)(jB, dB), jB.morphTargetManager && jB.morphTargetManager.isUsingTextureForTargets && jB.morphTargetManager._bind(dB);
+           (0, FB.t)(IB, oB), IB.morphTargetManager && IB.morphTargetManager.isUsingTextureForTargets && IB.morphTargetManager._bind(oB);
```

#### 21. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L350)

```diff
-         const jB = QB.b.Clone((() => new kB(BB, this.aY(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
+         const IB = TB.b.Clone((() => new yB(BB, this.JR(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
```

#### 22. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L438-L439` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L438-L439) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L438-L439)

```diff
-         for (jB in BB.quaternions = {}, this._quaternions) BB.quaternions[jB] = this._quaternions[jB].nQB();
-         for (jB in BB.matrices = {}, this._matrices) BB.matrices[jB] = this._matrices[jB].nQB();
+         for (IB in BB.quaternions = {}, this._quaternions) BB.quaternions[IB] = this._quaternions[IB].HTB();
+         for (IB in BB.matrices = {}, this._matrices) BB.matrices[IB] = this._matrices[IB].HTB();
```

#### 23. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L454)

```diff
-       for (IB in BB.stencil && nB.stencil.parse(BB.stencil, jB, zB), BB.textures) nB.setTexture(IB, NB.i.Parse(BB.textures[IB], jB, zB));
+       for (GB in BB.stencil && JB.stencil.parse(BB.stencil, IB, ZB), BB.textures) JB.setTexture(GB, vB.e.Parse(BB.textures[GB], IB, ZB));
```

#### 24. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L458)

```diff
-         for (let BB = 0; BB < QB.length; BB++) dB.push(NB.i.Parse(QB[BB], jB, zB));
+         for (let BB = 0; BB < TB.length; BB++) oB.push(vB.e.Parse(TB[BB], IB, ZB));
```

#### 25. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L523-L524)

```diff
-       for (IB in BB.quaternions) nB.setQuaternion(IB, dB.d.FromArray(BB.quaternions[IB]));
-       for (IB in BB.matrices) nB.setMatrix(IB, dB.c.FromArray(BB.matrices[IB]));
+       for (GB in BB.quaternions) JB.setQuaternion(GB, oB.f.FromArray(BB.quaternions[GB]));
+       for (GB in BB.matrices) JB.setMatrix(GB, oB.b.FromArray(BB.matrices[GB]));
```

#### 26. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L538)

```diff
-         const IB = new UB.b;
+         const GB = new cB.d;
```

#### 27. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L542)

```diff
-               const jB = GB(JSON.parse(IB.responseText), zB || pB.c.LastCreatedScene, QB);
+               const IB = UB(JSON.parse(GB.responseText), ZB || hB.e.LastCreatedScene, TB);
```

#### 28. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L552)

```diff
-         const IB = new UB.b;
+         const GB = new cB.d;
```

#### 29. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L557)

```diff
-                 dB = GB(JSON.parse(QB.shaderMaterial), jB || pB.c.LastCreatedScene, zB);
+                 oB = UB(JSON.parse(TB.shaderMaterial), IB || hB.e.LastCreatedScene, ZB);
```

#### 30. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/268.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/268.js#L568)

```diff
-       SB || (SB = !0, kB.Parse = GB, kB.ParseFromFileAsync = LB, kB.ParseFromSnippetAsync = gB, kB.CreateFromSnippetAsync = tB, (0, mB.d)("BABYLON.ShaderMaterial", kB))
+       QB || (QB = !0, yB.Parse = UB, yB.ParseFromFileAsync = WB, yB.ParseFromSnippetAsync = dB, yB.CreateFromSnippetAsync = CB, (0, gB.i)("BABYLON.ShaderMaterial", yB))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/269.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/269.js#L1)

```diff
- /*! For license information please see 7zvlu.269.15dd9d2a.chunk.js.LICENSE.txt */
+ /*! For license information please see c6gaap.269.b7df7f86.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/269.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/269.js#L5)

```diff
-   40594: (BB, jB, zB) => {
+   40543: (BB, IB, ZB) => {
```

#### 3. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/269.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/269.js#L8-L13)

```diff
-       SDK_VERSION: () => QB.e,
-       _DEFAULT_ENTRY_NAME: () => QB.h,
-       wzB: () => QB.k,
-       _addOrOverwriteComponent: () => QB.m,
-       _apps: () => QB.o,
-       _clearComponents: () => QB.s,
+       SDK_VERSION: () => TB.f,
+       _DEFAULT_ENTRY_NAME: () => TB.i,
+       yTB: () => TB.k,
+       _addOrOverwriteComponent: () => TB.n,
+       _apps: () => TB.r,
+       _clearComponents: () => TB.t,
```

#### 4. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L15-L24` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/269.js#L15-L24) · [Before (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/269.js#L15-L24)

```diff
-       _getProvider: () => QB.z,
-       _registerComponent: () => QB.D,
-       _removeServiceInstance: () => QB.G,
-       deleteApp: () => QB.I,
-       getApp: () => QB.N,
-       getApps: () => QB.M,
-       initializeApp: () => QB.R,
-       onLog: () => QB.T,
-       registerVersion: () => QB.X,
-       setLogLevel: () => QB.Y
+       _getProvider: () => TB.w,
+       _registerComponent: () => TB.y,
+       _removeServiceInstance: () => TB.z,
+       deleteApp: () => TB.C,
+       getApp: () => TB.I,
+       getApps: () => TB.F,
+       initializeApp: () => TB.M,
+       onLog: () => TB.Q,
+       registerVersion: () => TB.R,
+       setLogLevel: () => TB.S
```

#### 5. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L26-L27` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/269.js#L26-L27) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/269.js#L26-L27)

```diff
-     var QB = zB(40601);
-     (0, QB.X)("firebase", "9.23.0", "app")
+     var TB = ZB(40551);
+     (0, TB.R)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1)

```diff
- /*! For license information please see 7zvlu.270.0c091839.chunk.js.LICENSE.txt */
+ /*! For license information please see c6gaap.270.f44f0c97.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L5)

```diff
-   40611: (BB, jB, zB) => {
+   40562: (BB, IB, ZB) => {
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L9` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L8) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L9)

```diff
-       D: () => aB,
+       F: () => HB,
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L11-L12` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L10) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L11-L12)

```diff
-       H: () => PB,
-       J: () => JB,
+       I: () => nB,
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L19-L20` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L17-L20) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L19-L20)

```diff
-       _: () => HB,
-       b: () => sB,
+       Y: () => WB,
+       Z: () => gB,
+       ab: () => yB,
+       cb: () => aB,
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L23-L25` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L23-L26) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L23-L25)

```diff
-       g: () => SB,
-       i: () => tB,
-       l: () => NB,
+       h: () => sB,
+       hb: () => dB,
+       j: () => QB,
+       n: () => CB,
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L28-L30` → after: `L29-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L29-L30) · [Before (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L28-L30)

```diff
-       u: () => FB,
-       x: () => qB,
-       y: () => DB
+       t: () => LB,
+       x: () => MB
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L37)

```diff
-           nB < 128 ? jB[zB++] = nB : nB < 2048 ? (jB[zB++] = nB >> 6 | 192, jB[zB++] = 63 & nB | 128) : 55296 === (64512 & nB) && QB + 1 < BB.length && 56320 === (64512 & BB.charCodeAt(QB + 1)) ? (nB = 65536 + ((1023 & nB) << 10) + (1023 & BB.charCodeAt(++QB)), jB[zB++] = nB >> 1 … [truncated]
+           JB < 128 ? IB[ZB++] = JB : JB < 2048 ? (IB[ZB++] = JB >> 6 | 192, IB[ZB++] = 63 & JB | 128) : 55296 === (64512 & JB) && TB + 1 < BB.length && 56320 === (64512 & BB.charCodeAt(TB + 1)) ? (JB = 65536 + ((1023 & JB) << 10) + (1023 & BB.charCodeAt(++TB)), IB[ZB++] = JB >> 1 … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L267)

```diff
-               return null != QB ? String(QB) : `<${zB}?>`
+               return null != TB ? String(TB) : `<${ZB}?>`
```

#### 10. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L270)

```diff
-           dB = `${this.serviceName}: ${nB} (${zB}).`;
+           oB = `${this.serviceName}: ${JB} (${ZB}).`;
```

#### 11. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L325)

```diff
-       return BB.substring(jB, zB > 0 ? zB : void 0)
+       return BB.substring(IB, ZB > 0 ? ZB : void 0)
```

#### 12. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L415)

```diff
-   40601: (BB, jB, zB) => {
+   40551: (BB, IB, ZB) => {
```

#### 13. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L417-L419` → after: `L417-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L417-L419) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L417-L419)

```diff
-       b: () => dB.g,
-       e: () => pj,
-       h: () => RB,
+       b: () => oB.j,
+       f: () => hI,
+       i: () => VB,
```

#### 14. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L421-L423` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L421-L423) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L421-L423)

```diff
-       m: () => Qj,
-       o: () => Bj,
-       s: () => Nj,
+       n: () => TI,
+       r: () => BI,
+       t: () => vI,
```

#### 15. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L426-L427` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L428) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L426-L427)

```diff
-       D: () => nj,
-       G: () => Ij,
+       C: () => gI,
```

#### 16. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L429` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L430) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L429)

```diff
-       N: () => sj,
+       F: () => NI,
```

#### 17. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L432-L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L434) · [Before (L432-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L432-L434)

```diff
-       T: () => kj,
-       X: () => yj,
-       Y: () => Gj
+       S: () => UI
```

#### 18. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L436-L438` → after: `L436-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L436-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L436-L438) · [Before (L436-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L436-L438)

```diff
-     var QB = zB(40603),
-       nB = zB(40616),
-       dB = zB(40611);
+     var TB = ZB(40559),
+       JB = ZB(40568),
+       oB = ZB(40562);
```

#### 19. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L550)

```diff
-             return `${jB.library}/${jB.version}`
+             return `${IB.library}/${IB.version}`
```

#### 20. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L558)

```diff
-       iB = new nB.c("@firebase/app"),
+       OB = new JB.g("@firebase/app"),
```

#### 21. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L617)

```diff
-         BB.container.hY(jB)
+         BB.container.xR(IB)
```

#### 22. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L619)

```diff
-         iB.debug(`Component ${jB.name} failed to register with FirebaseApp ${BB.name}`, zB)
+         OB.debug(`Component ${IB.name} failed to register with FirebaseApp ${BB.name}`, ZB)
```

#### 23. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L629)

```diff
-       if (jj.has(jB)) return iB.debug(`There were multiple attempts to register component ${jB}.`), !1;
+       if (II.has(IB)) return OB.debug(`There were multiple attempts to register component ${IB}.`), !1;
```

#### 24. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L663)

```diff
-       Uj = new dB.d("app", "Firebase", uj);
+       cI = new oB.h("app", "Firebase", kI);
```

#### 25. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L666)

```diff
-         this._isDeleted = !1, this._options = Object.assign({}, BB), this._config = Object.assign({}, jB), this._name = jB.name, this._automaticDataCollectionEnabled = jB.automaticDataCollectionEnabled, this._container = zB, this.container.hY(new QB.d("app", (() => this), "PUBLIC … [truncated]
+         this._isDeleted = !1, this._options = Object.assign({}, BB), this._config = Object.assign({}, IB), this._name = IB.name, this._automaticDataCollectionEnabled = IB.automaticDataCollectionEnabled, this._container = ZB, this.container.xR(new TB.e("app", (() => this), "PUBLIC … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L716)

```diff
-       if (zB || (zB = (0, dB.B)()), !zB) throw Uj.create("no-options");
+       if (ZB || (ZB = (0, oB.G)()), !ZB) throw cI.create("no-options");
```

#### 27. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L719)

```diff
-         if ((0, dB.x)(zB, NB.options) && (0, dB.x)(nB, NB.config)) return NB;
+         if ((0, oB.B)(ZB, vB.options) && (0, oB.B)(JB, vB.config)) return vB;
```

#### 28. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L724-L725` → after: `L724-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L724-L725) · [Before (L724-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L724-L725)

```diff
-       const uB = new QB.c(IB);
-       for (const QB of jj.values()) uB.hY(QB);
+       const kB = new TB.b(GB);
+       for (const TB of II.values()) kB.xR(TB);
```

#### 29. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L733) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L733)

```diff
-       if (!jB && BB === RB && (0, dB.B)()) return rj();
+       if (!IB && BB === VB && (0, oB.G)()) return zI();
```

#### 30. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L750-L751)

```diff
-       let dB = null !== (nB = OB[BB]) && void 0 !== nB ? nB : BB;
-       zB && (dB += `-${zB}`);
+       let oB = null !== (JB = SB[BB]) && void 0 !== JB ? JB : BB;
+       ZB && (oB += `-${ZB}`);
```

#### 31. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L755-L756` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L755-L756) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L755-L756)

```diff
-         const BB = [`Unable to register library "${dB}" with version "${jB}":`];
-         return IB && BB.push(`library name "${dB}" contains illegal characters (whitespace or "/")`), IB && NB && BB.push("and"), NB && BB.push(`version name "${jB}" contains illegal characters (whitespace or "/")`), void iB.warn(BB.join(" "))
+         const BB = [`Unable to register library "${oB}" with version "${IB}":`];
+         return GB && BB.push(`library name "${oB}" contains illegal characters (whitespace or "/")`), GB && vB && BB.push("and"), vB && BB.push(`version name "${IB}" contains illegal characters (whitespace or "/")`), void OB.warn(BB.join(" "))
```

#### 32. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L758)

```diff
-       nj(new QB.d(`${dB}-version`, (() => ({
+       JI(new TB.e(`${oB}-version`, (() => ({
```

#### 33. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L766)

```diff
-       (0, nB.h)(BB, jB)
+       (0, JB.j)(BB, IB)
```

#### 34. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L770)

```diff
-       (0, nB.f)(BB)
+       (0, JB.h)(BB)
```

#### 35. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L806)

```diff
-         if (zB instanceof dB.g) iB.warn(zB.message);
+         if (ZB instanceof oB.j) OB.warn(ZB.message);
```

#### 36. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L823)

```diff
-         this.Fm = new qj(jB), this._heartbeatsCachePromise = this.Fm.read().then((BB => (this._heartbeatsCache = BB, BB)))
+         this.Wg = new YI(IB), this._heartbeatsCachePromise = this.Wg.read().then((BB => (this._heartbeatsCache = BB, BB)))
```

#### 37. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L834` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L834) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L834)

```diff
-         })), this.Fm.overwrite(this._heartbeatsCache)
+         })), this.Wg.overwrite(this._heartbeatsCache)
```

#### 38. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L867)

```diff
-           QB = (0, dB.p)(JSON.stringify({
+           TB = (0, oB.s)(JSON.stringify({
```

#### 39. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L871)

```diff
-         return this._heartbeatsCache.lastSentHeartbeatDate = BB, zB.length > 0 ? (this._heartbeatsCache.heartbeats = zB, await this.Fm.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.Fm.overwrite(this._heartbeatsCache)), QB
+         return this._heartbeatsCache.lastSentHeartbeatDate = BB, ZB.length > 0 ? (this._heartbeatsCache.heartbeats = ZB, await this.Wg.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.Wg.overwrite(this._heartbeatsCache)), TB
```

#### 40. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L883)

```diff
-         return !!(0, dB.P)() && (0, dB.db)().then((() => !0)).catch((() => !1))
+         return !!(0, oB.Y)() && (0, oB.hb)().then((() => !0)).catch((() => !1))
```

#### 41. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L892)

```diff
-               if (jB instanceof dB.g) iB.warn(jB.message);
+               if (IB instanceof oB.j) OB.warn(IB.message);
```

#### 42. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L913)

```diff
-             lastSentHeartbeatDate: null !== (jB = BB.lastSentHeartbeatDate) && void 0 !== jB ? jB : zB.lastSentHeartbeatDate,
+             lastSentHeartbeatDate: null !== (IB = BB.lastSentHeartbeatDate) && void 0 !== IB ? IB : ZB.lastSentHeartbeatDate,
```

#### 43. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L923)

```diff
-             lastSentHeartbeatDate: null !== (jB = BB.lastSentHeartbeatDate) && void 0 !== jB ? jB : zB.lastSentHeartbeatDate,
+             lastSentHeartbeatDate: null !== (IB = BB.lastSentHeartbeatDate) && void 0 !== IB ? IB : ZB.lastSentHeartbeatDate,
```

#### 44. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L931)

```diff
-       return (0, dB.p)(JSON.stringify({
+       return (0, oB.s)(JSON.stringify({
```

#### 45. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L937` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L937) · [Before (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L937)

```diff
-     oj = "", nj(new QB.d("platform-logger", (BB => new SB(BB)), "PRIVATE")), nj(new QB.d("heartbeat", (BB => new Ej(BB)), "PRIVATE")), yj(MB, EB, oj), yj(MB, EB, "esm2017"), yj("fire-js", "")
+     pI = "", JI(new TB.e("platform-logger", (BB => new QB(BB)), "PRIVATE")), JI(new TB.e("heartbeat", (BB => new wI(BB)), "PRIVATE")), qI(sB, wB, pI), qI(sB, wB, "esm2017"), qI("fire-js", "")
```

#### 46. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L939` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L939) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L939)

```diff
-   40603: (BB, jB, zB) => {
+   40559: (BB, IB, ZB) => {
```

#### 47. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L941-L942` → after: `L941-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L941-L942) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L941-L942)

```diff
-       c: () => NB,
-       d: () => nB
+       b: () => vB,
+       e: () => JB
```

#### 48. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L944)

```diff
-     var QB = zB(40611);
+     var TB = ZB(40562);
```

#### 49. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L970)

```diff
-           const BB = new QB.b;
+           const BB = new TB.d;
```

#### 50. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1046)

```diff
-         if (this.isInitialized(zB)) throw Error(`${this.name}(${zB}) has already been initialized`);
+         if (this.isInitialized(ZB)) throw Error(`${this.name}(${ZB}) has already been initialized`);
```

#### 51. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1060)

```diff
-           nB = null !== (zB = this.onInitCallbacks.get(QB)) && void 0 !== zB ? zB : new Set;
+           JB = null !== (ZB = this.onInitCallbacks.get(TB)) && void 0 !== ZB ? ZB : new Set;
```

#### 52. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1090` → after: `L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1090) · [Before (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1090)

```diff
-         return this.component ? this.component.multipleInstances ? BB : dB : BB
+         return this.component ? this.component.multipleInstances ? BB : oB : BB
```

#### 53. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1106` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1106) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1106)

```diff
-         this.getProvider(BB.name).isComponentSet() && this.providers.delete(BB.name), this.hY(BB)
+         this.getProvider(BB.name).isComponentSet() && this.providers.delete(BB.name), this.xR(BB)
```

#### 54. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1118)

```diff
-   40616: (BB, jB, zB) => {
+   40568: (BB, IB, ZB) => {
```

#### 55. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1120-L1123` → after: `L1120-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1120-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1120-L1123) · [Before (L1120-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1120-L1123)

```diff
-       b: () => nB,
-       c: () => UB,
-       f: () => aB,
-       h: () => pB
+       d: () => JB,
+       g: () => cB,
+       h: () => nB,
+       j: () => hB
```

#### 56. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1150` → after: `L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1150) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1150)

```diff
-         if (!QB) throw new Error(`Attempted to log a message with an invalid logType (value: ${jB})`);
+         if (!TB) throw new Error(`Attempted to log a message with an invalid logType (value: ${IB})`);
```

#### 57. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1152` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1152) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1152)

```diff
-         console[QB](`[${zB}]  ${BB.name}:`, ...dB)
+         console[TB](`[${ZB}]  ${BB.name}:`, ...oB)
```

#### 58. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/270.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/270.js#L1225)

```diff
-           zB >= (null !== QB && void 0 !== QB ? QB : jB.logLevel) && BB({
+           ZB >= (null !== TB && void 0 !== TB ? TB : IB.logLevel) && BB({
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L1)

```diff
- /*! For license information please see 7zvlu.271.71c09cfb.chunk.js.LICENSE.txt */
+ /*! For license information please see c6gaap.271.2f0572d3.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L5)

```diff
-   40625: (BB, jB, zB) => {
+   40574: (BB, IB, ZB) => {
```

#### 3. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L20-L23` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L20-L23) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L20-L23)

```diff
-     var QB = zB(40601),
-       nB = zB(40616),
-       dB = zB(40611),
-       IB = zB(40603);
+     var TB = ZB(40551),
+       JB = ZB(40568),
+       oB = ZB(40562),
+       GB = ZB(40559);
```

#### 4. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L127)

```diff
-       qB = `w:${EB}`,
+       YB = `w:${wB}`,
```

#### 5. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L138)

```diff
-       DB = new dB.d("installations", "Installations", HB);
+       HB = new oB.h("installations", "Installations", aB);
```

#### 6. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L141)

```diff
-       return BB instanceof dB.g && BB.code.includes("request-failed")
+       return BB instanceof oB.j && BB.code.includes("request-failed")
```

#### 7. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L148)

```diff
-       return `https://firebaseinstallations.googleapis.com/v1/projects/${jB}/installations`
+       return `https://firebaseinstallations.googleapis.com/v1/projects/${IB}/installations`
```

#### 8. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L187)

```diff
-         return `${fB} ${BB}`
+         return `${iB} ${BB}`
```

#### 9. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L211)

```diff
-         return PB.test(jB) ? jB : ""
+         return eB.test(IB) ? IB : ""
```

#### 10. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L424)

```diff
-           return `${YB(BB)}/${zB}/authTokens:generate`
+           return `${jB(BB)}/${ZB}/authTokens:generate`
```

#### 11. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L500)

```diff
-       return jB ? await jB : QB.authToken
+       return IB ? await IB : TB.authToken
```

#### 12. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L555)

```diff
-           heartbeatServiceProvider: (0, QB.z)(jB, "heartbeat"),
+           heartbeatServiceProvider: (0, TB.w)(IB, "heartbeat"),
```

#### 13. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L561)

```diff
-           zB = (0, QB.z)(jB, rj).getImmediate();
+           ZB = (0, TB.w)(IB, zI).getImmediate();
```

#### 14. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L574)

```diff
-     (0, QB.D)(new IB.d(rj, sj, "PUBLIC")), (0, QB.D)(new IB.d("installations-internal", Jj, "PRIVATE")), (0, QB.X)(MB, EB), (0, QB.X)(MB, EB, "esm2017");
+     (0, TB.y)(new GB.e(zI, FI, "PUBLIC")), (0, TB.y)(new GB.e("installations-internal", NI, "PRIVATE")), (0, TB.R)(sB, wB), (0, TB.R)(sB, wB, "esm2017");
```

#### 15. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L577)

```diff
-       kj = new nB.c("@firebase/analytics"),
+       yI = new JB.g("@firebase/analytics"),
```

#### 16. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L592)

```diff
-       Lj = new dB.d("analytics", "Analytics", Gj);
+       WI = new oB.h("analytics", "Analytics", UI);
```

#### 17. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L616)

```diff
-         nB = `${yj}?l=${BB}&id=${jB}`;
+         JB = `${qI}?l=${BB}&id=${IB}`;
```

#### 18. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L724)

```diff
-       }), void 0 !== zB ? zB : 6e4), fj({
+       }), void 0 !== ZB ? ZB : 6e4), iI({
```

#### 19. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L754)

```diff
-         if (UB) return kj.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${UB} provided in the "measurementId" field in the local Firebase config. [${null===aB||void 0===aB?void 0:aB.message}]`), {
+         if (cB) return yI.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cB} provided in the "measurementId" field in the local Firebase config. [${null===nB||void 0===nB?void 0:nB.message}]`), {
```

#### 20. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L787)

```diff
-             if (!(BB instanceof dB.g) || !BB.customData) return !1;
+             if (!(BB instanceof oB.j) || !BB.customData) return !1;
```

#### 21. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L791)

```diff
-           if (IB.deleteThrottleMetadata(uB), UB) return kj.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${UB} provided in the "measurementId" field in the local Firebase config. [${null===jB||void 0===jB?void 0:jB.me … [truncated]
+           if (GB.deleteThrottleMetadata(kB), cB) return yI.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cB} provided in the "measurementId" field in the local Firebase config. [${null===IB||void 0===IB?void 0:IB.me … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L797)

```diff
-         const QB = 503 === Number(null === (NB = null === jB || void 0 === jB ? void 0 : jB.customData) || void 0 === NB ? void 0 : NB.httpStatus) ? (0, dB.s)(nB, IB.intervalMillis, 30) : (0, dB.s)(nB, IB.intervalMillis),
+         const TB = 503 === Number(null === (vB = null === IB || void 0 === IB ? void 0 : IB.customData) || void 0 === vB ? void 0 : vB.httpStatus) ? (0, oB.t)(JB, GB.intervalMillis, 30) : (0, oB.t)(JB, GB.intervalMillis),
```

#### 23. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L802` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L802) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L802)

```diff
-         return IB.setThrottleMetadata(uB, pB), kj.debug(`Calling attemptFetch again in ${QB} millis`), fj(BB, pB, zB, IB)
+         return GB.setThrottleMetadata(kB, hB), yI.debug(`Calling attemptFetch again in ${TB} millis`), iI(BB, hB, ZB, GB)
```

#### 24. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L829)

```diff
-         zB[jB.measurementId] = jB.appId, BB.options.measurementId && jB.measurementId !== BB.options.measurementId && kj.warn(`The measurement ID in the local Firebase config (${BB.options.measurementId}) does not match the measurement ID fetched from the server (${jB.measurement … [truncated]
+         ZB[IB.measurementId] = IB.appId, BB.options.measurementId && IB.measurementId !== BB.options.measurementId && yI.warn(`The measurement ID in the local Firebase config (${BB.options.measurementId}) does not match the measurement ID fetched from the server (${IB.measurement … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L832)

```diff
-         if (!(0, dB.P)()) return kj.warn(Lj.create("indexeddb-unavailable", {
+         if (!(0, oB.Y)()) return yI.warn(WI.create("indexeddb-unavailable", {
```

#### 26. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L836)

```diff
-           await (0, dB.db)()
+           await (0, oB.hb)()
```

#### 27. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L850` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L850)

```diff
-       const sB = null !== (uB = null === NB || void 0 === NB ? void 0 : NB.config) && void 0 !== uB ? uB : {};
+       const FB = null !== (kB = null === vB || void 0 === vB ? void 0 : vB.config) && void 0 !== kB ? kB : {};
```

#### 28. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L876-L877` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L876-L877) · [Before (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L876-L877)

```diff
-         if ((0, dB.K)() && BB.push("This is a browser extension environment."), (0, dB.i)() || BB.push("Cookies are not available."), BB.length > 0) {
-           const jB = BB.map(((BB, jB) => `(${jB+1}) ${BB}`)).join(" "),
+         if ((0, oB.T)() && BB.push("This is a browser extension environment."), (0, oB.n)() || BB.push("Cookies are not available."), BB.length > 0) {
+           const IB = BB.map(((BB, IB) => `(${IB+1}) ${BB}`)).join(" "),
```

#### 29. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L918-L920` → after: `L918-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L918-L920) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L918-L920)

```diff
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.N)();
-       BB = (0, dB.H)(BB);
-       const jB = (0, QB.z)(BB, mj);
+       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.I)();
+       BB = (0, oB.N)(BB);
+       const IB = (0, TB.w)(BB, gI);
```

#### 30. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L926)

```diff
-       const zB = (0, QB.z)(BB, mj);
+       const ZB = (0, TB.w)(BB, gI);
```

#### 31. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L929)

```diff
-         if ((0, dB.x)(jB, zB.getOptions())) return BB;
+         if ((0, oB.B)(IB, ZB.getOptions())) return BB;
```

#### 32. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L937-L939` → after: `L937-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L937-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L937-L939) · [Before (L937-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L937-L939)

```diff
-       if ((0, dB.K)()) return !1;
-       if (!(0, dB.i)()) return !1;
-       if (!(0, dB.P)()) return !1;
+       if ((0, oB.T)()) return !1;
+       if (!(0, oB.n)()) return !1;
+       if (!(0, oB.Y)()) return !1;
```

#### 33. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L941)

```diff
-         return await (0, dB.db)()
+         return await (0, oB.hb)()
```

#### 34. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L948` → after: `L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L948) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L948)

```diff
-       BB = (0, dB.H)(BB), async function(BB, jB, zB, QB) {
+       BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB) {
```

#### 35. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L959)

```diff
-       return BB = (0, dB.H)(BB), async function(BB, jB) {
+       return BB = (0, oB.N)(BB), async function(BB, IB) {
```

#### 36. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L970)

```diff
-       BB = (0, dB.H)(BB), async function(BB, jB, zB, QB) {
+       BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB) {
```

#### 37. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L982` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L982) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L982)

```diff
-       BB = (0, dB.H)(BB), async function(BB, jB, zB, QB) {
+       BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB) {
```

#### 38. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L996)

```diff
-       BB = (0, dB.H)(BB), async function(BB, jB) {
+       BB = (0, oB.N)(BB), async function(BB, IB) {
```

#### 39. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L998)

```diff
-         window[`ga-disable-${zB}`] = !jB
+         window[`ga-disable-${ZB}`] = !IB
```

#### 40. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L1007)

```diff
-       BB = (0, dB.H)(BB), async function(BB, jB, zB, QB, nB) {
+       BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB, JB) {
```

#### 41. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1023` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L1023) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L1023)

```diff
-     (0, QB.D)(new IB.d(mj, ((BB, jB) => {
+     (0, TB.y)(new GB.e(gI, ((BB, IB) => {
```

#### 42. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L1028)

```diff
-     }), "PUBLIC")), (0, QB.D)(new IB.d("analytics-internal", (function(BB) {
+     }), "PUBLIC")), (0, TB.y)(new GB.e("analytics-internal", (function(BB) {
```

#### 43. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L1039` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/271.js#L1039) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/271.js#L1039)

```diff
-     }), "PRIVATE")), (0, QB.X)(nz, dz), (0, QB.X)(nz, dz, "esm2017")
+     }), "PRIVATE")), (0, TB.R)(JZ, oZ), (0, TB.R)(JZ, oZ, "esm2017")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (114 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1)

```diff
- /*! For license information please see 7zvlu.272.8be229ea.chunk.js.LICENSE.txt */
+ /*! For license information please see c6gaap.272.71428ee2.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L5)

```diff
-     40634: (BB, jB, zB) => {
+     40583: (BB, IB, ZB) => {
```

#### 3. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L90-L91)

```diff
-         var QB = zB(40611),
-           nB = zB(40601);
+         var TB = ZB(40562),
+           JB = ZB(40551);
```

#### 4. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L105-L106)

```diff
-         var IB = zB(40616),
-           NB = zB(40603);
+         var GB = ZB(40568),
+           vB = ZB(40559);
```

#### 5. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L257)

```diff
-           yB = new QB.d("auth", "Firebase", {
+           qB = new TB.h("auth", "Firebase", {
```

#### 6. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L365)

```diff
-           GB = new IB.c("@firebase/auth");
+           UB = new GB.g("@firebase/auth");
```

#### 7. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L368)

```diff
-           if (GB.logLevel <= IB.b.ERROR) {
+           if (UB.logLevel <= GB.d.ERROR) {
```

#### 8. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L370)

```diff
-             GB.error(`Auth (${nB.e}): ${BB}`, ...zB)
+             UB.error(`Auth (${JB.f}): ${BB}`, ...ZB)
```

#### 9. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L388)

```diff
-           return new QB.d("auth", "Firebase", nB).create(jB, {
+           return new TB.h("auth", "Firebase", JB).create(IB, {
```

#### 10. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L394)

```diff
-           if (!(jB instanceof zB)) throw zB.name !== jB.constructor.name && gB(BB, "argument-error"), SB(BB, "argument-error", `Type of ${jB.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
+           if (!(IB instanceof ZB)) throw ZB.name !== IB.constructor.name && dB(BB, "argument-error"), QB(BB, "argument-error", `Type of ${IB.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
```

#### 11. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L438)

```diff
-             this.shortDelay = BB, this.longDelay = jB, fB(jB > BB, "Short delay should be less than long delay!"), this.isMobile = (0, QB.T)() || (0, QB.W)()
+             this.shortDelay = BB, this.longDelay = IB, iB(IB > BB, "Short delay should be less than long delay!"), this.isMobile = (0, TB.Z)() || (0, TB.ab)()
```

#### 12. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L441)

```diff
-             return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (HB() || (0, QB.K)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.s … [truncated]
+             return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (aB() || (0, TB.T)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.s … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L450)

```diff
-           return jB ? `${zB}${jB.startsWith("/")?jB.slice(1):jB}` : zB
+           return IB ? `${ZB}${IB.startsWith("/")?IB.slice(1):IB}` : ZB
```

#### 14. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L525)

```diff
-             nB && ("GET" === jB ? IB = nB : dB = {
+             JB && ("GET" === IB ? GB = JB : oB = {
```

#### 15. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L528)

```diff
-             const NB = (0, QB.$)(Object.assign({
+             const vB = (0, TB.db)(Object.assign({
```

#### 16. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L560)

```diff
-             if (dB instanceof QB.g) throw dB;
+             if (oB instanceof TB.j) throw oB;
```

#### 17. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L575-L576)

```diff
-           const nB = `${jB}${zB}?${QB}`;
-           return BB.config.emulator ? YB(BB.config, nB) : `${BB.config.apiScheme}://${nB}`
+           const JB = `${IB}${ZB}?${TB}`;
+           return BB.config.emulator ? jB(BB.config, JB) : `${BB.config.apiScheme}://${JB}`
```

#### 18. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L607)

```diff
-           return (0, QB.H)(BB).getIdToken(jB)
+           return (0, TB.N)(BB).getIdToken(IB)
```

#### 19. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L611)

```diff
-           const zB = (0, QB.H)(BB),
+           const ZB = (0, TB.N)(BB),
```

#### 20. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L636)

```diff
-             const BB = (0, QB.l)(zB);
+             const BB = (0, TB.p)(ZB);
```

#### 21. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L647)

```diff
-             throw zB instanceof QB.g && function(BB) {
+             throw ZB instanceof TB.j && function(BB) {
```

#### 22. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L672` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L672)

```diff
-               const BB = (null !== (jB = this.user.stsTokenManager.expirationTime) && void 0 !== jB ? jB : 0) - Date.now() - 3e5;
+               const BB = (null !== (IB = this.user.stsTokenManager.expirationTime) && void 0 !== IB ? IB : 0) - Date.now() - 3e5;
```

#### 23. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L755)

```diff
-           const jB = (0, QB.H)(BB);
+           const IB = (0, TB.N)(BB);
```

#### 24. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L787)

```diff
-                 const zB = (0, QB.$)({
+                 const ZB = (0, TB.db)({
```

#### 25. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L795` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L795) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L795)

```diff
-                   IB = WB(BB, nB, "/v1/token", `key=${dB}`),
+                   GB = uB(BB, JB, "/v1/token", `key=${oB}`),
```

#### 26. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L928-L935` → after: `L928-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L928-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L928-L935) · [Before (L928-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L928-L935)

```diff
-             const aB = null !== (zB = jB.displayName) && void 0 !== zB ? zB : void 0,
-               pB = null !== (QB = jB.email) && void 0 !== QB ? QB : void 0,
-               rB = null !== (nB = jB.phoneNumber) && void 0 !== nB ? nB : void 0,
-               sB = null !== (dB = jB.photoURL) && void 0 !== dB ? dB : void 0,
-               JB = null !== (IB = jB.tenantId) && void 0 !== IB ? IB : void 0,
-               mB = null !== (NB = jB._redirectEventId) && void 0 !== NB ? NB : void 0,
-               yB = null !== (uB = jB.createdAt) && void 0 !== uB ? uB : void 0,
-               kB = null !== (UB = jB.lastLoginAt) && void 0 !== UB ? UB : void 0,
+             const nB = null !== (ZB = IB.displayName) && void 0 !== ZB ? ZB : void 0,
+               hB = null !== (TB = IB.email) && void 0 !== TB ? TB : void 0,
+               zB = null !== (JB = IB.phoneNumber) && void 0 !== JB ? JB : void 0,
+               FB = null !== (oB = IB.photoURL) && void 0 !== oB ? oB : void 0,
+               NB = null !== (GB = IB.tenantId) && void 0 !== GB ? GB : void 0,
+               gB = null !== (vB = IB._redirectEventId) && void 0 !== vB ? vB : void 0,
+               qB = null !== (kB = IB.createdAt) && void 0 !== kB ? kB : void 0,
+               yB = null !== (cB = IB.lastLoginAt) && void 0 !== cB ? cB : void 0,
```

#### 27. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1006)

```diff
-           return `firebase:${BB}:${jB}:${zB}`
+           return `firebase:${BB}:${IB}:${ZB}`
```

#### 28. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1086)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 29. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1091)

```diff
-           const BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)()).toLowerCase();
+           const BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)()).toLowerCase();
```

#### 30. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1096` → after: `L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1096) · [Before (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1096)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 31. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1101` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1101) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1101)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 32. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1106` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1106) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1106)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 33. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1111)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 34. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1116)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 35. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1121)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 36. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1126)

```diff
-           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
+           let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
```

#### 37. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1134` → after: `L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1134) · [Before (L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1134)

```diff
-               jB = aj((0, QB.J)());
+               IB = nI((0, TB.P)());
```

#### 38. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1137` → after: `L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1137) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1137)

```diff
-               jB = `${aj((0,QB.J)())}-${BB}`;
+               IB = `${nI((0,TB.P)())}-${BB}`;
```

#### 39. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1143` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1143) · [Before (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1143)

```diff
-           return `${jB}/JsCore/${nB.e}/${dB}`
+           return `${IB}/JsCore/${JB.f}/${oB}`
```

#### 40. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1172)

```diff
-                 return null !== (jB = null === (BB = document.getElementsByTagName("head")) || void 0 === BB ? void 0 : BB[0]) && void 0 !== jB ? jB : document
+                 return null !== (IB = null === (BB = document.getElementsByTagName("head")) || void 0 === BB ? void 0 : BB[0]) && void 0 !== IB ? IB : document
```

#### 41. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1213` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1213) · [Before (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1213)

```diff
-                       return null == BB.tenantId ? BB._agentRecaptchaConfig = zB : BB._tenantRecaptchaConfigs[BB.tenantId] = zB, jB(zB.siteKey)
+                       return null == BB.tenantId ? BB._agentRecaptchaConfig = ZB : BB._tenantRecaptchaConfigs[BB.tenantId] = ZB, IB(ZB.siteKey)
```

#### 42. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1363)

```diff
-             const jB = BB ? (0, QB.H)(BB) : null;
+             const IB = BB ? (0, TB.N)(BB) : null;
```

#### 43. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1386` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1386) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1386)

```diff
-             if (null == this.tenantId ? this._agentRecaptchaConfig = jB : this._tenantRecaptchaConfigs[this.tenantId] = jB, jB.emailPasswordEnabled) {
+             if (null == this.tenantId ? this._agentRecaptchaConfig = IB : this._tenantRecaptchaConfigs[this.tenantId] = IB, IB.emailPasswordEnabled) {
```

#### 44. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1397` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1397) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1397)

```diff
-             this._errorFactory = new QB.d("auth", "Firebase", BB())
+             this._errorFactory = new TB.h("auth", "Firebase", BB())
```

#### 45. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1454)

```diff
-             const zB = null !== (jB = null === (BB = this.currentUser) || void 0 === BB ? void 0 : BB.uid) && void 0 !== jB ? jB : null;
+             const ZB = null !== (IB = null === (BB = this.currentUser) || void 0 === BB ? void 0 : BB.uid) && void 0 !== IB ? IB : null;
```

#### 46. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1459)

```diff
-             const nB = "function" === typeof jB ? jB : jB.next.bind(jB),
+             const JB = "function" === typeof IB ? IB : IB.next.bind(IB),
```

#### 47. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1497` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1497) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1497)

```diff
-               if (GB.logLevel <= IB.b.WARN) {
+               if (UB.logLevel <= GB.d.WARN) {
```

#### 48. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1499)

```diff
-                 GB.warn(`Auth (${nB.e}): ${BB}`, ...zB)
+                 UB.warn(`Auth (${JB.f}): ${BB}`, ...ZB)
```

#### 49. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1501` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1501) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1501)

```diff
-             }(`Error while retrieving App Check token: ${jB.error}`), null === jB || void 0 === jB ? void 0 : jB.token
+             }(`Error while retrieving App Check token: ${IB.error}`), null === IB || void 0 === IB ? void 0 : IB.token
```

#### 50. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1506)

```diff
-           return (0, QB.H)(BB)
+           return (0, TB.N)(BB)
```

#### 51. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1510` → after: `L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1510) · [Before (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1510)

```diff
-             this.auth = BB, this.observer = null, this.addObserver = (0, QB.u)((BB => this.observer = BB))
+             this.auth = BB, this.observer = null, this.addObserver = (0, TB.x)((BB => this.observer = BB))
```

#### 52. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1518` → after: `L1518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1518) · [Before (L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1518)

```diff
-           const zB = (0, nB.z)(BB, "auth");
+           const ZB = (0, JB.w)(BB, "auth");
```

#### 53. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1522` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1522) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1522)

```diff
-             if ((0, QB.x)(nB, null !== jB && void 0 !== jB ? jB : {})) return BB;
+             if ((0, TB.B)(JB, null !== IB && void 0 !== IB ? IB : {})) return BB;
```

#### 54. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1561)

```diff
-             uB = null === NB ? "" : `:${NB}`;
+             kB = null === vB ? "" : `:${vB}`;
```

#### 55. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1563)

```diff
-             url: `${dB}//${IB}${uB}/`
+             url: `${oB}//${GB}${kB}/`
```

#### 56. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1764)

```diff
-               this.idToken && (jB.id_token = this.idToken), this.accessToken && (jB.access_token = this.accessToken), this.secret && (jB.oauth_token_secret = this.secret), jB.providerId = this.providerId, this.nonce && !this.pendingToken && (jB.nonce = this.nonce), BB.postBody =  … [truncated]
+               this.idToken && (IB.id_token = this.idToken), this.accessToken && (IB.access_token = this.accessToken), this.secret && (IB.oauth_token_secret = this.secret), IB.providerId = this.providerId, this.nonce && !this.pendingToken && (IB.nonce = this.nonce), BB.postBody =  … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1849-L1851` → after: `L1849-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1849-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1849-L1851) · [Before (L1849-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1849-L1851)

```diff
-             const uB = (0, QB._)((0, QB.y)(BB)),
-               UB = null !== (jB = uB.apiKey) && void 0 !== jB ? jB : null,
-               aB = null !== (zB = uB.oobCode) && void 0 !== zB ? zB : null,
+             const kB = (0, TB.cb)((0, TB.F)(BB)),
+               cB = null !== (IB = kB.apiKey) && void 0 !== IB ? IB : null,
+               nB = null !== (ZB = kB.oobCode) && void 0 !== ZB ? ZB : null,
```

#### 58. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1869-L1870` → after: `L1869-L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1869-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1869-L1870) · [Before (L1869-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1869-L1870)

```diff
-               }(null !== (nB = uB.mode) && void 0 !== nB ? nB : null);
-             iB(UB && aB && pB, "argument-error"), this.apiKey = UB, this.operation = pB, this.code = aB, this.continueUrl = null !== (dB = uB.continueUrl) && void 0 !== dB ? dB : null, this.languageCode = null !== (IB = uB.languageCode) && void 0 !== IB ? IB : null, this.tenantId … [truncated]
+               }(null !== (JB = kB.mode) && void 0 !== JB ? JB : null);
+             OB(cB && nB && hB, "argument-error"), this.apiKey = cB, this.operation = hB, this.code = nB, this.continueUrl = null !== (oB = kB.continueUrl) && void 0 !== oB ? oB : null, this.languageCode = null !== (GB = kB.languageCode) && void 0 !== GB ? GB : null, this.tenantId … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L1874-L1877` → after: `L1874-L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L1874-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L1874-L1877) · [Before (L1874-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L1874-L1877)

```diff
-               const jB = (0, QB._)((0, QB.y)(BB)).link,
-                 zB = jB ? (0, QB._)((0, QB.y)(jB)).deep_link_id : null,
-                 nB = (0, QB._)((0, QB.y)(BB)).deep_link_id;
-               return (nB ? (0, QB._)((0, QB.y)(nB)).link : null) || nB || zB || jB || BB
+               const IB = (0, TB.cb)((0, TB.F)(BB)).link,
+                 ZB = IB ? (0, TB.cb)((0, TB.F)(IB)).deep_link_id : null,
+                 JB = (0, TB.cb)((0, TB.F)(BB)).deep_link_id;
+               return (JB ? (0, TB.cb)((0, TB.F)(JB)).link : null) || JB || ZB || IB || BB
```

#### 60. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L2231` → after: `L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR2231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/272.js#L2231) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/272.js#L2231)

```diff
-         class sz extends QB.g {
+         class FZ extends TB.j {
```
