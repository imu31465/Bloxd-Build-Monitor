# Changed — Bundle Modifications Report (Part 130 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `130 / 137` (**374** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 129](part-129.md) · [Part 131 →](part-131.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (1022 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 458. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4431` → after: `L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4316) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4431)

```diff
-             this.vq = null;
+             this.eq = null;
```

#### 459. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4447` → after: `L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4332) · [Before (L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4447)

```diff
-             zC.status !== Tz.xb.Trapped && (this.startsWithoutResult = 0), this.options.write(zC.ticket, Tz.Pd.WorldgenResult, zC.status, zC.workerUs, new Uint8Array(zC.bytes, 0, zC.len)), this.recycle(zC.bytes), zC.spare && this.recycle(zC.spare)
+             Fk.status !== fF.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(Fk.ticket, fF.Pd.WorldgenResult, Fk.status, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare)
```

#### 460. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4451` → after: `L4336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4336) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4451)

```diff
-         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${CC}`), this.lastLoss = CC, this.endWorker(), this.gone || (zC ? zC() : this.options.onWorkerLost(CC), this.dropHeld(), this.vq = null, this.options.write(0, Tz.Pd.WorldgenLost, Tz.Ud.Lost, 0, Ow), this.cor … [truncated]
+         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${kk}`), this.lastLoss = kk, this.endWorker(), this.gone || (Fk ? Fk() : this.options.onWorkerLost(kk), this.dropHeld(), this.eq = null, this.options.write(0, fF.Pd.WorldgenLost, fF.Wd.Lost, 0, rT), this.cor … [truncated]
```

#### 461. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4454` → after: `L4339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4339) · [Before (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4454)

```diff
-         this.gone = !0, this.dropHeld(), this.options.write(0, Tz.Pd.WorldgenLost, Tz.Ud.Gone, 0, Ow)
+         this.gone = !0, this.dropHeld(), this.options.write(0, fF.Pd.WorldgenLost, fF.Wd.Gone, 0, rT)
```

#### 462. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4461` → after: `L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4346) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4461)

```diff
-         if (null !== this.vq) {
+         if (null !== this.eq) {
```

#### 463. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4465-L4466` → after: `L4350-L4351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4350-L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4350-L4351) · [Before (L4465-L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4465-L4466)

```diff
-             of this.vq) "generate" === CC.type && this.recycle(CC.bytes);
-           this.vq.length = 0
+             of this.eq) "generate" === kk.type && this.recycle(kk.bytes);
+           this.eq.length = 0
```

#### 464. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4473-L4477` → after: `L4358-L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4358-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4358-L4362) · [Before (L4473-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4473-L4477)

```diff
-     var Vw = ZC(37568),
-       Cb = ZC(3637),
-       zb = ZC(40500),
-       Zb = ZC(40827),
-       Qb = ZC(40611);
+     var MT = Ik(37760),
+       ki = Ik(3662),
+       Fi = Ik(40670),
+       Ii = Ik(41009),
+       Xi = Ik(40787);
```

#### 465. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4511` → after: `L4396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4396) · [Before (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4511)

```diff
-         oC = (0, mQ.o)(mQ.R, QC, [CC]);
+         ak = (0, pX.k)(pX.R, Xk, [kk]);
```

#### 466. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4513` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4398) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4513)

```diff
-         const ZC = (0, mQ.o)(mQ.R, wC, [oC[0]]),
+         const Ik = (0, pX.k)(pX.R, Tk, [ak[0]]),
```

#### 467. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4518-L4520` → after: `L4403-L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4403-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4403-L4405) · [Before (L4518-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4518-L4520)

```diff
-             zC = (0, mQ.o)(mQ.R, wb, [oC[0]]),
-             QC = null !== (0, mQ.o)(mQ.R, bb, [CC]) ? CC : null === zC ? null : zC[1],
-             wC = null === QC ? null : (0, mQ.o)(mQ.R, bC, [QC]);
+             Fk = (0, pX.k)(pX.R, Ti, [ak[0]]),
+             Xk = null !== (0, pX.k)(pX.R, ii, [kk]) ? kk : null === Fk ? null : Fk[1],
+             Tk = null === Xk ? null : (0, pX.k)(pX.R, ik, [Xk]);
```

#### 468. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4523` → after: `L4408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4408) · [Before (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4523)

```diff
-         null !== ZC && (null === nC ? nC = ZC[0] : null === fC && ZC[0] !== nC && (fC = ZC[0])), oC = (0, mQ.o)(mQ.R, QC, [CC])
+         null !== Ik && (null === yk ? yk = Ik[0] : null === lk && Ik[0] !== yk && (lk = Ik[0])), ak = (0, pX.k)(pX.R, Xk, [kk])
```

#### 469. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4525` → after: `L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4410) · [Before (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4525)

```diff
-       return null !== (ZC = fC) && void 0 !== ZC ? ZC : null === nC ? "none" : "own"
+       return null !== (Ik = lk) && void 0 !== Ik ? Ik : null === yk ? "none" : "own"
```

#### 470. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4530-L4531` → after: `L4415-L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4415-L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4415-L4416) · [Before (L4530-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4530-L4531)

```diff
-       const ZC = (0, mQ.o)(mQ.R, Fb, [zC]);
-       return null === ZC ? CC : CC + ":" + ZC[1] + ":" + ZC[2]
+       const Ik = (0, pX.k)(pX.R, Li, [Fk]);
+       return null === Ik ? kk : kk + ":" + Ik[1] + ":" + Ik[2]
```

#### 471. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4540` → after: `L4425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4425) · [Before (L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4540)

```diff
-         nC = (0, mQ.o)(mQ.R, zC, [CC]);
+         yk = (0, pX.k)(pX.R, Fk, [kk]);
```

#### 472. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4542-L4544` → after: `L4427-L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4427-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4427-L4429) · [Before (L4542-L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4542-L4544)

```diff
-         const fC = (0, mQ.o)(mQ.R, ZC, [nC[0]]),
-           oC = null === fC ? (0, mQ.o)(mQ.R, wb, [nC[0]]) : null,
-           qC = null !== oC && null !== (0, mQ.o)(mQ.R, bb, [oC[1]]) && 0 !== nb(oC[1], "wasm:") ? oC[1] : null;
+         const lk = (0, pX.k)(pX.R, Ik, [yk[0]]),
+           ak = null === lk ? (0, pX.k)(pX.R, Ti, [yk[0]]) : null,
+           qk = null !== ak && null !== (0, pX.k)(pX.R, ii, [ak[1]]) && 0 !== yi(ak[1], "wasm:") ? ak[1] : null;
```

#### 473. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4571` → after: `L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4456) · [Before (L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4571)

```diff
-         nC = (0, mQ.o)(mQ.R, zC, [CC])
+         yk = (0, pX.k)(pX.R, Fk, [kk])
```

#### 474. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4581` → after: `L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4466) · [Before (L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4581)

```diff
-       return (0, Vw.f)(function(CC) {
+       return (0, MT.g)(function(kk) {
```

#### 475. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4585` → after: `L4470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4470) · [Before (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4585)

```diff
-         for (let wC = 0; wC <= ZC; wC++) zC ^= wC === ZC ? CC.length : (0, mQ.o)(mQ.bb, CC, [wC]), zC = zC + (zC << 1) + (zC << 4) + (zC << 7) + (zC << 8) + (zC << 24) >>> 0;
+         for (let Tk = 0; Tk <= Ik; Tk++) Fk ^= Tk === Ik ? kk.length : (0, pX.k)(pX.bb, kk, [Tk]), Fk = Fk + (Fk << 1) + (Fk << 4) + (Fk << 7) + (Fk << 8) + (Fk << 24) >>> 0;
```

#### 476. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4623` → after: `L4508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4508) · [Before (L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4623)

```diff
-                   return zC.zF();
+                   return Fk.Bq();
```

#### 477. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4625` → after: `L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4510) · [Before (L4625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4625)

```diff
-                   return zC.vq();
+                   return Fk.eq();
```

#### 478. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4628` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4513) · [Before (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4628)

```diff
-                 case Tz.kb: {
+                 case fF.cb: {
```

#### 479. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4630` → after: `L4515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4515) · [Before (L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4630)

```diff
-                   return null === ZC ? 0 : (0, mQ.o)(mQ.u, mQ.hb, [ZC, new mQ.b((0, mQ.F)(CC()), QC, wC)]).written
+                   return null === Ik ? 0 : (0, pX.k)(pX.u, pX.hb, [Ik, new pX.b((0, pX.F)(kk()), Xk, Tk)]).written
```

#### 480. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4637` → after: `L4522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4522) · [Before (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4637)

```diff
-             return Tz.fc
+             return fF.ec
```

#### 481. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4644` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4529) · [Before (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4644)

```diff
-         this.write = CC, this.flagsWritten = 0, this.written = (0, mQ.p)(null)
+         this.write = kk, this.flagsWritten = 0, this.written = (0, pX.n)(null)
```

#### 482. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4659` → after: `L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4544) · [Before (L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4659)

```diff
-         0 !== zC && this.write(Tz.k.Flags, zC, zC) && (this.flagsWritten |= zC)
+         0 !== Fk && this.write(fF.h.Flags, Fk, Fk) && (this.flagsWritten |= Fk)
```

#### 483. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4662` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4547) · [Before (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4662)

```diff
-         return this.write(Tz.k.Flags, Tz.g.OriginStackHit, Tz.g.OriginStackHit)
+         return this.write(fF.h.Flags, fF.g.OriginStackHit, fF.g.OriginStackHit)
```

#### 484. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4679` → after: `L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4564) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4679)

```diff
-     const Ib = ["length", 0, 1, 2, 3, "d", 100, "a", void 0, null, "s", "c3RhY2", "cw==", 33554432, 67108864, "c", 4, 196, 1e5, "e", 8, 7, 172, 207, 121, 243, 16, "HunbCP", 512, 23, "012345", 187, "b", 15, 135, 6, 148, 49, 1023, 63, 128, 12, 255, 221, 156, 114, 186, 32, 5, 24, 18 … [truncated]
+     const Vi = ["length", 0, 1, 2, 3, "g", 114, "d", 8, 239, 110, "b", void 0, 161, "a", null, "r", "c3RhY2", "cw==", 1e5, "stack", "name", "c", 59, 179, 25, 207, 61, 5, 141, !0, 106, 173, !1, 181, 235, 6, 133, 4, 92, 134, 107, "n", 33554432, 67108864, 224, 123, 242, 137, 238, 16 … [truncated]
```

#### 485. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4682` → after: `L4567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4567) · [Before (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4682)

```diff
-       if (CC[Ib[0]] = Ib[4], CC[Ib[1]] === Ib[27]) return CC[Ib[2]] + CC[Ib[3]]
+       if (kk[Vi[0]] = Vi[4], kk[Vi[1]] === Vi[52]) return kk[Vi[2]] + kk[Vi[3]]
```

#### 486. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4691-L4693` → after: `L4576-L4626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4576-L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4576-L4626) · [Before (L4691-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4691-L4693)

```diff
-       let zC = arguments[Ib[0]] > Ib[2] && arguments[Ib[2]] !== Ib[8] ? arguments[Ib[2]] : () => Ib[9],
-         ZC = arguments[Ib[0]] > Ib[3] && arguments[Ib[3]] !== Ib[8] ? arguments[Ib[3]] : Ib[9],
-         QC = arguments[Ib[0]] > Ib[4] && arguments[Ib[4]] !== Ib[8] ? arguments[Ib[4]] : "";
+       let Fk = arguments[Vi[0]] > Vi[2] && arguments[Vi[2]] !== Vi[12] ? arguments[Vi[2]] : (...kk) => (kk[Vi[0]] = Vi[1], "A3wyE_" + Vi[22] in Si && function(...kk) {
+           kk[Vi[0]] = Vi[1];
+           const Fk = require("big-integer");
+           oi(kk[Vi[14]] = class {
+             static randomPrime(...kk) {
+               kk[Vi[0]] = Vi[2];
+               const Ik = Fk.one.shiftLeft(kk[Vi[1]] - Vi[2]),
+                 Xk = Fk.one.shiftLeft(kk[Vi[1]]).prev();
+               for (; Vi[30];) {
+                 let kk = Fk.randBetween(Ik, Xk);
+                 if (kk.isProbablePrime(Vi[54])) return kk
+               }
+             }
+             static generate(...kk) {
+               kk[Vi[0]] = Vi[2];
+               const Ik = Fk(65537);
+ ... (35 more added lines; see GitHub link above)
```

#### 487. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4695-L4700` → after: `L4628-L4633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4628-L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4628-L4633) · [Before (L4695-L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4695-L4700)

```diff
-         bC = (0, mQ[Ib[10]])("RXJyb3" + Ib[216]),
-         nC = (0, mQ[Ib[10]])(Ib[11] + Ib[69]),
-         fC = (0, mQ[Ib[10]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
-         qC = (0, mQ[Ib[10]])(Ib[11] + "tUcmFjZUxpbWl0"),
-         FC = (0, mQ[Ib[10]])("bmF0aXZl"),
-         WC = [(0, mQ[Ib[10]])("bWFpbi5qcw=="), (0, mQ[Ib[10]])("aW5kZXguanM="), (0, mQ[Ib[10]])("dXNlcnNjcmlwdA=="), (0, mQ[Ib[10]])("Y29udGVudC5q" + Ib[12]), (0, mQ[Ib[10]])("b3B0aW9ucy5q" + Ib[12]), (0, mQ[Ib[10]])("cG9wdXAuanM="), (0, mQ[Ib[10]])("LnVzZXIuanM="), (0, mQ[Ib[10] … [truncated]
+         ik = (Vi[1], pX[Vi[16]])("RXJyb3" + Vi[214]),
+         yk = (Vi[1], pX[Vi[16]])(Vi[17] + "s="),
+         lk = (Vi[1], pX[Vi[16]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
+         qk = (Vi[1], pX[Vi[16]])(Vi[17] + "tUcmFjZUxpbWl0"),
+         Lk = (Vi[1], pX[Vi[16]])("bmF0aXZl"),
+         tk = [(Vi[1], pX[Vi[16]])("bWFpbi5qcw=="), (Vi[1], pX[Vi[16]])("aW5kZXguanM="), (Vi[1], pX[Vi[16]])("dXNlcnNjcmlwdA=="), (Vi[1], pX[Vi[16]])("Y29udGVudC5q" + Vi[18]), (Vi[1], pX[Vi[16]])("b3B0aW9ucy5q" + Vi[18]), (Vi[1], pX[Vi[16]])("cG9wdXAuanM="), (Vi[1], pX[Vi[16]])("L … [truncated]
```

#### 488. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4705` → after: `L4638-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4638-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4638-L4743) · [Before (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4705)

```diff
-           if (ZC[qC] < Ib[18]) {
+           Ik[qk] < Vi[19] && (Ik[qk] = Vi[19]);
+           const Xk = "string" === typeof(Zk = (new Fk)[yk]) ? Zk : `${Zk}`,
+             ak = {},
+             Lk = Ik[lk];
+           var Zk;
+           typeof Lk === Vi[205] + Vi[206] && (Vi[1], pX[Vi[207]])(Lk, Fk, [ak]);
+           const jk = ak[yk],
+             ek = kk[Vi[1]] ? tk[Vi[0]] : tk[Vi[0]] - Vi[2];
+           for (let Tk = Vi[1]; Tk < ek; Tk++) {
+             if (ei(Xk, tk[Tk])) return {
+               [Vi[20]]: Xk,
+               [Vi[21]]: tk[Tk]
+             };
+             if (typeof jk === Vi[75] && ei(jk, tk[Tk])) return {
+               [Vi[20]]: jk,
+               [Vi[21]]: tk[Tk]
+ ... (90 more added lines; see GitHub link above)
```

#### 489. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4707-L4708` → after: `L4745-L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4745-L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4745-L4746) · [Before (L4707-L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4707-L4708)

```diff
-               function zC(CC) {
-                 return CC[Ib[2]] * Ib[14] + (CC[Ib[1]] < Ib[1] ? Ib[13] | CC[Ib[1]] : CC[Ib[1]])
+               function Fk(...kk) {
+                 return kk[Vi[0]] = Vi[2], kk[Vi[1]][Vi[2]] * Vi[44] + (kk[Vi[1]][Vi[1]] < Vi[1] ? Vi[43] | kk[Vi[1]][Vi[1]] : kk[Vi[1]][Vi[1]])
```

#### 490. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4712` → after: `L4750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4750) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4712)

```diff
-                 switch (CC[Ib[0]] = Ib[2], ((CC[Ib[1]] & Ib[13]) !== Ib[1]) * Ib[2] + (CC[Ib[1]] < Ib[1]) * Ib[3]) {
+                 switch (kk[Vi[0]] = Vi[2], ((kk[Vi[1]] & Vi[43]) !== Vi[1]) * Vi[2] + (kk[Vi[1]] < Vi[1]) * Vi[3]) {
```

#### 491. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4714` → after: `L4752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4752) · [Before (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4714)

```diff
-                     return [CC[Ib[1]] % Ib[13], Math.trunc(CC[Ib[1]] / Ib[14])];
+                     return [kk[Vi[1]] % Vi[43], Math.trunc(kk[Vi[1]] / Vi[44])];
```

#### 492. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4716` → after: `L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4754) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4716)

```diff
-                     return [CC[Ib[1]] % Ib[13] - Ib[13], Math.trunc(CC[Ib[1]] / Ib[14]) + Ib[2]];
+                     return [kk[Vi[1]] % Vi[43] - Vi[43], Math.trunc(kk[Vi[1]] / Vi[44]) + Vi[2]];
```

#### 493. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4718` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4756) · [Before (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4718)

```diff
-                     return [((CC[Ib[1]] + Ib[13]) % Ib[13] + Ib[13]) % Ib[13], Math.round(CC[Ib[1]] / Ib[14])];
+                     return [((kk[Vi[1]] + Vi[43]) % Vi[43] + Vi[43]) % Vi[43], Math.round(kk[Vi[1]] / Vi[44])];
```

#### 494. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4720` → after: `L4758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4758) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4720)

```diff
-                     return [CC[Ib[1]] % Ib[13], Math.trunc(CC[Ib[1]] / Ib[14])]
+                     return [kk[Vi[1]] % Vi[43], Math.trunc(kk[Vi[1]] / Vi[44])]
```

#### 495. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4723-L4739` → after: `L4761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4761) · [Before (L4723-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4723-L4739)

```diff
-               CC[Ib[0]] = Ib[1], eb(CC[Ib[7]] = zC([Ib[3], Ib[16]]), CC[Ib[2]] = zC([Ib[2], Ib[3]]), CC[Ib[15]] = CC[Ib[7]] + CC[Ib[2]], CC[Ib[4]] = CC[Ib[15]] - CC[Ib[2]], CC[Ib[16]] = CC[Ib[4]] * Ib[3], CC[Ib[17]] = CC[Ib[16]] / Ib[3], console.log(ZC(CC[Ib[15]])), console.log(Z … [truncated]
-             }
-             "etcAC7" in vb && SC(), ZC[qC] = Ib[18]
-           }
-           const QC = "string" === typeof(NC = (new zC)[nC]) ? NC : `${NC}`,
-             oC = {},
-             FC = ZC[fC];
-           var NC;
-           if (typeof FC === Ib[209] + Ib[210]) {
-             function pC(...CC) {
-               eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...CC) {
-                 if (eb(CC[Ib[0]] = Ib[2], CC[Ib[7]] = CC[Ib[1]].length), CC[Ib[7]] < Ib[3]) return Ib[1];
-                 if (eb(CC[Ib[3]] = Math.max(...CC[Ib[1]]), CC[Ib[4]] = Math.min(...CC[Ib[1]])), CC[Ib[3]] === CC[Ib[4]]) return Ib[1];
-                 for (eb(CC[Ib[5]] = Array(CC[Ib[7]] - Ib[2]).fill(Number.MAX_SAFE_INTEGER), CC[Ib[19]] = Array(CC[Ib[7]] - Ib[2]).fill(Number.MIN_SAFE_INTEGER), CC[Ib[22]] = Math.ceil((CC[Ib[3]] - CC[Ib[4]]) / (CC[Ib[7]] - Ib[2])), CC[Ib[21]] = Ib[1]), CC[Ib[20]] = Ib[1]; CC[Ib[2 … [truncated]
-                 for (eb(CC[Ib[24]] = Number.MIN_SAFE_INTEGER, CC[Ib[25]] = CC[Ib[4]]), CC[Ib[23]] = Ib[1]; CC[Ib[23]] < CC[Ib[7]] - Ib[2]; CC[Ib[23]]++) CC[Ib[5]][CC[Ib[23]]] === Number.MAX_SAFE_INTEGER && CC[Ib[19]][CC[Ib[23]]] === Number.MIN_SAFE_INTEGER || eb(CC[Ib[24]] = Math … [truncated]
-                 return CC[Ib[24]] = Math.max(CC[Ib[24]], CC[Ib[3]] - CC[Ib[25]]), CC[Ib[24]]
- ... (1 more removed lines; see GitHub link above)
+               kk[Vi[0]] = Vi[1], oi(kk[-Vi[45]] = Fk([Vi[3], Vi[38]]), kk[Vi[2]] = Fk([Vi[2], Vi[3]]), kk[-Vi[46]] = kk[-Vi[45]] + kk[Vi[2]], kk[-Vi[47]] = kk[-Vi[46]] - kk[Vi[2]], kk[Vi[38]] = kk[-Vi[47]] * Vi[3], kk[-Vi[48]] = kk[Vi[38]] / Vi[3], console.log(Ik(kk[-Vi[46]])), c … [truncated]
```

#### 496. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4741-L4746` → after: `L4763-L4764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4763-L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4763-L4764) · [Before (L4741-L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4741-L4746)

```diff
-             "BYSnrk" + Ib[207] in vb && pC(), (0, mQ[Ib[211]])(FC, zC, [oC])
-           }
-           const MC = oC[nC],
-             gC = CC[Ib[1]] ? WC[Ib[0]] : WC[Ib[0]] - Ib[2];
-           for (let PC = Ib[1]; PC < gC; PC++) {
-             if (gb(QC, WC[PC])) {
+             if ("UYFk4A" in Si && ik(), Sk === Vi[15]) Sk = typeof Fk[Vi[2]] === Vi[231] ? Fk[Vi[2]] : -Vi[2];
+             else {
```

#### 497. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4748-L4750` → after: `L4766-L4771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4766-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4766-L4771) · [Before (L4748-L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4748-L4750)

```diff
-                 eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...CC) {
-                   function zC(...CC) {
-                     return CC[Ib[0]] = Ib[3], nC(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])))
+                 oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = function(...Fk) {
+                   return oi(Fk[Vi[0]] = Vi[2], Fk[Vi[14]] = []), (Fk[Vi[1]] === Vi[2] || Fk[Vi[1]] >= Vi[38]) && kk[Vi[11]](Fk[Vi[14]], [], Fk[Vi[1]], Vi[1]), Fk[Vi[14]]
+                 }, kk[Vi[11]] = function(...Fk) {
+                   for (Fk[Vi[0]] = Vi[38], Fk[Vi[14]] = Fk[Vi[4]]; Fk[Vi[14]] < Fk[Vi[3]]; Fk[Vi[14]]++) {
+                     if (Fk[Vi[2]].length !== Fk[Vi[14]]) return;
+                     for (Fk[Vi[28]] = Vi[1]; Fk[Vi[28]] < Fk[Vi[3]]; Fk[Vi[28]]++) kk[Vi[3]](Fk[Vi[2]], [Fk[Vi[14]], Fk[Vi[28]]]) && (oi(Fk[Vi[2]].push([Fk[Vi[14]], Fk[Vi[28]]]), kk[Vi[11]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Fk[Vi[14]] + Vi[2])), Fk[Vi[2]].length === Fk[Vi[3]] && F … [truncated]
```

#### 498. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4752-L4765` → after: `L4773-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4773-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4773-L4780) · [Before (L4752-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4752-L4765)

```diff
- 
-                   function QC(...CC) {
-                     return CC[Ib[0]] = Ib[4],
-                       function(...CC) {
-                         var zC, ZC, QC, wC;
-                         for (eb(CC[Ib[0]] = Ib[3], CC[Ib[36]] = CC[Ib[2]].length, CC[Ib[4]] = Array()), CC[Ib[16]] = Array(Math.ceil(CC[Ib[1]].length / Ib[3])), zC = Ib[1]; zC < CC[Ib[16]].length; zC++) CC[Ib[16]][zC] = CC[Ib[1]].charCodeAt(zC * Ib[3]) << Ib[20] | CC[Ib[1]].charC … [truncated]
-                         for (; CC[Ib[16]].length > Ib[1];) {
-                           for (eb(wC = Array(), QC = Ib[1]), zC = Ib[1]; zC < CC[Ib[16]].length; zC++) eb(QC = (QC << Ib[26]) + CC[Ib[16]][zC], ZC = Math.floor(QC / CC[Ib[36]]), QC -= ZC * CC[Ib[36]]), (wC.length > Ib[1] || ZC > Ib[1]) && (wC[wC.length] = ZC);
-                           eb(CC[Ib[4]][CC[Ib[4]].length] = QC, CC[Ib[16]] = wC)
-                         }
-                         for (CC[Ib[37]] = "", zC = CC[Ib[4]].length - Ib[2]; zC >= Ib[1]; zC--) CC[Ib[37]] += CC[Ib[2]].charAt(CC[Ib[4]][zC]);
-                         for (CC[Ib[35]] = Math.ceil(CC[Ib[1]].length * Ib[20] / (Math.log(CC[Ib[2]].length) / Math.log(Ib[3]))), zC = CC[Ib[37]].length; zC < CC[Ib[35]]; zC++) CC[Ib[37]] = CC[Ib[2]][Ib[1]] + CC[Ib[37]];
-                         return CC[Ib[37]]
-                       }(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])), CC[Ib[3]])
+                 }, kk[Vi[7]] = function(...kk) {
+                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[2]] = [], kk[Vi[3]] = kk[Vi[1]].length), kk[-Vi[49]] = Vi[1]; kk[-Vi[49]] < kk[Vi[3]]; kk[-Vi[49]]++)
+                     for (kk[Vi[2]][kk[-Vi[49]]] = "", kk[Vi[7]] = Vi[1]; kk[Vi[7]] < kk[Vi[3]]; kk[Vi[7]]++) kk[Vi[2]][kk[-Vi[49]]] += kk[Vi[1]][kk[-Vi[49]]][Vi[2]] === kk[Vi[7]] ? "Q" : ".";
+                   return kk[Vi[2]]
+                 }, kk[Vi[3]] = function(...kk) {
+                   for (oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = kk[Vi[1]].length), kk[Vi[11]] = Vi[1]; kk[Vi[11]] < kk[Vi[3]]; kk[Vi[11]]++) {
+                     if (kk[Vi[1]][kk[Vi[11]]][Vi[1]] === kk[Vi[2]][Vi[1]] || kk[Vi[1]][kk[Vi[11]]][Vi[2]] === kk[Vi[2]][Vi[2]]) return Vi[33];
+                     if (Math.abs((kk[Vi[1]][kk[Vi[11]]][Vi[1]] - kk[Vi[2]][Vi[1]]) / (kk[Vi[1]][kk[Vi[11]]][Vi[2]] - kk[Vi[2]][Vi[2]])) === Vi[2]) return Vi[33]
```

#### 499. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4768-L4775` → after: `L4797-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4797-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4797-L4810) · [Before (L4768-L4775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4768-L4775)

```diff
-                   function wC(CC, zC) {
-                     var ZC, QC, wC = oC(CC);
-                     wC.length > Ib[26] && (wC = GC(wC, CC.length * Ib[20]));
-                     var bC = Array(Ib[26]),
-                       nC = Array(Ib[26]);
-                     for (ZC = Ib[1]; ZC < Ib[26]; ZC++) eb(bC[ZC] = wC[ZC] ^ Ib[77], nC[ZC] = wC[ZC] ^ Ib[78]);
-                     return QC = GC(bC.concat(oC(zC)), Ib[28] + zC.length * Ib[20]), qC(GC(nC.concat(QC), ib(Ib[27], Ib[28], Ib[80])))
-                   }
+                 function Ik(...kk) {
+                   return kk[Vi[0]] = Vi[4],
+                     function(...kk) {
+                       var Fk, Ik, Xk, Tk;
+                       for (oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = kk[Vi[2]].length, kk[Vi[4]] = Array()), kk[-Vi[58]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[-Vi[58]].length; Fk++) kk[-Vi[58]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]].charCo … [truncated]
+                       for (; kk[-Vi[58]].length > Vi[1];) {
+                         for (oi(Tk = Array(), Xk = Vi[1]), Fk = Vi[1]; Fk < kk[-Vi[58]].length; Fk++) oi(Xk = (Xk << Vi[50]) + kk[-Vi[58]][Fk], Ik = Math.floor(Xk / kk[Vi[3]]), Xk -= Ik * kk[Vi[3]]), (Tk.length > Vi[1] || Ik > Vi[1]) && (Tk[Tk.length] = Ik);
+                         oi(kk[Vi[4]][kk[Vi[4]].length] = Xk, kk[-Vi[58]] = Tk)
+                       }
+                       for (kk[Vi[28]] = "", Fk = kk[Vi[4]].length - Vi[2]; Fk >= Vi[1]; Fk--) kk[Vi[28]] += kk[Vi[2]].charAt(kk[Vi[4]][Fk]);
+                       for (kk[Vi[36]] = Math.ceil(kk[Vi[1]].length * Vi[8] / (Math.log(kk[Vi[2]].length) / Math.log(Vi[3]))), Fk = kk[Vi[28]].length; Fk < kk[Vi[36]]; Fk++) kk[Vi[28]] = kk[Vi[2]][Vi[1]] + kk[Vi[28]];
+                       return kk[Vi[28]]
+                     }(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])), kk[Vi[3]])
+                 }
```

#### 500. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4777-L4786` → after: `L4812-L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4812-L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4812-L4818) · [Before (L4777-L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4777-L4786)

```diff
-                   function bC(...zC) {
-                     zC[Ib[0]] = Ib[2];
-                     try {
-                       CC[Ib[29]]
-                     } catch (ZC) {
-                       CC[Ib[29]] = Ib[1]
-                     }
-                     for (eb(zC[Ib[2]] = CC[Ib[29]] ? Ib[30] + Ib[82] + Ib[83] : Ib[30] + Ib[84] + Ib[85], zC[Ib[32]] = "", zC[Ib[4]] = Ib[8]), zC[-Ib[31]] = Ib[1]; zC[-Ib[31]] < zC[Ib[1]].length; zC[-Ib[31]]++) eb(zC[Ib[4]] = zC[Ib[1]].charCodeAt(zC[-Ib[31]]), zC[Ib[32]] += zC[Ib … [truncated]
-                     return zC[Ib[32]]
-                   }
+                 function Tk(...kk) {
+                   oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = ak(kk[Vi[1]])), kk[Vi[14]].length > Vi[50] && (kk[Vi[14]] = xk(kk[Vi[14]], kk[Vi[1]].length * Vi[8]));
+                   var Fk = Array(Vi[50]),
+                     Ik = Array(Vi[50]);
+                   for (kk[-Vi[51]] = Vi[1]; kk[-Vi[51]] < Vi[50]; kk[-Vi[51]]++) oi(Fk[kk[-Vi[51]]] = kk[Vi[14]][kk[-Vi[51]]] ^ Vi[77], Ik[kk[-Vi[51]]] = kk[Vi[14]][kk[-Vi[51]]] ^ Vi[78]);
+                   return kk[Vi[38]] = xk(Fk.concat(ak(kk[Vi[2]])), Vi[53] + kk[Vi[2]].length * Vi[8]), qk(xk(Ik.concat(kk[Vi[38]]), zi(Vi[52], Vi[53], Vi[54])))
+                 }
```

#### 501. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4788-L4797` → after: `L4820-L4825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4820-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4820-L4825) · [Before (L4788-L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4788-L4797)

```diff
-                   function nC(...zC) {
-                     zC[Ib[0]] = Ib[2];
-                     try {
-                       CC[Ib[2]]
-                     } catch (ZC) {
-                       CC[Ib[2]] = ""
-                     }
-                     for (eb(zC[Ib[7]] = Ib[87] + Ib[88] + Ib[89] + Ib[90] + Ib[91] + Ib[92], zC[Ib[32]] = "", zC[Ib[4]] = zC[Ib[1]].length), zC[Ib[16]] = Ib[1]; zC[Ib[16]] < zC[Ib[4]]; zC[Ib[16]] += Ib[4])
-                       for (zC[Ib[19]] = zC[Ib[1]].charCodeAt(zC[Ib[16]]) << Ib[26] | (zC[Ib[16]] + Ib[2] < zC[Ib[4]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[2]) << Ib[20] : Ib[1]) | (zC[Ib[16]] + Ib[3] < zC[Ib[4]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[3]) : Ib[1]), zC[-Ib[34]] =  … [truncated]
-                     return zC[Ib[32]]
+                 function ik(...Fk) {
+                   Fk[Vi[0]] = Vi[2];
+                   try {
+                     kk[Vi[22]]
+                   } catch (Xk) {
+                     kk[Vi[22]] = Vi[1]
```

#### 502. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4800-L4803` → after: `L4831-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4831-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4831-L4836) · [Before (L4800-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4800-L4803)

```diff
-                   function fC(...CC) {
-                     var zC, ZC;
-                     for (eb(CC[Ib[0]] = Ib[2], CC[Ib[2]] = "", CC[Ib[32]] = -Ib[2]); ++CC[Ib[32]] < CC[Ib[1]].length;) eb(zC = CC[Ib[1]].charCodeAt(CC[Ib[32]]), ZC = CC[Ib[32]] + Ib[2] < CC[Ib[1]].length ? CC[Ib[1]].charCodeAt(CC[Ib[32]] + Ib[2]) : Ib[1]), Ib[96] <= zC && zC <= I … [truncated]
-                     return CC[Ib[2]]
+                 function yk(...Fk) {
+                   Fk[Vi[0]] = Vi[2];
+                   try {
+                     kk[Vi[7]]
+                   } catch (Xk) {
+                     kk[Vi[7]] = ""
```

#### 503. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4806-L4810` → after: `L4843-L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4843-L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4843-L4847) · [Before (L4806-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4806-L4810)

```diff
-                   function oC(...CC) {
-                     for (eb(CC[Ib[0]] = Ib[2], CC[-Ib[45]] = Array(CC[Ib[1]].length >> Ib[3])), CC[Ib[3]] = Ib[1]; CC[Ib[3]] < CC[-Ib[45]].length; CC[Ib[3]]++) CC[-Ib[45]][CC[Ib[3]]] = Ib[1];
-                     for (CC[Ib[3]] = Ib[1]; CC[Ib[3]] < CC[Ib[1]].length * Ib[20]; CC[Ib[3]] += Ib[20]) CC[-Ib[45]][CC[Ib[3]] >> Ib[48]] |= (CC[Ib[1]].charCodeAt(CC[Ib[3]] / Ib[20]) & Ib[42]) << Ib[49] - CC[Ib[3]] % Ib[47];
-                     return CC[-Ib[45]]
-                   }
+                 function lk(...kk) {
+                   var Fk, Ik;
+                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = "", kk[Vi[11]] = -Vi[2]); ++kk[Vi[11]] < kk[Vi[1]].length;) oi(Fk = kk[Vi[1]].charCodeAt(kk[Vi[11]]), Ik = kk[Vi[11]] + Vi[2] < kk[Vi[1]].length ? kk[Vi[1]].charCodeAt(kk[Vi[11]] + Vi[2]) : Vi[1]), Vi[96] <= Fk && Fk <= Vi … [truncated]
+                   return kk[Vi[14]]
+                 }
```

#### 504. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4812-L4815` → after: `L4849-L4853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4849-L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4849-L4853) · [Before (L4812-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4812-L4815)

```diff
-                   function qC(...CC) {
-                     for (eb(CC[Ib[0]] = Ib[2], CC[-Ib[23]] = ""), CC[-Ib[46]] = Ib[1]; CC[-Ib[46]] < CC[Ib[1]].length * Ib[47]; CC[-Ib[46]] += Ib[20]) CC[-Ib[23]] += String.fromCharCode(CC[Ib[1]][CC[-Ib[46]] >> Ib[48]] >>> Ib[49] - CC[-Ib[46]] % Ib[47] & Ib[42]);
-                     return CC[-Ib[23]]
-                   }
+                 function ak(...kk) {
+                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[2]] = Array(kk[Vi[1]].length >> Vi[3])), kk[Vi[3]] = Vi[1]; kk[Vi[3]] < kk[Vi[2]].length; kk[Vi[3]]++) kk[Vi[2]][kk[Vi[3]]] = Vi[1];
+                   for (kk[Vi[3]] = Vi[1]; kk[Vi[3]] < kk[Vi[1]].length * Vi[8]; kk[Vi[3]] += Vi[8]) kk[Vi[2]][kk[Vi[3]] >> Vi[28]] |= (kk[Vi[1]].charCodeAt(kk[Vi[3]] / Vi[8]) & Vi[63]) << Vi[67] - kk[Vi[3]] % Vi[65];
+                   return kk[Vi[2]]
+                 }
```

#### 505. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4817-L4819` → after: `L4855-L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4855-L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4855-L4858) · [Before (L4817-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4817-L4819)

```diff
-                   function FC(...CC) {
-                     return CC[Ib[0]] = Ib[3], CC[Ib[1]] >>> CC[Ib[2]] | CC[Ib[1]] << Ib[47] - CC[Ib[2]]
-                   }
+                 function qk(...kk) {
+                   for (oi(kk[Vi[0]] = Vi[2], kk[-Vi[66]] = ""), kk[Vi[11]] = Vi[1]; kk[Vi[11]] < kk[Vi[1]].length * Vi[65]; kk[Vi[11]] += Vi[8]) kk[-Vi[66]] += String.fromCharCode(kk[Vi[1]][kk[Vi[11]] >> Vi[28]] >>> Vi[67] - kk[Vi[11]] % Vi[65] & Vi[63]);
+                   return kk[-Vi[66]]
+                 }
```

#### 506. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4821-L4823` → after: `L4860-L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4860-L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4860-L4862) · [Before (L4821-L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4821-L4823)

```diff
-                   function WC(...CC) {
-                     return CC[Ib[0]] = Ib[3], CC[Ib[1]] >>> CC[Ib[2]]
-                   }
+                 function Lk(...kk) {
+                   return kk[Vi[0]] = Vi[3], kk[Vi[1]] >>> kk[Vi[2]] | kk[Vi[1]] << Vi[65] - kk[Vi[2]]
+                 }
```

#### 507. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4825-L4827` → after: `L4864-L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4864-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4864-L4866) · [Before (L4825-L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4825-L4827)

```diff
-                   function NC(...CC) {
-                     return CC[Ib[0]] = Ib[4], CC[Ib[1]] & CC[Ib[2]] ^ ~CC[Ib[1]] & CC[Ib[3]]
-                   }
+                 function tk(...kk) {
+                   return kk[Vi[0]] = Vi[3], kk[Vi[1]] >>> kk[Vi[2]]
+                 }
```

#### 508. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4829-L4831` → after: `L4868-L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4868-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4868-L4870) · [Before (L4829-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4829-L4831)

```diff
-                   function MC(CC, zC, ZC) {
-                     return CC & zC ^ CC & ZC ^ zC & ZC
-                   }
+                 function Zk(...kk) {
+                   return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ ~kk[Vi[1]] & kk[Vi[3]]
+                 }
```

#### 509. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4833-L4835` → after: `L4872-L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4872-L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4872-L4874) · [Before (L4833-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4833-L4835)

```diff
-                   function gC(...CC) {
-                     return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[3]) ^ FC(CC[Ib[1]], Ib[110]) ^ FC(CC[Ib[1]], Ib[111])
-                   }
+                 function jk(...kk) {
+                   return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ kk[Vi[1]] & kk[Vi[3]] ^ kk[Vi[2]] & kk[Vi[3]]
+                 }
```

#### 510. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4837-L4839` → after: `L4876-L4878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4876-L4878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4876-L4878) · [Before (L4837-L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4837-L4839)

```diff
-                   function SC(...CC) {
-                     return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[35]) ^ FC(CC[Ib[1]], Ib[112]) ^ FC(CC[Ib[1]], Ib[113])
-                   }
+                 function ek(...kk) {
+                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[3]) ^ Lk(kk[Vi[1]], Vi[108]) ^ Lk(kk[Vi[1]], Vi[109])
+                 }
```

#### 511. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4841-L4843` → after: `L4880-L4882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4880-L4882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4880-L4882) · [Before (L4841-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4841-L4843)

```diff
-                   function pC(CC) {
-                     return FC(CC, Ib[21]) ^ FC(CC, Ib[50]) ^ WC(CC, Ib[4])
-                   }
+                 function wk(kk) {
+                   return Lk(kk, Vi[36]) ^ Lk(kk, Vi[110]) ^ Lk(kk, Vi[25])
+                 }
```

#### 512. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4845-L4847` → after: `L4884-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4884-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4884-L4886) · [Before (L4845-L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4845-L4847)

```diff
-                   function PC(...CC) {
-                     return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[114]) ^ FC(CC[Ib[1]], Ib[52]) ^ WC(CC[Ib[1]], Ib[51])
-                   }
+                 function Hk(...kk) {
+                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[68]) ^ Lk(kk[Vi[1]], Vi[69]) ^ tk(kk[Vi[1]], Vi[4])
+                 }
```

#### 513. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4849-L4856` → after: `L4888-L4890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4888-L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4888-L4890) · [Before (L4849-L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4849-L4856)

```diff
-                   function GC(...zC) {
-                     var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, GC, AC;
-                     for (eb(zC[Ib[0]] = Ib[3], zC[Ib[7]] = new Array(Ib[184], -Ib[185], Ib[186], -Ib[187], Ib[188], -Ib[189], Ib[190], Ib[191]), zC[Ib[32]] = new Array(Ib[54])), eb(zC[Ib[1]][zC[Ib[2]] >> Ib[48]] |= Ib[40] << Ib[49] - zC[Ib[2]] % Ib[47], zC[Ib[1]][(zC[Ib[2]] + Ib[ … [truncated]
-                       for (eb(ZC = zC[Ib[7]][Ib[1]], QC = zC[Ib[7]][Ib[2]], wC = zC[Ib[7]][Ib[3]], bC = zC[Ib[7]][Ib[4]], nC = zC[Ib[7]][Ib[16]], fC = zC[Ib[7]][Ib[48]], oC = zC[Ib[7]][Ib[35]], qC = zC[Ib[7]][Ib[21]]), WC = Ib[1]; WC < Ib[54]; WC++) eb(zC[Ib[32]][WC] = WC < Ib[26 … [truncated]
-                       eb(zC[Ib[7]][Ib[1]] = RC(ZC, zC[Ib[7]][Ib[1]]), zC[Ib[7]][Ib[2]] = RC(QC, zC[Ib[7]][Ib[2]]), zC[Ib[7]][Ib[3]] = RC(wC, zC[Ib[7]][Ib[3]]), zC[Ib[7]][Ib[4]] = RC(bC, zC[Ib[7]][Ib[4]]), zC[Ib[7]][Ib[16]] = RC(nC, zC[Ib[7]][Ib[16]]), zC[Ib[7]][Ib[48]] = RC(fC, z … [truncated]
-                     }
-                     return zC[Ib[7]]
-                   }
+                 function Jk(...kk) {
+                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[111]) ^ Lk(kk[Vi[1]], Vi[71]) ^ tk(kk[Vi[1]], Vi[70])
+                 }
```

#### 514. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4858-L4888` → after: `L4892-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4892-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4892-L4896) · [Before (L4858-L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4858-L4888)

```diff
-                   function RC(...CC) {
-                     return eb(CC[Ib[0]] = Ib[3], CC[Ib[3]] = (CC[Ib[1]] & Ib[55]) + (CC[Ib[2]] & Ib[55]), CC[Ib[32]] = (CC[Ib[1]] >> Ib[26]) + (CC[Ib[2]] >> Ib[26]) + (CC[Ib[3]] >> Ib[26])), CC[Ib[32]] << Ib[26] | CC[Ib[3]] & Ib[55]
-                   }
-                   return eb(CC[Ib[0]] = Ib[1], CC[Ib[29]] = Ib[1], CC[Ib[2]] = ""), CC[-Ib[53]] = new Array(Ib[120], Ib[121], -Ib[122], -Ib[123], Ib[124], Ib[125], -Ib[126], -Ib[127], -Ib[128], Ib[129], Ib[130], Ib[131], Ib[132], -Ib[133], -Ib[134], -Ib[135], -Ib[136], -Ib[137],  … [truncated]
-                     hex: function(...CC) {
-                       return CC[Ib[0]] = Ib[2], bC(function(...CC) {
-                         return CC[Ib[0]] = Ib[2], qC(GC(oC(CC[Ib[1]]), CC[Ib[1]].length * Ib[20]))
-                       }(fC(CC[Ib[1]])))
-                     },
-                     b64: zC,
-                     any: QC,
-                     hex_hmac: function(...CC) {
-                       return CC[Ib[0]] = Ib[3], bC(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])))
-                     },
-                     b64_hmac: zC,
-                     any_hmac: QC
- ... (15 more removed lines; see GitHub link above)
+                 function xk(...Fk) {
+                   var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, xk, Kk;
+                   for (oi(Fk[Vi[0]] = Vi[3], Fk[Vi[14]] = new Array(Vi[181], -Vi[182], Vi[183], -Vi[184], Vi[185], -Vi[186], Vi[187], Vi[188]), Fk[Vi[4]] = new Array(Vi[72])), oi(Fk[Vi[1]][Fk[Vi[2]] >> Vi[28]] |= Vi[61] << Vi[67] - Fk[Vi[2]] % Vi[65], Fk[Vi[1]][(Fk[Vi[2]] + Vi[72 … [truncated]
+                     for (oi(Ik = Fk[Vi[14]][Vi[1]], Xk = Fk[Vi[14]][Vi[2]], Tk = Fk[Vi[14]][Vi[3]], ik = Fk[Vi[14]][Vi[4]], yk = Fk[Vi[14]][Vi[38]], lk = Fk[Vi[14]][Vi[28]], ak = Fk[Vi[14]][Vi[36]], qk = Fk[Vi[14]][Vi[68]]), tk = Vi[1]; tk < Vi[72]; tk++) oi(tk < Vi[50] ? Fk[Vi[4 … [truncated]
+                     oi(Fk[Vi[14]][Vi[1]] = Pk(Ik, Fk[Vi[14]][Vi[1]]), Fk[Vi[14]][Vi[2]] = Pk(Xk, Fk[Vi[14]][Vi[2]]), Fk[Vi[14]][Vi[3]] = Pk(Tk, Fk[Vi[14]][Vi[3]]), Fk[Vi[14]][Vi[4]] = Pk(ik, Fk[Vi[14]][Vi[4]]), Fk[Vi[14]][Vi[38]] = Pk(yk, Fk[Vi[14]][Vi[38]]), Fk[Vi[14]][Vi[28]] = … [truncated]
```

#### 515. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4890-L4941` → after: `L4898-L4899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4898-L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4898-L4899) · [Before (L4890-L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4890-L4941)

```diff
-                 }, console.log((function(...zC) {
-                   return eb(zC[Ib[0]] = Ib[3], zC[Ib[56]] = [], zC[Ib[32]] = zC[Ib[1]].length, zC[Ib[1]].sort(((CC, zC) => CC - zC)), CC(zC[Ib[56]], [], Ib[1], zC[Ib[32]], zC[Ib[1]], zC[Ib[2]])), zC[Ib[56]]
-                 })))
-               }
-               return "KhScuZ9" in vb && RC(), {
-                 [Ib[57]]: MC,
-                 [Ib[58]]: WC[PC]
-               }
-             }
-           }
-           return Ib[9]
-         },
-         MC = (...CC) => (CC[Ib[0]] = Ib[2], "DUxwE4" + Ib[61] in vb && function() {
-           var CC = function(...CC) {
-             eb(CC[Ib[0]] = Ib[2], this.HW = CC[Ib[1]], this.length = Ib[1], this.map = {}, this.head = Ib[9], this.tail = Ib[9])
-           };
- ... (36 more removed lines; see GitHub link above)
+                   return Fk[Vi[14]]
+                 }
```

#### 516. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4943-L4965` → after: `L4901-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4901-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4901-L4926) · [Before (L4943-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4943-L4965)

```diff
-           function wC(...CC) {
-             if (CC[Ib[0]] = Ib[2], !CC[Ib[1]]) return -Ib[2];
-             const zC = wC(CC[Ib[1]].left),
-               ZC = wC(CC[Ib[1]].right),
-               QC = Math.abs(zC - ZC);
-             if (zC === 1 / 0 || ZC === 1 / 0 || QC > Ib[2]) return 1 / 0;
-             return Math.max(zC, ZC) + Ib[2]
-           }
-           CC[Ib[0]] = Ib[1], window[Ib[200] + Ib[201] + Ib[202] + Ib[203]] = {
-             buildCharacterMap: zC,
-             isAnagrams: ZC,
-             isBalanced: QC,
-             getHeightBalanced: wC
-           }
-         }();
-         try {
- ... (7 more removed lines; see GitHub link above)
+                 function Pk(...kk) {
+                   return oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = (kk[Vi[1]] & Vi[74]) + (kk[Vi[2]] & Vi[74]), kk[Vi[4]] = (kk[Vi[1]] >> Vi[50]) + (kk[Vi[2]] >> Vi[50]) + (kk[Vi[3]] >> Vi[50])), kk[Vi[4]] << Vi[50] | kk[Vi[3]] & Vi[74]
+                 }
+                 return oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = Vi[1], kk[Vi[7]] = ""), kk[Vi[73]] = new Array(Vi[117], Vi[118], -Vi[119], -Vi[120], Vi[121], Vi[122], -Vi[123], -Vi[124], -Vi[125], Vi[126], Vi[127], Vi[128], Vi[129], -Vi[130], -Vi[131], -Vi[132], -Vi[133], -Vi[134], Vi[ … [truncated]
+                   hex: function(...kk) {
+                     return kk[Vi[0]] = Vi[2], ik(function(...kk) {
+                       return kk[Vi[0]] = Vi[2], qk(xk(ak(kk[Vi[1]]), kk[Vi[1]].length * Vi[8]))
+                     }(lk(kk[Vi[1]])))
+                   },
+                   b64: Fk,
+                   any: Ik,
+                   hex_hmac: function(...kk) {
+                     return kk[Vi[0]] = Vi[3], ik(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
+                   },
+                   b64_hmac: Fk,
+                   any_hmac: Ik
+ ... (10 more added lines; see GitHub link above)
```

#### 517. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4967-L4991` → after: `L4928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4928) · [Before (L4967-L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4967-L4991)

```diff
-             }, console.log(CC[Ib[60]]))
-           }
-           return "SnmoMkY" in vb && zC(), CC[Ib[1]]()
-         } catch {
-           function ZC(...CC) {
-             function zC() {}
-             CC[Ib[0]] = Ib[1], eb(CC[-Ib[64]] = function(...CC) {
-               for (eb(CC[Ib[0]] = Ib[3], CC[Ib[3]] = Ib[1], CC[Ib[32]] = Ib[1], CC[Ib[16]] = new zC(Ib[1]), CC[-Ib[63]] = CC[Ib[16]], CC[Ib[62]] = CC[Ib[1]], CC[Ib[61]] = CC[Ib[2]]); CC[Ib[62]] !== Ib[9] || CC[Ib[61]] !== Ib[9];) eb(CC[Ib[32]] = (CC[Ib[62]] ? CC[Ib[62]].val : Ib[ … [truncated]
-               return CC[Ib[3]] && (CC[-Ib[63]].next = new zC(CC[Ib[3]])), CC[Ib[16]].next
-             }, console.log(CC[-Ib[64]]))
-           }
-           return "gwds1w" in vb && ZC(), Ib[65]
-         }
-       };
-       let RC = Ib[59];
-       const AC = (...CC) => {
- ... (9 more removed lines; see GitHub link above)
+               "hM_SkO" in Si && ak(), Ek = Vi[30]
```

#### 518. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4993` → after: `L4930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4930) · [Before (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4993)

```diff
-             "RLEwi2" + Ib[220] in vb && zC(), RC = Ib[65]
+             return
```

#### 519. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4995-L5031` → after: `L4932-L4935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4932-L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4932-L4935) · [Before (L4995-L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L4995-L5031)

```diff
-         },
-         xC = (...CC) => {
-           CC[Ib[0]] = Ib[2], "Hp3akai" in vb && function(...CC) {
-             var zC;
-             eb(CC[Ib[0]] = Ib[1], zC = function(CC) {
-               eb(this.HW = CC, this.length = Ib[1], this.map = {}, this.head = Ib[9], this.tail = Ib[9])
-             }, zC.prototype.get = function(...CC) {
-               var zC;
-               return eb(CC[Ib[0]] = Ib[2], zC = this.map[CC[Ib[1]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -Ib[2]
-             }, zC.prototype.put = function(...CC) {
-               eb(CC[Ib[0]] = Ib[3], this.map[CC[Ib[1]]] ? (this.remove(this.map[CC[Ib[1]]]), this.insert(CC[Ib[1]], CC[Ib[2]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[Ib[1]], CC[Ib[2]])) : (this.insert(CC[Ib[1]], CC[Ib[2]]), this.length++))
-             }, zC.prototype.remove = function(...CC) {
-               eb(CC[Ib[0]] = Ib[2], CC[-Ib[72]] = CC[Ib[1]].prev, CC[Ib[32]] = CC[Ib[1]].next), CC[Ib[32]] && (CC[Ib[32]].prev = CC[-Ib[72]]), CC[-Ib[72]] && (CC[-Ib[72]].next = CC[Ib[32]]), this.head === CC[Ib[1]] && (this.head = CC[Ib[32]]), this.tail === CC[Ib[1]] && (this.tai … [truncated]
-             }, zC.prototype.insert = function(...CC) {
-               eb(CC[Ib[0]] = Ib[3], CC[Ib[7]] = new List(CC[Ib[1]], CC[Ib[2]]), this.tail ? (this.tail.next = CC[Ib[7]], CC[Ib[7]].prev = this.tail, this.tail = CC[Ib[7]]) : (this.tail = CC[Ib[7]], this.head = CC[Ib[7]]), this.map[CC[Ib[1]]] = CC[Ib[7]])
-             }, console.log(zC))
- ... (21 more removed lines; see GitHub link above)
+           if (Fk[Vi[1]] !== Vk) return void(zk[Fk[Vi[1]]] = Fk[Vi[2]]);
+           zk[Fk[Vi[1]]] = Vi[30];
+           const Tk = typeof Fk[Vi[2]] === Vi[75] ? Fk[Vi[2]] : "" + Fk[Vi[2]];
+           if (uk[Tk]) {
```

#### 520. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5033` → after: `L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4937) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5033)

```diff
-               eb(CC[Ib[0]] = Ib[1], CC[Ib[194]] = function(...CC) {
+               oi(kk[Vi[0]] = Vi[1], kk[Vi[189]] = function(...kk) {
```

#### 521. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5040-L5045` → after: `L4944-L4949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4944-L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4944-L4949) · [Before (L5040-L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5040-L5045)

```diff
-                     function(CC, zC) {
-                       var ZC, QC, wC, bC, nC, fC, oC, qC, FC = zC.length;
-                       for (ZC = Array(), QC = Array(Math.ceil(CC.length / Ib[3])), nC = Ib[1]; nC < QC.length; nC++) QC[nC] = CC.charCodeAt(nC * Ib[3]) << Ib[20] | CC.charCodeAt(nC * Ib[3] + Ib[2]);
-                       for (; QC.length > Ib[1];) {
-                         for (eb(qC = Array(), oC = Ib[1]), nC = Ib[1]; nC < QC.length; nC++) eb(oC = (oC << Ib[26]) + QC[nC], fC = Math.floor(oC / FC), oC -= fC * FC), (qC.length > Ib[1] || fC > Ib[1]) && (qC[qC.length] = fC);
-                         eb(ZC[ZC.length] = oC, QC = qC)
+                     function(...kk) {
+                       var Fk, Ik, Xk, Tk;
+                       for (oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = kk[Vi[2]].length, kk[-Vi[23]] = Array()), kk[Vi[38]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[Vi[38]].length; Fk++) kk[Vi[38]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]].charCod … [truncated]
+                       for (; kk[Vi[38]].length > Vi[1];) {
+                         for (oi(Tk = Array(), Xk = Vi[1]), Fk = Vi[1]; Fk < kk[Vi[38]].length; Fk++) oi(Xk = (Xk << Vi[50]) + kk[Vi[38]][Fk], Ik = Math.floor(Xk / kk[Vi[3]]), Xk -= Ik * kk[Vi[3]]), (Tk.length > Vi[1] || Ik > Vi[1]) && (Tk[Tk.length] = Ik);
+                         oi(kk[-Vi[23]][kk[-Vi[23]].length] = Xk, kk[Vi[38]] = Tk)
```

#### 522. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5047-L5049` → after: `L4951-L4953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4951-L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4951-L4953) · [Before (L5047-L5049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5047-L5049)

```diff
-                       for (wC = "", nC = ZC.length - Ib[2]; nC >= Ib[1]; nC--) wC += zC.charAt(ZC[nC]);
-                       for (bC = Math.ceil(CC.length * Ib[20] / (Math.log(zC.length) / Math.log(Ib[3]))), nC = wC.length; nC < bC; nC++) wC = zC[Ib[1]] + wC;
-                       return wC
+                       for (kk[Vi[7]] = "", Fk = kk[-Vi[23]].length - Vi[2]; Fk >= Vi[1]; Fk--) kk[Vi[7]] += kk[Vi[2]].charAt(kk[-Vi[23]][Fk]);
+                       for (kk[Vi[36]] = Math.ceil(kk[Vi[1]].length * Vi[8] / (Math.log(kk[Vi[2]].length) / Math.log(Vi[3]))), Fk = kk[Vi[7]].length; Fk < kk[Vi[36]]; Fk++) kk[Vi[7]] = kk[Vi[2]][Vi[1]] + kk[Vi[7]];
+                       return kk[Vi[7]]
```

#### 523. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5054-L5058` → after: `L4958-L4962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4958-L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4958-L4962) · [Before (L5054-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5054-L5058)

```diff
-                   eb(CC[Ib[0]] = Ib[3], CC[Ib[7]] = oC(CC[Ib[1]])), CC[Ib[7]].length > Ib[26] && (CC[Ib[7]] = GC(CC[Ib[7]], CC[Ib[1]].length * Ib[20]));
-                   var zC = Array(Ib[26]),
-                     ZC = Array(Ib[26]);
-                   for (CC[Ib[4]] = Ib[1]; CC[Ib[4]] < Ib[26]; CC[Ib[4]]++) eb(zC[CC[Ib[4]]] = CC[Ib[7]][CC[Ib[4]]] ^ Ib[77], ZC[CC[Ib[4]]] = CC[Ib[7]][CC[Ib[4]]] ^ Ib[78]);
-                   return CC[Ib[79]] = GC(zC.concat(oC(CC[Ib[2]])), Ib[28] + CC[Ib[2]].length * Ib[20]), qC(GC(ZC.concat(CC[Ib[79]]), ib(Ib[27], Ib[28], Ib[80])))
+                   oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = ak(kk[Vi[1]])), kk[Vi[3]].length > Vi[50] && (kk[Vi[3]] = xk(kk[Vi[3]], kk[Vi[1]].length * Vi[8]));
+                   var Fk = Array(Vi[50]),
+                     Ik = Array(Vi[50]);
+                   for (kk[Vi[4]] = Vi[1]; kk[Vi[4]] < Vi[50]; kk[Vi[4]]++) oi(Fk[kk[Vi[4]]] = kk[Vi[3]][kk[Vi[4]]] ^ Vi[77], Ik[kk[Vi[4]]] = kk[Vi[3]][kk[Vi[4]]] ^ Vi[78]);
+                   return kk[-Vi[79]] = xk(Fk.concat(ak(kk[Vi[2]])), Vi[53] + kk[Vi[2]].length * Vi[8]), qk(xk(Ik.concat(kk[-Vi[79]]), zi(Vi[52], Vi[53], Vi[54])))
```

#### 524. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5061-L5062` → after: `L4965-L4966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4965-L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4965-L4966) · [Before (L5061-L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5061-L5062)

```diff
-                 function bC(zC) {
-                   var ZC, QC, bC, nC;
+                 function ik(...Fk) {
+                   Fk[Vi[0]] = Vi[2];
```

#### 525. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5064` → after: `L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4968) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5064)

```diff
-                     CC[Ib[81]]
+                     kk[Vi[14]]
```

#### 526. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5066` → after: `L4970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4970) · [Before (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5066)

```diff
-                     CC[Ib[81]] = Ib[1]
+                     kk[Vi[14]] = Vi[1]
```

#### 527. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5068-L5069` → after: `L4972-L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4972-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4972-L4973) · [Before (L5068-L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5068-L5069)

```diff
-                   for (eb(ZC = CC[Ib[81]] ? Ib[30] + Ib[82] + Ib[83] : Ib[30] + Ib[84] + Ib[85], QC = "", bC = void 0), nC = Ib[1]; nC < zC.length; nC++) eb(bC = zC.charCodeAt(nC), QC += ZC.charAt(bC >>> Ib[16] & Ib[33]) + ZC.charAt(bC & Ib[33]));
-                   return QC
+                   for (oi(Fk[Vi[86]] = kk[Vi[14]] ? Vi[55] + Vi[80] + Vi[81] : Vi[55] + Vi[82] + Vi[83], Fk[Vi[3]] = "", Fk[-Vi[84]] = Vi[12]), Fk[Vi[85]] = Vi[1]; Fk[Vi[85]] < Fk[Vi[1]].length; Fk[Vi[85]]++) oi(Fk[-Vi[84]] = Fk[Vi[1]].charCodeAt(Fk[Vi[85]]), Fk[Vi[3]] += Fk[Vi[8 … [truncated]
+                   return Fk[Vi[3]]
```

#### 528. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5075` → after: `L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4979) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5075)

```diff
-                     CC[Ib[86]]
+                     kk[Vi[2]]
```

#### 529. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5077` → after: `L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4981) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5077)

```diff
-                     CC[Ib[86]] = ""
+                     kk[Vi[2]] = ""
```

#### 530. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5079-L5080` → after: `L4983-L4984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4983-L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4983-L4984) · [Before (L5079-L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5079-L5080)

```diff
-                   for (eb(zC[Ib[94]] = Ib[87] + Ib[88] + Ib[89] + Ib[90] + Ib[91] + Ib[92], zC[Ib[3]] = "", zC[Ib[93]] = zC[Ib[1]].length), zC[Ib[16]] = Ib[1]; zC[Ib[16]] < zC[Ib[93]]; zC[Ib[16]] += Ib[4])
-                     for (zC[Ib[48]] = zC[Ib[1]].charCodeAt(zC[Ib[16]]) << Ib[26] | (zC[Ib[16]] + Ib[2] < zC[Ib[93]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[2]) << Ib[20] : Ib[1]) | (zC[Ib[16]] + Ib[3] < zC[Ib[93]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[3]) : Ib[1]), zC[Ib[35]] = I … [truncated]
+                   for (oi(Fk[Vi[45]] = Vi[87] + Vi[88] + Vi[89] + Vi[90] + Vi[91] + Vi[92] + Vi[93] + Vi[94], Fk[Vi[3]] = "", Fk[Vi[4]] = Fk[Vi[1]].length), Fk[Vi[7]] = Vi[1]; Fk[Vi[7]] < Fk[Vi[4]]; Fk[Vi[7]] += Vi[4])
+                     for (Fk[-Vi[95]] = Fk[Vi[1]].charCodeAt(Fk[Vi[7]]) << Vi[50] | (Fk[Vi[7]] + Vi[2] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[2]) << Vi[8] : Vi[1]) | (Fk[Vi[7]] + Vi[3] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[3]) : Vi[1]), Fk[Vi[36]] = Vi[1]; F … [truncated]
```

#### 531. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5091-L5093` → after: `L4989-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4989-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4989-L4990) · [Before (L5091-L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5091-L5093)

```diff
-                   var zC, ZC = Array(CC.length >> Ib[3]);
-                   for (zC = Ib[1]; zC < ZC.length; zC++) ZC[zC] = Ib[1];
-                   for (zC = Ib[1]; zC < CC.length * Ib[20]; zC += Ib[20]) ZC[zC >> Ib[48]] |= (CC.charCodeAt(zC / Ib[20]) & Ib[42]) << Ib[49] - zC % Ib[47];
+                   var Fk, Ik, Xk, Tk = "";
+                   for (Fk = -Vi[2]; ++Fk < kk.length;) oi(Ik = kk.charCodeAt(Fk), Xk = Fk + Vi[2] < kk.length ? kk.charCodeAt(Fk + Vi[2]) : Vi[1]), Vi[96] <= Ik && Ik <= Vi[97] && Vi[98] <= Xk && Xk <= Vi[99] && oi(Ik = Vi[100] + ((Ik & Vi[59]) << Vi[70]) + (Xk & Vi[59]), Fk++),  … [truncated]
```

#### 532. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5098-L5099` → after: `L4995-L4997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4995-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L4995-L4997) · [Before (L5098-L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5098-L5099)

```diff
-                   for (eb(CC[Ib[0]] = Ib[2], CC[Ib[7]] = ""), CC[Ib[109]] = Ib[1]; CC[Ib[109]] < CC[Ib[1]].length * Ib[47]; CC[Ib[109]] += Ib[20]) CC[Ib[7]] += String.fromCharCode(CC[Ib[1]][CC[Ib[109]] >> Ib[48]] >>> Ib[49] - CC[Ib[109]] % Ib[47] & Ib[42]);
-                   return CC[Ib[7]]
+                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Array(kk[Vi[1]].length >> Vi[3])), kk[-Vi[107]] = Vi[1]; kk[-Vi[107]] < kk[Vi[14]].length; kk[-Vi[107]]++) kk[Vi[14]][kk[-Vi[107]]] = Vi[1];
+                   for (kk[-Vi[107]] = Vi[1]; kk[-Vi[107]] < kk[Vi[1]].length * Vi[8]; kk[-Vi[107]] += Vi[8]) kk[Vi[14]][kk[-Vi[107]] >> Vi[28]] |= (kk[Vi[1]].charCodeAt(kk[-Vi[107]] / Vi[8]) & Vi[63]) << Vi[67] - kk[-Vi[107]] % Vi[65];
+                   return kk[Vi[14]]
```

#### 533. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5102-L5103` → after: `L5000-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5000-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5000-L5007) · [Before (L5102-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5102-L5103)

```diff
-                 function FC(...CC) {
-                   return CC[Ib[0]] = Ib[3], CC[Ib[1]] >>> CC[Ib[2]] | CC[Ib[1]] << Ib[47] - CC[Ib[2]]
+                 function qk(kk) {
+                   var Fk, Ik = "";
+                   for (Fk = Vi[1]; Fk < kk.length * Vi[65]; Fk += Vi[8]) Ik += String.fromCharCode(kk[Fk >> Vi[28]] >>> Vi[67] - Fk % Vi[65] & Vi[63]);
+                   return Ik
+                 }
+ 
+                 function Lk(kk, Fk) {
+                   return kk >>> Fk | kk << Vi[65] - Fk
```

#### 534. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5110-L5111` → after: `L5014-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5014-L5015) · [Before (L5110-L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5110-L5111)

```diff
-                 function NC(CC, zC, ZC) {
-                   return CC & zC ^ ~CC & ZC
+                 function Zk(...kk) {
+                   return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ ~kk[Vi[1]] & kk[Vi[3]]
```

#### 535. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5119` → after: `L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5023) · [Before (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5119)

```diff
-                   return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[3]) ^ FC(CC[Ib[1]], Ib[110]) ^ FC(CC[Ib[1]], Ib[111])
+                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[3]) ^ Lk(kk[Vi[1]], Vi[108]) ^ Lk(kk[Vi[1]], Vi[109])
```

#### 536. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5123` → after: `L5027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5027) · [Before (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5123)

```diff
-                   return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[35]) ^ FC(CC[Ib[1]], Ib[112]) ^ FC(CC[Ib[1]], Ib[113])
+                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[36]) ^ Lk(kk[Vi[1]], Vi[110]) ^ Lk(kk[Vi[1]], Vi[25])
```

#### 537. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5126-L5127` → after: `L5030-L5031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5030-L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5030-L5031) · [Before (L5126-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5126-L5127)

```diff
-                 function pC(...CC) {
-                   return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[21]) ^ FC(CC[Ib[1]], Ib[50]) ^ WC(CC[Ib[1]], Ib[4])
+                 function Hk(kk) {
+                   return Lk(kk, Vi[68]) ^ Lk(kk, Vi[69]) ^ tk(kk, Vi[4])
```

#### 538. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5131` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5035) · [Before (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5131)

```diff
-                   return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[114]) ^ FC(CC[Ib[1]], Ib[52]) ^ WC(CC[Ib[1]], Ib[51])
+                   return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[111]) ^ Lk(kk[Vi[1]], Vi[71]) ^ tk(kk[Vi[1]], Vi[70])
```

#### 539. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5136-L5138` → after: `L5040-L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5040-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5040-L5042) · [Before (L5136-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5136-L5138)

```diff
-                   for (eb(zC[Ib[0]] = Ib[3], zC[Ib[193]] = new Array(Ib[184], -Ib[185], Ib[186], -Ib[187], Ib[188], -Ib[189], Ib[190], Ib[191]), zC[Ib[32]] = new Array(Ib[54])), eb(zC[Ib[1]][zC[Ib[2]] >> Ib[48]] |= Ib[40] << Ib[49] - zC[Ib[2]] % Ib[47], zC[Ib[1]][(zC[Ib[2]] + Ib[ … [truncated]
-                     for (eb(ZC = zC[Ib[193]][Ib[1]], QC = zC[Ib[193]][Ib[2]], wC = zC[Ib[193]][Ib[3]], bC = zC[Ib[193]][Ib[4]], nC = zC[Ib[193]][Ib[16]], fC = zC[Ib[193]][Ib[48]], oC = zC[Ib[193]][Ib[35]], qC = zC[Ib[193]][Ib[21]]), WC = Ib[1]; WC < Ib[54]; WC++) eb(zC[Ib[32]][WC … [truncated]
-                     eb(zC[Ib[193]][Ib[1]] = RC(ZC, zC[Ib[193]][Ib[1]]), zC[Ib[193]][Ib[2]] = RC(QC, zC[Ib[193]][Ib[2]]), zC[Ib[193]][Ib[3]] = RC(wC, zC[Ib[193]][Ib[3]]), zC[Ib[193]][Ib[4]] = RC(bC, zC[Ib[193]][Ib[4]]), zC[Ib[193]][Ib[16]] = RC(nC, zC[Ib[193]][Ib[16]]), zC[Ib[193] … [truncated]
+                   for (oi(Fk[Vi[0]] = Vi[3], Fk[Vi[116]] = new Array(Vi[181], -Vi[182], Vi[183], -Vi[184], Vi[185], -Vi[186], Vi[187], Vi[188]), Fk[Vi[11]] = new Array(Vi[72])), oi(Fk[Vi[1]][Fk[Vi[2]] >> Vi[28]] |= Vi[61] << Vi[67] - Fk[Vi[2]] % Vi[65], Fk[Vi[1]][(Fk[Vi[2]] + Vi[ … [truncated]
+                     for (oi(Ik = Fk[Vi[116]][Vi[1]], Xk = Fk[Vi[116]][Vi[2]], Tk = Fk[Vi[116]][Vi[3]], ik = Fk[Vi[116]][Vi[4]], yk = Fk[Vi[116]][Vi[38]], lk = Fk[Vi[116]][Vi[28]], ak = Fk[Vi[116]][Vi[36]], qk = Fk[Vi[116]][Vi[68]]), tk = Vi[1]; tk < Vi[72]; tk++) oi(tk < Vi[50] ? … [truncated]
+                     oi(Fk[Vi[116]][Vi[1]] = Pk(Ik, Fk[Vi[116]][Vi[1]]), Fk[Vi[116]][Vi[2]] = Pk(Xk, Fk[Vi[116]][Vi[2]]), Fk[Vi[116]][Vi[3]] = Pk(Tk, Fk[Vi[116]][Vi[3]]), Fk[Vi[116]][Vi[4]] = Pk(ik, Fk[Vi[116]][Vi[4]]), Fk[Vi[116]][Vi[38]] = Pk(yk, Fk[Vi[116]][Vi[38]]), Fk[Vi[116] … [truncated]
```

#### 540. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5140` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5044) · [Before (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5140)

```diff
-                   return zC[Ib[193]]
+                   return Fk[Vi[116]]
```

#### 541. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5143-L5145` → after: `L5047-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5047-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5047-L5048) · [Before (L5143-L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5143-L5145)

```diff
-                 function RC(CC, zC) {
-                   var ZC = (CC & Ib[55]) + (zC & Ib[55]);
-                   return (CC >> Ib[26]) + (zC >> Ib[26]) + (ZC >> Ib[26]) << Ib[26] | ZC & Ib[55]
+                 function Pk(...kk) {
+                   return oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = (kk[Vi[1]] & Vi[74]) + (kk[Vi[2]] & Vi[74]), kk[Vi[11]] = (kk[Vi[1]] >> Vi[50]) + (kk[Vi[2]] >> Vi[50]) + (kk[Vi[14]] >> Vi[50])), kk[Vi[11]] << Vi[50] | kk[Vi[14]] & Vi[74]
```

#### 542. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5147-L5151` → after: `L5050-L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5050-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5050-L5054) · [Before (L5147-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5147-L5151)

```diff
-                 return eb(CC[Ib[0]] = Ib[1], CC[Ib[81]] = Ib[1], CC[Ib[86]] = ""), CC[Ib[15]] = new Array(Ib[120], Ib[121], -Ib[122], -Ib[123], Ib[124], Ib[125], -Ib[126], -Ib[127], -Ib[128], Ib[129], Ib[130], Ib[131], Ib[132], -Ib[133], -Ib[134], -Ib[135], -Ib[136], -Ib[137], Ib … [truncated]
-                   hex: function(...CC) {
-                     return CC[Ib[0]] = Ib[2], bC(function(CC) {
-                       return qC(GC(oC(CC), CC.length * Ib[20]))
-                     }(fC(CC[Ib[1]])))
+                 return oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = Vi[1], kk[Vi[2]] = ""), kk[Vi[22]] = new Array(Vi[117], Vi[118], -Vi[119], -Vi[120], Vi[121], Vi[122], -Vi[123], -Vi[124], -Vi[125], Vi[126], Vi[127], Vi[128], Vi[129], -Vi[130], -Vi[131], -Vi[132], -Vi[133], -Vi[134], Vi[ … [truncated]
+                   hex: function(kk) {
+                     return ik(function(...kk) {
+                       return kk[Vi[0]] = Vi[2], qk(xk(ak(kk[Vi[1]]), kk[Vi[1]].length * Vi[8]))
+                     }(lk(kk)))
```

#### 543. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5161-L5191` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5064) · [Before (L5161-L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5161-L5191)

```diff
-               }(), console.log(CC[Ib[194]]))
-             }
-             return "rDwrj8" in vb && QC(), Ib[8]
-           }
-         },
-         JC = (...CC) => {
-           CC[Ib[0]] = Ib[2], "PbUMv6" in vb && function(...CC) {
-             eb(CC[Ib[0]] = Ib[1], CC[-Ib[195]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", CC[Ib[2]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + Ib[198], CC[Ib[19]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)] … [truncated]
-           }();
-           try {
-             function zC(...CC) {
-               eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...zC) {
-                 return eb(zC[Ib[0]] = Ib[3], zC[Ib[7]] = [], zC[Ib[4]] = zC[Ib[1]].length, zC[Ib[1]].sort(((CC, zC) => CC - zC)), CC[Ib[196]](zC[Ib[7]], [], Ib[1], zC[Ib[4]], zC[Ib[1]], zC[Ib[2]])), zC[Ib[7]]
-               }, CC[Ib[196]] = function(...zC) {
-                 if (eb(zC[Ib[0]] = Ib[35], zC[Ib[7]] = Ib[9]), !(zC[Ib[48]] < Ib[1])) {
-                   if (zC[Ib[48]] === Ib[1]) return zC[Ib[1]].push(zC[Ib[2]]);
- ... (15 more removed lines; see GitHub link above)
+               }(), console.log(kk[Vi[189]]))
```

#### 544. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5193-L5213` → after: `L5066-L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5066-L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5066-L5068) · [Before (L5193-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5193-L5213)

```diff
-             return "f93q8Z" in vb && ZC(), Ib[59]
-           }
-         },
-         IC = (0, mQ[Ib[10]])("a29qbzYzb25i"),
-         iC = (0, mQ[Ib[197]])(Ib[9]);
-       let vC = Ib[9],
-         eC = Ib[59],
-         hC = Ib[59];
-       const KC = (0, mQ[Ib[197]])(Ib[9]);
-       let YC = Ib[1];
-       const dC = (0, mQ[Ib[197]])(Ib[9]);
-       let mC = Ib[1];
-       const HC = (0, mQ[Ib[197]])(Ib[9]);
-       let EC = Ib[59],
-         lC = Ib[59];
-       const XC = (...zC) => {
- ... (5 more removed lines; see GitHub link above)
+             "oOVuMd" in Si && qk()
+           } else {
+             if ((Vi[1], MT[Vi[228]])(Tk)) {
```

#### 545. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5216-L5221` → after: `L5077-L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5077-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5077-L5202) · [Before (L5216-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5216-L5221)

```diff
-                   if (CC[Ib[0]] = Ib[2], !CC[Ib[1]]) return -Ib[2];
-                   const ZC = zC(CC[Ib[1]].left),
-                     QC = zC(CC[Ib[1]].right),
-                     wC = Math.abs(ZC - QC);
-                   if (ZC === 1 / 0 || QC === 1 / 0 || wC > Ib[2]) return 1 / 0;
-                   return Math.max(ZC, QC) + Ib[2]
+                   oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = function(...kk) {
+                     function Fk(kk, Fk) {
+                       return yk(Tk(lk(kk), lk(Fk)))
+                     }
+ 
+                     function Ik(kk, Fk, Ik) {
+                       return function(...kk) {
+                         var Fk, Ik, Xk, Tk;
+                         for (oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = kk[Vi[2]].length, kk[Vi[11]] = Array()), kk[-Vi[196]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[-Vi[196]].length; Fk++) kk[-Vi[196]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]] … [truncated]
+                         for (; kk[-Vi[196]].length > Vi[1];) {
+                           for (oi(Tk = Array(), Xk = Vi[1]), Fk = Vi[1]; Fk < kk[-Vi[196]].length; Fk++) oi(Xk = (Xk << Vi[50]) + kk[-Vi[196]][Fk], Ik = Math.floor(Xk / kk[Vi[14]]), Xk -= Ik * kk[Vi[14]]), (Tk.length > Vi[1] || Ik > Vi[1]) && (Tk[Tk.length] = Ik);
+                           oi(kk[Vi[11]][kk[Vi[11]].length] = Xk, kk[-Vi[196]] = Tk)
+                         }
+                         for (kk[Vi[28]] = "", Fk = kk[Vi[11]].length - Vi[2]; Fk >= Vi[1]; Fk--) kk[Vi[28]] += kk[Vi[2]].charAt(kk[Vi[11]][Fk]);
+                         for (kk[Vi[36]] = Math.ceil(kk[Vi[1]].length * Vi[8] / (Math.log(kk[Vi[2]].length) / Math.log(Vi[3]))), Fk = kk[Vi[28]].length; Fk < kk[Vi[36]]; Fk++) kk[Vi[28]] = kk[Vi[2]][Vi[1]] + kk[Vi[28]];
+                         return kk[Vi[28]]
+ ... (110 more added lines; see GitHub link above)
```

#### 546. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5223-L5241` → after: `L5204-L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5204-L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5204-L5211) · [Before (L5223-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5223-L5241)

```diff
-                 CC[Ib[0]] = Ib[1], window[Ib[200] + Ib[201] + Ib[202] + Ib[203]] = {
-                   buildCharacterMap: function(...CC) {
-                     CC[Ib[0]] = Ib[2];
-                     const zC = {};
-                     for (let ZC of CC[Ib[1]].replace(/[^w]/g, "").toLowerCase()) zC[ZC] = zC[ZC] + Ib[2] || Ib[2];
-                     return zC
-                   },
-                   isAnagrams: function(...CC) {
-                     CC[Ib[0]] = Ib[3];
-                     const zC = buildCharMap(CC[Ib[1]]),
-                       ZC = buildCharMap(CC[Ib[2]]);
-                     for (let QC in zC)
-                       if (zC[QC] !== ZC[QC]) return Ib[59];
-                     return Object.keys(zC).length !== Object.keys(ZC).length ? Ib[59] : Ib[65]
-                   },
-                   isBalanced: function(...CC) {
- ... (3 more removed lines; see GitHub link above)
+                 "isDI4a" in Si && tk(), oi(uk[Tk] = Vi[30], Ok[nk++] = Tk, bk ||= (Vi[1], MT[Vi[203]])(Tk))
+               } else {
+                 function Zk(...kk) {
+                   oi(kk[Vi[0]] = Vi[1], kk[Vi[11]] = function(...Fk) {
+                     return oi(Fk[Vi[0]] = Vi[4], Fk[Vi[4]] = {}), Fk[Vi[3]].length !== Fk[Vi[1]].length + Fk[Vi[2]].length ? Vi[33] : kk[Vi[38]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Vi[1], Vi[1], Vi[1], Fk[Vi[4]])
+                   }, kk[Vi[38]] = function(...Fk) {
+                     return oi(Fk[Vi[0]] = Vi[68], Fk[Vi[14]] = Vi[33]), Fk[Vi[28]] >= Fk[Vi[3]].length ? Vi[30] : Fk[Vi[36]]["" + Fk[Vi[4]] + Fk[Vi[38]] + Fk[Vi[28]]] !== Vi[12] ? Fk[Vi[36]]["" + Fk[Vi[4]] + Fk[Vi[38]] + Fk[Vi[28]]] : (Fk[Vi[3]][Fk[Vi[28]]] === Fk[Vi[1]][Fk[Vi[4] … [truncated]
+                   }, console.log(kk[Vi[11]]))
```

#### 547. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5244-L5245` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5215) · [Before (L5244-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5244-L5245)

```diff
-               "SM0Bs2" in vb && bC(), vC = typeof zC[Ib[2]] === Ib[233] ? zC[Ib[2]] : -Ib[2]
-             } else {
+             else {
```

#### 548. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5247` → after: `L5217-L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5217-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5217-L5227) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5247)

```diff
-                 eb(CC[Ib[0]] = Ib[1], CC[-Ib[204]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", CC[-Ib[34]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + Ib[198], CC[-Ib[205]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c … [truncated]
+                 oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = function(...kk) {
+                   for (oi(kk[Vi[0]] = Vi[2], kk[Vi[2]] = kk[Vi[1]].length, kk[Vi[3]] = [], kk[-Vi[204]] = Vi[1]), kk[Vi[38]] = Vi[1]; kk[Vi[38]] < kk[Vi[2]]; kk[Vi[38]]++) kk[Vi[3]].push(kk[Vi[38]] !== Vi[1] && kk[Vi[1]][kk[Vi[38]]] > kk[Vi[1]][kk[Vi[38]] - Vi[2]] ? kk[Vi[3]][kk[ … [truncated]
+                   for (kk[Vi[28]] = kk[Vi[2]] - Vi[2]; kk[Vi[28]] >= Vi[1]; kk[Vi[28]]--) kk[Vi[28]] !== kk[Vi[2]] - Vi[2] && kk[Vi[1]][kk[Vi[28]]] > kk[Vi[1]][kk[Vi[28]] + Vi[2]] && (kk[Vi[3]][kk[Vi[28]]] = Math.max(kk[Vi[3]][kk[Vi[28]]], kk[Vi[3]][kk[Vi[28]] + Vi[2]] + Vi[2])), … [truncated]
+                   return kk[-Vi[204]]
+                 }, console.log(kk[Vi[14]]))
+               }
+               if ("lkkLmq" + Vi[5] in Si && jk(), pk < 4) {
+                 function ek(...kk) {
+                   kk[Vi[0]] = Vi[1]
+                 }
+                 "MWXvlW" + Vi[218] in Si && ek(), oi(uk[Tk] = Vi[30], Gk[pk++] = Tk)
```

#### 549. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5260` → after: `L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5232) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5260)

```diff
-         cC = (0, Cb[Ib[215]])(CC),
+         Ck = (Vi[1], ki[Vi[239]])(kk),
```

#### 550. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5265` → after: `L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5237) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5265)

```diff
-             return Ib[8]
+             return Vi[12]
```

#### 551. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5268-L5270` → after: `L5240-L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5240-L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5240-L5251) · [Before (L5268-L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5268-L5270)

```diff
-       if (JC((() => {
-           wC[CC] = XC
-         })), typeof uC === Ib[209] + Ib[210]) {
+       if (sk(((...Fk) => {
+           Fk[Vi[0]] = Vi[1], "ob5xnP_" in Si && (module.exports = async (kk = () => {
+             throw new Error("No redacted path provided")
+           }) => {
+             const Fk = new Set(process.argv.slice(Vi[3]));
+             if (!Fk.has("--version")) {
+               if (Fk.size !== Vi[2]) return Vi[33];
+               if (!Fk.has("-v")) return Vi[33]
+             }
+             return await (async () => void 0 === await kk() ? " (local)" : "")(), Vi[30]
+           }), Tk[kk] = Uk
+         })), typeof Nk === Vi[205] + Vi[206]) {
```

#### 552. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5279` → after: `L5260-L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5260-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5260-L5281) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5279)

```diff
-           for (const ZC in zC)(0, mQ[Ib[211]])(mQ[Ib[221]], zC, [ZC]) && ZC !== CC && XC(ZC, zC[ZC])
+           for (const Ik in Fk) {
+             function Xk(...kk) {
+               kk[Vi[0]] = Vi[1]
+             }
+             if ("xjEU5b" + Vi[217] in Si && Xk(), (Vi[1], pX[Vi[207]])(pX[Vi[220]], Fk, [Ik]) && Ik !== kk) {
+               function Tk(...kk) {
+                 oi(kk[Vi[0]] = Vi[1], kk[-Vi[27]] = function(Fk, Ik) {
+                   return kk[Vi[2]]({}, Fk, Ik)
+                 }, kk[Vi[2]] = function(...Fk) {
+                   if (oi(Fk[Vi[0]] = Vi[4], Fk[Vi[14]] = {}), Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] !== Vi[12]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]];
+                   if (Fk[Vi[2]] === Fk[Vi[3]]) return Vi[30];
+                   for (Fk[-Vi[208]] = Vi[1]; Fk[-Vi[208]] < Fk[Vi[2]].length; Fk[-Vi[208]]++) Fk[Vi[14]][Fk[Vi[2]][Fk[-Vi[208]]]] === Vi[12] && (Fk[Vi[14]][Fk[Vi[2]][Fk[-Vi[208]]]] = Vi[1]), Fk[Vi[14]][Fk[Vi[3]][Fk[-Vi[208]]]] === Vi[12] && (Fk[Vi[14]][Fk[Vi[3]][Fk[-Vi[208]]]] =  … [truncated]
+                   for (Fk[Vi[28]] in Fk[Vi[14]])
+                     if (Fk[Vi[14]][Fk[Vi[28]]] !== Vi[1]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33];
+                   for (Fk[Vi[36]] = Vi[2]; Fk[Vi[36]] < Fk[Vi[2]].length; Fk[Vi[36]]++)
+                     if (kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[Vi[36]]), Fk[Vi[3]].substr(Vi[1], Fk[Vi[36]])) && kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Fk[Vi[36]]), Fk[Vi[3]].substr(Fk[Vi[36]])) || kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[Vi[36]]), Fk[Vi[3]].substr … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 553. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5283-L5286` → after: `L5285-L5288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5285-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5285-L5288) · [Before (L5283-L5286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5283-L5286)

```diff
-       let sC = Ib[59];
-       const TC = (...zC) => (zC[Ib[0]] = Ib[1], eC ? Ib[65] : (eb(zC[Ib[7]] = Ib[59], sC = !JC((() => {
-           zC[Ib[7]] = wC[CC] !== XC
-         }))), zC[Ib[7]])),
+       let Wk = Vi[33];
+       const fk = (...Fk) => (Fk[Vi[0]] = Vi[1], vk ? Vi[30] : (oi(Fk[Vi[14]] = Vi[33], Wk = !sk((() => {
+           Fk[Vi[14]] = Tk[kk] !== Uk
+         }))), Fk[Vi[14]])),
```

#### 554. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5289-L5290` → after: `L5291-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5291-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5291-L5292) · [Before (L5289-L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5289-L5290)

```diff
-           const ZC = (0, mQ.K)(wC, CC);
-           return (ZC === Ib[9] || void 0 === ZC ? void 0 : ZC.configurable) !== Ib[59] || typeof ZC[Ib[236]] !== Ib[209] + Ib[210] || vC !== rC
+           const Ik = (Vi[1], pX.L)(Tk, kk);
+           return (Ik === Vi[15] || Ik === void Vi[1] ? void Vi[1] : Ik.configurable) !== Vi[33] || typeof Ik[Vi[233]] !== Vi[205] + Vi[206] || Sk !== ck
```

#### 555. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5295` → after: `L5297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5297) · [Before (L5295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5295)

```diff
-             return navigator[Ib[230] + "tSub"]
+             return navigator[Vi[227] + "tSub"]
```

#### 556. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5302` → after: `L5304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5304) · [Before (L5302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5302)

```diff
-         LC = yC === Ib[9] ? ((...CC) => {
+         mk = gk === Vi[15] ? ((...kk) => {
```

#### 557. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5304-L5306` → after: `L5306-L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5306-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5306-L5307) · [Before (L5304-L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5304-L5306)

```diff
-           const zC = Ib[68];
-           eb(CC[Ib[7]] = Ib[59], CC[Ib[2]] = zC - Ib[2]);
-           const ZC = TextDecoder[Ib[212] + Ib[213]][Ib[214]],
+           oi(kk[Vi[14]] = Vi[33], kk[Vi[209]] = 60 - Vi[2]);
+           const Fk = TextDecoder[Vi[210] + Vi[211]][Vi[212]],
```

#### 558. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5308` → after: `L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5309) · [Before (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5308)

```diff
-               CC[Ib[2]]++, CC[Ib[2]] === zC && (Sb((() => MC(Ib[59]))) && (CC[Ib[7]] = Ib[65]), CC[Ib[2]] = Ib[1]);
+               kk[Vi[209]]++, 60 === kk[Vi[209]] && (wi((() => jk(Vi[33]))) && (kk[Vi[14]] = Vi[30]), kk[Vi[209]] = Vi[1]);
```

#### 559. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5310` → after: `L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5311) · [Before (L5310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5310)

```diff
-               return (0, mQ[Ib[211]])(ZC, this, wC)
+               return (Vi[1], pX[Vi[207]])(Fk, this, Xk)
```

#### 560. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5313-L5318` → after: `L5314-L5319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5314-L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5314-L5319) · [Before (L5313-L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5313-L5318)

```diff
-             TextDecoder[Ib[212] + Ib[213]][Ib[214]] = QC
-           })), () => CC[Ib[7]] ? Ib[3] : Pb((() => TextDecoder[Ib[212] + Ib[213]][Ib[214]] !== QC ? Ib[35] : Ib[1]))
-         })() : () => Pb((() => yC[Ib[228] + Ib[229]]())),
-         UC = (0, Iz[Ib[215]])(),
-         BC = (0, mQ[Ib[197]])(Ib[9]),
-         OC = (0, mQ[Ib[197]])(Ib[9]);
+             TextDecoder[Vi[210] + Vi[211]][Vi[212]] = Ik
+           })), () => kk[Vi[14]] ? Vi[3] : Ji((() => TextDecoder[Vi[210] + Vi[211]][Vi[212]] !== Ik ? Vi[36] : Vi[1]))
+         })() : () => Ji((() => gk[Vi[225] + Vi[226]]())),
+         hk = (Vi[1], zF[Vi[203]])(),
+         rk = (Vi[1], pX[Vi[42]])(Vi[15]),
+         Dk = (Vi[1], pX[Vi[42]])(Vi[15]);
```

#### 561. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5322-L5327` → after: `L5323-L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5323-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5323-L5328) · [Before (L5322-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5322-L5327)

```diff
-       const zz = (0, mQ[Ib[197]])(Ib[9]),
-         Zz = (0, mQ[Ib[197]])(Ib[9]);
-       let Qz = Ib[9],
-         wz = (0, mQ[Ib[197]])(Ib[9]);
-       const bz = (...CC) => {
-           eb(CC[Ib[0]] = Ib[3], BC[kC] = CC[Ib[1]], OC[kC] = CC[Ib[2]], kC++)
+       const IF = (Vi[1], pX[Vi[42]])(Vi[15]),
+         XF = (Vi[1], pX[Vi[42]])(Vi[15]);
+       let TF = Vi[15],
+         iF = (Vi[1], pX[Vi[42]])(Vi[15]);
+       const yF = (kk, Fk) => {
+           oi(rk[Mk] = kk, Dk[Mk] = Fk, Mk++)
```

#### 562. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5329-L5331` → after: `L5330-L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5330-L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5330-L5332) · [Before (L5329-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5329-L5331)

```diff
-         nz = (...CC) => (eb(CC[Ib[0]] = Ib[2], CC[-Ib[41]] = Ib[8]), (CC[-Ib[41]] = (OC[CC[Ib[1]]] ? Zz : zz)[BC[CC[Ib[1]]]]) !== Ib[9] && void 0 !== CC[-Ib[41]] ? CC[-Ib[41]] : -Ib[2]),
-         fz = (0, mQ[Ib[10]])("d2lvNjQz"),
-         oz = (0, mQ[Ib[10]])("amtsa2plZndu"),
+         lF = (...kk) => (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[12]), (kk[Vi[14]] = (Dk[kk[Vi[1]]] ? XF : IF)[rk[kk[Vi[1]]]]) !== Vi[15] && kk[Vi[14]] !== void Vi[1] ? kk[Vi[14]] : -Vi[2]),
+         aF = (Vi[1], pX[Vi[16]])("d2lvNjQz"),
+         qF = (Vi[1], pX[Vi[16]])("amtsa2plZndu"),
```

#### 563. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5333-L5335` → after: `L5334-L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5334-L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5334-L5336) · [Before (L5333-L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5333-L5335)

```diff
-           [(0, mQ[Ib[10]])("aW9qZndlODNq"), "2"],
-           [(0, mQ[Ib[10]])("a3Bq"), "4"],
-           [(0, mQ[Ib[10]])("dXJocmZm"), "5"]
+           [(Vi[1], pX[Vi[16]])("aW9qZndlODNq"), "2"],
+           [(Vi[1], pX[Vi[16]])("a3Bq"), Vi[213]],
+           [(Vi[1], pX[Vi[16]])("dXJocmZm"), "5"]
```

#### 564. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5338-L5339` → after: `L5339-L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5339-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5339-L5340) · [Before (L5338-L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5338-L5339)

```diff
-           [(0, mQ[Ib[10]])(Ib[217] + Ib[216]), Ib[197]],
-           [(0, mQ[Ib[10]])(Ib[217] + "w="), Ib[211]]
+           [(Vi[1], pX[Vi[16]])(Vi[215] + Vi[214]), Vi[243]],
+           [(Vi[1], pX[Vi[16]])(Vi[215] + "w="), "o"]
```

#### 565. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5341-L5343` → after: `L5342-L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5342-L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5342-L5344) · [Before (L5341-L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5341-L5343)

```diff
-         Nz = (0, mQ[Ib[10]])("eTR5bnM="),
-         Mz = (0, mQ[Ib[10]])("aHRleWpldA=="),
-         gz = (0, mQ[Ib[10]])("c2RmbGpneGxmY2pr"),
+         jF = (Vi[1], pX[Vi[16]])("eTR5bnM="),
+         eF = (Vi[1], pX[Vi[16]])("aHRleWpldA=="),
+         wF = (Vi[1], pX[Vi[16]])("c2RmbGpneGxmY2pr"),
```

#### 566. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5345-L5349` → after: `L5346-L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5346-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5346-L5350) · [Before (L5345-L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5345-L5349)

```diff
-           [(0, mQ[Ib[10]])("a3NhZmR1"), Ib[208]],
-           [(0, mQ[Ib[10]])("ZGZnYWFzZGFz"), Ib[10]],
-           [gz, Ib[218]],
-           [(0, mQ[Ib[10]])("bGFzZWRraGFz"), Ib[219]],
-           [(0, mQ[Ib[10]])("cW16ZjhrM24="), Ib[7]]
+           [(Vi[1], pX[Vi[16]])("a3NhZmR1"), Vi[16]],
+           [(Vi[1], pX[Vi[16]])("ZGZnYWFzZGFz"), Vi[216]],
+           [wF, Vi[219]],
+           [(Vi[1], pX[Vi[16]])("bGFzZWRraGFz"), Vi[217]],
+           [(Vi[1], pX[Vi[16]])("cW16ZjhrM24="), Vi[14]]
```

#### 567. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5352-L5354` → after: `L5353-L5355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5353-L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5353-L5355) · [Before (L5352-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5352-L5354)

```diff
-           [Nz, Ib[237]],
-           [Mz, Ib[238]],
-           [(0, mQ[Ib[10]])("bmI3ZnEy"), Ib[32]]
+           [jF, Vi[234]],
+           [eF, Vi[218]],
+           [(Vi[1], pX[Vi[16]])("bmI3ZnEy"), Vi[11]]
```

#### 568. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5356-L5357` → after: `L5357-L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5357-L5358) · [Before (L5356-L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5356-L5357)

```diff
-         Pz = (0, mQ[Ib[10]])("bGtxM20="),
-         Gz = (0, mQ[Ib[10]])("bWtxN3" + Ib[216]),
+         xF = (Vi[1], pX[Vi[16]])("bGtxM20="),
+         PF = (Vi[1], pX[Vi[16]])("bWtxN3" + Vi[214]),
```

#### 569. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5362` → after: `L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5363) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5362)

```diff
-             return CC[Ib[15]] = Ib[8], (CC[Ib[15]] = wC[(0, mQ[Ib[10]])("V2ViU29ja2V0")]) === Ib[9] || void 0 === CC[Ib[15]] ? void 0 : CC[Ib[15]][Ib[212] + Ib[213]]
+             return kk[Vi[200]] = Vi[12], (kk[Vi[200]] = Tk[(Vi[1], pX[Vi[16]])("V2ViU29ja2V0")]) === Vi[15] || kk[Vi[200]] === void Vi[1] ? void Vi[1] : kk[Vi[200]][Vi[210] + Vi[211]]
```

#### 570. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5364` → after: `L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5365) · [Before (L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5364)

```diff
-             return Ib[8]
+             return Vi[12]
```

#### 571. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5367-L5383` → after: `L5368-L5372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5368-L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5368-L5372) · [Before (L5367-L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5367-L5383)

```diff
-         xz = ["send", "close", "addEventListener", "removeEventListener", Ib[225] + Ib[224] + Ib[218]],
-         Jz = ["onmessage", "onopen", "onclos" + Ib[19], "onerro" + Ib[208]];
-       let iz = Ib[59];
-       const vz = (...CC) => {
-           CC[Ib[0]] = Ib[1];
-           const ZC = zC();
-           ZC === Ib[9] || iz || (iz = GC((() => {
-             if (Az !== Ib[8] && (0, mQ[Ib[220]])(ZC) !== Az) return Ib[65];
-             for (let CC = Ib[1]; CC < xz[Ib[0]]; CC++)
-               if ((0, mQ[Ib[211]])(mQ[Ib[221]], ZC, [xz[CC]])) return Ib[65];
-             for (let CC = Ib[1]; CC < Jz[Ib[0]]; CC++)
-               if (ZC[Jz[CC]] !== Ib[9] && ZC[Jz[CC]] !== Ib[8]) return Ib[65];
-             return Ib[59]
-           })))
-         },
-         ez = (0, mQ[Ib[10]])("RXZlbnQ=");
- ... (1 more removed lines; see GitHub link above)
+         sF = ["send", "close", "addEventListener", "removeEventListener", Vi[223] + Vi[222] + Vi[219]],
+         VF = ["onmessage", "onopen", "onclos" + Vi[73], "onerro" + Vi[16]];
+       let SF = Vi[33];
+       const oF = (Vi[1], pX[Vi[16]])("RXZlbnQ=");
+       let vF = fF[Vi[221]][Vi[237]],
```

#### 572. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5385-L5386` → after: `L5374-L5375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5374-L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5374-L5375) · [Before (L5385-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5385-L5386)

```diff
-       const Yz = () => Kz++ === Ib[48] ? (Kz = Ib[1], MC(Ib[59]) ? Tz[Ib[235]].CheckFuncHit : Ib[1]) : Ib[1],
-         dz = (0, mQ[Ib[197]])(Ib[9]),
+       const OF = () => EF++ === Vi[28] ? (EF = Vi[1], jk(Vi[33]) ? fF[Vi[5]].CheckFuncHit : Vi[1]) : Vi[1],
+         nF = (Vi[1], pX[Vi[42]])(Vi[15]),
```

#### 573. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5389-L5390` → after: `L5378-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5378-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5378-L5379) · [Before (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5389-L5390)

```diff
-         const CC = (0, mQ[Ib[211]])(mQ.bb, QC, [oC]);
-         dz[oC] = CC >= Ib[109] && CC <= 122 ? CC : Ib[1]
+         const kk = (Vi[1], pX[Vi[207]])(pX.bb, Xk, [ak]);
+         nF[ak] = kk >= Vi[195] && kk <= Vi[190] ? kk : Vi[1]
```

#### 574. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5393` → after: `L5382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5382) · [Before (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5393)

```diff
-           return CC[Ib[0]] = Ib[3], typeof CC[Ib[1]] === Ib[209] + Ib[210] && (0, mQ[Ib[211]])(mQ[Ib[223]], CC[Ib[2]], [(zC = CC[Ib[1]], (0, mQ.o)(mQ.y, zC, []))]) !== Ib[9];
+           return kk[Vi[0]] = Vi[3], typeof kk[Vi[1]] === Vi[205] + Vi[206] && (Vi[1], pX[Vi[207]])(pX.R, kk[Vi[2]], [(Fk = kk[Vi[1]], (0, pX.k)(pX.x, Fk, []))]) !== Vi[15];
```

#### 575. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5399-L5401` → after: `L5388-L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5388-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5388-L5390) · [Before (L5399-L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5399-L5401)

```diff
-           [Ab["Dispat" + Ib[224] + Ib[218]], () => !Hz(EventTarget[Ib[212] + Ib[213]][Ib[225] + Ib[224] + Ib[218]], Ez)],
-           [Ab.PerformanceNow, () => !Hz(performance[Ib[226]], lz)],
-           [Ab.DateNow, () => !Hz(Date[Ib[226]], lz)]
+           [Ki["Dispat" + Vi[222] + Vi[219]], () => !pF(EventTarget[Vi[210] + Vi[211]][Vi[223] + Vi[222] + Vi[219]], uF)],
+           [Ki.PerformanceNow, () => !pF(performance[Vi[224]], bF)],
+           [Ki.DateNow, () => !pF(Date[Vi[224]], bF)]
```

#### 576. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5403` → after: `L5392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5392) · [Before (L5403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5403)

```diff
-         cz = (0, mQ[Ib[197]])(Ib[9]);
+         UF = (Vi[1], pX[Vi[42]])(Vi[15]);
```

#### 577. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5406-L5408` → after: `L5395-L5397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5395-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5395-L5397) · [Before (L5406-L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5406-L5408)

```diff
-         stackCheck: (...CC) => {
-           eb(CC[Ib[0]] = Ib[1], CC[Ib[32]] = Ib[9]);
-           const zC = Sb((() => (CC[Ib[32]] = NC(Ib[65]), CC[Ib[32]] !== Ib[9])));
+         stackCheck: () => {
+           let kk = Vi[15];
+           const Fk = wi((() => (kk = Zk(Vi[30]), kk !== Vi[15])));
```

#### 578. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5410` → after: `L5399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5399) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5410)

```diff
-           return CC[Ib[32]] !== Ib[9] && gC === Ib[9] && (ZC = CC[Ib[32]][Ib[57]], QC = CC[Ib[32]][Ib[58]], gC = (0, Vw.C)(qb(ZC, QC))), zC
+           return kk !== Vi[15] && ek === Vi[15] && (Ik = kk[Vi[20]], Xk = kk[Vi[21]], ek = (0, MT.r)(qi(Ik, Xk))), Fk
```

#### 579. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5412` → after: `L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5401) · [Before (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5412)

```diff
-         [Ib[228] + Ib[229]]: (...CC) => {
+         [Vi[225] + Vi[226]]: (...kk) => {
```

#### 580. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5417-L5418` → after: `L5406-L5407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5406-L5407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5406-L5407) · [Before (L5417-L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5417-L5418)

```diff
-           const ZC = Pb((() => wC[oz] ? Ib[16] : Ib[1]));
-           return ZC !== Ib[1] ? ZC === Ib[16] ? Ib[16] : Ib[1] : zC === pb ? Ib[1] : zC === Ib[35] ? Ib[35] : (AC(), QC = Function[Ib[212] + Ib[213]], bC = Ib[234], nC = (...CC) => (CC[Ib[0]] = Ib[2], CC[Ib[1]].writable !== Ib[65]), Sb((() => {
+           const Ik = Ji((() => Tk[qF] ? Vi[38] : Vi[1]));
+           return Ik !== Vi[1] ? Ik === Vi[38] ? Vi[38] : Vi[1] : Fk === Hi ? Vi[1] : Fk === Vi[36] ? Vi[36] : (Kk(), Xk = Function[Vi[210] + Vi[211]], ik = Vi[232], yk = (...kk) => (kk[Vi[0]] = Vi[2], kk[Vi[1]].writable !== Vi[30]), wi((() => {
```

#### 581. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5421` → after: `L5410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5410) · [Before (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5421)

```diff
-           })) ? Ib[21] : Ib[1]);
+           })) ? Vi[68] : Vi[1]);
```

#### 582. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5425-L5426` → after: `L5414-L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5414-L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5414-L5415) · [Before (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5425-L5426)

```diff
-         [Ib[230] + "tSubChanged"]: (...CC) => {
-           if (CC[Ib[0]] = Ib[1], jC === tC || sC) return Ib[59];
+         [Vi[227] + "tSubChanged"]: (...kk) => {
+           if (kk[Vi[0]] = Vi[1], Ak === dk || Wk) return Vi[33];
```

#### 583. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5430-L5431` → after: `L5419-L5420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5419-L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5419-L5420) · [Before (L5430-L5431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5430-L5431)

```diff
-         vq: (...CC) => {
-           eb(CC[Ib[0]] = Ib[1], CC[Ib[227]] = mz);
+         eq: (...kk) => {
+           oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = GF);
```

#### 584. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5434` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5423) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5434)

```diff
-             ZC[Ib[1]] < CC[Ib[227]] && GC(ZC[Ib[2]]) && (CC[Ib[227]] = ZC[Ib[1]])
+             Ik[Vi[1]] < kk[Vi[14]] && xk(Ik[Vi[2]]) && (kk[Vi[14]] = Ik[Vi[1]])
```

#### 585. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5436` → after: `L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5425) · [Before (L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5436)

```diff
-           return CC[Ib[227]] < mz ? dz[CC[Ib[227]]] : Ib[1]
+           return kk[Vi[14]] < GF ? nF[kk[Vi[14]]] : Vi[1]
```

#### 586. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5438-L5442` → after: `L5427-L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5427-L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5427-L5430) · [Before (L5438-L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5438-L5442)

```diff
-         zF: () => UC ? Iz[Ib[239]] : Ib[20],
-         [Ib[231] + Ib[232] + "Subs"]: (...CC) => {
-           CC[Ib[0]] = Ib[1];
-           const zC = oC[Ib[211]].QG[Ib[231] + Ib[232]];
-           return typeof zC === Ib[233] && zC > Ib[1] ? zC > Ib[55] ? Ib[55] : zC : Ib[1]
+         Bq: () => hk ? zF[Vi[228]] : Vi[8],
+         [Vi[229] + Vi[230] + "Subs"]: () => {
+           const kk = ak[Vi[5]].mH[Vi[229] + Vi[230]];
+           return typeof kk === Vi[231] && kk > Vi[1] ? kk > Vi[74] ? Vi[74] : kk : Vi[1]
```

#### 587. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5444-L5450` → after: `L5432-L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5432-L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5432-L5438) · [Before (L5444-L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5444-L5450)

```diff
-         ["getCom" + Ib[246]]: (...CC) => {
-           eb(CC[Ib[0]] = Ib[1], CC[Ib[32]] = Ib[8], kC = Ib[1]);
-           for (let ZC = Ib[1]; ZC < YC; ZC++) bz(KC[ZC], Ib[65]);
-           for (let ZC = Ib[1]; ZC < qz[Ib[0]]; ZC++) iC[qz[ZC][Ib[1]]] && bz(qz[ZC][Ib[2]], Ib[65]);
-           const zC = Pb((() => gb(atob[Ib[234]](), FC) ? Ib[1] : Ib[2]));
-           zC === Ib[2] && bz(Ib[235], Ib[65]), AC();
-           const QC = zC === pb ? pb : Pb(((...CC) => {
+         ["getCom" + Vi[242]]: (...kk) => {
+           oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = Vi[12], Mk = Vi[1]);
+           for (let Ik = Vi[1]; Ik < nk; Ik++) yF(Ok[Ik], Vi[30]);
+           for (let Ik = Vi[1]; Ik < LF[Vi[0]]; Ik++) zk[LF[Ik][Vi[1]]] && yF(LF[Ik][Vi[2]], Vi[30]);
+           const Fk = Ji((() => ei(atob[Vi[232]](), Lk) ? Vi[1] : Vi[2]));
+           Fk === Vi[2] && yF(Vi[5], Vi[30]), Kk();
+           const Xk = Fk === Hi ? Hi : Ji(((...kk) => {
```

#### 588. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5453` → after: `L5441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5441) · [Before (L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5453)

```diff
-             return zC === Ib[8] ? pb : zC[Ib[236]] !== Ib[8] ? Ib[2] : Ib[1]
+             return Fk === Vi[12] ? Hi : Fk[Vi[233]] !== Vi[12] ? Vi[2] : Vi[1]
```

#### 589. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5455` → after: `L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5443) · [Before (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5455)

```diff
-           QC === Ib[2] && bz(Ib[61], Ib[65]);
+           Xk === Vi[2] && yF(Vi[236], Vi[30]);
```

#### 590. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5457` → after: `L5445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5445) · [Before (L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5457)

```diff
-           for (let ZC = Ib[1]; ZC < Wz[Ib[0]] && !wC; ZC++) iC[Wz[ZC][Ib[1]]] && bz(Wz[ZC][Ib[2]], Ib[65]);
+           for (let Ik = Vi[1]; Ik < ZF[Vi[0]] && !Tk; Ik++) zk[ZF[Ik][Vi[1]]] && yF(ZF[Ik][Vi[2]], Vi[30]);
```

#### 591. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5459-L5460` → after: `L5447-L5448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5447-L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5447-L5448) · [Before (L5459-L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5459-L5460)

```diff
-           CC[Ib[2]] = Ib[9], YC === Ib[1] && (mC > Ib[1] ? CC[Ib[2]] = dC[Ib[1]] : lC ? CC[Ib[2]] = "fp" : bC || (CC[Ib[2]] = iC[Nz] ? Ib[237] : iC[Mz] ? Ib[238] : Ib[9]));
-           for (let ZC = Ib[1]; ZC < Sz[Ib[0]] && !wC; ZC++) iC[Sz[ZC][Ib[1]]] && bz(Sz[ZC][Ib[2]], Ib[65]);
+           kk[Vi[2]] = Vi[15], nk === Vi[1] && (pk > Vi[1] ? kk[Vi[2]] = Gk[Vi[1]] : Rk ? kk[Vi[2]] = "fp" : ik || (kk[Vi[2]] = zk[jF] ? Vi[234] : zk[eF] ? Vi[218] : Vi[15]));
+           for (let Ik = Vi[1]; Ik < HF[Vi[0]] && !Tk; Ik++) zk[HF[Ik][Vi[1]]] && yF(HF[Ik][Vi[2]], Vi[30]);
```

#### 592. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5462-L5467` → after: `L5450-L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5450-L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5450-L5455) · [Before (L5462-L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5462-L5467)

```diff
-             fC = (0, Qb[Ib[19]])(),
-             oC = fC !== Ib[9] && (0, Fz[Ib[211]])(fC);
-           oC && !wC && bz(fC, Ib[59]), aC && bz("ix", Ib[59]), hC && bz("il", Ib[59]);
-           for (let ZC = Ib[1]; ZC < mC; ZC++) bz(dC[ZC], Ib[65]);
-           for (let ZC = Ib[1]; ZC < pz[Ib[0]]; ZC++) iC[pz[ZC][Ib[1]]] && bz(pz[ZC][Ib[2]], Ib[65]);
-           iC[Pz] && bz("mk:lk", Ib[65]);
+             lk = (Vi[1], Xi[Vi[22]])(),
+             ak = lk !== Vi[15] && (Vi[1], tF[Vi[218]])(lk);
+           ak && !Tk && yF(lk, Vi[33]), Bk && yF("ix", Vi[33]), Ek && yF("il", Vi[33]);
+           for (let Ik = Vi[1]; Ik < pk; Ik++) yF(Gk[Ik], Vi[30]);
+           for (let Ik = Vi[1]; Ik < JF[Vi[0]]; Ik++) zk[JF[Ik][Vi[1]]] && yF(JF[Ik][Vi[2]], Vi[30]);
+           zk[xF] && yF("mk:lk", Vi[30]);
```

#### 593. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5472` → after: `L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5460) · [Before (L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5472)

```diff
-             return Ib[9]
+             return Vi[15]
```

#### 594. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5474-L5476` → after: `L5462-L5464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5462-L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5462-L5464) · [Before (L5474-L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5474-L5476)

```diff
-           if (qC !== Ib[9] && bz(qC, Ib[65]), ZC !== Ib[9] && xC(ZC.emitReplaced) === Ib[65] && bz("mk:em", Ib[65]), iz && bz("3s", Ib[59]), mQ.V && bz("3b", Ib[59]), AC(), RC && bz("3d", Ib[59]), wC && bz("3g", Ib[59]), fC === Ib[9] || oC || bz(fC, Ib[59]), gC !== Ib[9] && bz(gC … [truncated]
-             const CC = xC(ZC[Ib[228] + "mMeshHitStac" + Ib[239]]);
-             typeof CC === Ib[206] && (PC = function(CC, zC, ZC) {
+           if (qk !== Vi[15] && yF(qk, Vi[30]), Ik !== Vi[15] && Qk(Ik.emitReplaced) === Vi[30] && yF("mk:em", Vi[30]), SF && yF("3s", Vi[33]), pX.V && yF("3b", Vi[33]), Kk(), Pk && yF("3d", Vi[33]), Tk && yF("3g", Vi[33]), lk === Vi[15] || ak || yF(lk, Vi[33]), ek !== Vi[15] && y … [truncated]
+             const kk = Qk(Ik[Vi[225] + "mMeshHitStac" + Vi[207]]);
+             typeof kk === Vi[75] && (Jk = function(kk, Fk, Ik) {
```

#### 595. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5479` → after: `L5467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5467) · [Before (L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5479)

```diff
-               return (0, Vw.n)(qb(CC, QC < ZC ? zC[QC] : null))
+               return (0, MT.j)(qi(kk, Xk < Ik ? Fk[Xk] : null))
```

#### 596. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5483-L5484` → after: `L5471-L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5471-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5471-L5472) · [Before (L5483-L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5483-L5484)

```diff
-           if (PC !== Ib[9] && bz(PC, Ib[59]), SC === Ib[9] && Iz[Ib[19]] !== Ib[9] && eb((NC = Iz[Ib[19]], SC = (0, Vw.j)(Nb(NC).reader)), pC = Mb(Iz[Ib[19]], xC((() => Iz[Ib[32]] === Ib[9] ? Ib[9] : (0, mQ.fb)(Iz[Ib[32]]))))), SC !== Ib[9] && bz(SC, Ib[59]), pC !== Ib[9] && bz(p … [truncated]
-           if (CC[Ib[2]] === Ib[9] && OC[Ib[1]] && !(0, Vw[Ib[208]])(BC[Ib[1]]))
+           if (Jk !== Vi[15] && yF(Jk, Vi[33]), wk === Vi[15] && zF[Vi[235]] !== Vi[15] && oi((Zk = zF[Vi[235]], wk = (0, MT.i)(Zi(Zk).reader)), Hk = ji(zF[Vi[235]], Qk((() => zF[Vi[73]] === Vi[15] ? Vi[15] : (Vi[1], pX.db)(zF[Vi[73]]))))), wk !== Vi[15] && yF(wk, Vi[33]), Hk !==  … [truncated]
+           if (kk[Vi[2]] === Vi[15] && Dk[Vi[1]] && !(Vi[1], MT[Vi[203]])(rk[Vi[1]]))
```

#### 597. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5486` → after: `L5474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5474) · [Before (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5486)

```diff
-               if (OC[ZC] && (0, Vw[Ib[208]])(BC[ZC])) {
+               if (Dk[Ik] && (Vi[1], MT[Vi[203]])(rk[Ik])) {
```

#### 598. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5489` → after: `L5477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5477) · [Before (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5489)

```diff
-                 eb(BC[Ib[1]] = CC, OC[Ib[1]] = Ib[65]);
+                 oi(rk[Vi[1]] = kk, Dk[Vi[1]] = Vi[30]);
```

#### 599. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5491-L5493` → after: `L5479-L5481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5479-L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5479-L5481) · [Before (L5491-L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5491-L5493)

```diff
-               } if (eb(CC[Ib[3]] = Ib[1], CC[Ib[4]] = CC[Ib[2]] === Ib[9] ? Ib[1] : nC), CC[Ib[4]] > Ib[1] && fC !== Ib[9] && oC && !wC) {
-             for (let zC = CC[Ib[4]]; zC > Ib[1]; zC--) eb(BC[zC] = BC[zC - Ib[2]], OC[zC] = OC[zC - Ib[2]]);
-             eb(BC[Ib[1]] = fC, OC[Ib[1]] = Ib[59], CC[Ib[3]] = Ib[2], CC[Ib[4]]++)
+               } if (oi(kk[Vi[73]] = Vi[1], kk[Vi[236]] = kk[Vi[2]] === Vi[15] ? Vi[1] : yk), kk[Vi[236]] > Vi[1] && lk !== Vi[15] && ak && !Tk) {
+             for (let Fk = kk[Vi[236]]; Fk > Vi[1]; Fk--) oi(rk[Fk] = rk[Fk - Vi[2]], Dk[Fk] = Dk[Fk - Vi[2]]);
+             oi(rk[Vi[1]] = lk, Dk[Vi[1]] = Vi[33], kk[Vi[73]] = Vi[2], kk[Vi[236]]++)
```

#### 600. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5495-L5502` → after: `L5483-L5490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5483-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5483-L5490) · [Before (L5495-L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5495-L5502)

```diff
-           if (CC[Ib[61]] = Ib[1], VC++ % Ib[3] === Ib[2])
-             for (let ZC = Ib[2]; ZC < kC; ZC++) nz(ZC) < nz(CC[Ib[61]]) && (CC[Ib[61]] = ZC);
-           const MC = BC[CC[Ib[61]]];
-           (OC[CC[Ib[61]]] ? Zz : zz)[MC] = Cz++;
-           const GC = CC[Ib[61]] >= CC[Ib[3]] && CC[Ib[61]] < CC[Ib[4]];
-           if (!OC[CC[Ib[61]]] || MC === CC[Ib[2]] || CC[Ib[61]] === Ib[1] && !GC) return MC === Ib[218] ? (0, Vw.F)(iC[gz], Vw[Ib[5]]) : MC;
-           const JC = (CC[Ib[32]] = CC[Ib[2]]) !== Ib[9] && void 0 !== CC[Ib[32]] ? CC[Ib[32]] : BC[Ib[1]];
-           return JC !== Qz && eb(Qz = JC, wz = (0, mQ[Ib[197]])(Ib[9])), wz[MC] ??= (0, Vw.A)(MC, JC)
+           if (kk[Vi[38]] = Vi[1], kF++ % Vi[3] === Vi[2])
+             for (let Ik = Vi[2]; Ik < Mk; Ik++) lF(Ik) < lF(kk[Vi[38]]) && (kk[Vi[38]] = Ik);
+           const jk = rk[kk[Vi[38]]];
+           (Dk[kk[Vi[38]]] ? XF : IF)[jk] = FF++;
+           const xk = kk[Vi[38]] >= kk[Vi[73]] && kk[Vi[38]] < kk[Vi[236]];
+           if (!Dk[kk[Vi[38]]] || jk === kk[Vi[2]] || kk[Vi[38]] === Vi[1] && !xk) return jk === Vi[219] ? (Vi[1], MT[Vi[219]])(zk[wF], MT[Vi[7]]) : jk;
+           const sk = (kk[Vi[22]] = kk[Vi[2]]) !== Vi[15] && kk[Vi[22]] !== void Vi[1] ? kk[Vi[22]] : rk[Vi[1]];
+           return sk !== TF && oi(TF = sk, iF = (Vi[1], pX[Vi[42]])(Vi[15])), iF[jk] ??= (Vi[1], MT[Vi[218]])(jk, sk)
```

#### 601. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5505-L5506` → after: `L5493-L5494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5493-L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5493-L5494) · [Before (L5505-L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5505-L5506)

```diff
-       let sz = Tz[Ib[222]][Ib[240]];
-       const az = () => hz !== Tz[Ib[222]][Ib[240]] ? hz : sz;
+       let cF = fF[Vi[221]][Vi[237]];
+       const WF = () => vF !== fF[Vi[221]][Vi[237]] ? vF : cF;
```

#### 602. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5517-L5518` → after: `L5505-L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5505-L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5505-L5506) · [Before (L5517-L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5517-L5518)

```diff
-             if (typeof zC === Ib[209] + Ib[210] && !(CC[Ib[1]] instanceof zC) && !(0, mQ.E)(CC[Ib[1]])) return hz = Tz[Ib[222]].NotEvent, Ib[1];
-             if (CC[Ib[1]].isTrusted === Ib[59]) return Ib[1];
+             if (typeof Fk === Vi[205] + Vi[206] && !(kk[Vi[1]] instanceof Fk) && !(Vi[1], pX.D)(kk[Vi[1]])) return vF = fF[Vi[221]].NotEvent, Vi[1];
+             if (kk[Vi[1]].isTrusted === Vi[33]) return Vi[1];
```

#### 603. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5521` → after: `L5509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5509) · [Before (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5521)

```diff
-             return ZC < Ib[51] ? (hz = Tz[Ib[222]]["FewPropertie" + Ib[10]], Ib[1]) : Yz()
+             return Ik < Vi[70] ? (vF = fF[Vi[221]]["FewPropertie" + Vi[216]], Vi[1]) : OF()
```

#### 604. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5534` → after: `L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5522) · [Before (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5534)

```diff
-           eb(CC[Ib[0]] = Ib[3], CC[Ib[7]] = Ib[8]);
+           oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = Vi[12]);
```

#### 605. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5536` → after: `L5524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5524) · [Before (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5536)

```diff
-             CC[Ib[7]] = CC[Ib[2]]()
+             kk[Vi[3]] = kk[Vi[2]]()
```

#### 606. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5538` → after: `L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5526) · [Before (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5538)

```diff
-           cz[uz++] = [CC[Ib[1]], () => !zC || CC[Ib[2]]() !== CC[Ib[7]]]
+           UF[CF++] = [kk[Vi[1]], () => !Fk || kk[Vi[2]]() !== kk[Vi[3]]]
```

#### 607. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5540-L5541` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5528) · [Before (L5540-L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5540-L5541)

```diff
-         ZN: (...CC) => {
-           CC[Ib[0]] = Ib[1];
+         Dt: () => {
```

#### 608. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5544-L5546` → after: `L5531-L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5531-L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5531-L5533) · [Before (L5544-L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5544-L5546)

```diff
-             if (eb(CC[Ib[0]] = Ib[2], CC[-Ib[241]] = Ib[8], CC[-Ib[242]] = Ib[8]), ZC !== Ib[9]) {
-               const zC = xC(ZC.yF),
-                 QC = "v3" === zC ? Ib[4] : "v5" === zC ? Ib[48] : "v6" === zC ? Ib[35] : Ib[3];
+             if (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[12], kk[Vi[3]] = Vi[12]), Ik !== Vi[15]) {
+               const Fk = Qk(Ik.RL),
+                 Xk = "v3" === Fk ? Vi[4] : "v5" === Fk ? Vi[28] : "v6" === Fk ? Vi[36] : Vi[3];
```

#### 609. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5548-L5549` → after: `L5535-L5536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5535-L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5535-L5536) · [Before (L5548-L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5548-L5549)

```diff
-               const wC = xC(ZC["inbuil" + Ib[244] + Ib[245]]);
-               typeof wC === Ib[233] && wC >= Ib[1] && wC <= Ib[112] && (wC | Ib[1]) === wC && (jz = wC), eb(CC[-Ib[241]] = xC(ZC.reflectApplyHit), CC[-Ib[242]] = xC(ZC.definerHit))
+               const Tk = Qk(Ik["inbuil" + Vi[240] + Vi[241]]);
+               typeof Tk === Vi[231] && Tk >= Vi[1] && Tk <= Vi[110] && (Tk | Vi[1]) === Tk && (YF = Tk), oi(kk[Vi[14]] = Qk(Ik.reflectApplyHit), kk[Vi[3]] = Qk(Ik.definerHit))
```

#### 610. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5551` → after: `L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5538) · [Before (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5551)

```diff
-             const zC = CC[Ib[1]] ? Ib[33] : "11" === CC[-Ib[242]] ? Ib[112] : "13" === CC[-Ib[242]] ? Ib[110] : CC[-Ib[241]] !== Ib[8] && CC[-Ib[241]] !== Ib[9] ? Ib[3] : "10" === CC[-Ib[242]] ? Ib[51] : "12" === CC[-Ib[242]] ? Ib[41] : Ib[1];
+             const Fk = kk[Vi[1]] ? Vi[57] : "11" === kk[Vi[3]] ? Vi[110] : "13" === kk[Vi[3]] ? Vi[108] : kk[Vi[14]] !== Vi[12] && kk[Vi[14]] !== Vi[15] ? Vi[3] : "10" === kk[Vi[3]] ? Vi[70] : "12" === kk[Vi[3]] ? Vi[62] : Vi[1];
```

#### 611. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5553-L5554` → after: `L5540-L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5540-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5540-L5552) · [Before (L5553-L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5553-L5554)

```diff
-           })(zC), tz++ % 10 === Ib[1] && (vz(), Sb((() => !gb(wC[bC][Ib[234]][Ib[234]](), FC))) && (sz = sz === Tz[Ib[222]][Ib[243]] ? Tz[Ib[222]][Ib[243]] : Tz[Ib[222]].Fr), Sb((() => !gb(wC[bC][Ib[234]](), FC))) && (sz = Tz[Ib[222]][Ib[243]])), {
-             flags: zC ? Tz[Ib[235]].Butto : Ib[1],
+           })(kk), BF++ % 10 === Vi[1] && (((...kk) => {
+             kk[Vi[0]] = Vi[1];
+             const Ik = Fk();
+             Ik === Vi[15] || SF || (SF = xk((() => {
+               if (QF !== Vi[12] && (Vi[1], pX.M)(Ik) !== QF) return Vi[30];
+               for (let kk = Vi[1]; kk < sF[Vi[0]]; kk++)
+                 if ((Vi[1], pX[Vi[207]])(pX[Vi[220]], Ik, [sF[kk]])) return Vi[30];
+               for (let kk = Vi[1]; kk < VF[Vi[0]]; kk++)
+                 if (Ik[VF[kk]] !== Vi[15] && Ik[VF[kk]] !== Vi[12]) return Vi[30];
+               return Vi[33]
+             })))
+           })(), wi((() => !ei(Tk[ik][Vi[232]][Vi[232]](), Lk))) && (cF = cF === fF[Vi[221]][Vi[238]] ? fF[Vi[221]][Vi[238]] : fF[Vi[221]].Fr), wi((() => !ei(Tk[ik][Vi[232]](), Lk))) && (cF = fF[Vi[221]][Vi[238]])), {
+             flags: kk ? fF[Vi[5]].Butto : Vi[1],
```

#### 612. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5557-L5559` → after: `L5555-L5557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5555-L5557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5555-L5557) · [Before (L5557-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5557-L5559)

```diff
-               [Tz[Ib[239]]["Inbuil" + Ib[244] + Ib[245]], jz],
-               [Tz[Ib[239]]["AltCom" + Ib[246]], yz],
-               [Tz[Ib[239]]["ProbeUsedPro" + Ib[197]], az()]
+               [fF[Vi[239]]["Inbuil" + Vi[240] + Vi[241]], YF],
+               [fF[Vi[239]]["AltCom" + Vi[242]], AF],
+               [fF[Vi[239]]["ProbeUsedPro" + Vi[243]], WF()]
```

#### 613. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5657` → after: `L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5655) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5657)

```diff
-         if (this.stopped) return lz.e;
+         if (this.stopped) return RF.d;
```

#### 614. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5686` → after: `L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5684) · [Before (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5686)

```diff
-               wC = Xz(QC > 0 ? zC / QC : zC > 0 ? oC.volume : 0),
+               Tk = UF(Xk > 0 ? Fk / Xk : Fk > 0 ? ak.volume : 0),
```

#### 615. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5716` → after: `L5714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5714) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5716)

```diff
-     }((0, iz.d)(), !0);
+     }((0, SF.b)(), !0);
```

#### 616. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5719` → after: `L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5717) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5719)

```diff
-         client: String(Zz.e)
+         client: String(XF.b)
```

#### 617. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5760` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5758) · [Before (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5760)

```diff
-           console.error(`${hb} a startup listener threw`, zC)
+           console.error(`${vi} a startup listener threw`, Fk)
```

#### 618. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5789` → after: `L5787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5787) · [Before (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5789)

```diff
-       of = null;
+       ll = null;
```

#### 619. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5836` → after: `L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5834) · [Before (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5836)

```diff
-       console.warn(`${hb} chunk cancels from the server this session: ${CC}`)
+       console.warn(`${vi} chunk cancels from the server this session: ${kk}`)
```

#### 620. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5854` → after: `L5852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5852) · [Before (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5854)

```diff
-         this.bp = CC, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
+         this.GL = kk, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
```

#### 621. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5862` → after: `L5860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5860) · [Before (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5862)

```diff
-         this.lastFrameMs = ZC, this.lossPending && zC && (0, Kz.i)(CC) ? (null === this.undrawnSinceMs || QC > 1e3) && (this.undrawnSinceMs = ZC) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ZC - this.undrawnSinceMs >= 2e3)
+         this.lastFrameMs = Ik, this.lossPending && Fk && (0, OF.f)(kk) ? (null === this.undrawnSinceMs || Xk > 1e3) && (this.undrawnSinceMs = Ik) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Ik - this.undrawnSinceMs >= 2e3)
```

#### 622. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5868` → after: `L5866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5866) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5868)

```diff
-         CC !== this.shown && (this.shown = CC, this.bp(CC))
+         kk !== this.shown && (this.shown = kk, this.GL(kk))
```

#### 623. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5871` → after: `L5869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5869) · [Before (L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5871)

```diff
-       oC.o.bp(gC.d, CC)
+       ak.g.GL(ek.e, kk)
```

#### 624. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5881` → after: `L5879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5879) · [Before (L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5881)

```diff
-       return Zn ??= Promise.all([ZC.e(198), ZC.e(142), ZC.e(59)]).then((() => ZC(50695))).then((CC => (zn = CC, Object.assign(globalThis, {
+       return Ty ??= Promise.all([Ik.e(198), Ik.e(142), Ik.e(59)]).then((() => Ik(50939))).then((kk => (Xy = kk, Object.assign(globalThis, {
```

#### 625. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5889-L5890` → after: `L5887-L5888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5887-L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5887-L5888) · [Before (L5889-L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5889-L5890)

```diff
-       return Cn ??= ZC.e(57).then((() => ZC(50717))).catch((CC => {
-         throw Cn = null, new IC.c(CC)
+       return Iy ??= Ik.e(57).then((() => Ik(50964))).catch((kk => {
+         throw Iy = null, new Vk.e(kk)
```

#### 626. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5915-L5916` → after: `L5913-L5914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5913-L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5913-L5914) · [Before (L5915-L5916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5915-L5916)

```diff
-       Vb || (Vb = !0, fw.i.setHost(new Mo), (0, eZ.o)(), Qw.g.setFollower(Gq), Object.assign(globalThis, {
-         bloxdPreviews: fw.i
+       Fy || (Fy = !0, aT.h.setHost(new La), (0, vI.k)(), TT.f.setFollower(jq), Object.assign(globalThis, {
+         bloxdPreviews: aT.h
```

#### 627. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5929` → after: `L5927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5927) · [Before (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5929)

```diff
-       kb = !0, bo = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), no = !bo, console.info(`${hb} starting`), Ob || (Ob = !0, (0, gC.J)(new mz(co, jo)), (0, NC.o)(new Hz), (0, gC.G)(new Ez), (0, gC.A)()), bo && oC.o.subscribe("appManagerUpda … [truncated]
+       ky = !0, Ia = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Xa = !Ia, console.info(`${vi} starting`), Mi || (Mi = !0, (0, ek.O)(new pF(Ga, ca)), (0, Zk.q)(new uF), (0, ek.N)(new bF), (0, ek.E)()), Ia && ak.g.subscribe("appManagerUpda … [truncated]
```

#### 628. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5937-L5938` → after: `L5935-L5936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5935-L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5935-L5936) · [Before (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5937-L5938)

```diff
-           oo = !0, (0, KZ.V)(), null === (ZC = ef) || void 0 === ZC || ZC.abort(), ef = null, ww.e.release();
-           const wC = bo ? null !== (QC = CC.cancel) && void 0 !== QC ? QC : "general:back" : null;
+           ia = !0, (0, OI.S)(), null === (Ik = zl) || void 0 === Ik || Ik.abort(), zl = null, iT.b.release();
+           const Tk = Ia ? null !== (Xk = kk.cancel) && void 0 !== Xk ? Xk : "general:back" : null;
```

#### 629. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5943` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5941) · [Before (L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5943)

```diff
-             CC && zC && qo ? ((0, Mz.w)("reloadOntoJs"), (0, DC.h)(Mz.C)) : CC && zC ? (0, DC.j)() : bo && (0, DC.e)("/")
+             kk && Fk && ya ? ((0, eF.u)("reloadOntoJs"), (0, Yk.e)(eF.y)) : kk && Fk ? (0, Yk.i)() : Ia && (0, Yk.d)("/")
```

#### 630. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5946` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5944) · [Before (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5946)

```diff
-       })), (0, yQ.n)(), (0, Iz.h)();
+       })), (0, gX.m)(), (0, zF.l)();
```

#### 631. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5949` → after: `L5947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5947) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5949)

```diff
-         zC = Jb("9ckeslb2bss", (() => {
+         Fk = si("fw2oddwvwjo", (() => {
```

#### 632. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5951` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5949) · [Before (L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5951)

```diff
-           return null !== (CC = null === (zC = pn) || void 0 === zC ? void 0 : zC.ws) && void 0 !== CC ? CC : null
+           return null !== (kk = null === (Fk = Jy) || void 0 === Fk ? void 0 : Fk.ws) && void 0 !== kk ? kk : null
```

#### 633. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5954` → after: `L5952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5952) · [Before (L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5954)

```diff
-         console.error(`${hb} probes`, wC)
+         console.error(`${vi} probes`, Tk)
```

#### 634. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5957-L5958` → after: `L5955-L5956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5955-L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5955-L5956) · [Before (L5957-L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5957-L5958)

```diff
-         const CC = (0, KQ.k)(),
-           zC = (0, KQ.g)();
+         const kk = (0, OX.n)(),
+           Fk = (0, OX.j)();
```

#### 635. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5971` → after: `L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5969) · [Before (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5971)

```diff
-             lobby: null !== (zC = ZC.get("lobby")) && void 0 !== zC ? zC : null
+             lobby: null !== (Fk = Ik.get("lobby")) && void 0 !== Fk ? Fk : null
```

#### 636. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5974` → after: `L5972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5972) · [Before (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5974)

```diff
-         if (CC) return (0, Qz.i)(CC.game) && Aq().request(), void Ro(CC.game, CC.lobby);
+         if (kk) return (0, TF.j)(kk.game) && wq().request(), void Ha(kk.game, kk.lobby);
```

#### 637. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5980` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5978) · [Before (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5980)

```diff
-               await (0, IC.l)(CC), Mf = Oo(new WebSocket(zC)), null !== Mf && ww.e.setGame(null), Po()
+               await (0, Vk.n)(kk), Zl = Ya(new WebSocket(Fk)), null !== Zl && iT.b.setGame(null), ea()
```

#### 638. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5982` → after: `L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5980) · [Before (L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5982)

```diff
-               console.error(`${hb} ?ws=${zC} did not attach`, wC)
+               console.error(`${vi} ?ws=${Fk} did not attach`, Tk)
```

#### 639. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5989-L5990` → after: `L5987-L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5987-L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5987-L5988) · [Before (L5989-L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5989-L5990)

```diff
-         const FC = await (0, Mw.P)();
-         if ((0, JZ.setCrashBackend)((0, ZZ.q)(FC) ? "unsupported" : null !== (zC = null === FC || void 0 === FC ? void 0 : FC.backend) && void 0 !== zC ? zC : "none"), (0, ZZ.q)(FC)) return Nq("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${FC.missing.join(", ")}`, {
+         const Lk = await (0, eT.Q)();
+         if ((0, VI.setCrashBackend)((0, XI.h)(Lk) ? "unsupported" : null !== (Fk = null === Lk || void 0 === Lk ? void 0 : Lk.backend) && void 0 !== Fk ? Fk : "none"), (0, XI.h)(Lk)) return lq("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Lk.missing.join(", ")}`, {
```

#### 640. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5993` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5991) · [Before (L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5993)

```diff
-         if ((0, sw.k)("render")) try {
+         if ((0, cT.o)("render")) try {
```

#### 641. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5996` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5994) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L5996)

```diff
-           } = await Promise.all([ZC.e(77), ZC.e(48)]).then((() => ZC(4621)));
+           } = await Promise.all([Ik.e(77), Ik.e(48)]).then((() => Ik(4676)));
```

#### 642. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6001` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L5999) · [Before (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6001)

```diff
-         if ((0, sw.k)("renderlite")) try {
+         if ((0, cT.o)("renderlite")) try {
```

#### 643. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6004` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6002) · [Before (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6004)

```diff
-           } = await Promise.all([ZC.e(269), ZC.e(49)]).then((() => ZC(50726)));
+           } = await Promise.all([Ik.e(269), Ik.e(49)]).then((() => Ik(50974)));
```

#### 644. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6009` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6007) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6009)

```diff
-         if ((0, sw.k)("renderprobe")) try {
+         if ((0, cT.o)("renderprobe")) try {
```

#### 645. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6012` → after: `L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6010) · [Before (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6012)

```diff
-           } = await ZC.e(50).then((() => ZC(50730)));
+           } = await Ik.e(50).then((() => Ik(50977)));
```

#### 646. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6019-L6020` → after: `L6017-L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6017-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6017-L6018) · [Before (L6019-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6019-L6020)

```diff
-           const CC = (0, vQ.g)(FC);
-           null === CC || "webgl" !== FC.backend && !(0, gz.v)(CC) || (0, Sz.m)(CC, JZ.reportGpuWasmPopulation), null !== CC && (0, gz.o)(CC), WC = (0, vQ.e)(FC, CC)
+           const kk = (0, oX.f)(Lk);
+           null === kk || "webgl" !== Lk.backend && !(0, wF.x)(kk) || (0, HF.m)(kk, VI.reportGpuWasmPopulation), null !== kk && (0, wF.p)(kk), tk = (0, oX.c)(Lk, kk)
```

#### 647. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6022-L6028` → after: `L6020-L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6020-L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6020-L6026) · [Before (L6022-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6022-L6028)

```diff
-         if (null !== FC && null !== WC) return (0, JZ.reportGpuFallback)(WC, FC.backend), gq(`the wasm client's renderer plays this GPU (${WC}) on ${FC.backend} worse than the JS client`, "gpu"), null;
-         const NC = null !== (QC = null === FC || void 0 === FC ? void 0 : FC.backend) && void 0 !== QC ? QC : null;
-         Ef.adapter = null !== (bC = null === FC || void 0 === FC ? void 0 : FC.adapter) && void 0 !== bC ? bC : null, Ef.boundAtMs = null, Ef.indirectHangs = null, Ef.restoresSkipped = null;
-         const MC = !(0, ZZ.$)();
-         null !== FC && "none" !== FC.reason && console.info(`${hb} drawing with ${FC.backend}: ${FC.reason}`);
-         const gC = (0, Mw.E)();
-         Mn(!0), (0, IC.y)((CC => {
+         if (null !== Lk && null !== tk) return (0, VI.reportGpuFallback)(tk, Lk.backend), qq(`the wasm client's renderer plays this GPU (${tk}) on ${Lk.backend} worse than the JS client`, "gpu"), null;
+         const Zk = null !== (Xk = null === Lk || void 0 === Lk ? void 0 : Lk.backend) && void 0 !== Xk ? Xk : null;
+         Gl.adapter = null !== (ik = null === Lk || void 0 === Lk ? void 0 : Lk.adapter) && void 0 !== ik ? ik : null, Gl.boundAtMs = null, Gl.indirectHangs = null, Gl.restoresSkipped = null;
+         const jk = !(0, XI.P)();
+         null !== Lk && "none" !== Lk.reason && console.info(`${vi} drawing with ${Lk.backend}: ${Lk.reason}`);
+         const ek = (0, eT.F)();
+         ey(!0), (0, Vk.A)((kk => {
```

#### 648. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6032` → after: `L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6030) · [Before (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6032)

```diff
-               Xf = CC.rasterText, Sf = CC.setTextLocalPlayer, CC.setTextLocalPlayer(null !== (zC = null === (ZC = gf) || void 0 === ZC ? void 0 : ZC.info.playerDbId) && void 0 !== zC ? zC : null), uf = CC.drainTextRerasters, rf = CC.loadTextIcons, CC.warmText((() => Bf)), CC.text … [truncated]
+               ul = kk.rasterText, el = kk.setTextLocalPlayer, kk.setTextLocalPlayer(null !== (Fk = null === (Ik = jl) || void 0 === Ik ? void 0 : Ik.info.playerDbId) && void 0 !== Fk ? Fk : null), bl = kk.drainTextRerasters, Rl = kk.loadTextIcons, kk.warmText((() => Al)), kk.text … [truncated]
```

#### 649. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6042-L6043` → after: `L6040-L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6040-L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6040-L6041) · [Before (L6042-L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6042-L6043)

```diff
-         })), (0, IC.n)(fn).catch((CC => {
-           console.warn(`${hb} the game code did not load: a join asks again`, CC)
+         })), (0, Vk.r)(qy).catch((kk => {
+           console.warn(`${vi} the game code did not load: a join asks again`, kk)
```

#### 650. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6047` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6045) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6047)

```diff
-         SC.catch((() => {})), "loading" === (0, fz.y)() && Kw();
+         wk.catch((() => {})), "loading" === (0, aF.w)() && OT();
```

#### 651. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6050-L6054` → after: `L6048-L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6048-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6048-L6052) · [Before (L6050-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6050-L6054)

```diff
-             const zC = null !== CC && void 0 !== CC ? CC : document.createElement("canvas");
-             zC.id = "wasm-game-canvas", (0, Aw.j)();
-             const ZC = (0, dz.h)(),
-               QC = (0, dz.i)(ZC);
-             zC.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Rw.f)(zC, QC), (0, dz.d)(zC, ZC), zC.width = QC.bufferWidth, zC.height = QC.bufferHeight;
+             const Fk = null !== kk && void 0 !== kk ? kk : document.createElement("canvas");
+             Fk.id = "wasm-game-canvas", (0, QT.k)();
+             const Ik = (0, GF.d)(),
+               Xk = (0, GF.e)(Ik);
+             Fk.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, KT.f)(Fk, Xk), (0, GF.c)(Fk, Ik), Fk.width = Xk.bufferWidth, Fk.height = Xk.bufferHeight;
```

#### 652. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6063` → after: `L6061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6061) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6063)

```diff
-             (0, JZ.showUnsupported)((0, xQ.m)("fetch"), Uw.g.fetch, `the previews did not load: ${String(wC)}`)
+             (0, VI.showUnsupported)((0, sX.l)("fetch"), mT.g.fetch, `the previews did not load: ${String(Tk)}`)
```

#### 653. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6074` → after: `L6072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6072) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6074)

```diff
-             (0, JZ.showUnsupported)((0, xQ.m)("fetch"), Uw.g.fetch, `the ${null!==NC&&void 0!==NC?NC:"client"} build did not load: ${String(wC)}`)
+             (0, VI.showUnsupported)((0, sX.l)("fetch"), mT.g.fetch, `the ${null!==Zk&&void 0!==Zk?Zk:"client"} build did not load: ${String(Tk)}`)
```

#### 654. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6077-L6079` → after: `L6075-L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6075-L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6075-L6077) · [Before (L6077-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6077-L6079)

```diff
-         const GC = (0, Mw.d)(),
-           RC = !GC && !0 !== mZ.k.getItem(Kb),
-           AC = !GC && "loading" === (0, fz.y)();
+         const xk = (0, eT.f)(),
+           Pk = !xk && !0 !== pI.m.getItem(Ei),
+           Kk = !xk && "loading" === (0, aF.w)();
```

#### 655. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6082` → after: `L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6080) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6082)

```diff
-         }), AC && !(0, fz.P)() && await (0, gw.b)(PC, {
+         }), Kk && !(0, aF.K)() && await (0, wT.b)(Jk, {
```

#### 656. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6087-L6089` → after: `L6085-L6087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6085-L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6085-L6087) · [Before (L6087-L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6087-L6089)

```diff
-         if (!(0, fz.P)()) {
-           (0, fz.M)() && mZ.k.setItem(Kb, !0);
-           const CC = (0, fz.q)();
+         if (!(0, aF.K)()) {
+           (0, aF.I)() && pI.m.setItem(Ei, !0);
+           const kk = (0, aF.n)();
```

#### 657. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6091-L6092` → after: `L6089-L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6089-L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6089-L6090) · [Before (L6091-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6091-L6092)

```diff
-             site: QZ.u,
-             error: (0, fz.o)(),
+             site: TI.q,
+             error: (0, aF.m)(),
```

#### 658. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6096` → after: `L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6094) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6096)

```diff
-             const zC = null !== CC && void 0 !== CC ? CC : "instantiate",
+             const Fk = null !== kk && void 0 !== kk ? kk : "instantiate",
```

#### 659. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6098` → after: `L6096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6096) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6098)

```diff
-                 (0, JZ.showUnsupported)((0, xQ.m)(zC), Uw.g[zC], (0, fz.j)())
+                 (0, VI.showUnsupported)((0, sX.l)(Fk), mT.g[Fk], (0, aF.k)())
```

#### 660. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6102` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6100) · [Before (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6102)

```diff
-                 const CC = [PC.url().href, Wz.e.url().href];
+                 const kk = [Jk.url().href, ZF.f.url().href];
```

#### 661. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6105` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6103) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6105)

```diff
-                   error: (0, fz.j)(),
+                   error: (0, aF.k)(),
```

#### 662. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6110-L6112` → after: `L6108-L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6108-L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6108-L6110) · [Before (L6110-L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6110-L6112)

```diff
-               const zC = (0, fz.j)(),
-                 ZC = (0, Dz.c)((0, fz.o)());
-               (0, JZ.reportCountedLoadFallback)((0, xQ.m)(CC), Uw.g[CC], zC, ZC), gq(`the wasm client did not ${CC} here (${zC})`, ZC ? "oom" : null)
+               const Fk = (0, aF.k)(),
+                 Ik = (0, YF.b)((0, aF.m)());
+               (0, VI.reportCountedLoadFallback)((0, sX.l)(kk), mT.g[kk], Fk, Ik), qq(`the wasm client did not ${kk} here (${Fk})`, Ik ? "oom" : null)
```

#### 663. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6116-L6117` → after: `L6114-L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6114-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6114-L6115) · [Before (L6116-L6117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6116-L6117)

```diff
-         }(0, oz.T)(PC.url()) && (0, JZ.reportUnstreamedCoreLoad)();
-         const iC = (0, fz.z)();
+         }(0, qF.R)(Jk.url()) && (0, VI.reportUnstreamedCoreLoad)();
+         const zk = (0, aF.y)();
```

#### 664. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6122` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6120) · [Before (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6122)

```diff
-             wasm: iC.YW()
+             wasm: zk.Qt()
```

#### 665. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6125-L6129` → after: `L6123-L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6123-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6123-L6127) · [Before (L6125-L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6125-L6129)

```diff
-             mp: CC
-           } = PC.bindings, zC = CC.jZC();
-           if (zC !== Tz.C) return Uq({
-             site: QZ.c,
-             error: `core ABI ${zC}, page ABI ${Tz.C}`,
+             vH: kk
+           } = Jk.bindings, Fk = kk.DIk();
+           if (Fk !== fF.A) return Bq({
+             site: TI.d,
+             error: `core ABI ${Fk}, page ABI ${fF.A}`,
```

#### 666. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6132` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6130) · [Before (L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6132)

```diff
-           const [ZC, QC] = (0, Tz.ne)();
+           const [Ik, Xk] = (0, fF.le)();
```

#### 667. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6136` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6134) · [Before (L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6136)

```diff
-             site: QZ.c,
+             site: TI.d,
```

#### 668. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6142` → after: `L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6140) · [Before (L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6142)

```diff
-         const hC = new QZ.f(vC, fz.t, {
+         const Ek = new TI.i(Sk, aF.r, {
```

#### 669. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6147` → after: `L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6145) · [Before (L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6147)

```diff
-                 if ("webgpu" !== zC || (0, Mw.b)()) return !1;
+                 if ("webgpu" !== Fk || (0, eT.e)()) return !1;
```

#### 670. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6149-L6150` → after: `L6147-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6147-L6148) · [Before (L6149-L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6149-L6150)

```diff
-                   if (CC.site === QZ.e && (0, ZZ.t)(CC.error)) return "frames_refused";
-                   return CC.site === Yb && (0, ZZ.w)(CC.error) ? "start_failed" : null
+                   if (kk.site === TI.f && (0, XI.j)(kk.error)) return "frames_refused";
+                   return kk.site === Oi && (0, XI.l)(kk.error) ? "start_failed" : null
```

#### 671. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6153-L6154` → after: `L6151-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6151-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6151-L6152) · [Before (L6153-L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6153-L6154)

```diff
-                 if (null !== (0, ZZ.W)(wC, QC)) return (0, JZ.countRenderLost)(wC, CC.error, Ef), !1;
-                 return ez.G.reloaded(null, !1), (0, JZ.reportRenderReload)("webgpu", "start_failed" === wC ? 0 : 1, ZC, {
+                 if (null !== (0, XI.M)(Tk, Xk)) return (0, VI.countRenderLost)(Tk, kk.error, Gl), !1;
+                 return vF.F.reloaded(null, !1), (0, VI.reportRenderReload)("webgpu", "start_failed" === Tk ? 0 : 1, Ik, {
```

#### 672. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6172` → after: `L6170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6170) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6172)

```diff
-             })) && ((0, Mw.z)(), wo.deviceLost(), "webgpu" === NC && ez.G.lost()), null === (ZC = yf) || void 0 === ZC || ZC.coreErrors(CC);
+             })) && ((0, eT.z)(), Fa.deviceLost(), "webgpu" === Zk && vF.F.lost()), null === (Ik = Bl) || void 0 === Ik || Ik.coreErrors(kk);
```

#### 673. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6176` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6174) · [Before (L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6176)

```diff
-                 return CC === Tz.N.EnvUnknownSky ? (0, JZ.unknownSkyWords)(pz.e.get("skyBox")) : null === (ZC = lf) || void 0 === ZC ? void 0 : ZC.yZC(CC, zC)
+                 return kk === fF.N.EnvUnknownSky ? (0, VI.unknownSkyWords)(JF.e.get("skyBox")) : null === (Ik = pl) || void 0 === Ik ? void 0 : Ik.MIk(kk, Fk)
```

#### 674. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6189-L6194` → after: `L6187-L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6187-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6187-L6192) · [Before (L6189-L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6189-L6194)

```diff
-               if ((0, Mw.b)()) return;
-               const fC = zC === Tz.Vc.WEBGPU,
-                 oC = QC === Tz.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 qC = QC === Tz.Vc.RESTORE_LOST,
-                 FC = fC && (0, ez.o)(Ef.adapter, ZC, "lost" === oC, qC),
-                 WC = (0, ZZ.Z)(lf);
+               if ((0, eT.e)()) return;
+               const lk = Fk === fF.Xc.WEBGPU,
+                 ak = Xk === fF.Xc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 qk = Xk === fF.Xc.RESTORE_LOST,
+                 Lk = lk && (0, vF.p)(Gl.adapter, Ik, "lost" === ak, qk),
+                 tk = (0, XI.N)(pl);
```

#### 675. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6196` → after: `L6194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6194) · [Before (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6196)

```diff
-               const NC = fC ? (0, ZZ.W)(oC, wC) : null;
+               const Zk = lk ? (0, XI.M)(ak, Tk) : null;
```

#### 676. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6199-L6200` → after: `L6197-L6198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6197-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6197-L6198) · [Before (L6199-L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6199-L6200)

```diff
-                 const zC = void 0 === WC ? "" : ` (${WC.message})`;
-                 return void CC.crash(JZ.RENDER_RELOAD_SITE, new Error(`${(0,JZ.renderReloadMessage)("webgpu",oC,ZC)} and ${NC}${zC}`))
+                 const Fk = void 0 === tk ? "" : ` (${tk.message})`;
+                 return void kk.crash(VI.RENDER_RELOAD_SITE, new Error(`${(0,VI.renderReloadMessage)("webgpu",ak,Ik)} and ${Zk}${Fk}`))
```

#### 677. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6204` → after: `L6202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6202) · [Before (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6204)

```diff
-               fC || (0, Mz.v)();
+               lk || (0, eF.s)();
```

#### 678. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6217` → after: `L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6215) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6217)

```diff
-             CC.kind === Tz.ab.SkyImages ? null === (zC = Hn) || void 0 === zC || zC.onEvent(CC.payload) : CC.kind === Tz.ab.EnvLighting && (En = 1 === CC.payload[0])
+             kk.kind === fF.X.SkyImages ? null === (Fk = py) || void 0 === Fk || Fk.onEvent(kk.payload) : kk.kind === fF.X.EnvLighting && (uy = 1 === kk.payload[0])
```

#### 679. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6239` → after: `L6237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6237) · [Before (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6239)

```diff
-                   !1 !== zC || CC.isStopped ? !0 === zC && console.info(`${hb} terrain textures handed over again after the renderer lost them`) : console.warn(`${hb} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== Fk || kk.isStopped ? !0 === Fk && console.info(`${vi} terrain textures handed over again after the renderer lost them`) : console.warn(`${vi} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 680. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6245` → after: `L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6243) · [Before (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6245)

```diff
-             const zC = null === of ? void 0 : qf.get(of);
+             const Fk = null === ll ? void 0 : al.get(ll);
```

#### 681. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6251` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6249) · [Before (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6251)

```diff
-               if (CC.forEachNetOut(jq), Tq(CC), (0, QZ.K)(CC, {
+               if (kk.forEachNetOut(cq), Rq(kk), (0, TI.F)(kk, {
```

#### 682. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6262-L6263` → after: `L6260-L6261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6260-L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6260-L6261) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6262-L6263)

```diff
-         if (Qn = hC, null === (nC = Yz.e.wasmNetReady) || void 0 === nC || nC.call(Yz.e, (() => hC.isStopped ? 0 : hC.netKeptFrames)), null !== CC) {
-           hC.setAntiCheatProbes(Gb(fz.t, CC.checks)), CC.watchHeld(Ab.CoreFrame, (() => hC.frame)), CC.watchHeld(Ab.GlueFrame, (() => vC.frame));
+         if (iy = Ek, null === (yk = nF.b.wasmNetReady) || void 0 === yk || yk.call(nF.b, (() => Ek.isStopped ? 0 : Ek.netKeptFrames)), null !== kk) {
+           Ek.setAntiCheatProbes(xi(aF.r, kk.checks)), kk.watchHeld(Ki.CoreFrame, (() => Ek.frame)), kk.watchHeld(Ki.GlueFrame, (() => Sk.frame));
```

#### 683. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6267` → after: `L6265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6265) · [Before (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6267)

```diff
-             ZC.ZN(CC.ZN());
+             Ik.Dt(kk.Dt());
```

#### 684. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6269` → after: `L6267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6267) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6269)

```diff
-               ZC.ZN(CC.ZN())
+               Ik.Dt(kk.Dt())
```

#### 685. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6271` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6269) · [Before (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6271)

```diff
-             let bC = 6 * (0, mQ.N)() | 0;
+             let ik = 6 * (0, pX.O)() | 0;
```

#### 686. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6275` → after: `L6273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6273) · [Before (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6275)

```diff
-             (0, Zb.g)(nC);
+             (0, Ii.i)(yk);
```

#### 687. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6280` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6278) · [Before (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6280)

```diff
-             return (0, zb.i)(fC), {
+             return (0, Fi.e)(lk), {
```

#### 688. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6287` → after: `L6285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6285) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6287)

```diff
-                 ZC.value(Tz.k.ProbeUsedProp, CC.usedProp()), 0 !== QC && ZC.setFlags(QC)
+                 Ik.value(fF.h.ProbeUsedProp, kk.usedProp()), 0 !== Xk && Ik.setFlags(Xk)
```

#### 689. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6290` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6288) · [Before (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6290)

```diff
-                 (0, mQ.ab)(wC), (0, Zb.e)(nC), (0, zb.f)(fC)
+                 (0, pX.Z)(Tk), (0, Ii.g)(yk), (0, Fi.c)(lk)
```

#### 690. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6296` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6294) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6296)

```diff
-               QC = hC.rings.input.writeRecord(Tz.wb.AntiCheat, CC, zC, ZC, 0)
+               Xk = Ek.rings.input.writeRecord(fF.rb.AntiCheat, kk, Fk, Ik, 0)
```

#### 691. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6301` → after: `L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6299) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6301)

```diff
-         Ub = (CC, zC, ZC) => hC.rings.cmd.writeCmd(CC, zC, ZC), Bb = CC => hC.rings.cmd.growForCmd(CC), zf = !1, pq(), (0, IC.B)(hC, {
+         ri = (kk, Fk, Ik) => Ek.rings.cmd.writeCmd(kk, Fk, Ik), Di = kk => Ek.rings.cmd.growForCmd(kk), kl = !1, tq(), (0, Vk.C)(Ek, {
```

#### 692. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6303` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6301) · [Before (L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6303)

```diff
-           memory: fz.t,
+           memory: aF.r,
```

#### 693. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6325` → after: `L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6323) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6325)

```diff
-             return null !== (null !== (zC = null === (ZC = Pq()) || void 0 === ZC ? void 0 : ZC.modelUrl(CC)) && void 0 !== zC ? zC : null)
+             return null !== (null !== (Fk = null === (Ik = Zq()) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null)
```

#### 694. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6329` → after: `L6327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6327) · [Before (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6329)

```diff
-         }), (0, JC.B)({
+         }), (0, sk.F)({
```

#### 695. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6340` → after: `L6338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6338) · [Before (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6340)

```diff
-             (0, EZ.e)()
+             (0, bI.d)()
```

#### 696. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6346` → after: `L6344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6344) · [Before (L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6346)

```diff
-         }), Kn = (0, JC.r)((() => {
+         }), Ey = (0, sk.y)((() => {
```

#### 697. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6349` → after: `L6347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6347) · [Before (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6349)

```diff
-           null === (CC = (0, IC.u)()) || void 0 === CC || CC.followCursorAim(!0 === (null === zC || void 0 === zC ? void 0 : zC.isSessionLive) ? zC : null)
+           null === (kk = (0, Vk.y)()) || void 0 === kk || kk.followCursorAim(!0 === (null === Fk || void 0 === Fk ? void 0 : Fk.isSessionLive) ? Fk : null)
```

#### 698. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6355-L6358` → after: `L6353-L6356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6353-L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6353-L6356) · [Before (L6355-L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6355-L6358)

```diff
-         const YC = (0, GZ.e)(),
-           dC = (0, GZ.b)(hC, YC);
-         vn = YC.basis, (0, dZ.n)(null === dC ? null : (0, PZ.n)(dC)), In = dC;
-         const mC = (0, qz.e)();
+         const nk = (0, PI.i)(),
+           Gk = (0, PI.g)(Ek, nk);
+         Sy = nk.basis, (0, GI.n)(null === Gk ? null : (0, xI.r)(Gk)), zy = Gk;
+         const pk = (0, LF.d)();
```

#### 699. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6362-L6363` → after: `L6360-L6361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6360-L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6360-L6361) · [Before (L6362-L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6362-L6363)

```diff
-         const XC = new jQ.e(mC, (() => vC.Lp()), (CC => {
-           hC.crash(QZ.i, CC)
+         const Uk = new AX.b(pk, (() => Sk.fH()), (kk => {
+           Ek.crash(TI.l, kk)
```

#### 700. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6365` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6363) · [Before (L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6365)

```diff
-         xn = XC, Jn = XC, null !== dC && XC.setCeiling(Math.min((0, jQ.p)(dC), HC, (0, GZ.h)()));
+         sy = Uk, Vy = Uk, null !== Gk && Uk.setCeiling(Math.min((0, AX.i)(Gk), uk, (0, PI.m)()));
```

#### 701. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6369` → after: `L6367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6367) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6369)

```diff
-             return null !== zC && (null === In || zC < In) && (In = zC, (0, dZ.n)((0, PZ.n)(zC))), zC
+             return null !== Fk && (null === zy || Fk < zy) && (zy = Fk, (0, GI.n)((0, xI.r)(Fk))), Fk
```

#### 702. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6371` → after: `L6369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6369) · [Before (L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6371)

```diff
-             1 === zC ? (0, JZ.reportMemoryShed)(CC, ZC, qn) : console.warn(`${hb} wasm memory: shed again (${CC}): shed ${zC}`, ZC.wasmMemoryShed)
+             1 === Fk ? (0, VI.reportMemoryShed)(kk, Ik, Ly) : console.warn(`${vi} wasm memory: shed again (${kk}): shed ${Fk}`, Ik.wasmMemoryShed)
```

#### 703. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6373` → after: `L6371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6371) · [Before (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6373)

```diff
-           const CC = (0, ZZ.O)(iC);
+           const kk = (0, XI.B)(zk);
```

#### 704. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6375` → after: `L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6373) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6375)

```diff
-             storedChunks: () => vC.LZC(),
+             storedChunks: () => Sk.kXk(),
```

#### 705. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6378` → after: `L6376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6376) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6378)

```diff
-               return null !== (zC = null === CC || void 0 === CC ? void 0 : CC.UZC()) && void 0 !== zC ? zC : 0
+               return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.FXk()) && void 0 !== Fk ? Fk : 0
```

#### 706. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6386-L6387` → after: `L6384-L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6384-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6384-L6385) · [Before (L6386-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6386-L6387)

```diff
-         const [cC, uC] = (0, vZ.h)();
-         Uf = (0, hZ.f)((CC => hC.setChunkAddDistance(CC.horizontal, CC.vertical)), {
+         const [Ck, Nk] = (0, oI.e)();
+         Yl = (0, EI.c)((kk => Ek.setChunkAddDistance(kk.horizontal, kk.vertical)), {
```

#### 707. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6390-L6392` → after: `L6388-L6390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6388-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6388-L6390) · [Before (L6390-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6390-L6392)

```diff
-         }), hC.setAmbientOcclusion(!0 !== mZ.i.getItem("disableAmbientOcclusion")), hC.setPoseLod(!0 !== mZ.i.getItem(bz.P)), (0, sw.k)("look") && (hC.setDebugLog(Tz.T.Look, !0), hC.setDebugLog(Tz.T.CameraSet, !0), (0, aw.k)("wasm", {
-           look: () => hC.takeDebugLog(Tz.T.Look),
-           cameraSets: () => hC.takeDebugLog(Tz.T.CameraSet)
+         }), Ek.setAmbientOcclusion(!0 !== pI.j.getItem("disableAmbientOcclusion")), Ek.setPoseLod(!0 !== pI.j.getItem(yF.Q)), (0, cT.o)("look") && (Ek.setDebugLog(fF.P.Look, !0), Ek.setDebugLog(fF.P.CameraSet, !0), (0, fT.j)("wasm", {
+           look: () => Ek.takeDebugLog(fF.P.Look),
+           cameraSets: () => Ek.takeDebugLog(fF.P.CameraSet)
```

#### 708. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6394` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6392) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6394)

```diff
-         (0, sw.k)("remesh") && (hC.setDebugLog(Tz.T.Remesh, !0), rC = () => hC.takeDebugLog(Tz.T.Remesh), Lw = new yw((0, tw.l)(), rC));
+         (0, cT.o)("remesh") && (Ek.setDebugLog(fF.P.Remesh, !0), ck = () => Ek.takeDebugLog(fF.P.Remesh), gT = new AT((0, BT.n)(), ck));
```

#### 709. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6398-L6400` → after: `L6396-L6398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6396-L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6396-L6398) · [Before (L6398-L6400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6398-L6400)

```diff
-             bC = CC => mZ.i.getItem(CC);
-           wC.sync(bC, zC), (0, hz.W)();
-           const nC = (0, oC.q)("customBindingsChanged", (() => {
+             ik = kk => pI.j.getItem(kk);
+           Tk.sync(ik, Fk), (0, EF._)();
+           const yk = (0, ak.i)("customBindingsChanged", (() => {
```

#### 710. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6403` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6401) · [Before (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6403)

```diff
-           (0, lZ.n)(zC);
+           (0, RI.k)(Fk);
```

#### 711. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6405` → after: `L6403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6403) · [Before (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6405)

```diff
-             qC = (0, JC.r)((() => {
+             qk = (0, sk.y)((() => {
```

#### 712. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6407` → after: `L6405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6405) · [Before (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6407)

```diff
-               fC.size > 0 && gQ() && !0 === (null === (CC = (0, IC.k)()) || void 0 === CC ? void 0 : CC.localPlayerAlive()) && oC.o.bp("usedKeyboard")
+               lk.size > 0 && wX() && !0 === (null === (kk = (0, Vk.k)()) || void 0 === kk ? void 0 : kk.localPlayerAlive()) && ak.g.GL("usedKeyboard")
```

#### 713. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6409` → after: `L6407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6407) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6409)

```diff
-             FC = zQ.d.heldSizer((() => (0, dz.m)(CC))),
+             Lk = IX.c.heldSizer((() => (0, GF.i)(kk))),
```

#### 714. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6413` → after: `L6411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6411) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6413)

```diff
-                 wC.moves(CC) && (fC.add(CC), gQ() && oC.o.bp("usedKeyboard"))
+                 Tk.moves(kk) && (lk.add(kk), wX() && ak.g.GL("usedKeyboard"))
```

#### 715. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6422` → after: `L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6420) · [Before (L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6422)

```diff
-                 NQ.h.measure(CC.getBoundingClientRect()), (0, ZQ.h)()
+                 jX.l.measure(kk.getBoundingClientRect()), (0, XX.l)()
```

#### 716. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6426-L6427` → after: `L6424-L6425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6424-L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6424-L6425) · [Before (L6426-L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6426-L6427)

```diff
-                 const ZC = (0, dz.p)(CC, zC),
-                   QC = zQ.d.onRelease(zC);
+                 const Ik = (0, GF.l)(kk, Fk),
+                   Xk = IX.c.onRelease(Fk);
```

#### 717. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6433` → after: `L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6431) · [Before (L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6433)

```diff
-                 NQ.h.measure(CC.getBoundingClientRect())
+                 jX.l.measure(kk.getBoundingClientRect())
```

#### 718. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6436` → after: `L6434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6434) · [Before (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6436)

```diff
-               touchUiShown: () => jC.b.get("isTouchScreen"),
+               touchUiShown: () => Ak.d.get("isTouchScreen"),
```

#### 719. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6443` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6441) · [Before (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6443)

```diff
-             NC = (0, qZ.b)(zC);
+             Zk = (0, LI.e)(Fk);
```

#### 720. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6445` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6443) · [Before (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6445)

```diff
-             nC(), qC(), (0, lZ.n)(null), NC(), WC()
+             yk(), qk(), (0, RI.k)(null), Zk(), tk()
```

#### 721. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6450` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6448) · [Before (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6450)

```diff
-           })), !kn && (0, RQ.d)(CC, wC) && (0, RQ.b)((() => {
+           })), !ry && (0, KX.e)(kk, Tk) && (0, KX.b)((() => {
```

#### 722. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6461-L6462` → after: `L6459-L6460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6459-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6459-L6460) · [Before (L6461-L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6461-L6462)

```diff
-         (0, fz.U)((() => {
-           "call" === (0, fz.q)() && hC.crash(QZ.u, (0, fz.o)())
+         (0, aF.N)((() => {
+           "call" === (0, aF.n)() && Ek.crash(TI.q, (0, aF.m)())
```

#### 723. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6464` → after: `L6462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6462) · [Before (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6464)

```diff
-         const aC = (0, QZ.L)(hC.rings.worker, (() => {
+         const Bk = (0, TI.I)(Ek.rings.worker, (() => {
```

#### 724. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6474` → after: `L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6472) · [Before (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6474)

```diff
-             module: (0, fz.w)(),
+             module: (0, aF.u)(),
```

#### 725. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6476` → after: `L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6474) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6476)

```diff
-               const zC = (0, IC.u)();
+               const Fk = (0, Vk.y)();
```

#### 726. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6493` → after: `L6491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6491) · [Before (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6493)

```diff
-               (0, JZ.reportWorkerLost)(QZ.B, CC, qn)
+               (0, VI.reportWorkerLost)(TI.x, kk, Ly)
```

#### 727. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6496` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6494) · [Before (L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6496)

```diff
-               (0, JZ.reportWorkerStartTimeout)(QZ.B, CC, qn)
+               (0, VI.reportWorkerStartTimeout)(TI.x, kk, Ly)
```

#### 728. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6511` → after: `L6509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6509) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6511)

```diff
-                 CC.rings.worker.writeWorkerRecord(ZC, QC, wC, 0, bC, nC) || CC.crash(QZ.B, `a world-gen record of kind ${QC} did not fit the worker-in ring`)
+                 kk.rings.worker.writeWorkerRecord(Ik, Xk, Tk, 0, ik, yk) || kk.crash(TI.x, `a world-gen record of kind ${Xk} did not fit the worker-in ring`)
```

#### 729. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6517` → after: `L6515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6515) · [Before (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6517)

```diff
-             module: (0, fz.w)(),
+             module: (0, aF.u)(),
```

#### 730. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6521` → after: `L6519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6519) · [Before (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6521)

```diff
-               }, zC] = await Promise.all([ZC.e(40).then((() => ZC(50769))), Promise.resolve().then((() => ZC(77))).then((CC => {
+               }, Fk] = await Promise.all([Ik.e(40).then((() => Ik(51017))), Promise.resolve().then((() => Ik(95))).then((kk => {
```

#### 731. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6529` → after: `L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6527) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6529)

```diff
-                 count: (0, Jz.c)(navigator.hardwareConcurrency, zC),
+                 count: (0, VF.d)(navigator.hardwareConcurrency, Fk),
```

#### 732. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6534-L6535` → after: `L6532-L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6532-L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6532-L6533) · [Before (L6534-L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6534-L6535)

```diff
-               (0, ZQ.f)(), QF(CC, (() => {
-                 CC.rings.worker.writeWorkerRecord(ZC, QC, wC, bC, nC, fC) || CC.crash(QZ.m, `a meshing record of kind ${QC} did not fit the worker-in ring`)
+               (0, XX.j)(), Dq(kk, (() => {
+                 kk.rings.worker.writeWorkerRecord(Ik, Xk, Tk, ik, yk, lk) || kk.crash(TI.m, `a meshing record of kind ${Xk} did not fit the worker-in ring`)
```

#### 733. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6557` → after: `L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6555) · [Before (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6557)

```diff
-                 CC.crash(QZ.m, void 0 === ZC ? zC : new Error(zC, {
+                 kk.crash(TI.m, void 0 === Ik ? Fk : new Error(Fk, {
```

#### 734. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6568` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6566) · [Before (L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6568)

```diff
-         const yC = (0, bw.p)(Az.clientSideServerUrls.staticUrl, {
+         const gk = (0, yT.j)(QF.clientSideServerUrls.staticUrl, {
```

#### 735. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6579` → after: `L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6577) · [Before (L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6579)

```diff
-               return null !== (zC = null === (ZC = Pq()) || void 0 === ZC ? void 0 : ZC.modelUrl(CC)) && void 0 !== zC ? zC : null
+               return null !== (Fk = null === (Ik = Zq()) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null
```

#### 736. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6585` → after: `L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6583) · [Before (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6585)

```diff
-               return null !== (QC = null === (wC = zC()) || void 0 === wC ? void 0 : wC.drawnUrl(ZC)) && void 0 !== QC ? QC : CC.url(ZC)
+               return null !== (Xk = null === (Tk = Fk()) || void 0 === Tk ? void 0 : Tk.drawnUrl(Ik)) && void 0 !== Xk ? Xk : kk.url(Ik)
```

#### 737. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6587` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6585) · [Before (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6587)

```diff
-             return (0, Qw.m)((0, LQ.l)(QC), ZC)
+             return (0, TT.m)((0, mX.o)(Xk), Ik)
```

#### 738. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6589-L6590` → after: `L6587-L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6587-L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6587-L6588) · [Before (L6589-L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6589-L6590)

```diff
-           UC = new LQ.e(LC, (CC => {
-             console.warn(`${hb} image ${CC.key.kind}:${CC.key.index}:${CC.key.word} failed`, CC.error)
+           hk = new mX.g(mk, (kk => {
+             console.warn(`${vi} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
```

#### 739. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6593` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6591) · [Before (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6593)

```diff
-           void 0 === zC ? console.warn(`${hb} ${CC}`) : Rq(CC, zC)
+           void 0 === Fk ? console.warn(`${vi} ${kk}`) : eq(kk, Fk)
```

#### 740. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6630` → after: `L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6628) · [Before (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6630)

```diff
-             fC = ZC.e(42).then((() => ZC(50772))).then((CC => {
+             lk = Ik.e(42).then((() => Ik(51022))).then((kk => {
```

#### 741. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6643-L6644` → after: `L6641-L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6641-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6641-L6642) · [Before (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6643-L6644)

```diff
-             return null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.build(CC, zC)) && void 0 !== QC ? QC : (0, nw.u)(CC, "the model workers did not load")
-           })).then((CC => null !== bC && (0, nw.n)(CC) ? bC.then((() => CC)) : CC))
+             return null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.build(kk, Fk)) && void 0 !== Xk ? Xk : (0, lT.q)(kk, "the model workers did not load")
+           })).then((kk => null !== ik && (0, lT.k)(kk) ? ik.then((() => kk)) : kk))
```

#### 742. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6661` → after: `L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6659) · [Before (L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6661)

```diff
-             console.warn(`${hb} the texture pack's model file ${CC} failed: the shipped one loads`, zC)
+             console.warn(`${vi} the texture pack's model file ${kk} failed: the shipped one loads`, Fk)
```

#### 743. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6665` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6663) · [Before (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6665)

```diff
-         const OC = new OQ.c(hC);
+         const Dk = new DX.g(Ek);
```

#### 744. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6674` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6672) · [Before (L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6674)

```diff
-             site: QZ.A,
+             site: TI.v,
```

#### 745. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6681` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6679) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6681)

```diff
-           null !== CC && (CC || hC.isStopped || console.warn(`${hb} the core refused the terrain textures: terrain draws untextured`), tn(hC))
+           null !== kk && (kk || Ek.isStopped || console.warn(`${vi} the core refused the terrain textures: terrain draws untextured`), fy(Ek))
```

#### 746. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6684` → after: `L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6682) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6684)

```diff
-           console.warn(`${hb} ${CC}`, ...void 0 === zC ? [] : [zC])
+           console.warn(`${vi} ${kk}`, ...void 0 === Fk ? [] : [Fk])
```

#### 747. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6694` → after: `L6692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6692) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6694)

```diff
-               FC = !0, null === (CC = qC) || void 0 === CC || CC(), null === (zC = fC) || void 0 === zC || zC(), ww.e.setSettled(null), null !== Fn && Go.clear(Fn)
+               Lk = !0, null === (kk = qk) || void 0 === kk || kk(), null === (Fk = lk) || void 0 === Fk || Fk(), iT.b.setSettled(null), null !== ty && wa.clear(ty)
```

#### 748. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6698` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6696) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6698)

```diff
-             null !== qC && Promise.all([ZC.e(201), ZC.e(45)]).then((() => ZC(50734))).then((ZC => {
+             null !== qk && Promise.all([Ik.e(201), Ik.e(45)]).then((() => Ik(50985))).then((Ik => {
```

#### 749. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6716` → after: `L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6714) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6716)

```diff
-                     null !== CC && console.info(`${hb} texture pack models: ${CC.resent} of ${CC.delivered} files written again, ${CC.refetched} refetched`)
+                     null !== kk && console.info(`${vi} texture pack models: ${kk.resent} of ${kk.delivered} files written again, ${kk.refetched} refetched`)
```

#### 750. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6721` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6719) · [Before (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6721)

```diff
-                   (ww.e.setSettled({
+                   (iT.b.setSettled({
```

#### 751. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6725` → after: `L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6723) · [Before (L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6725)

```diff
-                     const QC = null === CC.gameSource && (0, IZ.d)(CC.pack);
+                     const Xk = null === kk.gameSource && (0, zI.i)(kk.pack);
```

#### 752. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6729` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6727) · [Before (L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6729)

```diff
-                     oC.o.bp(xZ.b, {
+                     ak.g.GL(sI.c, {
```

#### 753. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6737` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6735) · [Before (L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6737)

```diff
-                       zC && CC && console.info(`${hb} the texture pack's animations are in (${Object.keys(CC).length} files)`)
+                       Fk && kk && console.info(`${vi} the texture pack's animations are in (${Object.keys(kk).length} files)`)
```

#### 754. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6742` → after: `L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6740) · [Before (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6742)

```diff
-                   ww.e.setSettled(null)
+                   iT.b.setSettled(null)
```

#### 755. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6745` → after: `L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6743) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6745)

```diff
-                 maxTextureSize: () => Promise.resolve((0, ZZ.db)(document.createElement("canvas")))
+                 maxTextureSize: () => Promise.resolve((0, XI.S)(document.createElement("canvas")))
```

#### 756. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6749` → after: `L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6747) · [Before (L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6749)

```diff
-               console.warn(`${hb} the texture pack's terrain didn't load: the built atlas stays`, CC)
+               console.warn(`${vi} the texture pack's terrain didn't load: the built atlas stays`, kk)
```

#### 757. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6757` → after: `L6755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6755) · [Before (L6757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6757)

```diff
-             (Rz ??= ZC.e(53).then((() => ZC(50777))).then((CC => {
+             (KF ??= Ik.e(53).then((() => Ik(51028))).then((kk => {
```

#### 758. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6765` → after: `L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6763) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6765)

```diff
-               hC.setTextureLayers(CC) || hC.isStopped || (console.warn(`${hb} the core refused the texture names: textured Boxes draw textureNotFound`), VC())
+               Ek.setTextureLayers(kk) || Ek.isStopped || (console.warn(`${vi} the core refused the texture names: textured Boxes draw textureNotFound`), kF())
```

#### 759. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6773` → after: `L6771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6771) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6773)

```diff
-                 console.warn(`${hb} the texture names didn't load, so textured Boxes draw textureNotFound`, zC), VC()
+                 console.warn(`${vi} the texture names didn't load, so textured Boxes draw textureNotFound`, Fk), kF()
```

#### 760. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6783-L6784` → after: `L6781-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6781-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6781-L6782) · [Before (L6783-L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6783-L6784)

```diff
-             const oC = (0, ZZ.O)(ZC);
-             if (null === oC) return CC.crash(Yb, new Error(`this ${QC} build has no openRenderer`)), !1;
+             const ak = (0, XI.B)(Ik);
+             if (null === ak) return kk.crash(Oi, new Error(`this ${Xk} build has no openRenderer`)), !1;
```

#### 761. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6789-L6790` → after: `L6787-L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6787-L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6787-L6788) · [Before (L6789-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6789-L6790)

```diff
-               const wC = null !== (FC = null === (WC = zn) || void 0 === WC ? void 0 : WC.pagePreviews()) && void 0 !== FC ? FC : null,
-                 fC = null !== (NC = null === (MC = zn) || void 0 === MC ? void 0 : MC.previewModule(ZC)) && void 0 !== NC ? NC : null;
+               const Tk = null !== (Lk = null === (tk = Xy) || void 0 === tk ? void 0 : tk.pagePreviews()) && void 0 !== Lk ? Lk : null,
+                 lk = null !== (Zk = null === (jk = Xy) || void 0 === jk ? void 0 : jk.previewModule(Ik)) && void 0 !== Zk ? Zk : null;
```

#### 762. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6792-L6794` → after: `L6790-L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6790-L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6790-L6792) · [Before (L6792-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6792-L6794)

```diff
-                 null === wC || void 0 === wC || wC.endSession(!1), qC = (0, dz.h)().sampleCount, await (0, ZZ.h)(zC, oC, nC, Sq, qC, await bC);
-                 const CC = (0, ZZ.o)(ZC);
-                 null === CC && console.warn(`${hb} this ${QC} build has no image registry: sky and model images won't show`), (0, BQ.i)(CC)
+                 null === Tk || void 0 === Tk || Tk.endSession(!1), qk = (0, GF.d)().sampleCount, await (0, XI.e)(Fk, ak, yk, Lq, qk, await ik);
+                 const kk = (0, XI.g)(Ik);
+                 null === kk && console.warn(`${vi} this ${Xk} build has no image registry: sky and model images won't show`), (0, rX.f)(kk)
```

#### 763. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6796-L6797` → after: `L6794-L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6794-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6794-L6795) · [Before (L6796-L6797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6796-L6797)

```diff
-                 (0, Mw.b)() && await (0, DC.l)();
-                 const ZC = (0, Mw.K)();
+                 (0, eT.e)() && await (0, Yk.k)();
+                 const Ik = (0, eT.N)();
```

#### 764. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6799-L6800` → after: `L6797-L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6797-L6798) · [Before (L6799-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6799-L6800)

```diff
-                   const zC = (0, ZZ.Z)(oC);
-                   return CC.crash(JZ.RENDER_RELOAD_SITE, new Error(`${ZC}${void 0===zC?"":` (${zC.message})`}`)), !1
+                   const Fk = (0, XI.N)(ak);
+                   return kk.crash(VI.RENDER_RELOAD_SITE, new Error(`${Ik}${void 0===Fk?"":` (${Fk.message})`}`)), !1
```

#### 765. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6802` → after: `L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6800) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6802)

```diff
-                 qC = await wC.bindSession(fC, zC, (async CC => (0, ZZ.y)(oC, Yb, nC, CC, Sq, await bC)))
+                 qk = await Tk.bindSession(lk, Fk, (async kk => (0, XI.n)(ak, Oi, yk, kk, Lq, await ik)))
```

#### 766. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6819` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6817) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6819)

```diff
-                   return null !== (CC = wC.call(ZC)) && void 0 !== CC ? CC : null
+                   return null !== (kk = Tk.call(Ik)) && void 0 !== kk ? kk : null
```

#### 767. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6825` → after: `L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6823) · [Before (L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6825)

```diff
-             return Ef.boundAtMs = null !== (fC = (0, Mw.L)()) && void 0 !== fC ? fC : gC, Ef.indirectHangs = (0, Mw.B)(), Ef.restoresSkipped = (0, Mw.M)(), console.info(`${hb} ${QC} renderer bound at ${Math.round(gC)} ms`), !CC.isStopped
+             return Gl.boundAtMs = null !== (lk = (0, eT.O)()) && void 0 !== lk ? lk : ek, Gl.indirectHangs = (0, eT.C)(), Gl.restoresSkipped = (0, eT.P)(), console.info(`${vi} ${Xk} renderer bound at ${Math.round(ek)} ms`), !kk.isStopped
```

#### 768. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6829` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6827) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6829)

```diff
-           (0, Fz.E)(NC);
+           (0, tF.L)(Zk);
```

#### 769. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6831` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6829) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6831)

```diff
-           ZC.e(194).then((() => ZC(34040))).then((zC => {
+           Ik.e(194).then((() => Ik(34044))).then((Fk => {
```

#### 770. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6844` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6842) · [Before (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6844)

```diff
-                   "screenshot" === zC && null === bC ? await (0, qw.e)(CC, QC, wC) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
+                   "screenshot" === Fk && null === ik ? await (0, LT.f)(kk, Xk, Tk) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
```

#### 771. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6847` → after: `L6845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6845) · [Before (L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6847)

```diff
-                 capturePhoto: (zC, ZC, QC) => (0, qw.d)(CC, zC, ZC, QC)
+                 capturePhoto: (Fk, Ik, Xk) => (0, LT.c)(kk, Fk, Ik, Xk)
```

#### 772. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6855` → after: `L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6853) · [Before (L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6855)

```diff
-                   (0, lZ.s)(Tz.wb.Resize, 0, CC / ZC, zC / ZC, (0, lZ.j)(ZC))
+                   (0, RI.q)(fF.rb.Resize, 0, kk / Ik, Fk / Ik, (0, RI.h)(Ik))
```

#### 773. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6858-L6859` → after: `L6856-L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6856-L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6856-L6857) · [Before (L6858-L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6858-L6859)

```diff
-                   const zC = (0, dz.m)(CC);
-                   null !== zC && (0, lZ.s)(Tz.wb.Resize, 0, zC.cssWidth, zC.cssHeight, (0, lZ.j)(zC.renderScale))
+                   const Fk = (0, GF.i)(kk);
+                   null !== Fk && (0, RI.q)(fF.rb.Resize, 0, Fk.cssWidth, Fk.cssHeight, (0, RI.h)(Fk.renderScale))
```

#### 774. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6867` → after: `L6865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6865) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6867)

```diff
-             console.warn(`${hb} the developer tools didn't load: no captures this session`, CC)
+             console.warn(`${vi} the developer tools didn't load: no captures this session`, kk)
```

#### 775. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6869` → after: `L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6867) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6869)

```diff
-           const zC = "webgpu" === NC && null !== (zz = null === FC || void 0 === FC || null === (Zz = FC.adapter) || void 0 === Zz ? void 0 : Zz.vendor) && void 0 !== zz ? zz : null;
+           const Fk = "webgpu" === Zk && null !== (IF = null === Lk || void 0 === Lk || null === (XF = Lk.adapter) || void 0 === XF ? void 0 : XF.vendor) && void 0 !== IF ? IF : null;
```

#### 776. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6873` → after: `L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6871) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6873)

```diff
-             fallbackReason: null !== (Qz = null === FC || void 0 === FC ? void 0 : FC.reason) && void 0 !== Qz ? Qz : null,
+             fallbackReason: null !== (TF = null === Lk || void 0 === Lk ? void 0 : Lk.reason) && void 0 !== TF ? TF : null,
```

#### 777. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6877` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6875) · [Before (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6877)

```diff
-             (0, ZQ.t)(NC, pC, zC)
+             (0, XX.o)(Zk, Hk, Fk)
```

#### 778. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6879` → after: `L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6877) · [Before (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6879)

```diff
-             (0, ZQ.u)(), console.error(`${hb} the quality steps didn't start`, wC)
+             (0, XX.s)(), console.error(`${vi} the quality steps didn't start`, Tk)
```

#### 779. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6886-L6888` → after: `L6884-L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6884-L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6884-L6886) · [Before (L6886-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6886-L6888)

```diff
-         nz && console.warn(`${hb} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
-         const Nz = (0, tC.e)(FC, (0, ez.k)());
-         if ((0, sw.k)("webgpuloss")) {
+         lF && console.warn(`${vi} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
+         const jF = (0, dk.g)(Lk, (0, vF.l)());
+         if ((0, cT.o)("webgpuloss")) {
```

#### 780. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6892-L6893` → after: `L6890-L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6890-L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6890-L6891) · [Before (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6892-L6893)

```diff
-             reason: null !== (Pz = null === FC || void 0 === FC ? void 0 : FC.reason) && void 0 !== Pz ? Pz : null,
-             source: null !== (Gz = null === FC || void 0 === FC ? void 0 : FC.source) && void 0 !== Gz ? Gz : null,
+             reason: null !== (xF = null === Lk || void 0 === Lk ? void 0 : Lk.reason) && void 0 !== xF ? xF : null,
+             source: null !== (PF = null === Lk || void 0 === Lk ? void 0 : Lk.source) && void 0 !== PF ? PF : null,
```

#### 781. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6897` → after: `L6895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6895) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6897)

```diff
-           (0, Tw.d)((zC => {
+           (0, WT.c)((Fk => {
```

#### 782. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6902-L6903` → after: `L6900-L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6900-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6900-L6901) · [Before (L6902-L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6902-L6903)

```diff
-         if (rn = (0, tC.i)(xz ? hC : null, xz && null !== (fC = null === (qC = zn) || void 0 === qC ? void 0 : qC.pagePreviews().zg) && void 0 !== fC ? fC : null, Nz, Rq), Fo) return null;
-         if (XC.reserveAtJoin((0, jQ.n)(null !== dC && void 0 !== dC ? dC : PZ.d)), hC.isStopped) return null;
+         if (Cy = (0, dk.i)(sF ? Ek : null, sF && null !== (lk = null === (qk = Xy) || void 0 === qk ? void 0 : qk.pagePreviews().ke) && void 0 !== lk ? lk : null, jF, eq), la) return null;
+         if (Uk.reserveAtJoin((0, AX.h)(null !== Gk && void 0 !== Gk ? Gk : xI.h)), Ek.isStopped) return null;
```

#### 783. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6913` → after: `L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6911) · [Before (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6913)

```diff
-             if (hC.writePendingInput(), (0, JC.e)(CC, Xq), hq(!1, CC), null !== jf) try {
+             if (Ek.writePendingInput(), (0, sk.g)(kk, nq), sq(!1, kk), null !== fl) try {
```

#### 784. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6919` → after: `L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6917) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6919)

```diff
-           } else lq(hC, no, "budget") && ((0, Kz.i)(hC.lastFrameKind) && aq() && (0, JC.e)(CC, Xq), hq(no && Qo, CC), wo.frame(hC.lastFrameKind, no && aq(), CC), (0, Kz.d)(hC.lastFrameKind) && ez.G.drew(), Oq(hC), XC.afterFrame(), requestAnimationFrame(Iz))
+           } else Oq(Ek, Xa, "budget") && ((0, OF.f)(Ek.lastFrameKind) && Uq() && (0, sk.g)(kk, nq), sq(Xa && ka, kk), Fa.frame(Ek.lastFrameKind, Xa && Uq(), kk), (0, OF.d)(Ek.lastFrameKind) && vF.F.drew(), Yq(Ek), Uk.afterFrame(), requestAnimationFrame(zF))
```

#### 785. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6923` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6921) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6923)

```diff
-           if (CC.has("inputLog") && (0, WQ.k)((CC => {
+           if (kk.has("inputLog") && (0, ZX.g)((kk => {
```

#### 786. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6929` → after: `L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6927) · [Before (L6929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6929)

```diff
-               console.info(`${MQ} input ${zC} ${ZC?"down":"up"} press ${QC} at ${performance.now().toFixed(1)}`)
+               console.info(`${eX} input ${Fk} ${Ik?"down":"up"} press ${Xk} at ${performance.now().toFixed(1)}`)
```

#### 787. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6952` → after: `L6950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6950) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6952)

```diff
-         (QC(qn), Mn(null !== CC), null !== CC && (ew = performance.now()), Wn(CC), null === CC) ? null === (zC = zn) || void 0 === zC || zC.pagePreviews().endSession(null === (0, fz.q)()): an("booted")
+         (Xk(Ly), ey(null !== kk), null !== kk && (vT = performance.now()), Zy(kk), null === kk) ? null === (Fk = Xy) || void 0 === Fk || Fk.pagePreviews().endSession(null === (0, aF.n)()): Wy("booted")
```

#### 788. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6970` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6968) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6970)

```diff
-         console.warn(`${hb} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, CC)
+         console.warn(`${vi} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, kk)
```

#### 789. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6975` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6973) · [Before (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6975)

```diff
-         this.deps = CC, this.latest = 0, this.vq = null
+         this.deps = kk, this.latest = 0, this.eq = null
```

#### 790. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6985` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6983) · [Before (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6985)

```diff
-         if ((null === (QC = this.vq) || void 0 === QC ? void 0 : QC.module) === CC && (0, Oz.Td)(this.vq.files, zC)) return !1;
+         if ((null === (Xk = this.eq) || void 0 === Xk ? void 0 : Xk.module) === kk && (0, DF.ce)(this.eq.files, Fk)) return !1;
```

#### 791. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6995` → after: `L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6993) · [Before (L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L6995)

```diff
-           return this.vq = {
+           return this.eq = {
```

#### 792. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7001` → after: `L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L6999) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7001)

```diff
-                 ("error" === CC[zC] ? console.error : console.warn)(`Animation for the texture pack: ${CC[zC+1]}: ${CC[zC+2]}`)
+                 ("error" === kk[Fk] ? console.error : console.warn)(`Animation for the texture pack: ${kk[Fk+1]}: ${kk[Fk+2]}`)
```

#### 793. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7008-L7009` → after: `L7006-L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7006-L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7006-L7007) · [Before (L7008-L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7008-L7009)

```diff
-           const QC = (null !== (nC = this.deps.retryAfterMs) && void 0 !== nC ? nC : Vz)[ZC];
-           return void 0 === QC || fC instanceof CZ || (0, kz.j)(CC) || setTimeout((() => {
+           const Xk = (null !== (yk = this.deps.retryAfterMs) && void 0 !== yk ? yk : kI)[Ik];
+           return void 0 === Xk || lk instanceof FI || (0, MF.f)(kk) || setTimeout((() => {
```

#### 794. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7016` → after: `L7014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7014) · [Before (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7016)

```diff
-           return CC.DZC(zC)
+           return kk.rIk(Fk)
```

#### 795. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7018` → after: `L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7016) · [Before (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7018)

```diff
-           throw (0, kz.k)(CC, ZC), ZC
+           throw (0, MF.g)(kk, Ik), Ik
```

#### 796. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7025-L7026` → after: `L7023-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7023-L7024) · [Before (L7025-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7025-L7026)

```diff
-         const zC = this.vq;
-         if (this.vq = null, (null === zC || void 0 === zC ? void 0 : zC.module) === CC && !(0, kz.j)(CC)) try {
+         const Fk = this.eq;
+         if (this.eq = null, (null === Fk || void 0 === Fk ? void 0 : Fk.module) === kk && !(0, MF.f)(kk)) try {
```

#### 797. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7031` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7029) · [Before (L7031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7031)

```diff
-       compiler: yz.e,
+       compiler: gF.d,
```

#### 798. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7047` → after: `L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7045) · [Before (L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7047)

```diff
-           } = await ZC.e(272).then((() => ZC(50720)));
+           } = await Ik.e(272).then((() => Ik(50967)));
```

#### 799. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7068` → after: `L7066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7066) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7068)

```diff
-       const FC = ww.e.rejoinHold();
+       const Lk = iT.b.rejoinHold();
```

#### 800. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7070` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7068) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7070)

```diff
-       const WC = (0, KZ.U)("wasm", zF);
+       const tk = (0, OI.P)("wasm", hq);
```

#### 801. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7078` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7076) · [Before (L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7078)

```diff
-           kind: "wZ"
+           kind: "iI"
```

#### 802. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7083` → after: `L7081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7081) · [Before (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7083)

```diff
-         if (MC = performance.now(), !oC()) CF(null !== (SC = null === (pC = CC.target.session) || void 0 === pC ? void 0 : pC.gameNameWithVariation) && void 0 !== SC ? SC : null);
+         if (jk = performance.now(), !ak()) mq(null !== (wk = null === (Hk = kk.target.session) || void 0 === Hk ? void 0 : Hk.gameNameWithVariation) && void 0 !== wk ? wk : null);
```

#### 803. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7096` → after: `L7094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7094) · [Before (L7096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7096)

```diff
-             if (Jw.d.markGameEngineConstructed(), hw) return;
+             if (VT.c.markGameEngineConstructed(), ET) return;
```

#### 804. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7098-L7099` → after: `L7096-L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7096-L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7096-L7097) · [Before (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7098-L7099)

```diff
-             const QC = Math.max(CC, null !== (zC = iw) && void 0 !== zC ? zC : CC);
-             (0, Iw.j)("ready", Math.max(0, (null !== (ZC = vw) && void 0 !== ZC ? ZC : QC) - QC) / 1e3)
+             const Xk = Math.max(kk, null !== (Fk = ST) && void 0 !== Fk ? Fk : kk);
+             (0, zT.i)("ready", Math.max(0, (null !== (Ik = oT) && void 0 !== Ik ? Ik : Xk) - Xk) / 1e3)
```

#### 805. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7101` → after: `L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7099) · [Before (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7101)

```diff
-           if (null !== vw && null !== ew ? ((0, gC.o)("wasm_loaded", vw), (0, gC.o)("wasm_core_ready", ew)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), CC.target.session && (0, Bw.b)(CC.target.session.gameNameWithVariation)) null ===  … [truncated]
+           if (null !== oT && null !== vT ? ((0, ek.r)("wasm_loaded", oT), (0, ek.r)("wasm_core_ready", vT)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), kk.target.session && (0, hT.c)(kk.target.session.gameNameWithVariation)) null ===  … [truncated]
```

#### 806. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7104` → after: `L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7102) · [Before (L7104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7104)

```diff
-           kind: "wZ"
+           kind: "iI"
```

#### 807. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7119` → after: `L7117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7117) · [Before (L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7119)

```diff
-             NC = null !== (zC = null === (ZC = CC.session) || void 0 === ZC ? void 0 : ZC.gameNameWithVariation) && void 0 !== zC ? zC : null;
+             Zk = null !== (Fk = null === (Ik = kk.session) || void 0 === Ik ? void 0 : Ik.gameNameWithVariation) && void 0 !== Fk ? Fk : null;
```

#### 808. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7125` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7123) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7125)

```diff
-             (0, xz.i)(WC, (0, xz.g)(wC))
+             (0, sF.h)(tk, (0, sF.e)(Tk))
```

#### 809. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7136` → after: `L7134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7134) · [Before (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7136)

```diff
-               if ((0, sw.k)("webgpuloss")) {
+               if ((0, cT.o)("webgpuloss")) {
```

#### 810. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7139` → after: `L7137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7137) · [Before (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7139)

```diff
-                 (0, Tw.d)((CC => CC.noteWasmJoin(ZC, zC, QC)))
+                 (0, WT.c)((kk => kk.noteWasmJoin(Ik, Fk, Xk)))
```

#### 811. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7141` → after: `L7139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7139) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7141)

```diff
-               if (null !== zC) throw new tC.b(zC)
+               if (null !== Fk) throw new dk.d(Fk)
```

#### 812. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7145` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7143) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7145)

```diff
-             }] = await Io(Promise.all([(0, IC.l)(zC), Jo(CC), null === fC || void 0 === fC ? void 0 : fC(), No()]), WC.signal), QC = CC.session, wC = QC ? {
+             }] = await Ka(Promise.all([(0, Vk.n)(Fk), Pa(kk), null === lk || void 0 === lk ? void 0 : lk(), qa()]), tk.signal), Xk = kk.session, Tk = Xk ? {
```

#### 813. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7161-L7162` → after: `L7159-L7160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7159-L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7159-L7160) · [Before (L7161-L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7161-L7162)

```diff
-                 if (!(CC instanceof EC.d)) return CC;
-                 if ("roomError" === CC.stage && null !== Yf) return xo(new EC.d(CC.message, CC.stage, CC.code, Yf), CC);
+                 if (!(kk instanceof bk.b)) return kk;
+                 if ("roomError" === kk.stage && null !== vl) return xa(new bk.b(kk.message, kk.stage, kk.code, vl), kk);
```

#### 814. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7164` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7162) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7164)

```diff
-                 return void 0 === zC ? CC : xo(new EC.d(CC.message, CC.stage, zC.code, null, CC.socketOpened), CC)
+                 return void 0 === Fk ? kk : xa(new bk.b(kk.message, kk.stage, Fk.code, null, kk.socketOpened), kk)
```

#### 815. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7176-L7178` → after: `L7174-L7176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7174-L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7174-L7176) · [Before (L7176-L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7176-L7178)

```diff
-                 game: null !== (zC = null === QC || void 0 === QC ? void 0 : QC.gameNameWithVariation) && void 0 !== zC ? zC : CC.roomName,
-                 lobby: String(null !== wC && void 0 !== wC ? wC : null),
-                 postCookies: null !== (ZC = CC.postCookies) && void 0 !== ZC ? ZC : null
+                 game: null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.gameNameWithVariation) && void 0 !== Fk ? Fk : kk.roomName,
+                 lobby: String(null !== Tk && void 0 !== Tk ? Tk : null),
+                 postCookies: null !== (Ik = kk.postCookies) && void 0 !== Ik ? Ik : null
```

#### 816. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7186` → after: `L7184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7184) · [Before (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7186)

```diff
-                 game: null !== (pC = null === (PC = CC.session) || void 0 === PC ? void 0 : PC.gameNameWithVariation) && void 0 !== pC ? pC : "",
+                 game: null !== (Hk = null === (Jk = kk.session) || void 0 === Jk ? void 0 : Jk.gameNameWithVariation) && void 0 !== Hk ? Hk : "",
```

#### 817. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7188` → after: `L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7186) · [Before (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7188)

```diff
-                 rejoinedAt: oC ? NC : null,
+                 rejoinedAt: ak ? Zk : null,
```

#### 818. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7230` → after: `L7228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7228) · [Before (L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7230)

```diff
-                           console.warn(`${hb} the held seat of a game left while it reconnected couldn't be released`, wC)
+                           console.warn(`${vi} the held seat of a game left while it reconnected couldn't be released`, Tk)
```

#### 819. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7235` → after: `L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7233) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7235)

```diff
-                     qY: CC => {
+                     sE: kk => {
```

#### 820. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7240` → after: `L7238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7238) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7240)

```diff
-                         const zC = of;
+                         const Fk = ll;
```

#### 821. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7251-L7252` → after: `L7249-L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7249-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7249-L7250) · [Before (L7251-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7251-L7252)

```diff
-                         console.warn(`${hb} gave up reconnecting (${ZC.reason}, ${ZC.attempts} attempts)`, ZC.lastError), (0, JZ.reportReconnectGaveUp)(ZC, qn);
-                         const bC = null !== (QC = null === (wC = pf) || void 0 === wC ? void 0 : wC.rejoin) && void 0 !== QC ? QC : null;
+                         console.warn(`${vi} gave up reconnecting (${Ik.reason}, ${Ik.attempts} attempts)`, Ik.lastError), (0, VI.reportReconnectGaveUp)(Ik, Ly);
+                         const ik = null !== (Xk = null === (Tk = wl) || void 0 === Tk ? void 0 : Tk.rejoin) && void 0 !== Xk ? Xk : null;
```

#### 822. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7271-L7273` → after: `L7269-L7271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7269-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7269-L7271) · [Before (L7271-L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7271-L7273)

```diff
-               }(qC, CC.endpoint), performance.mark(Eb), (0, gC.o)("wasm_joined", NC), setTimeout((() => {
-                 of === qC && (0, gC.f)()
-               }), 0), Po(), console.info(`${hb} joined ${CC.roomName} as ${qC.seat.sessionId} at ${Math.round(performance.now())} ms`);
+               }(qk, kk.endpoint), performance.mark(bi), (0, ek.r)("wasm_joined", Zk), setTimeout((() => {
+                 ll === qk && (0, ek.i)()
+               }), 0), ea(), console.info(`${vi} joined ${kk.roomName} as ${qk.seat.sessionId} at ${Math.round(performance.now())} ms`);
```

#### 823. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7280` → after: `L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7278) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7280)

```diff
-             null === wC || void 0 === wC || wC.removeEventListener("abort", MC), Ff === WC && eo(of, null), (null === (GC = If) || void 0 === GC ? void 0 : GC.join) === WC && (If = null)
+             null === Tk || void 0 === Tk || Tk.removeEventListener("abort", jk), ql === tk && Va(ll, null), (null === (xk = sl) || void 0 === xk ? void 0 : xk.join) === tk && (sl = null)
```

#### 824. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7294` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7292) · [Before (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7294)

```diff
-           kind: "wZ"
+           kind: "iI"
```

#### 825. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7300` → after: `L7298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7298) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7300)

```diff
-             console.warn(`${hb} the cached traffic code could not be dropped`, CC)
+             console.warn(`${vi} the cached traffic code could not be dropped`, kk)
```

#### 826. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7304` → after: `L7302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7302) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7304)

```diff
-         if (AC instanceof tC.b) return ZC(AC, performance.now() - MC), {
+         if (Kk instanceof dk.d) return Ik(Kk, performance.now() - jk), {
```

#### 827. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7309` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7307) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7309)

```diff
-         if (AC instanceof EC.d && AC.code === QC.e.wasmClientNotAllowed.code && bo) return gq("this server refused the wasm client to this account", "refused"), {
+         if (Kk instanceof bk.b && Kk.code === Xk.d.wasmClientNotAllowed.code && Ia) return qq("this server refused the wasm client to this account", "refused"), {
```

#### 828. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7314-L7315` → after: `L7312-L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7312-L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7312-L7313) · [Before (L7314-L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7314-L7315)

```diff
-         const CC = AC instanceof EC.d && AC.code === QC.e.outdatedVersion.code,
-           zC = () => null === of,
+         const kk = Kk instanceof bk.b && Kk.code === Xk.d.outdatedVersion.code,
+           Fk = () => null === ll,
```

#### 829. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7332` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7330) · [Before (L7332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7332)

```diff
-         NC || WC.end(), ww.e.releaseHold(FC);
+         Zk || tk.end(), iT.b.releaseHold(Lk);
```

#### 830. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7343` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7341) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7343)

```diff
-       return CC.session ? (0, IC.r)(fn, CC.session.gameNameWithVariation) : Promise.resolve()
+       return kk.session ? (0, Vk.u)(qy, kk.session.gameNameWithVariation) : Promise.resolve()
```

#### 831. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7347` → after: `L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7345) · [Before (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/wasmPlay.js#L7347)

```diff
-       return (0, xz.n)(zC), new Promise(((ZC, QC) => {
+       return (0, sF.m)(Fk), new Promise(((Ik, Xk) => {
```
