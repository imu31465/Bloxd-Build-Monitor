# Changed — Bundle Modifications Report (Part 093 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `93 / 154` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 092](part-092.md) · [Part 094 →](part-094.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4853 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 1008. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7741` → after: `L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7878) · [Before (L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7741)

```diff
-         this.pSystem = rr, this.maxLifetimeSecs = Sr, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.vU = !1, rr.manualEmitCount = 0
+         this.pSystem = dd, this.maxLifetimeSecs = Od, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.Aq = !1, dd.manualEmitCount = 0
```

#### 1009. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7744` → after: `L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7881) · [Before (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7744)

```diff
-         this.vU || (this.pSystem.manualEmitCount = rr, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.Aq || (this.pSystem.manualEmitCount = dd, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 1010. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7747` → after: `L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7884) · [Before (L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7747)

```diff
-         this.vU = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.Aq = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 1011. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7759` → after: `L7896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7896) · [Before (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7759)

```diff
-       (0, mr.v)(rr, Sr.pSystem), (0, mr.s)(Sr.pSystem, Qr), Sr.emitAmount(Zr)
+       (0, od.t)(dd, Od.pSystem), (0, od.s)(Od.pSystem, md), Od.emitAmount(Wd)
```

#### 1012. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7761` → after: `L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7898) · [Before (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7761)

```diff
-     const Rr = (0, Wr.k)("Fat Brown Mushroom");
+     const rd = (0, Fd.j)("Fat Brown Mushroom");
```

#### 1013. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7765` → after: `L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7902) · [Before (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7765)

```diff
-       Cr(rr, Sr === Rr ? jr.f.BounceBrownMushroom : jr.f.BounceRedMushroom, Qr)
+       nd(dd, Od === rd ? Xd.d.BounceBrownMushroom : Xd.d.BounceRedMushroom, md)
```

#### 1014. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7769` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7906) · [Before (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7769)

```diff
-       const Zr = Sr === jr.f.Bunnyhop || Sr === jr.f.JumpPad;
+       const Wd = Od === Xd.d.Bunnyhop || Od === Xd.d.JumpPad;
```

#### 1015. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7771-L7772` → after: `L7908-L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7908-L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7908-L7909) · [Before (L7771-L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7771-L7772)

```diff
-       Sr === jr.f.Bunnyhop ? (Wr = [213, 237, 255], Ir = [109, 170, 238]) : Sr === jr.f.BounceRedMushroom ? (Wr = [196, 63, 63], Ir = [148, 53, 53]) : Sr === jr.f.BounceBrownMushroom ? (Wr = [186, 132, 91], Ir = [153, 107, 72]) : Sr === jr.f.BunnyhopBounce ? (Wr = [217, 170, 2],  … [truncated]
-       const fr = rr.YB.JY(rr.fC);
+       Od === Xd.d.Bunnyhop ? (Fd = [213, 237, 255], Kd = [109, 170, 238]) : Od === Xd.d.BounceRedMushroom ? (Fd = [196, 63, 63], Kd = [148, 53, 53]) : Od === Xd.d.BounceBrownMushroom ? (Fd = [186, 132, 91], Kd = [153, 107, 72]) : Od === Xd.d.BunnyhopBounce ? (Fd = [217, 170, 2],  … [truncated]
+       const hd = dd.qE.hY(dd.YV);
```

#### 1016. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7775` → after: `L7912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7912) · [Before (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7775)

```diff
-         const rr = 1 === Qr[1] ? ar.i.Uz - .4 : 0;
+         const dd = 1 === md[1] ? Rd.i.yb - .4 : 0;
```

#### 1017. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7783` → after: `L7920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7920) · [Before (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7783)

```diff
-       const xr = Zr ? lr : Xr;
+       const td = Wd ? Sd : sd;
```

#### 1018. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7804` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7941) · [Before (L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7804)

```diff
-         this.gm = rr, this.cfg = Qr, this.pool = [], this.currentIndex = 0;
+         this.zo = dd, this.cfg = md, this.pool = [], this.currentIndex = 0;
```

#### 1019. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7815` → after: `L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7952) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7815)

```diff
-         const Ur = this.gm.camera.JY();
+         const qd = this.zo.camera.hY();
```

#### 1020. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7817` → after: `L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7954) · [Before (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7817)

```diff
-         const tr = null !== (Qr = Sr.hideDist) && void 0 !== Qr ? Qr : this.cfg.hideDist;
+         const Hd = null !== (md = Od.hideDist) && void 0 !== md ? md : this.cfg.hideDist;
```

#### 1021. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7822` → after: `L7959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7959) · [Before (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7822)

```diff
-         (0, mr.q)(er, Yr, nr), er.minEmitPower = null !== (Zr = Sr.minEmitPower) && void 0 !== Zr ? Zr : er.minEmitPower, er.maxEmitPower = null !== (Wr = Sr.maxEmitPower) && void 0 !== Wr ? Wr : er.maxEmitPower, er.minSize = null !== (ar = Sr.minSize) && void 0 !== ar ? ar : er. … [truncated]
+         (0, od.o)(Yd, Td, pd), Yd.minEmitPower = null !== (Wd = Od.minEmitPower) && void 0 !== Wd ? Wd : Yd.minEmitPower, Yd.maxEmitPower = null !== (Fd = Od.maxEmitPower) && void 0 !== Fd ? Fd : Yd.maxEmitPower, Yd.minSize = null !== (Rd = Od.minSize) && void 0 !== Rd ? Rd : Yd. … [truncated]
```

#### 1022. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7826` → after: `L7963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7963) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7826)

```diff
-           Qr = this.gm.Ox.QG(`particlePool_${rr}`, 50),
+           md = this.zo.gt.wG(`particlePool_${dd}`, 50),
```

#### 1023. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7828` → after: `L7965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7965) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7828)

```diff
-         Qr.texture = (0, Nr.p)(this.gm.Ox.eC(), Zr), Qr.blendMode = Sr.blendMode, Qr.minLifeTime = Sr.minLifeTime, Qr.maxLifeTime = Sr.maxLifeTime, Qr.minEmitPower = Sr.minEmitPower, Qr.maxEmitPower = Sr.maxEmitPower, Qr.minSize = Sr.minSize, Qr.maxSize = Sr.maxSize, Qr.gravity = … [truncated]
+         md.texture = (0, Nd.m)(this.zo.gt.zV(), Wd), md.blendMode = Od.blendMode, md.minLifeTime = Od.minLifeTime, md.maxLifeTime = Od.maxLifeTime, md.minEmitPower = Od.minEmitPower, md.maxEmitPower = Od.maxEmitPower, md.minSize = Od.minSize, md.maxSize = Od.maxSize, md.gravity = … [truncated]
```

#### 1024. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7830` → after: `L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7967) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7830)

```diff
-         this.applyColorGradients(Qr, Sr.colorGradients), (0, mr.v)(this.gm, Qr), Qr.createBoxEmitter(new Ur.kU(Math.min(Sr.dir1[0], Sr.dir2[0]), Math.min(Sr.dir1[1], Sr.dir2[1]), Math.min(Sr.dir1[2], Sr.dir2[2])), new Ur.kU(Math.max(Sr.dir1[0], Sr.dir2[0]), Math.max(Sr.dir1[1], S … [truncated]
+         this.applyColorGradients(md, Od.colorGradients), (0, od.t)(this.zo, md), md.createBoxEmitter(new qd.Cq(Math.min(Od.dir1[0], Od.dir2[0]), Math.min(Od.dir1[1], Od.dir2[1]), Math.min(Od.dir1[2], Od.dir2[2])), new qd.Cq(Math.max(Od.dir1[0], Od.dir2[0]), Math.max(Od.dir1[1], O … [truncated]
```

#### 1025. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7840` → after: `L7977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7977) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7840)

```diff
-             const Sr = (0, mr.m)(ar.color[0], ar.color[1], ar.color[2], 1);
+             const Od = (0, od.k)(Rd.color[0], Rd.color[1], Rd.color[2], 1);
```

#### 1026. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7844-L7845` → after: `L7981-L7982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7981-L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7981-L7982) · [Before (L7844-L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7844-L7845)

```diff
-             const Sr = (0, mr.m)(ar.minColor[0], ar.minColor[1], ar.minColor[2], null !== (Zr = ar.minColor[3]) && void 0 !== Zr ? Zr : 1),
-               Qr = (0, mr.m)(ar.maxColor[0], ar.maxColor[1], ar.maxColor[2], null !== (Wr = ar.maxColor[3]) && void 0 !== Wr ? Wr : 1);
+             const Od = (0, od.k)(Rd.minColor[0], Rd.minColor[1], Rd.minColor[2], null !== (Wd = Rd.minColor[3]) && void 0 !== Wd ? Wd : 1),
+               md = (0, od.k)(Rd.maxColor[0], Rd.maxColor[1], Rd.maxColor[2], null !== (Fd = Rd.maxColor[3]) && void 0 !== Fd ? Fd : 1);
```

#### 1027. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7852` → after: `L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7989) · [Before (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7852)

```diff
-       if (!(0, tr.L)(Sr.hideDist)) {
+       if (!(0, Hd.O)(Od.hideDist)) {
```

#### 1028. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7854-L7855` → after: `L7991-L7992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7991-L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7991-L7992) · [Before (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7854-L7855)

```diff
-         for (let rr = 0; rr < 3; rr++) Qr.push((0, Ir.t)(Sr.pos1[rr], Sr.pos2[rr], .5));
-         const Zr = rr.YB.JY(rr.fC),
+         for (let dd = 0; dd < 3; dd++) md.push((0, Kd.w)(Od.pos1[dd], Od.pos2[dd], .5));
+         const Wd = dd.qE.hY(dd.YV),
```

#### 1029. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7862` → after: `L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L7999) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7862)

```diff
-   39294: (rr, Sr, Qr) => {
+   39330: (dd, Od, md) => {
```

#### 1030. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7866-L7878` → after: `L8003-L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8003-L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8003-L8015) · [Before (L7866-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7866-L7878)

```diff
-     var Zr = Qr(38736),
-       Wr = Qr(39319),
-       ar = Qr(39345),
-       jr = Qr(38824),
-       Ir = Qr(39332),
-       fr = Qr(39348),
-       Er = Qr(4354),
-       pr = Qr(39307),
-       xr = Qr(39298),
-       mr = Qr(38809),
-       Nr = Qr(38723),
-       Ur = Qr(38762),
-       tr = Qr(2383);
+     var Wd = md(38779),
+       Fd = md(39363),
+       Rd = md(39391),
+       Xd = md(38869),
+       Kd = md(39371),
+       hd = md(39395),
+       vd = md(4365),
+       Qd = md(39347),
+       td = md(39338),
+       od = md(38852),
+       Nd = md(38766),
+       qd = md(38799),
+       Hd = md(2402);
```

#### 1031. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7889-L7890` → after: `L8026-L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8026-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8026-L8027) · [Before (L7889-L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7889-L7890)

```diff
-           ambientLevel: xr.e.ambient,
-           diffuseLevel: xr.e.diffuse
+           ambientLevel: td.c.ambient,
+           diffuseLevel: td.c.diffuse
```

#### 1032. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7911` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8048) · [Before (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7911)

```diff
-           alpha: pr.l
+           alpha: Qd.j
```

#### 1033. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7928-L7930` → after: `L8065-L8067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8065-L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8065-L8067) · [Before (L7928-L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7928-L7930)

```diff
-         } = (0, Nr.b)({
-           name: `${yr}${xr}`,
-           Dt: Sr,
+         } = (0, Nd.d)({
+           name: `${wd}${td}`,
+           MH: Od,
```

#### 1034. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7933-L7935` → after: `L8070-L8072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8070-L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8070-L8072) · [Before (L7933-L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7933-L7935)

```diff
-         hr && (0, Zr.F)(Br);
-         const vr = Er.d.getBlockAtlasArr().map((rr => (0, Wr.e)(rr, Sr, Qr)));
-         if ((0, Nr.e)(Tr, {
+         yd && (0, Wd.M)(Ed);
+         const Ud = vd.c.getBlockAtlasArr().map((dd => (0, Fd.h)(dd, Od, md)));
+         if ((0, Nd.f)(Jd, {
```

#### 1035. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7937` → after: `L8074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8074) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7937)

```diff
-               transparencyMode: Zr.s.alphaTest,
+               transparencyMode: Wd.r.alphaTest,
```

#### 1036. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7951` → after: `L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8088) · [Before (L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7951)

```diff
-               transparencyMode: Zr.s.alphaBlend
+               transparencyMode: Wd.r.alphaBlend
```

#### 1037. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7953` → after: `L8090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8090) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7953)

```diff
-           }), zr && (0, jr.d)(Br, (0, tr.e)().Ox), Yr && (0, mr.e)(Br, !0), vr.length > 0) {
+           }), bd && (0, Xd.e)(Ed, (0, Hd.c)().gt), Td && (0, od.c)(Ed, !0), Ud.length > 0) {
```

#### 1038. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7955-L7957` → after: `L8092-L8094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8092-L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8092-L8094) · [Before (L7955-L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7955-L7957)

```diff
-             urls: Er.d.getBlockAtlasArr(),
-             pixels: Er.d.getBlockAtlasPixels(),
-             layerWidth: Er.d.getBlockAtlasWidth()
+             urls: vd.c.getBlockAtlasArr(),
+             pixels: vd.c.getBlockAtlasPixels(),
+             layerWidth: vd.c.getBlockAtlasWidth()
```

#### 1039. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7959` → after: `L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8096) · [Before (L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7959)

```diff
-           (0, Zr.t)(Br, Ir.j, (0, ar.g)(rr, vr, void 0, this.Ut(), !1))
+           (0, Wd.t)(Ed, Kd.h, (0, Rd.h)(dd, Ud, void 0, this.pH(), !1))
```

#### 1040. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7961` → after: `L8098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8098) · [Before (L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7961)

```diff
-         return (0, Ur.m)(Tr), rr[yr] = Tr, Tr
+         return (0, qd.o)(Jd), dd[wd] = Jd, Jd
```

#### 1041. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7970` → after: `L8107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8107) · [Before (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7970)

```diff
-     (0, fr.p)(hr);
+     (0, hd.i)(yd);
```

#### 1042. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7973` → after: `L8110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8110) · [Before (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7973)

```diff
-   39588: (rr, Sr, Qr) => {
+   39629: (dd, Od, md) => {
```

#### 1043. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7976` → after: `L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8113) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7976)

```diff
-       e: () => kr
+       d: () => zd
```

#### 1044. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7978` → after: `L8115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8115) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7978)

```diff
-     var Zr = Qr(39087);
+     var Wd = md(39123);
```

#### 1045. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7999` → after: `L8136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8136) · [Before (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L7999)

```diff
-     var jr = Qr(38616);
+     var Xd = md(38671);
```

#### 1046. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8027-L8028` → after: `L8164-L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8164-L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8164-L8165) · [Before (L8027-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8027-L8028)

```diff
-             Zr = Number.isNaN(Zr) ? rr : Zr, Sr += this.childWeights[Wr], Qr += this.childWeights[Wr] * rr
-           } return Sr > 0 ? Qr / Sr : Number.isNaN(Zr) ? 0 : Zr
+             Wd = Number.isNaN(Wd) ? dd : Wd, Od += this.childWeights[Fd], md += this.childWeights[Fd] * dd
+           } return Od > 0 ? md / Od : Number.isNaN(Wd) ? 0 : Wd
```

#### 1047. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8040` → after: `L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8177) · [Before (L8040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8040)

```diff
-         Zr = Qr > 0 ? Zr / Qr : 1 / Wr;
+         Wd = md > 0 ? Wd / md : 1 / Fd;
```

#### 1048. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8055` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8192) · [Before (L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8055)

```diff
-           const rr = this.gaitPhase + this.restGap() * (0, jr.q)(8 * Qr, Sr);
+           const dd = this.gaitPhase + this.restGap() * (0, Xd.n)(8 * md, Od);
```

#### 1049. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8072` → after: `L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8209) · [Before (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8072)

```diff
-         jr !== (null !== (Zr = null === (Wr = this.current) || void 0 === Wr ? void 0 : Wr.state) && void 0 !== Zr ? Zr : null) && (this.current = null === jr ? null : this.enter(jr, ar)), this.updateWeights(Sr, Qr)
+         Xd !== (null !== (Wd = null === (Fd = this.current) || void 0 === Fd ? void 0 : Fd.state) && void 0 !== Wd ? Wd : null) && (this.current = null === Xd ? null : this.enter(Xd, Rd)), this.updateWeights(Od, md)
```

#### 1050. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8087` → after: `L8224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8224) · [Before (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8087)

```diff
-           const rr = this.instances.reduce(((rr, Sr) => Sr !== Zr && (rr === Zr || Sr.weight < rr.weight) ? Sr : rr));
+           const dd = this.instances.reduce(((dd, Od) => Od !== Wd && (dd === Wd || Od.weight < dd.weight) ? Od : dd));
```

#### 1051. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8102` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8239) · [Before (L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8102)

```diff
-         for (const xr of this.instances) xr.weight = xr === Zr ? jr : xr.weight * Er, (xr === Zr || xr.weight > Ir) && (this.instances[pr++] = xr);
+         for (const td of this.instances) td.weight = td === Wd ? Xd : td.weight * vd, (td === Wd || td.weight > Kd) && (this.instances[Qd++] = td);
```

#### 1052. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8109` → after: `L8246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8246) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8109)

```diff
-         this.inputs = new Float64Array(Zr.k.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(Wd.i.Count), this.states = [], this.sleptSeconds = 0
```

#### 1053. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8112` → after: `L8249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8249) · [Before (L8112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8112)

```diff
-         for (let Qr = 0; Qr < Zr.k.Count; Qr++) this.inputs[Qr] = rr[Qr];
+         for (let md = 0; md < Wd.i.Count; md++) this.inputs[md] = dd[md];
```

#### 1054. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8157-L8158` → after: `L8294-L8295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8294-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8294-L8295) · [Before (L8157-L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8157-L8158)

```diff
-     var hr = Qr(39040),
-       zr = Qr(39090);
+     var yd = md(39085),
+       bd = md(39127);
```

#### 1055. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8176` → after: `L8313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8313) · [Before (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8176)

```diff
-         return null !== (Sr = this.indexByLowerName.get(rr.toLowerCase())) && void 0 !== Sr ? Sr : -1
+         return null !== (Od = this.indexByLowerName.get(dd.toLowerCase())) && void 0 !== Od ? Od : -1
```

#### 1056. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8179-L8180` → after: `L8316-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8316-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8316-L8317) · [Before (L8179-L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8179-L8180)

```diff
-     var er = Qr(39055),
-       Kr = Qr(39064);
+     var Yd = md(39095),
+       gd = md(39105);
```

#### 1057. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8193` → after: `L8330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8330) · [Before (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8193)

```diff
-         return rr === Kr.j.Once && (Qr > 0 ? this.elapsed >= Zr : this.elapsed > Zr)
+         return dd === gd.h.Once && (md > 0 ? this.elapsed >= Wd : this.elapsed > Wd)
```

#### 1058. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8224` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8361) · [Before (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8224)

```diff
-           Qr.elapsed < Sr.startDelaySeconds || (Qr.weight = Qr.fadeInSeconds > 0 ? Math.min(1, Qr.weight + rr / Qr.fadeInSeconds) : 1, Sr.loop === Kr.j.Once && Qr.weight >= 1 && Qr.elapsed >= Sr.startDelaySeconds + Sr.lengthSeconds - Qr.fadeOutSeconds * Qr.speed && (Qr.stopping = … [truncated]
+           md.elapsed < Od.startDelaySeconds || (md.weight = md.fadeInSeconds > 0 ? Math.min(1, md.weight + dd / md.fadeInSeconds) : 1, Od.loop === gd.h.Once && md.weight >= 1 && md.elapsed >= Od.startDelaySeconds + Od.lengthSeconds - md.fadeOutSeconds * md.speed && (md.stopping = … [truncated]
```

#### 1059. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8236-L8239` → after: `L8373-L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8373-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8373-L8376) · [Before (L8236-L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8236-L8239)

```diff
-     var Tr = Qr(39072),
-       vr = Qr(39099),
-       Or = Qr(38643),
-       Lr = Qr(39069);
+     var Jd = md(39113),
+       Ud = md(39129),
+       xd = md(38685),
+       Bd = md(39111);
```

#### 1060. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8246` → after: `L8383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8383) · [Before (L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8246)

```diff
-         this.pose = new Or.f(Qr), this.accumulator = new Or.e(Qr), this.inputs = new Float64Array(Zr.k.Count + Sr.filters.length), this.layers = Sr.layers.map(((Sr, Qr) => new Er(Sr, rr.layerMasks[Qr]))), this.runtimes = Sr.pools.map((rr => ({
+         this.pose = new xd.f(md), this.accumulator = new xd.e(md), this.inputs = new Float64Array(Wd.i.Count + Od.filters.length), this.layers = Od.layers.map(((Od, md) => new vd(Od, dd.layerMasks[md]))), this.runtimes = Od.pools.map((dd => ({
```

#### 1061. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8251` → after: `L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8388) · [Before (L8251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8251)

```diff
-           return null !== (Qr = rr.variables.slots.get(Sr.name)) && void 0 !== Qr ? Qr : -1
+           return null !== (md = dd.variables.slots.get(Od.name)) && void 0 !== md ? md : -1
```

#### 1062. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8267` → after: `L8404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8404) · [Before (L8267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8267)

```diff
-         this.inputs[rr] = Number.isFinite(Sr) ? Sr : 0
+         this.inputs[dd] = Number.isFinite(Od) ? Od : 0
```

#### 1063. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8294` → after: `L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8431) · [Before (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8294)

```diff
-           Ir = (0, Tr.l)(this.rigged.binding.pools, rr);
+           Kd = (0, Jd.j)(this.rigged.binding.pools, dd);
```

#### 1064. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8303` → after: `L8440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8440) · [Before (L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8303)

```diff
-         const Sr = (0, Tr.l)(this.rigged.binding.pools, rr);
+         const Od = (0, Jd.j)(this.rigged.binding.pools, dd);
```

#### 1065. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8307` → after: `L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8444) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8307)

```diff
-         const Sr = (0, Tr.l)(this.rigged.binding.pools, rr);
+         const Od = (0, Jd.j)(this.rigged.binding.pools, dd);
```

#### 1066. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8318` → after: `L8455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8455) · [Before (L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8318)

```diff
-         const Qr = Math.max(0, Number.isFinite(rr) ? rr : 0);
+         const md = Math.max(0, Number.isFinite(dd) ? dd : 0);
```

#### 1067. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8325` → after: `L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8462) · [Before (L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8325)

```diff
-         const ar = this.travelBacklog * (0, jr.q)(20, Qr);
+         const Rd = this.travelBacklog * (0, Xd.n)(20, md);
```

#### 1068. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8333` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8470) · [Before (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8333)

```diff
-               for (let Qr = 0; Qr < rr.length; Qr++) Sr[Zr.k.Count + Qr] = (0, Zr.n)(rr[Qr], Sr)
+               for (let md = 0; md < dd.length; md++) Od[Wd.i.Count + md] = (0, Wd.k)(dd[md], Od)
```

#### 1069. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8351-L8352` → after: `L8488-L8489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8488-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8488-L8489) · [Before (L8351-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8351-L8352)

```diff
-               const Wr = (0, Zr.n)(rr[Qr], Sr);
-               if (Math.abs(Sr[Zr.k.Count + Qr] - Wr) > 1e-6 * Math.max(1, Math.abs(Wr))) return !1
+               const Fd = (0, Wd.k)(dd[md], Od);
+               if (Math.abs(Od[Wd.i.Count + md] - Fd) > 1e-6 * Math.max(1, Math.abs(Fd))) return !1
```

#### 1070. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8365-L8366` → after: `L8502-L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8502-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8502-L8503) · [Before (L8365-L8366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8365-L8366)

```diff
-             Ir = (0, Zr.n)(ar, this.inputs),
-             fr = Zr.k.Count + Wr,
+             Kd = (0, Wd.k)(Rd, this.inputs),
+             hd = Wd.i.Count + Fd,
```

#### 1071. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8369` → after: `L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8506) · [Before (L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8369)

```diff
-           this.inputs[fr] = Sr ? Ir : Er + (Ir - Er) * (0, jr.q)(pr, rr)
+           this.inputs[hd] = Od ? Kd : vd + (Kd - vd) * (0, Xd.n)(Qd, dd)
```

#### 1072. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8377` → after: `L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8514) · [Before (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8377)

```diff
-           (0, Zr.p)(Wr, this.inputs, this.ageSeconds, rr, this.travelled);
+           (0, Wd.n)(Fd, this.inputs, this.ageSeconds, dd, this.travelled);
```

#### 1073. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8419` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8556) · [Before (L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8419)

```diff
-           Zr.strideBlocks > 0 ? Nr = rr.gaitPhase * ar.lengthSeconds : (rr.elapsed[Er] = mr ? Pr(ar, rr.elapsed[Er], Qr * fr, pr) : rr.elapsed[Er] + Qr * fr, Nr = (0, vr.e)(ar, rr.elapsed[Er])), rr.childTimes[Er] = Nr, mr && !Number.isNaN(Nr) && this.sampleClip(ar, pr, Nr, xr, Sr … [truncated]
+           Wd.strideBlocks > 0 ? Nd = dd.gaitPhase * Rd.lengthSeconds : (dd.elapsed[vd] = od ? ud(Rd, dd.elapsed[vd], md * hd, Qd) : dd.elapsed[vd] + md * hd, Nd = (0, Ud.d)(Rd, dd.elapsed[vd])), dd.childTimes[vd] = Nd, od && !Number.isNaN(Nd) && this.sampleClip(Rd, Qd, Nd, td, Od … [truncated]
```

#### 1074. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8431` → after: `L8568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8568) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8431)

```diff
-               Wr = (0, vr.e)(Zr.clip, Zr.elapsed);
+               Fd = (0, Ud.d)(Wd.clip, Wd.elapsed);
```

#### 1075. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8447` → after: `L8584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8584) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8447)

```diff
-           fr = rr.loop === Kr.j.Loop,
+           hd = dd.loop === gd.h.Loop,
```

#### 1076. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8456` → after: `L8593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8593) · [Before (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8456)

```diff
-             (0, vr.g)(xr.rotation, Qr, fr, Sr, pr);
+             (0, Ud.f)(td.rotation, md, hd, Od, Qd);
```

#### 1077. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8460` → after: `L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8597) · [Before (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8460)

```diff
-             (0, vr.g)(xr.position, Qr, fr, Sr, pr);
+             (0, Ud.f)(td.position, md, hd, Od, Qd);
```

#### 1078. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8464` → after: `L8601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8601) · [Before (L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8464)

```diff
-             (0, vr.g)(xr.scale, Qr, fr, Sr, pr);
+             (0, Ud.f)(td.scale, md, hd, Od, Qd);
```

#### 1079. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8475` → after: `L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8612) · [Before (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8475)

```diff
-         return Qr < 0 ? rr.constant : Qr < Zr.k.Count ? Sr[Qr] : this.inputs[Qr]
+         return md < 0 ? dd.constant : md < Wd.i.Count ? Od[md] : this.inputs[md]
```

#### 1080. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8489` → after: `L8626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8626) · [Before (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8489)

```diff
-           inputs: [...[...Zr.g].map((rr => {
+           inputs: [...[...Wd.e].map((dd => {
```

#### 1081. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8498-L8499` → after: `L8635-L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8635-L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8635-L8636) · [Before (L8498-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8498-L8499)

```diff
-             raw: (0, Zr.n)(rr, this.inputs),
-             value: this.inputs[Zr.k.Count + Sr]
+             raw: (0, Wd.k)(dd, this.inputs),
+             value: this.inputs[Wd.i.Count + Od]
```

#### 1082. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8538` → after: `L8675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8675) · [Before (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8538)

```diff
-       return Number.isNaN(rr) ? Zr : Math.min(Qr, Math.max(Sr, rr))
+       return Number.isNaN(dd) ? Wd : Math.min(md, Math.max(Od, dd))
```

#### 1083. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8540-L8541` → after: `L8677-L8678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8677-L8678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8677-L8678) · [Before (L8540-L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8540-L8541)

```diff
-     var Rr = Qr(39047),
-       gr = Qr(4476);
+     var rd = md(39088),
+       Gd = md(4490);
```

#### 1084. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8547` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8684) · [Before (L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8547)

```diff
-         (Qr.severity === Kr.d.Error ? console.error : console.warn)(`Animation for ${rr}: ${Qr.source}: ${Qr.message}`)
+         (md.severity === gd.b.Error ? console.error : console.warn)(`Animation for ${dd}: ${md.source}: ${md.message}`)
```

#### 1085. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8552` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8689) · [Before (L8552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8552)

```diff
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.HV = 0
+           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.JI = 0
```

#### 1086. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8555` → after: `L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8692) · [Before (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8555)

```diff
-           return this.HV
+           return this.JI
```

#### 1087. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8558` → after: `L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8695) · [Before (L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8558)

```diff
-           this.HV++
+           this.JI++
```

#### 1088. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8591` → after: `L8728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8728) · [Before (L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8591)

```diff
-             for (const rr of null === Wr ? [] : (0, zr.f)(Wr)) Zr.add(rr);
+             for (const dd of null === Fd ? [] : (0, bd.g)(Fd)) Wd.add(dd);
```

#### 1089. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8607` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8744) · [Before (L8607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8607)

```diff
-               Zr = Array.from(Wr, (rr => null !== rr && void 0 !== rr ? rr : "")), Ar.set(Qr, Zr)
+               Wd = Array.from(Fd, (dd => null !== dd && void 0 !== dd ? dd : "")), cd.set(md, Wd)
```

#### 1090. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8626` → after: `L8763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8763) · [Before (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8626)

```diff
-             Gr(ar ? `${rr} (texture pack)` : rr, Wr.diagnostics), ar && !Wr.animatesAnyBone && console.error(`Animation for ${rr} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), Zr.set(Qr, Wr)
+             Pd(Rd ? `${dd} (texture pack)` : dd, Fd.diagnostics), Rd && !Fd.animatesAnyBone && console.error(`Animation for ${dd} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), Wd.set(md, Fd)
```

#### 1091. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8635-L8637` → after: `L8772-L8774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8772-L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8772-L8774) · [Before (L8635-L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8635-L8637)

```diff
-           const Sr = (0, hr.e)(),
-             Qr = Rr.f.has(rr) || this.drawnWithPlayerRig(rr),
-             Zr = (0, Rr.p)(Sr, Qr ? Mr : rr, []);
+           const Od = (0, yd.d)(),
+             md = rd.g.has(dd) || this.drawnWithPlayerRig(dd),
+             Wd = (0, rd.l)(Od, md ? Ld : dd, []);
```

#### 1092. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8641-L8642` → after: `L8778-L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8778-L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8778-L8779) · [Before (L8641-L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8641-L8642)

```diff
-             const Qr = (0, Rr.q)(this.getPack(), Sr, rr);
-             Gr(`${rr} (texture pack)`, Qr.diagnostics), Wr = Qr.binding
+             const md = (0, rd.o)(this.getPack(), Od, dd);
+             Pd(`${dd} (texture pack)`, md.diagnostics), Fd = md.binding
```

#### 1093. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8650` → after: `L8787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8787) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8650)

```diff
-           null === this.pack && (this.pack = (0, Rr.s)(null !== null ? null : (0, gr.e)(), "texturePack"), Gr("the texture pack", this.pack.diagnostics));
+           null === this.pack && (this.pack = (0, rd.s)(null !== null ? null : (0, Gd.c)(), "texturePack"), Pd("the texture pack", this.pack.diagnostics));
```

#### 1094. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8656` → after: `L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8793) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8656)

```diff
-   39038: (rr, Sr, Qr) => {
+   39080: (dd, Od, md) => {
```

#### 1095. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8663` → after: `L8799-L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8799-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8799-L8800) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8663)

```diff
-       o: () => mr
+       m: () => Nd,
+       p: () => od
```

#### 1096. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8665-L8669` → after: `L8802-L8806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8802-L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8802-L8806) · [Before (L8665-L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8665-L8669)

```diff
-     var Zr = Qr(39040),
-       Wr = Qr(39099),
-       ar = Qr(39064),
-       jr = Qr(38616),
-       Ir = Qr(39069);
+     var Wd = md(39085),
+       Fd = md(39129),
+       Rd = md(39105),
+       Xd = md(38671),
+       Kd = md(39111);
```

#### 1097. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8678` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8815) · [Before (L8678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8678)

```diff
-           null !== Sr ? (Zr.push(jr), Wr.push(Sr)) : console.warn(`${rr.id} animates ${jr.name}, which the model has no node for`)
+           null !== Od ? (Wd.push(Xd), Fd.push(Od)) : console.warn(`${dd.id} animates ${Xd.name}, which the model has no node for`)
```

#### 1098. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8686` → after: `L8823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8823) · [Before (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8686)

```diff
-           (0, jr.g)(rr.x, rr.y, rr.z, rr.w, ar), this.restEuler.set(ar, 3 * Ir)
+           (0, Xd.f)(dd.x, dd.y, dd.z, dd.w, Rd), this.restEuler.set(Rd, 3 * Kd)
```

#### 1099. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8717` → after: `L8854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8854) · [Before (L8717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8717)

```diff
-         } = this, tr = (0, Wr.e)(Sr, rr);
+         } = this, Hd = (0, Fd.d)(Od, dd);
```

#### 1100. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8719` → after: `L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8856) · [Before (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8719)

```diff
-         const hr = Sr.loop === ar.j.Loop,
+         const yd = Od.loop === Rd.h.Loop,
```

#### 1101. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8727` → after: `L8864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8864) · [Before (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8727)

```diff
-           if (null !== rr && (zr ? Zr.fill(0) : (0, Wr.g)(rr, tr, hr, Qr, Zr), (0, jr.l)(pr[Yr] + Zr[0], pr[Yr + 1] + Zr[1], pr[Yr + 2] + Zr[2], this.trigs[ar], Er), xr.set(Er, 4 * ar)), null !== Sr) {
+           if (null !== dd && (bd ? Wd.fill(0) : (0, Fd.f)(dd, Hd, yd, md, Wd), (0, Xd.i)(Qd[Td] + Wd[0], Qd[Td + 1] + Wd[1], Qd[Td + 2] + Wd[2], this.trigs[Rd], vd), td.set(vd, 4 * Rd)), null !== Od) {
```

#### 1102. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8731` → after: `L8868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8868) · [Before (L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8731)

```diff
-             zr ? Zr.fill(0) : (0, Wr.g)(Sr, tr, hr, Qr, Zr), mr[Yr] = rr.x + Zr[0] * fr, mr[Yr + 1] = rr.y + Zr[1] * fr, mr[Yr + 2] = rr.z + Zr[2] * fr
+             bd ? Wd.fill(0) : (0, Fd.f)(Od, Hd, yd, md, Wd), od[Td] = dd.x + Wd[0] * hd, od[Td + 1] = dd.y + Wd[1] * hd, od[Td + 2] = dd.z + Wd[2] * hd
```

#### 1103. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8737` → after: `L8874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8874) · [Before (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8737)

```diff
-             zr ? Zr.fill(1) : (0, Wr.g)(Ir, tr, hr, Qr, Zr), Nr[Yr] = rr.x * Zr[0], Nr[Yr + 1] = rr.y * Zr[1], Nr[Yr + 2] = rr.z * Zr[2]
+             bd ? Wd.fill(1) : (0, Fd.f)(Kd, Hd, yd, md, Wd), Nd[Td] = dd.x * Wd[0], Nd[Td + 1] = dd.y * Wd[1], Nd[Td + 2] = dd.z * Wd[2]
```

#### 1104. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8746-L8747` → after: `L8883-L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8883-L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8883-L8884) · [Before (L8746-L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8746-L8747)

```diff
-       } = (0, Zr.e)(), Wr = Qr.find(rr);
-       return null === Wr ? (console.warn(`Cosmetic clip ${rr} is not a built-in clip`), null) : new Er(Wr, Qr.variables.createValues(), Sr)
+       } = (0, Wd.d)(), Fd = md.find(dd);
+       return null === Fd ? (console.warn(`Cosmetic clip ${dd} is not a built-in clip`), null) : new vd(Fd, md.variables.createValues(), Od)
```

#### 1105. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8754` → after: `L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8891) · [Before (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8754)

```diff
-         scale: rr.Tx.clone()
+         scale: dd.Tt.clone()
```

#### 1106. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8768` → after: `L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8905) · [Before (L8768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8768)

```diff
-         Ir.rotationQuaternion.set(Qr[rr], Qr[rr + 1], Qr[rr + 2], Qr[rr + 3]), Ir.position.set(Zr[jr], Zr[jr + 1], Zr[jr + 2]), Ir.Tx.set(Wr[jr], Wr[jr + 1], Wr[jr + 2])
+         Kd.rotationQuaternion.set(md[dd], md[dd + 1], md[dd + 2], md[dd + 3]), Kd.position.set(Wd[Xd], Wd[Xd + 1], Wd[Xd + 2]), Kd.Tt.set(Fd[Xd], Fd[Xd + 1], Fd[Xd + 2])
```

#### 1107. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8791` → after: `L8928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8928) · [Before (L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8791)

```diff
-           return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
+           return null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : null
```

#### 1108. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8827` → after: `L8964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8964) · [Before (L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8827)

```diff
-   39618: (rr, Sr, Qr) => {
+   39662: (dd, Od, md) => {
```

#### 1109. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8829` → after: `L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8966) · [Before (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8829)

```diff
-       d: () => fr
+       c: () => hd
```

#### 1110. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8831-L8832` → after: `L8968-L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8968-L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8968-L8969) · [Before (L8831-L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8831-L8832)

```diff
-     var Zr = Qr(38555),
-       Wr = Qr(38552);
+     var Wd = md(38627),
+       Fd = md(38623);
```

#### 1111. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8835` → after: `L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8972) · [Before (L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8835)

```diff
-       Ir = new Zr.kU;
+       Kd = new Wd.Cq;
```

#### 1112. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8839` → after: `L8976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8976) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8839)

```diff
-       const Er = rr.YB.getState(Sr, "animator");
+       const vd = dd.qE.getState(Od, "animator");
```

#### 1113. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8843` → after: `L8980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8980) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8843)

```diff
-         JC: xr
+         JA: td
```

#### 1114. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8846` → after: `L8983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8983) · [Before (L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8846)

```diff
-       const mr = null !== (fr = Er.getDrawnNode(ar)) && void 0 !== fr ? fr : Er.getDrawnNode(jr);
+       const od = null !== (hd = vd.getDrawnNode(Rd)) && void 0 !== hd ? hd : vd.getDrawnNode(Xd);
```

#### 1115. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8849` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8986) · [Before (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8849)

```diff
-       null !== Nr && (Zr.kU.TransformNormalFromFloatsToRef(mr.currentPosX, mr.currentPosY, mr.currentPosZ, pr.getNodeWorldMatrix(xr, Nr), Ir), Qr[0] += Ir.x, Qr[1] += Ir.y, Qr[2] += Ir.z)
+       null !== Nd && (Wd.Cq.TransformNormalFromFloatsToRef(od.currentPosX, od.currentPosY, od.currentPosZ, Qd.getNodeWorldMatrix(td, Nd), Kd), md[0] += Kd.x, md[1] += Kd.y, md[2] += Kd.z)
```

#### 1116. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8852` → after: `L8989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8989) · [Before (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8852)

```diff
-   39350: (rr, Sr, Qr) => {
+   39398: (dd, Od, md) => {
```

#### 1117. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8854-L8856` → after: `L8991-L8993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8991-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8991-L8993) · [Before (L8854-L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8854-L8856)

```diff
-       b: () => ar,
-       e: () => Ir,
-       h: () => jr
+       d: () => Rd,
+       f: () => Kd,
+       g: () => Xd
```

#### 1118. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8858-L8859` → after: `L8995-L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R8995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L8995-L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L8995-L8996) · [Before (L8858-L8859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8858-L8859)

```diff
-     var Zr = Qr(4354),
-       Wr = Qr(39294);
+     var Wd = md(4365),
+       Fd = md(39330);
```

#### 1119. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8863` → after: `L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9000) · [Before (L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8863)

```diff
-       return Zr.d.getImagesPerAtlas().length > 1 && Wr.e.Ut()
+       return Wd.c.getImagesPerAtlas().length > 1 && Fd.e.pH()
```

#### 1120. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8868` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9005) · [Before (L8868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8868)

```diff
-       return Qr ? Wr : (rr + Wr) / Zr.d.getImagesPerAtlas()[0]
+       return md ? Fd : (dd + Fd) / Wd.c.getImagesPerAtlas()[0]
```

#### 1121. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8871` → after: `L9008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9008) · [Before (L8871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8871)

```diff
-   39388: (rr, Sr, Qr) => {
+   39434: (dd, Od, md) => {
```

#### 1122. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8873-L8877` → after: `L9010-L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9010-L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9010-L9014) · [Before (L8873-L8877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8873-L8877)

```diff
-       b: () => qr,
-       j: () => gr,
-       f: () => Rr,
-       l: () => cr,
-       p: () => Cr
+       c: () => Ad,
+       i: () => Gd,
+       g: () => rd,
+       m: () => Id,
+       n: () => nd
```

#### 1123. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8879-L8893` → after: `L9016-L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9016-L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9016-L9030) · [Before (L8879-L8893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8879-L8893)

```diff
-     var Zr = Qr(38555),
-       Wr = Qr(5210),
-       ar = Qr(5779),
-       jr = Qr(688),
-       Ir = Qr(38677),
-       fr = Qr(38762),
-       Er = Qr(39402),
-       pr = Qr(38736),
-       xr = Qr(39324),
-       mr = Qr(39397),
-       Nr = Qr(4413),
-       Ur = Qr(39391),
-       tr = Qr(38671),
-       hr = Qr(4354),
-       zr = Qr(4362);
+     var Wd = md(38627),
+       Fd = md(5128),
+       Rd = md(5733),
+       Xd = md(701),
+       Kd = md(38731),
+       hd = md(38799),
+       vd = md(39459),
+       Qd = md(38779),
+       td = md(39368),
+       od = md(39451),
+       Nd = md(4421),
+       qd = md(39440),
+       Hd = md(38723),
+       yd = md(4365),
+       bd = md(4373);
```

#### 1124. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8911` → after: `L9048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9048) · [Before (L8911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8911)

```diff
-               const Zr = [...null !== (Sr = rr.extensionsUsed) && void 0 !== Sr ? Sr : [], ...null !== (Qr = rr.extensionsRequired) && void 0 !== Qr ? Qr : []];
+               const Wd = [...null !== (Od = dd.extensionsUsed) && void 0 !== Od ? Od : [], ...null !== (md = dd.extensionsRequired) && void 0 !== md ? md : []];
```

#### 1125. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8914-L8915` → after: `L9051-L9052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9051-L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9051-L9052) · [Before (L8914-L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8914-L8915)

```diff
-           const Nr = null !== (Sr = xr.materials) && void 0 !== Sr ? Sr : [],
-             Ur = null !== (Qr = xr.meshes) && void 0 !== Qr ? Qr : [];
+           const Nd = null !== (Od = td.materials) && void 0 !== Od ? Od : [],
+             qd = null !== (md = td.meshes) && void 0 !== md ? md : [];
```

#### 1126. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8917` → after: `L9054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9054) · [Before (L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8917)

```diff
-           const tr = null !== (Zr = Ur[0].primitives) && void 0 !== Zr ? Zr : [];
+           const Hd = null !== (Wd = qd[0].primitives) && void 0 !== Wd ? Wd : [];
```

#### 1127. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8921` → after: `L9058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9058) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8921)

```diff
-               const Qr = null !== (Sr = rr.nodes) && void 0 !== Sr ? Sr : [];
+               const md = null !== (Od = dd.nodes) && void 0 !== Od ? Od : [];
```

#### 1128. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8925` → after: `L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9062) · [Before (L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8925)

```diff
-             zr = null !== (Wr = hr.pbrMetallicRoughness) && void 0 !== Wr ? Wr : {},
+             bd = null !== (Fd = yd.pbrMetallicRoughness) && void 0 !== Fd ? Fd : {},
```

#### 1129. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8929` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9066) · [Before (L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8929)

```diff
-           return JSON.stringify([Yr, nr, null !== (ar = zr.baseColorFactor) && void 0 !== ar ? ar : [1, 1, 1, 1], null !== (jr = hr.emissiveFactor) && void 0 !== jr ? jr : [0, 0, 0], null !== (Ir = hr.doubleSided) && void 0 !== Ir && Ir, null !== (fr = hr.alphaMode) && void 0 !== … [truncated]
+           return JSON.stringify([Td, pd, null !== (Rd = bd.baseColorFactor) && void 0 !== Rd ? Rd : [1, 1, 1, 1], null !== (Xd = yd.emissiveFactor) && void 0 !== Xd ? Xd : [0, 0, 0], null !== (Kd = yd.doubleSided) && void 0 !== Kd && Kd, null !== (hd = yd.alphaMode) && void 0 !== … [truncated]
```

#### 1130. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8958` → after: `L9095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9095) · [Before (L8958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8958)

```diff
-         if ("extensions" === Sr && Object.keys(null !== Qr && void 0 !== Qr ? Qr : {}).some((rr => !Br.has(rr))) || vr(Qr)) return !0
+         if ("extensions" === Od && Object.keys(null !== md && void 0 !== md ? md : {}).some((dd => !Ed.has(dd))) || Ud(md)) return !0
```

#### 1131. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8970` → after: `L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9107) · [Before (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8970)

```diff
-       const tr = null !== (jr = Ur.byteOffset) && void 0 !== jr ? jr : 0,
+       const Hd = null !== (Xd = qd.byteOffset) && void 0 !== Xd ? Xd : 0,
```

#### 1132. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8976` → after: `L9113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9113) · [Before (L8976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8976)

```diff
-       return [(nr = Sr.subarray(tr, tr + hr), `${Lr(nr,2166136261).toString(16)}-${Lr(nr,1867293075).toString(16)}-${nr.length}`), Nr.mimeType, null !== (Ir = Qr.texCoord) && void 0 !== Ir ? Ir : 0, null !== (fr = zr.wrapS) && void 0 !== fr ? fr : Kr, null !== (Er = zr.wrapT) &&  … [truncated]
+       return [(pd = Od.subarray(Hd, Hd + yd), `${Bd(pd,2166136261).toString(16)}-${Bd(pd,1867293075).toString(16)}-${pd.length}`), Nd.mimeType, null !== (Kd = md.texCoord) && void 0 !== Kd ? Kd : 0, null !== (hd = bd.wrapS) && void 0 !== hd ? hd : gd, null !== (vd = bd.wrapT) &&  … [truncated]
```

#### 1133. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8984-L8987` → after: `L9121-L9124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9121-L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9121-L9124) · [Before (L8984-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8984-L8987)

```diff
-     var lr = Qr(39394),
-       Xr = Qr(38776),
-       Pr = Qr(38723),
-       Hr = Qr(2383);
+     var Sd = md(39449),
+       sd = md(38823),
+       ud = md(38766),
+       Vd = md(2402);
```

#### 1134. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8992` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9129) · [Before (L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L8992)

```diff
-       return qr * (null !== (Sr = rr.modelScale) && void 0 !== Sr ? Sr : 1)
+       return Ad * (null !== (Od = dd.modelScale) && void 0 !== Od ? Od : 1)
```

#### 1135. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9001` → after: `L9138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9138) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9001)

```diff
-       } = null !== (Sr = rr.customModelInfo) && void 0 !== Sr ? Sr : {}, fr = null !== (Qr = null === (Zr = rr.model) || void 0 === Zr ? void 0 : Zr.split("|")) && void 0 !== Qr ? Qr : [], Er = fr.includes("rotatable") && Wr.g.includes(fr[0]), pr = Er || "CustomModel" === fr[0];
+       } = null !== (Od = dd.customModelInfo) && void 0 !== Od ? Od : {}, hd = null !== (md = null === (Wd = dd.model) || void 0 === Wd ? void 0 : Wd.split("|")) && void 0 !== md ? md : [], vd = hd.includes("rotatable") && Fd.f.includes(hd[0]), Qd = vd || "CustomModel" === hd[0];
```

#### 1136. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9004-L9006` → after: `L9141-L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9141-L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9141-L9143) · [Before (L9004-L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9004-L9006)

```diff
-         yOffset: pr ? ar : 0,
-         yRotation: Er ? jr : 0,
-         xRotation: Er ? Ir : 0
+         yOffset: Qd ? Rd : 0,
+         yRotation: vd ? Xd : 0,
+         xRotation: vd ? Kd : 0
```

#### 1137. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9011-L9012` → after: `L9148-L9149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9148-L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9148-L9149) · [Before (L9011-L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9011-L9012)

```diff
-       const Sr = ar.j[rr.meta.rootName];
-       return (0, jr.L)(rr.blockModel) || rr.blockModel === Sr.blockModel ? Sr : rr
+       const Od = Rd.i[dd.meta.rootName];
+       return (0, Xd.O)(dd.blockModel) || dd.blockModel === Od.blockModel ? Od : dd
```

#### 1138. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9039-L9040` → after: `L9176-L9177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9176-L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9176-L9177) · [Before (L9039-L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9039-L9040)

```diff
-         emissiveColor: null !== (Sr = null === (Qr = rr.emissiveColor) || void 0 === Qr ? void 0 : Qr.join(",")) && void 0 !== Sr ? Sr : "",
-         textureAnimation: rr.textureAnimation ? `${rr.textureAnimation.frames}x${rr.textureAnimation.animationInterval}` : ""
+         emissiveColor: null !== (Od = null === (md = dd.emissiveColor) || void 0 === md ? void 0 : md.join(",")) && void 0 !== Od ? Od : "",
+         textureAnimation: dd.textureAnimation ? `${dd.textureAnimation.frames}x${dd.textureAnimation.animationInterval}` : ""
```

#### 1139. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9051` → after: `L9188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9188) · [Before (L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9051)

```diff
-       if (hr.d.getModelOverride(Sr)) return null;
+       if (yd.c.getModelOverride(Od)) return null;
```

#### 1140. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9055` → after: `L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9192) · [Before (L9055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9055)

```diff
-         const Qr = (0, Nr.g)(hr.d.getModel(rr, zr.d.BLOCK).url);
+         const md = (0, Nd.f)(yd.c.getModel(dd, bd.f.BLOCK).url);
```

#### 1141. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9058` → after: `L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9195) · [Before (L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9058)

```diff
-           Zr = Tr((0, Nr.e)(Qr.base64))
+           Wd = Jd((0, Nd.b)(md.base64))
```

#### 1142. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9064` → after: `L9201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9201) · [Before (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9064)

```diff
-       return null === Zr ? null : `${Zr}|${Vr(Qr)}`
+       return null === Wd ? null : `${Wd}|${jd(md)}`
```

#### 1143. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9068` → after: `L9205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9205) · [Before (L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9068)

```diff
-       if ((0, Ur.c)(rr), !Sr.blockModel) throw new Error(`"${Sr.name}" has a GLB model type ("${Sr.model}") but no blockModel`);
+       if ((0, qd.b)(dd), !Od.blockModel) throw new Error(`"${Od.name}" has a GLB model type ("${Od.model}") but no blockModel`);
```

#### 1144. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9106-L9109` → after: `L9243-L9246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9243-L9246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9243-L9246) · [Before (L9106-L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9106-L9109)

```diff
-           await hr.d.requiredAssetsAreGenerated();
-           const Ur = hr.d.getModelOverride(ar) ? void 0 : Nr.textureAnimation,
-             Yr = hr.d.getModel(ar, zr.d.BLOCK).url,
-             nr = () => hr.d.getModelOverride(ar) ? {
+           await yd.c.requiredAssetsAreGenerated();
+           const qd = yd.c.getModelOverride(Rd) ? void 0 : Nd.textureAnimation,
+             Td = yd.c.getModel(Rd, bd.f.BLOCK).url,
+             pd = () => yd.c.getModelOverride(Rd) ? {
```

#### 1145. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9112` → after: `L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9249) · [Before (L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9112)

```diff
-                 rootUrl: hr.d.getModel(ar, zr.d.BLOCK, !0).url
+                 rootUrl: yd.c.getModel(Rd, bd.f.BLOCK, !0).url
```

#### 1146. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9116` → after: `L9253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9253) · [Before (L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9116)

```diff
-           const Kr = await (0, Xr.i)("", rr, Yr, nr, (async Sr => {
+           const gd = await (0, sd.d)("", dd, Td, pd, (async Od => {
```

#### 1147. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9130-L9132` → after: `L9267-L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9267-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9267-L9269) · [Before (L9130-L9132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9130-L9132)

```diff
-                 } = (0, Pr.b)({
-                   name: `${ar}BlockModelMeshMat`,
-                   Dt: rr,
+                 } = (0, ud.d)({
+                   name: `${Rd}BlockModelMeshMat`,
+                   MH: dd,
```

#### 1148. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9134` → after: `L9271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9271) · [Before (L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9134)

```diff
-                     ...(0, lr.e)(Sr, Wr, Fr, !!Nr.unlit),
+                     ...(0, Sd.d)(Od, Fd, ld, !!Nd.unlit),
```

#### 1149. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9141` → after: `L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9278) · [Before (L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9141)

```diff
-                     fillMode: 0 === Zr.primitive.mode ? Ir.d.PointListDrawMode : Ir.d.TriangleFillMode
+                     fillMode: 0 === Wd.primitive.mode ? Kd.c.PointListDrawMode : Kd.c.TriangleFillMode
```

#### 1150. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9144` → after: `L9281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9281) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9144)

```diff
-                     (0, pr.t)(rr, xr.c, (0, xr.g)(Ur.frames, Ur.animationInterval))
+                     (0, Qd.t)(dd, td.e, (0, td.k)(qd.frames, qd.animationInterval))
```

#### 1151. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9151` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9288) · [Before (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9151)

```diff
-             const mr = (await Promise.allSettled([Sr.decodeGeometries(), Er && (0, fr.z)(Er)])).find((rr => "rejected" === rr.status));
+             const od = (await Promise.allSettled([Od.decodeGeometries(), vd && (0, hd.u)(vd)])).find((dd => "rejected" === dd.status));
```

#### 1152. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9161` → after: `L9298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9298) · [Before (L9161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9161)

```diff
-           if (!er) throw new Error(`"${ar}" imported no renderable mesh`);
+           if (!Yd) throw new Error(`"${Rd}" imported no renderable mesh`);
```

#### 1153. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9165` → after: `L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9302) · [Before (L9165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9165)

```diff
-           } = er, Tr = null !== (Wr = er.material) && void 0 !== Wr ? Wr : await Qr, vr = (0, tr.o)(Kr, yr);
+           } = Yd, Jd = null !== (Fd = Yd.material) && void 0 !== Fd ? Fd : await md, Ud = (0, Hd.k)(gd, wd);
```

#### 1154. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9179-L9181` → after: `L9316-L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9316-L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9316-L9318) · [Before (L9179-L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9179-L9181)

```diff
-           Nr.unlit || Br || (vr.named.color = (0, tr.k)(vr.positions.length / 3, tr.d, vr.named.color));
-           const Lr = (0, Er.p)((0, Hr.e)().Ox, `${ar}blockGlbMesh`, vr);
-           return Lr.sideOrientation = Ir.d.ClockWiseSideOrientation, Lr.rotationQuaternion = yr.part ? null : Zr.Quaternion.Identity(), Lr.hasVertexAlpha = !yr.primitive.draco && (0, lr.g)(yr.primitive), Lr.material = Tr, Lr.ut = !1, Lr
+           Nd.unlit || Ed || (Ud.named.color = (0, Hd.j)(Ud.positions.length / 3, Hd.c, Ud.named.color));
+           const Bd = (0, vd.p)((0, Vd.c)().gt, `${Rd}blockGlbMesh`, Ud);
+           return Bd.sideOrientation = Kd.c.ClockWiseSideOrientation, Bd.rotationQuaternion = wd.part ? null : Wd.Quaternion.Identity(), Bd.hasVertexAlpha = !wd.primitive.draco && (0, Sd.h)(wd.primitive), Bd.material = Jd, Bd.my = !1, Bd
```

#### 1155. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9200` → after: `L9337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9337) · [Before (L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9200)

```diff
-   39391: (rr, Sr, Qr) => {
+   39440: (dd, Od, md) => {
```

#### 1156. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9202` → after: `L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9339) · [Before (L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9202)

```diff
-       c: () => Zr
+       b: () => Wd
```

#### 1157. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9207` → after: `L9344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9344) · [Before (L9207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9207)

```diff
-   39424: (rr, Sr, Qr) => {
+   39479: (dd, Od, md) => {
```

#### 1158. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9209` → after: `L9346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9346) · [Before (L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9209)

```diff
-       e: () => Wr
+       c: () => Fd
```

#### 1159. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9211` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9348) · [Before (L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9211)

```diff
-     var Zr = Qr(38896);
+     var Wd = md(38940);
```

#### 1160. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9216` → after: `L9353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9353) · [Before (L9216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9216)

```diff
-         Ir = (0, Zr.h)(Sr);
+         Kd = (0, Wd.g)(Od);
```

#### 1161. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9228` → after: `L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9365) · [Before (L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9228)

```diff
-   39554: (rr, Sr, Qr) => {
+   39615: (dd, Od, md) => {
```

#### 1162. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9230` → after: `L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9367) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9230)

```diff
-       d: () => Ir,
+       c: () => Kd,
```

#### 1163. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9233-L9235` → after: `L9370-L9372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9370-L9372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9370-L9372) · [Before (L9233-L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9233-L9235)

```diff
-     var Zr = Qr(38896),
-       Wr = Qr(38849),
-       ar = Qr(38671);
+     var Wd = md(38940),
+       Fd = md(38907),
+       Rd = md(38723);
```

#### 1164. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9239-L9244` → after: `L9376-L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9376-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9376-L9381) · [Before (L9239-L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9239-L9244)

```diff
-       const Ir = rr.Ox.aEr[Qr];
-       Ir.VK(!0);
-       const fr = rr.Ex.RV(rr.VY(Sr)),
-         Er = (0, Zr.h)(fr),
-         pr = Sr.map(((Sr, Qr) => Sr + (Er[Qr] + Er[Qr + 3]) / 2 - rr.um[Qr]));
-       Ir.Tx.set(Er[3] - Er[0], Er[4] - Er[1], Er[5] - Er[2]);
+       const Kd = dd.gt.hvd[md];
+       Kd.rY(!0);
+       const hd = dd.Rt.mC(dd.mY(Od)),
+         vd = (0, Wd.g)(hd),
+         Qd = Od.map(((Od, md) => Od + (vd[md] + vd[md + 3]) / 2 - dd.XN[md]));
+       Kd.Tt.set(vd[3] - vd[0], vd[4] - vd[1], vd[5] - vd[2]);
```

#### 1165. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9252-L9254` → after: `L9389-L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9389-L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9389-L9391) · [Before (L9252-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9252-L9254)

```diff
-             ar = Zr ? Ir.Tx.y : Wr ? Ir.Tx.z : Ir.Tx.x,
-             jr = Zr ? Ir.Tx.z : Wr ? Ir.Tx.x : Ir.Tx.y;
-           return .5 + (rr - .5) * (Sr % 2 === 0 ? ar : jr)
+             Rd = Wd ? Kd.Tt.y : Fd ? Kd.Tt.z : Kd.Tt.x,
+             Xd = Wd ? Kd.Tt.z : Fd ? Kd.Tt.x : Kd.Tt.y;
+           return .5 + (dd - .5) * (Od % 2 === 0 ? Rd : Xd)
```

#### 1166. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9256` → after: `L9393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9393) · [Before (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9256)

```diff
-       return (0, ar.u)(Ir, (() => {
+       return (0, Rd.r)(Kd, (() => {
```

#### 1167. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9258` → after: `L9395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9395) · [Before (L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9258)

```diff
-       })), (0, Wr.p)(Ir, pr[0], pr[1], pr[2]), Ir
+       })), (0, Fd.q)(Kd, Qd[0], Qd[1], Qd[2]), Kd
```

#### 1168. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9266` → after: `L9403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9403) · [Before (L9266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9266)

```diff
-           Tx: Qr
+           Tt: md
```

#### 1169. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9268` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9405) · [Before (L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9268)

```diff
-         Sr[fr].Tx.set(Qr.x, 1 / Zr, Qr.z), (0, Wr.p)(Sr[fr], rr.x, (0 === fr ? 1 : -1) * (ar - jr / (2 * Zr)), rr.z)
+         Od[hd].Tt.set(md.x, 1 / Wd, md.z), (0, Fd.q)(Od[hd], dd.x, (0 === hd ? 1 : -1) * (Rd - Xd / (2 * Wd)), dd.z)
```

#### 1170. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9273` → after: `L9410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9410) · [Before (L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9273)

```diff
-           Tx: Er
+           Tt: vd
```

#### 1171. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9275` → after: `L9412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9412) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9275)

```diff
-         Sr[fr].Tx.set(1 / Qr, (Ir * Zr - 2 * jr) / ((Ir - 2 * jr) * Zr), Er.z), (0, Wr.p)(Sr[fr], (2 === fr ? -1 : 1) * (ar - jr / (2 * Qr)), rr.y, rr.z)
+         Od[hd].Tt.set(1 / md, (Kd * Wd - 2 * Xd) / ((Kd - 2 * Xd) * Wd), vd.z), (0, Fd.q)(Od[hd], (2 === hd ? -1 : 1) * (Rd - Xd / (2 * md)), dd.y, dd.z)
```

#### 1172. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9279` → after: `L9416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9416) · [Before (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9279)

```diff
-   38552: (rr, Sr, Qr) => {
+   38623: (dd, Od, md) => {
```

#### 1173. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9287-L9292` → after: `L9424-L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9424-L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9424-L9429) · [Before (L9287-L9292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9287-L9292)

```diff
-     var Zr = Qr(379),
-       Wr = Qr(2049),
-       ar = Qr(38625),
-       jr = Qr(38650),
-       Ir = Qr(38555),
-       fr = Qr(38616);
+     var Wd = md(405),
+       Fd = md(2057),
+       Rd = md(38673),
+       Xd = md(38691),
+       Kd = md(38627),
+       hd = md(38671);
```

#### 1174. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9337` → after: `L9474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9474) · [Before (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9337)

```diff
-         this.restQuat.set([Sr, Qr, Zr, Wr]), (0, fr.g)(Sr, Qr, Zr, Wr, this.restEuler)
+         this.restQuat.set([Od, md, Wd, Fd]), (0, hd.f)(Od, md, Wd, Fd, this.restEuler)
```

#### 1175. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9359` → after: `L9496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9496) · [Before (L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9359)

```diff
-           } = pr, mr = xr.currentAnimationType, Ur = null !== mr && mr !== ar.i.Movement;
+           } = Qd, od = td.currentAnimationType, qd = null !== od && od !== Rd.c.Movement;
```

#### 1176. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9383` → after: `L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9520) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9383)

```diff
-         Kr || (0, fr.l)(jr[0] + Nr, jr[1] + hr, jr[2] + nr, rr.eulerTrig, zr);
+         gd || (0, hd.i)(Xd[0] + Nd, Xd[1] + yd, Xd[2] + pd, dd.eulerTrig, bd);
```

#### 1177. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9390` → after: `L9527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9527) · [Before (L9390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9390)

```diff
-             Yr[0] = -mr[0], Yr[1] = -mr[1], Yr[2] = -mr[2], Yr[3] = mr[3], rr.takeoverRotation.set([Sr.x, Sr.y, Sr.z, Sr.w]), (0, fr.h)(Yr, rr.takeoverRotation, rr.takeoverRotation), rr.takeoverPosition.set([ar.currentPosX, ar.currentPosY, ar.currentPosZ]);
+             Td[0] = -od[0], Td[1] = -od[1], Td[2] = -od[2], Td[3] = od[3], dd.takeoverRotation.set([Od.x, Od.y, Od.z, Od.w]), (0, hd.g)(Td, dd.takeoverRotation, dd.takeoverRotation), dd.takeoverPosition.set([Rd.currentPosX, Rd.currentPosY, Rd.currentPosZ]);
```

#### 1178. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9394` → after: `L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9531) · [Before (L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9394)

```diff
-           if (rr.takeover += (1 - rr.takeover) * (0, fr.q)(12, Wr), rr.takeover > .999) rr.takeover = 1;
+           if (dd.takeover += (1 - dd.takeover) * (0, hd.n)(12, Fd), dd.takeover > .999) dd.takeover = 1;
```

#### 1179. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9417` → after: `L9554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9554) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9417)

```diff
-           (0, fr.h)(mr, zr, zr);
+           (0, hd.g)(od, bd, bd);
```

#### 1180. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9434` → after: `L9571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9571) · [Before (L9434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9434)

```diff
-         return (Zr[0] !== Sr.baseRotX || Zr[1] !== Sr.baseRotY || Zr[2] !== Sr.baseRotZ) && (Zr[0] = Sr.baseRotX, Zr[1] = Sr.baseRotY, Zr[2] = Sr.baseRotZ, Ir.Quaternion.RotationYawPitchRollToRef(Sr.baseRotY, Sr.baseRotX, Sr.baseRotZ, nr), Qr[0] = nr.x, Qr[1] = nr.y, Qr[2] = nr.z … [truncated]
+         return (Wd[0] !== Od.baseRotX || Wd[1] !== Od.baseRotY || Wd[2] !== Od.baseRotZ) && (Wd[0] = Od.baseRotX, Wd[1] = Od.baseRotY, Wd[2] = Od.baseRotZ, Kd.Quaternion.RotationYawPitchRollToRef(Od.baseRotY, Od.baseRotX, Od.baseRotZ, pd), md[0] = pd.x, md[1] = pd.y, md[2] = pd.z … [truncated]
```

#### 1181. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9481` → after: `L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9618) · [Before (L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9481)

```diff
-     var Tr = Qr(38630);
+     var Jd = md(38677);
```

#### 1182. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9485` → after: `L9622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9622) · [Before (L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9485)

```diff
-       const ar = rr.Ox.bC,
+       const Rd = dd.gt.HA,
```

#### 1183. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9487` → after: `L9624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9624) · [Before (L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9487)

```diff
-           fC: jr
+           YV: Xd
```

#### 1184. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9489` → after: `L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9626) · [Before (L9489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9489)

```diff
-       return ar.has(Qr) && ar.getCulledForEntity(Qr, Sr) && Sr !== jr && (null === (Zr = rr.YB.iQr(Sr)) || void 0 === Zr ? void 0 : Zr.nU) !== jr && (null === (Wr = rr.YB.iQr(jr)) || void 0 === Wr ? void 0 : Wr.nU) !== Sr
+       return Rd.has(md) && Rd.getCulledForEntity(md, Od) && Od !== Xd && (null === (Wd = dd.qE.JWd(Od)) || void 0 === Wd ? void 0 : Wd.xq) !== Xd && (null === (Fd = dd.qE.JWd(Xd)) || void 0 === Fd ? void 0 : Fd.xq) !== Od
```

#### 1185. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9493` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9630) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9493)

```diff
-         this.XM = void 0, this.gm = void 0, this.thinInstMgr = void 0, this.JC = null, this.tZr = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = rr => {
+         this.QG = void 0, this.zo = void 0, this.thinInstMgr = void 0, this.JA = null, this.fWd = null, this.paused = !1, this.pausedDt = 0, this.idle = !1, this.manualRotationEpoch = 0, this.rigPose = null, this.rigFrame = 0, this.writeRigNodePosition = dd => {
```

#### 1186. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9503` → after: `L9640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9640) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9503)

```diff
-           vQ: Wr
+           am: Fd
```

#### 1187. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9505` → after: `L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9642) · [Before (L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9505)

```diff
-         Wr && this.updateNodeAnimations(Wr, Sr, ar.e.Start)
+         Fd && this.updateNodeAnimations(Fd, Od, Rd.b.Start)
```

#### 1188. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9512` → after: `L9649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9649) · [Before (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9512)

```diff
-           vQ: Zr
+           am: Wd
```

#### 1189. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9514` → after: `L9651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9651) · [Before (L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9514)

```diff
-         Sr.reset(), Zr && this.updateNodeAnimations(Zr, rr, ar.e.Stop)
+         Od.reset(), Wd && this.updateNodeAnimations(Wd, dd, Rd.b.Stop)
```

#### 1190. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9524` → after: `L9661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9661) · [Before (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9524)

```diff
-         (null === (Sr = this.rigPose) || void 0 === Sr ? void 0 : Sr.controller) !== rr && (null === (Qr = this.rigPose) || void 0 === Qr || Qr.releaseAll(this.thinInstMgr, this.JC), this.rigPose = null === rr ? null : new Kr(rr, ((rr, Sr) => this.getRigNodeTransform(rr, Sr)), (( … [truncated]
+         (null === (Od = this.rigPose) || void 0 === Od ? void 0 : Od.controller) !== dd && (null === (md = this.rigPose) || void 0 === md || md.releaseAll(this.thinInstMgr, this.JA), this.rigPose = null === dd ? null : new gd(dd, ((dd, Od) => this.getRigNodeTransform(dd, Od)), (( … [truncated]
```

#### 1191. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9530` → after: `L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9667) · [Before (L9530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9530)

```diff
-         return null !== (rr = null === (Sr = this.rigPose) || void 0 === Sr ? void 0 : Sr.controller) && void 0 !== rr ? rr : null
+         return null !== (dd = null === (Od = this.rigPose) || void 0 === Od ? void 0 : Od.controller) && void 0 !== dd ? dd : null
```

#### 1192. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9534` → after: `L9671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9671) · [Before (L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9534)

```diff
-         return null !== (Sr = this.nodeTransforms[this.getAliasedNodeName(rr)]) && void 0 !== Sr ? Sr : null
+         return null !== (Od = this.nodeTransforms[this.getAliasedNodeName(dd)]) && void 0 !== Od ? Od : null
```

#### 1193. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9538-L9539` → after: `L9675-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9675-L9676) · [Before (L9538-L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9538-L9539)

```diff
-           if (this.thinInstMgr.getNamedNodeOrNull(this.JC, Rr) !== Sr) return null;
-           const rr = `${Rr}#${Sr}`;
+           if (this.thinInstMgr.getNamedNodeOrNull(this.JA, rd) !== Od) return null;
+           const dd = `${rd}#${Od}`;
```

#### 1194. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9542-L9543` → after: `L9679-L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9679-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9679-L9680) · [Before (L9542-L9543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9542-L9543)

```diff
-         const Qr = this.getOrCreateTransformIfNodeExists(Sr === gr ? Rr : rr);
-         return (null === Qr || void 0 === Qr ? void 0 : Qr.thinNodeIndex) === Sr ? Qr : null
+         const md = this.getOrCreateTransformIfNodeExists(Od === Gd ? rd : dd);
+         return (null === md || void 0 === md ? void 0 : md.thinNodeIndex) === Od ? md : null
```

#### 1195. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9546` → after: `L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9683) · [Before (L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9546)

```diff
-         if (this.thinInstMgr.has(this.JC))
+         if (this.thinInstMgr.has(this.JA))
```

#### 1196. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9558` → after: `L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9695) · [Before (L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9558)

```diff
-             Qr || this.thinInstMgr.setNodePosition(this.JC, Sr, Zr, Wr, ar), this.thinInstMgr.setNodeRotationEuler(this.JC, Sr, jr, Ir, fr), Nr(rr, this.thinInstMgr, this.JC)
+             md || this.thinInstMgr.setNodePosition(this.JA, Od, Wd, Fd, Rd), this.thinInstMgr.setNodeRotationEuler(this.JA, Od, Xd, Kd, hd), Nd(dd, this.thinInstMgr, this.JA)
```

#### 1197. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9575` → after: `L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9712) · [Before (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9575)

```diff
-         null !== Wr && void 0 !== Wr && Wr.scaleBase ? (Wr.scaleBase = [Sr, Qr, Zr], mr(Wr, this.thinInstMgr, this.JC)) : this.thinInstMgr.setNodeScale(this.JC, rr, Sr, Qr, Zr)
+         null !== Fd && void 0 !== Fd && Fd.scaleBase ? (Fd.scaleBase = [Od, md, Wd], od(Fd, this.thinInstMgr, this.JA)) : this.thinInstMgr.setNodeScale(this.JA, dd, Od, md, Wd)
```

#### 1198. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9580` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9717) · [Before (L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9580)

```diff
-           if (!this.tZr.zZr) return;
+           if (!this.fWd.MWd) return;
```

#### 1199. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9584-L9585` → after: `L9721-L9722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9721-L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9721-L9722) · [Before (L9584-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9584-L9585)

```diff
-         if (!this.tZr.zZr) return;
-         const Zr = Wr.d.lerpWeight(Pr * (rr + this.pausedDt)),
+         if (!this.fWd.MWd) return;
+         const Wd = Fd.e.lerpWeight(ud * (dd + this.pausedDt)),
```

#### 1200. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9588` → after: `L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9725) · [Before (L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9588)

```diff
-         null !== ar && (this.rigFrame++, jr = ar.apply((rr + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.JC, this.writeRigNodePosition, Sr)), this.paused = !1, this.pausedDt = 0;
+         null !== Rd && (this.rigFrame++, Xd = Rd.apply((dd + this.pausedDt) / 1e3, this.rigFrame, this.thinInstMgr, this.JA, this.writeRigNodePosition, Od)), this.paused = !1, this.pausedDt = 0;
```

#### 1201. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9592` → after: `L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9729) · [Before (L9592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9592)

```diff
-           if (!Wr.thinNode.zZr) {
+           if (!Fd.thinNode.MWd) {
```

#### 1202. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9599` → after: `L9736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9736) · [Before (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9599)

```diff
-           null !== rr && 0 !== rr.rotation.length ? this.renderNodeAnimatedRotation(Wr, Zr) : Wr.isRotDirty && this.flushNodeRotation(Wr, Zr), null !== rr && 0 !== rr.position.length ? this.renderNodeAnimatedPosition(Wr, Zr) : Wr.isPosDirty && this.flushNodePosition(Wr, Zr), null … [truncated]
+           null !== dd && 0 !== dd.rotation.length ? this.renderNodeAnimatedRotation(Fd, Wd) : Fd.isRotDirty && this.flushNodeRotation(Fd, Wd), null !== dd && 0 !== dd.position.length ? this.renderNodeAnimatedPosition(Fd, Wd) : Fd.isPosDirty && this.flushNodePosition(Fd, Wd), null … [truncated]
```

#### 1203. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9613` → after: `L9750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9750) · [Before (L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9613)

```diff
-           if (Zr.lx(rr), !Zr.hasCurrentAnimationFinished()) {
+           if (Wd.Et(dd), !Wd.hasCurrentAnimationFinished()) {
```

#### 1204. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9618` → after: `L9755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9755) · [Before (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9618)

```diff
-           Wr.TQ !== ar.l.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(Wr, Qr), this.stopAnimation(Qr)) : (Zr.rewindPastLoops(), this.rewindNodeAnimationTimelines(Wr, Qr), Sr = !0)
+           Fd.wm !== Rd.f.LoopOnLastFrame ? (this.snapNodesToFinalKeyframes(Fd, md), this.stopAnimation(md)) : (Wd.rewindPastLoops(), this.rewindNodeAnimationTimelines(Fd, md), Od = !0)
```

#### 1205. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9624` → after: `L9761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9761) · [Before (L9624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9624)

```diff
-           vQ: Qr
+           am: md
```

#### 1206. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9634` → after: `L9771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9771) · [Before (L9634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9634)

```diff
-           vQ: Qr
+           am: md
```

#### 1207. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9656` → after: `L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9793) · [Before (L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9656)

```diff
-               rr[0] = Sr[0], rr[1] = Sr[1], rr[2] = Sr[2], mr(Wr, this.thinInstMgr, this.JC)
+               dd[0] = Od[0], dd[1] = Od[1], dd[2] = Od[2], od(Fd, this.thinInstMgr, this.JA)
```

#### 1208. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9662` → after: `L9799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9799) · [Before (L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9662)

```diff
-           Qr = Sr ? Rr : this.getAliasedNodeName(rr);
+           md = Od ? rd : this.getAliasedNodeName(dd);
```

#### 1209. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9666` → after: `L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9803) · [Before (L9666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9666)

```diff
-         const Wr = Sr ? gr : this.thinInstMgr.getNamedNodeOrNull(this.JC, Qr);
+         const Fd = Od ? Gd : this.thinInstMgr.getNamedNodeOrNull(this.JA, md);
```

#### 1210. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9678` → after: `L9815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9815) · [Before (L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9678)

```diff
-             return [jr, null === Zr ? null : null !== (Sr = null === Ir || void 0 === Ir || null === (Qr = Ir.vQ) || void 0 === Qr ? void 0 : Qr[Zr]) && void 0 !== Sr ? Sr : null]
+             return [Xd, null === Wd ? null : null !== (Od = null === Kd || void 0 === Kd || null === (md = Kd.am) || void 0 === md ? void 0 : md[Wd]) && void 0 !== Od ? Od : null]
```

#### 1211. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9680` → after: `L9817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9817) · [Before (L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9680)

```diff
-           jr = this.thinInstMgr.lZr(this.JC, Sr),
+           Xd = this.thinInstMgr.QFd(this.JA, Od),
```

#### 1212. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9686` → after: `L9823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9823) · [Before (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9686)

```diff
-           restRotation: this.thinInstMgr.getRestRotation(this.JC, Sr),
+           restRotation: this.thinInstMgr.getRestRotation(this.JA, Od),
```

#### 1213. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9722` → after: `L9859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9859) · [Before (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9722)

```diff
-         return null !== (Sr = null === (Qr = this.nodeNameAliases) || void 0 === Qr ? void 0 : Qr[rr]) && void 0 !== Sr ? Sr : rr
+         return null !== (Od = null === (md = this.nodeNameAliases) || void 0 === md ? void 0 : md[dd]) && void 0 !== Od ? Od : dd
```

#### 1214. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9728` → after: `L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9865) · [Before (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9728)

```diff
-           null !== jr && (jr.animationByType[Sr] = Qr === ar.e.Start && null !== (Zr = rr[Wr]) && void 0 !== Zr ? Zr : null, this.updateCurrentNodeAnimation(jr), jr.currentAnimationType === Sr && (jr.rotAnimationIndex = 0, jr.posAnimationIndex = 0, jr.scaleAnimationIndex = 0))
+           null !== Xd && (Xd.animationByType[Od] = md === Rd.b.Start && null !== (Wd = dd[Fd]) && void 0 !== Wd ? Wd : null, this.updateCurrentNodeAnimation(Xd), Xd.currentAnimationType === Od && (Xd.rotAnimationIndex = 0, Xd.posAnimationIndex = 0, Xd.scaleAnimationIndex = 0))
```

#### 1215. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9769` → after: `L9906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9906) · [Before (L9769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9769)

```diff
-             Er = jr.RQ,
+             vd = Xd.Bm,
```

#### 1216. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9771-L9773` → after: `L9908-L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9908-L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9908-L9910) · [Before (L9771-L9773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9771-L9773)

```diff
-             xr = jr.qQ;
-           switch (jr.lQ) {
-             case ar.k.Linear: {
+             td = Xd.xm;
+           switch (Xd.Um) {
+             case Rd.e.Linear: {
```

#### 1217. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9783` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9920) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9783)

```diff
-             case ar.k.CatmullRomSpline: {
+             case Rd.e.CatmullRomSpline: {
```

#### 1218. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9797-L9799` → after: `L9934-L9936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9934-L9936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9934-L9936) · [Before (L9797-L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9797-L9799)

```diff
-                   CQ: jr,
-                   MQ: Ir
-                 } = Er[ar], pr = Number.isFinite(jr) ? jr : 0, xr = Number.isFinite(Ir) ? Ir : 0;
+                   sm: Xd,
+                   um: Kd
+                 } = vd[Rd], Qd = Number.isFinite(Xd) ? Xd : 0, td = Number.isFinite(Kd) ? Kd : 0;
```

#### 1219. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9805-L9806` → after: `L9942-L9943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9942-L9943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9942-L9943) · [Before (L9805-L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9805-L9806)

```diff
-               const rr = jr.lQ;
-               throw new Error(`Unimplemented lerp mode: ${rr}`)
+               const dd = Xd.Um;
+               throw new Error(`Unimplemented lerp mode: ${dd}`)
```

#### 1220. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9854` → after: `L9991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9991) · [Before (L9854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9854)

```diff
-         this.thinInstMgr.setNodeRotationEuler(this.JC, Sr, Qr + ar, Zr + jr, Wr + Ir)
+         this.thinInstMgr.setNodeRotationEuler(this.JA, Od, md + Rd, Wd + Xd, Fd + Kd)
```

#### 1221. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9861` → after: `L9998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L9998) · [Before (L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9861)

```diff
-         this.thinInstMgr.setNodePosition(this.JC, rr.thinNodeIndex, Sr, Qr, Zr)
+         this.thinInstMgr.setNodePosition(this.JA, dd.thinNodeIndex, Od, md, Wd)
```

#### 1222. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9865-L9867` → after: `L10002-L10004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10002-L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10002-L10004) · [Before (L9865-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9865-L9867)

```diff
-           gm: Sr,
-           XM: Qr
-         } = this, Zr = void 0 === Sr || void 0 === Qr ? void 0 : Sr.YB.rQr(Qr);
+           zo: Od,
+           QG: md
+         } = this, Wd = void 0 === Od || void 0 === md ? void 0 : Od.qE.Vmd(md);
```

#### 1223. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9869` → after: `L10006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10006) · [Before (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9869)

```diff
-         const Wr = Sr.YB.gJ(Qr).lD,
+         const Fd = Od.qE.gM(md).y_,
```

#### 1224. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9882` → after: `L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10019) · [Before (L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9882)

```diff
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.nQ = 1
+         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.bm = 1
```

#### 1225. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9885` → after: `L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10022) · [Before (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9885)

```diff
-         this.currentAnimationScript = rr, this.elapsedAnimationTimeMs = Sr * rr.BQ, this.elapsedAnimationTimeFraction = Sr, this.nQ = Qr
+         this.currentAnimationScript = dd, this.elapsedAnimationTimeMs = Od * dd.gm, this.elapsedAnimationTimeFraction = Od, this.bm = md
```

#### 1226. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9888` → after: `L10025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10025) · [Before (L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9888)

```diff
-         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.nQ = 1
+         this.currentAnimationScript = null, this.elapsedAnimationTimeMs = 0, this.elapsedAnimationTimeFraction = 0, this.bm = 1
```

#### 1227. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9897` → after: `L10034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10034) · [Before (L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9897)

```diff
-         this.nQ = rr
+         this.bm = dd
```

#### 1228. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9902-L9903` → after: `L10039-L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10039-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10039-L10040) · [Before (L9902-L9903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9902-L9903)

```diff
-           BQ: Sr,
-           TQ: Qr
+           gm: Od,
+           wm: md
```

#### 1229. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9905` → after: `L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10042) · [Before (L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9905)

```diff
-         this.elapsedAnimationTimeMs += rr * this.nQ, this.elapsedAnimationTimeFraction = this.elapsedAnimationTimeMs / Sr, this.elapsedAnimationTimeFraction >= 1 && Qr !== ar.l.LoopOnLastFrame && (this.elapsedAnimationTimeMs = Sr, this.elapsedAnimationTimeFraction = 1)
+         this.elapsedAnimationTimeMs += dd * this.bm, this.elapsedAnimationTimeFraction = this.elapsedAnimationTimeMs / Od, this.elapsedAnimationTimeFraction >= 1 && md !== Rd.f.LoopOnLastFrame && (this.elapsedAnimationTimeMs = Od, this.elapsedAnimationTimeFraction = 1)
```

#### 1230. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9909` → after: `L10046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10046) · [Before (L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9909)

```diff
-           BQ: rr
+           gm: dd
```

#### 1231. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9915` → after: `L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10052) · [Before (L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9915)

```diff
-         return this.elapsedAnimationTimeFraction >= 1 && (null === (rr = this.currentAnimationScript) || void 0 === rr ? void 0 : rr.TQ) !== ar.l.HoldOnLastFrame
+         return this.elapsedAnimationTimeFraction >= 1 && (null === (dd = this.currentAnimationScript) || void 0 === dd ? void 0 : dd.wm) !== Rd.f.HoldOnLastFrame
```

#### 1232. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9924` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10061) · [Before (L9924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9924)

```diff
-         zB: function(Sr, Qr) {
+         QE: function(Od, md) {
```

#### 1233. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9926` → after: `L10063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10063) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9926)

```diff
-           Qr.gm = rr, Qr.thinInstMgr = rr.Ox.bC, Qr.nodeNameAliases = null !== (Zr = null === (Wr = (0, jr.c)(Qr.modelLifeformType)) || void 0 === Wr ? void 0 : Wr.nodeNameAliases) && void 0 !== Zr ? Zr : null, (0, Tr.b)(rr).animations.restore(Sr, Qr)
+           md.zo = dd, md.thinInstMgr = dd.gt.HA, md.nodeNameAliases = null !== (Wd = null === (Fd = (0, Xd.e)(md.modelLifeformType)) || void 0 === Fd ? void 0 : Fd.nodeNameAliases) && void 0 !== Wd ? Wd : null, (0, Jd.e)(dd).animations.restore(Od, md)
```

#### 1234. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9928` → after: `L10065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10065) · [Before (L9928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9928)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 1235. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9931` → after: `L10068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10068) · [Before (L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9931)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 1236. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9935-L9937` → after: `L10072-L10074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10072-L10074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10072-L10074) · [Before (L9935-L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9935-L9937)

```diff
-               JC: Qr
-             } = Wr, ar = null !== Qr && vr(rr, Wr.XM, Qr);
-             ar ? Wr.renderPaused(Sr) : Wr.render(Sr), null === (Zr = rr.YB.getState(Wr.XM, "genericLifeform")) || void 0 === Zr || Zr.followLimbs(ar)
+               JA: md
+             } = Fd, Rd = null !== md && Ud(dd, Fd.QG, md);
+             Rd ? Fd.renderPaused(Od) : Fd.render(Od), null === (Wd = dd.qE.getState(Fd.QG, "genericLifeform")) || void 0 === Wd || Wd.followLimbs(Rd)
```

#### 1237. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9955` → after: `L10092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10092) · [Before (L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9955)

```diff
-   39867: (rr, Sr, Qr) => {
+   39925: (dd, Od, md) => {
```

#### 1238. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9964` → after: `L10101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10101) · [Before (L9964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9964)

```diff
-     var Zr = Qr(388),
+     var Wd = md(415),
```

#### 1239. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9966-L9972` → after: `L10103-L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10103-L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10103-L10109) · [Before (L9966-L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9966-L9972)

```diff
-       ar = Qr(39609),
-       jr = Qr(38679),
-       Ir = Qr(38993),
-       fr = Qr(39839),
-       Er = Qr(38813);
-     const pr = new jr.d(1, 0, 0, .5),
-       xr = new jr.d(0, 0, 0, 0),
+       Rd = md(39645),
+       Xd = md(38736),
+       Kd = md(39033),
+       hd = md(39902),
+       vd = md(38856);
+     const Qd = new Xd.b(1, 0, 0, .5),
+       td = new Xd.b(0, 0, 0, 0),
```

#### 1240. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9978-L9979` → after: `L10115-L10116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10115-L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10115-L10116) · [Before (L9978-L9979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9978-L9979)

```diff
-       const ar = null !== rr && void 0 !== rr ? rr : Wr().create();
-       return Wr().max(ar, null !== Sr && void 0 !== Sr ? Sr : Wr().ZERO, null !== Qr && void 0 !== Qr ? Qr : Wr().ZERO), Wr().max(ar, ar, null !== Zr && void 0 !== Zr ? Zr : Wr().ZERO), Wr().scale(ar, ar, mr), ar
+       const Rd = null !== dd && void 0 !== dd ? dd : Fd().create();
+       return Fd().max(Rd, null !== Od && void 0 !== Od ? Od : Fd().ZERO, null !== md && void 0 !== md ? md : Fd().ZERO), Fd().max(Rd, Rd, null !== Wd && void 0 !== Wd ? Wd : Fd().ZERO), Fd().scale(Rd, Rd, od), Rd
```

#### 1241. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9984` → after: `L10121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10121) · [Before (L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9984)

```diff
-       const ar = null === (Wr = rr.YB.lQr(Sr)) || void 0 === Wr ? void 0 : Wr._heldLightTintFloor;
+       const Rd = null === (Fd = dd.qE.oWd(Od)) || void 0 === Fd ? void 0 : Fd._heldLightTintFloor;
```

#### 1242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9990` → after: `L10127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10127) · [Before (L9990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9990)

```diff
-         this.lifeformType = null, this.JC = null, this.tZr = null, this.lastHurtTime = -1 / 0, this.overlayColourOverride = null, this.isReplayLocalPlayer = !1, this._hurtOverlaySet = !1, this._defaultOverlayColour = xr, this._lightLevels = Ir.e.slice(), this._transformPaused = ! … [truncated]
+         this.lifeformType = null, this.JA = null, this.fWd = null, this.lastHurtTime = -1 / 0, this.overlayColourOverride = null, this.isReplayLocalPlayer = !1, this._hurtOverlaySet = !1, this._defaultOverlayColour = td, this._lightLevels = Kd.e.slice(), this._transformPaused = ! … [truncated]
```

#### 1243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9993` → after: `L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10130) · [Before (L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L9993)

```diff
-         this.tZr.zZr && (this._transformPaused = rr, rr || ar.c[this.lifeformType].meshApi.updateTransform(this.XM, this.JC))
+         this.fWd.MWd && (this._transformPaused = dd, dd || Rd.c[this.lifeformType].meshApi.updateTransform(this.QG, this.JA))
```

#### 1244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10006-L10007` → after: `L10143-L10144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10143-L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10143-L10144) · [Before (L10006-L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10006-L10007)

```diff
-         nB: function(Sr, Qr) {
-           const Zr = rr.mq - 300;
+         yE: function(Od, md) {
+           const Wd = dd.pB - 300;
```

#### 1245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10010-L10013` → after: `L10147-L10150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10147-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10147-L10150) · [Before (L10010-L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10010-L10013)

```diff
-               JC: Sr,
-               tZr: Qr
-             } = jr, Ir = Qr.zZr;
-             if (!Ir && jr.XM !== rr.fC && !jr.isReplayLocalPlayer) continue;
+               JA: Od,
+               fWd: md
+             } = Xd, Kd = md.MWd;
+             if (!Kd && Xd.QG !== dd.YV && !Xd.isReplayLocalPlayer) continue;
```

#### 1246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10018-L10019` → after: `L10155-L10156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10155-L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10155-L10156) · [Before (L10018-L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10018-L10019)

```diff
-                 Qr = null !== (Wr = jr.overlayColourOverride) && void 0 !== Wr ? Wr : xr;
-               jr._hurtOverlaySet !== rr ? (mr.updateMeshOverlayColour(Sr, rr ? pr : Qr), jr._hurtOverlaySet = rr, jr._defaultOverlayColour = Qr) : Qr !== jr._defaultOverlayColour && (jr._defaultOverlayColour = Qr, rr || mr.updateMeshOverlayColour(Sr, Qr))
+                 md = null !== (Fd = Xd.overlayColourOverride) && void 0 !== Fd ? Fd : td;
+               Xd._hurtOverlaySet !== dd ? (od.updateMeshOverlayColour(Od, dd ? Qd : md), Xd._hurtOverlaySet = dd, Xd._defaultOverlayColour = md) : md !== Xd._defaultOverlayColour && (Xd._defaultOverlayColour = md, dd || od.updateMeshOverlayColour(Od, md))
```

#### 1247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10021` → after: `L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10158) · [Before (L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10021)

```diff
-             if (rr.Ox.ct) {
+             if (dd.gt.lH) {
```

#### 1248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10023-L10025` → after: `L10160-L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10160-L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10160-L10162) · [Before (L10023-L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10023-L10025)

```diff
-                 Zr = (0, fr.d)(rr, jr.XM),
-                 Wr = tr(rr, jr.XM, Zr, hr);
-               (0, Er.$)(Qr[0], Qr[1], Qr[2], Qr[3], Wr) && (Qr.set(Wr), mr.updateMeshLightLevels(Sr, Qr))
+                 Wd = (0, hd.j)(dd, Xd.QG),
+                 Fd = Hd(dd, Xd.QG, Wd, yd);
+               (0, vd.Q)(md[0], md[1], md[2], md[3], Fd) && (md.set(Fd), od.updateMeshLightLevels(Od, md))
```

#### 1249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10032` → after: `L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10169) · [Before (L10032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10032)

```diff
-   39652: (rr, Sr, Qr) => {
+   39698: (dd, Od, md) => {
```

#### 1250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10039` → after: `L10176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10176) · [Before (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10039)

```diff
-     var Zr = Qr(388),
+     var Wd = md(415),
```

#### 1251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10041-L10043` → after: `L10178-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10178-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10178-L10180) · [Before (L10041-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10041-L10043)

```diff
-       ar = Qr(39286),
-       jr = Qr(5229),
-       Ir = Qr(2364);
+       Rd = md(39327),
+       Xd = md(5141),
+       Kd = md(2386);
```

#### 1252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10046` → after: `L10183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10183) · [Before (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10046)

```diff
-         this.zoomXYOffsetLerpFactor = .2, this.gm = void 0, this.gm = rr
+         this.zoomXYOffsetLerpFactor = .2, this.zo = void 0, this.zo = dd
```

#### 1253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10052` → after: `L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10189) · [Before (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10052)

```diff
-         const rr = this.gm.Ox.r_().S_;
+         const dd = this.zo.gt.l_().k_;
```

#### 1254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10056` → after: `L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10193) · [Before (L10056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10056)

```diff
-         const rr = this.gm.Ox.r_().S_;
+         const dd = this.zo.gt.l_().k_;
```

#### 1255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10093` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10230) · [Before (L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10093)

```diff
-           if (rr.zoom >= this.gm.camera.MJ) return void this._adjustTowardsZoomLevel(rr)
+           if (dd.zoom >= this.zo.camera.rM) return void this._adjustTowardsZoomLevel(dd)
```

#### 1256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10100` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10237) · [Before (L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10100)

```diff
-         const Zr = this.gm.bloxd.qD(this.gm.fC),
+         const Wd = this.zo.bloxd.T_(this.zo.YV),
```

#### 1257. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10107-L10120` → after: `L10244-L10257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10244-L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10244-L10257) · [Before (L10107-L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10107-L10120)

```diff
-           Ir = this.gm.Ox.r_().S_;
-         Math.abs(Ir[0] - Wr) < 1e-4 ? jr.x = Wr : jr.x = Ir[0] + (Wr - Ir[0]) * this.zoomXYOffsetLerpFactor, Math.abs(Ir[1] - ar) < 1e-4 ? jr.y = ar : jr.y = Ir[1] + (ar - Ir[1]) * this.zoomXYOffsetLerpFactor, Ir[0] = jr.x, Ir[1] = jr.y, this.gm.camera.targetX = jr.x, this.gm.cam … [truncated]
-       }
-     }
-     var pr = Qr(39514),
-       xr = Qr(379),
-       mr = Qr(34),
-       Nr = Qr(2383),
-       Ur = Qr(39657),
-       tr = Qr(39859),
-       hr = Qr(38555),
-       zr = Qr(38849),
-       Yr = Qr(39853),
-       nr = Qr(38616);
+           Kd = this.zo.gt.l_().k_;
+         Math.abs(Kd[0] - Fd) < 1e-4 ? Xd.x = Fd : Xd.x = Kd[0] + (Fd - Kd[0]) * this.zoomXYOffsetLerpFactor, Math.abs(Kd[1] - Rd) < 1e-4 ? Xd.y = Rd : Xd.y = Kd[1] + (Rd - Kd[1]) * this.zoomXYOffsetLerpFactor, Kd[0] = Xd.x, Kd[1] = Xd.y, this.zo.camera.targetX = Xd.x, this.zo.cam … [truncated]
+       }
+     }
+     var Qd = md(39575),
+       td = md(405),
+       od = md(32),
+       Nd = md(2402),
+       qd = md(39705),
+       Hd = md(39919),
+       yd = md(38627),
+       bd = md(38907),
+       Td = md(39911),
+       pd = md(38671);
```

#### 1258. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10127-L10128` → after: `L10264-L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10264-L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10264-L10265) · [Before (L10127-L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10127-L10128)

```diff
-     var Or = Qr(39580);
-     const Lr = new hr.kU(1, 0, 0),
+     var xd = md(39627);
+     const Bd = new yd.Cq(1, 0, 0),
```

#### 1259. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10132` → after: `L10269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10269) · [Before (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10132)

```diff
-     class Hr extends Ur.e {
+     class Vd extends qd.b {
```

#### 1260. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10134` → after: `L10271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10271) · [Before (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10134)

```diff
-         super(rr, Sr, Qr, Wr), this.breakingItem = void 0, this.firstPersonMesh = null, this.firstPersonPosOffset = new hr.kU(0, 0, 0), this.firstPersonRotation = new hr.kU(0, 0, 0), this.drivingShare = 0, this.breakingItem = Zr, this.heldItemState = Sr
+         super(dd, Od, md, Fd), this.breakingItem = void 0, this.firstPersonMesh = null, this.firstPersonPosOffset = new yd.Cq(0, 0, 0), this.firstPersonRotation = new yd.Cq(0, 0, 0), this.drivingShare = 0, this.breakingItem = Wd, this.heldItemState = Od
```

#### 1261. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10140` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10277) · [Before (L10140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10140)

```diff
-         super.selected(rr, Sr), this.breakingItem.selected(rr), this.typeObj = rr, this.disposeOfMeshes(), this.firstPersonMesh = this.typeObj.getHeldMesh(Sr), this.firstPersonMesh.VK(!1), this.ipr()
+         super.selected(dd, Od), this.breakingItem.selected(dd), this.typeObj = dd, this.disposeOfMeshes(), this.firstPersonMesh = this.typeObj.getHeldMesh(Od), this.firstPersonMesh.rY(!1), this.PQd()
```

#### 1262. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10142-L10143` → after: `L10279-L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10279-L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10279-L10280) · [Before (L10142-L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10142-L10143)

```diff
-       vZr() {
-         return super.vZr(), this.trySwingBlock(Date.now()), this.breakingItem.vZr()
+       KFd() {
+         return super.KFd(), this.trySwingBlock(Date.now()), this.breakingItem.KFd()
```

#### 1263. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10148-L10149` → after: `L10285-L10286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10285-L10286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10285-L10286) · [Before (L10148-L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10148-L10149)

```diff
-       OZr() {
-         return this.trySwingBlock(Date.now()), this.breakingItem.OZr()
+       hFd() {
+         return this.trySwingBlock(Date.now()), this.breakingItem.hFd()
```

#### 1264. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10151-L10152` → after: `L10288-L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10288-L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10288-L10289) · [Before (L10151-L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10151-L10152)

```diff
-       BZr() {
-         return this.breakingItem.BZr()
+       RFd() {
+         return this.breakingItem.RFd()
```

#### 1265. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10154-L10155` → after: `L10291-L10292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10291-L10292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10291-L10292) · [Before (L10154-L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10154-L10155)

```diff
-       yZr() {
-         return super.yZr(), this.breakingItem.yZr()
+       FFd() {
+         return super.FFd(), this.breakingItem.FFd()
```

#### 1266. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10158` → after: `L10295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10295) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10158)

```diff
-         this.breakingItem.lx(rr, Sr) && this.trySwingBlock(Sr)
+         this.breakingItem.Et(dd, Od) && this.trySwingBlock(Od)
```

#### 1267. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10163` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10300) · [Before (L10163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10163)

```diff
-             const rr = this.gm.YB.jQr(this.heldItemState.XM);
+             const dd = this.zo.qE.Pmd(this.heldItemState.QG);
```

#### 1268. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10171-L10172` → after: `L10308-L10309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10308-L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10308-L10309) · [Before (L10171-L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10171-L10172)

```diff
-         const Sr = new hr.kU(.2 + this.firstPersonPosOffset.x, -.15 + this.firstPersonPosOffset.y, .17 + this.firstPersonPosOffset.z),
-           Qr = new hr.kU(0, -3 * Math.PI / 7, -Math.PI / 6).add(this.firstPersonRotation);
+         const Od = new yd.Cq(.2 + this.firstPersonPosOffset.x, -.15 + this.firstPersonPosOffset.y, .17 + this.firstPersonPosOffset.z),
+           md = new yd.Cq(0, -3 * Math.PI / 7, -Math.PI / 6).add(this.firstPersonRotation);
```

#### 1269. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10176` → after: `L10313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10313) · [Before (L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10176)

```diff
-         if (Wr && (Zr = (0, Yr.j)(Qr, Wr, lr), Qr.Srr(0)), rr - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
+         if (Fd && (Wd = (0, Td.i)(md, Fd, Sd), md.Bdd(0)), dd - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
```

#### 1270. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10187` → after: `L10324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10324) · [Before (L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10187)

```diff
-         Zr ? (0, zr.q)(this.firstPersonMesh, Zr.x, Zr.y, Zr.z, Zr.w) : (this.firstPersonMesh.rotationQuaternion = null, this.firstPersonMesh.rotation.set(Qr.x, Qr.y, Qr.z)), (0, zr.p)(this.firstPersonMesh, Sr.x, Sr.y, Sr.z)
+         Wd ? (0, bd.s)(this.firstPersonMesh, Wd.x, Wd.y, Wd.z, Wd.w) : (this.firstPersonMesh.rotationQuaternion = null, this.firstPersonMesh.rotation.set(md.x, md.y, md.z)), (0, bd.q)(this.firstPersonMesh, Od.x, Od.y, Od.z)
```

#### 1271. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10190` → after: `L10327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10327) · [Before (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10190)

```diff
-         if (this.reposeIfDrivingChanged(), !this.gm.Ox.ct) return;
+         if (this.reposeIfDrivingChanged(), !this.zo.gt.lH) return;
```

#### 1272. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10192` → after: `L10329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10329) · [Before (L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10192)

```diff
-         null !== Sr && this.gm.Ox.bC.getActuallyVisible(Sr) && this._updateHeldMeshLighting()
+         null !== Od && this.zo.gt.HA.getActuallyVisible(Od) && this._updateHeldMeshLighting()
```

#### 1273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10196` → after: `L10333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10333) · [Before (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10196)

```diff
-         return null !== (rr = null === (Sr = (0, Or.getRigController)(this.gm, this.heldItemState.XM)) || void 0 === Sr ? void 0 : Sr.stateWeight("arms", "driving")) && void 0 !== rr ? rr : 0
+         return null !== (dd = null === (Od = (0, xd.getRigController)(this.zo, this.heldItemState.QG)) || void 0 === Od ? void 0 : Od.stateWeight("arms", "driving")) && void 0 !== dd ? dd : 0
```

#### 1274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10201` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10338) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10201)

```diff
-         rr !== this.drivingShare && (Math.abs(rr - this.drivingShare) > .01 || 0 === rr || 1 === rr) && (this.drivingShare = rr, this.ipr())
+         dd !== this.drivingShare && (Math.abs(dd - this.drivingShare) > .01 || 0 === dd || 1 === dd) && (this.drivingShare = dd, this.PQd())
```

#### 1275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10206-L10207` → after: `L10343-L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10343-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10343-L10344) · [Before (L10206-L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10206-L10207)

```diff
-       cpr() {
-         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.VK(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.gm.Ox.camera, this.firstPersonMesh.Tx.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
+       zQd() {
+         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.rY(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.zo.gt.camera, this.firstPersonMesh.Tt.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
```

#### 1276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10210` → after: `L10347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10347) · [Before (L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10210)

```diff
-         this.firstPersonMesh.VK(!1);
+         this.firstPersonMesh.rY(!1);
```

#### 1277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10216` → after: `L10353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10353) · [Before (L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10216)

```diff
-           if ((0, Yr.g)(this.typeObj, Sr.itemOffset, this.thirdPersonPose), this.drivingShare = this.holderDrivingShare(), this.drivingShare > 0) {
+           if ((0, Td.f)(this.typeObj, Od.itemOffset, this.thirdPersonPose), this.drivingShare = this.holderDrivingShare(), this.drivingShare > 0) {
```

#### 1278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10218` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10355) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10218)

```diff
-             ar = rr.rotation, jr = rr.quaternion, Ir = rr.usesQuaternion, fr = this.drivingShare, Er = rr.quaternion, (0, nr.p)(Kr[0] * fr, Kr[1] * fr, Kr[2] * fr, yr), hr.Matrix.FromQuaternionToRef(hr.Quaternion.FromArrayToRef(yr, 0, Br), Tr), Tr.transposeToRef(Tr), Ir ? hr.Matr … [truncated]
+             Rd = dd.rotation, Xd = dd.quaternion, Kd = dd.usesQuaternion, hd = this.drivingShare, vd = dd.quaternion, (0, pd.l)(gd[0] * hd, gd[1] * hd, gd[2] * hd, wd), yd.Matrix.FromQuaternionToRef(yd.Quaternion.FromArrayToRef(wd, 0, Ed), Jd), Jd.transposeToRef(Jd), Kd ? yd.Matr … [truncated]
```

#### 1279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10222` → after: `L10359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10359) · [Before (L10222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10222)

```diff
-           const [rr, Qr, ar] = null !== (Zr = Sr.itemOffset) && void 0 !== Zr ? Zr : [0, 0, 0], [jr, Ir, fr] = null !== (Wr = Sr.rotation) && void 0 !== Wr ? Wr : [0, 0, 0];
+           const [dd, md, Rd] = null !== (Wd = Od.itemOffset) && void 0 !== Wd ? Wd : [0, 0, 0], [Xd, Kd, hd] = null !== (Fd = Od.rotation) && void 0 !== Fd ? Fd : [0, 0, 0];
```

#### 1280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10232` → after: `L10369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10369) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10232)

```diff
-           Tx: Er
+           Tt: vd
```

#### 1281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10242-L10244` → after: `L10379-L10381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10379-L10381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10379-L10381) · [Before (L10242-L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10242-L10244)

```diff
-           hr.kU.TransformCoordinatesFromFloatsToRef(mr, Nr, Ur, rr, Ir)
-         } else Ir.Hrr(mr, Nr, Ur);
-         pr ? (Er.Hrr(xr, xr, xr), fr.Hrr(Zr, Math.PI / 2 + Wr, -Math.PI / 2 + ar)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (Er.Hrr(xr, -xr, xr), fr.Hrr(Math.PI + Zr, Math.PI / 2 + Wr, .35 * Math.PI + ar)) : (Er.Hrr(xr, -xr, xr), fr.Hrr(Math.PI + Zr, Math … [truncated]
+           yd.Cq.TransformCoordinatesFromFloatsToRef(od, Nd, qd, dd, Kd)
+         } else Kd.KOd(od, Nd, qd);
+         Qd ? (vd.KOd(td, td, td), hd.KOd(Wd, Math.PI / 2 + Fd, -Math.PI / 2 + Rd)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (vd.KOd(td, -td, td), hd.KOd(Math.PI + Wd, Math.PI / 2 + Fd, .35 * Math.PI + Rd)) : (vd.KOd(td, -td, td), hd.KOd(Math.PI + Wd, Math … [truncated]
```

#### 1282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10257-L10261` → after: `L10394-L10398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10394-L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10394-L10398) · [Before (L10257-L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10257-L10261)

```diff
-     var qr = Qr(39867),
-       Rr = Qr(39609),
-       gr = Qr(39307),
-       Cr = Qr(5779),
-       Mr = Qr(5830);
+     var Ad = md(39925),
+       rd = md(39645),
+       Gd = md(39347),
+       nd = md(5733),
+       Ld = md(5769);
```

#### 1283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10272` → after: `L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10409) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10272)

```diff
-       if ((null === (Zr = Cr.j[rr]) || void 0 === Zr ? void 0 : Zr.meta.rootId) !== Sr) return !1;
+       if ((null === (Wd = nd.i[dd]) || void 0 === Wd ? void 0 : Wd.meta.rootId) !== Od) return !1;
```

#### 1284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10277-L10278` → after: `L10414-L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10414-L10415) · [Before (L10277-L10278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10277-L10278)

```diff
-         } = Cr.j[rr].meta;
-         return Sr === Mr.b.bot ? [0, 1, 0] : Sr === Mr.b.top ? [0, -1, 0] : Gr[Qr]
+         } = nd.i[dd].meta;
+         return Od === Ld.c.bot ? [0, 1, 0] : Od === Ld.c.top ? [0, -1, 0] : Pd[md]
```

#### 1285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10285-L10286` → after: `L10422-L10423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10422-L10423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10422-L10423) · [Before (L10285-L10286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10285-L10286)

```diff
-       const Qr = null === (Sr = Cr.j[rr]) || void 0 === Sr ? void 0 : Sr.slabFullBlock;
-       return void 0 === Qr ? null : Cr.j[Qr].id
+       const md = null === (Od = nd.i[dd]) || void 0 === Od ? void 0 : Od.slabFullBlock;
+       return void 0 === md ? null : nd.i[md].id
```

#### 1286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10301-L10310` → after: `L10438-L10447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10438-L10447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10438-L10447) · [Before (L10301-L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10301-L10310)

```diff
-     var ir = Qr(39907),
-       wr = Qr(5838),
-       cr = Qr(39715),
-       Fr = Qr(39113),
-       or = Qr(2484),
-       br = Qr(38993),
-       Jr = Qr(26),
-       Dr = Qr(1518),
-       dr = Qr(39533),
-       sr = Qr(39538);
+     var Dd = md(39951),
+       ed = md(5778),
+       Id = md(39750),
+       ld = md(39142),
+       Cd = md(2497),
+       Zd = md(39033),
+       kd = md(29),
+       fd = md(1498),
+       Md = md(39593),
+       dO = md(39598);
```

#### 1287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10317-L10318` → after: `L10454-L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10454-L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10454-L10455) · [Before (L10317-L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10317-L10318)

```diff
-             const Zr = (0, Nr.e)();
-             return Zr.Ex.uF(Zr.qx.sF(rr, Sr, Qr))
+             const Wd = (0, Nd.c)();
+             return Wd.Rt.Wk(Wd.Bt.eZ(dd, Od, md))
```

#### 1288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10323` → after: `L10460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10460) · [Before (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10323)

```diff
-           return !(null === (rr = (0, Nr.e)().NK) || void 0 === rr || !rr.ezBridging) && Jr.c.get("clientEscMenuOptions").ezBridging
+           return !(null === (dd = (0, Nd.c)().EY) || void 0 === dd || !dd.ezBridging) && kd.e.get("clientEscMenuOptions").ezBridging
```

#### 1289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10328-L10331` → after: `L10465-L10468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10465-L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10465-L10468) · [Before (L10328-L10331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10328-L10331)

```diff
-           const Zr = (0, Nr.e)();
-           if (Zr.xSr) return null;
-           if (Zr.mSr) return null;
-           const Wr = Zr.YB.JY(Zr.fC),
+           const Wd = (0, Nd.c)();
+           if (Wd.nOd) return null;
+           if (Wd.LOd) return null;
+           const Fd = Wd.qE.hY(Wd.YV),
```

#### 1290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10333` → after: `L10470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10470) · [Before (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10333)

```diff
-             jr = Jr.c.get("isTouchScreen") || (0, Dr.j)() ? void 0 : Wr,
+             Xd = kd.e.get("isTouchScreen") || (0, fd.m)() ? void 0 : Fd,
```

#### 1291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10335-L10339` → after: `L10472-L10476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10472-L10476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10472-L10476) · [Before (L10335-L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10335-L10339)

```diff
-           Zr.dD(null !== (Sr = Zr.OSr) && void 0 !== Sr ? Sr : Zr.camera.KD(), Ir);
-           const fr = null !== (Qr = Zr.LSr) && void 0 !== Qr ? Qr : Zr.camera.Y1(),
-             Er = (Zr.OSr ? Zr.camera.MJ : 0) + (0, Nr.c)().getBlockReach(Zr.fC),
-             pr = Zr.pickBlock(Ir, fr, Er, ((Sr, Qr, Wr, Ir) => !!Zr.pSr(Sr) || !(Wr > ar || Zr.YB.dSr(Qr, Wr, Ir, Zr.Ex.RV(rr))) && (!!dr.c.has(Qr, Wr, Ir) || (0, gr.p)(this.isSolidAt, Qr, Wr, Ir, jr))));
-           if (!pr || Zr.pSr(pr.e_)) return null;
+           Wd.E_(null !== (Od = Wd.Omd) && void 0 !== Od ? Od : Wd.camera.q_(), Kd);
+           const hd = null !== (md = Wd.mmd) && void 0 !== md ? md : Wd.camera.B_(),
+             vd = (Wd.Omd ? Wd.camera.rM : 0) + (0, Nd.b)().getBlockReach(Wd.YV),
+             Qd = Wd.pickBlock(Kd, hd, vd, ((Od, md, Fd, Kd) => !!Wd.GOd(Od) || !(Fd > Rd || Wd.qE.Bmd(md, Fd, Kd, Wd.Rt.mC(dd))) && (!!Md.c.has(md, Fd, Kd) || (0, Gd.n)(this.isSolidAt, md, Fd, Kd, Xd))));
+           if (!Qd || Wd.GOd(Qd.K9)) return null;
```

#### 1292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10342-L10343` → after: `L10479-L10480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10479-L10480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10479-L10480) · [Before (L10342-L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10342-L10343)

```diff
-           const xr = (0, gr.u)(Ir, fr, pr.position);
-           return xr > Er ? null : this.canPlaceAt(pr.position, pr.e_, rr) ? Zr.eN(Ir, fr, xr + gr.b, Zr.pSr) ? null : {
+           const td = (0, Gd.q)(Kd, hd, Qd.position);
+           return td > vd ? null : this.canPlaceAt(Qd.position, Qd.K9, dd) ? Wd.xN(Kd, hd, td + Gd.b, Wd.GOd) ? null : {
```

#### 1293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10350-L10352` → after: `L10487-L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10487-L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10487-L10489) · [Before (L10350-L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10350-L10352)

```diff
-           const Sr = (0, Nr.e)();
-           if (!rr || Sr.eSr) return void this.hide();
-           this.hadTargetLastFrame = !0, null !== rr.tower || Sr.YSr || Sr.Ox.ySr(!1, null, null);
+           const Od = (0, Nd.c)();
+           if (!dd || Od.COd) return void this.hide();
+           this.hadTargetLastFrame = !0, null !== dd.tower || Od.IOd || Od.gt.kOd(!1, null, null);
```

#### 1294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10354-L10355` → after: `L10491-L10492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10491-L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10491-L10492) · [Before (L10354-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10354-L10355)

```diff
-             Zr = Sr.sSr(rr.cell, null, ur);
-           (0, zr.p)(Qr, Zr[0] + .5, Zr[1] + .5, Zr[2] + .5), (0, br.i)(Sr, Qr, rr.cell[0], rr.cell[1], rr.cell[2]), Qr.VK(!0)
+             Wd = Od.Smd(dd.cell, null, OO);
+           (0, bd.q)(md, Wd[0] + .5, Wd[1] + .5, Wd[2] + .5), (0, Zd.g)(Od, md, dd.cell[0], dd.cell[1], dd.cell[2]), md.rY(!0)
```

#### 1295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10358` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10495) · [Before (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10358)

```diff
-           return Sr !== Qr && (0, Nr.c)().playerCanPlaceItem((0, Nr.e)().fC, rr[0], rr[1], rr[2], Qr)
+           return Od !== md && (0, Nd.b)().playerCanPlaceItem((0, Nd.c)().YV, dd[0], dd[1], dd[2], md)
```

#### 1296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10362` → after: `L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10499) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10362)

```diff
-           null === (rr = this.ghostMesh) || void 0 === rr || rr.VK(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, Nr.e)().USr(!0))
+           null === (dd = this.ghostMesh) || void 0 === dd || dd.rY(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, Nd.c)().zOd(!0))
```

#### 1297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10365` → after: `L10502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10502) · [Before (L10365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10365)

```diff
-           return this.ghostMesh || (this.ghostMesh = (0, sr.g)((0, Nr.e)())), this.ghostMesh
+           return this.ghostMesh || (this.ghostMesh = (0, dO.g)((0, Nd.c)())), this.ghostMesh
```

#### 1298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10368-L10371` → after: `L10505-L10508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10505-L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10505-L10508) · [Before (L10368-L10371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10368-L10371)

```diff
-     var ZS = Qr(39876),
-       WS = Qr(39885),
-       aS = Qr(7416),
-       jS = Qr(300);
+     var RO = md(39931),
+       XO = md(39933),
+       KO = md(7403),
+       hO = md(320);
```

#### 1299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10375-L10376` → after: `L10512-L10513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10512-L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10512-L10513) · [Before (L10375-L10376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10375-L10376)

```diff
-         const Sr = (0, jS.g)();
-         return null !== Sr && null !== (rr = (0, Nr.e)().NK) && void 0 !== rr && rr.ezTowering && Jr.c.get("clientEscMenuOptions").ezTowering ? Sr : null
+         const Od = (0, hO.h)();
+         return null !== Od && null !== (dd = (0, Nd.c)().EY) && void 0 !== dd && dd.ezTowering && kd.e.get("clientEscMenuOptions").ezTowering ? Od : null
```

#### 1300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10379-L10380` → after: `L10516-L10517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10516-L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10516-L10517) · [Before (L10379-L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10379-L10380)

```diff
-         const Qr = (0, Nr.e)(),
-           Zr = Qr.xSr;
+         const md = (0, Nd.c)(),
+           Wd = md.nOd;
```

#### 1301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10382-L10387` → after: `L10519-L10524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10519-L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10519-L10524) · [Before (L10382-L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10382-L10387)

```diff
-         if (!Qr.Ex.uF(Zr.e_) || Cr.j[Zr.e_].canBePlacedOver) return null;
-         const Wr = Qr.fC,
-           [ar, jr, Ir] = Zr.Kh;
-         if (jr !== Math.floor(Qr.YB.JY(Wr)[1])) return null;
-         const fr = Qr.YB.jQr(Wr);
-         if (0 !== fr.speed || null !== (0, Nr.c)().getRiddenVehicleEId(Wr)) return null;
+         if (!md.Rt.Wk(Wd.K9) || nd.i[Wd.K9].canBePlacedOver) return null;
+         const Fd = md.YV,
+           [Rd, Xd, Kd] = Wd.Uy;
+         if (Xd !== Math.floor(md.qE.hY(Fd)[1])) return null;
+         const hd = md.qE.Pmd(Fd);
+         if (0 !== hd.speed || null !== (0, Nd.b)().getRiddenVehicleEId(Fd)) return null;
```

#### 1302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10390` → after: `L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10527) · [Before (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10390)

```diff
-         if (Qr.YB.cV(Wr).resting[1] >= 0 && !0 !== Qr.Ex.XN(Zr.e_)) return null;
+         if (md.qE.pC(Fd).resting[1] >= 0 && !0 !== md.Rt.GN(Wd.K9)) return null;
```

#### 1303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10392` → after: `L10529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10529) · [Before (L10392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10392)

```diff
-         const pr = (rr, Sr, Zr) => Qr.VY([rr, Sr, Zr]),
+         const Qd = (dd, Od, Wd) => md.mY([dd, Od, Wd]),
```

#### 1304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10394-L10396` → after: `L10531-L10533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10531-L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10531-L10533) · [Before (L10394-L10396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10394-L10396)

```diff
-         if (0 !== xr && !Cr.j[xr].HN && !Cr.j[xr].canBePlacedOver || Vr(pr, Zr.position, Zr.normal, rr)) return null;
-         const mr = Qr.Ex.RV(rr);
-         return Qr.YB.dSr(ar, jr, Ir, mr) && (0, Nr.c)().playerCanPlaceItem(Wr, ar, jr, Ir, rr, !0) && this.liftsOnto(ar, jr, Ir, rr) ? {
+         if (0 !== td && !nd.i[td].LN && !nd.i[td].canBePlacedOver || jd(Qd, Wd.position, Wd.normal, dd)) return null;
+         const od = md.Rt.mC(dd);
+         return md.qE.Bmd(Rd, Xd, Kd, od) && (0, Nd.b)().playerCanPlaceItem(Fd, Rd, Xd, Kd, dd, !0) && this.liftsOnto(Rd, Xd, Kd, dd) ? {
```

#### 1305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10403-L10407` → after: `L10540-L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10540-L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10540-L10544) · [Before (L10403-L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10403-L10407)

```diff
-         const rr = (0, Nr.e)(),
-           Sr = rr.fC,
-           Qr = rr.YB.ASr(Sr),
-           Zr = (0, Nr.c)();
-         return !Qr._flying && !(0, aS.d)(!0 === Zr.getClientPredictedOption(Sr, "creative"), Qr.physicsState.type) && Zr.getClientPredictedOption(Sr, "jumpAmount") > 0
+         const dd = (0, Nd.c)(),
+           Od = dd.YV,
+           md = dd.qE.Hmd(Od),
+           Wd = (0, Nd.b)();
+         return !md._flying && !(0, KO.g)(!0 === Wd.getClientPredictedOption(Od, "creative"), md.physicsState.type) && Wd.getClientPredictedOption(Od, "jumpAmount") > 0
```

#### 1306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10410` → after: `L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10547) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10410)

```diff
-         const Wr = (0, Nr.e)(),
+         const Fd = (0, Nd.c)(),
```

#### 1307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10413-L10414` → after: `L10550-L10551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10550-L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10550-L10551) · [Before (L10413-L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10413-L10414)

```diff
-             qx: jr,
-             um: Ir
+             Bt: Xd,
+             XN: Kd
```

#### 1308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10416` → after: `L10553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10553) · [Before (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10416)

```diff
-           fr = Wr.YB.cV(Wr.fC);
+           hd = Fd.qE.pC(Fd.YV);
```

#### 1309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10418` → after: `L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10555) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10418)

```diff
-         return (0, ZS.h)(((ar, fr, Er) => {
+         return (0, RO.i)(((Rd, hd, vd) => {
```

#### 1310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10422-L10425` → after: `L10559-L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10559-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10559-L10562) · [Before (L10422-L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10422-L10425)

```diff
-           if (pr !== rr || xr !== Sr || mr !== Qr) return jr.SN(pr, xr, mr);
-           const Nr = Wr.Ex.XN(Zr);
-           return (0, WS.f)(rr, Sr, Qr, Zr, Nr, jr.GV, jr.uQ, jr.VV)
-         }), ar.zV, fr.Om) > 0
+           if (Qd !== dd || td !== Od || od !== md) return Xd.hN(Qd, td, od);
+           const Nd = Fd.Rt.GN(Wd);
+           return (0, XO.i)(dd, Od, md, Wd, Nd, Xd.WC, Xd.Zm, Xd.tC)
+         }), Rd.lD, hd.Bo) > 0
```

#### 1311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10444-L10445` → after: `L10581-L10582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10581-L10582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10581-L10582) · [Before (L10444-L10445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10444-L10445)

```diff
-         const Wr = (0, Nr.e)(),
-           ar = Wr.fC,
+         const Fd = (0, Nd.c)(),
+           Rd = Fd.YV,
```

#### 1312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10449` → after: `L10586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10586) · [Before (L10449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10449)

```diff
-           } = Wr.YB.gJ(ar);
+           } = Fd.qE.gM(Rd);
```

#### 1313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10454` → after: `L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10591) · [Before (L10454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10454)

```diff
-         }(jr, Ir, Zr.cell) || 0 !== Wr.YB.jQr(ar).speed || null !== (0, Nr.c)().getRiddenVehicleEId(ar) || !Qr() ? (this.pending = null, null) : jr[1] >= Zr.cell[1] + 1 ? (this.pending = null, Zr.cell) : (ES(), null)
+         }(Xd, Kd, Wd.cell) || 0 !== Fd.qE.Pmd(Rd).speed || null !== (0, Nd.b)().getRiddenVehicleEId(Rd) || !md() ? (this.pending = null, null) : Xd[1] >= Wd.cell[1] + 1 ? (this.pending = null, Wd.cell) : (tO(), null)
```

#### 1314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10459-L10460` → after: `L10596-L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10596-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10596-L10597) · [Before (L10459-L10460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10459-L10460)

```diff
-       const rr = (0, Nr.e)();
-       rr.YB.cV(rr.fC).resting[1] < 0 && (rr.YB.gQr().towerJump = !0)
+       const dd = (0, Nd.c)();
+       dd.qE.pC(dd.YV).resting[1] < 0 && (dd.qE.TWd().towerJump = !0)
```

#### 1315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10462-L10463` → after: `L10599-L10600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10599-L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10599-L10600) · [Before (L10462-L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10462-L10463)

```diff
-     var pS = Qr(39688),
-       xS = Qr(39447);
+     var oO = md(39725),
+       NO = md(39502);
```

#### 1316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10466` → after: `L10603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10603) · [Before (L10466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10466)

```diff
-         super(...arguments), this.assistTarget = null, this.towerJump = new fS, this.holdsBlock = () => null !== this.getBlockIdToPlace(), this.blockAt = (rr, Sr, Qr) => this.gm.VY([rr, Sr, Qr])
+         super(...arguments), this.assistTarget = null, this.towerJump = new QO, this.holdsBlock = () => null !== this.getBlockIdToPlace(), this.blockAt = (dd, Od, md) => this.zo.mY([dd, Od, md])
```

#### 1317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10468-L10470` → after: `L10605-L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10605-L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10605-L10607) · [Before (L10468-L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10468-L10470)

```diff
-       Fpr() {
-         const rr = super.Fpr();
-         return rr.tookAction || rr.preventPlacement ? rr : (this.place(), {
+       cQd() {
+         const dd = super.cQd();
+         return dd.tookAction || dd.preventPlacement ? dd : (this.place(), {
```

#### 1318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10475-L10477` → after: `L10612-L10614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10612-L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10612-L10614) · [Before (L10475-L10477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10475-L10477)

```diff
-       OZr() {
-         const rr = super.OZr();
-         return rr.tookAction || rr.preventPlacement ? rr : (this.place(), {
+       hFd() {
+         const dd = super.hFd();
+         return dd.tookAction || dd.preventPlacement ? dd : (this.place(), {
```

#### 1319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10483` → after: `L10620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10620) · [Before (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10483)

```diff
-         if (super.lx(rr, Sr), this.heldItemState.XM === this.gm.fC) {
+         if (super.Et(dd, Od), this.heldItemState.QG === this.zo.YV) {
```

#### 1320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10488` → after: `L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10625) · [Before (L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10488)

```diff
-           null !== Zr && (0, gr.t)(Zr) ? this.gm.xSr ? this.assistTarget = null !== Qr ? IS.computeTarget(Zr, Qr) : null : this.assistTarget = rr ? QS.computeTarget(Zr) : null : this.assistTarget = null
+           null !== Wd && (0, Gd.o)(Wd) ? this.zo.nOd ? this.assistTarget = null !== md ? vO.computeTarget(Wd, md) : null : this.assistTarget = dd ? FO.computeTarget(Wd) : null : this.assistTarget = null
```

#### 1321. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10495` → after: `L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10632) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10495)

```diff
-         super.reset(), this.heldItemState.XM === this.gm.fC && (this.assistTarget = null, this.towerJump.reset(), QS.hide())
+         super.reset(), this.heldItemState.QG === this.zo.YV && (this.assistTarget = null, this.towerJump.reset(), FO.hide())
```

#### 1322. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10500` → after: `L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10637) · [Before (L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10500)

```diff
-           DE: Sr.cell,
+           lv: Od.cell,
```

#### 1323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10502` → after: `L10639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10639) · [Before (L10502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10502)

```diff
-           JA: null,
+           rD: null,
```

#### 1324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10508` → after: `L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10645) · [Before (L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10508)

```diff
-         const Qr = this.gm.xSr;
+         const md = this.zo.nOd;
```

#### 1325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10512-L10513` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10649-L10650) · [Before (L10512-L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10512-L10513)

```diff
-           JA: Qr.JA,
-           targetId: Qr.e_,
+           rD: md.rD,
+           targetId: md.K9,
```

#### 1326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10519` → after: `L10656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10656) · [Before (L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10519)

```diff
-           DE: Qr.position,
+           lv: md.position,
```

#### 1327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10523` → after: `L10660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10660) · [Before (L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10523)

```diff
-         return Wr && (0, Nr.c)().posSatisfiesModifyConstraints(this.gm.fC, Wr.pos[0], Wr.pos[1], Wr.pos[2]) ? {
+         return Fd && (0, Nd.b)().posSatisfiesModifyConstraints(this.zo.YV, Fd.pos[0], Fd.pos[1], Fd.pos[2]) ? {
```

#### 1328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10525` → after: `L10662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10662) · [Before (L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10525)

```diff
-           DE: Wr.pos,
+           lv: Fd.pos,
```

#### 1329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10529` → after: `L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10666) · [Before (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10529)

```diff
-           DE: Qr.Kh,
+           lv: md.Uy,
```

#### 1330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10534-L10535` → after: `L10671-L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10671-L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10671-L10672) · [Before (L10534-L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10534-L10535)

```diff
-         if (!this.gm.YB.TSr(this.gm.fC, this.gm.YB.names.inventory)) return this.gm.NK ? ar.x[this.gm.NK.defaultBlock].id : null;
-         const rr = this.gm.YB.IQr(this.gm.fC).selectedItem;
+         if (!this.zo.qE.MOd(this.zo.YV, this.zo.qE.names.inventory)) return this.zo.EY ? Rd.v[this.zo.EY.defaultBlock].id : null;
+         const dd = this.zo.qE.zmd(this.zo.YV).selectedItem;
```

#### 1331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10539` → after: `L10676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10676) · [Before (L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10539)

```diff
-         const Qr = this.towerJump.lx(rr, Sr, this.holdsBlock);
+         const md = this.towerJump.Et(dd, Od, this.holdsBlock);
```

#### 1332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10541` → after: `L10678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10678) · [Before (L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10541)

```diff
-           const rr = this.gm.VY([Qr[0], Qr[1] - 1, Qr[2]]);
+           const dd = this.zo.mY([md[0], md[1] - 1, md[2]]);
```

#### 1333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10543` → after: `L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10680) · [Before (L10543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10543)

```diff
-             DE: Qr,
+             lv: md,
```

#### 1334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10545` → after: `L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10682) · [Before (L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10545)

```diff
-             JA: null,
+             rD: null,
```

#### 1335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10555` → after: `L10692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10692) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10555)

```diff
-         rr && ("jump" !== rr.tower ? this.placeBlock(rr) : this.towerJump.press(rr.DE, Date.now()))
+         dd && ("jump" !== dd.tower ? this.placeBlock(dd) : this.towerJump.press(dd.lv, Date.now()))
```

#### 1336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10559` → after: `L10696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10696) · [Before (L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10559)

```diff
-         const Qr = this.gm.YB.TSr(this.gm.fC, this.gm.YB.names.inventory),
+         const md = this.zo.qE.MOd(this.zo.YV, this.zo.qE.names.inventory),
```

#### 1337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10561` → after: `L10698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10698) · [Before (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10561)

```diff
-             DE: Zr,
+             lv: Wd,
```

#### 1338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10567-L10569` → after: `L10704-L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10704-L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10704-L10706) · [Before (L10567-L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10567-L10569)

```diff
-             NK: pr
-           } = this.gm,
-           xr = (0, gr.f)(pr.creative, Er ? pr.ezToweringGrowMs : pr.ezBridgingGrowMs),
+             EY: Qd
+           } = this.zo,
+           td = (0, Gd.d)(Qd.creative, vd ? Qd.ezToweringGrowMs : Qd.ezBridgingGrowMs),
```

#### 1339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10572-L10573` → after: `L10709-L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10709-L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10709-L10710) · [Before (L10572-L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10572-L10573)

```diff
-         const tr = (0, Nr.c)().posSatisfiesModifyConstraints(this.gm.fC, Zr[0], Zr[1], Zr[2]);
-         if (Sr && (tr || "Moonstone Explosive" === (0, Nr.c)().getItemName(Sr))) {
+         const Hd = (0, Nd.b)().posSatisfiesModifyConstraints(this.zo.YV, Wd[0], Wd[1], Wd[2]);
+         if (Od && (Hd || "Moonstone Explosive" === (0, Nd.b)().getItemName(Od))) {
```

#### 1340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10575` → after: `L10712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10712) · [Before (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10575)

```diff
-           if (null !== fr ? Sr = fr : null === ar.x[Sr].meta.rot && null === ar.x[Sr].meta.halfblockPlacement || (Sr = this.getPlaceBlockRotatedId(Sr, rr)), Sr = (0, ir.d)(this.blockAt, pr, tr, zr, Sr), (0, Nr.c)().playerCanPlaceItem(this.gm.fC, pr, tr, zr, Sr, Er)) {
+           if (null !== hd ? Od = hd : null === Rd.v[Od].meta.rot && null === Rd.v[Od].meta.halfblockPlacement || (Od = this.getPlaceBlockRotatedId(Od, dd)), Od = (0, Dd.d)(this.blockAt, Qd, Hd, bd, Od), (0, Nd.b)().playerCanPlaceItem(this.zo.YV, Qd, Hd, bd, Od, vd)) {
```

#### 1341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10577-L10579` → after: `L10714-L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10714-L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10714-L10716) · [Before (L10577-L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10577-L10579)

```diff
-             const rr = this.gm.VY([pr, tr, zr]);
-             if ((null !== fr || 0 === rr || Cr.j[rr].HN || null !== (hr = Cr.j[rr]) && void 0 !== hr && hr.canBePlacedOver) && Sr !== rr) {
-               this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging();
+             const dd = this.zo.mY([Qd, Hd, bd]);
+             if ((null !== hd || 0 === dd || nd.i[dd].LN || null !== (yd = nd.i[dd]) && void 0 !== yd && yd.canBePlacedOver) && Od !== dd) {
+               this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging();
```

#### 1342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10583-L10589` → after: `L10720-L10726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10720-L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10720-L10726) · [Before (L10583-L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10583-L10589)

```diff
-                   (0, Ir.sendColyMessage)(or.Fg, {
-                     DE: rr,
-                     Aj: Sr,
-                     dE: (0, ar.p)(),
-                     sE: Qr,
-                     uE: Zr,
-                     jj: Wr
+                   (0, Kd.sendColyMessage)(Cd.Yf, {
+                     lv: dd,
+                     PX: Od,
+                     Cv: (0, Rd.k)(),
+                     Zv: md,
+                     kv: Wd,
+                     XX: Fd
```

#### 1343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10591-L10592` → after: `L10728-L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10728-L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10728-L10729) · [Before (L10591-L10592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10591-L10592)

```diff
-                 }(fr, Sr, jr, Er, (0, Nr.c)().client.inventoryPrediction.record(pS.c.place((() => hr)))), Ur ? dr.c.addUnconfirmed(fr, Sr, xr) : ((0, Nr.c)().fR(fr[0], fr[1], fr[2], Sr, void 0, this.gm.fC), (0, xS.h)(fr[0], fr[1], fr[2]), (0, ar.y)(Sr, !1)), (0, Nr.c)().client.tr … [truncated]
-                 const rr = this.gm.YB.IQr(this.gm.fC);
+                 }(hd, Od, Xd, vd, (0, Nd.b)().client.inventoryPrediction.record(oO.b.place((() => yd)))), qd ? Md.c.addUnconfirmed(hd, Od, td) : ((0, Nd.b)().nS(hd[0], hd[1], hd[2], Od, void 0, this.zo.YV), (0, NO.h)(hd[0], hd[1], hd[2]), (0, Rd.w)(Od, !1)), (0, Nd.b)().client.tr … [truncated]
+                 const dd = this.zo.qE.zmd(this.zo.YV);
```

#### 1344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10595` → after: `L10732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10732) · [Before (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10595)

```diff
-               jr || ("Board" === this.bloxd.getMetaInfo(Sr).rootName && mr.i.Jp("EditBoard", {
+               Xd || ("Board" === this.bloxd.getMetaInfo(Od).rootName && od.j.lQ("EditBoard", {
```

#### 1345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10597` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10734) · [Before (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10597)

```diff
-               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(Sr).rootName && mr.i.Jp("EditCustomLobbyBlock", {
+               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(Od).rootName && od.j.lQ("EditCustomLobbyBlock", {
```

#### 1346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10602-L10603` → after: `L10739-L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10739-L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10739-L10740) · [Before (L10602-L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10602-L10603)

```diff
-         } else tr || !this.gm.NK.canChange && !this.gm.NK.cantChangeError && "You cannot modify this block" === this.gm.NK.cantChangeError || mr.i.Jp("showBottomMessage", {
-           message: this.gm.NK.cantBuildError || this.gm.NK.cantChangeError,
+         } else Hd || !this.zo.EY.canChange && !this.zo.EY.cantChangeError && "You cannot modify this block" === this.zo.EY.cantChangeError || od.j.lQ("showBottomMessage", {
+           message: this.zo.EY.cantBuildError || this.zo.EY.cantChangeError,
```

#### 1347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10609` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10746) · [Before (L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10609)

```diff
-           DE: Qr,
+           lv: md,
```

#### 1348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10611` → after: `L10748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10748) · [Before (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10611)

```diff
-           JA: Wr,
+           rD: Fd,
```

#### 1349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10614-L10616` → after: `L10751-L10753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10751-L10753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10751-L10753) · [Before (L10614-L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10614-L10616)

```diff
-         const jr = Cr.j[rr].meta.rootName,
-           Ir = Cr.j[jr].id;
-         if ("Stairs" === Cr.j[Ir].model) {
+         const Xd = nd.i[dd].meta.rootName,
+           Kd = nd.i[Xd].id;
+         if ("Stairs" === nd.i[Kd].model) {
```

#### 1350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10619` → after: `L10756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10756) · [Before (L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10619)

```diff
-           return Cr.j[this.getVariantName(jr, this.getFacingRot(), Sr)].id
+           return nd.i[this.getVariantName(Xd, this.getFacingRot(), Od)].id
```

#### 1351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10621-L10622` → after: `L10758-L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10758-L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10758-L10759) · [Before (L10621-L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10621-L10622)

```diff
-         if ((0, wr.z)(Cr.j[Ir])) return Cr.j[this.getVariantName(jr, this.getFacingRot(), null)].id;
-         const fr = null !== Cr.j[Ir].meta.halfblockPlacement;
+         if ((0, ed.w)(nd.i[Kd])) return nd.i[this.getVariantName(Xd, this.getFacingRot(), null)].id;
+         const hd = null !== nd.i[Kd].meta.halfblockPlacement;
```

#### 1352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10624-L10626` → after: `L10761-L10763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10761-L10763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10761-L10763) · [Before (L10624-L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10624-L10626)

```diff
-         if (fr && (pr = 1 === Zr[1] ? "bot" : -1 === Zr[1] ? "top" : "side"), 0 === Zr[1] ? 1 === Zr[0] ? Er = 2 : 1 === Zr[2] ? Er = 1 : -1 === Zr[0] ? Er = 4 : (-1 === Zr[2] || console.error("invalid normal", Zr), Er = 3) : Er = fr && "rotatable" !== Cr.j[Ir].model ? 1 : this.g … [truncated]
-           const rr = (0, cr.j)(this.blockAt, Qr, ar, Zr, Er);
-           return Cr.j[this.getVariantName(rr.root, rr.rot, null)].id
+         if (hd && (Qd = 1 === Wd[1] ? "bot" : -1 === Wd[1] ? "top" : "side"), 0 === Wd[1] ? 1 === Wd[0] ? vd = 2 : 1 === Wd[2] ? vd = 1 : -1 === Wd[0] ? vd = 4 : (-1 === Wd[2] || console.error("invalid normal", Wd), vd = 3) : vd = hd && "rotatable" !== nd.i[Kd].model ? 1 : this.g … [truncated]
+           const dd = (0, Id.o)(this.blockAt, md, Rd, Wd, vd);
+           return nd.i[this.getVariantName(dd.root, dd.rot, null)].id
```

#### 1353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10629` → after: `L10766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10766) · [Before (L10629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10629)

```diff
-         return "top" !== pr || Cr.j[xr] || (xr = this.getVariantName(jr, Er, "bot")), Cr.j[xr].id
+         return "top" !== Qd || nd.i[td] || (td = this.getVariantName(Xd, vd, "bot")), nd.i[td].id
```

#### 1354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10632-L10633` → after: `L10769-L10770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10769-L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10769-L10770) · [Before (L10632-L10633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10632-L10633)

```diff
-         const Zr = Cr.j[rr].meta.metaStr.split("|");
-         return Zr[1] = `rot${Sr}`, null !== Qr && (Zr[2] = Qr), Zr.join("|") === Cr.j[rr].meta.metaStr ? rr : [rr, ...Zr].join("|")
+         const Wd = nd.i[dd].meta.metaStr.split("|");
+         return Wd[1] = `rot${Od}`, null !== md && (Wd[2] = md), Wd.join("|") === nd.i[dd].meta.metaStr ? dd : [dd, ...Wd].join("|")
```

#### 1355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10636` → after: `L10773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10773) · [Before (L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10636)

```diff
-         const rr = xr.b.mod(Fr.e.getAimHeading(this.gm) + Math.PI, 2 * Math.PI);
+         const dd = td.b.mod(ld.c.getAimHeading(this.zo) + Math.PI, 2 * Math.PI);
```

#### 1356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10640-L10644` → after: `L10777-L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10777-L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10777-L10781) · [Before (L10640-L10644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10640-L10644)

```diff
-     var NS = Qr(37843),
-       US = Qr(38509);
-     const tS = (0, US.k)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
-       hS = [US.n["Timed Spike Bomb"].id],
-       zS = (0, US.k)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
+     var HO = md(37939),
+       yO = md(38573);
+     const bO = (0, yO.p)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
+       TO = [yO.q["Timed Spike Bomb"].id],
+       pO = (0, yO.p)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
```

#### 1357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10650` → after: `L10787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10787) · [Before (L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10650)

```diff
-         super.selected(rr, Sr), this.heldItemState.XM === this.gm.fC && (this.inInvenIdx = this.bloxd.fQr(this.gm.fC).getSelectedSlotIndex())
+         super.selected(dd, Od), this.heldItemState.QG === this.zo.YV && (this.inInvenIdx = this.bloxd.Dmd(this.zo.YV).getSelectedSlotIndex())
```

#### 1358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10652` → after: `L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10789) · [Before (L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10652)

```diff
-       bpr() {
+       jQd() {
```

#### 1359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10655-L10656` → after: `L10792-L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10792-L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10792-L10793) · [Before (L10655-L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10655-L10656)

```diff
-       KZr() {
-         return super.KZr(), this.upFire()
+       WFd() {
+         return super.WFd(), this.upFire()
```

#### 1360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10665` → after: `L10802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10802) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10665)

```diff
-         return super.bpr().tookAction || this.startCharging(Date.now()), {
+         return super.jQd().tookAction || this.startCharging(Date.now()), {
```

#### 1361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10677-L10678` → after: `L10814-L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10814-L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10814-L10815) · [Before (L10677-L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10677-L10678)

```diff
-         if (super.lx(rr, Sr), this.heldItemState.XM !== this.gm.fC) return;
-         const Qr = this.bloxd.fQr(this.gm.fC);
+         if (super.Et(dd, Od), this.heldItemState.QG !== this.zo.YV) return;
+         const md = this.bloxd.Dmd(this.zo.YV);
```

#### 1362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10681-L10682` → after: `L10818-L10819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10818-L10819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10818-L10819) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10681-L10682)

```diff
-             Wr = this.bloxd.getItemStat(this.gm.fC, this.getHeldName(), "chargeStages");
-           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.gm.fC, this.inInvenIdx)) this.finishCharging(!1, Sr), this.sendFinishCharging(!1, 0, null);
+             Fd = this.bloxd.getItemStat(this.zo.YV, this.getHeldName(), "chargeStages");
+           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.zo.YV, this.inInvenIdx)) this.finishCharging(!1, Od), this.sendFinishCharging(!1, 0, null);
```

#### 1363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10693` → after: `L10830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10830) · [Before (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10693)

```diff
-                 const Sr = tS.includes(this.typeObj.meta.rootId) ? pS.c.replace(this.inInvenIdx, rr, `${(0,US.e)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
+                 const Od = bO.includes(this.typeObj.meta.rootId) ? oO.b.replace(this.inInvenIdx, dd, `${(0,yO.i)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
```

#### 1364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10697` → after: `L10834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10834) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10697)

```diff
-               (0, Nr.c)().getMetaInfo(ar).rootId === (0, Nr.c)().getMetaInfo(rr).rootId && this.startCharging(Sr)
+               (0, Nd.b)().getMetaInfo(Rd).rootId === (0, Nd.b)().getMetaInfo(dd).rootId && this.startCharging(Od)
```

#### 1365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10700` → after: `L10837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10837) · [Before (L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10700)

```diff
-           this.typeObj.chargeSound && Sr - this.lastChargeSoundTime > 200 && (NS.b.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = Sr)
+           this.typeObj.chargeSound && Od - this.lastChargeSoundTime > 200 && (HO.d.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = Od)
```

#### 1366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10705` → after: `L10842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10842) · [Before (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10705)

```diff
-           const rr = this.heldItemState.XM === this.gm.fC ? this.typeObj.chargeTime * xr.c.getQuickChargeMultiplier(this.bloxd.fQr(this.gm.fC).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
+           const dd = this.heldItemState.QG === this.zo.YV ? this.typeObj.chargeTime * td.c.getQuickChargeMultiplier(this.bloxd.Dmd(this.zo.YV).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
```

#### 1367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10708` → after: `L10845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10845) · [Before (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10708)

```diff
-           this.firstPersonPosOffset.x = -.05 * Zr, this.firstPersonPosOffset.y = .13 * Zr, this.firstPersonPosOffset.z = -.05 * Zr, Qr > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (Qr - .25) * Math.min(Qr, .8)) * Math.min(Qr, .8)), zS.includes(this.typeObj.meta. … [truncated]
+           this.firstPersonPosOffset.x = -.05 * Wd, this.firstPersonPosOffset.y = .13 * Wd, this.firstPersonPosOffset.z = -.05 * Wd, md > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (md - .25) * Math.min(md, .8)) * Math.min(md, .8)), pO.includes(this.typeObj.meta. … [truncated]
```

#### 1368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10720` → after: `L10857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10857) · [Before (L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10720)

```diff
-         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (rr = this.gm.YB.getState(this.gm.fC, "playerCameraAdjustment")) || void 0 === rr || rr.fovMultiplier.removeMultiplier … [truncated]
+         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (dd = this.zo.qE.getState(this.zo.YV, "playerCameraAdjustment")) || void 0 === dd || dd.fovMultiplier.removeMultiplier … [truncated]
```

#### 1369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10723` → after: `L10860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10860) · [Before (L10723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10723)

```diff
-         super.reset(), this.heldItemState.XM === this.gm.fC ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
+         super.reset(), this.heldItemState.QG === this.zo.YV ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
```

#### 1370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10726-L10728` → after: `L10863-L10865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10863-L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10863-L10865) · [Before (L10726-L10728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10726-L10728)

```diff
-         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.gm.fC, this.inInvenIdx)) return;
-         this.isCharging = !0, this.chargingStart = rr, this.gm.YB.gQr().canRunCombinator.setBooleanType("charging", !1);
-         const Sr = this.bloxd.fQr(this.gm.fC),
+         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.zo.YV, this.inInvenIdx)) return;
+         this.isCharging = !0, this.chargingStart = dd, this.zo.qE.TWd().canRunCombinator.setBooleanType("charging", !1);
+         const Od = this.bloxd.Dmd(this.zo.YV),
```

#### 1371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10731` → after: `L10868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10868) · [Before (L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10731)

```diff
-         mr.i.Jp("middleScreenBarInitiate", {
+         od.j.lQ("middleScreenBarInitiate", {
```

#### 1372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10733` → after: `L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10870) · [Before (L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10733)

```diff
-           ha: !1,
+           qR: !1,
```

#### 1373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10735` → after: `L10872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10872) · [Before (L10735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10735)

```diff
-         }), (0, Ir.sendColyMessage)(or.Pj)
+         }), (0, Kd.sendColyMessage)(Cd.oj)
```

#### 1374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10738` → after: `L10875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10875) · [Before (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10738)

```diff
-         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.gm.YB.getState(this.gm.fC, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.gm.YB.gQr().canRunCombinator. … [truncated]
+         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.zo.qE.getState(this.zo.YV, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.zo.qE.TWd().canRunCombinator. … [truncated]
```

#### 1375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10742-L10744` → after: `L10879-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10879-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10879-L10881) · [Before (L10742-L10744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10742-L10744)

```diff
-               Zr = this.bloxd.getItemStat(this.gm.fC, this.getHeldName(), "chargeStages"),
-               Wr = null !== (Qr = this.bloxd.getItemStat(this.gm.fC, this.getHeldName(), "minChargeStateToUse")) && void 0 !== Qr ? Qr : 1,
-               ar = this.bloxd.fQr(this.gm.fC),
+               Wd = this.bloxd.getItemStat(this.zo.YV, this.getHeldName(), "chargeStages"),
+               Fd = null !== (md = this.bloxd.getItemStat(this.zo.YV, this.getHeldName(), "minChargeStateToUse")) && void 0 !== md ? md : 1,
+               Rd = this.bloxd.Dmd(this.zo.YV),
```

#### 1376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10754-L10757` → after: `L10891-L10894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10891-L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10891-L10894) · [Before (L10754-L10757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10754-L10757)

```diff
-         (0, Ir.sendColyMessage)(or.vh, {
-           Zp: rr,
-           Wp: Sr,
-           jj: Zr
+         (0, Kd.sendColyMessage)(Cd.Rg, {
+           OQ: dd,
+           mQ: Od,
+           XX: Wd
```

#### 1377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10761` → after: `L10898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10898) · [Before (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10761)

```diff
-         this.sendFinishCharging(!0, rr, pS.c.eat(this.gm.fC, this.inInvenIdx, this.typeObj.name)), NS.b.play("burp", 1).rate(.9 + .2 * Math.random())
+         this.sendFinishCharging(!0, dd, oO.b.eat(this.zo.YV, this.inInvenIdx, this.typeObj.name)), HO.d.play("burp", 1).rate(.9 + .2 * Math.random())
```

#### 1378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10765` → after: `L10902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10902) · [Before (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10765)

```diff
-         const Sr = this.bloxd.fQr(this.gm.fC);
+         const Od = this.bloxd.Dmd(this.zo.YV);
```

#### 1379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10771` → after: `L10908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10908) · [Before (L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10771)

```diff
-         const Sr = this.bloxd.fQr(this.gm.fC);
+         const Od = this.bloxd.Dmd(this.zo.YV);
```

#### 1380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10774` → after: `L10911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10911) · [Before (L10774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10774)

```diff
-           const Zr = 1 === rr ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${rr}`,
+           const Wd = 1 === dd ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${dd}`,
```

#### 1381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10782` → after: `L10919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10919) · [Before (L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10782)

```diff
-         super(rr, Sr, Qr, Zr, Wr), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.lj = void 0, this.firstPersonPosOffset = new hr.kU(.1, 0, .15), this.firstPersonRotation = new hr.kU(0, -Math.PI / 2, Math.PI / 7)
+         super(dd, Od, md, Wd, Fd), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.BX = void 0, this.firstPersonPosOffset = new yd.Cq(.1, 0, .15), this.firstPersonRotation = new yd.Cq(0, -Math.PI / 2, Math.PI / 7)
```

#### 1382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10785` → after: `L10922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10922) · [Before (L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10785)

```diff
-         super.selected(rr), this.heldItemState.XM === this.gm.fC && (this.inInvenIdx = this.bloxd.fQr(this.gm.fC).getSelectedSlotIndex(), this.inUse = !0)
+         super.selected(dd), this.heldItemState.QG === this.zo.YV && (this.inInvenIdx = this.bloxd.Dmd(this.zo.YV).getSelectedSlotIndex(), this.inUse = !0)
```

#### 1383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10788` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10925) · [Before (L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10788)

```diff
-         if (super.lx(rr, Sr), this.heldItemState.XM === this.gm.fC && (this.inInvenIdx = this.bloxd.fQr(this.gm.fC).getSelectedSlotIndex(), this.inUse)) {
+         if (super.Et(dd, Od), this.heldItemState.QG === this.zo.YV && (this.inInvenIdx = this.bloxd.Dmd(this.zo.YV).getSelectedSlotIndex(), this.inUse)) {
```

#### 1384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10790` → after: `L10927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10927) · [Before (L10790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10790)

```diff
-           let rr = null !== (Qr = this.gm.YB.fQr(this.gm.fC).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== Qr ? Qr : this.gm.NK.compassTarget;
+           let dd = null !== (md = this.zo.qE.Dmd(this.zo.YV).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== md ? md : this.zo.EY.compassTarget;
```

#### 1385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10792-L10793` → after: `L10929-L10930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10929-L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10929-L10930) · [Before (L10792-L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10792-L10793)

```diff
-             if (!this.gm.YB.LQr(rr)) return;
-             rr = this.gm.YB.JY(rr)
+             if (!this.zo.qE.tWd(dd)) return;
+             dd = this.zo.qE.hY(dd)
```

#### 1386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10795` → after: `L10932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10932) · [Before (L10795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10795)

```diff
-           const Sr = this.gm.YB.PD(this.heldItemState.XM),
+           const Od = this.zo.qE.b_(this.heldItemState.QG),
```

#### 1387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10797-L10798` → after: `L10934-L10935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10934-L10935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10934-L10935) · [Before (L10797-L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10797-L10798)

```diff
-             jr = null !== (Zr = this.gm.LSr) && void 0 !== Zr ? Zr : this.gm.camera.Y1();
-           this.gm.dD(Sr, ar);
+             Xd = null !== (Wd = this.zo.mmd) && void 0 !== Wd ? Wd : this.zo.camera.B_();
+           this.zo.E_(Od, Rd);
```

#### 1388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10801-L10802` → after: `L10938-L10939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10938-L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10938-L10939) · [Before (L10801-L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10801-L10802)

```diff
-           let fr = ((0, xr.ub)(Ir) - (0, xr.ub)(jr)) * (180 / Math.PI) - 15;
-           fr = fr < 0 ? 360 + fr : fr, this.dir = Math.abs(Math.round(fr / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
+           let hd = ((0, td.rb)(Kd) - (0, td.rb)(Xd)) * (180 / Math.PI) - 15;
+           hd = hd < 0 ? 360 + hd : hd, this.dir = Math.abs(Math.round(hd / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
```

#### 1389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10806` → after: `L10943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10943) · [Before (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10806)

```diff
-         const Sr = this.bloxd.fQr(this.gm.fC);
+         const Od = this.bloxd.Dmd(this.zo.YV);
```

#### 1390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10809` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10946) · [Before (L10809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10809)

```diff
-           const Zr = 1 === rr ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${rr}`,
+           const Wd = 1 === dd ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${dd}`,
```

#### 1391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10815-L10816` → after: `L10952-L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10952-L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10952-L10953) · [Before (L10815-L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10815-L10816)

```diff
-     var eS = Qr(38723),
-       KS = Qr(208);
+     var wO = md(38766),
+       aO = md(218);
```

#### 1392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10819` → after: `L10956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10956) · [Before (L10819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10819)

```diff
-       return void 0 !== rr && null !== rr && rr > 0 ? rr : void 0
+       return void 0 !== dd && null !== dd && dd > 0 ? dd : void 0
```

#### 1393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10843` → after: `L10980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10980) · [Before (L10843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10843)

```diff
-         const Zr = this.restart ? rr : function(rr, Sr, Qr, Zr, Wr) {
+         const Wd = this.restart ? dd : function(dd, Od, md, Wd, Fd) {
```

#### 1394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10852-L10858` → after: `L10989-L10995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10989-L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10989-L10995) · [Before (L10852-L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10852-L10858)

```diff
-     var LS = Qr(2984),
-       lS = Qr(39488),
-       XS = Qr(39519),
-       PS = Qr(37851),
-       HS = Qr(124),
-       qS = Qr(39926),
-       RS = Qr(688);
+     var SO = md(2991),
+       sO = md(39547),
+       uO = md(39577),
+       VO = md(37942),
+       iO = md(127),
+       AO = md(39966),
+       rO = md(701);
```

#### 1395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10861` → after: `L10998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R10998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L10998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L10998) · [Before (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10861)

```diff
-         this.gm = void 0, this.gunTypeObj = void 0, this.hQ = void 0, this.gm = rr, this.gunTypeObj = Sr, this.hQ = Qr
+         this.zo = void 0, this.gunTypeObj = void 0, this.qm = void 0, this.zo = dd, this.gunTypeObj = Od, this.qm = md
```

#### 1396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10865-L10866` → after: `L11002-L11003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11002-L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11002-L11003) · [Before (L10865-L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10865-L10866)

```diff
-         if (this.hQ !== this.gm.fC) return;
-         const Qr = null === (Sr = (0, Nr.e)().YB.fQr(this.hQ)) || void 0 === Sr ? void 0 : Sr.getItemAtSelectedSlot();
+         if (this.qm !== this.zo.YV) return;
+         const md = null === (Od = (0, Nd.c)().qE.Dmd(this.qm)) || void 0 === Od ? void 0 : Od.getItemAtSelectedSlot();
```

#### 1397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10870` → after: `L11007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11007) · [Before (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10870)

```diff
-           if (!(0, RS.L)(null === Sr || void 0 === Sr ? void 0 : Sr[rr])) return Sr[rr]
+           if (!(0, rO.O)(null === Od || void 0 === Od ? void 0 : Od[dd])) return Od[dd]
```

#### 1398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10874` → after: `L11011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11011) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10874)

```diff
-         } = (0, Nr.c)().getMetaInfo(this.gunTypeObj.name), ar = (0, Nr.c)().getItemStat(this.hQ, Wr, "gunStats");
+         } = (0, Nd.b)().getMetaInfo(this.gunTypeObj.name), Rd = (0, Nd.b)().getItemStat(this.qm, Fd, "gunStats");
```

#### 1399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10878` → after: `L11015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11015) · [Before (L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10878)

```diff
-         if (this.hQ === this.gm.fC) {
+         if (this.qm === this.zo.YV) {
```

#### 1400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10880` → after: `L11017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11017) · [Before (L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10880)

```diff
-           return null !== Sr && void 0 !== Sr ? Sr : (0, Nr.c)().getItemStat(this.hQ, this.gunTypeObj.name, rr)
+           return null !== Od && void 0 !== Od ? Od : (0, Nd.b)().getItemStat(this.qm, this.gunTypeObj.name, dd)
```

#### 1401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10890` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11027) · [Before (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10890)

```diff
-             Ir = null !== jr && void 0 !== jr ? jr : Wr,
+             Kd = null !== Xd && void 0 !== Xd ? Xd : Fd,
```

#### 1402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10892` → after: `L11029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11029) · [Before (L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10892)

```diff
-             Er = void 0 === fr ? Ir : 60 / fr * 1e3,
+             vd = void 0 === hd ? Kd : 60 / hd * 1e3,
```

#### 1403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10894-L10895` → after: `L11031-L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11031-L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11031-L11032) · [Before (L10894-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10894-L10895)

```diff
-             xr = null !== (Qr = null !== (Zr = null !== pr && void 0 !== pr ? pr : jr) && void 0 !== Zr ? Zr : rr.cadenceMs) && void 0 !== Qr ? Qr : Wr,
-             mr = void 0 !== (Nr = Sr.equipDelay) && null !== Nr && Nr >= 0 ? Nr : void 0;
+             td = null !== (md = null !== (Wd = null !== Qd && void 0 !== Qd ? Qd : Xd) && void 0 !== Wd ? Wd : dd.cadenceMs) && void 0 !== md ? md : Fd,
+             od = void 0 !== (Nd = Od.equipDelay) && null !== Nd && Nd >= 0 ? Nd : void 0;
```

#### 1404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10897` → after: `L11034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11034) · [Before (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10897)

```diff
-           const Ur = Sr => null !== mr && void 0 !== mr ? mr : Sr || void 0 !== pr ? void 0 : rr.equipDelay;
+           const qd = Od => null !== od && void 0 !== od ? od : Od || void 0 !== Qd ? void 0 : dd.equipDelay;
```

#### 1405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10923` → after: `L11060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11060) · [Before (L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10923)

```diff
-             firstShotDue: void 0 === Wr ? Zr + BS(rr, Sr) + TS : Qr + Math.max(Wr, TS),
+             firstShotDue: void 0 === Fd ? Wd + JO(dd, Od) + UO : md + Math.max(Fd, UO),
```

#### 1406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10930` → after: `L11067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11067) · [Before (L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10930)

```diff
-         return (0, RS.L)(rr) ? this.gunTypeObj.burstCount : rr
+         return (0, rO.O)(dd) ? this.gunTypeObj.burstCount : dd
```

#### 1407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10935` → after: `L11072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11072) · [Before (L10935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10935)

```diff
-         return (0, RS.L)(Sr) ? null !== (rr = this.gunTypeObj.burstDelay) && void 0 !== rr ? rr : 0 : Sr
+         return (0, rO.O)(Od) ? null !== (dd = this.gunTypeObj.burstDelay) && void 0 !== dd ? dd : 0 : Od
```

#### 1408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10939` → after: `L11076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11076) · [Before (L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10939)

```diff
-         return (0, RS.L)(rr) ? this.gunTypeObj.keepScopeOnShot : rr
+         return (0, rO.O)(dd) ? this.gunTypeObj.keepScopeOnShot : dd
```

#### 1409. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10968-L10969` → after: `L11105-L11106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11105-L11106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11105-L11106) · [Before (L10968-L10969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10968-L10969)

```diff
-     var MS = Qr(38183),
-       GS = Qr(39120);
+     var LO = md(38264),
+       PO = md(39146);
```

#### 1410. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10973` → after: `L11110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11110) · [Before (L10973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10973)

```diff
-         this.gm = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
+         this.zo = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
```

#### 1411. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10998-L11002` → after: `L11135-L11139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11135-L11139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11135-L11139) · [Before (L10998-L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L10998-L11002)

```diff
-         const Wr = this.gm.YB.cV(this.gm.fC),
-           ar = (Wr.Lh[0] ** 2 + Wr.Lh[2] ** 2) ** .5,
-           jr = Math.max(this.gm.NK.runningSpeed, this.gm.NK.walkingSpeed) * this.gm.YB.jQr(this.gm.fC).speedMultiplier.getTotalMultipliedVal(),
-           Ir = Zr.inaccuracyStanding + ar / jr * Zr.inaccuracyMovement + Zr.yVelocityInaccuracy * Math.abs(Wr.Lh[1]);
-         0 === jr || (Ir >= this.currMoveInacc ? this.currMoveInacc = Ir : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, Ir, Qr)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, Qr));
+         const Fd = this.zo.qE.pC(this.zo.YV),
+           Rd = (Fd.Gy[0] ** 2 + Fd.Gy[2] ** 2) ** .5,
+           Xd = Math.max(this.zo.EY.runningSpeed, this.zo.EY.walkingSpeed) * this.zo.qE.Pmd(this.zo.YV).speedMultiplier.getTotalMultipliedVal(),
+           Kd = Wd.inaccuracyStanding + Rd / Xd * Wd.inaccuracyMovement + Wd.yVelocityInaccuracy * Math.abs(Fd.Gy[1]);
+         0 === Xd || (Kd >= this.currMoveInacc ? this.currMoveInacc = Kd : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, Kd, md)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, md));
```

#### 1412. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11009` → after: `L11146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11146) · [Before (L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11009)

```diff
-         return Zr < .05 ? Sr : Math.max(rr - Qr * this.gunStats.getStat("recoveryRate") * Zr, Sr)
+         return Wd < .05 ? Od : Math.max(dd - md * this.gunStats.getStat("recoveryRate") * Wd, Od)
```

#### 1413. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11012` → after: `L11149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11149) · [Before (L11012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11012)

```diff
-         const Sr = this.currInacc * US.g,
+         const Od = this.currInacc * yO.l,
```

#### 1414. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11014-L11015` → after: `L11151-L11152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11151-L11152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11151-L11152) · [Before (L11014-L11015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11014-L11015)

```diff
-             Qx: Qr,
-             kQr: Zr
+             MQ: md,
+             wWd: Wd
```

#### 1415. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11019` → after: `L11156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11156) · [Before (L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11019)

```diff
-         return (0, GS.b)(Qr + Wr, Zr + ar)
+         return (0, PO.d)(md + Fd, Wd + Rd)
```

#### 1416. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11022-L11025` → after: `L11159-L11162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11159-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11159-L11162) · [Before (L11022-L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11022-L11025)

```diff
-     var AS = Qr(39128),
-       VS = Qr(39402),
-       iS = Qr(39030),
-       wS = Qr(38845);
+     var cO = md(39155),
+       jO = md(39459),
+       DO = md(39074),
+       eO = md(38898);
```

#### 1417. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11028-L11030` → after: `L11165-L11167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11165-L11167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11165-L11167) · [Before (L11028-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11028-L11030)

```diff
-       oS = new hr.kU(0, .6, .5),
-       bS = new hr.kU(0, .5 * -Math.PI, Math.PI),
-       JS = new hr.kU(.12, .12, .12),
+       CO = new yd.Cq(0, .6, .5),
+       ZO = new yd.Cq(0, .5 * -Math.PI, Math.PI),
+       kO = new yd.Cq(.12, .12, .12),
```

#### 1418. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11033` → after: `L11170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11170) · [Before (L11033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11033)

```diff
-     class sS extends Ur.e {
+     class dm extends qd.b {
```

#### 1419. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11035-L11037` → after: `L11172-L11174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11172-L11174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11172-L11174) · [Before (L11035-L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11035-L11037)

```diff
-         super(rr, Sr, Qr, Wr), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
-         const ar = this.gm.Ox.eC();
-         if (this.heldItemState.XM === this.gm.fC) {
+         super(dd, Od, md, Fd), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
+         const Rd = this.zo.gt.zV();
+         if (this.heldItemState.QG === this.zo.YV) {
```

#### 1420. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11039` → after: `L11176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11176) · [Before (L11039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11039)

```diff
-           this.bulletBlockedBillboardMat = (0, eS.b)({
+           this.bulletBlockedBillboardMat = (0, wO.d)({
```

#### 1421. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11041` → after: `L11178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11178) · [Before (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11041)

```diff
-             Dt: ar,
+             MH: Rd,
```
