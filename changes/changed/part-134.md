# Changed — Bundle Modifications Report (Part 134 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `134 / 141` (**380** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 133](part-133.md) · [Part 135 →](part-135.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (997 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 398. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3814-L3815` → after: `L4181-L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4181-L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4181-L4182) · [Before (L3814-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3814-L3815)

```diff
-           own: BB.includes(rZ.e),
-           oneShot: BB.includes(rZ.i)
+           own: tt.includes(kV.d),
+           oneShot: tt.includes(kV.e)
```

#### 399. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3825` → after: `L4192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4192) · [Before (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3825)

```diff
-         })), this.channel = (null !== (IB = BB.openChannel) && void 0 !== IB ? IB : rZ.v)(), null !== this.channel && (this.channel.onmessage = () => {
+         })), this.channel = (null !== (et = tt.openChannel) && void 0 !== et ? et : kV.r)(), null !== this.channel && (this.channel.onmessage = () => {
```

#### 400. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3837-L3838` → after: `L4204-L4205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4204-L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4204-L4205) · [Before (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3837-L3838)

```diff
-           })).catch((BB => (null !== IB && (0, rZ.q)(IB), ZB(BB), null)))
-         }((() => this.host.load(IB).then((BB => (BB.setGamePackConfirm(this.confirm), this.landed = BB, BB)))), IB ? this.host.store : null, this.host.JN), this.landRequest(this.requested), this.requested
+           })).catch((tt => (null !== et && (0, kV.p)(et), Vt(tt), null)))
+         }((() => this.host.load(et).then((tt => (tt.setGamePackConfirm(this.confirm), this.landed = tt, tt)))), et ? this.host.store : null, this.host.iE), this.landRequest(this.requested), this.requested
```

#### 401. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3846` → after: `L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4213) · [Before (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3846)

```diff
-           return null !== (BB = this.requested) && void 0 !== BB ? BB : null
+           return null !== (tt = this.requested) && void 0 !== tt ? tt : null
```

#### 402. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3854-L3858` → after: `L4221-L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4221-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4221-L4225) · [Before (L3854-L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3854-L3858)

```diff
-     var uJ = ZB(36294);
-     const fJ = 216 * uJ.d,
-       lJ = 92 * uJ.b,
-       AJ = 64 * uJ.d,
-       tJ = 16 * uJ.d;
+     var Uq = Vt(36498);
+     const Aq = 216 * Uq.g,
+       iq = 92 * Uq.e,
+       Yq = 64 * Uq.g,
+       Bq = 16 * Uq.g;
```

#### 403. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3862` → after: `L4229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4229) · [Before (L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3862)

```diff
-       return null !== (BB = null === (IB = performance.memory) || void 0 === IB ? void 0 : IB.IU) && void 0 !== BB ? BB : null
+       return null !== (tt = null === (et = performance.memory) || void 0 === et ? void 0 : et.zN) && void 0 !== tt ? tt : null
```

#### 404. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3872` → after: `L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4239) · [Before (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3872)

```diff
-           JB = Math.max(null !== (IB = this.reads.jsHeapBytes()) && void 0 !== IB ? IB : 0, AJ),
+           qt = Math.max(null !== (et = this.reads.jsHeapBytes()) && void 0 !== et ? et : 0, Yq),
```

#### 405. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3898` → after: `L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4265) · [Before (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3898)

```diff
-         return null === BB ? null : `estimate ${(0,uJ.i)(BB.totalBytes)} MiB of budget ${null===IB?"none":(0,uJ.i)(IB)}: wasm ${(0,uJ.i)(BB.wasmBytes)} js ${(0,uJ.i)(BB.jsHeapBytes)} gpu ${(0,uJ.i)(BB.gpuBytes)} chunks ${BB.storedChunks}`
+         return null === tt ? null : `estimate ${(0,Uq.n)(tt.totalBytes)} MiB of budget ${null===et?"none":(0,Uq.n)(et)}: wasm ${(0,Uq.n)(tt.wasmBytes)} js ${(0,Uq.n)(tt.jsHeapBytes)} gpu ${(0,Uq.n)(tt.gpuBytes)} chunks ${tt.storedChunks}`
```

#### 406. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3907-L3908` → after: `L4274-L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4274-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4274-L4275) · [Before (L3907-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3907-L3908)

```diff
-             footprintMiB: Number((0, uJ.i)(BB.totalBytes)),
-             gpuMiB: Number((0, uJ.i)(BB.gpuBytes)),
+             footprintMiB: Number((0, Uq.n)(tt.totalBytes)),
+             gpuMiB: Number((0, Uq.n)(tt.gpuBytes)),
```

#### 407. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3911` → after: `L4278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4278) · [Before (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3911)

```diff
-           footprintBudgetMiB: null === IB ? -1 : Number((0, uJ.i)(IB))
+           footprintBudgetMiB: null === et ? -1 : Number((0, Uq.n)(et))
```

#### 408. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3915-L3919` → after: `L4282-L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4282-L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4282-L4286) · [Before (L3915-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3915-L3919)

```diff
-     var EJ = ZB(2973),
-       DJ = ZB(4701),
-       KJ = ZB(36396),
-       VJ = ZB(38004);
-     const SJ = KI.ab + 1,
+     var Tq = Vt(2902),
+       gq = Vt(4650),
+       sq = Vt(36610),
+       nq = Vt(38200);
+     const tD = se.fb + 1,
```

#### 409. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3923` → after: `L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4290) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3923)

```diff
-         this.log = BB, this.take = IB, this.sv = [], this.unshown = new Map, this.latest = new Map
+         this.log = tt, this.take = et, this.Pd = [], this.unshown = new Map, this.latest = new Map
```

#### 410. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3927-L3930` → after: `L4294-L4297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4294-L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4294-L4297) · [Before (L3927-L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3927-L3930)

```diff
-         ZB.length >= KI.$ && ZB[0] > 0 && (0, EJ.o)("remesh", `${ZB[0]} core records lost to a full log`);
-         const TB = this.sv;
-         for (let JB = KI.$; JB + KI.ab <= ZB.length; JB += KI.ab) {
-           for (let BB = JB; BB < JB + KI.ab; BB++) TB.push(ZB[BB]);
+         Vt.length >= se.db && Vt[0] > 0 && (0, Tq.n)("remesh", `${Vt[0]} core records lost to a full log`);
+         const Ot = this.Pd;
+         for (let qt = se.db; qt + se.fb <= Vt.length; qt += se.fb) {
+           for (let tt = qt; tt < qt + se.fb; tt++) Ot.push(Vt[tt]);
```

#### 411. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3940-L3941` → after: `L4307-L4308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4307-L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4307-L4308) · [Before (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3940-L3941)

```diff
-         const TB = this.sv,
-           JB = (0, VJ.e)(TB[BB + 1], TB[BB + 2], TB[BB + 3]),
+         const Ot = this.Pd,
+           qt = (0, nq.f)(Ot[tt + 1], Ot[tt + 2], Ot[tt + 3]),
```

#### 412. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3943` → after: `L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4310) · [Before (L3943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3943)

```diff
-           GB = TB[BB + KI.ab];
+           mt = Ot[tt + se.fb];
```

#### 413. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3945` → after: `L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4312) · [Before (L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3945)

```diff
-           case KI.Ib.Edit:
+           case se.Eb.Edit:
```

#### 414. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3948-L3949` → after: `L4315-L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4315-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4315-L4316) · [Before (L3948-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3948-L3949)

```diff
-           case KI.Ib.Sent:
-             this.latest.set(JB, oB), this.log.sent(JB, oB, TB[BB + 5], TB[BB + 6], TB[BB + 7], null !== (ZB = this.unshown.get(JB)) && void 0 !== ZB ? ZB : VJ.b, GB);
+           case se.Eb.Sent:
+             this.latest.set(qt, Dt), this.log.sent(qt, Dt, Ot[tt + 5], Ot[tt + 6], Ot[tt + 7], null !== (Vt = this.unshown.get(qt)) && void 0 !== Vt ? Vt : nq.d, mt);
```

#### 415. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3951` → after: `L4318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4318) · [Before (L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3951)

```diff
-           case KI.Ib.Done: {
+           case se.Eb.Done: {
```

#### 416. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3957` → after: `L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4324) · [Before (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3957)

```diff
-           case KI.Ib.Failed: {
+           case se.Eb.Failed: {
```

#### 417. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3962` → after: `L4329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4329) · [Before (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3962)

```diff
-           case KI.Ib.Shown:
+           case se.Eb.Shown:
```

#### 418. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3965` → after: `L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4332) · [Before (L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3965)

```diff
-           case KI.Ib.Replaced:
+           case se.Eb.Replaced:
```

#### 419. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3968` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4335) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3968)

```diff
-           case KI.Ib.Emptied:
+           case se.Eb.Emptied:
```

#### 420. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3972` → after: `L4339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4339) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3972)

```diff
-             console.warn(`[debug:remesh] unknown core record kind ${TB[BB]}`)
+             console.warn(`[debug:remesh] unknown core record kind ${Ot[tt]}`)
```

#### 421. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3984-L3985` → after: `L4351-L4352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4351-L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4351-L4352) · [Before (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3984-L3985)

```diff
-     var To = ZB(3396),
-       Jo = ZB(39707);
+     var qD = Vt(3295),
+       DD = Vt(39856);
```

#### 422. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3989` → after: `L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4356) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3989)

```diff
-         this.options = BB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.sv = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== BB.modu … [truncated]
+         this.options = tt, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Pd = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== tt.modu … [truncated]
```

#### 423. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L3992-L3993` → after: `L4359-L4360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4359-L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4359-L4360) · [Before (L3992-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L3992-L3993)

```diff
-         if (!(this.gone || null === this.worker && null === this.sv))
-           if (BB === DI.Wd.WorldgenSeed) {
+         if (!(this.gone || null === this.worker && null === this.Pd))
+           if (tt === ge.he.WorldgenSeed) {
```

#### 424. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4004` → after: `L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4371) · [Before (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4004)

```diff
-           } else if (BB === DI.Wd.Generate) {
+           } else if (tt === ge.he.Generate) {
```

#### 425. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4006-L4007` → after: `L4373-L4374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4373-L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4373-L4374) · [Before (L4006-L4007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4006-L4007)

```diff
-           const BB = new DataView(IB.buffer, IB.byteOffset, DI.Sd),
-             TB = null !== (ZB = this.pool.pop()) && void 0 !== ZB ? ZB : new ArrayBuffer(8192);
+           const tt = new DataView(et.buffer, et.byteOffset, ge.Zd),
+             Ot = null !== (Vt = this.pool.pop()) && void 0 !== Vt ? Vt : new ArrayBuffer(8192);
```

#### 426. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4022` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4389) · [Before (L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4022)

```diff
-         this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, DI.Vd.WorldgenStarted, 0, 0, oo)))
+         this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, ge.de.WorldgenStarted, 0, 0, mD)))
```

#### 427. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4030` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4397) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4030)

```diff
-         null !== this.sv ? this.sv.push({
+         null !== this.Pd ? this.Pd.push({
```

#### 428. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4039` → after: `L4406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4406) · [Before (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4039)

```diff
-         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.sv ??= [])
+         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Pd ??= [])
```

#### 429. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4063` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4430) · [Before (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4063)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", JB), this.lastLoss = `it did not start (${String(JB)})`, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", qt), this.lastLoss = `it did not start (${String(qt)})`, void this.start()
```

#### 430. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4077` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4444) · [Before (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4077)

```diff
-             YN: TB.f.YN
+             ff: Ot.e.ff
```

#### 431. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4080` → after: `L4447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4447) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4080)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", JB), this.lastLoss = `it could not be sent the module (${String(JB)})`, ZB.terminate(), this.worker = null, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", qt), this.lastLoss = `it could not be sent the module (${String(qt)})`, Vt.terminate(), this.worker = null, void this.start()
```

#### 432. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4082-L4083` → after: `L4449-L4450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4449-L4450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4449-L4450) · [Before (L4082-L4083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4082-L4083)

```diff
-         this.watch = new JJ.i(JJ.h, (BB => {
-           this.lose((0, JJ.l)(BB), (() => {
+         this.watch = new Dq.g(Dq.d, (tt => {
+           this.lose((0, Dq.h)(tt), (() => {
```

#### 433. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4092` → after: `L4459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4459) · [Before (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4092)

```diff
-             const IB = this.sv;
+             const et = this.Pd;
```

#### 434. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4094` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4461) · [Before (L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4094)

```diff
-               this.coreWaits = !1, this.options.write(0, DI.Vd.WorldgenStarted, 0, 0, oo);
+               this.coreWaits = !1, this.options.write(0, ge.de.WorldgenStarted, 0, 0, mD);
```

#### 435. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4097` → after: `L4464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4464) · [Before (L4097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4097)

```diff
-             this.sv = null;
+             this.Pd = null;
```

#### 436. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4113` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4480) · [Before (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4113)

```diff
-             IB.status !== DI.xb.Trapped && (this.startsWithoutResult = 0), this.options.write(IB.ticket, DI.Vd.WorldgenResult, IB.status, IB.workerUs, new Uint8Array(IB.bytes, 0, IB.len)), this.recycle(IB.bytes), IB.spare && this.recycle(IB.spare)
+             et.status !== ge.Ib.Trapped && (this.startsWithoutResult = 0), this.options.write(et.ticket, ge.de.WorldgenResult, et.status, et.workerUs, new Uint8Array(et.bytes, 0, et.len)), this.recycle(et.bytes), et.spare && this.recycle(et.spare)
```

#### 437. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4117` → after: `L4484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4484) · [Before (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4117)

```diff
-         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${BB}`), this.lastLoss = BB, this.endWorker(), this.gone || (IB ? IB() : this.options.onWorkerLost(BB), this.dropHeld(), this.sv = null, this.options.write(0, DI.Vd.WorldgenLost, DI._d.Lost, 0, oo), this.cor … [truncated]
+         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${tt}`), this.lastLoss = tt, this.endWorker(), this.gone || (et ? et() : this.options.onWorkerLost(tt), this.dropHeld(), this.Pd = null, this.options.write(0, ge.de.WorldgenLost, ge.je.Lost, 0, mD), this.cor … [truncated]
```

#### 438. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4120` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4487) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4120)

```diff
-         this.gone = !0, this.dropHeld(), this.options.write(0, DI.Vd.WorldgenLost, DI._d.Gone, 0, oo)
+         this.gone = !0, this.dropHeld(), this.options.write(0, ge.de.WorldgenLost, ge.je.Gone, 0, mD)
```

#### 439. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4127` → after: `L4494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4494) · [Before (L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4127)

```diff
-         if (null !== this.sv) {
+         if (null !== this.Pd) {
```

#### 440. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4131-L4132` → after: `L4498-L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4498-L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4498-L4499) · [Before (L4131-L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4131-L4132)

```diff
-             of this.sv) "generate" === BB.type && this.recycle(BB.bytes);
-           this.sv.length = 0
+             of this.Pd) "generate" === tt.type && this.recycle(tt.bytes);
+           this.Pd.length = 0
```

#### 441. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4139-L4143` → after: `L4506-L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4506-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4506-L4510) · [Before (L4139-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4139-L4143)

```diff
-     var vo = ZB(37803),
-       ko = ZB(3884),
-       co = ZB(40721),
-       no = ZB(41028),
-       ho = ZB(40816);
+     var jD = Vt(37985),
+       HD = Vt(3785),
+       XD = Vt(40858),
+       QD = Vt(41189),
+       lD = Vt(40971);
```

#### 442. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4188` → after: `L4555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4555) · [Before (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4188)

```diff
-       const JB = (0, ET.l)(ET.Y, Uo, [TB]),
+       const qt = (0, TO.n)(TO.db, MD, [Ot]),
```

#### 443. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4212` → after: `L4579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4579) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4212)

```diff
-         kB = (0, ET.l)(ET.Y, TB, [BB]);
+         jt = (0, TO.n)(TO.db, Ot, [tt]);
```

#### 444. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4214` → after: `L4581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4581) · [Before (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4214)

```diff
-         const ZB = (0, ET.l)(ET.Y, JB, [kB[0]]),
+         const Vt = (0, TO.n)(TO.db, qt, [jt[0]]),
```

#### 445. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4219-L4221` → after: `L4586-L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4586-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4586-L4588) · [Before (L4219-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4219-L4221)

```diff
-             IB = (0, ET.l)(ET.Y, zo, [kB[0]]),
-             TB = null !== (0, ET.l)(ET.Y, Fo, [BB]) ? BB : null === IB ? null : IB[1],
-             JB = null === TB ? null : (0, ET.l)(ET.Y, oB, [TB]);
+             et = (0, TO.n)(TO.db, ED, [jt[0]]),
+             Ot = null !== (0, TO.n)(TO.db, fD, [tt]) ? tt : null === et ? null : et[1],
+             qt = null === Ot ? null : (0, TO.n)(TO.db, Dt, [Ot]);
```

#### 446. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4224` → after: `L4591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4591) · [Before (L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4224)

```diff
-         null !== ZB && (null === GB ? GB = ZB[0] : null === vB && ZB[0] !== GB && (vB = ZB[0])), kB = (0, ET.l)(ET.Y, TB, [BB])
+         null !== Vt && (null === mt ? mt = Vt[0] : null === dt && Vt[0] !== mt && (dt = Vt[0])), jt = (0, TO.n)(TO.db, Ot, [tt])
```

#### 447. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4226` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4593) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4226)

```diff
-       return null !== (ZB = vB) && void 0 !== ZB ? ZB : null === GB ? "none" : "own"
+       return null !== (Vt = dt) && void 0 !== Vt ? Vt : null === mt ? "none" : "own"
```

#### 448. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4231-L4232` → after: `L4598-L4599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4598-L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4598-L4599) · [Before (L4231-L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4231-L4232)

```diff
-       const ZB = (0, ET.l)(ET.Y, so, [IB]);
-       return null === ZB ? BB : BB + ":" + ZB[1] + ":" + ZB[2]
+       const Vt = (0, TO.n)(TO.db, uD, [et]);
+       return null === Vt ? tt : tt + ":" + Vt[1] + ":" + Vt[2]
```

#### 449. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4241` → after: `L4608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4608) · [Before (L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4241)

```diff
-         GB = (0, ET.l)(ET.Y, IB, [BB]);
+         mt = (0, TO.n)(TO.db, et, [tt]);
```

#### 450. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4243-L4245` → after: `L4610-L4612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4610-L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4610-L4612) · [Before (L4243-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4243-L4245)

```diff
-         const vB = (0, ET.l)(ET.Y, ZB, [GB[0]]),
-           kB = null === vB ? (0, ET.l)(ET.Y, zo, [GB[0]]) : null,
-           cB = null !== kB && null !== (0, ET.l)(ET.Y, Fo, [kB[1]]) && 0 !== No(kB[1], "wasm:") ? kB[1] : null;
+         const dt = (0, TO.n)(TO.db, Vt, [mt[0]]),
+           jt = null === dt ? (0, TO.n)(TO.db, ED, [mt[0]]) : null,
+           Ht = null !== jt && null !== (0, TO.n)(TO.db, fD, [jt[1]]) && 0 !== wD(jt[1], "wasm:") ? jt[1] : null;
```

#### 451. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4272` → after: `L4639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4639) · [Before (L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4272)

```diff
-         GB = (0, ET.l)(ET.Y, IB, [BB])
+         mt = (0, TO.n)(TO.db, et, [tt])
```

#### 452. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4282` → after: `L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4649) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4282)

```diff
-       return (0, vo.g)(function(BB) {
+       return (0, jD.f)(function(tt) {
```

#### 453. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4286` → after: `L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4653) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4286)

```diff
-         for (let JB = 0; JB <= ZB; JB++) IB ^= JB === ZB ? BB.length : (0, ET.l)(ET.fb, BB, [JB]), IB = IB + (IB << 1) + (IB << 4) + (IB << 7) + (IB << 8) + (IB << 24) >>> 0;
+         for (let qt = 0; qt <= Vt; qt++) et ^= qt === Vt ? tt.length : (0, TO.n)(TO.ob, tt, [qt]), et = et + (et << 1) + (et << 4) + (et << 7) + (et << 8) + (et << 24) >>> 0;
```

#### 454. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4315` → after: `L4682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4682) · [Before (L4315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4315)

```diff
-                 case DI.qc.StackCheck:
+                 case ge.Ac.StackCheck:
```

#### 455. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4317` → after: `L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4684) · [Before (L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4317)

```diff
-                 case DI.qc.ConfirmMesh:
+                 case ge.Ac.ConfirmMesh:
```

#### 456. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4319` → after: `L4686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4686) · [Before (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4319)

```diff
-                 case DI.qc.IndexPassReplaced:
+                 case ge.Ac.IndexPassReplaced:
```

#### 457. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4321` → after: `L4688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4688) · [Before (L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4321)

```diff
-                 case DI.qc.ProductSubChanged:
+                 case ge.Ac.ProductSubChanged:
```

#### 458. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4323-L4327` → after: `L4690-L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4690-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4690-L4694) · [Before (L4323-L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4323-L4327)

```diff
-                 case DI.qc.RenderStatus:
-                   return IB.Zv();
-                 case DI.qc.Held:
-                   return IB.sv();
-                 case DI.qc.PlayerKilledSubs:
+                 case ge.Ac.RenderStatus:
+                   return et.Xd();
+                 case ge.Ac.Held:
+                   return et.Pd();
+                 case ge.Ac.PlayerKilledSubs:
```

#### 459. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4329` → after: `L4696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4696) · [Before (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4329)

```diff
-                 case DI.gb: {
+                 case ge.pb: {
```

#### 460. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4331` → after: `L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4698) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4331)

```diff
-                   return null === ZB ? 0 : (0, ET.l)(ET.v, ET.mb, [ZB, new ET.d((0, ET.E)(BB()), TB, JB)]).written
+                   return null === Vt ? 0 : (0, TO.n)(TO.y, TO.ub, [Vt, new TO.e((0, TO.M)(tt()), Ot, qt)]).written
```

#### 461. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4338` → after: `L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4705) · [Before (L4338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4338)

```diff
-             return DI.jc
+             return ge.uc
```

#### 462. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4345` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4712) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4345)

```diff
-         this.write = BB, this.flagsWritten = 0, this.written = (0, ET.n)(null)
+         this.write = tt, this.flagsWritten = 0, this.written = (0, TO.p)(null)
```

#### 463. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4353` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4720) · [Before (L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4353)

```diff
-         this.setFlags(IB | DI.e.Ready)
+         this.setFlags(et | ge.f.Ready)
```

#### 464. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4360` → after: `L4727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4727) · [Before (L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4360)

```diff
-         0 !== IB && this.write(DI.h.Flags, IB, IB) && (this.flagsWritten |= IB)
+         0 !== et && this.write(ge.g.Flags, et, et) && (this.flagsWritten |= et)
```

#### 465. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4363` → after: `L4730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4730) · [Before (L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4363)

```diff
-         return this.write(DI.h.Flags, DI.e.OriginStackHit, DI.e.OriginStackHit)
+         return this.write(ge.g.Flags, ge.f.OriginStackHit, ge.f.OriginStackHit)
```

#### 466. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4380` → after: `L4747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4747) · [Before (L4380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4380)

```diff
-     const mo = [!1, 1, "length", 0, 2, void 0, null, 3, "p", "c3RhY2", "cw==", "b", 5, 7, 4, 41, 1e5, "e", "c", "d", 155, 160, !0, "a", "stack", "name", 256, 65537, 42, 100, 30, 164, 200, 62, 192, 205, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (lo … [truncated]
+     const kD = [1, "length", 2, void 0, null, 3, 0, "r", "c3RhY2", "cw==", 198, "a", 219, 1e5, "stack", "name", "d", "c", "e", !0, 50, 234, 68, 5, 10, 60, "s=", "=", ";", 42, "string", !1, "p", 206, 185, 1023, "b", 172, 65536, 4, 40, 55296, 56320, 6, 12, 63, 128, 29, 221, 192, 99 … [truncated]
```

#### 467. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4388-L4406` → after: `L4755-L4757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4755-L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4755-L4757) · [Before (L4388-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4388-L4406)

```diff
-       let IB = arguments[mo[2]] > mo[1] && arguments[mo[1]] !== mo[5] ? arguments[mo[1]] : (...BB) => (BB[mo[2]] = mo[3], "ZDdsFIV" in Xo && function(...BB) {
-           BB[mo[2]] = mo[3];
-           const IB = require("path"),
-             {
-               version: ZB
-             } = require("../../package"),
-             {
-               version: TB
-             } = require("@redacted/enterprise-plugin/package"),
-             {
-               version: JB
-             } = require("@redacted/components/package"),
-             {
-               sdkVersion: oB
-             } = require("@redacted/enterprise-plugin");
-           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), IB.resolve(__dirname, "../redacted.js")
- ... (3 more removed lines; see GitHub link above)
+       let et = arguments[kD[1]] > kD[0] && arguments[kD[0]] !== kD[3] ? arguments[kD[0]] : () => kD[4],
+         Vt = arguments[kD[1]] > kD[2] && arguments[kD[2]] !== kD[3] ? arguments[kD[2]] : kD[4],
+         Ot = arguments[kD[1]] > kD[5] && arguments[kD[5]] !== kD[3] ? arguments[kD[5]] : "";
```

#### 468. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4408-L4413` → after: `L4759-L4764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4759-L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4759-L4764) · [Before (L4408-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4408-L4413)

```diff
-         oB = (0, ET[mo[8]])("RXJyb3" + mo[94]),
-         GB = (0, ET[mo[8]])(mo[9] + "s="),
-         vB = (0, ET[mo[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
-         cB = (0, ET[mo[8]])(mo[9] + "tUcmFjZUxpbWl0"),
-         nB = (0, ET[mo[8]])("bmF0aXZl"),
-         hB = [(0, ET[mo[8]])("bWFpbi5qcw=="), (0, ET[mo[8]])("aW5kZXguanM="), (0, ET[mo[8]])("dXNlcnNjcmlwdA=="), (0, ET[mo[8]])("Y29udGVudC5q" + mo[10]), (0, ET[mo[8]])("b3B0aW9ucy5q" + mo[10]), (0, ET[mo[8]])("cG9wdXAuanM="), (0, ET[mo[8]])("LnVzZXIuanM="), (0, ET[mo[8]])("Y2hy … [truncated]
+         Dt = (0, TO[kD[7]])("RXJyb3" + kD[131]),
+         mt = (0, TO[kD[7]])(kD[8] + kD[26]),
+         dt = (0, TO[kD[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
+         Ht = (0, TO[kD[7]])(kD[8] + "tUcmFjZUxpbWl0"),
+         Xt = (0, TO[kD[7]])("bmF0aXZl"),
+         Qt = [(0, TO[kD[7]])("bWFpbi5qcw=="), (0, TO[kD[7]])("aW5kZXguanM="), (0, TO[kD[7]])("dXNlcnNjcmlwdA=="), (0, TO[kD[7]])("Y29udGVudC5q" + kD[9]), (0, TO[kD[7]])("b3B0aW9ucy5q" + kD[9]), (0, TO[kD[7]])("cG9wdXAuanM="), (0, TO[kD[7]])("LnVzZXIuanM="), (0, TO[kD[7]])("Y2hyb2 … [truncated]
```

#### 469. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4415` → after: `L4766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4766) · [Before (L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4415)

```diff
-           BB[mo[2]] = mo[1];
+           tt[kD[1]] = kD[0];
```

#### 470. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4418-L4424` → after: `L4769-L4781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4769-L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4769-L4781) · [Before (L4418-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4418-L4424)

```diff
-           if (ZB[cB] < mo[16]) {
-             function gB() {
-               var BB;
-               Lo(BB = function(...IB) {
-                 if (Lo(IB[mo[2]] = mo[60], IB[mo[15]] = mo[6]), !(IB[mo[12]] < mo[3])) {
-                   if (IB[mo[12]] === mo[3]) return IB[mo[3]].push(IB[mo[1]]);
-                   for (IB[mo[13]] = IB[mo[4]]; IB[mo[13]] < IB[mo[7]] && !(IB[mo[14]][IB[mo[13]]] > IB[mo[12]]); IB[mo[13]]++) IB[mo[13]] > IB[mo[4]] && IB[mo[14]][IB[mo[13]]] === IB[mo[14]][IB[mo[13]] - mo[1]] || Lo(IB[mo[15]] = Array.from(IB[mo[1]]), IB[mo[15]].push(IB[mo[14]][ … [truncated]
+           if (Vt[Ht] < kD[13]) {
+             function wt(...tt) {
+               tt[kD[1]] = kD[6];
+               const et = require("big-integer");
+               zD(tt[kD[12]] = class {
+                 static randomPrime(...tt) {
+                   tt[kD[1]] = kD[0];
+                   const Vt = et.one.shiftLeft(tt[kD[6]] - kD[0]),
+                     Ot = et.one.shiftLeft(tt[kD[6]]).prev();
+                   for (; kD[19];) {
+                     let tt = et.randBetween(Vt, Ot);
+                     if (tt.isProbablePrime(256)) return tt
+                   }
```

#### 471. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4426-L4428` → after: `L4783-L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4783-L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4783-L4818) · [Before (L4426-L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4426-L4428)

```diff
-               }, console.log((function(...IB) {
-                 return Lo(IB[mo[2]] = mo[4], IB[mo[4]] = [], IB[mo[11]] = IB[mo[3]].length, IB[mo[3]].sort(((BB, IB) => BB - IB)), BB(IB[mo[4]], [], mo[3], IB[mo[11]], IB[mo[3]], IB[mo[1]])), IB[mo[4]]
-               })))
+                 static generate(...tt) {
+                   tt[kD[1]] = kD[0];
+                   const Vt = et(65537);
+                   let Ot, qt;
+                   tt[-kD[10]] = kD[3];
+                   do {
+                     zD(Ot = this.randomPrime(tt[kD[6]] / kD[2]), qt = this.randomPrime(tt[kD[6]] / kD[2]), tt[-kD[10]] = et.lcm(Ot.prev(), qt.prev()))
+                   } while (et.gcd(Vt, tt[-kD[10]]).notEquals(kD[0]) || Ot.minus(qt).abs().shiftRight(tt[kD[6]] / kD[2] - 100).isZero());
+                   return {
+                     e: Vt,
+                     n: Ot.multiply(qt),
+                     d: Vt.modInv(tt[-kD[10]])
+                   }
+                 }
+                 static encrypt(...tt) {
+                   return tt[kD[1]] = kD[5], et(tt[kD[6]]).modPow(tt[kD[2]], tt[kD[0]])
+ ... (20 more added lines; see GitHub link above)
```

#### 472. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4430` → after: `L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4820) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4430)

```diff
-             "o6faLd" in Xo && gB(), ZB[cB] = mo[16]
+             "RWZYbu" + kD[68] in GD && wt(), Vt[Ht] = kD[13]
```

#### 473. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4432` → after: `L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4822) · [Before (L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4432)

```diff
-           const TB = "string" === typeof(zB = (new IB)[GB]) ? zB : `${zB}`,
+           const Ot = "string" === typeof(lt = (new et)[mt]) ? lt : `${lt}`,
```

#### 474. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4436` → after: `L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4826) · [Before (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4436)

```diff
-           typeof nB === mo[86] + mo[87] && (0, ET[mo[88]])(nB, IB, [kB]);
+           typeof Xt === kD[106] + kD[107] && (0, TO[kD[99]])(Xt, et, [jt]);
```

#### 475. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4438-L4514` → after: `L4828-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4828-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4828-L4836) · [Before (L4438-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4438-L4514)

```diff
-             NB = BB[mo[3]] ? hB[mo[2]] : hB[mo[2]] - mo[1];
-           for (let qB = mo[3]; qB < NB; qB++) {
-             if (io(TB, hB[qB])) {
-               function yB(...BB) {
-                 Lo(BB[mo[2]] = mo[3], BB[-mo[21]] = function(...BB) {
-                   for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].length, BB[mo[20]] = [], BB[mo[18]] = mo[3], BB[mo[19]] = mo[3], BB[mo[3]].sort(((BB, IB) => BB - IB))), BB[mo[17]] = mo[3]; BB[mo[17]] < BB[mo[1]]; BB[mo[17]]++)
-                     if (!(BB[mo[17]] > mo[3] && BB[mo[3]][BB[mo[17]]] === BB[mo[3]][BB[mo[17]] - mo[1]]))
-                       for (Lo(BB[mo[18]] = BB[mo[17]] + mo[1], BB[mo[19]] = BB[mo[1]] - mo[1]); BB[mo[18]] < BB[mo[19]];)
-                         if (BB[mo[3]][BB[mo[17]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[19]]] < mo[3]) BB[mo[18]]++;
-                         else if (BB[mo[3]][BB[mo[17]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[19]]] > mo[3]) BB[mo[19]]--;
-                   else {
-                     for (BB[mo[20]].push([BB[mo[3]][BB[mo[17]]], BB[mo[3]][BB[mo[18]]], BB[mo[3]][BB[mo[19]]]]); BB[mo[18]] < BB[mo[19]] && BB[mo[3]][BB[mo[18]]] === BB[mo[3]][BB[mo[18]] + mo[1]];) BB[mo[18]]++;
-                     for (; BB[mo[18]] < BB[mo[19]] && BB[mo[3]][BB[mo[19]]] === BB[mo[3]][BB[mo[19]] - mo[1]];) BB[mo[19]]--;
-                     Lo(BB[mo[18]]++, BB[mo[19]]--)
-                   }
-                   return BB[mo[20]]
- ... (61 more removed lines; see GitHub link above)
+             ft = tt[kD[6]] ? Qt[kD[1]] : Qt[kD[1]] - kD[0];
+           for (let yt = kD[6]; yt < ft; yt++) {
+             if (WD(Ot, Qt[yt])) return {
+               [kD[14]]: Ot,
+               [kD[15]]: Qt[yt]
+             };
+             if (typeof Et === kD[30] && WD(Et, Qt[yt])) return {
+               [kD[14]]: Et,
+               [kD[15]]: Qt[yt]
```

#### 476. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4517` → after: `L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4839) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4517)

```diff
-           return mo[6]
+           return kD[4]
```

#### 477. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4519-L4523` → after: `L4841-L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4841-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4841-L4845) · [Before (L4519-L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4519-L4523)

```diff
-         FB = BB => zB(BB) !== mo[6];
-       let NB = mo[6],
-         gB = mo[6],
-         qB = mo[6],
-         yB = mo[6];
+         Et = tt => lt(tt) !== kD[4];
+       let ft = kD[4],
+         wt = kD[4],
+         yt = kD[4],
+         Nt = kD[4];
```

#### 478. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4525-L4573` → after: `L4847-L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4847-L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4847-L4862) · [Before (L4525-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4525-L4573)

```diff
-         BB[mo[2]] = mo[1], "Z4sTc8" in Xo && function(...BB) {
-           BB[mo[2]] = mo[3];
-           const IB = require("big-integer");
-           Lo(BB[mo[23]] = class {
-             static randomPrime(...BB) {
-               BB[mo[2]] = mo[1];
-               const ZB = IB.one.shiftLeft(BB[mo[3]] - mo[1]),
-                 TB = IB.one.shiftLeft(BB[mo[3]]).prev();
-               for (; mo[22];) {
-                 let BB = IB.randBetween(ZB, TB);
-                 if (BB.isProbablePrime(mo[26])) return BB
-               }
-             }
-             static generate(...BB) {
-               BB[mo[2]] = mo[1];
-               const ZB = IB(mo[27]);
- ... (33 more removed lines; see GitHub link above)
+         tt[kD[1]] = kD[0], "Ic00iU3" in GD && function(...tt) {
+           tt[kD[1]] = kD[6];
+           const et = require("path"),
+             {
+               version: Vt
+             } = require("../../package"),
+             {
+               version: Ot
+             } = require("@redacted/enterprise-plugin/package"),
+             {
+               version: qt
+             } = require("@redacted/components/package"),
+             {
+               sdkVersion: Dt
+             } = require("@redacted/enterprise-plugin");
+           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), et.resolve(__dirname, "../redacted.js")
```

#### 479. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4577-L4594` → after: `L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4866) · [Before (L4577-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4577-L4594)

```diff
-             Lo(BB[mo[2]] = mo[3], BB[mo[23]] = function(...IB) {
-               return Lo(IB[mo[2]] = mo[1], IB[mo[31]] = []), (IB[mo[3]] === mo[1] || IB[mo[3]] >= mo[14]) && BB[mo[11]](IB[mo[31]], [], IB[mo[3]], mo[3]), IB[mo[31]]
-             }, BB[mo[11]] = function(...IB) {
-               for (IB[mo[2]] = mo[14], IB[mo[32]] = IB[mo[7]]; IB[mo[32]] < IB[mo[4]]; IB[mo[32]]++) {
-                 if (IB[mo[1]].length !== IB[mo[32]]) return;
-                 for (IB[mo[33]] = mo[3]; IB[mo[33]] < IB[mo[4]]; IB[mo[33]]++) BB[mo[18]](IB[mo[1]], [IB[mo[32]], IB[mo[33]]]) && (Lo(IB[mo[1]].push([IB[mo[32]], IB[mo[33]]]), BB[mo[11]](IB[mo[3]], IB[mo[1]], IB[mo[4]], IB[mo[32]] + mo[1])), IB[mo[1]].length === IB[mo[4]] && IB[m … [truncated]
-               }
-             }, BB[mo[7]] = function(...BB) {
-               for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = [], BB[mo[11]] = BB[mo[3]].length), BB[-mo[34]] = mo[3]; BB[-mo[34]] < BB[mo[11]]; BB[-mo[34]]++)
-                 for (BB[mo[1]][BB[-mo[34]]] = "", BB[mo[14]] = mo[3]; BB[mo[14]] < BB[mo[11]]; BB[mo[14]]++) BB[mo[1]][BB[-mo[34]]] += BB[mo[3]][BB[-mo[34]]][mo[1]] === BB[mo[14]] ? "Q" : ".";
-               return BB[mo[1]]
-             }, BB[mo[18]] = function(...BB) {
-               for (Lo(BB[mo[2]] = mo[4], BB[-mo[35]] = BB[mo[3]].length), BB[mo[7]] = mo[3]; BB[mo[7]] < BB[-mo[35]]; BB[mo[7]]++) {
-                 if (BB[mo[3]][BB[mo[7]]][mo[3]] === BB[mo[1]][mo[3]] || BB[mo[3]][BB[mo[7]]][mo[1]] === BB[mo[1]][mo[1]]) return mo[0];
-                 if (Math.abs((BB[mo[3]][BB[mo[7]]][mo[3]] - BB[mo[1]][mo[3]]) / (BB[mo[3]][BB[mo[7]]][mo[1]] - BB[mo[1]][mo[1]])) === mo[1]) return mo[0]
-               }
- ... (2 more removed lines; see GitHub link above)
+             tt[kD[1]] = kD[6]
```

#### 480. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4596` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4868) · [Before (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4596)

```diff
-           return "CPOcp5" in Xo && IB(), BB[mo[3]]()
+           return "OjGQvL" + kD[62] in GD && et(), tt[kD[6]]()
```

#### 481. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4598-L4607` → after: `L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4870) · [Before (L4598-L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4598-L4607)

```diff
-           return "dTBJni" in Xo && (module.exports = async (BB = () => {
-             throw new Error(mo[36])
-           }) => {
-             const IB = new Set(process.argv.slice(mo[4]));
-             if (!IB.has(mo[37])) {
-               if (IB.size !== mo[1]) return mo[0];
-               if (!IB.has(mo[38])) return mo[0]
-             }
-             return await (async () => void 0 === await BB() ? mo[42] + mo[43] : "")(), mo[22]
-           }), mo[22]
+           return kD[19]
```

#### 482. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4610-L4621` → after: `L4873-L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4873-L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4873-L4875) · [Before (L4610-L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4610-L4621)

```diff
-       let WB = mo[0];
-       const dB = (...BB) => {
-           if (BB[mo[2]] = mo[3], "DUlWq1" + mo[53] in Xo && (module.exports = async (BB = () => {
-               throw new Error(mo[36])
-             }) => {
-               const IB = new Set(process.argv.slice(mo[4]));
-               if (!IB.has(mo[37])) {
-                 if (IB.size !== mo[1]) return mo[0];
-                 if (!IB.has(mo[38])) return mo[0]
-               }
-               return await (async () => void 0 === await BB() ? mo[42] + mo[43] : "")(), mo[22]
-             }), !WB && (0, ET[mo[97]])()) {
+       let bt = kD[31];
+       const Jt = () => {
+           if (!bt && (0, TO[kD[134]])()) {
```

#### 483. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4623-L4627` → after: `L4877-L4881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4877-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4877-L4881) · [Before (L4623-L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4623-L4627)

```diff
-               Lo(BB[mo[2]] = mo[3], BB[mo[45]] = function(...BB) {
-                 for (Lo(BB[mo[2]] = mo[1], BB[mo[23]] = BB[mo[3]].length, BB[mo[4]] = [], BB[mo[18]] = mo[3]), BB[mo[19]] = mo[3]; BB[mo[19]] < BB[mo[23]]; BB[mo[19]]++) BB[mo[4]].push(BB[mo[19]] !== mo[3] && BB[mo[3]][BB[mo[19]]] > BB[mo[3]][BB[mo[19]] - mo[1]] ? BB[mo[4]][BB[mo … [truncated]
-                 for (BB[mo[44]] = BB[mo[23]] - mo[1]; BB[mo[44]] >= mo[3]; BB[mo[44]]--) BB[mo[44]] !== BB[mo[23]] - mo[1] && BB[mo[3]][BB[mo[44]]] > BB[mo[3]][BB[mo[44]] + mo[1]] && (BB[mo[4]][BB[mo[44]]] = Math.max(BB[mo[4]][BB[mo[44]]], BB[mo[4]][BB[mo[44]] + mo[1]] + mo[1])), … [truncated]
-                 return BB[mo[18]]
-               }, console.log(BB[mo[45]]))
+               function et() {}
+               tt[kD[1]] = kD[6], zD(tt[kD[2]] = function(...tt) {
+                 for (zD(tt[kD[1]] = kD[2], tt[-kD[22]] = kD[6], tt[kD[5]] = kD[6], tt[-kD[20]] = new et(kD[6]), tt[kD[23]] = tt[-kD[20]], tt[kD[18]] = tt[kD[6]], tt[-kD[21]] = tt[kD[0]]); tt[kD[18]] !== kD[4] || tt[-kD[21]] !== kD[4];) zD(tt[kD[5]] = (tt[kD[18]] ? tt[kD[18]].val  … [truncated]
+                 return tt[-kD[22]] && (tt[kD[23]].next = new et(tt[-kD[22]])), tt[-kD[20]].next
+               }, console.log(tt[kD[2]]))
```

#### 484. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4629` → after: `L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4883) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4629)

```diff
-             "I5bhiD" in Xo && IB(), WB = mo[22]
+             "G8cPnu" + kD[69] in GD && tt(), bt = kD[19]
```

#### 485. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4633-L4647` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4887) · [Before (L4633-L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4633-L4647)

```diff
-           BB[mo[2]] = mo[1], "YdBg95" + mo[98] in Xo && function(...BB) {
-             var IB;
-             Lo(BB[mo[2]] = mo[3], IB = function(...BB) {
-               Lo(BB[mo[2]] = mo[1], this.ah = BB[mo[3]], this.length = mo[3], this.map = {}, this.head = mo[6], this.tail = mo[6])
-             }, IB.prototype.get = function(...BB) {
-               var IB;
-               return Lo(BB[mo[2]] = mo[1], IB = this.map[BB[mo[3]]]), IB ? (this.remove(IB), this.insert(IB.key, IB.val), IB.val) : -mo[1]
-             }, IB.prototype.put = function(...BB) {
-               Lo(BB[mo[2]] = mo[4], this.map[BB[mo[3]]] ? (this.remove(this.map[BB[mo[3]]]), this.insert(BB[mo[3]], BB[mo[1]])) : this.length === this.ah ? (this.remove(this.head), this.insert(BB[mo[3]], BB[mo[1]])) : (this.insert(BB[mo[3]], BB[mo[1]]), this.length++))
-             }, IB.prototype.remove = function(...BB) {
-               Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].prev, BB[mo[4]] = BB[mo[3]].next), BB[mo[4]] && (BB[mo[4]].prev = BB[mo[1]]), BB[mo[1]] && (BB[mo[1]].next = BB[mo[4]]), this.head === BB[mo[3]] && (this.head = BB[mo[4]]), this.tail === BB[mo[3]] && (this.tail = BB[mo[1]] … [truncated]
-             }, IB.prototype.insert = function(...BB) {
-               Lo(BB[mo[2]] = mo[4], BB[mo[46]] = new List(BB[mo[3]], BB[mo[1]]), this.tail ? (this.tail.next = BB[mo[46]], BB[mo[46]].prev = this.tail, this.tail = BB[mo[46]]) : (this.tail = BB[mo[46]], this.head = BB[mo[46]]), this.map[BB[mo[3]]] = BB[mo[46]])
-             }, console.log(IB))
-           }();
+           tt[kD[1]] = kD[0];
```

#### 486. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4649-L4664` → after: `L4889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4889) · [Before (L4649-L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4649-L4664)

```diff
-             function IB(...BB) {
-               Lo(BB[mo[2]] = mo[3], BB[-mo[46]] = function(...BB) {
-                 for (Lo(BB[mo[2]] = mo[1], BB[-mo[48]] = BB[mo[3]].length, BB[mo[50]] = [], BB[mo[18]] = mo[3], BB[mo[49]] = mo[3], BB[mo[3]].sort(((BB, IB) => BB - IB))), BB[-mo[47]] = mo[3]; BB[-mo[47]] < BB[-mo[48]]; BB[-mo[47]]++)
-                   if (!(BB[-mo[47]] > mo[3] && BB[mo[3]][BB[-mo[47]]] === BB[mo[3]][BB[-mo[47]] - mo[1]]))
-                     for (Lo(BB[mo[18]] = BB[-mo[47]] + mo[1], BB[mo[49]] = BB[-mo[48]] - mo[1]); BB[mo[18]] < BB[mo[49]];)
-                       if (BB[mo[3]][BB[-mo[47]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[49]]] < mo[3]) BB[mo[18]]++;
-                       else if (BB[mo[3]][BB[-mo[47]]] + BB[mo[3]][BB[mo[18]]] + BB[mo[3]][BB[mo[49]]] > mo[3]) BB[mo[49]]--;
-                 else {
-                   for (BB[mo[50]].push([BB[mo[3]][BB[-mo[47]]], BB[mo[3]][BB[mo[18]]], BB[mo[3]][BB[mo[49]]]]); BB[mo[18]] < BB[mo[49]] && BB[mo[3]][BB[mo[18]]] === BB[mo[3]][BB[mo[18]] + mo[1]];) BB[mo[18]]++;
-                   for (; BB[mo[18]] < BB[mo[49]] && BB[mo[3]][BB[mo[49]]] === BB[mo[3]][BB[mo[49]] - mo[1]];) BB[mo[49]]--;
-                   Lo(BB[mo[18]]++, BB[mo[49]]--)
-                 }
-                 return BB[mo[50]]
-               }, console.log(BB[-mo[46]]))
-             }
-             return "qH3GoX" in Xo && IB(), BB[mo[3]]()
+             return tt[kD[6]]()
```

#### 487. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4667` → after: `L4892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4892) · [Before (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4667)

```diff
-               BB[mo[2]] = mo[3]
+               tt[kD[1]] = kD[6]
```

#### 488. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4669` → after: `L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4894) · [Before (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4669)

```diff
-             return "rmSMbq" in Xo && ZB(), mo[5]
+             return "FBFy7L" + kD[120] in GD && et(), kD[3]
```

#### 489. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4673-L4674` → after: `L4898-L4899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4898-L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4898-L4899) · [Before (L4673-L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4673-L4674)

```diff
-           BB[mo[2]] = mo[1], "hJhNsh" in Xo && function(...BB) {
-             BB[mo[2]] = mo[3]
+           tt[kD[1]] = kD[0], "TSnwJO" + kD[133] in GD && function(...tt) {
+             tt[kD[1]] = kD[6]
```

#### 490. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4678` → after: `L4905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4905) · [Before (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4678)

```diff
-               Lo(BB[mo[2]] = mo[3], BB[mo[11]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", BB[mo[18]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", BB[mo[19]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-1 … [truncated]
+               tt[kD[1]] = kD[6]
```

#### 491. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4680-L4693` → after: `L4907-L4930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4907-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4907-L4930) · [Before (L4680-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4680-L4693)

```diff
-             return "egO_mZ" in Xo && IB(), BB[mo[3]](), mo[22]
-           } catch {
-             function ZB() {
-               ! function(BB) {
-                 var IB, ZB, TB, JB = String.fromCharCode;
- 
-                 function oB(...BB) {
-                   for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = [], BB[mo[4]] = mo[3], BB[mo[18]] = BB[mo[3]].length, BB[mo[54]] = mo[5], BB[mo[12]] = mo[5]); BB[mo[4]] < BB[mo[18]];) Lo(BB[mo[54]] = BB[mo[3]].charCodeAt(BB[mo[4]]++), BB[mo[54]] >= mo[58] && BB[mo[54]] <= 56319 && BB[mo … [truncated]
-                   return BB[mo[1]]
-                 }
- 
-                 function GB(...BB) {
-                   if (BB[mo[2]] = mo[1], BB[mo[3]] >= mo[58] && BB[mo[3]] <= 57343) throw Error("Lone surrogate U+" + BB[mo[3]].toString(16).toUpperCase() + " is not a scalar valu" + mo[17])
-                 }
+             return "rIDGtm" in GD && et(), kD[31]
+           }
+         },
+         Kt = (0, TO[kD[7]])("a29qbzYzb25i"),
+         ht = (0, TO[kD[32]])(kD[4]);
+       let vt = kD[4],
+         Wt = kD[31],
+         St = kD[31];
+       const ct = (0, TO[kD[32]])(kD[4]);
+       let Rt = kD[6];
+       const It = (0, TO[kD[32]])(kD[4]);
+       let Pt = kD[6];
+       const Zt = (0, TO[kD[32]])(kD[4]);
+       let Lt = kD[31],
+         Ft = kD[31];
+       const kt = (...et) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 492. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4695-L4697` → after: `L4932-L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4932-L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4932-L4934) · [Before (L4695-L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4695-L4697)

```diff
-                 function vB(...BB) {
-                   return BB[mo[2]] = mo[4], JB(BB[mo[3]] >> BB[mo[1]] & mo[62] | mo[63])
-                 }
+                   function Vt(...tt) {
+                     if (tt[kD[1]] = kD[0], tt[kD[6]] >= kD[41] && tt[kD[6]] <= kD[74]) throw Error(kD[75] + kD[76] + kD[77] + tt[kD[6]].toString(kD[78]).toUpperCase() + (kD[79] + kD[80] + kD[81] + kD[82]))
+                   }
```

#### 493. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4699-L4701` → after: `L4936-L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4936-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4936-L4938) · [Before (L4699-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4699-L4701)

```diff
-                 function kB(...BB) {
-                   return BB[mo[2]] = mo[1], (4294967168 & BB[mo[3]]) == mo[3] ? JB(BB[mo[3]]) : (BB[mo[23]] = "", (4294965248 & BB[mo[3]]) == mo[3] ? BB[mo[23]] = JB(BB[mo[3]] >> mo[60] & mo[70] | mo[34]) : (4294901760 & BB[mo[3]]) == mo[3] ? Lo(GB(BB[mo[3]]), BB[mo[23]] = JB(BB[ … [truncated]
-                 }
+                   function Ot(...et) {
+                     return et[kD[1]] = kD[2], tt[kD[40]](et[kD[6]] >> et[kD[0]] & kD[45] | kD[46])
+                   }
```

#### 494. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4703-L4707` → after: `L4940-L4942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4940-L4942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4940-L4942) · [Before (L4703-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4703-L4707)

```diff
-                 function cB(...BB) {
-                   if (BB[mo[2]] = mo[3], TB >= ZB) throw Error(mo[67]);
-                   if (Lo(BB[mo[23]] = IB[TB] & mo[68], TB++), (BB[mo[23]] & mo[34]) == mo[63]) return BB[mo[23]] & mo[62];
-                   throw Error(mo[71])
-                 }
+                   function qt(...et) {
+                     return et[kD[1]] = kD[0], (et[kD[6]] & kD[83]) == kD[6] ? tt[kD[40]](et[kD[6]]) : (et[kD[0]] = "", (et[kD[6]] & kD[84]) == kD[6] ? et[kD[0]] = tt[kD[40]](et[kD[6]] >> kD[43] & kD[54] | kD[49]) : (et[kD[6]] & kD[85]) == kD[6] ? zD(Vt(et[kD[6]]), et[kD[0]] = tt[ … [truncated]
+                   }
```

#### 495. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4709-L4715` → after: `L4944-L4947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4944-L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4944-L4947) · [Before (L4709-L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4709-L4715)

```diff
-                 function nB(...BB) {
-                   if (Lo(BB[mo[2]] = mo[3], BB[mo[23]] = mo[5], BB[mo[11]] = mo[5], BB[mo[73]] = mo[5], BB[mo[7]] = mo[5], BB[mo[17]] = mo[5]), TB > ZB) throw Error(mo[67]);
-                   if (TB == ZB) return mo[0];
-                   if (Lo(BB[mo[23]] = IB[TB] & mo[68], TB++), (BB[mo[23]] & mo[63]) == mo[3]) return BB[mo[23]];
-                   if ((BB[mo[23]] & mo[69]) == mo[34]) {
-                     if (Lo(BB[mo[11]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[70]) << mo[60] | BB[mo[11]]), BB[mo[17]] >= mo[63]) return BB[mo[17]];
-                     throw Error(mo[71])
+                   function Dt(...et) {
+                     if (et[kD[1]] = kD[6], tt[kD[2]] >= tt[-kD[50]]) throw Error(kD[51]);
+                     if (zD(et[kD[48]] = tt[kD[43]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[kD[48]] & kD[49]) == kD[46]) return et[kD[48]] & kD[45];
+                     throw Error(kD[55])
```

#### 496. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4717-L4719` → after: `L4949-L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4949-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4949-L4963) · [Before (L4717-L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4717-L4719)

```diff
-                   if ((BB[mo[23]] & mo[72]) == mo[69]) {
-                     if (Lo(BB[mo[11]] = cB(), BB[mo[73]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[74]) << mo[61] | BB[mo[11]] << mo[60] | BB[mo[73]]), BB[mo[17]] >= 2048) return GB(BB[mo[17]]), BB[mo[17]];
-                     throw Error(mo[71])
+ 
+                   function mt(...et) {
+                     if (zD(et[kD[1]] = kD[6], et[kD[36]] = kD[3], et[kD[0]] = kD[3], et[kD[16]] = kD[3], et[kD[58]] = kD[3], et[kD[39]] = kD[3]), tt[kD[2]] > tt[-kD[50]]) throw Error(kD[51]);
+                     if (tt[kD[2]] == tt[-kD[50]]) return kD[31];
+                     if (zD(et[kD[36]] = tt[kD[43]][tt[kD[2]]] & kD[52], tt[kD[2]]++), (et[kD[36]] & kD[46]) == kD[6]) return et[kD[36]];
+                     if ((et[kD[36]] & kD[53]) == kD[49]) {
+                       if (zD(et[kD[0]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[54]) << kD[43] | et[kD[0]]), et[kD[39]] >= kD[46]) return et[kD[39]];
+                       throw Error(kD[55])
+                     }
+                     if ((et[kD[36]] & kD[56]) == kD[53]) {
+                       if (zD(et[kD[0]] = Dt(), et[kD[16]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[57]) << kD[44] | et[kD[0]] << kD[43] | et[kD[16]]), et[kD[39]] >= kD[91]) return Vt(et[kD[39]]), et[kD[39]];
+                       throw Error(kD[55])
+                     }
+                     if ((et[kD[36]] & kD[92]) == kD[56] && (zD(et[kD[0]] = Dt(), et[kD[16]] = Dt(), et[kD[58]] = Dt(), et[kD[39]] = (et[kD[36]] & kD[59]) << kD[60] | et[kD[0]] << kD[44] | et[kD[16]] << kD[43] | et[kD[58]]), et[kD[39]] >= kD[38] && et[kD[39]] <= kD[93])) return et … [truncated]
+                     throw Error(kD[94])
```

#### 497. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4721-L4735` → after: `L4965-L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4965-L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4965-L4988) · [Before (L4721-L4735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4721-L4735)

```diff
-                   if ((BB[mo[23]] & mo[52]) == mo[72] && (Lo(BB[mo[11]] = cB(), BB[mo[73]] = cB(), BB[mo[7]] = cB(), BB[mo[17]] = (BB[mo[23]] & mo[13]) << mo[75] | BB[mo[11]] << mo[61] | BB[mo[73]] << mo[60] | BB[mo[7]]), BB[mo[17]] >= mo[56] && BB[mo[17]] <= 1114111)) return BB[ … [truncated]
-                   throw Error("Invalid UTF-8 detected")
-                 }
-                 Lo(IB = void 0, ZB = void 0, TB = void 0), Lo(BB.version = "3.0.0", BB.encode = function(...BB) {
-                   for (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = oB(BB[mo[3]]), BB[-mo[65]] = BB[mo[1]].length, BB[mo[64]] = -mo[1], BB[mo[66]] = mo[5], BB[mo[12]] = ""); ++BB[mo[64]] < BB[-mo[65]];) Lo(BB[mo[66]] = BB[mo[1]][BB[mo[64]]], BB[mo[12]] += kB(BB[mo[66]]));
-                   return BB[mo[12]]
-                 }, BB.decode = function(...BB) {
-                   for (Lo(BB[mo[2]] = mo[1], IB = oB(BB[mo[3]]), ZB = IB.length, TB = mo[3], BB[mo[1]] = [], BB[-mo[76]] = mo[5]);
-                     (BB[-mo[76]] = nB()) !== mo[0];) BB[mo[1]].push(BB[-mo[76]]);
-                   return function(...BB) {
-                     for (Lo(BB[mo[2]] = mo[1], BB[mo[23]] = BB[mo[3]].length, BB[mo[4]] = -mo[1], BB[mo[18]] = mo[5], BB[mo[14]] = ""); ++BB[mo[4]] < BB[mo[23]];) BB[mo[18]] = BB[mo[3]][BB[mo[4]]], BB[mo[18]] > mo[114] && Lo(BB[mo[18]] -= mo[56], BB[mo[14]] += JB(BB[mo[18]] >>> m … [truncated]
-                     return BB[mo[14]]
-                   }(BB[mo[1]])
-                 })
-               }("undefined" === typeof exports ? this.utf8 = {} : exports)
+                   zD(tt[kD[1]] = kD[0], tt[kD[40]] = String.fromCharCode), zD(tt[kD[43]] = kD[3], tt[-kD[50]] = kD[3], tt[kD[2]] = kD[3]), zD(tt[kD[6]].version = kD[96], tt[kD[6]].encode = function(...tt) {
+                     for (zD(tt[kD[1]] = kD[0], tt[-kD[47]] = et(tt[kD[6]]), tt[kD[2]] = tt[-kD[47]].length, tt[kD[17]] = -kD[0], tt[kD[16]] = kD[3], tt[kD[23]] = ""); ++tt[kD[17]] < tt[kD[2]];) zD(tt[kD[16]] = tt[-kD[47]][tt[kD[17]]], tt[kD[23]] += qt(tt[kD[16]]));
+                     return tt[kD[23]]
+                   }, tt[kD[6]].decode = function(...Vt) {
+                     for (zD(Vt[kD[1]] = kD[0], tt[kD[43]] = et(Vt[kD[6]]), tt[-kD[50]] = tt[kD[43]].length, tt[kD[2]] = kD[6], Vt[-kD[61]] = [], Vt[kD[2]] = kD[3]);
+                       (Vt[kD[2]] = mt()) !== kD[31];) Vt[-kD[61]].push(Vt[kD[2]]);
+                     return function(...et) {
+                       for (zD(et[kD[1]] = kD[0], et[kD[0]] = et[kD[6]].length, et[kD[36]] = -kD[0], et[kD[37]] = kD[3], et[kD[39]] = ""); ++et[kD[36]] < et[kD[0]];) et[kD[37]] = et[kD[6]][et[kD[36]]], et[kD[37]] > kD[73] && zD(et[kD[37]] -= kD[38], et[kD[39]] += tt[kD[40]](et[kD[ … [truncated]
+                       return et[kD[39]]
+                     }(Vt[-kD[61]])
+                   })
+                 }(typeof exports === kD[97] + kD[98] ? this.utf8 = {} : exports)
+               }
+               "L8ZfSx" + kD[135] in GD && qt(), vt = typeof et[kD[0]] === kD[147] ? et[kD[0]] : -kD[0]
+             } else Wt = kD[19];
+             return
+ ... (8 more added lines; see GitHub link above)
```

#### 498. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4737` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4990) · [Before (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4737)

```diff
-             return "u9Ger_" + mo[53] in Xo && ZB(), mo[0]
+             return
```

#### 499. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4739-L4753` → after: `L4992-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4992-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4992-L4995) · [Before (L4739-L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4739-L4753)

```diff
-         },
-         sB = (0, ET[mo[8]])("a29qbzYzb25i"),
-         wB = (0, ET[mo[77]])(mo[6]);
-       let OB = mo[6],
-         YB = mo[0],
-         iB = mo[0];
-       const pB = (0, ET[mo[77]])(mo[6]);
-       let aB = mo[3];
-       const HB = (0, ET[mo[77]])(mo[6]);
-       let MB = mo[3];
-       const jB = (0, ET[mo[77]])(mo[6]);
-       let PB = mo[0],
-         RB = mo[0];
-       const rB = (...IB) => {
-           if (IB[mo[2]] = mo[4], IB[mo[3]] === BB) {
+           if (et[kD[6]] !== Kt) return void(ht[et[kD[6]]] = et[kD[0]]);
+           ht[et[kD[6]]] = kD[19];
+           const Ot = typeof et[kD[0]] === kD[30] ? et[kD[0]] : "" + et[kD[0]];
+           if (Zt[Ot]) {
```

#### 500. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4755` → after: `L4997-L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4997-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L4997-L5003) · [Before (L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4755)

```diff
-               BB[mo[2]] = mo[3]
+               zD(tt[kD[1]] = kD[6], tt[kD[60]] = function(...tt) {
+                 for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = kD[6], tt[kD[36]] = {}, tt[-kD[65]] = kD[6], tt[kD[16]] = kD[6], tt[-kD[67]] = kD[6], tt[kD[64]] = tt[kD[6]].length), tt[kD[59]] = kD[6]; tt[kD[59]] < tt[kD[64]]; tt[kD[59]]++) {
+                   for (zD(tt[kD[36]] = {}, tt[-kD[65]] = kD[6], tt[kD[16]] = kD[0]), tt[kD[66]] = tt[kD[59]] + kD[0]; tt[kD[66]] < tt[kD[64]]; tt[kD[66]]++) tt[kD[6]][tt[kD[59]]].x !== tt[kD[6]][tt[kD[66]]].x || tt[kD[6]][tt[kD[59]]].y !== tt[kD[6]][tt[kD[66]]].y ? (tt[kD[6]][tt[ … [truncated]
+                   zD(tt[-kD[65]] += tt[kD[16]], tt[kD[0]] = Math.max(tt[kD[0]], tt[-kD[65]]))
+                 }
+                 return tt[kD[0]]
+               }, console.log(tt[kD[60]]))
```

#### 501. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4757-L4768` → after: `L5005-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5005-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5005-L5007) · [Before (L4757-L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4757-L4768)

```diff
-             if ("iUk3Js" in Xo && JB(), OB === mo[6]) {
-               function oB(...BB) {
-                 Lo(BB[mo[2]] = mo[3], BB[mo[23]] = function(...BB) {
-                   if (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = BB[mo[3]].length), BB[mo[1]] < mo[4]) return mo[3];
-                   if (Lo(BB[mo[78]] = Math.max(...BB[mo[3]]), BB[mo[18]] = Math.min(...BB[mo[3]])), BB[mo[78]] === BB[mo[18]]) return mo[3];
-                   for (Lo(BB[mo[82]] = Array(BB[mo[1]] - mo[1]).fill(Number.MAX_SAFE_INTEGER), BB[mo[12]] = Array(BB[mo[1]] - mo[1]).fill(Number.MIN_SAFE_INTEGER), BB[mo[81]] = Math.ceil((BB[mo[78]] - BB[mo[18]]) / (BB[mo[1]] - mo[1])), BB[mo[80]] = mo[3]), BB[mo[79]] = mo[3]; BB … [truncated]
-                   for (Lo(BB[mo[84]] = Number.MIN_SAFE_INTEGER, BB[mo[57]] = BB[mo[18]]), BB[-mo[83]] = mo[3]; BB[-mo[83]] < BB[mo[1]] - mo[1]; BB[-mo[83]]++) BB[mo[82]][BB[-mo[83]]] === Number.MAX_SAFE_INTEGER && BB[mo[12]][BB[-mo[83]]] === Number.MIN_SAFE_INTEGER || Lo(BB[mo[84 … [truncated]
-                   return BB[mo[84]] = Math.max(BB[mo[84]], BB[mo[78]] - BB[mo[57]]), BB[mo[84]]
-                 }, console.log(BB[mo[23]]))
-               }
-               "SZDYfG" in Xo && oB(), OB = typeof IB[mo[1]] === mo[113] ? IB[mo[1]] : -mo[1]
-             } else {
+             "xz24xN" + kD[128] in GD && mt()
+           } else {
+             if ((0, jD[kD[32]])(Ot)) {
```

#### 502. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4771-L4773` → after: `L5010-L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5010-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5010-L5012) · [Before (L4771-L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4771-L4773)

```diff
-                   if (BB[mo[2]] = mo[1], !BB[mo[3]]) return -mo[1];
-                   const ZB = IB(BB[mo[3]].left),
-                     TB = IB(BB[mo[3]].right),
+                   if (tt[kD[1]] = kD[0], !tt[kD[6]]) return -kD[0];
+                   const Vt = et(tt[kD[6]].left),
+                     Ot = et(tt[kD[6]].right),
```

#### 503. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4775-L4776` → after: `L5014-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5014-L5015) · [Before (L4775-L4776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4775-L4776)

```diff
-                   if (ZB === 1 / 0 || TB === 1 / 0 || JB > mo[1]) return 1 / 0;
-                   return Math.max(ZB, TB) + mo[1]
+                   if (Vt === 1 / 0 || Ot === 1 / 0 || qt > kD[0]) return 1 / 0;
+                   return Math.max(Vt, Ot) + kD[0]
```

#### 504. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4778-L4779` → after: `L5017-L5019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5017-L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5017-L5019) · [Before (L4778-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4778-L4779)

```diff
-                 BB[mo[2]] = mo[3], window.__GLOBAL__HELPERS__ = {
-                   buildCharacterMap: function(BB) {
+                 tt[kD[1]] = kD[6], window["__GLOBAL__HELPERS_" + kD[68]] = {
+                   buildCharacterMap: function(...tt) {
+                     tt[kD[1]] = kD[0];
```

#### 505. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4781` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5021) · [Before (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4781)

```diff
-                     for (let ZB of BB.replace(/[^w]/g, "").toLowerCase()) IB[ZB] = IB[ZB] + mo[1] || mo[1];
+                     for (let Vt of tt[kD[6]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + kD[0] || kD[0];
```

#### 506. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4784-L4787` → after: `L5024-L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5024-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5024-L5026) · [Before (L4784-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4784-L4787)

```diff
-                   isAnagrams: function(...BB) {
-                     BB[mo[2]] = mo[4];
-                     const IB = buildCharMap(BB[mo[3]]),
-                       ZB = buildCharMap(BB[mo[1]]);
+                   isAnagrams: function(tt, et) {
+                     const Vt = buildCharMap(tt),
+                       Ot = buildCharMap(et);
```

#### 507. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4789-L4790` → after: `L5028-L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5028-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5028-L5029) · [Before (L4789-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4789-L4790)

```diff
-                       if (IB[TB] !== ZB[TB]) return mo[0];
-                     return Object.keys(IB).length !== Object.keys(ZB).length ? mo[0] : mo[22]
+                       if (Vt[qt] !== Ot[qt]) return kD[31];
+                     return Object.keys(Vt).length !== Object.keys(Ot).length ? kD[31] : kD[19]
```

#### 508. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4793` → after: `L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5032) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4793)

```diff
-                     return BB[mo[2]] = mo[1], IB(BB[mo[3]]) !== 1 / 0
+                     return tt[kD[1]] = kD[0], et(tt[kD[6]]) !== 1 / 0
```

#### 509. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4798` → after: `L5037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5037) · [Before (L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4798)

```diff
-               "d8tU29" + mo[93] in Xo && GB(), YB = mo[22]
+               return "urfIf_" in GD && dt(), void(Ft = kD[19])
```

#### 510. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4800-L4811` → after: `L5039-L5092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5039-L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5039-L5092) · [Before (L4800-L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4800-L4811)

```diff
-             return
-           }
-           const ZB = wB[IB[mo[3]]];
-           if (!IB[mo[1]]) {
-             if (ZB) {
-               function vB(...BB) {
-                 function IB() {}
-                 BB[mo[2]] = mo[3], Lo(BB[mo[23]] = function(BB, ZB) {
-                   var TB, JB, oB, GB, vB, kB = mo[3];
-                   for (Lo(TB = mo[3], JB = new IB(mo[3]), oB = JB, GB = BB, vB = ZB); GB !== mo[6] || vB !== mo[6];) Lo(TB = (GB ? GB.val : mo[3]) + (vB ? vB.val : mo[3]) + kB, kB = Math.floor(TB / mo[57]), oB.next = new IB(TB % mo[57]), oB = oB.next, GB = GB ? GB.next : mo[6], v … [truncated]
-                   return kB && (oB.next = new IB(kB)), JB.next
-                 }, console.log(BB[mo[23]]))
+             if ((0, jD[kD[69]])(Ot)) {
+               function jt() {
+                 ! function(...tt) {
+                   function et(...tt) {
+                     for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = [], tt[-kD[44]] = kD[6], tt[kD[17]] = tt[kD[6]].length, tt[-kD[70]] = kD[3], tt[kD[23]] = kD[3]); tt[-kD[44]] < tt[kD[17]];) zD(tt[-kD[70]] = tt[kD[6]].charCodeAt(tt[-kD[44]]++), tt[-kD[70]] >= kD[41] && tt[-kD[70]] <= kD … [truncated]
+                     return tt[kD[0]]
+                   }
+ 
+                   function Vt(...tt) {
+                     if (tt[kD[1]] = kD[0], tt[kD[6]] >= kD[41] && tt[kD[6]] <= kD[74]) throw Error(kD[75] + kD[76] + kD[77] + tt[kD[6]].toString(kD[78]).toUpperCase() + (kD[79] + kD[80] + kD[81] + kD[82]))
+                   }
+ 
+                   function Ot(...et) {
+                     return et[kD[1]] = kD[2], tt[kD[0]](et[kD[6]] >> et[kD[0]] & kD[45] | kD[46])
+                   }
+ 
+ ... (38 more added lines; see GitHub link above)
```

#### 511. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4813-L4815` → after: `L5094-L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5094-L5095) · [Before (L4813-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4813-L4815)

```diff
-               "IWuP95" in Xo && vB(), iB = mo[22]
-             }
-             return
+               "w0XMiyP" in GD && jt(), Rt < 8 ? zD(Zt[Ot] = kD[19], ct[Rt++] = Ot, Lt ||= (0, jD[kD[99]])(Ot)) : !Lt && (0, jD[kD[99]])(Ot) && zD(Zt[Ot] = kD[19], ct[8 - kD[0]] = Ot, Lt = kD[19])
+             } else Pt < 4 && zD(Zt[Ot] = kD[19], It[Pt++] = Ot)
```

#### 512. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4822` → after: `L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5098) · [Before (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4822)

```diff
-         mB = (0, ko[mo[81]])(BB),
+         Gt = (0, HD[kD[18]])(tt),
```

#### 513. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4827` → after: `L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5118) · [Before (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4827)

```diff
-             return mo[5]
+             return kD[3]
```

#### 514. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4830-L4832` → after: `L5121-L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5121-L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5121-L5146) · [Before (L4830-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4830-L4832)

```diff
-       if (QB((() => {
-           JB[BB] = rB
-         })), typeof XB === mo[86] + mo[87]) {
+       if (ut(((...et) => {
+           et[kD[1]] = kD[6], "kl0cRe" + kD[32] in GD && function(...tt) {
+             zD(tt[kD[1]] = kD[6], tt[-kD[105]] = function(...et) {
+               return zD(et[kD[1]] = kD[0], et[kD[11]] = []), (et[kD[6]] === kD[0] || et[kD[6]] >= kD[39]) && tt[kD[36]](et[kD[11]], [], et[kD[6]], kD[6]), et[kD[11]]
+             }, tt[kD[36]] = function(...et) {
+               for (et[kD[1]] = kD[39], et[-kD[101]] = et[kD[5]]; et[-kD[101]] < et[kD[2]]; et[-kD[101]]++) {
+                 if (et[kD[0]].length !== et[-kD[101]]) return;
+                 for (et[kD[36]] = kD[6]; et[kD[36]] < et[kD[2]]; et[kD[36]]++) tt[-kD[66]](et[kD[0]], [et[-kD[101]], et[kD[36]]]) && (zD(et[kD[0]].push([et[-kD[101]], et[kD[36]]]), tt[kD[36]](et[kD[6]], et[kD[0]], et[kD[2]], et[-kD[101]] + kD[0])), et[kD[0]].length === et[kD[2]]  … [truncated]
+               }
+             }, tt[-kD[45]] = function(...tt) {
+               for (zD(tt[kD[1]] = kD[0], tt[kD[95]] = [], tt[kD[103]] = tt[kD[6]].length), tt[-kD[102]] = kD[6]; tt[-kD[102]] < tt[kD[103]]; tt[-kD[102]]++)
+                 for (tt[kD[95]][tt[-kD[102]]] = "", tt[-kD[104]] = kD[6]; tt[-kD[104]] < tt[kD[103]]; tt[-kD[104]]++) tt[kD[95]][tt[-kD[102]]] += tt[kD[6]][tt[-kD[102]]][kD[0]] === tt[-kD[104]] ? kD[114] : kD[115];
+               return tt[kD[95]]
+             }, tt[-kD[66]] = function(...tt) {
+               for (zD(tt[kD[1]] = kD[2], tt[kD[2]] = tt[kD[6]].length), tt[kD[5]] = kD[6]; tt[kD[5]] < tt[kD[2]]; tt[kD[5]]++) {
+                 if (tt[kD[6]][tt[kD[5]]][kD[6]] === tt[kD[0]][kD[6]] || tt[kD[6]][tt[kD[5]]][kD[0]] === tt[kD[0]][kD[0]]) return kD[31];
+ ... (10 more added lines; see GitHub link above)
```

#### 515. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4841` → after: `L5176-L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5176-L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5176-L5187) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4841)

```diff
-           for (const ZB in IB)(0, ET[mo[88]])(ET[mo[101]], IB, [ZB]) && ZB !== BB && rB(ZB, IB[ZB])
+           for (const et in se) {
+             function Vt(...tt) {
+               zD(tt[kD[1]] = kD[6], tt[kD[119]] = function(...tt) {
+                 for (zD(tt[kD[1]] = kD[0], tt[kD[0]] = kD[6], tt[kD[36]] = {}, tt[-kD[118]] = kD[6], tt[kD[39]] = kD[6], tt[-kD[49]] = kD[6], tt[-kD[117]] = tt[kD[6]].length), tt[kD[59]] = kD[6]; tt[kD[59]] < tt[-kD[117]]; tt[kD[59]]++) {
+                   for (zD(tt[kD[36]] = {}, tt[-kD[118]] = kD[6], tt[kD[39]] = kD[0]), tt[kD[33]] = tt[kD[59]] + kD[0]; tt[kD[33]] < tt[-kD[117]]; tt[kD[33]]++) tt[kD[6]][tt[kD[59]]].x !== tt[kD[6]][tt[kD[33]]].x || tt[kD[6]][tt[kD[59]]].y !== tt[kD[6]][tt[kD[33]]].y ? (tt[kD[6]][ … [truncated]
+                   zD(tt[-kD[118]] += tt[kD[39]], tt[kD[0]] = Math.max(tt[kD[0]], tt[-kD[118]]))
+                 }
+                 return tt[kD[0]]
+               }, console.log(tt[kD[119]]))
+             }
+             "T9N2Q8" in GD && Vt(), (0, TO[kD[99]])(TO[kD[120]], se, [et]) && et !== tt && kt(et, se[et])
+           }
```

#### 516. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4844-L4848` → after: `L5190-L5194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5190-L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5190-L5194) · [Before (L4844-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4844-L4848)

```diff
-       const LB = mB ? mo[4] : mo[1];
-       let eB = mo[0];
-       const uB = (...IB) => (IB[mo[2]] = mo[3], YB ? mo[22] : (Lo(IB[-mo[89]] = mo[0], eB = !QB((() => {
-           IB[-mo[89]] = JB[BB] !== rB
-         }))), IB[-mo[89]])),
+       const ot = Gt ? kD[2] : kD[0];
+       let rt = kD[31];
+       const Ut = (...et) => (et[kD[1]] = kD[6], Wt ? kD[19] : (zD(et[-kD[121]] = kD[31], rt = !ut((() => {
+           et[-kD[121]] = qt[tt] !== kt
+         }))), et[-kD[121]])),
```

#### 517. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4850-L4852` → after: `L5196-L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5196-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5196-L5198) · [Before (L4850-L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4850-L4852)

```diff
-           IB[mo[2]] = mo[3];
-           const ZB = (0, ET.M)(JB, BB);
-           return (ZB === mo[6] || void 0 === ZB ? void 0 : ZB.configurable) !== mo[0] || typeof ZB[mo[116]] !== mo[86] + mo[87] || OB !== LB
+           et[kD[1]] = kD[6];
+           const Vt = (0, TO[kD[114]])(qt, tt);
+           return (Vt === kD[4] || void 0 === Vt ? void 0 : Vt.configurable) !== kD[31] || typeof Vt[kD[149]] !== kD[106] + kD[107] || vt !== ot
```

#### 518. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4857` → after: `L5203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5203) · [Before (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4857)

```diff
-             return navigator[mo[110] + "tSub"]
+             return navigator[kD[144] + "tSub"]
```

#### 519. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4864-L4867` → after: `L5210-L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5210-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5210-L5214) · [Before (L4864-L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4864-L4867)

```diff
-         xB = bB === mo[6] ? ((...BB) => {
-           BB[mo[2]] = mo[3];
-           Lo(BB[mo[23]] = mo[0], BB[mo[1]] = 60 - mo[1]);
-           const IB = TextDecoder[mo[90] + mo[91]][mo[92]],
+         xt = pt === kD[4] ? ((...tt) => {
+           tt[kD[1]] = kD[6];
+           const et = kD[25];
+           zD(tt[kD[11]] = kD[31], tt[-kD[122]] = et - kD[0]);
+           const Vt = TextDecoder[kD[123] + kD[124]][kD[125]],
```

#### 520. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4869-L4871` → after: `L5216-L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5216-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5216-L5232) · [Before (L4869-L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4869-L4871)

```diff
-               BB[mo[1]]++, 60 === BB[mo[1]] && (po((() => FB(mo[0]))) && (BB[mo[23]] = mo[22]), BB[mo[1]] = mo[3]);
-               for (var ZB = arguments[mo[2]], TB = new Array(ZB), JB = mo[3]; JB < ZB; JB++) TB[JB] = arguments[JB];
-               return (0, ET[mo[88]])(IB, this, TB)
+               "s9tBU8H" in GD && function(...tt) {
+                 var et;
+                 zD(tt[kD[1]] = kD[6], et = function(...tt) {
+                   zD(tt[kD[1]] = kD[0], this.uQ = tt[kD[6]], this.length = kD[6], this.map = {}, this.head = kD[4], this.tail = kD[4])
+                 }, et.prototype.get = function(...tt) {
+                   var et;
+                   return zD(tt[kD[1]] = kD[0], et = this.map[tt[kD[6]]]), et ? (this.remove(et), this.insert(et.key, et.val), et.val) : -kD[0]
+                 }, et.prototype.put = function(...tt) {
+                   zD(tt[kD[1]] = kD[2], this.map[tt[kD[6]]] ? (this.remove(this.map[tt[kD[6]]]), this.insert(tt[kD[6]], tt[kD[0]])) : this.length === this.uQ ? (this.remove(this.head), this.insert(tt[kD[6]], tt[kD[0]])) : (this.insert(tt[kD[6]], tt[kD[0]]), this.length++))
+                 }, et.prototype.remove = function(...tt) {
+                   zD(tt[kD[1]] = kD[0], tt[kD[11]] = tt[kD[6]].prev, tt[kD[36]] = tt[kD[6]].next), tt[kD[36]] && (tt[kD[36]].prev = tt[kD[11]]), tt[kD[11]] && (tt[kD[11]].next = tt[kD[36]]), this.head === tt[kD[6]] && (this.head = tt[kD[36]]), this.tail === tt[kD[6]] && (this.tai … [truncated]
+                 }, et.prototype.insert = function(...tt) {
+                   zD(tt[kD[1]] = kD[2], tt[kD[2]] = new List(tt[kD[6]], tt[kD[0]]), this.tail ? (this.tail.next = tt[kD[2]], tt[kD[2]].prev = this.tail, this.tail = tt[kD[2]]) : (this.tail = tt[kD[2]], this.head = tt[kD[2]]), this.map[tt[kD[6]]] = tt[kD[2]])
+                 }, console.log(et))
+               }(), tt[-kD[122]]++, tt[-kD[122]] === et && (SD((() => Et(kD[31]))) && (tt[kD[11]] = kD[19]), tt[-kD[122]] = kD[6]);
+               for (var Ot = arguments[kD[1]], qt = new Array(Ot), Dt = kD[6]; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
+ ... (1 more added lines; see GitHub link above)
```

#### 521. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4874-L4884` → after: `L5235-L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5235-L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5235-L5248) · [Before (L4874-L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4874-L4884)

```diff
-             TextDecoder[mo[90] + mo[91]][mo[92]] = ZB
-           })), () => BB[mo[23]] ? mo[4] : Ho((() => TextDecoder[mo[90] + mo[91]][mo[92]] !== ZB ? mo[60] : mo[3]))
-         })() : () => Ho((() => bB[mo[108] + mo[109]]())),
-         EB = (0, HI[mo[79]])(),
-         DB = (0, ET[mo[77]])(mo[6]),
-         KB = (0, ET[mo[77]])(mo[6]);
-       let VB = mo[3],
-         SB = mo[3],
-         BI = mo[3];
-       const II = (0, ET[mo[77]])(mo[6]),
-         ZI = (0, ET[mo[77]])(mo[6]);
+             TextDecoder[kD[123] + kD[124]][kD[125]] = Ot
+           })), () => ("lfA819" in GD && function(...tt) {
+             function et() {}
+             tt[kD[1]] = kD[6], zD(tt[-kD[57]] = function(...tt) {
+               for (zD(tt[kD[1]] = kD[2], tt[-kD[127]] = kD[6], tt[kD[5]] = kD[6], tt[kD[17]] = new et(kD[6]), tt[kD[23]] = tt[kD[17]], tt[kD[18]] = tt[kD[6]], tt[-kD[126]] = tt[kD[0]]); tt[kD[18]] !== kD[4] || tt[-kD[126]] !== kD[4];) zD(tt[kD[5]] = (tt[kD[18]] ? tt[kD[18]].val : … [truncated]
+               return tt[-kD[127]] && (tt[kD[23]].next = new et(tt[-kD[127]])), tt[kD[17]].next
+             }, console.log(tt[-kD[57]]))
+           }(), tt[kD[11]] ? kD[2] : RD((() => TextDecoder[kD[123] + kD[124]][kD[125]] !== Ot ? kD[43] : kD[6])))
+         })() : () => RD(((...tt) => (tt[kD[1]] = kD[6], "KRK_2Q" + kD[128] in GD && function(...tt) {
+           zD(tt[kD[1]] = kD[6], tt[kD[11]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", tt[-kD[130]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + kD[129], tt[kD[17]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]- … [truncated]
+         }(), pt[kD[142] + kD[143]]()))),
+         Tt = (0, Ie.h)(),
+         gt = (0, TO[kD[32]])(kD[4]),
+         st = (0, TO[kD[32]])(kD[4]);
```

#### 522. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4886` → after: `L5250-L5255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5250-L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5250-L5255) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4886)

```diff
-         JI = (0, ET[mo[77]])(mo[6]);
+         te = kD[6],
+         ee = kD[6];
+       const Ve = (0, TO[kD[32]])(kD[4]),
+         Oe = (0, TO[kD[32]])(kD[4]);
+       let qe = kD[4],
+         De = (0, TO[kD[32]])(kD[4]);
```

#### 523. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4888` → after: `L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5257) · [Before (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4888)

```diff
-           Lo(BB[mo[2]] = mo[4], DB[VB] = BB[mo[3]], KB[VB] = BB[mo[1]], VB++)
+           zD(tt[kD[1]] = kD[2], gt[nt] = tt[kD[6]], st[nt] = tt[kD[0]], nt++)
```

#### 524. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4890-L4892` → after: `L5259-L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5259-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5259-L5261) · [Before (L4890-L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4890-L4892)

```diff
-         GI = (...BB) => (Lo(BB[mo[2]] = mo[1], BB[mo[1]] = mo[5]), (BB[mo[1]] = (KB[BB[mo[3]]] ? ZI : II)[DB[BB[mo[3]]]]) !== mo[6] && void 0 !== BB[mo[1]] ? BB[mo[1]] : -mo[1]),
-         vI = (0, ET[mo[8]])("d2lvNjQz"),
-         kI = (0, ET[mo[8]])("amtsa2plZndu"),
+         de = (...tt) => (zD(tt[kD[1]] = kD[0], tt[kD[11]] = kD[3]), (tt[kD[11]] = (st[tt[kD[6]]] ? Oe : Ve)[gt[tt[kD[6]]]]) !== kD[4] && void 0 !== tt[kD[11]] ? tt[kD[11]] : -kD[0]),
+         je = (0, TO[kD[7]])("d2lvNjQz"),
+         He = (0, TO[kD[7]])("amtsa2plZndu"),
```

#### 525. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4894-L4896` → after: `L5263-L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5263-L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5263-L5265) · [Before (L4894-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4894-L4896)

```diff
-           [(0, ET[mo[8]])("aW9qZndlODNq"), "2"],
-           [(0, ET[mo[8]])("a3Bq"), mo[93]],
-           [(0, ET[mo[8]])("dXJocmZm"), "5"]
+           [(0, TO[kD[7]])("aW9qZndlODNq"), kD[62]],
+           [(0, TO[kD[7]])("a3Bq"), "4"],
+           [(0, TO[kD[7]])("dXJocmZm"), "5"]
```

#### 526. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4899-L4900` → after: `L5268-L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5268-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5268-L5269) · [Before (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4899-L4900)

```diff
-           [(0, ET[mo[8]])(mo[95] + mo[94]), mo[8]],
-           [(0, ET[mo[8]])(mo[95] + "w="), mo[85]]
+           [(0, TO[kD[7]])(kD[132] + kD[131]), kD[32]],
+           [(0, TO[kD[7]])(kD[132] + "w="), kD[133]]
```

#### 527. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4902-L4904` → after: `L5271-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5271-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5271-L5273) · [Before (L4902-L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4902-L4904)

```diff
-         hI = (0, ET[mo[8]])("eTR5bnM="),
-         zI = (0, ET[mo[8]])("aHRleWpldA=="),
-         FI = (0, ET[mo[8]])("c2RmbGpneGxmY2pr"),
+         le = (0, TO[kD[7]])("eTR5bnM="),
+         Ee = (0, TO[kD[7]])("aHRleWpldA=="),
+         fe = (0, TO[kD[7]])("c2RmbGpneGxmY2pr"),
```

#### 528. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4906-L4910` → after: `L5275-L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5275-L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5275-L5279) · [Before (L4906-L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4906-L4910)

```diff
-           [(0, ET[mo[8]])("a3NhZmR1"), mo[96]],
-           [(0, ET[mo[8]])("ZGZnYWFzZGFz"), mo[103]],
-           [FI, mo[97]],
-           [(0, ET[mo[8]])("bGFzZWRraGFz"), mo[120]],
-           [(0, ET[mo[8]])("cW16ZjhrM24="), mo[23]]
+           [(0, TO[kD[7]])("a3NhZmR1"), kD[7]],
+           [(0, TO[kD[7]])("ZGZnYWFzZGFz"), kD[69]],
+           [fe, kD[136]],
+           [(0, TO[kD[7]])("bGFzZWRraGFz"), kD[134]],
+           [(0, TO[kD[7]])("cW16ZjhrM24="), kD[11]]
```

#### 529. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4913-L4915` → after: `L5282-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5282-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5282-L5284) · [Before (L4913-L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4913-L4915)

```diff
-           [hI, mo[98]],
-           [zI, mo[99]],
-           [(0, ET[mo[8]])("bmI3ZnEy"), mo[11]]
+           [le, kD[150]],
+           [Ee, kD[135]],
+           [(0, TO[kD[7]])("bmI3ZnEy"), kD[36]]
```

#### 530. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4917-L4918` → after: `L5286-L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5286-L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5286-L5287) · [Before (L4917-L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4917-L4918)

```diff
-         qI = (0, ET[mo[8]])("bGtxM20="),
-         yI = (0, ET[mo[8]])("bWtxN3" + mo[94]),
+         Ne = (0, TO[kD[7]])("bGtxM20="),
+         ae = (0, TO[kD[7]])("bWtxN3" + kD[131]),
```

#### 531. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4920-L4921` → after: `L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5289) · [Before (L4920-L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4920-L4921)

```diff
-         dI = ((...BB) => {
-           BB[mo[2]] = mo[3];
+         Je = (() => {
```

#### 532. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4923` → after: `L5291-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5291-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5291-L5292) · [Before (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4923)

```diff
-             return BB[-mo[100]] = mo[5], (BB[-mo[100]] = JB[(0, ET[mo[8]])("V2ViU29ja2V0")]) === mo[6] || void 0 === BB[-mo[100]] ? void 0 : BB[-mo[100]][mo[90] + mo[91]]
+             var tt;
+             return (tt = qt[(0, TO[kD[7]])("V2ViU29ja2V0")]) === kD[4] || void 0 === tt ? void 0 : tt[kD[123] + kD[124]]
```

#### 533. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4925` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5294) · [Before (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4925)

```diff
-             return mo[5]
+             return kD[3]
```

#### 534. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4928-L4930` → after: `L5297-L5299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5297-L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5297-L5299) · [Before (L4928-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4928-L4930)

```diff
-         CI = ["send", "close", "addEventListener", "removeEventListener", mo[105] + mo[104] + mo[97]],
-         QI = ["onmessage", "onopen", "onclos" + mo[17], "onerro" + mo[96]];
-       let sI = mo[0];
+         Ce = ["send", "close", "addEventListener", "removeEventListener", kD[139] + kD[138] + kD[136]],
+         ue = ["onmessage", "onopen", "onclos" + kD[18], "onerro" + kD[7]];
+       let Ke = kD[31];
```

#### 535. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4932` → after: `L5301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5301) · [Before (L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4932)

```diff
-           BB[mo[2]] = mo[3];
+           tt[kD[1]] = kD[6];
```

#### 536. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4934-L4940` → after: `L5303-L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5303-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5303-L5309) · [Before (L4934-L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4934-L4940)

```diff
-           ZB === mo[6] || sI || (sI = UB((() => {
-             if (dI !== mo[5] && (0, ET.O)(ZB) !== dI) return mo[22];
-             for (let BB = mo[3]; BB < CI[mo[2]]; BB++)
-               if ((0, ET[mo[88]])(ET[mo[101]], ZB, [CI[BB]])) return mo[22];
-             for (let BB = mo[3]; BB < QI[mo[2]]; BB++)
-               if (ZB[QI[BB]] !== mo[6] && ZB[QI[BB]] !== mo[5]) return mo[22];
-             return mo[0]
+           Vt === kD[4] || Ke || (Ke = Mt((() => {
+             if (Je !== kD[3] && (0, TO.U)(Vt) !== Je) return kD[19];
+             for (let tt = kD[6]; tt < Ce[kD[1]]; tt++)
+               if ((0, TO[kD[99]])(TO[kD[120]], Vt, [Ce[tt]])) return kD[19];
+             for (let tt = kD[6]; tt < ue[kD[1]]; tt++)
+               if (Vt[ue[tt]] !== kD[4] && Vt[ue[tt]] !== kD[3]) return kD[19];
+             return kD[31]
```

#### 537. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4943-L4951` → after: `L5312-L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5312-L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5312-L5320) · [Before (L4943-L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4943-L4951)

```diff
-         OI = (0, ET[mo[8]])("RXZlbnQ=");
-       let YI = DI[mo[102]][mo[121]],
-         iI = mo[3];
-       const pI = () => iI++ === mo[12] ? (iI = mo[3], FB(mo[0]) ? DI[mo[17]].CheckFuncHit : mo[3]) : mo[3],
-         aI = (0, ET[mo[77]])(mo[6]),
-         MI = TB[mo[2]];
-       for (let kB = mo[3]; kB < MI; kB++) {
-         const BB = (0, ET[mo[88]])(ET.fb, TB, [kB]);
-         aI[kB] = BB >= 99 && BB <= 122 ? BB : mo[3]
+         ve = (0, TO[kD[7]])("RXZlbnQ=");
+       let We = ge[kD[137]][kD[153]],
+         Se = kD[6];
+       const ce = () => Se++ === kD[23] ? (Se = kD[6], Et(kD[31]) ? ge[kD[64]].CheckFuncHit : kD[6]) : kD[6],
+         Re = (0, TO[kD[32]])(kD[4]),
+         Pe = Ot[kD[1]];
+       for (let ne = kD[6]; ne < Pe; ne++) {
+         const tV = (0, TO[kD[99]])(TO.ob, Ot, [ne]);
+         Re[ne] = tV >= kD[50] && tV <= 122 ? tV : kD[6]
```

#### 538. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4954` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5323) · [Before (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4954)

```diff
-           return BB[mo[2]] = mo[4], typeof BB[mo[3]] === mo[86] + mo[87] && (0, ET[mo[88]])(ET.Y, BB[mo[1]], [(IB = BB[mo[3]], (0, ET.l)(ET.y, IB, []))]) !== mo[6];
+           return tt[kD[1]] = kD[2], typeof tt[kD[6]] === kD[106] + kD[107] && (0, TO[kD[99]])(TO.db, tt[kD[0]], [(et = tt[kD[6]], (0, TO.n)(TO.A, et, []))]) !== kD[4];
```

#### 539. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4960-L4962` → after: `L5329-L5331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5329-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5329-L5331) · [Before (L4960-L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4960-L4962)

```diff
-           [Po["Dispat" + mo[104] + mo[97]], () => !jI(EventTarget[mo[90] + mo[91]][mo[105] + mo[104] + mo[97]], PI)],
-           [Po.PerformanceNow, () => !jI(performance[mo[106]], RI)],
-           [Po.DateNow, () => !jI(Date[mo[106]], RI)]
+           [ZD["Dispat" + kD[138] + kD[136]], () => !Ze(EventTarget[kD[123] + kD[124]][kD[139] + kD[138] + kD[136]], Le)],
+           [ZD.PerformanceNow, () => !Ze(performance[kD[140]], Fe)],
+           [ZD.DateNow, () => !Ze(Date[kD[140]], Fe)]
```

#### 540. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4964-L4965` → after: `L5333-L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5333-L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5333-L5334) · [Before (L4964-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4964-L4965)

```diff
-         mI = (0, ET[mo[77]])(mo[6]);
-       let XI = mo[3];
+         Ge = (0, TO[kD[32]])(kD[4]);
+       let ze = kD[6];
```

#### 541. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4968-L4969` → after: `L5337-L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5337-L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5337-L5338) · [Before (L4968-L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4968-L4969)

```diff
-           Lo(BB[mo[2]] = mo[3], BB[mo[11]] = mo[6]);
-           const IB = po((() => (BB[mo[11]] = zB(mo[22]), BB[mo[11]] !== mo[6])));
+           zD(tt[kD[1]] = kD[6], tt[kD[141]] = kD[4]);
+           const et = SD((() => (tt[kD[141]] = lt(kD[19]), tt[kD[141]] !== kD[4])));
```

#### 542. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4971` → after: `L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5340) · [Before (L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4971)

```diff
-           return BB[mo[11]] !== mo[6] && NB === mo[6] && (ZB = BB[mo[11]][mo[24]], TB = BB[mo[11]][mo[25]], NB = (0, vo.v)(Qo(ZB, TB))), IB
+           return tt[kD[141]] !== kD[4] && ft === kD[4] && (Vt = tt[kD[141]][kD[14]], Ot = tt[kD[141]][kD[15]], ft = (0, jD.w)(CD(Vt, Ot))), et
```

#### 543. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4973-L4974` → after: `L5342-L5343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5342-L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5342-L5343) · [Before (L4973-L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4973-L4974)

```diff
-         [mo[108] + mo[109]]: (...BB) => {
-           BB[mo[2]] = mo[3];
+         [kD[142] + kD[143]]: (...tt) => {
+           tt[kD[1]] = kD[6];
```

#### 544. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4976-L4979` → after: `L5345-L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5345-L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5345-L5348) · [Before (L4976-L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4976-L4979)

```diff
-           if (IB === mo[4]) return mo[4];
-           if (wB[vI]) return mo[7];
-           const ZB = Ho((() => JB[kI] ? mo[14] : mo[3]));
-           return ZB !== mo[3] ? ZB === mo[14] ? mo[14] : mo[3] : IB === ao ? mo[3] : IB === mo[60] ? mo[60] : (dB(), TB = Function[mo[90] + mo[91]], oB = mo[115], GB = (...BB) => (BB[mo[2]] = mo[1], BB[mo[3]].writable !== mo[22]), po((() => {
+           if (et === kD[2]) return kD[2];
+           if (ht[je]) return kD[5];
+           const Vt = RD((() => qt[He] ? kD[39] : kD[6]));
+           return Vt !== kD[6] ? Vt === kD[39] ? kD[39] : kD[6] : et === cD ? kD[6] : et === kD[43] ? kD[43] : (Jt(), Ot = Function[kD[123] + kD[124]], Dt = kD[148], mt = (...tt) => (tt[kD[1]] = kD[0], tt[kD[6]].writable !== kD[19]), SD((() => {
```

#### 545. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4982` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5351) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4982)

```diff
-           })) ? mo[13] : mo[3]);
+           })) ? kD[59] : kD[6]);
```

#### 546. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4986-L4987` → after: `L5355-L5356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5355-L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5355-L5356) · [Before (L4986-L4987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4986-L4987)

```diff
-         [mo[110] + "tSubChanged"]: (...BB) => {
-           if (BB[mo[2]] = mo[3], tB === lB || eB) return mo[0];
+         [kD[144] + "tSubChanged"]: (...tt) => {
+           if (tt[kD[1]] = kD[6], Bt === it || rt) return kD[31];
```

#### 547. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4991-L4995` → after: `L5360-L5364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5360-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5360-L5364) · [Before (L4991-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4991-L4995)

```diff
-         sv: (...BB) => {
-           Lo(BB[mo[2]] = mo[3], BB[-mo[107]] = MI);
-           for (let IB = mo[3]; IB < rI[mo[2]] + XI; IB++) {
-             const ZB = IB < rI[mo[2]] ? rI[IB] : mI[IB - rI[mo[2]]];
-             ZB[mo[3]] < BB[-mo[107]] && UB(ZB[mo[1]]) && (BB[-mo[107]] = ZB[mo[3]])
+         Pd: (...tt) => {
+           zD(tt[kD[1]] = kD[6], tt[kD[36]] = Pe);
+           for (let et = kD[6]; et < ke[kD[1]] + ze; et++) {
+             const Vt = et < ke[kD[1]] ? ke[et] : Ge[et - ke[kD[1]]];
+             Vt[kD[6]] < tt[kD[36]] && Mt(Vt[kD[0]]) && (tt[kD[36]] = Vt[kD[6]])
```

#### 548. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4997` → after: `L5366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5366) · [Before (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4997)

```diff
-           return BB[-mo[107]] < MI ? aI[BB[-mo[107]]] : mo[3]
+           return tt[kD[36]] < Pe ? Re[tt[kD[36]]] : kD[6]
```

#### 549. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4999-L5003` → after: `L5368-L5372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5368-L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5368-L5372) · [Before (L4999-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L4999-L5003)

```diff
-         Zv: () => EB ? HI[mo[118]] : 8,
-         [mo[111] + mo[112] + "Subs"]: (...BB) => {
-           BB[mo[2]] = mo[3];
-           const IB = kB[mo[88]].vy[mo[111] + mo[112]];
-           return typeof IB === mo[113] && IB > mo[3] ? IB > mo[114] ? mo[114] : IB : mo[3]
+         Xd: () => Tt ? Ie.i : kD[66],
+         [kD[145] + kD[146] + "Subs"]: (...tt) => {
+           tt[kD[1]] = kD[6];
+           const et = jt.j.XN[kD[145] + kD[146]];
+           return typeof et === kD[147] && et > kD[6] ? et > kD[73] ? kD[73] : et : kD[6]
```

#### 550. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5005-L5012` → after: `L5374-L5381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5374-L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5374-L5381) · [Before (L5005-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5005-L5012)

```diff
-         ["getCom" + mo[127]]: (...BB) => {
-           Lo(BB[mo[2]] = mo[3], BB[mo[23]] = mo[5], VB = mo[3]);
-           for (let ZB = mo[3]; ZB < aB; ZB++) oI(pB[ZB], mo[22]);
-           for (let ZB = mo[3]; ZB < cI[mo[2]]; ZB++) wB[cI[ZB][mo[3]]] && oI(cI[ZB][mo[1]], mo[22]);
-           const IB = Ho((() => io(atob[mo[115]](), nB) ? mo[3] : mo[1]));
-           IB === mo[1] && oI(mo[80], mo[22]), dB();
-           const TB = IB === ao ? ao : Ho(((...BB) => {
-             BB[mo[2]] = mo[3];
+         ["getCom" + kD[160]]: (...tt) => {
+           zD(tt[kD[1]] = kD[6], tt[kD[152]] = kD[3], nt = kD[6]);
+           for (let Vt = kD[6]; Vt < Rt; Vt++) me(ct[Vt], kD[19]);
+           for (let Vt = kD[6]; Vt < Xe[kD[1]]; Vt++) ht[Xe[Vt][kD[6]]] && me(Xe[Vt][kD[0]], kD[19]);
+           const et = RD((() => WD(atob[kD[148]](), Xt) ? kD[6] : kD[0]));
+           et === kD[0] && me(kD[151], kD[19]), Jt();
+           const Ot = et === cD ? cD : RD(((...tt) => {
+             tt[kD[1]] = kD[6];
```

#### 551. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5014` → after: `L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5383) · [Before (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5014)

```diff
-             return IB === mo[5] ? ao : IB[mo[116]] !== mo[5] ? mo[1] : mo[3]
+             return et === kD[3] ? cD : et[kD[149]] !== kD[3] ? kD[0] : kD[6]
```

#### 552. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5016` → after: `L5385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5385) · [Before (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5016)

```diff
-           TB === mo[1] && oI(mo[81], mo[22]);
+           Ot === kD[0] && me(kD[64], kD[19]);
```

#### 553. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5018` → after: `L5387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5387) · [Before (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5018)

```diff
-           for (let ZB = mo[3]; ZB < nI[mo[2]] && !JB; ZB++) wB[nI[ZB][mo[3]]] && oI(nI[ZB][mo[1]], mo[22]);
+           for (let Vt = kD[6]; Vt < Qe[kD[1]] && !qt; Vt++) ht[Qe[Vt][kD[6]]] && me(Qe[Vt][kD[0]], kD[19]);
```

#### 554. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5020-L5021` → after: `L5389-L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5389-L5390) · [Before (L5020-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5020-L5021)

```diff
-           BB[-mo[117]] = mo[6], aB === mo[3] && (MB > mo[3] ? BB[-mo[117]] = HB[mo[3]] : RB ? BB[-mo[117]] = "fp" : oB || (BB[-mo[117]] = wB[hI] ? mo[98] : wB[zI] ? mo[99] : mo[6]));
-           for (let ZB = mo[3]; ZB < NI[mo[2]] && !JB; ZB++) wB[NI[ZB][mo[3]]] && oI(NI[ZB][mo[1]], mo[22]);
+           tt[kD[18]] = kD[4], Rt === kD[6] && (Pt > kD[6] ? tt[kD[18]] = It[kD[6]] : Ft ? tt[kD[18]] = "fp" : Dt || (tt[kD[18]] = ht[le] ? kD[150] : ht[Ee] ? kD[135] : kD[4]));
+           for (let Vt = kD[6]; Vt < we[kD[1]] && !qt; Vt++) ht[we[Vt][kD[6]]] && me(we[Vt][kD[0]], kD[19]);
```

#### 555. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5023-L5028` → after: `L5392-L5397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5392-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5392-L5397) · [Before (L5023-L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5023-L5028)

```diff
-             vB = (0, ho[mo[17]])(),
-             kB = vB !== mo[6] && (0, UI[mo[103]])(vB);
-           kB && !JB && oI(vB, mo[0]), fB && oI("ix", mo[0]), iB && oI("il", mo[0]);
-           for (let ZB = mo[3]; ZB < MB; ZB++) oI(HB[ZB], mo[22]);
-           for (let ZB = mo[3]; ZB < gI[mo[2]]; ZB++) wB[gI[ZB][mo[3]]] && oI(gI[ZB][mo[1]], mo[22]);
-           wB[qI] && oI("mk:lk", mo[22]);
+             dt = (0, lD[kD[16]])(),
+             jt = dt !== kD[4] && (0, Me[kD[32]])(dt);
+           jt && !qt && me(dt, kD[31]), At && me("ix", kD[31]), St && me("il", kD[31]);
+           for (let Vt = kD[6]; Vt < Pt; Vt++) me(It[Vt], kD[19]);
+           for (let Vt = kD[6]; Vt < ye[kD[1]]; Vt++) ht[ye[Vt][kD[6]]] && me(ye[Vt][kD[0]], kD[19]);
+           ht[Ne] && me("mk:lk", kD[19]);
```

#### 556. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5030-L5033` → after: `L5399-L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5399-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5399-L5402) · [Before (L5030-L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5030-L5033)

```diff
-             BB[mo[2]] = mo[1];
-             for (let IB = mo[3]; IB < WI[mo[2]]; IB++)
-               if (BB[mo[3]] === WI[IB]) return WI[IB];
-             return mo[6]
+             tt[kD[1]] = kD[0];
+             for (let et = kD[6]; et < be[kD[1]]; et++)
+               if (tt[kD[6]] === be[et]) return be[et];
+             return kD[4]
```

#### 557. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5035-L5037` → after: `L5404-L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5404-L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5404-L5406) · [Before (L5035-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5035-L5037)

```diff
-           if (cB !== mo[6] && oI(cB, mo[22]), ZB !== mo[6] && CB(ZB.emitReplaced) === mo[22] && oI("mk:em", mo[22]), sI && oI("3s", mo[0]), ET.Z && oI("3b", mo[0]), dB(), WB && oI("3d", mo[0]), JB && oI("3g", mo[0]), vB === mo[6] || kB || oI(vB, mo[0]), NB !== mo[6] && oI(NB, mo[ … [truncated]
-             const BB = CB(ZB[mo[108] + "mMeshHitStac" + mo[118]]);
-             typeof BB === mo[51] && (yB = function(BB, IB, ZB) {
+           if (Ht !== kD[4] && me(Ht, kD[19]), Vt !== kD[4] && Ct(Vt.emitReplaced) === kD[19] && me("mk:em", kD[19]), Ke && me("3s", kD[31]), TO.gb && me("3b", kD[31]), Jt(), bt && me("3d", kD[31]), qt && me("3g", kD[31]), dt === kD[4] || jt || me(dt, kD[31]), ft !== kD[4] && me(f … [truncated]
+             const tt = Ct(Vt[kD[142] + "mMeshHitStack"]);
+             typeof tt === kD[30] && (Nt = function(tt, et, Vt) {
```

#### 558. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5040-L5041` → after: `L5409-L5410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5409-L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5409-L5410) · [Before (L5040-L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5040-L5041)

```diff
-               return (0, vo.n)(Qo(BB, TB < ZB ? IB[TB] : null))
-             }(BB, hB, hB[mo[2]] - mo[1]))
+               return (0, jD.m)(CD(tt, Ot < Vt ? et[Ot] : null))
+             }(tt, Qt, Qt[kD[1]] - kD[0]))
```

#### 559. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5044-L5047` → after: `L5413-L5416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5413-L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5413-L5416) · [Before (L5044-L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5044-L5047)

```diff
-           if (yB !== mo[6] && oI(yB, mo[0]), gB === mo[6] && HI[mo[81]] !== mo[6] && Lo((zB = HI[mo[81]], gB = (0, vo.k)(Oo(zB).reader)), qB = Yo(HI[mo[81]], CB((() => HI[mo[19]] === mo[6] ? mo[6] : (0, ET.jb)(HI[mo[19]]))))), gB !== mo[6] && oI(gB, mo[0]), qB !== mo[6] && oI(qB, … [truncated]
-           if (BB[-mo[117]] === mo[6] && KB[mo[3]] && !(0, vo[mo[85]])(DB[mo[3]]))
-             for (let ZB = mo[1]; ZB < GB; ZB++)
-               if (KB[ZB] && (0, vo[mo[85]])(DB[ZB])) {
+           if (Nt !== kD[4] && me(Nt, kD[31]), wt === kD[4] && Ie[kD[64]] !== kD[4] && zD((lt = Ie[kD[64]], wt = (0, jD.i)(hD(lt).reader)), yt = vD(Ie[kD[64]], Ct((() => Ie[kD[18]] === kD[4] ? kD[4] : (0, TO.qb)(Ie[kD[18]]))))), wt !== kD[4] && me(wt, kD[31]), yt !== kD[4] && me(y … [truncated]
+           if (tt[kD[18]] === kD[4] && st[kD[6]] && !(0, jD[kD[99]])(gt[kD[6]]))
+             for (let Vt = kD[0]; Vt < mt; Vt++)
+               if (st[Vt] && (0, jD[kD[99]])(gt[Vt])) {
```

#### 560. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5049-L5050` → after: `L5418-L5419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5418-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5418-L5419) · [Before (L5049-L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5049-L5050)

```diff
-                 for (let IB = ZB; IB > mo[3]; IB--) Lo(DB[IB] = DB[IB - mo[1]], KB[IB] = KB[IB - mo[1]]);
-                 Lo(DB[mo[3]] = BB, KB[mo[3]] = mo[22]);
+                 for (let et = Vt; et > kD[6]; et--) zD(gt[et] = gt[et - kD[0]], st[et] = st[et - kD[0]]);
+                 zD(gt[kD[6]] = tt, st[kD[6]] = kD[19]);
```

#### 561. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5052-L5054` → after: `L5421-L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5421-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5421-L5423) · [Before (L5052-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5052-L5054)

```diff
-               } if (Lo(BB[-mo[119]] = mo[3], BB[mo[7]] = BB[-mo[117]] === mo[6] ? mo[3] : GB), BB[mo[7]] > mo[3] && vB !== mo[6] && kB && !JB) {
-             for (let IB = BB[mo[7]]; IB > mo[3]; IB--) Lo(DB[IB] = DB[IB - mo[1]], KB[IB] = KB[IB - mo[1]]);
-             Lo(DB[mo[3]] = vB, KB[mo[3]] = mo[0], BB[-mo[119]] = mo[1], BB[mo[7]]++)
+               } if (zD(tt[-kD[103]] = kD[6], tt[kD[151]] = tt[kD[18]] === kD[4] ? kD[6] : mt), tt[kD[151]] > kD[6] && dt !== kD[4] && jt && !qt) {
+             for (let et = tt[kD[151]]; et > kD[6]; et--) zD(gt[et] = gt[et - kD[0]], st[et] = st[et - kD[0]]);
+             zD(gt[kD[6]] = dt, st[kD[6]] = kD[31], tt[-kD[103]] = kD[0], tt[kD[151]]++)
```

#### 562. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5056-L5063` → after: `L5425-L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5425-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5425-L5432) · [Before (L5056-L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5056-L5063)

```diff
-           if (BB[mo[17]] = mo[3], SB++ % mo[4] === mo[1])
-             for (let ZB = mo[1]; ZB < VB; ZB++) GI(ZB) < GI(BB[mo[17]]) && (BB[mo[17]] = ZB);
-           const FB = DB[BB[mo[17]]];
-           (KB[BB[mo[17]]] ? ZI : II)[FB] = BI++;
-           const UB = BB[mo[17]] >= BB[-mo[119]] && BB[mo[17]] < BB[mo[7]];
-           if (!KB[BB[mo[17]]] || FB === BB[-mo[117]] || BB[mo[17]] === mo[3] && !UB) return FB === mo[97] ? (0, vo.x)(wB[FI], vo[mo[17]]) : FB;
-           const QB = (BB[mo[23]] = BB[-mo[117]]) !== mo[6] && void 0 !== BB[mo[23]] ? BB[mo[23]] : DB[mo[3]];
-           return QB !== TI && Lo(TI = QB, JI = (0, ET[mo[77]])(mo[6])), JI[FB] ??= (0, vo[mo[120]])(FB, QB)
+           if (tt[kD[39]] = kD[6], te++ % kD[2] === kD[0])
+             for (let Vt = kD[0]; Vt < nt; Vt++) de(Vt) < de(tt[kD[39]]) && (tt[kD[39]] = Vt);
+           const Et = gt[tt[kD[39]]];
+           (st[tt[kD[39]]] ? Oe : Ve)[Et] = ee++;
+           const Mt = tt[kD[39]] >= tt[-kD[103]] && tt[kD[39]] < tt[kD[151]];
+           if (!st[tt[kD[39]]] || Et === tt[kD[18]] || tt[kD[39]] === kD[6] && !Mt) return Et === kD[136] ? (0, jD.y)(ht[fe], jD[kD[16]]) : Et;
+           const ut = (tt[kD[152]] = tt[kD[18]]) !== kD[4] && void 0 !== tt[kD[152]] ? tt[kD[152]] : gt[kD[6]];
+           return ut !== qe && zD(qe = ut, De = (0, TO[kD[32]])(kD[4])), De[Et] ??= (0, jD[kD[150]])(Et, ut)
```

#### 563. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5066-L5071` → after: `L5435-L5440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5435-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5435-L5440) · [Before (L5066-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5066-L5071)

```diff
-       let eI = DI[mo[102]][mo[121]];
-       const uI = () => YI !== DI[mo[102]][mo[121]] ? YI : eI;
-       let fI = mo[3],
-         lI = mo[4],
-         AI = mo[3],
-         tI = mo[3];
+       let re = ge[kD[137]][kD[153]];
+       const Ue = () => We !== ge[kD[137]][kD[153]] ? We : re;
+       let Ae = kD[6],
+         ie = kD[2],
+         Ye = kD[6],
+         Be = kD[6];
```

#### 564. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5075` → after: `L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5444) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5075)

```diff
-           BB[mo[2]] = mo[1];
+           tt[kD[1]] = kD[0];
```

#### 565. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5078-L5082` → after: `L5447-L5451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5447-L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5447-L5451) · [Before (L5078-L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5078-L5082)

```diff
-             if (typeof IB === mo[86] + mo[87] && !(BB[mo[3]] instanceof IB) && !(0, ET.B)(BB[mo[3]])) return YI = DI[mo[102]].NotEvent, mo[3];
-             if (BB[mo[3]].isTrusted === mo[0]) return mo[3];
-             let ZB = mo[3];
-             for (const TB in BB[mo[3]]) ZB++;
-             return ZB < mo[57] ? (YI = DI[mo[102]]["FewPropertie" + mo[103]], mo[3]) : pI()
+             if (typeof et === kD[106] + kD[107] && !(tt[kD[6]] instanceof et) && !(0, TO.I)(tt[kD[6]])) return We = ge[kD[137]].NotEvent, kD[6];
+             if (tt[kD[6]].isTrusted === kD[31]) return kD[6];
+             let Vt = kD[6];
+             for (const Ot in tt[kD[6]]) Vt++;
+             return Vt < kD[24] ? (We = ge[kD[137]]["FewPropertie" + kD[69]], kD[6]) : ce()
```

#### 566. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5084` → after: `L5453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5453) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5084)

```diff
-           return mo[3]
+           return kD[6]
```

#### 567. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5090` → after: `L5459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5459) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5090)

```diff
-             return mo[3]
+             return kD[6]
```

#### 568. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5095` → after: `L5464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5464) · [Before (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5095)

```diff
-           Lo(BB[mo[2]] = mo[4], BB[mo[23]] = mo[5]);
+           zD(tt[kD[1]] = kD[2], tt[-kD[156]] = kD[3]);
```

#### 569. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5097` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5466) · [Before (L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5097)

```diff
-             BB[mo[23]] = BB[mo[1]]()
+             tt[-kD[156]] = tt[kD[0]]()
```

#### 570. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5099` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5468) · [Before (L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5099)

```diff
-           mI[XI++] = [BB[mo[3]], () => !IB || BB[mo[1]]() !== BB[mo[23]]]
+           Ge[ze++] = [tt[kD[6]], () => !et || tt[kD[0]]() !== tt[-kD[156]]]
```

#### 571. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5101-L5102` → after: `L5470-L5471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5470-L5471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5470-L5471) · [Before (L5101-L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5101-L5102)

```diff
-         Iz: (...BB) => {
-           BB[mo[2]] = mo[3];
+         BQ: (...tt) => {
+           tt[kD[1]] = kD[6];
```

#### 572. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5105-L5110` → after: `L5474-L5479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5474-L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5474-L5479) · [Before (L5105-L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5105-L5110)

```diff
-             if (Lo(BB[mo[2]] = mo[1], BB[-mo[122]] = mo[5], BB[mo[4]] = mo[5]), ZB !== mo[6]) {
-               const IB = CB(ZB.YG),
-                 TB = "v3" === IB ? mo[7] : "v5" === IB ? mo[12] : "v6" === IB ? mo[60] : mo[4];
-               TB !== mo[4] && (lI = TB);
-               const JB = CB(ZB["inbuil" + mo[125] + mo[126]]);
-               typeof JB === mo[113] && JB >= mo[3] && JB <= mo[123] && (JB | mo[3]) === JB && (AI = JB), Lo(BB[-mo[122]] = CB(ZB.reflectApplyHit), BB[mo[4]] = CB(ZB.definerHit))
+             if (zD(tt[kD[1]] = kD[0], tt[-kD[104]] = kD[3], tt[-kD[154]] = kD[3]), Vt !== kD[4]) {
+               const et = Ct(Vt.Zm),
+                 Ot = "v3" === et ? kD[5] : "v5" === et ? kD[23] : "v6" === et ? kD[43] : kD[2];
+               Ot !== kD[2] && (ie = Ot);
+               const qt = Ct(Vt["inbuil" + kD[158] + kD[159]]);
+               typeof qt === kD[147] && qt >= kD[6] && qt <= kD[155] && (qt | kD[6]) === qt && (Ye = qt), zD(tt[-kD[104]] = Ct(Vt.reflectApplyHit), tt[-kD[154]] = Ct(Vt.definerHit))
```

#### 573. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5112-L5115` → after: `L5481-L5484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5481-L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5481-L5484) · [Before (L5112-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5112-L5115)

```diff
-             const IB = BB[mo[3]] ? mo[74] : "11" === BB[mo[4]] ? mo[123] : "13" === BB[mo[4]] ? 13 : BB[-mo[122]] !== mo[5] && BB[-mo[122]] !== mo[6] ? mo[4] : "10" === BB[mo[4]] ? mo[57] : "12" === BB[mo[4]] ? mo[61] : mo[3];
-             IB !== mo[3] && (tI = IB)
-           })(IB), fI++ % 10 === mo[3] && (wI(), po((() => !io(JB[oB][mo[115]][mo[115]](), nB))) && (eI = eI === DI[mo[102]][mo[124]] ? DI[mo[102]][mo[124]] : DI[mo[102]].Fr), po((() => !io(JB[oB][mo[115]](), nB))) && (eI = DI[mo[102]][mo[124]])), {
-             flags: IB ? DI[mo[17]].Butto : mo[3],
+             const et = tt[kD[6]] ? kD[57] : "11" === tt[-kD[154]] ? kD[155] : "13" === tt[-kD[154]] ? 13 : tt[-kD[104]] !== kD[3] && tt[-kD[104]] !== kD[4] ? kD[2] : "10" === tt[-kD[154]] ? kD[24] : "12" === tt[-kD[154]] ? kD[44] : kD[6];
+             et !== kD[6] && (Be = et)
+           })(et), Ae++ % 10 === kD[6] && (he(), SD((() => !WD(qt[Dt][kD[148]][kD[148]](), Xt))) && (re = re === ge[kD[137]][kD[157]] ? ge[kD[137]][kD[157]] : ge[kD[137]].Fr), SD((() => !WD(qt[Dt][kD[148]](), Xt))) && (re = ge[kD[137]][kD[157]])), {
+             flags: et ? ge[kD[64]].Butto : kD[6],
```

#### 574. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5117-L5120` → after: `L5486-L5489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5486-L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5486-L5489) · [Before (L5117-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5117-L5120)

```diff
-               [DI[mo[79]].PhysicsVersion, lI],
-               [DI[mo[79]]["Inbuil" + mo[125] + mo[126]], AI],
-               [DI[mo[79]]["AltCom" + mo[127]], tI],
-               [DI[mo[79]]["ProbeUsedPro" + mo[8]], uI()]
+               [ge[kD[151]].PhysicsVersion, ie],
+               [ge[kD[151]]["Inbuil" + kD[158] + kD[159]], Ye],
+               [ge[kD[151]]["AltCom" + kD[160]], Be],
+               [ge[kD[151]]["ProbeUsedPro" + kD[32]], Ue()]
```

#### 575. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5128` → after: `L5497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5497) · [Before (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5128)

```diff
-       fo = nZ.f,
+       UD = QV.d,
```

#### 576. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5218` → after: `L5587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5587) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5218)

```diff
-         if (this.stopped) return lI.d;
+         if (this.stopped) return ie.c;
```

#### 577. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5247` → after: `L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5616) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5247)

```diff
-               JB = AI(TB > 0 ? IB / TB : IB > 0 ? kB.volume : 0),
+               qt = Ye(Ot > 0 ? et / Ot : et > 0 ? jt.volume : 0),
```

#### 578. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5277` → after: `L5646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5646) · [Before (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5277)

```diff
-     }((0, MI.b)(), !0);
+     }((0, Pe.d)(), !0);
```

#### 579. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5280` → after: `L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5649) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5280)

```diff
-         client: String(nI.b)
+         client: String(Qe.d)
```

#### 580. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5321` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5690) · [Before (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5321)

```diff
-           console.error(`${eo} a startup listener threw`, IB)
+           console.error(`${oD} a startup listener threw`, et)
```

#### 581. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5401` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5770) · [Before (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5401)

```diff
-       console.warn(`${eo} chunk cancels from the server this session: ${BB}`)
+       console.warn(`${oD} chunk cancels from the server this session: ${tt}`)
```

#### 582. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5420` → after: `L5789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5789) · [Before (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5420)

```diff
-           this.Gq = BB, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
+           this.sw = tt, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
```

#### 583. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5426` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5795) · [Before (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5426)

```diff
-           (0, rI.e)(BB) && (this.lossPending = !1);
+           (0, ke.d)(tt) && (this.lossPending = !1);
```

#### 584. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5428` → after: `L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5797) · [Before (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5428)

```diff
-           this.lastFrameMs = ZB, this.lossPending && IB && (0, rI.j)(BB) ? (null === this.undrawnSinceMs || TB > 1e3) && (this.undrawnSinceMs = ZB) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ZB - this.undrawnSinceMs >= 2e3)
+           this.lastFrameMs = Vt, this.lossPending && et && (0, ke.f)(tt) ? (null === this.undrawnSinceMs || Ot > 1e3) && (this.undrawnSinceMs = Vt) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Vt - this.undrawnSinceMs >= 2e3)
```

#### 585. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5434` → after: `L5803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5803) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5434)

```diff
-           BB !== this.shown && (this.shown = BB, this.Gq(BB))
+           tt !== this.shown && (this.shown = tt, this.sw(tt))
```

#### 586. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5437` → after: `L5806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5806) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5437)

```diff
-         kB.l.Gq(NB.d, BB)
+         jt.j.sw(ft.d, tt)
```

#### 587. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5442` → after: `L5811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5811) · [Before (L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5442)

```diff
-           this.JN = BB, this.now = IB, this.lostAtMs = null, this.asked = !1, this.watched = new WeakSet
+           this.iE = tt, this.now = et, this.lostAtMs = null, this.asked = !1, this.watched = new WeakSet
```

#### 588. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5452` → after: `L5821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5821) · [Before (L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5452)

```diff
-           (0, rI.j)(BB) && IB && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
+           (0, ke.f)(tt) && et && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
```

#### 589. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5461` → after: `L5830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5830) · [Before (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5461)

```diff
-             this.JN(`webgl_restored_${IB}_${BB.delay}`, `WebGL2 context restored (${IB}, wasm)`)
+             this.iE(`webgl_restored_${et}_${tt.delay}`, `WebGL2 context restored (${et}, wasm)`)
```

#### 590. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5468` → after: `L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5837) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5468)

```diff
-             this.JN(`webgl_rejoin_${IB}_${BB.delay}`, "WebGL2 context not restored: rejoining (wasm)")
+             this.iE(`webgl_rejoin_${et}_${tt.delay}`, "WebGL2 context not restored: rejoining (wasm)")
```

#### 591. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5473` → after: `L5842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5842) · [Before (L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5473)

```diff
-           const BB = (0, mI.l)(this.now() - this.lostAtMs);
+           const tt = (0, Ge.j)(this.now() - this.lostAtMs);
```

#### 592. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5488` → after: `L5857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5857) · [Before (L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5488)

```diff
-       return gG ??= Promise.all([ZB.e(201), ZB.e(144), ZB.e(60)]).then((() => ZB(51044))).then((BB => (NG = BB, Object.assign(globalThis, {
+       return fm ??= Promise.all([Vt.e(201), Vt.e(144), Vt.e(60)]).then((() => Vt(51261))).then((tt => (Em = tt, Object.assign(globalThis, {
```

#### 593. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5496` → after: `L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5865) · [Before (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5496)

```diff
-       return FG ??= ZB.e(58).then((() => ZB(51063))).catch((BB => {
+       return lm ??= Vt.e(58).then((() => Vt(51280))).catch((tt => {
```

#### 594. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5522-L5523` → after: `L5891-L5892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5891-L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5891-L5892) · [Before (L5522-L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5522-L5523)

```diff
-       zG || (zG = !0, sJ.e.setHost(new pk), (0, rZ.p)(), WJ.f.setFollower(Rc), Object.assign(globalThis, {
-         bloxdPreviews: sJ.e
+       Qm || (Qm = !0, Kq.h.setHost(new cj), (0, kV.o)(), bq.c.setFollower(FH), Object.assign(globalThis, {
+         bloxdPreviews: Kq.h
```

#### 595. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5536` → after: `L5905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5905) · [Before (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5536)

```diff
-       hG = !0, dk = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Ck = !dk, console.info(`${eo} starting`), nG || (nG = !0, (0, NB.M)(new eI(Kk, oc)), (0, zB.j)(new uI), (0, NB.I)(new fI), (0, NB.y)()), dk && kB.l.subscribe("appManagerUpda … [truncated]
+       Xm = !0, Jj = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Cj = !Jj, console.info(`${oD} starting`), Hm || (Hm = !0, (0, ft.S)(new re(sj, mH)), (0, lt.m)(new Ue), (0, ft.P)(new Ae), (0, ft.E)()), Jj && jt.j.subscribe("appManagerUpda … [truncated]
```

#### 596. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5544-L5545` → after: `L5913-L5914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5913-L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5913-L5914) · [Before (L5544-L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5544-L5545)

```diff
-           sk = !0, (0, XZ.J)(), null === (ZB = ev) || void 0 === ZB || ZB.abort(), ev = null, dJ.b.release();
-           const JB = dk ? null !== (TB = BB.cancel) && void 0 !== TB ? TB : "general:back" : null;
+           Kj = !0, (0, zV.N)(), null === (Vt = rd) || void 0 === Vt || Vt.abort(), rd = null, Jq.b.release();
+           const qt = Jj ? null !== (Ot = tt.cancel) && void 0 !== Ot ? Ot : "general:back" : null;
```

#### 597. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5550` → after: `L5919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5919) · [Before (L5550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5550)

```diff
-             BB && IB && wk ? ((0, CI.u)("reloadOntoJs"), (0, SB.l)(CI.D)) : BB && IB ? (0, SB.p)() : dk && (0, SB.h)("/")
+             tt && et && hj ? ((0, Ce.E)("reloadOntoJs"), (0, te.f)(Ce.N)) : tt && et ? (0, te.h)() : Jj && (0, te.e)("/")
```

#### 598. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5553` → after: `L5922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5922) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5553)

```diff
-       })), (0, cJ.n)(), (0, HI.h)();
+       })), (0, Xq.l)(), (0, Ie.h)();
```

#### 599. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5556` → after: `L5925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5925) · [Before (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5556)

```diff
-         IB = ro("4ec561fy2fr", (() => {
+         et = FD("rxi78i5buro", (() => {
```

#### 600. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5558` → after: `L5927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5927) · [Before (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5558)

```diff
-           return null !== (BB = null === (IB = pG) || void 0 === IB ? void 0 : IB.ws) && void 0 !== BB ? BB : null
+           return null !== (tt = null === (et = Sm) || void 0 === et ? void 0 : et.ws) && void 0 !== tt ? tt : null
```

#### 601. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5561` → after: `L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5930) · [Before (L5561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5561)

```diff
-         console.error(`${eo} probes`, JB)
+         console.error(`${oD} probes`, qt)
```

#### 602. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5564-L5565` → after: `L5933-L5934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5933-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5933-L5934) · [Before (L5564-L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5564-L5565)

```diff
-         const BB = (0, tT.n)(),
-           IB = (0, tT.i)();
+         const tt = (0, BO.o)(),
+           et = (0, BO.j)();
```

#### 603. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5578` → after: `L5947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5947) · [Before (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5578)

```diff
-             lobby: null !== (IB = ZB.get("lobby")) && void 0 !== IB ? IB : null
+             lobby: null !== (et = Vt.get("lobby")) && void 0 !== et ? et : null
```

#### 604. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5581` → after: `L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5950) · [Before (L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5581)

```diff
-         if (BB) return (0, hI.i)(BB.game) && mc().request(), void Rk(BB.game, BB.lobby);
+         if (tt) return (0, le.k)(tt.game) && GH().request(), void Fj(tt.game, tt.lobby);
```

#### 605. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5589` → after: `L5958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5958) · [Before (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5589)

```diff
-               console.error(`${eo} ?ws=${IB} did not attach`, JB)
+               console.error(`${oD} ?ws=${et} did not attach`, qt)
```

#### 606. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5596` → after: `L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5965) · [Before (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5596)

```diff
-         const nB = (0, aJ.$)(),
+         const Xt = (0, Rq.V)(),
```

#### 607. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5598` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5967) · [Before (L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5598)

```diff
-             const ZB = (0, nZ.o)(BB) ? ic(BB, IB) : null;
+             const Vt = (0, QV.l)(tt) ? SH(tt, et) : null;
```

#### 608. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5600` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5969) · [Before (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5600)

```diff
-             console.warn(`${eo} ${ZB.detail}: picking again in ${Yc} ms`), await new Promise((BB => {
+             console.warn(`${oD} ${Vt.detail}: picking again in ${WH} ms`), await new Promise((tt => {
```

#### 609. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5603-L5604` → after: `L5972-L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5972-L5973) · [Before (L5603-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5603-L5604)

```diff
-             const TB = await (0, aJ.ab)();
-             if (!(0, nZ.o)(TB)) {
+             const Ot = await (0, Rq.Y)();
+             if (!(0, QV.l)(Ot)) {
```

#### 610. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5608-L5609` → after: `L5977-L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5977-L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5977-L5978) · [Before (L5608-L5609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5608-L5609)

```diff
-                 backend: null !== (JB = null === TB || void 0 === TB ? void 0 : TB.backend) && void 0 !== JB ? JB : "none"
-               }), null !== TB && (0, aJ.X)(TB.backend)
+                 backend: null !== (qt = null === Ot || void 0 === Ot ? void 0 : Ot.backend) && void 0 !== qt ? qt : "none"
+               }), null !== Ot && (0, Rq.S)(Ot.backend)
```

#### 611. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5612-L5613` → after: `L5981-L5982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5981-L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5981-L5982) · [Before (L5612-L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5612-L5613)

```diff
-           }(await (0, aJ.T)(), nB);
-         if ((0, MZ.setCrashBackend)((0, nZ.o)(hB) ? "unsupported" : null !== (IB = null === hB || void 0 === hB ? void 0 : hB.backend) && void 0 !== IB ? IB : "none"), (0, nZ.o)(hB)) return function(BB) {
+           }(await (0, Rq.Q)(), Xt);
+         if ((0, PV.setCrashBackend)((0, QV.l)(Qt) ? "unsupported" : null !== (et = null === Qt || void 0 === Qt ? void 0 : Qt.backend) && void 0 !== et ? et : "none"), (0, QV.l)(Qt)) return function(tt) {
```

#### 612. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5620` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5989) · [Before (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5620)

```diff
-           if (JB && (0, CI.k)()) return (0, MZ.reportNoBackendRetry)("reload", IB, ZB, TB), void pc(`${ZB}, again after ${Yc} ms`);
+           if (qt && (0, Ce.r)()) return (0, PV.reportNoBackendRetry)("reload", et, Vt, Ot), void cH(`${Vt}, again after ${WH} ms`);
```

#### 613. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5623` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5992) · [Before (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5623)

```diff
-             afterReload: String(CI.t)
+             afterReload: String(Ce.A)
```

#### 614. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5626` → after: `L5995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5995) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5626)

```diff
-         if ((0, EJ.t)("render")) try {
+         if ((0, Tq.v)("render")) try {
```

#### 615. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5629` → after: `L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L5998) · [Before (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5629)

```diff
-           } = await Promise.all([ZB.e(78), ZB.e(49)]).then((() => ZB(4862)));
+           } = await Promise.all([Vt.e(78), Vt.e(49)]).then((() => Vt(4833)));
```

#### 616. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5634` → after: `L6003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6003) · [Before (L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5634)

```diff
-         if ((0, EJ.t)("renderlite")) try {
+         if ((0, Tq.v)("renderlite")) try {
```

#### 617. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5637` → after: `L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6006) · [Before (L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5637)

```diff
-           } = await Promise.all([ZB.e(273), ZB.e(50)]).then((() => ZB(51069)));
+           } = await Promise.all([Vt.e(273), Vt.e(50)]).then((() => Vt(51287)));
```

#### 618. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5642` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6011) · [Before (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5642)

```diff
-         if ((0, EJ.t)("renderprobe")) try {
+         if ((0, Tq.v)("renderprobe")) try {
```

#### 619. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5645` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6014) · [Before (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5645)

```diff
-           } = await ZB.e(51).then((() => ZB(51071)));
+           } = await Vt.e(51).then((() => Vt(51293)));
```

#### 620. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5650` → after: `L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6019) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5650)

```diff
-         if ("webgl" === (null === hB || void 0 === hB ? void 0 : hB.backend) && dk && "wasm" !== (0, CI.d)(window.location.search)) {
+         if ("webgl" === (null === Qt || void 0 === Qt ? void 0 : Qt.backend) && Jj && "wasm" !== (0, Ce.i)(window.location.search)) {
```

#### 621. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5652` → after: `L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6021) · [Before (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5652)

```diff
-           null !== BB && (0, QI.g)(BB)
+           null !== tt && (0, ue.i)(tt)
```

#### 622. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5654-L5659` → after: `L6023-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6023-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6023-L6028) · [Before (L5654-L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5654-L5659)

```diff
-         const zB = null !== (TB = null === hB || void 0 === hB ? void 0 : hB.backend) && void 0 !== TB ? TB : null;
-         xv.adapter = null !== (oB = null === hB || void 0 === hB ? void 0 : hB.adapter) && void 0 !== oB ? oB : null, xv.boundAtMs = null, xv.indirectHangs = null, xv.restoresSkipped = null;
-         const FB = !(0, nZ.db)();
-         null === hB || (0, nZ.D)(hB.reason) || console.info(`${eo} drawing with ${hB.backend}: ${hB.reason}`);
-         const NB = (0, aJ.E)();
-         OG(!0), (0, MB.t)((BB => {
+         const lt = null !== (Ot = null === Qt || void 0 === Qt ? void 0 : Qt.backend) && void 0 !== Ot ? Ot : null;
+         Td.adapter = null !== (Dt = null === Qt || void 0 === Qt ? void 0 : Qt.adapter) && void 0 !== Dt ? Dt : null, Td.boundAtMs = null, Td.indirectHangs = null, Td.restoresSkipped = null;
+         const Et = !(0, QV.bb)();
+         null === Qt || (0, QV.B)(Qt.reason) || console.info(`${oD} drawing with ${Qt.backend}: ${Qt.reason}`);
+         const ft = (0, Rq.F)();
+         Km(!0), (0, Pt.r)((tt => {
```

#### 623. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5663` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6032) · [Before (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5663)

```diff
-               Dv = BB.rasterText, Ov = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (IB = null === (ZB = wv) || void 0 === ZB ? void 0 : ZB.info.playerDbId) && void 0 !== IB ? IB : null), Kv = BB.drainTextRerasters, Vv = BB.loadTextIcons, BB.warmText((() => ck)), BB.text … [truncated]
+               sd = tt.rasterText, vd = tt.setTextLocalPlayer, tt.setTextLocalPlayer(null !== (et = null === (Vt = hd) || void 0 === Vt ? void 0 : Vt.info.playerDbId) && void 0 !== et ? et : null), nd = tt.drainTextRerasters, tj = tt.loadTextIcons, tt.warmText((() => Xj)), tt.text … [truncated]
```

#### 624. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5674` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6043) · [Before (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5674)

```diff
-           console.warn(`${eo} the game code did not load: a join asks again`, BB)
+           console.warn(`${oD} the game code did not load: a join asks again`, tt)
```

#### 625. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5676` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6045) · [Before (L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5676)

```diff
-         const gB = (0, aJ.j)(hB);
+         const wt = (0, Rq.l)(Qt);
```

#### 626. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5678` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6047) · [Before (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5678)

```diff
-         gB.catch((() => {})), "loading" === (0, gI.u)() && CB();
+         wt.catch((() => {})), "loading" === (0, ye.D)() && Ct();
```

#### 627. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5681-L5685` → after: `L6050-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6050-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6050-L6054) · [Before (L5681-L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5681-L5685)

```diff
-             const IB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
-             IB.id = "wasm-game-canvas", Wk.watch(IB, (() => null !== Uv && Gn())), (0, mJ.i)();
-             const ZB = (0, LI.c)(),
-               TB = (0, LI.f)(ZB);
-             IB.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, rJ.f)(IB, TB), (0, LI.b)(IB, ZB), IB.width = TB.bufferWidth, IB.height = TB.bufferHeight;
+             const et = null !== tt && void 0 !== tt ? tt : document.createElement("canvas");
+             et.id = "wasm-game-canvas", bj.watch(et, (() => null !== Md && mX())), (0, Gq.k)();
+             const Vt = (0, oe.g)(),
+               Ot = (0, oe.j)(Vt);
+             et.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, kq.c)(et, Ot), (0, oe.c)(et, Vt), et.width = Ot.bufferWidth, et.height = Ot.bufferHeight;
```

#### 628. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5694` → after: `L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6063) · [Before (L5694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5694)

```diff
-             (0, MZ.showUnsupported)((0, jT.n)("fetch"), To.h.fetch, `the previews did not load: ${String(JB)}`)
+             (0, PV.showUnsupported)((0, ZO.q)("fetch"), qD.h.fetch, `the previews did not load: ${String(qt)}`)
```

#### 629. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5705` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6074) · [Before (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5705)

```diff
-             (0, MZ.showUnsupported)((0, jT.n)("fetch"), To.h.fetch, `the ${null!==zB&&void 0!==zB?zB:"client"} build did not load: ${String(JB)}`)
+             (0, PV.showUnsupported)((0, ZO.q)("fetch"), qD.h.fetch, `the ${null!==lt&&void 0!==lt?lt:"client"} build did not load: ${String(qt)}`)
```

#### 630. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5708-L5711` → after: `L6077-L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6077-L6080) · [Before (L5708-L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5708-L5711)

```diff
-         const WB = (0, aJ.f)(),
-           dB = !WB && !0 !== fZ.n.getItem(uo),
-           QB = !WB && "loading" === (0, gI.u)();
-         await (0, HJ.b)(yB, {
+         const bt = (0, Rq.g)(),
+           Jt = !bt && !0 !== AV.h.getItem(rD),
+           ut = !bt && "loading" === (0, ye.D)();
+         await (0, Iq.e)(Nt, {
```

#### 631. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5713` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6082) · [Before (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5713)

```diff
-         }), QB && !(0, gI.M)() && await (0, HJ.b)(yB, {
+         }), ut && !(0, ye.W)() && await (0, Iq.e)(Nt, {
```

#### 632. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5718-L5720` → after: `L6087-L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6087-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6087-L6089) · [Before (L5718-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5718-L5720)

```diff
-         if (!(0, gI.M)()) {
-           (0, gI.K)() && fZ.n.setItem(uo, !0);
-           const BB = (0, gI.m)();
+         if (!(0, ye.W)()) {
+           (0, ye.T)() && AV.h.setItem(rD, !0);
+           const tt = (0, ye.s)();
```

#### 633. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5722-L5723` → after: `L6091-L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6091-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6091-L6092) · [Before (L5722-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5722-L5723)

```diff
-             site: zZ.s,
-             error: (0, gI.j)(),
+             site: EV.w,
+             error: (0, ye.q)(),
```

#### 634. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5727` → after: `L6096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6096) · [Before (L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5727)

```diff
-             const IB = null !== BB && void 0 !== BB ? BB : "instantiate",
+             const et = null !== tt && void 0 !== tt ? tt : "instantiate",
```

#### 635. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5729` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6098) · [Before (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5729)

```diff
-                 (0, MZ.showUnsupported)((0, jT.n)(IB), To.h[IB], (0, gI.g)())
+                 (0, PV.showUnsupported)((0, ZO.q)(et), qD.h[et], (0, ye.k)())
```

#### 636. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5733` → after: `L6102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6102) · [Before (L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5733)

```diff
-                 const BB = [yB.url().href, WI.h.url().href];
+                 const tt = [Nt.url().href, be.d.url().href];
```

#### 637. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5736` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6105) · [Before (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5736)

```diff
-                   error: (0, gI.g)(),
+                   error: (0, ye.k)(),
```

#### 638. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5741-L5744` → after: `L6110-L6113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6110-L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6110-L6113) · [Before (L5741-L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5741-L5744)

```diff
-               const IB = (0, gI.g)(),
-                 ZB = (0, SI.c)((0, gI.j)());
-               if (ZB && (0, CI.k)()) return (0, MZ.reportCountedLoadFallback)((0, jT.n)(BB), To.h[BB], IB, "wasmReload"), pc(`the wasm client ran out of memory to ${BB} here (${IB})`), null;
-               (0, MZ.reportCountedLoadFallback)((0, jT.n)(BB), To.h[BB], IB, ZB ? "declined" : "pageAlone"), Hc(`the wasm client did not ${BB} here (${IB})`, ZB ? "oom" : null)
+               const et = (0, ye.k)(),
+                 Vt = (0, tV.e)((0, ye.q)());
+               if (Vt && (0, Ce.r)()) return (0, PV.reportCountedLoadFallback)((0, ZO.q)(tt), qD.h[tt], et, "wasmReload"), cH(`the wasm client ran out of memory to ${tt} here (${et})`), null;
+               (0, PV.reportCountedLoadFallback)((0, ZO.q)(tt), qD.h[tt], et, Vt ? "declined" : "pageAlone"), IH(`the wasm client did not ${tt} here (${et})`, Vt ? "oom" : null)
```

#### 639. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5748-L5749` → after: `L6117-L6118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6117-L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6117-L6118) · [Before (L5748-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5748-L5749)

```diff
-         }(0, qI.S)(yB.url()) && (0, MZ.reportUnstreamedCoreLoad)();
-         const wB = (0, gI.x)();
+         }(0, Ne.M)(Nt.url()) && (0, PV.reportUnstreamedCoreLoad)();
+         const ht = (0, ye.F)();
```

#### 640. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5754` → after: `L6123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6123) · [Before (L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5754)

```diff
-             wasm: wB.Yh()
+             wasm: ht.bQ()
```

#### 641. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5757-L5761` → after: `L6126-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6126-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6126-L6130) · [Before (L5757-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5757-L5761)

```diff
-             Hq: BB
-           } = yB.bindings, IB = BB.sTB();
-           if (IB !== DI.B) return zn({
-             site: zZ.b,
-             error: `core ABI ${IB}, page ABI ${DI.B}`,
+             Py: tt
+           } = Nt.bindings, et = tt.ROt();
+           if (et !== ge.z) return lX({
+             site: EV.c,
+             error: `core ABI ${et}, page ABI ${ge.z}`,
```

#### 642. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5764` → after: `L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6133) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5764)

```diff
-           const [ZB, TB] = (0, DI.ue)();
+           const [Vt, Ot] = (0, ge.De)();
```

#### 643. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5768` → after: `L6137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6137) · [Before (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5768)

```diff
-             site: zZ.b,
+             site: EV.c,
```

#### 644. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5774` → after: `L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6143) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5774)

```diff
-         const iB = new zZ.h(OB, gI.r, {
+         const St = new EV.f(vt, ye.z, {
```

#### 645. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5781-L5782` → after: `L6150-L6151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6150-L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6150-L6151) · [Before (L5781-L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5781-L5782)

```diff
-                   if (BB.site === zZ.d && (0, nZ.p)(BB.error)) return "frames_refused";
-                   return BB.site === fo && (0, nZ.t)(BB.error) ? "start_failed" : null
+                   if (tt.site === EV.e && (0, QV.o)(tt.error)) return "frames_refused";
+                   return tt.site === UD && (0, QV.r)(tt.error) ? "start_failed" : null
```

#### 646. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5786` → after: `L6155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6155) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5786)

```diff
-                 return PI.H.reloaded(null, !1), (0, MZ.reportRenderReload)("webgpu", "start_failed" === JB ? 0 : 1, ZB, {
+                 return Le.D.reloaded(null, !1), (0, PV.reportRenderReload)("webgpu", "start_failed" === qt ? 0 : 1, Vt, {
```

#### 647. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5803-L5804` → after: `L6172-L6173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6172-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6172-L6173) · [Before (L5803-L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5803-L5804)

```diff
-               return IB === DI.K.RenderDeviceLost
-             })) && ((0, aJ.x)(), Uk.deviceLost(), "webgpu" === zB && ((0, hZ.e)(Ev), PI.H.lost())), null === (ZB = Gk) || void 0 === ZB || ZB.coreErrors(BB);
+               return et === ge.M.RenderDeviceLost
+             })) && ((0, Rq.A)(), Mj.deviceLost(), "webgpu" === lt && ((0, lV.d)(gd), Le.D.lost())), null === (Vt = dj) || void 0 === Vt || Vt.coreErrors(tt);
```

#### 648. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5808` → after: `L6177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6177) · [Before (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5808)

```diff
-                 return BB === DI.K.EnvUnknownSky ? (0, MZ.unknownSkyWords)(sI.c.get("skyBox")) : BB === DI.K.RenderDeviceLost ? (0, MZ.deviceLossWords)(IB, xv.boundAtMs) : null === (ZB = Ev) || void 0 === ZB ? void 0 : ZB.wTB(BB, IB)
+                 return tt === ge.M.EnvUnknownSky ? (0, PV.unknownSkyWords)(Ke.b.get("skyBox")) : tt === ge.M.RenderDeviceLost ? (0, PV.deviceLossWords)(et, Td.boundAtMs) : null === (Vt = gd) || void 0 === Vt ? void 0 : Vt.IOt(tt, et)
```

#### 649. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5815` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6184) · [Before (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5815)

```diff
-               return IB === DI.K.EnvUnknownSky
+               return et === ge.M.EnvUnknownSky
```

#### 650. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5822-L5826` → after: `L6191-L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6191-L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6191-L6195) · [Before (L5822-L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5822-L5826)

```diff
-               const vB = IB === DI.ed.WEBGPU,
-                 kB = TB === DI.ed.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 cB = TB === DI.ed.RESTORE_LOST,
-                 nB = vB && (0, PI.q)(xv.adapter, ZB, "lost" === kB, cB),
-                 hB = (0, hZ.i)(Ev);
+               const dt = et === ge.hd.WEBGPU,
+                 jt = Ot === ge.hd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 Ht = Ot === ge.hd.RESTORE_LOST,
+                 Xt = dt && (0, Le.l)(Td.adapter, Vt, "lost" === jt, Ht),
+                 Qt = (0, lV.l)(gd);
```

#### 651. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5831-L5832` → after: `L6200-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6200-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6200-L6201) · [Before (L5831-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5831-L5832)

```diff
-                 const IB = void 0 === hB ? "" : ` (${hB.message})`;
-                 return void BB.crash(MZ.RENDER_RELOAD_SITE, new Error(`${(0,MZ.renderReloadMessage)("webgpu",kB,ZB)} and ${zB}${IB}`))
+                 const et = void 0 === Qt ? "" : ` (${Qt.message})`;
+                 return void tt.crash(PV.RENDER_RELOAD_SITE, new Error(`${(0,PV.renderReloadMessage)("webgpu",jt,Vt)} and ${lt}${et}`))
```

#### 652. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5835-L5836` → after: `L6204-L6205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6204-L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6204-L6205) · [Before (L5835-L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5835-L5836)

```diff
-               "lost" === kB && (0, aJ.x)();
-               vB || ((0, CI.q)(), Wk.gaveUp());
+               "lost" === jt && (0, Rq.A)();
+               dt || ((0, Ce.w)(), bj.gaveUp());
```

#### 653. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5850` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6219) · [Before (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5850)

```diff
-             BB.kind === DI.X.SkyImages ? null === (IB = AG) || void 0 === IB || IB.onEvent(BB.payload) : BB.kind === DI.X.EnvLighting && (tG = 1 === BB.payload[0])
+             tt.kind === ge.db.SkyImages ? null === (et = im) || void 0 === et || et.onEvent(tt.payload) : tt.kind === ge.db.EnvLighting && (Ym = 1 === tt.payload[0])
```

#### 654. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5872` → after: `L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6241) · [Before (L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5872)

```diff
-                   !1 !== IB || BB.isStopped ? !0 === IB && console.info(`${eo} terrain textures handed over again after the renderer lost them`) : console.warn(`${eo} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== et || tt.isStopped ? !0 === et && console.info(`${oD} terrain textures handed over again after the renderer lost them`) : console.warn(`${oD} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 655. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5884` → after: `L6253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6253) · [Before (L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5884)

```diff
-               if (BB.forEachNetOut(cn), Jn(BB), (0, zZ.O)(BB, {
+               if (tt.forEachNetOut(HX), DX(tt), (0, EV.L)(tt, {
```

#### 656. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5895-L5896` → after: `L6264-L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6264-L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6264-L6265) · [Before (L5895-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5895-L5896)

```diff
-         if (qG = iB, null === (GB = XI.c.wasmNetReady) || void 0 === GB || GB.call(XI.c, (() => iB.isStopped ? 0 : iB.netKeptFrames)), null !== BB) {
-           iB.setAntiCheatProbes(Mo(gI.r, BB.checks)), BB.watchHeld(Po.CoreFrame, (() => iB.frame)), BB.watchHeld(Po.GlueFrame, (() => OB.frame));
+         if (wm = St, null === (mt = ze.d.wasmNetReady) || void 0 === mt || mt.call(ze.d, (() => St.isStopped ? 0 : St.netKeptFrames)), null !== tt) {
+           St.setAntiCheatProbes(ID(ye.z, tt.checks)), tt.watchHeld(ZD.CoreFrame, (() => St.frame)), tt.watchHeld(ZD.GlueFrame, (() => vt.frame));
```

#### 657. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5900-L5902` → after: `L6269-L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6269-L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6269-L6271) · [Before (L5900-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5900-L5902)

```diff
-             ZB.Iz(BB.Iz());
-             const JB = (0, ET.ab)((() => {
-               ZB.Iz(BB.Iz())
+             Vt.BQ(tt.BQ());
+             const qt = (0, TO.jb)((() => {
+               Vt.BQ(tt.BQ())
```

#### 658. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5904` → after: `L6273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6273) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5904)

```diff
-             let oB = 6 * (0, ET.S)() | 0;
+             let Dt = 6 * (0, TO.X)() | 0;
```

#### 659. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5908` → after: `L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6277) · [Before (L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5908)

```diff
-             (0, no.h)(GB);
+             (0, QD.l)(mt);
```

#### 660. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5920` → after: `L6289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6289) · [Before (L5920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5920)

```diff
-                 ZB.value(DI.h.ProbeUsedProp, BB.usedProp()), 0 !== TB && ZB.setFlags(TB)
+                 Vt.value(ge.g.ProbeUsedProp, tt.usedProp()), 0 !== Ot && Vt.setFlags(Ot)
```

#### 661. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5923` → after: `L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6292) · [Before (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5923)

```diff
-                 (0, ET.bb)(JB), (0, no.f)(GB), (0, co.g)(vB)
+                 (0, TO.kb)(qt), (0, QD.h)(mt), (0, XD.i)(dt)
```

#### 662. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5929` → after: `L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6298) · [Before (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5929)

```diff
-               TB = iB.rings.input.writeRecord(DI.vb.AntiCheat, BB, IB, ZB, 0)
+               Ot = St.rings.input.writeRecord(ge.Fb.AntiCheat, tt, et, Vt, 0)
```

#### 663. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5934` → after: `L6303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6303) · [Before (L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5934)

```diff
-         kG = (BB, IB, ZB) => iB.rings.cmd.writeCmd(BB, IB, ZB), cG = BB => iB.rings.cmd.growForCmd(BB), hv = !1, jc(), (0, MB.v)(iB, {
+         dm = (tt, et, Vt) => St.rings.cmd.writeCmd(tt, et, Vt), jm = tt => St.rings.cmd.growForCmd(tt), Qd = !1, ZH(), (0, Pt.u)(St, {
```

#### 664. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5936` → after: `L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6305) · [Before (L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5936)

```diff
-           memory: gI.r,
+           memory: ye.z,
```

#### 665. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5945` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6314) · [Before (L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5945)

```diff
-           options: sI.c,
+           options: Ke.b,
```

#### 666. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5958` → after: `L6327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6327) · [Before (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5958)

```diff
-             return null !== (null !== (IB = null === (ZB = Pc()) || void 0 === ZB ? void 0 : ZB.modelUrl(BB)) && void 0 !== IB ? IB : null)
+             return null !== (null !== (et = null === (Vt = LH()) || void 0 === Vt ? void 0 : Vt.modelUrl(tt)) && void 0 !== et ? et : null)
```

#### 667. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5962` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6331) · [Before (L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5962)

```diff
-         }), (0, HB.E)({
+         }), (0, It.A)({
```

#### 668. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5979` → after: `L6348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6348) · [Before (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5979)

```diff
-         }), eG = (0, HB.u)((() => {
+         }), om = (0, It.p)((() => {
```

#### 669. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5981-L5982` → after: `L6350-L6351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6350-L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6350-L6351) · [Before (L5981-L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5981-L5982)

```diff
-           const IB = (0, MB.j)();
-           null === (BB = (0, MB.q)()) || void 0 === BB || BB.followCursorAim(!0 === (null === IB || void 0 === IB ? void 0 : IB.isSessionLive) ? IB : null)
+           const et = (0, Pt.g)();
+           null === (tt = (0, Pt.q)()) || void 0 === tt || tt.followCursorAim(!0 === (null === et || void 0 === et ? void 0 : et.isSessionLive) ? et : null)
```

#### 670. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5988` → after: `L6357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6357) · [Before (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5988)

```diff
-         const aB = (0, iZ.l)(),
+         const Rt = (0, SV.i)(),
```

#### 671. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5990-L5991` → after: `L6359-L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6359-L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6359-L6360) · [Before (L5990-L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5990-L5991)

```diff
-         mG = aB.basis, (0, uZ.o)(null === jB ? null : (0, YZ.r)(jB)), rG = jB;
-         const PB = (0, yI.c)();
+         km = Rt.basis, (0, UV.n)(null === Zt ? null : (0, WV.l)(Zt)), Fm = Zt;
+         const Lt = (0, ae.d)();
```

#### 672. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5995-L5996` → after: `L6364-L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6364-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6364-L6365) · [Before (L5995-L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5995-L5996)

```diff
-         const XB = new kJ.d(PB, (() => OB.tq()), (BB => {
-           iB.crash(zZ.m, BB)
+         const zt = new Hq.d(Lt, (() => vt.Ty()), (tt => {
+           St.crash(EV.l, tt)
```

#### 673. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5998` → after: `L6367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6367) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L5998)

```diff
-         PG = XB, RG = XB, null !== jB && XB.setCeiling(Math.min((0, kJ.n)(jB), RB, (0, iZ.o)()));
+         Zm = zt, Lm = zt, null !== Zt && zt.setCeiling(Math.min((0, Hq.q)(Zt), Ft, (0, SV.l)()));
```

#### 674. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6002` → after: `L6371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6371) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6002)

```diff
-             return null !== IB && (null === rG || IB < rG) && (rG = IB, (0, uZ.o)((0, YZ.r)(IB))), IB
+             return null !== et && (null === Fm || et < Fm) && (Fm = et, (0, UV.n)((0, WV.l)(et))), et
```

#### 675. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6004` → after: `L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6373) · [Before (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6004)

```diff
-             1 === IB ? (0, MZ.reportMemoryShed)(BB, ZB, CG) : console.warn(`${eo} wasm memory: shed again (${BB}): shed ${IB}`, ZB.wasmMemoryShed)
+             1 === et ? (0, PV.reportMemoryShed)(tt, Vt, bm) : console.warn(`${oD} wasm memory: shed again (${tt}): shed ${et}`, Vt.wasmMemoryShed)
```

#### 676. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6006` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6375) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6006)

```diff
-           const BB = (0, nZ.Q)(wB);
+           const tt = (0, QV.P)(ht);
```

#### 677. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6008` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6377) · [Before (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6008)

```diff
-             storedChunks: () => OB.OTB(),
+             storedChunks: () => vt.POt(),
```

#### 678. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6011` → after: `L6380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6380) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6011)

```diff
-               return null !== (IB = null === BB || void 0 === BB ? void 0 : BB.YTB()) && void 0 !== IB ? IB : 0
+               return null !== (et = null === tt || void 0 === tt ? void 0 : tt.ZOt()) && void 0 !== et ? et : 0
```

#### 679. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6019-L6020` → after: `L6388-L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6388-L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6388-L6389) · [Before (L6019-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6019-L6020)

```diff
-         const [LB, eB] = (0, RZ.h)();
-         kk = (0, mZ.f)((BB => iB.setChunkAddDistance(BB.horizontal, BB.vertical)), {
+         const [ot, rt] = (0, FV.d)();
+         Hj = (0, GV.i)((tt => St.setChunkAddDistance(tt.horizontal, tt.vertical)), {
```

#### 680. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6023-L6026` → after: `L6392-L6395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6392-L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6392-L6395) · [Before (L6023-L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6023-L6026)

```diff
-         }), iB.setAmbientOcclusion(!0 !== fZ.m.getItem("disableAmbientOcclusion")), iB.setPoseLod(!0 !== fZ.m.getItem(FI.W)), iB.setDebugLog(DI.O.Look, !0), iB.setDebugLog(DI.O.CameraSet, !0), (0, KJ.startLookDebug)("wasm", {
-           look: () => iB.takeDebugLog(DI.O.Look),
-           cameraSets: () => iB.takeDebugLog(DI.O.CameraSet)
-         }), (0, EJ.t)("remesh") && (iB.setDebugLog(DI.O.Remesh, !0), uB = () => iB.takeDebugLog(DI.O.Remesh), Zo = new Io((0, VJ.m)(), uB));
+         }), St.setAmbientOcclusion(!0 !== AV.e.getItem("disableAmbientOcclusion")), St.setPoseLod(!0 !== AV.e.getItem(fe.H)), St.setDebugLog(ge.R.Look, !0), St.setDebugLog(ge.R.CameraSet, !0), (0, sq.startLookDebug)("wasm", {
+           look: () => St.takeDebugLog(ge.R.Look),
+           cameraSets: () => St.takeDebugLog(ge.R.CameraSet)
+         }), (0, Tq.v)("remesh") && (St.setDebugLog(ge.R.Remesh, !0), Ut = () => St.takeDebugLog(ge.R.Remesh), OD = new VD((0, nq.n)(), Ut));
```

#### 681. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6030-L6032` → after: `L6399-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6399-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6399-L6401) · [Before (L6030-L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6030-L6032)

```diff
-             oB = BB => fZ.m.getItem(BB);
-           JB.sync(oB, IB), (0, RI.U)();
-           const GB = (0, kB.p)("customBindingsChanged", (() => {
+             Dt = tt => AV.e.getItem(tt);
+           qt.sync(Dt, et), (0, Fe.ab)();
+           const mt = (0, jt.n)("customBindingsChanged", (() => {
```

#### 682. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6035` → after: `L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6404) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6035)

```diff
-           (0, bZ.t)(IB);
+           (0, pV.p)(et);
```

#### 683. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6037` → after: `L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6406) · [Before (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6037)

```diff
-             cB = (0, HB.u)((() => {
+             Ht = (0, It.p)((() => {
```

#### 684. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6039` → after: `L6408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6408) · [Before (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6039)

```diff
-               vB.size > 0 && OT() && !0 === (null === (BB = (0, MB.j)()) || void 0 === BB ? void 0 : BB.localPlayerAlive()) && kB.l.Gq("usedKeyboard")
+               dt.size > 0 && vO() && !0 === (null === (tt = (0, Pt.g)()) || void 0 === tt ? void 0 : tt.localPlayerAlive()) && jt.j.sw("usedKeyboard")
```

#### 685. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6041` → after: `L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6410) · [Before (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6041)

```diff
-             nB = zT.c.heldSizer((() => (0, LI.j)(BB))),
+             Xt = EO.e.heldSizer((() => (0, oe.p)(tt))),
```

#### 686. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6045` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6414) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6045)

```diff
-                 JB.moves(BB) && (vB.add(BB), OT() && kB.l.Gq("usedKeyboard"))
+                 qt.moves(tt) && (dt.add(tt), vO() && jt.j.sw("usedKeyboard"))
```

#### 687. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6054` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6423) · [Before (L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6054)

```diff
-                 sT.j.measure(BB.getBoundingClientRect()), (0, FT.n)()
+                 KO.h.measure(tt.getBoundingClientRect()), (0, fO.j)()
```

#### 688. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6058-L6059` → after: `L6427-L6428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6427-L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6427-L6428) · [Before (L6058-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6058-L6059)

```diff
-                 const ZB = (0, LI.m)(BB, IB),
-                   TB = zT.c.onRelease(IB);
+                 const Vt = (0, oe.s)(tt, et),
+                   Ot = EO.e.onRelease(et);
```

#### 689. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6065` → after: `L6434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6434) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6065)

```diff
-                 sT.j.measure(BB.getBoundingClientRect())
+                 KO.h.measure(tt.getBoundingClientRect())
```

#### 690. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6068` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6437) · [Before (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6068)

```diff
-               touchUiShown: () => BI.d.get("isTouchScreen"),
+               touchUiShown: () => ee.b.get("isTouchScreen"),
```

#### 691. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6075` → after: `L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6444) · [Before (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6075)

```diff
-             zB = (0, UZ.b)(IB);
+             lt = (0, MV.e)(et);
```

#### 692. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6077` → after: `L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6446) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6077)

```diff
-             GB(), cB(), (0, bZ.t)(null), zB(), hB()
+             mt(), Ht(), (0, pV.p)(null), lt(), Qt()
```

#### 693. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6082` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6451) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6082)

```diff
-           })), !kv && (0, HT.f)(BB, JB) && (0, HT.b)((() => {
+           })), !jd && (0, IO.c)(tt, qt) && (0, IO.b)((() => {
```

#### 694. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6093-L6094` → after: `L6462-L6463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6462-L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6462-L6463) · [Before (L6093-L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6093-L6094)

```diff
-         (0, gI.S)((() => {
-           "call" === (0, gI.m)() && iB.crash(zZ.s, (0, gI.j)())
+         (0, ye.$)((() => {
+           "call" === (0, ye.s)() && St.crash(EV.w, (0, ye.q)())
```

#### 695. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6096` → after: `L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6465) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6096)

```diff
-         const AB = (0, zZ.R)(iB.rings.worker, (() => {
+         const Yt = (0, EV.O)(St.rings.worker, (() => {
```

#### 696. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6106` → after: `L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6475) · [Before (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6106)

```diff
-             module: (0, gI.t)(),
+             module: (0, ye.A)(),
```

#### 697. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6125` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6494) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6125)

```diff
-               (0, MZ.reportWorkerLost)(zZ.H, BB, CG)
+               (0, PV.reportWorkerLost)(EV.E, tt, bm)
```

#### 698. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6128` → after: `L6497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6497) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6128)

```diff
-               (0, MZ.reportWorkerStartTimeout)(zZ.H, BB, CG)
+               (0, PV.reportWorkerStartTimeout)(EV.E, tt, bm)
```

#### 699. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6143` → after: `L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6512) · [Before (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6143)

```diff
-                 BB.rings.worker.writeWorkerRecord(ZB, TB, JB, 0, oB, GB) || BB.crash(zZ.H, `a world-gen record of kind ${TB} did not fit the worker-in ring`)
+                 tt.rings.worker.writeWorkerRecord(Vt, Ot, qt, 0, Dt, mt) || tt.crash(EV.E, `a world-gen record of kind ${Ot} did not fit the worker-in ring`)
```

#### 700. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6149` → after: `L6518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6518) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6149)

```diff
-             module: (0, gI.t)(),
+             module: (0, ye.A)(),
```

#### 701. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6153` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6522) · [Before (L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6153)

```diff
-               }, IB] = await Promise.all([ZB.e(41).then((() => ZB(51112))), Promise.resolve().then((() => ZB(105))).then((BB => {
+               }, et] = await Promise.all([Vt.e(41).then((() => Vt(51328))), Promise.resolve().then((() => Vt(106))).then((tt => {
```

#### 702. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6161` → after: `L6530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6530) · [Before (L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6161)

```diff
-                 count: (0, aI.d)(navigator.hardwareConcurrency, IB),
+                 count: (0, Re.b)(navigator.hardwareConcurrency, et),
```

#### 703. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6166-L6167` → after: `L6535-L6536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6535-L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6535-L6536) · [Before (L6166-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6166-L6167)

```diff
-               (0, FT.m)(), dn(BB, (() => {
-                 BB.rings.worker.writeWorkerRecord(ZB, TB, JB, oB, GB, vB) || BB.crash(zZ.o, `a meshing record of kind ${TB} did not fit the worker-in ring`)
+               (0, fO.h)(), bX(tt, (() => {
+                 tt.rings.worker.writeWorkerRecord(Vt, Ot, qt, Dt, mt, dt) || tt.crash(EV.p, `a meshing record of kind ${Ot} did not fit the worker-in ring`)
```

#### 704. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6171` → after: `L6540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6540) · [Before (L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6171)

```diff
-               (0, MZ.reportWorkerLost)(zZ.o, BB, CG)
+               (0, PV.reportWorkerLost)(EV.p, tt, bm)
```

#### 705. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6177` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6546) · [Before (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6177)

```diff
-               (0, MZ.reportWorkerStartTimeout)(zZ.o, BB, CG)
+               (0, PV.reportWorkerStartTimeout)(EV.p, tt, bm)
```

#### 706. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6189` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6558) · [Before (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6189)

```diff
-                 BB.crash(zZ.o, void 0 === ZB ? IB : new Error(IB, {
+                 tt.crash(EV.p, void 0 === Vt ? et : new Error(et, {
```

#### 707. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6194` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6563) · [Before (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6194)

```diff
-                 site: zZ.o,
+                 site: EV.p,
```

#### 708. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6200` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6569) · [Before (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6200)

```diff
-         const tB = (0, CJ.q)(iI.clientSideServerUrls.staticUrl, {
+         const Bt = (0, Cq.p)(Se.clientSideServerUrls.staticUrl, {
```

#### 709. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6211` → after: `L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6580) · [Before (L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6211)

```diff
-               return null !== (IB = null === (ZB = Pc()) || void 0 === ZB ? void 0 : ZB.modelUrl(BB)) && void 0 !== IB ? IB : null
+               return null !== (et = null === (Vt = LH()) || void 0 === Vt ? void 0 : Vt.modelUrl(tt)) && void 0 !== et ? et : null
```

#### 710. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6217` → after: `L6586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6586) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6217)

```diff
-               return null !== (TB = null === (JB = IB()) || void 0 === JB ? void 0 : JB.drawnUrl(ZB)) && void 0 !== TB ? TB : BB.url(ZB)
+               return null !== (Ot = null === (qt = et()) || void 0 === qt ? void 0 : qt.drawnUrl(Vt)) && void 0 !== Ot ? Ot : tt.url(Vt)
```

#### 711. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6219` → after: `L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6588) · [Before (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6219)

```diff
-             return (0, WJ.n)((0, nJ.l)(TB), ZB)
+             return (0, bq.h)((0, Qq.l)(Ot), Vt)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6221-L6222` → after: `L6590-L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6590-L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6590-L6591) · [Before (L6221-L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6221-L6222)

```diff
-           xB = new nJ.h(bB, (BB => {
-             console.warn(`${eo} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
+           xt = new Qq.g(pt, (tt => {
+             console.warn(`${oD} image ${tt.key.kind}:${tt.key.index}:${tt.key.word} failed`, tt.error)
```

#### 713. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6225` → after: `L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6594) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6225)

```diff
-           void 0 === IB ? console.warn(`${eo} ${BB}`) : rc(BB, IB)
+           void 0 === et ? console.warn(`${oD} ${tt}`) : kH(tt, et)
```

#### 714. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6227` → after: `L6596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6596) · [Before (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6227)

```diff
-         const EB = new UJ.f(tB, function(BB, IB) {
+         const Tt = new Mq.i(Bt, function(tt, et) {
```

#### 715. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6262` → after: `L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6631) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6262)

```diff
-             vB = ZB.e(43).then((() => ZB(51116))).then((BB => {
+             dt = Vt.e(43).then((() => Vt(51332))).then((tt => {
```

#### 716. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6275-L6276` → after: `L6644-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6644-L6645) · [Before (L6275-L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6275-L6276)

```diff
-             return null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.build(BB, IB)) && void 0 !== TB ? TB : (0, QJ.v)(BB, "the model workers did not load")
-           })).then((BB => null !== oB && (0, QJ.m)(BB) ? oB.then((() => BB)) : BB))
+             return null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.build(tt, et)) && void 0 !== Ot ? Ot : (0, uq.s)(tt, "the model workers did not load")
+           })).then((tt => null !== Dt && (0, uq.k)(tt) ? Dt.then((() => tt)) : tt))
```

#### 717. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6293` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6662) · [Before (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6293)

```diff
-             console.warn(`${eo} the texture pack's model file ${BB} failed: the shipped one loads`, IB)
+             console.warn(`${oD} the texture pack's model file ${tt} failed: the shipped one loads`, et)
```

#### 718. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6297` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6666) · [Before (L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6297)

```diff
-         const DB = new FJ.h(iB);
+         const gt = new fq.c(St);
```

#### 719. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6306` → after: `L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6675) · [Before (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6306)

```diff
-             site: zZ.D,
+             site: EV.C,
```

#### 720. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6313` → after: `L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6682) · [Before (L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6313)

```diff
-           null !== BB && (BB || iB.isStopped || console.warn(`${eo} the core refused the terrain textures: terrain draws untextured`), Bv(iB))
+           null !== tt && (tt || St.isStopped || console.warn(`${oD} the core refused the terrain textures: terrain draws untextured`), td(St))
```

#### 721. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6316` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6685) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6316)

```diff
-           console.warn(`${eo} ${BB}`, ...void 0 === IB ? [] : [IB])
+           console.warn(`${oD} ${tt}`, ...void 0 === et ? [] : [et])
```

#### 722. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6330` → after: `L6699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6699) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6330)

```diff
-             null !== cB && Promise.all([ZB.e(204), ZB.e(46)]).then((() => ZB(51075))).then((ZB => {
+             null !== Ht && Promise.all([Vt.e(204), Vt.e(46)]).then((() => Vt(51300))).then((Vt => {
```

#### 723. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6344` → after: `L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6713) · [Before (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6344)

```diff
-                   (0, WJ.j)(JB), GB.feed((() => async function(BB) {
+                   (0, bq.d)(qt), mt.feed((() => async function(tt) {
```

#### 724. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6347-L6348` → after: `L6716-L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6716-L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6716-L6717) · [Before (L6347-L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6347-L6348)

```diff
-                   }(FB.assets))), (0, yJ.j)(FB.files()), oB.refresh().then((BB => {
-                     null !== BB && console.info(`${eo} texture pack models: ${BB.resent} of ${BB.delivered} files written again, ${BB.refetched} refetched`)
+                   }(Et.assets))), (0, aq.m)(Et.files()), Dt.refresh().then((tt => {
+                     null !== tt && console.info(`${oD} texture pack models: ${tt.resent} of ${tt.delivered} files written again, ${tt.refetched} refetched`)
```

#### 725. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6357` → after: `L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6726) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6357)

```diff
-                     const TB = null === BB.gameSource && (0, jZ.d)(BB.pack);
+                     const Ot = null === tt.gameSource && (0, ZV.f)(tt.pack);
```

#### 726. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6359` → after: `L6728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6728) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6359)

```diff
-                     const JB = (0, HZ.h)(IB.error),
+                     const qt = (0, IV.g)(et.error),
```

#### 727. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6361` → after: `L6730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6730) · [Before (L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6361)

```diff
-                     kB.l.Gq(HZ.e, {
+                     jt.j.sw(IV.c, {
```

#### 728. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6369` → after: `L6738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6738) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6369)

```diff
-                       IB && BB && console.info(`${eo} the texture pack's animations are in (${Object.keys(BB).length} files)`)
+                       et && tt && console.info(`${oD} the texture pack's animations are in (${Object.keys(tt).length} files)`)
```

#### 729. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6377` → after: `L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6746) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6377)

```diff
-                 maxTextureSize: () => Promise.resolve((0, nZ.eb)(document.createElement("canvas")))
+                 maxTextureSize: () => Promise.resolve((0, QV.fb)(document.createElement("canvas")))
```

#### 730. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6381` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6750) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6381)

```diff
-               console.warn(`${eo} the texture pack's terrain didn't load: the built atlas stays`, BB)
+               console.warn(`${oD} the texture pack's terrain didn't load: the built atlas stays`, tt)
```

#### 731. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6389` → after: `L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6758) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6389)

```diff
-             (YI ??= ZB.e(54).then((() => ZB(51120))).then((BB => {
+             (We ??= Vt.e(54).then((() => Vt(51334))).then((tt => {
```

#### 732. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6397` → after: `L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6766) · [Before (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6397)

```diff
-               iB.setTextureLayers(BB) || iB.isStopped || (console.warn(`${eo} the core refused the texture names: textured Boxes draw textureNotFound`), II())
+               St.setTextureLayers(tt) || St.isStopped || (console.warn(`${oD} the core refused the texture names: textured Boxes draw textureNotFound`), Ve())
```

#### 733. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6405` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6774) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6405)

```diff
-                 console.warn(`${eo} the texture names didn't load, so textured Boxes draw textureNotFound`, IB), II()
+                 console.warn(`${oD} the texture names didn't load, so textured Boxes draw textureNotFound`, et), Ve()
```

#### 734. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6415-L6416` → after: `L6784-L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6784-L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6784-L6785) · [Before (L6415-L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6415-L6416)

```diff
-             const kB = (0, nZ.Q)(ZB);
-             if (null === kB) return BB.crash(fo, new Error(`this ${TB} build has no openRenderer`)), !1;
+             const jt = (0, QV.P)(Vt);
+             if (null === jt) return tt.crash(UD, new Error(`this ${Ot} build has no openRenderer`)), !1;
```

#### 735. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6421-L6422` → after: `L6790-L6791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6790-L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6790-L6791) · [Before (L6421-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6421-L6422)

```diff
-               const JB = null !== (nB = null === (hB = NG) || void 0 === hB ? void 0 : hB.pagePreviews()) && void 0 !== nB ? nB : null,
-                 vB = null !== (zB = null === (FB = NG) || void 0 === FB ? void 0 : FB.previewModule(ZB)) && void 0 !== zB ? zB : null;
+               const qt = null !== (Xt = null === (Qt = Em) || void 0 === Qt ? void 0 : Qt.pagePreviews()) && void 0 !== Xt ? Xt : null,
+                 dt = null !== (lt = null === (Et = Em) || void 0 === Et ? void 0 : Et.previewModule(Vt)) && void 0 !== lt ? lt : null;
```

#### 736. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6424-L6426` → after: `L6793-L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6793-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6793-L6795) · [Before (L6424-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6424-L6426)

```diff
-                 null === JB || void 0 === JB || JB.endSession(!1), cB = (0, LI.c)().sampleCount, await (0, nZ.g)(IB, kB, GB, Mc, cB, await oB);
-                 const BB = (0, nZ.l)(ZB);
-                 null === BB && console.warn(`${eo} this ${TB} build has no image registry: sky and model images won't show`), (0, zJ.g)(BB)
+                 null === qt || void 0 === qt || qt.endSession(!1), Ht = (0, oe.g)().sampleCount, await (0, QV.e)(et, jt, mt, PH, Ht, await Dt);
+                 const tt = (0, QV.h)(Vt);
+                 null === tt && console.warn(`${oD} this ${Ot} build has no image registry: sky and model images won't show`), (0, Eq.f)(tt)
```

#### 737. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6428-L6429` → after: `L6797-L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6797-L6798) · [Before (L6428-L6429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6428-L6429)

```diff
-                 (0, aJ.e)() && await (0, SB.s)();
-                 const ZB = (0, aJ.L)();
+                 (0, Rq.e)() && await (0, te.l)();
+                 const Vt = (0, Rq.J)();
```

#### 738. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6431-L6432` → after: `L6800-L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6800-L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6800-L6801) · [Before (L6431-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6431-L6432)

```diff
-                   const IB = (0, hZ.i)(kB);
-                   return BB.crash(MZ.RENDER_RELOAD_SITE, new Error(`${ZB}${void 0===IB?"":` (${IB.message})`}`)), !1
+                   const et = (0, lV.l)(jt);
+                   return tt.crash(PV.RENDER_RELOAD_SITE, new Error(`${Vt}${void 0===et?"":` (${et.message})`}`)), !1
```

#### 739. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6434` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6803) · [Before (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6434)

```diff
-                 cB = await JB.bindSession(vB, IB, (async BB => (0, nZ.v)(kB, fo, GB, BB, Mc, await oB)))
+                 Ht = await qt.bindSession(dt, et, (async tt => (0, QV.t)(jt, UD, mt, tt, PH, await Dt)))
```

#### 740. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6451` → after: `L6820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6820) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6451)

```diff
-                   return null !== (BB = JB.call(ZB)) && void 0 !== BB ? BB : null
+                   return null !== (tt = qt.call(Vt)) && void 0 !== tt ? tt : null
```

#### 741. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6457` → after: `L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6826) · [Before (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6457)

```diff
-             return xv.boundAtMs = null !== (vB = (0, aJ.M)()) && void 0 !== vB ? vB : NB, xv.indirectHangs = (0, aJ.B)(), xv.restoresSkipped = (0, aJ.P)(), console.info(`${eo} ${TB} renderer bound at ${Math.round(NB)} ms`), !BB.isStopped
+             return Td.boundAtMs = null !== (dt = (0, Rq.L)()) && void 0 !== dt ? dt : ft, Td.indirectHangs = (0, Rq.D)(), Td.restoresSkipped = (0, Rq.N)(), console.info(`${oD} ${Ot} renderer bound at ${Math.round(ft)} ms`), !tt.isStopped
```

#### 742. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6461` → after: `L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6830) · [Before (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6461)

```diff
-           (0, UI.J)(zB);
+           (0, Me.D)(lt);
```

#### 743. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6463` → after: `L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6832) · [Before (L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6463)

```diff
-           ZB.e(196).then((() => ZB(34060))).then((IB => {
+           Vt.e(196).then((() => Vt(34255))).then((et => {
```

#### 744. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6476` → after: `L6845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6845) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6476)

```diff
-                   "screenshot" === IB && null === oB ? await (0, OJ.h)(BB, TB, JB) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
+                   "screenshot" === et && null === Dt ? await (0, vq.e)(tt, Ot, qt) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
```

#### 745. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6487` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6856) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6487)

```diff
-                   (0, bZ.A)(DI.vb.Resize, 0, BB / ZB, IB / ZB, (0, bZ.m)(ZB))
+                   (0, pV.w)(ge.Fb.Resize, 0, tt / Vt, et / Vt, (0, pV.i)(Vt))
```

#### 746. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6490-L6491` → after: `L6859-L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6859-L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6859-L6860) · [Before (L6490-L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6490-L6491)

```diff
-                   const IB = (0, LI.j)(BB);
-                   null !== IB && (0, bZ.A)(DI.vb.Resize, 0, IB.cssWidth, IB.cssHeight, (0, bZ.m)(IB.renderScale))
+                   const et = (0, oe.p)(tt);
+                   null !== et && (0, pV.w)(ge.Fb.Resize, 0, et.cssWidth, et.cssHeight, (0, pV.i)(et.renderScale))
```

#### 747. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6499` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6868) · [Before (L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6499)

```diff
-             console.warn(`${eo} the developer tools didn't load: no captures this session`, BB)
+             console.warn(`${oD} the developer tools didn't load: no captures this session`, tt)
```

#### 748. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6501` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6870) · [Before (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6501)

```diff
-           const IB = "webgpu" === zB && null !== (TI = null === hB || void 0 === hB || null === (JI = hB.adapter) || void 0 === JI ? void 0 : JI.vendor) && void 0 !== TI ? TI : null;
+           const et = "webgpu" === lt && null !== (qe = null === Qt || void 0 === Qt || null === (De = Qt.adapter) || void 0 === De ? void 0 : De.vendor) && void 0 !== qe ? qe : null;
```

#### 749. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6505` → after: `L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6874) · [Before (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6505)

```diff
-             fallbackReason: null !== (oI = null === hB || void 0 === hB ? void 0 : hB.reason) && void 0 !== oI ? oI : null,
+             fallbackReason: null !== (me = null === Qt || void 0 === Qt ? void 0 : Qt.reason) && void 0 !== me ? me : null,
```

#### 750. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6509` → after: `L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6878) · [Before (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6509)

```diff
-             (0, FT.w)(zB, qB, IB)
+             (0, fO.q)(lt, yt, et)
```

#### 751. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6511` → after: `L6880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6880) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6511)

```diff
-             (0, FT.y)(), console.error(`${eo} the quality steps didn't start`, JB)
+             (0, fO.t)(), console.error(`${oD} the quality steps didn't start`, qt)
```

#### 752. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6518-L6520` → after: `L6887-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6887-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6887-L6889) · [Before (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6518-L6520)

```diff
-         vI && console.warn(`${eo} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
-         const kI = (0, VB.e)(hB, (0, PI.l)());
-         if ((0, EJ.t)("webgpuloss")) {
+         je && console.warn(`${oD} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
+         const He = (0, nt.g)(Qt, (0, Le.g)());
+         if ((0, Tq.v)("webgpuloss")) {
```

#### 753. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6524-L6525` → after: `L6893-L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6893-L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6893-L6894) · [Before (L6524-L6525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6524-L6525)

```diff
-             reason: null !== (cI = null === hB || void 0 === hB ? void 0 : hB.reason) && void 0 !== cI ? cI : null,
-             source: null !== (nI = null === hB || void 0 === hB ? void 0 : hB.source) && void 0 !== nI ? nI : null,
+             reason: null !== (Xe = null === Qt || void 0 === Qt ? void 0 : Qt.reason) && void 0 !== Xe ? Xe : null,
+             source: null !== (Qe = null === Qt || void 0 === Qt ? void 0 : Qt.source) && void 0 !== Qe ? Qe : null,
```

#### 754. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6529` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6898) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6529)

```diff
-           (0, DJ.e)((IB => {
+           (0, gq.c)((et => {
```

#### 755. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6534-L6535` → after: `L6903-L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6903-L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6903-L6904) · [Before (L6534-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6534-L6535)

```diff
-         if (DG = (0, VB.h)(hI ? iB : null, hI && null !== (vB = null === (cB = NG) || void 0 === cB ? void 0 : cB.pagePreviews().oN) && void 0 !== vB ? vB : null, kI, rc), Ok) return null;
-         if (XB.reserveAtJoin((0, kJ.m)(null !== jB && void 0 !== jB ? jB : YZ.g)), iB.isStopped) return null;
+         if (Tm = (0, nt.j)(le ? St : null, le && null !== (dt = null === (Ht = Em) || void 0 === Ht ? void 0 : Ht.pagePreviews().YE) && void 0 !== dt ? dt : null, He, kH), vj) return null;
+         if (zt.reserveAtJoin((0, Hq.n)(null !== Zt && void 0 !== Zt ? Zt : WV.d)), St.isStopped) return null;
```

#### 756. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6545` → after: `L6914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6914) · [Before (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6545)

```diff
-             if (iB.writePendingInput(), (0, HB.e)(BB, Sc), Ac(!1, BB), null !== Jk) try {
+             if (St.writePendingInput(), (0, It.d)(tt, tX), YH(!1, tt), null !== mj) try {
```

#### 757. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6551` → after: `L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6920) · [Before (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6551)

```diff
-           } else Vc(iB, Ck, "budget") && ((0, rI.j)(iB.lastFrameKind) && Gn() && (0, HB.e)(BB, Sc), Ac(Ck && yk, BB), Uk.frame(iB.lastFrameKind, Ck && Gn(), BB), Wk.frame(iB.lastFrameKind, Ck && Gn()), (0, rI.e)(iB.lastFrameKind) && PI.H.drew(), Nn(iB), XB.afterFrame(), requestAn … [truncated]
+           } else nH(St, Cj, "budget") && ((0, ke.f)(St.lastFrameKind) && mX() && (0, It.d)(tt, tX), YH(Cj && aj, tt), Mj.frame(St.lastFrameKind, Cj && mX(), tt), bj.frame(St.lastFrameKind, Cj && mX()), (0, ke.d)(St.lastFrameKind) && Le.D.drew(), fX(St), zt.afterFrame(), requestAn … [truncated]
```

#### 758. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6555` → after: `L6924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6924) · [Before (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6555)

```diff
-           if (BB.has("inputLog") && (0, QT.e)((BB => {
+           if (tt.has("inputLog") && (0, uO.i)((tt => {
```

#### 759. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6561` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6930) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6561)

```diff
-               console.info(`${wT} input ${IB} ${ZB?"down":"up"} press ${TB} at ${performance.now().toFixed(1)}`)
+               console.info(`${hO} input ${et} ${Vt?"down":"up"} press ${Ot} at ${performance.now().toFixed(1)}`)
```

#### 760. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6584` → after: `L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6953) · [Before (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6584)

```diff
-         (TB(CG), OG(null !== BB), null !== BB && (WB = performance.now()), sG(BB), null === BB) ? null === (IB = NG) || void 0 === IB || IB.pagePreviews().endSession(null === (0, gI.m)()): SG("booted")
+         (Ot(bm), Km(null !== tt), null !== tt && (bt = performance.now()), Cm(tt), null === tt) ? null === (et = Em) || void 0 === et || et.pagePreviews().endSession(null === (0, ye.s)()): nm("booted")
```

#### 761. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6602` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6971) · [Before (L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6602)

```diff
-         console.warn(`${eo} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, BB)
+         console.warn(`${oD} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, tt)
```

#### 762. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6607` → after: `L6976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6976) · [Before (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6607)

```diff
-         this.deps = BB, this.latest = 0, this.sv = null
+         this.deps = tt, this.latest = 0, this.Pd = null
```

#### 763. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6617` → after: `L6986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6986) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6617)

```diff
-         if ((null === (TB = this.sv) || void 0 === TB ? void 0 : TB.module) === BB && (0, oZ.he)(this.sv.files, IB)) return !1;
+         if ((null === (Ot = this.Pd) || void 0 === Ot ? void 0 : Ot.module) === tt && (0, mV.te)(this.Pd.files, et)) return !1;
```

#### 764. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6627` → after: `L6996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L6996) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6627)

```diff
-           return this.sv = {
+           return this.Pd = {
```

#### 765. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6633` → after: `L7002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7002) · [Before (L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6633)

```diff
-                 ("error" === BB[IB] ? console.error : console.warn)(`Animation for the texture pack: ${BB[IB+1]}: ${BB[IB+2]}`)
+                 ("error" === tt[et] ? console.error : console.warn)(`Animation for the texture pack: ${tt[et+1]}: ${tt[et+2]}`)
```

#### 766. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6640-L6641` → after: `L7009-L7010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7009-L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7009-L7010) · [Before (L6640-L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6640-L6641)

```diff
-           const TB = (null !== (GB = this.deps.retryAfterMs) && void 0 !== GB ? GB : vZ)[ZB];
-           return void 0 === TB || vB instanceof kZ || (0, GZ.f)(BB) || setTimeout((() => {
+           const Ot = (null !== (mt = this.deps.retryAfterMs) && void 0 !== mt ? mt : jV)[Vt];
+           return void 0 === Ot || dt instanceof HV || (0, dV.l)(tt) || setTimeout((() => {
```

#### 767. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6648` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7017) · [Before (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6648)

```diff
-           return BB.QTB(IB)
+           return tt.cOt(et)
```

#### 768. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6650` → after: `L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7019) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6650)

```diff
-           throw (0, GZ.h)(BB, ZB), ZB
+           throw (0, dV.p)(tt, Vt), Vt
```

#### 769. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6657-L6658` → after: `L7026-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7026-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7026-L7027) · [Before (L6657-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6657-L6658)

```diff
-         const IB = this.sv;
-         if (this.sv = null, (null === IB || void 0 === IB ? void 0 : IB.module) === BB && !(0, GZ.f)(BB)) try {
+         const et = this.Pd;
+         if (this.Pd = null, (null === et || void 0 === et ? void 0 : et.module) === tt && !(0, dV.l)(tt)) try {
```

#### 770. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6663` → after: `L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7032) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6663)

```diff
-       compiler: IZ.d,
+       compiler: VV.e,
```

#### 771. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6679` → after: `L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7048) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6679)

```diff
-           } = await ZB.e(277).then((() => ZB(51065)));
+           } = await Vt.e(277).then((() => Vt(51285)));
```

#### 772. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6702` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7071) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6702)

```diff
-       const hB = (0, XZ.I)("wasm", Un);
+       const Qt = (0, zV.K)("wasm", aX);
```

#### 773. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6710` → after: `L7079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7079) · [Before (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6710)

```diff
-           kind: "fZ"
+           kind: "nV"
```

#### 774. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6715` → after: `L7084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7084) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6715)

```diff
-         if (FB = performance.now(), !kB()) yn(null !== (CB = null === (QB = BB.target.session) || void 0 === QB ? void 0 : QB.gameNameWithVariation) && void 0 !== CB ? CB : null);
+         if (Et = performance.now(), !jt()) NX(null !== (Ct = null === (ut = tt.target.session) || void 0 === ut ? void 0 : ut.gameNameWithVariation) && void 0 !== Ct ? Ct : null);
```

#### 775. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6728` → after: `L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7097) · [Before (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6728)

```diff
-             if (gB.d.markGameEngineConstructed(), dB) return;
+             if (wt.c.markGameEngineConstructed(), Jt) return;
```

#### 776. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6730-L6731` → after: `L7099-L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7099-L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7099-L7100) · [Before (L6730-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6730-L6731)

```diff
-             const TB = Math.max(BB, null !== (IB = yB) && void 0 !== IB ? IB : BB);
-             (0, qB.f)("ready", Math.max(0, (null !== (ZB = UB) && void 0 !== ZB ? ZB : TB) - TB) / 1e3)
+             const Ot = Math.max(tt, null !== (et = Nt) && void 0 !== et ? et : tt);
+             (0, yt.h)("ready", Math.max(0, (null !== (Vt = Mt) && void 0 !== Vt ? Vt : Ot) - Ot) / 1e3)
```

#### 777. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6733` → after: `L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7102) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmPlay.js#L6733)

```diff
-           if (null !== UB && null !== WB ? ((0, NB.n)("wasm_loaded", UB), (0, NB.n)("wasm_core_ready", WB)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), BB.target.session && (0, Jo.c)(BB.target.session.gameNameWithVariation)) null ===  … [truncated]
+           if (null !== Mt && null !== bt ? ((0, ft.q)("wasm_loaded", Mt), (0, ft.q)("wasm_core_ready", bt)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), tt.target.session && (0, DD.d)(tt.target.session.gameNameWithVariation)) null ===  … [truncated]
```
