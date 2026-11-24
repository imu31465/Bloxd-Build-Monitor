# Changed — Bundle Modifications Report (Part 091 / 141)

- **Updated at**: `2026-11-24T14:21 JST`
- **Part**: `91 / 141` (**418** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 090](part-090.md) · [Part 092 →](part-092.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (31kiid.1299b0d6 → mpd96o.85ad4551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (3603 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 646. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5296` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5296) · [Before (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5296)

```diff
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.Mj(`webgl_waiting_${Fk}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(kk);
+         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.IO(`webgl_waiting_${Tm}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(mm);
```

#### 647. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5298-L5300` → after: `L5298-L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5298-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5298-L5300) · [Before (L5298-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5298-L5300)

```diff
-         const Ik = (0, Dy.i)(performance.now() - kk);
-         if (hy(this.actions)) return this.actions.Mj(`webgl_rejoin_${Fk}_${Ik}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.Mj(`webgl_end_${Fk}_${Ik}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+         const fm = (0, Wx.m)(performance.now() - mm);
+         if (dx(this.actions)) return this.actions.IO(`webgl_rejoin_${Tm}_${fm}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
+         this.actions.IO(`webgl_end_${Tm}_${fm}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
```

#### 648. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5328` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5328) · [Before (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5328)

```diff
-       Hk.g.GL("unrecoverableError", yl)
+       qm.j.gp("unrecoverableError", xw)
```

#### 649. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5330-L5331` → after: `L5330-L5331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5330-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5330-L5331) · [Before (L5330-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5330-L5331)

```diff
-     var Ll = Ik(38424),
-       tl = Ik(36824);
+     var Rw = fm(38541),
+       pw = fm(36895);
```

#### 650. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5363-L5364` → after: `L5363-L5364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5363-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5363-L5364) · [Before (L5363-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5363-L5364)

```diff
-         mJ: function(Fk, Ik) {
-           Ik.speedMultiplier = new tl.i, Ik.jumpMultiplier = new tl.i, Ik.cameraDirection = xk().create(),
+         pI: function(Tm, fm) {
+           fm.speedMultiplier = new pw.k, fm.jumpMultiplier = new pw.k, fm.cameraDirection = Vm().create(),
```

#### 651. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5368` → after: `L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5368) · [Before (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5368)

```diff
-                 Ik.pose = Fk, Xk && xk().set(Ik.meshOffset, Xk[0], Xk[1], Xk[2]), Tk && kk.bloxd.removeFromEyeHeightCache(Ik.Xu)
+                 fm.pose = Tm, hm && Vm().set(fm.meshOffset, hm[0], hm[1], hm[2]), Am && mm.bloxd.removeFromEyeHeightCache(fm.lG)
```

#### 652. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5371` → after: `L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5371) · [Before (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5371)

```diff
-                 xk().set(Ik.meshOffset, Fk, Xk, Tk), ik && kk.bloxd.removeFromEyeHeightCache(Ik.Xu)
+                 Vm().set(fm.meshOffset, Tm, hm, Am), am && mm.bloxd.removeFromEyeHeightCache(fm.lG)
```

#### 653. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5373` → after: `L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5373) · [Before (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5373)

```diff
-                 Ik.crouching !== Fk && (Ik.crouching = Fk, kk.bloxd.removeFromEyeHeightCache(Ik.Xu))
+                 fm.crouching !== Tm && (fm.crouching = Tm, mm.bloxd.removeFromEyeHeightCache(fm.lG))
```

#### 654. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5375` → after: `L5375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5375) · [Before (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5375)

```diff
-                 Fk === kk.oR && (Ik.armSwinging = !0, Ik._armSwungLastTick = !0, Ik._renderTickSinceSwing = !1, Ik._tickSinceSwing = !1)
+                 Tm === mm.xH && (fm.armSwinging = !0, fm._armSwungLastTick = !0, fm._renderTickSinceSwing = !1, fm._tickSinceSwing = !1)
```

#### 655. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5379` → after: `L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5379) · [Before (L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5379)

```diff
-         iG: null,
+         oN: null,
```

#### 656. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5381` → after: `L5381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5381) · [Before (L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5381)

```diff
-           for (const Xk of Ik) Xk.Xu === kk.oR && (!Xk._armSwungLastTick && Xk._tickSinceSwing && Xk._renderTickSinceSwing && (Xk.armSwinging = !1), Xk._tickSinceSwing = !0, Xk._armSwungLastTick = !1, Xk.hitInPrevTick = !1)
+           for (const hm of fm) hm.lG === mm.xH && (!hm._armSwungLastTick && hm._tickSinceSwing && hm._renderTickSinceSwing && (hm.armSwinging = !1), hm._tickSinceSwing = !0, hm._armSwungLastTick = !1, hm.hitInPrevTick = !1)
```

#### 657. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5383-L5384` → after: `L5383-L5384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5383-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5383-L5384) · [Before (L5383-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5383-L5384)

```diff
-         Ix: function(Fk, Ik) {
-           for (const Xk of Ik) Xk.Xu === kk.oR && (Xk._renderTickSinceSwing = !0)
+         JI: function(Tm, fm) {
+           for (const hm of fm) hm.lG === mm.xH && (hm._renderTickSinceSwing = !0)
```

#### 658. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5388-L5389` → after: `L5388-L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5388-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5388-L5389) · [Before (L5388-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5388-L5389)

```diff
-     var jl = Ik(38188),
-       el = Ik(37995);
+     var ow = fm(38286),
+       Ow = fm(38054);
```

#### 659. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5402` → after: `L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5402) · [Before (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5402)

```diff
-         mJ: function(Fk, Ik) {
+         pI: function(Tm, fm) {
```

#### 660. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5412` → after: `L5412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5412) · [Before (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5412)

```diff
-         iG: null,
+         oN: null,
```

#### 661. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5426` → after: `L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5426) · [Before (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5426)

```diff
-           tF: !1,
+           pT: !1,
```

#### 662. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5432-L5435` → after: `L5432-L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5432-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5432-L5435) · [Before (L5432-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5432-L5435)

```diff
-     var Jl = Ik(2830),
-       xl = Ik(38750),
-       Pl = Ik(123),
-       Kl = Ik(293);
+     var jw = fm(2898),
+       Vw = fm(38843),
+       Iw = fm(130),
+       Kw = fm(313);
```

#### 663. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5551` → after: `L5551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5551) · [Before (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5551)

```diff
-           return !0 === (null === kk || void 0 === kk ? void 0 : kk[Wi.m]) ? "terrain" : !0 === (null === kk || void 0 === kk ? void 0 : kk[SX.v]) ? "objectBlocks" : !0 === (null === kk || void 0 === kk ? void 0 : kk[SX.D]) ? "textPlanes" : -1 === Fk ? "sky" : "other"
+           return !0 === (null === mm || void 0 === mm ? void 0 : mm[Ma.l]) ? "terrain" : !0 === (null === mm || void 0 === mm ? void 0 : mm[kh.u]) ? "objectBlocks" : !0 === (null === mm || void 0 === mm ? void 0 : mm[kh.D]) ? "textPlanes" : -1 === Tm ? "sky" : "other"
```

#### 664. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5553` → after: `L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5553) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5553)

```diff
-         "other" === Zk && tk.vFk && (Zk = "entityParts");
+         "other" === Em && pm.ZTm && (Em = "entityParts");
```

#### 665. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5555` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5555) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5555)

```diff
-             return "terrain" === kk ? Ik ? `${null===Xk||void 0===Xk?void 0:Xk[Wi.h]}:${null===Xk||void 0===Xk?void 0:Xk[Wi.k]}` : "(all)" : "textPlanes" === kk ? "(all)" : "objectBlocks" === kk || "entityParts" === kk ? Fk : (Tk = Fk).split(/[|:#]/)[0].replace(/\d+$/, "") || Tk;
+             return "terrain" === mm ? fm ? `${null===hm||void 0===hm?void 0:hm[Ma.g]}:${null===hm||void 0===hm?void 0:hm[Ma.j]}` : "(all)" : "textPlanes" === mm ? "(all)" : "objectBlocks" === mm || "entityParts" === mm ? Tm : (Am = Tm).split(/[|:#]/)[0].replace(/\d+$/, "") || Am;
```

#### 666. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5558` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5558) · [Before (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5558)

```diff
-           ek = `${Zk}\0${jk}`;
+           Om = `${Em}\0${om}`;
```

#### 667. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5569` → after: `L5569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5569) · [Before (L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5569)

```diff
-         const Hk = null !== (Tk = tk.M6) && void 0 !== Tk ? Tk : 0;
+         const qm = null !== (Am = pm.o4) && void 0 !== Am ? Am : 0;
```

#### 668. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5571-L5572` → after: `L5571-L5572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5571-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5571-L5572) · [Before (L5571-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5571-L5572)

```diff
-           qk++, lk.add(`${null===Lk||void 0===Lk?void 0:Lk[Wi.h]}:${null===Lk||void 0===Lk?void 0:Lk[Wi.k]}`);
-           const kk = null === Lk || void 0 === Lk ? void 0 : Lk[SX.x];
+           im++, wm.add(`${null===Rm||void 0===Rm?void 0:Rm[Ma.g]}:${null===Rm||void 0===Rm?void 0:Rm[Ma.j]}`);
+           const mm = null === Rm || void 0 === Rm ? void 0 : Rm[kh.w];
```

#### 669. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5574` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5574) · [Before (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5574)

```diff
-           if (kk) ak.set(kk, (null !== (Jk = ak.get(kk)) && void 0 !== Jk ? Jk : 0) + 1)
+           if (mm) Dm.set(mm, (null !== (jm = Dm.get(mm)) && void 0 !== jm ? jm : 0) + 1)
```

#### 670. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5591` → after: `L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5591) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5591)

```diff
-       return (0, Yy.h)(kk.Xw).backendName
+       return (0, Lx.l)(mm.qY).backendName
```

#### 671. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5618` → after: `L5618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5618) · [Before (L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5618)

```diff
-       return null !== (Fk = null === (Ik = kk.Xw.Tw) || void 0 === Ik ? void 0 : Ik.T6) && void 0 !== Fk ? Fk : null
+       return null !== (Tm = null === (fm = mm.qY.jY) || void 0 === fm ? void 0 : fm.I5) && void 0 !== Tm ? Tm : null
```

#### 672. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5623` → after: `L5623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5623) · [Before (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5623)

```diff
-       return null !== (Fk = null === (Ik = kk.Xw.Tw) || void 0 === Ik ? void 0 : Ik.modelMeshes) && void 0 !== Fk ? Fk : null
+       return null !== (Tm = null === (fm = mm.qY.jY) || void 0 === fm ? void 0 : fm.modelMeshes) && void 0 !== Tm ? Tm : null
```

#### 673. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5628` → after: `L5628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5628) · [Before (L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5628)

```diff
-       return kk.Xw.mG().getActiveMeshes().length + (null !== (Fk = null === (Ik = nl(kk)) || void 0 === Ik ? void 0 : Ik.drawStats().selected) && void 0 !== Fk ? Fk : 0) + (null !== (Xk = null === (Tk = Gl(kk)) || void 0 === Tk ? void 0 : Tk.selectedCount) && void 0 !== Xk ? Xk : … [truncated]
+       return mm.qY.wG().getActiveMeshes().length + (null !== (Tm = null === (fm = Nw(mm)) || void 0 === fm ? void 0 : fm.drawStats().selected) && void 0 !== Tm ? Tm : 0) + (null !== (hm = null === (Am = Gw(mm)) || void 0 === Am ? void 0 : Am.selectedCount) && void 0 !== hm ? hm : … [truncated]
```

#### 674. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5632-L5633` → after: `L5632-L5633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5632-L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5632-L5633) · [Before (L5632-L5633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5632-L5633)

```diff
-       const Fk = kk.Xw.mG(),
-         Ik = sl(kk.Xw.engine),
+       const Tm = mm.qY.wG(),
+         fm = nw(mm.qY.engine),
```

#### 675. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5647` → after: `L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5647) · [Before (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5647)

```diff
-         return null !== (kk = (0, oy.l)(vl)) && void 0 !== kk && kk
+         return null !== (mm = (0, Zx.m)(bw)) && void 0 !== mm && mm
```

#### 676. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5649` → after: `L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5649) · [Before (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5649)

```diff
-       Fk && !kk.Xw.Tw && function(kk) {
+       Tm && !mm.qY.jY && function(mm) {
```

#### 677. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5678` → after: `L5678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5678) · [Before (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5678)

```diff
-       }(kk.Xw.engine);
+       }(mm.qY.engine);
```

#### 678. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5683` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5683) · [Before (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5683)

```diff
-         const Tk = ol(kk.Xw.mG(), null !== (Fk = Xk.terrainByChunk) && void 0 !== Fk && Fk, nl(kk), Gl(kk));
+         const Am = kw(mm.qY.wG(), null !== (Tm = hm.terrainByChunk) && void 0 !== Tm && Tm, Nw(mm), Gw(mm));
```

#### 679. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5688-L5690` → after: `L5688-L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5688-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5688-L5690) · [Before (L5688-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5688-L5690)

```diff
-           } = Fk, yk = null === Ik.residual ? "not counted (?drawcalls=1)" : `${Ik.residual>=0?"+":""}${Ik.residual}`;
-           console.info(`${Ik.backend} \xb7 ${Fk.dispatched.total} dispatched \xb7 ${Ik.activeMeshes} active meshes \xb7 residual ${yk}`), console.table(Fk.rows.slice(0, Xk));
-           const lk = kk.bw.o5.length,
+           } = Tm, xm = null === fm.residual ? "not counted (?drawcalls=1)" : `${fm.residual>=0?"+":""}${fm.residual}`;
+           console.info(`${fm.backend} \xb7 ${Tm.dispatched.total} dispatched \xb7 ${fm.activeMeshes} active meshes \xb7 residual ${xm}`), console.table(Tm.rows.slice(0, hm));
+           const wm = mm.UY.T6.length,
```

#### 680. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5692-L5693` → after: `L5692-L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5692-L5693) · [Before (L5692-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5692-L5693)

```diff
-           console.info([`terrain      ${Tk.meshes} meshes \xb7 ${Tk.chunkColumns} chunk columns \xb7 ${Tk.octreeBlocks} octree blocks \xb7 max ${Tk.maxMeshesPerOctreeBlock}/block \xb7 ${ak} meshes/block`, `objectBlocks ${ik.objectBlocks.draws} of ${lk} base meshes drawn \xb7 ${ik … [truncated]
-         }(kk, Tk, ul(kk), null !== (Ik = Xk.limit) && void 0 !== Ik ? Ik : 20), Tk
+           console.info([`terrain      ${Am.meshes} meshes \xb7 ${Am.chunkColumns} chunk columns \xb7 ${Am.octreeBlocks} octree blocks \xb7 max ${Am.maxMeshesPerOctreeBlock}/block \xb7 ${Dm} meshes/block`, `objectBlocks ${am.objectBlocks.draws} of ${wm} base meshes drawn \xb7 ${am … [truncated]
+         }(mm, Am, Pw(mm), null !== (fm = hm.limit) && void 0 !== fm ? fm : 20), Am
```

#### 681. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5702)

```diff
-             qk = null !== (Xk = null === (Tk = sl(kk.Xw.engine)) || void 0 === Tk ? void 0 : Tk.draws) && void 0 !== Xk ? Xk : 0;
+             im = null !== (hm = null === (Am = nw(mm.qY.engine)) || void 0 === Am ? void 0 : Am.draws) && void 0 !== hm ? hm : 0;
```

#### 682. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5704-L5705` → after: `L5704-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5704-L5705) · [Before (L5704-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5704-L5705)

```diff
-             ak++, ik.add(Sl(kk.Xw.mG(), nl(kk), Gl(kk)).total), lk.add(pl(kk));
-             const Fk = sl(kk.Xw.engine);
+             Dm++, am.add(Zw(mm.qY.wG(), Nw(mm), Gw(mm)).total), wm.add(Xw(mm));
+             const Tm = nw(mm.qY.engine);
```

#### 683. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5717` → after: `L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5717) · [Before (L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5717)

```diff
-             0 === Xk.frames && console.warn(`drawCalls.watch(${Fk}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${Fk}) over ${Xk.frames} frames on ${Xk.backend}`, Xk), Ik(Xk)
+             0 === hm.frames && console.warn(`drawCalls.watch(${Tm}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${Tm}) over ${hm.frames} frames on ${hm.backend}`, hm), fm(hm)
```

#### 684. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5726` → after: `L5726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5726) · [Before (L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5726)

```diff
-         } = ol(kk.Xw.mG(), !1, nl(kk), Gl(kk)), {
+         } = kw(mm.qY.wG(), !1, Nw(mm), Gw(mm)), {
```

#### 685. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5731` → after: `L5731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5731) · [Before (L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5731)

```diff
-         } = ul(kk), tk = null === (Fk = kk.Xw.Tw) || void 0 === Fk || null === (Ik = Fk.terrain) || void 0 === Ik ? void 0 : Ik.drawStats(), Zk = null === (Xk = nl(kk)) || void 0 === Xk ? void 0 : Xk.drawStats(), jk = Object.entries(Tk.byGroup).map((kk => {
+         } = Pw(mm), pm = null === (Tm = mm.qY.jY) || void 0 === Tm || null === (fm = Tm.terrain) || void 0 === fm ? void 0 : fm.drawStats(), Em = null === (hm = Nw(mm)) || void 0 === hm ? void 0 : hm.drawStats(), om = Object.entries(Am.byGroup).map((mm => {
```

#### 686. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5733` → after: `L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5733) · [Before (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5733)

```diff
-           return `${Fk}:${Ik.total}`
+           return `${Tm}:${fm.total}`
```

#### 687. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5740` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5740) · [Before (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5740)

```diff
-           value: `${Tk.total}`
+           value: `${Am.total}`
```

#### 688. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5743` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5743) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5743)

```diff
-           value: `${Tk.opaque} / ${Tk.alphaTest} / ${Tk.transparent}`
+           value: `${Am.opaque} / ${Am.alphaTest} / ${Am.transparent}`
```

#### 689. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5749` → after: `L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5749) · [Before (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5749)

```diff
-           value: `${tk.drawn} of ${tk.loaded} meshes (${lk})`
+           value: `${pm.drawn} of ${pm.loaded} meshes (${wm})`
```

#### 690. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5752` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5752) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5752)

```diff
-           value: `${ik.meshes} (${ik.chunkColumns} chunks, ${ik.octreeBlocks} blocks, max ${ik.maxMeshesPerOctreeBlock})`
+           value: `${am.meshes} (${am.chunkColumns} chunks, ${am.octreeBlocks} blocks, max ${am.maxMeshesPerOctreeBlock})`
```

#### 691. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5755` → after: `L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5755) · [Before (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5755)

```diff
-           value: `${yk.objectBlocks.draws} (${yk.objectBlocks.instances} inst)`
+           value: `${xm.objectBlocks.draws} (${xm.objectBlocks.instances} inst)`
```

#### 692. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5758` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5758) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5758)

```diff
-           value: `${yk.entityParts.draws} / ${yk.textPlanes.draws}`
+           value: `${xm.entityParts.draws} / ${xm.textPlanes.draws}`
```

#### 693. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5761` → after: `L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5761) · [Before (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5761)

```diff
-           value: `${Zk.drawn} draws of ${Zk.eq} meshes (${lk})`
+           value: `${Em.drawn} draws of ${Em.ni} meshes (${wm})`
```

#### 694. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5764` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5764) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5764)

```diff
-           value: `${yk.sky.draws} / ${yk.other.draws}`
+           value: `${xm.sky.draws} / ${xm.other.draws}`
```

#### 695. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5767` → after: `L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5767) · [Before (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5767)

```diff
-           value: `${ak}`
+           value: `${Dm}`
```

#### 696. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5770` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5770) · [Before (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5770)

```diff
-           value: qk ? `${qk.lastFrameDraws} (${Lk} residual)` : "- (?drawcalls=1)"
+           value: im ? `${im.lastFrameDraws} (${Rm} residual)` : "- (?drawcalls=1)"
```

#### 697. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5772-L5783` → after: `L5772-L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5772-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5772-L5783) · [Before (L5772-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5772-L5783)

```diff
-       }(kk), Fk && console.info(`Draw call counting on via ?${vl}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
-     }
-     var Rl = Ik(37662),
-       Ul = Ik(38376),
-       Cl = Ik(37769),
-       Nl = Ik(38764),
-       cl = Ik(38773),
-       Wl = Ik(37777),
-       fl = Ik(38780),
-       Bl = Ik(38782),
-       dl = Ik(37134);
-     var Yl = Ik(3702);
+       }(mm), Tm && console.info(`Draw call counting on via ?${bw}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
+     }
+     var yw = fm(37701),
+       Cw = fm(38482),
+       rw = fm(37802),
+       sw = fm(38863),
+       lw = fm(38871),
+       Mw = fm(37811),
+       uw = fm(38875),
+       Bw = fm(38884),
+       Lw = fm(37173);
+     var vw = fm(3729);
```

#### 698. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5785` → after: `L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5785) · [Before (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5785)

```diff
-     var gl = Ik(38797);
+     var Uw = fm(38900);
```

#### 699. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5788` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5788) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5788)

```diff
-       const Fk = kk.Xw.mG();
+       const Tm = mm.qY.wG();
```

#### 700. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5792-L5793` → after: `L5792-L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5792-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5792-L5793) · [Before (L5792-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5792-L5793)

```diff
-             MJ: Ik
-           } = kk, Xk = Ik.ku(Ik.names.zK), Tk = Ik.ku("lineToEntity");
+             qI: fm
+           } = mm, hm = fm.sG(fm.names.bK), Am = fm.sG("lineToEntity");
```

#### 701. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5795-L5797` → after: `L5795-L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5795-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5795-L5797) · [Before (L5795-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5795-L5797)

```diff
-             if (!(0, Wl.chainSkipsSmoothing)(kk, ik.le)) continue;
-             const Xk = Ik.eFk(ik.Xu);
-             null === (null === Xk || void 0 === Xk ? void 0 : Xk.Ip) && (0, Wl.meshOnScreen)(Xk.mesh, Fk) && (0, Wl.catchUpSkippedSmoothing)(kk, ik.le)
+             if (!(0, Mw.chainSkipsSmoothing)(mm, am.kO)) continue;
+             const hm = fm.oTm(am.lG);
+             null === (null === hm || void 0 === hm ? void 0 : hm.QG) && (0, Mw.meshOnScreen)(hm.mesh, Tm) && (0, Mw.catchUpSkippedSmoothing)(mm, am.kO)
```

#### 702. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5799` → after: `L5799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5799) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5799)

```diff
-           for (const ik of Tk)((0, Wl.chainSkipsSmoothing)(kk, ik.Xu) || (0, Wl.chainSkipsSmoothing)(kk, ik._targetEId)) && (0, Wl.meshOnScreen)(ik._line, Fk) && ((0, Wl.catchUpSkippedSmoothing)(kk, ik.Xu), (0, Wl.catchUpSkippedSmoothing)(kk, ik._targetEId), (0, gl.updateLineTran … [truncated]
+           for (const am of Am)((0, Mw.chainSkipsSmoothing)(mm, am.lG) || (0, Mw.chainSkipsSmoothing)(mm, am._targetEId)) && (0, Mw.meshOnScreen)(am._line, Tm) && ((0, Mw.catchUpSkippedSmoothing)(mm, am.lG), (0, Mw.catchUpSkippedSmoothing)(mm, am._targetEId), (0, Uw.updateLineTran … [truncated]
```

#### 703. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5803-L5807` → after: `L5803-L5807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5803-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5803-L5807) · [Before (L5803-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5803-L5807)

```diff
-     var hl = Ik(37794),
-       rl = Ik(1604),
-       Dl = Ik(37718),
-       Ml = Ik(1894),
-       ka = Ik(34111);
+     var gw = fm(37836),
+       Ww = fm(1668),
+       Fw = fm(37754),
+       mD = fm(1928),
+       TD = fm(34239);
```

#### 704. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5811` → after: `L5811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5811) · [Before (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5811)

```diff
-       kk.Xw.CFk = kk => {
+       mm.qY.yTm = mm => {
```

#### 705. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5813` → after: `L5813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5813) · [Before (L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5813)

```diff
-         Fk && (0, sk.Q)(kk), (0, Bk.e)(kk), Fk && (0, sk.n)(kk)
+         Tm && (0, nm.S)(mm), (0, Mm.c)(mm), Tm && (0, nm.q)(mm)
```

#### 706. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5815` → after: `L5815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5815) · [Before (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5815)

```diff
-         gJ: Ml.e.values
+         xI: mD.b.values
```

#### 707. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5817-L5820` → after: `L5817-L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5817-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5817-L5820) · [Before (L5817-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5817-L5820)

```diff
-       let Xk = kk.WH;
-       Ml.e.subscribe("blockReach", (() => {
-           const Fk = kk.bloxd.getBlockReach(kk.oR);
-           kk.WH === Xk && (kk.WH = Fk), Xk = Fk
+       let hm = mm.Fq;
+       mD.b.subscribe("blockReach", (() => {
+           const Tm = mm.bloxd.getBlockReach(mm.xH);
+           mm.Fq === hm && (mm.Fq = Tm), hm = Tm
```

#### 708. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5823-L5825` → after: `L5823-L5825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5823-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5823-L5825) · [Before (L5823-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5823-L5825)

```diff
-           for (const Ik of [Ll.c, Zl, wl, Hl]) {
-             const Fk = kk.MJ.cFk(Ik(kk));
-             kk.MJ.names[Fk] = Fk
+           for (const fm of [Rw.b, Ew, Yw, qw]) {
+             const Tm = mm.qI.rTm(fm(mm));
+             mm.qI.names[Tm] = Tm
```

#### 709. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5829-L5831` → after: `L5829-L5831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5829-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5829-L5831) · [Before (L5829-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5829-L5831)

```diff
-             const Fk = null !== (kk = Hk.g.mH.playerKilled > 1 ? 1 : void 0) && void 0 !== kk ? kk : 5;
-             (0, Ck.sendColyMessage)(Yl.Nf, {
-               wy: Fk
+             const Tm = null !== (mm = qm.j.hV.playerKilled > 1 ? 1 : void 0) && void 0 !== mm ? mm : 5;
+             (0, ym.sendColyMessage)(vw.mg, {
+               nx: Tm
```

#### 710. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5834` → after: `L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5834) · [Before (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5834)

```diff
-           const Fk = Ik(38805);
+           const Tm = fm(38909);
```

#### 711. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5837` → after: `L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5837) · [Before (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5837)

```diff
-             if (Xk.default && (Xk = Xk.default), "function" !== typeof Xk) throw new Error(`components/${Ik.replace(/^\.\//,"")} is under components/ but does not export a component factory - move it elsewhere`);
+             if (hm.default && (hm = hm.default), "function" !== typeof hm) throw new Error(`components/${fm.replace(/^\.\//,"")} is under components/ but does not export a component factory - move it elsewhere`);
```

#### 712. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5839-L5840` → after: `L5839-L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5839-L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5839-L5840) · [Before (L5839-L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5839-L5840)

```diff
-               ik = kk.MJ.cFk(Tk);
-             kk.MJ.names[ik] = ik
+               am = mm.qI.rTm(Am);
+             mm.qI.names[am] = am
```

#### 713. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5843` → after: `L5843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5843) · [Before (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5843)

```diff
-             MJ: Xk
+             qI: hm
```

#### 714. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5845-L5847` → after: `L5845-L5847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5845-L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5845-L5847) · [Before (L5845-L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5845-L5847)

```diff
-           Xk.RFk = Xk.PFk("genericLifeform"), Xk.WFk = Xk.PFk("genericLifeformState");
-           const Tk = Xk.PFk("VK");
-           Xk.fFk = Tk, Xk.BFk = kk => {
+           hm.PTm = hm.VTm("genericLifeform"), hm.sTm = hm.VTm("genericLifeformState");
+           const Am = hm.VTm("zK");
+           hm.lTm = Am, hm.MTm = mm => {
```

#### 715. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5849-L5852` → after: `L5849-L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5849-L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5849-L5852) · [Before (L5849-L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5849-L5852)

```diff
-             return null === (Fk = Tk(kk)) || void 0 === Fk ? void 0 : Fk.VK
-           }, Xk.dFk = Xk.PFk("entityName"), Xk.YFk = Xk.PFk("humanoidMesh"), Xk.AFk = Xk.PFk("fourLeggedMesh"), Xk.gFk = Xk.PFk("proximityFade");
-           const ik = Xk.PFk("movementInputs");
-           Xk.mFk = () => ik(kk.oR)
+             return null === (Tm = Am(mm)) || void 0 === Tm ? void 0 : Tm.zK
+           }, hm.uTm = hm.VTm("entityName"), hm.BTm = hm.VTm("humanoidMesh"), hm.LTm = hm.VTm("fourLeggedMesh"), hm.vTm = hm.VTm("proximityFade");
+           const am = hm.VTm("movementInputs");
+           hm.tTm = () => am(mm.xH)
```

#### 716. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5855` → after: `L5855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5855) · [Before (L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5855)

```diff
-           kk.Xw.kp.onCatchUpCulled = (Fk, Ik) => {
+           mm.qY.YG.onCatchUpCulled = (Tm, fm) => {
```

#### 717. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5858-L5860` → after: `L5858-L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5858-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5858-L5860) · [Before (L5858-L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5858-L5860)

```diff
-               if ((0, Wl.catchUpSkippedSmoothing)(kk, Fk), (null === (Xk = kk.MJ.getState(Fk, kk.MJ.names.Fe)) || void 0 === Xk ? void 0 : Xk._thinObjectId) === Ik) return;
-               (0, fl.catchUpAutoRotate)(kk, Fk, Ik), (0, Rl.getCaughtUpMeshRotation)(kk, Fk), (0, Cl.catchUpWalkingState)(kk, Fk), (0, Nl.catchUpHumanoidPose)(kk, Fk), (0, cl.catchUpFourLeggedPose)(kk, Fk), null === (Tk = kk.MJ.getState(Fk, "animator")) || void 0 === Tk || Tk.cat … [truncated]
-               const ik = kk.MJ.RFk(Fk);
+               if ((0, Mw.catchUpSkippedSmoothing)(mm, Tm), (null === (hm = mm.qI.getState(Tm, mm.qI.names.QO)) || void 0 === hm ? void 0 : hm._thinObjectId) === fm) return;
+               (0, uw.catchUpAutoRotate)(mm, Tm, fm), (0, yw.getCaughtUpMeshRotation)(mm, Tm), (0, rw.catchUpWalkingState)(mm, Tm), (0, sw.catchUpHumanoidPose)(mm, Tm), (0, lw.catchUpFourLeggedPose)(mm, Tm), null === (Am = mm.qI.getState(Tm, "animator")) || void 0 === Am || Am.cat … [truncated]
+               const am = mm.qI.PTm(Tm);
```

#### 718. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5866` → after: `L5866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5866) · [Before (L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5866)

```diff
-           kk.skk = Fk => 0 !== Fk && !kk.yj.e_(Fk), (0, YF.c)(kk.skk);
+           mm.Kmm = Tm => 0 !== Tm && !mm.Vo.i_(Tm), (0, LT.d)(mm.Kmm);
```

#### 719. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5868` → after: `L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5868) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5868)

```diff
-             MJ: Fk
+             qI: Tm
```

#### 720. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5870-L5872` → after: `L5870-L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5870-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5870-L5872) · [Before (L5870-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5870-L5872)

```diff
-           Fk.FFk = Fk.PFk("movement"), Fk.KFk = Fk.PFk("moveState");
-           const Ik = Fk.PFk("inventory");
-           Fk.QFk = Ik, Fk.sFk = kk => {
+           Tm.mTm = Tm.VTm("movement"), Tm.ITm = Tm.VTm("moveState");
+           const fm = Tm.VTm("inventory");
+           Tm.KTm = fm, Tm.QTm = mm => {
```

#### 721. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5875-L5876` → after: `L5875-L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5875-L5876) · [Before (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5875-L5876)

```diff
-           }, Fk.VFk = kk => Ik(kk).opWrapper, Fk.zFk = Fk.SFk("inventory")
-         }(kk), kk.Ekk = (Fk, Ik, Xk, Tk) => kk.skk(Fk) && (kk.yj.lB(Fk) || kk.XZ.Rkk(Ik, Xk, Tk)),
+           }, Tm.nTm = mm => fm(mm).opWrapper, Tm.JTm = Tm.cTm("inventory")
+         }(mm), mm.Zmm = (Tm, fm, hm, Am) => mm.Kmm(Tm) && (mm.Vo.Tu(Tm) || mm.oE.Xmm(fm, hm, Am)),
```

#### 722. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5881-L5884` → after: `L5881-L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5881-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5881-L5884) · [Before (L5881-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5881-L5884)

```diff
-             } = kk.Xw,
-             Xk = (0, xl.f)(Fk),
-             Tk = new Jl.e(Xk, (() => {
-               kk.Xw.resize()
+             } = mm.qY,
+             hm = (0, Vw.d)(Tm),
+             Am = new jw.c(hm, (() => {
+               mm.qY.resize()
```

#### 723. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5890-L5891` → after: `L5890-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5890-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5890-L5891) · [Before (L5890-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5890-L5891)

```diff
-             } = uy.d.get("clientEscMenuOptions");
-             Fk.style.imageRendering = (0, Jl.N)((0, Jl.x)(ik));
+             } = Xx.c.get("clientEscMenuOptions");
+             Tm.style.imageRendering = (0, jw.S)((0, jw.C)(am));
```

#### 724. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5893` → after: `L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5893) · [Before (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5893)

```diff
-               const kk = (0, xl.d)(Xk, Tk);
+               const mm = (0, Vw.c)(hm, Am);
```

#### 725. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5897-L5898` → after: `L5897-L5898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5897-L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5897-L5898) · [Before (L5897-L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5897-L5898)

```diff
-                   Fk.style.width = `${kk.width}px`, Fk.style.height = `${kk.height}px`
-                 } else(0, Jl.f)(Fk, kk.grid);
+                   Tm.style.width = `${mm.width}px`, Tm.style.height = `${mm.height}px`
+                 } else(0, jw.g)(Tm, mm.grid);
```

#### 726. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5902` → after: `L5902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5902) · [Before (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5902)

```diff
-             kk.Xw.resize = yk, kk.container.RP.PJ = yk, yk()
+             mm.qY.resize = xm, mm.container.vI.zV = xm, xm()
```

#### 727. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5904-L5908` → after: `L5904-L5908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5904-L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5904-L5908) · [Before (L5904-L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5904-L5908)

```diff
-           ka.c.onRelease((() => {
-             kk.Xw.resize()
-           })), (0, Kl.n)((() => {
-             kk.Xw.resize()
-           })), ik(), Hk.g.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+           TD.e.onRelease((() => {
+             mm.qY.resize()
+           })), (0, Kw.k)((() => {
+             mm.qY.resize()
+           })), am(), qm.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 728. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5912-L5921` → after: `L5912-L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5912-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5912-L5921) · [Before (L5912-L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5912-L5921)

```diff
-       const Tk = kk.Xw.engine.getInfo();
-       (0, bk.seedGpuVendor)(Tk.vendor), "webgl2" === (0, Yy.f)() && (0, Pl.A)(Tk.vendor, Tk.renderer), bl(kk), (0, hl.L)(kk), null === (Fk = Dl.b.noaReady) || void 0 === Fk || Fk.call(Dl.b, kk)
-     }
-     var Ia = Ik(4649),
-       Xa = Ik(37728),
-       Ta = Ik(37726),
-       ia = Ik(38945),
-       ya = Ik(37712),
-       la = Ik(37736),
-       aa = Ik(39073);
+       const Am = mm.qY.engine.getInfo();
+       (0, Xm.seedGpuVendor)(Am.vendor), "webgl2" === (0, Lx.h)() && (0, Iw.y)(Am.vendor, Am.renderer), Hw(mm), (0, gw.F)(mm), null === (Tm = Fw.e.noaReady) || void 0 === Tm || Tm.call(Fw.e, mm)
+     }
+     var hD = fm(4604),
+       AD = fm(37762),
+       aD = fm(37758),
+       xD = fm(39079),
+       wD = fm(37751),
+       DD = fm(37764),
+       iD = fm(39192);
```

#### 729. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5923-L5924` → after: `L5923-L5924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5923-L5924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5923-L5924) · [Before (L5923-L5924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5923-L5924)

```diff
-     Hk.g.subscribe("noaTick", (() => {
-       Date.now() - qa > 9200 && ((0, Ck.sendColyMessage)(Yl.Zf, (0, Nk.e)(), !0), qa = Date.now())
+     qm.j.subscribe("noaTick", (() => {
+       Date.now() - RD > 9200 && ((0, ym.sendColyMessage)(vw.xg, (0, Cm.h)(), !0), RD = Date.now())
```

#### 730. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5926-L5930` → after: `L5926-L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5926-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5926-L5930) · [Before (L5926-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5926-L5930)

```diff
-     var La = Ik(39118),
-       ta = Ik(36764),
-       Za = Ik(37299),
-       ja = Ik(38185),
-       ea = Ik(37435);
+     var pD = fm(39245),
+       ED = fm(36843),
+       oD = fm(37312),
+       OD = fm(38277),
+       YD = fm(37451);
```

#### 731. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5933` → after: `L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5933) · [Before (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5933)

```diff
-         this.XZ = kk, this.seen = new WeakMap, this.lastToken = 0
+         this.oE = mm, this.seen = new WeakMap, this.lastToken = 0
```

#### 732. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5936` → after: `L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5936) · [Before (L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5936)

```diff
-         const Xk = this.XZ.Qw.sw(kk, Fk, Ik);
+         const hm = this.oE.HY.yY(mm, Tm, fm);
```

#### 733. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5942` → after: `L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5942) · [Before (L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5942)

```diff
-             voxelVersion: Xk.Me,
+             voxelVersion: hm.EY,
```

#### 734. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5946` → after: `L5946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5946) · [Before (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5946)

```diff
-         return Tk.voxelVersion !== Xk.Me && (Tk.voxelVersion = Xk.Me, Tk.token = ++this.lastToken), Tk.token
+         return Am.voxelVersion !== hm.EY && (Am.voxelVersion = hm.EY, Am.token = ++this.lastToken), Am.token
```

#### 735. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5949-L5950` → after: `L5949-L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5949-L5950) · [Before (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5949-L5950)

```diff
-         const ak = ek.f.se,
-           qk = this.XZ.Qw;
+         const Dm = Om.f.MO,
+           im = this.oE.HY;
```

#### 736. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5959` → after: `L5959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5959) · [Before (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5959)

```diff
-               const Hk = qk.sw(Tk, tk, Xk);
+               const qm = im.yY(Am, pm, hm);
```

#### 737. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5965-L5966` → after: `L5965-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5965-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5965-L5966) · [Before (L5965-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5965-L5966)

```diff
-                 Qk = Hk.vj,
-                 sk = Hk.GZ,
+                 Qm = qm.vo,
+                 nm = qm.lE,
```

#### 738. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5992-L5993` → after: `L5992-L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5992-L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5992-L5993) · [Before (L5992-L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5992-L5993)

```diff
-     var Ha = Ik(36618),
-       Ja = Ik(34119);
+     var jD = fm(36705),
+       VD = fm(34245);
```

#### 739. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5996)

```diff
-         this.qZ = kk, this.bloxd = Fk, this.userContext = Ik, this.output = Xk, this.sounds = Tk, this.chunks = void 0, this.actionRay = {
+         this.IE = mm, this.bloxd = Tm, this.userContext = fm, this.output = hm, this.sounds = Am, this.chunks = void 0, this.actionRay = {
```

#### 740. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L5999)

```diff
-         }, this.chunks = new wa(kk.XZ)
+         }, this.chunks = new qD(mm.oE)
```

#### 741. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6006-L6007` → after: `L6006-L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6006-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6006-L6007) · [Before (L6006-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6006-L6007)

```diff
-         const Ik = null === (Fk = this.qZ.MJ.ZY(this.toLocalId(kk))) || void 0 === Fk ? void 0 : Fk.position;
-         if (!Ik) throw new Error(`Entity ${kk} has no replicated position`);
+         const fm = null === (Tm = this.IE.qI.uB(this.toLocalId(mm))) || void 0 === Tm ? void 0 : Tm.position;
+         if (!fm) throw new Error(`Entity ${mm} has no replicated position`);
```

#### 742. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6011` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6011) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6011)

```diff
-         return !!this.bloxd.client.isClientGameSessionActive() && (null === kk || void 0 === kk || Boolean(this.qZ.MJ.ZY(this.toLocalId(kk))))
+         return !!this.bloxd.client.isClientGameSessionActive() && (null === mm || void 0 === mm || Boolean(this.IE.qI.uB(this.toLocalId(mm))))
```

#### 743. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6015` → after: `L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6015) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6015)

```diff
-         return !1 !== (null === (Fk = this.qZ.MJ.WFk(this.toLocalId(kk))) || void 0 === Fk ? void 0 : Fk.isAlive)
+         return !1 !== (null === (Tm = this.IE.qI.sTm(this.toLocalId(mm))) || void 0 === Tm ? void 0 : Tm.isAlive)
```

#### 744. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6019` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6019) · [Before (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6019)

```diff
-         return null === Xk || Xk !== this.qZ.oR && "Player" !== this.getEntityType(Xk) ? this.bloxd.getDefaultItemStat(Fk, Ik) : this.bloxd.getItemStat(Xk, Fk, Ik)
+         return null === hm || hm !== this.IE.xH && "Player" !== this.getEntityType(hm) ? this.bloxd.getDefaultItemStat(Tm, fm) : this.bloxd.getItemStat(hm, Tm, fm)
```

#### 745. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6022` → after: `L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6022) · [Before (L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6022)

```diff
-         if (kk !== this.qZ.oR && kk !== this.qZ.Nkk) throw new Error("Attempted to get a client option for a player that is not the local player");
+         if (mm !== this.IE.xH && mm !== this.IE.Cmm) throw new Error("Attempted to get a client option for a player that is not the local player");
```

#### 746. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6028` → after: `L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6028) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6028)

```diff
-         this.assertLocalPlayer(kk, "open shop"), Hk.g.GL("showShopFromServer", {
+         this.assertLocalPlayer(mm, "open shop"), qm.j.gp("showShopFromServer", {
```

#### 747. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6030` → after: `L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6030) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6030)

```diff
-           ET: Ik
+           CA: fm
```

#### 748. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6039` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6039) · [Before (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6039)

```diff
-         }]), Hk.g.GL("chat", {
+         }]), qm.j.gp("chat", {
```

#### 749. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6065` → after: `L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6065) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6065)

```diff
-         this.assertLocalPlayer(kk, "set an other-entity setting"), (0, Za.c)(Fk), (0, Za.b)(Fk, Ik, Xk)
+         this.assertLocalPlayer(mm, "set an other-entity setting"), (0, oD.f)(Tm), (0, oD.d)(Tm, fm, hm)
```

#### 750. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6068` → after: `L6068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6068) · [Before (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6068)

```diff
-         return this.qZ.MJ.OJ(kk)
+         return this.IE.qI.rV(mm)
```

#### 751. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6072` → after: `L6072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6072) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6072)

```diff
-         const Xk = null === (Ik = this.qZ.MJ.ZY(this.toLocalId(kk))) || void 0 === Ik ? void 0 : Ik.Im;
+         const hm = null === (fm = this.IE.qI.uB(this.toLocalId(mm))) || void 0 === fm ? void 0 : fm.hU;
```

#### 752. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6074` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6074) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6074)

```diff
-         const Tk = this.qZ.SZ;
+         const Am = this.IE.HE;
```

#### 753. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6081` → after: `L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6081) · [Before (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6081)

```diff
-         return this.qZ.MJ.ZY(Xk) && null !== (Fk = null === (Ik = (0, Rl.getCaughtUpMeshRotation)(this.qZ, Xk)) || void 0 === Ik ? void 0 : Ik.renderRotation[1]) && void 0 !== Fk ? Fk : null
+         return this.IE.qI.uB(hm) && null !== (Tm = null === (fm = (0, yw.getCaughtUpMeshRotation)(this.IE, hm)) || void 0 === fm ? void 0 : fm.renderRotation[1]) && void 0 !== Tm ? Tm : null
```

#### 754. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6085` → after: `L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6085) · [Before (L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6085)

```diff
-         const Fk = this.qZ.MJ.FFk(this.qZ.oR);
+         const Tm = this.IE.qI.mTm(this.IE.xH);
```

#### 755. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6088` → after: `L6088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6088) · [Before (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6088)

```diff
-           jumpHeld: !0 === (null === (kk = this.qZ.MJ.KFk(this.qZ.oR)) || void 0 === kk ? void 0 : kk.jumping)
+           jumpHeld: !0 === (null === (mm = this.IE.qI.ITm(this.IE.xH)) || void 0 === mm ? void 0 : mm.jumping)
```

#### 756. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6091` → after: `L6091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6091) · [Before (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6091)

```diff
-       BFk(kk) {
+       MTm(mm) {
```

#### 757. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6093` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6093) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6093)

```diff
-         return this.isLocalPlayer(kk) && null !== (Fk = null === (Ik = this.qZ.MJ.QFk(this.qZ.oR)) || void 0 === Ik ? void 0 : Ik.selectedItem) && void 0 !== Fk ? Fk : null
+         return this.isLocalPlayer(mm) && null !== (Tm = null === (fm = this.IE.qI.KTm(this.IE.xH)) || void 0 === fm ? void 0 : fm.selectedItem) && void 0 !== Tm ? Tm : null
```

#### 758. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6096` → after: `L6096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6096) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6096)

```diff
-         return this.qZ.MJ.sFk(this.qZ.oR).getItems()
+         return this.IE.qI.QTm(this.IE.xH).getItems()
```

#### 759. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6100-L6101` → after: `L6100-L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6100-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6100-L6101) · [Before (L6100-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6100-L6101)

```diff
-         const Xk = null === (kk = this.qZ.MJ.fFk(this.qZ.oR)) || void 0 === kk ? void 0 : kk.VK;
-         return null !== Xk && void 0 !== Xk && Xk.isGun() ? null !== (Fk = null === (Ik = Xk.inaccuracyCalculator) || void 0 === Ik ? void 0 : Ik.getInaccuracy()) && void 0 !== Fk ? Fk : 0 : null
+         const hm = null === (mm = this.IE.qI.lTm(this.IE.xH)) || void 0 === mm ? void 0 : mm.zK;
+         return null !== hm && void 0 !== hm && hm.isGun() ? null !== (Tm = null === (fm = hm.inaccuracyCalculator) || void 0 === fm ? void 0 : fm.getInaccuracy()) && void 0 !== Tm ? Tm : 0 : null
```

#### 760. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6105` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6105) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6105)

```diff
-         const Xk = (0, Ha.e)(uy.d.get("crosshairGameView"), uy.d.get("crosshairShownOverride"));
+         const hm = (0, jD.e)(Xx.c.get("crosshairGameView"), Xx.c.get("crosshairShownOverride"));
```

#### 761. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6107-L6108` → after: `L6107-L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6107-L6108) · [Before (L6107-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6107-L6108)

```diff
-         const Tk = null === (kk = this.qZ.MJ.fFk(this.qZ.oR)) || void 0 === kk ? void 0 : kk.VK,
-           ik = this.bloxd.getClientPredictedOption(this.qZ.oR, "gunshotOrigin"),
+         const Am = null === (mm = this.IE.qI.lTm(this.IE.xH)) || void 0 === mm ? void 0 : mm.zK,
+           am = this.bloxd.getClientPredictedOption(this.IE.xH, "gunshotOrigin"),
```

#### 762. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6111` → after: `L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6111) · [Before (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6111)

```diff
-         return (0, Ha.k)({
+         return (0, jD.h)({
```

#### 763. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6114` → after: `L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6114) · [Before (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6114)

```diff
-         }, this.qZ.camera.JY > 1, (0, Ja.b)(), ik)
+         }, this.IE.camera.fL > 1, (0, VD.e)(), am)
```

#### 764. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6117` → after: `L6117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6117) · [Before (L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6117)

```diff
-         uy.d.set({
+         Xx.c.set({
```

#### 765. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6122` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6122) · [Before (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6122)

```diff
-         return this.isLocalPlayer(kk) ? this.qZ.MJ.sFk(this.qZ.oR).getFreeSlotCount() : null
+         return this.isLocalPlayer(mm) ? this.IE.qI.QTm(this.IE.xH).getFreeSlotCount() : null
```

#### 766. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6125` → after: `L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6125) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6125)

```diff
-         return this.isLocalPlayer(kk) ? this.qZ.MJ.sFk(this.qZ.oR).getSelectedSlotIndex() : null
+         return this.isLocalPlayer(mm) ? this.IE.qI.QTm(this.IE.xH).getSelectedSlotIndex() : null
```

#### 767. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6128` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6128) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6128)

```diff
-         return this.isLocalPlayer(kk) ? this.qZ.MJ.VFk(this.qZ.oR).getItemAtIdx(Fk) : null
+         return this.isLocalPlayer(mm) ? this.IE.qI.nTm(this.IE.xH).getItemAtIdx(Tm) : null
```

#### 768. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6131` → after: `L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6131) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6131)

```diff
-         return ja.d.swapPosClient(this.qZ.MJ.VFk(this.qZ.oR), kk, Fk)
+         return OD.d.swapPosClient(this.IE.qI.nTm(this.IE.xH), mm, Tm)
```

#### 769. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6134` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6134) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6134)

```diff
-         return this.qZ.MJ.KFk(this.toLocalId(kk)).crouching
+         return this.IE.qI.ITm(this.toLocalId(mm)).crouching
```

#### 770. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6138` → after: `L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6138) · [Before (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6138)

```diff
-         const Fk = null === (kk = this.qZ.MJ.fFk(this.qZ.oR)) || void 0 === kk ? void 0 : kk.fistItem;
+         const Tm = null === (mm = this.IE.qI.lTm(this.IE.xH)) || void 0 === mm ? void 0 : mm.fistItem;
```

#### 771. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6143` → after: `L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6143) · [Before (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6143)

```diff
-         return !0 === (null === (kk = this.qZ.MJ.fFk(this.qZ.oR)) || void 0 === kk || null === (Fk = kk.fistItem) || void 0 === Fk ? void 0 : Fk.attemptingToBreak)
+         return !0 === (null === (mm = this.IE.qI.lTm(this.IE.xH)) || void 0 === mm || null === (Tm = mm.fistItem) || void 0 === Tm ? void 0 : Tm.attemptingToBreak)
```

#### 772. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6146` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6146) · [Before (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6146)

```diff
-         return this.qZ.Vkk
+         return this.IE.Qmm
```

#### 773. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6150-L6151` → after: `L6150-L6151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6150-L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6150-L6151) · [Before (L6150-L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6150-L6151)

```diff
-         this.qZ.Km(null !== (kk = this.qZ.ckk) && void 0 !== kk ? kk : this.qZ.camera.hA(), this.actionRay.origin);
-         const Ik = null !== (Fk = this.qZ.Wkk) && void 0 !== Fk ? Fk : this.qZ.camera.Am();
+         this.IE.kU(null !== (mm = this.IE.rmm) && void 0 !== mm ? mm : this.IE.camera.Fv(), this.actionRay.origin);
+         const fm = null !== (Tm = this.IE.smm) && void 0 !== Tm ? Tm : this.IE.camera.dU();
```

#### 774. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6156` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6156) · [Before (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6156)

```diff
-         return this.bloxd.posSatisfiesModifyConstraints(this.qZ.oR, kk, Fk, Ik)
+         return this.bloxd.posSatisfiesModifyConstraints(this.IE.xH, mm, Tm, fm)
```

#### 775. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6159` → after: `L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6159) · [Before (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6159)

```diff
-         return this.qZ.yj.lB(kk) && !this.qZ.XZ.iN.has(kk)
+         return this.IE.Vo.Tu(mm) && !this.IE.oE.uC.has(mm)
```

#### 776. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6163` → after: `L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6163) · [Before (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6163)

```diff
-         return (0, Lk.j)(kk, Fk)
+         return (0, Rm.k)(mm, Tm)
```

#### 777. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6168-L6169` → after: `L6168-L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6168-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6168-L6169) · [Before (L6168-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6168-L6169)

```diff
-       tFk(kk, Fk, Ik, Xk, Tk) {
-         return this.qZ.MJ.tFk(kk, Fk, Ik, this.qZ.yj.XN(Xk), Tk)
+       RTm(mm, Tm, fm, hm, Am) {
+         return this.IE.qI.RTm(mm, Tm, fm, this.IE.Vo.lC(hm), Am)
```

#### 778. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6178` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6178) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6178)

```diff
-         return this.bloxd.jB(kk, Fk, Ik)
+         return this.bloxd.Yu(mm, Tm, fm)
```

#### 779. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6181` → after: `L6181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6181) · [Before (L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6181)

```diff
-         return this.bloxd.QJ(kk, Fk, Ik)
+         return this.bloxd.XV(mm, Tm, fm)
```

#### 780. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6186-L6187` → after: `L6186-L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6186-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6186-L6187) · [Before (L6186-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6186-L6187)

```diff
-         const yk = this.sounds.play(Fk, Ik, null === Tk || void 0 === Tk ? void 0 : Tk.rX, null === Tk || void 0 === Tk ? void 0 : Tk.maxHearDist, null === Tk || void 0 === Tk ? void 0 : Tk.refDistance, ik);
-         return 1 === Xk ? yk : yk.rate(Xk)
+         const xm = this.sounds.play(Tm, fm, null === Am || void 0 === Am ? void 0 : Am.aA, null === Am || void 0 === Am ? void 0 : Am.maxHearDist, null === Am || void 0 === Am ? void 0 : Am.refDistance, am);
+         return 1 === hm ? xm : xm.rate(hm)
```

#### 781. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6193` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6193) · [Before (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6193)

```diff
-         this.bloxd.lG(kk, Fk, Ik, Xk)
+         this.bloxd.zN(mm, Tm, fm, hm)
```

#### 782. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6244` → after: `L6244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6244) · [Before (L6244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6244)

```diff
-         return (0, ea.e)(kk)
+         return (0, YD.g)(mm)
```

#### 783. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6247` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6247) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6247)

```diff
-         return null !== kk && void 0 !== kk && this.toLocalId(kk) === this.qZ.oR
+         return null !== mm && void 0 !== mm && this.toLocalId(mm) === this.IE.xH
```

#### 784. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6251-L6252` → after: `L6251-L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6251-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6251-L6252) · [Before (L6251-L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6251-L6252)

```diff
-         const Ik = this.qZ.MJ.getState(kk, "lineToEntity");
-         return null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.lineToEId) && void 0 !== Fk ? Fk : null
+         const fm = this.IE.qI.getState(mm, "lineToEntity");
+         return null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.lineToEId) && void 0 !== Tm ? Tm : null
```

#### 785. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6255` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6255) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6255)

```diff
-         return this.qZ.camera.OJ()
+         return this.IE.camera.rV()
```

#### 786. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6258` → after: `L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6258) · [Before (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6258)

```diff
-         return this.qZ.Xw.PD().far
+         return this.IE.qY.cW().far
```

#### 787. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6267` → after: `L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6267) · [Before (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6267)

```diff
-         const Fk = this.qZ.MJ.getState(kk, "itemState");
+         const Tm = this.IE.qI.getState(mm, "itemState");
```

#### 788. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6271-L6273` → after: `L6271-L6273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6271-L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6271-L6273) · [Before (L6271-L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6271-L6273)

```diff
-         (0, Ck.sendColyMessage)(Yl.Xf, {
-           oq: `/${kk}`,
-           vq: null
+         (0, ym.sendColyMessage)(vw.ug, {
+           Hi: `/${mm}`,
+           yi: null
```

#### 789. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6277` → after: `L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6277) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6277)

```diff
-         return kk === this.qZ.Nkk ? this.qZ.oR : kk
+         return mm === this.IE.Cmm ? this.IE.xH : mm
```

#### 790. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6280` → after: `L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6280) · [Before (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6280)

```diff
-         if (kk !== this.qZ.oR) throw new Error(`Attempted to ${Fk} for a player that is not the local player`)
+         if (mm !== this.IE.xH) throw new Error(`Attempted to ${Tm} for a player that is not the local player`)
```

#### 791. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6283` → after: `L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6283) · [Before (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6283)

```diff
-     var Pa = Ik(39121);
+     var KD = fm(39249);
```

#### 792. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6288` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6288) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6288)

```diff
-         const Fk = (0, sk.k)(kk, "groundArrowPathTex", {
+         const Tm = (0, nm.m)(mm, "groundArrowPathTex", {
```

#### 793. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6292` → after: `L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6292) · [Before (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6292)

```diff
-             samplingMode: Kk.i.nearestNearestMipLinear,
+             samplingMode: Km.e.nearestNearestMipLinear,
```

#### 794. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6294` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6294) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6294)

```diff
-             wrap: Kk.d.wrap
+             wrap: Km.b.wrap
```

#### 795. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6296` → after: `L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6296) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6296)

```diff
-           Ik = (0, sk.h)(Fk),
+           fm = (0, nm.j)(Tm),
```

#### 796. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6311)

```diff
-       return (0, Yk.e)({
+       return (0, Bm.b)({
```

#### 797. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6313` → after: `L6313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6313) · [Before (L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6313)

```diff
-         Yw: kk,
+         Aq: mm,
```

#### 798. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6318)

```diff
-           emissiveColor: (0, Pa.d)(Fk),
+           emissiveColor: (0, KD.b)(Tm),
```

#### 799. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6333-L6334` → after: `L6333-L6334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6333-L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6333-L6334) · [Before (L6333-L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6333-L6334)

```diff
-       Va = null !== kk && void 0 !== kk ? kk : sa;
-       for (const Fk of za)(0, Yk.g)(Fk, {
+       cD = null !== mm && void 0 !== mm ? mm : JD;
+       for (const Tm of zD)(0, Bm.e)(Tm, {
```

#### 800. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6341` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6341) · [Before (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6341)

```diff
-         this.qZ = kk, this.buffers = Fk, this.positions = void 0, this.uvs = void 0, this.cachedIndices = void 0, this.edgeResult = {
+         this.IE = mm, this.buffers = Tm, this.positions = void 0, this.uvs = void 0, this.cachedIndices = void 0, this.edgeResult = {
```

#### 801. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6348-L6349` → after: `L6348-L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6348-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6348-L6349) · [Before (L6348-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6348-L6349)

```diff
-           (0, Yk.g)(kk, {
-             emissiveColor: (0, Pa.d)(Fk)
+           (0, Bm.e)(mm, {
+             emissiveColor: (0, KD.b)(Tm)
```

#### 802. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6354` → after: `L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6354) · [Before (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6354)

```diff
-         this.uvOffset = (this.uvOffset + Fk / 1e3 * .55) % 3, this.material && (0, sk.L)(this.material, -this.uvOffset);
+         this.uvOffset = (this.uvOffset + Tm / 1e3 * .55) % 3, this.material && (0, nm.I)(this.material, -this.uvOffset);
```

#### 803. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6360` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6360) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6360)

```diff
-         null === (kk = this.mesh) || void 0 === kk || kk.Av(!1)
+         null === (mm = this.mesh) || void 0 === mm || mm.Dk(!1)
```

#### 804. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6431` → after: `L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6431) · [Before (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6431)

```diff
-         this.material || (this.material = Qa(this.qZ.Xw.mG(), this.colour, Va.alpha), za.add(this.material));
+         this.material || (this.material = nD(this.IE.qY.wG(), this.colour, cD.alpha), zD.add(this.material));
```

#### 805. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6451` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6451) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6451)

```diff
-           this.mesh ? (0, Pk.b)(this.mesh, Xk) : (this.mesh = (0, Pk.p)(this.qZ.Xw, "groundArrowPath", Xk), this.mesh.material = this.material, this.mesh.gw = !1, this.mesh.receiveShadows = !1, this.mesh.ne = !0, this.qZ.Xw.hw(this.mesh, !1, this.qZ.SZ))
+           this.mesh ? (0, Im.c)(this.mesh, hm) : (this.mesh = (0, Im.o)(this.IE.qY, "groundArrowPath", hm), this.mesh.material = this.material, this.mesh.xq = !1, this.mesh.receiveShadows = !1, this.mesh.gO = !0, this.IE.qY.Dq(this.mesh, !1, this.IE.HE))
```

#### 806. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6453` → after: `L6453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6453) · [Before (L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6453)

```diff
-         (0, nk.q)(this.mesh, 0, 0, 0), this.mesh.Av(!0)
+         (0, Sm.q)(this.mesh, 0, 0, 0), this.mesh.Dk(!0)
```

#### 807. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6463` → after: `L6463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6463) · [Before (L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6463)

```diff
-       const ik = ((Ik > 0 ? Tk : Xk) - kk) / Ik;
+       const am = ((fm > 0 ? Am : hm) - mm) / fm;
```

#### 808. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6466` → after: `L6466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6466) · [Before (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6466)

```diff
-     var Oa = Ik(38879);
+     var eD = fm(38984);
```

#### 809. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6472` → after: `L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6472) · [Before (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6472)

```diff
-       const Xk = null !== Ik && void 0 !== Ik ? Ik : kk.childrenNodeParams,
+       const hm = null !== fm && void 0 !== fm ? fm : mm.childrenNodeParams,
```

#### 810. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6481` → after: `L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6481) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6481)

```diff
-         this.qZ = kk, this.nametagBases = new WeakMap, this.nametags = new Map, this.rotations = new Set
+         this.IE = mm, this.nametagBases = new WeakMap, this.nametags = new Map, this.rotations = new Set
```

#### 811. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6484` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6484) · [Before (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6484)

```diff
-         const Ik = this.qZ.MJ.dFk(kk);
+         const fm = this.IE.qI.uTm(mm);
```

#### 812. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6489` → after: `L6489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6489) · [Before (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6489)

```diff
-         const ik = (null !== Tk && void 0 !== Tk ? Tk : Oa.b) + Fk;
+         const am = (null !== Am && void 0 !== Am ? Am : eD.c) + Tm;
```

#### 813. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6502` → after: `L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6502) · [Before (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6502)

```diff
-           Ik && this.qZ.MJ.dFk(kk) === Fk && Fk.nameYOffset === Ik.written && (Fk.nameYOffset = Ik.base), this.nametagBases.delete(Fk)
+           fm && this.IE.qI.uTm(mm) === Tm && Tm.nameYOffset === fm.written && (Tm.nameYOffset = fm.base), this.nametagBases.delete(Tm)
```

#### 814. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6513` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6513) · [Before (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6513)

```diff
-         return null !== (Fk = this.qZ.MJ.getState(kk, "meshRotation")) && void 0 !== Fk ? Fk : null
+         return null !== (Tm = this.IE.qI.getState(mm, "meshRotation")) && void 0 !== Tm ? Tm : null
```

#### 815. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6516` → after: `L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6516) · [Before (L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6516)

```diff
-     var ua = Ik(38501);
+     var PD = fm(38606);
```

#### 816. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6519` → after: `L6519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6519) · [Before (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6519)

```diff
-         this.qZ = kk, this.meshes = new Map, this.materials = new Map, this.nextKey = 1
+         this.IE = mm, this.meshes = new Map, this.materials = new Map, this.nextKey = 1
```

#### 817. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6523-L6524` → after: `L6523-L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6523-L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6523-L6524) · [Before (L6523-L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6523-L6524)

```diff
-           Tk = this.qZ.Xw,
-           ik = (0, Pk.m)(Tk, `gameMesh${Xk}`, {
+           Am = this.IE.qY,
+           am = (0, Im.l)(Am, `gameMesh${hm}`, {
```

#### 818. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6532` → after: `L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6532) · [Before (L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6532)

```diff
-         return ik.material = yk, ik.gw = !1, ik.receiveShadows = !1, ik.ne = !0, Tk.hw(ik, !1, Ik), this.meshes.set(Xk, {
+         return am.material = xm, am.xq = !1, am.receiveShadows = !1, am.gO = !0, Am.Dq(am, !1, fm), this.meshes.set(hm, {
```

#### 819. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6535` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6535) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6535)

```diff
-           scrolls: (0, ua.g)(Fk)
+           scrolls: (0, PD.h)(Tm)
```

#### 820. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6547` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6547) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6547)

```diff
-         lk && (Ik && lk.node.position.hFk(this.qZ.ZFk(Ik, null, [])), void 0 !== Xk && lk.node.Av(Xk), Tk && lk.scrolls && (0, sk.L)(lk.material, Tk[1]), void 0 !== ik && (lk.node.visibility = ik), yk && lk.node.ci.set(yk[0], yk[1], yk[2]))
+         wm && (fm && wm.node.position.UTm(this.IE.pTm(fm, null, [])), void 0 !== hm && wm.node.Dk(hm), Am && wm.scrolls && (0, nm.I)(wm.material, Am[1]), void 0 !== am && (wm.node.visibility = am), xm && wm.node.fi.set(xm[0], xm[1], xm[2]))
```

#### 821. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6567` → after: `L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6567) · [Before (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6567)

```diff
-               return kk.opaque ? `flat ${kk.rgb.join(" ")} opaque` : `flat ${kk.rgb.join(" ")} ${kk.alpha}${kk.onTop?" onTop":""}`;
+               return mm.opaque ? `flat ${mm.rgb.join(" ")} opaque` : `flat ${mm.rgb.join(" ")} ${mm.alpha}${mm.onTop?" onTop":""}`;
```

#### 822. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6569` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6569) · [Before (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6569)

```diff
-               return `chevrons ${kk.colour} ${kk.alpha}`;
+               return `chevrons ${mm.colour} ${mm.alpha}`;
```

#### 823. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6591` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6591) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6591)

```diff
-             const Fk = Qa(this.qZ.Xw.mG(), kk.colour, kk.alpha);
+             const Tm = nD(this.IE.qY.wG(), mm.colour, mm.alpha);
```

#### 824. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6612` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6612) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6612)

```diff
-         const Fk = this.qZ.Xw.mG(),
+         const Tm = this.IE.qY.wG(),
```

#### 825. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6614-L6615` → after: `L6614-L6615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6614-L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6614-L6615) · [Before (L6614-L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6614-L6615)

```diff
-             wrapU: Kk.d.clamp,
-             wrapV: Kk.d.clamp,
+             wrapU: Km.b.clamp,
+             wrapV: Km.b.clamp,
```

#### 826. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6618` → after: `L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6618) · [Before (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6618)

```diff
-           Xk = (0, Kk.v)(Fk, {
+           hm = (0, Km.t)(Tm, {
```

#### 827. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6622` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6622) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6622)

```diff
-             samplingMode: Kk.i.nearest,
+             samplingMode: Km.e.nearest,
```

#### 828. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6625` → after: `L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6625) · [Before (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6625)

```diff
-         return null === (kk = this.qZ.Xw.Tw) || void 0 === kk || kk.prepareTexture(Xk), (0, Yk.e)({
+         return null === (mm = this.IE.qY.jY) || void 0 === mm || mm.prepareTexture(hm), (0, Bm.b)({
```

#### 829. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6627` → after: `L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6627) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6627)

```diff
-           Yw: Fk,
+           Aq: Tm,
```

#### 830. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6630` → after: `L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6630) · [Before (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6630)

```diff
-             transparencyMode: vk.r.alphaTest,
+             transparencyMode: Zm.s.alphaTest,
```

#### 831. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6642` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6642) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6642)

```diff
-           transparencyMode: vk.r.alphaBlend,
+           transparencyMode: Zm.s.alphaBlend,
```

#### 832. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6644` → after: `L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6644) · [Before (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6644)

```diff
-           depthFunction: Xk ? vk.h.always : 0
+           depthFunction: hm ? Zm.j.always : 0
```

#### 833. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6646` → after: `L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6646) · [Before (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6646)

```diff
-         return (0, Yk.e)({
+         return (0, Bm.b)({
```

#### 834. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6648` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6648) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6648)

```diff
-           Yw: this.qZ.Xw.mG(),
+           Aq: this.IE.qY.wG(),
```

#### 835. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6661` → after: `L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6661) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6661)

```diff
-     var Ra = Ik(39129);
+     var yD = fm(39252);
```

#### 836. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6665` → after: `L6665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6665) · [Before (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6665)

```diff
-         this.qZ = kk, this.pools = new Set, this.ctx = {
+         this.IE = mm, this.pools = new Set, this.ctx = {
```

#### 837. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6673` → after: `L6673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6673) · [Before (L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6673)

```diff
-           kk.budget = 24, kk.frame++, kk.lit = this.qZ.Xw.Nw;
+           mm.budget = 24, mm.frame++, mm.lit = this.IE.qY.FY;
```

#### 838. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6680` → after: `L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6680) · [Before (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6680)

```diff
-         const Xk = new Na(this.qZ, Ik, kk, Fk, (kk => {
+         const hm = new sD(this.IE, fm, mm, Tm, (mm => {
```

#### 839. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6683` → after: `L6683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6683) · [Before (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6683)

```diff
-         return 0 === this.pools.size && this.qZ.on("beforeRender", this.onBeforeRender), this.pools.add(Xk), Xk
+         return 0 === this.pools.size && this.IE.on("beforeRender", this.onBeforeRender), this.pools.add(hm), hm
```

#### 840. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6689` → after: `L6689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6689) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6689)

```diff
-         this.pools.delete(kk) && 0 === this.pools.size && this.qZ.off("beforeRender", this.onBeforeRender)
+         this.pools.delete(mm) && 0 === this.pools.size && this.IE.off("beforeRender", this.onBeforeRender)
```

#### 841. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6694-L6695` → after: `L6694-L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6694-L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6694-L6695) · [Before (L6694-L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6694-L6695)

```diff
-         this.qZ = kk, this.type = Fk, this.model = Ik, this.onDispose = Tk, this.St = void 0, this.records = void 0, this.count = 0, this.origin = [0, 0, 0], this.placedOffset = [0, 0, 0], this.wasLit = !1, this.dirtyList = [], this.isDirty = void 0, this.dirtyAll = !1, this.ids  … [truncated]
-         const ik = kk.SZ;
+         this.IE = mm, this.type = Tm, this.model = fm, this.onDispose = Am, this.yp = void 0, this.records = void 0, this.count = 0, this.origin = [0, 0, 0], this.placedOffset = [0, 0, 0], this.wasLit = !1, this.dirtyList = [], this.isDirty = void 0, this.dirtyAll = !1, this.ids  … [truncated]
+         const am = mm.HE;
```

#### 842. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6705` → after: `L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6705) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6705)

```diff
-         !this.ee && kk >= 0 && kk < this.St && this.Ne(kk, kk + 1)
+         !this.PO && mm >= 0 && mm < this.yp && this.hY(mm, mm + 1)
```

#### 843. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6708` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6708) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6708)

```diff
-         this.ee || (kk = Math.min(Math.max(kk, 0), this.St)) !== this.count && (this.Ne(Math.min(kk, this.count), Math.max(kk, this.count)), this.count = kk)
+         this.PO || (mm = Math.min(Math.max(mm, 0), this.yp)) !== this.count && (this.hY(Math.min(mm, this.count), Math.max(mm, this.count)), this.count = mm)
```

#### 844. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6711` → after: `L6711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6711) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6711)

```diff
-         (kk = Math.ceil(kk)) <= this.St || this.ee || (this.records = (0, Ra.c)(this.records, new Float32Array(kk * ua.d)), this.ids = (0, Ra.c)(this.ids, new Int32Array(kk)), this.isDirty = (0, Ra.c)(this.isDirty, new Uint8Array(kk)), this.state = (0, Ra.c)(this.state, new Uint8 … [truncated]
+         (mm = Math.ceil(mm)) <= this.yp || this.PO || (this.records = (0, yD.b)(this.records, new Float32Array(mm * PD.b)), this.ids = (0, yD.b)(this.ids, new Int32Array(mm)), this.isDirty = (0, yD.b)(this.isDirty, new Uint8Array(mm)), this.state = (0, yD.b)(this.state, new Uint8 … [truncated]
```

#### 845. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6714-L6715` → after: `L6714-L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6714-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6714-L6715) · [Before (L6714-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6714-L6715)

```diff
-         if (!this.ee) {
-           this.ee = !0;
+         if (!this.PO) {
+           this.PO = !0;
```

#### 846. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6718-L6719` → after: `L6718-L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6718-L6719) · [Before (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6718-L6719)

```diff
-             for (let Fk = 0; Fk < this.St; Fk++) 3 === this.state[Fk] && kk.push(this.ids[Fk]);
-             kk.length > 0 && this.qZ.Xw.kp.delete(...kk)
+             for (let Tm = 0; Tm < this.yp; Tm++) 3 === this.state[Tm] && mm.push(this.ids[Tm]);
+             mm.length > 0 && this.IE.qY.YG.delete(...mm)
```

#### 847. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6726-L6727` → after: `L6726-L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6726-L6727) · [Before (L6726-L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6726-L6727)

```diff
-         if (this.ee) return;
-         const Fk = this.qZ.SZ,
+         if (this.PO) return;
+         const Tm = this.IE.HE,
```

#### 848. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6749` → after: `L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6749) · [Before (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6749)

```diff
-         return kk < this.count && 0 === this.records[kk * ua.d + ua.e]
+         return mm < this.count && 0 === this.records[mm * PD.b + PD.d]
```

#### 849. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6752-L6753` → after: `L6752-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6752-L6753) · [Before (L6752-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6752-L6753)

```diff
-         const Ik = this.qZ.Xw.kp;
-         if (!this.visible(kk)) return void(this.shown[kk] && (Ik.Av(this.ids[kk], !1), this.shown[kk] = 0));
+         const fm = this.IE.qY.YG;
+         if (!this.visible(mm)) return void(this.shown[mm] && (fm.Dk(this.ids[mm], !1), this.shown[mm] = 0));
```

#### 850. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6757` → after: `L6757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6757) · [Before (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6757)

```diff
-           ik = kk * ua.d,
+           am = mm * PD.b,
```

#### 851. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6778` → after: `L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6778) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6778)

```diff
-         Zk && (Ik.Av(Tk, !0), this.shown[kk] = 1)
+         Em && (fm.Dk(Am, !0), this.shown[mm] = 1)
```

#### 852. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6783` → after: `L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6783) · [Before (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6783)

```diff
-         const Tk = (0, Mk.e)(this.qZ, Ua),
+         const Am = (0, Fm.i)(this.IE, CD),
```

#### 853. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6793` → after: `L6793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6793) · [Before (L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6793)

```diff
-         this.litFrame[kk] = Fk, lk && this.qZ.Xw.kp.set(this.ids[kk], "aLightLevels", ik[yk], ik[yk + 1], ik[yk + 2], ik[yk + 3])
+         this.litFrame[mm] = Tm, wm && this.IE.qY.YG.set(this.ids[mm], "aLightLevels", am[xm], am[xm + 1], am[xm + 2], am[xm + 3])
```

#### 854. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6818-L6819` → after: `L6818-L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6818-L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6818-L6819) · [Before (L6818-L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6818-L6819)

```diff
-         const Xk = this.qZ.Xw.kp;
-         if (this.ee) return void Xk.delete(Fk);
+         const hm = this.IE.qY.YG;
+         if (this.PO) return void hm.delete(Tm);
```

#### 855. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6827` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6827) · [Before (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6827)

```diff
-           lit: this.qZ.Xw.Nw
+           lit: this.IE.qY.FY
```

#### 856. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6843` → after: `L6843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6843) · [Before (L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6843)

```diff
-         this.qZ = kk, this.gameFar = null, this.engineFar = 0
+         this.IE = mm, this.gameFar = null, this.engineFar = 0
```

#### 857. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6846` → after: `L6846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6846) · [Before (L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6846)

```diff
-         const Fk = this.qZ.Xw.PD(),
+         const Tm = this.IE.qY.cW(),
```

#### 858. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6849)

```diff
-         null !== kk ? !Number.isFinite(kk) || kk <= Fk.near || (Ik || (this.engineFar = Fk.far), this.gameFar = kk, Fk.far !== kk && (Fk.far = kk, null === (Xk = (Tk = this.qZ.Xw).rFk) || void 0 === Xk || Xk.call(Tk))) : (Ik && (Fk.far = this.engineFar, null === (ik = (yk = this. … [truncated]
+         null !== mm ? !Number.isFinite(mm) || mm <= Tm.near || (fm || (this.engineFar = Tm.far), this.gameFar = mm, Tm.far !== mm && (Tm.far = mm, null === (hm = (Am = this.IE.qY).dTm) || void 0 === hm || hm.call(Am))) : (fm && (Tm.far = this.engineFar, null === (am = (xm = this. … [truncated]
```

#### 859. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6852-L6853` → after: `L6852-L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6852-L6853) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6852-L6853)

```diff
-     var Wa = Ik(621),
-       fa = Ik(38453);
+     var MD = fm(649),
+       uD = fm(38564);
```

#### 860. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6856` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6856) · [Before (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6856)

```diff
-         this.qZ = kk, this.models = new Set, this.ctx = {
+         this.IE = mm, this.models = new Set, this.ctx = {
```

#### 861. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6864` → after: `L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6864) · [Before (L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6864)

```diff
-           kk.frame++, kk.lit = this.qZ.Xw.Nw, kk.offset = this.qZ.SZ;
+           mm.frame++, mm.lit = this.IE.qY.FY, mm.offset = this.IE.HE;
```

#### 862. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6869-L6870` → after: `L6869-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6869-L6870) · [Before (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6869-L6870)

```diff
-         const Ik = this.qZ.Xw.kp;
-         if (Xk = kk, !Wa.n.includes(Xk) || !Ik.hasType(kk)) return null;
+         const fm = this.IE.qY.YG;
+         if (hm = mm, !MD.o.includes(hm) || !fm.hasType(mm)) return null;
```

#### 863. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6872` → after: `L6872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6872) · [Before (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6872)

```diff
-         const Tk = (0, Gk.k)(kk, Fk, !1),
+         const Am = (0, em.o)(mm, Tm, !1),
```

#### 864. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6875` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6875) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6875)

```diff
-           } = Gk.c[kk];
+           } = em.e[mm];
```

#### 865. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6877` → after: `L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6877) · [Before (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6877)

```diff
-         const yk = new da(this.qZ, kk, Tk, (kk => {
+         const xm = new LD(this.IE, mm, Am, (mm => {
```

#### 866. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6880` → after: `L6880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6880) · [Before (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6880)

```diff
-         return 0 === this.models.size && this.qZ.on("beforeRender", this.onBeforeRender), this.models.add(yk), yk
+         return 0 === this.models.size && this.IE.on("beforeRender", this.onBeforeRender), this.models.add(xm), xm
```

#### 867. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6886` → after: `L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6886) · [Before (L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6886)

```diff
-         this.models.delete(kk) && 0 === this.models.size && this.qZ.off("beforeRender", this.onBeforeRender)
+         this.models.delete(mm) && 0 === this.models.size && this.IE.off("beforeRender", this.onBeforeRender)
```

#### 868. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6892` → after: `L6892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6892) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6892)

```diff
-         this.qZ = kk, this.type = Fk, this.id = Ik, this.onDispose = Xk, this.pos = [0, 0, 0], this.yaw = 0, this.posed = !1, this.visible = !1, this.needsPlace = !1, this.needsRelight = !1, this.placedOffset = [NaN, NaN, NaN], this.light = new Float32Array(4), this.litFrame = -1 … [truncated]
+         this.IE = mm, this.type = Tm, this.id = fm, this.onDispose = hm, this.pos = [0, 0, 0], this.yaw = 0, this.posed = !1, this.visible = !1, this.needsPlace = !1, this.needsRelight = !1, this.placedOffset = [NaN, NaN, NaN], this.light = new Float32Array(4), this.litFrame = -1 … [truncated]
```

#### 869. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6895` → after: `L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6895) · [Before (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6895)

```diff
-         this.ee || (this.posed && kk[0] === this.pos[0] && kk[1] === this.pos[1] && kk[2] === this.pos[2] || (this.pos[0] = kk[0], this.pos[1] = kk[1], this.pos[2] = kk[2], this.needsRelight = !0), this.yaw = Fk, this.posed = !0, this.needsPlace = !0)
+         this.PO || (this.posed && mm[0] === this.pos[0] && mm[1] === this.pos[1] && mm[2] === this.pos[2] || (this.pos[0] = mm[0], this.pos[1] = mm[1], this.pos[2] = mm[2], this.needsRelight = !0), this.yaw = Tm, this.posed = !0, this.needsPlace = !0)
```

#### 870. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6898` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6898) · [Before (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6898)

```diff
-         this.ee || kk === this.visible || (this.visible = kk, this.needsPlace = !0)
+         this.PO || mm === this.visible || (this.visible = mm, this.needsPlace = !0)
```

#### 871. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6901` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6901) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6901)

```diff
-         this.ee || (this.ee = !0, this.qZ.Xw.kp.delete(this.id), this.onDispose(this))
+         this.PO || (this.PO = !0, this.IE.qY.YG.delete(this.id), this.onDispose(this))
```

#### 872. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6904-L6905` → after: `L6904-L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6904-L6905) · [Before (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6904-L6905)

```diff
-         const Fk = this.qZ.Xw.kp;
-         if (!(this.visible && this.posed)) return void(this.needsPlace && (Fk.Av(this.id, !1), this.needsPlace = !1));
+         const Tm = this.IE.qY.YG;
+         if (!(this.visible && this.posed)) return void(this.needsPlace && (Tm.Dk(this.id, !1), this.needsPlace = !1));
```

#### 873. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6914` → after: `L6914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6914) · [Before (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6914)

```diff
-           Fk.setPosition(this.id, kk - Ik[0], Tk - Ik[1], ik - Ik[2]), Fk.setRotationEulerY(this.id, this.yaw + this.yawOffset), Fk.Av(this.id, !0), this.needsPlace = !1
+           Tm.setPosition(this.id, mm - fm[0], Am - fm[1], am - fm[2]), Tm.setRotationEulerY(this.id, this.yaw + this.yawOffset), Tm.Dk(this.id, !0), this.needsPlace = !1
```

#### 874. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6919` → after: `L6919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6919) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6919)

```diff
-         const [kk, Fk, Ik] = this.pos, Xk = (0, Mk.e)(this.qZ, [kk, Fk + .25, Ik]), {
+         const [mm, Tm, fm] = this.pos, hm = (0, Fm.i)(this.IE, [mm, Tm + .25, fm]), {
```

#### 875. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6927` → after: `L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6927) · [Before (L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6927)

```diff
-         ik && Gk.c[this.type].meshApi.updateMeshLightLevels(this.id, Tk)
+         am && em.e[this.type].meshApi.updateMeshLightLevels(this.id, Am)
```

#### 876. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6930)

```diff
-     var Ya = Ik(38708);
+     var vD = fm(38807);
```

#### 877. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6933` → after: `L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6933) · [Before (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6933)

```diff
-     class ma extends Ya.c {
+     class dD extends vD.b {
```

#### 878. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6935` → after: `L6935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6935) · [Before (L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6935)

```diff
-         super(), this.St = kk, this.queue = void 0, this.length = 0, this.cursor = 0, this.speed = 0, this.queue = new Float32Array(4 * kk)
+         super(), this.yp = mm, this.queue = void 0, this.length = 0, this.cursor = 0, this.speed = 0, this.queue = new Float32Array(4 * mm)
```

#### 879. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6942` → after: `L6942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6942) · [Before (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6942)

```diff
-         if (this.cursor >= this.length) return this.speed = 0, void rk.Ge.TransformCoordinatesFromFloatsToRef(0, -1e3, 0, kk, Fk);
+         if (this.cursor >= this.length) return this.speed = 0, void gm.WO.TransformCoordinatesFromFloatsToRef(0, -1e3, 0, mm, Tm);
```

#### 880. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6944` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6944) · [Before (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6944)

```diff
-         this.cursor++, this.speed = this.queue[Tk + 3], rk.Ge.TransformCoordinatesFromFloatsToRef(this.queue[Tk], this.queue[Tk + 1], this.queue[Tk + 2], kk, Fk)
+         this.cursor++, this.speed = this.queue[Am + 3], gm.WO.TransformCoordinatesFromFloatsToRef(this.queue[Am], this.queue[Am + 1], this.queue[Am + 2], mm, Tm)
```

#### 881. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6959-L6963` → after: `L6959-L6963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6959-L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6959-L6963) · [Before (L6959-L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6959-L6963)

```diff
-         this.qZ = kk, this.system = Fk, this.onFree = Tk, this.box = void 0, this.points = null, this.boxAt = new rk.Ge, this.pointsAt = new rk.Ge, this.lifeMs = void 0, this.St = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
-         const ak = null !== (ik = Ik.dir1) && void 0 !== ik ? ik : ha,
-           qk = null !== (yk = Ik.dir2) && void 0 !== yk ? yk : ha,
-           Lk = null !== (lk = Xk.half) && void 0 !== lk ? lk : [0, 0, 0];
-         this.box = Fk.createBoxEmitter(new rk.Ge(ak[0], ak[1], ak[2]), new rk.Ge(qk[0], qk[1], qk[2]), new rk.Ge(-Lk[0], -Lk[1], -Lk[2]), new rk.Ge(Lk[0], Lk[1], Lk[2])), this.boxAt.set(Xk.pos[0], Xk.pos[1], Xk.pos[2]), Fk.emitter = this.boxAt, Fk.manualEmitCount = 0, Fk.onAnimat … [truncated]
+         this.IE = mm, this.system = Tm, this.onFree = Am, this.box = void 0, this.points = null, this.boxAt = new gm.WO, this.pointsAt = new gm.WO, this.lifeMs = void 0, this.yp = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
+         const Dm = null !== (am = fm.dir1) && void 0 !== am ? am : gD,
+           im = null !== (xm = fm.dir2) && void 0 !== xm ? xm : gD,
+           Rm = null !== (wm = hm.half) && void 0 !== wm ? wm : [0, 0, 0];
+         this.box = Tm.createBoxEmitter(new gm.WO(Dm[0], Dm[1], Dm[2]), new gm.WO(im[0], im[1], im[2]), new gm.WO(-Rm[0], -Rm[1], -Rm[2]), new gm.WO(Rm[0], Rm[1], Rm[2])), this.boxAt.set(hm.pos[0], hm.pos[1], hm.pos[2]), Tm.emitter = this.boxAt, Tm.manualEmitCount = 0, Tm.onAnimat … [truncated]
```

#### 882. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6967)

```diff
-         }, (0, uk.w)(kk, Fk), this.setEmitRate(Ik.emitRate)
+         }, (0, Gm.z)(mm, Tm), this.setEmitRate(fm.emitRate)
```

#### 883. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6970)

```diff
-         this.stopped || (this.boxAt.set(kk[0], kk[1], kk[2]), Fk && (this.box.minEmitBox.set(-Fk[0], -Fk[1], -Fk[2]), this.box.maxEmitBox.set(Fk[0], Fk[1], Fk[2])), (0, uk.w)(this.qZ, this.system))
+         this.stopped || (this.boxAt.set(mm[0], mm[1], mm[2]), Tm && (this.box.minEmitBox.set(-Tm[0], -Tm[1], -Tm[2]), this.box.maxEmitBox.set(Tm[0], Tm[1], Tm[2])), (0, Gm.z)(this.IE, this.system))
```

#### 884. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6973` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6973) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6973)

```diff
-         this.stopped || (this.system.emitRate = kk, kk > 0 && (this.useBox(), this.system.manualEmitCount = -1, this.clearStopTimer(), this.start(), (0, uk.w)(this.qZ, this.system)))
+         this.stopped || (this.system.emitRate = mm, mm > 0 && (this.useBox(), this.system.manualEmitCount = -1, this.clearStopTimer(), this.start(), (0, Gm.z)(this.IE, this.system)))
```

#### 885. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6980` → after: `L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6980) · [Before (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6980)

```diff
-         const Xk = this.points ??= new ma(this.St);
+         const hm = this.points ??= new dD(this.yp);
```

#### 886. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6985` → after: `L6985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L6985) · [Before (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L6985)

```diff
-           lk = Math.min(Ik, Xk.St - Xk.length);
+           wm = Math.min(fm, hm.yp - hm.length);
```

#### 887. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7008)

```diff
-         (0, uk.w)(this.qZ, this.system), this.start(), this.system.emitRate > 0 || this.stopAfterLifetime()
+         (0, Gm.z)(this.IE, this.system), this.start(), this.system.emitRate > 0 || this.stopAfterLifetime()
```

#### 888. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7027` → after: `L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7027) · [Before (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7027)

```diff
-         this.qZ = kk, this.live = new Set, this.textures = new Map
+         this.IE = mm, this.live = new Set, this.textures = new Map
```

#### 889. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7030)

```diff
-         return this.qZ.Xw.mG().particlesEnabled
+         return this.IE.qY.wG().particlesEnabled
```

#### 890. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7035` → after: `L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7035) · [Before (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7035)

```diff
-           ik = this.qZ.Xw.kR(`game|${Tk}`, kk.St);
+           am = this.IE.qY.yX(`game|${Am}`, mm.yp);
```

#### 891. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7037-L7040` → after: `L7037-L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7037-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7037-L7040) · [Before (L7037-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7037-L7040)

```diff
-         const yk = null !== (Xk = kk.gravity) && void 0 !== Xk ? Xk : [0, 0, 0];
-         ik.gravity = new rk.Ge(yk[0], yk[1], yk[2]);
-         for (const ak of kk.colorGradients) ik.addColorGradient(ak.timeFraction, (0, uk.l)(ak.minColor), ak.maxColor ? (0, uk.l)(ak.maxColor) : void 0);
-         const lk = new ra(this.qZ, ik, kk, Fk, (kk => {
+         const xm = null !== (hm = mm.gravity) && void 0 !== hm ? hm : [0, 0, 0];
+         am.gravity = new gm.WO(xm[0], xm[1], xm[2]);
+         for (const Dm of mm.colorGradients) am.addColorGradient(Dm.timeFraction, (0, Gm.m)(Dm.minColor), Dm.maxColor ? (0, Gm.m)(Dm.maxColor) : void 0);
+         const wm = new WD(this.IE, am, mm, Tm, (mm => {
```

#### 892. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7046` → after: `L7046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7046) · [Before (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7046)

```diff
-         (0, pk.o)(this.qZ, kk)
+         (0, Nm.j)(this.IE, mm)
```

#### 893. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7049` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7049) · [Before (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7049)

```diff
-         "critical" === kk && (0, pk.k)(this.qZ, pk.s, [Fk[0], Fk[1], Fk[2]], Ik)
+         "critical" === mm && (0, Nm.g)(this.IE, Nm.n, [Tm[0], Tm[1], Tm[2]], fm)
```

#### 894. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7054` → after: `L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7054) · [Before (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7054)

```diff
-         for (const kk of this.textures.values())(0, Kk.A)(kk);
+         for (const mm of this.textures.values())(0, Km.z)(mm);
```

#### 895. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7058)

```diff
-         const Ik = "string" === typeof kk ? `${kk}|${Fk?"mips":"flat"}` : `|${kk.kind}`;
+         const fm = "string" === typeof mm ? `${mm}|${Tm?"mips":"flat"}` : `|${mm.kind}`;
```

#### 896. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7061-L7062` → after: `L7061-L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7061-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7061-L7062) · [Before (L7061-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7061-L7062)

```diff
-           const Tk = this.qZ.Xw.mG();
-           Xk = "string" === typeof kk ? (0, Kk.t)(Tk, (0, wk.c)(kk), Fk) : function(kk) {
+           const Am = this.IE.qY.wG();
+           hm = "string" === typeof mm ? (0, Km.q)(Am, (0, Ym.c)(mm), Tm) : function(mm) {
```

#### 897. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7068` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7068) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7068)

```diff
-                 samplingMode: Kk.i.nearest,
+                 samplingMode: Km.e.nearest,
```

#### 898. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7071-L7072` → after: `L7071-L7072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7071-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7071-L7072) · [Before (L7071-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7071-L7072)

```diff
-               Xk = (0, sk.k)(kk, "smokePuff", Ik),
-               Tk = (0, sk.h)(Xk);
+               hm = (0, nm.m)(mm, "smokePuff", fm),
+               Am = (0, nm.j)(hm);
```

#### 899. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7075` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7075) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7075)

```diff
-             })), (0, sk.T)(Xk, !0, !1), (0, Kk.R)(Xk), Xk
+             })), (0, nm.T)(hm, !0, !1), (0, Km.V)(hm), hm
```

#### 900. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7084-L7085` → after: `L7084-L7085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7084-L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7084-L7085) · [Before (L7084-L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7084-L7085)

```diff
-         this.qZ = kk, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = kk => {
-           this.offset = (this.offset + Math.min(kk, 250) / 1e3 * 1.2 * Ma) % 1, (0, sk.L)(this.material, -this.offset)
+         this.IE = mm, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = mm => {
+           this.offset = (this.offset + Math.min(mm, 250) / 1e3 * 1.2 * mi) % 1, (0, nm.I)(this.material, -this.offset)
```

#### 901. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7090-L7091` → after: `L7090-L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7090-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7090-L7091) · [Before (L7090-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7090-L7091)

```diff
-         const Fk = this.qZ.Xw,
-           Ik = (0, Pk.m)(Fk, "routeChevrons", function(kk) {
+         const Tm = this.IE.qY,
+           fm = (0, Im.l)(Tm, "routeChevrons", function(mm) {
```

#### 902. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7111` → after: `L7111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7111) · [Before (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7111)

```diff
-         Ik.material = this.materialFor(kk.colour, kk.alpha), Ik.gw = !1, Ik.receiveShadows = !1, Ik.ne = !0, Fk.hw(Ik, !1, kk.cells[0].pos), this.node = Ik, this.qZ.on("afterRender", this.slide)
+         fm.material = this.materialFor(mm.colour, mm.alpha), fm.xq = !1, fm.receiveShadows = !1, fm.gO = !0, Tm.Dq(fm, !1, mm.cells[0].pos), this.node = fm, this.IE.on("afterRender", this.slide)
```

#### 903. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7118)

```diff
-         this.node && (this.qZ.off("afterRender", this.slide), this.node.dispose(), this.node = null)
+         this.node && (this.IE.off("afterRender", this.slide), this.node.dispose(), this.node = null)
```

#### 904. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7121)

```diff
-         const Ik = `${kk} ${Fk}`;
+         const fm = `${mm} ${Tm}`;
```

#### 905. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7123` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7123) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7123)

```diff
-         this.material && this.look === Ik || (null === (Xk = this.material) || void 0 === Xk || Xk.dispose(!0, !0), this.material = Qa(this.qZ.Xw.mG(), kk, Fk), this.look = Ik);
+         this.material && this.look === fm || (null === (hm = this.material) || void 0 === hm || hm.dispose(!0, !0), this.material = nD(this.IE.qY.wG(), mm, Tm), this.look = fm);
```

#### 906. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7127` → after: `L7127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7127) · [Before (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7127)

```diff
-     var Fq = Ik(39134);
+     var fi = fm(39261);
```

#### 907. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7130-L7131` → after: `L7130-L7131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7130-L7131) · [Before (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7130-L7131)

```diff
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new Fq.d((() => Ml.e.get("forcedCameraDirectionTransitionMs")), (kk => {
-           Ml.e.apply(kk)
+         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new fi.d((() => mD.b.get("forcedCameraDirectionTransitionMs")), (mm => {
+           mD.b.apply(mm)
```

#### 908. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7167-L7171` → after: `L7167-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7167-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7167-L7171) · [Before (L7167-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7167-L7171)

```diff
-     var Xq = Ik(1301),
-       Tq = Ik(4423),
-       iq = Ik(38979),
-       yq = Ik(1745),
-       lq = Ik(1712);
+     var ai = fm(1321),
+       xi = fm(4375),
+       wi = fm(39114),
+       Di = fm(1796),
+       ii = fm(1763);
```

#### 909. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7295)

```diff
-         super(`${aq.name} has been mutated during iteration`)
+         super(`${Ri.name} has been mutated during iteration`)
```

#### 910. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7307` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7307) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7307)

```diff
-           yk = null !== (Fk = null === ik || void 0 === ik || null === (Ik = ik.persisted) || void 0 === Ik || null === (Xk = Ik.shared) || void 0 === Xk ? void 0 : Xk.passkeyLastUpdated) && void 0 !== Fk ? Fk : 0;
+           xm = null !== (Tm = null === am || void 0 === am || null === (fm = am.persisted) || void 0 === fm || null === (hm = fm.shared) || void 0 === hm ? void 0 : hm.passkeyLastUpdated) && void 0 !== Tm ? Tm : 0;
```

#### 911. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7317-L7324` → after: `L7317-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7317-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7317-L7324) · [Before (L7317-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7317-L7324)

```diff
-     var Hq = Ik(39149),
-       Jq = Ik(8696),
-       xq = Ik(39162),
-       Pq = Ik(4395),
-       Kq = Ik(4491),
-       Qq = Ik(1287),
-       sq = Ik(39171),
-       Vq = Ik(4411);
+     var Ii = fm(39273),
+       Ki = fm(8666),
+       Qi = fm(39278),
+       ni = fm(4355),
+       Ji = fm(4432),
+       ci = fm(1309),
+       zi = fm(39283),
+       Zi = fm(4364);
```

#### 912. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7327-L7329` → after: `L7327-L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7327-L7329) · [Before (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7327-L7329)

```diff
-         this.qZ = kk, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.qZ.camera.EY = (kk, Fk) => {
-           const Ik = this.qZ.camera.JY;
-           this.qZ.MJ.BFk(this.qZ.oR).cameraZoomChanged(Fk, kk), 0 !== Ik && 0 === this.qZ.camera.JY && this.disableFrontFacing()
+         this.IE = mm, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.IE.camera.RL = (mm, Tm) => {
+           const fm = this.IE.camera.fL;
+           this.IE.qI.MTm(this.IE.xH).cameraZoomChanged(Tm, mm), 0 !== fm && 0 === this.IE.camera.fL && this.disableFrontFacing()
```

#### 913. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7331)

```diff
-         const Fk = Hk.g.subscribe("SwapCameraZoom", (() => {
+         const Tm = qm.j.subscribe("SwapCameraZoom", (() => {
```

#### 914. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7334` → after: `L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7334) · [Before (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7334)

```diff
-           Ik = Ml.e.subscribe("playerZoom", (kk => {
+           fm = mD.b.subscribe("playerZoom", (mm => {
```

#### 915. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7338)

```diff
-           this.endTemporaryThirdPerson(), this.qZ.camera.pY.reset(), Hk.g.unsubscribe(Fk), Ik()
+           this.endTemporaryThirdPerson(), this.IE.camera.YL.reset(), qm.j.unsubscribe(Tm), fm()
```

#### 916. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7346` → after: `L7346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7346) · [Before (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7346)

```diff
-         if (kk) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.qZ.camera.JY, void(this.locked = !0);
+         if (mm) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.IE.camera.fL, void(this.locked = !0);
```

#### 917. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7357` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7357) · [Before (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7357)

```diff
-         return this.locked ? null !== (kk = null === (Fk = this.deferredZoom) || void 0 === Fk ? void 0 : Fk.zoom) && void 0 !== kk ? kk : this.lockedZoom : this.qZ.camera.JY
+         return this.locked ? null !== (mm = null === (Tm = this.deferredZoom) || void 0 === Tm ? void 0 : Tm.zoom) && void 0 !== mm ? mm : this.lockedZoom : this.IE.camera.fL
```

#### 918. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7363-L7364` → after: `L7363-L7364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7363-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7363-L7364) · [Before (L7363-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7363-L7364)

```diff
-             const kk = this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing;
-             if (!(0 === this.qZ.camera.JY && !kk)) return;
+             const mm = this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing;
+             if (!(0 === this.IE.camera.fL && !mm)) return;
```

#### 919. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7376` → after: `L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7376) · [Before (L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7376)

```diff
-         this.qZ.gJ.canUseZoomKey || Hk.g.GL("showBottomMessage", {
+         this.IE.xI.canUseZoomKey || qm.j.gp("showBottomMessage", {
```

#### 920. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7390` → after: `L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7390) · [Before (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7390)

```diff
-         const Fk = kk - this.qZ.camera.JY;
+         const Tm = mm - this.IE.camera.fL;
```

#### 921. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7398-L7399` → after: `L7398-L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7398-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7398-L7399) · [Before (L7398-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7398-L7399)

```diff
-         const Fk = this.qZ.camera.JY;
-         kk < 0 ? this.qZ.camera.JY = 0 : kk > (this.qZ.gJ.maxPlayerZoom || 10) ? this.qZ.camera.JY = this.qZ.gJ.maxPlayerZoom || 10 : this.qZ.camera.JY = kk, this.onCameraZoomSet(Fk, kk)
+         const Tm = this.IE.camera.fL;
+         mm < 0 ? this.IE.camera.fL = 0 : mm > (this.IE.xI.maxPlayerZoom || 10) ? this.IE.camera.fL = this.IE.xI.maxPlayerZoom || 10 : this.IE.camera.fL = mm, this.onCameraZoomSet(Tm, mm)
```

#### 922. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7402` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7402) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7402)

```diff
-         this.qZ.MJ.BFk(this.qZ.oR).shouldChangeCameraZoom(kk) && (0 === this.qZ.camera.JY && 1 === kk ? kk++ : 2 === this.qZ.camera.JY && -1 === kk && kk--, this.setCameraZoomNoValidation(this.qZ.camera.JY + kk))
+         this.IE.qI.MTm(this.IE.xH).shouldChangeCameraZoom(mm) && (0 === this.IE.camera.fL && 1 === mm ? mm++ : 2 === this.IE.camera.fL && -1 === mm && mm--, this.setCameraZoomNoValidation(this.IE.camera.fL + mm))
```

#### 923. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7405` → after: `L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7405) · [Before (L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7405)

```diff
-         this.locked || (this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.qZ.camera.JY ? this.setCameraZoom(this.qZ.gJ.zoomOutDistance || 3) : (this.setCameraZoom(this.qZ.gJ.zoomOutDistance || 3), 0 !== th … [truncated]
+         this.locked || (this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.IE.camera.fL ? this.setCameraZoom(this.IE.xI.zoomOutDistance || 3) : (this.setCameraZoom(this.IE.xI.zoomOutDistance || 3), 0 !== th … [truncated]
```

#### 924. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7408` → after: `L7408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7408) · [Before (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7408)

```diff
-         this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing = !1, this.qZ.camera.sq[0] = 0, this.qZ.camera.sq[1] = 0, this.qZ.camera.sq[2] = 0
+         this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing = !1, this.IE.camera.pp[0] = 0, this.IE.camera.pp[1] = 0, this.IE.camera.pp[2] = 0
```

#### 925. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7411)

```diff
-         this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing = !0, this.qZ.camera.sq[0] = Math.PI, this.qZ.camera.sq[1] = 0, this.qZ.camera.sq[2] = Math.PI
+         this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing = !0, this.IE.camera.pp[0] = Math.PI, this.IE.camera.pp[1] = 0, this.IE.camera.pp[2] = Math.PI
```

#### 926. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7414` → after: `L7414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7414) · [Before (L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7414)

```diff
-         this.qZ.MJ.BFk(this.qZ.oR).cameraZoomSet(kk, Fk), Hk.g.GL("cameraZoomSet", this.qZ.camera.JY), 0 === this.qZ.camera.JY && this.disableFrontFacing()
+         this.IE.qI.MTm(this.IE.xH).cameraZoomSet(mm, Tm), qm.j.gp("cameraZoomSet", this.IE.camera.fL), 0 === this.IE.camera.fL && this.disableFrontFacing()
```

#### 927. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7417-L7418` → after: `L7417-L7418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7417-L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7417-L7418) · [Before (L7417-L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7417-L7418)

```diff
-     var Sq = Ik(36562),
-       oq = Ik(39180);
+     var bi = fm(36653),
+       Si = fm(39288);
```

#### 928. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7428` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7428) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7428)

```diff
-         this.qZ = kk, this.pointerLockWrapper = Fk, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = kk => {
+         this.IE = mm, this.pointerLockWrapper = Tm, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = mm => {
```

#### 929. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7432` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7432) · [Before (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7432)

```diff
-           "mouse" !== kk.pointerType ? "pen" !== kk.pointerType && !pq(kk) || !this.qZ.container.element.contains(kk.target) || (0, Sq.j)(kk.target) || null === (Fk = this.tapListener) || void 0 === Fk || Fk.call(this, kk.clientX, kk.clientY) : this.followPoint(kk.clientX, kk.cli … [truncated]
+           "mouse" !== mm.pointerType ? "pen" !== mm.pointerType && !Hi(mm) || !this.IE.container.element.contains(mm.target) || (0, bi.g)(mm.target) || null === (Tm = this.tapListener) || void 0 === Tm || Tm.call(this, mm.clientX, mm.clientY) : this.followPoint(mm.clientX, mm.cli … [truncated]
```

#### 930. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7436` → after: `L7436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7436) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7436)

```diff
-         kk !== this.active && (this.active = kk, this.qZ.container.KU(!kk), kk ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(nq)) : (window.removeEventListener(" … [truncated]
+         mm !== this.active && (this.active = mm, this.IE.container.UH(!mm), mm ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(Xi)) : (window.removeEventListener(" … [truncated]
```

#### 931. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7448` → after: `L7448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7448) · [Before (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7448)

```diff
-         const Xk = this.qZ.container.canvas.getBoundingClientRect();
+         const hm = this.IE.container.canvas.getBoundingClientRect();
```

#### 932. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7462` → after: `L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7462) · [Before (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7462)

```diff
-       return "mouse" === kk.pointerType || !uy.d.get("isTouchScreen")
+       return "mouse" === mm.pointerType || !Xx.c.get("isTouchScreen")
```

#### 933. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7464-L7468` → after: `L7464-L7468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7464-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7464-L7468) · [Before (L7464-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7464-L7468)

```diff
-     var uq = Ik(6473),
-       bq = Ik(37447),
-       Rq = Ik(1916),
-       Uq = Ik(39190),
-       Cq = Ik(39087);
+     var yi = fm(6449),
+       Ci = fm(37457),
+       ri = fm(1957),
+       si = fm(39305),
+       li = fm(39209);
```

#### 934. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7471` → after: `L7471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7471) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7471)

```diff
-         this.qZ = kk, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
+         this.IE = mm, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
```

#### 935. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7481-L7482` → after: `L7481-L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7481-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7481-L7482) · [Before (L7481-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7481-L7482)

```diff
-         }, this.flyAccel = new uq.b, this.flyVertMoveDir = 0, this.toggles = new tl.h((kk => {
-           this.canUsefreeCam = kk, this.enabled && !this.canUsefreeCam && this.Av(!1), Hk.g.GL("freeCameraChanged")
+         }, this.flyAccel = new yi.b, this.flyVertMoveDir = 0, this.toggles = new pw.g((mm => {
+           this.canUsefreeCam = mm, this.enabled && !this.canUsefreeCam && this.Dk(!1), qm.j.gp("freeCameraChanged")
```

#### 936. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7484` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7484) · [Before (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7484)

```diff
-         const Fk = Hk.g.subscribe("userContextUpdated", (kk => {
+         const Tm = qm.j.subscribe("userContextUpdated", (mm => {
```

#### 937. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7488` → after: `L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7488) · [Before (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7488)

```diff
-           Hk.g.unsubscribe(Fk), this.Av(!1);
+           qm.j.unsubscribe(Tm), this.Dk(!1);
```

#### 938. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7505` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7505) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7505)

```diff
-         this.Av(!this.enabled)
+         this.Dk(!this.enabled)
```

#### 939. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7509` → after: `L7509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7509) · [Before (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7509)

```diff
-         return this.panelMovesFly() || this.enabled && !(null === (kk = this.qZ.bloxd.client) || void 0 === kk || !kk.isReplayMode())
+         return this.panelMovesFly() || this.enabled && !(null === (mm = this.IE.bloxd.client) || void 0 === mm || !mm.isReplayMode())
```

#### 940. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7515` → after: `L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7515) · [Before (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7515)

```diff
-         kk ? (this.Av(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, Hk.g.GL("freeCameraChanged"))) : this.movesFlyIt && this.Av(!1)
+         mm ? (this.Dk(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, qm.j.gp("freeCameraChanged"))) : this.movesFlyIt && this.Dk(!1)
```

#### 941. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7518` → after: `L7518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7518) · [Before (L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7518)

```diff
-         kk !== this.blocked && (this.blocked = kk, kk && this.Av(!1), Hk.g.GL("freeCameraChanged"))
+         mm !== this.blocked && (this.blocked = mm, mm && this.Dk(!1), qm.j.gp("freeCameraChanged"))
```

#### 942. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7536` → after: `L7536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7536) · [Before (L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7536)

```diff
-         for (const Xk of Rq.l) {
+         for (const hm of ri.j) {
```

#### 943. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7538` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7538) · [Before (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7538)

```diff
-           if (null !== (Ik = Rq.s[Xk]) && void 0 !== Ik && Ik.includes(Fk)) return !0
+           if (null !== (fm = ri.r[hm]) && void 0 !== fm && fm.includes(Tm)) return !0
```

#### 944. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7543` → after: `L7543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7543) · [Before (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7543)

```diff
-         (bq.b.isCameraDetachedFromPlayer(this.qZ) || bq.b.detachCamera(this.qZ)) && (this.tickHandler = kk => {
+         (Ci.e.isCameraDetachedFromPlayer(this.IE) || Ci.e.detachCamera(this.IE)) && (this.tickHandler = mm => {
```

#### 945. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7545` → after: `L7545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7545) · [Before (L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7545)

```diff
-         }, this.qZ.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
+         }, this.IE.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
```

#### 946. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7549-L7551` → after: `L7549-L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7549-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7549-L7551) · [Before (L7549-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7549-L7551)

```diff
-         this.tickHandler && (this.qZ.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !bq.b.isCameraDetachedFromPlayer(this.qZ) || null !== (kk = this.qZ.bloxd.client) && void 0 !== kk && kk.isReplayMode() || bq.b.reattachCamera(this.qZ), this.clearMovementInpu … [truncated]
-         const Ik = null !== (Fk = this.qZ.bloxd.client) && void 0 !== Fk && Fk.isReplayMode() ? void 0 : this.qZ.MJ.mFk();
-         for (const Xk of ["forward", "backward", "left", "right"]) Ik && this.qZ.inputs.state[Xk] && (Ik[Xk] = !0);
+         this.tickHandler && (this.IE.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !Ci.e.isCameraDetachedFromPlayer(this.IE) || null !== (mm = this.IE.bloxd.client) && void 0 !== mm && mm.isReplayMode() || Ci.e.reattachCamera(this.IE), this.clearMovementInpu … [truncated]
+         const fm = null !== (Tm = this.IE.bloxd.client) && void 0 !== Tm && Tm.isReplayMode() ? void 0 : this.IE.qI.tTm();
+         for (const hm of ["forward", "backward", "left", "right"]) fm && this.IE.inputs.state[hm] && (fm[hm] = !0);
```

#### 947. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7578` → after: `L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7578) · [Before (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7578)

```diff
-         if ((null === (Fk = this.qZ.bloxd.client) || void 0 === Fk || !Fk.isReplayMode()) && !this.qZ.MJ.WFk(this.qZ.oR).isAlive) return void this.Av(!1);
+         if ((null === (Tm = this.IE.bloxd.client) || void 0 === Tm || !Tm.isReplayMode()) && !this.IE.qI.sTm(this.IE.xH).isAlive) return void this.Dk(!1);
```

#### 948. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7581-L7582` → after: `L7581-L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7581-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7581-L7582) · [Before (L7581-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7581-L7582)

```diff
-           Tk = Xk * this.qZ.WG,
-           ik = this.qZ.camera.heading,
+           Am = hm * this.IE.aG,
+           am = this.IE.camera.heading,
```

#### 949. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7599)

```diff
-         const Hk = (0, uq.f)(this.flyAccel, jk, ek, wk, Tk);
+         const qm = (0, yi.e)(this.flyAccel, om, Om, Ym, Am);
```

#### 950. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7601` → after: `L7601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7601) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7601)

```diff
-         const Jk = 12 * (1 + this.flyAccel.wT);
+         const jm = 12 * (1 + this.flyAccel.JA);
```

#### 951. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7605` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7605) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7605)

```diff
-           const kk = (Zk > 1 ? 1 / Zk : 1) * Jk * Xk;
+           const mm = (Em > 1 ? 1 / Em : 1) * jm * hm;
```

#### 952. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7610-L7611` → after: `L7610-L7611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7610-L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7610-L7611) · [Before (L7610-L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7610-L7611)

```diff
-         const Qk = this.qZ.MJ.OJ(this.qZ.camera.aY);
-         this.qZ.MJ.setPosition(this.qZ.camera.aY, [Qk[0] + xk, Qk[1] + Kk, Qk[2] + Pk])
+         const Qm = this.IE.qI.rV(this.IE.camera.yB);
+         this.IE.qI.setPosition(this.IE.camera.yB, [Qm[0] + Vm, Qm[1] + Km, Qm[2] + Im])
```

#### 953. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7615` → after: `L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7615) · [Before (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7615)

```diff
-         Hk.g.GL("freeCameraChanged"), (0, Uq.c)(kk), null !== (Fk = this.qZ.bloxd.client) && void 0 !== Fk && Fk.isReplayMode() && Hk.g.GL("replayViewer|uiRefresh")
+         qm.j.gp("freeCameraChanged"), (0, si.c)(mm), null !== (Tm = this.IE.bloxd.client) && void 0 !== Tm && Tm.isReplayMode() && qm.j.gp("replayViewer|uiRefresh")
```

#### 954. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7618-L7624` → after: `L7618-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7618-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7618-L7624) · [Before (L7618-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7618-L7624)

```diff
-     var cq = Ik(1844),
-       Wq = Ik(39196),
-       fq = Ik(39183),
-       Bq = Ik(39217),
-       dq = Ik(37670),
-       Yq = Ik(39209),
-       Aq = Ik(38918);
+     var ui = fm(1877),
+       Bi = fm(39314),
+       Li = fm(39297),
+       vi = fm(39335),
+       ti = fm(37708),
+       Ui = fm(39327),
+       di = fm(39045);
```

#### 955. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7628-L7630` → after: `L7628-L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7628-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7628-L7630) · [Before (L7628-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7628-L7630)

```diff
-       Tk.heading = Fk + kk.sq[1] + (Xk ? kk.cameraRotationOffset[1] : 0);
-       const ik = Ik + kk.sq[0] + (Xk ? kk.cameraRotationOffset[0] : 0);
-       (0, fq.n)((0, fq.h)(Tk.heading, ik, gq), Tk)
+       Am.heading = Tm + mm.pp[1] + (hm ? mm.cameraRotationOffset[1] : 0);
+       const am = fm + mm.pp[0] + (hm ? mm.cameraRotationOffset[0] : 0);
+       (0, Li.n)((0, Li.d)(Am.heading, am, gi), Am)
```

#### 956. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7636` → after: `L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7636) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7636)

```diff
-       xk().set(hq, Tk[0], Tk[1], 0), xk().wi(hq, hq, xk().ZERO, kk.ta + kk.sq[2] + yk[2]), xk().ti(hq, hq, xk().ZERO, Ik + kk.sq[0] + yk[0]), xk().ei(hq, hq, xk().ZERO, Fk + kk.sq[1] + yk[1]), xk().add(ik, ik, hq)
+       Vm().set(Fi, Am[0], Am[1], 0), Vm().ta(Fi, Fi, Vm().ZERO, mm.ei + mm.pp[2] + xm[2]), Vm().wa(Fi, Fi, Vm().ZERO, fm + mm.pp[0] + xm[0]), Vm().pa(Fi, Fi, Vm().ZERO, Tm + mm.pp[1] + xm[1]), Vm().add(am, am, Fi)
```

#### 957. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7642` → after: `L7642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7642) · [Before (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7642)

```diff
-       return bq.b.copyReattachedTargetPosition(kk, Dq) ? kk.camera.qD(Dq, Fk, Ik, bq.b.getSavedZoomDistance(kk), Xk) : null
+       return Ci.e.copyReattachedTargetPosition(mm, TR) ? mm.camera.EW(TR, Tm, fm, Ci.e.getSavedZoomDistance(mm), hm) : null
```

#### 958. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7646` → after: `L7646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7646) · [Before (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7646)

```diff
-       return (0, Yq.g)(kk) ? (0, Nk.c)(kk) : null
+       return (0, Ui.e)(mm) ? (0, Cm.d)(mm) : null
```

#### 959. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7650` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7650) · [Before (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7650)

```diff
-         this.qZ = kk, this.view = Fk, this.pickEntity = Ik, this.defaultPose = (0, oq.j)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (kk, Fk, Ik) => this.pickDistance(kk, Fk, Ik, this.qZ.skk), t … [truncated]
+         this.IE = mm, this.view = Tm, this.pickEntity = fm, this.defaultPose = (0, Si.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (mm, Tm, fm) => this.pickDistance(mm, Tm, fm, this.IE.Kmm), t … [truncated]
```

#### 960. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7653-L7654` → after: `L7653-L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7653-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7653-L7654) · [Before (L7653-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7653-L7654)

```diff
-           return null !== (Xk = this.pickEntity(kk, Fk, null !== Tk && void 0 !== Tk ? Tk : Ik)) && void 0 !== Xk ? Xk : Tk
-         }, this.isUntargeted = kk => !this.qZ.skk(kk)
+           return null !== (hm = this.pickEntity(mm, Tm, null !== Am && void 0 !== Am ? Am : fm)) && void 0 !== hm ? hm : Am
+         }, this.isUntargeted = mm => !this.IE.Kmm(mm)
```

#### 961. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7657` → after: `L7657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7657) · [Before (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7657)

```diff
-         return this.qZ.Nkk
+         return this.IE.Cmm
```

#### 962. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7661` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7661) · [Before (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7661)

```diff
-         return null !== Fk && this.qZ.MJ.ZY(Fk) ? (0, Wl.getDrawnPosition)(this.qZ, Fk, this.feet) : null
+         return null !== Tm && this.IE.qI.uB(Tm) ? (0, Mw.getDrawnPosition)(this.IE, Tm, this.feet) : null
```

#### 963. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7666-L7667` → after: `L7666-L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7666-L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7666-L7667) · [Before (L7666-L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7666-L7667)

```diff
-           return kk.MJ.ZY(Fk) ? ((0, Wl.getDrawnPosition)(kk, Fk, Ik), null !== kk.bloxd.getLifeformType(Fk) && (Ik[1] += kk.bloxd.getLifeformEyeHeight(Fk)), Ik) : null
-         }(this.qZ, Fk, this.aim)
+           return mm.qI.uB(Tm) ? ((0, Mw.getDrawnPosition)(mm, Tm, fm), null !== mm.bloxd.getLifeformType(Tm) && (fm[1] += mm.bloxd.getLifeformEyeHeight(Tm)), fm) : null
+         }(this.IE, Tm, this.aim)
```

#### 964. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7672` → after: `L7672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7672) · [Before (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7672)

```diff
-         return null === ik ? null : ik === this.qZ.oR ? this.view.heading : null !== (Fk = null !== (Ik = null === (Xk = (0, Rl.getCaughtUpMeshRotation)(this.qZ, ik)) || void 0 === Xk ? void 0 : Xk.renderRotation[1]) && void 0 !== Ik ? Ik : null === (Tk = this.qZ.MJ.KFk(ik)) || v … [truncated]
+         return null === am ? null : am === this.IE.xH ? this.view.heading : null !== (Tm = null !== (fm = null === (hm = (0, yw.getCaughtUpMeshRotation)(this.IE, am)) || void 0 === hm ? void 0 : hm.renderRotation[1]) && void 0 !== fm ? fm : null === (Am = this.IE.qI.ITm(am)) || v … [truncated]
```

#### 965. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7676-L7678` → after: `L7676-L7678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7676-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7676-L7678) · [Before (L7676-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7676-L7678)

```diff
-           qZ: Xk
-         } = this, Tk = Xk.camera.ZD(Xk.ZFk(kk, null, this.localFrom), Fk, Ik);
-         return Tk < Ik - 1e-6 ? Tk : null
+           IE: hm
+         } = this, Am = hm.camera.oW(hm.pTm(mm, null, this.localFrom), Tm, fm);
+         return Am < fm - 1e-6 ? Am : null
```

#### 966. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7691)

```diff
-         const Tk = this.qZ.rZ(kk, Fk, Ik, Xk);
+         const Am = this.IE.Do(mm, Tm, fm, hm);
```

#### 967. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7695` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7695) · [Before (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7695)

```diff
-         return (0, cq.A)(this.qZ.Xw.PD().fov)
+         return (0, ui.F)(this.IE.qY.cW().fov)
```

#### 968. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7698` → after: `L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7698) · [Before (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7698)

```diff
-         return (0, cq.A)((0, Aq.getSettingsFov)())
+         return (0, ui.F)((0, di.getSettingsFov)())
```

#### 969. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7703-L7704` → after: `L7703-L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7703-L7704) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7703-L7704)

```diff
-         } = this.qZ.Xw, Fk = kk.getRenderWidth(), Ik = kk.getRenderHeight();
-         return Fk > 0 && Ik > 0 ? Fk / Ik : 1
+         } = this.IE.qY, Tm = mm.getRenderWidth(), fm = mm.getRenderHeight();
+         return Tm > 0 && fm > 0 ? Tm / fm : 1
```

#### 970. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7708` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7708) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7708)

```diff
-           qZ: kk
+           IE: mm
```

#### 971. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7712-L7714` → after: `L7712-L7714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7712-L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7712-L7714) · [Before (L7712-L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7712-L7714)

```diff
-         if (Ik.fov = this.getDefaultFov(), bq.b.isCameraDetachedFromPlayer(kk)) return function(kk, Fk) {
-           const Ik = bq.b.getPlayerFacingHeading(kk),
-             Xk = bq.b.getPlayerFacingPitch(kk),
+         if (fm.fov = this.getDefaultFov(), Ci.e.isCameraDetachedFromPlayer(mm)) return function(mm, Tm) {
+           const fm = Ci.e.getPlayerFacingHeading(mm),
+             hm = Ci.e.getPlayerFacingPitch(mm),
```

#### 972. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7717` → after: `L7717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7717) · [Before (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7717)

```diff
-           null !== Tk && (kk.Km(Mq, Fk.position), rq(kk.camera, Ik, Xk, ik, bq.b.getSavedRigShift(kk), Fk.position)), mq(kk.camera, Ik, Xk, ik, Fk)
+           null !== Am && (mm.kU(fR, Tm.position), mR(mm.camera, fm, hm, am, Ci.e.getSavedRigShift(mm), Tm.position)), Wi(mm.camera, fm, hm, am, Tm)
```

#### 973. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7719-L7720` → after: `L7719-L7720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7719-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7719-L7720) · [Before (L7719-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7719-L7720)

```diff
-         const Xk = 0 !== Fk.VY;
-         return xk().copy(Ik.position, Fk.OJ()), rq(Fk, Fk.heading, Fk.pitch, Xk, kk.Xw.PD().KD, Ik.position), mq(Fk, Fk.heading, Fk.pitch, Xk, Ik), Ik
+         const hm = 0 !== Tm.wL;
+         return Vm().copy(fm.position, Tm.rV()), mR(Tm, Tm.heading, Tm.pitch, hm, mm.qY.cW().zW, fm.position), Wi(Tm, Tm.heading, Tm.pitch, hm, fm), fm
```

#### 974. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7723` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7723) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7723)

```diff
-     var XL = Ik(36571);
+     var xR = fm(36660);
```

#### 975. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7726` → after: `L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7726) · [Before (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7726)

```diff
-         this.qZ = kk, this.XZ = Fk, this.pointer = Ik, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
+         this.IE = mm, this.oE = Tm, this.pointer = fm, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
```

#### 976. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7740` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7740) · [Before (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7740)

```diff
-         const Xk = qL(this.qZ, this.eye);
+         const hm = ER(this.IE, this.eye);
```

#### 977. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7744` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7744) · [Before (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7744)

```diff
-             lk = null === yk || yk <= vq ? ik : yk;
+             wm = null === xm || xm <= ei ? am : xm;
```

#### 978. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7746` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7746) · [Before (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7746)

```diff
-         }(Xk, Ik, this.copyRay(), this.XZ.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(Xk), !0
+         }(hm, fm, this.copyRay(), this.oE.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(hm), !0
```

#### 979. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7750` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7750) · [Before (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7750)

```diff
-           qZ: Ik
+           IE: fm
```

#### 980. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7754` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7754) · [Before (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7754)

```diff
-         if (Fk && (0, XL.i)(this.screenPoint[1])) return;
+         if (Tm && (0, xR.g)(this.screenPoint[1])) return;
```

#### 981. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7764` → after: `L7764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7764) · [Before (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7764)

```diff
-           if (null === yk || yk <= vq) return (0, oq.f)(Ik, Tk);
+           if (null === xm || xm <= ei) return (0, Si.j)(fm, Am);
```

#### 982. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7767` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7767) · [Before (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7767)

```diff
-           if (lk < Oq) return (0, oq.f)(Ik, Tk);
+           if (wm < Gi) return (0, Si.j)(fm, Am);
```

#### 983. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7769` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7769) · [Before (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7769)

```diff
-         }(Tk, kk, Xk, this.XZ.pickCursorTarget, this.cursorAim), (0, oq.f)(Tk, ik.eye), (0, oq.f)(kk, ik.camera), (0, oq.f)(Xk, ik.ray), this.msSincePick = 0), aL(Ik, this.cursorAim, bq.b.getPlayerFacingHeading(Ik), bq.b.getPlayerFacingPitch(Ik))
+         }(Am, mm, hm, this.oE.pickCursorTarget, this.cursorAim), (0, Si.j)(Am, am.eye), (0, Si.j)(mm, am.camera), (0, Si.j)(hm, am.ray), this.msSincePick = 0), pR(fm, this.cursorAim, Ci.e.getPlayerFacingHeading(fm), Ci.e.getPlayerFacingPitch(fm))
```

#### 984. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7773)

```diff
-           qZ: Fk
+           IE: Tm
```

#### 985. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7781` → after: `L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7781) · [Before (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7781)

```diff
-         })(kk, this.tapPoint, this.tapAim) && aL(Fk, this.tapAim, bq.b.getPlayerFacingHeading(Fk), bq.b.getPlayerFacingPitch(Fk))
+         })(mm, this.tapPoint, this.tapAim) && pR(Tm, this.tapAim, Ci.e.getPlayerFacingHeading(Tm), Ci.e.getPlayerFacingPitch(Tm))
```

#### 986. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7785` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7785) · [Before (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7785)

```diff
-           qZ: kk
+           IE: mm
```

#### 987. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7806` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7806) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7806)

```diff
-         }(Fk.heading + Fk.sq[1], Fk.pitch + Fk.sq[0], Fk.ta + Fk.sq[2], kk.Xw.PD().fov, this.XZ.getAspectRatio(), Ik, Xk, this.ray)
+         }(Tm.heading + Tm.pp[1], Tm.pitch + Tm.pp[0], Tm.ei + Tm.pp[2], mm.qY.cW().fov, this.oE.getAspectRatio(), fm, hm, this.ray)
```

#### 988. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7820` → after: `L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7820) · [Before (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7820)

```diff
-       lL.heading = Ik, lL.pitch = Xk, (0, fq.n)(Fk, lL), bq.b.setPlayerFacing(kk, lL.heading, lL.pitch)
+       RR.heading = fm, RR.pitch = hm, (0, Li.n)(Tm, RR), Ci.e.setPlayerFacing(mm, RR.heading, RR.pitch)
```

#### 989. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7824` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7824) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7824)

```diff
-       return xk().copy(Fk, kk.bloxd.getLifeformEyePos(kk.oR, !1))
+       return Vm().copy(Tm, mm.bloxd.getLifeformEyePos(mm.xH, !1))
```

#### 990. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7826` → after: `L7826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7826) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7826)

```diff
-     var LL = Ik(39221);
+     var oR = fm(39340);
```

#### 991. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7840-L7841` → after: `L7840-L7841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7840-L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7840-L7841) · [Before (L7840-L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7840-L7841)

```diff
-         if (!this.hasWritten) return Tk.JG = 0, Tk.xG = 0, Tk.pointedAt = void 0, Tk;
-         const ik = (0, fq.C)(this.writtenHeading, kk);
+         if (!this.hasWritten) return Am.XN = 0, Am.yN = 0, Am.pointedAt = void 0, Am;
+         const am = (0, Li.u)(this.writtenHeading, mm);
```

#### 992. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7865` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7865) · [Before (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7865)

```diff
-         Lk = null !== qk && qk > vq ? qk : Math.max(vq, ak);
+         Rm = null !== im && im > ei ? im : Math.max(ei, Dm);
```

#### 993. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7874-L7875` → after: `L7874-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7874-L7875) · [Before (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7874-L7875)

```diff
-         Tk = Math.max(-Xk, Math.min(Xk, (0, fq.C)(kk, Fk)));
-       return (0, fq.y)(kk + Tk)
+         Am = Math.max(-hm, Math.min(hm, (0, Li.u)(mm, Tm)));
+       return (0, Li.t)(mm + Am)
```

#### 994. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7879-L7883` → after: `L7879-L7883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7879-L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7879-L7883) · [Before (L7879-L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7879-L7883)

```diff
-         this.qZ = kk, this.cameraController = Fk, this.freeCameraController = Ik, this.cursor = Xk, this.XZ = void 0, this.director = void 0, this.view = new ZL, this.look = {
-           JG: 0,
-           xG: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.ckk = [0, 0, 0], this.Wkk = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
-         const yk = Ml.e.subscribe("gameCamera", (kk => {
+         this.IE = mm, this.cameraController = Tm, this.freeCameraController = fm, this.cursor = hm, this.oE = void 0, this.director = void 0, this.view = new YR, this.look = {
+           XN: 0,
+           yN: 0
+         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.rmm = [0, 0, 0], this.smm = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
+         const xm = mD.b.subscribe("gameCamera", (mm => {
```

#### 995. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7899` → after: `L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7899) · [Before (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7899)

```diff
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && kk.XZ.MFk([])
+           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && mm.oE.WTm([])
```

#### 996. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7901-L7902` → after: `L7901-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7901-L7902) · [Before (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7901-L7902)

```diff
-         kk.on("Dt", Lk), Xk.listenForTaps(((Fk, Ik) => {
-           this.aimAtClientPoint(Fk, Ik), kk.okk()
+         mm.on("DE", Rm), hm.listenForTaps(((Tm, fm) => {
+           this.aimAtClientPoint(Tm, fm), mm.cmm()
```

#### 997. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7904` → after: `L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7904) · [Before (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7904)

```diff
-         const tk = Hk.g.subscribe("localPlayerTeleported", (kk => {
+         const pm = qm.j.subscribe("localPlayerTeleported", (mm => {
```

#### 998. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7911` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7911) · [Before (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7911)

```diff
-           yk(), Xk.listenForTaps(null), Hk.g.unsubscribe(tk), kk.off("beforeRender", lk), kk.off("afterRender", ak), kk.off("beforePhysicsTick", qk), kk.off("Dt", Lk), this.release({
+           xm(), hm.listenForTaps(null), qm.j.unsubscribe(pm), mm.off("beforeRender", wm), mm.off("afterRender", Dm), mm.off("beforePhysicsTick", im), mm.off("DE", Rm), this.release({
```

#### 999. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7913` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7913) · [Before (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7913)

```diff
-           }), this.screen.clear(), kk.XZ.MFk([])
+           }), this.screen.clear(), mm.oE.WTm([])
```

#### 1000. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7923` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7923) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7923)

```diff
-         const Fk = (0, Bq.e)(kk);
+         const Tm = (0, vi.g)(mm);
```

#### 1001. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7937)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (Fk = this.qZ.bloxd.client) && void 0 !== Fk && Fk.isReplayMode()) return this.qZ.XZ.MFk([]), this.yieldToReplay(), void this.screen.clear();
+         if (this.lastFrameMs = performance.now(), null !== (Tm = this.IE.bloxd.client) && void 0 !== Tm && Tm.isReplayMode()) return this.IE.oE.WTm([]), this.yieldToReplay(), void this.screen.clear();
```

#### 1002. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7940-L7943` → after: `L7940-L7943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7940-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7940-L7943) · [Before (L7940-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7940-L7943)

```diff
-         } = this.qZ;
-         this.detached || this.view.followBody(bq.b.getPlayerFacingHeading(this.qZ));
-         const Xk = bq.b.takeLookPointed(this.qZ);
-         null !== Ik.rY || null !== Ik.hY || null === this.mouseTurns && !Xk ? (this.look.JG = 0, this.look.xG = 0, this.look.pointedAt = void 0) : this.view.readLook(Ik.heading, Ik.pitch, "look" === this.mouseTurns, Xk, this.look);
+         } = this.IE;
+         this.detached || this.view.followBody(Ci.e.getPlayerFacingHeading(this.IE));
+         const hm = Ci.e.takeLookPointed(this.IE);
+         null !== fm.gL || null !== fm.dL || null === this.mouseTurns && !hm ? (this.look.XN = 0, this.look.yN = 0, this.look.pointedAt = void 0) : this.view.readLook(fm.heading, fm.pitch, "look" === this.mouseTurns, hm, this.look);
```

#### 1003. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7945` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7945)

```diff
-         if (this.qZ.XZ.MFk(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !Tk) return void this.release();
+         if (this.IE.oE.WTm(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !Am) return void this.release();
```

#### 1004. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7948)

```diff
-         "movement" !== this.facing || ik || this.turnBodyTowardsMovement(kk), this.cursorAim.Dt(kk), this.applyPose(Tk)
+         "movement" !== this.facing || am || this.turnBodyTowardsMovement(mm), this.cursorAim.DE(mm), this.applyPose(Am)
```

#### 1005. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7954` → after: `L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7954) · [Before (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7954)

```diff
-         return !bq.b.isCameraDetachedFromPlayer(this.qZ) && (this.setControlsLocked(!0), bq.b.detachCamera(this.qZ, {
+         return !Ci.e.isCameraDetachedFromPlayer(this.IE) && (this.setControlsLocked(!0), Ci.e.detachCamera(this.IE, {
```

#### 1006. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7956` → after: `L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7956) · [Before (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7956)

```diff
-         }) ? (this.detached = !0, this.qZ.WH = this.qZ.bloxd.getBlockReach(this.qZ.oR), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
+         }) ? (this.detached = !0, this.IE.Fq = this.IE.bloxd.getBlockReach(this.IE.xH), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
```

#### 1007. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7962` → after: `L7962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7962) · [Before (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7962)

```diff
-           qZ: Ik
+           IE: fm
```

#### 1008. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7965-L7966` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7965-L7966) · [Before (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7965-L7966)

```diff
-         } = Ik, Tk = bq.b.getPlayerFacingHeading(Ik), ik = bq.b.getPlayerFacingPitch(Ik), yk = null !== (Fk = kL(Ik, Tk, ik, this.reattachedPosition)) && void 0 !== Fk ? Fk : bq.b.getSavedZoomDistance(Ik);
-         this.giveUpView(), bq.b.reattachCamera(Ik), Xk.VY = yk, Xk.heading = Tk, Xk.pitch = ik, Xk.lD(), (0, ya.r)(Ik), this.setControlsLocked(!1, kk)
+         } = fm, Am = Ci.e.getPlayerFacingHeading(fm), am = Ci.e.getPlayerFacingPitch(fm), xm = null !== (Tm = hR(fm, Am, am, this.reattachedPosition)) && void 0 !== Tm ? Tm : Ci.e.getSavedZoomDistance(fm);
+         this.giveUpView(), Ci.e.reattachCamera(fm), hm.wL = xm, hm.heading = Am, hm.pitch = am, hm.pW(), (0, wD.t)(fm), this.setControlsLocked(!1, mm)
```

#### 1009. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7969` → after: `L7969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7969) · [Before (L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7969)

```diff
-         this.detached && (this.giveUpView(), bq.b.setFacingMode(this.qZ, "frozen"), this.setControlsLocked(!1, {
+         this.detached && (this.giveUpView(), Ci.e.setFacingMode(this.IE, "frozen"), this.setControlsLocked(!1, {
```

#### 1010. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7974` → after: `L7974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7974) · [Before (L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7974)

```diff
-         this.detached = !1, this.qZ.ckk = null, this.qZ.Wkk = null, this.publishView()
+         this.detached = !1, this.IE.rmm = null, this.IE.smm = null, this.publishView()
```

#### 1011. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7978` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7978) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7978)

```diff
-         this.cursor.setActive("cursor" === kk), "cursor" !== kk && this.cursorAim.forgetTap(), uy.d.get("scriptedCameraFacing") !== kk && uy.d.set({
+         this.cursor.setActive("cursor" === mm), "cursor" !== mm && this.cursorAim.forgetTap(), Xx.c.get("scriptedCameraFacing") !== mm && Xx.c.set({
```

#### 1012. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7985-L7988` → after: `L7985-L7988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7985-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7985-L7988) · [Before (L7985-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7985-L7988)

```diff
-           qZ: Ik
-         } = this, Xk = Ik.MJ.KFk(Ik.oR);
-         let Tk = bq.b.getPlayerFacingHeading(Ik);
-         const ik = null !== (Fk = Xk.ridingVehicleEId) && void 0 !== Fk ? Fk : null;
+           IE: fm
+         } = this, hm = fm.qI.ITm(fm.xH);
+         let Am = Ci.e.getPlayerFacingHeading(fm);
+         const am = null !== (Tm = hm.ridingVehicleEId) && void 0 !== Tm ? Tm : null;
```

#### 1013. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7990-L7991` → after: `L7990-L7991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7990-L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7990-L7991) · [Before (L7990-L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7990-L7991)

```diff
-             if (!(0, dq.d)(kk, Fk)) return !0;
-             const Ik = kk.bloxd.getResolvedPhysicsSettings(kk.oR, kk.MJ.FFk(kk.oR).physicsState);
+             if (!(0, ti.c)(mm, Tm)) return !0;
+             const fm = mm.bloxd.getResolvedPhysicsSettings(mm.xH, mm.qI.mTm(mm.xH).physicsState);
```

#### 1014. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7999` → after: `L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L7999) · [Before (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L7999)

```diff
-         bq.b.setPlayerFacing(Ik, Tk, (lk = bq.b.getPlayerFacingPitch(Ik), ak = kk, lk * Math.max(0, 1 - ak / 1e3 * 8)))
+         Ci.e.setPlayerFacing(fm, Am, (wm = Ci.e.getPlayerFacingPitch(fm), Dm = mm, wm * Math.max(0, 1 - Dm / 1e3 * 8)))
```

#### 1015. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8003` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8003) · [Before (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8003)

```diff
-           qZ: Fk
+           IE: Tm
```

#### 1016. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8007)

```diff
-         Fk.MJ.setPosition(Ik.aY, kk.position), Ik.heading = (0, fq.y)(kk.heading), Ik.pitch = (0, fq.k)(kk.pitch), Ik.lD(), (0, ya.r)(Fk), Fk.Xw.PD().fov = (0, cq.k)(kk.fov), this.view.noteWritten(Ik.heading, Ik.pitch), (0, oq.f)(kk.position, this.cameraPosition), "camera" === th … [truncated]
+         Tm.qI.setPosition(fm.yB, mm.position), fm.heading = (0, Li.t)(mm.heading), fm.pitch = (0, Li.g)(mm.pitch), fm.pW(), (0, wD.t)(Tm), Tm.qY.cW().fov = (0, ui.j)(mm.fov), this.view.noteWritten(fm.heading, fm.pitch), (0, Si.j)(mm.position, this.cameraPosition), "camera" === th … [truncated]
```

#### 1017. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8011` → after: `L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8011) · [Before (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8011)

```diff
-           qZ: Fk
+           IE: Tm
```

#### 1018. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8015` → after: `L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8015) · [Before (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8015)

```diff
-         eL(qL(Fk, this.eye), kk, (0, fq.h)(Ik.heading, Ik.pitch, this.rayDirection), Fk.WH, this.XZ.pickTargetedBlock, this.aim), aL(Fk, this.aim, Ik.heading, Ik.pitch)
+         jR(ER(Tm, this.eye), mm, (0, Li.d)(fm.heading, fm.pitch, this.rayDirection), Tm.Fq, this.oE.pickTargetedBlock, this.aim), pR(Tm, this.aim, fm.heading, fm.pitch)
```

#### 1019. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8019` → after: `L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8019) · [Before (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8019)

```diff
-           qZ: kk
+           IE: mm
```

#### 1020. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8021` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8021) · [Before (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8021)

```diff
-         kk.ckk = kk.ZFk(qL(kk, this.eye), null, this.ckk), kk.Wkk = bq.b.copyPlayerFacingDirection(kk, this.Wkk)
+         mm.rmm = mm.pTm(ER(mm, this.eye), null, this.rmm), mm.smm = Ci.e.copyPlayerFacingDirection(mm, this.smm)
```

#### 1021. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8024` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8024) · [Before (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8024)

```diff
-     var JL = Ik(34008);
+     var KR = fm(34122);
```

#### 1022. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8031` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8031) · [Before (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8031)

```diff
-       return null !== (Ik = null !== (Xk = kk.inclination) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.inclination) && void 0 !== Ik ? Ik : -.2
+       return null !== (fm = null !== (hm = mm.inclination) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.inclination) && void 0 !== fm ? fm : -.2
```

#### 1023. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8037` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8037) · [Before (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8037)

```diff
-         return null !== (Ik = null !== (Xk = kk.useSunPosition) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.useSunPosition) && void 0 !== Ik ? Ik : PL
+         return null !== (fm = null !== (hm = mm.useSunPosition) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.useSunPosition) && void 0 !== fm ? fm : nR
```

#### 1024. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8042-L8043` → after: `L8042-L8043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8042-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8042-L8043) · [Before (L8042-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8042-L8043)

```diff
-           return null !== (Ik = null !== (Xk = kk.sunPosition) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.sunPosition) && void 0 !== Ik ? Ik : KL
-         }(kk, Fk), yk = new rk.Ge(Xk, Tk, ik);
+           return null !== (fm = null !== (hm = mm.sunPosition) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.sunPosition) && void 0 !== fm ? fm : JR
+         }(mm, Tm), xm = new gm.WO(hm, Am, am);
```

#### 1025. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8056` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8056) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8056)

```diff
-       const Tk = null !== Ik && void 0 !== Ik ? Ik : QL(kk, Fk),
+       const Am = null !== fm && void 0 !== fm ? fm : cR(mm, Tm),
```

#### 1026. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8059` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8059) · [Before (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8059)

```diff
-           return null !== (Ik = null !== (Xk = kk.azimuth) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.azimuth) && void 0 !== Ik ? Ik : .55
+           return null !== (fm = null !== (hm = mm.azimuth) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.azimuth) && void 0 !== fm ? fm : .55
```

#### 1027. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8063` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8063) · [Before (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8063)

```diff
-           return null !== (Ik = null !== (Xk = kk.up) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.up) && void 0 !== Ik ? Ik : xL
+           return null !== (fm = null !== (hm = mm.up) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.up) && void 0 !== fm ? fm : QR
```

#### 1028. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8067-L8068` → after: `L8067-L8068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8067-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8067-L8068) · [Before (L8067-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8067-L8068)

```diff
-         qk = new rk.Ge(Math.cos(ak) * Math.cos(lk), Math.sin(-lk), Math.sin(ak) * Math.cos(lk)),
-         Lk = new rk.Ge(yk[0], yk[1], yk[2]),
+         im = new gm.WO(Math.cos(Dm) * Math.cos(wm), Math.sin(-wm), Math.sin(Dm) * Math.cos(wm)),
+         Rm = new gm.WO(xm[0], xm[1], xm[2]),
```

#### 1029. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8070-L8071` → after: `L8070-L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8070-L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8070-L8071) · [Before (L8070-L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8070-L8071)

```diff
-       rk.Quaternion.FromUnitVectorsToRef(rk.Ge.UpReadOnly, Lk, tk);
-       const Zk = new rk.Ge;
+       gm.Quaternion.FromUnitVectorsToRef(gm.WO.UpReadOnly, Rm, pm);
+       const Em = new gm.WO;
```

#### 1030. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8097-L8100` → after: `L8097-L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8097-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8097-L8100) · [Before (L8097-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8097-L8100)

```diff
-         this.qZ = kk, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const Fk = this.qZ.gJ.skyBox;
-         "object" === typeof Fk && "earth" === Fk.type && (this.earthSkyBox = Fk), this.sunOpacity = this.qZ.gJ.dayNightSunOpacity, this.moonOpacity = this.qZ.gJ.dayNightMoonOpacity;
-         const Ik = Ml.e.subscribe("dayNightSunOpacity", (kk => {
+         this.IE = mm, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
+         const Tm = this.IE.xI.skyBox;
+         "object" === typeof Tm && "earth" === Tm.type && (this.earthSkyBox = Tm), this.sunOpacity = this.IE.xI.dayNightSunOpacity, this.moonOpacity = this.IE.xI.dayNightMoonOpacity;
+         const fm = mD.b.subscribe("dayNightSunOpacity", (mm => {
```

#### 1031. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8103` → after: `L8103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8103) · [Before (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8103)

```diff
-           Xk = Ml.e.subscribe("dayNightMoonOpacity", (kk => {
+           hm = mD.b.subscribe("dayNightMoonOpacity", (mm => {
```

#### 1032. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8106` → after: `L8106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8106) · [Before (L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8106)

```diff
-           Tk = Ml.e.subscribe("dayNightStarOpacity", (kk => {
+           Am = mD.b.subscribe("dayNightStarOpacity", (mm => {
```

#### 1033. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8109` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8109) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8109)

```diff
-           ik = Ml.e.subscribe("skyBox", (kk => {
+           am = mD.b.subscribe("skyBox", (mm => {
```

#### 1034. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8114` → after: `L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8114) · [Before (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8114)

```diff
-         })), this.syncSunAndMoon(), this.setStarOpacity(this.qZ.gJ.dayNightStarOpacity)
+         })), this.syncSunAndMoon(), this.setStarOpacity(this.IE.xI.dayNightStarOpacity)
```

#### 1035. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8116` → after: `L8116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8116) · [Before (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8116)

```diff
-       rFk() {
+       dTm() {
```

#### 1036. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8126` → after: `L8126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8126) · [Before (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8126)

```diff
-         "object" === typeof kk && "earth" === kk.type ? this.earthSkyBox = kk : this.earthSkyBox = null, this.syncSunAndMoon()
+         "object" === typeof mm && "earth" === mm.type ? this.earthSkyBox = mm : this.earthSkyBox = null, this.syncSunAndMoon()
```

#### 1037. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8141-L8143` → after: `L8141-L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8141-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8141-L8143) · [Before (L8141-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8141-L8143)

```diff
-         null === kk && (null === (Ik = this.sunMesh) || void 0 === Ik || Ik.Av(!1));
-         null === Fk && (null === (Xk = this.moonMesh) || void 0 === Xk || Xk.Av(!1));
-         null === kk && null === Fk || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== kk && ((0, Yk.g)(this.sunMat, {
+         null === mm && (null === (fm = this.sunMesh) || void 0 === fm || fm.Dk(!1));
+         null === Tm && (null === (hm = this.moonMesh) || void 0 === hm || hm.Dk(!1));
+         null === mm && null === Tm || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== mm && ((0, Bm.e)(this.sunMat, {
```

#### 1038. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8145` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8145) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8145)

```diff
-         }), this.sunMesh.Av(!0)), null !== Fk && ((0, Yk.g)(this.moonMat, {
+         }), this.sunMesh.Dk(!0)), null !== Tm && ((0, Bm.e)(this.moonMat, {
```

#### 1039. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8147` → after: `L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8147) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8147)

```diff
-         }), this.moonMesh.Av(!0)))
+         }), this.moonMesh.Dk(!0)))
```

#### 1040. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8151` → after: `L8151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8151) · [Before (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8151)

```diff
-         zL(kk) ? (this.ensureCreated(), (0, Yk.g)(this.starsMat, {
+         kR(mm) ? (this.ensureCreated(), (0, Bm.e)(this.starsMat, {
```

#### 1041. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8153` → after: `L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8153) · [Before (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8153)

```diff
-         }), this.starsMesh.Av(!0)) : null === (Fk = this.starsMesh) || void 0 === Fk || Fk.Av(!1)
+         }), this.starsMesh.Dk(!0)) : null === (Tm = this.starsMesh) || void 0 === Tm || Tm.Dk(!1)
```

#### 1042. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8158-L8160` → after: `L8158-L8160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8158-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8158-L8160) · [Before (L8158-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8158-L8160)

```diff
-           Xw: kk
-         } = this.qZ, {
-           Yw: Fk
+           qY: mm
+         } = this.IE, {
+           Aq: Tm
```

#### 1043. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8162-L8163` → after: `L8162-L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8162-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8162-L8163) · [Before (L8162-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8162-L8163)

```diff
-         this.starsMesh = (0, Pk.m)(kk, "dayNightStars", (0, Qk.k)());
-         const Ik = JL.h.map((kk => JL.l + kk)),
+         this.starsMesh = (0, Im.l)(mm, "dayNightStars", (0, Qm.k)());
+         const fm = KR.i.map((mm => KR.m + mm)),
```

#### 1044. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8165` → after: `L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8165) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8165)

```diff
-             rootUrl: JL.l,
+             rootUrl: KR.m,
```

#### 1045. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8169` → after: `L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8169) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8169)

```diff
-             samplingMode: Kk.i.nearest
+             samplingMode: Km.e.nearest
```

#### 1046. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8171)

```diff
-           Tk = (0, Kk.q)(Fk, Xk),
+           Am = (0, Km.o)(Tm, hm),
```

#### 1047. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8175-L8176` → after: `L8175-L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8175-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8175-L8176) · [Before (L8175-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8175-L8176)

```diff
-             alphaMode: vk.d.add,
-             transparencyMode: vk.r.alphaBlend
+             alphaMode: Zm.e.add,
+             transparencyMode: Zm.s.alphaBlend
```

#### 1048. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8178` → after: `L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8178) · [Before (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8178)

```diff
-         this.starsMat = (0, Yk.e)({
+         this.starsMat = (0, Bm.b)({
```

#### 1049. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8180` → after: `L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8180) · [Before (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8180)

```diff
-           Yw: Fk,
+           Aq: Tm,
```

#### 1050. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8183-L8184` → after: `L8183-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8183-L8184) · [Before (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8183-L8184)

```diff
-         const yk = zk.d.BILLBOARDMODE_ALL | zk.d.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, Pk.m)(kk, "dayNightSun", (0, Qk.i)({
+         const xm = cm.b.BILLBOARDMODE_ALL | cm.b.BILLBOARDMODE_USE_POSITION;
+         this.sunMesh = (0, Im.l)(mm, "dayNightSun", (0, Qm.h)({
```

#### 1051. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8187` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8187) · [Before (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8187)

```diff
-         })), this.sunMat = oL(Fk, "dayNightSun", JL.n), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = yk, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, Pk.m)(kk, "dayNightMoon", (0, Qk.i)({
+         })), this.sunMat = SR(Tm, "dayNightSun", KR.p), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = xm, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, Im.l)(mm, "dayNightMoon", (0, Qm.h)({
```

#### 1052. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8190` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8190) · [Before (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8190)

```diff
-         })), this.moonMat = oL(Fk, "dayNightMoon", JL.d), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = yk, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.Av(!1), this.sunMesh.Av(!1), this.moonMesh.Av(!1)
+         })), this.moonMat = SR(Tm, "dayNightMoon", KR.e), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = xm, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.Dk(!1), this.sunMesh.Dk(!1), this.moonMesh.Dk(!1)
```

#### 1053. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8193` → after: `L8193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8193) · [Before (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8193)

```diff
-         kk.infiniteDistance = !0, kk.renderingGroupId = -1, kk.gw = !1, kk.ne = !0, kk.ue = !0, kk.applyFog = !1, this.qZ.Xw.hw(kk, !1, this.qZ.SZ, !1)
+         mm.infiniteDistance = !0, mm.renderingGroupId = -1, mm.xq = !1, mm.gO = !0, mm.mY = !0, mm.applyFog = !1, this.IE.qY.Dq(mm, !1, this.IE.HE, !1)
```

#### 1054. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8199-L8200` → after: `L8199-L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8199-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8199-L8200) · [Before (L8199-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8199-L8200)

```diff
-           Xw: kk
-         } = this.qZ, Fk = .8 * kk.PD().far, Ik = function() {
+           qY: mm
+         } = this.IE, Tm = .8 * mm.cW().far, fm = function() {
```

#### 1055. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8202` → after: `L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8202) · [Before (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8202)

```diff
-           return "earth" === (null === kk || void 0 === kk ? void 0 : kk.type) ? kk : void 0
+           return "earth" === (null === mm || void 0 === mm ? void 0 : mm.type) ? mm : void 0
```

#### 1056. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8212-L8213` → after: `L8212-L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8212-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8212-L8213) · [Before (L8212-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8212-L8213)

```diff
-           Xw: kk
-         } = this.qZ, {
+           qY: mm
+         } = this.IE, {
```

#### 1057. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8215-L8216` → after: `L8215-L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8215-L8216) · [Before (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8215-L8216)

```diff
-         } = kk.PD(), Ik = .95 * Fk;
-         this.starsMesh.ci.set(Ik, Ik, Ik);
+         } = mm.cW(), fm = .95 * Tm;
+         this.starsMesh.fi.set(fm, fm, fm);
```

#### 1058. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8219` → after: `L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8219) · [Before (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8219)

```diff
-         this.sunMesh.ci.set(Tk, Tk, Tk);
+         this.sunMesh.fi.set(Am, Am, Am);
```

#### 1059. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8221` → after: `L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8221) · [Before (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8221)

```diff
-         this.moonMesh.ci.set(ik, ik, ik)
+         this.moonMesh.fi.set(am, am, am)
```

#### 1060. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8234` → after: `L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8234) · [Before (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8234)

```diff
-         samplingMode: Kk.i.nearest,
+         samplingMode: Km.e.nearest,
```

#### 1061. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8239` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8239) · [Before (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8239)

```diff
-       return (0, Yk.e)({
+       return (0, Bm.b)({
```

#### 1062. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8241` → after: `L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8241) · [Before (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8241)

```diff
-         Yw: kk,
+         Aq: mm,
```

#### 1063. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8250-L8260` → after: `L8250-L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac...build/bloxd.io/mpd96o.85ad4551#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8250-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/mpd96o.85ad4551/bundles/bloxd.io/chunks/js/92.js#L8250-L8260) · [Before (L8250-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e26f598e6fdbdf8c8e3a5e414cde017cb31d01ac/bundles/bloxd.io/chunks/js/92.js#L8250-L8260)

```diff
-     var vL = Ik(4210),
-       EL = Ik(37902),
-       OL = Ik(37370),
-       nL = Ik(37643),
-       GL = Ik(37461),
-       pL = Ik(768),
-       uL = Ik(2717),
-       bL = Ik(4269),
-       RL = Ik(113),
-       UL = Ik(309),
-       CL = Ik(39224);
+     var eR = fm(4171),
+       NR = fm(37970),
+       GR = fm(37364),
+       XR = fm(37680),
+       PR = fm(37488),
+       HR = fm(800),
+       yR = fm(2780),
+       CR = fm(4228),
+       rR = fm(118),
+       sR = fm(330),
+       lR = fm(39342);
```
