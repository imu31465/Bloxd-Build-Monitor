# Changed — Bundle Modifications Report (Part 101 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `101 / 142` (**411** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 100](part-100.md) · [Part 102 →](part-102.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3925 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 896. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7437-L7441` → after: `L7273-L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7273-L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7273-L7277) · [Before (L7437-L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7437-L7441)

```diff
-         this.HP = pp, this.system = ip, this.onFree = op, this.box = void 0, this.points = null, this.boxAt = new sp.Zy, this.pointsAt = new sp.Zy, this.lifeMs = void 0, this.TA = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
-         const Lp = null !== (Ip = cp.dir1) && void 0 !== Ip ? Ip : oY,
-           Yp = null !== (Sp = cp.dir2) && void 0 !== Sp ? Sp : oY,
-           Dp = null !== (xp = Op.half) && void 0 !== xp ? xp : [0, 0, 0];
-         this.box = ip.createBoxEmitter(new sp.Zy(Lp[0], Lp[1], Lp[2]), new sp.Zy(Yp[0], Yp[1], Yp[2]), new sp.Zy(-Dp[0], -Dp[1], -Dp[2]), new sp.Zy(Dp[0], Dp[1], Dp[2])), this.boxAt.set(Op.pos[0], Op.pos[1], Op.pos[2]), ip.emitter = this.boxAt, ip.manualEmitCount = 0, ip.onAnimat … [truncated]
+         this.Rl = TT, this.system = UT, this.onFree = zT, this.box = void 0, this.points = null, this.boxAt = new DT.JB, this.pointsAt = new DT.JB, this.lifeMs = void 0, this.fl = void 0, this.stopTimer = null, this.stopAt = 0, this.running = !1, this.idle = !0, this.stopped = !1 … [truncated]
+         const HT = null !== (MT = mT.dir1) && void 0 !== MT ? MT : Wk,
+           kT = null !== (gT = mT.dir2) && void 0 !== gT ? gT : Wk,
+           jT = null !== (nT = WT.half) && void 0 !== nT ? nT : [0, 0, 0];
+         this.box = UT.createBoxEmitter(new DT.JB(HT[0], HT[1], HT[2]), new DT.JB(kT[0], kT[1], kT[2]), new DT.JB(-jT[0], -jT[1], -jT[2]), new DT.JB(jT[0], jT[1], jT[2])), this.boxAt.set(WT.pos[0], WT.pos[1], WT.pos[2]), UT.emitter = this.boxAt, UT.manualEmitCount = 0, UT.onAnimat … [truncated]
```

#### 897. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7445` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7281) · [Before (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7445)

```diff
-         }, (0, Qp.C)(pp, ip), this.setEmitRate(cp.emitRate)
+         }, (0, XT.x)(TT, UT), this.setEmitRate(mT.emitRate)
```

#### 898. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7448` → after: `L7284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7284) · [Before (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7448)

```diff
-         this.stopped || (this.boxAt.set(pp[0], pp[1], pp[2]), ip && (this.box.minEmitBox.set(-ip[0], -ip[1], -ip[2]), this.box.maxEmitBox.set(ip[0], ip[1], ip[2])), (0, Qp.C)(this.HP, this.system))
+         this.stopped || (this.boxAt.set(TT[0], TT[1], TT[2]), UT && (this.box.minEmitBox.set(-UT[0], -UT[1], -UT[2]), this.box.maxEmitBox.set(UT[0], UT[1], UT[2])), (0, XT.x)(this.Rl, this.system))
```

#### 899. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7451` → after: `L7287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7287) · [Before (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7451)

```diff
-         this.stopped || (this.system.emitRate = pp, pp > 0 && (this.useBox(), this.system.manualEmitCount = -1, this.clearStopTimer(), this.start(), (0, Qp.C)(this.HP, this.system)))
+         this.stopped || (this.system.emitRate = TT, TT > 0 && (this.useBox(), this.system.manualEmitCount = -1, this.clearStopTimer(), this.start(), (0, XT.x)(this.Rl, this.system)))
```

#### 900. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7458` → after: `L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7294) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7458)

```diff
-         const Op = this.points ??= new OY(this.TA);
+         const WT = this.points ??= new mk(this.fl);
```

#### 901. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7463` → after: `L7299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7299) · [Before (L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7463)

```diff
-           xp = Math.min(cp, Op.TA - Op.length);
+           nT = Math.min(mT, WT.fl - WT.length);
```

#### 902. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7486` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7322) · [Before (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7486)

```diff
-         (0, Qp.C)(this.HP, this.system), this.start(), this.system.emitRate > 0 || this.stopAfterLifetime()
+         (0, XT.x)(this.Rl, this.system), this.start(), this.system.emitRate > 0 || this.stopAfterLifetime()
```

#### 903. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7505` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7341) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7505)

```diff
-         this.HP = pp, this.live = new Set, this.textures = new Map
+         this.Rl = TT, this.live = new Set, this.textures = new Map
```

#### 904. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7508` → after: `L7344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7344) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7508)

```diff
-         return this.HP.WU.Gl().particlesEnabled
+         return this.Rl.GB.KF().particlesEnabled
```

#### 905. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7513` → after: `L7349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7349) · [Before (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7513)

```diff
-           Ip = this.HP.WU.eJ(`game|${op}`, pp.TA);
+           MT = this.Rl.GB.wV(`game|${zT}`, TT.fl);
```

#### 906. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7515-L7518` → after: `L7351-L7354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7351-L7354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7351-L7354) · [Before (L7515-L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7515-L7518)

```diff
-         const Sp = null !== (Op = pp.gravity) && void 0 !== Op ? Op : [0, 0, 0];
-         Ip.gravity = new sp.Zy(Sp[0], Sp[1], Sp[2]);
-         for (const Lp of pp.colorGradients) Ip.addColorGradient(Lp.timeFraction, (0, Qp.j)(Lp.minColor), Lp.maxColor ? (0, Qp.j)(Lp.maxColor) : void 0);
-         const xp = new IY(this.HP, Ip, pp, ip, (pp => {
+         const gT = null !== (WT = TT.gravity) && void 0 !== WT ? WT : [0, 0, 0];
+         MT.gravity = new DT.JB(gT[0], gT[1], gT[2]);
+         for (const HT of TT.colorGradients) MT.addColorGradient(HT.timeFraction, (0, XT.k)(HT.minColor), HT.maxColor ? (0, XT.k)(HT.maxColor) : void 0);
+         const nT = new zk(this.Rl, MT, TT, UT, (TT => {
```

#### 907. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7524` → after: `L7360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7360) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7524)

```diff
-         (0, lp.m)(this.HP, pp)
+         (0, yT.m)(this.Rl, TT)
```

#### 908. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7527` → after: `L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7363) · [Before (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7527)

```diff
-         "critical" === pp && (0, lp.l)(this.HP, lp.q, [ip[0], ip[1], ip[2]], cp)
+         "critical" === TT && (0, yT.i)(this.Rl, yT.p, [UT[0], UT[1], UT[2]], mT)
```

#### 909. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7532` → after: `L7368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7368) · [Before (L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7532)

```diff
-         for (const pp of this.textures.values())(0, dp.C)(pp);
+         for (const TT of this.textures.values())(0, iT.I)(TT);
```

#### 910. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7536` → after: `L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7372) · [Before (L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7536)

```diff
-         const cp = "string" === typeof pp ? `${pp}|${ip?"mips":"flat"}` : `|${pp.kind}`;
+         const mT = "string" === typeof TT ? `${TT}|${UT?"mips":"flat"}` : `|${TT.kind}`;
```

#### 911. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7539-L7540` → after: `L7375-L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7375-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7375-L7376) · [Before (L7539-L7540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7539-L7540)

```diff
-           const op = this.HP.WU.Gl();
-           Op = "string" === typeof pp ? (0, dp.s)(op, (0, Up.f)(pp), ip) : function(pp) {
+           const zT = this.Rl.GB.KF();
+           WT = "string" === typeof TT ? (0, iT.w)(zT, (0, ZT.f)(TT), UT) : function(TT) {
```

#### 912. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7546` → after: `L7382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7382) · [Before (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7546)

```diff
-                 samplingMode: dp.g.nearest,
+                 samplingMode: iT.k.nearest,
```

#### 913. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7549` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7385) · [Before (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7549)

```diff
-               Op = (0, jp.k)(pp, "smokePuff", cp),
+               WT = (0, OT.i)(TT, "smokePuff", mT),
```

#### 914. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7553` → after: `L7389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7389) · [Before (L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7553)

```diff
-             })), (0, jp.R)(Op, !0, !1), (0, dp.V)(Op), Op
+             })), (0, OT.X)(WT, !0, !1), (0, iT.V)(WT), WT
```

#### 915. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7562-L7563` → after: `L7398-L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7398-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7398-L7399) · [Before (L7562-L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7562-L7563)

```diff
-         this.HP = pp, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = pp => {
-           this.offset = (this.offset + Math.min(pp, 250) / 1e3 * 1.2 * xY) % 1, (0, jp.I)(this.material, -this.offset)
+         this.Rl = TT, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = TT => {
+           this.offset = (this.offset + Math.min(TT, 250) / 1e3 * 1.2 * gk) % 1, (0, OT.K)(this.material, -this.offset)
```

#### 916. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7568-L7569` → after: `L7404-L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7404-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7404-L7405) · [Before (L7568-L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7568-L7569)

```diff
-         const ip = this.HP.WU,
-           cp = (0, Hp.o)(ip, "routeChevrons", function(pp) {
+         const UT = this.Rl.GB,
+           mT = (0, qT.m)(UT, "routeChevrons", function(TT) {
```

#### 917. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7589` → after: `L7425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7425) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7589)

```diff
-         cp.material = this.materialFor(pp.colour, pp.alpha), cp.Ow = !1, cp.receiveShadows = !1, cp.Gy = !0, ip.Iw(cp, !1, pp.cells[0].pos), this.node = cp, this.HP.on("afterRender", this.slide)
+         mT.material = this.materialFor(TT.colour, TT.alpha), mT.QZ = !1, mT.receiveShadows = !1, mT.YB = !0, UT.FZ(mT, !1, TT.cells[0].pos), this.node = mT, this.Rl.on("afterRender", this.slide)
```

#### 918. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7596` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7432) · [Before (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7596)

```diff
-         this.node && (this.HP.off("afterRender", this.slide), this.node.dispose(), this.node = null)
+         this.node && (this.Rl.off("afterRender", this.slide), this.node.dispose(), this.node = null)
```

#### 919. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7599` → after: `L7435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7435) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7599)

```diff
-         const cp = `${pp} ${ip}`;
+         const mT = `${TT} ${UT}`;
```

#### 920. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7601` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7437) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7601)

```diff
-         this.material && this.look === cp || (null === (Op = this.material) || void 0 === Op || Op.dispose(!0, !0), this.material = CL(this.HP.WU.Gl(), pp, ip), this.look = cp);
+         this.material && this.look === mT || (null === (WT = this.material) || void 0 === WT || WT.dispose(!0, !0), this.material = wH(this.Rl.GB.KF(), TT, UT), this.look = mT);
```

#### 921. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7605` → after: `L7441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7441) · [Before (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7605)

```diff
-     var YY = cp(39310);
+     var Hk = mT(39271);
```

#### 922. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7608-L7609` → after: `L7444-L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7444-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7444-L7445) · [Before (L7608-L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7608-L7609)

```diff
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new YY.b((() => xL.c.get("forcedCameraDirectionTransitionMs")), (pp => {
-           xL.c.apply(pp)
+         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new Hk.c((() => gH.d.get("forcedCameraDirectionTransitionMs")), (TT => {
+           gH.d.apply(TT)
```

#### 923. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7613` → after: `L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7449) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7613)

```diff
-         return Boolean(Up.d.getModelOverride(pp))
+         return Boolean(ZT.e.getModelOverride(TT))
```

#### 924. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7645-L7649` → after: `L7481-L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7481-L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7481-L7485) · [Before (L7645-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7645-L7649)

```diff
-     var AY = cp(1349),
-       PY = cp(4532),
-       WY = cp(39177),
-       yY = cp(1827),
-       UY = cp(1803);
+     var jk = mT(1429),
+       lk = mT(4556),
+       Lk = mT(39129),
+       pk = mT(1932),
+       Bk = mT(1905);
```

#### 925. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7773` → after: `L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7609) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7773)

```diff
-         super(`${wY.name} has been mutated during iteration`)
+         super(`${Zk.name} has been mutated during iteration`)
```

#### 926. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7785` → after: `L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7621) · [Before (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7785)

```diff
-           Sp = null !== (ip = null === Ip || void 0 === Ip || null === (cp = Ip.persisted) || void 0 === cp || null === (Op = cp.shared) || void 0 === Op ? void 0 : Op.passkeyLastUpdated) && void 0 !== ip ? ip : 0;
+           gT = null !== (UT = null === MT || void 0 === MT || null === (mT = MT.persisted) || void 0 === mT || null === (WT = mT.shared) || void 0 === WT ? void 0 : WT.passkeyLastUpdated) && void 0 !== UT ? UT : 0;
```

#### 927. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7795-L7802` → after: `L7631-L7638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7631-L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7631-L7638) · [Before (L7795-L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7795-L7802)

```diff
-     var kY = cp(39324),
-       mY = cp(8861),
-       RY = cp(39339),
-       qY = cp(4511),
-       MY = cp(4589),
-       CY = cp(1334),
-       EY = cp(39348),
-       XY = cp(4520);
+     var ek = mT(39278),
+       Yk = mT(8859),
+       Jk = mT(39287),
+       xk = mT(4531),
+       dk = mT(4608),
+       wk = mT(1416),
+       tk = mT(39289),
+       ak = mT(4546);
```

#### 928. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7805-L7807` → after: `L7641-L7643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7641-L7643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7641-L7643) · [Before (L7805-L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7805-L7807)

```diff
-         this.HP = pp, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.HP.camera.eZ = (pp, ip) => {
-           const cp = this.HP.camera.wZ;
-           this.HP.Yk.Acp(this.HP.NJ).cameraZoomChanged(ip, pp), 0 !== cp && 0 === this.HP.camera.wZ && this.disableFrontFacing()
+         this.Rl = TT, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.Rl.camera.TE = (TT, UT) => {
+           const mT = this.Rl.camera.hN;
+           this.Rl.pY.RUT(this.Rl.VV).cameraZoomChanged(UT, TT), 0 !== mT && 0 === this.Rl.camera.hN && this.disableFrontFacing()
```

#### 929. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7809` → after: `L7645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7645) · [Before (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7809)

```diff
-         const ip = wp.m.subscribe("SwapCameraZoom", (() => {
+         const UT = cT.j.subscribe("SwapCameraZoom", (() => {
```

#### 930. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7812` → after: `L7648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7648) · [Before (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7812)

```diff
-           cp = xL.c.subscribe("playerZoom", (pp => {
+           mT = gH.d.subscribe("playerZoom", (TT => {
```

#### 931. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7816` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7652) · [Before (L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7816)

```diff
-           this.endTemporaryThirdPerson(), this.HP.camera.uZ.reset(), wp.m.unsubscribe(ip), cp()
+           this.endTemporaryThirdPerson(), this.Rl.camera.WE.reset(), cT.j.unsubscribe(UT), mT()
```

#### 932. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7824` → after: `L7660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7660) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7824)

```diff
-         if (pp) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.HP.camera.wZ, void(this.locked = !0);
+         if (TT) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.Rl.camera.hN, void(this.locked = !0);
```

#### 933. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7835` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7671) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7835)

```diff
-         return this.locked ? null !== (pp = null === (ip = this.deferredZoom) || void 0 === ip ? void 0 : ip.zoom) && void 0 !== pp ? pp : this.lockedZoom : this.HP.camera.wZ
+         return this.locked ? null !== (TT = null === (UT = this.deferredZoom) || void 0 === UT ? void 0 : UT.zoom) && void 0 !== TT ? TT : this.lockedZoom : this.Rl.camera.hN
```

#### 934. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7841-L7842` → after: `L7677-L7678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7677-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7677-L7678) · [Before (L7841-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7841-L7842)

```diff
-             const pp = this.HP.Yk.getState(this.HP.NJ, "cameraShake").frontFacing;
-             if (!(0 === this.HP.camera.wZ && !pp)) return;
+             const TT = this.Rl.pY.getState(this.Rl.VV, "cameraShake").frontFacing;
+             if (!(0 === this.Rl.camera.hN && !TT)) return;
```

#### 935. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7854` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7690) · [Before (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7854)

```diff
-         this.HP.Tu.canUseZoomKey || wp.m.GA("showBottomMessage", {
+         this.Rl.kY.canUseZoomKey || cT.j.EZ("showBottomMessage", {
```

#### 936. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7868` → after: `L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7704) · [Before (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7868)

```diff
-         const ip = pp - this.HP.camera.wZ;
+         const UT = TT - this.Rl.camera.hN;
```

#### 937. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7876-L7877` → after: `L7712-L7713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7712-L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7712-L7713) · [Before (L7876-L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7876-L7877)

```diff
-         const ip = this.HP.camera.wZ;
-         pp < 0 ? this.HP.camera.wZ = 0 : pp > (this.HP.Tu.maxPlayerZoom || 10) ? this.HP.camera.wZ = this.HP.Tu.maxPlayerZoom || 10 : this.HP.camera.wZ = pp, this.onCameraZoomSet(ip, pp)
+         const UT = this.Rl.camera.hN;
+         TT < 0 ? this.Rl.camera.hN = 0 : TT > (this.Rl.kY.maxPlayerZoom || 10) ? this.Rl.camera.hN = this.Rl.kY.maxPlayerZoom || 10 : this.Rl.camera.hN = TT, this.onCameraZoomSet(UT, TT)
```

#### 938. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7880` → after: `L7716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7716) · [Before (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7880)

```diff
-         this.HP.Yk.Acp(this.HP.NJ).shouldChangeCameraZoom(pp) && (0 === this.HP.camera.wZ && 1 === pp ? pp++ : 2 === this.HP.camera.wZ && -1 === pp && pp--, this.setCameraZoomNoValidation(this.HP.camera.wZ + pp))
+         this.Rl.pY.RUT(this.Rl.VV).shouldChangeCameraZoom(TT) && (0 === this.Rl.camera.hN && 1 === TT ? TT++ : 2 === this.Rl.camera.hN && -1 === TT && TT--, this.setCameraZoomNoValidation(this.Rl.camera.hN + TT))
```

#### 939. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7883` → after: `L7719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7719) · [Before (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7883)

```diff
-         this.locked || (this.HP.Yk.getState(this.HP.NJ, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.HP.camera.wZ ? this.setCameraZoom(this.HP.Tu.zoomOutDistance || 3) : (this.setCameraZoom(this.HP.Tu.zoomOutDistance || 3), 0 !== th … [truncated]
+         this.locked || (this.Rl.pY.getState(this.Rl.VV, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.Rl.camera.hN ? this.setCameraZoom(this.Rl.kY.zoomOutDistance || 3) : (this.setCameraZoom(this.Rl.kY.zoomOutDistance || 3), 0 !== th … [truncated]
```

#### 940. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7886` → after: `L7722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7722) · [Before (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7886)

```diff
-         this.HP.Yk.getState(this.HP.NJ, "cameraShake").frontFacing = !1, this.HP.camera.GL[0] = 0, this.HP.camera.GL[1] = 0, this.HP.camera.GL[2] = 0
+         this.Rl.pY.getState(this.Rl.VV, "cameraShake").frontFacing = !1, this.Rl.camera.GZ[0] = 0, this.Rl.camera.GZ[1] = 0, this.Rl.camera.GZ[2] = 0
```

#### 941. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7889` → after: `L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7725) · [Before (L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7889)

```diff
-         this.HP.Yk.getState(this.HP.NJ, "cameraShake").frontFacing = !0, this.HP.camera.GL[0] = Math.PI, this.HP.camera.GL[1] = 0, this.HP.camera.GL[2] = Math.PI
+         this.Rl.pY.getState(this.Rl.VV, "cameraShake").frontFacing = !0, this.Rl.camera.GZ[0] = Math.PI, this.Rl.camera.GZ[1] = 0, this.Rl.camera.GZ[2] = Math.PI
```

#### 942. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7892` → after: `L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7728) · [Before (L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7892)

```diff
-         this.HP.Yk.Acp(this.HP.NJ).cameraZoomSet(pp, ip), wp.m.GA("cameraZoomSet", this.HP.camera.wZ), 0 === this.HP.camera.wZ && this.disableFrontFacing()
+         this.Rl.pY.RUT(this.Rl.VV).cameraZoomSet(TT, UT), cT.j.EZ("cameraZoomSet", this.Rl.camera.hN), 0 === this.Rl.camera.hN && this.disableFrontFacing()
```

#### 943. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7895-L7896` → after: `L7731-L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7731-L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7731-L7732) · [Before (L7895-L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7895-L7896)

```diff
-     var QY = cp(36764),
-       JY = cp(39356);
+     var Xk = mT(36658),
+       Ik = mT(39293);
```

#### 944. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7906` → after: `L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7742) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7906)

```diff
-         this.HP = pp, this.pointerLockWrapper = ip, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = pp => {
+         this.Rl = TT, this.pointerLockWrapper = UT, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = TT => {
```

#### 945. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7910` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7746) · [Before (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7910)

```diff
-           "mouse" !== pp.pointerType ? "pen" !== pp.pointerType && !hY(pp) || !this.HP.container.element.contains(pp.target) || (0, QY.e)(pp.target) || null === (ip = this.tapListener) || void 0 === ip || ip.call(this, pp.clientX, pp.clientY) : this.followPoint(pp.clientX, pp.cli … [truncated]
+           "mouse" !== TT.pointerType ? "pen" !== TT.pointerType && !uk(TT) || !this.Rl.container.element.contains(TT.target) || (0, Xk.g)(TT.target) || null === (UT = this.tapListener) || void 0 === UT || UT.call(this, TT.clientX, TT.clientY) : this.followPoint(TT.clientX, TT.cli … [truncated]
```

#### 946. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7914` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7750) · [Before (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7914)

```diff
-         pp !== this.active && (this.active = pp, this.HP.container.uB(!pp), pp ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(fY)) : (window.removeEventListener(" … [truncated]
+         TT !== this.active && (this.active = TT, this.Rl.container.mC(!TT), TT ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(Pk)) : (window.removeEventListener(" … [truncated]
```

#### 947. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7926` → after: `L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7762) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7926)

```diff
-         const Op = this.HP.container.canvas.getBoundingClientRect();
+         const WT = this.Rl.container.canvas.getBoundingClientRect();
```

#### 948. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7940` → after: `L7776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7776) · [Before (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7940)

```diff
-       return "mouse" === pp.pointerType || !TS.c.get("isTouchScreen")
+       return "mouse" === TT.pointerType || !Ig.b.get("isTouchScreen")
```

#### 949. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7942-L7946` → after: `L7778-L7782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7778-L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7778-L7782) · [Before (L7942-L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7942-L7946)

```diff
-     var aY = cp(6600),
-       nY = cp(37634),
-       FY = cp(2012),
-       gY = cp(39368),
-       GY = cp(39261);
+     var Ck = mT(6540),
+       rk = mT(37517),
+       Kk = mT(2104),
+       Sk = mT(39306),
+       Gk = mT(39233);
```

#### 950. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7949` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7785) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7949)

```diff
-         this.HP = pp, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
+         this.Rl = TT, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
```

#### 951. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7959-L7960` → after: `L7795-L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7795-L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7795-L7796) · [Before (L7959-L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7959-L7960)

```diff
-         }, this.flyAccel = new aY.b, this.flyVertMoveDir = 0, this.toggles = new Hx.c((pp => {
-           this.canUsefreeCam = pp, this.enabled && !this.canUsefreeCam && this.eC(!1), wp.m.GA("freeCameraChanged")
+         }, this.flyAccel = new Ck.c, this.flyVertMoveDir = 0, this.toggles = new cn.e((TT => {
+           this.canUsefreeCam = TT, this.enabled && !this.canUsefreeCam && this.Qy(!1), cT.j.EZ("freeCameraChanged")
```

#### 952. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7962` → after: `L7798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7798) · [Before (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7962)

```diff
-         const ip = wp.m.subscribe("userContextUpdated", (pp => {
+         const UT = cT.j.subscribe("userContextUpdated", (TT => {
```

#### 953. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7966` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7802) · [Before (L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7966)

```diff
-           wp.m.unsubscribe(ip), this.eC(!1);
+           cT.j.unsubscribe(UT), this.Qy(!1);
```

#### 954. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7983` → after: `L7819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7819) · [Before (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7983)

```diff
-         this.eC(!this.enabled)
+         this.Qy(!this.enabled)
```

#### 955. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7987` → after: `L7823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7823) · [Before (L7987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7987)

```diff
-         return this.panelMovesFly() || this.enabled && !(null === (pp = this.HP.bloxd.client) || void 0 === pp || !pp.isReplayMode())
+         return this.panelMovesFly() || this.enabled && !(null === (TT = this.Rl.bloxd.client) || void 0 === TT || !TT.isReplayMode())
```

#### 956. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7993` → after: `L7829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7829) · [Before (L7993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7993)

```diff
-         pp ? (this.eC(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, wp.m.GA("freeCameraChanged"))) : this.movesFlyIt && this.eC(!1)
+         TT ? (this.Qy(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, cT.j.EZ("freeCameraChanged"))) : this.movesFlyIt && this.Qy(!1)
```

#### 957. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L7996` → after: `L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7832) · [Before (L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L7996)

```diff
-         pp !== this.blocked && (this.blocked = pp, pp && this.eC(!1), wp.m.GA("freeCameraChanged"))
+         TT !== this.blocked && (this.blocked = TT, TT && this.Qy(!1), cT.j.EZ("freeCameraChanged"))
```

#### 958. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8007` → after: `L7843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7843) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8007)

```diff
-           if (pp === Op) return !(0, GY.c)() && (this.inputs[Op] = cp, cp);
+           if (TT === WT) return !(0, Gk.d)() && (this.inputs[WT] = mT, mT);
```

#### 959. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8014` → after: `L7850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7850) · [Before (L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8014)

```diff
-         for (const Op of FY.i) {
+         for (const WT of Kk.l) {
```

#### 960. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8016` → after: `L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7852) · [Before (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8016)

```diff
-           if (null !== (cp = FY.t[Op]) && void 0 !== cp && cp.includes(ip)) return !0
+           if (null !== (mT = Kk.v[WT]) && void 0 !== mT && mT.includes(UT)) return !0
```

#### 961. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8021` → after: `L7857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7857) · [Before (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8021)

```diff
-         (nY.c.isCameraDetachedFromPlayer(this.HP) || nY.c.detachCamera(this.HP)) && (this.tickHandler = pp => {
+         (rk.d.isCameraDetachedFromPlayer(this.Rl) || rk.d.detachCamera(this.Rl)) && (this.tickHandler = TT => {
```

#### 962. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8023` → after: `L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7859) · [Before (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8023)

```diff
-         }, this.HP.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
+         }, this.Rl.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
```

#### 963. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8027-L8029` → after: `L7863-L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7863-L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7863-L7865) · [Before (L8027-L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8027-L8029)

```diff
-         this.tickHandler && (this.HP.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !nY.c.isCameraDetachedFromPlayer(this.HP) || null !== (pp = this.HP.bloxd.client) && void 0 !== pp && pp.isReplayMode() || nY.c.reattachCamera(this.HP), this.clearMovementInpu … [truncated]
-         const cp = null !== (ip = this.HP.bloxd.client) && void 0 !== ip && ip.isReplayMode() ? void 0 : this.HP.Yk.wcp();
-         for (const Op of ["forward", "backward", "left", "right"]) cp && this.HP.inputs.state[Op] && (cp[Op] = !0);
+         this.tickHandler && (this.Rl.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !rk.d.isCameraDetachedFromPlayer(this.Rl) || null !== (TT = this.Rl.bloxd.client) && void 0 !== TT && TT.isReplayMode() || rk.d.reattachCamera(this.Rl), this.clearMovementInpu … [truncated]
+         const mT = null !== (UT = this.Rl.bloxd.client) && void 0 !== UT && UT.isReplayMode() ? void 0 : this.Rl.pY.zmT();
+         for (const WT of ["forward", "backward", "left", "right"]) mT && this.Rl.inputs.state[WT] && (mT[WT] = !0);
```

#### 964. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8056` → after: `L7892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7892) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8056)

```diff
-         if ((null === (ip = this.HP.bloxd.client) || void 0 === ip || !ip.isReplayMode()) && !this.HP.Yk.Ycp(this.HP.NJ).isAlive) return void this.eC(!1);
+         if ((null === (UT = this.Rl.bloxd.client) || void 0 === UT || !UT.isReplayMode()) && !this.Rl.pY.oUT(this.Rl.VV).isAlive) return void this.Qy(!1);
```

#### 965. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8059-L8060` → after: `L7895-L7896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7895-L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7895-L7896) · [Before (L8059-L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8059-L8060)

```diff
-           op = Op * this.HP.Bl,
-           Ip = this.HP.camera.heading,
+           zT = WT * this.Rl.sF,
+           MT = this.Rl.camera.heading,
```

#### 966. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8077` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7913) · [Before (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8077)

```diff
-         const wp = (0, aY.i)(this.flyAccel, Wp, yp, Up, op);
+         const cT = (0, Ck.h)(this.flyAccel, pT, BT, ZT, zT);
```

#### 967. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8079` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7915) · [Before (L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8079)

```diff
-         const vp = 12 * (1 + this.flyAccel.bo);
+         const vT = 12 * (1 + this.flyAccel.qz);
```

#### 968. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8083` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7919) · [Before (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8083)

```diff
-           const pp = (Pp > 1 ? 1 / Pp : 1) * vp * Op;
+           const TT = (LT > 1 ? 1 / LT : 1) * vT * WT;
```

#### 969. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8088-L8089` → after: `L7924-L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7924-L7925) · [Before (L8088-L8089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8088-L8089)

```diff
-         const ep = this.HP.Yk.sH(this.HP.camera.Vr);
-         this.HP.Yk.setPosition(this.HP.camera.Vr, [ep[0] + tp, ep[1] + dp, ep[2] + Hp])
+         const bT = this.Rl.pY.Aq(this.Rl.camera.yN);
+         this.Rl.pY.setPosition(this.Rl.camera.yN, [bT[0] + fT, bT[1] + iT, bT[2] + qT])
```

#### 970. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8093` → after: `L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7929) · [Before (L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8093)

```diff
-         wp.m.GA("freeCameraChanged"), (0, gY.b)(pp), null !== (ip = this.HP.bloxd.client) && void 0 !== ip && ip.isReplayMode() && wp.m.GA("replayViewer|uiRefresh")
+         cT.j.EZ("freeCameraChanged"), (0, Sk.e)(TT), null !== (UT = this.Rl.bloxd.client) && void 0 !== UT && UT.isReplayMode() && cT.j.EZ("replayViewer|uiRefresh")
```

#### 971. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8096-L8102` → after: `L7932-L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7932-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7932-L7938) · [Before (L8096-L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8096-L8102)

```diff
-     var ZY = cp(1927),
-       zY = cp(39375),
-       sY = cp(39362),
-       KY = cp(39385),
-       VY = cp(37849),
-       pD = cp(39383),
-       iD = cp(39125);
+     var Ek = mT(2014),
+       hk = mT(39313),
+       Dk = mT(39300),
+       Ak = mT(39331),
+       Rk = mT(37753),
+       Tj = mT(39325),
+       Uj = mT(39069);
```

#### 972. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8106-L8108` → after: `L7942-L7944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7942-L7944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7942-L7944) · [Before (L8106-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8106-L8108)

```diff
-       op.heading = ip + pp.GL[1] + (Op ? pp.cameraRotationOffset[1] : 0);
-       const Ip = cp + pp.GL[0] + (Op ? pp.cameraRotationOffset[0] : 0);
-       (0, sY.o)((0, sY.i)(op.heading, Ip, cD), op)
+       zT.heading = UT + TT.GZ[1] + (WT ? TT.cameraRotationOffset[1] : 0);
+       const MT = mT + TT.GZ[0] + (WT ? TT.cameraRotationOffset[0] : 0);
+       (0, Dk.l)((0, Dk.g)(zT.heading, MT, mj), zT)
```

#### 973. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8114` → after: `L7950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7950) · [Before (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8114)

```diff
-       tp().set(oD, op[0], op[1], 0), tp().ti(oD, oD, tp().ZERO, pp.AO + pp.GL[2] + Sp[2]), tp().ci(oD, oD, tp().ZERO, cp + pp.GL[0] + Sp[0]), tp().wi(oD, oD, tp().ZERO, ip + pp.GL[1] + Sp[1]), tp().add(Ip, Ip, oD)
+       fT().set(zj, zT[0], zT[1], 0), fT().GL(zj, zj, fT().ZERO, TT.ep + TT.GZ[2] + gT[2]), fT().ek(zj, zj, fT().ZERO, mT + TT.GZ[0] + gT[0]), fT().cj(zj, zj, fT().ZERO, UT + TT.GZ[1] + gT[1]), fT().add(MT, MT, zj)
```

#### 974. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8120` → after: `L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7956) · [Before (L8120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8120)

```diff
-       return nY.c.copyReattachedTargetPosition(pp, SD) ? pp.camera.oV(SD, ip, cp, nY.c.getSavedZoomDistance(pp), Op) : null
+       return rk.d.copyReattachedTargetPosition(TT, gj) ? TT.camera.rD(gj, UT, mT, rk.d.getSavedZoomDistance(TT), WT) : null
```

#### 975. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8124` → after: `L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7960) · [Before (L8124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8124)

```diff
-       return (0, pD.e)(pp) ? (0, fp.b)(pp) : null
+       return (0, Tj.e)(TT) ? (0, PT.e)(TT) : null
```

#### 976. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8128` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7964) · [Before (L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8128)

```diff
-         this.HP = pp, this.view = ip, this.pickEntity = cp, this.defaultPose = (0, JY.i)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (pp, ip, cp) => this.pickDistance(pp, ip, cp, this.HP.mpp), t … [truncated]
+         this.Rl = TT, this.view = UT, this.pickEntity = mT, this.defaultPose = (0, Ik.m)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (TT, UT, mT) => this.pickDistance(TT, UT, mT, this.Rl.JTT), t … [truncated]
```

#### 977. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8131-L8132` → after: `L7967-L7968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7967-L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7967-L7968) · [Before (L8131-L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8131-L8132)

```diff
-           return null !== (Op = this.pickEntity(pp, ip, null !== op && void 0 !== op ? op : cp)) && void 0 !== Op ? Op : op
-         }, this.isUntargeted = pp => !this.HP.mpp(pp)
+           return null !== (WT = this.pickEntity(TT, UT, null !== zT && void 0 !== zT ? zT : mT)) && void 0 !== WT ? WT : zT
+         }, this.isUntargeted = TT => !this.Rl.JTT(TT)
```

#### 978. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8135` → after: `L7971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7971) · [Before (L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8135)

```diff
-         return this.HP.Fpp
+         return this.Rl.rTT
```

#### 979. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8139` → after: `L7975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7975) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8139)

```diff
-         return null !== ip && this.HP.Yk.xZ(ip) ? (0, zx.getDrawnPosition)(this.HP, ip, this.feet) : null
+         return null !== UT && this.Rl.pY.FN(UT) ? (0, En.getDrawnPosition)(this.Rl, UT, this.feet) : null
```

#### 980. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8144-L8145` → after: `L7980-L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7980-L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7980-L7981) · [Before (L8144-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8144-L8145)

```diff
-           return pp.Yk.xZ(ip) ? ((0, zx.getDrawnPosition)(pp, ip, cp), null !== pp.bloxd.getLifeformType(ip) && (cp[1] += pp.bloxd.getLifeformEyeHeight(ip)), cp) : null
-         }(this.HP, ip, this.aim)
+           return TT.pY.FN(UT) ? ((0, En.getDrawnPosition)(TT, UT, mT), null !== TT.bloxd.getLifeformType(UT) && (mT[1] += TT.bloxd.getLifeformEyeHeight(UT)), mT) : null
+         }(this.Rl, UT, this.aim)
```

#### 981. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8150` → after: `L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7986) · [Before (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8150)

```diff
-         return null === Ip ? null : Ip === this.HP.NJ ? this.view.heading : null !== (ip = null !== (cp = null === (Op = (0, Fx.getCaughtUpMeshRotation)(this.HP, Ip)) || void 0 === Op ? void 0 : Op.renderRotation[1]) && void 0 !== cp ? cp : null === (op = this.HP.Yk.Jip(Ip)) || v … [truncated]
+         return null === MT ? null : MT === this.Rl.VV ? this.view.heading : null !== (UT = null !== (mT = null === (WT = (0, rn.getCaughtUpMeshRotation)(this.Rl, MT)) || void 0 === WT ? void 0 : WT.renderRotation[1]) && void 0 !== mT ? mT : null === (zT = this.Rl.pY.wUT(MT)) || v … [truncated]
```

#### 982. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8154-L8156` → after: `L7990-L7992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R7990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L7990-L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L7990-L7992) · [Before (L8154-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8154-L8156)

```diff
-           HP: Op
-         } = this, op = Op.camera.xV(Op.uip(pp, null, this.localFrom), ip, cp);
-         return op < cp - 1e-6 ? op : null
+           Rl: WT
+         } = this, zT = WT.camera.KD(WT.qUT(TT, null, this.localFrom), UT, mT);
+         return zT < mT - 1e-6 ? zT : null
```

#### 983. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8169` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8005) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8169)

```diff
-         const op = this.HP.SW(pp, ip, cp, Op);
+         const zT = this.Rl.VL(TT, UT, mT, WT);
```

#### 984. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8173` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8009) · [Before (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8173)

```diff
-         return (0, ZY.C)(this.HP.WU.wV().fov)
+         return (0, Ek.D)(this.Rl.GB.HA().fov)
```

#### 985. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8176` → after: `L8012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8012) · [Before (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8176)

```diff
-         return (0, ZY.C)((0, iD.getSettingsFov)())
+         return (0, Ek.D)((0, Uj.getSettingsFov)())
```

#### 986. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8181-L8182` → after: `L8017-L8018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8017-L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8017-L8018) · [Before (L8181-L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8181-L8182)

```diff
-         } = this.HP.WU, ip = pp.getRenderWidth(), cp = pp.getRenderHeight();
-         return ip > 0 && cp > 0 ? ip / cp : 1
+         } = this.Rl.GB, UT = TT.getRenderWidth(), mT = TT.getRenderHeight();
+         return UT > 0 && mT > 0 ? UT / mT : 1
```

#### 987. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8186` → after: `L8022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8022) · [Before (L8186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8186)

```diff
-           HP: pp
+           Rl: TT
```

#### 988. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8190-L8192` → after: `L8026-L8028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8026-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8026-L8028) · [Before (L8190-L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8190-L8192)

```diff
-         if (cp.fov = this.getDefaultFov(), nY.c.isCameraDetachedFromPlayer(pp)) return function(pp, ip) {
-           const cp = nY.c.getPlayerFacingHeading(pp),
-             Op = nY.c.getPlayerFacingPitch(pp),
+         if (mT.fov = this.getDefaultFov(), rk.d.isCameraDetachedFromPlayer(TT)) return function(TT, UT) {
+           const mT = rk.d.getPlayerFacingHeading(TT),
+             WT = rk.d.getPlayerFacingPitch(TT),
```

#### 989. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8195` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8031) · [Before (L8195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8195)

```diff
-           null !== op && (pp.jK(xD, ip.position), ID(pp.camera, cp, Op, Ip, nY.c.getSavedRigShift(pp), ip.position)), OD(pp.camera, cp, Op, Ip, ip)
+           null !== zT && (TT.jD(nj, UT.position), Mj(TT.camera, mT, WT, MT, rk.d.getSavedRigShift(TT), UT.position)), Wj(TT.camera, mT, WT, MT, UT)
```

#### 990. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8197-L8198` → after: `L8033-L8034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8033-L8034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8033-L8034) · [Before (L8197-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8197-L8198)

```diff
-         const Op = 0 !== ip.HZ;
-         return tp().copy(cp.position, ip.sH()), ID(ip, ip.heading, ip.pitch, Op, pp.WU.wV().tV, cp.position), OD(ip, ip.heading, ip.pitch, Op, cp), cp
+         const WT = 0 !== UT.oN;
+         return fT().copy(mT.position, UT.Aq()), Mj(UT, UT.heading, UT.pitch, WT, TT.GB.HA().JA, mT.position), Wj(UT, UT.heading, UT.pitch, WT, mT), mT
```

#### 991. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8201` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8037) · [Before (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8201)

```diff
-     var AD = cp(36767);
+     var lj = mT(36667);
```

#### 992. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8204` → after: `L8040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8040) · [Before (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8204)

```diff
-         this.HP = pp, this.WP = ip, this.pointer = cp, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
+         this.Rl = TT, this.Nl = UT, this.pointer = mT, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
```

#### 993. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8218` → after: `L8054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8054) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8218)

```diff
-         const Op = vD(this.HP, this.eye);
+         const WT = vj(this.Rl, this.eye);
```

#### 994. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8222` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8058) · [Before (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8222)

```diff
-             xp = null === Sp || Sp <= BY ? Ip : Sp;
+             nT = null === gT || gT <= Qk ? MT : gT;
```

#### 995. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8224` → after: `L8060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8060) · [Before (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8224)

```diff
-         }(Op, cp, this.copyRay(), this.WP.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(Op), !0
+         }(WT, mT, this.copyRay(), this.Nl.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(WT), !0
```

#### 996. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8228` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8064) · [Before (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8228)

```diff
-           HP: cp
+           Rl: mT
```

#### 997. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8232` → after: `L8068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8068) · [Before (L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8232)

```diff
-         if (ip && (0, AD.j)(this.screenPoint[1])) return;
+         if (UT && (0, lj.i)(this.screenPoint[1])) return;
```

#### 998. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8242` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8078) · [Before (L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8242)

```diff
-           if (null === Sp || Sp <= BY) return (0, JY.g)(cp, op);
+           if (null === gT || gT <= Qk) return (0, Ik.k)(mT, zT);
```

#### 999. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8245` → after: `L8081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8081) · [Before (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8245)

```diff
-           if (xp < TY) return (0, JY.g)(cp, op);
+           if (nT < Fk) return (0, Ik.k)(mT, zT);
```

#### 1000. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8247` → after: `L8083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8083) · [Before (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8247)

```diff
-         }(op, pp, Op, this.WP.pickCursorTarget, this.cursorAim), (0, JY.g)(op, Ip.eye), (0, JY.g)(pp, Ip.camera), (0, JY.g)(Op, Ip.ray), this.msSincePick = 0), wD(cp, this.cursorAim, nY.c.getPlayerFacingHeading(cp), nY.c.getPlayerFacingPitch(cp))
+         }(zT, TT, WT, this.Nl.pickCursorTarget, this.cursorAim), (0, Ik.k)(zT, MT.eye), (0, Ik.k)(TT, MT.camera), (0, Ik.k)(WT, MT.ray), this.msSincePick = 0), cj(mT, this.cursorAim, rk.d.getPlayerFacingHeading(mT), rk.d.getPlayerFacingPitch(mT))
```

#### 1001. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8251` → after: `L8087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8087) · [Before (L8251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8251)

```diff
-           HP: ip
+           Rl: UT
```

#### 1002. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8259` → after: `L8095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8095) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8259)

```diff
-         })(pp, this.tapPoint, this.tapAim) && wD(ip, this.tapAim, nY.c.getPlayerFacingHeading(ip), nY.c.getPlayerFacingPitch(ip))
+         })(TT, this.tapPoint, this.tapAim) && cj(UT, this.tapAim, rk.d.getPlayerFacingHeading(UT), rk.d.getPlayerFacingPitch(UT))
```

#### 1003. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8263` → after: `L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8099) · [Before (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8263)

```diff
-           HP: pp
+           Rl: TT
```

#### 1004. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8284` → after: `L8120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8120) · [Before (L8284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8284)

```diff
-         }(ip.heading + ip.GL[1], ip.pitch + ip.GL[0], ip.AO + ip.GL[2], pp.WU.wV().fov, this.WP.getAspectRatio(), cp, Op, this.ray)
+         }(UT.heading + UT.GZ[1], UT.pitch + UT.GZ[0], UT.ep + UT.GZ[2], TT.GB.HA().fov, this.Nl.getAspectRatio(), mT, WT, this.ray)
```

#### 1005. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8298` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8134) · [Before (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8298)

```diff
-       UD.heading = cp, UD.pitch = Op, (0, sY.o)(ip, UD), nY.c.setPlayerFacing(pp, UD.heading, UD.pitch)
+       Zj.heading = mT, Zj.pitch = WT, (0, Dk.l)(UT, Zj), rk.d.setPlayerFacing(TT, Zj.heading, Zj.pitch)
```

#### 1006. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8302` → after: `L8138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8138) · [Before (L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8302)

```diff
-       return tp().copy(ip, pp.bloxd.getLifeformEyePos(pp.NJ, !1))
+       return fT().copy(UT, TT.bloxd.getLifeformEyePos(TT.VV, !1))
```

#### 1007. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8304` → after: `L8140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8140) · [Before (L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8304)

```diff
-     var tD = cp(39391);
+     var fj = mT(39334);
```

#### 1008. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8317-L8320` → after: `L8153-L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8153-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8153-L8156) · [Before (L8317-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8317-L8320)

```diff
-         if (Op) return this.pointedAt.heading = pp, this.pointedAt.pitch = ip, this.heading = (0, KY.d)(this.heading, 0, 0, this.pointedAt, cp, op), op;
-         if (!this.hasWritten) return op.QE = 0, op.TE = 0, op.pointedAt = void 0, op;
-         const Ip = (0, sY.B)(this.writtenHeading, pp);
-         return this.heading = (0, KY.d)(this.heading, Ip, ip - this.writtenPitch, void 0, cp, op), op
+         if (WT) return this.pointedAt.heading = TT, this.pointedAt.pitch = UT, this.heading = (0, Ak.c)(this.heading, 0, 0, this.pointedAt, mT, zT), zT;
+         if (!this.hasWritten) return zT.Xs = 0, zT.Qs = 0, zT.pointedAt = void 0, zT;
+         const MT = (0, Dk.w)(this.writtenHeading, TT);
+         return this.heading = (0, Ak.c)(this.heading, MT, UT - this.writtenPitch, void 0, mT, zT), zT
```

#### 1009. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8343` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8179) · [Before (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8343)

```diff
-         Dp = null !== Yp && Yp > BY ? Yp : Math.max(BY, Lp);
+         jT = null !== kT && kT > Qk ? kT : Math.max(Qk, HT);
```

#### 1010. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8352-L8353` → after: `L8188-L8189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8188-L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8188-L8189) · [Before (L8352-L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8352-L8353)

```diff
-         op = Math.max(-Op, Math.min(Op, (0, sY.B)(pp, ip)));
-       return (0, sY.y)(pp + op)
+         zT = Math.max(-WT, Math.min(WT, (0, Dk.w)(TT, UT)));
+       return (0, Dk.s)(TT + zT)
```

#### 1011. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8357-L8361` → after: `L8193-L8197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8193-L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8193-L8197) · [Before (L8357-L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8357-L8361)

```diff
-         this.HP = pp, this.cameraController = ip, this.freeCameraController = cp, this.cursor = Op, this.WP = void 0, this.director = void 0, this.view = new dD, this.look = {
-           QE: 0,
-           TE: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.gpp = [0, 0, 0], this.Gpp = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
-         const Sp = xL.c.subscribe("gameCamera", (pp => {
+         this.Rl = TT, this.cameraController = UT, this.freeCameraController = mT, this.cursor = WT, this.Nl = void 0, this.director = void 0, this.view = new ij, this.look = {
+           Xs: 0,
+           Qs: 0
+         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.KTT = [0, 0, 0], this.STT = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
+         const gT = gH.d.subscribe("gameCamera", (TT => {
```

#### 1012. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8377` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8213) · [Before (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8377)

```diff
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && pp.WP.ucp([])
+           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && TT.Nl.HmT([])
```

#### 1013. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8379-L8380` → after: `L8215-L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8215-L8216) · [Before (L8379-L8380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8379-L8380)

```diff
-         pp.on("LP", Dp), Op.listenForTaps(((ip, cp) => {
-           this.aimAtClientPoint(ip, cp), pp.Cpp()
+         TT.on("Cl", jT), WT.listenForTaps(((UT, mT) => {
+           this.aimAtClientPoint(UT, mT), TT.tTT()
```

#### 1014. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8382` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8218) · [Before (L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8382)

```diff
-         const Ap = wp.m.subscribe("localPlayerTeleported", (pp => {
+         const lT = cT.j.subscribe("localPlayerTeleported", (TT => {
```

#### 1015. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8389` → after: `L8225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8225) · [Before (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8389)

```diff
-           Sp(), Op.listenForTaps(null), wp.m.unsubscribe(Ap), pp.off("beforeRender", xp), pp.off("afterRender", Lp), pp.off("beforePhysicsTick", Yp), pp.off("LP", Dp), this.release({
+           gT(), WT.listenForTaps(null), cT.j.unsubscribe(lT), TT.off("beforeRender", nT), TT.off("afterRender", HT), TT.off("beforePhysicsTick", kT), TT.off("Cl", jT), this.release({
```

#### 1016. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8391` → after: `L8227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8227) · [Before (L8391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8391)

```diff
-           }), this.screen.clear(), pp.WP.ucp([])
+           }), this.screen.clear(), TT.Nl.HmT([])
```

#### 1017. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8401` → after: `L8237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8237) · [Before (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8401)

```diff
-         const ip = (0, KY.g)(pp);
+         const UT = (0, Ak.d)(TT);
```

#### 1018. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8415` → after: `L8251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8251) · [Before (L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8415)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (ip = this.HP.bloxd.client) && void 0 !== ip && ip.isReplayMode()) return this.HP.WP.ucp([]), this.yieldToReplay(), void this.screen.clear();
+         if (this.lastFrameMs = performance.now(), null !== (UT = this.Rl.bloxd.client) && void 0 !== UT && UT.isReplayMode()) return this.Rl.Nl.HmT([]), this.yieldToReplay(), void this.screen.clear();
```

#### 1019. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8418-L8421` → after: `L8254-L8257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8254-L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8254-L8257) · [Before (L8418-L8421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8418-L8421)

```diff
-         } = this.HP;
-         this.detached || this.view.followBody(nY.c.getPlayerFacingHeading(this.HP));
-         const Op = nY.c.takeLookPointed(this.HP);
-         null !== cp.Yz || null !== cp.sZ || null === this.mouseTurns && !Op ? (this.look.QE = 0, this.look.TE = 0, this.look.pointedAt = void 0) : this.view.readLook(cp.heading, cp.pitch, "look" === this.mouseTurns, Op, this.look);
+         } = this.Rl;
+         this.detached || this.view.followBody(rk.d.getPlayerFacingHeading(this.Rl));
+         const WT = rk.d.takeLookPointed(this.Rl);
+         null !== mT.OE || null !== mT.qE || null === this.mouseTurns && !WT ? (this.look.Xs = 0, this.look.Qs = 0, this.look.pointedAt = void 0) : this.view.readLook(mT.heading, mT.pitch, "look" === this.mouseTurns, WT, this.look);
```

#### 1020. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8423` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8259) · [Before (L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8423)

```diff
-         if (this.HP.WP.ucp(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !op) return void this.release();
+         if (this.Rl.Nl.HmT(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !zT) return void this.release();
```

#### 1021. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8426` → after: `L8262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8262) · [Before (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8426)

```diff
-         "movement" !== this.facing || Ip || this.turnBodyTowardsMovement(pp), this.cursorAim.LP(pp), this.applyPose(op)
+         "movement" !== this.facing || MT || this.turnBodyTowardsMovement(TT), this.cursorAim.Cl(TT), this.applyPose(zT)
```

#### 1022. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8432` → after: `L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8268) · [Before (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8432)

```diff
-         return !nY.c.isCameraDetachedFromPlayer(this.HP) && (this.setControlsLocked(!0), nY.c.detachCamera(this.HP, {
+         return !rk.d.isCameraDetachedFromPlayer(this.Rl) && (this.setControlsLocked(!0), rk.d.detachCamera(this.Rl, {
```

#### 1023. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8434` → after: `L8270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8270) · [Before (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8434)

```diff
-         }) ? (this.detached = !0, this.HP.iv = this.HP.bloxd.getBlockReach(this.HP.NJ), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
+         }) ? (this.detached = !0, this.Rl.Vc = this.Rl.bloxd.getBlockReach(this.Rl.VV), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
```

#### 1024. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8440` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8276) · [Before (L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8440)

```diff
-           HP: cp
+           Rl: mT
```

#### 1025. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8443-L8444` → after: `L8279-L8280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8279-L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8279-L8280) · [Before (L8443-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8443-L8444)

```diff
-         } = cp, op = nY.c.getPlayerFacingHeading(cp), Ip = nY.c.getPlayerFacingPitch(cp), Sp = null !== (ip = LD(cp, op, Ip, this.reattachedPosition)) && void 0 !== ip ? ip : nY.c.getSavedZoomDistance(cp);
-         this.giveUpView(), nY.c.reattachCamera(cp), Op.HZ = Sp, Op.heading = op, Op.pitch = Ip, Op.cV(), (0, yL.o)(cp), this.setControlsLocked(!1, pp)
+         } = mT, zT = rk.d.getPlayerFacingHeading(mT), MT = rk.d.getPlayerFacingPitch(mT), gT = null !== (UT = Hj(mT, zT, MT, this.reattachedPosition)) && void 0 !== UT ? UT : rk.d.getSavedZoomDistance(mT);
+         this.giveUpView(), rk.d.reattachCamera(mT), WT.oN = gT, WT.heading = zT, WT.pitch = MT, WT.uD(), (0, pH.r)(mT), this.setControlsLocked(!1, TT)
```

#### 1026. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8447` → after: `L8283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8283) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8447)

```diff
-         this.detached && (this.giveUpView(), nY.c.setFacingMode(this.HP, "frozen"), this.setControlsLocked(!1, {
+         this.detached && (this.giveUpView(), rk.d.setFacingMode(this.Rl, "frozen"), this.setControlsLocked(!1, {
```

#### 1027. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8452` → after: `L8288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8288) · [Before (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8452)

```diff
-         this.detached = !1, this.HP.gpp = null, this.HP.Gpp = null, this.publishView()
+         this.detached = !1, this.Rl.KTT = null, this.Rl.STT = null, this.publishView()
```

#### 1028. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8456` → after: `L8292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8292) · [Before (L8456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8456)

```diff
-         this.cursor.setActive("cursor" === pp), "cursor" !== pp && this.cursorAim.forgetTap(), TS.c.get("scriptedCameraFacing") !== pp && TS.c.set({
+         this.cursor.setActive("cursor" === TT), "cursor" !== TT && this.cursorAim.forgetTap(), Ig.b.get("scriptedCameraFacing") !== TT && Ig.b.set({
```

#### 1029. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8463-L8466` → after: `L8299-L8302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8299-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8299-L8302) · [Before (L8463-L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8463-L8466)

```diff
-           HP: cp
-         } = this, Op = cp.Yk.Jip(cp.NJ);
-         let op = nY.c.getPlayerFacingHeading(cp);
-         const Ip = null !== (ip = Op.ridingVehicleEId) && void 0 !== ip ? ip : null;
+           Rl: mT
+         } = this, WT = mT.pY.wUT(mT.VV);
+         let zT = rk.d.getPlayerFacingHeading(mT);
+         const MT = null !== (UT = WT.ridingVehicleEId) && void 0 !== UT ? UT : null;
```

#### 1030. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8468-L8469` → after: `L8304-L8305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8304-L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8304-L8305) · [Before (L8468-L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8468-L8469)

```diff
-             if (!(0, VY.b)(pp, ip)) return !0;
-             const cp = pp.bloxd.getResolvedPhysicsSettings(pp.NJ, pp.Yk.xip(pp.NJ).physicsState);
+             if (!(0, Rk.d)(TT, UT)) return !0;
+             const mT = TT.bloxd.getResolvedPhysicsSettings(TT.VV, TT.pY.gUT(TT.VV).physicsState);
```

#### 1031. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8477` → after: `L8313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8313) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8477)

```diff
-         nY.c.setPlayerFacing(cp, op, (xp = nY.c.getPlayerFacingPitch(cp), Lp = pp, xp * Math.max(0, 1 - Lp / 1e3 * 8)))
+         rk.d.setPlayerFacing(mT, zT, (nT = rk.d.getPlayerFacingPitch(mT), HT = TT, nT * Math.max(0, 1 - HT / 1e3 * 8)))
```

#### 1032. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8481` → after: `L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8317) · [Before (L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8481)

```diff
-           HP: ip
+           Rl: UT
```

#### 1033. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8485` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8321) · [Before (L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8485)

```diff
-         ip.Yk.setPosition(cp.Vr, pp.position), cp.heading = (0, sY.y)(pp.heading), cp.pitch = (0, sY.l)(pp.pitch), cp.cV(), (0, yL.o)(ip), ip.WU.wV().fov = (0, ZY.o)(pp.fov), this.view.noteWritten(cp.heading, cp.pitch), (0, JY.g)(pp.position, this.cameraPosition), "camera" === th … [truncated]
+         UT.pY.setPosition(mT.yN, TT.position), mT.heading = (0, Dk.s)(TT.heading), mT.pitch = (0, Dk.i)(TT.pitch), mT.uD(), (0, pH.r)(UT), UT.GB.HA().fov = (0, Ek.m)(TT.fov), this.view.noteWritten(mT.heading, mT.pitch), (0, Ik.k)(TT.position, this.cameraPosition), "camera" === th … [truncated]
```

#### 1034. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8489` → after: `L8325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8325) · [Before (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8489)

```diff
-           HP: ip
+           Rl: UT
```

#### 1035. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8493` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8329) · [Before (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8493)

```diff
-         uD(vD(ip, this.eye), pp, (0, sY.i)(cp.heading, cp.pitch, this.rayDirection), ip.iv, this.WP.pickTargetedBlock, this.aim), wD(ip, this.aim, cp.heading, cp.pitch)
+         Oj(vj(UT, this.eye), TT, (0, Dk.g)(mT.heading, mT.pitch, this.rayDirection), UT.Vc, this.Nl.pickTargetedBlock, this.aim), cj(UT, this.aim, mT.heading, mT.pitch)
```

#### 1036. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8497` → after: `L8333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8333) · [Before (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8497)

```diff
-           HP: pp
+           Rl: TT
```

#### 1037. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8499` → after: `L8335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8335) · [Before (L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8499)

```diff
-         pp.gpp = pp.uip(vD(pp, this.eye), null, this.gpp), pp.Gpp = nY.c.copyPlayerFacingDirection(pp, this.Gpp)
+         TT.KTT = TT.qUT(vj(TT, this.eye), null, this.KTT), TT.STT = rk.d.copyPlayerFacingDirection(TT, this.STT)
```

#### 1038. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8502` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8338) · [Before (L8502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8502)

```diff
-     var mD = cp(34258);
+     var Jj = mT(34090);
```

#### 1039. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8509` → after: `L8345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8345) · [Before (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8509)

```diff
-       return null !== (cp = null !== (Op = pp.inclination) && void 0 !== Op ? Op : null === ip || void 0 === ip ? void 0 : ip.inclination) && void 0 !== cp ? cp : -.2
+       return null !== (mT = null !== (WT = TT.inclination) && void 0 !== WT ? WT : null === UT || void 0 === UT ? void 0 : UT.inclination) && void 0 !== mT ? mT : -.2
```

#### 1040. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8515` → after: `L8351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8351) · [Before (L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8515)

```diff
-         return null !== (cp = null !== (Op = pp.useSunPosition) && void 0 !== Op ? Op : null === ip || void 0 === ip ? void 0 : ip.useSunPosition) && void 0 !== cp ? cp : qD
+         return null !== (mT = null !== (WT = TT.useSunPosition) && void 0 !== WT ? WT : null === UT || void 0 === UT ? void 0 : UT.useSunPosition) && void 0 !== mT ? mT : dj
```

#### 1041. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8520-L8521` → after: `L8356-L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8356-L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8356-L8357) · [Before (L8520-L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8520-L8521)

```diff
-           return null !== (cp = null !== (Op = pp.sunPosition) && void 0 !== Op ? Op : null === ip || void 0 === ip ? void 0 : ip.sunPosition) && void 0 !== cp ? cp : MD
-         }(pp, ip), Sp = new sp.Zy(Op, op, Ip);
+           return null !== (mT = null !== (WT = TT.sunPosition) && void 0 !== WT ? WT : null === UT || void 0 === UT ? void 0 : UT.sunPosition) && void 0 !== mT ? mT : wj
+         }(TT, UT), gT = new DT.JB(WT, zT, MT);
```

#### 1042. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8534` → after: `L8370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8370) · [Before (L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8534)

```diff
-       const op = null !== cp && void 0 !== cp ? cp : CD(pp, ip),
+       const zT = null !== mT && void 0 !== mT ? mT : tj(TT, UT),
```

#### 1043. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8537` → after: `L8373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8373) · [Before (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8537)

```diff
-           return null !== (cp = null !== (Op = pp.azimuth) && void 0 !== Op ? Op : null === ip || void 0 === ip ? void 0 : ip.azimuth) && void 0 !== cp ? cp : .55
+           return null !== (mT = null !== (WT = TT.azimuth) && void 0 !== WT ? WT : null === UT || void 0 === UT ? void 0 : UT.azimuth) && void 0 !== mT ? mT : .55
```

#### 1044. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8541` → after: `L8377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8377) · [Before (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8541)

```diff
-           return null !== (cp = null !== (Op = pp.up) && void 0 !== Op ? Op : null === ip || void 0 === ip ? void 0 : ip.up) && void 0 !== cp ? cp : RD
+           return null !== (mT = null !== (WT = TT.up) && void 0 !== WT ? WT : null === UT || void 0 === UT ? void 0 : UT.up) && void 0 !== mT ? mT : xj
```

#### 1045. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8545-L8546` → after: `L8381-L8382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8381-L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8381-L8382) · [Before (L8545-L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8545-L8546)

```diff
-         Yp = new sp.Zy(Math.cos(Lp) * Math.cos(xp), Math.sin(-xp), Math.sin(Lp) * Math.cos(xp)),
-         Dp = new sp.Zy(Sp[0], Sp[1], Sp[2]),
+         kT = new DT.JB(Math.cos(HT) * Math.cos(nT), Math.sin(-nT), Math.sin(HT) * Math.cos(nT)),
+         jT = new DT.JB(gT[0], gT[1], gT[2]),
```

#### 1046. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8548-L8549` → after: `L8384-L8385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8384-L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8384-L8385) · [Before (L8548-L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8548-L8549)

```diff
-       sp.Quaternion.FromUnitVectorsToRef(sp.Zy.UpReadOnly, Dp, Ap);
-       const Pp = new sp.Zy;
+       DT.Quaternion.FromUnitVectorsToRef(DT.JB.UpReadOnly, jT, lT);
+       const LT = new DT.JB;
```

#### 1047. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8575-L8578` → after: `L8411-L8414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8411-L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8411-L8414) · [Before (L8575-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8575-L8578)

```diff
-         this.HP = pp, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const ip = this.HP.Tu.skyBox;
-         "object" === typeof ip && "earth" === ip.type && (this.earthSkyBox = ip), this.sunOpacity = this.HP.Tu.dayNightSunOpacity, this.moonOpacity = this.HP.Tu.dayNightMoonOpacity;
-         const cp = xL.c.subscribe("dayNightSunOpacity", (pp => {
+         this.Rl = TT, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
+         const UT = this.Rl.kY.skyBox;
+         "object" === typeof UT && "earth" === UT.type && (this.earthSkyBox = UT), this.sunOpacity = this.Rl.kY.dayNightSunOpacity, this.moonOpacity = this.Rl.kY.dayNightMoonOpacity;
+         const mT = gH.d.subscribe("dayNightSunOpacity", (TT => {
```

#### 1048. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8581` → after: `L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8417) · [Before (L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8581)

```diff
-           Op = xL.c.subscribe("dayNightMoonOpacity", (pp => {
+           WT = gH.d.subscribe("dayNightMoonOpacity", (TT => {
```

#### 1049. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8584` → after: `L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8420) · [Before (L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8584)

```diff
-           op = xL.c.subscribe("dayNightStarOpacity", (pp => {
+           zT = gH.d.subscribe("dayNightStarOpacity", (TT => {
```

#### 1050. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8587` → after: `L8423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8423) · [Before (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8587)

```diff
-           Ip = xL.c.subscribe("skyBox", (pp => {
+           MT = gH.d.subscribe("skyBox", (TT => {
```

#### 1051. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8592` → after: `L8428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8428) · [Before (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8592)

```diff
-         })), this.syncSunAndMoon(), this.setStarOpacity(this.HP.Tu.dayNightStarOpacity)
+         })), this.syncSunAndMoon(), this.setStarOpacity(this.Rl.kY.dayNightStarOpacity)
```

#### 1052. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8594` → after: `L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8430) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8594)

```diff
-       Hcp() {
+       gmT() {
```

#### 1053. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8604` → after: `L8440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8440) · [Before (L8604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8604)

```diff
-         "object" === typeof pp && "earth" === pp.type ? this.earthSkyBox = pp : this.earthSkyBox = null, this.syncSunAndMoon()
+         "object" === typeof TT && "earth" === TT.type ? this.earthSkyBox = TT : this.earthSkyBox = null, this.syncSunAndMoon()
```

#### 1054. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8619-L8621` → after: `L8455-L8457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8455-L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8455-L8457) · [Before (L8619-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8619-L8621)

```diff
-         null === pp && (null === (cp = this.sunMesh) || void 0 === cp || cp.eC(!1));
-         null === ip && (null === (Op = this.moonMesh) || void 0 === Op || Op.eC(!1));
-         null === pp && null === ip || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== pp && ((0, gp.f)(this.sunMat, {
+         null === TT && (null === (mT = this.sunMesh) || void 0 === mT || mT.Qy(!1));
+         null === UT && (null === (WT = this.moonMesh) || void 0 === WT || WT.Qy(!1));
+         null === TT && null === UT || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== TT && ((0, ST.c)(this.sunMat, {
```

#### 1055. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8623` → after: `L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8459) · [Before (L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8623)

```diff
-         }), this.sunMesh.eC(!0)), null !== ip && ((0, gp.f)(this.moonMat, {
+         }), this.sunMesh.Qy(!0)), null !== UT && ((0, ST.c)(this.moonMat, {
```

#### 1056. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8625` → after: `L8461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8461) · [Before (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8625)

```diff
-         }), this.moonMesh.eC(!0)))
+         }), this.moonMesh.Qy(!0)))
```

#### 1057. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8629` → after: `L8465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8465) · [Before (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8629)

```diff
-         lD(pp) ? (this.ensureCreated(), (0, gp.f)(this.starsMat, {
+         Xj(TT) ? (this.ensureCreated(), (0, ST.c)(this.starsMat, {
```

#### 1058. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8631` → after: `L8467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8467) · [Before (L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8631)

```diff
-         }), this.starsMesh.eC(!0)) : null === (ip = this.starsMesh) || void 0 === ip || ip.eC(!1)
+         }), this.starsMesh.Qy(!0)) : null === (UT = this.starsMesh) || void 0 === UT || UT.Qy(!1)
```

#### 1059. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8636-L8638` → after: `L8472-L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8472-L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8472-L8474) · [Before (L8636-L8638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8636-L8638)

```diff
-           WU: pp
-         } = this.HP, {
-           pw: ip
+           GB: TT
+         } = this.Rl, {
+           XZ: UT
```

#### 1060. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8640-L8641` → after: `L8476-L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8476-L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8476-L8477) · [Before (L8640-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8640-L8641)

```diff
-         this.starsMesh = (0, Hp.o)(pp, "dayNightStars", (0, ep.j)());
-         const cp = mD.c.map((pp => mD.d + pp)),
+         this.starsMesh = (0, qT.m)(TT, "dayNightStars", (0, bT.k)());
+         const mT = Jj.f.map((TT => Jj.h + TT)),
```

#### 1061. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8643` → after: `L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8479) · [Before (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8643)

```diff
-             rootUrl: mD.d,
+             rootUrl: Jj.h,
```

#### 1062. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8647` → after: `L8483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8483) · [Before (L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8647)

```diff
-             samplingMode: dp.g.nearest
+             samplingMode: iT.k.nearest
```

#### 1063. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8649` → after: `L8485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8485) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8649)

```diff
-           op = (0, dp.p)(ip, Op),
+           zT = (0, iT.v)(UT, WT),
```

#### 1064. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8654` → after: `L8490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8490) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8654)

```diff
-             transparencyMode: qp.k.alphaBlend
+             transparencyMode: xT.j.alphaBlend
```

#### 1065. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8658` → after: `L8494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8494) · [Before (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8658)

```diff
-           pw: ip,
+           XZ: UT,
```

#### 1066. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8661-L8662` → after: `L8497-L8498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8497-L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8497-L8498) · [Before (L8661-L8662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8661-L8662)

```diff
-         const Sp = mp.b.BILLBOARDMODE_ALL | mp.b.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, Hp.o)(pp, "dayNightSun", (0, ep.i)({
+         const gT = YT.e.BILLBOARDMODE_ALL | YT.e.BILLBOARDMODE_USE_POSITION;
+         this.sunMesh = (0, qT.m)(TT, "dayNightSun", (0, bT.g)({
```

#### 1067. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8665` → after: `L8501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8501) · [Before (L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8665)

```diff
-         })), this.sunMat = JD(ip, "dayNightSun", mD.h), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = Sp, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, Hp.o)(pp, "dayNightMoon", (0, ep.i)({
+         })), this.sunMat = Qj(UT, "dayNightSun", Jj.i), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = gT, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, qT.m)(TT, "dayNightMoon", (0, bT.g)({
```

#### 1068. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8668` → after: `L8504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8504) · [Before (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8668)

```diff
-         })), this.moonMat = JD(ip, "dayNightMoon", mD.b), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = Sp, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.eC(!1), this.sunMesh.eC(!1), this.moonMesh.eC(!1)
+         })), this.moonMat = Qj(UT, "dayNightMoon", Jj.d), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = gT, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.Qy(!1), this.sunMesh.Qy(!1), this.moonMesh.Qy(!1)
```

#### 1069. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8671` → after: `L8507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8507) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8671)

```diff
-         pp.infiniteDistance = !0, pp.renderingGroupId = -1, pp.Ow = !1, pp.Gy = !0, pp.sy = !0, pp.applyFog = !1, this.HP.WU.Iw(pp, !1, this.HP.BP, !1)
+         TT.infiniteDistance = !0, TT.renderingGroupId = -1, TT.QZ = !1, TT.YB = !0, TT.dB = !0, TT.applyFog = !1, this.Rl.GB.FZ(TT, !1, this.Rl.ZL, !1)
```

#### 1070. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8677-L8680` → after: `L8513-L8516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8513-L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8513-L8516) · [Before (L8677-L8680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8677-L8680)

```diff
-           WU: pp
-         } = this.HP, ip = .8 * pp.wV().far, cp = function() {
-           const pp = Up.d.getSkyBox("default");
-           return "earth" === (null === pp || void 0 === pp ? void 0 : pp.type) ? pp : void 0
+           GB: TT
+         } = this.Rl, UT = .8 * TT.HA().far, mT = function() {
+           const TT = ZT.e.getSkyBox("default");
+           return "earth" === (null === TT || void 0 === TT ? void 0 : TT.type) ? TT : void 0
```

#### 1071. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8682` → after: `L8518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8518) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8682)

```diff
-         (0, Ep.r)(this.sunMesh, Op.x * ip, Op.y * ip, Op.z * ip);
+         (0, tT.n)(this.sunMesh, WT.x * UT, WT.y * UT, WT.z * UT);
```

#### 1072. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8685` → after: `L8521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8521) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8685)

```diff
-         (0, Ep.r)(this.moonMesh, Ip.x * ip, Ip.y * ip, Ip.z * ip)
+         (0, tT.n)(this.moonMesh, MT.x * UT, MT.y * UT, MT.z * UT)
```

#### 1073. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8690-L8691` → after: `L8526-L8527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8526-L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8526-L8527) · [Before (L8690-L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8690-L8691)

```diff
-           WU: pp
-         } = this.HP, {
+           GB: TT
+         } = this.Rl, {
```

#### 1074. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8693-L8694` → after: `L8529-L8530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8529-L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8529-L8530) · [Before (L8693-L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8693-L8694)

```diff
-         } = pp.wV(), cp = .95 * ip;
-         this.starsMesh.ei.set(cp, cp, cp);
+         } = TT.HA(), mT = .95 * UT;
+         this.starsMesh.gp.set(mT, mT, mT);
```

#### 1075. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8697` → after: `L8533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8533) · [Before (L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8697)

```diff
-         this.sunMesh.ei.set(op, op, op);
+         this.sunMesh.gp.set(zT, zT, zT);
```

#### 1076. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8699` → after: `L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8535) · [Before (L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8699)

```diff
-         this.moonMesh.ei.set(Ip, Ip, Ip)
+         this.moonMesh.gp.set(MT, MT, MT)
```

#### 1077. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8712` → after: `L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8548) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8712)

```diff
-         samplingMode: dp.g.nearest,
+         samplingMode: iT.k.nearest,
```

#### 1078. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8719` → after: `L8555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8555) · [Before (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8719)

```diff
-         pw: pp,
+         XZ: TT,
```

#### 1079. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8728-L8738` → after: `L8564-L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8564-L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8564-L8574) · [Before (L8728-L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8728-L8738)

```diff
-     var BD = cp(4341),
-       ND = cp(38124),
-       TD = cp(37529),
-       fD = cp(37815),
-       bD = cp(37655),
-       hD = cp(768),
-       aD = cp(2860),
-       nD = cp(4385),
-       FD = cp(118),
-       gD = cp(314),
-       GD = cp(39396);
+     var sj = mT(4328),
+       Fj = mT(38045),
+       Pj = mT(37414),
+       Vj = mT(37733),
+       uj = mT(37534),
+       Cj = mT(825),
+       rj = mT(2891),
+       Kj = mT(4388),
+       Sj = mT(117),
+       Gj = mT(340),
+       Nj = mT(39343);
```

#### 1080. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8742` → after: `L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8578) · [Before (L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8742)

```diff
-       return (0, gD.f)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
+       return (0, Gj.h)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
```

#### 1081. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8746` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8582) · [Before (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8746)

```diff
-       return `${pp.getMode()}|${pp.ZU()}`
+       return `${TT.getMode()}|${TT.dZ()}`
```

#### 1082. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8750` → after: `L8586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8586) · [Before (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8750)

```diff
-       console.error(`Shader pack failed to compile for "${pp.failure.material}":`, pp.failure.message)
+       console.error(`Shader pack failed to compile for "${TT.failure.material}":`, TT.failure.message)
```

#### 1083. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8754` → after: `L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8590) · [Before (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8754)

```diff
-         this.page = pp, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, wp.m.subscribe(rD, (pp => {
+         this.page = TT, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, cT.j.subscribe(Ej, (TT => {
```

#### 1084. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8760` → after: `L8596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8596) · [Before (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8760)

```diff
-           ip === this.game && this.inGame && wp.m.GA("chat", (0, nD.j)(cp, Op))
+           UT === this.game && this.inGame && cT.j.EZ("chat", (0, Kj.e)(mT, WT))
```

#### 1085. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8770` → after: `L8606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8606) · [Before (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8770)

```diff
-             status: "OO"
+             status: "Km"
```

#### 1086. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8772` → after: `L8608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8608) · [Before (L8772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8772)

```diff
-           (0, xx.d)((Op => Op.noteJsJoin(ip, pp, cp)))
+           (0, Wn.c)((WT => WT.noteJsJoin(UT, TT, mT)))
```

#### 1087. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8775-L8777` → after: `L8611-L8613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8611-L8613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8611-L8613) · [Before (L8775-L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8775-L8777)

```diff
-           status: "OO"
-         } : (wp.m.GA("matchmakeAndPlayStepCompleted", {
-           step: ei.k.SHADER_PACK,
+           status: "Km"
+         } : (cT.j.EZ("matchmakeAndPlayStepCompleted", {
+           step: qU.j.SHADER_PACK,
```

#### 1088. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8804-L8805` → after: `L8640-L8641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8640-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8640-L8641) · [Before (L8804-L8805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8804-L8805)

```diff
-           const Lp = null !== (Sp = null !== Ip && void 0 !== Ip ? Ip : null === op || void 0 === op ? void 0 : op.message) && void 0 !== Sp ? Sp : op,
-             Yp = () => xp.packVariant === pp.defineFor(xp.program) && ("model" === xp.program || xp.lighting === pp.ZU());
+           const HT = null !== (gT = null !== MT && void 0 !== MT ? MT : null === zT || void 0 === zT ? void 0 : zT.message) && void 0 !== gT ? gT : zT,
+             kT = () => nT.packVariant === TT.defineFor(nT.program) && ("model" === nT.program || nT.lighting === TT.dZ());
```

#### 1089. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8807` → after: `L8643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8643) · [Before (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8807)

```diff
-             cp || (this.failedModelCode.add(xp.packVariant), this.inGame && Yp() && (console.error(`Shader pack program ${Op} failed in game, so its models are drawn without the pack:`, Lp), this.notifyModelFallback()))
+             mT || (this.failedModelCode.add(nT.packVariant), this.inGame && kT() && (console.error(`Shader pack program ${WT} failed in game, so its models are drawn without the pack:`, HT), this.notifyModelFallback()))
```

#### 1090. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8813` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8649) · [Before (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8813)

```diff
-               console.error(`Shader pack program ${Op} failed in game:`, Lp)
+               console.error(`Shader pack program ${WT} failed in game:`, HT)
```

#### 1091. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8839` → after: `L8675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8675) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8839)

```diff
-         const Ip = null !== (Op = (0, GD.harnessShaderPackMode)()) && void 0 !== Op ? Op : (0, hD.g)(ip);
+         const MT = null !== (WT = (0, Nj.harnessShaderPackMode)()) && void 0 !== WT ? WT : (0, Cj.k)(UT);
```

#### 1092. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8841` → after: `L8677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8677) · [Before (L8841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8841)

```diff
-           if ((0, ZI.f)(op.variants, Ip)) {
+           if ((0, SM.l)(zT.variants, MT)) {
```

#### 1093. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8853` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8689) · [Before (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8853)

```diff
-           if (!(0, ZI.f)(op.pack.variants, Ip)) return {
+           if (!(0, SM.l)(zT.pack.variants, MT)) return {
```

#### 1094. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8862-L8864` → after: `L8698-L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8698-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8698-L8700) · [Before (L8862-L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8862-L8864)

```diff
-               if ("default" === (null === ip || void 0 === ip ? void 0 : ip.source)) return (0, gD.f)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
-               return !0 === (null === ip || void 0 === ip || null === (pp = ip.fallbackReason) || void 0 === pp ? void 0 : pp.endsWith(FD.c)) ? "shaderPack:failedNoWebGpu" : null
-             }()) && void 0 !== Sp ? Sp : function() {
+               if ("default" === (null === UT || void 0 === UT ? void 0 : UT.source)) return (0, Gj.h)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
+               return !0 === (null === UT || void 0 === UT || null === (TT = UT.fallbackReason) || void 0 === TT ? void 0 : TT.endsWith(Sj.d)) ? "shaderPack:failedNoWebGpu" : null
+             }()) && void 0 !== gT ? gT : function() {
```

#### 1095. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8879-L8880` → after: `L8715-L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8715-L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8715-L8716) · [Before (L8879-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8879-L8880)

```diff
-         return "OO" === Lp.status ? {
-           status: "OO"
+         return "Km" === HT.status ? {
+           status: "Km"
```

#### 1096. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8912` → after: `L8748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8748) · [Before (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8912)

```diff
-               message: `The check failed: ${Op instanceof Error?Op.message:String(Op)}`
+               message: `The check failed: ${WT instanceof Error?WT.message:String(WT)}`
```

#### 1097. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8929` → after: `L8765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8765) · [Before (L8929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8929)

```diff
-         this.lastPassedCheck = null, this.endGame(), wp.m.GA(nD.g, "shaderPack:failedToCompile")
+         this.lastPassedCheck = null, this.endGame(), cT.j.EZ(Kj.d, "shaderPack:failedToCompile")
```

#### 1098. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8940` → after: `L8776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8776) · [Before (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8940)

```diff
-         wp.m.GA(rD, cp, !0)
+         cT.j.EZ(Ej, mT, !0)
```

#### 1099. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8943-L8944` → after: `L8779-L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8779-L8780) · [Before (L8943-L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8943-L8944)

```diff
-     var VD = cp(38967),
-       pA = cp(39403);
+     var Rj = mT(38860),
+       Tl = mT(39346);
```

#### 1100. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8947` → after: `L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8783) · [Before (L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8947)

```diff
-         this.HP = pp, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new QD(pp), this.setupSkyBox(), this.setupFog(), this.setupLighting()
+         this.Rl = TT, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new Ij(TT), this.setupSkyBox(), this.setupFog(), this.setupLighting()
```

#### 1101. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8950` → after: `L8786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8786) · [Before (L8950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8950)

```diff
-         const pp = xL.c.subscribe("skyBox", (pp => {
+         const TT = gH.d.subscribe("skyBox", (TT => {
```

#### 1102. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8953-L8954` → after: `L8789-L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8789-L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8789-L8790) · [Before (L8953-L8954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8953-L8954)

```diff
-         this.HP.WU.Hcp = () => {
-           this.updateSkyboxSize(), this.dayAndNightSky.Hcp()
+         this.Rl.GB.gmT = () => {
+           this.updateSkyboxSize(), this.dayAndNightSky.gmT()
```

#### 1103. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8957` → after: `L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8793) · [Before (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8957)

```diff
-           pp(), this.HP.WU.Hcp = null, this.skyBoxRequestId++, null === (ip = this.skyBoxMesh) || void 0 === ip || ip.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.HP.WU.opp = null, this.HP.WU.model.earthSky = null
+           TT(), this.Rl.GB.gmT = null, this.skyBoxRequestId++, null === (UT = this.skyBoxMesh) || void 0 === UT || UT.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.Rl.GB.zTT = null, this.Rl.GB.model.earthSky = null
```

#### 1104. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8963-L8964` → after: `L8799-L8800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8799-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8799-L8800) · [Before (L8963-L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8963-L8964)

```diff
-           WU: pp
-         } = this.HP, {
+           GB: TT
+         } = this.Rl, {
```

#### 1105. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8966-L8967` → after: `L8802-L8803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8802-L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8802-L8803) · [Before (L8966-L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8966-L8967)

```diff
-         } = pp.wV();
-         this.skyBoxMesh.ei.set(ip, ip, ip)
+         } = TT.HA();
+         this.skyBoxMesh.gp.set(UT, UT, UT)
```

#### 1106. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8970` → after: `L8806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8806) · [Before (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8970)

```diff
-         if (this.HP.Dy)
+         if (this.Rl.Np)
```

#### 1107. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8972` → after: `L8808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8808) · [Before (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8972)

```diff
-             const pp = "object" === typeof ip ? ip : {
+             const TT = "object" === typeof UT ? UT : {
```

#### 1108. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8979-L8981` → after: `L8815-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8815-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8815-L8817) · [Before (L8979-L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8979-L8981)

```diff
-               } = ED(pp, "earth" === (null === cp || void 0 === cp ? void 0 : cp.type) ? cp : void 0);
-             this.HP.WU.opp = [Op, op, Ip]
-           } else this.HP.WU.opp = null
+               } = aj(TT, "earth" === (null === mT || void 0 === mT ? void 0 : mT.type) ? mT : void 0);
+             this.Rl.GB.zTT = [WT, zT, MT]
+           } else this.Rl.GB.zTT = null
```

#### 1109. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8984-L8986` → after: `L8820-L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8820-L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8820-L8822) · [Before (L8984-L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8984-L8986)

```diff
-         const ip = "string" === typeof pp ? pp : pp.type,
-           cp = Up.d.getSkyBox(ip);
-         if (void 0 === cp && "earth" !== ip) return void console.error(`Skybox "${ip}" not found, ignoring update...`);
+         const UT = "string" === typeof TT ? TT : TT.type,
+           mT = ZT.e.getSkyBox(UT);
+         if (void 0 === mT && "earth" !== UT) return void console.error(`Skybox "${UT}" not found, ignoring update...`);
```

#### 1110. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8995-L8997` → after: `L8831-L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8831-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8831-L8833) · [Before (L8995-L8997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8995-L8997)

```diff
-           pw: Ip,
-           yU: Sp
-         } = this.HP.WU, xp = "earth" === ip || "earth" === cp.type;
+           XZ: MT,
+           NB: gT
+         } = this.Rl.GB, nT = "earth" === UT || "earth" === mT.type;
```

#### 1111. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8999` → after: `L8835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8835) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L8999)

```diff
-           (0, ND.e)();
+           (0, Fj.c)();
```

#### 1112. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9003-L9004` → after: `L8839-L8840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8839-L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8839-L8840) · [Before (L9003-L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9003-L9004)

```diff
-         const Lp = (0, Hp.o)(this.HP.WU, BD.d.SKYBOX, (0, ep.j)()),
-           Yp = xp ? (0, VD.h)(Ip) : null;
+         const HT = (0, qT.m)(this.Rl.GB, sj.d.SKYBOX, (0, bT.k)()),
+           kT = nT ? (0, Rj.f)(MT) : null;
```

#### 1113. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9008-L9009` → after: `L8844-L8845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8844-L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8844-L8845) · [Before (L9008-L9009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9008-L9009)

```diff
-             ip = (0, pA.e)(TS.c.get("clientEscMenuOptions").pixelScale),
-             Op = (0, pA.h)(pp, ip, (0, iD.getSettingsFov)()),
+             UT = (0, Tl.c)(Ig.b.get("clientEscMenuOptions").pixelScale),
+             WT = (0, Tl.k)(TT, UT, (0, Uj.getSettingsFov)()),
```

#### 1114. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9013` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8849) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9013)

```diff
-               reflectionTexture: (0, dp.p)(Ip, {
+               reflectionTexture: (0, iT.v)(MT, {
```

#### 1115. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9022` → after: `L8858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8858) · [Before (L9022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9022)

```diff
-             pw: Ip,
+             XZ: MT,
```

#### 1116. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9027` → after: `L8863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8863) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9027)

```diff
-         Lp.Ow = !1, Lp.sy = !0, Lp.Gy = !0, Lp.applyFog = this.shouldApplyFogToSkyBox(), Lp.renderingGroupId = -1, Lp.Vy();
+         HT.QZ = !1, HT.dB = !0, HT.YB = !0, HT.applyFog = this.shouldApplyFogToSkyBox(), HT.renderingGroupId = -1, HT.tB();
```

#### 1117. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9029` → after: `L8865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8865) · [Before (L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9029)

```diff
-         (0, gp.f)(Dp, {
+         (0, ST.c)(jT, {
```

#### 1118. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9034` → after: `L8870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8870) · [Before (L9034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9034)

```diff
-         }), (0, Si.i)(Dp), (0, VD.d)(Lp, (() => {
+         }), (0, zU.f)(jT), (0, Rj.b)(HT, (() => {
```

#### 1119. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9040` → after: `L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8876) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9040)

```diff
-         null === (cp = this.skyBoxMesh) || void 0 === cp || cp.dispose(!1, !0), this.skyBoxMesh = pp, this.earthSkyKey = ip, this.updateSkyboxSize(), pp && this.HP.WU.Iw(pp, !1, this.HP.BP, !1), this.HP.WU.model.earthSky = null !== (Op = ip && (0, TD.f)(ip)) && void 0 !== Op ? Op … [truncated]
+         null === (mT = this.skyBoxMesh) || void 0 === mT || mT.dispose(!1, !0), this.skyBoxMesh = TT, this.earthSkyKey = UT, this.updateSkyboxSize(), TT && this.Rl.GB.FZ(TT, !1, this.Rl.ZL, !1), this.Rl.GB.model.earthSky = null !== (WT = UT && (0, Pj.f)(UT)) && void 0 !== WT ? WT … [truncated]
```

#### 1120. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9044` → after: `L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8880) · [Before (L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9044)

```diff
-         const pp = wp.m.subscribe("fogChunkDistanceChanged", (() => {
+         const TT = cT.j.subscribe("fogChunkDistanceChanged", (() => {
```

#### 1121. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9047` → after: `L8883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8883) · [Before (L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9047)

```diff
-           ip = xL.c.subscribe("fogChunkDistanceOverride", (() => {
+           UT = gH.d.subscribe("fogChunkDistanceOverride", (() => {
```

#### 1122. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9050` → after: `L8886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8886) · [Before (L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9050)

```diff
-           cp = xL.c.subscribe("fogBlockDistanceOverride", (() => {
+           mT = gH.d.subscribe("fogBlockDistanceOverride", (() => {
```

#### 1123. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9053` → after: `L8889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8889) · [Before (L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9053)

```diff
-           Op = xL.c.subscribe("fogColourOverride", (() => {
+           WT = gH.d.subscribe("fogColourOverride", (() => {
```

#### 1124. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9056` → after: `L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8892) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9056)

```diff
-           op = xL.c.subscribe("fogOnSkybox", (() => {
+           zT = gH.d.subscribe("fogOnSkybox", (() => {
```

#### 1125. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9060` → after: `L8896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8896) · [Before (L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9060)

```diff
-           wp.m.unsubscribe(pp), ip(), cp(), Op(), op()
+           cT.j.unsubscribe(TT), UT(), mT(), WT(), zT()
```

#### 1126. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9064` → after: `L8900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8900) · [Before (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9064)

```diff
-         return !0 === this.HP.Tu.fogOnSkybox
+         return !0 === this.Rl.kY.fogOnSkybox
```

#### 1127. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9068` → after: `L8904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8904) · [Before (L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9068)

```diff
-         const cp = null !== (pp = this.HP.Tu.fogChunkDistanceOverride) && void 0 !== pp ? pp : TS.c.get("clientEscMenuOptions").fogChunkDistance,
+         const mT = null !== (TT = this.Rl.kY.fogChunkDistanceOverride) && void 0 !== TT ? TT : Ig.b.get("clientEscMenuOptions").fogChunkDistance,
```

#### 1128. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9074` → after: `L8910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8910) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9074)

```diff
-         Ip && (null === (ip = (0, TD.f)(Ip)) || void 0 === ip ? void 0 : ip.fog) !== op && (0, jp.X)(Ip, {
+         MT && (null === (UT = (0, Pj.f)(MT)) || void 0 === UT ? void 0 : UT.fog) !== zT && (0, OT.cb)(MT, {
```

#### 1129. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9076` → after: `L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8912) · [Before (L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9076)

```diff
-         }), Op && Op.applyFog !== op && (Op.applyFog = op, (0, VD.d)(Op, (() => {
+         }), WT && WT.applyFog !== zT && (WT.applyFog = zT, (0, Rj.b)(WT, (() => {
```

#### 1130. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9078-L9084` → after: `L8914-L8920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8914-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8914-L8920) · [Before (L9078-L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9078-L9084)

```diff
-         }), this.HP.WU.yU));
-         const Sp = this.HP.Tu.fogColourOverride,
-           Lp = Sp ? (0, xp.Z)(Sp) : cA;
-         let Yp = 100 * yp.g.Qy,
-           Dp = 101 * yp.g.Qy;
-         const Ap = this.HP.Tu.fogBlockDistanceOverride;
-         (0, Np.G)(Ap) ? !TS.c.get("clientEscMenuOptions").showFog && (0, Np.G)(this.HP.Tu.fogChunkDistanceOverride) || (Yp = yp.g.Qy * cp, Dp = 0 === cp ? 5 : yp.g.Qy * (cp + 1)): (Yp = 0, Dp = Ap), (0, fD.r)(this.HP.WU, Yp, Dp, Lp)
+         }), this.Rl.GB.NB));
+         const gT = this.Rl.kY.fogColourOverride,
+           HT = gT ? (0, nT.bb)(gT) : ml;
+         let kT = 100 * BT.f.cB,
+           jT = 101 * BT.f.cB;
+         const lT = this.Rl.kY.fogBlockDistanceOverride;
+         (0, sT.E)(lT) ? !Ig.b.get("clientEscMenuOptions").showFog && (0, sT.E)(this.Rl.kY.fogChunkDistanceOverride) || (kT = BT.f.cB * mT, jT = 0 === mT ? 5 : BT.f.cB * (mT + 1)): (kT = 0, jT = lT), (0, Vj.m)(this.Rl.GB, kT, jT, HT)
```

#### 1131. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9088` → after: `L8924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8924) · [Before (L9088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9088)

```diff
-         const pp = xL.c.subscribe("lightingOverride", (() => {
+         const TT = gH.d.subscribe("lightingOverride", (() => {
```

#### 1132. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9091` → after: `L8927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8927) · [Before (L9091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9091)

```diff
-           ip = xL.c.subscribe("skyLightColourOverride", (() => {
+           UT = gH.d.subscribe("skyLightColourOverride", (() => {
```

#### 1133. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9094` → after: `L8930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8930) · [Before (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9094)

```diff
-           cp = xL.c.subscribe("ambientLightColourOverride", (() => {
+           mT = gH.d.subscribe("ambientLightColourOverride", (() => {
```

#### 1134. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9097` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8933) · [Before (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9097)

```diff
-           Op = xL.c.subscribe("visionMinLightColour", (() => {
+           WT = gH.d.subscribe("visionMinLightColour", (() => {
```

#### 1135. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9100` → after: `L8936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8936) · [Before (L9100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9100)

```diff
-           op = wp.m.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+           zT = cT.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 1136. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9104` → after: `L8940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8940) · [Before (L9104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9104)

```diff
-           pp(), ip(), cp(), Op(), wp.m.unsubscribe(op)
+           TT(), UT(), mT(), WT(), cT.j.unsubscribe(zT)
```

#### 1137. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9110-L9111` → after: `L8946-L8947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8946-L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8946-L8947) · [Before (L9110-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9110-L9111)

```diff
-         } = this.HP.Tu, ip = TS.c.get("clientEscMenuOptions").enableLighting, cp = null !== pp && void 0 !== pp ? pp : ip, Op = this.HP.WU.ZU !== cp;
-         this.HP.WU.ZU = cp, Op && ((0, bD.e)(), cp && this.HP.Zk.requeueChunksForLighting(), KD.lightingChanged(this.HP.Dy));
+         } = this.Rl.kY, UT = Ig.b.get("clientEscMenuOptions").enableLighting, mT = null !== TT && void 0 !== TT ? TT : UT, WT = this.Rl.GB.dZ !== mT;
+         this.Rl.GB.dZ = mT, WT && ((0, uj.d)(), mT && this.Rl.JY.requeueChunksForLighting(), Aj.lightingChanged(this.Rl.Np));
```

#### 1138. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9116-L9117` → after: `L8952-L8953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8952-L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8952-L8953) · [Before (L9116-L9117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9116-L9117)

```diff
-         } = this.HP.Tu;
-         this.HP.WU.skyLightColourOverride = op ? (0, xp.Z)(op) : null, this.HP.WU.ambientLightColourOverride = Ip ? (0, xp.Z)(Ip) : null, this.HP.WU.visionMinLightColour = Sp ? (0, xp.Z)(Sp) : null
+         } = this.Rl.kY;
+         this.Rl.GB.skyLightColourOverride = zT ? (0, nT.bb)(zT) : null, this.Rl.GB.ambientLightColourOverride = MT ? (0, nT.bb)(MT) : null, this.Rl.GB.visionMinLightColour = gT ? (0, nT.bb)(gT) : null
```

#### 1139. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9125` → after: `L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8961) · [Before (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9125)

```diff
-       const np = null === (op = null !== (Ip = cp.infiniteDistance) && void 0 !== Ip ? Ip : null === Op || void 0 === Op ? void 0 : Op.infiniteDistance) || void 0 === op || op;
+       const rT = null === (zT = null !== (MT = mT.infiniteDistance) && void 0 !== MT ? MT : null === WT || void 0 === WT ? void 0 : WT.infiniteDistance) || void 0 === zT || zT;
```

#### 1140. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9127-L9129` → after: `L8963-L8965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8963-L8965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8963-L8965) · [Before (L9127-L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9127-L9129)

```diff
-       const Fp = null !== (Sp = cp.sunPosition) && void 0 !== Sp ? Sp : null === Op || void 0 === Op ? void 0 : Op.sunPosition,
-         gp = null !== (xp = cp.up) && void 0 !== xp ? xp : null === Op || void 0 === Op ? void 0 : Op.up;
-       (0, jp.X)(ip, {
+       const KT = null !== (gT = mT.sunPosition) && void 0 !== gT ? gT : null === WT || void 0 === WT ? void 0 : WT.sunPosition,
+         ST = null !== (nT = mT.up) && void 0 !== nT ? nT : null === WT || void 0 === WT ? void 0 : WT.up;
+       (0, OT.cb)(UT, {
```

#### 1141. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9131-L9138` → after: `L8967-L8974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8967-L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8967-L8974) · [Before (L9131-L9138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9131-L9138)

```diff
-         inclination: null !== (Lp = null !== (Yp = cp.inclination) && void 0 !== Yp ? Yp : null === Op || void 0 === Op ? void 0 : Op.inclination) && void 0 !== Lp ? Lp : -.2,
-         turbidity: null !== (Dp = null !== (Ap = cp.turbidity) && void 0 !== Ap ? Ap : null === Op || void 0 === Op ? void 0 : Op.turbidity) && void 0 !== Dp ? Dp : 10,
-         luminance: null !== (Pp = null !== (Wp = cp.luminance) && void 0 !== Wp ? Wp : null === Op || void 0 === Op ? void 0 : Op.luminance) && void 0 !== Pp ? Pp : .1,
-         rayleigh: null !== (yp = null !== (Up = cp.rayleigh) && void 0 !== Up ? Up : null === Op || void 0 === Op ? void 0 : Op.rayleigh) && void 0 !== yp ? yp : 2,
-         mieCoefficient: null !== (wp = null !== (vp = cp.mieCoefficient) && void 0 !== vp ? vp : null === Op || void 0 === Op ? void 0 : Op.mieCoefficient) && void 0 !== wp ? wp : .005,
-         mieDirectionalG: null !== (tp = null !== (Hp = cp.mieDirectionalG) && void 0 !== Hp ? Hp : null === Op || void 0 === Op ? void 0 : Op.mieDirectionalG) && void 0 !== tp ? tp : .8,
-         distance: null !== (dp = null !== (ep = cp.distance) && void 0 !== ep ? ep : null === Op || void 0 === Op ? void 0 : Op.distance) && void 0 !== dp ? dp : 500,
-         useSunPosition: null !== (kp = null !== (mp = cp.useSunPosition) && void 0 !== mp ? mp : null === Op || void 0 === Op ? void 0 : Op.useSunPosition) && void 0 !== kp ? kp : qD,
+         inclination: null !== (HT = null !== (kT = mT.inclination) && void 0 !== kT ? kT : null === WT || void 0 === WT ? void 0 : WT.inclination) && void 0 !== HT ? HT : -.2,
+         turbidity: null !== (jT = null !== (lT = mT.turbidity) && void 0 !== lT ? lT : null === WT || void 0 === WT ? void 0 : WT.turbidity) && void 0 !== jT ? jT : 10,
+         luminance: null !== (LT = null !== (pT = mT.luminance) && void 0 !== pT ? pT : null === WT || void 0 === WT ? void 0 : WT.luminance) && void 0 !== LT ? LT : .1,
+         rayleigh: null !== (BT = null !== (ZT = mT.rayleigh) && void 0 !== ZT ? ZT : null === WT || void 0 === WT ? void 0 : WT.rayleigh) && void 0 !== BT ? BT : 2,
+         mieCoefficient: null !== (cT = null !== (vT = mT.mieCoefficient) && void 0 !== vT ? vT : null === WT || void 0 === WT ? void 0 : WT.mieCoefficient) && void 0 !== cT ? cT : .005,
+         mieDirectionalG: null !== (fT = null !== (qT = mT.mieDirectionalG) && void 0 !== qT ? qT : null === WT || void 0 === WT ? void 0 : WT.mieDirectionalG) && void 0 !== fT ? fT : .8,
+         distance: null !== (iT = null !== (bT = mT.distance) && void 0 !== bT ? bT : null === WT || void 0 === WT ? void 0 : WT.distance) && void 0 !== iT ? iT : 500,
+         useSunPosition: null !== (eT = null !== (YT = mT.useSunPosition) && void 0 !== YT ? YT : null === WT || void 0 === WT ? void 0 : WT.useSunPosition) && void 0 !== eT ? eT : dj,
```

#### 1142. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9140-L9143` → after: `L8976-L8979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8976-L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8976-L8979) · [Before (L9140-L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9140-L9143)

```diff
-         cameraOffset: [null !== (Rp = null !== (qp = cp.xCameraOffset) && void 0 !== qp ? qp : null === Op || void 0 === Op ? void 0 : Op.xCameraOffset) && void 0 !== Rp ? Rp : 0, null !== (Mp = null !== (Cp = cp.yCameraOffset) && void 0 !== Cp ? Cp : null === Op || void 0 === Op … [truncated]
-         azimuth: null !== (lp = null !== (Qp = cp.azimuth) && void 0 !== Qp ? Qp : null === Op || void 0 === Op ? void 0 : Op.azimuth) && void 0 !== lp ? lp : .55,
-         sunPosition: [null !== (Jp = null === Fp || void 0 === Fp ? void 0 : Fp[0]) && void 0 !== Jp ? Jp : MD[0], null !== (Bp = null === Fp || void 0 === Fp ? void 0 : Fp[1]) && void 0 !== Bp ? Bp : MD[1], null !== (Np = null === Fp || void 0 === Fp ? void 0 : Fp[2]) && void 0  … [truncated]
-         up: [null !== (Tp = null === gp || void 0 === gp ? void 0 : gp[0]) && void 0 !== Tp ? Tp : RD[0], null !== (fp = null === gp || void 0 === gp ? void 0 : gp[1]) && void 0 !== fp ? fp : RD[1], null !== (bp = null === gp || void 0 === gp ? void 0 : gp[2]) && void 0 !== bp ?  … [truncated]
+         cameraOffset: [null !== (JT = null !== (xT = mT.xCameraOffset) && void 0 !== xT ? xT : null === WT || void 0 === WT ? void 0 : WT.xCameraOffset) && void 0 !== JT ? JT : 0, null !== (dT = null !== (wT = mT.yCameraOffset) && void 0 !== wT ? wT : null === WT || void 0 === WT … [truncated]
+         azimuth: null !== (yT = null !== (XT = mT.azimuth) && void 0 !== XT ? XT : null === WT || void 0 === WT ? void 0 : WT.azimuth) && void 0 !== yT ? yT : .55,
+         sunPosition: [null !== (IT = null === KT || void 0 === KT ? void 0 : KT[0]) && void 0 !== IT ? IT : wj[0], null !== (QT = null === KT || void 0 === KT ? void 0 : KT[1]) && void 0 !== QT ? QT : wj[1], null !== (sT = null === KT || void 0 === KT ? void 0 : KT[2]) && void 0  … [truncated]
+         up: [null !== (FT = null === ST || void 0 === ST ? void 0 : ST[0]) && void 0 !== FT ? FT : xj[0], null !== (PT = null === ST || void 0 === ST ? void 0 : ST[1]) && void 0 !== PT ? PT : xj[1], null !== (VT = null === ST || void 0 === ST ? void 0 : ST[2]) && void 0 !== VT ?  … [truncated]
```

#### 1143. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9153` → after: `L8989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8989) · [Before (L9153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9153)

```diff
-           }(0, jp.X)(ip, {
+           }(0, OT.cb)(UT, {
```

#### 1144. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9157` → after: `L8993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8993) · [Before (L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9157)

```diff
-       }(pp, ip, null !== (hp = null !== (ap = cp.vertexTint) && void 0 !== ap ? ap : null === Op || void 0 === Op ? void 0 : Op.vertexTint) && void 0 !== hp ? hp : [255, 255, 255])
+       }(TT, UT, null !== (uT = null !== (CT = mT.vertexTint) && void 0 !== CT ? CT : null === WT || void 0 === WT ? void 0 : WT.vertexTint) && void 0 !== uT ? uT : [255, 255, 255])
```

#### 1145. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9162` → after: `L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L8998) · [Before (L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9162)

```diff
-       return null !== (cp = null !== (Op = pp.dithering) && void 0 !== Op ? Op : null === ip || void 0 === ip ? void 0 : ip.dithering) && void 0 !== cp && cp
+       return null !== (mT = null !== (WT = TT.dithering) && void 0 !== WT ? WT : null === UT || void 0 === UT ? void 0 : UT.dithering) && void 0 !== mT && mT
```

#### 1146. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9164` → after: `L9000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9000) · [Before (L9164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9164)

```diff
-     var SA = cp(37473);
+     var gl = mT(37351);
```

#### 1147. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9178` → after: `L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9014) · [Before (L9178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9178)

```diff
-         this.HP = pp, this.rendererId = ip, this.config = cp, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
+         this.Rl = TT, this.rendererId = UT, this.config = mT, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
```

#### 1148. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9180` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9016) · [Before (L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9180)

```diff
-         })), DA.registerRenderer(this.HP, this)
+         })), jl.registerRenderer(this.Rl, this)
```

#### 1149. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9183` → after: `L9019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9019) · [Before (L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9183)

```diff
-         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), DA.unregisterRenderer(this.HP, this))
+         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), jl.unregisterRenderer(this.Rl, this))
```

#### 1150. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9191` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9027) · [Before (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9191)

```diff
-         }, pp.on("LP", DA.tickHandler))
+         }, TT.on("Cl", jl.tickHandler))
```

#### 1151. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9194` → after: `L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9030) · [Before (L9194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9194)

```diff
-         delete DA.allRenderers[ip.rendererId], DA.tickHandler && 0 === Object.keys(DA.allRenderers).length && (pp.off("LP", DA.tickHandler), DA.tickHandler = null)
+         delete jl.allRenderers[UT.rendererId], jl.tickHandler && 0 === Object.keys(jl.allRenderers).length && (TT.off("Cl", jl.tickHandler), jl.tickHandler = null)
```

#### 1152. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9205` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9041) · [Before (L9205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9205)

```diff
-         const Op = [(0, Np.v)(pp), (0, Np.v)(ip), (0, Np.v)(cp)],
+         const WT = [(0, sT.y)(TT), (0, sT.y)(UT), (0, sT.y)(mT)],
```

#### 1153. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9213` → after: `L9049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9049) · [Before (L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9213)

```diff
-                     (op.isChunkBound && Ip.isChunkBound ? ip : cp).push(...Op(pp, yA(op.offset), yA(Ip.offset)))
+                     (zT.isChunkBound && MT.isChunkBound ? UT : mT).push(...WT(TT, Bl(zT.offset), Bl(MT.offset)))
```

#### 1154. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9216` → after: `L9052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9052) · [Before (L9216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9216)

```diff
-         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${pp}-${ip}-${cp}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", op, this.borderMaterial, Op), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${pp}-${ip}-${cp}`, t … [truncated]
+         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${TT}-${UT}-${mT}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", zT, this.borderMaterial, WT), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${TT}-${UT}-${mT}`, t … [truncated]
```

#### 1155. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9219-L9220` → after: `L9055-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9055-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9055-L9056) · [Before (L9219-L9220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9219-L9220)

```diff
-         const op = (0, Hp.o)(this.HP.WU, pp, function(pp) {
-           return (0, SA.h)(pp.map((pp => {
+         const zT = (0, qT.m)(this.Rl.GB, TT, function(TT) {
+           return (0, gl.d)(TT.map((TT => {
```

#### 1156. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9222` → after: `L9058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9058) · [Before (L9222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9222)

```diff
-             return [(0, ep.i)({
+             return [(0, bT.g)({
```

#### 1157. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9228` → after: `L9064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9064) · [Before (L9228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9228)

```diff
-         return op.material = cp, op.Ow = !1, this.HP.WU.Iw(op, !0, Op), op
+         return zT.material = mT, zT.QZ = !1, this.Rl.GB.FZ(zT, !0, WT), zT
```

#### 1158. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9234` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9070) · [Before (L9234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9234)

```diff
-           pw: this.HP.WU.pw,
+           XZ: this.Rl.GB.XZ,
```

#### 1159. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9236` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9072) · [Before (L9236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9236)

```diff
-             ...jp.e,
+             ...OT.c,
```

#### 1160. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9241` → after: `L9077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9077) · [Before (L9241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9241)

```diff
-             transparencyMode: qp.k.alphaBlend
+             transparencyMode: xT.j.alphaBlend
```

#### 1161. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9265` → after: `L9101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9101) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9265)

```diff
-       return 0 === pp ? -.01 : pp === Np.z ? Np.z + LA : pp + LA
+       return 0 === TT ? -.01 : TT === sT.z ? sT.z + Hl : TT + Hl
```

#### 1162. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9271` → after: `L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9107) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9271)

```diff
-         this.HP = pp, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(UA), this.sampleZ = new Float64Array(UA), this.sampleY = new Float64Array(UA), this.sampleAirborne = new Uint8Array(UA), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
+         this.Rl = TT, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(Zl), this.sampleZ = new Float64Array(Zl), this.sampleY = new Float64Array(Zl), this.sampleAirborne = new Uint8Array(Zl), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
```

#### 1163. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9280` → after: `L9116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9116) · [Before (L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9280)

```diff
-         const ip = xL.c.subscribe("groundArrowPath", (pp => {
+         const UT = gH.d.subscribe("groundArrowPath", (TT => {
```

#### 1164. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9289` → after: `L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9125) · [Before (L9289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9289)

```diff
-         this.config = pp, this.renderer.setColour(pp.colour), this.renderCallback || (this.renderCallback = pp => this.onBeforeRender(pp), this.HP.on("beforeRender", this.renderCallback))
+         this.config = TT, this.renderer.setColour(TT.colour), this.renderCallback || (this.renderCallback = TT => this.onBeforeRender(TT), this.Rl.on("beforeRender", this.renderCallback))
```

#### 1165. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9297` → after: `L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9133) · [Before (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9297)

```diff
-         const pp = this.HP.Yk.xZ(this.HP.NJ);
+         const TT = this.Rl.pY.FN(this.Rl.VV);
```

#### 1166. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9299` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9135) · [Before (L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9299)

```diff
-         tp().copy(this.worldOffset, this.HP.BP), tp().add(this.playerPos, pp.Fs, this.worldOffset);
+         fT().copy(this.worldOffset, this.Rl.ZL), fT().add(this.playerPos, TT.sE, this.worldOffset);
```

#### 1167. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9308` → after: `L9144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9144) · [Before (L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9308)

```diff
-         if (XL.endAtSolidFace && this.HP.WP.vG(Math.floor(ip[0]), Math.floor(ip[1]), Math.floor(ip[2]))) {
+         if (aH.endAtSolidFace && this.Rl.Nl.sG(Math.floor(UT[0]), Math.floor(UT[1]), Math.floor(UT[2]))) {
```

#### 1168. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9327` → after: `L9163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9163) · [Before (L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9327)

```diff
-           wp = xp.d.lerp(yp, ip[1], Up),
+           cT = nT.e.lerp(BT, UT[1], ZT),
```

#### 1169. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9355` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9191) · [Before (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9355)

```diff
-         return this.HP.WP.vG(pp, ip, cp) && !this.HP.WP.vG(pp, ip + 1, cp)
+         return this.Rl.Nl.sG(TT, UT, mT) && !this.Rl.Nl.sG(TT, UT + 1, mT)
```

#### 1170. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9358` → after: `L9194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9194) · [Before (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9358)

```diff
-         this.renderCallback && (this.HP.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
+         this.renderCallback && (this.Rl.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
```

#### 1171. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9361-L9362` → after: `L9197-L9198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9197-L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9197-L9198) · [Before (L9361-L9362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9361-L9362)

```diff
-     var tA = cp(37021),
-       HA = cp(38033);
+     var fl = mT(36918),
+       ql = mT(37936);
```

#### 1172. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9365` → after: `L9201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9201) · [Before (L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9365)

```diff
-         this.HP = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (pp, ip, cp, Op, op) => {
+         this.Rl = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (TT, UT, mT, WT, zT) => {
```

#### 1173. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9367` → after: `L9203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9203) · [Before (L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9367)

```diff
-         }, this.HP = pp, this.bloxd = ip
+         }, this.Rl = TT, this.bloxd = UT
```

#### 1174. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9370` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9206) · [Before (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9370)

```diff
-         if (!(op in HA.f)) return console.error(`Called for non multiblock ${op}`), !1;
+         if (!(zT in ql.i)) return console.error(`Called for non multiblock ${zT}`), !1;
```

#### 1175. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9377-L9379` → after: `L9213-L9215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9213-L9215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9213-L9215) · [Before (L9377-L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9377-L9379)

```diff
-           of HA.f[op].positions) {
-           const op = this.bloxd.nH(ip + Sp, cp + xp, Op + Lp);
-           if (this.HP.mpp(op) || !this.bloxd.playerCanChangePos(pp, ip + Sp, cp + xp, Op + Lp, Dp.e[Ip].id)) return !1
+           of ql.i[zT].positions) {
+           const zT = this.bloxd.uq(UT + gT, mT + nT, WT + HT);
+           if (this.Rl.JTT(zT) || !this.bloxd.playerCanChangePos(TT, UT + gT, mT + nT, WT + HT, jT.g[MT].id)) return !1
```

#### 1176. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9391` → after: `L9227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9227) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9391)

```diff
-           of HA.f[ip].positions) cp.push([pp[0] + op, pp[1] + Ip, pp[2] + Sp]);
+           of ql.i[UT].positions) mT.push([TT[0] + zT, TT[1] + MT, TT[2] + gT]);
```

#### 1177. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9395` → after: `L9231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9231) · [Before (L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9395)

```diff
-         if (pp in HA.d) {
+         if (TT in ql.e) {
```

#### 1178. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9412` → after: `L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9248) · [Before (L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9412)

```diff
-             of HA.f[op].positions) {
+             of ql.i[zT].positions) {
```

#### 1179. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9416` → after: `L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9252) · [Before (L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9416)

```diff
-               Wp = this.bloxd.nH(op, Ap, Pp);
+               pT = this.bloxd.uq(zT, lT, LT);
```

#### 1180. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9429` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9265) · [Before (L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9429)

```diff
-             block: (0, Dp.d)(pp),
+             block: (0, jT.e)(TT),
```

#### 1181. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9443-L9444` → after: `L9279-L9280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9279-L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9279-L9280) · [Before (L9443-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9443-L9444)

```diff
-         } = HA.d[pp], Lp = ip - Ip, Yp = cp - Sp, Dp = Op - xp, Ap = this.bloxd.nH(Lp, Yp, Dp);
-         if (Ap in HA.f)
+         } = ql.e[TT], HT = UT - MT, kT = mT - gT, jT = WT - nT, lT = this.bloxd.uq(HT, kT, jT);
+         if (lT in ql.i)
```

#### 1182. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9451` → after: `L9287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9287) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9451)

```diff
-             of HA.f[Ap].positions)
+             of ql.i[lT].positions)
```

#### 1183. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9469-L9471` → after: `L9305-L9307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9305-L9307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9305-L9307) · [Before (L9469-L9471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9469-L9471)

```diff
-         const xp = this.bloxd.nH(pp, ip, cp),
-           Lp = null !== (op = this.getRestoredTop(pp, ip, cp, xp, Op, Sp)) && void 0 !== op ? op : Op;
-         if (xp in HA.d) {
+         const nT = this.bloxd.uq(TT, UT, mT),
+           HT = null !== (zT = this.getRestoredTop(TT, UT, mT, nT, WT, gT)) && void 0 !== zT ? zT : WT;
+         if (nT in ql.e) {
```

#### 1184. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9484` → after: `L9320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9320) · [Before (L9484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9484)

```diff
-             of HA.f[Op].positions) {
+             of ql.i[WT].positions) {
```

#### 1185. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9488` → after: `L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9324) · [Before (L9488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9488)

```diff
-             this.bloxd.nH(Op, Yp, Dp) === pp && Ip(Op, Yp, Dp, 0, !0)
+             this.bloxd.uq(WT, kT, jT) === TT && MT(WT, kT, jT, 0, !0)
```

#### 1186. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9491` → after: `L9327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9327) · [Before (L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9491)

```diff
-         if (Lp in HA.d) {
+         if (HT in ql.e) {
```

#### 1187. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9497` → after: `L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9333) · [Before (L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9497)

```diff
-           } = HA.d[Lp];
+           } = ql.e[HT];
```

#### 1188. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9504` → after: `L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9340) · [Before (L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9504)

```diff
-             of HA.f[Op].positions) {
+             of ql.i[WT].positions) {
```

#### 1189. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9508-L9511` → after: `L9344-L9347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9344-L9347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9344-L9347) · [Before (L9508-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9508-L9511)

```diff
-             if (!this.bloxd.lG(Op, Wp, yp)) continue;
-             const Up = this.bloxd.nH(Op, Wp, yp),
-               wp = !this.HP.UW.vG(Up);
-             Ip(Op, Wp, yp, Dp.e[Lp].id, wp)
+             if (!this.bloxd.hG(WT, pT, BT)) continue;
+             const ZT = this.bloxd.uq(WT, pT, BT),
+               cT = !this.Rl.DL.sG(ZT);
+             MT(WT, pT, BT, jT.g[HT].id, cT)
```

#### 1190. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9518-L9519` → after: `L9354-L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9354-L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9354-L9355) · [Before (L9518-L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9518-L9519)

```diff
-         const Sp = null === (op = Dp.e[Op]) || void 0 === op ? void 0 : op.attachedTop;
-         return !!Sp && (null === (Ip = Dp.e[this.bloxd.nH(pp, ip, cp)]) || void 0 === Ip ? void 0 : Ip.meta.rootId) === Dp.e[Sp].meta.rootId
+         const gT = null === (zT = jT.g[WT]) || void 0 === zT ? void 0 : zT.attachedTop;
+         return !!gT && (null === (MT = jT.g[this.bloxd.uq(TT, UT, mT)]) || void 0 === MT ? void 0 : MT.meta.rootId) === jT.g[gT].meta.rootId
```

#### 1191. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9523-L9528` → after: `L9359-L9364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9359-L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9359-L9364) · [Before (L9523-L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9523-L9528)

```diff
-         const xp = Dp.e[op],
-           Lp = (null === xp || void 0 === xp ? void 0 : xp.attachedTop) && Dp.e[xp.attachedTop],
-           Yp = null === (Sp = Dp.e[Op]) || void 0 === Sp ? void 0 : Sp.meta.rootId;
-         if (null === Ip || !Lp || Yp === xp.meta.rootId || Yp === Lp.meta.rootId || !this.bloxd.lG(pp, ip - 1, cp)) return null;
-         const Ap = Dp.e[this.bloxd.nH(pp, ip - 1, cp)];
-         return (null === Ap || void 0 === Ap ? void 0 : Ap.meta.rootId) === xp.meta.rootId ? Dp.e[Ap.attachedTop].id : null
+         const nT = jT.g[zT],
+           HT = (null === nT || void 0 === nT ? void 0 : nT.attachedTop) && jT.g[nT.attachedTop],
+           kT = null === (gT = jT.g[WT]) || void 0 === gT ? void 0 : gT.meta.rootId;
+         if (null === MT || !HT || kT === nT.meta.rootId || kT === HT.meta.rootId || !this.bloxd.hG(TT, UT - 1, mT)) return null;
+         const lT = jT.g[this.bloxd.uq(TT, UT - 1, mT)];
+         return (null === lT || void 0 === lT ? void 0 : lT.meta.rootId) === nT.meta.rootId ? jT.g[lT.attachedTop].id : null
```

#### 1192. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9532-L9538` → after: `L9368-L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9368-L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9368-L9374) · [Before (L9532-L9538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9532-L9538)

```diff
-         const Ap = null === (xp = Dp.e[Op]) || void 0 === xp ? void 0 : xp.attachedTop,
-           Pp = null === (Lp = Dp.e[op]) || void 0 === Lp ? void 0 : Lp.attachedTop;
-         if (!Ap && !Pp || !this.bloxd.lG(pp, ip + 1, cp)) return;
-         const Wp = this.bloxd.nH(pp, ip + 1, cp),
-           yp = !!Ap && (null === (Yp = Dp.e[Wp]) || void 0 === Yp ? void 0 : Yp.meta.rootId) === Dp.e[Ap].meta.rootId,
-           Up = Pp ? Dp.e[Pp].id : 0;
-         Ap && Pp && Dp.e[Op].meta.rootId === Dp.e[op].meta.rootId ? yp && Wp !== Up && Ip(pp, ip + 1, cp, Up, !0) : !Pp || !yp && 0 !== Wp || null !== Sp && !this.placerCanAddTop(Sp, pp, ip + 1, cp, Up) ? yp && Ip(pp, ip + 1, cp, 0, !0) : Ip(pp, ip + 1, cp, Up, !0)
+         const lT = null === (nT = jT.g[WT]) || void 0 === nT ? void 0 : nT.attachedTop,
+           LT = null === (HT = jT.g[zT]) || void 0 === HT ? void 0 : HT.attachedTop;
+         if (!lT && !LT || !this.bloxd.hG(TT, UT + 1, mT)) return;
+         const pT = this.bloxd.uq(TT, UT + 1, mT),
+           BT = !!lT && (null === (kT = jT.g[pT]) || void 0 === kT ? void 0 : kT.meta.rootId) === jT.g[lT].meta.rootId,
+           ZT = LT ? jT.g[LT].id : 0;
+         lT && LT && jT.g[WT].meta.rootId === jT.g[zT].meta.rootId ? BT && pT !== ZT && MT(TT, UT + 1, mT, ZT, !0) : !LT || !BT && 0 !== pT || null !== gT && !this.placerCanAddTop(gT, TT, UT + 1, mT, ZT) ? BT && MT(TT, UT + 1, mT, 0, !0) : MT(TT, UT + 1, mT, ZT, !0)
```

#### 1193. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9544` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9380) · [Before (L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9544)

```diff
-     var eA = cp(9399);
+     var bl = mT(9380);
```

#### 1194. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9548` → after: `L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9384) · [Before (L9548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9548)

```diff
-       (null === pp || void 0 === pp ? void 0 : pp.chestStr) !== Np.e || Object.isFrozen(pp) || (pp.chestStr = (0, Np.F)(pp.chestStr))
+       (null === TT || void 0 === TT ? void 0 : TT.chestStr) !== sT.e || Object.isFrozen(TT) || (TT.chestStr = (0, sT.D)(TT.chestStr))
```

#### 1195. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9555` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9391) · [Before (L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9555)

```diff
-         if (this.storage.get(pp, ip, cp) && console.error(new Error(`adding chunk x y z ${pp} ${ip} ${cp} to dataowner that already exists`).stack), 0 === Op.length) return void this.storage.set(pp, ip, cp, uA);
+         if (this.storage.get(TT, UT, mT) && console.error(new Error(`adding chunk x y z ${TT} ${UT} ${mT} to dataowner that already exists`).stack), 0 === WT.length) return void this.storage.set(TT, UT, mT, Ol);
```

#### 1196. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9566-L9567` → after: `L9402-L9403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9402-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9402-L9403) · [Before (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9566-L9567)

```diff
-           (pp[0] > 31 || pp[1] > 31 || pp[2] > 31 || pp[0] < 0 || pp[1] < 0 || pp[2] < 0) && (pp = (0, Np.ab)(pp));
-           const ip = null !== Sp && void 0 !== Sp ? Sp : {
+           (TT[0] > 31 || TT[1] > 31 || TT[2] > 31 || TT[0] < 0 || TT[1] < 0 || TT[2] < 0) && (TT = (0, sT.R)(TT));
+           const UT = null !== gT && void 0 !== gT ? gT : {
```

#### 1197. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9571` → after: `L9407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9407) · [Before (L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9571)

```diff
-           jA(ip.persisted), op[`${pp[0]}|${pp[1]}|${pp[2]}`] = ip
+           el(UT.persisted), zT[`${TT[0]}|${TT[1]}|${TT[2]}`] = UT
```

#### 1198. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9600` → after: `L9436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9436) · [Before (L9600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9600)

```diff
-           if ((0, Np.G)(pp)) console.error("ChunkInfo block at local pos", Sp, "was nullish:", pp);
+           if ((0, sT.E)(TT)) console.error("ChunkInfo block at local pos", gT, "was nullish:", TT);
```

#### 1199. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9613` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9449) · [Before (L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9613)

```diff
-           Ip = [pp * yp.g.Qy, ip * yp.g.Qy, cp * yp.g.Qy];
+           MT = [TT * BT.f.cB, UT * BT.f.cB, mT * BT.f.cB];
```

#### 1200. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9618` → after: `L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9454) · [Before (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9618)

```diff
-             op = this.bloxd.nH(cp[0], cp[1], cp[2]);
+             zT = this.bloxd.uq(mT[0], mT[1], mT[2]);
```

#### 1201. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9624-L9626` → after: `L9460-L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9460-L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9460-L9462) · [Before (L9624-L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9624-L9626)

```diff
-         const Op = (0, Np.Q)(pp),
-           op = (0, Np.Q)(ip),
-           Ip = (0, Np.Q)(cp),
+         const WT = (0, sT.H)(TT),
+           zT = (0, sT.H)(UT),
+           MT = (0, sT.H)(mT),
```

#### 1202. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9629` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9465) · [Before (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9629)

```diff
-         delete Sp[`${(0,Np.S)(pp)}|${(0,Np.S)(ip)}|${(0,Np.S)(cp)}`]
+         delete gT[`${(0,sT.I)(TT)}|${(0,sT.I)(UT)}|${(0,sT.I)(mT)}`]
```

#### 1203. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9634` → after: `L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9470) · [Before (L9634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9634)

```diff
-         const Ip = yp.g.Qy;
+         const MT = BT.f.cB;
```

#### 1204. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9641` → after: `L9477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9477) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9641)

```diff
-         return this.storage.get((0, Np.Q)(pp), (0, Np.Q)(ip), (0, Np.Q)(cp))[`${(0,Np.S)(pp)}|${(0,Np.S)(ip)}|${(0,Np.S)(cp)}`]
+         return this.storage.get((0, sT.H)(TT), (0, sT.H)(UT), (0, sT.H)(mT))[`${(0,sT.I)(TT)}|${(0,sT.I)(UT)}|${(0,sT.I)(mT)}`]
```

#### 1205. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9656-L9658` → after: `L9492-L9494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9492-L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9492-L9494) · [Before (L9656-L9658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9656-L9658)

```diff
-         const Ip = (0, Np.Q)(pp),
-           Sp = (0, Np.Q)(ip),
-           xp = (0, Np.Q)(cp);
+         const MT = (0, sT.H)(TT),
+           gT = (0, sT.H)(UT),
+           nT = (0, sT.H)(mT);
```

#### 1206. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9661` → after: `L9497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9497) · [Before (L9661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9661)

```diff
-         const Yp = `${(0,Np.S)(pp)}|${(0,Np.S)(ip)}|${(0,Np.S)(cp)}`,
+         const kT = `${(0,sT.I)(TT)}|${(0,sT.I)(UT)}|${(0,sT.I)(mT)}`,
```

#### 1207. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9667` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9503) · [Before (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9667)

```diff
-         const Ip = arguments.length >= 4 ? Op : this.getBlockData(pp, ip, cp),
+         const MT = arguments.length >= 4 ? WT : this.getBlockData(TT, UT, mT),
```

#### 1208. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9693-L9696` → after: `L9529-L9532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9529-L9532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9529-L9532) · [Before (L9693-L9696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9693-L9696)

```diff
-     var mA = cp(37246),
-       RA = cp(39410),
-       qA = cp(39418),
-       MA = cp(38272),
+     var Jl = mT(37125),
+       xl = mT(39353),
+       dl = mT(39362),
+       wl = mT(38184),
```

#### 1209. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9703` → after: `L9539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9539) · [Before (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9703)

```diff
-         this.bloxd = void 0, this.books = new Map, this.bloxd = pp, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.HP.NJ)
+         this.bloxd = void 0, this.books = new Map, this.bloxd = TT, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.Rl.VV)
```

#### 1210. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9719` → after: `L9555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9555) · [Before (L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9719)

```diff
-           op = (0, qA.e)(null !== cp && void 0 !== cp ? cp : lA);
+           zT = (0, dl.e)(null !== mT && void 0 !== mT ? mT : Xl);
```

#### 1211. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9734` → after: `L9570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9570) · [Before (L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9734)

```diff
-         return void 0 !== op ? op : Object.hasOwn(Op.base, ip) ? Op.base[ip] : void 0
+         return void 0 !== zT ? zT : Object.hasOwn(WT.base, UT) ? WT.base[UT] : void 0
```

#### 1212. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9745` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9581) · [Before (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9745)

```diff
-           ip(Sp, null !== (Ip = null === op || void 0 === op ? void 0 : op.get(Sp)) && void 0 !== Ip ? Ip : Op[Sp])
+           UT(gT, null !== (MT = null === zT || void 0 === zT ? void 0 : zT.get(gT)) && void 0 !== MT ? MT : WT[gT])
```

#### 1213. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9753` → after: `L9589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9589) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9753)

```diff
-         return void 0 !== Op && (Op.base !== RA.b || (null !== (ip = null === (cp = Op.overrides) || void 0 === cp ? void 0 : cp.size) && void 0 !== ip ? ip : 0) > 0)
+         return void 0 !== WT && (WT.base !== xl.b || (null !== (UT = null === (mT = WT.overrides) || void 0 === mT ? void 0 : mT.size) && void 0 !== UT ? UT : 0) > 0)
```

#### 1214. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9761` → after: `L9597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9597) · [Before (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9761)

```diff
-           FD: op,
+           ej: zT,
```

#### 1215. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9773` → after: `L9609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9609) · [Before (L9773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9773)

```diff
-               FD: xp,
+               ej: nT,
```

#### 1216. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9777` → after: `L9613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9613) · [Before (L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9777)

```diff
-               FD: xp,
+               ej: nT,
```

#### 1217. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9786` → after: `L9622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9622) · [Before (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9786)

```diff
-         Array.isArray(op) ? Ip = op : (Ip = EA, EA[0] = op, EA.length = 1);
+         Array.isArray(zT) ? MT = zT : (MT = al, al[0] = zT, al.length = 1);
```

#### 1218. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9844` → after: `L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9680) · [Before (L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9844)

```diff
-         if (!1 !== this.bloxd.UW.metadatas[cp].stackable) {
+         if (!1 !== this.bloxd.DL.metadatas[mT].stackable) {
```

#### 1219. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9854-L9855` → after: `L9690-L9691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9690-L9691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9690-L9691) · [Before (L9854-L9855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9854-L9855)

```diff
-             gD: 0,
-             eL: null,
+             Yj: 0,
+             Dn: null,
```

#### 1220. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9868` → after: `L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9704) · [Before (L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9868)

```diff
-             eL: Wp,
+             Dn: pT,
```

#### 1221. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9872-L9873` → after: `L9708-L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9708-L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9708-L9709) · [Before (L9872-L9873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9872-L9873)

```diff
-           gD: Pp / Yp,
-           eL: Wp,
+           Yj: LT / kT,
+           Dn: pT,
```

#### 1222. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9903` → after: `L9739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9739) · [Before (L9903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9903)

```diff
-         if (!1 !== this.bloxd.UW.metadatas[ip].stackable) {
+         if (!1 !== this.bloxd.DL.metadatas[UT].stackable) {
```

#### 1223. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9923` → after: `L9759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9759) · [Before (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9923)

```diff
-           eL: Ip,
+           Dn: MT,
```

#### 1224. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9971-L9972` → after: `L9807-L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9807-L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9807-L9808) · [Before (L9971-L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9971-L9972)

```diff
-       const cp = RA.e[pp];
-       return cp ? void 0 === ip ? cp : (ip <= 0 && (ip = 1), cp.map((pp => {
+       const mT = xl.d[TT];
+       return mT ? void 0 === UT ? mT : (UT <= 0 && (UT = 1), mT.map((TT => {
```

#### 1225. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9983-L9986` → after: `L9819-L9822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9819-L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9819-L9822) · [Before (L9983-L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9983-L9986)

```diff
-     var BA = cp(38693),
-       NA = cp(38702),
-       TA = cp(1251),
-       fA = cp(6605);
+     var sl = mT(38601),
+       Fl = mT(38609),
+       Pl = mT(1336),
+       Vl = mT(6542);
```

#### 1226. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9990` → after: `L9826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9826) · [Before (L9990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9990)

```diff
-           ...mA.m
+           ...Jl.n
```

#### 1227. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L9994-L9996` → after: `L9830-L9832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9830-L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9830-L9832) · [Before (L9994-L9996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L9994-L9996)

```diff
-     var hA = cp(38690),
-       aA = cp(37837),
-       nA = cp(34438);
+     var Cl = mT(38598),
+       rl = mT(37746),
+       Kl = mT(34280);
```

#### 1228. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10000` → after: `L9836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9836) · [Before (L10000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10000)

```diff
-         this.bloxd = pp, this.enchanter = void 0, FA ??= new aA.b(mA.m), this.enchanter = FA
+         this.bloxd = TT, this.enchanter = void 0, Sl ??= new rl.c(Jl.n), this.enchanter = Sl
```

#### 1229. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10003` → after: `L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9839) · [Before (L10003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10003)

```diff
-         return this.bloxd.isClient && console.assert(pp === this.bloxd.HP.NJ || pp === this.bloxd.HP.Fpp, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(ip)
+         return this.bloxd.isClient && console.assert(TT === this.bloxd.Rl.VV || TT === this.bloxd.Rl.rTT, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(UT)
```

#### 1230. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10006-L10009` → after: `L9842-L9845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9842-L9845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9842-L9845) · [Before (L10006-L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10006-L10009)

```diff
-         if (this.bloxd.isClient && console.assert(pp === this.bloxd.HP.NJ || pp === this.bloxd.HP.Fpp, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(pp, "canCraft")) return !1;
-         if (!(0, nA.r)(cp)) return !1;
-         const Op = this.bloxd.Yk.Nip(pp).getItemAtIdx(ip);
-         return 0 !== this.getPossibleEnchantments(pp, null === Op || void 0 === Op ? void 0 : Op.name).length && !(!Op || (0, nA.q)(Op.attributes))
+         if (this.bloxd.isClient && console.assert(TT === this.bloxd.Rl.VV || TT === this.bloxd.Rl.rTT, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(TT, "canCraft")) return !1;
+         if (!(0, Kl.q)(mT)) return !1;
+         const WT = this.bloxd.pY.aUT(TT).getItemAtIdx(UT);
+         return 0 !== this.getPossibleEnchantments(TT, null === WT || void 0 === WT ? void 0 : WT.name).length && !(!WT || (0, Kl.p)(WT.attributes))
```

#### 1231. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10012` → after: `L9848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9848) · [Before (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10012)

```diff
-         return (0, nA.r)(pp)
+         return (0, Kl.q)(TT)
```

#### 1232. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10015` → after: `L9851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9851) · [Before (L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10015)

```diff
-         return (0, nA.d)(pp, ip)
+         return (0, Kl.e)(TT, UT)
```

#### 1233. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10018` → after: `L9854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9854) · [Before (L10018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10018)

```diff
-         return (0, nA.k)(pp)
+         return (0, Kl.j)(TT)
```

#### 1234. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10021` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9857) · [Before (L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10021)

```diff
-         return (0, nA.g)(pp, ip)
+         return (0, Kl.i)(TT, UT)
```

#### 1235. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10023-L10027` → after: `L9859-L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9859-L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9859-L9863) · [Before (L10023-L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10023-L10027)

```diff
-     }(0, Dp.f)("Coal Ore"), (0, Dp.f)("Iron Ore"), (0, Dp.f)("Gold Ore"), (0, Dp.f)("Diamond Ore"), (0, Dp.f)("Moonstone Ore"), (0, Dp.f)("Pure Coal Ore"), (0, Dp.f)("Pure Iron Ore"), (0, Dp.f)("Pure Gold Ore"), (0, Dp.f)("Pure Diamond Ore"), (0, Dp.f)("Pure Moonstone Ore"), (0,  … [truncated]
-     var GA = cp(37855),
-       rA = cp(37271),
-       ZA = cp(37861);
-     new Set(Object.keys(ZA.f).map((pp => pp.toLowerCase())));
+     }(0, jT.j)("Coal Ore"), (0, jT.j)("Iron Ore"), (0, jT.j)("Gold Ore"), (0, jT.j)("Diamond Ore"), (0, jT.j)("Moonstone Ore"), (0, jT.j)("Pure Coal Ore"), (0, jT.j)("Pure Iron Ore"), (0, jT.j)("Pure Gold Ore"), (0, jT.j)("Pure Diamond Ore"), (0, jT.j)("Pure Moonstone Ore"), (0,  … [truncated]
+     var Nl = mT(37764),
+       El = mT(37152),
+       hl = mT(37773);
+     new Set(Object.keys(hl.c).map((TT => TT.toLowerCase())));
```

#### 1236. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10029` → after: `L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9865) · [Before (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10029)

```diff
-       return `${pp}ByBlock`
+       return `${TT}ByBlock`
```

#### 1237. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10033` → after: `L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9869) · [Before (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10033)

```diff
-       return void 0 === ip ? pp : {
+       return void 0 === UT ? TT : {
```

#### 1238. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10054` → after: `L9890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9890) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10054)

```diff
-         const Op = null !== (cp = this.resolved) && void 0 !== cp ? cp : this.buildResolvedSettings(pp, ip);
+         const WT = null !== (mT = this.resolved) && void 0 !== mT ? mT : this.buildResolvedSettings(TT, UT);
```

#### 1239. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10060` → after: `L9896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9896) · [Before (L10060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10060)

```diff
-         const Op = null !== (cp = this.blockLookups) && void 0 !== cp ? cp : this.buildBlockLookups(pp, ip);
+         const WT = null !== (mT = this.blockLookups) && void 0 !== mT ? mT : this.buildBlockLookups(TT, UT);
```

#### 1240. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10067` → after: `L9903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9903) · [Before (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10067)

```diff
-         const cp = (0, GA.l)(pp, ip),
+         const mT = (0, Nl.k)(TT, UT),
```

#### 1241. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10083` → after: `L9919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9919) · [Before (L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10083)

```diff
-         const cp = (0, GA.k)(pp).getBlockLookupsForTier(ip),
+         const mT = (0, Nl.j)(TT).getBlockLookupsForTier(UT),
```

#### 1242. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10089` → after: `L9925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9925) · [Before (L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10089)

```diff
-         const Ip = (0, GA.l)(pp, ip);
+         const MT = (0, Nl.k)(TT, UT);
```

#### 1243. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10091-L10092` → after: `L9927-L9928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9927-L9928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9927-L9928) · [Before (L10091-L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10091-L10092)

```diff
-           speedMultiplier: void 0 === op ? cp.speedMultiplier : (0, GA.g)(sA(Ip.speedMultiplierByBlock, op)),
-           canAutoStep: void 0 === Op ? cp.canAutoStep : (0, GA.c)(sA(Ip.canAutoStepByBlock, Op))
+           speedMultiplier: void 0 === zT ? mT.speedMultiplier : (0, Nl.f)(ol(MT.speedMultiplierByBlock, zT)),
+           canAutoStep: void 0 === WT ? mT.canAutoStep : (0, Nl.b)(ol(MT.canAutoStepByBlock, WT))
```

#### 1244. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10096` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9932) · [Before (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10096)

```diff
-     var VA = cp(38402);
+     var Rl = mT(38325);
```

#### 1245. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10100` → after: `L9936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9936) · [Before (L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10100)

```diff
-         this.sx = new WeakMap
+         this.fn = new WeakMap
```

#### 1246. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10103` → after: `L9939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9939) · [Before (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10103)

```diff
-         return Ip && (Op > ip || op > cp) ? (this.sx.set(pp, {
+         return MT && (WT > UT || zT > mT) ? (this.fn.set(TT, {
```

#### 1247. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10109` → after: `L9945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9945) · [Before (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10109)

```diff
-         }) : (this.sx.delete(pp), {
+         }) : (this.fn.delete(TT), {
```

#### 1248. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10115` → after: `L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9951) · [Before (L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10115)

```diff
-         return this.sx.get(pp)
+         return this.fn.get(TT)
```

#### 1249. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10118` → after: `L9954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9954) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10118)

```diff
-         this.sx.delete(pp)
+         this.fn.delete(TT)
```

#### 1250. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10121-L10122` → after: `L9957-L9958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9957-L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9957-L9958) · [Before (L10121-L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10121-L10122)

```diff
-     var cP = cp(9436),
-       OP = cp(39425);
+     var mL = mT(9411),
+       WL = mT(39366);
```

#### 1251. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10125` → after: `L9961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9961) · [Before (L10125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10125)

```diff
-         this.isClient = ip, this.callbacks = cp, this.HP = void 0, this.Yk = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.UW = new  … [truncated]
+         this.isClient = UT, this.callbacks = mT, this.Rl = void 0, this.pY = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.DL = new  … [truncated]
```

#### 1252. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10148` → after: `L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9984) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10148)

```diff
-         this.multiblockManager.qE(pp, ip, cp, Op, op, Ip)
+         this.multiblockManager.EQ(TT, UT, mT, WT, zT, MT)
```

#### 1253. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10151` → after: `L9987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9987) · [Before (L10151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10151)

```diff
-         const Ip = this.nH(pp, ip, cp);
+         const MT = this.uq(TT, UT, mT);
```

#### 1254. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10156` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9992) · [Before (L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10156)

```diff
-         return op in HA.f ? this.multiblockManager.playerCanPlaceItem(pp, ip, cp, Op, op) : this.playerCanChangePos(pp, ip, cp, Op, op, Ip)
+         return zT in ql.i ? this.multiblockManager.playerCanPlaceItem(TT, UT, mT, WT, zT) : this.playerCanChangePos(TT, UT, mT, WT, zT, MT)
```

#### 1255. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10161` → after: `L9997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R9997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L9997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L9997) · [Before (L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10161)

```diff
-         return this.isClient ? this.lG(ip, cp, Op) && this.posSatisfiesModifyConstraints(pp, ip, cp, Op) && (!this.HP.UW.vG(op) || this.HP.WP.lT.has(op) || !this.HP.Yk.eip(ip, cp, Op, this.HP.UW.XT(op), Ip ? pp : null)) : this.lG(ip, cp, Op) && this.posSatisfiesModifyConstraints( … [truncated]
+         return this.isClient ? this.hG(UT, mT, WT) && this.posSatisfiesModifyConstraints(TT, UT, mT, WT) && (!this.Rl.DL.sG(zT) || this.Rl.Nl.IK.has(zT) || !this.Rl.pY.fUT(UT, mT, WT, this.Rl.DL.bK(zT), MT ? TT : null)) : this.hG(UT, mT, WT) && this.posSatisfiesModifyConstraints( … [truncated]
```

#### 1256. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10170` → after: `L10006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10006) · [Before (L10170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10170)

```diff
-         return 1 === ip ? `Partially Full ${pp}` : 2 === ip ? `Half Full ${pp}` : 3 === ip ? `Nearly Full ${pp}` : 4 === ip ? pp : "Bowl"
+         return 1 === UT ? `Partially Full ${TT}` : 2 === UT ? `Half Full ${TT}` : 3 === UT ? `Nearly Full ${TT}` : 4 === UT ? TT : "Bowl"
```

#### 1257. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10176-L10178` → after: `L10012-L10014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10012-L10014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10012-L10014) · [Before (L10176-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10176-L10178)

```diff
-         if (pp && pp !== cP.d) {
-           if (this.UW.metadatas[pp]) return this.UW.metadatas[pp].id;
-           throw new Error(`Invalid block name. You sent ${pp}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
+         if (TT && TT !== mL.e) {
+           if (this.DL.metadatas[TT]) return this.DL.metadatas[TT].id;
+           throw new Error(`Invalid block name. You sent ${TT}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
```

#### 1258. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10183` → after: `L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10019) · [Before (L10183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10183)

```diff
-         return pp && pp !== cP.d ? this.UW.metadatas[pp].name : cP.d
+         return TT && TT !== mL.e ? this.DL.metadatas[TT].name : mL.e
```

#### 1259. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10186` → after: `L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10022) · [Before (L10186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10186)

```diff
-         const ip = this.UW.metadatas;
+         const UT = this.DL.metadatas;
```

#### 1260. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10190` → after: `L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10026) · [Before (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10190)

```diff
-         return pp && pp !== cP.d ? this.getItemTypeObjImpl(pp) : null
+         return TT && TT !== mL.e ? this.getItemTypeObjImpl(TT) : null
```

#### 1261. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10193-L10194` → after: `L10029-L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10029-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10029-L10030) · [Before (L10193-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10193-L10194)

```diff
-         if (!pp || pp === cP.d) return cP.h;
-         const ip = this.UW.metadatas[pp];
+         if (!TT || TT === mL.e) return mL.i;
+         const UT = this.DL.metadatas[TT];
```

#### 1262. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10196-L10197` → after: `L10032-L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10032-L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10032-L10033) · [Before (L10196-L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10196-L10197)

```diff
-           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${pp}`);
-           throw new Error(`Item ${pp} not found in registry`)
+           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${TT}`);
+           throw new Error(`Item ${TT} not found in registry`)
```

#### 1263. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10202` → after: `L10038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10038) · [Before (L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10202)

```diff
-         if (OP.b.has(cp) && (this.isClient || "Player" === this.getEntityType(pp))) {
+         if (WL.c.has(mT) && (this.isClient || "Player" === this.getEntityType(TT))) {
```

#### 1264. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10204-L10205` → after: `L10040-L10041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10040-L10041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10040-L10041) · [Before (L10204-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10204-L10205)

```diff
-             op = this.getClientPredictedOption(pp, (0, OP.d)(Op, cp));
-           if (!(0, Np.G)(op)) return op
+             zT = this.getClientPredictedOption(TT, (0, WL.e)(WT, mT));
+           if (!(0, sT.E)(zT)) return zT
```

#### 1265. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10211-L10212` → after: `L10047-L10048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10047-L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10047-L10048) · [Before (L10211-L10212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10211-L10212)

```diff
-         const Op = null === (cp = this.UW.metadatas[pp]) || void 0 === cp ? void 0 : cp[ip];
-         return (0, Np.G)(Op) && "displayName" === ip ? this.getItemName(pp) : Op
+         const WT = null === (mT = this.DL.metadatas[TT]) || void 0 === mT ? void 0 : mT[UT];
+         return (0, sT.E)(WT) && "displayName" === UT ? this.getItemName(TT) : WT
```

#### 1266. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10222` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10058) · [Before (L10222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10222)

```diff
-         return Yp ? Math.max(0, null !== (Ip = this.getItemStat(pp, Yp, "attackRange")) && void 0 !== Ip ? Ip : Sp) : Sp
+         return kT ? Math.max(0, null !== (MT = this.getItemStat(TT, kT, "attackRange")) && void 0 !== MT ? MT : gT) : gT
```

#### 1267. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10226` → after: `L10062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10062) · [Before (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10226)

```diff
-         return null !== (ip = this.getClientPredictedOption(pp, "blockReach")) && void 0 !== ip ? ip : yp.g.iv
+         return null !== (UT = this.getClientPredictedOption(TT, "blockReach")) && void 0 !== UT ? UT : BT.f.Vc
```

#### 1268. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10232-L10237` → after: `L10068-L10073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10068-L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10068-L10073) · [Before (L10232-L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10232-L10237)

```diff
-           const Sp = null === (Op = mA.m[null === cp || void 0 === cp ? void 0 : cp.name]) || void 0 === Op ? void 0 : Op.harvests,
-             Lp = null === (op = mA.m[null === cp || void 0 === cp ? void 0 : cp.name]) || void 0 === op ? void 0 : op.level;
-           return !(0, xp.sc)({
-             blockHarvestType: this.UW.metadatas[ip].harvestType,
-             blockHarvestLevel: this.UW.metadatas[ip].harvestLevel,
-             harvestLevel: null !== (Ip = this.getItemStat(pp, ip, "harvestLevel")) && void 0 !== Ip ? Ip : 0,
+           const gT = null === (WT = Jl.n[null === mT || void 0 === mT ? void 0 : mT.name]) || void 0 === WT ? void 0 : WT.harvests,
+             HT = null === (zT = Jl.n[null === mT || void 0 === mT ? void 0 : mT.name]) || void 0 === zT ? void 0 : zT.level;
+           return !(0, nT.Vc)({
+             blockHarvestType: this.DL.metadatas[UT].harvestType,
+             blockHarvestLevel: this.DL.metadatas[UT].harvestLevel,
+             harvestLevel: null !== (MT = this.getItemStat(TT, UT, "harvestLevel")) && void 0 !== MT ? MT : 0,
```

#### 1269. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10245` → after: `L10081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10081) · [Before (L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10245)

```diff
-         return (0, xp.Jd)(this.getItemStat(pp, ip, "drops"), this.getItemStat(pp, ip, "specialToolDrop"), (() => this.getMetaInfo(ip).rootName), cp)
+         return (0, nT.oe)(this.getItemStat(TT, UT, "drops"), this.getItemStat(TT, UT, "specialToolDrop"), (() => this.getMetaInfo(UT).rootName), mT)
```

#### 1270. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10249` → after: `L10085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10085) · [Before (L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10249)

```diff
-         return ip && null !== (cp = null === (Op = Dp.e[pp]) || void 0 === Op ? void 0 : Op.oA) && void 0 !== cp ? cp : 1
+         return UT && null !== (mT = null === (WT = jT.g[TT]) || void 0 === WT ? void 0 : WT.Pj) && void 0 !== mT ? mT : 1
```

#### 1271. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10260` → after: `L10096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10096) · [Before (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10260)

```diff
-         return this.HP.Yk.hpp(pp, "inventory") ? this.HP.Yk.Nip(pp).getItemAtSelectedSlot() : null
+         return this.Rl.pY.uTT(TT, "inventory") ? this.Rl.pY.aUT(TT).getItemAtSelectedSlot() : null
```

#### 1272. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10263` → after: `L10099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10099) · [Before (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10263)

```diff
-         return (0, ji.d)(this.HP, pp, !1).length >= 1
+         return (0, bU.e)(this.Rl, TT, !1).length >= 1
```

#### 1273. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10267` → after: `L10103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10103) · [Before (L10267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10267)

```diff
-         const Op = this.UW.metadatas;
+         const WT = this.DL.metadatas;
```

#### 1274. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10273` → after: `L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10109) · [Before (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10273)

```diff
-             !(0, Np.G)(ip) && (void 0 === op || ip > op) && (op = ip);
+             !(0, sT.E)(UT) && (void 0 === zT || UT > zT) && (zT = UT);
```

#### 1275. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10279` → after: `L10115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10115) · [Before (L10279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10279)

```diff
-             void 0 === cp && (cp = (0, OP.d)(this.getItemName(xp), "stoodOnSpeedMultiplier"), this.stoodOnOptions[xp] = cp), void 0 === Sp && (Sp = this.getPlayerReader(pp));
+             void 0 === mT && (mT = (0, WL.e)(this.getItemName(nT), "stoodOnSpeedMultiplier"), this.stoodOnOptions[nT] = mT), void 0 === gT && (gT = this.getPlayerReader(TT));
```

#### 1276. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10282` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10118) · [Before (L10282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10282)

```diff
-           }(0, Np.G)(ip) && (this.stoodOnKnown[xp] || (this.stoodOnDefaults[xp] = this.getDefaultItemStat(xp, "stoodOnSpeedMultiplier"), this.stoodOnKnown[xp] = !0), ip = this.stoodOnDefaults[xp]), !(0, Np.G)(ip) && (void 0 === op || ip > op) && (op = ip)
+           }(0, sT.E)(UT) && (this.stoodOnKnown[nT] || (this.stoodOnDefaults[nT] = this.getDefaultItemStat(nT, "stoodOnSpeedMultiplier"), this.stoodOnKnown[nT] = !0), UT = this.stoodOnDefaults[nT]), !(0, sT.E)(UT) && (void 0 === zT || UT > zT) && (zT = UT)
```

#### 1277. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10284` → after: `L10120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10120) · [Before (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10284)

```diff
-         return null !== (cp = op) && void 0 !== cp ? cp : 1
+         return null !== (mT = zT) && void 0 !== mT ? mT : 1
```

#### 1278. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10287` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10123) · [Before (L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10287)

```diff
-         const ip = this.UW.metadatas,
+         const UT = this.DL.metadatas,
```

#### 1279. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10293` → after: `L10129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10129) · [Before (L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10293)

```diff
-           (0, Np.G)(pp) || (cp.push(op), Op.push(Number(pp)))
+           (0, sT.E)(TT) || (mT.push(zT), WT.push(Number(TT)))
```

#### 1280. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10301` → after: `L10137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10137) · [Before (L10301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10301)

```diff
-         const Op = this.UW.metadatas;
+         const WT = this.DL.metadatas;
```

#### 1281. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10306` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10142) · [Before (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10306)

```diff
-             const ip = (0, OP.d)(this.getItemName(pp), "stoodOnSpeedMultiplier");
+             const UT = (0, WL.e)(this.getItemName(TT), "stoodOnSpeedMultiplier");
```

#### 1282. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10317` → after: `L10153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10153) · [Before (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10317)

```diff
-           if (!(0, Np.G)(cp))
+           if (!(0, sT.E)(mT))
```

#### 1283. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10328` → after: `L10164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10164) · [Before (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10328)

```diff
-         return 1 === ip ? Op = .5 * cp : 2 === ip ? Op = .75 * cp : ip >= this.maxBunnyHops && (Op = cp), 1 + Op
+         return 1 === UT ? WT = .5 * mT : 2 === UT ? WT = .75 * mT : UT >= this.maxBunnyHops && (WT = mT), 1 + WT
```

#### 1284. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10341` → after: `L10177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10177) · [Before (L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10341)

```diff
-         return this.HP.pickBlock(ip, cp, this.getBlockReach(pp))
+         return this.Rl.pickBlock(UT, mT, this.getBlockReach(TT))
```

#### 1285. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10354-L10355` → after: `L10190-L10191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10190-L10191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10190-L10191) · [Before (L10354-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10354-L10355)

```diff
-         pp.attributes.customAttributes = Object.assign(null !== (Op = pp.attributes.customAttributes) && void 0 !== Op ? Op : {}, {
-           author: this.getEntityName(this.isClient ? this.HP.NJ : cp),
+         TT.attributes.customAttributes = Object.assign(null !== (WT = TT.attributes.customAttributes) && void 0 !== WT ? WT : {}, {
+           author: this.getEntityName(this.isClient ? this.Rl.VV : mT),
```

#### 1286. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10360` → after: `L10196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10196) · [Before (L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10360)

```diff
-         const Ip = Dp.e[Op].name,
+         const MT = jT.g[WT].name,
```

#### 1287. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10362` → after: `L10198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10198) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10362)

```diff
-         Ip !== Sp && this.qE(pp, ip, cp, (0, Dp.f)(Sp))
+         MT !== gT && this.EQ(TT, UT, mT, (0, jT.j)(gT))
```

#### 1288. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10366-L10367` → after: `L10202-L10203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10202-L10203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10202-L10203) · [Before (L10366-L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10366-L10367)

```diff
-         const Op = Dp.e[pp].name.split("|");
-         return `${Op[0]}|meta|${null!==(cp=Op[2])&&void 0!==cp?cp:"rot1"}|${ip>0?"full":"empty"}`
+         const WT = jT.g[TT].name.split("|");
+         return `${WT[0]}|meta|${null!==(mT=WT[2])&&void 0!==mT?mT:"rot1"}|${UT>0?"full":"empty"}`
```

#### 1289. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10370` → after: `L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10206) · [Before (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10370)

```diff
-         const cp = Dp.e[pp].name,
+         const mT = jT.g[TT].name,
```

#### 1290. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10374` → after: `L10210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10210) · [Before (L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10374)

```diff
-           return `${0===ip?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(op=Op[2])&&void 0!==op?op:"rot1"}|books${ip}`
+           return `${0===UT?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(zT=WT[2])&&void 0!==zT?zT:"rot1"}|books${UT}`
```

#### 1291. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10381` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10217) · [Before (L10381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10381)

```diff
-         const op = this.Yk.Nip(pp).getItems();
+         const zT = this.pY.aUT(TT).getItems();
```

#### 1292. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10384` → after: `L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10220) · [Before (L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10384)

```diff
-           if (xp.v.includes(null === pp || void 0 === pp ? void 0 : pp.name)) {
+           if (nT.z.includes(null === TT || void 0 === TT ? void 0 : TT.name)) {
```

#### 1293. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10398` → after: `L10234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10234) · [Before (L10398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10398)

```diff
-           pp <= 0 ? ip.setItemSlot(cp, cP.d, null) : ip.setItemSlot(cp, Op.name, pp, Op.attributes)
+           TT <= 0 ? UT.setItemSlot(mT, mL.e, null) : UT.setItemSlot(mT, WT.name, TT, WT.attributes)
```

#### 1294. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10402` → after: `L10238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10238) · [Before (L10402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10402)

```diff
-         if (this.Yk.hpp(pp, "itemState")) return "Item";
+         if (this.pY.uTT(TT, "itemState")) return "Item";
```

#### 1295. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10406` → after: `L10242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10242) · [Before (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10406)

```diff
-           return -1 === pp ? ip : ip.slice(0, pp)
+           return -1 === TT ? UT : UT.slice(0, TT)
```

#### 1296. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10408` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10244) · [Before (L10408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10408)

```diff
-         return console.error(new Error(`Tried to get entity type for entity ${pp} but it doesn't exist in networked state`).stack), null
+         return console.error(new Error(`Tried to get entity type for entity ${TT} but it doesn't exist in networked state`).stack), null
```

#### 1297. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10418-L10419` → after: `L10254-L10255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10254-L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10254-L10255) · [Before (L10418-L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10418-L10419)

```diff
-         if (ip.type === fA.l.DEFAULT) {
-           const ip = (0, BA.f)(this.iK(pp), this.getLifeformType(pp));
+         if (UT.type === Vl.q.DEFAULT) {
+           const UT = (0, sl.f)(this.mD(TT), this.getLifeformType(TT));
```

#### 1298. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10424` → after: `L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10260) · [Before (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10424)

```diff
-         Op && (Yp += Math.max(Math.abs(Op[0]), Math.abs(Op[2])), Dp += Op[1]), (Yp > NA.e || Dp > NA.c) && ((ip.type !== fA.l.DEFAULT || Op) && this.onCollisionBoxCapped(), Yp = Math.min(Yp, NA.e), Dp = Math.min(Dp, NA.c)), this.updatePositionAndPhysicsImpl(pp, ip, cp, null !== O … [truncated]
+         WT && (kT += Math.max(Math.abs(WT[0]), Math.abs(WT[2])), jT += WT[1]), (kT > Fl.d || jT > Fl.c) && ((UT.type !== Vl.q.DEFAULT || WT) && this.onCollisionBoxCapped(), kT = Math.min(kT, Fl.d), jT = Math.min(jT, Fl.c)), this.updatePositionAndPhysicsImpl(TT, UT, mT, null !== W … [truncated]
```

#### 1299. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10427-L10428` → after: `L10263-L10264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10263-L10264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10263-L10264) · [Before (L10427-L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10427-L10428)

```diff
-         const Ip = this.HP.Yk.xZ(pp),
-           Sp = null === cp && ((0, Kp.s)(ip.type) || ip.type === fA.l.SLEEPING),
+         const MT = this.Rl.pY.FN(TT),
+           gT = null === mT && ((0, oT.u)(UT.type) || UT.type === Vl.q.SLEEPING),
```

#### 1300. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10430` → after: `L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10266) · [Before (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10430)

```diff
-         this.HP.Yk.kcp(pp, xp.width, xp.height, xp.width)
+         this.Rl.pY.jmT(TT, nT.width, nT.height, nT.width)
```

#### 1301. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10434` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10270) · [Before (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10434)

```diff
-         const cp = this.HP.Yk.xZ(pp),
+         const mT = this.Rl.pY.FN(TT),
```

#### 1302. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10437` → after: `L10273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10273) · [Before (L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10437)

```diff
-         const op = null !== (ip = cp.BP) && void 0 !== ip ? ip : this.HP.BP,
+         const zT = null !== (UT = mT.ZL) && void 0 !== UT ? UT : this.Rl.ZL,
```

#### 1303. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10453` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10289) · [Before (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10453)

```diff
-                   const Ip = !0 === Op ? pP : Op;
+                   const MT = !0 === WT ? TL : WT;
```

#### 1304. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10458` → after: `L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10294) · [Before (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10458)

```diff
-           }(cp.Iip, op, Op.width, Op.height, ((ip, cp, Op) => this.lG(ip, cp, Op) ? this.getBlockCollisionForPlayer(pp, ip, cp, Op, this.getClientPredictedBlock(pp, ip, cp, Op)) : null));
+           }(mT.zUT, zT, WT.width, WT.height, ((UT, mT, WT) => this.hG(UT, mT, WT) ? this.getBlockCollisionForPlayer(TT, UT, mT, WT, this.getClientPredictedBlock(TT, UT, mT, WT)) : null));
```

#### 1305. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10462` → after: `L10298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10298) · [Before (L10462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10462)

```diff
-         const ip = this.HP.Yk.xZ(pp),
+         const UT = this.Rl.pY.FN(TT),
```

#### 1306. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L10464` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/94.js#L10300) · [Before (L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/94.js#L10464)

```diff
-         void 0 !== cp && (this.playerBodyGrowth.clear(ip), this.HP.Yk.kcp(pp, cp.width, cp.height, cp.width))
+         void 0 !== mT && (this.playerBodyGrowth.clear(UT), this.Rl.pY.jmT(TT, mT.width, mT.height, mT.width))
```
