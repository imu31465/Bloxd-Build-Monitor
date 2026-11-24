# Changed — Bundle Modifications Report (Part 090 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `90 / 140` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 089](part-089.md) · [Part 091 →](part-091.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (3649 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 876. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6959-L6963` → after: `L6959-L6963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6959-L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L6959-L6963) · [Before (L6959-L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L6959-L6963)

```diff
-         this.IE = mm, this.system = Tm, this.onFree = Am, this.box = void 0, this.points = null, this.boxAt = new gm.WO, this.pointsAt = new gm.WO, this.lifeMs = void 0, this.yp = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
-         const Dm = null !== (am = fm.dir1) && void 0 !== am ? am : gD,
-           im = null !== (xm = fm.dir2) && void 0 !== xm ? xm : gD,
-           Rm = null !== (wm = hm.half) && void 0 !== wm ? wm : [0, 0, 0];
-         this.box = Tm.createBoxEmitter(new gm.WO(Dm[0], Dm[1], Dm[2]), new gm.WO(im[0], im[1], im[2]), new gm.WO(-Rm[0], -Rm[1], -Rm[2]), new gm.WO(Rm[0], Rm[1], Rm[2])), this.boxAt.set(hm.pos[0], hm.pos[1], hm.pos[2]), Tm.emitter = this.boxAt, Tm.manualEmitCount = 0, Tm.onAnimat … [truncated]
+         this.AU = DD, this.system = zD, this.onFree = sD, this.box = void 0, this.points = null, this.boxAt = new FD.WI, this.pointsAt = new FD.WI, this.lifeMs = void 0, this.bA = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
+         const cD = null !== (KD = wD.dir1) && void 0 !== KD ? KD : Yc,
+           gD = null !== (rD = wD.dir2) && void 0 !== rD ? rD : Yc,
+           RD = null !== (LD = pD.half) && void 0 !== LD ? LD : [0, 0, 0];
+         this.box = zD.createBoxEmitter(new FD.WI(cD[0], cD[1], cD[2]), new FD.WI(gD[0], gD[1], gD[2]), new FD.WI(-RD[0], -RD[1], -RD[2]), new FD.WI(RD[0], RD[1], RD[2])), this.boxAt.set(pD.pos[0], pD.pos[1], pD.pos[2]), zD.emitter = this.boxAt, zD.manualEmitCount = 0, zD.onAnimat … [truncated]
```

#### 877. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L6967)

```diff
-         }, (0, Gm.z)(mm, Tm), this.setEmitRate(fm.emitRate)
+         }, (0, dD.u)(DD, zD), this.setEmitRate(wD.emitRate)
```

#### 878. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L6970)

```diff
-         this.stopped || (this.boxAt.set(mm[0], mm[1], mm[2]), Tm && (this.box.minEmitBox.set(-Tm[0], -Tm[1], -Tm[2]), this.box.maxEmitBox.set(Tm[0], Tm[1], Tm[2])), (0, Gm.z)(this.IE, this.system))
+         this.stopped || (this.boxAt.set(DD[0], DD[1], DD[2]), zD && (this.box.minEmitBox.set(-zD[0], -zD[1], -zD[2]), this.box.maxEmitBox.set(zD[0], zD[1], zD[2])), (0, dD.u)(this.AU, this.system))
```

#### 879. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6973` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L6973) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L6973)

```diff
-         this.stopped || (this.system.emitRate = mm, mm > 0 && (this.useBox(), this.system.manualEmitCount = -1, this.clearStopTimer(), this.start(), (0, Gm.z)(this.IE, this.system)))
+         this.stopped || (this.system.emitRate = DD, DD > 0 && (this.useBox(), this.system.manualEmitCount = -1, this.clearStopTimer(), this.start(), (0, dD.u)(this.AU, this.system)))
```

#### 880. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6980` → after: `L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L6980) · [Before (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L6980)

```diff
-         const hm = this.points ??= new dD(this.yp);
+         const pD = this.points ??= new Fc(this.bA);
```

#### 881. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6985` → after: `L6985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L6985) · [Before (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L6985)

```diff
-           wm = Math.min(fm, hm.yp - hm.length);
+           LD = Math.min(wD, pD.bA - pD.length);
```

#### 882. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7008)

```diff
-         (0, Gm.z)(this.IE, this.system), this.start(), this.system.emitRate > 0 || this.stopAfterLifetime()
+         (0, dD.u)(this.AU, this.system), this.start(), this.system.emitRate > 0 || this.stopAfterLifetime()
```

#### 883. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7027` → after: `L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7027) · [Before (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7027)

```diff
-         this.IE = mm, this.live = new Set, this.textures = new Map
+         this.AU = DD, this.live = new Set, this.textures = new Map
```

#### 884. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7030)

```diff
-         return this.IE.qY.wG().particlesEnabled
+         return this.AU.wB.Ul().particlesEnabled
```

#### 885. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7035` → after: `L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7035) · [Before (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7035)

```diff
-           am = this.IE.qY.yX(`game|${Am}`, mm.yp);
+           KD = this.AU.wB.EW(`game|${sD}`, DD.bA);
```

#### 886. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7037-L7040` → after: `L7037-L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7037-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7037-L7040) · [Before (L7037-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7037-L7040)

```diff
-         const xm = null !== (hm = mm.gravity) && void 0 !== hm ? hm : [0, 0, 0];
-         am.gravity = new gm.WO(xm[0], xm[1], xm[2]);
-         for (const Dm of mm.colorGradients) am.addColorGradient(Dm.timeFraction, (0, Gm.m)(Dm.minColor), Dm.maxColor ? (0, Gm.m)(Dm.maxColor) : void 0);
-         const wm = new WD(this.IE, am, mm, Tm, (mm => {
+         const rD = null !== (pD = DD.gravity) && void 0 !== pD ? pD : [0, 0, 0];
+         KD.gravity = new FD.WI(rD[0], rD[1], rD[2]);
+         for (const cD of DD.colorGradients) KD.addColorGradient(cD.timeFraction, (0, dD.i)(cD.minColor), cD.maxColor ? (0, dD.i)(cD.maxColor) : void 0);
+         const LD = new Hc(this.AU, KD, DD, zD, (DD => {
```

#### 887. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7046` → after: `L7046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7046) · [Before (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7046)

```diff
-         (0, Nm.j)(this.IE, mm)
+         (0, jD.l)(this.AU, DD)
```

#### 888. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7049` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7049) · [Before (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7049)

```diff
-         "critical" === mm && (0, Nm.g)(this.IE, Nm.n, [Tm[0], Tm[1], Tm[2]], fm)
+         "critical" === DD && (0, jD.h)(this.AU, jD.p, [zD[0], zD[1], zD[2]], wD)
```

#### 889. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7054` → after: `L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7054) · [Before (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7054)

```diff
-         for (const mm of this.textures.values())(0, Km.z)(mm);
+         for (const DD of this.textures.values())(0, OD.L)(DD);
```

#### 890. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7058)

```diff
-         const fm = "string" === typeof mm ? `${mm}|${Tm?"mips":"flat"}` : `|${mm.kind}`;
+         const wD = "string" === typeof DD ? `${DD}|${zD?"mips":"flat"}` : `|${DD.kind}`;
```

#### 891. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7061-L7062` → after: `L7061-L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7061-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7061-L7062) · [Before (L7061-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7061-L7062)

```diff
-           const Am = this.IE.qY.wG();
-           hm = "string" === typeof mm ? (0, Km.q)(Am, (0, Ym.c)(mm), Tm) : function(mm) {
+           const sD = this.AU.wB.Ul();
+           pD = "string" === typeof DD ? (0, OD.x)(sD, (0, BD.d)(DD), zD) : function(DD) {
```

#### 892. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7068` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7068) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7068)

```diff
-                 samplingMode: Km.e.nearest,
+                 samplingMode: OD.i.nearest,
```

#### 893. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7071-L7072` → after: `L7071-L7072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7071-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7071-L7072) · [Before (L7071-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7071-L7072)

```diff
-               hm = (0, nm.m)(mm, "smokePuff", fm),
-               Am = (0, nm.j)(hm);
+               pD = (0, ED.j)(DD, "smokePuff", wD),
+               sD = (0, ED.g)(pD);
```

#### 894. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7075` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7075) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7075)

```diff
-             })), (0, nm.T)(hm, !0, !1), (0, Km.V)(hm), hm
+             })), (0, ED.R)(pD, !0, !1), (0, OD.ab)(pD), pD
```

#### 895. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7084-L7085` → after: `L7084-L7085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7084-L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7084-L7085) · [Before (L7084-L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7084-L7085)

```diff
-         this.IE = mm, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = mm => {
-           this.offset = (this.offset + Math.min(mm, 250) / 1e3 * 1.2 * mi) % 1, (0, nm.I)(this.material, -this.offset)
+         this.AU = DD, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = DD => {
+           this.offset = (this.offset + Math.min(DD, 250) / 1e3 * 1.2 * Dg) % 1, (0, ED.J)(this.material, -this.offset)
```

#### 896. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7090-L7091` → after: `L7090-L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7090-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7090-L7091) · [Before (L7090-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7090-L7091)

```diff
-         const Tm = this.IE.qY,
-           fm = (0, Im.l)(Tm, "routeChevrons", function(mm) {
+         const zD = this.AU.wB,
+           wD = (0, MD.q)(zD, "routeChevrons", function(DD) {
```

#### 897. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7111` → after: `L7111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7111) · [Before (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7111)

```diff
-         fm.material = this.materialFor(mm.colour, mm.alpha), fm.xq = !1, fm.receiveShadows = !1, fm.gO = !0, Tm.Dq(fm, !1, mm.cells[0].pos), this.node = fm, this.IE.on("afterRender", this.slide)
+         wD.material = this.materialFor(DD.colour, DD.alpha), wD.uB = !1, wD.receiveShadows = !1, wD.lI = !0, zD.tB(wD, !1, DD.cells[0].pos), this.node = wD, this.AU.on("afterRender", this.slide)
```

#### 898. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7118)

```diff
-         this.node && (this.IE.off("afterRender", this.slide), this.node.dispose(), this.node = null)
+         this.node && (this.AU.off("afterRender", this.slide), this.node.dispose(), this.node = null)
```

#### 899. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7121)

```diff
-         const fm = `${mm} ${Tm}`;
+         const wD = `${DD} ${zD}`;
```

#### 900. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7123` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7123) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7123)

```diff
-         this.material && this.look === fm || (null === (hm = this.material) || void 0 === hm || hm.dispose(!0, !0), this.material = nD(this.IE.qY.wG(), mm, Tm), this.look = fm);
+         this.material && this.look === wD || (null === (pD = this.material) || void 0 === pD || pD.dispose(!0, !0), this.material = Ec(this.AU.wB.Ul(), DD, zD), this.look = wD);
```

#### 901. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7127` → after: `L7127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7127) · [Before (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7127)

```diff
-     var fi = fm(39261);
+     var wg = wD(39102);
```

#### 902. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7130-L7131` → after: `L7130-L7131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7130-L7131) · [Before (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7130-L7131)

```diff
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new fi.d((() => mD.b.get("forcedCameraDirectionTransitionMs")), (mm => {
-           mD.b.apply(mm)
+         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new wg.e((() => Dc.e.get("forcedCameraDirectionTransitionMs")), (DD => {
+           Dc.e.apply(DD)
```

#### 903. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7167-L7171` → after: `L7167-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7167-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7167-L7171) · [Before (L7167-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7167-L7171)

```diff
-     var ai = fm(1321),
-       xi = fm(4375),
-       wi = fm(39114),
-       Di = fm(1796),
-       ii = fm(1763);
+     var sg = wD(1332),
+       Kg = wD(4468),
+       rg = wD(38963),
+       Lg = wD(1806),
+       cg = wD(1775);
```

#### 904. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7295)

```diff
-         super(`${Ri.name} has been mutated during iteration`)
+         super(`${gg.name} has been mutated during iteration`)
```

#### 905. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7306-L7307` → after: `L7306-L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7306-L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7306-L7307) · [Before (L7306-L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7306-L7307)

```diff
-         const am = (0, Um.c)().blockDataOwner.getBlockData(mm[0], mm[1], mm[2]),
-           xm = null !== (Tm = null === am || void 0 === am || null === (fm = am.persisted) || void 0 === fm || null === (hm = fm.shared) || void 0 === hm ? void 0 : hm.passkeyLastUpdated) && void 0 !== Tm ? Tm : 0;
+         const KD = (0, vD.b)().blockDataOwner.getBlockData(DD[0], DD[1], DD[2]),
+           rD = null !== (zD = null === KD || void 0 === KD || null === (wD = KD.persisted) || void 0 === wD || null === (pD = wD.shared) || void 0 === pD ? void 0 : pD.passkeyLastUpdated) && void 0 !== zD ? zD : 0;
```

#### 906. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7317-L7324` → after: `L7317-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7317-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7317-L7324) · [Before (L7317-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7317-L7324)

```diff
-     var Ii = fm(39273),
-       Ki = fm(8666),
-       Qi = fm(39278),
-       ni = fm(4355),
-       Ji = fm(4432),
-       ci = fm(1309),
-       zi = fm(39283),
-       Zi = fm(4364);
+     var hg = wD(39111),
+       ng = wD(8740),
+       Mg = wD(39117),
+       Og = wD(4445),
+       Jg = wD(4518),
+       Eg = wD(1324),
+       Qg = wD(39124),
+       Xg = wD(4460);
```

#### 907. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7327-L7329` → after: `L7327-L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7327-L7329) · [Before (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7327-L7329)

```diff
-         this.IE = mm, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.IE.camera.RL = (mm, Tm) => {
-           const fm = this.IE.camera.fL;
-           this.IE.qI.MTm(this.IE.xH).cameraZoomChanged(Tm, mm), 0 !== fm && 0 === this.IE.camera.fL && this.disableFrontFacing()
+         this.AU = DD, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.AU.camera.JY = (DD, zD) => {
+           const wD = this.AU.camera.fY;
+           this.AU.yJ.zwD(this.AU.vW).cameraZoomChanged(zD, DD), 0 !== wD && 0 === this.AU.camera.fY && this.disableFrontFacing()
```

#### 908. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7331)

```diff
-         const Tm = qm.j.subscribe("SwapCameraZoom", (() => {
+         const zD = GD.l.subscribe("SwapCameraZoom", (() => {
```

#### 909. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7334` → after: `L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7334) · [Before (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7334)

```diff
-           fm = mD.b.subscribe("playerZoom", (mm => {
+           wD = Dc.e.subscribe("playerZoom", (DD => {
```

#### 910. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7338)

```diff
-           this.endTemporaryThirdPerson(), this.IE.camera.YL.reset(), qm.j.unsubscribe(Tm), fm()
+           this.endTemporaryThirdPerson(), this.AU.camera.EY.reset(), GD.l.unsubscribe(zD), wD()
```

#### 911. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7346` → after: `L7346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7346) · [Before (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7346)

```diff
-         if (mm) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.IE.camera.fL, void(this.locked = !0);
+         if (DD) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.AU.camera.fY, void(this.locked = !0);
```

#### 912. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7357` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7357) · [Before (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7357)

```diff
-         return this.locked ? null !== (mm = null === (Tm = this.deferredZoom) || void 0 === Tm ? void 0 : Tm.zoom) && void 0 !== mm ? mm : this.lockedZoom : this.IE.camera.fL
+         return this.locked ? null !== (DD = null === (zD = this.deferredZoom) || void 0 === zD ? void 0 : zD.zoom) && void 0 !== DD ? DD : this.lockedZoom : this.AU.camera.fY
```

#### 913. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7363-L7364` → after: `L7363-L7364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7363-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7363-L7364) · [Before (L7363-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7363-L7364)

```diff
-             const mm = this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing;
-             if (!(0 === this.IE.camera.fL && !mm)) return;
+             const DD = this.AU.yJ.getState(this.AU.vW, "cameraShake").frontFacing;
+             if (!(0 === this.AU.camera.fY && !DD)) return;
```

#### 914. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7376` → after: `L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7376) · [Before (L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7376)

```diff
-         this.IE.xI.canUseZoomKey || qm.j.gp("showBottomMessage", {
+         this.AU.NJ.canUseZoomKey || GD.l.KG("showBottomMessage", {
```

#### 915. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7390` → after: `L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7390) · [Before (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7390)

```diff
-         const Tm = mm - this.IE.camera.fL;
+         const zD = DD - this.AU.camera.fY;
```

#### 916. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7398-L7399` → after: `L7398-L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7398-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7398-L7399) · [Before (L7398-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7398-L7399)

```diff
-         const Tm = this.IE.camera.fL;
-         mm < 0 ? this.IE.camera.fL = 0 : mm > (this.IE.xI.maxPlayerZoom || 10) ? this.IE.camera.fL = this.IE.xI.maxPlayerZoom || 10 : this.IE.camera.fL = mm, this.onCameraZoomSet(Tm, mm)
+         const zD = this.AU.camera.fY;
+         DD < 0 ? this.AU.camera.fY = 0 : DD > (this.AU.NJ.maxPlayerZoom || 10) ? this.AU.camera.fY = this.AU.NJ.maxPlayerZoom || 10 : this.AU.camera.fY = DD, this.onCameraZoomSet(zD, DD)
```

#### 917. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7402` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7402) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7402)

```diff
-         this.IE.qI.MTm(this.IE.xH).shouldChangeCameraZoom(mm) && (0 === this.IE.camera.fL && 1 === mm ? mm++ : 2 === this.IE.camera.fL && -1 === mm && mm--, this.setCameraZoomNoValidation(this.IE.camera.fL + mm))
+         this.AU.yJ.zwD(this.AU.vW).shouldChangeCameraZoom(DD) && (0 === this.AU.camera.fY && 1 === DD ? DD++ : 2 === this.AU.camera.fY && -1 === DD && DD--, this.setCameraZoomNoValidation(this.AU.camera.fY + DD))
```

#### 918. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7405` → after: `L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7405) · [Before (L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7405)

```diff
-         this.locked || (this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.IE.camera.fL ? this.setCameraZoom(this.IE.xI.zoomOutDistance || 3) : (this.setCameraZoom(this.IE.xI.zoomOutDistance || 3), 0 !== th … [truncated]
+         this.locked || (this.AU.yJ.getState(this.AU.vW, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.AU.camera.fY ? this.setCameraZoom(this.AU.NJ.zoomOutDistance || 3) : (this.setCameraZoom(this.AU.NJ.zoomOutDistance || 3), 0 !== th … [truncated]
```

#### 919. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7408` → after: `L7408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7408) · [Before (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7408)

```diff
-         this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing = !1, this.IE.camera.pp[0] = 0, this.IE.camera.pp[1] = 0, this.IE.camera.pp[2] = 0
+         this.AU.yJ.getState(this.AU.vW, "cameraShake").frontFacing = !1, this.AU.camera.pG[0] = 0, this.AU.camera.pG[1] = 0, this.AU.camera.pG[2] = 0
```

#### 920. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7411` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7411) · [Before (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7411)

```diff
-         this.IE.qI.getState(this.IE.xH, "cameraShake").frontFacing = !0, this.IE.camera.pp[0] = Math.PI, this.IE.camera.pp[1] = 0, this.IE.camera.pp[2] = Math.PI
+         this.AU.yJ.getState(this.AU.vW, "cameraShake").frontFacing = !0, this.AU.camera.pG[0] = Math.PI, this.AU.camera.pG[1] = 0, this.AU.camera.pG[2] = Math.PI
```

#### 921. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7414` → after: `L7414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7414) · [Before (L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7414)

```diff
-         this.IE.qI.MTm(this.IE.xH).cameraZoomSet(mm, Tm), qm.j.gp("cameraZoomSet", this.IE.camera.fL), 0 === this.IE.camera.fL && this.disableFrontFacing()
+         this.AU.yJ.zwD(this.AU.vW).cameraZoomSet(DD, zD), GD.l.KG("cameraZoomSet", this.AU.camera.fY), 0 === this.AU.camera.fY && this.disableFrontFacing()
```

#### 922. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7417-L7418` → after: `L7417-L7418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7417-L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7417-L7418) · [Before (L7417-L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7417-L7418)

```diff
-     var bi = fm(36653),
-       Si = fm(39288);
+     var Pg = wD(36561),
+       Cg = wD(39133);
```

#### 923. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7428` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7428) · [Before (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7428)

```diff
-         this.IE = mm, this.pointerLockWrapper = Tm, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = mm => {
+         this.AU = DD, this.pointerLockWrapper = zD, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = DD => {
```

#### 924. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7432` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7432) · [Before (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7432)

```diff
-           "mouse" !== mm.pointerType ? "pen" !== mm.pointerType && !Hi(mm) || !this.IE.container.element.contains(mm.target) || (0, bi.g)(mm.target) || null === (Tm = this.tapListener) || void 0 === Tm || Tm.call(this, mm.clientX, mm.clientY) : this.followPoint(mm.clientX, mm.cli … [truncated]
+           "mouse" !== DD.pointerType ? "pen" !== DD.pointerType && !Sg(DD) || !this.AU.container.element.contains(DD.target) || (0, Pg.l)(DD.target) || null === (zD = this.tapListener) || void 0 === zD || zD.call(this, DD.clientX, DD.clientY) : this.followPoint(DD.clientX, DD.cli … [truncated]
```

#### 925. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7436` → after: `L7436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7436) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7436)

```diff
-         mm !== this.active && (this.active = mm, this.IE.container.UH(!mm), mm ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(Xi)) : (window.removeEventListener(" … [truncated]
+         DD !== this.active && (this.active = DD, this.AU.container.mN(!DD), DD ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(jg)) : (window.removeEventListener(" … [truncated]
```

#### 926. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7448` → after: `L7448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7448) · [Before (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7448)

```diff
-         const hm = this.IE.container.canvas.getBoundingClientRect();
+         const pD = this.AU.container.canvas.getBoundingClientRect();
```

#### 927. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7462` → after: `L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7462) · [Before (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7462)

```diff
-       return "mouse" === mm.pointerType || !Xx.c.get("isTouchScreen")
+       return "mouse" === DD.pointerType || !ir.e.get("isTouchScreen")
```

#### 928. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7464-L7468` → after: `L7464-L7468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7464-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7464-L7468) · [Before (L7464-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7464-L7468)

```diff
-     var yi = fm(6449),
-       Ci = fm(37457),
-       ri = fm(1957),
-       si = fm(39305),
-       li = fm(39209);
+     var ig = wD(6516),
+       lg = wD(37394),
+       Wg = wD(1981),
+       Ng = wD(39148),
+       Zg = wD(39055);
```

#### 929. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7471` → after: `L7471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7471) · [Before (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7471)

```diff
-         this.IE = mm, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
+         this.AU = DD, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
```

#### 930. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7481-L7482` → after: `L7481-L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7481-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7481-L7482) · [Before (L7481-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7481-L7482)

```diff
-         }, this.flyAccel = new yi.b, this.flyVertMoveDir = 0, this.toggles = new pw.g((mm => {
-           this.canUsefreeCam = mm, this.enabled && !this.canUsefreeCam && this.Dk(!1), qm.j.gp("freeCameraChanged")
+         }, this.flyAccel = new ig.c, this.flyVertMoveDir = 0, this.toggles = new UL.f((DD => {
+           this.canUsefreeCam = DD, this.enabled && !this.canUsefreeCam && this.nC(!1), GD.l.KG("freeCameraChanged")
```

#### 931. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7484` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7484) · [Before (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7484)

```diff
-         const Tm = qm.j.subscribe("userContextUpdated", (mm => {
+         const zD = GD.l.subscribe("userContextUpdated", (DD => {
```

#### 932. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7488` → after: `L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7488) · [Before (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7488)

```diff
-           qm.j.unsubscribe(Tm), this.Dk(!1);
+           GD.l.unsubscribe(zD), this.nC(!1);
```

#### 933. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7505` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7505) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7505)

```diff
-         this.Dk(!this.enabled)
+         this.nC(!this.enabled)
```

#### 934. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7509` → after: `L7509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7509) · [Before (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7509)

```diff
-         return this.panelMovesFly() || this.enabled && !(null === (mm = this.IE.bloxd.client) || void 0 === mm || !mm.isReplayMode())
+         return this.panelMovesFly() || this.enabled && !(null === (DD = this.AU.bloxd.client) || void 0 === DD || !DD.isReplayMode())
```

#### 935. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7515` → after: `L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7515) · [Before (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7515)

```diff
-         mm ? (this.Dk(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, qm.j.gp("freeCameraChanged"))) : this.movesFlyIt && this.Dk(!1)
+         DD ? (this.nC(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, GD.l.KG("freeCameraChanged"))) : this.movesFlyIt && this.nC(!1)
```

#### 936. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7518` → after: `L7518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7518) · [Before (L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7518)

```diff
-         mm !== this.blocked && (this.blocked = mm, mm && this.Dk(!1), qm.j.gp("freeCameraChanged"))
+         DD !== this.blocked && (this.blocked = DD, DD && this.nC(!1), GD.l.KG("freeCameraChanged"))
```

#### 937. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7529` → after: `L7529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7529) · [Before (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7529)

```diff
-           if (mm === hm) return !(0, li.b)() && (this.inputs[hm] = fm, fm);
+           if (DD === pD) return !(0, Zg.e)() && (this.inputs[pD] = wD, wD);
```

#### 938. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7538` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7538) · [Before (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7538)

```diff
-           if (null !== (fm = ri.r[hm]) && void 0 !== fm && fm.includes(Tm)) return !0
+           if (null !== (wD = Wg.u[pD]) && void 0 !== wD && wD.includes(zD)) return !0
```

#### 939. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7543` → after: `L7543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7543) · [Before (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7543)

```diff
-         (Ci.e.isCameraDetachedFromPlayer(this.IE) || Ci.e.detachCamera(this.IE)) && (this.tickHandler = mm => {
+         (lg.b.isCameraDetachedFromPlayer(this.AU) || lg.b.detachCamera(this.AU)) && (this.tickHandler = DD => {
```

#### 940. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7545` → after: `L7545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7545) · [Before (L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7545)

```diff
-         }, this.IE.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
+         }, this.AU.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
```

#### 941. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7549-L7551` → after: `L7549-L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7549-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7549-L7551) · [Before (L7549-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7549-L7551)

```diff
-         this.tickHandler && (this.IE.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !Ci.e.isCameraDetachedFromPlayer(this.IE) || null !== (mm = this.IE.bloxd.client) && void 0 !== mm && mm.isReplayMode() || Ci.e.reattachCamera(this.IE), this.clearMovementInpu … [truncated]
-         const fm = null !== (Tm = this.IE.bloxd.client) && void 0 !== Tm && Tm.isReplayMode() ? void 0 : this.IE.qI.tTm();
-         for (const hm of ["forward", "backward", "left", "right"]) fm && this.IE.inputs.state[hm] && (fm[hm] = !0);
+         this.tickHandler && (this.AU.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !lg.b.isCameraDetachedFromPlayer(this.AU) || null !== (DD = this.AU.bloxd.client) && void 0 !== DD && DD.isReplayMode() || lg.b.reattachCamera(this.AU), this.clearMovementInpu … [truncated]
+         const wD = null !== (zD = this.AU.bloxd.client) && void 0 !== zD && zD.isReplayMode() ? void 0 : this.AU.yJ.LwD();
+         for (const pD of ["forward", "backward", "left", "right"]) wD && this.AU.inputs.state[pD] && (wD[pD] = !0);
```

#### 942. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7578` → after: `L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7578) · [Before (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7578)

```diff
-         if ((null === (Tm = this.IE.bloxd.client) || void 0 === Tm || !Tm.isReplayMode()) && !this.IE.qI.sTm(this.IE.xH).isAlive) return void this.Dk(!1);
+         if ((null === (zD = this.AU.bloxd.client) || void 0 === zD || !zD.isReplayMode()) && !this.AU.yJ.HzD(this.AU.vW).isAlive) return void this.nC(!1);
```

#### 943. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7581-L7582` → after: `L7581-L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7581-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7581-L7582) · [Before (L7581-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7581-L7582)

```diff
-           Am = hm * this.IE.aG,
-           am = this.IE.camera.heading,
+           sD = pD * this.AU.Rl,
+           KD = this.AU.camera.heading,
```

#### 944. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7599)

```diff
-         const qm = (0, yi.e)(this.flyAccel, om, Om, Ym, Am);
+         const GD = (0, ig.i)(this.flyAccel, fD, ID, BD, sD);
```

#### 945. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7601` → after: `L7601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7601) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7601)

```diff
-         const jm = 12 * (1 + this.flyAccel.JA);
+         const hD = 12 * (1 + this.flyAccel.Vs);
```

#### 946. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7605` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7605) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7605)

```diff
-           const mm = (Em > 1 ? 1 / Em : 1) * jm * hm;
+           const DD = (UD > 1 ? 1 / UD : 1) * hD * pD;
```

#### 947. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7610-L7611` → after: `L7610-L7611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7610-L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7610-L7611) · [Before (L7610-L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7610-L7611)

```diff
-         const Qm = this.IE.qI.rV(this.IE.camera.yB);
-         this.IE.qI.setPosition(this.IE.camera.yB, [Qm[0] + Vm, Qm[1] + Km, Qm[2] + Im])
+         const JD = this.AU.yJ.PJ(this.AU.camera.rY);
+         this.AU.yJ.setPosition(this.AU.camera.rY, [JD[0] + nD, JD[1] + OD, JD[2] + MD])
```

#### 948. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7615` → after: `L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7615) · [Before (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7615)

```diff
-         qm.j.gp("freeCameraChanged"), (0, si.c)(mm), null !== (Tm = this.IE.bloxd.client) && void 0 !== Tm && Tm.isReplayMode() && qm.j.gp("replayViewer|uiRefresh")
+         GD.l.KG("freeCameraChanged"), (0, Ng.e)(DD), null !== (zD = this.AU.bloxd.client) && void 0 !== zD && zD.isReplayMode() && GD.l.KG("replayViewer|uiRefresh")
```

#### 949. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7618-L7624` → after: `L7618-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7618-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7618-L7624) · [Before (L7618-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7618-L7624)

```diff
-     var ui = fm(1877),
-       Bi = fm(39314),
-       Li = fm(39297),
-       vi = fm(39335),
-       ti = fm(37708),
-       Ui = fm(39327),
-       di = fm(39045);
+     var kg = wD(1886),
+       mg = wD(39151),
+       eg = wD(39140),
+       og = wD(39168),
+       ag = wD(37616),
+       ug = wD(39160),
+       vg = wD(38899);
```

#### 950. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7628-L7630` → after: `L7628-L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7628-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7628-L7630) · [Before (L7628-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7628-L7630)

```diff
-       Am.heading = Tm + mm.pp[1] + (hm ? mm.cameraRotationOffset[1] : 0);
-       const am = fm + mm.pp[0] + (hm ? mm.cameraRotationOffset[0] : 0);
-       (0, Li.n)((0, Li.d)(Am.heading, am, gi), Am)
+       sD.heading = zD + DD.pG[1] + (pD ? DD.cameraRotationOffset[1] : 0);
+       const KD = wD + DD.pG[0] + (pD ? DD.cameraRotationOffset[0] : 0);
+       (0, eg.j)((0, eg.e)(sD.heading, KD, tg), sD)
```

#### 951. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7636` → after: `L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7636) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7636)

```diff
-       Vm().set(Fi, Am[0], Am[1], 0), Vm().ta(Fi, Fi, Vm().ZERO, mm.ei + mm.pp[2] + xm[2]), Vm().wa(Fi, Fi, Vm().ZERO, fm + mm.pp[0] + xm[0]), Vm().pa(Fi, Fi, Vm().ZERO, Tm + mm.pp[1] + xm[1]), Vm().add(am, am, Fi)
+       nD().set(Yg, sD[0], sD[1], 0), nD().GL(Yg, Yg, nD().ZERO, DD.nf + DD.pG[2] + rD[2]), nD().pr(Yg, Yg, nD().ZERO, wD + DD.pG[0] + rD[0]), nD().gr(Yg, Yg, nD().ZERO, zD + DD.pG[1] + rD[1]), nD().add(KD, KD, Yg)
```

#### 952. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7642` → after: `L7642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7642) · [Before (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7642)

```diff
-       return Ci.e.copyReattachedTargetPosition(mm, TR) ? mm.camera.EW(TR, Tm, fm, Ci.e.getSavedZoomDistance(mm), hm) : null
+       return lg.b.copyReattachedTargetPosition(DD, qg) ? DD.camera.wq(qg, zD, wD, lg.b.getSavedZoomDistance(DD), pD) : null
```

#### 953. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7646` → after: `L7646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7646) · [Before (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7646)

```diff
-       return (0, Ui.e)(mm) ? (0, Cm.d)(mm) : null
+       return (0, ug.e)(DD) ? (0, ND.b)(DD) : null
```

#### 954. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7650` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7650) · [Before (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7650)

```diff
-         this.IE = mm, this.view = Tm, this.pickEntity = fm, this.defaultPose = (0, Si.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (mm, Tm, fm) => this.pickDistance(mm, Tm, fm, this.IE.Kmm), t … [truncated]
+         this.AU = DD, this.view = zD, this.pickEntity = wD, this.defaultPose = (0, Cg.h)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (DD, zD, wD) => this.pickDistance(DD, zD, wD, this.AU.bDD), t … [truncated]
```

#### 955. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7653-L7654` → after: `L7653-L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7653-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7653-L7654) · [Before (L7653-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7653-L7654)

```diff
-           return null !== (hm = this.pickEntity(mm, Tm, null !== Am && void 0 !== Am ? Am : fm)) && void 0 !== hm ? hm : Am
-         }, this.isUntargeted = mm => !this.IE.Kmm(mm)
+           return null !== (pD = this.pickEntity(DD, zD, null !== sD && void 0 !== sD ? sD : wD)) && void 0 !== pD ? pD : sD
+         }, this.isUntargeted = DD => !this.AU.bDD(DD)
```

#### 956. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7657` → after: `L7657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7657) · [Before (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7657)

```diff
-         return this.IE.Cmm
+         return this.AU.vDD
```

#### 957. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7661` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7661) · [Before (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7661)

```diff
-         return null !== Tm && this.IE.qI.uB(Tm) ? (0, Mw.getDrawnPosition)(this.IE, Tm, this.feet) : null
+         return null !== zD && this.AU.yJ.AY(zD) ? (0, mL.getDrawnPosition)(this.AU, zD, this.feet) : null
```

#### 958. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7666-L7667` → after: `L7666-L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7666-L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7666-L7667) · [Before (L7666-L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7666-L7667)

```diff
-           return mm.qI.uB(Tm) ? ((0, Mw.getDrawnPosition)(mm, Tm, fm), null !== mm.bloxd.getLifeformType(Tm) && (fm[1] += mm.bloxd.getLifeformEyeHeight(Tm)), fm) : null
-         }(this.IE, Tm, this.aim)
+           return DD.yJ.AY(zD) ? ((0, mL.getDrawnPosition)(DD, zD, wD), null !== DD.bloxd.getLifeformType(zD) && (wD[1] += DD.bloxd.getLifeformEyeHeight(zD)), wD) : null
+         }(this.AU, zD, this.aim)
```

#### 959. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7672` → after: `L7672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7672) · [Before (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7672)

```diff
-         return null === am ? null : am === this.IE.xH ? this.view.heading : null !== (Tm = null !== (fm = null === (hm = (0, yw.getCaughtUpMeshRotation)(this.IE, am)) || void 0 === hm ? void 0 : hm.renderRotation[1]) && void 0 !== fm ? fm : null === (Am = this.IE.qI.ITm(am)) || v … [truncated]
+         return null === KD ? null : KD === this.AU.vW ? this.view.heading : null !== (zD = null !== (wD = null === (pD = (0, WL.getCaughtUpMeshRotation)(this.AU, KD)) || void 0 === pD ? void 0 : pD.renderRotation[1]) && void 0 !== wD ? wD : null === (sD = this.AU.yJ.TzD(KD)) || v … [truncated]
```

#### 960. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7676-L7678` → after: `L7676-L7678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7676-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7676-L7678) · [Before (L7676-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7676-L7678)

```diff
-           IE: hm
-         } = this, Am = hm.camera.oW(hm.pTm(mm, null, this.localFrom), Tm, fm);
-         return Am < fm - 1e-6 ? Am : null
+           AU: pD
+         } = this, sD = pD.camera.Aq(pD.JzD(DD, null, this.localFrom), zD, wD);
+         return sD < wD - 1e-6 ? sD : null
```

#### 961. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7691)

```diff
-         const Am = this.IE.Do(mm, Tm, fm, hm);
+         const sD = this.AU.HU(DD, zD, wD, pD);
```

#### 962. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7695` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7695) · [Before (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7695)

```diff
-         return (0, ui.F)(this.IE.qY.cW().fov)
+         return (0, kg.D)(this.AU.wB.Mq().fov)
```

#### 963. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7698` → after: `L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7698) · [Before (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7698)

```diff
-         return (0, ui.F)((0, di.getSettingsFov)())
+         return (0, kg.D)((0, vg.getSettingsFov)())
```

#### 964. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7703-L7704` → after: `L7703-L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7703-L7704) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7703-L7704)

```diff
-         } = this.IE.qY, Tm = mm.getRenderWidth(), fm = mm.getRenderHeight();
-         return Tm > 0 && fm > 0 ? Tm / fm : 1
+         } = this.AU.wB, zD = DD.getRenderWidth(), wD = DD.getRenderHeight();
+         return zD > 0 && wD > 0 ? zD / wD : 1
```

#### 965. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7708` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7708) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7708)

```diff
-           IE: mm
+           AU: DD
```

#### 966. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7712-L7714` → after: `L7712-L7714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7712-L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7712-L7714) · [Before (L7712-L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7712-L7714)

```diff
-         if (fm.fov = this.getDefaultFov(), Ci.e.isCameraDetachedFromPlayer(mm)) return function(mm, Tm) {
-           const fm = Ci.e.getPlayerFacingHeading(mm),
-             hm = Ci.e.getPlayerFacingPitch(mm),
+         if (wD.fov = this.getDefaultFov(), lg.b.isCameraDetachedFromPlayer(DD)) return function(DD, zD) {
+           const wD = lg.b.getPlayerFacingHeading(DD),
+             pD = lg.b.getPlayerFacingPitch(DD),
```

#### 967. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7717` → after: `L7717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7717) · [Before (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7717)

```diff
-           null !== Am && (mm.kU(fR, Tm.position), mR(mm.camera, fm, hm, am, Ci.e.getSavedRigShift(mm), Tm.position)), Wi(mm.camera, fm, hm, am, Tm)
+           null !== sD && (DD.xH(DR, zD.position), Hg(DD.camera, wD, pD, KD, lg.b.getSavedRigShift(DD), zD.position)), Fg(DD.camera, wD, pD, KD, zD)
```

#### 968. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7719-L7720` → after: `L7719-L7720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7719-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7719-L7720) · [Before (L7719-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7719-L7720)

```diff
-         const hm = 0 !== Tm.wL;
-         return Vm().copy(fm.position, Tm.rV()), mR(Tm, Tm.heading, Tm.pitch, hm, mm.qY.cW().zW, fm.position), Wi(Tm, Tm.heading, Tm.pitch, hm, fm), fm
+         const pD = 0 !== zD.hY;
+         return nD().copy(wD.position, zD.PJ()), Hg(zD, zD.heading, zD.pitch, pD, DD.wB.Mq().Jq, wD.position), Fg(zD, zD.heading, zD.pitch, pD, wD), wD
```

#### 969. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7723` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7723) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7723)

```diff
-     var xR = fm(36660);
+     var sR = wD(36568);
```

#### 970. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7726` → after: `L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7726) · [Before (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7726)

```diff
-         this.IE = mm, this.oE = Tm, this.pointer = fm, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
+         this.AU = DD, this.KU = zD, this.pointer = wD, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
```

#### 971. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7740` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7740) · [Before (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7740)

```diff
-         const hm = ER(this.IE, this.eye);
+         const pD = RR(this.AU, this.eye);
```

#### 972. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7744` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7744) · [Before (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7744)

```diff
-             wm = null === xm || xm <= ei ? am : xm;
+             LD = null === rD || rD <= xg ? KD : rD;
```

#### 973. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7746` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7746) · [Before (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7746)

```diff
-         }(hm, fm, this.copyRay(), this.oE.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(hm), !0
+         }(pD, wD, this.copyRay(), this.KU.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(pD), !0
```

#### 974. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7750` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7750) · [Before (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7750)

```diff
-           IE: fm
+           AU: wD
```

#### 975. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7764` → after: `L7764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7764) · [Before (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7764)

```diff
-           if (null === xm || xm <= ei) return (0, Si.j)(fm, Am);
+           if (null === rD || rD <= xg) return (0, Cg.g)(wD, sD);
```

#### 976. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7767` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7767) · [Before (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7767)

```diff
-           if (wm < Gi) return (0, Si.j)(fm, Am);
+           if (LD < bg) return (0, Cg.g)(wD, sD);
```

#### 977. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7769` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7769) · [Before (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7769)

```diff
-         }(Am, mm, hm, this.oE.pickCursorTarget, this.cursorAim), (0, Si.j)(Am, am.eye), (0, Si.j)(mm, am.camera), (0, Si.j)(hm, am.ray), this.msSincePick = 0), pR(fm, this.cursorAim, Ci.e.getPlayerFacingHeading(fm), Ci.e.getPlayerFacingPitch(fm))
+         }(sD, DD, pD, this.KU.pickCursorTarget, this.cursorAim), (0, Cg.g)(sD, KD.eye), (0, Cg.g)(DD, KD.camera), (0, Cg.g)(pD, KD.ray), this.msSincePick = 0), gR(wD, this.cursorAim, lg.b.getPlayerFacingHeading(wD), lg.b.getPlayerFacingPitch(wD))
```

#### 978. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7773)

```diff
-           IE: Tm
+           AU: zD
```

#### 979. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7781` → after: `L7781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7781) · [Before (L7781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7781)

```diff
-         })(mm, this.tapPoint, this.tapAim) && pR(Tm, this.tapAim, Ci.e.getPlayerFacingHeading(Tm), Ci.e.getPlayerFacingPitch(Tm))
+         })(DD, this.tapPoint, this.tapAim) && gR(zD, this.tapAim, lg.b.getPlayerFacingHeading(zD), lg.b.getPlayerFacingPitch(zD))
```

#### 980. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7785` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7785) · [Before (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7785)

```diff
-           IE: mm
+           AU: DD
```

#### 981. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7806` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7806) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7806)

```diff
-         }(Tm.heading + Tm.pp[1], Tm.pitch + Tm.pp[0], Tm.ei + Tm.pp[2], mm.qY.cW().fov, this.oE.getAspectRatio(), fm, hm, this.ray)
+         }(zD.heading + zD.pG[1], zD.pitch + zD.pG[0], zD.nf + zD.pG[2], DD.wB.Mq().fov, this.KU.getAspectRatio(), wD, pD, this.ray)
```

#### 982. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7820` → after: `L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7820) · [Before (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7820)

```diff
-       RR.heading = fm, RR.pitch = hm, (0, Li.n)(Tm, RR), Ci.e.setPlayerFacing(mm, RR.heading, RR.pitch)
+       cR.heading = wD, cR.pitch = pD, (0, eg.j)(zD, cR), lg.b.setPlayerFacing(DD, cR.heading, cR.pitch)
```

#### 983. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7824` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7824) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7824)

```diff
-       return Vm().copy(Tm, mm.bloxd.getLifeformEyePos(mm.xH, !1))
+       return nD().copy(zD, DD.bloxd.getLifeformEyePos(DD.vW, !1))
```

#### 984. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7826` → after: `L7826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7826) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7826)

```diff
-     var oR = fm(39340);
+     var AR = wD(39177);
```

#### 985. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7839-L7840` → after: `L7839-L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7839-L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7839-L7840) · [Before (L7839-L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7839-L7840)

```diff
-         if (hm) return this.pointedAt.heading = mm, this.pointedAt.pitch = Tm, this.heading = (0, vi.c)(this.heading, 0, 0, this.pointedAt, fm, Am), Am;
-         if (!this.hasWritten) return Am.XN = 0, Am.yN = 0, Am.pointedAt = void 0, Am;
+         if (pD) return this.pointedAt.heading = DD, this.pointedAt.pitch = zD, this.heading = (0, og.e)(this.heading, 0, 0, this.pointedAt, wD, sD), sD;
+         if (!this.hasWritten) return sD.aT = 0, sD.qT = 0, sD.pointedAt = void 0, sD;
```

#### 986. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7842` → after: `L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7842) · [Before (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7842)

```diff
-         return this.heading = (0, vi.c)(this.heading, am, Tm - this.writtenPitch, void 0, fm, Am), Am
+         return this.heading = (0, og.e)(this.heading, KD, zD - this.writtenPitch, void 0, wD, sD), sD
```

#### 987. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7865` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7865) · [Before (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7865)

```diff
-         Rm = null !== im && im > ei ? im : Math.max(ei, Dm);
+         RD = null !== gD && gD > xg ? gD : Math.max(xg, cD);
```

#### 988. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7875` → after: `L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7875) · [Before (L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7875)

```diff
-       return (0, Li.t)(mm + Am)
+       return (0, eg.s)(DD + sD)
```

#### 989. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7879-L7883` → after: `L7879-L7883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7879-L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7879-L7883) · [Before (L7879-L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7879-L7883)

```diff
-         this.IE = mm, this.cameraController = Tm, this.freeCameraController = fm, this.cursor = hm, this.oE = void 0, this.director = void 0, this.view = new YR, this.look = {
-           XN: 0,
-           yN: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.rmm = [0, 0, 0], this.smm = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
-         const xm = mD.b.subscribe("gameCamera", (mm => {
+         this.AU = DD, this.cameraController = zD, this.freeCameraController = wD, this.cursor = pD, this.KU = void 0, this.director = void 0, this.view = new fR, this.look = {
+           aT: 0,
+           qT: 0
+         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.tDD = [0, 0, 0], this.FDD = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
+         const rD = Dc.e.subscribe("gameCamera", (DD => {
```

#### 990. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7899` → after: `L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7899) · [Before (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7899)

```diff
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && mm.oE.WTm([])
+           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && DD.KU.UwD([])
```

#### 991. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7901-L7902` → after: `L7901-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7901-L7902) · [Before (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7901-L7902)

```diff
-         mm.on("DE", Rm), hm.listenForTaps(((Tm, fm) => {
-           this.aimAtClientPoint(Tm, fm), mm.cmm()
+         DD.on("DU", RD), pD.listenForTaps(((zD, wD) => {
+           this.aimAtClientPoint(zD, wD), DD.iDD()
```

#### 992. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7904` → after: `L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7904) · [Before (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7904)

```diff
-         const pm = qm.j.subscribe("localPlayerTeleported", (mm => {
+         const AD = GD.l.subscribe("localPlayerTeleported", (DD => {
```

#### 993. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7911` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7911) · [Before (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7911)

```diff
-           xm(), hm.listenForTaps(null), qm.j.unsubscribe(pm), mm.off("beforeRender", wm), mm.off("afterRender", Dm), mm.off("beforePhysicsTick", im), mm.off("DE", Rm), this.release({
+           rD(), pD.listenForTaps(null), GD.l.unsubscribe(AD), DD.off("beforeRender", LD), DD.off("afterRender", cD), DD.off("beforePhysicsTick", gD), DD.off("DU", RD), this.release({
```

#### 994. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7913` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7913) · [Before (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7913)

```diff
-           }), this.screen.clear(), mm.oE.WTm([])
+           }), this.screen.clear(), DD.KU.UwD([])
```

#### 995. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7923` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7923) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7923)

```diff
-         const Tm = (0, vi.g)(mm);
+         const zD = (0, og.f)(DD);
```

#### 996. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7937)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (Tm = this.IE.bloxd.client) && void 0 !== Tm && Tm.isReplayMode()) return this.IE.oE.WTm([]), this.yieldToReplay(), void this.screen.clear();
+         if (this.lastFrameMs = performance.now(), null !== (zD = this.AU.bloxd.client) && void 0 !== zD && zD.isReplayMode()) return this.AU.KU.UwD([]), this.yieldToReplay(), void this.screen.clear();
```

#### 997. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7940-L7943` → after: `L7940-L7943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7940-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7940-L7943) · [Before (L7940-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7940-L7943)

```diff
-         } = this.IE;
-         this.detached || this.view.followBody(Ci.e.getPlayerFacingHeading(this.IE));
-         const hm = Ci.e.takeLookPointed(this.IE);
-         null !== fm.gL || null !== fm.dL || null === this.mouseTurns && !hm ? (this.look.XN = 0, this.look.yN = 0, this.look.pointedAt = void 0) : this.view.readLook(fm.heading, fm.pitch, "look" === this.mouseTurns, hm, this.look);
+         } = this.AU;
+         this.detached || this.view.followBody(lg.b.getPlayerFacingHeading(this.AU));
+         const pD = lg.b.takeLookPointed(this.AU);
+         null !== wD.mY || null !== wD.kY || null === this.mouseTurns && !pD ? (this.look.aT = 0, this.look.qT = 0, this.look.pointedAt = void 0) : this.view.readLook(wD.heading, wD.pitch, "look" === this.mouseTurns, pD, this.look);
```

#### 998. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7945` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7945)

```diff
-         if (this.IE.oE.WTm(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !Am) return void this.release();
+         if (this.AU.KU.UwD(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !sD) return void this.release();
```

#### 999. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7948)

```diff
-         "movement" !== this.facing || am || this.turnBodyTowardsMovement(mm), this.cursorAim.DE(mm), this.applyPose(Am)
+         "movement" !== this.facing || KD || this.turnBodyTowardsMovement(DD), this.cursorAim.DU(DD), this.applyPose(sD)
```

#### 1000. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7954` → after: `L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7954) · [Before (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7954)

```diff
-         return !Ci.e.isCameraDetachedFromPlayer(this.IE) && (this.setControlsLocked(!0), Ci.e.detachCamera(this.IE, {
+         return !lg.b.isCameraDetachedFromPlayer(this.AU) && (this.setControlsLocked(!0), lg.b.detachCamera(this.AU, {
```

#### 1001. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7956` → after: `L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7956) · [Before (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7956)

```diff
-         }) ? (this.detached = !0, this.IE.Fq = this.IE.bloxd.getBlockReach(this.IE.xH), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
+         }) ? (this.detached = !0, this.AU.aG = this.AU.bloxd.getBlockReach(this.AU.vW), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
```

#### 1002. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7962` → after: `L7962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7962) · [Before (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7962)

```diff
-           IE: fm
+           AU: wD
```

#### 1003. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7965-L7966` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7965-L7966) · [Before (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7965-L7966)

```diff
-         } = fm, Am = Ci.e.getPlayerFacingHeading(fm), am = Ci.e.getPlayerFacingPitch(fm), xm = null !== (Tm = hR(fm, Am, am, this.reattachedPosition)) && void 0 !== Tm ? Tm : Ci.e.getSavedZoomDistance(fm);
-         this.giveUpView(), Ci.e.reattachCamera(fm), hm.wL = xm, hm.heading = Am, hm.pitch = am, hm.pW(), (0, wD.t)(fm), this.setControlsLocked(!1, mm)
+         } = wD, sD = lg.b.getPlayerFacingHeading(wD), KD = lg.b.getPlayerFacingPitch(wD), rD = null !== (zD = zR(wD, sD, KD, this.reattachedPosition)) && void 0 !== zD ? zD : lg.b.getSavedZoomDistance(wD);
+         this.giveUpView(), lg.b.reattachCamera(wD), pD.hY = rD, pD.heading = sD, pD.pitch = KD, pD.zq(), (0, Lc.u)(wD), this.setControlsLocked(!1, DD)
```

#### 1004. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7969` → after: `L7969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7969) · [Before (L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7969)

```diff
-         this.detached && (this.giveUpView(), Ci.e.setFacingMode(this.IE, "frozen"), this.setControlsLocked(!1, {
+         this.detached && (this.giveUpView(), lg.b.setFacingMode(this.AU, "frozen"), this.setControlsLocked(!1, {
```

#### 1005. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7974` → after: `L7974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7974) · [Before (L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7974)

```diff
-         this.detached = !1, this.IE.rmm = null, this.IE.smm = null, this.publishView()
+         this.detached = !1, this.AU.tDD = null, this.AU.FDD = null, this.publishView()
```

#### 1006. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7978` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7978) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7978)

```diff
-         this.cursor.setActive("cursor" === mm), "cursor" !== mm && this.cursorAim.forgetTap(), Xx.c.get("scriptedCameraFacing") !== mm && Xx.c.set({
+         this.cursor.setActive("cursor" === DD), "cursor" !== DD && this.cursorAim.forgetTap(), ir.e.get("scriptedCameraFacing") !== DD && ir.e.set({
```

#### 1007. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7985-L7988` → after: `L7985-L7988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7985-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7985-L7988) · [Before (L7985-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7985-L7988)

```diff
-           IE: fm
-         } = this, hm = fm.qI.ITm(fm.xH);
-         let Am = Ci.e.getPlayerFacingHeading(fm);
-         const am = null !== (Tm = hm.ridingVehicleEId) && void 0 !== Tm ? Tm : null;
+           AU: wD
+         } = this, pD = wD.yJ.TzD(wD.vW);
+         let sD = lg.b.getPlayerFacingHeading(wD);
+         const KD = null !== (zD = pD.ridingVehicleEId) && void 0 !== zD ? zD : null;
```

#### 1008. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7990-L7991` → after: `L7990-L7991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7990-L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7990-L7991) · [Before (L7990-L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7990-L7991)

```diff
-             if (!(0, ti.c)(mm, Tm)) return !0;
-             const fm = mm.bloxd.getResolvedPhysicsSettings(mm.xH, mm.qI.mTm(mm.xH).physicsState);
+             if (!(0, ag.d)(DD, zD)) return !0;
+             const wD = DD.bloxd.getResolvedPhysicsSettings(DD.vW, DD.yJ.gzD(DD.vW).physicsState);
```

#### 1009. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7999` → after: `L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L7999) · [Before (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L7999)

```diff
-         Ci.e.setPlayerFacing(fm, Am, (wm = Ci.e.getPlayerFacingPitch(fm), Dm = mm, wm * Math.max(0, 1 - Dm / 1e3 * 8)))
+         lg.b.setPlayerFacing(wD, sD, (LD = lg.b.getPlayerFacingPitch(wD), cD = DD, LD * Math.max(0, 1 - cD / 1e3 * 8)))
```

#### 1010. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8003` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8003) · [Before (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8003)

```diff
-           IE: Tm
+           AU: zD
```

#### 1011. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8007)

```diff
-         Tm.qI.setPosition(fm.yB, mm.position), fm.heading = (0, Li.t)(mm.heading), fm.pitch = (0, Li.g)(mm.pitch), fm.pW(), (0, wD.t)(Tm), Tm.qY.cW().fov = (0, ui.j)(mm.fov), this.view.noteWritten(fm.heading, fm.pitch), (0, Si.j)(mm.position, this.cameraPosition), "camera" === th … [truncated]
+         zD.yJ.setPosition(wD.rY, DD.position), wD.heading = (0, eg.s)(DD.heading), wD.pitch = (0, eg.f)(DD.pitch), wD.zq(), (0, Lc.u)(zD), zD.wB.Mq().fov = (0, kg.l)(DD.fov), this.view.noteWritten(wD.heading, wD.pitch), (0, Cg.g)(DD.position, this.cameraPosition), "camera" === th … [truncated]
```

#### 1012. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8011` → after: `L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8011) · [Before (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8011)

```diff
-           IE: Tm
+           AU: zD
```

#### 1013. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8015` → after: `L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8015) · [Before (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8015)

```diff
-         jR(ER(Tm, this.eye), mm, (0, Li.d)(fm.heading, fm.pitch, this.rayDirection), Tm.Fq, this.oE.pickTargetedBlock, this.aim), pR(Tm, this.aim, fm.heading, fm.pitch)
+         BR(RR(zD, this.eye), DD, (0, eg.e)(wD.heading, wD.pitch, this.rayDirection), zD.aG, this.KU.pickTargetedBlock, this.aim), gR(zD, this.aim, wD.heading, wD.pitch)
```

#### 1014. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8019` → after: `L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8019) · [Before (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8019)

```diff
-           IE: mm
+           AU: DD
```

#### 1015. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8021` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8021) · [Before (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8021)

```diff
-         mm.rmm = mm.pTm(ER(mm, this.eye), null, this.rmm), mm.smm = Ci.e.copyPlayerFacingDirection(mm, this.smm)
+         DD.tDD = DD.JzD(RR(DD, this.eye), null, this.tDD), DD.FDD = lg.b.copyPlayerFacingDirection(DD, this.FDD)
```

#### 1016. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8024` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8024) · [Before (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8024)

```diff
-     var KR = fm(34122);
+     var nR = wD(34051);
```

#### 1017. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8031` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8031) · [Before (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8031)

```diff
-       return null !== (fm = null !== (hm = mm.inclination) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.inclination) && void 0 !== fm ? fm : -.2
+       return null !== (wD = null !== (pD = DD.inclination) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.inclination) && void 0 !== wD ? wD : -.2
```

#### 1018. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8037` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8037) · [Before (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8037)

```diff
-         return null !== (fm = null !== (hm = mm.useSunPosition) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.useSunPosition) && void 0 !== fm ? fm : nR
+         return null !== (wD = null !== (pD = DD.useSunPosition) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.useSunPosition) && void 0 !== wD ? wD : OR
```

#### 1019. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8042-L8043` → after: `L8042-L8043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8042-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8042-L8043) · [Before (L8042-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8042-L8043)

```diff
-           return null !== (fm = null !== (hm = mm.sunPosition) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.sunPosition) && void 0 !== fm ? fm : JR
-         }(mm, Tm), xm = new gm.WO(hm, Am, am);
+           return null !== (wD = null !== (pD = DD.sunPosition) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.sunPosition) && void 0 !== wD ? wD : JR
+         }(DD, zD), rD = new FD.WI(pD, sD, KD);
```

#### 1020. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8056` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8056) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8056)

```diff
-       const Am = null !== fm && void 0 !== fm ? fm : cR(mm, Tm),
+       const sD = null !== wD && void 0 !== wD ? wD : ER(DD, zD),
```

#### 1021. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8059` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8059) · [Before (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8059)

```diff
-           return null !== (fm = null !== (hm = mm.azimuth) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.azimuth) && void 0 !== fm ? fm : .55
+           return null !== (wD = null !== (pD = DD.azimuth) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.azimuth) && void 0 !== wD ? wD : .55
```

#### 1022. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8063` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8063) · [Before (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8063)

```diff
-           return null !== (fm = null !== (hm = mm.up) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.up) && void 0 !== fm ? fm : QR
+           return null !== (wD = null !== (pD = DD.up) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.up) && void 0 !== wD ? wD : MR
```

#### 1023. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8067-L8068` → after: `L8067-L8068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8067-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8067-L8068) · [Before (L8067-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8067-L8068)

```diff
-         im = new gm.WO(Math.cos(Dm) * Math.cos(wm), Math.sin(-wm), Math.sin(Dm) * Math.cos(wm)),
-         Rm = new gm.WO(xm[0], xm[1], xm[2]),
+         gD = new FD.WI(Math.cos(cD) * Math.cos(LD), Math.sin(-LD), Math.sin(cD) * Math.cos(LD)),
+         RD = new FD.WI(rD[0], rD[1], rD[2]),
```

#### 1024. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8070-L8071` → after: `L8070-L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8070-L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8070-L8071) · [Before (L8070-L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8070-L8071)

```diff
-       gm.Quaternion.FromUnitVectorsToRef(gm.WO.UpReadOnly, Rm, pm);
-       const Em = new gm.WO;
+       FD.Quaternion.FromUnitVectorsToRef(FD.WI.UpReadOnly, RD, AD);
+       const UD = new FD.WI;
```

#### 1025. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8097-L8100` → after: `L8097-L8100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8097-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8097-L8100) · [Before (L8097-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8097-L8100)

```diff
-         this.IE = mm, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const Tm = this.IE.xI.skyBox;
-         "object" === typeof Tm && "earth" === Tm.type && (this.earthSkyBox = Tm), this.sunOpacity = this.IE.xI.dayNightSunOpacity, this.moonOpacity = this.IE.xI.dayNightMoonOpacity;
-         const fm = mD.b.subscribe("dayNightSunOpacity", (mm => {
+         this.AU = DD, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
+         const zD = this.AU.NJ.skyBox;
+         "object" === typeof zD && "earth" === zD.type && (this.earthSkyBox = zD), this.sunOpacity = this.AU.NJ.dayNightSunOpacity, this.moonOpacity = this.AU.NJ.dayNightMoonOpacity;
+         const wD = Dc.e.subscribe("dayNightSunOpacity", (DD => {
```

#### 1026. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8103` → after: `L8103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8103) · [Before (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8103)

```diff
-           hm = mD.b.subscribe("dayNightMoonOpacity", (mm => {
+           pD = Dc.e.subscribe("dayNightMoonOpacity", (DD => {
```

#### 1027. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8106` → after: `L8106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8106) · [Before (L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8106)

```diff
-           Am = mD.b.subscribe("dayNightStarOpacity", (mm => {
+           sD = Dc.e.subscribe("dayNightStarOpacity", (DD => {
```

#### 1028. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8109` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8109) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8109)

```diff
-           am = mD.b.subscribe("skyBox", (mm => {
+           KD = Dc.e.subscribe("skyBox", (DD => {
```

#### 1029. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8114` → after: `L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8114) · [Before (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8114)

```diff
-         })), this.syncSunAndMoon(), this.setStarOpacity(this.IE.xI.dayNightStarOpacity)
+         })), this.syncSunAndMoon(), this.setStarOpacity(this.AU.NJ.dayNightStarOpacity)
```

#### 1030. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8116` → after: `L8116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8116) · [Before (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8116)

```diff
-       dTm() {
+       gwD() {
```

#### 1031. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8126` → after: `L8126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8126) · [Before (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8126)

```diff
-         "object" === typeof mm && "earth" === mm.type ? this.earthSkyBox = mm : this.earthSkyBox = null, this.syncSunAndMoon()
+         "object" === typeof DD && "earth" === DD.type ? this.earthSkyBox = DD : this.earthSkyBox = null, this.syncSunAndMoon()
```

#### 1032. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8141-L8142` → after: `L8141-L8142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8141-L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8141-L8142) · [Before (L8141-L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8141-L8142)

```diff
-         null === mm && (null === (fm = this.sunMesh) || void 0 === fm || fm.Dk(!1));
-         null === Tm && (null === (hm = this.moonMesh) || void 0 === hm || hm.Dk(!1));
+         null === DD && (null === (wD = this.sunMesh) || void 0 === wD || wD.nC(!1));
+         null === zD && (null === (pD = this.moonMesh) || void 0 === pD || pD.nC(!1));
```

#### 1033. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8145` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8145) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8145)

```diff
-         }), this.sunMesh.Dk(!0)), null !== Tm && ((0, Bm.e)(this.moonMat, {
+         }), this.sunMesh.nC(!0)), null !== zD && ((0, oD.e)(this.moonMat, {
```

#### 1034. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8147` → after: `L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8147) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8147)

```diff
-         }), this.moonMesh.Dk(!0)))
+         }), this.moonMesh.nC(!0)))
```

#### 1035. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8153` → after: `L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8153) · [Before (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8153)

```diff
-         }), this.starsMesh.Dk(!0)) : null === (Tm = this.starsMesh) || void 0 === Tm || Tm.Dk(!1)
+         }), this.starsMesh.nC(!0)) : null === (zD = this.starsMesh) || void 0 === zD || zD.nC(!1)
```

#### 1036. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8158-L8160` → after: `L8158-L8160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8158-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8158-L8160) · [Before (L8158-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8158-L8160)

```diff
-           qY: mm
-         } = this.IE, {
-           Aq: Tm
+           wB: DD
+         } = this.AU, {
+           oB: zD
```

#### 1037. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8162-L8163` → after: `L8162-L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8162-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8162-L8163) · [Before (L8162-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8162-L8163)

```diff
-         this.starsMesh = (0, Im.l)(mm, "dayNightStars", (0, Qm.k)());
-         const fm = KR.i.map((mm => KR.m + mm)),
+         this.starsMesh = (0, MD.q)(DD, "dayNightStars", (0, JD.n)());
+         const wD = nR.e.map((DD => nR.f + DD)),
```

#### 1038. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8165` → after: `L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8165) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8165)

```diff
-             rootUrl: KR.m,
+             rootUrl: nR.f,
```

#### 1039. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8169` → after: `L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8169) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8169)

```diff
-             samplingMode: Km.e.nearest
+             samplingMode: OD.i.nearest
```

#### 1040. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8171)

```diff
-           Am = (0, Km.o)(Tm, hm),
+           sD = (0, OD.t)(zD, pD),
```

#### 1041. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8175-L8176` → after: `L8175-L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8175-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8175-L8176) · [Before (L8175-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8175-L8176)

```diff
-             alphaMode: Zm.e.add,
-             transparencyMode: Zm.s.alphaBlend
+             alphaMode: PD.c.add,
+             transparencyMode: PD.o.alphaBlend
```

#### 1042. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8178` → after: `L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8178) · [Before (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8178)

```diff
-         this.starsMat = (0, Bm.b)({
+         this.starsMat = (0, oD.c)({
```

#### 1043. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8180` → after: `L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8180) · [Before (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8180)

```diff
-           Aq: Tm,
+           oB: zD,
```

#### 1044. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8183-L8184` → after: `L8183-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8183-L8184) · [Before (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8183-L8184)

```diff
-         const xm = cm.b.BILLBOARDMODE_ALL | cm.b.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, Im.l)(mm, "dayNightSun", (0, Qm.h)({
+         const rD = XD.e.BILLBOARDMODE_ALL | XD.e.BILLBOARDMODE_USE_POSITION;
+         this.sunMesh = (0, MD.q)(DD, "dayNightSun", (0, JD.k)({
```

#### 1045. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8187` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8187) · [Before (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8187)

```diff
-         })), this.sunMat = SR(Tm, "dayNightSun", KR.p), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = xm, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, Im.l)(mm, "dayNightMoon", (0, Qm.h)({
+         })), this.sunMat = CR(zD, "dayNightSun", nR.j), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = rD, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, MD.q)(DD, "dayNightMoon", (0, JD.k)({
```

#### 1046. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8190` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8190) · [Before (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8190)

```diff
-         })), this.moonMat = SR(Tm, "dayNightMoon", KR.e), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = xm, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.Dk(!1), this.sunMesh.Dk(!1), this.moonMesh.Dk(!1)
+         })), this.moonMat = CR(zD, "dayNightMoon", nR.b), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = rD, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.nC(!1), this.sunMesh.nC(!1), this.moonMesh.nC(!1)
```

#### 1047. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8193` → after: `L8193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8193) · [Before (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8193)

```diff
-         mm.infiniteDistance = !0, mm.renderingGroupId = -1, mm.xq = !1, mm.gO = !0, mm.mY = !0, mm.applyFog = !1, this.IE.qY.Dq(mm, !1, this.IE.HE, !1)
+         DD.infiniteDistance = !0, DD.renderingGroupId = -1, DD.uB = !1, DD.lI = !0, DD.ZI = !0, DD.applyFog = !1, this.AU.wB.tB(DD, !1, this.AU.CU, !1)
```

#### 1048. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8199-L8200` → after: `L8199-L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8199-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8199-L8200) · [Before (L8199-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8199-L8200)

```diff
-           qY: mm
-         } = this.IE, Tm = .8 * mm.cW().far, fm = function() {
+           wB: DD
+         } = this.AU, zD = .8 * DD.Mq().far, wD = function() {
```

#### 1049. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8202` → after: `L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8202) · [Before (L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8202)

```diff
-           return "earth" === (null === mm || void 0 === mm ? void 0 : mm.type) ? mm : void 0
+           return "earth" === (null === DD || void 0 === DD ? void 0 : DD.type) ? DD : void 0
```

#### 1050. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8204` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8204) · [Before (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8204)

```diff
-         (0, Sm.q)(this.sunMesh, hm.x * Tm, hm.y * Tm, hm.z * Tm);
+         (0, TD.r)(this.sunMesh, pD.x * zD, pD.y * zD, pD.z * zD);
```

#### 1051. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8207` → after: `L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8207) · [Before (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8207)

```diff
-         (0, Sm.q)(this.moonMesh, am.x * Tm, am.y * Tm, am.z * Tm)
+         (0, TD.r)(this.moonMesh, KD.x * zD, KD.y * zD, KD.z * zD)
```

#### 1052. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8212-L8213` → after: `L8212-L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8212-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8212-L8213) · [Before (L8212-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8212-L8213)

```diff
-           qY: mm
-         } = this.IE, {
+           wB: DD
+         } = this.AU, {
```

#### 1053. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8215-L8216` → after: `L8215-L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8215-L8216) · [Before (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8215-L8216)

```diff
-         } = mm.cW(), fm = .95 * Tm;
-         this.starsMesh.fi.set(fm, fm, fm);
+         } = DD.Mq(), wD = .95 * zD;
+         this.starsMesh.rc.set(wD, wD, wD);
```

#### 1054. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8219` → after: `L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8219) · [Before (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8219)

```diff
-         this.sunMesh.fi.set(Am, Am, Am);
+         this.sunMesh.rc.set(sD, sD, sD);
```

#### 1055. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8221` → after: `L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8221) · [Before (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8221)

```diff
-         this.moonMesh.fi.set(am, am, am)
+         this.moonMesh.rc.set(KD, KD, KD)
```

#### 1056. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8234` → after: `L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8234) · [Before (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8234)

```diff
-         samplingMode: Km.e.nearest,
+         samplingMode: OD.i.nearest,
```

#### 1057. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8239` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8239) · [Before (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8239)

```diff
-       return (0, Bm.b)({
+       return (0, oD.c)({
```

#### 1058. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8241` → after: `L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8241) · [Before (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8241)

```diff
-         Aq: mm,
+         oB: DD,
```

#### 1059. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8250-L8260` → after: `L8250-L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8250-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8250-L8260) · [Before (L8250-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8250-L8260)

```diff
-     var eR = fm(4171),
-       NR = fm(37970),
-       GR = fm(37364),
-       XR = fm(37680),
-       PR = fm(37488),
-       HR = fm(800),
-       yR = fm(2780),
-       CR = fm(4228),
-       rR = fm(118),
-       sR = fm(330),
-       lR = fm(39342);
+     var xR = wD(4257),
+       TR = wD(37891),
+       bR = wD(37306),
+       jR = wD(37594),
+       dR = wD(37422),
+       SR = wD(760),
+       iR = wD(2779),
+       lR = wD(4313),
+       WR = wD(119),
+       NR = wD(323),
+       ZR = wD(39186);
```

#### 1060. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8264` → after: `L8264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8264) · [Before (L8264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8264)

```diff
-       return (0, sR.h)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
+       return (0, NR.i)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
```

#### 1061. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8268` → after: `L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8268) · [Before (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8268)

```diff
-       return `${mm.getMode()}|${mm.FY()}`
+       return `${DD.getMode()}|${DD.ZB()}`
```

#### 1062. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8272)

```diff
-       console.error(`Shader pack failed to compile for "${mm.failure.material}":`, mm.failure.message)
+       console.error(`Shader pack failed to compile for "${DD.failure.material}":`, DD.failure.message)
```

#### 1063. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8276` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8276) · [Before (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8276)

```diff
-         this.page = mm, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, qm.j.subscribe(MR, (mm => {
+         this.page = DD, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, GD.l.subscribe(yR, (DD => {
```

#### 1064. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8282)

```diff
-           Tm === this.game && this.inGame && qm.j.gp("chat", (0, CR.j)(fm, hm))
+           zD === this.game && this.inGame && GD.l.KG("chat", (0, lR.k)(wD, pD))
```

#### 1065. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8290` → after: `L8290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8290) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8290)

```diff
-         if ((0, Fx.o)("webgpuloss")) {
+         if ((0, DL.t)("webgpuloss")) {
```

#### 1066. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8292` → after: `L8292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8292) · [Before (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8292)

```diff
-             status: "Af"
+             status: "sw"
```

#### 1067. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8297-L8299` → after: `L8297-L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8297-L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8297-L8299) · [Before (L8297-L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8297-L8299)

```diff
-           status: "Af"
-         } : (qm.j.gp("matchmakeAndPlayStepCompleted", {
-           step: KT.k.SHADER_PACK,
+           status: "sw"
+         } : (GD.l.KG("matchmakeAndPlayStepCompleted", {
+           step: Mz.n.SHADER_PACK,
```

#### 1068. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8326-L8327` → after: `L8326-L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8326-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8326-L8327) · [Before (L8326-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8326-L8327)

```diff
-           const Dm = null !== (xm = null !== am && void 0 !== am ? am : null === Am || void 0 === Am ? void 0 : Am.message) && void 0 !== xm ? xm : Am,
-             im = () => wm.packVariant === mm.defineFor(wm.program) && ("model" === wm.program || wm.lighting === mm.FY());
+           const cD = null !== (rD = null !== KD && void 0 !== KD ? KD : null === sD || void 0 === sD ? void 0 : sD.message) && void 0 !== rD ? rD : sD,
+             gD = () => LD.packVariant === DD.defineFor(LD.program) && ("model" === LD.program || LD.lighting === DD.ZB());
```

#### 1069. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8329` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8329) · [Before (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8329)

```diff
-             fm || (this.failedModelCode.add(wm.packVariant), this.inGame && im() && (console.error(`Shader pack program ${hm} failed in game, so its models are drawn without the pack:`, Dm), this.notifyModelFallback()))
+             wD || (this.failedModelCode.add(LD.packVariant), this.inGame && gD() && (console.error(`Shader pack program ${pD} failed in game, so its models are drawn without the pack:`, cD), this.notifyModelFallback()))
```

#### 1070. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8335` → after: `L8335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8335) · [Before (L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8335)

```diff
-               console.error(`Shader pack program ${hm} failed in game:`, Dm)
+               console.error(`Shader pack program ${pD} failed in game:`, cD)
```

#### 1071. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8361` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8361) · [Before (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8361)

```diff
-         const am = null !== (hm = (0, lR.harnessShaderPackMode)()) && void 0 !== hm ? hm : (0, HR.k)(Tm);
+         const KD = null !== (pD = (0, ZR.harnessShaderPackMode)()) && void 0 !== pD ? pD : (0, SR.i)(zD);
```

#### 1072. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8363` → after: `L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8363) · [Before (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8363)

```diff
-           if ((0, va.l)(Am.variants, am)) {
+           if ((0, vK.f)(sD.variants, KD)) {
```

#### 1073. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8375` → after: `L8375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8375) · [Before (L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8375)

```diff
-           if (!(0, va.l)(Am.pack.variants, am)) return {
+           if (!(0, vK.f)(sD.pack.variants, KD)) return {
```

#### 1074. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8384-L8386` → after: `L8384-L8386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8384-L8386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8384-L8386) · [Before (L8384-L8386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8384-L8386)

```diff
-               if ("default" === (null === Tm || void 0 === Tm ? void 0 : Tm.source)) return (0, sR.h)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
-               return !0 === (null === Tm || void 0 === Tm || null === (mm = Tm.fallbackReason) || void 0 === mm ? void 0 : mm.endsWith(rR.c)) ? "shaderPack:failedNoWebGpu" : null
-             }()) && void 0 !== xm ? xm : function() {
+               if ("default" === (null === zD || void 0 === zD ? void 0 : zD.source)) return (0, NR.i)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
+               return !0 === (null === zD || void 0 === zD || null === (DD = zD.fallbackReason) || void 0 === DD ? void 0 : DD.endsWith(WR.d)) ? "shaderPack:failedNoWebGpu" : null
+             }()) && void 0 !== rD ? rD : function() {
```

#### 1075. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8401-L8402` → after: `L8401-L8402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8401-L8402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8401-L8402) · [Before (L8401-L8402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8401-L8402)

```diff
-         return "Af" === Dm.status ? {
-           status: "Af"
+         return "sw" === cD.status ? {
+           status: "sw"
```

#### 1076. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8434` → after: `L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8434) · [Before (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8434)

```diff
-               message: `The check failed: ${hm instanceof Error?hm.message:String(hm)}`
+               message: `The check failed: ${pD instanceof Error?pD.message:String(pD)}`
```

#### 1077. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8451` → after: `L8451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8451) · [Before (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8451)

```diff
-         this.lastPassedCheck = null, this.endGame(), qm.j.gp(CR.h, "shaderPack:failedToCompile")
+         this.lastPassedCheck = null, this.endGame(), GD.l.KG(lR.g, "shaderPack:failedToCompile")
```

#### 1078. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8462` → after: `L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8462) · [Before (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8462)

```diff
-         qm.j.gp(MR, fm, !0)
+         GD.l.KG(yR, wD, !0)
```

#### 1079. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8465-L8466` → after: `L8465-L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8465-L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8465-L8466) · [Before (L8465-L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8465-L8466)

```diff
-     var tR = fm(38835),
-       UR = fm(39345);
+     var aR = wD(38718),
+       uR = wD(39193);
```

#### 1080. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8469` → after: `L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8469) · [Before (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8469)

```diff
-         this.IE = mm, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new bR(mm), this.setupSkyBox(), this.setupFog(), this.setupLighting()
+         this.AU = DD, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new PR(DD), this.setupSkyBox(), this.setupFog(), this.setupLighting()
```

#### 1081. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8472` → after: `L8472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8472) · [Before (L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8472)

```diff
-         const mm = mD.b.subscribe("skyBox", (mm => {
+         const DD = Dc.e.subscribe("skyBox", (DD => {
```

#### 1082. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8475-L8476` → after: `L8475-L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8475-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8475-L8476) · [Before (L8475-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8475-L8476)

```diff
-         this.IE.qY.dTm = () => {
-           this.updateSkyboxSize(), this.dayAndNightSky.dTm()
+         this.AU.wB.gwD = () => {
+           this.updateSkyboxSize(), this.dayAndNightSky.gwD()
```

#### 1083. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8479` → after: `L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8479) · [Before (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8479)

```diff
-           mm(), this.IE.qY.dTm = null, this.skyBoxRequestId++, null === (Tm = this.skyBoxMesh) || void 0 === Tm || Tm.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.IE.qY.Q0 = null, this.IE.qY.model.earthSky = null
+           DD(), this.AU.wB.gwD = null, this.skyBoxRequestId++, null === (zD = this.skyBoxMesh) || void 0 === zD || zD.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.AU.wB.gDD = null, this.AU.wB.model.earthSky = null
```

#### 1084. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8485-L8486` → after: `L8485-L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8485-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8485-L8486) · [Before (L8485-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8485-L8486)

```diff
-           qY: mm
-         } = this.IE, {
+           wB: DD
+         } = this.AU, {
```

#### 1085. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8488-L8489` → after: `L8488-L8489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8488-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8488-L8489) · [Before (L8488-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8488-L8489)

```diff
-         } = mm.cW();
-         this.skyBoxMesh.fi.set(Tm, Tm, Tm)
+         } = DD.Mq();
+         this.skyBoxMesh.rc.set(zD, zD, zD)
```

#### 1086. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8492` → after: `L8492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8492) · [Before (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8492)

```diff
-         if (this.IE.KO)
+         if (this.AU.KI)
```

#### 1087. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8494` → after: `L8494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8494) · [Before (L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8494)

```diff
-             const mm = "object" === typeof Tm ? Tm : {
+             const DD = "object" === typeof zD ? zD : {
```

#### 1088. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8501-L8503` → after: `L8501-L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8501-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8501-L8503) · [Before (L8501-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8501-L8503)

```diff
-               } = zR(mm, "earth" === (null === fm || void 0 === fm ? void 0 : fm.type) ? fm : void 0);
-             this.IE.qY.Q0 = [hm, Am, am]
-           } else this.IE.qY.Q0 = null
+               } = QR(DD, "earth" === (null === wD || void 0 === wD ? void 0 : wD.type) ? wD : void 0);
+             this.AU.wB.gDD = [pD, sD, KD]
+           } else this.AU.wB.gDD = null
```

#### 1089. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8506` → after: `L8506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8506) · [Before (L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8506)

```diff
-         const Tm = "string" === typeof mm ? mm : mm.type,
+         const zD = "string" === typeof DD ? DD : DD.type,
```

#### 1090. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8508` → after: `L8508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8508) · [Before (L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8508)

```diff
-         if (void 0 === fm && "earth" !== Tm) return void console.error(`Skybox "${Tm}" not found, ignoring update...`);
+         if (void 0 === wD && "earth" !== zD) return void console.error(`Skybox "${zD}" not found, ignoring update...`);
```

#### 1091. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8514` → after: `L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8514) · [Before (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8514)

```diff
-           if (mp(mm, Tm) === (null === (Am = (0, GR.e)(this.earthSkyKey)) || void 0 === Am ? void 0 : Am.dithering)) return void FR(this.skyBoxMesh, this.earthSkyKey, mm, Tm)
+           if (HR(DD, zD) === (null === (sD = (0, bR.c)(this.earthSkyKey)) || void 0 === sD ? void 0 : sD.dithering)) return void YR(this.skyBoxMesh, this.earthSkyKey, DD, zD)
```

#### 1092. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8517-L8519` → after: `L8517-L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8517-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8517-L8519) · [Before (L8517-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8517-L8519)

```diff
-           Aq: am,
-           jY: xm
-         } = this.IE.qY, wm = "earth" === Tm || "earth" === fm.type;
+           oB: KD,
+           pB: rD
+         } = this.AU.wB, LD = "earth" === zD || "earth" === wD.type;
```

#### 1093. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8525` → after: `L8525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8525) · [Before (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8525)

```diff
-         const Dm = (0, Im.l)(this.IE.qY, eR.d.SKYBOX, (0, Qm.k)()),
+         const cD = (0, MD.q)(this.AU.wB, xR.b.SKYBOX, (0, JD.n)()),
```

#### 1094. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8530-L8531` → after: `L8530-L8531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8530-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8530-L8531) · [Before (L8530-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8530-L8531)

```diff
-             Tm = (0, UR.d)(Xx.c.get("clientEscMenuOptions").pixelScale),
-             hm = (0, UR.j)(mm, Tm, (0, di.getSettingsFov)()),
+             zD = (0, uR.c)(ir.e.get("clientEscMenuOptions").pixelScale),
+             pD = (0, uR.g)(DD, zD, (0, vg.getSettingsFov)()),
```

#### 1095. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8535` → after: `L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8535) · [Before (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8535)

```diff
-               reflectionTexture: (0, Km.o)(am, {
+               reflectionTexture: (0, OD.t)(KD, {
```

#### 1096. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8542` → after: `L8542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8542) · [Before (L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8542)

```diff
-           Dm.material = (0, Bm.b)({
+           cD.material = (0, oD.c)({
```

#### 1097. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8544` → after: `L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8544) · [Before (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8544)

```diff
-             Aq: am,
+             oB: KD,
```

#### 1098. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8549` → after: `L8549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8549) · [Before (L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8549)

```diff
-         Dm.xq = !1, Dm.mY = !0, Dm.gO = !0, Dm.applyFog = this.shouldApplyFogToSkyBox(), Dm.renderingGroupId = -1, Dm.fY();
+         cD.uB = !1, cD.ZI = !0, cD.lI = !0, cD.applyFog = this.shouldApplyFogToSkyBox(), cD.renderingGroupId = -1, cD.kI();
```

#### 1099. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8556` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8556) · [Before (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8556)

```diff
-         }), (0, aT.i)(Rm), (0, tR.b)(Dm, (() => {
+         }), (0, sz.c)(RD), (0, aR.d)(cD, (() => {
```

#### 1100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8562` → after: `L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8562) · [Before (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8562)

```diff
-         null === (fm = this.skyBoxMesh) || void 0 === fm || fm.dispose(!1, !0), this.skyBoxMesh = mm, this.earthSkyKey = Tm, this.updateSkyboxSize(), mm && this.IE.qY.Dq(mm, !1, this.IE.HE, !1), this.IE.qY.model.earthSky = null !== (hm = Tm && (0, GR.e)(Tm)) && void 0 !== hm ? hm … [truncated]
+         null === (wD = this.skyBoxMesh) || void 0 === wD || wD.dispose(!1, !0), this.skyBoxMesh = DD, this.earthSkyKey = zD, this.updateSkyboxSize(), DD && this.AU.wB.tB(DD, !1, this.AU.CU, !1), this.AU.wB.model.earthSky = null !== (pD = zD && (0, bR.c)(zD)) && void 0 !== pD ? pD … [truncated]
```

#### 1101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8566` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8566) · [Before (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8566)

```diff
-         const mm = qm.j.subscribe("fogChunkDistanceChanged", (() => {
+         const DD = GD.l.subscribe("fogChunkDistanceChanged", (() => {
```

#### 1102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8569` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8569) · [Before (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8569)

```diff
-           Tm = mD.b.subscribe("fogChunkDistanceOverride", (() => {
+           zD = Dc.e.subscribe("fogChunkDistanceOverride", (() => {
```

#### 1103. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8572` → after: `L8572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8572) · [Before (L8572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8572)

```diff
-           fm = mD.b.subscribe("fogBlockDistanceOverride", (() => {
+           wD = Dc.e.subscribe("fogBlockDistanceOverride", (() => {
```

#### 1104. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8575` → after: `L8575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8575) · [Before (L8575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8575)

```diff
-           hm = mD.b.subscribe("fogColourOverride", (() => {
+           pD = Dc.e.subscribe("fogColourOverride", (() => {
```

#### 1105. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8578` → after: `L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8578) · [Before (L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8578)

```diff
-           Am = mD.b.subscribe("fogOnSkybox", (() => {
+           sD = Dc.e.subscribe("fogOnSkybox", (() => {
```

#### 1106. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8582` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8582) · [Before (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8582)

```diff
-           qm.j.unsubscribe(mm), Tm(), fm(), hm(), Am()
+           GD.l.unsubscribe(DD), zD(), wD(), pD(), sD()
```

#### 1107. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8586` → after: `L8586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8586) · [Before (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8586)

```diff
-         return !0 === this.IE.xI.fogOnSkybox
+         return !0 === this.AU.NJ.fogOnSkybox
```

#### 1108. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8590` → after: `L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8590) · [Before (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8590)

```diff
-         const fm = null !== (mm = this.IE.xI.fogChunkDistanceOverride) && void 0 !== mm ? mm : Xx.c.get("clientEscMenuOptions").fogChunkDistance,
+         const wD = null !== (DD = this.AU.NJ.fogChunkDistanceOverride) && void 0 !== DD ? DD : ir.e.get("clientEscMenuOptions").fogChunkDistance,
```

#### 1109. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8596` → after: `L8596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8596) · [Before (L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8596)

```diff
-         am && (null === (Tm = (0, GR.e)(am)) || void 0 === Tm ? void 0 : Tm.fog) !== Am && (0, nm.ab)(am, {
+         KD && (null === (zD = (0, bR.c)(KD)) || void 0 === zD ? void 0 : zD.fog) !== sD && (0, ED._)(KD, {
```

#### 1110. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8598` → after: `L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8598) · [Before (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8598)

```diff
-         }), hm && hm.applyFog !== Am && (hm.applyFog = Am, (0, tR.b)(hm, (() => {
+         }), pD && pD.applyFog !== sD && (pD.applyFog = sD, (0, aR.d)(pD, (() => {
```

#### 1111. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8600-L8606` → after: `L8600-L8606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8600-L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8600-L8606) · [Before (L8600-L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8600-L8606)

```diff
-         }), this.IE.qY.jY));
-         const xm = this.IE.xI.fogColourOverride,
-           Dm = xm ? (0, wm.T)(xm) : gR;
-         let im = 100 * Om.f.MO,
-           Rm = 101 * Om.f.MO;
-         const pm = this.IE.xI.fogBlockDistanceOverride;
-         (0, Hm.H)(pm) ? !Xx.c.get("clientEscMenuOptions").showFog && (0, Hm.H)(this.IE.xI.fogChunkDistanceOverride) || (im = Om.f.MO * fm, Rm = 0 === fm ? 5 : Om.f.MO * (fm + 1)): (im = 0, Rm = pm), (0, XR.o)(this.IE.qY, im, Rm, Dm)
+         }), this.AU.wB.pB));
+         const rD = this.AU.NJ.fogColourOverride,
+           cD = rD ? (0, LD.V)(rD) : tR;
+         let gD = 100 * ID.f.CI,
+           RD = 101 * ID.f.CI;
+         const AD = this.AU.NJ.fogBlockDistanceOverride;
+         (0, lD.B)(AD) ? !ir.e.get("clientEscMenuOptions").showFog && (0, lD.B)(this.AU.NJ.fogChunkDistanceOverride) || (gD = ID.f.CI * wD, RD = 0 === wD ? 5 : ID.f.CI * (wD + 1)): (gD = 0, RD = AD), (0, jR.q)(this.AU.wB, gD, RD, cD)
```

#### 1112. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8610` → after: `L8610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8610) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8610)

```diff
-         const mm = mD.b.subscribe("lightingOverride", (() => {
+         const DD = Dc.e.subscribe("lightingOverride", (() => {
```

#### 1113. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8613` → after: `L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8613) · [Before (L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8613)

```diff
-           Tm = mD.b.subscribe("skyLightColourOverride", (() => {
+           zD = Dc.e.subscribe("skyLightColourOverride", (() => {
```

#### 1114. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8616` → after: `L8616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8616) · [Before (L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8616)

```diff
-           fm = mD.b.subscribe("ambientLightColourOverride", (() => {
+           wD = Dc.e.subscribe("ambientLightColourOverride", (() => {
```

#### 1115. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8619` → after: `L8619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8619) · [Before (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8619)

```diff
-           hm = mD.b.subscribe("visionMinLightColour", (() => {
+           pD = Dc.e.subscribe("visionMinLightColour", (() => {
```

#### 1116. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8622` → after: `L8622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8622) · [Before (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8622)

```diff
-           Am = qm.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+           sD = GD.l.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 1117. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8626` → after: `L8626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8626) · [Before (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8626)

```diff
-           mm(), Tm(), fm(), hm(), qm.j.unsubscribe(Am)
+           DD(), zD(), wD(), pD(), GD.l.unsubscribe(sD)
```

#### 1118. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8632-L8633` → after: `L8632-L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8632-L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8632-L8633) · [Before (L8632-L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8632-L8633)

```diff
-         } = this.IE.xI, Tm = Xx.c.get("clientEscMenuOptions").enableLighting, fm = null !== mm && void 0 !== mm ? mm : Tm, hm = this.IE.qY.FY !== fm;
-         this.IE.qY.FY = fm, hm && ((0, PR.d)(), fm && this.IE.MI.requeueChunksForLighting(), vR.lightingChanged(this.IE.KO));
+         } = this.AU.NJ, zD = ir.e.get("clientEscMenuOptions").enableLighting, wD = null !== DD && void 0 !== DD ? DD : zD, pD = this.AU.wB.ZB !== wD;
+         this.AU.wB.ZB = wD, pD && ((0, dR.h)(), wD && this.AU.qJ.requeueChunksForLighting(), oR.lightingChanged(this.AU.KI));
```

#### 1119. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8638-L8639` → after: `L8638-L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8638-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8638-L8639) · [Before (L8638-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8638-L8639)

```diff
-         } = this.IE.xI;
-         this.IE.qY.skyLightColourOverride = Am ? (0, wm.T)(Am) : null, this.IE.qY.ambientLightColourOverride = am ? (0, wm.T)(am) : null, this.IE.qY.visionMinLightColour = xm ? (0, wm.T)(xm) : null
+         } = this.AU.NJ;
+         this.AU.wB.skyLightColourOverride = sD ? (0, LD.V)(sD) : null, this.AU.wB.ambientLightColourOverride = KD ? (0, LD.V)(KD) : null, this.AU.wB.visionMinLightColour = rD ? (0, LD.V)(rD) : null
```

#### 1120. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8647` → after: `L8647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8647) · [Before (L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8647)

```diff
-       const Mm = null === (Am = null !== (am = fm.infiniteDistance) && void 0 !== am ? am : null === hm || void 0 === hm ? void 0 : hm.infiniteDistance) || void 0 === Am || Am;
+       const mD = null === (sD = null !== (KD = wD.infiniteDistance) && void 0 !== KD ? KD : null === pD || void 0 === pD ? void 0 : pD.infiniteDistance) || void 0 === sD || sD;
```

#### 1121. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8649-L8651` → after: `L8649-L8651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8649-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8649-L8651) · [Before (L8649-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8649-L8651)

```diff
-       const um = null !== (xm = fm.sunPosition) && void 0 !== xm ? xm : null === hm || void 0 === hm ? void 0 : hm.sunPosition,
-         Bm = null !== (wm = fm.up) && void 0 !== wm ? wm : null === hm || void 0 === hm ? void 0 : hm.up;
-       (0, nm.ab)(Tm, {
+       const eD = null !== (rD = wD.sunPosition) && void 0 !== rD ? rD : null === pD || void 0 === pD ? void 0 : pD.sunPosition,
+         oD = null !== (LD = wD.up) && void 0 !== LD ? LD : null === pD || void 0 === pD ? void 0 : pD.up;
+       (0, ED._)(zD, {
```

#### 1122. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8653-L8660` → after: `L8653-L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8653-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8653-L8660) · [Before (L8653-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8653-L8660)

```diff
-         inclination: null !== (Dm = null !== (im = fm.inclination) && void 0 !== im ? im : null === hm || void 0 === hm ? void 0 : hm.inclination) && void 0 !== Dm ? Dm : -.2,
-         turbidity: null !== (Rm = null !== (pm = fm.turbidity) && void 0 !== pm ? pm : null === hm || void 0 === hm ? void 0 : hm.turbidity) && void 0 !== Rm ? Rm : 10,
-         luminance: null !== (Em = null !== (om = fm.luminance) && void 0 !== om ? om : null === hm || void 0 === hm ? void 0 : hm.luminance) && void 0 !== Em ? Em : .1,
-         rayleigh: null !== (Om = null !== (Ym = fm.rayleigh) && void 0 !== Ym ? Ym : null === hm || void 0 === hm ? void 0 : hm.rayleigh) && void 0 !== Om ? Om : 2,
-         mieCoefficient: null !== (qm = null !== (jm = fm.mieCoefficient) && void 0 !== jm ? jm : null === hm || void 0 === hm ? void 0 : hm.mieCoefficient) && void 0 !== qm ? qm : .005,
-         mieDirectionalG: null !== (Vm = null !== (Im = fm.mieDirectionalG) && void 0 !== Im ? Im : null === hm || void 0 === hm ? void 0 : hm.mieDirectionalG) && void 0 !== Vm ? Vm : .8,
-         distance: null !== (Km = null !== (Qm = fm.distance) && void 0 !== Qm ? Qm : null === hm || void 0 === hm ? void 0 : hm.distance) && void 0 !== Km ? Km : 500,
-         useSunPosition: null !== (Jm = null !== (cm = fm.useSunPosition) && void 0 !== cm ? cm : null === hm || void 0 === hm ? void 0 : hm.useSunPosition) && void 0 !== Jm ? Jm : nR,
+         inclination: null !== (cD = null !== (gD = wD.inclination) && void 0 !== gD ? gD : null === pD || void 0 === pD ? void 0 : pD.inclination) && void 0 !== cD ? cD : -.2,
+         turbidity: null !== (RD = null !== (AD = wD.turbidity) && void 0 !== AD ? AD : null === pD || void 0 === pD ? void 0 : pD.turbidity) && void 0 !== RD ? RD : 10,
+         luminance: null !== (UD = null !== (fD = wD.luminance) && void 0 !== fD ? fD : null === pD || void 0 === pD ? void 0 : pD.luminance) && void 0 !== UD ? UD : .1,
+         rayleigh: null !== (ID = null !== (BD = wD.rayleigh) && void 0 !== BD ? BD : null === pD || void 0 === pD ? void 0 : pD.rayleigh) && void 0 !== ID ? ID : 2,
+         mieCoefficient: null !== (GD = null !== (hD = wD.mieCoefficient) && void 0 !== hD ? hD : null === pD || void 0 === pD ? void 0 : pD.mieCoefficient) && void 0 !== GD ? GD : .005,
+         mieDirectionalG: null !== (nD = null !== (MD = wD.mieDirectionalG) && void 0 !== MD ? MD : null === pD || void 0 === pD ? void 0 : pD.mieDirectionalG) && void 0 !== nD ? nD : .8,
+         distance: null !== (OD = null !== (JD = wD.distance) && void 0 !== JD ? JD : null === pD || void 0 === pD ? void 0 : pD.distance) && void 0 !== OD ? OD : 500,
+         useSunPosition: null !== (QD = null !== (XD = wD.useSunPosition) && void 0 !== XD ? XD : null === pD || void 0 === pD ? void 0 : pD.useSunPosition) && void 0 !== QD ? QD : OR,
```

#### 1123. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8662-L8665` → after: `L8662-L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8662-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8662-L8665) · [Before (L8662-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8662-L8665)

```diff
-         cameraOffset: [null !== (zm = null !== (Zm = fm.xCameraOffset) && void 0 !== Zm ? Zm : null === hm || void 0 === hm ? void 0 : hm.xCameraOffset) && void 0 !== zm ? zm : 0, null !== (km = null !== (bm = fm.yCameraOffset) && void 0 !== bm ? bm : null === hm || void 0 === hm … [truncated]
-         azimuth: null !== (Nm = null !== (Gm = fm.azimuth) && void 0 !== Gm ? Gm : null === hm || void 0 === hm ? void 0 : hm.azimuth) && void 0 !== Nm ? Nm : .55,
-         sunPosition: [null !== (Xm = null === um || void 0 === um ? void 0 : um[0]) && void 0 !== Xm ? Xm : JR[0], null !== (Pm = null === um || void 0 === um ? void 0 : um[1]) && void 0 !== Pm ? Pm : JR[1], null !== (Hm = null === um || void 0 === um ? void 0 : um[2]) && void 0  … [truncated]
-         up: [null !== (ym = null === Bm || void 0 === Bm ? void 0 : Bm[0]) && void 0 !== ym ? ym : QR[0], null !== (Cm = null === Bm || void 0 === Bm ? void 0 : Bm[1]) && void 0 !== Cm ? Cm : QR[1], null !== (rm = null === Bm || void 0 === Bm ? void 0 : Bm[2]) && void 0 !== rm ?  … [truncated]
+         cameraOffset: [null !== (VD = null !== (PD = wD.xCameraOffset) && void 0 !== PD ? PD : null === pD || void 0 === pD ? void 0 : pD.xCameraOffset) && void 0 !== VD ? VD : 0, null !== (CD = null !== (xD = wD.yCameraOffset) && void 0 !== xD ? xD : null === pD || void 0 === pD … [truncated]
+         azimuth: null !== (jD = null !== (dD = wD.azimuth) && void 0 !== dD ? dD : null === pD || void 0 === pD ? void 0 : pD.azimuth) && void 0 !== jD ? jD : .55,
+         sunPosition: [null !== (SD = null === eD || void 0 === eD ? void 0 : eD[0]) && void 0 !== SD ? SD : JR[0], null !== (iD = null === eD || void 0 === eD ? void 0 : eD[1]) && void 0 !== iD ? iD : JR[1], null !== (lD = null === eD || void 0 === eD ? void 0 : eD[2]) && void 0  … [truncated]
+         up: [null !== (WD = null === oD || void 0 === oD ? void 0 : oD[0]) && void 0 !== WD ? WD : MR[0], null !== (ND = null === oD || void 0 === oD ? void 0 : oD[1]) && void 0 !== ND ? ND : MR[1], null !== (ZD = null === oD || void 0 === oD ? void 0 : oD[2]) && void 0 !== ZD ?  … [truncated]
```

#### 1124. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8675` → after: `L8675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8675) · [Before (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8675)

```diff
-           }(0, nm.ab)(Tm, {
+           }(0, ED._)(zD, {
```

#### 1125. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8679` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8679) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8679)

```diff
-       }(mm, Tm, null !== (sm = null !== (lm = fm.vertexTint) && void 0 !== lm ? lm : null === hm || void 0 === hm ? void 0 : hm.vertexTint) && void 0 !== sm ? sm : [255, 255, 255])
+       }(DD, zD, null !== (yD = null !== (kD = wD.vertexTint) && void 0 !== kD ? kD : null === pD || void 0 === pD ? void 0 : pD.vertexTint) && void 0 !== yD ? yD : [255, 255, 255])
```

#### 1126. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8684` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8684) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8684)

```diff
-       return null !== (fm = null !== (hm = mm.dithering) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.dithering) && void 0 !== fm && fm
+       return null !== (wD = null !== (pD = DD.dithering) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.dithering) && void 0 !== wD && wD
```

#### 1127. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8686-L8687` → after: `L8686-L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8686-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8686-L8687) · [Before (L8686-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8686-L8687)

```diff
-     var Tp = fm(37320);
-     const fp = Hm.x / 8,
+     var qR = wD(37254);
+     const DA = lD.r / 8,
```

#### 1128. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8691` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8691) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8691)

```diff
-         for (let Tm = 0; Tm <= Hm.x; Tm += fp) mm.push({
+         for (let zD = 0; zD <= lD.r; zD += DA) DD.push({
```

#### 1129. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8693)

```diff
-           isChunkBound: Tm % Hm.x === 0
+           isChunkBound: zD % lD.r === 0
```

#### 1130. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8700` → after: `L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8700) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8700)

```diff
-         this.IE = mm, this.rendererId = Tm, this.config = fm, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
+         this.AU = DD, this.rendererId = zD, this.config = wD, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
```

#### 1131. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8702` → after: `L8702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8702) · [Before (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8702)

```diff
-         })), ap.registerRenderer(this.IE, this)
+         })), pA.registerRenderer(this.AU, this)
```

#### 1132. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8705)

```diff
-         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), ap.unregisterRenderer(this.IE, this))
+         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), pA.unregisterRenderer(this.AU, this))
```

#### 1133. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8713` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8713) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8713)

```diff
-         }, mm.on("DE", ap.tickHandler))
+         }, DD.on("DU", pA.tickHandler))
```

#### 1134. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8716)

```diff
-         delete ap.allRenderers[Tm.rendererId], ap.tickHandler && 0 === Object.keys(ap.allRenderers).length && (mm.off("DE", ap.tickHandler), ap.tickHandler = null)
+         delete pA.allRenderers[zD.rendererId], pA.tickHandler && 0 === Object.keys(pA.allRenderers).length && (DD.off("DU", pA.tickHandler), pA.tickHandler = null)
```

#### 1135. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8727` → after: `L8727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8727) · [Before (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8727)

```diff
-         const hm = [(0, Hm.v)(mm), (0, Hm.v)(Tm), (0, Hm.v)(fm)],
+         const pD = [(0, lD.q)(DD), (0, lD.q)(zD), (0, lD.q)(wD)],
```

#### 1136. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8735` → after: `L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8735) · [Before (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8735)

```diff
-                     (Am.isChunkBound && am.isChunkBound ? Tm : fm).push(...hm(mm, ip(Am.offset), ip(am.offset)))
+                     (sD.isChunkBound && KD.isChunkBound ? zD : wD).push(...pD(DD, LA(sD.offset), LA(KD.offset)))
```

#### 1137. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8738` → after: `L8738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8738) · [Before (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8738)

```diff
-         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${mm}-${Tm}-${fm}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", Am, this.borderMaterial, hm), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${mm}-${Tm}-${fm}`, t … [truncated]
+         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${DD}-${zD}-${wD}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", sD, this.borderMaterial, pD), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${DD}-${zD}-${wD}`, t … [truncated]
```

#### 1138. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8741-L8742` → after: `L8741-L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8741-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8741-L8742) · [Before (L8741-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8741-L8742)

```diff
-         const Am = (0, Im.l)(this.IE.qY, mm, function(mm) {
-           return (0, Tp.e)(mm.map((mm => {
+         const sD = (0, MD.q)(this.AU.wB, DD, function(DD) {
+           return (0, qR.f)(DD.map((DD => {
```

#### 1139. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8744` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8744) · [Before (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8744)

```diff
-             return [(0, Qm.h)({
+             return [(0, JD.k)({
```

#### 1140. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8750` → after: `L8750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8750) · [Before (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8750)

```diff
-         return Am.material = fm, Am.xq = !1, this.IE.qY.Dq(Am, !0, hm), Am
+         return sD.material = wD, sD.uB = !1, this.AU.wB.tB(sD, !0, pD), sD
```

#### 1141. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8754` → after: `L8754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8754) · [Before (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8754)

```diff
-         return (0, Bm.b)({
+         return (0, oD.c)({
```

#### 1142. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8756` → after: `L8756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8756) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8756)

```diff
-           Aq: this.IE.qY.Aq,
+           oB: this.AU.wB.oB,
```

#### 1143. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8758` → after: `L8758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8758) · [Before (L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8758)

```diff
-             ...nm.d,
+             ...ED.b,
```

#### 1144. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8763` → after: `L8763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8763) · [Before (L8763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8763)

```diff
-             transparencyMode: Zm.s.alphaBlend
+             transparencyMode: PD.o.alphaBlend
```

#### 1145. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8773` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8773) · [Before (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8773)

```diff
-     const xp = Hm.x / 2,
+     const sA = lD.r / 2,
```

#### 1146. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8776-L8777` → after: `L8776-L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8776-L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8776-L8777) · [Before (L8776-L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8776-L8777)

```diff
-         [mm, Hm.x, Tm, xp, fm, 0, 0],
-         [mm, Hm.x, Tm, xp, fm, wp, 0]
+         [DD, lD.r, zD, sA, wD, 0, 0],
+         [DD, lD.r, zD, sA, wD, KA, 0]
```

#### 1147. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8779-L8780` → after: `L8779-L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8779-L8780) · [Before (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8779-L8780)

```diff
-         [Hm.x, mm, xp, Tm, fm, 0, 0],
-         [Hm.x, mm, xp, Tm, fm, 0, wp]
+         [lD.r, DD, sA, zD, wD, 0, 0],
+         [lD.r, DD, sA, zD, wD, 0, KA]
```

#### 1148. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8782-L8783` → after: `L8782-L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8782-L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8782-L8783) · [Before (L8782-L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8782-L8783)

```diff
-         [mm, Hm.x, fm, Tm, xp, 0, wp],
-         [Hm.x, mm, fm, Tm, xp, wp, 0]
+         [DD, lD.r, wD, zD, sA, 0, KA],
+         [lD.r, DD, wD, zD, sA, KA, 0]
```

#### 1149. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8787` → after: `L8787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8787) · [Before (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8787)

```diff
-       return 0 === mm ? -.01 : mm === Hm.x ? Hm.x + hp : mm + hp
+       return 0 === DD ? -.01 : DD === lD.r ? lD.r + zA : DD + zA
```

#### 1150. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8793` → after: `L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8793) · [Before (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8793)

```diff
-         this.IE = mm, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(Rp), this.sampleZ = new Float64Array(Rp), this.sampleY = new Float64Array(Rp), this.sampleAirborne = new Uint8Array(Rp), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
+         this.AU = DD, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(cA), this.sampleZ = new Float64Array(cA), this.sampleY = new Float64Array(cA), this.sampleAirborne = new Uint8Array(cA), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
```

#### 1151. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8802` → after: `L8802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8802) · [Before (L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8802)

```diff
-         const Tm = mD.b.subscribe("groundArrowPath", (mm => {
+         const zD = Dc.e.subscribe("groundArrowPath", (DD => {
```

#### 1152. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8811` → after: `L8811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8811) · [Before (L8811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8811)

```diff
-         this.config = mm, this.renderer.setColour(mm.colour), this.renderCallback || (this.renderCallback = mm => this.onBeforeRender(mm), this.IE.on("beforeRender", this.renderCallback))
+         this.config = DD, this.renderer.setColour(DD.colour), this.renderCallback || (this.renderCallback = DD => this.onBeforeRender(DD), this.AU.on("beforeRender", this.renderCallback))
```

#### 1153. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8819)

```diff
-         const mm = this.IE.qI.uB(this.IE.xH);
+         const DD = this.AU.yJ.AY(this.AU.vW);
```

#### 1154. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8821` → after: `L8821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8821) · [Before (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8821)

```diff
-         Vm().copy(this.worldOffset, this.IE.HE), Vm().add(this.playerPos, mm.hU, this.worldOffset);
+         nD().copy(this.worldOffset, this.AU.CU), nD().add(this.playerPos, DD.sH, this.worldOffset);
```

#### 1155. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8830` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8830) · [Before (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8830)

```diff
-         if (cD.endAtSolidFace && this.IE.oE.Tu(Math.floor(Tm[0]), Math.floor(Tm[1]), Math.floor(Tm[2]))) {
+         if (Xc.endAtSolidFace && this.AU.KU.KF(Math.floor(zD[0]), Math.floor(zD[1]), Math.floor(zD[2]))) {
```

#### 1156. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8877` → after: `L8877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8877) · [Before (L8877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8877)

```diff
-         return this.IE.oE.Tu(mm, Tm, fm) && !this.IE.oE.Tu(mm, Tm + 1, fm)
+         return this.AU.KU.KF(DD, zD, wD) && !this.AU.KU.KF(DD, zD + 1, wD)
```

#### 1157. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8880` → after: `L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8880) · [Before (L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8880)

```diff
-         this.renderCallback && (this.IE.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
+         this.renderCallback && (this.AU.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
```

#### 1158. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8883-L8884` → after: `L8883-L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8883-L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8883-L8884) · [Before (L8883-L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8883-L8884)

```diff
-     var op = fm(36912),
-       Op = fm(37858);
+     var AA = wD(36774),
+       UA = wD(37791);
```

#### 1159. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8887` → after: `L8887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8887) · [Before (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8887)

```diff
-         this.IE = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (mm, Tm, fm, hm, Am) => {
+         this.AU = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (DD, zD, wD, pD, sD) => {
```

#### 1160. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8889` → after: `L8889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8889) · [Before (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8889)

```diff
-         }, this.IE = mm, this.bloxd = Tm
+         }, this.AU = DD, this.bloxd = zD
```

#### 1161. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8892` → after: `L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8892) · [Before (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8892)

```diff
-         if (!(Am in Op.f)) return console.error(`Called for non multiblock ${Am}`), !1;
+         if (!(sD in UA.g)) return console.error(`Called for non multiblock ${sD}`), !1;
```

#### 1162. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8899-L8901` → after: `L8899-L8901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8899-L8901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8899-L8901) · [Before (L8899-L8901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8899-L8901)

```diff
-           of Op.f[Am].positions) {
-           const Am = this.bloxd.XV(Tm + xm, fm + wm, hm + Dm);
-           if (this.IE.Kmm(Am) || !this.bloxd.playerCanChangePos(mm, Tm + xm, fm + wm, hm + Dm, Rm.i[am].id)) return !1
+           of UA.g[sD].positions) {
+           const sD = this.bloxd.OJ(zD + rD, wD + LD, pD + cD);
+           if (this.AU.bDD(sD) || !this.bloxd.playerCanChangePos(DD, zD + rD, wD + LD, pD + cD, RD.l[KD].id)) return !1
```

#### 1163. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8913` → after: `L8913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8913) · [Before (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8913)

```diff
-           of Op.f[Tm].positions) fm.push([mm[0] + Am, mm[1] + am, mm[2] + xm]);
+           of UA.g[zD].positions) wD.push([DD[0] + sD, DD[1] + KD, DD[2] + rD]);
```

#### 1164. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8917` → after: `L8917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8917) · [Before (L8917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8917)

```diff
-         if (mm in Op.c) {
+         if (DD in UA.e) {
```

#### 1165. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8934` → after: `L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8934) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8934)

```diff
-             of Op.f[Am].positions) {
+             of UA.g[sD].positions) {
```

#### 1166. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8938` → after: `L8938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8938) · [Before (L8938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8938)

```diff
-               om = this.bloxd.XV(Am, pm, Em);
+               fD = this.bloxd.OJ(sD, AD, UD);
```

#### 1167. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8951` → after: `L8951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8951) · [Before (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8951)

```diff
-             block: (0, Rm.f)(mm),
+             block: (0, RD.h)(DD),
```

#### 1168. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8965-L8966` → after: `L8965-L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8965-L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8965-L8966) · [Before (L8965-L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8965-L8966)

```diff
-         } = Op.c[mm], Dm = Tm - am, im = fm - xm, Rm = hm - wm, pm = this.bloxd.XV(Dm, im, Rm);
-         if (pm in Op.f)
+         } = UA.e[DD], cD = zD - KD, gD = wD - rD, RD = pD - LD, AD = this.bloxd.OJ(cD, gD, RD);
+         if (AD in UA.g)
```

#### 1169. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8973` → after: `L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8973) · [Before (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8973)

```diff
-             of Op.f[pm].positions)
+             of UA.g[AD].positions)
```

#### 1170. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8991-L8993` → after: `L8991-L8993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8991-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L8991-L8993) · [Before (L8991-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L8991-L8993)

```diff
-         const wm = this.bloxd.XV(mm, Tm, fm),
-           Dm = null !== (Am = this.getRestoredTop(mm, Tm, fm, wm, hm, xm)) && void 0 !== Am ? Am : hm;
-         if (wm in Op.c) {
+         const LD = this.bloxd.OJ(DD, zD, wD),
+           cD = null !== (sD = this.getRestoredTop(DD, zD, wD, LD, pD, rD)) && void 0 !== sD ? sD : pD;
+         if (LD in UA.e) {
```

#### 1171. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9006` → after: `L9006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9006) · [Before (L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9006)

```diff
-             of Op.f[hm].positions) {
+             of UA.g[pD].positions) {
```

#### 1172. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9010` → after: `L9010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9010) · [Before (L9010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9010)

```diff
-             this.bloxd.XV(hm, im, Rm) === mm && am(hm, im, Rm, 0, !0)
+             this.bloxd.OJ(pD, gD, RD) === DD && KD(pD, gD, RD, 0, !0)
```

#### 1173. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9013` → after: `L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9013) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9013)

```diff
-         if (Dm in Op.c) {
+         if (cD in UA.e) {
```

#### 1174. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9019` → after: `L9019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9019) · [Before (L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9019)

```diff
-           } = Op.c[Dm];
+           } = UA.e[cD];
```

#### 1175. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9026` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9026) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9026)

```diff
-             of Op.f[hm].positions) {
+             of UA.g[pD].positions) {
```

#### 1176. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9030-L9033` → after: `L9030-L9033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9030-L9033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9030-L9033) · [Before (L9030-L9033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9030-L9033)

```diff
-             if (!this.bloxd.Yu(hm, om, Om)) continue;
-             const Ym = this.bloxd.XV(hm, om, Om),
-               qm = !this.IE.Vo.Tu(Ym);
-             am(hm, om, Om, Rm.i[Dm].id, qm)
+             if (!this.bloxd.XF(pD, fD, ID)) continue;
+             const BD = this.bloxd.OJ(pD, fD, ID),
+               GD = !this.AU.Lf.KF(BD);
+             KD(pD, fD, ID, RD.l[cD].id, GD)
```

#### 1177. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9040-L9041` → after: `L9040-L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9040-L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9040-L9041) · [Before (L9040-L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9040-L9041)

```diff
-         const xm = null === (Am = Rm.i[hm]) || void 0 === Am ? void 0 : Am.attachedTop;
-         return !!xm && (null === (am = Rm.i[this.bloxd.XV(mm, Tm, fm)]) || void 0 === am ? void 0 : am.meta.rootId) === Rm.i[xm].meta.rootId
+         const rD = null === (sD = RD.l[pD]) || void 0 === sD ? void 0 : sD.attachedTop;
+         return !!rD && (null === (KD = RD.l[this.bloxd.OJ(DD, zD, wD)]) || void 0 === KD ? void 0 : KD.meta.rootId) === RD.l[rD].meta.rootId
```

#### 1178. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9045-L9050` → after: `L9045-L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9045-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9045-L9050) · [Before (L9045-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9045-L9050)

```diff
-         const wm = Rm.i[Am],
-           Dm = (null === wm || void 0 === wm ? void 0 : wm.attachedTop) && Rm.i[wm.attachedTop],
-           im = null === (xm = Rm.i[hm]) || void 0 === xm ? void 0 : xm.meta.rootId;
-         if (null === am || !Dm || im === wm.meta.rootId || im === Dm.meta.rootId || !this.bloxd.Yu(mm, Tm - 1, fm)) return null;
-         const pm = Rm.i[this.bloxd.XV(mm, Tm - 1, fm)];
-         return (null === pm || void 0 === pm ? void 0 : pm.meta.rootId) === wm.meta.rootId ? Rm.i[pm.attachedTop].id : null
+         const LD = RD.l[sD],
+           cD = (null === LD || void 0 === LD ? void 0 : LD.attachedTop) && RD.l[LD.attachedTop],
+           gD = null === (rD = RD.l[pD]) || void 0 === rD ? void 0 : rD.meta.rootId;
+         if (null === KD || !cD || gD === LD.meta.rootId || gD === cD.meta.rootId || !this.bloxd.XF(DD, zD - 1, wD)) return null;
+         const AD = RD.l[this.bloxd.OJ(DD, zD - 1, wD)];
+         return (null === AD || void 0 === AD ? void 0 : AD.meta.rootId) === LD.meta.rootId ? RD.l[AD.attachedTop].id : null
```

#### 1179. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9054-L9060` → after: `L9054-L9060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9054-L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9054-L9060) · [Before (L9054-L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9054-L9060)

```diff
-         const pm = null === (wm = Rm.i[hm]) || void 0 === wm ? void 0 : wm.attachedTop,
-           Em = null === (Dm = Rm.i[Am]) || void 0 === Dm ? void 0 : Dm.attachedTop;
-         if (!pm && !Em || !this.bloxd.Yu(mm, Tm + 1, fm)) return;
-         const om = this.bloxd.XV(mm, Tm + 1, fm),
-           Om = !!pm && (null === (im = Rm.i[om]) || void 0 === im ? void 0 : im.meta.rootId) === Rm.i[pm].meta.rootId,
-           Ym = Em ? Rm.i[Em].id : 0;
-         pm && Em && Rm.i[hm].meta.rootId === Rm.i[Am].meta.rootId ? Om && om !== Ym && am(mm, Tm + 1, fm, Ym, !0) : !Em || !Om && 0 !== om || null !== xm && !this.placerCanAddTop(xm, mm, Tm + 1, fm, Ym) ? Om && am(mm, Tm + 1, fm, 0, !0) : am(mm, Tm + 1, fm, Ym, !0)
+         const AD = null === (LD = RD.l[pD]) || void 0 === LD ? void 0 : LD.attachedTop,
+           UD = null === (cD = RD.l[sD]) || void 0 === cD ? void 0 : cD.attachedTop;
+         if (!AD && !UD || !this.bloxd.XF(DD, zD + 1, wD)) return;
+         const fD = this.bloxd.OJ(DD, zD + 1, wD),
+           ID = !!AD && (null === (gD = RD.l[fD]) || void 0 === gD ? void 0 : gD.meta.rootId) === RD.l[AD].meta.rootId,
+           BD = UD ? RD.l[UD].id : 0;
+         AD && UD && RD.l[pD].meta.rootId === RD.l[sD].meta.rootId ? ID && fD !== BD && KD(DD, zD + 1, wD, BD, !0) : !UD || !ID && 0 !== fD || null !== rD && !this.placerCanAddTop(rD, DD, zD + 1, wD, BD) ? ID && KD(DD, zD + 1, wD, 0, !0) : KD(DD, zD + 1, wD, BD, !0)
```

#### 1180. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9066` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9066) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9066)

```diff
-     var qp = fm(9199);
+     var IA = wD(9244);
```

#### 1181. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9070)

```diff
-       (null === mm || void 0 === mm ? void 0 : mm.chestStr) !== Hm.e || Object.isFrozen(mm) || (mm.chestStr = (0, Hm.E)(mm.chestStr))
+       (null === DD || void 0 === DD ? void 0 : DD.chestStr) !== lD.e || Object.isFrozen(DD) || (DD.chestStr = (0, lD.z)(DD.chestStr))
```

#### 1182. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9077` → after: `L9077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9077) · [Before (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9077)

```diff
-         if (this.storage.get(mm, Tm, fm) && console.error(new Error(`adding chunk x y z ${mm} ${Tm} ${fm} to dataowner that already exists`).stack), 0 === hm.length) return void this.storage.set(mm, Tm, fm, jp);
+         if (this.storage.get(DD, zD, wD) && console.error(new Error(`adding chunk x y z ${DD} ${zD} ${wD} to dataowner that already exists`).stack), 0 === pD.length) return void this.storage.set(DD, zD, wD, BA);
```

#### 1183. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9089` → after: `L9089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9089) · [Before (L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9089)

```diff
-           const Tm = null !== xm && void 0 !== xm ? xm : {
+           const zD = null !== rD && void 0 !== rD ? rD : {
```

#### 1184. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9093` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9093) · [Before (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9093)

```diff
-           Vp(Tm.persisted), Am[`${mm[0]}|${mm[1]}|${mm[2]}`] = Tm
+           GA(zD.persisted), sD[`${DD[0]}|${DD[1]}|${DD[2]}`] = zD
```

#### 1185. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9122` → after: `L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9122) · [Before (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9122)

```diff
-           if ((0, Hm.H)(mm)) console.error("ChunkInfo block at local pos", xm, "was nullish:", mm);
+           if ((0, lD.B)(DD)) console.error("ChunkInfo block at local pos", rD, "was nullish:", DD);
```

#### 1186. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9135)

```diff
-           am = [mm * Om.f.MO, Tm * Om.f.MO, fm * Om.f.MO];
+           KD = [DD * ID.f.CI, zD * ID.f.CI, wD * ID.f.CI];
```

#### 1187. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9140` → after: `L9140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9140) · [Before (L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9140)

```diff
-             Am = this.bloxd.XV(fm[0], fm[1], fm[2]);
+             sD = this.bloxd.OJ(wD[0], wD[1], wD[2]);
```

#### 1188. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9146-L9148` → after: `L9146-L9148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9146-L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9146-L9148) · [Before (L9146-L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9146-L9148)

```diff
-         const hm = (0, Hm.M)(mm),
-           Am = (0, Hm.M)(Tm),
-           am = (0, Hm.M)(fm),
+         const pD = (0, lD.L)(DD),
+           sD = (0, lD.L)(zD),
+           KD = (0, lD.L)(wD),
```

#### 1189. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9151` → after: `L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9151) · [Before (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9151)

```diff
-         delete xm[`${(0,Hm.P)(mm)}|${(0,Hm.P)(Tm)}|${(0,Hm.P)(fm)}`]
+         delete rD[`${(0,lD.O)(DD)}|${(0,lD.O)(zD)}|${(0,lD.O)(wD)}`]
```

#### 1190. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9156` → after: `L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9156) · [Before (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9156)

```diff
-         const am = Om.f.MO;
+         const KD = ID.f.CI;
```

#### 1191. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9163` → after: `L9163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9163) · [Before (L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9163)

```diff
-         return this.storage.get((0, Hm.M)(mm), (0, Hm.M)(Tm), (0, Hm.M)(fm))[`${(0,Hm.P)(mm)}|${(0,Hm.P)(Tm)}|${(0,Hm.P)(fm)}`]
+         return this.storage.get((0, lD.L)(DD), (0, lD.L)(zD), (0, lD.L)(wD))[`${(0,lD.O)(DD)}|${(0,lD.O)(zD)}|${(0,lD.O)(wD)}`]
```

#### 1192. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9178-L9180` → after: `L9178-L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9178-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9178-L9180) · [Before (L9178-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9178-L9180)

```diff
-         const am = (0, Hm.M)(mm),
-           xm = (0, Hm.M)(Tm),
-           wm = (0, Hm.M)(fm);
+         const KD = (0, lD.L)(DD),
+           rD = (0, lD.L)(zD),
+           LD = (0, lD.L)(wD);
```

#### 1193. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9183` → after: `L9183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9183) · [Before (L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9183)

```diff
-         const im = `${(0,Hm.P)(mm)}|${(0,Hm.P)(Tm)}|${(0,Hm.P)(fm)}`,
+         const gD = `${(0,lD.O)(DD)}|${(0,lD.O)(zD)}|${(0,lD.O)(wD)}`,
```

#### 1194. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9189` → after: `L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9189) · [Before (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9189)

```diff
-         const am = arguments.length >= 4 ? hm : this.getBlockData(mm, Tm, fm);
+         const KD = arguments.length >= 4 ? pD : this.getBlockData(DD, zD, wD);
```

#### 1195. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9204-L9207` → after: `L9204-L9207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9204-L9207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9204-L9207) · [Before (L9204-L9207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9204-L9207)

```diff
-     var Kp = fm(37131),
-       Qp = fm(39350),
-       np = fm(39359),
-       Jp = fm(38108),
+     var nA = wD(37015),
+       MA = wD(39200),
+       OA = wD(39203),
+       JA = wD(38029),
```

#### 1196. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9214` → after: `L9214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9214) · [Before (L9214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9214)

```diff
-         this.bloxd = void 0, this.books = new Map, this.bloxd = mm, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.IE.xH)
+         this.bloxd = void 0, this.books = new Map, this.bloxd = DD, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.AU.vW)
```

#### 1197. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9221` → after: `L9221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9221) · [Before (L9221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9221)

```diff
-           base: Qp.c,
+           base: MA.e,
```

#### 1198. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9230` → after: `L9230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9230) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9230)

```diff
-           Am = (0, np.d)(null !== fm && void 0 !== fm ? fm : kp);
+           sD = (0, OA.c)(null !== wD && void 0 !== wD ? wD : VA);
```

#### 1199. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9245` → after: `L9245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9245) · [Before (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9245)

```diff
-         return void 0 !== Am ? Am : Object.hasOwn(hm.base, Tm) ? hm.base[Tm] : void 0
+         return void 0 !== sD ? sD : Object.hasOwn(pD.base, zD) ? pD.base[zD] : void 0
```

#### 1200. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9256` → after: `L9256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9256) · [Before (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9256)

```diff
-           Tm(xm, null !== (am = null === Am || void 0 === Am ? void 0 : Am.get(xm)) && void 0 !== am ? am : hm[xm])
+           zD(rD, null !== (KD = null === sD || void 0 === sD ? void 0 : sD.get(rD)) && void 0 !== KD ? KD : pD[rD])
```

#### 1201. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9264` → after: `L9264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9264) · [Before (L9264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9264)

```diff
-         return void 0 !== hm && (hm.base !== Qp.c || (null !== (Tm = null === (fm = hm.overrides) || void 0 === fm ? void 0 : fm.size) && void 0 !== Tm ? Tm : 0) > 0)
+         return void 0 !== pD && (pD.base !== MA.e || (null !== (zD = null === (wD = pD.overrides) || void 0 === wD ? void 0 : wD.size) && void 0 !== zD ? zD : 0) > 0)
```

#### 1202. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9272` → after: `L9272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9272) · [Before (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9272)

```diff
-           Dw: Am,
+           AL: sD,
```

#### 1203. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9284` → after: `L9284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9284) · [Before (L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9284)

```diff
-               Dw: wm,
+               AL: LD,
```

#### 1204. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9288` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9288) · [Before (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9288)

```diff
-               Dw: wm,
+               AL: LD,
```

#### 1205. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9297` → after: `L9297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9297) · [Before (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9297)

```diff
-         Array.isArray(Am) ? am = Am : (am = zp, zp[0] = Am, zp.length = 1);
+         Array.isArray(sD) ? KD = sD : (KD = QA, QA[0] = sD, QA.length = 1);
```

#### 1206. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9355` → after: `L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9355) · [Before (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9355)

```diff
-         if (!1 !== this.bloxd.Vo.metadatas[fm].stackable) {
+         if (!1 !== this.bloxd.Lf.metadatas[wD].stackable) {
```

#### 1207. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9365-L9366` → after: `L9365-L9366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9365-L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9365-L9366) · [Before (L9365-L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9365-L9366)

```diff
-             iw: 0,
-             Kx: null,
+             UL: 0,
+             Pr: null,
```

#### 1208. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9379` → after: `L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9379) · [Before (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9379)

```diff
-             Kx: om,
+             Pr: fD,
```

#### 1209. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9383-L9384` → after: `L9383-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9383-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9383-L9384) · [Before (L9383-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9383-L9384)

```diff
-           iw: Em / im,
-           Kx: om,
+           UL: UD / gD,
+           Pr: fD,
```

#### 1210. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9414` → after: `L9414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9414) · [Before (L9414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9414)

```diff
-         if (!1 !== this.bloxd.Vo.metadatas[Tm].stackable) {
+         if (!1 !== this.bloxd.Lf.metadatas[zD].stackable) {
```

#### 1211. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9434` → after: `L9434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9434) · [Before (L9434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9434)

```diff
-           Kx: am,
+           Pr: KD,
```

#### 1212. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9483)

```diff
-       return fm ? void 0 === Tm ? fm : (Tm <= 0 && (Tm = 1), fm.map((mm => {
+       return wD ? void 0 === zD ? wD : (zD <= 0 && (zD = 1), wD.map((DD => {
```

#### 1213. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9494-L9497` → after: `L9494-L9497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9494-L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9494-L9497) · [Before (L9494-L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9494-L9497)

```diff
-     var ep = fm(38576),
-       Np = fm(38578),
-       Gp = fm(1247),
-       Xp = fm(6451);
+     var xA = wD(38455),
+       TA = wD(38463),
+       bA = wD(1245),
+       jA = wD(6520);
```

#### 1214. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9501` → after: `L9501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9501) · [Before (L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9501)

```diff
-           ...Kp.p
+           ...nA.m
```

#### 1215. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9505-L9507` → after: `L9505-L9507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9505-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9505-L9507) · [Before (L9505-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9505-L9507)

```diff
-     var Hp = fm(38570),
-       yp = fm(37692),
-       Cp = fm(34299);
+     var SA = wD(38448),
+       iA = wD(37611),
+       lA = wD(34211);
```

#### 1216. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9511` → after: `L9511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9511) · [Before (L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9511)

```diff
-         this.bloxd = mm, this.enchanter = void 0, rp ??= new yp.e(Kp.p), this.enchanter = rp
+         this.bloxd = DD, this.enchanter = void 0, WA ??= new iA.e(nA.m), this.enchanter = WA
```

#### 1217. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9514` → after: `L9514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9514) · [Before (L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9514)

```diff
-         return this.bloxd.isClient && console.assert(mm === this.bloxd.IE.xH || mm === this.bloxd.IE.Cmm, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(Tm)
+         return this.bloxd.isClient && console.assert(DD === this.bloxd.AU.vW || DD === this.bloxd.AU.vDD, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(zD)
```

#### 1218. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9517-L9520` → after: `L9517-L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9517-L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9517-L9520) · [Before (L9517-L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9517-L9520)

```diff
-         if (this.bloxd.isClient && console.assert(mm === this.bloxd.IE.xH || mm === this.bloxd.IE.Cmm, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(mm, "canCraft")) return !1;
-         if (!(0, Cp.p)(fm)) return !1;
-         const hm = this.bloxd.qI.QTm(mm).getItemAtIdx(Tm);
-         return 0 !== this.getPossibleEnchantments(mm, null === hm || void 0 === hm ? void 0 : hm.name).length && !(!hm || (0, Cp.l)(hm.attributes))
+         if (this.bloxd.isClient && console.assert(DD === this.bloxd.AU.vW || DD === this.bloxd.AU.vDD, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(DD, "canCraft")) return !1;
+         if (!(0, lA.n)(wD)) return !1;
+         const pD = this.bloxd.yJ.jzD(DD).getItemAtIdx(zD);
+         return 0 !== this.getPossibleEnchantments(DD, null === pD || void 0 === pD ? void 0 : pD.name).length && !(!pD || (0, lA.m)(pD.attributes))
```

#### 1219. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9523` → after: `L9523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9523) · [Before (L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9523)

```diff
-         return (0, Cp.p)(mm)
+         return (0, lA.n)(DD)
```

#### 1220. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9526` → after: `L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9526) · [Before (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9526)

```diff
-         return (0, Cp.e)(mm, Tm)
+         return (0, lA.d)(DD, zD)
```

#### 1221. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9529` → after: `L9529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9529) · [Before (L9529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9529)

```diff
-         return (0, Cp.h)(mm)
+         return (0, lA.i)(DD)
```

#### 1222. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9532` → after: `L9532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9532) · [Before (L9532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9532)

```diff
-         return (0, Cp.g)(mm, Tm)
+         return (0, lA.h)(DD, zD)
```

#### 1223. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9534-L9537` → after: `L9534-L9537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9534-L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9534-L9537) · [Before (L9534-L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9534-L9537)

```diff
-     }(0, Rm.k)("Coal Ore"), (0, Rm.k)("Iron Ore"), (0, Rm.k)("Gold Ore"), (0, Rm.k)("Diamond Ore"), (0, Rm.k)("Moonstone Ore"), (0, Rm.k)("Pure Coal Ore"), (0, Rm.k)("Pure Iron Ore"), (0, Rm.k)("Pure Gold Ore"), (0, Rm.k)("Pure Diamond Ore"), (0, Rm.k)("Pure Moonstone Ore"), (0,  … [truncated]
-     var lp = fm(37716),
-       Mp = fm(37154),
-       Bp = fm(37721);
+     }(0, RD.p)("Coal Ore"), (0, RD.p)("Iron Ore"), (0, RD.p)("Gold Ore"), (0, RD.p)("Diamond Ore"), (0, RD.p)("Moonstone Ore"), (0, RD.p)("Pure Coal Ore"), (0, RD.p)("Pure Iron Ore"), (0, RD.p)("Pure Gold Ore"), (0, RD.p)("Pure Diamond Ore"), (0, RD.p)("Pure Moonstone Ore"), (0,  … [truncated]
+     var ZA = wD(37624),
+       yA = wD(37037),
+       kA = wD(37628);
```

#### 1224. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9539-L9540` → after: `L9539-L9540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9539-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9539-L9540) · [Before (L9539-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9539-L9540)

```diff
-     const Lp = new Set(Mp.f.map((function(mm) {
-       return `${mm}ByBlock`
+     const mA = new Set(yA.g.map((function(DD) {
+       return `${DD}ByBlock`
```

#### 1225. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9544` → after: `L9544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9544) · [Before (L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9544)

```diff
-       return void 0 === Tm ? mm : {
+       return void 0 === zD ? DD : {
```

#### 1226. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9565` → after: `L9565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9565) · [Before (L9565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9565)

```diff
-         const hm = null !== (fm = this.resolved) && void 0 !== fm ? fm : this.buildResolvedSettings(mm, Tm);
+         const pD = null !== (wD = this.resolved) && void 0 !== wD ? wD : this.buildResolvedSettings(DD, zD);
```

#### 1227. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9571` → after: `L9571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9571) · [Before (L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9571)

```diff
-         const hm = null !== (fm = this.blockLookups) && void 0 !== fm ? fm : this.buildBlockLookups(mm, Tm);
+         const pD = null !== (wD = this.blockLookups) && void 0 !== wD ? wD : this.buildBlockLookups(DD, zD);
```

#### 1228. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9578` → after: `L9578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9578) · [Before (L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9578)

```diff
-         const fm = (0, lp.e)(mm, Tm),
+         const wD = (0, ZA.k)(DD, zD),
```

#### 1229. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9594` → after: `L9594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9594) · [Before (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9594)

```diff
-         const fm = (0, lp.d)(mm).getBlockLookupsForTier(Tm),
+         const wD = (0, ZA.g)(DD).getBlockLookupsForTier(zD),
```

#### 1230. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9600` → after: `L9600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9600) · [Before (L9600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9600)

```diff
-         const am = (0, lp.e)(mm, Tm);
+         const KD = (0, ZA.k)(DD, zD);
```

#### 1231. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9602` → after: `L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9602) · [Before (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9602)

```diff
-           speedMultiplier: void 0 === Am ? fm.speedMultiplier : (0, lp.c)(vp(am.speedMultiplierByBlock, Am)),
+           speedMultiplier: void 0 === sD ? wD.speedMultiplier : (0, ZA.f)(eA(KD.speedMultiplierByBlock, sD)),
```

#### 1232. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9607` → after: `L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9607) · [Before (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9607)

```diff
-     var Up = fm(38261);
+     var aA = wD(38153);
```

#### 1233. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9611` → after: `L9611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9611) · [Before (L9611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9611)

```diff
-         this.ni = new WeakMap
+         this.Qg = new WeakMap
```

#### 1234. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9614` → after: `L9614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9614) · [Before (L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9614)

```diff
-         return am && (hm > Tm || Am > fm) ? (this.ni.set(mm, {
+         return KD && (pD > zD || sD > wD) ? (this.Qg.set(DD, {
```

#### 1235. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9620` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9620) · [Before (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9620)

```diff
-         }) : (this.ni.delete(mm), {
+         }) : (this.Qg.delete(DD), {
```

#### 1236. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9626` → after: `L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9626) · [Before (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9626)

```diff
-         return this.ni.get(mm)
+         return this.Qg.get(DD)
```

#### 1237. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9629` → after: `L9629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9629) · [Before (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9629)

```diff
-         this.ni.delete(mm)
+         this.Qg.delete(DD)
```

#### 1238. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9632-L9633` → after: `L9632-L9633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9632-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9632-L9633) · [Before (L9632-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9632-L9633)

```diff
-     var Wp = fm(9240),
-       Fp = fm(39366);
+     var tA = wD(9286),
+       FA = wD(39209);
```

#### 1239. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9636` → after: `L9636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9636) · [Before (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9636)

```diff
-         this.isClient = Tm, this.callbacks = fm, this.IE = void 0, this.qI = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.Vo = new  … [truncated]
+         this.isClient = zD, this.callbacks = wD, this.AU = void 0, this.yJ = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.Lf = new  … [truncated]
```

#### 1240. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9659` → after: `L9659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9659) · [Before (L9659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9659)

```diff
-         this.multiblockManager.zN(mm, Tm, fm, hm, Am, am)
+         this.multiblockManager.jT(DD, zD, wD, pD, sD, KD)
```

#### 1241. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9662` → after: `L9662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9662) · [Before (L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9662)

```diff
-         const am = this.XV(mm, Tm, fm);
+         const KD = this.OJ(DD, zD, wD);
```

#### 1242. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9667` → after: `L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9667) · [Before (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9667)

```diff
-         return Am in Op.f ? this.multiblockManager.playerCanPlaceItem(mm, Tm, fm, hm, Am) : this.playerCanChangePos(mm, Tm, fm, hm, Am, am)
+         return sD in UA.g ? this.multiblockManager.playerCanPlaceItem(DD, zD, wD, pD, sD) : this.playerCanChangePos(DD, zD, wD, pD, sD, KD)
```

#### 1243. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9672` → after: `L9672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9672) · [Before (L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9672)

```diff
-         return this.isClient ? this.Yu(Tm, fm, hm) && this.posSatisfiesModifyConstraints(mm, Tm, fm, hm) && (!this.IE.Vo.Tu(Am) || this.IE.oE.uC.has(Am) || !this.IE.qI.RTm(Tm, fm, hm, this.IE.Vo.lC(Am), am ? mm : null)) : this.Yu(Tm, fm, hm) && this.posSatisfiesModifyConstraints( … [truncated]
+         return this.isClient ? this.XF(zD, wD, pD) && this.posSatisfiesModifyConstraints(DD, zD, wD, pD) && (!this.AU.Lf.KF(sD) || this.AU.KU.zk.has(sD) || !this.AU.yJ.OzD(zD, wD, pD, this.AU.Lf.Dk(sD), KD ? DD : null)) : this.XF(zD, wD, pD) && this.posSatisfiesModifyConstraints( … [truncated]
```

#### 1244. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9681` → after: `L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9681) · [Before (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9681)

```diff
-         return 1 === Tm ? `Partially Full ${mm}` : 2 === Tm ? `Half Full ${mm}` : 3 === Tm ? `Nearly Full ${mm}` : 4 === Tm ? mm : "Bowl"
+         return 1 === zD ? `Partially Full ${DD}` : 2 === zD ? `Half Full ${DD}` : 3 === zD ? `Nearly Full ${DD}` : 4 === zD ? DD : "Bowl"
```

#### 1245. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9688-L9689` → after: `L9688-L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9688-L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9688-L9689) · [Before (L9688-L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9688-L9689)

```diff
-           if (this.Vo.metadatas[mm]) return this.Vo.metadatas[mm].id;
-           throw new Error(`Invalid block name. You sent ${mm}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
+           if (this.Lf.metadatas[DD]) return this.Lf.metadatas[DD].id;
+           throw new Error(`Invalid block name. You sent ${DD}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
```

#### 1246. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9694` → after: `L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9694) · [Before (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9694)

```diff
-         return mm && mm !== Wp.c ? this.Vo.metadatas[mm].name : Wp.c
+         return DD && DD !== tA.c ? this.Lf.metadatas[DD].name : tA.c
```

#### 1247. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9701` → after: `L9701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9701) · [Before (L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9701)

```diff
-         const Tm = this.Vo.metadatas[mm];
+         const zD = this.Lf.metadatas[DD];
```

#### 1248. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9703-L9704` → after: `L9703-L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9703-L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9703-L9704) · [Before (L9703-L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9703-L9704)

```diff
-           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${mm}`);
-           throw new Error(`Item ${mm} not found in registry`)
+           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${DD}`);
+           throw new Error(`Item ${DD} not found in registry`)
```

#### 1249. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9709` → after: `L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9709) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9709)

```diff
-         if (Fp.c.has(fm) && (this.isClient || "Player" === this.getEntityType(mm))) {
+         if (FA.e.has(wD) && (this.isClient || "Player" === this.getEntityType(DD))) {
```

#### 1250. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9711-L9712` → after: `L9711-L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9711-L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9711-L9712) · [Before (L9711-L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9711-L9712)

```diff
-             Am = this.getClientPredictedOption(mm, (0, Fp.f)(hm, fm));
-           if (!(0, Hm.H)(Am)) return Am
+             sD = this.getClientPredictedOption(DD, (0, FA.i)(pD, wD));
+           if (!(0, lD.B)(sD)) return sD
```

#### 1251. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9718-L9719` → after: `L9718-L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9718-L9719) · [Before (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9718-L9719)

```diff
-         const hm = null === (fm = this.Vo.metadatas[mm]) || void 0 === fm ? void 0 : fm[Tm];
-         return (0, Hm.H)(hm) && "displayName" === Tm ? this.getItemName(mm) : hm
+         const pD = null === (wD = this.Lf.metadatas[DD]) || void 0 === wD ? void 0 : wD[zD];
+         return (0, lD.B)(pD) && "displayName" === zD ? this.getItemName(DD) : pD
```

#### 1252. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9729` → after: `L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9729) · [Before (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9729)

```diff
-         return im ? Math.max(0, null !== (am = this.getItemStat(mm, im, "attackRange")) && void 0 !== am ? am : xm) : xm
+         return gD ? Math.max(0, null !== (KD = this.getItemStat(DD, gD, "attackRange")) && void 0 !== KD ? KD : rD) : rD
```

#### 1253. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9733` → after: `L9733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9733) · [Before (L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9733)

```diff
-         return null !== (Tm = this.getClientPredictedOption(mm, "blockReach")) && void 0 !== Tm ? Tm : Om.f.Fq
+         return null !== (zD = this.getClientPredictedOption(DD, "blockReach")) && void 0 !== zD ? zD : ID.f.aG
```

#### 1254. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9739-L9744` → after: `L9739-L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9739-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9739-L9744) · [Before (L9739-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9739-L9744)

```diff
-           const xm = null === (hm = Kp.p[null === fm || void 0 === fm ? void 0 : fm.name]) || void 0 === hm ? void 0 : hm.harvests,
-             Dm = null === (Am = Kp.p[null === fm || void 0 === fm ? void 0 : fm.name]) || void 0 === Am ? void 0 : Am.level;
-           return !(0, wm.yc)({
-             blockHarvestType: this.Vo.metadatas[Tm].harvestType,
-             blockHarvestLevel: this.Vo.metadatas[Tm].harvestLevel,
-             harvestLevel: null !== (am = this.getItemStat(mm, Tm, "harvestLevel")) && void 0 !== am ? am : 0,
+           const rD = null === (pD = nA.m[null === wD || void 0 === wD ? void 0 : wD.name]) || void 0 === pD ? void 0 : pD.harvests,
+             cD = null === (sD = nA.m[null === wD || void 0 === wD ? void 0 : wD.name]) || void 0 === sD ? void 0 : sD.level;
+           return !(0, LD.Cc)({
+             blockHarvestType: this.Lf.metadatas[zD].harvestType,
+             blockHarvestLevel: this.Lf.metadatas[zD].harvestLevel,
+             harvestLevel: null !== (KD = this.getItemStat(DD, zD, "harvestLevel")) && void 0 !== KD ? KD : 0,
```

#### 1255. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9752` → after: `L9752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9752) · [Before (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9752)

```diff
-         return (0, wm.Rd)(this.getItemStat(mm, Tm, "drops"), this.getItemStat(mm, Tm, "specialToolDrop"), (() => this.getMetaInfo(Tm).rootName), fm)
+         return (0, LD.Vd)(this.getItemStat(DD, zD, "drops"), this.getItemStat(DD, zD, "specialToolDrop"), (() => this.getMetaInfo(zD).rootName), wD)
```

#### 1256. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9756` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9756) · [Before (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9756)

```diff
-         return Tm && null !== (fm = null === (hm = Rm.i[mm]) || void 0 === hm ? void 0 : hm.si) && void 0 !== fm ? fm : 1
+         return zD && null !== (wD = null === (pD = RD.l[DD]) || void 0 === pD ? void 0 : pD.yg) && void 0 !== wD ? wD : 1
```

#### 1257. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9767` → after: `L9767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9767) · [Before (L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9767)

```diff
-         return this.IE.qI.Pmm(mm, "inventory") ? this.IE.qI.QTm(mm).getItemAtSelectedSlot() : null
+         return this.AU.yJ.aDD(DD, "inventory") ? this.AU.yJ.jzD(DD).getItemAtSelectedSlot() : null
```

#### 1258. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9770` → after: `L9770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9770) · [Before (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9770)

```diff
-         return (0, nT.e)(this.IE, mm, !1).length >= 1
+         return (0, Jz.h)(this.AU, DD, !1).length >= 1
```

#### 1259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9774` → after: `L9774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9774) · [Before (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9774)

```diff
-         const hm = this.Vo.metadatas;
+         const pD = this.Lf.metadatas;
```

#### 1260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9780` → after: `L9780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9780) · [Before (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9780)

```diff
-             !(0, Hm.H)(Tm) && (void 0 === Am || Tm > Am) && (Am = Tm);
+             !(0, lD.B)(zD) && (void 0 === sD || zD > sD) && (sD = zD);
```

#### 1261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9786` → after: `L9786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9786) · [Before (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9786)

```diff
-             void 0 === fm && (fm = (0, Fp.f)(this.getItemName(wm), "stoodOnSpeedMultiplier"), this.stoodOnOptions[wm] = fm), void 0 === xm && (xm = this.getPlayerReader(mm));
+             void 0 === wD && (wD = (0, FA.i)(this.getItemName(LD), "stoodOnSpeedMultiplier"), this.stoodOnOptions[LD] = wD), void 0 === rD && (rD = this.getPlayerReader(DD));
```

#### 1262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9789` → after: `L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9789) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9789)

```diff
-           }(0, Hm.H)(Tm) && (this.stoodOnKnown[wm] || (this.stoodOnDefaults[wm] = this.getDefaultItemStat(wm, "stoodOnSpeedMultiplier"), this.stoodOnKnown[wm] = !0), Tm = this.stoodOnDefaults[wm]), !(0, Hm.H)(Tm) && (void 0 === Am || Tm > Am) && (Am = Tm)
+           }(0, lD.B)(zD) && (this.stoodOnKnown[LD] || (this.stoodOnDefaults[LD] = this.getDefaultItemStat(LD, "stoodOnSpeedMultiplier"), this.stoodOnKnown[LD] = !0), zD = this.stoodOnDefaults[LD]), !(0, lD.B)(zD) && (void 0 === sD || zD > sD) && (sD = zD)
```

#### 1263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9791` → after: `L9791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9791) · [Before (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9791)

```diff
-         return null !== (fm = Am) && void 0 !== fm ? fm : 1
+         return null !== (wD = sD) && void 0 !== wD ? wD : 1
```

#### 1264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9794` → after: `L9794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9794) · [Before (L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9794)

```diff
-         const Tm = this.Vo.metadatas,
+         const zD = this.Lf.metadatas,
```

#### 1265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9800` → after: `L9800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9800) · [Before (L9800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9800)

```diff
-           (0, Hm.H)(mm) || (fm.push(Am), hm.push(Number(mm)))
+           (0, lD.B)(DD) || (wD.push(sD), pD.push(Number(DD)))
```

#### 1266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9808)

```diff
-         const hm = this.Vo.metadatas;
+         const pD = this.Lf.metadatas;
```

#### 1267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9813` → after: `L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9813) · [Before (L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9813)

```diff
-             const Tm = (0, Fp.f)(this.getItemName(mm), "stoodOnSpeedMultiplier");
+             const zD = (0, FA.i)(this.getItemName(DD), "stoodOnSpeedMultiplier");
```

#### 1268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9824` → after: `L9824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9824) · [Before (L9824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9824)

```diff
-           if (!(0, Hm.H)(fm))
+           if (!(0, lD.B)(wD))
```

#### 1269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9835` → after: `L9835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9835) · [Before (L9835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9835)

```diff
-         return 1 === Tm ? hm = .5 * fm : 2 === Tm ? hm = .75 * fm : Tm >= this.maxBunnyHops && (hm = fm), 1 + hm
+         return 1 === zD ? pD = .5 * wD : 2 === zD ? pD = .75 * wD : zD >= this.maxBunnyHops && (pD = wD), 1 + pD
```

#### 1270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9848` → after: `L9848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9848) · [Before (L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9848)

```diff
-         return this.IE.pickBlock(Tm, fm, this.getBlockReach(mm))
+         return this.AU.pickBlock(zD, wD, this.getBlockReach(DD))
```

#### 1271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9861-L9862` → after: `L9861-L9862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9861-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9861-L9862) · [Before (L9861-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9861-L9862)

```diff
-         mm.attributes.customAttributes = Object.assign(null !== (hm = mm.attributes.customAttributes) && void 0 !== hm ? hm : {}, {
-           author: this.getEntityName(this.isClient ? this.IE.xH : fm),
+         DD.attributes.customAttributes = Object.assign(null !== (pD = DD.attributes.customAttributes) && void 0 !== pD ? pD : {}, {
+           author: this.getEntityName(this.isClient ? this.AU.vW : wD),
```

#### 1272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9867` → after: `L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9867) · [Before (L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9867)

```diff
-         const am = Rm.i[hm].name,
+         const KD = RD.l[pD].name,
```

#### 1273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9869` → after: `L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9869) · [Before (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9869)

```diff
-         am !== xm && this.zN(mm, Tm, fm, (0, Rm.k)(xm))
+         KD !== rD && this.jT(DD, zD, wD, (0, RD.p)(rD))
```

#### 1274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9873-L9874` → after: `L9873-L9874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9873-L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9873-L9874) · [Before (L9873-L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9873-L9874)

```diff
-         const hm = Rm.i[mm].name.split("|");
-         return `${hm[0]}|meta|${null!==(fm=hm[2])&&void 0!==fm?fm:"rot1"}|${Tm>0?"full":"empty"}`
+         const pD = RD.l[DD].name.split("|");
+         return `${pD[0]}|meta|${null!==(wD=pD[2])&&void 0!==wD?wD:"rot1"}|${zD>0?"full":"empty"}`
```

#### 1275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9877` → after: `L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9877) · [Before (L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9877)

```diff
-         const fm = Rm.i[mm].name,
+         const wD = RD.l[DD].name,
```

#### 1276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9881` → after: `L9881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9881) · [Before (L9881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9881)

```diff
-           return `${0===Tm?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(Am=hm[2])&&void 0!==Am?Am:"rot1"}|books${Tm}`
+           return `${0===zD?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(sD=pD[2])&&void 0!==sD?sD:"rot1"}|books${zD}`
```

#### 1277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9888` → after: `L9888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9888) · [Before (L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9888)

```diff
-         const Am = this.qI.QTm(mm).getItems();
+         const sD = this.yJ.jzD(DD).getItems();
```

#### 1278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9891` → after: `L9891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9891) · [Before (L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9891)

```diff
-           if (wm.w.includes(null === mm || void 0 === mm ? void 0 : mm.name)) {
+           if (LD.r.includes(null === DD || void 0 === DD ? void 0 : DD.name)) {
```

#### 1279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9909` → after: `L9909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9909) · [Before (L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9909)

```diff
-         if (this.qI.Pmm(mm, "itemState")) return "Item";
+         if (this.yJ.aDD(DD, "itemState")) return "Item";
```

#### 1280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9913` → after: `L9913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9913) · [Before (L9913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9913)

```diff
-           return -1 === mm ? Tm : Tm.slice(0, mm)
+           return -1 === DD ? zD : zD.slice(0, DD)
```

#### 1281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9915` → after: `L9915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9915) · [Before (L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9915)

```diff
-         return console.error(new Error(`Tried to get entity type for entity ${mm} but it doesn't exist in networked state`).stack), null
+         return console.error(new Error(`Tried to get entity type for entity ${DD} but it doesn't exist in networked state`).stack), null
```

#### 1282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9921` → after: `L9921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9921) · [Before (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9921)

```diff
-           xm = Vm().copy(this.tempVec2, Om.l[am.pose]);
+           rD = nD().copy(this.tempVec2, ID.n[KD.pose]);
```

#### 1283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9925-L9926` → after: `L9925-L9926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9925-L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9925-L9926) · [Before (L9925-L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9925-L9926)

```diff
-         if (Tm.type === Xp.m.DEFAULT) {
-           const Tm = (0, ep.e)(this.pU(mm), this.getLifeformType(mm));
+         if (zD.type === jA.q.DEFAULT) {
+           const zD = (0, xA.g)(this.UH(DD), this.getLifeformType(DD));
```

#### 1284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9931` → after: `L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9931) · [Before (L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9931)

```diff
-         hm && (im += Math.max(Math.abs(hm[0]), Math.abs(hm[2])), Rm += hm[1]), (im > Np.g || Rm > Np.c) && ((Tm.type !== Xp.m.DEFAULT || hm) && this.onCollisionBoxCapped(), im = Math.min(im, Np.g), Rm = Math.min(Rm, Np.c)), this.updatePositionAndPhysicsImpl(mm, Tm, fm, null !== h … [truncated]
+         pD && (gD += Math.max(Math.abs(pD[0]), Math.abs(pD[2])), RD += pD[1]), (gD > TA.d || RD > TA.b) && ((zD.type !== jA.q.DEFAULT || pD) && this.onCollisionBoxCapped(), gD = Math.min(gD, TA.d), RD = Math.min(RD, TA.b)), this.updatePositionAndPhysicsImpl(DD, zD, wD, null !== p … [truncated]
```

#### 1285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9934-L9935` → after: `L9934-L9935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9934-L9935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9934-L9935) · [Before (L9934-L9935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9934-L9935)

```diff
-         const am = this.IE.qI.uB(mm),
-           xm = null === fm && ((0, Wm.B)(Tm.type) || Tm.type === Xp.m.SLEEPING),
+         const KD = this.AU.yJ.AY(DD),
+           rD = null === wD && ((0, YD.u)(zD.type) || zD.type === jA.q.SLEEPING),
```

#### 1286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9937` → after: `L9937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9937) · [Before (L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9937)

```diff
-         this.IE.qI.mfm(mm, wm.width, wm.height, wm.width)
+         this.AU.yJ.GwD(DD, LD.width, LD.height, LD.width)
```

#### 1287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9941` → after: `L9941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9941) · [Before (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9941)

```diff
-         const fm = this.IE.qI.uB(mm),
+         const wD = this.AU.yJ.AY(DD),
```

#### 1288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/92.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/92.js#L9944)

```diff
-         const Am = null !== (Tm = fm.HE) && void 0 !== Tm ? Tm : this.IE.HE,
+         const sD = null !== (zD = wD.CU) && void 0 !== zD ? zD : this.AU.CU,
```
