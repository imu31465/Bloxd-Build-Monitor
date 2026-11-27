# Changed — Bundle Modifications Report (Part 011 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `11 / 126` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (4047 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 348. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3174` → after: `L3174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3174) · [Before (L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3174)

```diff
-         this.physics = RR, this.host = JR, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
+         this.physics = rr, this.host = Sr, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3185` → after: `L3185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3185) · [Before (L3185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3185)

```diff
-         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${yR} physics ${RR}, and it runs only in wasm here`);
+         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${Zr} physics ${rr}, and it runs only in wasm here`);
```

#### 350. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3187` → after: `L3187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3187) · [Before (L3187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3187)

```diff
-         sJ(RR, (() => new Error(`wasm physics: ${yR} physics ${RR}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
+         sS(rr, (() => new Error(`wasm physics: ${Zr} physics ${rr}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
```

#### 351. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3189)

```diff
-         tR - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = tR, this.stoppedMs += GR, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${RR}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
+         Wr - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = Wr, this.stoppedMs += Qr, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${rr}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
```

#### 352. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3197` → after: `L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3197) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3197)

```diff
-         const JR = new Error(`wasm physics: ${this.host.kind} physics ${RR}, so it can't tick until the page reloads`);
+         const Sr = new Error(`wasm physics: ${this.host.kind} physics ${rr}, so it can't tick until the page reloads`);
```

#### 353. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3199` → after: `L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3199) · [Before (L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3199)

```diff
-         (console.error(JR), this.host.failure.lost) ? this.host.failure.lost(JR): null === (GR = (yR = this.host.failure).fK) || void 0 === GR || GR.call(yR, JR)
+         (console.error(Sr), this.host.failure.lost) ? this.host.failure.lost(Sr): null === (Qr = (Zr = this.host.failure).jx) || void 0 === Qr || Qr.call(Zr, Sr)
```

#### 354. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3232-L3233` → after: `L3232-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3232-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3232-L3233) · [Before (L3232-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3232-L3233)

```diff
-         if (!this.rollsBack) return RR.zw || RR.pY ? "was given unloaded hooks" : null;
-         return (0, EJ.l)(RR.zw) === this.host.kind && "cell" === (0, EJ.l)(RR.pY) ? null : "had an unloaded hook replaced"
+         if (!this.rollsBack) return rr.wm || rr.zV ? "was given unloaded hooks" : null;
+         return (0, FS.i)(rr.wm) === this.host.kind && "cell" === (0, FS.i)(rr.zV) ? null : "had an unloaded hook replaced"
```

#### 355. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3246` → after: `L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3246) · [Before (L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3246)

```diff
-           if (tR = JR, 5 === tR.Aw(RR, this.bodies.bodyStore.handle)) return fy
+           if (Wr = Sr, 5 === Wr.Bm(rr, this.bodies.bodyStore.handle)) return EZ
```

#### 356. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3281` → after: `L3281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3281) · [Before (L3281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3281)

```diff
-           const uR = RR.resume(JR.NK, GR);
+           const ar = rr.resume(Sr.qx, Qr);
```

#### 357. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3283` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3283) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3283)

```diff
-             if (this.host.stats.missRounds++, ++yR > 4096) return JR.NK.ur(), "missed chunks for 4096 rounds";
+             if (this.host.stats.missRounds++, ++Zr > 4096) return Sr.qx.fN(), "missed chunks for 4096 rounds";
```

#### 358. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3289)

```diff
-           if (3 === uR) throw new kJ(new Error(gG(RR.pw())));
+           if (3 === ar) throw new bS(new Error(LQ(rr.Pm())));
```

#### 359. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3292)

```diff
-           if (qR.Pw) {
+           if (Ir.Am) {
```

#### 360. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3296` → after: `L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3296) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3296)

```diff
-               qR.Pw(this.impacts)
+               Ir.Am(this.impacts)
```

#### 361. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3306` → after: `L3306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3306) · [Before (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3306)

```diff
-           if (null !== iR) return `${iR} in an onCollide handler`;
+           if (null !== fr) return `${fr} in an onCollide handler`;
```

#### 362. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3334` → after: `L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3334) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3334)

```diff
-             GR.mw && GR.mw()
+             Qr.im && Qr.im()
```

#### 363. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3348-L3349` → after: `L3348-L3349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3348-L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3348-L3349) · [Before (L3348-L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3348-L3349)

```diff
-         const uR = !JR.Xw;
-         return uR && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > GR.length) && (RR.Nw(this.committedCursor, this.tickLen, uR), !(this.host.prepare && !this.host.prepare(RR, yR.YM, 0 !== tR)) && (!!yR.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
+         const ar = !Sr.Om;
+         return ar && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > Qr.length) && (rr.Cm(this.committedCursor, this.tickLen, ar), !(this.host.prepare && !this.host.prepare(rr, Zr.lT, 0 !== Wr)) && (!!Zr.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
```

#### 364. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3354` → after: `L3354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3354) · [Before (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3354)

```diff
-         this.xw = RR, this.physics = JR, this.options = GR, this.stats = {
+         this.gm = rr, this.physics = Sr, this.options = Qr, this.stats = {
```

#### 365. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3405` → after: `L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3405) · [Before (L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3405)

```diff
-           fK: GR.reportError,
+           jx: Qr.reportError,
```

#### 366. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3418-L3419` → after: `L3418-L3419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3418-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3418-L3419) · [Before (L3418-L3419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3418-L3419)

```diff
-               const GR = this.xw.zC.Lk(this.xw.WH);
-               RR.Sw(GR ? JR(GR) : -1)
+               const Qr = this.gm.YB.cV(this.gm.fC);
+               rr.Fm(Qr ? Sr(Qr) : -1)
```

#### 367. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3466)

```diff
-         this.driver.gK(RR)
+         this.driver.lx(rr)
```

#### 368. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3477` → after: `L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3477) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3477)

```diff
-         return ZR.kY(qR, RR, JR, GR, yR, tR, uR)
+         return jr.XV(Ir, rr, Sr, Qr, Zr, Wr, ar)
```

#### 369. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3488` → after: `L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3488) · [Before (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3488)

```diff
-           return RR = JR, this.physics.rollbackBody = SJ(((RR, GR, yR, tR, uR, ZR, qR) => JR.kY(JR.allocate(), RR, GR, yR, tR, uR, ZR, qR))), JR
+           return rr = Sr, this.physics.rollbackBody = iS(((rr, Qr, Zr, Wr, ar, jr, Ir) => Sr.XV(Sr.allocate(), rr, Qr, Zr, Wr, ar, jr, Ir))), Sr
```

#### 370. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3503` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3503) · [Before (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3503)

```diff
-           return RR ? yR && !(0, EJ.b)(yR) ? PG(JR, GR, "has a block test not marked markIdOnlyBlockTest") : !tR || zG(tR[0]) && zG(tR[1]) && zG(tR[2]) ? RR.Ur(JR, GR) : PG(JR, GR, "has an offset that isn't whole cells") : PG(JR, GR, "has no mirror")
+           return rr ? Zr && !(0, FS.c)(Zr) ? GQ(Sr, Qr, "has a block test not marked markIdOnlyBlockTest") : !Wr || VQ(Wr[0]) && VQ(Wr[1]) && VQ(Wr[2]) ? rr.eN(Sr, Qr) : GQ(Sr, Qr, "has an offset that isn't whole cells") : GQ(Sr, Qr, "has no mirror")
```

#### 371. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3522` → after: `L3522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3522) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3522)

```diff
-             const GR = RR.hw(JR.NK, tR[0], tR[1], tR[2], uR[0], uR[1], uR[2], yR[0], yR[1], yR[2]);
+             const Qr = rr.QN(Sr.qx, Wr[0], Wr[1], Wr[2], ar[0], ar[1], ar[2], Zr[0], Zr[1], Zr[2]);
```

#### 372. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3526` → after: `L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3526) · [Before (L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3526)

```diff
-           JR.NK.ur()
+           Sr.qx.fN()
```

#### 373. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3534` → after: `L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3534) · [Before (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3534)

```diff
-         return null !== (RR = null === (JR = this.mirror) || void 0 === JR ? void 0 : JR.residency()) && void 0 !== RR ? RR : null
+         return null !== (rr = null === (Sr = this.mirror) || void 0 === Sr ? void 0 : Sr.residency()) && void 0 !== rr ? rr : null
```

#### 374. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3537-L3538` → after: `L3537-L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3537-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3537-L3538) · [Before (L3537-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3537-L3538)

```diff
-         const JR = this.xw.Fw;
-         return this.context.setOffsets(RR, JR, JR) && this.context.uploadOverrides(RR, this.xw.NK)
+         const Sr = this.gm.um;
+         return this.context.setOffsets(rr, Sr, Sr) && this.context.uploadOverrides(rr, this.gm.qx)
```

#### 375. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3547-L3548` → after: `L3547-L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3547-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3547-L3548) · [Before (L3547-L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3547-L3548)

```diff
-         const JR = this.xw.NK.aa.physicsWorld;
-         return JR && BG(this.options.wasm) ? (this.mirror = new QG(this.options.wasm, JR, this.xw.KK, this.failure), this.mirror) : null
+         const Sr = this.gm.qx.Zt.physicsWorld;
+         return Sr && TQ(this.options.wasm) ? (this.mirror = new JQ(this.options.wasm, Sr, this.gm.Ex, this.failure), this.mirror) : null
```

#### 376. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3554` → after: `L3554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3554) · [Before (L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3554)

```diff
-     var ry = GR(39564);
+     var NZ = Qr(39892);
```

#### 377. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3564` → after: `L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3564) · [Before (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3564)

```diff
-         takeRefusedAllocation: null !== (JR = RR.takeBloxdWasmRefusedAllocation) && void 0 !== JR ? JR : () => 0
+         takeRefusedAllocation: null !== (Sr = rr.takeBloxdWasmRefusedAllocation) && void 0 !== Sr ? Sr : () => 0
```

#### 378. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3574-L3576` → after: `L3574-L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3574-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3574-L3576) · [Before (L3574-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3574-L3576)

```diff
-         const qR = null !== (yR = null === (tR = (uR = ZR.bindings).UV) || void 0 === tR ? void 0 : tR.call(uR)) && void 0 !== yR ? yR : [];
-         if (!(qR.length === Ly.length && Ly.every(((RR, JR) => qR[JR] === RR)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(qR).join()}] are not [${Ly.join()}]`);
-         return new ny(ZR, new ZR.bindings.sy, JR, GR)
+         const Ir = null !== (Zr = null === (Wr = (ar = jr.bindings).xf) || void 0 === Wr ? void 0 : Wr.call(ar)) && void 0 !== Zr ? Zr : [];
+         if (!(Ir.length === hZ.length && hZ.every(((rr, Sr) => Ir[Sr] === rr)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(Ir).join()}] are not [${hZ.join()}]`);
+         return new zZ(jr, new jr.bindings.AS, Sr, Qr)
```

#### 379. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3579` → after: `L3579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3579) · [Before (L3579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3579)

```diff
-         this.runtime = RR, this.handle = JR, this.KK = GR, this.reportTrap = yR, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new RR.BufferView(Uint8Array, JR.Yr(!1), ay), this.lightU16 = new RR.BufferView(Uint16Array, JR.Yr(!0), ay)
+         this.runtime = rr, this.handle = Sr, this.Ex = Qr, this.reportTrap = Zr, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new rr.BufferView(Uint8Array, Sr.wN(!1), tZ), this.lightU16 = new rr.BufferView(Uint16Array, Sr.wN(!0), tZ)
```

#### 380. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3582)

```diff
-         return this.attempt((() => (this.syncRegistry(), Ay(this.handle.Qr(JR.NK, JR.slot, RR)), this.scan(JR))))
+         return this.attempt((() => (this.syncRegistry(), eZ(this.handle.FN(Sr.qx, Sr.slot, rr)), this.scan(Sr))))
```

#### 381. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3588` → after: `L3588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3588) · [Before (L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3588)

```diff
-         return this.attempt((() => (Ay(this.handle.kr(RR, JR)), JR ? this.lightU16.view().slice() : this.lightU8.view().slice())))
+         return this.attempt((() => (eZ(this.handle.cN(rr, Sr)), Sr ? this.lightU16.view().slice() : this.lightU8.view().slice())))
```

#### 382. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3591)

```diff
-         const JR = this.handle.scan(RR.NK, RR.slot),
+         const Sr = this.handle.scan(rr.qx, rr.slot),
```

#### 383. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3595-L3598` → after: `L3595-L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3595-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3595-L3598) · [Before (L3595-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3595-L3598)

```diff
-           vx: this.runtime.view(Uint16Array, this.handle.Fr(), 32).slice(),
-           Hx: 1 === GR || 0 !== GR && void 0,
-           WK: 0 !== (4 & JR),
-           Bx: this.runtime.view(Uint16Array, this.handle.Tr(), yR).slice()
+           jH: this.runtime.view(Uint16Array, this.handle.oN(), 32).slice(),
+           IH: 1 === Qr || 0 !== Qr && void 0,
+           nx: 0 !== (4 & Sr),
+           WH: this.runtime.view(Uint16Array, this.handle.bN(), Zr).slice()
```

#### 384. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3609` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3609) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3609)

```diff
-             GR = new Error(`Chunk ingest trapped in wasm (${RR})`);
+             Qr = new Error(`Chunk ingest trapped in wasm (${rr})`);
```

#### 385. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3615-L3616` → after: `L3615-L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3615-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3615-L3616) · [Before (L3615-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3615-L3616)

```diff
-         const JR = this.KK,
-           GR = 65536 * (null !== (RR = JR.FY) && void 0 !== RR ? RR : 0) + JR.Ua.length;
+         const Sr = this.Ex,
+           Qr = 65536 * (null !== (rr = Sr.HV) && void 0 !== rr ? rr : 0) + Sr.ft.length;
```

#### 386. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3620` → after: `L3620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3620) · [Before (L3620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3620)

```diff
-           const JR = Math.max(RR.Ua.length, RR.Xx.length, RR.Av.length, RR.Dv.length),
+           const Sr = Math.max(rr.ft.length, rr.ZH.length, rr.dL.length, rr.uL.length),
```

#### 387. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3623-L3624` → after: `L3623-L3624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3623-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3623-L3624) · [Before (L3623-L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3623-L3624)

```diff
-             const JR = RR.Ua[yR];
-             GR[yR] = (void 0 === JR ? 2 : JR ? 1 : 0) | (RR.Xx[yR] ? 4 : 0) | (RR.Av[yR] ? 8 : 0) | (RR.Dv[yR] ? 16 : 0)
+             const Sr = rr.ft[Zr];
+             Qr[Zr] = (void 0 === Sr ? 2 : Sr ? 1 : 0) | (rr.ZH[Zr] ? 4 : 0) | (rr.dL[Zr] ? 8 : 0) | (rr.uL[Zr] ? 16 : 0)
```

#### 388. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3628` → after: `L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3628) · [Before (L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3628)

```diff
-         this.handle.sr(yR)
+         this.handle.JN(Zr)
```

#### 389. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3637-L3638` → after: `L3637-L3638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3637-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3637-L3638) · [Before (L3637-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3637-L3638)

```diff
-     var Cy = GR(39568);
-     const Xy = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * Cy.N, Cy.B, Cy.w, Cy.x, Cy.t, Cy.q, Cy.E, Cy.I, Cy.s, Cy.Q, Cy.P, Cy.U, Cy.V, Cy.T, Cy.p, Cy.i, Cy.l, Cy.n, Cy.J, Cy.c, ...Cy.K],
+     var KZ = Qr(39899);
+     const yZ = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * KZ.Q, KZ.D, KZ.y, KZ.A, KZ.v, KZ.t, KZ.G, KZ.I, KZ.u, KZ.V, KZ.T, KZ.Z, KZ._, KZ.X, KZ.q, KZ.i, KZ.j, KZ.n, KZ.L, KZ.e, ...KZ.M],
```

#### 390. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3645-L3646` → after: `L3645-L3646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3645-L3646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3645-L3646) · [Before (L3645-L3646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3645-L3646)

```diff
-         const qR = null !== (yR = null === (tR = (uR = ZR.bindings).pq) || void 0 === tR ? void 0 : tR.call(uR)) && void 0 !== yR ? yR : [];
-         return qR.length === Xy.length && Xy.every(((RR, JR) => qR[JR] === RR)) ? new By(ZR, new ZR.bindings.EG, JR, GR) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(qR).join()}] are not [${Xy.join()}], so blocks are set in JS`), null)
+         const Ir = null !== (Zr = null === (Wr = (ar = jr.bindings).HQ) || void 0 === Wr ? void 0 : Wr.call(ar)) && void 0 !== Zr ? Zr : [];
+         return Ir.length === yZ.length && yZ.every(((rr, Sr) => Ir[Sr] === rr)) ? new TZ(jr, new jr.bindings.PS, Sr, Qr) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(Ir).join()}] are not [${yZ.join()}], so blocks are set in JS`), null)
```

#### 391. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3649` → after: `L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3649) · [Before (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3649)

```diff
-         this.runtime = RR, this.handle = JR, this.KK = GR, this.fK = yR, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new RR.BufferView(Uint32Array, … [truncated]
+         this.runtime = rr, this.handle = Sr, this.Ex = Qr, this.jx = Zr, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new rr.BufferView(Uint32Array, … [truncated]
```

#### 392. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3652` → after: `L3652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3652) · [Before (L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3652)

```diff
-         let tR = (0, Cy.jb)(JR);
+         let Wr = (0, KZ.kb)(Sr);
```

#### 393. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3658` → after: `L3658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3658) · [Before (L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3658)

```diff
-           ZR = this.propsFor(null === GR || void 0 === GR ? void 0 : GR.isHookId), qR = null !== (iR = null === GR || void 0 === GR || null === (fR = GR.watched) || void 0 === fR ? void 0 : fR.call(GR)) && void 0 !== iR ? iR : My
+           jr = this.propsFor(null === Qr || void 0 === Qr ? void 0 : Qr.isHookId), Ir = null !== (fr = null === Qr || void 0 === Qr || null === (Er = Qr.watched) || void 0 === Er ? void 0 : Er.call(Qr)) && void 0 !== fr ? fr : BZ
```

#### 394. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3660-L3661` → after: `L3660-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3660-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3660-L3661) · [Before (L3660-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3660-L3661)

```diff
-           if (this.startFailedAt !== this.KK.FY) {
-             this.startFailedAt = this.KK.FY;
+           if (this.startFailedAt !== this.Ex.HV) {
+             this.startFailedAt = this.Ex.HV;
```

#### 395. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3663` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3663) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3663)

```diff
-             this.fK(new Error(`Block edits could not start in wasm (${RR}), so batches are set in JS until that is fixed`))
+             this.jx(new Error(`Block edits could not start in wasm (${rr}), so batches are set in JS until that is fixed`))
```

#### 396. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3667-L3668` → after: `L3667-L3668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3667-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3667-L3668) · [Before (L3667-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3667-L3668)

```diff
-         const VR = Cy.E | (null !== GR && void 0 !== GR && GR.isHookId ? Cy.I : 0);
-         if (!this.call(RR, !1, (() => (ZR !== this.sentProps && (this.handle.dr(ZR), this.sentProps = ZR), this.handle.Er(qR), this.handle.UK(JR), !0)))) return tR;
+         const pr = KZ.G | (null !== Qr && void 0 !== Qr && Qr.isHookId ? KZ.I : 0);
+         if (!this.call(rr, !1, (() => (jr !== this.sentProps && (this.handle.VN(jr), this.sentProps = jr), this.handle.iN(Ir), this.handle.Yx(Sr), !0)))) return Wr;
```

#### 397. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3697` → after: `L3697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3697) · [Before (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3697)

```diff
-         return this.runtime.isReady() && RR.aa.physicsWorld === JR
+         return this.runtime.isReady() && rr.Zt.physicsWorld === Sr
```

#### 398. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3700` → after: `L3700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3700) · [Before (L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3700)

```diff
-         return this.busy || !this.runtime.isReady() ? null : RR.aa.physicsWorld
+         return this.busy || !this.runtime.isReady() ? null : rr.Zt.physicsWorld
```

#### 399. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3709-L3710` → after: `L3709-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3709-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3709-L3710) · [Before (L3709-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3709-L3710)

```diff
-             uR = GR ? `, its ${GR} voxel writes undone for JS to redo` : "";
-           return this.fK(new Error(`Block edits trapped in wasm (${tR})${uR}, so blocks are set in JS from now on`)), null
+             ar = Qr ? `, its ${Qr} voxel writes undone for JS to redo` : "";
+           return this.jx(new Error(`Block edits trapped in wasm (${Wr})${ar}, so blocks are set in JS from now on`)), null
```

#### 400. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3722)

```diff
-           if (void 0 === qR && (qR = RR.aa.slotData(GR), tR.set(GR, qR)), qR) {
+           if (void 0 === Ir && (Ir = rr.Zt.slotData(Qr), Wr.set(Qr, Ir)), Ir) {
```

#### 401. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3730` → after: `L3730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3730) · [Before (L3730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3730)

```diff
-         const JR = this.KK.FY,
+         const Sr = this.Ex.HV,
```

#### 402. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3735` → after: `L3735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3735) · [Before (L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3735)

```diff
-           props: (0, Cy.db)(this.KK, RR)
+           props: (0, KZ.fb)(this.Ex, rr)
```

#### 403. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3737` → after: `L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3737) · [Before (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3737)

```diff
-         return RR ? this.hookedProps = yR : this.plainProps = yR, yR.props
+         return rr ? this.hookedProps = Zr : this.plainProps = Zr, Zr.props
```

#### 404. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3742)

```diff
-         0 !== GR && (0, Cy.$)(RR, {
+         0 !== Qr && (0, KZ.cb)(rr, {
```

#### 405. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3744-L3745` → after: `L3744-L3745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3744-L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3744-L3745) · [Before (L3744-L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3744-L3745)

```diff
-           words: this.runtime.view(Int32Array, JR[0], GR * Cy.N),
-           layerIds: this.runtime.view(Uint16Array, JR[0], GR * Cy.N * 2),
+           words: this.runtime.view(Int32Array, Sr[0], Qr * KZ.Q),
+           layerIds: this.runtime.view(Uint16Array, Sr[0], Qr * KZ.Q * 2),
```

#### 406. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3753-L3755` → after: `L3753-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3753-L3755) · [Before (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3753-L3755)

```diff
-     var ly = GR(38550),
-       py = GR(39557),
-       gy = GR(40362),
+     var vZ = Qr(38889),
+       OZ = Qr(39885),
+       LZ = Qr(40675),
```

#### 407. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3773` → after: `L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3773) · [Before (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3773)

```diff
-       RR.uF = RR.XF = 0
+       rr.Cw = rr.Gw = 0
```

#### 408. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3784` → after: `L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3784) · [Before (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3784)

```diff
-       sF: !1,
+       XF: !1,
```

#### 409. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3786` → after: `L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3786) · [Before (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3786)

```diff
-       qT: !1
+       kF: !1
```

#### 410. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3800` → after: `L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3800) · [Before (L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3800)

```diff
-     class Sy extends gy.d {
+     class iZ extends LZ.b {
```

#### 411. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3808` → after: `L3808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3808) · [Before (L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3808)

```diff
-         this.gH = null;
+         this.mC = null;
```

#### 412. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3816)

```diff
-           RR.container.bS && function(RR, JR, GR, yR) {
+           rr.container.yG && function(rr, Sr, Qr, Zr) {
```

#### 413. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3821` → after: `L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3821) · [Before (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3821)

```diff
-           }(ZR, GR.movementX, GR.movementY, GR.timeStamp) && (this.wT.dx -= GR.movementX, this.wT.dy -= GR.movementY, this.gH && this.gH())
+           }(jr, Qr.movementX, Qr.movementY, Qr.timeStamp) && (this.JF.dx -= Qr.movementX, this.JF.dy -= Qr.movementY, this.mC && this.mC())
```

#### 414. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3827-L3831` → after: `L3827-L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3827-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3827-L3831) · [Before (L3827-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3827-L3831)

```diff
-     var jy = GR(39550),
-       dy = GR(40914),
-       Ey = GR(385),
-       Yy = GR(40918),
-       ky = GR(5850).j;
+     var wZ = Qr(39876),
+       cZ = Qr(41259),
+       FZ = Qr(388),
+       oZ = Qr(41268),
+       bZ = Qr(5782).l;
```

#### 415. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3833)

```diff
-       gK(RR) {
+       lx(rr) {
```

#### 416. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3865-L3866` → after: `L3865-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3865-L3866) · [Before (L3865-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3865-L3866)

```diff
-       if (!JR.AY || JR.yq <= 0) {
-         var tR = JR.BL;
+       if (!Sr.tV || Sr.sj <= 0) {
+         var Wr = Sr.Lh;
```

#### 417. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3868` → after: `L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3868) · [Before (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3868)

```diff
-         var uR = JR.bY;
+         var ar = Sr.YV;
```

#### 418. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3870` → after: `L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3870) · [Before (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3870)

```diff
-         var ZR = JR.vY;
+         var jr = Sr.KV;
```

#### 419. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3873` → after: `L3873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3873) · [Before (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3873)

```diff
-       var qR = !!RR.zw,
+       var Ir = !!rr.wm,
```

#### 420. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3876-L3877` → after: `L3876-L3877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3876-L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3876-L3877) · [Before (L3876-L3877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3876-L3877)

```diff
-           if (!RR.pY) return;
-           var GR = (0, jy.i)(nG(RR, JR), RR.pY, JR.Xw);
+           if (!rr.zV) return;
+           var Qr = (0, wZ.h)(zQ(rr, Sr), rr.zV, Sr.Om);
```

#### 421. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3879` → after: `L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3879) · [Before (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3879)

```diff
-           gt[1] = GR, JR.Xw.translate(gt), JR.mY(), JR.mw && JR.mw()
+           OW[1] = Qr, Sr.Om.translate(OW), Sr.yV(), Sr.im && Sr.im()
```

#### 422. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3882` → after: `L3882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3882) · [Before (L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3882)

```diff
-           if (JR.wakeInFluid && RR.testFluid(Math.floor(JR.Xw.base[0]), Math.floor(JR.Xw.base[1]), Math.floor(JR.Xw.base[2]))) return !1;
+           if (Sr.wakeInFluid && rr.testFluid(Math.floor(Sr.Om.base[0]), Math.floor(Sr.Om.base[1]), Math.floor(Sr.Om.base[2]))) return !1;
```

#### 423. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3888` → after: `L3888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3888) · [Before (L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3888)

```diff
-           return wt = !1, Yy(ZR, JR.Xw, Dt, rt, !0), wt
+           return mW = !1, oZ(jr, Sr.Om, qW, NW, !0), mW
```

#### 424. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3894` → after: `L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3894) · [Before (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3894)

```diff
-             var GR = JR.Xw,
+             var Qr = Sr.Om,
```

#### 425. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3907-L3911` → after: `L3907-L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3907-L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3907-L3911) · [Before (L3907-L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3907-L3911)

```diff
-             Ey.scale(KR, RR.gravity, -RR.kw * VR * JR.gravityMultiplier), JR.applyForce(KR), JR.inFluid = !0, JR.ratioInFluid = fR
-           }(RR, JR), ct(JR.bY), ct(JR.vY), ct(JR.BL), ct(JR.resting);
-         var VR = JR.BL,
-           KR = JR.bY,
-           wR = JR.vY,
+             FZ.scale(xr, rr.gravity, -rr.dm * pr * Sr.gravityMultiplier), Sr.applyForce(xr), Sr.inFluid = !0, Sr.ratioInFluid = Er
+           }(rr, Sr), CW(Sr.YV), CW(Sr.KV), CW(Sr.Lh), CW(Sr.resting);
+         var pr = Sr.Lh,
+           xr = Sr.YV,
+           mr = Sr.KV,
```

#### 426. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3913)

```diff
-           eR = 1 / JR.yq;
+           Ur = 1 / Sr.sj;
```

#### 427. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3916` → after: `L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3916) · [Before (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3916)

```diff
-         Fy[0] = Fy[0] + rR[0] * aR, Fy[1] = Fy[1] + rR[1] * aR, Fy[2] = Fy[2] + rR[2] * aR, eR = 1 / JR.yq, Ty[0] = wR[0] * eR, Ty[1] = wR[1] * eR, Ty[2] = wR[2] * eR, Ty[0] = Ty[0] + Fy[0] * GR, Ty[1] = Ty[1] + Fy[1] * GR, Ty[2] = Ty[2] + Fy[2] * GR, VR[0] = VR[0] + Ty[0], VR[1] … [truncated]
+         DZ[0] = DZ[0] + Nr[0] * tr, DZ[1] = DZ[1] + Nr[1] * tr, DZ[2] = DZ[2] + Nr[2] * tr, Ur = 1 / Sr.sj, dZ[0] = mr[0] * Ur, dZ[1] = mr[1] * Ur, dZ[2] = mr[2] * Ur, dZ[0] = dZ[0] + DZ[0] * Qr, dZ[1] = dZ[1] + DZ[1] * Qr, dZ[2] = dZ[2] + DZ[2] * Qr, pr[0] = pr[0] + dZ[0], pr[1] … [truncated]
```

#### 428. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3921` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3921) · [Before (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3921)

```diff
-           WR = JR.Yw >= 0 ? JR.Yw : RR.Yw,
+           nr = Sr.Dm >= 0 ? Sr.Dm : rr.Dm,
```

#### 429. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3924-L3925` → after: `L3924-L3925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3924-L3925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3924-L3925) · [Before (L3924-L3925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3924-L3925)

```diff
-         JR.inFluid && (AR = yt(JR, JR.fluidDragHoriz >= 0 ? JR.fluidDragHoriz : UR), CR = yt(JR, JR.fluidDragVert >= 0 ? JR.fluidDragVert : UR)), AR = Math.max(1 - AR * GR / JR.yq, 0), CR = Math.max(1 - CR * GR / JR.yq, 0), tt[0] = AR, tt[1] = CR, tt[2] = AR, VR[0] = VR[0] * tt[0 … [truncated]
-           if (Yy.checkInput(JR.Xw, GR), !JR.resting[1] || GR[1] > 0) return;
+         Sr.inFluid && (er = ZW(Sr, Sr.fluidDragHoriz >= 0 ? Sr.fluidDragHoriz : Yr), Kr = ZW(Sr, Sr.fluidDragVert >= 0 ? Sr.fluidDragVert : Yr)), er = Math.max(1 - er * Qr / Sr.sj, 0), Kr = Math.max(1 - Kr * Qr / Sr.sj, 0), WW[0] = er, WW[1] = Kr, WW[2] = er, pr[0] = pr[0] * WW[0 … [truncated]
+           if (oZ.checkInput(Sr.Om, Qr), !Sr.resting[1] || Qr[1] > 0) return;
```

#### 430. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3927` → after: `L3927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3927) · [Before (L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3927)

```diff
-           ot(tR, JR.Xw);
+           gW(Wr, Sr.Om);
```

#### 431. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3933` → after: `L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3933) · [Before (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3933)

```diff
-         }(RR, JR, sy, Gt), Lt(RR, JR, JR.Xw, sy, JR.resting, JR.slideOnCollision), JR.aY && function(RR, JR, GR, yR) {
+         }(rr, Sr, sZ, QW), tW(rr, Sr, Sr.Om, sZ, Sr.resting, Sr.slideOnCollision), Sr.mV && function(rr, Sr, Qr, Zr) {
```

#### 432. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3942)

```diff
-             fR = JR.Xw.base[1];
+             Er = Sr.Om.base[1];
```

#### 433. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3958` → after: `L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3958) · [Before (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3958)

```diff
-         for (var XR = 0; XR < 3; ++XR) JR.resting[XR] = JR.resting[XR] || Gt[XR], hy[XR] = 0, JR.resting[XR] && (Rt[XR] || (hy[XR] = -JR.BL[XR]), JR.BL[XR] = 0);
+         for (var yr = 0; yr < 3; ++yr) Sr.resting[yr] = Sr.resting[yr] || QW[yr], uZ[yr] = 0, Sr.resting[yr] && (rW[yr] || (uZ[yr] = -Sr.Lh[yr]), Sr.Lh[yr] = 0);
```

#### 434. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3960` → after: `L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3960) · [Before (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3960)

```diff
-         MR > .001 && (Ey.scale(hy, hy, JR.yq), JR.Pw && JR.Pw(hy)),
+         Br > .001 && (FZ.scale(uZ, uZ, Sr.sj), Sr.Am && Sr.Am(uZ)),
```

#### 435. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3962` → after: `L3962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3962) · [Before (L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3962)

```diff
-             if (!JR.Xw) return;
+             if (!Sr.Om) return;
```

#### 436. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3964-L3966` → after: `L3964-L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3964-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3964-L3966) · [Before (L3964-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3964-L3966)

```diff
-             var tR = Ey.squaredLength(JR.BL);
-             tR > 1e-5 && JR.mY();
-             RR.zw && RR.zw(JR) ? (JR.loadStateFromCopy(RR.rollbackBody), JR.rolledBackLastTick = !0) : JR.rolledBackLastTick = !1
+             var Wr = FZ.squaredLength(Sr.Lh);
+             Wr > 1e-5 && Sr.yV();
+             rr.wm && rr.wm(Sr) ? (Sr.loadStateFromCopy(rr.rollbackBody), Sr.rolledBackLastTick = !0) : Sr.rolledBackLastTick = !1
```

#### 437. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3979` → after: `L3979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3979) · [Before (L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3979)

```diff
-       Ey.copy(it, GR.BL), it[JR] = 0;
+       FZ.copy(fW, Qr.Lh), fW[Sr] = 0;
```

#### 438. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L3983-L3984` → after: `L3983-L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L3983-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L3983-L3984) · [Before (L3983-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L3983-L3984)

```diff
-           fR = qR > iR ? (qR - iR) / qR : 0;
-         GR.BL[(JR + 1) % 3] *= fR, GR.BL[(JR + 2) % 3] *= fR
+           Er = Ir > fr ? (Ir - fr) / Ir : 0;
+         Qr.Lh[(Sr + 1) % 3] *= Er, Qr.Lh[(Sr + 2) % 3] *= Er
```

#### 439. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4031` → after: `L4031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4031) · [Before (L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4031)

```diff
-           }(RR, JR, GR))) return ot(JR.Xw, GR), JR.resting[0] = Ut[0], JR.resting[2] = Ut[2], JR.mw && JR.mw(), !0
+           }(rr, Sr, Qr))) return gW(Sr.Om, Qr), Sr.resting[0] = zW[0], Sr.resting[2] = zW[2], Sr.im && Sr.im(), !0
```

#### 440. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4062` → after: `L4062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4062) · [Before (L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4062)

```diff
-       Yw: .1
+       Dm: .1
```

#### 441. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4067-L4071` → after: `L4067-L4071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4067-L4071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4067-L4071) · [Before (L4067-L4071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4067-L4071)

```diff
-         var GR = RR.NK,
-           yR = RR.KK.Or,
-           tR = RR.Fw;
-         JR.pY = (0, EJ.i)(((RR, JR, yR) => !GR.lT(RR + tR[0], JR + tR[1], yR + tR[2])), "cell"), super(JR, ((RR, JR, yR) => GR.sw(RR + tR[0], JR + tR[1], yR + tR[2])), ((RR, JR, uR) => {
-           var ZR = GR.eT(RR + tR[0], JR + tR[1], uR + tR[2]);
+         var Qr = rr.qx,
+           Zr = rr.Ex.PN,
+           Wr = rr.um;
+         Sr.zV = (0, FS.f)(((rr, Sr, Zr) => !Qr.aJ(rr + Wr[0], Sr + Wr[1], Zr + Wr[2])), "cell"), super(Sr, ((rr, Sr, Zr) => Qr.SN(rr + Wr[0], Sr + Wr[1], Zr + Wr[2])), ((rr, Sr, ar) => {
+           var jr = Qr.sF(rr + Wr[0], Sr + Wr[1], ar + Wr[2]);
```

#### 442. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4073` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4073) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4073)

```diff
-         })), this.wasm = null, this.pT = 0, this.jT = 0
+         })), this.wasm = null, this.xJ = 0, this.mJ = 0
```

#### 443. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4077` → after: `L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4077) · [Before (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4077)

```diff
-         this.wasm ? this.wasm.gK(RR) : super.gK(RR), this.pT += performance.now() - JR, this.jT++
+         this.wasm ? this.wasm.lx(rr) : super.lx(rr), this.xJ += performance.now() - Sr, this.mJ++
```

#### 444. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4080` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4080) · [Before (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4080)

```diff
-         return this.wasm && this.wasm.kY(RR, JR, GR, yR, tR, uR) || super.kY(RR, JR, GR, yR, tR, uR)
+         return this.wasm && this.wasm.XV(rr, Sr, Qr, Zr, Wr, ar) || super.XV(rr, Sr, Qr, Zr, Wr, ar)
```

#### 445. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4083-L4084` → after: `L4083-L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4083-L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4083-L4084) · [Before (L4083-L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4083-L4084)

```diff
-         var JR = super.dw(RR);
-         return JR && this.wasm && this.wasm.Wk(RR), JR
+         var Sr = super.bm(rr);
+         return Sr && this.wasm && this.wasm.oV(rr), Sr
```

#### 446. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4088-L4089` → after: `L4088-L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4088-L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4088-L4089) · [Before (L4088-L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4088-L4089)

```diff
-           ms: this.pT,
-           count: this.jT
+           ms: this.xJ,
+           count: this.mJ
```

#### 447. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4091` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4091) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4091)

```diff
-         return this.pT = 0, this.jT = 0, RR
+         return this.xJ = 0, this.mJ = 0, rr
```

#### 448. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4094` → after: `L4094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4094) · [Before (L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4094)

```diff
-     var mt = GR(40914),
+     var kW = Qr(41259),
```

#### 449. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4096` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4096) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4096)

```diff
-       St = GR(40918),
+       VW = Qr(41268),
```

#### 450. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4098` → after: `L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4098) · [Before (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4098)

```diff
-       dt = GR(38788);
+       wW = Qr(39120);
```

#### 451. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4101` → after: `L4101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4101) · [Before (L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4101)

```diff
-       this.hT = !1, this.Q0 = !1, this.J9 = 1, this.K9 = 0, this.W9 = 10, this.N9 = 10, this.o9 = 0, this.I9 = .2
+       this.eJ = !1, this.KJ = !1, this.yJ = 1, this.vJ = 0, this.OJ = 10, this.LJ = 10, this.PJ = 0, this.HJ = .2
```

#### 452. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4107-L4110` → after: `L4107-L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4107-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4107-L4110) · [Before (L4107-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4107-L4110)

```diff
-         JR = Object.assign({}, new Et, JR), this.xw = RR, this.W9 = +JR.W9, this.N9 = +JR.N9, this.hT = !!JR.hT, this.Q0 = !!JR.Q0, this.J9 = JR.J9, this.K9 = JR.K9, this.heading = 0, this.pitch = 0, this.rK = 0, this.nL = UR().create(), this.R6 = this.xw.zC.Z6(["position"]);
-         var GR = .9 * RR.zC.f6(RR.WH).height;
-         RR.zC.Jm(this.R6, "bC", {
-           pe: RR.WH,
+         Sr = Object.assign({}, new cW, Sr), this.gm = rr, this.OJ = +Sr.OJ, this.LJ = +Sr.LJ, this.eJ = !!Sr.eJ, this.KJ = !!Sr.KJ, this.yJ = Sr.yJ, this.vJ = Sr.vJ, this.heading = 0, this.pitch = 0, this.mx = 0, this.eh = Yr().create(), this.qJ = this.gm.YB.RJ(["position"]);
+         var Qr = .9 * rr.YB.gJ(rr.fC).height;
+         rr.YB.gM(this.qJ, "pB", {
+           nU: rr.fC,
```

#### 453. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4112` → after: `L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4112) · [Before (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4112)

```diff
-         }), this.w6 = JR.o9, this.I9 = JR.I9, this.I6 = JR.o9, this.wT = {
+         }), this.MJ = Sr.PJ, this.HJ = Sr.HJ, this.GJ = Sr.PJ, this.JF = {
```

#### 454. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4115-L4122` → after: `L4115-L4122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4115-L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4115-L4122) · [Before (L4115-L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4115-L4122)

```diff
-         }, this.R_ = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.J_ = new eu(this), this.y_ = UR().fi(0, 0, 1), this.q_ = UR().fi(0, 0, 1), this.QE = !1, this.i_ = {
-           KD: 0,
-           vy: 0,
-           uF: 0,
-           XF: 0,
-           mD: 0,
-           GL: 0
-         }, this.f_ = NaN, this.uH = null, this.r_ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.e_ = null, this.L_ = null, this.n_ = null, this.A_ = null
+         }, this.VJ = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.iJ = new Na(this), this.bJ = Yr().tm(0, 0, 1), this.dJ = Yr().tm(0, 0, 1), this.Hk = !1, this.rD = {
+           vx: 0,
+           Fq: 0,
+           Cw: 0,
+           Gw: 0,
+           gR: 0,
+           zh: 0
+         }, this.ZD = NaN, this.JR = null, this.jD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.pD = null, this.mD = null, this.zD = null, this.eD = null
```

#### 455. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4126-L4127` → after: `L4126-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4126-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4126-L4127) · [Before (L4126-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4126-L4127)

```diff
-         var JR = this.xw.zC.f6(this.R6);
-         UR().copy(RR, JR.B_);
+         var Sr = this.gm.YB.gJ(this.qJ);
+         Yr().copy(rr, Sr.lD);
```

#### 456. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4129` → after: `L4129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4129) · [Before (L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4129)

```diff
-         return 0 === GR[0] && 0 === GR[1] && 0 === GR[2] || 0 === this.I6 || Ru(this, RR, this.heading), RR
+         return 0 === Qr[0] && 0 === Qr[1] && 0 === Qr[2] || 0 === this.GJ || uW(this, rr, this.heading), rr
```

#### 457. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4133-L4136` → after: `L4133-L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4133-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4133-L4136) · [Before (L4133-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4133-L4136)

```diff
-         var JR = this.M_(RR);
-         if (0 === this.I6) return JR;
-         const GR = this.xw.bloxd.p_(this.xw.WH);
-         return UR().pr(JR, JR, this.y_, -this.I6 * GR)
+         var Sr = this.KD(rr);
+         if (0 === this.GJ) return Sr;
+         const Qr = this.gm.bloxd.qD(this.gm.fC);
+         return Yr().fh(Sr, Sr, this.bJ, -this.GJ * Qr)
```

#### 458. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4139` → after: `L4139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4139) · [Before (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4139)

```diff
-         return this.l_(RR)
+         return this.PD(rr)
```

#### 459. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4142` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4142) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4142)

```diff
-         var RR = this.M_(),
+         var rr = this.KD(),
```

#### 460. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4144` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4144) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4144)

```diff
-         return this.xw.x_(RR, JR)
+         return this.gm.dD(rr, Sr)
```

#### 461. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4147` → after: `L4147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4147) · [Before (L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4147)

```diff
-         var RR = this.l_(),
+         var rr = this.PD(),
```

#### 462. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4149` → after: `L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4149) · [Before (L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4149)

```diff
-         return this.xw.x_(RR, JR)
+         return this.gm.dD(rr, Sr)
```

#### 463. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4152` → after: `L4152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4152) · [Before (L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4152)

```diff
-         return (0, dt.e)(this.heading, this.pitch - Math.PI / 2)
+         return (0, wW.b)(this.heading, this.pitch - Math.PI / 2)
```

#### 464. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4156` → after: `L4156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4156) · [Before (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4156)

```diff
-         return UR().copy(this.P_, this.q_)
+         return Yr().copy(this.U1, this.dJ)
```

#### 465. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4159` → after: `L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4159) · [Before (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4159)

```diff
-         return UR().copy(this.P_, this.y_)
+         return Yr().copy(this.U1, this.bJ)
```

#### 466. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4162-L4163` → after: `L4162-L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4162-L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4162-L4163) · [Before (L4162-L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4162-L4163)

```diff
-         var yR = this.r_;
-         return yR[0] = RR, yR[1] = JR, yR[2] = GR.dx, yR[3] = GR.dy, yR[7] = this.i_.KD, yR[8] = this.i_.vy, yR[9] = function(RR) {
+         var Zr = this.jD;
+         return Zr[0] = rr, Zr[1] = Sr, Zr[2] = Qr.dx, Zr[3] = Qr.dy, Zr[7] = this.rD.vx, Zr[8] = this.rD.Fq, Zr[9] = function(rr) {
```

#### 467. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4168` → after: `L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4168) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4168)

```diff
-         RR[4] = GR, RR[5] = yR, RR[6] = JR, this.uH && this.uH(RR)
+         rr[4] = Qr, rr[5] = Zr, rr[6] = Sr, this.JR && this.JR(rr)
```

#### 468. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4173-L4174` → after: `L4173-L4174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4173-L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4173-L4174) · [Before (L4173-L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4173-L4174)

```diff
-           dx: this.wT.dx,
-           dy: this.wT.dy
+           dx: this.JF.dx,
+           dy: this.JF.dy
```

#### 469. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4176` → after: `L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4176) · [Before (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4176)

```diff
-         this.wT.dx = this.wT.dy = 0;
+         this.JF.dx = this.JF.dy = 0;
```

#### 470. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4181-L4185` → after: `L4181-L4185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4181-L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4181-L4185) · [Before (L4181-L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4181-L4185)

```diff
-           return "number" === typeof RR ? RR : performance.now()
-         }()) - this.f_, this.f_ = yR);
-         var tR = !RR && this.uH ? this.j_(yR, GR, JR) : null;
-         const uR = this.n_ ? this.n_() : 0,
-           ZR = this.A_ ? this.A_() : null,
+           return "number" === typeof rr ? rr : performance.now()
+         }()) - this.ZD, this.ZD = Zr);
+         var Wr = !rr && this.JR ? this.f4(Zr, Qr, Sr) : null;
+         const ar = this.zD ? this.zD() : 0,
+           jr = this.eD ? this.eD() : null,
```

#### 471. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4187-L4191` → after: `L4187-L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4187-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4187-L4191) · [Before (L4187-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4187-L4191)

```diff
-         var iR, fR = this.J9;
-         if (this.xw.container.kS && (this.xw.container.bS || (fR *= this.K9)), 0 === fR && 0 === uR && !qR) return RR || cy(this.i_), void(tR && this.E_(tR, Oy, 0, 0));
-         if (this.QE) {
-           if (this.QE = !1, RR || (cy(iR = this.i_), iR.KD = iR.vy = 0), 0 === uR && !qR) return void(tR && this.E_(tR, Dy, 0, 0));
-           fR = 0, tR && this.E_(tR, Dy, 0, 0), tR = null
+         var fr, Er = this.yJ;
+         if (this.gm.container.vG && (this.gm.container.yG || (Er *= this.vJ)), 0 === Er && 0 === ar && !Ir) return rr || MZ(this.rD), void(Wr && this.K4(Wr, PZ, 0, 0));
+         if (this.Hk) {
+           if (this.Hk = !1, rr || (MZ(fr = this.rD), fr.vx = fr.Fq = 0), 0 === ar && !Ir) return void(Wr && this.K4(Wr, RZ, 0, 0));
+           Er = 0, Wr && this.K4(Wr, RZ, 0, 0), Wr = null
```

#### 472. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4199-L4200` → after: `L4199-L4200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4199-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4199-L4200) · [Before (L4199-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4199-L4200)

```diff
-                 if (RR.GL += tR, RR.GL <= 16) return 0 === RR.uF && 0 === RR.XF || (RR.mD += tR), !1
-               } else RR.GL = 0;
+                 if (rr.zh += Wr, rr.zh <= 16) return 0 === rr.Cw && 0 === rr.Gw || (rr.gR += Wr), !1
+               } else rr.zh = 0;
```

#### 473. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4202-L4204` → after: `L4202-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4202-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4202-L4204) · [Before (L4202-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4202-L4204)

```diff
-                 ZR = Iy(JR.dx, yR, RR.KD, uR),
-                 qR = Iy(JR.dy, yR, RR.vy, uR),
-                 iR = 0 !== ZR && ZR !== RR.uF || 0 !== qR && qR !== RR.XF,
+                 jr = kZ(Sr.dx, Zr, rr.vx, ar),
+                 Ir = kZ(Sr.dy, Zr, rr.Fq, ar),
+                 fr = 0 !== jr && jr !== rr.Cw || 0 !== Ir && Ir !== rr.Gw,
```

#### 474. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4206-L4210` → after: `L4206-L4210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4206-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4206-L4210) · [Before (L4206-L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4206-L4210)

```diff
-                 VR = 0 === RR.uF && 0 === RR.XF ? 0 : RR.mD + tR;
-               return (iR || fR) && VR <= 70 ? (RR.uF = ZR, RR.XF = qR, RR.mD = VR, JR.dx = RR.KD * yR, JR.dy = RR.vy * yR, !0) : (RR.uF = RR.XF = 0, RR.KD = JR.dx / yR, RR.vy = JR.dy / yR, !1)
-             }(this.i_, JR, GR);
-             tR && this.E_(tR, VR ? Ny : xy, JR.dx, JR.dy)
-           } else cy(this.i_), tR && this.E_(tR, Oy, 0, 0);
+                 pr = 0 === rr.Cw && 0 === rr.Gw ? 0 : rr.gR + Wr;
+               return (fr || Er) && pr <= 70 ? (rr.Cw = jr, rr.Gw = Ir, rr.gR = pr, Sr.dx = rr.vx * Zr, Sr.dy = rr.Fq * Zr, !0) : (rr.Cw = rr.Gw = 0, rr.vx = Sr.dx / Zr, rr.Fq = Sr.dy / Zr, !1)
+             }(this.rD, Sr, Qr);
+             Wr && this.K4(Wr, pr ? qZ : HZ, Sr.dx, Sr.dy)
+           } else MZ(this.rD), Wr && this.K4(Wr, PZ, 0, 0);
```

#### 475. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4212-L4214` → after: `L4212-L4214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4212-L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4212-L4214) · [Before (L4212-L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4212-L4214)

```diff
-           wR = JR.dx * this.W9 * fR * KR,
-           rR = JR.dy * this.N9 * fR * KR;
-         this.hT && (wR = -wR), this.Q0 && (rR = -rR), qR && (wR += ZR.bD, rR += ZR.PD), (0 !== fR || qR) && (rR += this.J_.Y_(rR));
+           mr = Sr.dx * this.OJ * Er * xr,
+           Nr = Sr.dy * this.LJ * Er * xr;
+         this.eJ && (mr = -mr), this.KJ && (Nr = -Nr), Ir && (mr += jr.xR, Nr += jr.yR), (0 !== Er || Ir) && (Nr += this.iJ.O4(Nr));
```

#### 476. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4216` → after: `L4216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4216) · [Before (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4216)

```diff
-         this.heading += wR < 0 ? wR + eR : wR, this.heading > eR && (this.heading -= eR), (0 !== uR || qR) && (this.heading = ((this.heading + uR) % eR + eR) % eR), this.pitch = Math.max(-ru, Math.min(ru, this.pitch + rR)), null !== this.L_ && (this.heading = this.L_), null !== t … [truncated]
+         this.heading += mr < 0 ? mr + Ur : mr, this.heading > Ur && (this.heading -= Ur), (0 !== ar || Ir) && (this.heading = ((this.heading + ar) % Ur + Ur) % Ur), this.pitch = Math.max(-ma, Math.min(ma, this.pitch + Nr)), null !== this.mD && (this.heading = this.mD), null !== t … [truncated]
```

#### 477. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4219-L4220` → after: `L4219-L4220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4219-L4220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4219-L4220) · [Before (L4219-L4220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4219-L4220)

```diff
-         UR().set(this.q_, 0, 0, 1);
-         var RR = this.q_,
+         Yr().set(this.dJ, 0, 0, 1);
+         var rr = this.dJ,
```

#### 478. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4222` → after: `L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4222) · [Before (L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4222)

```diff
-         Ju(this, this.heading, this.pitch, 0 !== this.I6, this.y_), UR().ge(RR, RR, JR, this.pitch), UR().ta(RR, RR, JR, this.heading)
+         ra(this, this.heading, this.pitch, 0 !== this.GJ, this.bJ), Yr().xh(rr, rr, Sr, this.pitch), Yr().mh(rr, rr, Sr, this.heading)
```

#### 479. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4228)

```diff
-           ZR = this.xw.bloxd.p_(this.xw.WH),
+           jr = this.gm.bloxd.qD(this.gm.fC),
```

#### 480. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4231` → after: `L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4231) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4231)

```diff
-         return 0 === iR ? (UR().copy(tR, RR), 0) : (UR().pr(tR, tR, uR, -iR * ZR), iR)
+         return 0 === fr ? (Yr().copy(Wr, rr), 0) : (Yr().fh(Wr, Wr, ar, -fr * jr), fr)
```

#### 481. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4234` → after: `L4234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4234) · [Before (L4234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4234)

```diff
-         return UR().Re(Ku, JR), Tt(this, RR, Ku, GR)
+         return Yr().ph(pa, Sr), DW(this, rr, pa, Qr)
```

#### 482. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4237-L4238` → after: `L4237-L4238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4237-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4237-L4238) · [Before (L4237-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4237-L4238)

```diff
-         const JR = (this.w6 - this.I6) * this.I9;
-         Math.abs(JR) < 1e-4 ? this.I6 = this.w6 : this.I6 += JR, 0 !== JR && this.R_ && this.R_(this.I6, this.I6 - JR), this.J_.update(RR)
+         const Sr = (this.MJ - this.GJ) * this.HJ;
+         Math.abs(Sr) < 1e-4 ? this.GJ = this.MJ : this.GJ += Sr, 0 !== Sr && this.VJ && this.VJ(this.GJ, this.GJ - Sr), this.iJ.update(rr)
```

#### 483. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4241-L4243` → after: `L4241-L4243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4241-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4241-L4243) · [Before (L4241-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4241-L4243)

```diff
-         var RR = ht(Ft(this), this.xw.bloxd.p_(this.xw.WH));
-         this.I6 > RR && (this.I6 = RR);
-         var JR = this.xw.lK.Z2().y5;
+         var rr = sW(JW(this), this.gm.bloxd.qD(this.gm.fC));
+         this.GJ > rr && (this.GJ = rr);
+         var Sr = this.gm.Ox.r_().S_;
```

#### 484. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4254-L4256` → after: `L4254-L4256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4254-L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4254-L4256) · [Before (L4254-L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4254-L4256)

```diff
-       const JR = RR.xw.bloxd.p_(RR.xw.WH);
-       var GR = Math.max(RR.w6, RR.I6) * JR + .5;
-       return Tt(RR, RR.M_(), RR.S_(), GR)
+       const Sr = rr.gm.bloxd.qD(rr.gm.fC);
+       var Qr = Math.max(rr.MJ, rr.GJ) * Sr + .5;
+       return DW(rr, rr.KD(), rr.W4(), Qr)
```

#### 485. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4261-L4262` → after: `L4261-L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4261-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4261-L4262) · [Before (L4261-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4261-L4262)

```diff
-         var tR = RR.xw.Fw;
-         Zu = new(zt())([0, 0, 0], UR().clone(iu)), qu = (JR, GR, yR) => RR.xw.NK.sw(JR + tR[0], GR + tR[1], yR + tR[2]), UR().scale(iu, iu, -.5)
+         var Wr = rr.gm.um;
+         aa = new(AW())([0, 0, 0], Yr().clone(Ia)), ja = (Sr, Qr, Zr) => rr.gm.qx.SN(Sr + Wr[0], Qr + Wr[1], Zr + Wr[2]), Yr().scale(Ia, Ia, -.5)
```

#### 486. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4279` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4279) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4279)

```diff
-       return UR().set(tR, 0, 0, 1), UR().ge(tR, tR, uR, RR.nL[0]), UR().ta(tR, tR, uR, RR.nL[1]), UR().wa(tR, tR, uR, RR.nL[2]), UR().ge(tR, tR, uR, GR), UR().ta(tR, tR, uR, JR), yR && (UR().ge(tR, tR, uR, RR.cameraRotationOffset[0]), UR().ta(tR, tR, uR, RR.cameraRotationOffset[1 … [truncated]
+       return Yr().set(Wr, 0, 0, 1), Yr().xh(Wr, Wr, ar, rr.eh[0]), Yr().mh(Wr, Wr, ar, rr.eh[1]), Yr().Nh(Wr, Wr, ar, rr.eh[2]), Yr().xh(Wr, Wr, ar, Qr), Yr().mh(Wr, Wr, ar, Sr), Zr && (Yr().xh(Wr, Wr, ar, rr.cameraRotationOffset[0]), Yr().mh(Wr, Wr, ar, rr.cameraRotationOffset[1 … [truncated]
```

#### 487. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4283-L4285` → after: `L4283-L4285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4283-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4283-L4285) · [Before (L4283-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4283-L4285)

```diff
-       Zu.setPosition(RR.l_()), Zu.translate(iu);
-       var JR = Math.max(RR.targetY, RR.xw.lK.Z2().y5[1]) + .5,
-         GR = RR.N_();
+       aa.setPosition(rr.PD()), aa.translate(Ia);
+       var Sr = Math.max(rr.targetY, rr.gm.Ox.r_().S_[1]) + .5,
+         Qr = rr.uD();
```

#### 488. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4290-L4294` → after: `L4290-L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4290-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4290-L4294) · [Before (L4290-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4290-L4294)

```diff
-       const JR = RR.l_(),
-         GR = (0, dt.e)(RR.heading, RR.pitch - Math.PI / 2);
-       UR().pr(JR, JR, GR, RR.xw.lK.Z2().y5[1]), Zu.setPosition(JR), Zu.translate(iu);
-       var yR = Math.max(RR.targetX, RR.xw.lK.Z2().y5[0]) + .5;
-       const tR = (0, dt.e)(RR.heading + Math.PI / 2, 0);
+       const Sr = rr.PD(),
+         Qr = (0, wW.b)(rr.heading, rr.pitch - Math.PI / 2);
+       Yr().fh(Sr, Sr, Qr, rr.gm.Ox.r_().S_[1]), aa.setPosition(Sr), aa.translate(Ia);
+       var Zr = Math.max(rr.targetX, rr.gm.Ox.r_().S_[0]) + .5;
+       const Wr = (0, wW.b)(rr.heading + Math.PI / 2, 0);
```

#### 489. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4299-L4300` → after: `L4299-L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4299-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4299-L4300) · [Before (L4299-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4299-L4300)

```diff
-       var JR = RR.xw.physics?.wasm;
-       return JR ? JR.Nk(Zu, fu, uu) : uu()
+       var Sr = rr.gm.physics?.wasm;
+       return Sr ? Sr.bV(aa, fa, Wa) : Wa()
```

#### 490. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4306` → after: `L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4306) · [Before (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4306)

```diff
-     var Zu, qu, iu = UR().fi(.2, .2, .2),
+     var aa, ja, Ia = Yr().tm(.2, .2, .2),
```

#### 491. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4314` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4314) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4314)

```diff
-         this.Z5 = RR, this.bK = 0, this.i5 = 0, this.B5 = 0, this.o5 = 0, this.Y5 = performance.now(), this.f4 = performance.now(), this.K4 = 0, this.W4 = 0
+         this.Q_ = rr, this.Xx = 0, this.j_ = 0, this.f_ = 0, this.E_ = 0, this.p_ = performance.now(), this.x_ = performance.now(), this.m_ = 0, this.N_ = 0
```

#### 492. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4317-L4319` → after: `L4317-L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4317-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4317-L4319) · [Before (L4317-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4317-L4319)

```diff
-         const JR = this.i5 - this.B5,
-           GR = this.Z5.pitch + ru;
-         this.bK = Math.min(this.bK + RR, JR + GR), this.Y5 = performance.now()
+         const Sr = this.j_ - this.f_,
+           Qr = this.Q_.pitch + ma;
+         this.Xx = Math.min(this.Xx + rr, Sr + Qr), this.p_ = performance.now()
```

#### 493. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4322` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4322) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4322)

```diff
-         this.o5 = RR
+         this.E_ = rr
```

#### 494. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4325` → after: `L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4325) · [Before (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4325)

```diff
-         this.bK = 0, this.i5 = 0, this.B5 = 0, this.K4 = 0, this.W4 = 0
+         this.Xx = 0, this.j_ = 0, this.f_ = 0, this.m_ = 0, this.N_ = 0
```

#### 495. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4328-L4332` → after: `L4328-L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4328-L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4328-L4332) · [Before (L4328-L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4328-L4332)

```diff
-         this.B5 > 0 && (this.W4 += this.B5), (this.bK > 0 || this.i5 > 0) && RR > 0 && (this.K4 += RR);
-         let JR = this.B5;
-         this.B5 = 0;
-         if (JR < 0 && this.W4 > 0 && this.K4 > 0) {
-           JR *= 1 - Math.min(1, this.K4 / this.W4)
+         this.f_ > 0 && (this.N_ += this.f_), (this.Xx > 0 || this.j_ > 0) && rr > 0 && (this.m_ += rr);
+         let Sr = this.f_;
+         this.f_ = 0;
+         if (Sr < 0 && this.N_ > 0 && this.m_ > 0) {
+           Sr *= 1 - Math.min(1, this.m_ / this.N_)
```

#### 496. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4338-L4342` → after: `L4338-L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4338-L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4338-L4342) · [Before (L4338-L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4338-L4342)

```diff
-           GR = Math.min(JR - this.Y5, 75);
-         this.bK = Math.max(0, this.bK - this.o5 * GR * RR);
-         const yR = Math.min(1, .009 * (JR - this.f4)),
-           tR = (this.bK - this.i5) * yR;
-         Math.abs(tR) < 1e-6 ? this.i5 = this.bK : (this.B5 += tR, this.i5 += tR), 0 === this.bK && Math.abs(this.i5) < 1e-6 && (this.K4 = 0, this.W4 = 0), this.f4 = JR
+           Qr = Math.min(Sr - this.p_, 75);
+         this.Xx = Math.max(0, this.Xx - this.E_ * Qr * rr);
+         const Zr = Math.min(1, .009 * (Sr - this.x_)),
+           Wr = (this.Xx - this.j_) * Zr;
+         Math.abs(Wr) < 1e-6 ? this.j_ = this.Xx : (this.f_ += Wr, this.j_ += Wr), 0 === this.Xx && Math.abs(this.j_) < 1e-6 && (this.m_ = 0, this.N_ = 0), this.x_ = Sr
```

#### 497. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4345` → after: `L4345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4345) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4345)

```diff
-     var au = GR(38640),
+     var Ua = Qr(38990),
```

#### 498. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4347` → after: `L4347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4347) · [Before (L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4347)

```diff
-         O4: ""
+         h_: ""
```

#### 499. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4351` → after: `L4351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4351) · [Before (L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4351)

```diff
-         JR = Object.assign({}, Lu, JR), this.xw = RR, this.K3 = JR.O4;
+         Sr = Object.assign({}, ta, Sr), this.gm = rr, this.n_ = Sr.h_;
```

#### 500. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4368` → after: `L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4368) · [Before (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4368)

```diff
-         this.Wa = [0, 0, 0, 0, 0, 0], this.FY = 0;
+         this.Et = [0, 0, 0, 0, 0, 0], this.HV = 0;
```

#### 501. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4372-L4373` → after: `L4372-L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4372-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4372-L4373) · [Before (L4372-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4372-L4373)

```diff
-         this.Dk = function(RR, JR) {
-           var GR = new Au(JR && JR.Nr),
+         this.JV = function(rr, Sr) {
+           var Qr = new na(Sr && Sr.HN),
```

#### 502. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4376-L4377` → after: `L4376-L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4376-L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4376-L4377) · [Before (L4376-L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4376-L4377)

```diff
-           for (; RR > tR.length;) this.Dk(tR.length, {});
-           this.FY++, tR[RR] = !!WR.solid, uR[RR] = !!WR.solid && (WR.AL ?? !0), ZR[RR] = WR.AL ?? null, qR[RR] = !!WR.opaque, iR[RR] = !!WR.Nr, fR[RR] = !!WR.R7, KR[RR] = WR.R7 || null;
+           for (; rr > Wr.length;) this.JV(Wr.length, {});
+           this.HV++, Wr[rr] = !!nr.solid, ar[rr] = !!nr.solid && (nr.Bh ?? !0), jr[rr] = nr.Bh ?? null, Ir[rr] = !!nr.opaque, fr[rr] = !!nr.HN, Er[rr] = !!nr.P_, xr[rr] = nr.P_ || null;
```

#### 503. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4387-L4390` → after: `L4387-L4390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4387-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4387-L4390) · [Before (L4387-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4387-L4390)

```diff
-           for (var XR = 0; XR < 6; ++XR) this.Wa[6 * RR + XR] = Uu(this, yR, AR[XR], !0);
-           VR[RR] = {}, iR[RR] && (VR[RR].kw = WR.kw, VR[RR].U1 = WR.U1);
-           var BR = WR.onLoad || WR.Xp || WR.Fv || WR.Qv || WR.qB;
-           wR[RR] = BR ? new Wu(WR) : null, eR[RR] = WR.ze?.some((RR => RR >= 1)) ? WR.ze.map((RR => Math.max(RR, 0))) : null, aR[RR] = (WR.CL ?? 0) >= 1 ? WR.CL : null, qR[RR] ? LR[RR] = 15 : (WR.Se ?? 0) >= 1 ? LR[RR] = WR.Se : LR[RR] = iR[RR] ? 3 : 1, nR[RR] = WR.mH | (qR[RR] ? … [truncated]
+           for (var yr = 0; yr < 6; ++yr) this.Et[6 * rr + yr] = za(this, Zr, er[yr], !0);
+           pr[rr] = {}, fr[rr] && (pr[rr].dm = nr.dm, pr[rr].q_ = nr.q_);
+           var Tr = nr.onLoad || nr.lL || nr.yX || nr.EX || nr.wT;
+           mr[rr] = Tr ? new Ya(nr) : null, Ur[rr] = nr.PU?.some((rr => rr >= 1)) ? nr.PU.map((rr => Math.max(rr, 0))) : null, tr[rr] = (nr.Th ?? 0) >= 1 ? nr.Th : null, Ir[rr] ? hr[rr] = 15 : (nr.HU ?? 0) >= 1 ? hr[rr] = nr.HU : hr[rr] = fr[rr] ? 3 : 1, zr[rr] = nr.nC | (Ir[rr] ? … [truncated]
```

#### 504. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4393` → after: `L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4393) · [Before (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4393)

```diff
-         }, this.E1 = function(RR, JR) {
+         }, this.R_ = function(rr, Sr) {
```

#### 505. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4398)

```diff
-           var ZR = (tR.B3 ?? []).map((RR => this.K3 + RR)),
+           var jr = (Wr.B_ ?? []).map((rr => this.n_ + rr)),
```

#### 506. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4401` → after: `L4401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4401) · [Before (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4401)

```diff
-           4 === iR.length && (qR = iR.pop()), !0 === tR.Y1 ? WR[uR] = iR : WR[uR] = null, AR[uR] = tR.Z8, CR[uR] = {
+           4 === fr.length && (Ir = fr.pop()), !0 === Wr.M_ ? nr[ar] = fr : nr[ar] = null, er[ar] = Wr.v_, Kr[ar] = {
```

#### 507. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4404-L4410` → after: `L4404-L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4404-L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4404-L4410) · [Before (L4404-L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4404-L4410)

```diff
-             B3: ZR,
-             I3: !!tR.I3,
-             Z8: tR.Z8,
-             Oa: tR.RRR,
-             ML: tR.ML,
-             K8: tR.K8,
-             W8: tR.W8 ?? null
+             B_: jr,
+             T_: !!Wr.T_,
+             v_: Wr.v_,
+             Kt: Wr.k_,
+             Oh: Wr.Oh,
+             L_: Wr.L_,
+             l_: Wr.l_ ?? null
```

#### 508. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4412-L4414` → after: `L4412-L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4412-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4412-L4414) · [Before (L4412-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4412-L4414)

```diff
-           const fR = GR.JRR(uR);
-           return tR.Z8 >= 0 && tR.I3 && (0, au.l)(GR, uR, GR.he(fR)), uR
-         }, this.aT = function(RR) {
+           const Er = Qr.A_(ar);
+           return Wr.v_ >= 0 && Wr.T_ && (0, Ua.j)(Qr, ar, Qr.iU(Er)), ar
+         }, this.uF = function(rr) {
```

#### 509. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4416` → after: `L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4416) · [Before (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4416)

```diff
-         }, this.vr = function(RR) {
+         }, this.XN = function(rr) {
```

#### 510. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4418` → after: `L4418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4418) · [Before (L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4418)

```diff
-         }, this.hY = function(RR) {
+         }, this.RV = function(rr) {
```

#### 511. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4420` → after: `L4420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4420) · [Before (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4420)

```diff
-         }, this.GRR = function(RR) {
+         }, this.i_ = function(rr) {
```

#### 512. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4422)

```diff
-         }, this.yRR = function(RR) {
+         }, this.F_ = function(rr) {
```

#### 513. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4424` → after: `L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4424) · [Before (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4424)

```diff
-         }, this.tRR = function(RR) {
+         }, this.o_ = function(rr) {
```

#### 514. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4426` → after: `L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4426) · [Before (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4426)

```diff
-         }, this.uRR = function(RR) {
+         }, this.b_ = function(rr) {
```

#### 515. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4428-L4430` → after: `L4428-L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4428-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4428-L4430) · [Before (L4428-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4428-L4430)

```diff
-         }, this.ZRR = function(RR, JR) {
-           return this.Wa[6 * RR + JR]
-         }, this.va = function(RR) {
+         }, this.J_ = function(rr, Sr) {
+           return this.Et[6 * rr + Sr]
+         }, this.et = function(rr) {
```

#### 516. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4432` → after: `L4432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4432) · [Before (L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4432)

```diff
-         }, this.qRR = function() {
+         }, this.Z2 = function() {
```

#### 517. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4434-L4435` → after: `L4434-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4434-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4434-L4435) · [Before (L4434-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4434-L4435)

```diff
-           return CR.some((JR => JR.B3.some((GR => GR === RR && JR.I3))))
-         }, this.Dr = tR, this.Ua = qR, this.Or = iR, this.Av = fR, this.iRR = KR, this.Dv = wR, this.Xx = rR, this.Ca = WR, this.Aa = AR, this.Ba = eR, this.la = aR, this.ga = LR, this.ua = nR, this.fRR = UR
+           return Kr.some((Sr => Sr.B_.some((Qr => Qr === rr && Sr.T_))))
+         }, this.qN = Wr, this.ft = Ir, this.PN = fr, this.dL = Er, this.Z6 = xr, this.uL = mr, this.ZH = Nr, this.Nt = nr, this.xt = er, this.ht = Ur, this.zt = tr, this.Yt = hr, this.bU = zr, this.I6 = Yr
```

#### 518. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4442` → after: `L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4442) · [Before (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4442)

```diff
-       return void 0 === tR && yR && (tR = RR.E1(GR, {})), tR
+       return void 0 === Wr && Zr && (Wr = rr.R_(Qr, {})), Wr
```

#### 519. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4446` → after: `L4446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4446) · [Before (L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4446)

```diff
-       this.onLoad = RR.onLoad || null, this.Xp = RR.Xp || null, this.Fv = RR.Fv || null, this.Qv = RR.Qv || null, this.qB = RR.qB || null
+       this.onLoad = rr.onLoad || null, this.lL = rr.lL || null, this.yX = rr.yX || null, this.EX = rr.EX || null, this.wT = rr.wT || null
```

#### 520. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4451` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4451) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4451)

```diff
-       this.solid = !RR, this.AL = null, this.opaque = !RR, this.Nr = !1, this.material = null, this.R7 = null, this.kw = 1, this.U1 = .5, this.onLoad = null, this.Xp = null, this.Fv = null, this.Qv = null, this.qB = null, this.ze = null, this.CL = null, this.Se = null, this.mH =  … [truncated]
+       this.solid = !rr, this.Bh = null, this.opaque = !rr, this.HN = !1, this.material = null, this.P_ = null, this.dm = 1, this.q_ = .5, this.onLoad = null, this.lL = null, this.yX = null, this.EX = null, this.wT = null, this.PU = null, this.Th = null, this.HU = null, this.nC =  … [truncated]
```

#### 521. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4455` → after: `L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4455) · [Before (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4455)

```diff
-       this.color = null, this.Y1 = !0, this.B3 = [], this.I3 = !1, this.Z8 = -1, this.K8 = null, this.W8 = null, this.RRR = null, this.ML = null
+       this.color = null, this.M_ = !0, this.B_ = [], this.T_ = !1, this.v_ = -1, this.L_ = null, this.l_ = null, this.k_ = null, this.Oh = null
```

#### 522. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4457-L4460` → after: `L4457-L4460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4457-L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4457-L4460) · [Before (L4457-L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4457-L4460)

```diff
-     GR(4006);
-     var Xu = GR(4015),
-       Mu = GR(38998),
-       Bu = GR(40923);
+     Qr(3959);
+     var Ka = Qr(3973),
+       ya = Qr(39342),
+       Ba = Qr(41275);
```

#### 523. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4463-L4465` → after: `L4463-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4463-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4463-L4465) · [Before (L4463-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4463-L4465)

```diff
-       this.xw = RR, this.mesh = JR;
-       var GR = JR.ke();
-       this.wRR = !0 === GR.rRR && !!RR.Be, this.wRR && (0, Mu.o)(JR), this.aRR = GR.LRR?.(JR, this.wRR ? bu : gu) ?? null, this.buffer = null, this.nRR = null, this.URR = null, this.ARR = RR.ka.ARR, this.nD = !1, this.CRR = null, this.XRR = null, this.MRR = 0, this.WL = null, thi … [truncated]
+       this.gm = rr, this.mesh = Sr;
+       var Qr = Sr.MU();
+       this.w6 = !0 === Qr.W9 && !!rr.zU, this.w6 && (0, ya.i)(Sr), this.N9 = Qr.K9?.(Sr, this.w6 ? La : Oa) ?? null, this.buffer = null, this.o9 = null, this.J9 = null, this.Y5 = rr.Gt.Y5, this.jR = !1, this.y5 = null, this.B5 = null, this.i5 = 0, this.yh = null, this.o5 = !1, th … [truncated]
```

#### 524. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4469-L4470` → after: `L4469-L4470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4469-L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4469-L4470) · [Before (L4469-L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4469-L4470)

```diff
-           if (GR.ZJR && Array.isArray(GR.ZJR))
-             for (var tR = 0; tR < GR.ZJR.length; tR++) GR.ZJR[tR] && yR.push(GR.ZJR[tR]);
+           if (Qr.Lrr && Array.isArray(Qr.Lrr))
+             for (var Wr = 0; Wr < Qr.Lrr.length; Wr++) Qr.Lrr[Wr] && Zr.push(Qr.Lrr[Wr]);
```

#### 525. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4474)

```diff
-             cu.has(uR) || ((0, Mu.e)(uR, JR), cu.add(uR))
+             Ca.has(ar) || ((0, ya.c)(ar, Sr), Ca.add(ar))
```

#### 526. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4476` → after: `L4476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4476) · [Before (L4476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4476)

```diff
-         }(this.mesh, RR.lK), this.xw.lK.xI(this.mesh), this.xw.emit("addingTerrainMesh", this.mesh)
+         }(this.mesh, rr.Ox), this.gm.Ox.pM(this.mesh), this.gm.emit("addingTerrainMesh", this.mesh)
```

#### 527. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4480-L4481` → after: `L4480-L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4480-L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4480-L4481) · [Before (L4480-L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4480-L4481)

```diff
-       return (null === JR || JR.data.length < 2 * RR.MRR) && (JR = {
-         data: new Uint32Array(Math.max(16, 4 * RR.MRR)),
+       return (null === Sr || Sr.data.length < 2 * rr.i5) && (Sr = {
+         data: new Uint32Array(Math.max(16, 4 * rr.i5)),
```

#### 528. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4483` → after: `L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4483) · [Before (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4483)

```diff
-       }), JR.count = (0, Bu.F)(RR.CRR, RR.XRR, RR.MRR, GR, Bu.d, JR.data), JR
+       }), Sr.count = (0, Ba.G)(rr.y5, rr.B5, rr.i5, Qr, Ba.c, Sr.data), Sr
```

#### 529. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4486-L4487` → after: `L4486-L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4486-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4486-L4487) · [Before (L4486-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4486-L4487)

```diff
-       this.He || (this.ARR.cRR.delete(this), (0, Bu.D)(this.mesh, null), this.nD && (0, Bu.A)(this.mesh, void 0), this.nD = !1, this.mesh.zRR = 0, this.SRR(0), this.xw.emit("removingTerrainMesh", this.mesh), this.xw.lK.jRR(this.mesh, !1), this.mesh = null, this.ORR = null, this.x … [truncated]
-     }, lu.prototype.YRR = function(RR, JR, GR, yR, tR, uR, ZR) {
+       this.vU || (this.Y5.arr.delete(this), (0, Ba.E)(this.mesh, null), this.jR && (0, Ba.A)(this.mesh, void 0), this.jR = !1, this.mesh.frr = 0, this.prr(0), this.gm.emit("removingTerrainMesh", this.mesh), this.gm.Ox.xrr(this.mesh, !1), this.mesh = null, this.B3 = null, this.X3  … [truncated]
+     }, Ta.prototype.Nrr = function(rr, Sr, Qr, Zr, Wr, ar, jr) {
```

#### 530. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4489-L4491` → after: `L4489-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4489-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4489-L4491) · [Before (L4489-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4489-L4491)

```diff
-         if (RR.count < RR.hK) return;
-         var JR = Math.max(8, 2 * RR.hK);
-         RR.SRR(JR)
+         if (rr.count < rr.sx) return;
+         var Sr = Math.max(8, 2 * rr.sx);
+         rr.prr(Sr)
```

#### 531. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4494` → after: `L4494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4494) · [Before (L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4494)

```diff
-       this.xRR[this.count] = JR, this.ORR.set(JR, qR);
+       this.X3[this.count] = Sr, this.B3.set(Sr, Ir);
```

#### 532. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4497-L4505` → after: `L4497-L4505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4497-L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4497-L4505) · [Before (L4497-L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4497-L4505)

```diff
-       if (iR.set(uR.matrix, qR), iR[qR + 12] = fR[0] + (RR.x - ZR[0] + GR), iR[qR + 13] = fR[1] + (RR.y - ZR[1] + yR), iR[qR + 14] = fR[2] + (RR.z - ZR[2] + tR), this.nD) {
-         var VR = (0, Bu.t)(this.buffer, qR, this.bounds.min, this.bounds.max, RR.x - ZR[0] + GR, RR.y - ZR[1] + yR, RR.z - ZR[2] + tR);
-         this.URR[this.count] = VR ? this.ARR.YM(RR) : 0
-       }
-       this.count++, this.Ja = !0
-     }, lu.prototype.KRR = function(RR, JR) {
-       return this.wRR ? (JR | this.xw.KK.ua[RR] << 16) >>> 0 : JR
-     }, lu.prototype.QRR = function(RR, JR) {
-       var GR = this.ORR.get(JR);
+       if (fr.set(ar.matrix, Ir), fr[Ir + 12] = Er[0] + (rr.x - jr[0] + Qr), fr[Ir + 13] = Er[1] + (rr.y - jr[1] + Zr), fr[Ir + 14] = Er[2] + (rr.z - jr[2] + Wr), this.jR) {
+         var pr = (0, Ba.o)(this.buffer, Ir, this.bounds.min, this.bounds.max, rr.x - jr[0] + Qr, rr.y - jr[1] + Zr, rr.z - jr[2] + Wr);
+         this.J9[this.count] = pr ? this.Y5.lT(rr) : 0
+       }
+       this.count++, this.cU = !0
+     }, Ta.prototype.R6 = function(rr, Sr) {
+       return this.w6 ? (Sr | this.gm.Ex.bU[rr] << 16) >>> 0 : Sr
+     }, Ta.prototype.trr = function(rr, Sr) {
+       var Qr = this.B3.get(Sr);
```

#### 533. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4507` → after: `L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4507) · [Before (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4507)

```diff
-       this.ORR.delete(JR);
+       this.B3.delete(Sr);
```

#### 534. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4514-L4516` → after: `L4514-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4514-L4516) · [Before (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4514-L4516)

```diff
-         }(this.buffer, uR, this.buffer, GR), this.nRR[yR] = this.nRR[tR], this.nD && (this.URR[yR] = this.URR[tR]);
-         var ZR = this.xRR[tR];
-         this.ORR.set(ZR, GR), this.xRR[yR] = ZR
+         }(this.buffer, ar, this.buffer, Qr), this.o9[Zr] = this.o9[Wr], this.jR && (this.J9[Zr] = this.J9[Wr]);
+         var jr = this.X3[Wr];
+         this.B3.set(jr, Qr), this.X3[Zr] = jr
```

#### 535. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4518` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4518) · [Before (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4518)

```diff
-       this.count--, this.Ja = !0,
+       this.count--, this.cU = !0,
```

#### 536. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4520-L4522` → after: `L4520-L4522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4520-L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4520-L4522) · [Before (L4520-L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4520-L4522)

```diff
-           if (RR.count > .4 * RR.hK) return;
-           if (RR.hK < 100) return;
-           RR.SRR(Math.round(RR.hK / 2)), RR.xRR.length = Math.min(RR.xRR.length, RR.hK)
+           if (rr.count > .4 * rr.sx) return;
+           if (rr.sx < 100) return;
+           rr.prr(Math.round(rr.sx / 2)), rr.X3.length = Math.min(rr.X3.length, rr.sx)
```

#### 537. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4524` → after: `L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4524) · [Before (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4524)

```diff
-     }, lu.prototype.FRR = function() {
+     }, Ta.prototype.hrr = function() {
```

#### 538. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4526-L4528` → after: `L4526-L4528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4526-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4526-L4528) · [Before (L4526-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4526-L4528)

```diff
-       this.Ja ? (this.nD && (8 * ou(RR = this) > Nu.length && (function(RR) {
-         for (var JR = RR.count, GR = RR.URR, yR = 0; yR < JR; yR++) vu[GR[yR]]++;
-         Du = RR.ARR.keys, Nu.sort(Hu), Du = null;
+       this.cU ? (this.jR && (8 * ga(rr = this) > Ha.length && (function(rr) {
+         for (var Sr = rr.count, Qr = rr.J9, Zr = 0; Zr < Sr; Zr++) la[Qr[Zr]]++;
+         qa = rr.Y5.keys, Ha.sort(Ra), qa = null;
```

#### 539. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4533` → after: `L4533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4533) · [Before (L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4533)

```diff
-         for (var qR = RR.buffer.slice(0, JR << 4), iR = RR.nRR.slice(0, JR), fR = GR.slice(0, JR), VR = RR.xRR.slice(0, JR), KR = 0; KR < JR; KR++) {
+         for (var Ir = rr.buffer.slice(0, Sr << 4), fr = rr.o9.slice(0, Sr), Er = Qr.slice(0, Sr), pr = rr.X3.slice(0, Sr), xr = 0; xr < Sr; xr++) {
```

#### 540. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4537` → after: `L4537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4537) · [Before (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4537)

```diff
-             RR.nRR[wR] = iR[KR], GR[wR] = fR[KR];
+             rr.o9[mr] = fr[xr], Qr[mr] = Er[xr];
```

#### 541. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4539` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4539) · [Before (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4539)

```diff
-             RR.xRR[wR] = LR, RR.ORR.set(LR, eR)
+             rr.X3[mr] = hr, rr.B3.set(hr, Ur)
```

#### 542. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4543-L4549` → after: `L4543-L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4543-L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4543-L4549) · [Before (L4543-L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4543-L4549)

```diff
-       }(RR), ou(RR)), (0, Bu.D)(this.mesh, null), this.BRR = !1, null !== this.lRR && (this.pRR = this.lRR, this.lRR = null, (0, Bu.A)(this.mesh, null)), this.gRR = !0), this.mesh.zRR = this.count, this.aRR ? (this.aRR.TRR(this.count), this.aRR.sRR()) : (this.mesh.hRR("matrix"),  … [truncated]
-     }, lu.prototype.RJR = function(RR, JR, GR) {
-       if (0 !== this.MRR && ((0, Bu.p)() ? (this.WL = pu(this, this.WL, RR), this.BRR = this.WL.count >= 0, (0, Bu.D)(this.mesh, this.BRR ? this.WL : null)) : this.BRR && (this.BRR = !1, (0, Bu.D)(this.mesh, null)), GR || this.gRR)) {
-         this.gRR = !1;
-         var yR = pu(this, this.pRR, JR),
-           tR = this.lRR;
-         yR.count < 0 ? (this.pRR = yR, null !== tR && (this.lRR = null, (0, Bu.A)(this.mesh, null))) : null !== tR && function(RR, JR) {
+       }(rr), ga(rr)), (0, Ba.E)(this.mesh, null), this.o5 = !1, null !== this.Q0 && (this.R7 = this.Q0, this.Q0 = null, (0, Ba.A)(this.mesh, null)), this.I3 = !0), this.mesh.frr = this.count, this.N9 ? (this.N9.zrr(this.count), this.N9.Yrr()) : (this.mesh.nrr("matrix"), this.mesh … [truncated]
+     }, Ta.prototype.Krr = function(rr, Sr, Qr) {
+       if (0 !== this.i5 && ((0, Ba.n)() ? (this.yh = va(this, this.yh, rr), this.o5 = this.yh.count >= 0, (0, Ba.E)(this.mesh, this.o5 ? this.yh : null)) : this.o5 && (this.o5 = !1, (0, Ba.E)(this.mesh, null)), Qr || this.I3)) {
+         this.I3 = !1;
+         var Zr = va(this, this.R7, Sr),
+           Wr = this.Q0;
+         Zr.count < 0 ? (this.R7 = Zr, null !== Wr && (this.Q0 = null, (0, Ba.A)(this.mesh, null))) : null !== Wr && function(rr, Sr) {
```

#### 543. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4554` → after: `L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4554) · [Before (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4554)

```diff
-         }(tR, yR) ? this.pRR = yR : (this.pRR = tR, this.lRR = yR, (0, Bu.A)(this.mesh, yR))
+         }(Wr, Zr) ? this.R7 = Zr : (this.R7 = Wr, this.Q0 = Zr, (0, Ba.A)(this.mesh, Zr))
```

#### 544. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4556` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4556) · [Before (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4556)

```diff
-     }, lu.prototype.SRR = function() {
+     }, Ta.prototype.prr = function() {
```

#### 545. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4558` → after: `L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4558) · [Before (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4558)

```diff
-       if (this.hK = RR, 0 === RR) this.buffer = null, this.nRR = null, this.URR = null;
+       if (this.sx = rr, 0 === rr) this.buffer = null, this.o9 = null, this.J9 = null;
```

#### 546. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4560` → after: `L4560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4560) · [Before (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4560)

```diff
-         var JR = new Float32Array(16 * this.hK);
+         var Sr = new Float32Array(16 * this.sx);
```

#### 547. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4564-L4567` → after: `L4564-L4567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4564-L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4564-L4567) · [Before (L4564-L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4564-L4567)

```diff
-         var tR = this.wRR ? new Uint32Array(this.hK) : new Float32Array(this.hK);
-         if (this.nRR) {
-           var uR = Math.min(this.nRR.length, tR.length);
-           for (yR = 0; yR < uR; yR++) tR[yR] = this.nRR[yR]
+         var Wr = this.w6 ? new Uint32Array(this.sx) : new Float32Array(this.sx);
+         if (this.o9) {
+           var ar = Math.min(this.o9.length, Wr.length);
+           for (Zr = 0; Zr < ar; Zr++) Wr[Zr] = this.o9[Zr]
```

#### 548. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4569-L4571` → after: `L4569-L4571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4569-L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4569-L4571) · [Before (L4569-L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4569-L4571)

```diff
-         if (this.nRR = tR, this.nD) {
-           var ZR = new Uint16Array(this.hK);
-           this.URR && ZR.set(this.URR.subarray(0, Math.min(this.URR.length, ZR.length))), this.URR = ZR
+         if (this.o9 = Wr, this.jR) {
+           var jr = new Uint16Array(this.sx);
+           this.J9 && jr.set(this.J9.subarray(0, Math.min(this.J9.length, jr.length))), this.J9 = jr
```

#### 549. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4575` → after: `L4575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4575) · [Before (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4575)

```diff
-       this.aRR && 0 === RR ? this.aRR.release() : this.aRR ? this.aRR.attach(this.buffer, this.nRR) : (this.mesh.tJR("matrix", this.buffer, 16, qR), this.mesh.tJR("aPackedLightLevels", this.nRR, 1, qR)), this.FRR()
+       this.N9 && 0 === rr ? this.N9.release() : this.N9 ? this.N9.attach(this.buffer, this.o9) : (this.mesh.vrr("matrix", this.buffer, 16, Ir), this.mesh.vrr("aPackedLightLevels", this.o9, 1, Ir)), this.hrr()
```

#### 550. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4588-L4589` → after: `L4588-L4589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4588-L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4588-L4589) · [Before (L4588-L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4588-L4589)

```diff
-       vu = new Uint32Array(Bu.c),
-       Ou = new Uint32Array(Bu.c),
+       la = new Uint32Array(Ba.b),
+       Xa = new Uint32Array(Ba.b),
```

#### 551. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4600-L4607` → after: `L4600-L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4600-L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4600-L4607) · [Before (L4600-L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4600-L4607)

```diff
-         GR = RR.URR,
-         yR = RR.ARR.keys;
-       if (null === RR.CRR || RR.CRR.length < JR) {
-         var tR = Math.max(8, RR.hK);
-         RR.CRR = new Uint16Array(tR), RR.XRR = new Uint32Array(tR)
-       }
-       var uR = RR.CRR,
-         ZR = RR.XRR,
+         Qr = rr.J9,
+         Zr = rr.Y5.keys;
+       if (null === rr.y5 || rr.y5.length < Sr) {
+         var Wr = Math.max(8, rr.sx);
+         rr.y5 = new Uint16Array(Wr), rr.B5 = new Uint32Array(Wr)
+       }
+       var ar = rr.y5,
+         jr = rr.B5,
```

#### 552. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4614` → after: `L4614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4614) · [Before (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4614)

```diff
-       return RR.MRR = iR, fR
+       return rr.i5 = fr, Er
```

#### 553. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4617` → after: `L4617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4617) · [Before (L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4617)

```diff
-     var Pu = GR(38658),
+     var Ma = Qr(39006),
```

#### 554. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4621` → after: `L4621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4621) · [Before (L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4621)

```diff
-         dRR: null
+         mrr: null
```

#### 555. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4625` → after: `L4625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4625) · [Before (L4625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4625)

```diff
-       this.pW = (0, WR.p)(RR.lK, "objectMeshRoot");
+       this.bY = (0, nr.t)(rr.Ox, "objectMeshRoot");
```

#### 556. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4629-L4631` → after: `L4629-L4631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4629-L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4629-L4631) · [Before (L4629-L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4629-L4631)

```diff
-           position: new FR.Fe,
-           rotation: new FR.Fe,
-           MK: new FR.Fe
+           position: new Dr.kU,
+           rotation: new Dr.kU,
+           Tx: new Dr.kU
```

#### 557. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4634` → after: `L4634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4634) · [Before (L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4634)

```diff
-       this.wJR = [], this.ARR = new Bu.g;
+       this.Rrr = [], this.Y5 = new Ba.g;
```

#### 558. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4636-L4639` → after: `L4636-L4639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4636-L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4636-L4639) · [Before (L4636-L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4636-L4639)

```diff
-         ZR = RR.lK.tL.ke();
-       "Ye" in ZR && ZR.Ye.add((() => {
-         for (var RR in uR) uR[RR].Ja = !0;
-         this.Zx()
+         jr = rr.Ox.Dt.MU();
+       "CU" in jr && jr.CU.add((() => {
+         for (var rr in ar) ar[rr].cU = !0;
+         this.RP()
```

#### 559. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4649` → after: `L4649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4649) · [Before (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4649)

```diff
-         rR = RR => (0, bR.d)(RR) ? RR.parts.geometry : RR.geometry,
+         Nr = rr => (0, lr.c)(rr) ? rr.parts.geometry : rr.geometry,
```

#### 560. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4652` → after: `L4652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4652) · [Before (L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4652)

```diff
-           var GR = RR.KK.iRR[JR];
+           var Qr = rr.Ex.Z6[Sr];
```

#### 561. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4662` → after: `L4662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4662) · [Before (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4662)

```diff
-             if (!(GR = qR.get(yR))) return fR.has(JR) || (fR.add(JR), RR.Ia(`Building the model of block ${JR} failed`, iR.get(yR))), null
+             if (!(Qr = Ir.get(Zr))) return Er.has(Sr) || (Er.add(Sr), rr.Xt(`Building the model of block ${Sr} failed`, fr.get(Zr))), null
```

#### 562. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4668` → after: `L4668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4668) · [Before (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4668)

```diff
-           return this.wJR.includes(GR) || this.wJR.push(GR), GR.metadata || (GR.metadata = {}), GR.metadata[ly.v] = !0, uR[JR] = new lu(RR, GR)
+           return this.Rrr.includes(Qr) || this.Rrr.push(Qr), Qr.metadata || (Qr.metadata = {}), Qr.metadata[vZ.r] = !0, ar[Sr] = new Ta(rr, Qr)
```

#### 563. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4683-L4684` → after: `L4683-L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4683-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4683-L4684) · [Before (L4683-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4683-L4684)

```diff
-             if (iR.eJR && iR.get(rR, eR, aR) === fR) try {
-               this.LO(iR, fR, rR, eR, aR)
+             if (fr.Crr && fr.get(Nr, Ur, tr) === Er) try {
+               this.BX(fr, Er, Nr, Ur, tr)
```

#### 564. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4688` → after: `L4688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4688) · [Before (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4688)

```diff
-           ZR && RR.Ia("Placing the blocks of a built model failed", ZR)
+           jr && rr.Xt("Placing the blocks of a built model failed", jr)
```

#### 565. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4690-L4691` → after: `L4690-L4691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4690-L4691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4690-L4691) · [Before (L4690-L4691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4690-L4691)

```diff
-       this.Fa = function(RR) {
-         RR.eJR = new Map;
+       this.Vt = function(rr) {
+         rr.Crr = new Map;
```

#### 566. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4693-L4694` → after: `L4693-L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4693-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4693-L4694) · [Before (L4693-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4693-L4694)

```diff
-         RR.aJR = LR.length > 0 ? LR.pop() : JR * JR * JR * nR++
-       }, this.LO = function(GR, uR, ZR, qR, iR) {
+         rr.Mrr = hr.length > 0 ? hr.pop() : Sr * Sr * Sr * zr++
+       }, this.BX = function(Qr, ar, jr, Ir, fr) {
```

#### 567. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4697-L4698` → after: `L4697-L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4697-L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4697-L4698) · [Before (L4697-L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4697-L4698)

```diff
-           wR = GR.aJR + KR,
-           rR = GR.eJR.get(KR) || 0;
+           mr = Qr.Mrr + xr,
+           Nr = Qr.Crr.get(xr) || 0;
```

#### 568. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4700` → after: `L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4700) · [Before (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4700)

```diff
-           if (rR > 0) eR(rR).QRR(GR, wR);
+           if (Nr > 0) Ur(Nr).trr(Qr, mr);
```

#### 569. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4703-L4706` → after: `L4703-L4706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4703-L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4703-L4706) · [Before (L4703-L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4703-L4706)

```diff
-             if (!aR) return VR.get(RR.KK.iRR[uR])?.push([GR, uR, ZR, qR, iR]), void GR.eJR.delete(KR);
-             aR.YRR(GR, wR, ZR, qR, iR, (JR => {
-               var GR = RR.KK.Dv[JR],
-                 uR = GR && GR.qB || null,
+             if (!tr) return pr.get(rr.Ex.Z6[ar])?.push([Qr, ar, jr, Ir, fr]), void Qr.Crr.delete(xr);
+             tr.Nrr(Qr, mr, jr, Ir, fr, (Sr => {
+               var Qr = rr.Ex.uL[Sr],
+                 ar = Qr && Qr.wT || null,
```

#### 570. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4708-L4709` → after: `L4708-L4709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4708-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4708-L4709) · [Before (L4708-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4708-L4709)

```diff
-               if (ZR && ZR.dRR === uR) return ZR;
-               for (var qR = RR.KK.Dv.length; tR.length < qR;) tR.push(null);
+               if (jr && jr.mrr === ar) return jr;
+               for (var Ir = rr.Ex.uL.length; Wr.length < Ir;) Wr.push(null);
```

#### 571. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4711` → after: `L4711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4711) · [Before (L4711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4711)

```diff
-               yR.position.VJR(.5, .5, .5), yR.MK.NRR(1), yR.rotation.NRR(0), uR(yR, JR);
+               Zr.position.Hrr(.5, .5, .5), Zr.Tx.Srr(1), Zr.rotation.Srr(0), ar(Zr, Sr);
```

#### 572. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4714` → after: `L4714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4714) · [Before (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4714)

```diff
-                 matrix: Float32Array.from((0, Pu.d)(yR)),
+                 matrix: Float32Array.from((0, Ma.e)(Zr)),
```

#### 573. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4716` → after: `L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4716) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4716)

```diff
-                 dRR: uR
+                 mrr: ar
```

#### 574. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4719-L4720` → after: `L4719-L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4719-L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4719-L4720) · [Before (L4719-L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4719-L4720)

```diff
-             var LR = aR.ORR.get(wR);
-             GR.ve ? aR.nRR[LR >> 4] = aR.KRR(uR, (0, Xu.B)(GR.ve, GR.Ne, KR)) : aR.nRR[LR >> 4] = aR.KRR(uR, Xu.k)
+             var hr = tr.B3.get(mr);
+             Qr.eU ? tr.o9[hr >> 4] = tr.R6(ar, (0, Ka.t)(Qr.eU, Qr.BU, xr)) : tr.o9[hr >> 4] = tr.R6(ar, Ka.l)
```

#### 575. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4722` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4722) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4722)

```diff
-           rR > 0 && !uR && GR.eJR.delete(KR), uR > 0 && GR.eJR.set(KR, uR)
+           Nr > 0 && !ar && Qr.Crr.delete(xr), ar > 0 && Qr.Crr.set(xr, ar)
```

#### 576. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4724` → after: `L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4724) · [Before (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4724)

```diff
-       }, this.Zx = function() {
+       }, this.RP = function() {
```

#### 577. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4727-L4737` → after: `L4727-L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4727-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4727-L4737) · [Before (L4727-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4727-L4737)

```diff
-           JR.FRR(), 0 === JR.count && JR.dispose(), JR.He && delete uR[RR]
-         }
-         this.ARR.uploaded(), zu("rebuilt"), zu("end")
-       }, this.fa = function(RR) {
-         var JR = RR.aJR;
-         for (var [yR, tR] of RR.eJR) eR(tR).QRR(RR, JR + yR);
-         LR.push(JR), RR.eJR = null, this.ARR.release(RR), GR = !0
-       }, this.gK = function() {
-         GR && (this.Zx(), GR = !1)
-       }, this.LJR = function(RR) {
-         for (var yR in JR[0] += RR[0], JR[1] += RR[1], JR[2] += RR[2], uR) uR[yR].vRR = !1;
+           Sr.hrr(), 0 === Sr.count && Sr.dispose(), Sr.vU && delete ar[rr]
+         }
+         this.Y5.uploaded(), Aa("rebuilt"), Aa("end")
+       }, this.sU = function(rr) {
+         var Sr = rr.Mrr;
+         for (var [Zr, Wr] of rr.Crr) Ur(Wr).trr(rr, Sr + Zr);
+         hr.push(Sr), rr.Crr = null, this.Y5.release(rr), Qr = !0
+       }, this.lx = function() {
+         Qr && (this.RP(), Qr = !1)
+       }, this.Grr = function(rr) {
+         for (var Zr in Sr[0] += rr[0], Sr[1] += rr[1], Sr[2] += rr[2], ar) ar[Zr].K3 = !1;
```

#### 578. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4740` → after: `L4740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4740) · [Before (L4740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4740)

```diff
-           if (!ZR.vRR) {
+           if (!jr.K3) {
```

#### 579. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4745` → after: `L4745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4745) · [Before (L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4745)

```diff
-             ZR.vRR = !0, ZR.Ja = !0
+             jr.K3 = !0, jr.cU = !0
```

#### 580. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4749-L4754` → after: `L4749-L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4749-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4749-L4754) · [Before (L4749-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4749-L4754)

```diff
-       }, this.Qa = function(RR) {
-         if (RR.eJR) {
-           var JR = RR.ve,
-             yR = RR.Ne,
-             tR = RR.aJR;
-           RR.eJR.forEach(((RR, ZR) => {
+       }, this.kt = function(rr) {
+         if (rr.Crr) {
+           var Sr = rr.eU,
+             Zr = rr.BU,
+             Wr = rr.Mrr;
+           rr.Crr.forEach(((rr, jr) => {
```

#### 581. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4756-L4758` → after: `L4756-L4758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4756-L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4756-L4758) · [Before (L4756-L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4756-L4758)

```diff
-               iR = qR.ORR.get(tR + ZR) >> 4,
-               fR = qR.KRR(RR, JR ? (0, Xu.B)(JR, yR, ZR) : Xu.k);
-             qR.nRR[iR] !== fR && (qR.nRR[iR] = fR, qR.bRR = !0, GR = !0)
+               fr = Ir.B3.get(Wr + jr) >> 4,
+               Er = Ir.R6(rr, Sr ? (0, Ka.t)(Sr, Zr, jr) : Ka.l);
+             Ir.o9[fr] !== Er && (Ir.o9[fr] = Er, Ir.U3 = !0, Qr = !0)
```

#### 582. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4764-L4770` → after: `L4764-L4770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4764-L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4764-L4770) · [Before (L4764-L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4764-L4770)

```diff
-       Su = GR(38565),
-       ju = GR(38477),
-       du = GR(38650);
-     var Eu = GR(38979),
-       Yu = GR(7786),
-       ku = GR(39981),
-       Qu = GR(39990);
+       Va = Qr(38898),
+       ia = Qr(38833),
+       wa = Qr(39002);
+     var ca = Qr(39319),
+       Fa = Qr(7604),
+       oa = Qr(40336),
+       ba = Qr(40340);
```

#### 583. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4777` → after: `L4777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4777) · [Before (L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4777)

```diff
-         this.xw = RR, this.options = JR, this.mode = "off", this.defines = new Map(Yu.c.map((RR => [RR, 0])))
+         this.gm = rr, this.options = Sr, this.mode = "off", this.defines = new Map(Fa.e.map((rr => [rr, 0])))
```

#### 584. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4786` → after: `L4786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4786) · [Before (L4786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4786)

```diff
-         return Yu.c.some((RR => 0 !== this.defineFor(RR)))
+         return Fa.e.some((rr => 0 !== this.defineFor(rr)))
```

#### 585. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4789` → after: `L4789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4789) · [Before (L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4789)

```diff
-         return Yu.c.some((RR => {
+         return Fa.e.some((rr => {
```

#### 586. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4791` → after: `L4791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4791) · [Before (L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4791)

```diff
-           return !0 === (null === (JR = (0, ku.c)(this.defineFor(RR))) || void 0 === JR ? void 0 : JR.sceneDepth)
+           return !0 === (null === (Sr = (0, oa.f)(this.defineFor(rr))) || void 0 === Sr ? void 0 : Sr.sceneDepth)
```

#### 587. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4797-L4798` → after: `L4797-L4798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4797-L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4797-L4798) · [Before (L4797-L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4797-L4798)

```diff
-         for (const GR of Yu.c) {
-           const yR = (0, ku.c)(this.defineFor(GR));
+         for (const Qr of Fa.e) {
+           const Zr = (0, oa.f)(this.defineFor(Qr));
```

#### 588. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4808` → after: `L4808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4808) · [Before (L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4808)

```diff
-         return !(!this.options.keepCircleShadows && null !== (RR = this.xw.lK.La) && void 0 !== RR && RR.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
+         return !(!this.options.keepCircleShadows && null !== (rr = this.gm.Ox.Wt) && void 0 !== rr && rr.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
```

#### 589. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4811` → after: `L4811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4811) · [Before (L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4811)

```diff
-         return this.xw.lK.sa
+         return this.gm.Ox.ct
```

#### 590. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4816` → after: `L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4816) · [Before (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4816)

```diff
-         for (const GR of Yu.c) {
+         for (const Qr of Fa.e) {
```

#### 591. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4818` → after: `L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4818) · [Before (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4818)

```diff
-             tR = yR ? (0, ku.h)(yR) : 0;
+             Wr = Zr ? (0, oa.k)(Zr) : 0;
```

#### 592. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4825` → after: `L4825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4825) · [Before (L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4825)

```diff
-         return null !== (JR = this.defines.get(RR)) && void 0 !== JR ? JR : 0
+         return null !== (Sr = this.defines.get(rr)) && void 0 !== Sr ? Sr : 0
```

#### 593. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4831` → after: `L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4831) · [Before (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4831)

```diff
-         return this.xw.Fw
+         return this.gm.um
```

#### 594. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4833` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4833) · [Before (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4833)

```diff
-       AJR() {
+       crr() {
```

#### 595. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4835` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4835) · [Before (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4835)

```diff
-         return null !== (RR = this.xw.lK.AJR) && void 0 !== RR ? RR : hu
+         return null !== (rr = this.gm.Ox.crr) && void 0 !== rr ? rr : sa
```

#### 596. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4838` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4838) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4838)

```diff
-         const RR = (0, Qu.r)(this.AJR());
+         const rr = (0, ba.t)(this.crr());
```

#### 597. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4845` → after: `L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4845) · [Before (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4845)

```diff
-           status: "xR"
+           status: "Rr"
```

#### 598. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4848-L4849` → after: `L4848-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4848-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4848-L4849) · [Before (L4848-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4848-L4849)

```diff
-           lK: GR
-         } = this.xw, yR = null === (RR = GR.La) || void 0 === RR ? void 0 : RR.terrain;
+           Ox: Qr
+         } = this.gm, Zr = null === (rr = Qr.Wt) || void 0 === rr ? void 0 : rr.terrain;
```

#### 599. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4851` → after: `L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4851) · [Before (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4851)

```diff
-           materials: this.xw.CJR.allMaterials.filter((RR => !(0, Eu.h)(RR))),
+           materials: this.gm.Frr.allMaterials.filter((rr => !(0, ca.i)(rr))),
```

#### 600. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4853-L4854` → after: `L4853-L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4853-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4853-L4854) · [Before (L4853-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4853-L4854)

```diff
-           lighting: GR.sa,
-           dirLightCount: (0, ju.q)(GR.model.view),
+           lighting: Qr.ct,
+           dirLightCount: (0, ia.p)(Qr.model.view),
```

#### 601. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4868-L4881` → after: `L4868-L4881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4868-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4868-L4881) · [Before (L4868-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4868-L4881)

```diff
-       XJR: !1,
-       Kn: 1.8,
-       Vn: .6,
-       MJR: [0, 10, 0],
-       rn: !1,
-       BJR: !0,
-       lH: 30,
-       ZE: 0,
-       Ln: 10,
-       XE: !0,
-       lJR: !0,
-       lE: !1,
-       pJR: !1,
-       gJR: 25
+       orr: !1,
+       Uz: 1.8,
+       Nz: .6,
+       Jrr: [0, 10, 0],
+       tz: !1,
+       Drr: !0,
+       pC: 30,
+       wG: 0,
+       hz: 10,
+       Wk: !0,
+       drr: !0,
+       Nk: !1,
+       srr: !1,
+       urr: 25
```

#### 602. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4888` → after: `L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4888) · [Before (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4888)

```diff
-           console.log(`noa-engine v${this.version}${JR}`)
+           console.log(`noa-engine v${this.version}${Sr}`)
```

#### 603. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4890` → after: `L4890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4890) · [Before (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4890)

```diff
-         this.pK = !1, this.bJR = RR.gJR, this.Fw = [0, 0, 0], this.vJR = 0, this.hN = 0, this.OJR = "default", this.xJR = 1, this.container = new bJ(this, RR), this.NK = new py.e(this, RR);
+         this.Lx = !1, this.rSr = rr.urr, this.um = [0, 0, 0], this.QSr = 0, this.mq = 0, this.ZSr = "default", this.WSr = 1, this.container = new lS(this, rr), this.qx = new OZ.c(this, rr);
```

#### 604. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4892` → after: `L4892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4892) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4892)

```diff
-           this.lK = new ly.d(this, RR, this.container.canvas)
+           this.Ox = new vZ.c(this, rr, this.container.canvas)
```

#### 605. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4894-L4901` → after: `L4894-L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4894-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4894-L4901) · [Before (L4894-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4894-L4901)

```diff
-           throw this.kN(!0), this.container.EX.xK = () => {}, ZR
-         }
-         this.lH = this.container.EX.lH, this.ZE = this.container.EX.ZE, this.Be = RR.Be ? new RZ(this, RR.Be) : null, this.CJR = new Eu.c(this), this.inputs = new Sy(this, RR, this.container.element), this.KK = new nu(this, RR, this.CJR), this.NK.yB = RR.NJR ? ny.create(RR.NJR.wa … [truncated]
-           this.Ia(RR.message, RR)
-         })) : null, RR.NJR && (this.NK.aa = ry.c.wasm(this.NK.nK, RR.NJR.wasm, (RR => {
-           this.Ia(RR.message, RR)
-         })), this.NK.HJR = By.create(RR.NJR.wasm, this.KK, (RR => {
-           this.Ia(RR.message, RR)
+           throw this.Qq(!0), this.container.oB.Hx = () => {}, jr
+         }
+         this.pC = this.container.oB.pC, this.wG = this.container.oB.wG, this.zU = rr.zU ? new ua(this, rr.zU) : null, this.Frr = new ca.c(this), this.inputs = new iZ(this, rr, this.container.element), this.Ex = new ha(this, rr, this.Frr), this.qx.XT = rr.aSr ? zZ.create(rr.aSr.wa … [truncated]
+           this.Xt(rr.message, rr)
+         })) : null, rr.aSr && (this.qx.Zt = NZ.e.wasm(this.qx.zx, rr.aSr.wasm, (rr => {
+           this.Xt(rr.message, rr)
+         })), this.qx.ISr = TZ.create(rr.aSr.wasm, this.Ex, (rr => {
+           this.Xt(rr.message, rr)
```

#### 606. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4904` → after: `L4904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4904) · [Before (L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4904)

```diff
-         RR.XJR && (console.log = () => {}), RR.XJR && (console.log = GR), this.physics = new It(this, RR), this.physics.wasm = RR.Pe ? new wy(this, this.physics, RR.Pe) : null, this.entities = new lJ.c(this, RR), this.zC = this.entities;
+         rr.orr && (console.log = () => {}), rr.orr && (console.log = Qr), this.physics = new GW(this, rr), this.physics.wasm = rr.lU ? new mZ(this, this.physics, rr.lU) : null, this.entities = new vS.e(this, rr), this.YB = this.entities;
```

#### 607. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4906-L4912` → after: `L4906-L4912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4906-L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4906-L4912) · [Before (L4906-L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4906-L4912)

```diff
-         this.WH = yR.add(RR.MJR, RR.Vn, RR.Kn, null, null, !0, RR.BJR), yR.Jm(this.WH, yR.names.collideTerrain), yR.Jm(this.WH, yR.names.collideEntities);
-         var tR = yR.oJR(this.WH).body;
-         if (tR.gravityMultiplier = 2, tR.aY = RR.rn, this.camera = new Qt(this, RR), this.Ln = RR.Ln, this.PJR = this.KK.aT, this.IJR = null, this.mJR = !1, this.jJR = null, this.dJR = null, this.YJR = null, this.FJR = !1, RR.pJR || (this.TJR = RR => {
-             if (this.FJR) return void this.lK.sJR(!1);
-             const JR = this.YJR;
-             JR ? this.lK.sJR(!0, JR.position, JR.normal) : !RR || !this.jW.canChange && !this.NK.hJR(RR.position[0], RR.position[1], RR.position[2]) && !this.NK.hJR(RR.UL[0], RR.UL[1], RR.UL[2]) || this.entities.RGR(this.WH, "gC") && !1 === this.entities.getState(this.WH, "gC").g … [truncated]
-           }, this.on("miningTargetBlockChanged", this.TJR)), this.bloxd = void 0, this.Ia = (RR, JR) => {
+         this.fC = Zr.add(rr.Jrr, rr.Nz, rr.Uz, null, null, !0, rr.Drr), Zr.gM(this.fC, Zr.names.collideTerrain), Zr.gM(this.fC, Zr.names.collideEntities);
+         var Wr = Zr.fSr(this.fC).body;
+         if (Wr.gravityMultiplier = 2, Wr.mV = rr.tz, this.camera = new bW(this, rr), this.hz = rr.hz, this.pSr = this.Ex.uF, this.xSr = null, this.mSr = !1, this.tSr = null, this.hSr = null, this.YSr = null, this.eSr = !1, rr.srr || (this.KSr = rr => {
+             if (this.eSr) return void this.Ox.ySr(!1);
+             const Sr = this.YSr;
+             Sr ? this.Ox.ySr(!0, Sr.position, Sr.normal) : !rr || !this.NK.canChange && !this.qx.BSr(rr.position[0], rr.position[1], rr.position[2]) && !this.qx.BSr(rr.Kh[0], rr.Kh[1], rr.Kh[2]) || this.entities.TSr(this.fC, "jB") && !1 === this.entities.getState(this.fC, "jB").j … [truncated]
+           }, this.on("miningTargetBlockChanged", this.KSr)), this.bloxd = void 0, this.Xt = (rr, Sr) => {
```

#### 608. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4914-L4920` → after: `L4914-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4914-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4914-L4920) · [Before (L4914-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4914-L4920)

```diff
-           }, this.ma = () => {}, this.jW = {}, this.Qm = {
-             [this.WH]: {}
-           }, this.UH = void 0, this.GGR = null, this.yGR = null, this.sounds = {
-             tGR: null,
-             uGR: null
-           }, this.room = null, this.rD = null, this.ZGR = null, this.zw = RR.zw, this.BX = new Su.b(this, this.CJR, this.lK.La?.terrain ? null : (0, du.c)(), RR), this.ka = new mu(this), this.qGR = {
-             U3: 0,
+           }, this.Pt = () => {}, this.NK = {}, this.xG = {
+             [this.fC]: {}
+           }, this.WC = void 0, this.OSr = null, this.LSr = null, this.sounds = {
+             lSr: null,
+             XSr: null
+           }, this.room = null, this.oq = null, this.PSr = null, this.wm = rr.wm, this.qB = new Va.c(this, this.Frr, this.Ox.Wt?.terrain ? null : (0, wa.c)(), rr), this.Gt = new ka(this), this.HSr = {
+             e_: 0,
```

#### 609. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4923-L4926` → after: `L4923-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4923-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4923-L4926) · [Before (L4923-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4923-L4926)

```diff
-             UL: UR().create(),
-             fY: UR().create()
-           }, this.iGR = new Float64Array(8), this.fGR = {
-             U3: 0,
+             Kh: Yr().create(),
+             JA: Yr().create()
+           }, this.qSr = new Float64Array(8), this.RSr = {
+             e_: 0,
```

#### 610. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4929-L4932` → after: `L4929-L4932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4929-L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4929-L4932) · [Before (L4929-L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4929-L4932)

```diff
-             UL: UR().create(),
-             fY: UR().create()
-           }, this.VGR = new Float64Array(8), this.KGR = UR().create(), this.wGR = {
-             rGR: UR().create(),
+             Kh: Yr().create(),
+             JA: Yr().create()
+           }, this.gSr = new Float64Array(8), this.CSr = Yr().create(), this.MSr = {
+             GSr: Yr().create(),
```

#### 611. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4935` → after: `L4935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4935) · [Before (L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4935)

```diff
-             eGR: [0, 0, 0]
+             kSr: [0, 0, 0]
```

#### 612. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4937` → after: `L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4937) · [Before (L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4937)

```diff
-           this.vec3 = UR(), this.aL = DJ(), yR.aGR(1).LGR = 999;
+           this.vec3 = Yr(), this.Yh = RS(), Zr.ASr(1).VSr = 999;
```

#### 613. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4939` → after: `L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4939) · [Before (L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4939)

```diff
-           uR.xw = this, uR.vec3 = UR(), uR.aL = DJ(), uR.tL = this.lK.tL
+           ar.gm = this, ar.vec3 = Yr(), ar.Yh = RS(), ar.Dt = this.Ox.Dt
```

#### 614. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4944` → after: `L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4944) · [Before (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4944)

```diff
-           if (RR *= this.xJR || 1, this.pK) return void(this.NK.nGR && this.NK.gK());
+           if (rr *= this.WSr || 1, this.Lx) return void(this.qx.iSr && this.qx.lx());
```

#### 615. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4946-L4954` → after: `L4946-L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4946-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4946-L4954) · [Before (L4946-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4946-L4954)

```diff
-               var JR = RR.zC.f6(RR.WH).rGR,
-                 GR = RR.bJR;
-               if (UR().gr(JR) < GR * GR) return;
-               for (var yR = [], tR = 0; tR < 3; tR++) yR[tR] = Math.floor(JR[tR]), RR.Fw[tR] += yR[tR];
-               RR.lK.LJR(yR), RR.entities.LJR(yR), RR.ka.LJR(yR)
-             }(this), this.NK.gK(), iZ("world"), this.zw && this.zw(this.zC.Lk(this.WH)) || !this.NK.UGR) return void this.lK.gK(RR);
-           this.RY("beforePhysicsTick", RR), this.physics.gK(RR), iZ("physics"), this.ka.gK(), this.lK.gK(RR), iZ("lK"), this.SJR(), iZ("targets"), this.entities.gK(RR), iZ("entities"), this.RY("gK", RR), iZ("tick event"), iZ("end");
-           var JR = this.inputs.wT;
-           JR.WGR = JR.AGR = JR.CGR = 0
+               var Sr = rr.YB.gJ(rr.fC).GSr,
+                 Qr = rr.rSr;
+               if (Yr().Eh(Sr) < Qr * Qr) return;
+               for (var Zr = [], Wr = 0; Wr < 3; Wr++) Zr[Wr] = Math.floor(Sr[Wr]), rr.um[Wr] += Zr[Wr];
+               rr.Ox.Grr(Zr), rr.entities.Grr(Zr), rr.Gt.Grr(Zr)
+             }(this), this.qx.lx(), Ij("world"), this.wm && this.wm(this.YB.cV(this.fC)) || !this.qx.wSr) return void this.Ox.lx(rr);
+           this.Fk("beforePhysicsTick", rr), this.physics.lx(rr), Ij("physics"), this.Gt.lx(), this.Ox.lx(rr), Ij("Ox"), this.USr(), Ij("targets"), this.entities.lx(rr), Ij("entities"), this.Fk("lx", rr), Ij("tick event"), Ij("end");
+           var Sr = this.inputs.JF;
+           Sr.cSr = Sr.FSr = Sr.oSr = 0
```

#### 616. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4957)

```diff
-             this.Ia("Error in noa tickloop", GR)
+             this.Xt("Error in noa tickloop", Qr)
```

#### 617. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4965-L4966` → after: `L4965-L4966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4965-L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4965-L4966) · [Before (L4965-L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4965-L4966)

```diff
-           if ((0, ju.k)(), this.hN = performance.now(), this.RY("renderTickBegin", RR), RR *= this.xJR || 1, this.vJR = JR, this.pK) return void(this.NK.nGR && this.NK.render());
-           fZ("start"), this.RY("beforeInputs", RR), this.camera.U_(), this.RY("afterInputs", RR), fZ("init"), this.NK.render(), fZ("meshing"), this.camera.T_(RR), this.entities.render(RR), this.camera.h_(), iZ("entities"), this.RY("beforeRender", RR), fZ("before render"), this.lK … [truncated]
+           if ((0, ia.i)(), this.mq = performance.now(), this.Fk("renderTickBegin", rr), rr *= this.WSr || 1, this.QSr = Sr, this.Lx) return void(this.qx.iSr && this.qx.render());
+           fj("start"), this.Fk("beforeInputs", rr), this.camera.nD(), this.Fk("afterInputs", rr), fj("init"), this.qx.render(), fj("meshing"), this.camera.W8(rr), this.entities.render(rr), this.camera.K8(), Ij("entities"), this.Fk("beforeRender", rr), fj("before render"), this.Ox … [truncated]
```

#### 618. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4968` → after: `L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4968) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4968)

```diff
-           this.Ia("Error in noa renderloop", GR)
+           this.Xt("Error in noa renderloop", Qr)
```

#### 619. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4973` → after: `L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4973) · [Before (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4973)

```diff
-         this.pK = !!RR, RR || (this.camera.wT.dx = this.camera.wT.dy = 0)
+         this.Lx = !!rr, rr || (this.camera.JF.dx = this.camera.JF.dy = 0)
```

#### 620. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4978` → after: `L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4978) · [Before (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4978)

```diff
-         return RR.length ? this.NK.eT(RR[0], RR[1], RR[2]) : this.NK.eT(RR, JR, GR)
+         return rr.length ? this.qx.sF(rr[0], rr[1], rr[2]) : this.qx.sF(rr, Sr, Qr)
```

#### 621. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4983` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4983) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4983)

```diff
-         return GR = JR.length ? this.NK.zk(RR, JR[0], JR[1], JR[2]) : this.NK.zk(RR, JR, yR, tR), this.zJR(), GR
+         return Qr = Sr.length ? this.qx.Iw(rr, Sr[0], Sr[1], Sr[2]) : this.qx.Iw(rr, Sr, Zr, Wr), this.NSr(), Qr
```

#### 622. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4985` → after: `L4985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4985) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4985)

```diff
-       lGR(RR, JR) {
+       DSr(rr, Sr) {
```

#### 623. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4989-L4990` → after: `L4989-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4989-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4989-L4990) · [Before (L4989-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4989-L4990)

```diff
-           if (this.entities.pGR(JR[0], JR[1], JR[2])) return;
-           return this.NK.zk(RR, JR[0], JR[1], JR[2]), RR
+           if (this.entities.dSr(Sr[0], Sr[1], Sr[2])) return;
+           return this.qx.Iw(rr, Sr[0], Sr[1], Sr[2]), rr
```

#### 624. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4992` → after: `L4992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4992) · [Before (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4992)

```diff
-         if (!this.entities.pGR(JR, GR, yR)) return this.NK.zk(RR, JR, GR, yR), RR
+         if (!this.entities.dSr(Sr, Qr, Zr)) return this.qx.Iw(rr, Sr, Qr, Zr), rr
```

#### 625. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L4994-L4995` → after: `L4994-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR4994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L4994-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L4994-L4995) · [Before (L4994-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L4994-L4995)

```diff
-       gGR(RR, JR, GR) {
-         var yR = this.Fw;
+       sSr(rr, Sr, Qr) {
+         var Zr = this.um;
```

#### 626. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5007` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5007) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5007)

```diff
-         var yR = this.Fw;
+         var Zr = this.um;
```

#### 627. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5023-L5024` → after: `L5023-L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5023-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5023-L5024) · [Before (L5023-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5023-L5024)

```diff
-         var tR = this.KGR;
-         return RR && (this.gGR(RR, null, tR), RR = tR), this.Vk(RR, JR, GR, yR)
+         var Wr = this.CSr;
+         return rr && (this.sSr(rr, null, Wr), rr = Wr), this.wV(rr, Sr, Qr, Zr)
```

#### 628. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5031` → after: `L5031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5031) · [Before (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5031)

```diff
-           tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.wGR;
+           Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.MSr;
```

#### 629. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5033-L5034` → after: `L5033-L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5033-L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5033-L5034) · [Before (L5033-L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5033-L5034)

```diff
-         RR || (RR = this.camera.M_()), JR = JR || this.camera.m_(), GR = GR || -1, GR < 0 && (GR = this.Ln);
-         var uR, ZR = tR.rGR,
+         rr || (rr = this.camera.KD()), Sr = Sr || this.camera.Y1(), Qr = Qr || -1, Qr < 0 && (Qr = this.hz);
+         var ar, jr = Wr.GSr,
```

#### 630. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5037` → after: `L5037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5037) · [Before (L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5037)

```diff
-           fR = this.Fw;
+           Er = this.um;
```

#### 631. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5039-L5040` → after: `L5039-L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5039-L5040) · [Before (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5039-L5040)

```diff
-           var VR = null === tZ.engine ? tZ : yZ();
-           VR.engine = this, VR.test = yR, VR.origin = RR, VR.direction = JR, VR.maxDistance = GR, VR.offset = fR, VR.fY = ZR, VR.VY = qR, VR.rY = tR.eGR;
+           var pr = null === Zj.engine ? Zj : Qj();
+           pr.engine = this, pr.test = Zr, pr.origin = rr, pr.direction = Sr, pr.maxDistance = Qr, pr.offset = Er, pr.JA = jr, pr.sA = Ir, pr.rV = Wr.kSr;
```

#### 632. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5042` → after: `L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5042) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5042)

```diff
-             uR = iR.Ur(VR)
+             ar = fr.eN(pr)
```

#### 633. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5046-L5047` → after: `L5046-L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5046-L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5046-L5047) · [Before (L5046-L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5046-L5047)

```diff
-         } else uR = uZ(this, yR, RR, JR, GR, ZR, qR, tR.eGR);
-         return uR ? (UR().add(tR.eGR, tR.eGR, fR), UR().pr(ZR, ZR, qR, .01), this.x_(ZR, tR.position), tR) : null
+         } else ar = Wj(this, Zr, rr, Sr, Qr, jr, Ir, Wr.kSr);
+         return ar ? (Yr().add(Wr.kSr, Wr.kSr, Er), Yr().fh(jr, jr, Ir, .01), this.dD(jr, Wr.position), Wr) : null
```

#### 634. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5055` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5055) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5055)

```diff
-             U3: 0,
+             e_: 0,
```

#### 635. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5058-L5059` → after: `L5058-L5059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5058-L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5058-L5059) · [Before (L5058-L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5058-L5059)

```diff
-             UL: [],
-             fY: []
+             Kh: [],
+             JA: []
```

#### 636. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5061` → after: `L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5061) · [Before (L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5061)

```diff
-           uR = this.Ur(RR, JR, GR, yR);
+           ar = this.eN(rr, Sr, Qr, Zr);
```

#### 637. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5064)

```diff
-       SJR() {
+       USr() {
```

#### 638. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5066-L5070` → after: `L5066-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5066-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5066-L5070) · [Before (L5066-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5066-L5070)

```diff
-         this.mJR = !1;
-         var JR = this.PJR || this.KK.aT;
-         let GR = this.GGR,
-           yR = this.yGR;
-         var tR = this.Vk(GR, yR, null, JR);
+         this.mSr = !1;
+         var Sr = this.pSr || this.Ex.uF;
+         let Qr = this.OSr,
+           Zr = this.LSr;
+         var Wr = this.wV(Qr, Zr, null, Sr);
```

#### 639. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5072-L5085` → after: `L5072-L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5072-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5072-L5085) · [Before (L5072-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5072-L5085)

```diff
-           var uR = this.qGR;
-           qZ(this, tR, uR), this.IJR = uR
-         } else this.IJR = null;
-         const ZR = this.bGR(),
-           qR = this.IJR;
-         if (qR && !ZR(qR.U3, qR.position[0], qR.position[1], qR.position[2]) && (tR = this.Vk(GR, yR, null, ZR)), tR) {
-           const RR = this.fGR;
-           qZ(this, tR, RR), this.jJR = RR
-         } else this.jJR = null;
-         (ZZ(this.iGR, this.IJR) || RR) && this.emit("targetBlockChanged", this.IJR), (ZZ(this.VGR, this.jJR) || RR) && this.emit("miningTargetBlockChanged", this.jJR)
-       }
-       zJR() {
-         if (this.qGR.U3 = this.NK.eT(this.qGR.position[0], this.qGR.position[1], this.qGR.position[2]), 0 === this.qGR.U3 && (this.IJR = null, this.mJR = !0), this.jJR) {
-           const RR = this.jJR,
+           var ar = this.HSr;
+           jj(this, Wr, ar), this.xSr = ar
+         } else this.xSr = null;
+         const jr = this.uSr(),
+           Ir = this.xSr;
+         if (Ir && !jr(Ir.e_, Ir.position[0], Ir.position[1], Ir.position[2]) && (Wr = this.wV(Qr, Zr, null, jr)), Wr) {
+           const rr = this.RSr;
+           jj(this, Wr, rr), this.tSr = rr
+         } else this.tSr = null;
+         (aj(this.qSr, this.xSr) || rr) && this.emit("targetBlockChanged", this.xSr), (aj(this.gSr, this.tSr) || rr) && this.emit("miningTargetBlockChanged", this.tSr)
+       }
+       NSr() {
+         if (this.HSr.e_ = this.qx.sF(this.HSr.position[0], this.HSr.position[1], this.HSr.position[2]), 0 === this.HSr.e_ && (this.xSr = null, this.mSr = !0), this.tSr) {
+           const rr = this.tSr,
```

#### 640. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5087-L5088` → after: `L5087-L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5087-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5087-L5088) · [Before (L5087-L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5087-L5088)

```diff
-           RR.U3 = this.NK.eT(JR[0], JR[1], JR[2]);
-           this.bGR()(RR.U3, JR[0], JR[1], JR[2]) || (this.jJR = null)
+           rr.e_ = this.qx.sF(Sr[0], Sr[1], Sr[2]);
+           this.uSr()(rr.e_, Sr[0], Sr[1], Sr[2]) || (this.tSr = null)
```

#### 641. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5091-L5092` → after: `L5091-L5092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5091-L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5091-L5092) · [Before (L5091-L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5091-L5092)

```diff
-       EJR(RR) {
-         this.YJR = RR, this.TJR(this.jJR)
+       zSr(rr) {
+         this.YSr = rr, this.KSr(this.tSr)
```

#### 642. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5094-L5095` → after: `L5094-L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5094-L5095) · [Before (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5094-L5095)

```diff
-       QJR(RR) {
-         this.FJR = RR, this.TJR?.(this.jJR)
+       nSr(rr) {
+         this.eSr = rr, this.KSr?.(this.tSr)
```

#### 643. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5097-L5098` → after: `L5097-L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5097-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5097-L5098) · [Before (L5097-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5097-L5098)

```diff
-       bGR() {
-         return this.dJR || this.PJR || this.KK.aT
+       uSr() {
+         return this.hSr || this.pSr || this.Ex.uF
```

#### 644. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5110-L5113` → after: `L5110-L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5110-L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5110-L5113) · [Before (L5110-L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5110-L5113)

```diff
-         fY: null,
-         VY: null,
-         rY: null,
-         TY: () => uZ(RR.engine, RR.test, RR.origin, RR.direction, RR.maxDistance, RR.fY, RR.VY, RR.rY)
+         JA: null,
+         sA: null,
+         rV: null,
+         qV: () => Wj(rr.engine, rr.test, rr.origin, rr.direction, rr.maxDistance, rr.JA, rr.sA, rr.rV)
```

#### 645. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5120-L5121` → after: `L5120-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5120-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5120-L5121) · [Before (L5120-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5120-L5121)

```diff
-       var iR = RR.NK,
-         fR = RR.Fw,
+       var fr = rr.qx,
+         Er = rr.um,
```

#### 646. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5123-L5124` → after: `L5123-L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5123-L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5123-L5124) · [Before (L5123-L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5123-L5124)

```diff
-           var uR = iR.eT(GR + fR[0], yR + fR[1], tR + fR[2]);
-           return JR(uR, GR + fR[0], yR + fR[1], tR + fR[2]) && (RR.KK.hY(uR) ?? !0)
+           var ar = fr.sF(Qr + Er[0], Zr + Er[1], Wr + Er[2]);
+           return Sr(ar, Qr + Er[0], Zr + Er[1], Wr + Er[2]) && (rr.Ex.RV(ar) ?? !0)
```

#### 647. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5126-L5127` → after: `L5126-L5127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5126-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5126-L5127) · [Before (L5126-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5126-L5127)

```diff
-           var tR = iR.eT(JR + fR[0], GR + fR[1], yR + fR[2]);
-           return RR.KK.vr(tR)
+           var Wr = fr.sF(Sr + Er[0], Qr + Er[1], Zr + Er[2]);
+           return rr.Ex.XN(Wr)
```

#### 648. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5180-L5181` → after: `L5180-L5181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5180-L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5180-L5181) · [Before (L5180-L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5180-L5181)

```diff
-       } = JR, tR = 1 !== RR[0] || RR[1] !== GR[0] || RR[2] !== GR[1] || RR[3] !== GR[2] || RR[4] !== JR.U3 || RR[5] !== yR[0] || RR[6] !== yR[1] || RR[7] !== yR[2];
-       return RR[0] = 1, RR[1] = GR[0], RR[2] = GR[1], RR[3] = GR[2], RR[4] = JR.U3, RR[5] = yR[0], RR[6] = yR[1], RR[7] = yR[2], tR
+       } = Sr, Wr = 1 !== rr[0] || rr[1] !== Qr[0] || rr[2] !== Qr[1] || rr[3] !== Qr[2] || rr[4] !== Sr.e_ || rr[5] !== Zr[0] || rr[6] !== Zr[1] || rr[7] !== Zr[2];
+       return rr[0] = 1, rr[1] = Qr[0], rr[2] = Qr[1], rr[3] = Qr[2], rr[4] = Sr.e_, rr[5] = Zr[0], rr[6] = Zr[1], rr[7] = Zr[2], Wr
```

#### 649. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5185` → after: `L5185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5185) · [Before (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5185)

```diff
-       UR().copy(GR.position, JR.eGR), UR().copy(GR.normal, JR.normal), UR().add(GR.UL, GR.position, GR.normal), UR().copy(GR.fY, JR.position), GR.U3 = RR.NK.eT(GR.position[0], GR.position[1], GR.position[2])
+       Yr().copy(Qr.position, Sr.kSr), Yr().copy(Qr.normal, Sr.normal), Yr().add(Qr.Kh, Qr.position, Qr.normal), Yr().copy(Qr.JA, Sr.position), Qr.e_ = rr.qx.sF(Qr.position[0], Qr.position[1], Qr.position[2])
```

#### 650. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5189-L5207` → after: `L5189-L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5189-L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5189-L5207) · [Before (L5189-L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5189-L5207)

```diff
-       VZ = GR(2448),
-       KZ = GR(39956),
-       wZ = GR(37213),
-       rZ = GR(37205),
-       eZ = GR(2457),
-       aZ = GR(2470),
-       LZ = GR(37191),
-       nZ = GR(37187),
-       UZ = GR(2485),
-       WZ = GR(5554),
-       AZ = GR(37162),
-       CZ = GR(2445),
-       XZ = GR(4066),
-       MZ = GR(1972),
-       BZ = GR(34980),
-       lZ = GR(715),
- ... (3 more removed lines; see GitHub link above)
+       Ej = Qr(2396),
+       pj = Qr(40304),
+       xj = Qr(37566),
+       mj = Qr(37550),
+       Nj = Qr(2398),
+       Uj = Qr(2410),
+       tj = Qr(37538),
+       hj = Qr(37533),
+       zj = Qr(2425),
+       Yj = Qr(5498),
+       nj = Qr(37508),
+       ej = Qr(2393),
+       Kj = Qr(4026),
+       yj = Qr(1912),
+       Bj = Qr(35287),
+       Tj = Qr(719),
+ ... (3 more added lines; see GitHub link above)
```

#### 651. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5214` → after: `L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5214) · [Before (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5214)

```diff
-           } = await Promise.all([GR.e(622), GR.e(307)]).then((() => GR(53647)));
+           } = await Promise.all([Qr.e(623), Qr.e(308)]).then((() => Qr(54171)));
```

#### 652. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5226-L5227` → after: `L5226-L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5226-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5226-L5227) · [Before (L5226-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5226-L5227)

```diff
-                 dU: JR,
-                 La: RR,
+                 vY: Sr,
+                 Wt: rr,
```

#### 653. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5237` → after: `L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5237) · [Before (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5237)

```diff
-                   (0, gZ.r)(RR.gpuDevice);
+                   (0, Oj.A)(rr.gpuDevice);
```

#### 654. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5250` → after: `L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5250) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5250)

```diff
-                   RR.gpuDevice && (0, gZ.c)(RR.gpuDevice)
+                   rr.gpuDevice && (0, Oj.d)(rr.gpuDevice)
```

#### 655. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5271-L5272` → after: `L5271-L5272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5271-L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5271-L5272) · [Before (L5271-L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5271-L5272)

```diff
-           ZR = null !== (tR = null !== yR && void 0 !== yR ? yR : null === GR || void 0 === GR ? void 0 : GR.message) && void 0 !== tR ? tR : String(GR);
-         (0, bZ.d)("Lite pipeline failed", new Error(`${RR}${uR?` ${uR}`:""}: ${ZR} [${JR}]`))
+           jr = null !== (Wr = null !== Zr && void 0 !== Zr ? Zr : null === Qr || void 0 === Qr ? void 0 : Qr.message) && void 0 !== Wr ? Wr : String(Qr);
+         (0, Lj.e)("Lite pipeline failed", new Error(`${rr}${ar?` ${ar}`:""}: ${jr} [${Sr}]`))
```

#### 656. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5276-L5291` → after: `L5276-L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5276-L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5276-L5291) · [Before (L5276-L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5276-L5291)

```diff
-     var DZ = GR(371),
-       HZ = GR(39974),
-       oZ = GR(25),
-       cZ = GR(3973),
-       PZ = GR(5201),
-       IZ = GR(350),
-       mZ = GR(35051),
-       zZ = GR(134),
-       SZ = GR(5087),
-       jZ = GR(1921),
-       dZ = GR(5203),
-       EZ = GR(5196),
-       YZ = GR(3918),
-       kZ = GR(4035),
-       QZ = GR(37622),
-       FZ = GR(3921);
+     var qj = Qr(374),
+       Rj = Qr(40327),
+       gj = Qr(26),
+       Cj = Qr(3930),
+       Mj = Qr(5126),
+       Gj = Qr(351),
+       kj = Qr(35359),
+       Aj = Qr(139),
+       Vj = Qr(5005),
+       ij = Qr(1849),
+       wj = Qr(5129),
+       cj = Qr(5124),
+       Fj = Qr(3868),
+       oj = Qr(3991),
+       bj = Qr(38006),
+       Jj = Qr(3873);
```

#### 657. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5302` → after: `L5302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5302) · [Before (L5302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5302)

```diff
-               } = (0, lZ.o)(), ZR = null === (RR = (0, kR.i)()) || void 0 === RR ? void 0 : RR.lK, qR = null === ZR || void 0 === ZR ? void 0 : ZR.engine, iR = qR ? (0, kZ.h)(qR) : null, fR = (0, IZ.e)();
+               } = (0, Tj.p)(), jr = null === (rr = (0, br.e)()) || void 0 === rr ? void 0 : rr.Ox, Ir = null === jr || void 0 === jr ? void 0 : jr.engine, fr = Ir ? (0, oj.g)(Ir) : null, Er = (0, Gj.f)();
```

#### 658. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5307-L5312` → after: `L5307-L5312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5307-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5307-L5312) · [Before (L5307-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5307-L5312)

```diff
-                 budgetBasis: (0, QZ.k)(),
-                 renderBackend: ZR && qR ? (0, FZ.d)(ZR) : null,
-                 antiAliasing: (0, kZ.d)(YZ.c.getRendererMsaa(), !1),
-                 pixelScale: (0, kZ.o)(),
-                 canvasSizeLargest: null !== (JR = null === iR || void 0 === iR ? void 0 : iR.largest) && void 0 !== JR ? JR : null,
-                 canvasSizeSmallest: null !== (GR = null === iR || void 0 === iR ? void 0 : iR.smallest) && void 0 !== GR ? GR : null,
+                 budgetBasis: (0, bj.j)(),
+                 renderBackend: jr && Ir ? (0, Jj.b)(jr) : null,
+                 antiAliasing: (0, oj.c)(Fj.e.getRendererMsaa(), !1),
+                 pixelScale: (0, oj.r)(),
+                 canvasSizeLargest: null !== (Sr = null === fr || void 0 === fr ? void 0 : fr.largest) && void 0 !== Sr ? Sr : null,
+                 canvasSizeSmallest: null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.smallest) && void 0 !== Qr ? Qr : null,
```

#### 659. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5324` → after: `L5324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5324) · [Before (L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5324)

```diff
-       (0, dZ.c)(RR, JR, GR, (0, EZ.b)(yR), tR)
+       (0, wj.c)(rr, Sr, Qr, (0, cj.c)(Zr), Wr)
```

#### 660. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5330-L5331` → after: `L5330-L5331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5330-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5330-L5331) · [Before (L5330-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5330-L5331)

```diff
-       const JR = nJ.k.getItem(hZ);
-       return !("number" === typeof JR && Date.now() - JR < 3e5) && RR.canRejoin() && nJ.k.setItem(hZ, Date.now())
+       const Sr = zS.n.getItem(sj);
+       return !("number" === typeof Sr && Date.now() - Sr < 3e5) && rr.canRejoin() && zS.n.setItem(sj, Date.now())
```

#### 661. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5334` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5334) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5334)

```diff
-       fK(RR, JR) {
+       jx(rr, Sr) {
```

#### 662. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5343` → after: `L5343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5343) · [Before (L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5343)

```diff
-         return !0 === (null === (RR = (0, kR.e)()) || void 0 === RR ? void 0 : RR.client.isConnectedToServer())
+         return !0 === (null === (rr = (0, br.c)()) || void 0 === rr ? void 0 : rr.client.isConnectedToServer())
```

#### 663. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5347)

```diff
-         return !0 === (null === (RR = (0, kR.e)()) || void 0 === RR ? void 0 : RR.client.isReplayMode())
+         return !0 === (null === (rr = (0, br.c)()) || void 0 === rr ? void 0 : rr.client.isReplayMode())
```

#### 664. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5351` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5351) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5351)

```diff
-         return !(0, zZ.isDiscordClient)() && null !== (null !== (RR = null === (JR = (0, kR.e)().client.getConnectionInfo()) || void 0 === JR ? void 0 : JR.lobbyName) && void 0 !== RR ? RR : null)
+         return !(0, Aj.isDiscordClient)() && null !== (null !== (rr = null === (Sr = (0, br.c)().client.getConnectionInfo()) || void 0 === Sr ? void 0 : Sr.lobbyName) && void 0 !== rr ? rr : null)
```

#### 665. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5354` → after: `L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5354) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5354)

```diff
-         (0, SZ.i)(), (0, kR.e)().client.leaveGameUnwanted({
+         (0, Vj.e)(), (0, br.c)().client.leaveGameUnwanted({
```

#### 666. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5365` → after: `L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5365) · [Before (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5365)

```diff
-         (0, cZ.b)(sZ)
+         (0, Cj.e)(dj)
```

#### 667. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5371` → after: `L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5371) · [Before (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5371)

```diff
-         const JR = (0, IZ.e)();
+         const Sr = (0, Gj.f)();
```

#### 668. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5375` → after: `L5375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5375) · [Before (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5375)

```diff
-         return (0, jZ.o)(RR)
+         return (0, ij.n)(rr)
```

#### 669. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5398` → after: `L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5398) · [Before (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5398)

```diff
-         this.actions.fK(`webgl_restored_${JR}_${(0,PZ.k)(RR-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${JR})`), this.lostAt = null, this.restoredAt = RR, this.clearTimers()
+         this.actions.jx(`webgl_restored_${Sr}_${(0,Mj.k)(rr-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${Sr})`), this.lostAt = null, this.restoredAt = rr, this.clearTimers()
```

#### 670. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5409-L5410` → after: `L5409-L5410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5409-L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5409-L5410) · [Before (L5409-L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5409-L5410)

```diff
-         } = (0, PZ.z)("webgl_lost", this.startedAt, RR), tR = `webgl${this.webGlVersion} ${GR} up${(0,PZ.f)(RR-this.startedAt)}: ${JR}`;
-         (0, bZ.d)(PZ.b.WebGL2, new Error(tR)), this.actions.reportLoss(yR, `WebGL${this.webGlVersion} context lost: ${tR}`)
+         } = (0, Mj.v)("webgl_lost", this.startedAt, rr), Wr = `webgl${this.webGlVersion} ${Qr} up${(0,Mj.f)(rr-this.startedAt)}: ${Sr}`;
+         (0, Lj.e)(Mj.e.WebGL2, new Error(Wr)), this.actions.reportLoss(Zr, `WebGL${this.webGlVersion} context lost: ${Wr}`)
```

#### 671. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5440` → after: `L5440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5440) · [Before (L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5440)

```diff
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.fK(`webgl_waiting_${JR}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(RR);
+         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.jx(`webgl_waiting_${Sr}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(rr);
```

#### 672. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5443-L5444` → after: `L5443-L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5443-L5444) · [Before (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5443-L5444)

```diff
-         if (Rq(this.actions)) return this.actions.fK(`webgl_rejoin_${JR}_${GR}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.fK(`webgl_end_${JR}_${GR}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+         if (uj(this.actions)) return this.actions.jx(`webgl_rejoin_${Sr}_${Qr}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
+         this.actions.jx(`webgl_end_${Sr}_${Qr}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
```

#### 673. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5452-L5454` → after: `L5452-L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5452-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5452-L5454) · [Before (L5452-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5452-L5454)

```diff
-     var tq = GR(1825),
-       uq = GR(3960),
-       Zq = GR(5323);
+     var ZI = Qr(1783),
+       WI = Qr(3909),
+       aI = Qr(5279);
```

#### 674. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5466` → after: `L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5466) · [Before (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5466)

```diff
-       } = RR.La;
+       } = rr.Wt;
```

#### 675. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5468-L5469` → after: `L5468-L5469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5468-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5468-L5469) · [Before (L5468-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5468-L5469)

```diff
-         (0, gZ.g)(GR) || ((0, mZ.g)(), (0, uq.n)("webgpuloss") && (0, Zq.d)((RR => {
-           RR.noteWebGpuLoss("js", !0 === yR.framesRefused ? `${yR.reason} frames refused` : yR.reason, yR.message)
+         (0, Oj.e)(Qr) || ((0, kj.g)(), (0, WI.p)("webgpuloss") && (0, aI.c)((rr => {
+           rr.noteWebGpuLoss("js", !0 === Zr.framesRefused ? `${Zr.reason} frames refused` : Zr.reason, Zr.message)
```

#### 676. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5474` → after: `L5474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5474) · [Before (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5474)

```diff
-             ZR = (0, PZ.r)(!0 === GR.framesRefused, GR.message, "destroyed" === GR.reason),
+             jr = (0, Mj.q)(!0 === Qr.framesRefused, Qr.message, "destroyed" === Qr.reason),
```

#### 677. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5479` → after: `L5479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5479) · [Before (L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5479)

```diff
-           oZ.d.turnOffWebGpuAfterDeviceLoss(void 0, !1, (0, DZ.q)(!0 === GR.framesRefused ? "frames_refused" : GR.reason, GR.message)), iR || (iq.gaveUp = !0);
+           gj.c.turnOffWebGpuAfterDeviceLoss(void 0, !1, (0, qj.p)(!0 === Qr.framesRefused ? "frames_refused" : Qr.reason, Qr.message)), fr || (II.gaveUp = !0);
```

#### 678. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5487` → after: `L5487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5487) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5487)

```diff
-             } = (0, PZ.z)(GR, yR, tR);
+             } = (0, Mj.v)(Qr, Zr, Wr);
```

#### 679. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5489` → after: `L5489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5489) · [Before (L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5489)

```diff
-               detail: `${GR} ${uR} up${(0,PZ.f)(tR-yR)} ${(0,PZ.n)(RR.adapterInfo)}: ${JR}`,
+               detail: `${Qr} ${ar} up${(0,Mj.f)(Wr-Zr)} ${(0,Mj.m)(rr.adapterInfo)}: ${Sr}`,
```

#### 680. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5493` → after: `L5493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5493) · [Before (L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5493)

```diff
-           if ((0, bZ.d)(PZ.b.WebGPU, KR), TZ(KR, VR), iR) return iq.restores++, void
+           if ((0, Lj.e)(Mj.e.WebGPU, xr), Dj(xr, pr), fr) return II.restores++, void
```

#### 681. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5496` → after: `L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5496) · [Before (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5496)

```diff
-               "no_adapter" === (0, HZ.e)(JR) ? (console.warn("Lite could not be built again: no WebGPU adapter"), RR.fK(`${yR}_restore_no_adapter`, "WebGPU device lost to the browser: no adapter to restore on", !0)) : JR instanceof tq.g ? (console.warn(JR.message), RR.fK(`${yR}_r … [truncated]
+               "no_adapter" === (0, Rj.e)(Sr) ? (console.warn("Lite could not be built again: no WebGPU adapter"), rr.jx(`${Zr}_restore_no_adapter`, "WebGPU device lost to the browser: no adapter to restore on", !0)) : Sr instanceof ZI.d ? (console.warn(Sr.message), rr.jx(`${Zr}_r … [truncated]
```

#### 682. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5499` → after: `L5499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5499) · [Before (L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5499)

```diff
-               (0, tq.k)(GR(), qq, "Lite was not built again in 15 s", (RR => {
+               (0, ZI.h)(Qr(), jI, "Lite was not built again in 15 s", (rr => {
```

#### 683. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5515` → after: `L5515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5515) · [Before (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5515)

```diff
-                   RR.fK(`${yR}_restored_${(0,PZ.k)(qR-tR)}_t${(0,PZ.k)(JR-qR)}`, "WebGPU device lost to the browser: restored")
+                   rr.jx(`${Zr}_restored_${(0,Mj.k)(Ir-Wr)}_t${(0,Mj.k)(Sr-Ir)}`, "WebGPU device lost to the browser: restored")
```

#### 684. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5523` → after: `L5523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5523) · [Before (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5523)

```diff
-           (0, cZ.b)(sZ)
+           (0, Cj.e)(dj)
```

#### 685. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5533` → after: `L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5533) · [Before (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5533)

```diff
-         if (!tR && !RR.replaying()) return yR || RR.fK(`${JR}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
+         if (!Wr && !rr.replaying()) return Zr || rr.jx(`${Sr}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
```

#### 686. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5537-L5538` → after: `L5537-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5537-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5537-L5538) · [Before (L5537-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5537-L5538)

```diff
-         if (tR && Rq(RR)) return RR.fK(`${JR}_rejoin_${uR}`, "WebGPU device lost to the browser: rejoining", !0), void RR.rejoin();
-         RR.fK(`${JR}_end_${uR}`, "WebGPU device lost to the browser: game ended", !0), RR.end()
+         if (Wr && uj(rr)) return rr.jx(`${Sr}_rejoin_${ar}`, "WebGPU device lost to the browser: rejoining", !0), void rr.rejoin();
+         rr.jx(`${Sr}_end_${ar}`, "WebGPU device lost to the browser: game ended", !0), rr.end()
```

#### 687. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5562` → after: `L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5562) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5562)

```diff
-       const JR = null === (RR = (0, kR.e)()) || void 0 === RR ? void 0 : RR.client;
+       const Sr = null === (rr = (0, br.c)()) || void 0 === rr ? void 0 : rr.client;
```

#### 688. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5573` → after: `L5573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5573) · [Before (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5573)

```diff
-       LR.n.JK("unrecoverableError", rq)
+       hr.i.Jp("unrecoverableError", mI)
```

#### 689. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5575-L5576` → after: `L5575-L5576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5575-L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5575-L5576) · [Before (L5575-L5576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5575-L5576)

```diff
-     var nq = GR(39603),
-       Uq = GR(37537);
+     var hI = Qr(39942),
+       zI = Qr(37927);
```

#### 690. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5608)

```diff
-         mC: function(JR, GR) {
+         zB: function(Sr, Qr) {
```

#### 691. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5613` → after: `L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5613) · [Before (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5613)

```diff
-                 GR.pose = JR, yR && UR().set(GR.meshOffset, yR[0], yR[1], yR[2]), tR && RR.bloxd.removeFromEyeHeightCache(GR.Rm)
+                 Qr.pose = Sr, Zr && Yr().set(Qr.meshOffset, Zr[0], Zr[1], Zr[2]), Wr && rr.bloxd.removeFromEyeHeightCache(Qr.XM)
```

#### 692. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5616` → after: `L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5616) · [Before (L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5616)

```diff
-                 UR().set(GR.meshOffset, JR, yR, tR), uR && RR.bloxd.removeFromEyeHeightCache(GR.Rm)
+                 Yr().set(Qr.meshOffset, Sr, Zr, Wr), ar && rr.bloxd.removeFromEyeHeightCache(Qr.XM)
```

#### 693. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5618` → after: `L5618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5618) · [Before (L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5618)

```diff
-                 GR.crouching !== JR && (GR.crouching = JR, RR.bloxd.removeFromEyeHeightCache(GR.Rm))
+                 Qr.crouching !== Sr && (Qr.crouching = Sr, rr.bloxd.removeFromEyeHeightCache(Qr.XM))
```

#### 694. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5620` → after: `L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5620) · [Before (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5620)

```diff
-                 JR === RR.WH && (GR.armSwinging = !0, GR._armSwungLastTick = !0, GR._renderTickSinceSwing = !1, GR._tickSinceSwing = !1)
+                 Sr === rr.fC && (Qr.armSwinging = !0, Qr._armSwungLastTick = !0, Qr._renderTickSinceSwing = !1, Qr._tickSinceSwing = !1)
```

#### 695. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5624` → after: `L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5624) · [Before (L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5624)

```diff
-         eD: null,
+         bq: null,
```

#### 696. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5626` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5626) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5626)

```diff
-           for (const yR of GR) yR.Rm === RR.WH && (!yR._armSwungLastTick && yR._tickSinceSwing && yR._renderTickSinceSwing && (yR.armSwinging = !1), yR._tickSinceSwing = !0, yR._armSwungLastTick = !1, yR.hitInPrevTick = !1)
+           for (const Zr of Qr) Zr.XM === rr.fC && (!Zr._armSwungLastTick && Zr._tickSinceSwing && Zr._renderTickSinceSwing && (Zr.armSwinging = !1), Zr._tickSinceSwing = !0, Zr._armSwungLastTick = !1, Zr.hitInPrevTick = !1)
```

#### 697. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5628-L5629` → after: `L5628-L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5628-L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5628-L5629) · [Before (L5628-L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5628-L5629)

```diff
-         YC: function(JR, GR) {
-           for (const yR of GR) yR.Rm === RR.WH && (yR._renderTickSinceSwing = !0)
+         nB: function(Sr, Qr) {
+           for (const Zr of Qr) Zr.XM === rr.fC && (Zr._renderTickSinceSwing = !0)
```

#### 698. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5633-L5634` → after: `L5633-L5634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5633-L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5633-L5634) · [Before (L5633-L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5633-L5634)

```diff
-     var Aq = GR(39356),
-       Cq = GR(39156);
+     var nI = Qr(39694),
+       eI = Qr(39494);
```

#### 699. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5647-L5648` → after: `L5647-L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5647-L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5647-L5648) · [Before (L5647-L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5647-L5648)

```diff
-         mC: function(JR, GR) {
-           if (GR.inventory || (GR.inventory = new Cq.e(RR, GR, oR.s)), !GR.opWrapper) {
+         zB: function(Sr, Qr) {
+           if (Qr.inventory || (Qr.inventory = new eI.e(rr, Qr, Cr.u)), !Qr.opWrapper) {
```

#### 700. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5652` → after: `L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5652) · [Before (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5652)

```diff
-             GR.opWrapper = new Aq.e(RR, GR.inventory, {
+             Qr.opWrapper = new nI.c(rr, Qr.inventory, {
```

#### 701. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5657` → after: `L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5657) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5657)

```diff
-         eD: null,
+         bq: null,
```

#### 702. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5671` → after: `L5671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5671) · [Before (L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5671)

```diff
-           Mt: !1,
+           eW: !1,
```

#### 703. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5677-L5680` → after: `L5677-L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5677-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5677-L5680) · [Before (L5677-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5677-L5680)

```diff
-     var Bq = GR(4044),
-       lq = GR(39971),
-       pq = GR(132),
-       gq = GR(310);
+     var BI = Qr(3995),
+       TI = Qr(40320),
+       vI = Qr(135),
+       OI = Qr(319);
```

#### 704. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5796` → after: `L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5796) · [Before (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5796)

```diff
-           return !0 === (null === RR || void 0 === RR ? void 0 : RR[Su.j]) ? "terrain" : !0 === (null === RR || void 0 === RR ? void 0 : RR[ly.v]) ? "objectBlocks" : !0 === (null === RR || void 0 === RR ? void 0 : RR[ly.C]) ? "textPlanes" : -1 === JR ? "sky" : "other"
+           return !0 === (null === rr || void 0 === rr ? void 0 : rr[Va.n]) ? "terrain" : !0 === (null === rr || void 0 === rr ? void 0 : rr[vZ.r]) ? "objectBlocks" : !0 === (null === rr || void 0 === rr ? void 0 : rr[vZ.C]) ? "textPlanes" : -1 === Sr ? "sky" : "other"
```

#### 705. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5798` → after: `L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5798) · [Before (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5798)

```diff
-         "other" === wR && KR.jGR && (wR = "entityParts");
+         "other" === mr && xr.NQr && (mr = "entityParts");
```

#### 706. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5800` → after: `L5800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5800) · [Before (L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5800)

```diff
-             return "terrain" === RR ? GR ? `${null===yR||void 0===yR?void 0:yR[Su.f]}:${null===yR||void 0===yR?void 0:yR[Su.i]}` : "(all)" : "textPlanes" === RR ? "(all)" : "objectBlocks" === RR || "entityParts" === RR ? JR : (tR = JR).split(/[|:#]/)[0].replace(/\d+$/, "") || tR;
+             return "terrain" === rr ? Qr ? `${null===Zr||void 0===Zr?void 0:Zr[Va.g]}:${null===Zr||void 0===Zr?void 0:Zr[Va.j]}` : "(all)" : "textPlanes" === rr ? "(all)" : "objectBlocks" === rr || "entityParts" === rr ? Sr : (Wr = Sr).split(/[|:#]/)[0].replace(/\d+$/, "") || Wr;
```

#### 707. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5803` → after: `L5803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5803) · [Before (L5803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5803)

```diff
-           eR = `${wR}\0${rR}`;
+           Ur = `${mr}\0${Nr}`;
```

#### 708. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5814` → after: `L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5814) · [Before (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5814)

```diff
-         const LR = null !== (tR = KR.zRR) && void 0 !== tR ? tR : 0;
+         const hr = null !== (Wr = xr.frr) && void 0 !== Wr ? Wr : 0;
```

#### 709. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5816-L5817` → after: `L5816-L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5816-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5816-L5817) · [Before (L5816-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5816-L5817)

```diff
-           fR++, qR.add(`${null===VR||void 0===VR?void 0:VR[Su.f]}:${null===VR||void 0===VR?void 0:VR[Su.i]}`);
-           const RR = null === VR || void 0 === VR ? void 0 : VR[ly.x];
+           Er++, Ir.add(`${null===pr||void 0===pr?void 0:pr[Va.g]}:${null===pr||void 0===pr?void 0:pr[Va.j]}`);
+           const rr = null === pr || void 0 === pr ? void 0 : pr[vZ.v];
```

#### 710. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5819` → after: `L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5819) · [Before (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5819)

```diff
-           if (RR) iR.set(RR, (null !== (nR = iR.get(RR)) && void 0 !== nR ? nR : 0) + 1)
+           if (rr) fr.set(rr, (null !== (zr = fr.get(rr)) && void 0 !== zr ? zr : 0) + 1)
```

#### 711. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5836` → after: `L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5836) · [Before (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5836)

```diff
-       return (0, FZ.l)(RR.lK).backendName
+       return (0, Jj.g)(rr.Ox).backendName
```

#### 712. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5863` → after: `L5863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5863) · [Before (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5863)

```diff
-       return null !== (JR = null === (GR = RR.lK.La) || void 0 === GR ? void 0 : GR.DRR) && void 0 !== JR ? JR : null
+       return null !== (Sr = null === (Qr = rr.Ox.Wt) || void 0 === Qr ? void 0 : Qr.Qrr) && void 0 !== Sr ? Sr : null
```

#### 713. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5868` → after: `L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5868) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5868)

```diff
-       return null !== (JR = null === (GR = RR.lK.La) || void 0 === GR ? void 0 : GR.modelMeshes) && void 0 !== JR ? JR : null
+       return null !== (Sr = null === (Qr = rr.Ox.Wt) || void 0 === Qr ? void 0 : Qr.modelMeshes) && void 0 !== Sr ? Sr : null
```

#### 714. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5873` → after: `L5873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5873) · [Before (L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5873)

```diff
-       return RR.lK.jH().getActiveMeshes().length + (null !== (JR = null === (GR = Pq(RR)) || void 0 === GR ? void 0 : GR.drawStats().selected) && void 0 !== JR ? JR : 0) + (null !== (yR = null === (tR = Iq(RR)) || void 0 === tR ? void 0 : tR.selectedCount) && void 0 !== yR ? yR : … [truncated]
+       return rr.Ox.eC().getActiveMeshes().length + (null !== (Sr = null === (Qr = MI(rr)) || void 0 === Qr ? void 0 : Qr.drawStats().selected) && void 0 !== Sr ? Sr : 0) + (null !== (Zr = null === (Wr = GI(rr)) || void 0 === Wr ? void 0 : Wr.selectedCount) && void 0 !== Zr ? Zr : … [truncated]
```

#### 715. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5877-L5878` → after: `L5877-L5878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5877-L5878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5877-L5878) · [Before (L5877-L5878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5877-L5878)

```diff
-       const JR = RR.lK.jH(),
-         GR = vq(RR.lK.engine),
+       const Sr = rr.Ox.eC(),
+         Qr = lI(rr.Ox.engine),
```

#### 716. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5892` → after: `L5892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5892) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5892)

```diff
-         return null !== (RR = (0, pZ.o)(Hq)) && void 0 !== RR && RR
+         return null !== (rr = (0, vj.s)(RI)) && void 0 !== rr && rr
```

#### 717. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5894` → after: `L5894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5894) · [Before (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5894)

```diff
-       JR && !RR.lK.La && function(RR) {
+       Sr && !rr.Ox.Wt && function(rr) {
```

#### 718. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5923` → after: `L5923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5923) · [Before (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5923)

```diff
-       }(RR.lK.engine);
+       }(rr.Ox.engine);
```

#### 719. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5928` → after: `L5928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5928) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5928)

```diff
-         const tR = Dq(RR.lK.jH(), null !== (JR = yR.terrainByChunk) && void 0 !== JR && JR, Pq(RR), Iq(RR));
+         const Wr = qI(rr.Ox.eC(), null !== (Sr = Zr.terrainByChunk) && void 0 !== Sr && Sr, MI(rr), GI(rr));
```

#### 720. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5933-L5935` → after: `L5933-L5935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5933-L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5933-L5935) · [Before (L5933-L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5933-L5935)

```diff
-           } = JR, ZR = null === GR.residual ? "not counted (?drawcalls=1)" : `${GR.residual>=0?"+":""}${GR.residual}`;
-           console.info(`${GR.backend} \xb7 ${JR.dispatched.total} dispatched \xb7 ${GR.activeMeshes} active meshes \xb7 residual ${ZR}`), console.table(JR.rows.slice(0, yR));
-           const qR = RR.ka.wJR.length,
+           } = Sr, jr = null === Qr.residual ? "not counted (?drawcalls=1)" : `${Qr.residual>=0?"+":""}${Qr.residual}`;
+           console.info(`${Qr.backend} \xb7 ${Sr.dispatched.total} dispatched \xb7 ${Qr.activeMeshes} active meshes \xb7 residual ${jr}`), console.table(Sr.rows.slice(0, Zr));
+           const Ir = rr.Gt.Rrr.length,
```

#### 721. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5937-L5938` → after: `L5937-L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5937-L5938) · [Before (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5937-L5938)

```diff
-           console.info([`terrain      ${tR.meshes} meshes \xb7 ${tR.chunkColumns} chunk columns \xb7 ${tR.octreeBlocks} octree blocks \xb7 max ${tR.maxMeshesPerOctreeBlock}/block \xb7 ${iR} meshes/block`, `objectBlocks ${uR.objectBlocks.draws} of ${qR} base meshes drawn \xb7 ${uR … [truncated]
-         }(RR, tR, zq(RR), null !== (GR = yR.limit) && void 0 !== GR ? GR : 20), tR
+           console.info([`terrain      ${Wr.meshes} meshes \xb7 ${Wr.chunkColumns} chunk columns \xb7 ${Wr.octreeBlocks} octree blocks \xb7 max ${Wr.maxMeshesPerOctreeBlock}/block \xb7 ${fr} meshes/block`, `objectBlocks ${ar.objectBlocks.draws} of ${Ir} base meshes drawn \xb7 ${ar … [truncated]
+         }(rr, Wr, AI(rr), null !== (Qr = Zr.limit) && void 0 !== Qr ? Qr : 20), Wr
```

#### 722. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5947` → after: `L5947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5947) · [Before (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5947)

```diff
-             fR = null !== (yR = null === (tR = vq(RR.lK.engine)) || void 0 === tR ? void 0 : tR.draws) && void 0 !== yR ? yR : 0;
+             Er = null !== (Zr = null === (Wr = lI(rr.Ox.engine)) || void 0 === Wr ? void 0 : Wr.draws) && void 0 !== Zr ? Zr : 0;
```

#### 723. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5949-L5950` → after: `L5949-L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5949-L5950) · [Before (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5949-L5950)

```diff
-             iR++, uR.add(Nq(RR.lK.jH(), Pq(RR), Iq(RR)).total), qR.add(mq(RR));
-             const JR = vq(RR.lK.engine);
+             fr++, ar.add(HI(rr.Ox.eC(), MI(rr), GI(rr)).total), Ir.add(kI(rr));
+             const Sr = lI(rr.Ox.engine);
```

#### 724. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5962` → after: `L5962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5962) · [Before (L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5962)

```diff
-             0 === yR.frames && console.warn(`drawCalls.watch(${JR}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${JR}) over ${yR.frames} frames on ${yR.backend}`, yR), GR(yR)
+             0 === Zr.frames && console.warn(`drawCalls.watch(${Sr}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${Sr}) over ${Zr.frames} frames on ${Zr.backend}`, Zr), Qr(Zr)
```

#### 725. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5965` → after: `L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5965) · [Before (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5965)

```diff
-       }, window.drawCalls = GR, kR.k.drawCallDebugEntries = () => function(RR) {
+       }, window.drawCalls = Qr, br.h.drawCallDebugEntries = () => function(rr) {
```

#### 726. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5971` → after: `L5971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5971) · [Before (L5971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5971)

```diff
-         } = Dq(RR.lK.jH(), !1, Pq(RR), Iq(RR)), {
+         } = qI(rr.Ox.eC(), !1, MI(rr), GI(rr)), {
```

#### 727. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5976` → after: `L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5976) · [Before (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5976)

```diff
-         } = zq(RR), KR = null === (JR = RR.lK.La) || void 0 === JR || null === (GR = JR.terrain) || void 0 === GR ? void 0 : GR.drawStats(), wR = null === (yR = Pq(RR)) || void 0 === yR ? void 0 : yR.drawStats(), rR = Object.entries(tR.byGroup).map((RR => {
+         } = AI(rr), xr = null === (Sr = rr.Ox.Wt) || void 0 === Sr || null === (Qr = Sr.terrain) || void 0 === Qr ? void 0 : Qr.drawStats(), mr = null === (Zr = MI(rr)) || void 0 === Zr ? void 0 : Zr.drawStats(), Nr = Object.entries(Wr.byGroup).map((rr => {
```

#### 728. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5978` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5978) · [Before (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5978)

```diff
-           return `${JR}:${GR.total}`
+           return `${Sr}:${Qr.total}`
```

#### 729. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5985` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5985) · [Before (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5985)

```diff
-           value: `${tR.total}`
+           value: `${Wr.total}`
```

#### 730. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5988` → after: `L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5988) · [Before (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5988)

```diff
-           value: `${tR.opaque} / ${tR.alphaTest} / ${tR.transparent}`
+           value: `${Wr.opaque} / ${Wr.alphaTest} / ${Wr.transparent}`
```

#### 731. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5994` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5994) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5994)

```diff
-           value: `${KR.drawn} of ${KR.loaded} meshes (${qR})`
+           value: `${xr.drawn} of ${xr.loaded} meshes (${Ir})`
```

#### 732. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5997` → after: `L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L5997) · [Before (L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L5997)

```diff
-           value: `${uR.meshes} (${uR.chunkColumns} chunks, ${uR.octreeBlocks} blocks, max ${uR.maxMeshesPerOctreeBlock})`
+           value: `${ar.meshes} (${ar.chunkColumns} chunks, ${ar.octreeBlocks} blocks, max ${ar.maxMeshesPerOctreeBlock})`
```

#### 733. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6000` → after: `L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6000) · [Before (L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6000)

```diff
-           value: `${ZR.objectBlocks.draws} (${ZR.objectBlocks.instances} inst)`
+           value: `${jr.objectBlocks.draws} (${jr.objectBlocks.instances} inst)`
```

#### 734. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6003` → after: `L6003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6003) · [Before (L6003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6003)

```diff
-           value: `${ZR.entityParts.draws} / ${ZR.textPlanes.draws}`
+           value: `${jr.entityParts.draws} / ${jr.textPlanes.draws}`
```

#### 735. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6006` → after: `L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6006) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6006)

```diff
-           value: `${wR.drawn} draws of ${wR.Qq} meshes (${qR})`
+           value: `${mr.drawn} draws of ${mr.wI} meshes (${Ir})`
```

#### 736. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6009` → after: `L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6009) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6009)

```diff
-           value: `${ZR.sky.draws} / ${ZR.other.draws}`
+           value: `${jr.sky.draws} / ${jr.other.draws}`
```

#### 737. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6012` → after: `L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6012) · [Before (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6012)

```diff
-           value: `${iR}`
+           value: `${fr}`
```

#### 738. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6015` → after: `L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6015) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6015)

```diff
-           value: fR ? `${fR.lastFrameDraws} (${VR} residual)` : "- (?drawcalls=1)"
+           value: Er ? `${Er.lastFrameDraws} (${pr} residual)` : "- (?drawcalls=1)"
```

#### 739. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6017-L6028` → after: `L6017-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6017-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6017-L6028) · [Before (L6017-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6017-L6028)

```diff
-       }(RR), JR && console.info(`Draw call counting on via ?${Hq}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
-     }
-     var jq = GR(38804),
-       dq = GR(39542),
-       Eq = GR(38916),
-       Yq = GR(39995),
-       kq = GR(40003),
-       Qq = GR(38924),
-       Fq = GR(40011),
-       Tq = GR(40019),
-       sq = GR(38181);
-     var hq = GR(2532);
+       }(rr), Sr && console.info(`Draw call counting on via ?${RI}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
+     }
+     var iI = Qr(39142),
+       wI = Qr(39867),
+       cI = Qr(39249),
+       FI = Qr(40342),
+       oI = Qr(40351),
+       bI = Qr(39256),
+       JI = Qr(40353),
+       DI = Qr(40359),
+       dI = Qr(38548);
+     var sI = Qr(2484);
```

#### 740. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6030` → after: `L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6030) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6030)

```diff
-     var Ji = GR(40046);
+     var rf = Qr(40382);
```

#### 741. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6033` → after: `L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6033) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6033)

```diff
-       const JR = RR.lK.jH();
+       const Sr = rr.Ox.eC();
```

#### 742. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6037-L6038` → after: `L6037-L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6037-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6037-L6038) · [Before (L6037-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6037-L6038)

```diff
-             zC: GR
-           } = RR, yR = GR.mI(GR.names.bC), tR = GR.mI("lineToEntity");
+             YB: Qr
+           } = rr, Zr = Qr.YM(Qr.names.pB), Wr = Qr.YM("lineToEntity");
```

#### 743. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6040-L6042` → after: `L6040-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6040-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6040-L6042) · [Before (L6040-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6040-L6042)

```diff
-             if (!(0, Qq.chainSkipsSmoothing)(RR, uR.pe)) continue;
-             const yR = GR.vGR(uR.Rm);
-             null === (null === yR || void 0 === yR ? void 0 : yR.JI) && (0, Qq.meshOnScreen)(yR.mesh, JR) && (0, Qq.catchUpSkippedSmoothing)(RR, uR.pe)
+             if (!(0, bI.chainSkipsSmoothing)(rr, ar.nU)) continue;
+             const Zr = Qr.rQr(ar.XM);
+             null === (null === Zr || void 0 === Zr ? void 0 : Zr.JC) && (0, bI.meshOnScreen)(Zr.mesh, Sr) && (0, bI.catchUpSkippedSmoothing)(rr, ar.nU)
```

#### 744. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6044` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6044) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6044)

```diff
-           for (const uR of tR)((0, Qq.chainSkipsSmoothing)(RR, uR.Rm) || (0, Qq.chainSkipsSmoothing)(RR, uR._targetEId)) && (0, Qq.meshOnScreen)(uR._line, JR) && ((0, Qq.catchUpSkippedSmoothing)(RR, uR.Rm), (0, Qq.catchUpSkippedSmoothing)(RR, uR._targetEId), (0, Ji.updateLineTran … [truncated]
+           for (const ar of Wr)((0, bI.chainSkipsSmoothing)(rr, ar.XM) || (0, bI.chainSkipsSmoothing)(rr, ar._targetEId)) && (0, bI.meshOnScreen)(ar._line, Sr) && ((0, bI.catchUpSkippedSmoothing)(rr, ar.XM), (0, bI.catchUpSkippedSmoothing)(rr, ar._targetEId), (0, rf.updateLineTran … [truncated]
```

#### 745. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6048-L6052` → after: `L6048-L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6048-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6048-L6052) · [Before (L6048-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6048-L6052)

```diff
-     var yi = GR(38950),
-       ti = GR(1850),
-       ui = GR(38861),
-       Zi = GR(2163),
-       qi = GR(35085);
+     var Qf = Qr(39286),
+       Zf = Qr(1793),
+       Wf = Qr(39200),
+       af = Qr(2114),
+       jf = Qr(35399);
```

#### 746. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6056` → after: `L6056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6056) · [Before (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6056)

```diff
-       RR.lK.RyR = RR => {
+       rr.Ox.TQr = rr => {
```

#### 747. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6058` → after: `L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6058) · [Before (L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6058)

```diff
-         JR && (0, XR.X)(RR), (0, SR.d)(RR), JR && (0, XR.p)(RR)
+         Sr && (0, yr.P)(rr), (0, ir.e)(rr), Sr && (0, yr.m)(rr)
```

#### 748. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6060` → after: `L6060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6060) · [Before (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6060)

```diff
-         jW: Zi.c.values
+         NK: af.d.values
```

#### 749. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6062-L6065` → after: `L6062-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6062-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6062-L6065) · [Before (L6062-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6062-L6065)

```diff
-       let yR = RR.Ln;
-       Zi.c.subscribe("blockReach", (() => {
-           const JR = RR.bloxd.getBlockReach(RR.WH);
-           RR.Ln === yR && (RR.Ln = JR), yR = JR
+       let Zr = rr.hz;
+       af.d.subscribe("blockReach", (() => {
+           const Sr = rr.bloxd.getBlockReach(rr.fC);
+           rr.hz === Zr && (rr.hz = Sr), Zr = Sr
```

#### 750. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6068-L6070` → after: `L6068-L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6068-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6068-L6070) · [Before (L6068-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6068-L6070)

```diff
-           for (const GR of [nq.d, Wq, Xq, Mq]) {
-             const JR = RR.zC.GyR(GR(RR));
-             RR.zC.names[JR] = JR
+           for (const Qr of [hI.c, YI, KI, yI]) {
+             const Sr = rr.YB.OQr(Qr(rr));
+             rr.YB.names[Sr] = Sr
```

#### 751. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6074-L6076` → after: `L6074-L6076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6074-L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6074-L6076) · [Before (L6074-L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6074-L6076)

```diff
-             const JR = null !== (RR = LR.n.aU.playerKilled > 1 ? 1 : void 0) && void 0 !== RR ? RR : 5;
-             (0, cR.sendColyMessage)(hq.qg, {
-               iV: JR
+             const Sr = null !== (rr = hr.i.aY.playerKilled > 1 ? 1 : void 0) && void 0 !== rr ? rr : 5;
+             (0, Mr.sendColyMessage)(sI.Bg, {
+               Sp: Sr
```

#### 752. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6079` → after: `L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6079) · [Before (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6079)

```diff
-           const JR = GR(40054);
+           const Sr = Qr(40389);
```

#### 753. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6082` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6082) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6082)

```diff
-             if (yR.default && (yR = yR.default), "function" !== typeof yR) throw new Error(`components/${GR.replace(/^\.\//,"")} is under components/ but does not export a component factory - move it elsewhere`);
+             if (Zr.default && (Zr = Zr.default), "function" !== typeof Zr) throw new Error(`components/${Qr.replace(/^\.\//,"")} is under components/ but does not export a component factory - move it elsewhere`);
```

#### 754. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L6084-L6085` → after: `L6084-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/109.js#L6084-L6085) · [Before (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/109.js#L6084-L6085)

```diff
-               uR = RR.zC.GyR(tR);
-             RR.zC.names[uR] = uR
+               ar = rr.YB.OQr(Wr);
+             rr.YB.names[ar] = ar
```
