# Changed — Bundle Modifications Report (Part 086 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `86 / 133` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 085](part-085.md) · [Part 087 →](part-087.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (3514 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 310. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3183` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3019) · [Before (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3183)

```diff
-         Sv - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = Sv, this.stoppedMs += Pv, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${vv}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
+         MT - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = MT, this.stoppedMs += cT, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${TT}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
```

#### 311. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3191` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3027) · [Before (L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3191)

```diff
-         const zv = new Error(`wasm physics: ${this.host.kind} physics ${vv}, so it can't tick until the page reloads`);
+         const kT = new Error(`wasm physics: ${this.host.kind} physics ${TT}, so it can't tick until the page reloads`);
```

#### 312. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3193` → after: `L3029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3029) · [Before (L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3193)

```diff
-         (console.error(zv), this.host.failure.lost) ? this.host.failure.lost(zv): null === (Pv = (hv = this.host.failure).yw) || void 0 === Pv || Pv.call(hv, zv)
+         (console.error(kT), this.host.failure.lost) ? this.host.failure.lost(kT): null === (cT = (lT = this.host.failure).Yj) || void 0 === cT || cT.call(lT, kT)
```

#### 313. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3226-L3227` → after: `L3062-L3063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3062-L3063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3062-L3063) · [Before (L3226-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3226-L3227)

```diff
-         if (!this.rollsBack) return vv.dW || vv.kU ? "was given unloaded hooks" : null;
-         return (0, yz.i)(vv.dW) === this.host.kind && "cell" === (0, yz.i)(vv.kU) ? null : "had an unloaded hook replaced"
+         if (!this.rollsBack) return TT.IC || TT.lV ? "was given unloaded hooks" : null;
+         return (0, Uk.n)(TT.IC) === this.host.kind && "cell" === (0, Uk.n)(TT.lV) ? null : "had an unloaded hook replaced"
```

#### 314. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3240` → after: `L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3076) · [Before (L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3240)

```diff
-           if (Sv = zv, 5 === Sv.HT(vv, this.bodies.bodyStore.handle)) return ph
+           if (MT = kT, 5 === MT.gA(TT, this.bodies.bodyStore.handle)) return fl
```

#### 315. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3275` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3111) · [Before (L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3275)

```diff
-           const ev = vv.resume(zv.oT, Pv);
+           const KT = TT.resume(kT.pA, cT);
```

#### 316. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3277` → after: `L3113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3113) · [Before (L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3277)

```diff
-             if (this.host.stats.missRounds++, ++hv > 4096) return zv.oT.DW(), "missed chunks for 4096 rounds";
+             if (this.host.stats.missRounds++, ++lT > 4096) return kT.pA.zC(), "missed chunks for 4096 rounds";
```

#### 317. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3283` → after: `L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3119) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3283)

```diff
-           if (3 === ev) throw new Jz(new Error(nP(vv.rT())));
+           if (3 === KT) throw new Bk(new Error(mc(TT.qA())));
```

#### 318. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3286` → after: `L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3122) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3286)

```diff
-           if (pv.eW) {
+           if (yT.yC) {
```

#### 319. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3290` → after: `L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3126) · [Before (L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3290)

```diff
-               pv.eW(this.impacts)
+               yT.yC(this.impacts)
```

#### 320. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3300` → after: `L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3136) · [Before (L3300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3300)

```diff
-           if (null !== dv) return `${dv} in an onCollide handler`;
+           if (null !== fT) return `${fT} in an onCollide handler`;
```

#### 321. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3328` → after: `L3164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3164) · [Before (L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3328)

```diff
-             Pv.pW && Pv.pW()
+             cT.xC && cT.xC()
```

#### 322. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3342-L3343` → after: `L3178-L3179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3178-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3178-L3179) · [Before (L3342-L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3342-L3343)

```diff
-         const ev = !zv.BT;
-         return ev && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > Pv.length) && (vv.zW(this.committedCursor, this.tickLen, ev), !(this.host.prepare && !this.host.prepare(vv, hv.kR, 0 !== Sv)) && (!!hv.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
+         const KT = !kT.BA;
+         return KT && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > cT.length) && (TT.lC(this.committedCursor, this.tickLen, KT), !(this.host.prepare && !this.host.prepare(TT, lT.bV, 0 !== MT)) && (!!lT.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
```

#### 323. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3348` → after: `L3184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3184) · [Before (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3348)

```diff
-         this.vW = vv, this.physics = zv, this.options = Pv, this.stats = {
+         this.cC = TT, this.physics = kT, this.options = cT, this.stats = {
```

#### 324. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3399` → after: `L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3235) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3399)

```diff
-           yw: Pv.reportError,
+           Yj: cT.reportError,
```

#### 325. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3412-L3413` → after: `L3248-L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3248-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3248-L3249) · [Before (L3412-L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3412-L3413)

```diff
-               const Pv = this.vW.Rm.vx(this.vW.sV);
-               vv.NW(Pv ? zv(Pv) : -1)
+               const cT = this.cC.oN.JV(this.cC.jH);
+               TT.AC(cT ? kT(cT) : -1)
```

#### 326. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3460` → after: `L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3296) · [Before (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3460)

```diff
-         this.driver.MT(vv)
+         this.driver.UA(TT)
```

#### 327. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3471` → after: `L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3307) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3471)

```diff
-         return gv.fR(pv, vv, zv, Pv, hv, Sv, ev)
+         return OT.vV(yT, TT, kT, cT, lT, MT, KT)
```

#### 328. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3482` → after: `L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3318) · [Before (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3482)

```diff
-           return vv = zv, this.physics.rollbackBody = Lz(((vv, Pv, hv, Sv, ev, gv, pv) => zv.fR(zv.allocate(), vv, Pv, hv, Sv, ev, gv, pv))), zv
+           return TT = kT, this.physics.rollbackBody = Lk(((TT, cT, lT, MT, KT, OT, yT) => kT.vV(kT.allocate(), TT, cT, lT, MT, KT, OT, yT))), kT
```

#### 329. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3497` → after: `L3333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3333) · [Before (L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3497)

```diff
-           return vv ? hv && !(0, yz.d)(hv) ? IP(zv, Pv, "has a block test not marked markIdOnlyBlockTest") : !Sv || AP(Sv[0]) && AP(Sv[1]) && AP(Sv[2]) ? vv.HW(zv, Pv) : IP(zv, Pv, "has an offset that isn't whole cells") : IP(zv, Pv, "has no mirror")
+           return TT ? lT && !(0, Uk.e)(lT) ? Zc(kT, cT, "has a block test not marked markIdOnlyBlockTest") : !MT || dc(MT[0]) && dc(MT[1]) && dc(MT[2]) ? TT.gC(kT, cT) : Zc(kT, cT, "has an offset that isn't whole cells") : Zc(kT, cT, "has no mirror")
```

#### 330. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3516` → after: `L3352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3352) · [Before (L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3516)

```diff
-             const Pv = vv.mW(zv.oT, Sv[0], Sv[1], Sv[2], ev[0], ev[1], ev[2], hv[0], hv[1], hv[2]);
+             const cT = TT.aC(kT.pA, MT[0], MT[1], MT[2], KT[0], KT[1], KT[2], lT[0], lT[1], lT[2]);
```

#### 331. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3520` → after: `L3356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3356) · [Before (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3520)

```diff
-           zv.oT.DW()
+           kT.pA.zC()
```

#### 332. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3528` → after: `L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3364) · [Before (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3528)

```diff
-         return null !== (vv = null === (zv = this.mirror) || void 0 === zv ? void 0 : zv.residency()) && void 0 !== vv ? vv : null
+         return null !== (TT = null === (kT = this.mirror) || void 0 === kT ? void 0 : kT.residency()) && void 0 !== TT ? TT : null
```

#### 333. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3531-L3532` → after: `L3367-L3368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3367-L3368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3367-L3368) · [Before (L3531-L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3531-L3532)

```diff
-         const zv = this.vW.iW;
-         return this.context.setOffsets(vv, zv, zv) && this.context.uploadOverrides(vv, this.vW.oT)
+         const kT = this.cC.QC;
+         return this.context.setOffsets(TT, kT, kT) && this.context.uploadOverrides(TT, this.cC.pA)
```

#### 334. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3541-L3542` → after: `L3377-L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3377-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3377-L3378) · [Before (L3541-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3541-L3542)

```diff
-         const zv = this.vW.oT.Ha.physicsWorld;
-         return zv && fP(this.options.wasm) ? (this.mirror = new EP(this.options.wasm, zv, this.vW.kW, this.failure), this.mirror) : null
+         const kT = this.cC.pA.Rv.physicsWorld;
+         return kT && rc(this.options.wasm) ? (this.mirror = new Wc(this.options.wasm, kT, this.cC.sC, this.failure), this.mirror) : null
```

#### 335. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3548` → after: `L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3384) · [Before (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3548)

```diff
-     var Th = Pv(37925);
+     var Cl = cT(38241);
```

#### 336. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3558` → after: `L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3394) · [Before (L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3558)

```diff
-         takeRefusedAllocation: null !== (zv = vv.takeBloxdWasmRefusedAllocation) && void 0 !== zv ? zv : () => 0
+         takeRefusedAllocation: null !== (kT = TT.takeBloxdWasmRefusedAllocation) && void 0 !== kT ? kT : () => 0
```

#### 337. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3568-L3570` → after: `L3404-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3404-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3404-L3406) · [Before (L3568-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3568-L3570)

```diff
-         const pv = null !== (hv = null === (Sv = (ev = gv.bindings).vT) || void 0 === Sv ? void 0 : Sv.call(ev)) && void 0 !== hv ? hv : [];
-         if (!(pv.length === ah.length && ah.every(((vv, zv) => pv[zv] === vv)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(pv).join()}] are not [${ah.join()}]`);
-         return new sh(gv, new gv.bindings.bl, zv, Pv)
+         const yT = null !== (lT = null === (MT = (KT = OT.bindings).kA) || void 0 === MT ? void 0 : MT.call(KT)) && void 0 !== lT ? lT : [];
+         if (!(yT.length === tl.length && tl.every(((TT, kT) => yT[kT] === TT)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(yT).join()}] are not [${tl.join()}]`);
+         return new hl(OT, new OT.bindings.pI, kT, cT)
```

#### 338. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3573` → after: `L3409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3409) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3573)

```diff
-         this.runtime = vv, this.handle = zv, this.kW = Pv, this.reportTrap = hv, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new vv.BufferView(Uint8Array, zv.ww(!1), wh), this.lightU16 = new vv.BufferView(Uint16Array, zv.ww(!0), wh)
+         this.runtime = TT, this.handle = kT, this.sC = cT, this.reportTrap = lT, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new TT.BufferView(Uint8Array, kT.tj(!1), vl), this.lightU16 = new TT.BufferView(Uint16Array, kT.tj(!0), vl)
```

#### 339. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3576` → after: `L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3412) · [Before (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3576)

```diff
-         return this.attempt((() => (this.syncRegistry(), ch(this.handle.sw(zv.oT, zv.slot, vv)), this.scan(zv))))
+         return this.attempt((() => (this.syncRegistry(), Sl(this.handle.Nj(kT.pA, kT.slot, TT)), this.scan(kT))))
```

#### 340. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3582` → after: `L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3418) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3582)

```diff
-         return this.attempt((() => (ch(this.handle.aw(vv, zv)), zv ? this.lightU16.view().slice() : this.lightU8.view().slice())))
+         return this.attempt((() => (Sl(this.handle.hj(TT, kT)), kT ? this.lightU16.view().slice() : this.lightU8.view().slice())))
```

#### 341. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3585` → after: `L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3421) · [Before (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3585)

```diff
-         const zv = this.handle.scan(vv.oT, vv.slot),
+         const kT = this.handle.scan(TT.pA, TT.slot),
```

#### 342. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3589-L3592` → after: `L3425-L3428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3425-L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3425-L3428) · [Before (L3589-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3589-L3592)

```diff
-           hq: this.runtime.view(Uint16Array, this.handle.Cw(), 32).slice(),
-           PD: 1 === Pv || 0 !== Pv && void 0,
-           kw: 0 !== (4 & zv),
-           lq: this.runtime.view(Uint16Array, this.handle.iw(), hv).slice()
+           YV: this.runtime.view(Uint16Array, this.handle.Qj(), 32).slice(),
+           Am: 1 === cT || 0 !== cT && void 0,
+           sj: 0 !== (4 & kT),
+           qV: this.runtime.view(Uint16Array, this.handle.Sj(), lT).slice()
```

#### 343. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3603` → after: `L3439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3439) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3603)

```diff
-             Pv = new Error(`Chunk ingest trapped in wasm (${vv})`);
+             cT = new Error(`Chunk ingest trapped in wasm (${TT})`);
```

#### 344. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3609-L3610` → after: `L3445-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3445-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3445-L3446) · [Before (L3609-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3609-L3610)

```diff
-         const zv = this.kW,
-           Pv = 65536 * (null !== (vv = zv.xR) && void 0 !== vv ? vv : 0) + zv.Ja.length;
+         const kT = this.sC,
+           cT = 65536 * (null !== (TT = kT.tV) && void 0 !== TT ? TT : 0) + kT.Bv.length;
```

#### 345. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3614` → after: `L3450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3450) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3614)

```diff
-           const zv = Math.max(vv.Ja.length, vv.Hx.length, vv.Bx.length, vv.Xx.length),
+           const kT = Math.max(TT.Bv.length, TT.GV.length, TT.VV.length, TT.XV.length),
```

#### 346. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3617-L3618` → after: `L3453-L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3453-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3453-L3454) · [Before (L3617-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3617-L3618)

```diff
-             const zv = vv.Ja[hv];
-             Pv[hv] = (void 0 === zv ? 2 : zv ? 1 : 0) | (vv.Hx[hv] ? 4 : 0) | (vv.Bx[hv] ? 8 : 0) | (vv.Xx[hv] ? 16 : 0)
+             const kT = TT.Bv[lT];
+             cT[lT] = (void 0 === kT ? 2 : kT ? 1 : 0) | (TT.GV[lT] ? 4 : 0) | (TT.VV[lT] ? 8 : 0) | (TT.XV[lT] ? 16 : 0)
```

#### 347. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3622` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3458) · [Before (L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3622)

```diff
-         this.handle.Gw(hv)
+         this.handle.Dj(lT)
```

#### 348. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3631-L3632` → after: `L3467-L3468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3467-L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3467-L3468) · [Before (L3631-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3631-L3632)

```diff
-     var Gh = Pv(37932);
-     const mh = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * Gh.R, Gh.E, Gh.z, Gh.A, Gh.w, Gh.r, Gh.G, Gh.J, Gh.s, Gh.W, Gh.V, Gh._, Gh.ab, Gh.Z, Gh.o, Gh.h, Gh.k, Gh.l, Gh.K, Gh.d, ...Gh.O],
+     var Dl = cT(38245);
+     const al = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * Dl.U, Dl.I, Dl.C, Dl.G, Dl.z, Dl.t, Dl.J, Dl.K, Dl.v, Dl._, Dl.W, Dl.db, Dl.hb, Dl.ab, Dl.r, Dl.i, Dl.m, Dl.q, Dl.N, Dl.e, ...Dl.R],
```

#### 349. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3639-L3640` → after: `L3475-L3476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3475-L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3475-L3476) · [Before (L3639-L3640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3639-L3640)

```diff
-         const pv = null !== (hv = null === (Sv = (ev = gv.bindings).Xl) || void 0 === Sv ? void 0 : Sv.call(ev)) && void 0 !== hv ? hv : [];
-         return pv.length === mh.length && mh.every(((vv, zv) => pv[zv] === vv)) ? new fh(gv, new gv.bindings.ol, zv, Pv) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(pv).join()}] are not [${mh.join()}], so blocks are set in JS`), null)
+         const yT = null !== (lT = null === (MT = (KT = OT.bindings).sI) || void 0 === MT ? void 0 : MT.call(KT)) && void 0 !== lT ? lT : [];
+         return yT.length === al.length && al.every(((TT, kT) => yT[kT] === TT)) ? new rl(OT, new OT.bindings.nI, kT, cT) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(yT).join()}] are not [${al.join()}], so blocks are set in JS`), null)
```

#### 350. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3643` → after: `L3479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3479) · [Before (L3643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3643)

```diff
-         this.runtime = vv, this.handle = zv, this.kW = Pv, this.yw = hv, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new vv.BufferView(Uint32Array, … [truncated]
+         this.runtime = TT, this.handle = kT, this.sC = cT, this.Yj = lT, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new TT.BufferView(Uint32Array, … [truncated]
```

#### 351. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3646` → after: `L3482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3482) · [Before (L3646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3646)

```diff
-         let Sv = (0, Gh.ob)(zv);
+         let MT = (0, Dl.tb)(kT);
```

#### 352. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3652` → after: `L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3488) · [Before (L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3652)

```diff
-           gv = this.propsFor(null === Pv || void 0 === Pv ? void 0 : Pv.isHookId), pv = null !== (dv = null === Pv || void 0 === Pv || null === (Nv = Pv.watched) || void 0 === Nv ? void 0 : Nv.call(Pv)) && void 0 !== dv ? dv : jh
+           OT = this.propsFor(null === cT || void 0 === cT ? void 0 : cT.isHookId), yT = null !== (fT = null === cT || void 0 === cT || null === (xT = cT.watched) || void 0 === xT ? void 0 : xT.call(cT)) && void 0 !== fT ? fT : Fl
```

#### 353. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3654-L3655` → after: `L3490-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3490-L3491) · [Before (L3654-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3654-L3655)

```diff
-           if (this.startFailedAt !== this.kW.xR) {
-             this.startFailedAt = this.kW.xR;
+           if (this.startFailedAt !== this.sC.tV) {
+             this.startFailedAt = this.sC.tV;
```

#### 354. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3657` → after: `L3493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3493) · [Before (L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3657)

```diff
-             this.yw(new Error(`Block edits could not start in wasm (${vv}), so batches are set in JS until that is fixed`))
+             this.Yj(new Error(`Block edits could not start in wasm (${TT}), so batches are set in JS until that is fixed`))
```

#### 355. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3661-L3662` → after: `L3497-L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3497-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3497-L3498) · [Before (L3661-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3661-L3662)

```diff
-         const lv = Gh.G | (null !== Pv && void 0 !== Pv && Pv.isHookId ? Gh.J : 0);
-         if (!this.call(vv, !1, (() => (gv !== this.sentProps && (this.handle.Tw(gv), this.sentProps = gv), this.handle.Ww(pv), this.handle.dw(zv), !0)))) return Sv;
+         const IT = Dl.J | (null !== cT && void 0 !== cT && cT.isHookId ? Dl.K : 0);
+         if (!this.call(TT, !1, (() => (OT !== this.sentProps && (this.handle.jj(OT), this.sentProps = OT), this.handle.vj(yT), this.handle.Ij(kT), !0)))) return MT;
```

#### 356. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3691` → after: `L3527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3527) · [Before (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3691)

```diff
-         return this.runtime.isReady() && vv.Ha.physicsWorld === zv
+         return this.runtime.isReady() && TT.Rv.physicsWorld === kT
```

#### 357. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3694` → after: `L3530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3530) · [Before (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3694)

```diff
-         return this.busy || !this.runtime.isReady() ? null : vv.Ha.physicsWorld
+         return this.busy || !this.runtime.isReady() ? null : TT.Rv.physicsWorld
```

#### 358. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3703-L3704` → after: `L3539-L3540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3539-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3539-L3540) · [Before (L3703-L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3703-L3704)

```diff
-             ev = Pv ? `, its ${Pv} voxel writes undone for JS to redo` : "";
-           return this.yw(new Error(`Block edits trapped in wasm (${Sv})${ev}, so blocks are set in JS from now on`)), null
+             KT = cT ? `, its ${cT} voxel writes undone for JS to redo` : "";
+           return this.Yj(new Error(`Block edits trapped in wasm (${MT})${KT}, so blocks are set in JS from now on`)), null
```

#### 359. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3716` → after: `L3552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3552) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3716)

```diff
-           if (void 0 === pv && (pv = vv.Ha.slotData(Pv), Sv.set(Pv, pv)), pv) {
+           if (void 0 === yT && (yT = TT.Rv.slotData(cT), MT.set(cT, yT)), yT) {
```

#### 360. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3724` → after: `L3560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3560) · [Before (L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3724)

```diff
-         const zv = this.kW.xR,
+         const kT = this.sC.tV,
```

#### 361. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3729` → after: `L3565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3565) · [Before (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3729)

```diff
-           props: (0, Gh.jb)(this.kW, vv)
+           props: (0, Dl.pb)(this.sC, TT)
```

#### 362. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3731` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3567) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3731)

```diff
-         return vv ? this.hookedProps = hv : this.plainProps = hv, hv.props
+         return TT ? this.hookedProps = lT : this.plainProps = lT, lT.props
```

#### 363. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3736` → after: `L3572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3572) · [Before (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3736)

```diff
-         0 !== Pv && (0, Gh.hb)(vv, {
+         0 !== cT && (0, Dl.lb)(TT, {
```

#### 364. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3738-L3739` → after: `L3574-L3575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3574-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3574-L3575) · [Before (L3738-L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3738-L3739)

```diff
-           words: this.runtime.view(Int32Array, zv[0], Pv * Gh.R),
-           layerIds: this.runtime.view(Uint16Array, zv[0], Pv * Gh.R * 2),
+           words: this.runtime.view(Int32Array, kT[0], cT * Dl.U),
+           layerIds: this.runtime.view(Uint16Array, kT[0], cT * Dl.U * 2),
```

#### 365. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3747-L3749` → after: `L3583-L3585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3583-L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3583-L3585) · [Before (L3747-L3749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3747-L3749)

```diff
-     var Fh = Pv(36976),
-       Yh = Pv(37921),
-       nh = Pv(38631),
+     var Pl = cT(37315),
+       wl = cT(38234),
+       ml = cT(38919),
```

#### 366. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3767` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3603) · [Before (L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3767)

```diff
-       vv.vI = vv.pI = 0
+       TT.pE = TT.qE = 0
```

#### 367. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3774` → after: `L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3610) · [Before (L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3774)

```diff
-       yI: !1,
+       HZ: !1,
```

#### 368. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3776` → after: `L3612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3612) · [Before (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3776)

```diff
-       JI: !1
+       eZ: !1
```

#### 369. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3790` → after: `L3626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3626) · [Before (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3790)

```diff
-     class Ah extends nh.b {
+     class dl extends ml.d {
```

#### 370. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3798` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3634) · [Before (L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3798)

```diff
-         this.bI = null;
+         this.ZZ = null;
```

#### 371. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3806` → after: `L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3642) · [Before (L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3806)

```diff
-           vv.container.YV && function(vv, zv, Pv, hv) {
+           TT.container.gH && function(TT, kT, cT, lT) {
```

#### 372. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3811` → after: `L3647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3647) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3811)

```diff
-           }(gv, Pv.movementX, Pv.movementY, Pv.timeStamp) && (this.FQ.dx -= Pv.movementX, this.FQ.dy -= Pv.movementY, this.bI && this.bI())
+           }(OT, cT.movementX, cT.movementY, cT.timeStamp) && (this.uZ.dx -= cT.movementX, this.uZ.dy -= cT.movementY, this.ZZ && this.ZZ())
```

#### 373. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3817-L3821` → after: `L3653-L3657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3653-L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3653-L3657) · [Before (L3817-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3817-L3821)

```diff
-     var Lh = Pv(37912),
-       Hh = Pv(39025),
-       Mh = Pv(327),
-       yh = Pv(39030),
-       Bh = Pv(9108).i;
+     var Ll = cT(38227),
+       Rl = cT(39339),
+       gl = cT(350),
+       Ul = cT(39342),
+       Yl = cT(9455).h;
```

#### 374. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3823` → after: `L3659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3659) · [Before (L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3823)

```diff
-       MT(vv) {
+       UA(TT) {
```

#### 375. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3855-L3856` → after: `L3691-L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3691-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3691-L3692) · [Before (L3855-L3856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3855-L3856)

```diff
-       if (!zv.IU || zv.Dl <= 0) {
-         var Sv = zv.pC;
+       if (!kT.sG || kT.zI <= 0) {
+         var MT = kT.Oh;
```

#### 376. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3858` → after: `L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3694) · [Before (L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3858)

```diff
-         var ev = zv.vR;
+         var KT = kT.KV;
```

#### 377. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3860` → after: `L3696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3696) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3860)

```diff
-         var gv = zv.gR;
+         var OT = kT.yV;
```

#### 378. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3863-L3864` → after: `L3699-L3700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3699-L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3699-L3700) · [Before (L3863-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3863-L3864)

```diff
-       var pv = !!vv.dW,
-         dv = (0, Lh.b)(zv);
+       var yT = !!TT.IC,
+         fT = (0, Ll.e)(kT);
```

#### 379. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3866-L3867` → after: `L3702-L3703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3702-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3702-L3703) · [Before (L3866-L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3866-L3867)

```diff
-           if (!vv.kU) return;
-           var Pv = (0, Lh.c)(sP(vv, zv), vv.kU, zv.BT);
+           if (!TT.lV) return;
+           var cT = (0, Ll.h)(hc(TT, kT), TT.lV, kT.BA);
```

#### 380. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3869` → after: `L3705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3705) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3869)

```diff
-           FS[1] = Pv, zv.BT.translate(FS), zv.pR(), zv.pW && zv.pW()
+           PM[1] = cT, kT.BA.translate(PM), kT.fV(), kT.xC && kT.xC()
```

#### 381. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3872` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3708) · [Before (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3872)

```diff
-           if (zv.wakeInFluid && vv.testFluid(Math.floor(zv.BT.base[0]), Math.floor(zv.BT.base[1]), Math.floor(zv.BT.base[2]))) return !1;
+           if (kT.wakeInFluid && TT.testFluid(Math.floor(kT.BA.base[0]), Math.floor(kT.BA.base[1]), Math.floor(kT.BA.base[2]))) return !1;
```

#### 382. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3878` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3714) · [Before (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3878)

```diff
-           return NS = !1, yh(gv, zv.BT, VS, lS, !0), NS
+           return IM = !1, Ul(OT, kT.BA, oM, AM, !0), IM
```

#### 383. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3884` → after: `L3720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3720) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3884)

```diff
-             var Pv = zv.BT,
+             var cT = kT.BA,
```

#### 384. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3897-L3901` → after: `L3733-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3733-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3733-L3737) · [Before (L3897-L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3897-L3901)

```diff
-             Mh.scale(Tv, vv.gravity, -vv.aW * lv * zv.gravityMultiplier), zv.applyForce(Tv), zv.inFluid = !0, zv.ratioInFluid = Nv
-           }(vv, zv), xS(zv.vR), xS(zv.gR), xS(zv.pC), xS(zv.resting);
-         var lv = zv.pC,
-           Tv = zv.vR,
-           Wv = zv.gR,
+             gl.scale(AT, TT.gravity, -TT.hC * IT * kT.gravityMultiplier), kT.applyForce(AT), kT.inFluid = !0, kT.ratioInFluid = xT
+           }(TT, kT), GM(kT.KV), GM(kT.yV), GM(kT.Oh), GM(kT.resting);
+         var IT = kT.Oh,
+           AT = kT.KV,
+           CT = kT.yV,
```

#### 385. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3903` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3739) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3903)

```diff
-           av = 1 / zv.Dl;
+           vT = 1 / kT.zI;
```

#### 386. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3906` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3742) · [Before (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3906)

```diff
-         Eh[0] = Eh[0] + wv[0] * sv, Eh[1] = Eh[1] + wv[1] * sv, Eh[2] = Eh[2] + wv[2] * sv, av = 1 / zv.Dl, oh[0] = Wv[0] * av, oh[1] = Wv[1] * av, oh[2] = Wv[2] * av, oh[0] = oh[0] + Eh[0] * Pv, oh[1] = oh[1] + Eh[1] * Pv, oh[2] = oh[2] + Eh[2] * Pv, lv[0] = lv[0] + oh[0], lv[1] … [truncated]
+         Wl[0] = Wl[0] + jT[0] * tT, Wl[1] = Wl[1] + jT[1] * tT, Wl[2] = Wl[2] + jT[2] * tT, vT = 1 / kT.zI, nl[0] = CT[0] * vT, nl[1] = CT[1] * vT, nl[2] = CT[2] * vT, nl[0] = nl[0] + Wl[0] * cT, nl[1] = nl[1] + Wl[1] * cT, nl[2] = nl[2] + Wl[2] * cT, IT[0] = IT[0] + nl[0], IT[1] … [truncated]
```

#### 387. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3911` → after: `L3747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3747) · [Before (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3911)

```diff
-           Gv = zv.wW >= 0 ? zv.wW : vv.wW,
+           ST = kT.tC >= 0 ? kT.tC : TT.tC,
```

#### 388. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3914-L3915` → after: `L3750-L3751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3750-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3750-L3751) · [Before (L3914-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3914-L3915)

```diff
-         zv.inFluid && (mv = vS(zv, zv.fluidDragHoriz >= 0 ? zv.fluidDragHoriz : cv), jv = vS(zv, zv.fluidDragVert >= 0 ? zv.fluidDragVert : cv)), mv = Math.max(1 - mv * Pv / zv.Dl, 0), jv = Math.max(1 - jv * Pv / zv.Dl, 0), zS[0] = mv, zS[1] = jv, zS[2] = mv, lv[0] = lv[0] * zS[0 … [truncated]
-           if (yh.checkInput(zv.BT, Pv), !zv.resting[1] || Pv[1] > 0) return;
+         kT.inFluid && (DT = kM(kT, kT.fluidDragHoriz >= 0 ? kT.fluidDragHoriz : QT), aT = kM(kT, kT.fluidDragVert >= 0 ? kT.fluidDragVert : QT)), DT = Math.max(1 - DT * cT / kT.zI, 0), aT = Math.max(1 - aT * cT / kT.zI, 0), cM[0] = DT, cM[1] = aT, cM[2] = DT, IT[0] = IT[0] * cM[0 … [truncated]
+           if (Ul.checkInput(kT.BA, cT), !kT.resting[1] || cT[1] > 0) return;
```

#### 389. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3917` → after: `L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3753) · [Before (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3917)

```diff
-           RS(Sv, zv.BT);
+           eM(MT, kT.BA);
```

#### 390. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3923` → after: `L3759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3759) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3923)

```diff
-         }(vv, zv, bh, uh), WS(vv, zv, zv.BT, bh, zv.resting, zv.slideOnCollision), zv.KU && function(vv, zv, Pv, hv) {
+         }(TT, kT, pl, TM), jM(TT, kT, kT.BA, pl, kT.resting, kT.slideOnCollision), kT.iG && function(TT, kT, cT, lT) {
```

#### 391. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3932` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3768) · [Before (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3932)

```diff
-             Nv = zv.BT.base[1];
+             xT = kT.BA.base[1];
```

#### 392. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3948` → after: `L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3784) · [Before (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3948)

```diff
-         for (var fv = 0; fv < 3; ++fv) zv.resting[fv] = zv.resting[fv] || uh[fv], rh[fv] = 0, zv.resting[fv] && (kh[fv] || (rh[fv] = -zv.pC[fv]), zv.pC[fv] = 0);
+         for (var FT = 0; FT < 3; ++FT) kT.resting[FT] = kT.resting[FT] || TM[FT], il[FT] = 0, kT.resting[FT] && (ql[FT] || (il[FT] = -kT.Oh[FT]), kT.Oh[FT] = 0);
```

#### 393. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3950` → after: `L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3786) · [Before (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3950)

```diff
-         Fv > .001 && (Mh.scale(rh, rh, zv.Dl), zv.eW && zv.eW(rh)),
+         rT > .001 && (gl.scale(il, il, kT.zI), kT.yC && kT.yC(il)),
```

#### 394. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3952` → after: `L3788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3788) · [Before (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3952)

```diff
-             if (!zv.BT) return;
+             if (!kT.BA) return;
```

#### 395. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3954-L3956` → after: `L3790-L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3790-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3790-L3792) · [Before (L3954-L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3954-L3956)

```diff
-             var Sv = Mh.squaredLength(zv.pC);
-             Sv > 1e-5 && zv.pR();
-             vv.dW && vv.dW(zv) ? (zv.loadStateFromCopy(vv.rollbackBody), zv.rolledBackLastTick = !0) : zv.rolledBackLastTick = !1
+             var MT = gl.squaredLength(kT.Oh);
+             MT > 1e-5 && kT.fV();
+             TT.IC && TT.IC(kT) ? (kT.loadStateFromCopy(TT.rollbackBody), kT.rolledBackLastTick = !0) : kT.rolledBackLastTick = !1
```

#### 396. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3969` → after: `L3805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3805) · [Before (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3969)

```diff
-       Mh.copy(eS, Pv.pC), eS[zv] = 0;
+       gl.copy(OM, cT.Oh), OM[kT] = 0;
```

#### 397. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3973-L3974` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3809-L3810) · [Before (L3973-L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L3973-L3974)

```diff
-           Nv = pv > dv ? (pv - dv) / pv : 0;
-         Pv.pC[(zv + 1) % 3] *= Nv, Pv.pC[(zv + 2) % 3] *= Nv
+           xT = yT > fT ? (yT - fT) / yT : 0;
+         cT.Oh[(kT + 1) % 3] *= xT, cT.Oh[(kT + 2) % 3] *= xT
```

#### 398. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4021` → after: `L3857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3857) · [Before (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4021)

```diff
-           }(vv, zv, Pv))) return RS(zv.BT, Pv), zv.resting[0] = aS[0], zv.resting[2] = aS[2], zv.pW && zv.pW(), !0
+           }(TT, kT, cT))) return eM(kT.BA, cT), kT.resting[0] = tM[0], kT.resting[2] = tM[2], kT.xC && kT.xC(), !0
```

#### 399. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4052` → after: `L3888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3888) · [Before (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4052)

```diff
-       wW: .1
+       tC: .1
```

#### 400. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4057-L4061` → after: `L3893-L3897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3893-L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3893-L3897) · [Before (L4057-L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4057-L4061)

```diff
-         var Pv = vv.oT,
-           hv = vv.kW.uW,
-           Sv = vv.iW;
-         zv.kU = (0, yz.h)(((vv, zv, hv) => !Pv.aZ(vv + Sv[0], zv + Sv[1], hv + Sv[2])), "cell"), super(zv, ((vv, zv, hv) => Pv.GW(vv + Sv[0], zv + Sv[1], hv + Sv[2])), ((vv, zv, ev) => {
-           var gv = Pv.EQ(vv + Sv[0], zv + Sv[1], ev + Sv[2]);
+         var cT = TT.pA,
+           lT = TT.sC.kj,
+           MT = TT.QC;
+         kT.lV = (0, Uk.k)(((TT, kT, lT) => !cT.Tu(TT + MT[0], kT + MT[1], lT + MT[2])), "cell"), super(kT, ((TT, kT, lT) => cT.DC(TT + MT[0], kT + MT[1], lT + MT[2])), ((TT, kT, KT) => {
+           var OT = cT.RZ(TT + MT[0], kT + MT[1], KT + MT[2]);
```

#### 401. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4063` → after: `L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3899) · [Before (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4063)

```diff
-         })), this.wasm = null, this.sZ = 0, this.iZ = 0
+         })), this.wasm = null, this.ku = 0, this.Eu = 0
```

#### 402. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4067` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3903) · [Before (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4067)

```diff
-         this.wasm ? this.wasm.MT(vv) : super.MT(vv), this.sZ += performance.now() - zv, this.iZ++
+         this.wasm ? this.wasm.UA(TT) : super.UA(TT), this.ku += performance.now() - kT, this.Eu++
```

#### 403. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4070` → after: `L3906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3906) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4070)

```diff
-         return this.wasm && this.wasm.fR(vv, zv, Pv, hv, Sv, ev) || super.fR(vv, zv, Pv, hv, Sv, ev)
+         return this.wasm && this.wasm.vV(TT, kT, cT, lT, MT, KT) || super.vV(TT, kT, cT, lT, MT, KT)
```

#### 404. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4073-L4074` → after: `L3909-L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3909-L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3909-L3910) · [Before (L4073-L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4073-L4074)

```diff
-         var zv = super.TW(vv);
-         return zv && this.wasm && this.wasm.Ix(vv), zv
+         var kT = super.jC(TT);
+         return kT && this.wasm && this.wasm.oV(TT), kT
```

#### 405. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4078-L4079` → after: `L3914-L3915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3914-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3914-L3915) · [Before (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4078-L4079)

```diff
-           ms: this.sZ,
-           count: this.iZ
+           ms: this.ku,
+           count: this.Eu
```

#### 406. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4081` → after: `L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3917) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4081)

```diff
-         return this.sZ = 0, this.iZ = 0, vv
+         return this.ku = 0, this.Eu = 0, TT
```

#### 407. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4084` → after: `L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3920) · [Before (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4084)

```diff
-     var IS = Pv(39025),
+     var ZM = cT(39339),
```

#### 408. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4086` → after: `L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3922) · [Before (L4086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4086)

```diff
-       ZS = Pv(39030),
+       XM = cT(39342),
```

#### 409. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4088` → after: `L3924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3924) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4088)

```diff
-       LS = Pv(36878);
+       LM = cT(37235);
```

#### 410. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4091` → after: `L3927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3927) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4091)

```diff
-       this.RZ = !1, this.xZ = !1, this.ZZ = 1, this.HZ = 0, this.bZ = 10, this.uZ = 10, this.hA = 0, this.sA = .2
+       this.Xu = !1, this.Yu = !1, this.yX = 1, this.FX = 0, this.EX = 10, this.BX = 10, this.cL = 0, this.lL = .2
```

#### 411. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4097-L4100` → after: `L3933-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3933-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3933-L3936) · [Before (L4097-L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4097-L4100)

```diff
-         zv = Object.assign({}, new HS, zv), this.vW = vv, this.bZ = +zv.bZ, this.uZ = +zv.uZ, this.RZ = !!zv.RZ, this.xZ = !!zv.xZ, this.ZZ = zv.ZZ, this.HZ = zv.HZ, this.heading = 0, this.pitch = 0, this.pa = 0, this.Xs = cv().create(), this.HA = this.vW.Rm.JA(["position"]);
-         var Pv = .9 * vv.Rm.rA(vv.sV).height;
-         vv.Rm.IK(this.HA, "KF", {
-           Xw: vv.sV,
+         kT = Object.assign({}, new RM, kT), this.cC = TT, this.EX = +kT.EX, this.BX = +kT.BX, this.Xu = !!kT.Xu, this.Yu = !!kT.Yu, this.yX = kT.yX, this.FX = kT.FX, this.heading = 0, this.pitch = 0, this.dv = 0, this.Bt = QT().create(), this.fL = this.cC.oN.tL(["position"]);
+         var cT = .9 * TT.oN.wL(TT.jH).height;
+         TT.oN.dJ(this.fL, "Xw", {
+           Tv: TT.jH,
```

#### 412. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4102` → after: `L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3938) · [Before (L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4102)

```diff
-         }), this.gL = zv.hA, this.sA = zv.sA, this.dL = zv.hA, this.FQ = {
+         }), this.uL = kT.cL, this.lL = kT.lL, this.dL = kT.cL, this.uZ = {
```

#### 413. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4105-L4110` → after: `L3941-L3946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3941-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3941-L3946) · [Before (L4105-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4105-L4110)

```diff
-         }, this.lL = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.wL = new le(this), this.cL = cv().dv(0, 0, 1), this.fL = cv().dv(0, 0, 1), this.XV = !1, this.YL = {
-           fn: 0,
-           kY: 0,
-           vI: 0,
-           pI: 0
-         }, this.RL = NaN, this.Mq = null, this.tL = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.qL = null, this.uL = null, this.gH = null, this.WH = null
+         }, this.RL = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.gL = new AK(this), this.YL = QT().ck(0, 0, 1), this.qL = QT().ck(0, 0, 1), this.aG = !1, this.kR = {
+           vx: 0,
+           vy: 0,
+           pE: 0,
+           qE: 0
+         }, this.yR = NaN, this.aE = null, this.fR = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.xR = null, this.jR = null, this.vR = null, this.JR = null
```

#### 414. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4114-L4115` → after: `L3950-L3951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3950-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3950-L3951) · [Before (L4114-L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4114-L4115)

```diff
-         var zv = this.vW.Rm.rA(this.HA);
-         cv().copy(vv, zv.iH);
+         var kT = this.cC.oN.wL(this.fL);
+         QT().copy(TT, kT.uR);
```

#### 415. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4121` → after: `L3957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3957) · [Before (L4121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4121)

```diff
-         var zv = this.sH(vv);
+         var kT = this.oR(TT);
```

#### 416. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4123-L4124` → after: `L3959-L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3959-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3959-L3960) · [Before (L4123-L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4123-L4124)

```diff
-         const Pv = this.vW.bloxd.jH(this.vW.sV);
-         return cv().uv(zv, zv, this.cL, -this.dL * Pv)
+         const cT = this.cC.bloxd.pR(this.cC.jH);
+         return QT().ek(kT, kT, this.YL, -this.dL * cT)
```

#### 417. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4127` → after: `L3963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3963) · [Before (L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4127)

```diff
-         return this.mH(vv)
+         return this.gR(TT)
```

#### 418. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4130` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3966) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4130)

```diff
-         var vv = this.sH(),
+         var TT = this.oR(),
```

#### 419. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4132` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3968) · [Before (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4132)

```diff
-         return this.vW.DH(vv, zv)
+         return this.cC.IU(TT, kT)
```

#### 420. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4135` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3971) · [Before (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4135)

```diff
-         var vv = this.mH(),
+         var TT = this.gR(),
```

#### 421. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4137` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3973) · [Before (L4137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4137)

```diff
-         return this.vW.DH(vv, zv)
+         return this.cC.IU(TT, kT)
```

#### 422. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4140` → after: `L3976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3976) · [Before (L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4140)

```diff
-         return (0, LS.b)(this.heading, this.pitch - Math.PI / 2)
+         return (0, LM.c)(this.heading, this.pitch - Math.PI / 2)
```

#### 423. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4144` → after: `L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3980) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4144)

```diff
-         return cv().copy(this.IH, this.fL)
+         return QT().copy(this.aU, this.qL)
```

#### 424. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4147` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3983) · [Before (L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4147)

```diff
-         return cv().copy(this.IH, this.cL)
+         return QT().copy(this.aU, this.YL)
```

#### 425. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4150-L4151` → after: `L3986-L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3986-L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3986-L3987) · [Before (L4150-L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4150-L4151)

```diff
-         var hv = this.tL;
-         return hv[0] = vv, hv[1] = zv, hv[2] = Pv.dx, hv[3] = Pv.dy, hv[7] = this.YL.fn, hv[8] = this.YL.kY, hv[9] = function(vv) {
+         var lT = this.fR;
+         return lT[0] = TT, lT[1] = kT, lT[2] = cT.dx, lT[3] = cT.dy, lT[7] = this.kR.vx, lT[8] = this.kR.vy, lT[9] = function(TT) {
```

#### 426. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4156` → after: `L3992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3992) · [Before (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4156)

```diff
-         vv[4] = Pv, vv[5] = hv, vv[6] = zv, this.Mq && this.Mq(vv)
+         TT[4] = cT, TT[5] = lT, TT[6] = kT, this.aE && this.aE(TT)
```

#### 427. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4161-L4162` → after: `L3997-L3998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3997-L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L3997-L3998) · [Before (L4161-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4161-L4162)

```diff
-           dx: this.FQ.dx,
-           dy: this.FQ.dy
+           dx: this.uZ.dx,
+           dy: this.uZ.dy
```

#### 428. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4164` → after: `L4000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4000) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4164)

```diff
-         this.FQ.dx = this.FQ.dy = 0;
+         this.uZ.dx = this.uZ.dy = 0;
```

#### 429. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4169-L4173` → after: `L4005-L4009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4005-L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4005-L4009) · [Before (L4169-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4169-L4173)

```diff
-           return "number" === typeof vv ? vv : performance.now()
-         }()) - this.RL, this.RL = hv);
-         var Sv = !vv && this.Mq ? this.gM(hv, Pv, zv) : null;
-         const ev = this.gH ? this.gH() : 0,
-           gv = this.WH ? this.WH() : null,
+           return "number" === typeof TT ? TT : performance.now()
+         }()) - this.yR, this.yR = lT);
+         var MT = !TT && this.aE ? this.dU(lT, cT, kT) : null;
+         const KT = this.vR ? this.vR() : 0,
+           OT = this.JR ? this.JR() : null,
```

#### 430. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4175-L4179` → after: `L4011-L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4011-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4011-L4015) · [Before (L4175-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4175-L4179)

```diff
-         var dv = this.ZZ;
-         if (this.vW.container.KV && (this.vW.container.YV || (dv *= this.HZ)), 0 === dv && 0 === ev && !pv) return vv || qh(this.YL), void(Sv && this.pM(Sv, Kh, 0, 0));
-         if (this.XV) {
-           if (this.XV = !1, 0 === ev && !pv) return vv || qh(this.YL), void(Sv && this.pM(Sv, Rh, 0, 0));
-           dv = 0, Sv && this.pM(Sv, Rh, 0, 0), Sv = null
+         var fT = this.yX;
+         if (this.cC.container.UH && (this.cC.container.gH || (fT *= this.FX)), 0 === fT && 0 === KT && !yT) return TT || El(this.kR), void(MT && this.WU(MT, Jl, 0, 0));
+         if (this.aG) {
+           if (this.aG = !1, 0 === KT && !yT) return TT || El(this.kR), void(MT && this.WU(MT, el, 0, 0));
+           fT = 0, MT && this.WU(MT, el, 0, 0), MT = null
```

#### 431. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4186-L4191` → after: `L4022-L4027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4022-L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4022-L4027) · [Before (L4186-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4186-L4191)

```diff
-                 ev = Ih(zv.dx, hv, vv.fn, Sv),
-                 gv = Ih(zv.dy, hv, vv.kY, Sv);
-               return 0 !== ev && ev !== vv.vI || 0 !== gv && gv !== vv.pI ? (vv.vI = ev, vv.pI = gv, zv.dx = vv.fn * hv, zv.dy = vv.kY * hv, !0) : (vv.vI = vv.pI = 0, vv.fn = zv.dx / hv, vv.kY = zv.dy / hv, !1)
-             }(this.YL, zv, Pv);
-             Sv && this.pM(Sv, Nv ? Uh : Vh, zv.dx, zv.dy)
-           } else qh(this.YL), Sv && this.pM(Sv, Kh, 0, 0);
+                 KT = Zl(kT.dx, lT, TT.vx, MT),
+                 OT = Zl(kT.dy, lT, TT.vy, MT);
+               return 0 !== KT && KT !== TT.pE || 0 !== OT && OT !== TT.qE ? (TT.pE = KT, TT.qE = OT, kT.dx = TT.vx * lT, kT.dy = TT.vy * lT, !0) : (TT.pE = TT.qE = 0, TT.vx = kT.dx / lT, TT.vy = kT.dy / lT, !1)
+             }(this.kR, kT, cT);
+             MT && this.WU(MT, xT ? Hl : ol, kT.dx, kT.dy)
+           } else El(this.kR), MT && this.WU(MT, Jl, 0, 0);
```

#### 432. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4193-L4195` → after: `L4029-L4031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4029-L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4029-L4031) · [Before (L4193-L4195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4193-L4195)

```diff
-           Tv = zv.dx * this.bZ * dv * lv,
-           Wv = zv.dy * this.uZ * dv * lv;
-         this.RZ && (Tv = -Tv), this.xZ && (Wv = -Wv), pv && (Tv += gv.ND, Wv += gv.lD), (0 !== dv || pv) && (Wv += this.wL.bM(Wv));
+           AT = kT.dx * this.EX * fT * IT,
+           CT = kT.dy * this.BX * fT * IT;
+         this.Xu && (AT = -AT), this.Yu && (CT = -CT), yT && (AT += OT.Rm, CT += OT.Wm), (0 !== fT || yT) && (CT += this.gL.pU(CT));
```

#### 433. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4197` → after: `L4033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4033) · [Before (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4197)

```diff
-         this.heading += Tv < 0 ? Tv + wv : Tv, this.heading > wv && (this.heading -= wv), (0 !== ev || pv) && (this.heading = ((this.heading + ev) % wv + wv) % wv), this.pitch = Math.max(-Ne, Math.min(Ne, this.pitch + Wv)), null !== this.uL && (this.heading = this.uL), null !== t … [truncated]
+         this.heading += AT < 0 ? AT + jT : AT, this.heading > jT && (this.heading -= jT), (0 !== KT || yT) && (this.heading = ((this.heading + KT) % jT + jT) % jT), this.pitch = Math.max(-IK, Math.min(IK, this.pitch + CT)), null !== this.jR && (this.heading = this.jR), null !== t … [truncated]
```

#### 434. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4200-L4201` → after: `L4036-L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4036-L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4036-L4037) · [Before (L4200-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4200-L4201)

```diff
-         cv().set(this.fL, 0, 0, 1);
-         var vv = this.fL,
+         QT().set(this.qL, 0, 0, 1);
+         var TT = this.qL,
```

#### 435. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4203` → after: `L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4039) · [Before (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4203)

```diff
-         kS(this, this.heading, this.pitch, 0 !== this.dL, this.cL), cv().pg(vv, vv, zv, this.pitch), cv().ep(vv, vv, zv, this.heading)
+         qM(this, this.heading, this.pitch, 0 !== this.dL, this.YL), QT().AO(TT, TT, kT, this.pitch), QT().Of(TT, TT, kT, this.heading)
```

#### 436. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4209` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4045) · [Before (L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4209)

```diff
-           gv = this.vW.bloxd.jH(this.vW.sV),
+           OT = this.cC.bloxd.pR(this.cC.jH),
```

#### 437. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4212` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4048) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4212)

```diff
-         return 0 === dv ? (cv().copy(Sv, vv), 0) : (cv().uv(Sv, Sv, ev, -dv * gv), dv)
+         return 0 === fT ? (QT().copy(MT, TT), 0) : (QT().ek(MT, MT, KT, -fT * OT), fT)
```

#### 438. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4215` → after: `L4051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4051) · [Before (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4215)

```diff
-         return cv().Re(pe, zv), ES(this, vv, pe, Pv)
+         return QT().rc(fK, kT), WM(this, TT, fK, cT)
```

#### 439. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4218-L4219` → after: `L4054-L4055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4054-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4054-L4055) · [Before (L4218-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4218-L4219)

```diff
-         const zv = (this.gL - this.dL) * this.sA;
-         Math.abs(zv) < 1e-4 ? this.dL = this.gL : this.dL += zv, 0 !== zv && this.lL && this.lL(this.dL, this.dL - zv), this.wL.update(vv)
+         const kT = (this.uL - this.dL) * this.lL;
+         Math.abs(kT) < 1e-4 ? this.dL = this.uL : this.dL += kT, 0 !== kT && this.RL && this.RL(this.dL, this.dL - kT), this.gL.update(TT)
```

#### 440. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4222` → after: `L4058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4058) · [Before (L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4222)

```diff
-         var vv = bS(JS(this), this.vW.bloxd.jH(this.vW.sV));
+         var TT = pM(BM(this), this.cC.bloxd.pR(this.cC.jH));
```

#### 441. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4224` → after: `L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4060) · [Before (L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4224)

```diff
-         var zv = this.vW.Ma.Wy().Gy;
+         var kT = this.cC.gv.hY().aY;
```

#### 442. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4235-L4237` → after: `L4071-L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4071-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4071-L4073) · [Before (L4235-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4235-L4237)

```diff
-       const zv = vv.vW.bloxd.jH(vv.vW.sV);
-       var Pv = Math.max(vv.gL, vv.dL) * zv + .5;
-       return ES(vv, vv.sH(), vv.uH(), Pv)
+       const kT = TT.cC.bloxd.pR(TT.cC.jH);
+       var cT = Math.max(TT.uL, TT.dL) * kT + .5;
+       return WM(TT, TT.oR(), TT.PU(), cT)
```

#### 443. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4242-L4243` → after: `L4078-L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4078-L4079) · [Before (L4242-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4242-L4243)

```diff
-         var Sv = vv.vW.iW;
-         Pe = new(QS())([0, 0, 0], cv().clone(Se)), he = (zv, Pv, hv) => vv.vW.oT.GW(zv + Sv[0], Pv + Sv[1], hv + Sv[2]), cv().scale(Se, Se, -.5)
+         var MT = TT.cC.QC;
+         lK = new(uM())([0, 0, 0], QT().clone(KK)), MK = (kT, cT, lT) => TT.cC.pA.DC(kT + MT[0], cT + MT[1], lT + MT[2]), QT().scale(KK, KK, -.5)
```

#### 444. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4260` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4096) · [Before (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4260)

```diff
-       return cv().set(Sv, 0, 0, 1), cv().pg(Sv, Sv, ev, vv.Xs[0]), cv().ep(Sv, Sv, ev, vv.Xs[1]), cv().gp(Sv, Sv, ev, vv.Xs[2]), cv().pg(Sv, Sv, ev, Pv), cv().ep(Sv, Sv, ev, zv), hv && (cv().pg(Sv, Sv, ev, vv.cameraRotationOffset[0]), cv().ep(Sv, Sv, ev, vv.cameraRotationOffset[1 … [truncated]
+       return QT().set(MT, 0, 0, 1), QT().AO(MT, MT, KT, TT.Bt[0]), QT().Of(MT, MT, KT, TT.Bt[1]), QT().nf(MT, MT, KT, TT.Bt[2]), QT().AO(MT, MT, KT, cT), QT().Of(MT, MT, KT, kT), lT && (QT().AO(MT, MT, KT, TT.cameraRotationOffset[0]), QT().Of(MT, MT, KT, TT.cameraRotationOffset[1 … [truncated]
```

#### 445. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4264-L4266` → after: `L4100-L4102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4100-L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4100-L4102) · [Before (L4264-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4264-L4266)

```diff
-       Pe.setPosition(vv.mH()), Pe.translate(Se);
-       var zv = Math.max(vv.targetY, vv.vW.Ma.Wy().Gy[1]) + .5,
-         Pv = vv.UH();
+       lK.setPosition(TT.gR()), lK.translate(KK);
+       var kT = Math.max(TT.targetY, TT.cC.gv.hY().aY[1]) + .5,
+         cT = TT.vU();
```

#### 446. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4271-L4275` → after: `L4107-L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4107-L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4107-L4111) · [Before (L4271-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4271-L4275)

```diff
-       const zv = vv.mH(),
-         Pv = (0, LS.b)(vv.heading, vv.pitch - Math.PI / 2);
-       cv().uv(zv, zv, Pv, vv.vW.Ma.Wy().Gy[1]), Pe.setPosition(zv), Pe.translate(Se);
-       var hv = Math.max(vv.targetX, vv.vW.Ma.Wy().Gy[0]) + .5;
-       const Sv = (0, LS.b)(vv.heading + Math.PI / 2, 0);
+       const kT = TT.gR(),
+         cT = (0, LM.c)(TT.heading, TT.pitch - Math.PI / 2);
+       QT().ek(kT, kT, cT, TT.cC.gv.hY().aY[1]), lK.setPosition(kT), lK.translate(KK);
+       var lT = Math.max(TT.targetX, TT.cC.gv.hY().aY[0]) + .5;
+       const MT = (0, LM.c)(TT.heading + Math.PI / 2, 0);
```

#### 447. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4280-L4281` → after: `L4116-L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4116-L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4116-L4117) · [Before (L4280-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4280-L4281)

```diff
-       var zv = vv.vW.physics?.wasm;
-       return zv ? zv.Zx(Pe, ee, ze) : ze()
+       var kT = TT.cC.physics?.wasm;
+       return kT ? kT.HV(lK, OK, cK) : cK()
```

#### 448. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4287` → after: `L4123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4123) · [Before (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4287)

```diff
-     var Pe, he, Se = cv().dv(.2, .2, .2),
+     var lK, MK, KK = QT().ck(.2, .2, .2),
```

#### 449. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4295` → after: `L4131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4131) · [Before (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4295)

```diff
-         this.jy = vv, this.Fy = 0, this.Uy = 0, this.Iy = 0, this.Qy = 0, this.Ay = performance.now(), this.zB = performance.now(), this.lB = 0, this.YB = 0
+         this.FY = TT, this.rY = 0, this.bY = 0, this.JY = 0, this.VY = 0, this.EY = performance.now(), this.ZY = performance.now(), this.RY = 0, this.pY = 0
```

#### 450. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4298-L4300` → after: `L4134-L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4134-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4134-L4136) · [Before (L4298-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4298-L4300)

```diff
-         const zv = this.Uy - this.Iy,
-           Pv = this.jy.pitch + Ne;
-         this.Fy = Math.min(this.Fy + vv, zv + Pv), this.Ay = performance.now()
+         const kT = this.bY - this.JY,
+           cT = this.FY.pitch + IK;
+         this.rY = Math.min(this.rY + TT, kT + cT), this.EY = performance.now()
```

#### 451. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4303` → after: `L4139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4139) · [Before (L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4303)

```diff
-         this.Qy = vv
+         this.VY = TT
```

#### 452. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4306` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4142) · [Before (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4306)

```diff
-         this.Fy = 0, this.Uy = 0, this.Iy = 0, this.lB = 0, this.YB = 0
+         this.rY = 0, this.bY = 0, this.JY = 0, this.RY = 0, this.pY = 0
```

#### 453. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4309-L4313` → after: `L4145-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4145-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4145-L4149) · [Before (L4309-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4309-L4313)

```diff
-         this.Iy > 0 && (this.YB += this.Iy), (this.Fy > 0 || this.Uy > 0) && vv > 0 && (this.lB += vv);
-         let zv = this.Iy;
-         this.Iy = 0;
-         if (zv < 0 && this.YB > 0 && this.lB > 0) {
-           zv *= 1 - Math.min(1, this.lB / this.YB)
+         this.JY > 0 && (this.pY += this.JY), (this.rY > 0 || this.bY > 0) && TT > 0 && (this.RY += TT);
+         let kT = this.JY;
+         this.JY = 0;
+         if (kT < 0 && this.pY > 0 && this.RY > 0) {
+           kT *= 1 - Math.min(1, this.RY / this.pY)
```

#### 454. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4319-L4323` → after: `L4155-L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4155-L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4155-L4159) · [Before (L4319-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4319-L4323)

```diff
-           Pv = Math.min(zv - this.Ay, 75);
-         this.Fy = Math.max(0, this.Fy - this.Qy * Pv * vv);
-         const hv = Math.min(1, .009 * (zv - this.zB)),
-           Sv = (this.Fy - this.Uy) * hv;
-         Math.abs(Sv) < 1e-6 ? this.Uy = this.Fy : (this.Iy += Sv, this.Uy += Sv), 0 === this.Fy && Math.abs(this.Uy) < 1e-6 && (this.lB = 0, this.YB = 0), this.zB = zv
+           cT = Math.min(kT - this.EY, 75);
+         this.rY = Math.max(0, this.rY - this.VY * cT * TT);
+         const lT = Math.min(1, .009 * (kT - this.ZY)),
+           MT = (this.rY - this.bY) * lT;
+         Math.abs(MT) < 1e-6 ? this.bY = this.rY : (this.JY += MT, this.bY += MT), 0 === this.rY && Math.abs(this.bY) < 1e-6 && (this.RY = 0, this.pY = 0), this.ZY = kT
```

#### 455. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4326` → after: `L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4162) · [Before (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4326)

```diff
-     var Te = Pv(37075),
+     var CK = cT(37429),
```

#### 456. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4328` → after: `L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4164) · [Before (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4328)

```diff
-         qB: ""
+         lB: ""
```

#### 457. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4332` → after: `L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4168) · [Before (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4332)

```diff
-         zv = Object.assign({}, We, zv), this.vW = vv, this.JB = zv.qB;
+         kT = Object.assign({}, jK, kT), this.cC = TT, this.zB = kT.lB;
```

#### 458. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4349` → after: `L4185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4185) · [Before (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4349)

```diff
-         this.Ea = [0, 0, 0, 0, 0, 0], this.xR = 0;
+         this.Wv = [0, 0, 0, 0, 0, 0], this.tV = 0;
```

#### 459. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4353-L4354` → after: `L4189-L4190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4189-L4190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4189-L4190) · [Before (L4353-L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4353-L4354)

```diff
-         this.wq = function(vv, zv) {
-           var Pv = new Ce(zv && zv.zw),
+         this.sV = function(TT, kT) {
+           var cT = new NK(kT && kT.lj),
```

#### 460. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4357-L4358` → after: `L4193-L4194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4193-L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4193-L4194) · [Before (L4357-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4357-L4358)

```diff
-           for (; vv > Sv.length;) this.wq(Sv.length, {});
-           this.xR++, Sv[vv] = !!Gv.solid, ev[vv] = !!Gv.solid && (Gv.SC ?? !0), gv[vv] = Gv.SC ?? null, pv[vv] = !!Gv.opaque, dv[vv] = !!Gv.zw, Nv[vv] = !!Gv.dJ, Tv[vv] = Gv.dJ || null;
+           for (; TT > MT.length;) this.sV(MT.length, {});
+           this.tV++, MT[TT] = !!ST.solid, KT[TT] = !!ST.solid && (ST.kh ?? !0), OT[TT] = ST.kh ?? null, yT[TT] = !!ST.opaque, fT[TT] = !!ST.lj, xT[TT] = !!ST.cW, AT[TT] = ST.cW || null;
```

#### 461. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4368-L4371` → after: `L4204-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4204-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4204-L4207) · [Before (L4368-L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4368-L4371)

```diff
-           for (var fv = 0; fv < 6; ++fv) this.Ea[6 * vv + fv] = ae(this, hv, mv[fv], !0);
-           lv[vv] = {}, dv[vv] && (lv[vv].aW = Gv.aW, lv[vv].NJ = Gv.NJ);
-           var Yv = Gv.onLoad || Gv.aJ || Gv.iJ || Gv.GJ || Gv.mJ;
-           Wv[vv] = Yv ? new se(Gv) : null, av[vv] = Gv.sa?.some((vv => vv >= 1)) ? Gv.sa.map((vv => Math.max(vv, 0))) : null, sv[vv] = (Gv.eC ?? 0) >= 1 ? Gv.eC : null, pv[vv] ? Cv[vv] = 15 : (Gv.Ca ?? 0) >= 1 ? Cv[vv] = Gv.Ca : Cv[vv] = dv[vv] ? 3 : 1, iv[vv] = Gv.bD | (pv[vv] ? … [truncated]
+           for (var FT = 0; FT < 6; ++FT) this.Wv[6 * TT + FT] = tK(this, lT, DT[FT], !0);
+           IT[TT] = {}, fT[TT] && (IT[TT].hC = ST.hC, IT[TT].OW = ST.OW);
+           var PT = ST.onLoad || ST.fW || ST.jW || ST.vW || ST.DW;
+           CT[TT] = PT ? new hK(ST) : null, vT[TT] = ST.tv?.some((TT => TT >= 1)) ? ST.tv.map((TT => Math.max(TT, 0))) : null, tT[TT] = (ST.Mh ?? 0) >= 1 ? ST.Mh : null, yT[TT] ? hT[TT] = 15 : (ST.hv ?? 0) >= 1 ? hT[TT] = ST.hv : hT[TT] = fT[TT] ? 3 : 1, NT[TT] = ST.vJ | (yT[TT] ? … [truncated]
```

#### 462. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4374` → after: `L4210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4210) · [Before (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4374)

```diff
-         }, this.OJ = function(vv, zv) {
+         }, this.FW = function(TT, kT) {
```

#### 463. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4379` → after: `L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4215) · [Before (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4379)

```diff
-           var gv = (Sv.uB ?? []).map((vv => this.JB + vv)),
+           var OT = (MT.uB ?? []).map((TT => this.zB + TT)),
```

#### 464. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4382` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4218) · [Before (L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4382)

```diff
-           4 === dv.length && (pv = dv.pop()), !0 === Sv.KJ ? Gv[ev] = dv : Gv[ev] = null, mv[ev] = Sv.PJ, jv[ev] = {
+           4 === fT.length && (yT = fT.pop()), !0 === MT.rW ? ST[KT] = fT : ST[KT] = null, DT[KT] = MT.YB, aT[KT] = {
```

#### 465. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4386-L4391` → after: `L4222-L4227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4222-L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4222-L4227) · [Before (L4386-L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4386-L4391)

```diff
-             vJ: !!Sv.vJ,
-             PJ: Sv.PJ,
-             Ss: Sv.VJ,
-             gC: Sv.gC,
-             eJ: Sv.eJ,
-             gJ: Sv.gJ ?? null
+             XB: !!MT.XB,
+             YB: MT.YB,
+             Mt: MT.zW,
+             Kh: MT.Kh,
+             nB: MT.nB,
+             qB: MT.qB ?? null
```

#### 466. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4393-L4395` → after: `L4229-L4231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4229-L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4229-L4231) · [Before (L4393-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4393-L4395)

```diff
-           const Nv = Pv.xJ(ev);
-           return Sv.PJ >= 0 && Sv.vJ && (0, Te.l)(Pv, ev, Pv.na(Nv)), ev
-         }, this.eZ = function(vv) {
+           const xT = cT.oW(KT);
+           return MT.YB >= 0 && MT.XB && (0, CK.o)(cT, KT, cT.wv(xT)), KT
+         }, this.iZ = function(TT) {
```

#### 467. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4397` → after: `L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4233) · [Before (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4397)

```diff
-         }, this.XW = function(vv) {
+         }, this.Tj = function(TT) {
```

#### 468. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4399` → after: `L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4235) · [Before (L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4399)

```diff
-         }, this.JR = function(vv) {
+         }, this.rV = function(TT) {
```

#### 469. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4401` → after: `L4237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4237) · [Before (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4401)

```diff
-         }, this.qJ = function(vv) {
+         }, this.EW = function(TT) {
```

#### 470. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4403` → after: `L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4239) · [Before (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4403)

```diff
-         }, this.QJ = function(vv) {
+         }, this.dW = function(TT) {
```

#### 471. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4405` → after: `L4241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4241) · [Before (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4405)

```diff
-         }, this.ZJ = function(vv) {
+         }, this.UW = function(TT) {
```

#### 472. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4407` → after: `L4243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4243) · [Before (L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4407)

```diff
-         }, this.LJ = function(vv) {
+         }, this.pW = function(TT) {
```

#### 473. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4409-L4411` → after: `L4245-L4247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4245-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4245-L4247) · [Before (L4409-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4409-L4411)

```diff
-         }, this.HJ = function(vv, zv) {
-           return this.Ea[6 * vv + zv]
-         }, this.hs = function(vv) {
+         }, this.iW = function(TT, kT) {
+           return this.Wv[6 * TT + kT]
+         }, this.lt = function(TT) {
```

#### 474. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4413` → after: `L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4249) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4413)

```diff
-         }, this.MJ = function() {
+         }, this.fn = function() {
```

#### 475. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4415-L4416` → after: `L4251-L4252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4251-L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4251-L4252) · [Before (L4415-L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4415-L4416)

```diff
-           return jv.some((zv => zv.uB.some((Pv => Pv === vv && zv.vJ))))
-         }, this.Pw = Sv, this.Ja = pv, this.uW = dv, this.Bx = Nv, this.yJ = Tv, this.Xx = Wv, this.Hx = wv, this.ba = Gv, this.oa = mv, this.Xa = av, this.ua = sv, this.zs = Cv, this.Ua = iv, this.bJ = cv
+           return aT.some((kT => kT.uB.some((cT => cT === TT && kT.XB))))
+         }, this.Mj = MT, this.Bv = yT, this.kj = fT, this.VV = xT, this.kp = AT, this.XV = CT, this.GV = jT, this.pv = ST, this.nv = DT, this.sv = vT, this.Tt = tT, this.kt = hT, this.ov = NT, this.Qp = QT
```

#### 476. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4423` → after: `L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4259) · [Before (L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4423)

```diff
-       return void 0 === Sv && hv && (Sv = vv.OJ(Pv, {})), Sv
+       return void 0 === MT && lT && (MT = TT.FW(cT, {})), MT
```

#### 477. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4427` → after: `L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4263) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4427)

```diff
-       this.onLoad = vv.onLoad || null, this.aJ = vv.aJ || null, this.iJ = vv.iJ || null, this.GJ = vv.GJ || null, this.mJ = vv.mJ || null
+       this.onLoad = TT.onLoad || null, this.fW = TT.fW || null, this.jW = TT.jW || null, this.vW = TT.vW || null, this.DW = TT.DW || null
```

#### 478. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4432` → after: `L4268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4268) · [Before (L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4432)

```diff
-       this.solid = !vv, this.SC = null, this.opaque = !vv, this.zw = !1, this.material = null, this.dJ = null, this.aW = 1, this.NJ = .5, this.onLoad = null, this.aJ = null, this.iJ = null, this.GJ = null, this.mJ = null, this.sa = null, this.eC = null, this.Ca = null, this.bD =  … [truncated]
+       this.solid = !TT, this.kh = null, this.opaque = !TT, this.lj = !1, this.material = null, this.cW = null, this.hC = 1, this.OW = .5, this.onLoad = null, this.fW = null, this.jW = null, this.vW = null, this.DW = null, this.tv = null, this.Mh = null, this.hv = null, this.vJ =  … [truncated]
```

#### 479. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4436` → after: `L4272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4272) · [Before (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4436)

```diff
-       this.color = null, this.KJ = !0, this.uB = [], this.vJ = !1, this.PJ = -1, this.eJ = null, this.gJ = null, this.VJ = null, this.gC = null
+       this.color = null, this.rW = !0, this.uB = [], this.XB = !1, this.YB = -1, this.nB = null, this.qB = null, this.zW = null, this.Kh = null
```

#### 480. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4438-L4441` → after: `L4274-L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4274-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4274-L4277) · [Before (L4438-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4438-L4441)

```diff
-     Pv(36983);
-     var ce = Pv(36892),
-       Ge = Pv(37366),
-       me = Pv(39035);
+     cT(37322);
+     var SK = cT(37242),
+       DK = cT(37695),
+       aK = cT(39349);
```

#### 481. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4444-L4446` → after: `L4280-L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4280-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4280-L4282) · [Before (L4444-L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4444-L4446)

```diff
-       this.vW = vv, this.mesh = zv;
-       var Pv = zv.ma();
-       this.TE = !0 === Pv.WE && !!vv.Bw, this.TE && (0, Ge.l)(zv), this.sE = Pv.OE?.(zv, this.TE ? Ye : Fe) ?? null, this.buffer = null, this.qE = null, this.QE = null, this.yE = vv.ns.yE, this.zD = !1, this.kE = null, this.XE = null, this.uE = 0, this.PC = null, this.Kr = !1, th … [truncated]
+       this.cC = TT, this.mesh = kT;
+       var cT = kT.Dv();
+       this.Xp = !0 === cT.lq && !!TT.Bj, this.Xp && (0, DK.l)(kT), this.Iq = cT.Aq?.(kT, this.Xp ? wK : PK) ?? null, this.buffer = null, this.hq = null, this.Qq = null, this.wq = TT.Ft.wq, this.Im = !1, this.mq = null, this.bq = null, this.zq = 0, this.qt = null, this.Jq = !1, th … [truncated]
```

#### 482. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4450-L4451` → after: `L4286-L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4286-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4286-L4287) · [Before (L4450-L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4450-L4451)

```diff
-           if (Pv.T_ && Array.isArray(Pv.T_))
-             for (var Sv = 0; Sv < Pv.T_.length; Sv++) Pv.T_[Sv] && hv.push(Pv.T_[Sv]);
+           if (cT.o4 && Array.isArray(cT.o4))
+             for (var MT = 0; MT < cT.o4.length; MT++) cT.o4[MT] && lT.push(cT.o4[MT]);
```

#### 483. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4457` → after: `L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4293) · [Before (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4457)

```diff
-         }(this.mesh, vv.Ma), this.vW.Ma.iK(this.mesh), this.vW.emit("addingTerrainMesh", this.mesh)
+         }(this.mesh, TT.gv), this.cC.gv.GJ(this.mesh), this.cC.emit("addingTerrainMesh", this.mesh)
```

#### 484. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4461-L4462` → after: `L4297-L4298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4297-L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4297-L4298) · [Before (L4461-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4461-L4462)

```diff
-       return (null === zv || zv.data.length < 2 * vv.uE) && (zv = {
-         data: new Uint32Array(Math.max(16, 4 * vv.uE)),
+       return (null === kT || kT.data.length < 2 * TT.zq) && (kT = {
+         data: new Uint32Array(Math.max(16, 4 * TT.zq)),
```

#### 485. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4464` → after: `L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4300) · [Before (L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4464)

```diff
-       }), zv.count = (0, me.J)(vv.kE, vv.XE, vv.uE, Pv, me.e, zv.data), zv
+       }), kT.count = (0, aK.L)(TT.mq, TT.bq, TT.zq, cT, aK.e, kT.data), kT
```

#### 486. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4467-L4468` → after: `L4303-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4303-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4303-L4304) · [Before (L4467-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4467-L4468)

```diff
-       this.ea || (this.yE.Lk.delete(this), (0, me.H)(this.mesh, null), this.zD && (0, me.C)(this.mesh, void 0), this.zD = !1, this.mesh.yX = 0, this.BX(0), this.vW.emit("removingTerrainMesh", this.mesh), this.vW.Ma.EX(this.mesh, !1), this.mesh = null, this.Fk = null, this.Yk = nu … [truncated]
-     }, je.prototype.Yu = function(vv, zv, Pv, hv, Sv, ev, gv) {
+       this.yv || (this.wq.M6.delete(this), (0, aK.K)(this.mesh, null), this.Im && (0, aK.D)(this.mesh, void 0), this.Im = !1, this.mesh.w6 = 0, this.Z6(0), this.cC.emit("removingTerrainMesh", this.mesh), this.cC.gv.R6(this.mesh, !1), this.mesh = null, this.Hs = null, this.Gs = nu … [truncated]
+     }, FK.prototype.K3 = function(TT, kT, cT, lT, MT, KT, OT) {
```

#### 487. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4470-L4472` → after: `L4306-L4308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4306-L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4306-L4308) · [Before (L4470-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4470-L4472)

```diff
-         if (vv.count < vv.GT) return;
-         var zv = Math.max(8, 2 * vv.GT);
-         vv.BX(zv)
+         if (TT.count < TT.DA) return;
+         var kT = Math.max(8, 2 * TT.DA);
+         TT.Z6(kT)
```

#### 488. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4475` → after: `L4311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4311) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4475)

```diff
-       this.Yk[this.count] = zv, this.Fk.set(zv, pv);
+       this.Gs[this.count] = kT, this.Hs.set(kT, yT);
```

#### 489. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4478-L4486` → after: `L4314-L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4314-L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4314-L4322) · [Before (L4478-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4478-L4486)

```diff
-       if (dv.set(ev.matrix, pv), dv[pv + 12] = Nv[0] + (vv.x - gv[0] + Pv), dv[pv + 13] = Nv[1] + (vv.y - gv[1] + hv), dv[pv + 14] = Nv[2] + (vv.z - gv[2] + Sv), this.zD) {
-         var lv = (0, me.p)(this.buffer, pv, this.bounds.min, this.bounds.max, vv.x - gv[0] + Pv, vv.y - gv[1] + hv, vv.z - gv[2] + Sv);
-         this.QE[this.count] = lv ? this.yE.kR(vv) : 0
-       }
-       this.count++, this.Da = !0
-     }, je.prototype.lE = function(vv, zv) {
-       return this.TE ? (zv | this.vW.kW.Ua[vv] << 16) >>> 0 : zv
-     }, je.prototype.ku = function(vv, zv) {
-       var Pv = this.Fk.get(zv);
+       if (fT.set(KT.matrix, yT), fT[yT + 12] = xT[0] + (TT.x - OT[0] + cT), fT[yT + 13] = xT[1] + (TT.y - OT[1] + lT), fT[yT + 14] = xT[2] + (TT.z - OT[2] + MT), this.Im) {
+         var IT = (0, aK.o)(this.buffer, yT, this.bounds.min, this.bounds.max, TT.x - OT[0] + cT, TT.y - OT[1] + lT, TT.z - OT[2] + MT);
+         this.Qq[this.count] = IT ? this.wq.bV(TT) : 0
+       }
+       this.count++, this.bv = !0
+     }, FK.prototype.zp = function(TT, kT) {
+       return this.Xp ? (kT | this.cC.sC.ov[TT] << 16) >>> 0 : kT
+     }, FK.prototype.o3 = function(TT, kT) {
+       var cT = this.Hs.get(kT);
```

#### 490. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4488` → after: `L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4324) · [Before (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4488)

```diff
-       this.Fk.delete(zv);
+       this.Hs.delete(kT);
```

#### 491. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4495-L4497` → after: `L4331-L4333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4331-L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4331-L4333) · [Before (L4495-L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4495-L4497)

```diff
-         }(this.buffer, ev, this.buffer, Pv), this.qE[hv] = this.qE[Sv], this.zD && (this.QE[hv] = this.QE[Sv]);
-         var gv = this.Yk[Sv];
-         this.Fk.set(gv, Pv), this.Yk[hv] = gv
+         }(this.buffer, KT, this.buffer, cT), this.hq[lT] = this.hq[MT], this.Im && (this.Qq[lT] = this.Qq[MT]);
+         var OT = this.Gs[MT];
+         this.Hs.set(OT, cT), this.Gs[lT] = OT
```

#### 492. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4499` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4335) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4499)

```diff
-       this.count--, this.Da = !0,
+       this.count--, this.bv = !0,
```

#### 493. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4501-L4503` → after: `L4337-L4339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4337-L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4337-L4339) · [Before (L4501-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4501-L4503)

```diff
-           if (vv.count > .4 * vv.GT) return;
-           if (vv.GT < 100) return;
-           vv.BX(Math.round(vv.GT / 2)), vv.Yk.length = Math.min(vv.Yk.length, vv.GT)
+           if (TT.count > .4 * TT.DA) return;
+           if (TT.DA < 100) return;
+           TT.Z6(Math.round(TT.DA / 2)), TT.Gs.length = Math.min(TT.Gs.length, TT.DA)
```

#### 494. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4505` → after: `L4341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4341) · [Before (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4505)

```diff
-     }, je.prototype.Xu = function() {
+     }, FK.prototype.X3 = function() {
```

#### 495. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4507-L4509` → after: `L4343-L4345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4343-L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4343-L4345) · [Before (L4507-L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4507-L4509)

```diff
-       this.Da ? (this.zD && (8 * Re(vv = this) > Ke.length && (function(vv) {
-         for (var zv = vv.count, Pv = vv.QE, hv = 0; hv < zv; hv++) ne[Pv[hv]]++;
-         Ve = vv.yE.keys, Ke.sort(Ue), Ve = null;
+       this.bv ? (this.Im && (8 * eK(TT = this) > JK.length && (function(TT) {
+         for (var kT = TT.count, cT = TT.Qq, lT = 0; lT < kT; lT++) mK[cT[lT]]++;
+         oK = TT.wq.keys, JK.sort(HK), oK = null;
```

#### 496. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4514` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4350) · [Before (L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4514)

```diff
-         for (var pv = vv.buffer.slice(0, zv << 4), dv = vv.qE.slice(0, zv), Nv = Pv.slice(0, zv), lv = vv.Yk.slice(0, zv), Tv = 0; Tv < zv; Tv++) {
+         for (var yT = TT.buffer.slice(0, kT << 4), fT = TT.hq.slice(0, kT), xT = cT.slice(0, kT), IT = TT.Gs.slice(0, kT), AT = 0; AT < kT; AT++) {
```

#### 497. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4518` → after: `L4354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4354) · [Before (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4518)

```diff
-             vv.qE[Wv] = dv[Tv], Pv[Wv] = Nv[Tv];
+             TT.hq[CT] = fT[AT], cT[CT] = xT[AT];
```

#### 498. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4520` → after: `L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4356) · [Before (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4520)

```diff
-             vv.Yk[Wv] = Cv, vv.Fk.set(Cv, av)
+             TT.Gs[CT] = hT, TT.Hs.set(hT, vT)
```

#### 499. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4524-L4530` → after: `L4360-L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4360-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4360-L4366) · [Before (L4524-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4524-L4530)

```diff
-       }(vv), Re(vv)), (0, me.H)(this.mesh, null), this.Kr = !1, null !== this.Vr && (this.Qr = this.Vr, this.Vr = null, (0, me.C)(this.mesh, null)), this.Hr = !0), this.mesh.yX = this.count, this.sE ? (this.sE.Z2(this.count), this.sE.v_()) : (this.mesh.P_("matrix"), this.mesh.P_( … [truncated]
-     }, je.prototype.h_ = function(vv, zv, Pv) {
-       if (0 !== this.uE && ((0, me.n)() ? (this.PC = fe(this, this.PC, vv), this.Kr = this.PC.count >= 0, (0, me.H)(this.mesh, this.Kr ? this.PC : null)) : this.Kr && (this.Kr = !1, (0, me.H)(this.mesh, null)), Pv || this.Hr)) {
-         this.Hr = !1;
-         var hv = fe(this, this.Qr, zv),
-           Sv = this.Vr;
-         hv.count < 0 ? (this.Qr = hv, null !== Sv && (this.Vr = null, (0, me.C)(this.mesh, null))) : null !== Sv && function(vv, zv) {
+       }(TT), eK(TT)), (0, aK.K)(this.mesh, null), this.Jq = !1, null !== this.oq && (this.uq = this.oq, this.oq = null, (0, aK.D)(this.mesh, null)), this.Yq = !0), this.mesh.w6 = this.count, this.Iq ? (this.Iq.U3(this.count), this.Iq.B3()) : (this.mesh.Q0("matrix"), this.mesh.Q0( … [truncated]
+     }, FK.prototype.N7 = function(TT, kT, cT) {
+       if (0 !== this.zq && ((0, aK.l)() ? (this.qt = rK(this, this.qt, TT), this.Jq = this.qt.count >= 0, (0, aK.K)(this.mesh, this.Jq ? this.qt : null)) : this.Jq && (this.Jq = !1, (0, aK.K)(this.mesh, null)), cT || this.Yq)) {
+         this.Yq = !1;
+         var lT = rK(this, this.uq, kT),
+           MT = this.oq;
+         lT.count < 0 ? (this.uq = lT, null !== MT && (this.oq = null, (0, aK.D)(this.mesh, null))) : null !== MT && function(TT, kT) {
```

#### 500. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4535` → after: `L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4371) · [Before (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4535)

```diff
-         }(Sv, hv) ? this.Qr = hv : (this.Qr = Sv, this.Vr = hv, (0, me.C)(this.mesh, hv))
+         }(MT, lT) ? this.uq = lT : (this.uq = MT, this.oq = lT, (0, aK.D)(this.mesh, lT))
```

#### 501. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4537` → after: `L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4373) · [Before (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4537)

```diff
-     }, je.prototype.BX = function() {
+     }, FK.prototype.Z6 = function() {
```

#### 502. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4539` → after: `L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4375) · [Before (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4539)

```diff
-       if (this.GT = vv, 0 === vv) this.buffer = null, this.qE = null, this.QE = null;
+       if (this.DA = TT, 0 === TT) this.buffer = null, this.hq = null, this.Qq = null;
```

#### 503. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4541` → after: `L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4377) · [Before (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4541)

```diff
-         var zv = new Float32Array(16 * this.GT);
+         var kT = new Float32Array(16 * this.DA);
```

#### 504. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4545-L4548` → after: `L4381-L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4381-L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4381-L4384) · [Before (L4545-L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4545-L4548)

```diff
-         var Sv = this.TE ? new Uint32Array(this.GT) : new Float32Array(this.GT);
-         if (this.qE) {
-           var ev = Math.min(this.qE.length, Sv.length);
-           for (hv = 0; hv < ev; hv++) Sv[hv] = this.qE[hv]
+         var MT = this.Xp ? new Uint32Array(this.DA) : new Float32Array(this.DA);
+         if (this.hq) {
+           var KT = Math.min(this.hq.length, MT.length);
+           for (lT = 0; lT < KT; lT++) MT[lT] = this.hq[lT]
```

#### 505. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4550-L4552` → after: `L4386-L4388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4386-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4386-L4388) · [Before (L4550-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4550-L4552)

```diff
-         if (this.qE = Sv, this.zD) {
-           var gv = new Uint16Array(this.GT);
-           this.QE && gv.set(this.QE.subarray(0, Math.min(this.QE.length, gv.length))), this.QE = gv
+         if (this.hq = MT, this.Im) {
+           var OT = new Uint16Array(this.DA);
+           this.Qq && OT.set(this.Qq.subarray(0, Math.min(this.Qq.length, OT.length))), this.Qq = OT
```

#### 506. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4556` → after: `L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4392) · [Before (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4556)

```diff
-       this.sE && 0 === vv ? this.sE.release() : this.sE ? this.sE.attach(this.buffer, this.qE) : (this.mesh.N_("matrix", this.buffer, 16, pv), this.mesh.N_("aPackedLightLevels", this.qE, 1, pv)), this.Xu()
+       this.Iq && 0 === TT ? this.Iq.release() : this.Iq ? this.Iq.attach(this.buffer, this.hq) : (this.mesh.O4("matrix", this.buffer, 16, yT), this.mesh.O4("aPackedLightLevels", this.hq, 1, yT)), this.X3()
```

#### 507. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4569-L4570` → after: `L4405-L4406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4405-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4405-L4406) · [Before (L4569-L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4569-L4570)

```diff
-       ne = new Uint32Array(me.d),
-       Oe = new Uint32Array(me.d),
+       mK = new Uint32Array(aK.b),
+       bK = new Uint32Array(aK.b),
```

#### 508. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4581-L4588` → after: `L4417-L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4417-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4417-L4424) · [Before (L4581-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4581-L4588)

```diff
-         Pv = vv.QE,
-         hv = vv.yE.keys;
-       if (null === vv.kE || vv.kE.length < zv) {
-         var Sv = Math.max(8, vv.GT);
-         vv.kE = new Uint16Array(Sv), vv.XE = new Uint32Array(Sv)
-       }
-       var ev = vv.kE,
-         gv = vv.XE,
+         cT = TT.Qq,
+         lT = TT.wq.keys;
+       if (null === TT.mq || TT.mq.length < kT) {
+         var MT = Math.max(8, TT.DA);
+         TT.mq = new Uint16Array(MT), TT.bq = new Uint32Array(MT)
+       }
+       var KT = TT.mq,
+         OT = TT.bq,
```

#### 509. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4595` → after: `L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4431) · [Before (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4595)

```diff
-       return vv.uE = dv, Nv
+       return TT.zq = fT, xT
```

#### 510. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4598` → after: `L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4434) · [Before (L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4598)

```diff
-     var te = Pv(37089),
+     var VK = cT(37449),
```

#### 511. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4602` → after: `L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4438) · [Before (L4602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4602)

```diff
-         Tu: null
+         i6: null
```

#### 512. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4606` → after: `L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4442) · [Before (L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4606)

```diff
-       this.QG = (0, Gv.s)(vv.Ma, "objectMeshRoot");
+       this.mN = (0, ST.u)(TT.gv, "objectMeshRoot");
```

#### 513. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4610-L4612` → after: `L4446-L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4446-L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4446-L4448) · [Before (L4610-L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4610-L4612)

```diff
-           position: new bv.fa,
-           rotation: new bv.fa,
-           pp: new bv.fa
+           position: new nT.Fv,
+           rotation: new nT.Fv,
+           GA: new nT.Fv
```

#### 514. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4615` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4451) · [Before (L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4615)

```diff
-       this.Y_ = [], this.yE = new me.i;
+       this.o5 = [], this.wq = new aK.h;
```

#### 515. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4628` → after: `L4464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4464) · [Before (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4628)

```diff
-           var Pv = vv.kW.yJ[zv];
+           var cT = TT.sC.kp[kT];
```

#### 516. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4638` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4474) · [Before (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4638)

```diff
-             if (!(Pv = gv.get(hv))) return dv.has(zv) || (dv.add(zv), vv.Ws(`Building the model of block ${zv} failed`, pv.get(hv))), null
+             if (!(cT = OT.get(lT))) return fT.has(kT) || (fT.add(kT), TT.jt(`Building the model of block ${kT} failed`, yT.get(lT))), null
```

#### 517. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4644` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4480) · [Before (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4644)

```diff
-           return this.Y_.includes(Pv) || this.Y_.push(Pv), Pv.metadata || (Pv.metadata = {}), Pv.metadata[Fh.p] = !0, ev[zv] = new je(vv, Pv)
+           return this.o5.includes(cT) || this.o5.push(cT), cT.metadata || (cT.metadata = {}), cT.metadata[Pl.q] = !0, KT[kT] = new FK(TT, cT)
```

#### 518. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4659-L4660` → after: `L4495-L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4495-L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4495-L4496) · [Before (L4659-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4659-L4660)

```diff
-             if (dv.U_ && dv.get(wv, av, sv) === Wv) try {
-               this.R_(dv, Wv, wv, av, sv)
+             if (fT.Y5 && fT.get(jT, vT, tT) === CT) try {
+               this.B5(fT, CT, jT, vT, tT)
```

#### 519. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4664` → after: `L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4500) · [Before (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4664)

```diff
-           pv && vv.Ws("Placing the blocks of a built model failed", pv)
+           yT && TT.jt("Placing the blocks of a built model failed", yT)
```

#### 520. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4666-L4667` → after: `L4502-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4502-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4502-L4503) · [Before (L4666-L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4666-L4667)

```diff
-       this.Ds = function(vv) {
-         vv.U_ = new Map;
+       this.Pt = function(TT) {
+         TT.Y5 = new Map;
```

#### 521. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4669-L4670` → after: `L4505-L4506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4505-L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4505-L4506) · [Before (L4669-L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4669-L4670)

```diff
-         vv.x_ = sv.length > 0 ? sv.pop() : zv * zv * zv * Cv++
-       }, this.R_ = function(Pv, ev, gv, pv, dv) {
+         TT.i5 = tT.length > 0 ? tT.pop() : kT * kT * kT * hT++
+       }, this.B5 = function(cT, KT, OT, yT, fT) {
```

#### 522. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4673-L4674` → after: `L4509-L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4509-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4509-L4510) · [Before (L4673-L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4673-L4674)

```diff
-           Wv = Pv.x_ + Tv,
-           av = Pv.U_.get(Tv) || 0;
+           CT = cT.i5 + AT,
+           vT = cT.Y5.get(AT) || 0;
```

#### 523. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4676` → after: `L4512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4512) · [Before (L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4676)

```diff
-           if (av > 0) wv(av).ku(Pv, Wv);
+           if (vT > 0) jT(vT).o3(cT, CT);
```

#### 524. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4679-L4682` → after: `L4515-L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4515-L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4515-L4518) · [Before (L4679-L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4679-L4682)

```diff
-             if (!sv) return Nv.get(vv.kW.yJ[ev])?.push([Pv, ev, gv, pv, dv]), void Pv.U_.delete(Tv);
-             sv.Yu(Pv, Wv, gv, pv, dv, (zv => {
-               var Pv = vv.kW.Xx[zv],
-                 ev = Pv && Pv.mJ || null,
+             if (!tT) return xT.get(TT.sC.kp[KT])?.push([cT, KT, OT, yT, fT]), void cT.Y5.delete(AT);
+             tT.K3(cT, CT, OT, yT, fT, (kT => {
+               var cT = TT.sC.XV[kT],
+                 KT = cT && cT.DW || null,
```

#### 525. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4684-L4685` → after: `L4520-L4521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4520-L4521) · [Before (L4684-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4684-L4685)

```diff
-               if (gv && gv.Tu === ev) return gv;
-               for (var pv = vv.kW.Xx.length; Sv.length < pv;) Sv.push(null);
+               if (OT && OT.i6 === KT) return OT;
+               for (var yT = TT.sC.XV.length; MT.length < yT;) MT.push(null);
```

#### 526. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4687` → after: `L4523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4523) · [Before (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4687)

```diff
-               hv.position.f_(.5, .5, .5), hv.pp.Dk(1), hv.rotation.Dk(0), ev(hv, zv);
+               lT.position.I5(.5, .5, .5), lT.GA.Xs(1), lT.rotation.Xs(0), KT(lT, kT);
```

#### 527. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4690` → after: `L4526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4526) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4690)

```diff
-                 matrix: Float32Array.from((0, te.g)(hv)),
+                 matrix: Float32Array.from((0, VK.d)(lT)),
```

#### 528. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4692` → after: `L4528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4528) · [Before (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4692)

```diff
-                 Tu: ev
+                 i6: KT
```

#### 529. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4695-L4696` → after: `L4531-L4532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4531-L4532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4531-L4532) · [Before (L4695-L4696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4695-L4696)

```diff
-             var Cv = sv.Fk.get(Wv);
-             Pv.uw ? sv.qE[Cv >> 4] = sv.lE(ev, (0, ce.w)(Pv.uw, Pv.Pa, Tv)) : sv.qE[Cv >> 4] = sv.lE(ev, ce.i)
+             var hT = tT.Hs.get(CT);
+             cT.kv ? tT.hq[hT >> 4] = tT.zp(KT, (0, SK.z)(cT.kv, cT.Mv, AT)) : tT.hq[hT >> 4] = tT.zp(KT, SK.l)
```

#### 530. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4698` → after: `L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4534) · [Before (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4698)

```diff
-           av > 0 && !ev && Pv.U_.delete(Tv), ev > 0 && Pv.U_.set(Tv, ev)
+           vT > 0 && !KT && cT.Y5.delete(AT), KT > 0 && cT.Y5.set(AT, KT)
```

#### 531. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4700` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4536) · [Before (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4700)

```diff
-       }, this.q_ = function() {
+       }, this.E1 = function() {
```

#### 532. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4703-L4713` → after: `L4539-L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4539-L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4539-L4549) · [Before (L4703-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4703-L4713)

```diff
-           zv.Xu(), 0 === zv.count && zv.dispose(), zv.ea && delete ev[vv]
-         }
-         this.yE.uploaded(), Qe("rebuilt"), Qe("end")
-       }, this.Ia = function(vv) {
-         var zv = vv.x_;
-         for (var [hv, Sv] of vv.U_) wv(Sv).ku(vv, zv + hv);
-         sv.push(zv), vv.U_ = null, this.yE.release(vv), Pv = !0
-       }, this.MT = function() {
-         Pv && (this.q_(), Pv = !1)
-       }, this.Q_ = function(vv) {
-         for (var hv in zv[0] += vv[0], zv[1] += vv[1], zv[2] += vv[2], ev) ev[hv].Wk = !1;
+           kT.X3(), 0 === kT.count && kT.dispose(), kT.yv && delete KT[TT]
+         }
+         this.wq.uploaded(), uK("rebuilt"), uK("end")
+       }, this.Vv = function(TT) {
+         var kT = TT.i5;
+         for (var [lT, MT] of TT.Y5) jT(MT).o3(TT, kT + lT);
+         tT.push(kT), TT.Y5 = null, this.wq.release(TT), cT = !0
+       }, this.UA = function() {
+         cT && (this.E1(), cT = !1)
+       }, this.U1 = function(TT) {
+         for (var lT in kT[0] += TT[0], kT[1] += TT[1], kT[2] += TT[2], KT) KT[lT].Fs = !1;
```

#### 533. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4716` → after: `L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4552) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4716)

```diff
-           if (!gv.Wk) {
+           if (!OT.Fs) {
```

#### 534. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4721` → after: `L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4557) · [Before (L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4721)

```diff
-             gv.Wk = !0, gv.Da = !0
+             OT.Fs = !0, OT.bv = !0
```

#### 535. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4725-L4730` → after: `L4561-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4561-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4561-L4566) · [Before (L4725-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4725-L4730)

```diff
-       }, this.Os = function(vv) {
-         if (vv.U_) {
-           var zv = vv.uw,
-             hv = vv.Pa,
-             Sv = vv.x_;
-           for (var [gv, pv] of vv.U_) {
+       }, this.rt = function(TT) {
+         if (TT.Y5) {
+           var kT = TT.kv,
+             lT = TT.Mv,
+             MT = TT.i5;
+           for (var [OT, yT] of TT.Y5) {
```

#### 536. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4732-L4734` → after: `L4568-L4570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4568-L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4568-L4570) · [Before (L4732-L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4732-L4734)

```diff
-               Nv = dv.Fk.get(Sv + gv) >> 4,
-               lv = dv.lE(pv, zv ? (0, ce.w)(zv, hv, gv) : ce.i);
-             dv.qE[Nv] !== lv && (dv.qE[Nv] = lv, dv.zk = !0, Pv = !0)
+               xT = fT.Hs.get(MT + OT) >> 4,
+               IT = fT.zp(yT, kT ? (0, SK.z)(kT, lT, OT) : SK.l);
+             fT.hq[xT] !== IT && (fT.hq[xT] = IT, fT.Qs = !0, cT = !0)
```

#### 537. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4740-L4746` → after: `L4576-L4582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4576-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4576-L4582) · [Before (L4740-L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4740-L4746)

```diff
-       Ze = Pv(36997),
-       Ae = Pv(36900),
-       Le = Pv(37086);
-     var He = Pv(37334),
-       Me = Pv(6363),
-       ye = Pv(38288),
-       Be = Pv(38295);
+       XK = cT(37340),
+       dK = cT(37260),
+       LK = cT(37442);
+     var RK = cT(37676),
+       gK = cT(6633),
+       UK = cT(38583),
+       YK = cT(38589);
```

#### 538. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4753` → after: `L4589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4589) · [Before (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4753)

```diff
-         this.vW = vv, this.options = zv, this.mode = "off", this.defines = new Map(Me.d.map((vv => [vv, 0])))
+         this.cC = TT, this.options = kT, this.mode = "off", this.defines = new Map(gK.e.map((TT => [TT, 0])))
```

#### 539. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4762` → after: `L4598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4598) · [Before (L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4762)

```diff
-         return Me.d.some((vv => 0 !== this.defineFor(vv)))
+         return gK.e.some((TT => 0 !== this.defineFor(TT)))
```

#### 540. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4765` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4601) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4765)

```diff
-         return Me.d.some((vv => {
+         return gK.e.some((TT => {
```

#### 541. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4767` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4603) · [Before (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4767)

```diff
-           return !0 === (null === (zv = (0, ye.g)(this.defineFor(vv))) || void 0 === zv ? void 0 : zv.sceneDepth)
+           return !0 === (null === (kT = (0, UK.d)(this.defineFor(TT))) || void 0 === kT ? void 0 : kT.sceneDepth)
```

#### 542. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4773-L4774` → after: `L4609-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4609-L4610) · [Before (L4773-L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4773-L4774)

```diff
-         for (const Pv of Me.d) {
-           const hv = (0, ye.g)(this.defineFor(Pv));
+         for (const cT of gK.e) {
+           const lT = (0, UK.d)(this.defineFor(cT));
```

#### 543. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4784` → after: `L4620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4620) · [Before (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4784)

```diff
-         return !(!this.options.keepCircleShadows && null !== (vv = this.vW.Ma.ya) && void 0 !== vv && vv.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
+         return !(!this.options.keepCircleShadows && null !== (TT = this.cC.gv.Uv) && void 0 !== TT && TT.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
```

#### 544. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4787` → after: `L4623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4623) · [Before (L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4787)

```diff
-         return this.vW.Ma.Vs
+         return this.cC.gv.bt
```

#### 545. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4792-L4794` → after: `L4628-L4630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4628-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4628-L4630) · [Before (L4792-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4792-L4794)

```diff
-         for (const Pv of Me.d) {
-           const hv = (0, ye.j)(this.options.variants, vv, Pv),
-             Sv = hv ? (0, ye.l)(hv) : 0;
+         for (const cT of gK.e) {
+           const lT = (0, UK.h)(this.options.variants, TT, cT),
+             MT = lT ? (0, UK.i)(lT) : 0;
```

#### 546. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4801` → after: `L4637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4637) · [Before (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4801)

```diff
-         return null !== (zv = this.defines.get(vv)) && void 0 !== zv ? zv : 0
+         return null !== (kT = this.defines.get(TT)) && void 0 !== kT ? kT : 0
```

#### 547. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4807` → after: `L4643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4643) · [Before (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4807)

```diff
-         return this.vW.iW
+         return this.cC.QC
```

#### 548. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4811` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4647) · [Before (L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4811)

```diff
-         return null !== (vv = this.vW.Ma.y_) && void 0 !== vv ? vv : be
+         return null !== (TT = this.cC.gv.M_) && void 0 !== TT ? TT : pK
```

#### 549. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4814` → after: `L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4650) · [Before (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4814)

```diff
-         const vv = (0, Be.v)(this.y_());
+         const TT = (0, YK.k)(this.M_());
```

#### 550. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4821` → after: `L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4657) · [Before (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4821)

```diff
-           status: "ev"
+           status: "KT"
```

#### 551. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4824-L4825` → after: `L4660-L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4660-L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4660-L4661) · [Before (L4824-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4824-L4825)

```diff
-           Ma: Pv
-         } = this.vW, hv = null === (vv = Pv.ya) || void 0 === vv ? void 0 : vv.terrain;
+           gv: cT
+         } = this.cC, lT = null === (TT = cT.Uv) || void 0 === TT ? void 0 : TT.terrain;
```

#### 552. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4827` → after: `L4663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4663) · [Before (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4827)

```diff
-           materials: this.vW.B_.allMaterials.filter((vv => !(0, He.g)(vv))),
+           materials: this.cC.y_.allMaterials.filter((TT => !(0, RK.h)(TT))),
```

#### 553. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4829-L4830` → after: `L4665-L4666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4665-L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4665-L4666) · [Before (L4829-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4829-L4830)

```diff
-           lighting: Pv.Vs,
-           dirLightCount: (0, Ae.y)(Pv.model.view),
+           lighting: cT.bt,
+           dirLightCount: (0, dK.r)(cT.model.view),
```

#### 554. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4844-L4857` → after: `L4680-L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4680-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4680-L4693) · [Before (L4844-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4844-L4857)

```diff
-       J_: !1,
-       lG: 1.8,
-       pG: .6,
-       E_: [0, 10, 0],
-       WG: !1,
-       o_: !0,
-       ZD: 30,
-       xV: 0,
-       aG: 10,
-       yV: !0,
-       b_: !0,
-       JV: !1,
-       r_: !1,
-       k_: 25
+       f_: !1,
+       Iw: 1.8,
+       Ow: .6,
+       x_: [0, 10, 0],
+       Cw: !1,
+       A_: !0,
+       xJ: 30,
+       nH: 0,
+       mw: 10,
+       yG: !0,
+       j_: !0,
+       xG: !1,
+       v_: !1,
+       h_: 25
```

#### 555. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4864` → after: `L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4700) · [Before (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4864)

```diff
-           console.log(`noa-engine v${this.version}${zv}`)
+           console.log(`noa-engine v${this.version}${kT}`)
```

#### 556. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4866` → after: `L4702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4702) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4866)

```diff
-         this.Am = !1, this.Y5 = vv.k_, this.iW = [0, 0, 0], this.t5 = 0, this.I5 = 0, this.Z5 = "default", this.y5 = 1, this.container = new Oz(this, vv), this.oT = new Yh.d(this, vv);
+         this.FQ = !1, this.Q_ = TT.h_, this.QC = [0, 0, 0], this.S_ = 0, this.F_ = 0, this.r_ = "default", this.P_ = 1, this.container = new mk(this, TT), this.pA = new wl.d(this, TT);
```

#### 557. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4868` → after: `L4704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4704) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4868)

```diff
-           this.Ma = new Fh.e(this, vv, this.container.canvas)
+           this.gv = new Pl.e(this, TT, this.container.canvas)
```

#### 558. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4870-L4877` → after: `L4706-L4713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4706-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4706-L4713) · [Before (L4870-L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4870-L4877)

```diff
-           throw this.ZY(!0), this.container.Jm.vU = () => {}, gv
-         }
-         this.ZD = this.container.Jm.ZD, this.xV = this.container.Jm.xV, this.Bw = vv.Bw ? new re(this, vv.Bw) : null, this.B_ = new He.b(this), this.inputs = new Ah(this, vv, this.container.element), this.kW = new we(this, vv, this.B_), this.oT.o5 = vv.B5 ? sh.create(vv.B5.wasm,  … [truncated]
-           this.Ws(vv.message, vv)
-         })) : null, vv.B5 && (this.oT.Ha = Th.c.wasm(this.oT.O4, vv.B5.wasm, (vv => {
-           this.Ws(vv.message, vv)
-         })), this.oT.K4 = fh.create(vv.B5.wasm, this.kW, (vv => {
-           this.Ws(vv.message, vv)
+           throw this.ZD(!0), this.container.EQ.rG = () => {}, OT
+         }
+         this.xJ = this.container.EQ.xJ, this.nH = this.container.EQ.nH, this.Bj = TT.Bj ? new iK(this, TT.Bj) : null, this.y_ = new RK.b(this), this.inputs = new dl(this, TT, this.container.element), this.sC = new vK(this, TT, this.y_), this.pA.b_ = TT.m_ ? hl.create(TT.m_.wasm,  … [truncated]
+           this.jt(TT.message, TT)
+         })) : null, TT.m_ && (this.pA.Rv = Cl.b.wasm(this.pA.o_, TT.m_.wasm, (TT => {
+           this.jt(TT.message, TT)
+         })), this.pA.e_ = rl.create(TT.m_.wasm, this.sC, (TT => {
+           this.jt(TT.message, TT)
```

#### 559. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4880` → after: `L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4716) · [Before (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4880)

```diff
-         vv.J_ && (console.log = () => {}), vv.J_ && (console.log = Pv), this.physics = new qS(this, vv), this.physics.wasm = vv.Ta ? new lh(this, this.physics, vv.Ta) : null, this.entities = new Fz.e(this, vv), this.Rm = this.entities;
+         TT.f_ && (console.log = () => {}), TT.f_ && (console.log = cT), this.physics = new EM(this, TT), this.physics.wasm = TT.Cv ? new Al(this, this.physics, TT.Cv) : null, this.entities = new rk.c(this, TT), this.oN = this.entities;
```

#### 560. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4882-L4887` → after: `L4718-L4723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4718-L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4718-L4723) · [Before (L4882-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4882-L4887)

```diff
-         this.sV = hv.add(vv.E_, vv.pG, vv.lG, null, null, !0, vv.o_), hv.IK(this.sV, hv.names.collideTerrain), hv.IK(this.sV, hv.names.collideEntities);
-         var Sv = hv.Z4(this.sV).body;
-         if (Sv.gravityMultiplier = 2, Sv.KU = vv.WG, this.camera = new BS(this, vv), this.aG = vv.aG, this.o4 = this.kW.eZ, this.N9 = null, this.W9 = !1, this.J9 = null, this.o9 = null, this.Q0 = null, vv.r_ || (this.U1 = vv => {
-             const zv = this.Q0;
-             zv ? this.Ma.E1(!0, zv.position, zv.normal) : !vv || !this.Om.canChange && !this.oT.N7(vv.position[0], vv.position[1], vv.position[2]) && !this.oT.N7(vv.vC[0], vv.vC[1], vv.vC[2]) || this.entities.R7(this.sV, "YF") && !1 === this.entities.getState(this.sV, "YF").YF.J7 … [truncated]
-           }, this.on("miningTargetBlockChanged", this.U1)), this.bloxd = void 0, this.Ws = (vv, zv) => {
+         this.jH = lT.add(TT.x_, TT.Ow, TT.Iw, null, null, !0, TT.A_), lT.dJ(this.jH, lT.names.collideTerrain), lT.dJ(this.jH, lT.names.collideEntities);
+         var MT = lT.E_(this.jH).body;
+         if (MT.gravityMultiplier = 2, MT.iG = TT.Cw, this.camera = new YM(this, TT), this.mw = TT.mw, this.R_ = this.sC.iZ, this.U_ = null, this.Y_ = !1, this.p_ = null, this.i_ = null, this.K9 = null, TT.v_ || (this.I9 = TT => {
+             const kT = this.K9;
+             kT ? this.gv.N9(!0, kT.position, kT.normal) : !TT || !this.lD.canChange && !this.pA.J9(TT.position[0], TT.position[1], TT.position[2]) && !this.pA.J9(TT.Wt[0], TT.Wt[1], TT.Wt[2]) || this.entities.o9(this.jH, "Gw") && !1 === this.entities.getState(this.jH, "Gw").Gw.u9 … [truncated]
+           }, this.on("miningTargetBlockChanged", this.I9)), this.bloxd = void 0, this.jt = (TT, kT) => {
```

#### 561. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4889-L4891` → after: `L4725-L4727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4725-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4725-L4727) · [Before (L4889-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4889-L4891)

```diff
-           }, this.ws = () => {}, this.Om = {}, this.wV = {
-             [this.sV]: {}
-           }, this.W8 = void 0, this.K8 = null, this.Q8 = null, this.sounds = {
+           }, this.vt = () => {}, this.lD = {}, this.IH = {
+             [this.jH]: {}
+           }, this.W9 = void 0, this.K8 = null, this.Q8 = null, this.sounds = {
```

#### 562. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4893-L4895` → after: `L4729-L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4729-L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4729-L4731) · [Before (L4893-L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4893-L4895)

```diff
-             T6: null
-           }, this.room = null, this.LO = null, this.w6 = null, this.dW = vv.dW, this.SF = new Ze.e(this, this.B_, this.Ma.ya?.terrain ? null : (0, Le.c)(), vv), this.ns = new Ie(this), this.i6 = {
-             oB: 0,
+             W8: null
+           }, this.room = null, this.Km = null, this.TTT = null, this.IC = TT.IC, this.bS = new XK.d(this, this.y_, this.gv.Uv?.terrain ? null : (0, LK.e)(), TT), this.Ft = new ZK(this), this.kTT = {
+             JB: 0,
```

#### 563. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4898-L4901` → after: `L4734-L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4734-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4734-L4737) · [Before (L4898-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4898-L4901)

```diff
-             vC: cv().create(),
-             dU: cv().create()
-           }, this.f6 = "", this.R6 = {
-             oB: 0,
+             Wt: QT().create(),
+             WG: QT().create()
+           }, this.cTT = "", this.lTT = {
+             JB: 0,
```

#### 564. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4904-L4907` → after: `L4740-L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4740-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4740-L4743) · [Before (L4904-L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4904-L4907)

```diff
-             vC: cv().create(),
-             dU: cv().create()
-           }, this.I6 = "", this.Z6 = cv().create(), this.M6 = {
-             K3: cv().create(),
+             Wt: QT().create(),
+             WG: QT().create()
+           }, this.MTT = "", this.KTT = QT().create(), this.yTT = {
+             fTT: QT().create(),
```

#### 565. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4910` → after: `L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4746) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4910)

```diff
-             U3: [0, 0, 0]
+             xTT: [0, 0, 0]
```

#### 566. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4912` → after: `L4748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4748) · [Before (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4912)

```diff
-           this.vec3 = cv(), this.wa = Uz(), hv.I3(1).B3 = 999;
+           this.vec3 = QT(), this.Ut = Hk(), lT.ITT(1).ATT = 999;
```

#### 567. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4914` → after: `L4750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4750) · [Before (L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4914)

```diff
-           ev.vW = this, ev.vec3 = cv(), ev.wa = Uz(), ev.Is = this.Ma.Is
+           KT.cC = this, KT.vec3 = QT(), KT.Ut = Hk(), KT.et = this.gv.et
```

#### 568. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4919` → after: `L4755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4755) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4919)

```diff
-           if (vv *= this.y5 || 1, this.Am) return void(this.oT.o3 && this.oT.MT());
+           if (TT *= this.P_ || 1, this.FQ) return void(this.pA.CTT && this.pA.UA());
```

#### 569. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4921-L4929` → after: `L4757-L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4757-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4757-L4765) · [Before (L4921-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4921-L4929)

```diff
-               var zv = vv.Rm.rA(vv.sV).K3,
-                 Pv = vv.Y5;
-               if (cv().ge(zv) < Pv * Pv) return;
-               for (var hv = [], Sv = 0; Sv < 3; Sv++) hv[Sv] = Math.floor(zv[Sv]), vv.iW[Sv] += hv[Sv];
-               vv.Ma.Q_(hv), vv.entities.Q_(hv), vv.ns.Q_(hv)
-             }(this), this.oT.MT(), zg("world"), this.dW && this.dW(this.Rm.vx(this.sV)) || !this.oT.X3) return void this.Ma.MT(vv);
-           this.emit("beforePhysicsTick", vv), this.physics.MT(vv), zg("physics"), this.ns.MT(), this.Ma.MT(vv), zg("Ma"), this.I9(), zg("targets"), this.entities.MT(vv), zg("entities"), this.emit("MT", vv), zg("tick event"), zg("end");
-           var zv = this.inputs.FQ;
-           zv.vvv = zv.zvv = zv.Pvv = 0
+               var kT = TT.oN.wL(TT.jH).fTT,
+                 cT = TT.Q_;
+               if (QT().pk(kT) < cT * cT) return;
+               for (var lT = [], MT = 0; MT < 3; MT++) lT[MT] = Math.floor(kT[MT]), TT.QC[MT] += lT[MT];
+               TT.gv.U1(lT), TT.entities.U1(lT), TT.Ft.U1(lT)
+             }(this), this.pA.UA(), cO("world"), this.IC && this.IC(this.oN.JV(this.jH)) || !this.pA.jTT) return void this.gv.UA(TT);
+           this.emit("beforePhysicsTick", TT), this.physics.UA(TT), cO("physics"), this.Ft.UA(), this.gv.UA(TT), cO("gv"), this.n_(), cO("targets"), this.entities.UA(TT), cO("entities"), this.emit("UA", TT), cO("tick event"), cO("end");
+           var kT = this.inputs.uZ;
+           kT.vTT = kT.tTT = kT.hTT = 0
```

#### 570. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4932` → after: `L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4768) · [Before (L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4932)

```diff
-             this.Ws("Error in noa tickloop", Pv)
+             this.jt("Error in noa tickloop", cT)
```

#### 571. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4940-L4941` → after: `L4776-L4777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4776-L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4776-L4777) · [Before (L4940-L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4940-L4941)

```diff
-           if ((0, Ae.k)(), this.I5 = performance.now(), this.emit("renderTickBegin", vv), vv *= this.y5 || 1, this.t5 = zv, this.Am) return void(this.oT.o3 && this.oT.render());
-           Pg("start"), this.emit("beforeInputs", vv), this.camera.lH(), this.emit("afterInputs", vv), Pg("init"), this.oT.render(), Pg("meshing"), this.camera.Py(vv), this.entities.render(vv), this.camera.Sy(), zg("entities"), this.emit("beforeRender", vv), Pg("before render"), t … [truncated]
+           if ((0, dK.h)(), this.F_ = performance.now(), this.emit("renderTickBegin", TT), TT *= this.P_ || 1, this.S_ = kT, this.FQ) return void(this.pA.CTT && this.pA.render());
+           lO("start"), this.emit("beforeInputs", TT), this.camera.bR(), this.emit("afterInputs", TT), lO("init"), this.pA.render(), lO("meshing"), this.camera.fY(TT), this.entities.render(TT), this.camera.AY(), cO("entities"), this.emit("beforeRender", TT), lO("before render"), t … [truncated]
```

#### 572. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4943` → after: `L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4779) · [Before (L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4943)

```diff
-           this.Ws("Error in noa renderloop", Pv)
+           this.jt("Error in noa renderloop", cT)
```

#### 573. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4948` → after: `L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4784) · [Before (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4948)

```diff
-         this.Am = !!vv, vv || (this.camera.FQ.dx = this.camera.FQ.dy = 0)
+         this.FQ = !!TT, TT || (this.camera.uZ.dx = this.camera.uZ.dy = 0)
```

#### 574. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4953` → after: `L4789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4789) · [Before (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4953)

```diff
-         return vv.length ? this.oT.EQ(vv[0], vv[1], vv[2]) : this.oT.EQ(vv, zv, Pv)
+         return TT.length ? this.pA.RZ(TT[0], TT[1], TT[2]) : this.pA.RZ(TT, kT, cT)
```

#### 575. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4958` → after: `L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4794) · [Before (L4958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4958)

```diff
-         return Pv = zv.length ? this.oT.Yq(vv, zv[0], zv[1], zv[2]) : this.oT.Yq(vv, zv, hv, Sv), this.K9(), Pv
+         return cT = kT.length ? this.pA.lE(TT, kT[0], kT[1], kT[2]) : this.pA.lE(TT, kT, lT, MT), this.B_(), cT
```

#### 576. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4960` → after: `L4796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4796) · [Before (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4960)

```diff
-       evv(vv, zv) {
+       STT(TT, kT) {
```

#### 577. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4964-L4965` → after: `L4800-L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4800-L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4800-L4801) · [Before (L4964-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4964-L4965)

```diff
-           if (this.entities.gvv(zv[0], zv[1], zv[2])) return;
-           return this.oT.Yq(vv, zv[0], zv[1], zv[2]), vv
+           if (this.entities.aTT(kT[0], kT[1], kT[2])) return;
+           return this.pA.lE(TT, kT[0], kT[1], kT[2]), TT
```

#### 578. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4967` → after: `L4803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4803) · [Before (L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4967)

```diff
-         if (!this.entities.gvv(zv, Pv, hv)) return this.oT.Yq(vv, zv, Pv, hv), vv
+         if (!this.entities.aTT(kT, cT, lT)) return this.pA.lE(TT, kT, cT, lT), TT
```

#### 579. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4969-L4970` → after: `L4805-L4806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4805-L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4805-L4806) · [Before (L4969-L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4969-L4970)

```diff
-       pvv(vv, zv, Pv) {
-         var hv = this.iW;
+       FTT(TT, kT, cT) {
+         var lT = this.QC;
```

#### 580. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4982` → after: `L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4818) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4982)

```diff
-         var hv = this.iW;
+         var lT = this.QC;
```

#### 581. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4998-L4999` → after: `L4834-L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4834-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4834-L4835) · [Before (L4998-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L4998-L4999)

```diff
-         var Sv = this.Z6;
-         return vv && (this.pvv(vv, null, Sv), vv = Sv), this.uR(vv, zv, Pv, hv)
+         var MT = this.KTT;
+         return TT && (this.FTT(TT, null, MT), TT = MT), this.zV(TT, kT, cT, lT)
```

#### 582. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5006` → after: `L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4842) · [Before (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5006)

```diff
-           Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.M6;
+           MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.yTT;
```

#### 583. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5008-L5009` → after: `L4844-L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4844-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4844-L4845) · [Before (L5008-L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5008-L5009)

```diff
-         var ev = this.oT,
-           gv = this.iW,
+         var KT = this.pA,
+           OT = this.QC,
```

#### 584. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5011-L5012` → after: `L4847-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4847-L4848) · [Before (L5011-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5011-L5012)

```diff
-             var Sv = ev.EQ(vv + gv[0], zv + gv[1], Pv + gv[2]);
-             return hv(Sv, vv + gv[0], zv + gv[1], Pv + gv[2]) && (this.kW.JR(Sv) ?? !0)
+             var MT = KT.RZ(TT + OT[0], kT + OT[1], cT + OT[2]);
+             return lT(MT, TT + OT[0], kT + OT[1], cT + OT[2]) && (this.sC.rV(MT) ?? !0)
```

#### 585. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5014-L5015` → after: `L4850-L4851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4850-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4850-L4851) · [Before (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5014-L5015)

```diff
-             var hv = ev.EQ(vv + gv[0], zv + gv[1], Pv + gv[2]);
-             return this.kW.XW(hv)
+             var lT = KT.RZ(TT + OT[0], kT + OT[1], cT + OT[2]);
+             return this.sC.Tj(lT)
```

#### 586. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5017-L5018` → after: `L4853-L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4853-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4853-L4854) · [Before (L5017-L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5017-L5018)

```diff
-         vv || (vv = this.camera.sH()), zv = zv || this.camera.ZH(), Pv = Pv || -1, Pv < 0 && (Pv = this.aG);
-         var dv = Sv.K3,
+         TT || (TT = this.camera.oR()), kT = kT || this.camera.rU(), cT = cT || -1, cT < 0 && (cT = this.mw);
+         var fT = MT.fTT,
```

#### 587. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5021` → after: `L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4857) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5021)

```diff
-         return (lv ? lv.HW({
+         return (IT ? IT.gC({
```

#### 588. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5027-L5031` → after: `L4863-L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4863-L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4863-L4867) · [Before (L5027-L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5027-L5031)

```diff
-           dU: dv,
-           WU: Nv,
-           aU: Sv.U3,
-           yR: () => tz(pv, vv, zv, Pv, dv, Nv, Sv.U3)
-         }) : tz(pv, vv, zv, Pv, dv, Nv, Sv.U3)) ? (cv().add(Sv.U3, Sv.U3, gv), cv().uv(dv, dv, Nv, .01), this.DH(dv, Sv.position), Sv) : null
+           WG: fT,
+           nG: xT,
+           pG: MT.xTT,
+           hV: () => Vk(yT, TT, kT, cT, fT, xT, MT.xTT)
+         }) : Vk(yT, TT, kT, cT, fT, xT, MT.xTT)) ? (QT().add(MT.xTT, MT.xTT, OT), QT().ek(fT, fT, xT, .01), this.IU(fT, MT.position), MT) : null
```

#### 589. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5039` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4875) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5039)

```diff
-             oB: 0,
+             JB: 0,
```

#### 590. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5042-L5043` → after: `L4878-L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4878-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4878-L4879) · [Before (L5042-L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5042-L5043)

```diff
-             vC: [],
-             dU: []
+             Wt: [],
+             WG: []
```

#### 591. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5045` → after: `L4881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4881) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5045)

```diff
-           ev = this.HW(vv, zv, Pv, hv);
+           KT = this.gC(TT, kT, cT, lT);
```

#### 592. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5050` → after: `L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4886) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5050)

```diff
-         this.W9 = !1;
+         this.Y_ = !1;
```

#### 593. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5052` → after: `L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4888) · [Before (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5052)

```diff
-           Pv = this.o4 || this.kW.eZ;
+           cT = this.R_ || this.sC.iZ;
```

#### 594. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5055` → after: `L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4891) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5055)

```diff
-         var ev = this.uR(hv, Sv, null, Pv);
+         var KT = this.zV(lT, MT, null, cT);
```

#### 595. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5057-L5061` → after: `L4893-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4893-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4893-L4897) · [Before (L5057-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5057-L5061)

```diff
-           var gv = this.i6;
-           vg(this, ev, gv), this.N9 = gv, zv = ue(gv)
-         } else this.N9 = null;
-         const pv = this.dvv();
-         this.N9 && !pv(this.N9.oB, ...this.N9.position) && (ev = this.uR(hv, Sv, null, pv));
+           var OT = this.kTT;
+           kO(this, KT, OT), this.U_ = OT, kT = TO(OT)
+         } else this.U_ = null;
+         const yT = this.rTT();
+         this.U_ && !yT(this.U_.JB, ...this.U_.position) && (KT = this.zV(lT, MT, null, yT));
```

#### 596. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5064-L5067` → after: `L4900-L4903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4900-L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4900-L4903) · [Before (L5064-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5064-L5067)

```diff
-           const vv = this.R6;
-           vg(this, ev, vv), this.J9 = vv, dv = ue(vv)
-         } else this.J9 = null;
-         (zv != this.f6 || vv) && (this.emit("targetBlockChanged", this.N9), this.f6 = zv), (dv !== this.I6 || vv) && (this.emit("miningTargetBlockChanged", this.J9), this.I6 = dv)
+           const TT = this.lTT;
+           kO(this, KT, TT), this.p_ = TT, fT = TO(TT)
+         } else this.p_ = null;
+         (kT != this.cTT || TT) && (this.emit("targetBlockChanged", this.U_), this.cTT = kT), (fT !== this.MTT || TT) && (this.emit("miningTargetBlockChanged", this.p_), this.MTT = fT)
```

#### 597. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5070-L5073` → after: `L4906-L4909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4906-L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4906-L4909) · [Before (L5070-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5070-L5073)

```diff
-         if (this.i6.oB = this.oT.EQ(this.i6.position[0], this.i6.position[1], this.i6.position[2]), 0 === this.i6.oB && (this.N9 = null, this.W9 = !0), this.J9) {
-           const vv = this.J9;
-           vv.oB = this.oT.EQ(...vv.position);
-           this.dvv()(vv.oB, ...vv.position) || (this.J9 = null)
+         if (this.kTT.JB = this.pA.RZ(this.kTT.position[0], this.kTT.position[1], this.kTT.position[2]), 0 === this.kTT.JB && (this.U_ = null, this.Y_ = !0), this.p_) {
+           const TT = this.p_;
+           TT.JB = this.pA.RZ(...TT.position);
+           this.rTT()(TT.JB, ...TT.position) || (this.p_ = null)
```

#### 598. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5077` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4913) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5077)

```diff
-         this.Q0 = vv, this.U1(this.J9)
+         this.K9 = TT, this.I9(this.p_)
```

#### 599. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5079-L5080` → after: `L4915-L4916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4915-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4915-L4916) · [Before (L5079-L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5079-L5080)

```diff
-       dvv() {
-         return this.o9 || this.o4 || this.kW.eZ
+       rTT() {
+         return this.i_ || this.R_ || this.sC.iZ
```

#### 600. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5087` → after: `L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4923) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5087)

```diff
-         oB: Pv,
+         JB: cT,
```

#### 601. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5090` → after: `L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4926) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5090)

```diff
-       return `${zv[0]}|${zv[1]}|${zv[2]}|${Pv}|${hv[0]}|${hv[1]}|${hv[2]}`
+       return `${kT[0]}|${kT[1]}|${kT[2]}|${cT}|${lT[0]}|${lT[1]}|${lT[2]}`
```

#### 602. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5094` → after: `L4930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4930) · [Before (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5094)

```diff
-       cv().copy(Pv.position, zv.U3), cv().copy(Pv.normal, zv.normal), cv().add(Pv.vC, Pv.position, Pv.normal), cv().copy(Pv.dU, zv.position), Pv.oB = vv.oT.EQ(Pv.position[0], Pv.position[1], Pv.position[2])
+       QT().copy(cT.position, kT.xTT), QT().copy(cT.normal, kT.normal), QT().add(cT.Wt, cT.position, cT.normal), QT().copy(cT.WG, kT.position), cT.JB = TT.pA.RZ(cT.position[0], cT.position[1], cT.position[2])
```

#### 603. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5098-L5116` → after: `L4934-L4952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4934-L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4934-L4952) · [Before (L5098-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5098-L5116)

```diff
-       hg = Pv(3466),
-       Sg = Pv(38263),
-       eg = Pv(35885),
-       gg = Pv(35876),
-       pg = Pv(3473),
-       dg = Pv(3488),
-       Ng = Pv(35862),
-       lg = Pv(35856),
-       Tg = Pv(3496),
-       Wg = Pv(4451),
-       wg = Pv(35835),
-       ag = Pv(3459),
-       sg = Pv(2706),
-       Cg = Pv(2715),
-       ig = Pv(35841),
-       cg = Pv(644),
- ... (3 more removed lines; see GitHub link above)
+       MO = cT(3679),
+       KO = cT(38561),
+       OO = cT(36113),
+       yO = cT(36108),
+       fO = cT(3684),
+       xO = cT(3692),
+       IO = cT(36097),
+       AO = cT(36092),
+       CO = cT(3697),
+       jO = cT(4681),
+       vO = cT(36065),
+       tO = cT(3673),
+       hO = cT(2884),
+       NO = cT(2891),
+       QO = cT(36069),
+       SO = cT(645),
+ ... (3 more added lines; see GitHub link above)
```

#### 604. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5123` → after: `L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4959) · [Before (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5123)

```diff
-           } = await Promise.all([Pv.e(296), Pv.e(262)]).then((() => Pv(40946)));
+           } = await Promise.all([cT.e(296), cT.e(262)]).then((() => cT(41230)));
```

#### 605. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5130-L5131` → after: `L4966-L4967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4966-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4966-L4967) · [Before (L5130-L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5130-L5131)

```diff
-                 vG: ev,
-                 ya: Sv,
+                 XF: KT,
+                 Uv: MT,
```

#### 606. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5163-L5164` → after: `L4999-L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4999-L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L4999-L5000) · [Before (L5163-L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5163-L5164)

```diff
-           gv = null !== (Sv = null !== hv && void 0 !== hv ? hv : null === Pv || void 0 === Pv ? void 0 : Pv.message) && void 0 !== Sv ? Sv : String(Pv);
-         (0, jg.d)("Lite pipeline failed", new Error(`${vv}${ev?` ${ev}`:""}: ${gv} [${zv}]`))
+           OT = null !== (MT = null !== lT && void 0 !== lT ? lT : null === cT || void 0 === cT ? void 0 : cT.message) && void 0 !== MT ? MT : String(cT);
+         (0, FO.c)("Lite pipeline failed", new Error(`${TT}${KT?` ${KT}`:""}: ${OT} [${kT}]`))
```

#### 607. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5168-L5174` → after: `L5004-L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5004-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5004-L5010) · [Before (L5168-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5168-L5174)

```diff
-     var Og = Pv(22),
-       Dg = Pv(37218),
-       Kg = Pv(38297),
-       Vg = Pv(295),
-       Ug = Pv(1684),
-       Rg = Pv(2682),
-       xg = Pv(4271);
+     var bO = cT(31),
+       zO = cT(37571),
+       JO = cT(38593),
+       oO = cT(326),
+       HO = cT(1734),
+       eO = cT(2853),
+       GO = cT(4499);
```

#### 608. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5184` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5020) · [Before (L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5184)

```diff
-       } = zv.ya;
+       } = kT.Uv;
```

#### 609. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5186` → after: `L5022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5022) · [Before (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5186)

```diff
-       (0, Vg.l)();
+       (0, oO.i)();
```

#### 610. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5189-L5190` → after: `L5025-L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5025-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5025-L5026) · [Before (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5189-L5190)

```diff
-         (0, mg.f)(Pv) || ((0, Rg.o)("webgpuloss") && (0, xg.c)((zv => {
-           zv.noteWebGpuLoss("js", !0 === vv.framesRefused ? `${vv.reason} frames refused` : vv.reason, vv.message)
+         (0, aO.d)(cT) || ((0, eO.o)("webgpuloss") && (0, GO.d)((kT => {
+           kT.noteWebGpuLoss("js", !0 === TT.framesRefused ? `${TT.reason} frames refused` : TT.reason, TT.message)
```

#### 611. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5193` → after: `L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5029) · [Before (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5193)

```diff
-           qg = !0, Og.c.turnOffWebGpuAfterDeviceLoss();
+           EO = !0, bO.e.turnOffWebGpuAfterDeviceLoss();
```

#### 612. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5198` → after: `L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5034) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5198)

```diff
-           (0, jg.d)(Kg.e.WebGPU, hv), (0, Cg.e)("render_lost", hv, Pv), (0, Dg.c)(tg)
+           (0, FO.c)(JO.e.WebGPU, lT), (0, NO.e)("render_lost", lT, cT), (0, zO.c)(VO)
```

#### 613. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5210` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5046) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5210)

```diff
-             Nv = (0, Kg.w)(!0 === ev, Sv, "destroyed" === hv);
+             xT = (0, JO.o)(!0 === KT, MT, "destroyed" === lT);
```

#### 614. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5212-L5213` → after: `L5048-L5049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5048-L5049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5048-L5049) · [Before (L5212-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5212-L5213)

```diff
-             detail: `${Nv} ${pv} up${(0,Kg.h)(gv-Pv)} ${(0,Kg.s)(vv.adapterInfo)}: ${Sv}`,
-             code: `${Nv}_${dv}_${Zg(gv)}`
+             detail: `${xT} ${yT} up${(0,JO.h)(OT-cT)} ${(0,JO.n)(TT.adapterInfo)}: ${MT}`,
+             code: `${xT}_${fT}_${XO(OT)}`
```

#### 615. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5220` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5056) · [Before (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5220)

```diff
-       const Pv = (0, Vg.e)(),
+       const cT = (0, oO.d)(),
```

#### 616. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5223` → after: `L5059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5059) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5223)

```diff
-         ev = hv ? zv - Pv : null;
+         KT = lT ? kT - cT : null;
```

#### 617. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5225-L5226` → after: `L5061-L5062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5061-L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5061-L5062) · [Before (L5225-L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5225-L5226)

```diff
-         page: null === ev ? Sv : `${Sv}${(0,Kg.h)(ev)}`,
-         pageCode: null === ev ? Sv : `${Sv}_${(0,Kg.k)(ev)}`
+         page: null === KT ? MT : `${MT}${(0,JO.h)(KT)}`,
+         pageCode: null === KT ? MT : `${MT}_${(0,JO.k)(KT)}`
```

#### 618. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5231-L5233` → after: `L5067-L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5067-L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5067-L5069) · [Before (L5231-L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5231-L5233)

```diff
-       if ((0, Ug.g)()) return "ad_open";
-       const zv = (0, Ug.e)();
-       return null === zv ? "ad_none" : `ad_${(0,Kg.k)(vv-zv.endedAt)}_${zv.pageHid?"h":"v"}`
+       if ((0, HO.c)()) return "ad_open";
+       const kT = (0, HO.b)();
+       return null === kT ? "ad_none" : `ad_${(0,JO.k)(TT-kT.endedAt)}_${kT.pageHid?"h":"v"}`
```

#### 619. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5235` → after: `L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5071) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5235)

```diff
-     var Ag = Pv(108);
+     var dO = cT(159);
```

#### 620. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5250` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5086) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5250)

```diff
-         this.actions.yw(`webgl_restored_${zv}_${(0,Kg.o)(vv-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${zv})`), this.lostAt = null, this.restoredAt = vv, this.clearTimers()
+         this.actions.Yj(`webgl_restored_${kT}_${(0,JO.m)(TT-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${kT})`), this.lostAt = null, this.restoredAt = TT, this.clearTimers()
```

#### 621. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5261-L5262` → after: `L5097-L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5097-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5097-L5098) · [Before (L5261-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5261-L5262)

```diff
-         } = Qg(this.startedAt, vv), Sv = `webgl${this.webGlVersion} ${Pv} up${(0,Kg.h)(vv-this.startedAt)}: ${zv}`;
-         (0, jg.d)(Kg.e.WebGL2, new Error(Sv)), this.actions.yw(`webgl_lost_${hv}_${Zg(vv)}`, `WebGL${this.webGlVersion} context lost: ${Sv}`)
+         } = uO(this.startedAt, TT), MT = `webgl${this.webGlVersion} ${cT} up${(0,JO.h)(TT-this.startedAt)}: ${kT}`;
+         (0, FO.c)(JO.e.WebGL2, new Error(MT)), this.actions.Yj(`webgl_lost_${lT}_${XO(TT)}`, `WebGL${this.webGlVersion} context lost: ${MT}`)
```

#### 622. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5292` → after: `L5128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5128) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5292)

```diff
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.yw(`webgl_waiting_${zv}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(vv);
+         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.Yj(`webgl_waiting_${kT}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(TT);
```

#### 623. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5294-L5297` → after: `L5130-L5133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5130-L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5130-L5133) · [Before (L5294-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5294-L5297)

```diff
-         const Pv = (0, Kg.o)(performance.now() - vv),
-           hv = Cz.l.getItem(Lg);
-         if (!("number" === typeof hv && Date.now() - hv < 3e5) && this.actions.canRejoin() && Cz.l.setItem(Lg, Date.now())) return this.actions.yw(`webgl_rejoin_${zv}_${Pv}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.yw(`webgl_end_${zv}_${Pv}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+         const cT = (0, JO.m)(performance.now() - TT),
+           lT = hk.g.getItem(LO);
+         if (!("number" === typeof lT && Date.now() - lT < 3e5) && this.actions.canRejoin() && hk.g.setItem(LO, Date.now())) return this.actions.Yj(`webgl_rejoin_${kT}_${cT}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
+         this.actions.Yj(`webgl_end_${kT}_${cT}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
```

#### 624. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5306-L5307` → after: `L5142-L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5142-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5142-L5143) · [Before (L5306-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5306-L5307)

```diff
-       yw(vv, zv) {
-         (0, Cg.e)("render_lost", zv, vv, !0, ig.b)
+       Yj(TT, kT) {
+         (0, NO.e)("render_lost", kT, TT, !0, QO.d)
```

#### 625. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5311` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5147) · [Before (L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5311)

```diff
-         return !0 === (null === (vv = (0, Ev.d)()) || void 0 === vv ? void 0 : vv.client.isConnectedToServer())
+         return !0 === (null === (TT = (0, BT.c)()) || void 0 === TT ? void 0 : TT.client.isConnectedToServer())
```

#### 626. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5315` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5151) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5315)

```diff
-         return !(0, Ag.b)() && null !== (null !== (vv = null === (zv = (0, Ev.d)().client.getConnectionInfo()) || void 0 === zv ? void 0 : zv.lobbyName) && void 0 !== vv ? vv : null)
+         return !(0, dO.c)() && null !== (null !== (TT = null === (kT = (0, BT.c)().client.getConnectionInfo()) || void 0 === kT ? void 0 : kT.lobbyName) && void 0 !== TT ? TT : null)
```

#### 627. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5318` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5154) · [Before (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5318)

```diff
-         (0, Ev.d)().client.leaveGameUnwanted({
+         (0, BT.c)().client.leaveGameUnwanted({
```

#### 628. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5335` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5171) · [Before (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5335)

```diff
-         const zv = (0, Vg.e)();
+         const kT = (0, oO.d)();
```

#### 629. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5339` → after: `L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5175) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5339)

```diff
-         return (0, Ug.q)(vv)
+         return (0, HO.l)(TT)
```

#### 630. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5351` → after: `L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5187) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5351)

```diff
-       const zv = null === (vv = (0, Ev.d)()) || void 0 === vv ? void 0 : vv.client;
+       const kT = null === (TT = (0, BT.c)()) || void 0 === TT ? void 0 : TT.client;
```

#### 631. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5362` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5198) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5362)

```diff
-       Cv.j.zC("unrecoverableError", yg)
+       hT.k.nt("unrecoverableError", UO)
```

#### 632. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5364-L5365` → after: `L5200-L5201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5200-L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5200-L5201) · [Before (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5364-L5365)

```diff
-     var og = Pv(37962),
-       bg = Pv(36314);
+     var nO = cT(38277),
+       pO = cT(36619);
```

#### 633. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5397-L5398` → after: `L5233-L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5233-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5233-L5234) · [Before (L5397-L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5397-L5398)

```diff
-         Km: function(zv, Pv) {
-           Pv.speedMultiplier = new bg.j, Pv.jumpMultiplier = new bg.j, Pv.cameraDirection = cv().create(),
+         uF: function(kT, cT) {
+           cT.speedMultiplier = new pO.h, cT.jumpMultiplier = new pO.h, cT.cameraDirection = QT().create(),
```

#### 634. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5402` → after: `L5238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5238) · [Before (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5402)

```diff
-                 Pv.pose = zv, hv && cv().set(Pv.meshOffset, hv[0], hv[1], hv[2]), Sv && vv.bloxd.removeFromEyeHeightCache(Pv.VK)
+                 cT.pose = kT, lT && QT().set(cT.meshOffset, lT[0], lT[1], lT[2]), MT && TT.bloxd.removeFromEyeHeightCache(cT.ZJ)
```

#### 635. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5405` → after: `L5241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5241) · [Before (L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5405)

```diff
-                 cv().set(Pv.meshOffset, zv, hv, Sv), ev && vv.bloxd.removeFromEyeHeightCache(Pv.VK)
+                 QT().set(cT.meshOffset, kT, lT, MT), KT && TT.bloxd.removeFromEyeHeightCache(cT.ZJ)
```

#### 636. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5407` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5243) · [Before (L5407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5407)

```diff
-                 Pv.crouching !== zv && (Pv.crouching = zv, vv.bloxd.removeFromEyeHeightCache(Pv.VK))
+                 cT.crouching !== kT && (cT.crouching = kT, TT.bloxd.removeFromEyeHeightCache(cT.ZJ))
```

#### 637. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5409` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5245) · [Before (L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5409)

```diff
-                 zv === vv.sV && (Pv.armSwinging = !0, Pv._armSwungLastTick = !0, Pv._renderTickSinceSwing = !1, Pv._tickSinceSwing = !1)
+                 kT === TT.jH && (cT.armSwinging = !0, cT._armSwungLastTick = !0, cT._renderTickSinceSwing = !1, cT._tickSinceSwing = !1)
```

#### 638. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5413` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5249) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5413)

```diff
-         HO: null,
+         Om: null,
```

#### 639. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5415` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5251) · [Before (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5415)

```diff
-           for (const hv of Pv) hv.VK === vv.sV && (!hv._armSwungLastTick && hv._tickSinceSwing && hv._renderTickSinceSwing && (hv.armSwinging = !1), hv._tickSinceSwing = !0, hv._armSwungLastTick = !1, hv.hitInPrevTick = !1)
+           for (const lT of cT) lT.ZJ === TT.jH && (!lT._armSwungLastTick && lT._tickSinceSwing && lT._renderTickSinceSwing && (lT.armSwinging = !1), lT._tickSinceSwing = !0, lT._armSwungLastTick = !1, lT.hitInPrevTick = !1)
```

#### 640. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5417-L5418` → after: `L5253-L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5253-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5253-L5254) · [Before (L5417-L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5417-L5418)

```diff
-         qm: function(zv, Pv) {
-           for (const hv of Pv) hv.VK === vv.sV && (hv._renderTickSinceSwing = !0)
+         ZN: function(kT, cT) {
+           for (const lT of cT) lT.ZJ === TT.jH && (lT._renderTickSinceSwing = !0)
```

#### 641. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5422-L5423` → after: `L5258-L5259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5258-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5258-L5259) · [Before (L5422-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5422-L5423)

```diff
-     var kg = Pv(37734),
-       Xg = Pv(37522);
+     var qO = cT(38049),
+       sO = cT(37849);
```

#### 642. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5436-L5437` → after: `L5272-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5272-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5272-L5273) · [Before (L5436-L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5436-L5437)

```diff
-         Km: function(zv, Pv) {
-           if (Pv.inventory || (Pv.inventory = new Xg.c(vv, Pv, Iv.r)), !Pv.opWrapper) {
+         uF: function(kT, cT) {
+           if (cT.inventory || (cT.inventory = new sO.e(TT, cT, ET.z)), !cT.opWrapper) {
```

#### 643. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5441` → after: `L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5277) · [Before (L5441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5441)

```diff
-             Pv.opWrapper = new kg.b(vv, Pv.inventory, {
+             cT.opWrapper = new qO.c(TT, cT.inventory, {
```

#### 644. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5446` → after: `L5282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5282) · [Before (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5446)

```diff
-         HO: null,
+         Om: null,
```

#### 645. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5460` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5296) · [Before (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5460)

```diff
-           kh: !1,
+           Wl: !1,
```

#### 646. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5466-L5469` → after: `L5302-L5305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5302-L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5302-L5305) · [Before (L5466-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5466-L5469)

```diff
-     var zp = Pv(2629),
-       Pp = Pv(101),
-       hp = Pv(2634),
-       Sp = Pv(2607);
+     var cy = cT(2819),
+       ly = cT(150),
+       My = cT(2821),
+       Ky = cT(2796);
```

#### 647. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5585` → after: `L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5421) · [Before (L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5585)

```diff
-           return !0 === (null === vv || void 0 === vv ? void 0 : vv[Ze.n]) ? "terrain" : !0 === (null === vv || void 0 === vv ? void 0 : vv[Fh.p]) ? "objectBlocks" : !0 === (null === vv || void 0 === vv ? void 0 : vv[Fh.v]) ? "textPlanes" : -1 === zv ? "sky" : "other"
+           return !0 === (null === TT || void 0 === TT ? void 0 : TT[XK.k]) ? "terrain" : !0 === (null === TT || void 0 === TT ? void 0 : TT[Pl.q]) ? "objectBlocks" : !0 === (null === TT || void 0 === TT ? void 0 : TT[Pl.y]) ? "textPlanes" : -1 === kT ? "sky" : "other"
```

#### 648. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5587` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5423) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5587)

```diff
-         "other" === Wv && Tv.Fvv && (Wv = "entityParts");
+         "other" === CT && AT.XTT && (CT = "entityParts");
```

#### 649. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5589` → after: `L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5425) · [Before (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5589)

```diff
-             return "terrain" === vv ? Pv ? `${null===hv||void 0===hv?void 0:hv[Ze.h]}:${null===hv||void 0===hv?void 0:hv[Ze.l]}` : "(all)" : "textPlanes" === vv ? "(all)" : "objectBlocks" === vv || "entityParts" === vv ? zv : (Sv = zv).split(/[|:#]/)[0].replace(/\d+$/, "") || Sv;
+             return "terrain" === TT ? cT ? `${null===lT||void 0===lT?void 0:lT[XK.e]}:${null===lT||void 0===lT?void 0:lT[XK.i]}` : "(all)" : "textPlanes" === TT ? "(all)" : "objectBlocks" === TT || "entityParts" === TT ? kT : (MT = kT).split(/[|:#]/)[0].replace(/\d+$/, "") || MT;
```

#### 650. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5592` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5428) · [Before (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5592)

```diff
-           av = `${Wv}\0${wv}`;
+           vT = `${CT}\0${jT}`;
```

#### 651. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5603` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5439) · [Before (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5603)

```diff
-         const Cv = null !== (Sv = Tv.yX) && void 0 !== Sv ? Sv : 0;
+         const hT = null !== (MT = AT.w6) && void 0 !== MT ? MT : 0;
```

#### 652. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5605-L5606` → after: `L5441-L5442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5441-L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5441-L5442) · [Before (L5605-L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5605-L5606)

```diff
-           Nv++, pv.add(`${null===lv||void 0===lv?void 0:lv[Ze.h]}:${null===lv||void 0===lv?void 0:lv[Ze.l]}`);
-           const vv = null === lv || void 0 === lv ? void 0 : lv[Fh.q];
+           xT++, yT.add(`${null===IT||void 0===IT?void 0:IT[XK.e]}:${null===IT||void 0===IT?void 0:IT[XK.i]}`);
+           const TT = null === IT || void 0 === IT ? void 0 : IT[Pl.s];
```

#### 653. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5608` → after: `L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5444) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5608)

```diff
-           if (vv) dv.set(vv, (null !== (iv = dv.get(vv)) && void 0 !== iv ? iv : 0) + 1)
+           if (TT) fT.set(TT, (null !== (NT = fT.get(TT)) && void 0 !== NT ? NT : 0) + 1)
```

#### 654. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5625` → after: `L5461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5461) · [Before (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5625)

```diff
-       return (0, Sp.g)(vv.Ma).backendName
+       return (0, Ky.f)(TT.gv).backendName
```

#### 655. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5652` → after: `L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5488) · [Before (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5652)

```diff
-       return null !== (zv = null === (Pv = vv.Ma.ya) || void 0 === Pv ? void 0 : Pv.Vk) && void 0 !== zv ? zv : null
+       return null !== (kT = null === (cT = TT.gv.Uv) || void 0 === cT ? void 0 : cT.Ws) && void 0 !== kT ? kT : null
```

#### 656. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5657` → after: `L5493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5493) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5657)

```diff
-       return null !== (zv = null === (Pv = vv.Ma.ya) || void 0 === Pv ? void 0 : Pv.modelMeshes) && void 0 !== zv ? zv : null
+       return null !== (kT = null === (cT = TT.gv.Uv) || void 0 === cT ? void 0 : cT.modelMeshes) && void 0 !== kT ? kT : null
```

#### 657. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5662` → after: `L5498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5498) · [Before (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5662)

```diff
-       return vv.Ma.rD().getActiveMeshes().length + (null !== (zv = null === (Pv = ap(vv)) || void 0 === Pv ? void 0 : Pv.drawStats().selected) && void 0 !== zv ? zv : 0) + (null !== (hv = null === (Sv = sp(vv)) || void 0 === Sv ? void 0 : Sv.selectedCount) && void 0 !== hv ? hv : … [truncated]
+       return TT.gv.NJ().getActiveMeshes().length + (null !== (kT = null === (cT = ty(TT)) || void 0 === cT ? void 0 : cT.drawStats().selected) && void 0 !== kT ? kT : 0) + (null !== (lT = null === (MT = hy(TT)) || void 0 === MT ? void 0 : MT.selectedCount) && void 0 !== lT ? lT : … [truncated]
```

#### 658. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5666-L5667` → after: `L5502-L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5502-L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5502-L5503) · [Before (L5666-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5666-L5667)

```diff
-       const zv = vv.Ma.rD(),
-         Pv = gp(vv.Ma.engine),
+       const kT = TT.gv.NJ(),
+         cT = yy(TT.gv.engine),
```

#### 659. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5681` → after: `L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5517) · [Before (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5681)

```diff
-         return null !== (vv = (0, Gg.p)(Tp)) && void 0 !== vv && vv
+         return null !== (TT = (0, DO.o)(Cy)) && void 0 !== TT && TT
```

#### 660. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5683` → after: `L5519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5519) · [Before (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5683)

```diff
-       zv && !vv.Ma.ya && function(vv) {
+       kT && !TT.gv.Uv && function(TT) {
```

#### 661. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5712` → after: `L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5548) · [Before (L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5712)

```diff
-       }(vv.Ma.engine);
+       }(TT.gv.engine);
```

#### 662. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5717` → after: `L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5553) · [Before (L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5717)

```diff
-         const Sv = lp(vv.Ma.rD(), null !== (zv = hv.terrainByChunk) && void 0 !== zv && zv, ap(vv), sp(vv));
+         const MT = Ay(TT.gv.NJ(), null !== (kT = lT.terrainByChunk) && void 0 !== kT && kT, ty(TT), hy(TT));
```

#### 663. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5722-L5724` → after: `L5558-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5558-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5558-L5560) · [Before (L5722-L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5722-L5724)

```diff
-           } = zv, gv = null === Pv.residual ? "not counted (?drawcalls=1)" : `${Pv.residual>=0?"+":""}${Pv.residual}`;
-           console.info(`${Pv.backend} \xb7 ${zv.dispatched.total} dispatched \xb7 ${Pv.activeMeshes} active meshes \xb7 residual ${gv}`), console.table(zv.rows.slice(0, hv));
-           const pv = vv.ns.Y_.length,
+           } = kT, OT = null === cT.residual ? "not counted (?drawcalls=1)" : `${cT.residual>=0?"+":""}${cT.residual}`;
+           console.info(`${cT.backend} \xb7 ${kT.dispatched.total} dispatched \xb7 ${cT.activeMeshes} active meshes \xb7 residual ${OT}`), console.table(kT.rows.slice(0, lT));
+           const yT = TT.Ft.o5.length,
```

#### 664. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5726-L5727` → after: `L5562-L5563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5562-L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5562-L5563) · [Before (L5726-L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5726-L5727)

```diff
-           console.info([`terrain      ${Sv.meshes} meshes \xb7 ${Sv.chunkColumns} chunk columns \xb7 ${Sv.octreeBlocks} octree blocks \xb7 max ${Sv.maxMeshesPerOctreeBlock}/block \xb7 ${dv} meshes/block`, `objectBlocks ${ev.objectBlocks.draws} of ${pv} base meshes drawn \xb7 ${ev … [truncated]
-         }(vv, Sv, ip(vv), null !== (Pv = hv.limit) && void 0 !== Pv ? Pv : 20), Sv
+           console.info([`terrain      ${MT.meshes} meshes \xb7 ${MT.chunkColumns} chunk columns \xb7 ${MT.octreeBlocks} octree blocks \xb7 max ${MT.maxMeshesPerOctreeBlock}/block \xb7 ${fT} meshes/block`, `objectBlocks ${KT.objectBlocks.draws} of ${yT} base meshes drawn \xb7 ${KT … [truncated]
+         }(TT, MT, Qy(TT), null !== (cT = lT.limit) && void 0 !== cT ? cT : 20), MT
```

#### 665. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5736` → after: `L5572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5572) · [Before (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5736)

```diff
-             Nv = null !== (hv = null === (Sv = gp(vv.Ma.engine)) || void 0 === Sv ? void 0 : Sv.draws) && void 0 !== hv ? hv : 0;
+             xT = null !== (lT = null === (MT = yy(TT.gv.engine)) || void 0 === MT ? void 0 : MT.draws) && void 0 !== lT ? lT : 0;
```

#### 666. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5738-L5739` → after: `L5574-L5575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5574-L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5574-L5575) · [Before (L5738-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5738-L5739)

```diff
-             dv++, ev.add(Np(vv.Ma.rD(), ap(vv), sp(vv)).total), pv.add(Cp(vv));
-             const zv = gp(vv.Ma.engine);
+             fT++, KT.add(Iy(TT.gv.NJ(), ty(TT), hy(TT)).total), yT.add(Ny(TT));
+             const kT = yy(TT.gv.engine);
```

#### 667. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5751` → after: `L5587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5587) · [Before (L5751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5751)

```diff
-             0 === hv.frames && console.warn(`drawCalls.watch(${zv}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${zv}) over ${hv.frames} frames on ${hv.backend}`, hv), Pv(hv)
+             0 === lT.frames && console.warn(`drawCalls.watch(${kT}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${kT}) over ${lT.frames} frames on ${lT.backend}`, lT), cT(lT)
```

#### 668. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5760` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5596) · [Before (L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5760)

```diff
-         } = lp(vv.Ma.rD(), !1, ap(vv), sp(vv)), {
+         } = Ay(TT.gv.NJ(), !1, ty(TT), hy(TT)), {
```

#### 669. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5765` → after: `L5601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5601) · [Before (L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5765)

```diff
-         } = ip(vv), Tv = null === (zv = vv.Ma.ya) || void 0 === zv || null === (Pv = zv.terrain) || void 0 === Pv ? void 0 : Pv.drawStats(), Wv = null === (hv = ap(vv)) || void 0 === hv ? void 0 : hv.drawStats(), wv = Object.entries(Sv.byGroup).map((vv => {
+         } = Qy(TT), AT = null === (kT = TT.gv.Uv) || void 0 === kT || null === (cT = kT.terrain) || void 0 === cT ? void 0 : cT.drawStats(), CT = null === (lT = ty(TT)) || void 0 === lT ? void 0 : lT.drawStats(), jT = Object.entries(MT.byGroup).map((TT => {
```

#### 670. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5767` → after: `L5603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5603) · [Before (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5767)

```diff
-           return `${zv}:${Pv.total}`
+           return `${kT}:${cT.total}`
```

#### 671. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5774` → after: `L5610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5610) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5774)

```diff
-           value: `${Sv.total}`
+           value: `${MT.total}`
```

#### 672. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5777` → after: `L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5613) · [Before (L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5777)

```diff
-           value: `${Sv.opaque} / ${Sv.alphaTest} / ${Sv.transparent}`
+           value: `${MT.opaque} / ${MT.alphaTest} / ${MT.transparent}`
```

#### 673. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5783` → after: `L5619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5619) · [Before (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5783)

```diff
-           value: `${Tv.drawn} of ${Tv.loaded} meshes (${pv})`
+           value: `${AT.drawn} of ${AT.loaded} meshes (${yT})`
```

#### 674. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5786` → after: `L5622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5622) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5786)

```diff
-           value: `${ev.meshes} (${ev.chunkColumns} chunks, ${ev.octreeBlocks} blocks, max ${ev.maxMeshesPerOctreeBlock})`
+           value: `${KT.meshes} (${KT.chunkColumns} chunks, ${KT.octreeBlocks} blocks, max ${KT.maxMeshesPerOctreeBlock})`
```

#### 675. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5789` → after: `L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5625) · [Before (L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5789)

```diff
-           value: `${gv.objectBlocks.draws} (${gv.objectBlocks.instances} inst)`
+           value: `${OT.objectBlocks.draws} (${OT.objectBlocks.instances} inst)`
```

#### 676. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5792` → after: `L5628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5628) · [Before (L5792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5792)

```diff
-           value: `${gv.entityParts.draws} / ${gv.textPlanes.draws}`
+           value: `${OT.entityParts.draws} / ${OT.textPlanes.draws}`
```

#### 677. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5795` → after: `L5631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5631) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5795)

```diff
-           value: `${Wv.drawn} draws of ${Wv.Vp} meshes (${pv})`
+           value: `${CT.drawn} draws of ${CT.ty} meshes (${yT})`
```

#### 678. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5798` → after: `L5634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5634) · [Before (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5798)

```diff
-           value: `${gv.sky.draws} / ${gv.other.draws}`
+           value: `${OT.sky.draws} / ${OT.other.draws}`
```

#### 679. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5801` → after: `L5637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5637) · [Before (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5801)

```diff
-           value: `${dv}`
+           value: `${fT}`
```

#### 680. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5804` → after: `L5640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5640) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5804)

```diff
-           value: Nv ? `${Nv.lastFrameDraws} (${lv} residual)` : "- (?drawcalls=1)"
+           value: xT ? `${xT.lastFrameDraws} (${IT} residual)` : "- (?drawcalls=1)"
```

#### 681. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5806-L5817` → after: `L5642-L5653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5642-L5653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5642-L5653) · [Before (L5806-L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5806-L5817)

```diff
-       }(vv), zv && console.info(`Draw call counting on via ?${Tp}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
-     }
-     var Gp = Pv(37127),
-       mp = Pv(37910),
-       jp = Pv(37278),
-       fp = Pv(38306),
-       Fp = Pv(38309),
-       Yp = Pv(37281),
-       np = Pv(38317),
-       Op = Pv(38322),
-       Dp = Pv(36579);
-     var Kp = Pv(3539);
+       }(TT), kT && console.info(`Draw call counting on via ?${Cy}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
+     }
+     var Dy = cT(37486),
+       ay = cT(38222),
+       Fy = cT(37622),
+       ry = cT(38600),
+       Py = cT(38605),
+       wy = cT(37630),
+       my = cT(38608),
+       by = cT(38610),
+       zy = cT(36875);
+     var Jy = cT(3732);
```

#### 682. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5819` → after: `L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5655) · [Before (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5819)

```diff
-     var Up = Pv(38340);
+     var Hy = cT(38641);
```

#### 683. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5822` → after: `L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5658) · [Before (L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5822)

```diff
-       const zv = vv.Ma.rD();
+       const kT = TT.gv.NJ();
```

#### 684. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5826-L5827` → after: `L5662-L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5662-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5662-L5663) · [Before (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5826-L5827)

```diff
-             Rm: Pv
-           } = vv, hv = Pv.jK(Pv.names.KF), Sv = Pv.jK("lineToEntity");
+             oN: cT
+           } = TT, lT = cT.VJ(cT.names.Xw), MT = cT.VJ("lineToEntity");
```

#### 685. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5829-L5831` → after: `L5665-L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5665-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5665-L5667) · [Before (L5829-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5829-L5831)

```diff
-             if (!(0, Yp.chainSkipsSmoothing)(vv, ev.Xw)) continue;
-             const hv = Pv.Nvv(ev.VK);
-             null === (null === hv || void 0 === hv ? void 0 : hv.NK) && (0, Yp.meshOnScreen)(hv.mesh, zv) && (0, Yp.catchUpSkippedSmoothing)(vv, ev.Xw)
+             if (!(0, wy.chainSkipsSmoothing)(TT, KT.Tv)) continue;
+             const lT = cT.PTT(KT.ZJ);
+             null === (null === lT || void 0 === lT ? void 0 : lT.mJ) && (0, wy.meshOnScreen)(lT.mesh, kT) && (0, wy.catchUpSkippedSmoothing)(TT, KT.Tv)
```

#### 686. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5833` → after: `L5669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5669) · [Before (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5833)

```diff
-           for (const ev of Sv)((0, Yp.chainSkipsSmoothing)(vv, ev.VK) || (0, Yp.chainSkipsSmoothing)(vv, ev._targetEId)) && (0, Yp.meshOnScreen)(ev._line, zv) && ((0, Yp.catchUpSkippedSmoothing)(vv, ev.VK), (0, Yp.catchUpSkippedSmoothing)(vv, ev._targetEId), (0, Up.updateLineTran … [truncated]
+           for (const KT of MT)((0, wy.chainSkipsSmoothing)(TT, KT.ZJ) || (0, wy.chainSkipsSmoothing)(TT, KT._targetEId)) && (0, wy.meshOnScreen)(KT._line, kT) && ((0, wy.catchUpSkippedSmoothing)(TT, KT.ZJ), (0, wy.catchUpSkippedSmoothing)(TT, KT._targetEId), (0, Hy.updateLineTran … [truncated]
```

#### 687. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5837-L5841` → after: `L5673-L5677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5673-L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5673-L5677) · [Before (L5837-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5837-L5841)

```diff
-     var xp = Pv(37304),
-       tp = Pv(1630),
-       qp = Pv(37187),
-       Ip = Pv(1903),
-       Qp = Pv(8924);
+     var Gy = cT(37650),
+       Vy = cT(1685),
+       Ey = cT(37548),
+       Zy = cT(1974),
+       uy = cT(9294);
```

#### 688. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5845` → after: `L5681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5681) · [Before (L5845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5845)

```diff
-       vv.Ma.tvv = vv => {
+       TT.gv.iTT = TT => {
```

#### 689. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5847` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5683) · [Before (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5847)

```diff
-         zv && (0, fv.G)(vv), (0, Mv.b)(vv), zv && (0, fv.k)(vv)
+         kT && (0, FT.U)(TT), (0, RT.c)(TT), kT && (0, FT.q)(TT)
```

#### 690. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5849` → after: `L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5685) · [Before (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5849)

```diff
-         Om: Ip.c.values
+         lD: Zy.b.values
```

#### 691. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5851-L5854` → after: `L5687-L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5687-L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5687-L5690) · [Before (L5851-L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5851-L5854)

```diff
-       let hv = vv.aG;
-       Ip.c.subscribe("blockReach", (() => {
-           const zv = vv.bloxd.getBlockReach(vv.sV);
-           vv.aG === hv && (vv.aG = zv), hv = zv
+       let lT = TT.mw;
+       Zy.b.subscribe("blockReach", (() => {
+           const kT = TT.bloxd.getBlockReach(TT.jH);
+           TT.mw === lT && (TT.mw = kT), lT = kT
```

#### 692. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5857-L5859` → after: `L5693-L5695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5693-L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5693-L5695) · [Before (L5857-L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5857-L5859)

```diff
-           for (const Pv of [og.d, rg, ug, vp]) {
-             const zv = vv.Rm.Ivv(Pv(vv));
-             vv.Rm.names[zv] = zv
+           for (const cT of [nO.b, iO, Ty, ky]) {
+             const kT = TT.oN.sTT(cT(TT));
+             TT.oN.names[kT] = kT
```

#### 693. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5863-L5865` → after: `L5699-L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5699-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5699-L5701) · [Before (L5863-L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5863-L5865)

```diff
-             const zv = null !== (vv = Cv.j.ZC.playerKilled > 1 ? 1 : void 0) && void 0 !== vv ? vv : 5;
-             (0, Qv.sendColyMessage)(Kp.Vf, {
-               jp: zv
+             const kT = null !== (TT = hT.k.nD.playerKilled > 1 ? 1 : void 0) && void 0 !== TT ? TT : 5;
+             (0, ZT.sendColyMessage)(Jy.ag, {
+               yy: kT
```

#### 694. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5868` → after: `L5704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5704) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5868)

```diff
-           const zv = Pv(38345);
+           const kT = cT(38646);
```

#### 695. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5871` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5707) · [Before (L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5871)

```diff
-             if (hv.default && (hv = hv.default), "function" !== typeof hv) throw new Error(`components/${Pv.replace(/^\.\//,"")} is under components/ but does not export a component factory - move it elsewhere`);
+             if (lT.default && (lT = lT.default), "function" !== typeof lT) throw new Error(`components/${cT.replace(/^\.\//,"")} is under components/ but does not export a component factory - move it elsewhere`);
```

#### 696. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5873-L5874` → after: `L5709-L5710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5709-L5710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5709-L5710) · [Before (L5873-L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5873-L5874)

```diff
-               ev = vv.Rm.Ivv(Sv);
-             vv.Rm.names[ev] = ev
+               KT = TT.oN.sTT(MT);
+             TT.oN.names[KT] = KT
```

#### 697. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5877` → after: `L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5713) · [Before (L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5877)

```diff
-             Rm: hv
+             oN: lT
```

#### 698. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5879-L5881` → after: `L5715-L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5715-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5715-L5717) · [Before (L5879-L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5879-L5881)

```diff
-           hv.Rvv = hv.avv("genericLifeform"), hv.Qvv = hv.avv("genericLifeformState");
-           const Sv = hv.avv("YF");
-           hv.Zvv = Sv, hv.Avv = vv => {
+           lT.nTT = lT.JTT("genericLifeform"), lT.TkT = lT.JTT("genericLifeformState");
+           const MT = lT.JTT("Gw");
+           lT.kkT = MT, lT.ckT = TT => {
```

#### 699. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5883-L5886` → after: `L5719-L5722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5719-L5722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5719-L5722) · [Before (L5883-L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5883-L5886)

```diff
-             return null === (zv = Sv(vv)) || void 0 === zv ? void 0 : zv.YF
-           }, hv.Lvv = hv.avv("entityName"), hv.Hvv = hv.avv("humanoidMesh"), hv.Mvv = hv.avv("fourLeggedMesh"), hv.yvv = hv.avv("proximityFade");
-           const ev = hv.avv("movementInputs");
-           hv.Bvv = () => ev(vv.sV)
+             return null === (kT = MT(TT)) || void 0 === kT ? void 0 : kT.Gw
+           }, lT.lkT = lT.JTT("entityName"), lT.MkT = lT.JTT("humanoidMesh"), lT.KkT = lT.JTT("fourLeggedMesh"), lT.OkT = lT.JTT("proximityFade");
+           const KT = lT.JTT("movementInputs");
+           lT.ykT = () => KT(TT.jH)
```

#### 700. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5889` → after: `L5725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5725) · [Before (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5889)

```diff
-           vv.Ma.hK.onCatchUpCulled = (zv, Pv) => {
+           TT.gv.PJ.onCatchUpCulled = (kT, cT) => {
```

#### 701. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5892-L5894` → after: `L5728-L5730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5728-L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5728-L5730) · [Before (L5892-L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5892-L5894)

```diff
-               if ((0, Yp.catchUpSkippedSmoothing)(vv, zv), (null === (hv = vv.Rm.getState(zv, vv.Rm.names.Jw)) || void 0 === hv ? void 0 : hv._thinObjectId) === Pv) return;
-               (0, np.catchUpAutoRotate)(vv, zv, Pv), (0, Gp.getCaughtUpMeshRotation)(vv, zv), (0, jp.catchUpWalkingState)(vv, zv), (0, fp.catchUpHumanoidPose)(vv, zv), (0, Fp.catchUpFourLeggedPose)(vv, zv), null === (Sv = vv.Rm.getState(zv, "animator")) || void 0 === Sv || Sv.cat … [truncated]
-               const ev = vv.Rm.Rvv(zv);
+               if ((0, wy.catchUpSkippedSmoothing)(TT, kT), (null === (lT = TT.oN.getState(kT, TT.oN.names.Wj)) || void 0 === lT ? void 0 : lT._thinObjectId) === cT) return;
+               (0, my.catchUpAutoRotate)(TT, kT, cT), (0, Dy.getCaughtUpMeshRotation)(TT, kT), (0, Fy.catchUpWalkingState)(TT, kT), (0, ry.catchUpHumanoidPose)(TT, kT), (0, Py.catchUpFourLeggedPose)(TT, kT), null === (MT = TT.oN.getState(kT, "animator")) || void 0 === MT || MT.cat … [truncated]
+               const KT = TT.oN.nTT(kT);
```

#### 702. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5900` → after: `L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5736) · [Before (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5900)

```diff
-           vv.o4 = zv => 0 !== zv && !vv.kW.QJ(zv), (0, yz.g)(vv.o4);
+           TT.R_ = kT => 0 !== kT && !TT.sC.dW(kT), (0, Uk.i)(TT.R_);
```

#### 703. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5902` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5738) · [Before (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5902)

```diff
-             Rm: zv
+             oN: kT
```

#### 704. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5904-L5906` → after: `L5740-L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5740-L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5740-L5742) · [Before (L5904-L5906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5904-L5906)

```diff
-           zv.I3 = zv.avv("movement"), zv.svv = zv.avv("moveState");
-           const Pv = zv.avv("inventory");
-           zv.Cvv = Pv, zv.ivv = vv => {
+           kT.ITT = kT.JTT("movement"), kT.oTT = kT.JTT("moveState");
+           const cT = kT.JTT("inventory");
+           kT.HTT = cT, kT.eTT = TT => {
```

#### 705. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5909-L5910` → after: `L5745-L5746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5745-L5746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5745-L5746) · [Before (L5909-L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5909-L5910)

```diff
-           }, zv.cvv = vv => Pv(vv).opWrapper, zv.Gvv = zv.mvv("inventory")
-         }(vv), vv.o9 = (zv, Pv, hv, Sv) => vv.o4(zv) && (vv.kW.eZ(zv) || vv.oT.N7(Pv, hv, Sv)),
+           }, kT.VTT = TT => cT(TT).opWrapper, kT.ETT = kT.ZTT("inventory")
+         }(TT), TT.i_ = (kT, cT, lT, MT) => TT.R_(kT) && (TT.sC.iZ(kT) || TT.pA.J9(cT, lT, MT)),
```

#### 706. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5916-L5919` → after: `L5752-L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5752-L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5752-L5755) · [Before (L5916-L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5916-L5919)

```diff
-             } = vv.Ma,
-             Sv = null !== (zv = Pv.parentElement) && void 0 !== zv ? zv : Pv,
-             ev = new zp.d(Sv, (() => {
-               vv.Ma.resize()
+             } = TT.gv,
+             MT = null !== (kT = cT.parentElement) && void 0 !== kT ? kT : cT,
+             KT = new cy.b(MT, (() => {
+               TT.gv.resize()
```

#### 707. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5923` → after: `L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5759) · [Before (L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5923)

```diff
-             const zv = Og.c.get("clientEscMenuOptions"),
+             const kT = bO.e.get("clientEscMenuOptions"),
```

#### 708. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5928` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5764) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5928)

```diff
-             Pv.style.imageRendering = (0, zp.O)((0, zp.y)(pv));
+             cT.style.imageRendering = (0, cy.w)((0, cy.j)(yT));
```

#### 709. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5931-L5933` → after: `L5767-L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5767-L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5767-L5769) · [Before (L5931-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5931-L5933)

```diff
-               const vv = (0, zp.p)(),
-                 zv = (0, zp.P)(gv) * (0, zp.M)(),
-                 pv = (0, zp.v)(zv),
+               const TT = (0, cy.e)(),
+                 kT = (0, cy.A)(OT) * (0, cy.v)(),
+                 yT = (0, cy.g)(kT),
```

#### 710. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5937` → after: `L5773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5773) · [Before (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5937)

```diff
-                 return Pv.style.width = `${vv.width}px`, Pv.style.height = `${vv.height}px`, void hv.setSize(Math.max(1, Math.floor(dv / zv)), Math.max(1, Math.floor(Nv / zv)))
+                 return cT.style.width = `${TT.width}px`, cT.style.height = `${TT.height}px`, void lT.setSize(Math.max(1, Math.floor(fT / kT)), Math.max(1, Math.floor(xT / kT)))
```

#### 711. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5939-L5940` → after: `L5775-L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5775-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5775-L5776) · [Before (L5939-L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5939-L5940)

```diff
-               const lv = (0, zp.l)(dv, Nv, vv, pv);
-               (0, zp.h)(Pv, lv), hv.setSize(lv.bufferWidth, lv.bufferHeight)
+               const IT = (0, cy.d)(fT, xT, TT, yT);
+               (0, cy.c)(cT, IT), lT.setSize(IT.bufferWidth, IT.bufferHeight)
```

#### 712. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5942` → after: `L5778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5778) · [Before (L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5942)

```diff
-             vv.Ma.resize = dv, vv.container.Jm.mG = dv, dv()
+             TT.gv.resize = fT, TT.container.EQ.zN = fT, fT()
```

#### 713. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5945-L5948` → after: `L5781-L5784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5781-L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5781-L5784) · [Before (L5945-L5948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5945-L5948)

```diff
-             vv.Ma.resize()
-           })), (0, hp.l)((() => {
-             vv.Ma.resize()
-           })), gv(), Cv.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+             TT.gv.resize()
+           })), (0, My.o)((() => {
+             TT.gv.resize()
+           })), OT(), hT.k.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 714. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5951-L5961` → after: `L5787-L5797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5787-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5787-L5797) · [Before (L5951-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5951-L5961)

```diff
-         }(vv), (0, tp.k)(vv.inputs);
-       const Sv = vv.Ma.engine.getInfo();
-       (0, tv.seedGpuVendor)(Sv.vendor), "webgl2" === (0, Sp.d)() && (0, Pp.B)(Sv.vendor, Sv.renderer), cp(vv), (0, xp.G)(vv), null === (zv = qp.b.noaReady) || void 0 === zv || zv.call(qp.b, vv)
-     }
-     var Ap = Pv(37182);
-     var Lp = Pv(4426),
-       Hp = Pv(37201),
-       Mp = Pv(37192),
-       yp = Pv(38485),
-       Bp = Pv(37208),
-       Jp = Pv(38610);
+         }(TT), (0, Vy.p)(TT.inputs);
+       const MT = TT.gv.engine.getInfo();
+       (0, GT.seedGpuVendor)(MT.vendor), "webgl2" === (0, Ky.e)() && (0, ly.A)(MT.vendor, MT.renderer), Sy(TT), (0, Gy.D)(TT), null === (kT = Ey.b.noaReady) || void 0 === kT || kT.call(Ey.b, TT)
+     }
+     var dy = cT(37539);
+     var Ly = cT(4652),
+       Ry = cT(37563),
+       gy = cT(37554),
+       Uy = cT(38789),
+       Yy = cT(37566),
+       By = cT(38882);
```

#### 715. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5963-L5964` → after: `L5799-L5800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5799-L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5799-L5800) · [Before (L5963-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5963-L5964)

```diff
-     Cv.j.subscribe("noaTick", (() => {
-       Date.now() - Ep > 9200 && ((0, Qv.sendColyMessage)(Kp.cg, (0, Zv.e)(), !0), Ep = Date.now())
+     hT.k.subscribe("noaTick", (() => {
+       Date.now() - Wy > 9200 && ((0, ZT.sendColyMessage)(Jy.jg, (0, uT.e)(), !0), Wy = Date.now())
```

#### 716. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5966-L5972` → after: `L5802-L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5802-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5802-L5808) · [Before (L5966-L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5966-L5972)

```diff
-     var op = Pv(1056),
-       bp = Pv(2724),
-       rp = Pv(4255),
-       kp = Pv(688),
-       Xp = Pv(35849),
-       vd = Pv(36024),
-       zd = Pv(38634);
+     var ny = cT(1082),
+       py = cT(2893),
+       iy = cT(4481),
+       qy = cT(698),
+       sy = cT(36085),
+       Tf = cT(36299),
+       kf = cT(38928);
```

#### 717. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5975` → after: `L5811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5811) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5975)

```diff
-       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zd.y,
+       let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kf.A,
```

#### 718. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5990-L5991` → after: `L5826-L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/chunks/js/91.js#L5826-L5827) · [Before (L5990-L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/chunks/js/91.js#L5990-L5991)

```diff
-         pv = new zd.c(Sv, (() => 0), (vv => {
-           (0, ag.f)("memory", vv)
+         yT = new kf.d(MT, (() => 0), (TT => {
+           (0, tO.g)("memory", TT)
```
