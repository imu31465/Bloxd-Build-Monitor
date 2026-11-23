# Changed — Bundle Modifications Report (Part 082 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `82 / 137` (**411** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 081](part-081.md) · [Part 083 →](part-083.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/86.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/86.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba)

#### 23. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L199)

```diff
-           this.resolveRequest = zC, this.tearDownNotification = ZC, this.startTime = void 0, this.speed = void 0, this.DZ = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           this.resolveRequest = Fk, this.tearDownNotification = Ik, this.startTime = void 0, this.speed = void 0, this.YI = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
```

#### 24. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L203-L205)

```diff
-             speed: null !== (QC = qC.speed) && void 0 !== QC ? QC : .5,
-             DZ: bC.c.clamp(qC.DZ, .05, 1),
-             label: null !== (wC = qC.label) && void 0 !== wC ? wC : [{
+             speed: null !== (Xk = qk.speed) && void 0 !== Xk ? Xk : .5,
+             YI: ik.e.clamp(qk.YI, .05, 1),
+             label: null !== (Tk = qk.label) && void 0 !== Tk ? Tk : [{
```

#### 25. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L208-L211` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L208-L211) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L208-L211)

```diff
-             icon: null !== (nC = qC.icon) && void 0 !== nC ? nC : null,
-             scale: null !== (fC = qC.scale) && void 0 !== fC ? fC : 1,
-             rotation: null !== (oC = qC.rotation) && void 0 !== oC ? oC : 0
-           }, this.speed = this.parameters.speed, this.DZ = this.parameters.DZ, this.startTime = Date.now()
+             icon: null !== (yk = qk.icon) && void 0 !== yk ? yk : null,
+             scale: null !== (lk = qk.scale) && void 0 !== lk ? lk : 1,
+             rotation: null !== (ak = qk.rotation) && void 0 !== ak ? ak : 0
+           }, this.speed = this.parameters.speed, this.YI = this.parameters.YI, this.startTime = Date.now()
```

#### 26. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L216)

```diff
-             const CC = Math.abs(this.markerPosition - .5) <= this.DZ / 2;
+             const kk = Math.abs(this.markerPosition - .5) <= this.YI / 2;
```

#### 27. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L225)

```diff
-           this.markerPosition = CC <= .5 ? 2 * CC : 2 - 2 * CC
+           this.markerPosition = kk <= .5 ? 2 * kk : 2 - 2 * kk
```

#### 28. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L251-L252)

```diff
-           if (zC <= this.parameters.UZ && zC >= -this.parameters.UZ) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.yZ) return void this.complete(!0)
+           if (Fk <= this.parameters.hI && Fk >= -this.parameters.hI) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.gI) return void this.complete(!0)
```

#### 29. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L257)

```diff
-           this.misses++, this.lastClickResult = !1, !(0, nC.H)(this.parameters.BZ) && this.misses > this.parameters.BZ ? this.complete(!1) : this.shrinkStartTime = Date.now()
+           this.misses++, this.lastClickResult = !1, !(0, yk.Q)(this.parameters.rI) && this.misses > this.parameters.rI ? this.complete(!1) : this.shrinkStartTime = Date.now()
```

#### 30. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L261)

```diff
-           this.getOuterCircleProgress() < -this.parameters.UZ && this.handleMiss()
+           this.getOuterCircleProgress() < -this.parameters.hI && this.handleMiss()
```

#### 31. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L264)

```diff
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.LZ
+           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.mI
```

#### 32. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L276)

```diff
-               yZ: this.parameters.yZ,
+               gI: this.parameters.gI,
```

#### 33. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L290)

```diff
-       (0, FC.e)(fC.v.Qte, pC ? fC.v.Qte : 0), pC ? wC.o.bp("qteStateUpdated", pC.getState()) : wC.o.bp("qteStateUpdated", {
+       (0, Lk.g)(lk.A.Qte, Hk ? lk.A.Qte : 0), Hk ? Tk.g.GL("qteStateUpdated", Hk.getState()) : Tk.g.GL("qteStateUpdated", {
```

#### 34. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L324)

```diff
-         if (pC || gC.fg()) return void(gC.fg() && pC && (pC = null, GC()));
+         if (Hk || ek.ye()) return void(ek.ye() && Hk && (Hk = null, xk()));
```

#### 35. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L357)

```diff
-   4711: (CC, zC, ZC) => {
+   4792: (kk, Fk, Ik) => {
```

#### 36. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L360-L366` → after: `L360-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L360-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L360-L365) · [Before (L360-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L360-L366)

```diff
-       B: () => nC,
-       E: () => fC,
-       G: () => vC,
-       b: () => iC,
-       e: () => AC,
-       h: () => dC,
-       j: () => YC,
+       D: () => xk,
+       F: () => yk,
+       I: () => lk,
+       L: () => Sk,
+       c: () => zk,
+       g: () => Kk,
```

#### 37. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L368-L371` → after: `L367-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L367-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L367-L370) · [Before (L368-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L368-L371)

```diff
-       m: () => JC,
-       n: () => RC,
-       p: () => xC,
-       r: () => eC,
+       l: () => nk,
+       o: () => Jk,
+       s: () => sk,
+       t: () => Pk,
```

#### 38. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L372-L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L373)

```diff
-       w: () => KC
+       y: () => vk,
+       z: () => Ek
```

#### 39. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L375)

```diff
-     var QC = ZC(4719);
+     var Xk = Ik(4794);
```

#### 40. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L384)

```diff
-       bC = null !== CC && void 0 !== CC ? CC : wC
+       ik = null !== kk && void 0 !== kk ? kk : Tk
```

#### 41. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L476)

```diff
-       const bC = (0, QC.i)(zC),
+       const ik = (0, Xk.f)(Fk),
```

#### 42. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L508)

```diff
-   4739: (CC, zC, ZC) => {
+   4801: (kk, Fk, Ik) => {
```

#### 43. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L510-L512` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L510-L512) · [Before (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L510-L512)

```diff
-       e: () => oC,
-       g: () => bC,
-       k: () => fC
+       c: () => ak,
+       f: () => ik,
+       g: () => lk
```

#### 44. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L514-L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L514-L515) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L514-L515)

```diff
-     var QC = ZC(2348),
-       wC = ZC(4745);
+     var Xk = Ik(2331),
+       Tk = Ik(4810);
```

#### 45. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L522)

```diff
-       return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
+       return "mid-fire" === Fk && 0 !== (Ik & Xk.e.AltLeftClick)
```

#### 46. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L533)

```diff
-       const zC = wC.c[255 & CC];
+       const Fk = Tk.e[255 & kk];
```

#### 47. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L538)

```diff
-           down: 0 !== (ZC & QC.c.Down),
+           down: 0 !== (Ik & Xk.e.Down),
```

#### 48. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L545)

```diff
-   4745: (CC, zC, ZC) => {
+   4810: (kk, Fk, Ik) => {
```

#### 49. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L547-L549` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L547) · [Before (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L547-L549)

```diff
-       c: () => wC,
-       d: () => bC,
-       f: () => nC,
+       e: () => Tk,
```

#### 50. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L551` → after: `L549-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L549-L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L551)

```diff
-       h: () => fC
+       k: () => yk,
+       o: () => Xk,
+       s: () => lk
```

#### 51. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L823)

```diff
-   4752: (CC, zC, ZC) => {
+   4814: (kk, Fk, Ik) => {
```

#### 52. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L825-L827` → after: `L825-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L825-L827) · [Before (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L825-L827)

```diff
-       b: () => fC,
-       d: () => nC,
-       e: () => qC
+       e: () => lk,
+       f: () => yk,
+       g: () => qk
```

#### 53. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L829-L830)

```diff
-     var QC = ZC(2348),
-       wC = ZC(2351);
+     var Xk = Ik(2331),
+       Tk = Ik(2338);
```

#### 54. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L841)

```diff
-           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
+           Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
```

#### 55. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L865)

```diff
-       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
+       ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
```

#### 56. `bundles/bloxd.io/chunks/js/86.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bbaR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-6e6a82d24239b5cf7bb17e43c83626970babe64586ee1484feecfa6b26165bba) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/86.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/86.js#L868)

```diff
-       return (0, wC.v)(CC, bC & CC)
+       return (0, Tk.x)(kk, ik & kk)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/87.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/87.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e)

#### 1. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L4)

```diff
-   40717: (CC, zC, ZC) => {
+   40891: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L6-L7)

```diff
-       A: () => EC,
-       D: () => HC,
+       C: () => uk,
```

#### 3. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L10-L16` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L9-L14) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L10-L16)

```diff
-       J: () => YC,
-       N: () => lC,
-       O: () => KC,
-       R: () => DC,
-       T: () => tC,
-       W: () => mC,
-       c: () => jC,
+       I: () => nk,
+       M: () => Rk,
+       Q: () => Ok,
+       U: () => Yk,
+       X: () => dk,
+       _: () => pk,
```

#### 4. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L18-L23` → after: `L16-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L16-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L16-L23) · [Before (L18-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L18-L23)

```diff
-       g: () => eC,
-       k: () => yC,
-       o: () => hC,
-       s: () => vC,
-       u: () => cC,
-       x: () => dC
+       e: () => Nk,
+       h: () => vk,
+       l: () => gk,
+       n: () => Ek,
+       p: () => Sk,
+       t: () => Ck,
+       x: () => Gk,
+       z: () => bk
```

#### 5. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L25-L30` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L25-L30) · [Before (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L25-L30)

```diff
-     var QC = ZC(1347),
-       wC = ZC(28),
-       bC = ZC(1240),
-       nC = ZC(2348),
-       fC = ZC(4752),
-       oC = ZC(4711);
+     var Xk = Ik(1364),
+       Tk = Ik(34),
+       ik = Ik(1270),
+       yk = Ik(2331),
+       lk = Ik(4814),
+       ak = Ik(4792);
```

#### 6. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L60)

```diff
-       return (0, bC.x)() && !JC
+       return (0, ik.n)() && !sk
```

#### 7. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L79)

```diff
-       (0, fC.e)(nC.v.Menu, (0, bC.x)() ? 0 : nC.v.Menu)
+       (0, lk.g)(yk.A.Menu, (0, ik.n)() ? 0 : yk.A.Menu)
```

#### 8. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L105)

```diff
-       return (!WC || performance.now() - pC > SC) && (WC = (0, oC.E)().lockPointer(), pC = performance.now()), WC
+       return (!tk || performance.now() - Hk > wk) && (tk = (0, ak.I)().lockPointer(), Hk = performance.now()), tk
```

#### 9. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L113)

```diff
-       return KC() && !FC && !PC && !(0, QC.h)()
+       return Ok() && !Lk && !Jk && !(0, Xk.f)()
```

#### 10. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L130)

```diff
-       GC ? navigator.vendor.startsWith("Apple") ? LC() : RC = AC : tC()
+       xk ? navigator.vendor.startsWith("Apple") ? mk() : Pk = Kk : dk()
```

#### 11. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L146)

```diff
-       xC = !0, (0, oC.E)().unlockPointer()
+       Qk = !0, (0, ak.I)().unlockPointer()
```

#### 12. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L157)

```diff
-       wC.o.bp("pointerLockUpdate", FC)
+       Tk.g.GL("pointerLockUpdate", Lk)
```

#### 13. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L160)

```diff
-   40518: (CC, zC, ZC) => {
+   40685: (kk, Fk, Ik) => {
```

#### 14. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L165-L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L166) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L165-L166)

```diff
-       k: () => qC,
-       m: () => nC,
+       n: () => yk,
```

#### 15. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L168)

```diff
-       s: () => oC
+       r: () => ak
```

#### 16. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L203)

```diff
-   4711: (CC, zC, ZC) => {
+   4792: (kk, Fk, Ik) => {
```

#### 17. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L206-L212` → after: `L206-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L206-L211) · [Before (L206-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L206-L212)

```diff
-       B: () => nC,
-       E: () => fC,
-       G: () => vC,
-       b: () => iC,
-       e: () => AC,
-       h: () => dC,
-       j: () => YC,
+       D: () => xk,
+       F: () => yk,
+       I: () => lk,
+       L: () => Sk,
+       c: () => zk,
+       g: () => Kk,
```

#### 18. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L214-L217` → after: `L213-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L213-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L213-L216) · [Before (L214-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L214-L217)

```diff
-       m: () => JC,
-       n: () => RC,
-       p: () => xC,
-       r: () => eC,
+       l: () => nk,
+       o: () => Jk,
+       s: () => sk,
+       t: () => Pk,
```

#### 19. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L219` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L218-L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L219)

```diff
-       w: () => KC
+       y: () => vk,
+       z: () => Ek
```

#### 20. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L221)

```diff
-     var QC = ZC(4719);
+     var Xk = Ik(4794);
```

#### 21. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L230)

```diff
-       bC = null !== CC && void 0 !== CC ? CC : wC
+       ik = null !== kk && void 0 !== kk ? kk : Tk
```

#### 22. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L322)

```diff
-       const bC = (0, QC.i)(zC),
+       const ik = (0, Xk.f)(Fk),
```

#### 23. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L354)

```diff
-   40729: (CC, zC, ZC) => {
+   40900: (kk, Fk, Ik) => {
```

#### 24. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L356)

```diff
-       e: () => QC
+       d: () => Xk
```

#### 25. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L369)

```diff
-   4739: (CC, zC, ZC) => {
+   4801: (kk, Fk, Ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L371-L373` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L371-L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L371-L373)

```diff
-       e: () => oC,
-       g: () => bC,
-       k: () => fC
+       c: () => ak,
+       f: () => ik,
+       g: () => lk
```

#### 27. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L375-L376` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L375-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L375-L376)

```diff
-     var QC = ZC(2348),
-       wC = ZC(4745);
+     var Xk = Ik(2331),
+       Tk = Ik(4810);
```

#### 28. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L383` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L383) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L383)

```diff
-       return "mid-fire" === zC && 0 !== (ZC & QC.c.AltLeftClick)
+       return "mid-fire" === Fk && 0 !== (Ik & Xk.e.AltLeftClick)
```

#### 29. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L394)

```diff
-       const zC = wC.c[255 & CC];
+       const Fk = Tk.e[255 & kk];
```

#### 30. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L399)

```diff
-           down: 0 !== (ZC & QC.c.Down),
+           down: 0 !== (Ik & Xk.e.Down),
```

#### 31. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L406)

```diff
-   4745: (CC, zC, ZC) => {
+   4810: (kk, Fk, Ik) => {
```

#### 32. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L408-L410` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L408) · [Before (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L408-L410)

```diff
-       c: () => wC,
-       d: () => bC,
-       f: () => nC,
+       e: () => Tk,
```

#### 33. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L412` → after: `L410-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L410-L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L412)

```diff
-       h: () => fC
+       k: () => yk,
+       o: () => Xk,
+       s: () => lk
```

#### 34. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L684)

```diff
-   40750: (CC, zC, ZC) => {
+   40930: (kk, Fk, Ik) => {
```

#### 35. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L687)

```diff
-       d: () => qC,
+       e: () => qk,
```

#### 36. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L690-L692` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L690-L692) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L690-L692)

```diff
-     var QC = ZC(4733),
-       wC = ZC(2348),
-       bC = ZC(4752);
+     var Xk = Ik(4799),
+       Tk = Ik(2331),
+       ik = Ik(4814);
```

#### 37. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L708-L713` → after: `L708-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L708-L713) · [Before (L708-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L708-L713)

```diff
-         case QC.Q.MouseDown:
-         case QC.Q.MouseUp:
-         case QC.Q.TouchStart:
-         case QC.Q.TouchEnd:
-         case QC.Q.TouchCancel:
-         case QC.Q.TouchButton:
+         case Xk.I.MouseDown:
+         case Xk.I.MouseUp:
+         case Xk.I.TouchStart:
+         case Xk.I.TouchEnd:
+         case Xk.I.TouchCancel:
+         case Xk.I.TouchButton:
```

#### 38. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L715-L717` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L715-L717) · [Before (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L715-L717)

```diff
-         case QC.Q.KeyDown:
-         case QC.Q.KeyUp:
-           return 0 === (zC & wC.f.Repeat) && !(0, bC.d)(document.activeElement);
+         case Xk.I.KeyDown:
+         case Xk.I.KeyUp:
+           return 0 === (Fk & Tk.i.Repeat) && !(0, ik.f)(document.activeElement);
```

#### 39. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L729)

```diff
-   4752: (CC, zC, ZC) => {
+   4814: (kk, Fk, Ik) => {
```

#### 40. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L731-L733` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L731-L733) · [Before (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L731-L733)

```diff
-       b: () => fC,
-       d: () => nC,
-       e: () => qC
+       e: () => lk,
+       f: () => yk,
+       g: () => qk
```

#### 41. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L735-L736` → after: `L735-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L735-L736) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L735-L736)

```diff
-     var QC = ZC(2348),
-       wC = ZC(2351);
+     var Xk = Ik(2331),
+       Tk = Ik(2338);
```

#### 42. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L747)

```diff
-           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
+           Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
```

#### 43. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L771)

```diff
-       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
+       ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
```

#### 44. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L774)

```diff
-       return (0, wC.v)(CC, bC & CC)
+       return (0, Tk.x)(kk, ik & kk)
```

#### 45. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L777)

```diff
-   40779: (CC, zC, ZC) => {
+   40963: (kk, Fk, Ik) => {
```

#### 46. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L780-L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L781) · [Before (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L780-L781)

```diff
-       h: () => oC,
-       j: () => fC,
+       i: () => lk,
```

#### 47. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L784)

```diff
-     var QC = ZC(1851);
+     var Xk = Ik(1886);
```

#### 48. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L806)

```diff
-   40820: (CC, zC, ZC) => {
+   41003: (kk, Fk, Ik) => {
```

#### 49. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L808)

```diff
-       b: () => QC
+       c: () => Xk
```

#### 50. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L812)

```diff
-   40723: (CC, zC, ZC) => {
+   40896: (kk, Fk, Ik) => {
```

#### 51. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L815` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L816-L817) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L815)

```diff
-       h: () => NC,
+       e: () => Pk,
+       f: () => Qk,
```

#### 52. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L817-L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L819) · [Before (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L817-L819)

```diff
-       l: () => xC,
-       m: () => AC,
-       p: () => IC
+       l: () => Vk
```

#### 53. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L821-L829` → after: `L821-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L821-L829) · [Before (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L821-L829)

```diff
-     var QC = ZC(155),
-       wC = ZC(20),
-       bC = ZC(28),
-       nC = ZC(2894),
-       fC = ZC(1257),
-       oC = ZC(34091),
-       qC = ZC(273),
-       FC = ZC(77),
-       WC = ZC(147);
+     var Xk = Ik(165),
+       Tk = Ik(25),
+       ik = Ik(34),
+       yk = Ik(2830),
+       lk = Ik(1276),
+       ak = Ik(34095),
+       qk = Ik(293),
+       Lk = Ik(95),
+       tk = Ik(161);
```

#### 54. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L833)

```diff
-       const zC = (0, nC.J)(),
+       const Fk = (0, yk.L)(),
```

#### 55. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L838)

```diff
-             pixelated: (0, nC.z)(CC.pixelSmoothing)
+             pixelated: (0, yk.x)(kk.pixelSmoothing)
```

#### 56. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L840-L841` → after: `L840-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L840-L841) · [Before (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L840-L841)

```diff
-         }(wC.b.get("clientEscMenuOptions"), zC);
-       return ZC.sampleCount > 1 && (0, oC.c)() && (ZC.sampleCount = 1), ZC.n = null !== (CC = (0, oC.l)()) && void 0 !== CC ? CC : ZC.n, QC.h.includes((0, FC.getSoftwareRenderer)()) && (ZC.sampleCount = 1, ZC.n = Math.max(ZC.n, (0, nC.B)(WC.x.pixelScale, zC))), ZC
+         }(Tk.d.get("clientEscMenuOptions"), Fk);
+       return Ik.sampleCount > 1 && (0, ak.e)() && (Ik.sampleCount = 1), Ik.n = null !== (kk = (0, ak.m)()) && void 0 !== kk ? kk : Ik.n, Xk.h.includes((0, Lk.getSoftwareRenderer)()) && (Ik.sampleCount = 1, Ik.n = Math.max(Ik.n, (0, yk.B)(tk.q.pixelScale, Fk))), Ik
```

#### 57. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L855)

```diff
-         CC.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", CC.setAttribute("aria-hidden", "true"), document.body.append(CC), gC = CC, MC = new nC.d(CC, PC)
+         kk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", kk.setAttribute("aria-hidden", "true"), document.body.append(kk), ek = kk, jk = new yk.e(kk, Jk)
```

#### 58. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L872)

```diff
-       return (0, nC.f)(CC, FC), CC.style.left = `${null!==(zC=null===(ZC=pC)||void 0===ZC?void 0:ZC.rect.left)&&void 0!==zC?zC:0}px`, CC.style.top = `${null!==(QC=null===(wC=pC)||void 0===wC?void 0:wC.rect.top)&&void 0!==QC?QC:0}px`, (0, fC.K)(CC.style, pC), FC
+       return (0, yk.f)(kk, Lk), kk.style.left = `${null!==(Fk=null===(Ik=Hk)||void 0===Ik?void 0:Ik.rect.left)&&void 0!==Fk?Fk:0}px`, kk.style.top = `${null!==(Xk=null===(Tk=Hk)||void 0===Tk?void 0:Tk.rect.top)&&void 0!==Xk?Xk:0}px`, (0, lk.P)(kk.style, Hk), Lk
```

#### 59. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L876)

```diff
-       pC = CC, GC(), (0, fC.C)(gC.style, CC, ""), PC()
+       Hk = kk, xk(), (0, lk.M)(ek.style, kk, ""), Jk()
```

#### 60. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L880)

```diff
-       CC.style.imageRendering = (0, nC.L)(zC.pixelated)
+       kk.style.imageRendering = (0, yk.N)(Fk.pixelated)
```

#### 61. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L884)

```diff
-       const ZC = (0, bC.q)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const Ik = (0, ik.i)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 62. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L888)

```diff
-         wC = (0, qC.m)(zC);
+         Tk = (0, qk.n)(Fk);
```

#### 63. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L894)

```diff
-   40827: (CC, zC, ZC) => {
+   41009: (kk, Fk, Ik) => {
```

#### 64. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L896-L898` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L896-L898) · [Before (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L896-L898)

```diff
-       b: () => nC,
-       e: () => bC,
-       g: () => wC
+       d: () => yk,
+       g: () => ik,
+       i: () => Tk
```

#### 65. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L915)

```diff
-   40772: (CC, zC, ZC) => {
+   40957: (kk, Fk, Ik) => {
```

#### 66. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L922` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L922) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L922)

```diff
-       r: () => NC
+       p: () => Zk
```

#### 67. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L924)

```diff
-     var QC = ZC(2856);
+     var Xk = Ik(2803);
```

#### 68. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L927)

```diff
-         super(`${"fetch"===CC?"fetching":"decoding"} ${zC} failed`, ZC), this.stage = CC, this.source = zC, this.name = "ShellImageError"
+         super(`${"fetch"===kk?"fetching":"decoding"} ${Fk} failed`, Ik), this.stage = kk, this.source = Fk, this.name = "ShellImageError"
```

#### 69. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L931)

```diff
-       let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.M,
+       let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.K,
```

#### 70. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L950)

```diff
-         throw new wC("decode", "string" === typeof CC ? CC : `${zC.byteLength} bytes`, {
+         throw new Tk("decode", "string" === typeof kk ? kk : `${Fk.byteLength} bytes`, {
```

#### 71. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L961)

```diff
-         for (const [zC, ZC] of fC) CC.TZC(zC, ZC);
+         for (const [Fk, Ik] of lk) kk.gIk(Fk, Ik);
```

#### 72. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L968)

```diff
-       return nC ? nC.TZC(zC, CC) : fC.set(zC, CC), zC
+       return yk ? yk.gIk(Fk, kk) : lk.set(Fk, kk), Fk
```

#### 73. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L983)

```diff
-       null === (zC = nC) || void 0 === zC || zC.aZC(CC)
+       null === (Fk = yk) || void 0 === Fk || Fk.mIk(kk)
```

#### 74. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L986)

```diff
-   40736: (CC, zC, ZC) => {
+   40905: (kk, Fk, Ik) => {
```

#### 75. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L992)

```diff
-       e: () => QC
+       c: () => Xk
```

#### 76. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/87.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/87.js#L995)

```diff
-   40743: (CC, zC, ZC) => {
+   40914: (kk, Fk, Ik) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L4)

```diff
-   40372: (CC, zC, ZC) => {
+   40542: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L8-L23` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L8-L23) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L8-L23)

```diff
-     ZC(40381);
-     var QC = ZC(40389),
-       wC = ZC(40405),
-       bC = ZC(1865),
-       nC = ZC(40412),
-       fC = ZC(4733),
-       oC = ZC(4711),
-       qC = ZC(40417),
-       FC = ZC(40423),
-       WC = ZC(4745),
-       NC = ZC(40500),
-       MC = ZC(2351),
-       gC = ZC(8850),
-       SC = ZC(40392),
-       pC = ZC(8831),
-       PC = ZC(38944);
+     Ik(40546);
+     var Xk = Ik(40554),
+       Tk = Ik(40570),
+       ik = Ik(1894),
+       yk = Ik(40583),
+       lk = Ik(4799),
+       ak = Ik(4792),
+       qk = Ik(40592),
+       Lk = Ik(40596),
+       tk = Ik(4810),
+       Zk = Ik(40670),
+       jk = Ik(2338),
+       ek = Ik(8833),
+       wk = Ik(40560),
+       Hk = Ik(8814),
+       Jk = Ik(39109);
```

#### 3. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25-L26` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L25-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L25-L26)

```diff
-         const zC = WC.c.indexOf(CC);
-         if (zC < 0) throw new Error(`No core action "${CC}"`);
+         const Fk = tk.e.indexOf(kk);
+         if (Fk < 0) throw new Error(`No core action "${kk}"`);
```

#### 4. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L41)

```diff
-         (0, MC.r)(fC.Q.PadAction, CC, 0, 0, (0, MC.q)(zC, performance.now()))
+         (0, jk.o)(lk.I.PadAction, kk, 0, 0, (0, jk.l)(Fk, performance.now()))
```

#### 5. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L44)

```diff
-         hC(CC, nC.Rd.Down)
+         Ek(kk, yk.td.Down)
```

#### 6. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L54-L57` → after: `L54-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L54-L57) · [Before (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L54-L57)

```diff
-         return null !== CC && void 0 !== CC && CC.isCoreRunning ? CC : null
-       },
-       HC = CC => nC.w.playerFlags(CC.api.apiView, 0),
-       EC = CC => null !== CC && nC.w.targetBlockId(CC.api.apiView, 0) !== nC.rd,
+         return null !== kk && void 0 !== kk && kk.isCoreRunning ? kk : null
+       },
+       uk = kk => yk.y.playerFlags(kk.api.apiView, 0),
+       bk = kk => null !== kk && yk.y.targetBlockId(kk.api.apiView, 0) !== yk._c,
```

#### 7. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L59-L60` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L59-L60) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L59-L60)

```diff
-         const CC = (0, gC.b)(),
-           zC = new SC.c;
+         const kk = (0, ek.c)(),
+           Fk = new wk.b;
```

#### 8. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L63)

```diff
-             (0, MC.r)(fC.Q.PadLook, nC._d.Rate, CC, zC, 0)
+             (0, jk.o)(lk.I.PadLook, yk.Ad.Rate, kk, Fk, 0)
```

#### 9. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L71)

```diff
-             const qC = (0, SC.p)(zC, wC, bC, oC, performance.now());
+             const qk = (0, wk.s)(Fk, Tk, ik, ak, performance.now());
```

#### 10. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L74)

```diff
-             0 === FC.VY && 0 === FC.Zm || (0, MC.r)(fC.Q.PadLook, nC._d.Gyro, FC.VY, FC.Zm, 0)
+             0 === Lk.JG && 0 === Lk.xG || (0, jk.o)(lk.I.PadLook, yk.Ad.Gyro, Lk.JG, Lk.xG, 0)
```

#### 11. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L82)

```diff
-         return null !== CC && 0 !== (HC(CC) & nC.ce.PadSneakToggled)
+         return null !== kk && 0 !== (uk(kk) & yk.Ed.PadSneakToggled)
```

#### 12. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L87)

```diff
-             return (0, NC.d)(), CC(...arguments)
+             return (0, Zk.b)(), kk(...arguments)
```

#### 13. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L111)

```diff
-               hC(nC.Vd.Drop, nC.Rd.Down | (CC ? nC.Rd.Stack : 0))
+               Ek(yk.vd.Drop, yk.td.Down | (kk ? yk.td.Stack : 0))
```

#### 14. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L136)

```diff
-                 bits: nC.Yd.Peek,
+                 bits: yk.xd.Peek,
```

#### 15. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L139)

```diff
-               const zC = CC.sneakHeld ? nC.Yd.SneakHeld : 0;
+               const Fk = kk.sneakHeld ? yk.xd.SneakHeld : 0;
```

#### 16. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L141)

```diff
-                 bits: zC | nC.Yd.SneakHoldMode,
+                 bits: Fk | yk.xd.SneakHoldMode,
```

#### 17. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L148)

```diff
-             null !== (wC = mC()) && void 0 !== wC && wC.padMove(CC.x, CC.y, CC.magnitude, CC.headingOffset, (CC => nC.Yd.Active | (CC.jumpHeld ? nC.Yd.JumpHeld : 0) | (CC.jumpPressed ? nC.Yd.JumpPressed : 0) | (CC.running ? nC.Yd.Running : 0) | (CC.sprintHeld ? nC.Yd.SprintHeld : … [truncated]
+             null !== (Tk = pk()) && void 0 !== Tk && Tk.padMove(kk.x, kk.y, kk.magnitude, kk.headingOffset, (kk => yk.xd.Active | (kk.jumpHeld ? yk.xd.JumpHeld : 0) | (kk.jumpPressed ? yk.xd.JumpPressed : 0) | (kk.running ? yk.xd.Running : 0) | (kk.sprintHeld ? yk.xd.SprintHeld : … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L152-L153` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L152-L153) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L152-L153)

```diff
-             zC && (zC = !(null !== (CC = mC()) && void 0 !== CC && CC.padMove(0, 0, 0, 0, 0, 0)), QC(), ZC = (0, oC.r)((() => {
-               QC(), (0, pC.e)(XC())
+             Fk && (Fk = !(null !== (kk = pk()) && void 0 !== kk && kk.padMove(0, 0, 0, 0, 0, 0)), Xk(), Ik = (0, ak.y)((() => {
+               Xk(), (0, Hk.g)(Uk())
```

#### 19. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L159)

```diff
-             "touch" === CC ? ((0, pC.e)(!1), null !== (ZC = mC()) && void 0 !== ZC && ZC.padMove(0, 0, 0, 0, nC.Yd.EndToggle, 0) && (zC = !1)) : "gamepad" === CC && (0, pC.e)(XC())
+             "touch" === kk ? ((0, Hk.g)(!1), null !== (Ik = pk()) && void 0 !== Ik && Ik.padMove(0, 0, 0, 0, yk.xd.EndToggle, 0) && (Fk = !1)) : "gamepad" === kk && (0, Hk.g)(Uk())
```

#### 20. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L168)

```diff
-             return null !== CC && 0 !== (HC(CC) & nC.ce.Replay)
+             return null !== kk && 0 !== (uk(kk) & yk.Ed.Replay)
```

#### 21. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L172)

```diff
-             return null !== CC && 0 !== (HC(CC) & nC.ce.FreeCam)
+             return null !== kk && 0 !== (uk(kk) & yk.Ed.FreeCam)
```

#### 22. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L177)

```diff
-             return !(null !== (CC = mC()) && void 0 !== CC && CC.items.vq())
+             return !(null !== (kk = pk()) && void 0 !== kk && kk.items.eq())
```

#### 23. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L181-L184` → after: `L181-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L181-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L181-L184) · [Before (L181-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L181-L184)

```diff
-             hC(nC.Vd.Hotbar, nC.Rd.Down | (CC > 0 ? nC.Rd.Next : 0))
-           },
-           hasFullInventory: qC.q,
-           hasLobbyTab: () => (0, PC.d)({
+             Ek(yk.vd.Hotbar, yk.td.Down | (kk > 0 ? yk.td.Next : 0))
+           },
+           hasFullInventory: qk.n,
+           hasLobbyTab: () => (0, Jk.b)({
```

#### 24. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L192-L194` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L192-L194) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L192-L194)

```diff
-               holdingGun: !1 !== (null === wC || void 0 === wC ? void 0 : wC.localPlayerAlive()) && "Gun" === (null === wC || void 0 === wC || null === (CC = wC.items.vq()) || void 0 === CC || null === (zC = CC.typeObj) || void 0 === zC ? void 0 : zC.type),
-               customButtons: null !== (ZC = bC.e.get("customButtons")) && void 0 !== ZC ? ZC : null,
-               touchscreenActionButton: null !== (QC = bC.e.get("touchscreenActionButton")) && void 0 !== QC ? QC : null
+               holdingGun: !1 !== (null === Tk || void 0 === Tk ? void 0 : Tk.localPlayerAlive()) && "Gun" === (null === Tk || void 0 === Tk || null === (kk = Tk.items.eq()) || void 0 === kk || null === (Fk = kk.typeObj) || void 0 === Fk ? void 0 : Fk.type),
+               customButtons: null !== (Ik = ik.e.get("customButtons")) && void 0 !== Ik ? Ik : null,
+               touchscreenActionButton: null !== (Xk = ik.e.get("touchscreenActionButton")) && void 0 !== Xk ? Xk : null
```

#### 25. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L204)

```diff
-           zC = (0, QC.e)(),
+           Fk = (0, Xk.c)(),
```

#### 26. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L211)

```diff
-   4711: (CC, zC, ZC) => {
+   4792: (kk, Fk, Ik) => {
```

#### 27. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L214-L220` → after: `L214-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L214-L219) · [Before (L214-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L214-L220)

```diff
-       B: () => nC,
-       E: () => fC,
-       G: () => vC,
-       b: () => iC,
-       e: () => AC,
-       h: () => dC,
-       j: () => YC,
+       D: () => xk,
+       F: () => yk,
+       I: () => lk,
+       L: () => Sk,
+       c: () => zk,
+       g: () => Kk,
```

#### 28. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L222-L225` → after: `L221-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L221-L224) · [Before (L222-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L222-L225)

```diff
-       m: () => JC,
-       n: () => RC,
-       p: () => xC,
-       r: () => eC,
+       l: () => nk,
+       o: () => Jk,
+       s: () => sk,
+       t: () => Pk,
```

#### 29. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L227` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L226-L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L227)

```diff
-       w: () => KC
+       y: () => vk,
+       z: () => Ek
```

#### 30. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L229)

```diff
-     var QC = ZC(4719);
+     var Xk = Ik(4794);
```

#### 31. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L238)

```diff
-       bC = null !== CC && void 0 !== CC ? CC : wC
+       ik = null !== kk && void 0 !== kk ? kk : Tk
```

#### 32. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L330)

```diff
-       const bC = (0, QC.i)(zC),
+       const ik = (0, Xk.f)(Fk),
```

#### 33. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L362)

```diff
-   4745: (CC, zC, ZC) => {
+   4810: (kk, Fk, Ik) => {
```

#### 34. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L364-L366` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L364) · [Before (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L364-L366)

```diff
-       c: () => wC,
-       d: () => bC,
-       f: () => nC,
+       e: () => Tk,
```

#### 35. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L368` → after: `L366-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L366-L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L368)

```diff
-       h: () => fC
+       k: () => yk,
+       o: () => Xk,
+       s: () => lk
```

#### 36. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L640)

```diff
-   40500: (CC, zC, ZC) => {
+   40670: (kk, Fk, Ik) => {
```

#### 37. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L642-L644` → after: `L642-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L642-L644) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L642-L644)

```diff
-       d: () => nC,
-       f: () => bC,
-       i: () => wC
+       b: () => yk,
+       c: () => ik,
+       e: () => Tk
```

#### 38. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L661)

```diff
-   4752: (CC, zC, ZC) => {
+   4814: (kk, Fk, Ik) => {
```

#### 39. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L663-L665` → after: `L663-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L663-L665) · [Before (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L663-L665)

```diff
-       b: () => fC,
-       d: () => nC,
-       e: () => qC
+       e: () => lk,
+       f: () => yk,
+       g: () => qk
```

#### 40. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L667-L668` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L667-L668) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L667-L668)

```diff
-     var QC = ZC(2348),
-       wC = ZC(2351);
+     var Xk = Ik(2331),
+       Tk = Ik(2338);
```

#### 41. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L679)

```diff
-           wC !== zC && (zC = wC, CC(QC.j.UiCapture, QC.v.Keyboard, 0, 0, wC ? QC.v.Keyboard : 0))
+           Tk !== Fk && (Fk = Tk, kk(Xk.m.UiCapture, Xk.A.Keyboard, 0, 0, Tk ? Xk.A.Keyboard : 0))
```

#### 42. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L703)

```diff
-       oC.set(QC, (null !== (ZC = oC.get(QC)) && void 0 !== ZC ? ZC : 0) & ~CC | zC & CC);
+       ak.set(Xk, (null !== (Ik = ak.get(Xk)) && void 0 !== Ik ? Ik : 0) & ~kk | Fk & kk);
```

#### 43. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L706)

```diff
-       return (0, wC.v)(CC, bC & CC)
+       return (0, Tk.x)(kk, ik & kk)
```

#### 44. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L709)

```diff
-   36796: (CC, zC, ZC) => {
+   36976: (kk, Fk, Ik) => {
```

#### 45. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L726-L727` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L726-L727) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L726-L727)

```diff
-       d: () => nC,
-       g: () => QC,
+       e: () => yk,
+       h: () => Xk,
```

#### 46. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L732)

```diff
-   36794: (CC, zC, ZC) => {
+   36969: (kk, Fk, Ik) => {
```

#### 47. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L736-L737` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L736-L737) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L736-L737)

```diff
-     var QC = ZC(36796),
-       wC = ZC(9194);
+     var Xk = Ik(36976),
+       Tk = Ik(9183);
```

#### 48. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L742)

```diff
-     for (const FC of Object.keys(wC.n))(0, QC.g)(FC) ? bC.push(FC) : (0, QC.l)(FC) && nC.push(FC), (0, QC.i)(FC) && fC.push(FC), (FC.includes(" Bed Head") || FC.includes(" Strongbed Head")) && oC.push(FC);
+     for (const Lk of Object.keys(Tk.n))(0, Xk.h)(Lk) ? ik.push(Lk) : (0, Xk.l)(Lk) && yk.push(Lk), (0, Xk.i)(Lk) && lk.push(Lk), (Lk.includes(" Bed Head") || Lk.includes(" Strongbed Head")) && ak.push(Lk);
```

#### 49. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L752)

```diff
-   6484: (CC, zC, ZC) => {
+   6475: (kk, Fk, Ik) => {
```

#### 50. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L757-L760` → after: `L757-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/88.js#L757-L760) · [Before (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/88.js#L757-L760)

```diff
-       k: () => bC,
-       o: () => qC,
-       r: () => QC,
-       t: () => fC
+       j: () => ik,
+       m: () => qk,
+       n: () => Xk,
+       o: () => lk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 1. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L4)

```diff
-   4733: (CC, zC, ZC) => {
+   4799: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L10-L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L11)

```diff
-       G: () => JC,
+       E: () => Xk,
+       F: () => ik,
```

#### 3. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L15-L16` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L14) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L15-L16)

```diff
-       Jb: () => EC,
-       Lb: () => jC,
+       Kb: () => Nk,
```

#### 4. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L25-L26` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L24-L25) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L25-L26)

```diff
-       Yb: () => uC,
-       Z: () => NC,
+       Xb: () => Ck,
+       _: () => Qk,
```

#### 5. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L28-L30` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L27-L29) · [Before (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L28-L30)

```diff
-       ab: () => FC,
-       ac: () => KC,
-       d: () => GC,
+       bc: () => fk,
+       cb: () => ak,
+       e: () => xk,
```

#### 6. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L40` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L37-L39) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L40)

```diff
-       kb: () => oC,
+       k: () => Pk,
+       lb: () => nk,
+       lc: () => gk,
```

#### 7. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L42-L48` → after: `L41-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L41-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L41-L47) · [Before (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L42-L48)

```diff
-       mc: () => aC,
-       nb: () => SC,
-       o: () => UC,
-       qc: () => vC,
-       rb: () => gC,
-       s: () => MC,
-       uc: () => eC,
+       ob: () => pk,
+       pc: () => Tk,
+       q: () => jk,
+       qb: () => uk,
+       sc: () => Dk,
+       tb: () => Gk,
+       u: () => zk,
```

#### 8. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L51-L53` → after: `L50-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L50-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L51-L53)

```diff
-       xc: () => yC,
-       yc: () => wC,
-       zb: () => mC
+       x: () => Vk,
+       y: () => sk,
+       yb: () => Ak,
+       z: () => yk
```

#### 9. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L574)

```diff
-   4727: (CC, zC, ZC) => {
+   4797: (kk, Fk, Ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L577-L582` → after: `L577-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L577-L578) · [Before (L577-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L577-L582)

```diff
-       $d: () => Pz,
-       Ac: () => QC.Gb,
-       B: () => YC,
-       Bb: () => zz,
-       Bc: () => QC.Jb,
-       C: () => nC,
+       A: () => yk,
+       Bb: () => Xk.N,
```

#### 11. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L585-L587` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L582) · [Before (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L585-L587)

```diff
-       Dd: () => sC,
-       Eb: () => QC.W,
-       Ec: () => QC.Rb,
+       E: () => uk,
```

#### 12. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L589-L591` → after: `L584-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L584-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L584-L587) · [Before (L589-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L589-L591)

```diff
-       G: () => HC,
-       Hb: () => wz,
-       Hc: () => pz,
+       Fd: () => tF,
+       Gc: () => Xk.vb,
+       Gd: () => Wk,
+       Hc: () => Xk.Db,
```

#### 13. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L593-L597` → after: `L589-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L589-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L589-L592) · [Before (L593-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L593-L597)

```diff
-       J: () => Sz,
-       Jb: () => QC.Z,
-       Jd: () => rC,
-       Kc: () => Nz,
-       Lb: () => wC.f,
+       I: () => HF,
+       Jb: () => Xk.O,
+       Kb: () => Tk.i,
+       L: () => Mk,
```

#### 14. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L599` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L594) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L599)

```diff
-       M: () => kC,
+       Ld: () => ck,
```

#### 15. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L601-L603` → after: `L596-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L596-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L596-L603) · [Before (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L601-L603)

```diff
-       Md: () => jC,
-       N: () => QC.o,
-       Oc: () => QC.Vb,
+       Mc: () => jF,
+       N: () => Xk.m,
+       Nc: () => lF,
+       Nd: () => Ak,
+       O: () => qk,
+       Ob: () => Nk,
+       P: () => Xk.q,
+       Pc: () => Xk.Gb,
```

#### 16. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L607-L609` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L606-L608) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L607-L609)

```diff
-       Rd: () => LC,
-       Sc: () => QC.Yb,
-       T: () => QC.s,
+       Sb: () => Gk,
+       Sc: () => Xk.Kb,
+       Sd: () => mk,
```

#### 17. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L611-L613` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L610-L611) · [Before (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L611-L613)

```diff
-       Tc: () => QC._b,
-       Ud: () => yC,
-       Vc: () => VC,
+       U: () => Xk.u,
+       Uc: () => Xk.Nb,
```

#### 18. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L615-L623` → after: `L613-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L613-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L613-L625) · [Before (L615-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L615-L623)

```diff
-       Wb: () => KC,
-       Wc: () => QC.ac,
-       Xd: () => qz,
-       Yb: () => QC.ib,
-       _: () => QC.w,
-       _c: () => QC.ec,
-       ab: () => QC.G,
-       ac: () => mC,
-       ad: () => QC.fc,
+       Wb: () => Xk._,
+       Wd: () => gk,
+       X: () => Xk.y,
+       Xb: () => pk,
+       Xc: () => kF,
+       Y: () => Xk.z,
+       Yd: () => LF,
+       Zb: () => sk,
+       _: () => Xk.C,
+       _c: () => Xk.Tb,
+       ad: () => Xk.Vb,
+       ae: () => xF,
+       bc: () => qF,
```

#### 19. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L625-L628` → after: `L627-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L627-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L627-L633) · [Before (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L625-L628)

```diff
-       d: () => Qz,
-       db: () => QC.H,
-       dc: () => JC,
-       eb: () => QC.I,
+       cb: () => Pk,
+       cd: () => Xk.Xb,
+       ce: () => hk,
+       db: () => Xk.E,
+       de: () => Uk,
+       e: () => TF,
+       eb: () => Xk.F,
```

#### 20. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L632` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L636) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L632)

```diff
-       fd: () => QC.jc,
+       fd: () => Xk.$b,
```

#### 21. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L635-L636` → after: `L639-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L639-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L639-L641) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L635-L636)

```diff
-       ge: () => XC,
-       hc: () => Mz,
+       h: () => wk,
+       hd: () => Xk.bc,
+       he: () => bk,
```

#### 22. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L638-L644` → after: `L643-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L643-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L643-L645) · [Before (L638-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L638-L644)

```diff
-       id: () => QC.mc,
-       jc: () => wC.k,
-       je: () => lC,
-       k: () => SC,
-       kb: () => RC,
-       kd: () => NC,
-       lb: () => QC.M,
+       ic: () => Tk.p,
+       kd: () => Xk.ec,
+       l: () => ZF,
```

#### 23. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L646` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L647-L648) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L646)

```diff
-       m: () => Wz,
+       le: () => ak,
+       mb: () => aF,
```

#### 24. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L651-L653` → after: `L651-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L651-L653) · [Before (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L651-L653)

```diff
-       oc: () => bz,
-       od: () => QC.qc,
-       pb: () => QC.O,
+       od: () => Ek,
+       p: () => zk,
+       pb: () => Lk,
```

#### 25. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L655-L671` → after: `L655-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L655-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L655-L671) · [Before (L655-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L655-L671)

```diff
-       qb: () => TC,
-       qd: () => QC.uc,
-       r: () => iC,
-       rb: () => fz,
-       re: () => Gz,
-       sb: () => FC,
-       sc: () => QC.vb,
-       td: () => QC.yc,
-       v: () => QC.i,
-       ve: () => gC,
-       wb: () => QC.Q,
-       wc: () => QC.zb,
-       x: () => gz,
-       xb: () => DC,
-       xd: () => bC,
-       yc: () => QC.Db,
- ... (1 more removed lines; see GitHub link above)
+       qc: () => yF,
+       rb: () => Xk.I,
+       rc: () => Xk.lb,
+       rd: () => Xk.fc,
+       se: () => PF,
+       t: () => Xk.i,
+       u: () => wF,
+       ub: () => Yk,
+       uc: () => Xk.ob,
+       ud: () => Xk.jc,
+       ue: () => ek,
+       w: () => nk,
+       yb: () => IF,
+       yc: () => Xk.qb,
+       yd: () => Xk.pc,
+       zb: () => Dk,
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L673-L675` → after: `L673-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L673-L675) · [Before (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L673-L675)

```diff
-     var QC = ZC(4733),
-       wC = ZC(2348);
-     const bC = Math.round(1e3 / QC.yc),
+     var Xk = Ik(4799),
+       Tk = Ik(2331);
+     const ik = Math.round(1e3 / Xk.pc),
```

#### 27. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L915)

```diff
-       for (const [zC, ZC] of Object.entries(QC.o))
+       for (const [Fk, Ik] of Object.entries(Xk.m))
```

#### 28. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L917)

```diff
-       return `Unknown${CC}`
+       return `Unknown${kk}`
```

#### 29. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L922-L930` → after: `L922-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L922-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L922-L930) · [Before (L922-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L922-L930)

```diff
-         status: CC[QC.O.Status],
-         lastError: CC[QC.O.LastError],
-         lastErrorDetail: CC[QC.O.LastErrorDetail],
-         errorCount: CC[QC.O.ErrorCount],
-         frameIndex: CC[QC.O.FrameIndex],
-         tickIndex: CC[QC.O.TickIndex],
-         renderPending: CC[QC.O.RenderPending],
-         firstView: CC[QC.O.FirstView],
-         chunksCancelled: CC[QC.O.ChunksCancelled]
+         status: kk[Xk.F.Status],
+         lastError: kk[Xk.F.LastError],
+         lastErrorDetail: kk[Xk.F.LastErrorDetail],
+         errorCount: kk[Xk.F.ErrorCount],
+         frameIndex: kk[Xk.F.FrameIndex],
+         tickIndex: kk[Xk.F.TickIndex],
+         renderPending: kk[Xk.F.RenderPending],
+         firstView: kk[Xk.F.FirstView],
+         chunksCancelled: kk[Xk.F.ChunksCancelled]
```

#### 30. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L934)

```diff
-   4719: (CC, zC, ZC) => {
+   4794: (kk, Fk, Ik) => {
```

#### 31. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L937-L938` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L937-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L937-L938)

```diff
-       f: () => bC,
-       i: () => wC
+       e: () => ik,
+       f: () => Tk
```

#### 32. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L940)

```diff
-     var QC = ZC(4727);
+     var Xk = Ik(4797);
```

#### 33. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L949)

```diff
-         case QC.eb.Drawn:
+         case Xk._.Drawn:
```

#### 34. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L951` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/89.js#L951) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/89.js#L951)

```diff
-         case QC.eb.Paced:
+         case Xk._.Paced:
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (937 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 1. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L4)

```diff
-   41278: (CC, zC, ZC) => {
+   41480: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L12)

```diff
-       }] = await Promise.all([Promise.resolve().then((() => ZC(1149))), Promise.resolve().then((() => ZC(1078))), Promise.resolve().then((() => ZC(1840)))]), nC = bC.latest("connectedGame").websocketUrl;
+       }] = await Promise.all([Promise.resolve().then((() => Ik(1194))), Promise.resolve().then((() => Ik(1120))), Promise.resolve().then((() => Ik(1875)))]), yk = ik.latest("connectedGame").websocketUrl;
```

#### 3. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L14)

```diff
-       const fC = `${QC.getHttpUrlFromWebSocketUrl(nC)}${CC}`;
+       const lk = `${Xk.getHttpUrlFromWebSocketUrl(yk)}${kk}`;
```

#### 4. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L23)

```diff
-   41269: (CC, zC, ZC) => {
+   41478: (kk, Fk, Ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L28-L29)

```diff
-     var QC = ZC(48),
-       wC = ZC(1002),
+     var Xk = Ik(58),
+       Tk = Ik(1055),
```

#### 6. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L31)

```diff
-       nC = ZC(1056);
+       yk = Ik(1096);
```

#### 7. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L44)

```diff
-       const [NC, MC] = (0, QC.useState)(oC), gC = null !== qC && void 0 !== qC ? qC : NC;
+       const [Zk, jk] = (0, Xk.useState)(ak), ek = null !== qk && void 0 !== qk ? qk : Zk;
```

#### 8. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L64-L75` → after: `L64-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L64-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L64-L75) · [Before (L64-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L64-L75)

```diff
-     var oC = ZC(1840),
-       qC = ZC(6499),
-       FC = ZC(1388),
-       WC = ZC(36759),
-       NC = ZC(1013),
-       MC = ZC(4679),
-       gC = ZC(36740),
-       SC = ZC(36779),
-       pC = ZC(1520),
-       PC = ZC(4755),
-       GC = ZC(6492);
-     const RC = new URL(pC.d).host;
+     var ak = Ik(1875),
+       qk = Ik(6491),
+       Lk = Ik(1406),
+       tk = Ik(36929),
+       Zk = Ik(1066),
+       jk = Ik(4745),
+       ek = Ik(36912),
+       wk = Ik(36946),
+       Hk = Ik(1534),
+       Jk = Ik(4821),
+       xk = Ik(6486);
+     const Pk = new URL(Hk.b).host;
```

#### 9. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L81-L83` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L81-L83) · [Before (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L81-L83)

```diff
-         const CC = /^docs\//i.test(zC) ? `${pC.d}/` : `${pC.d}/docs/`,
-           QC = zC.toLowerCase().replace(/^www\./, "").startsWith(`${RC}/`);
-         ZC = new URL(QC ? `https://${zC}` : zC, CC)
+         const kk = /^docs\//i.test(Fk) ? `${Hk.b}/` : `${Hk.b}/docs/`,
+           Xk = Fk.toLowerCase().replace(/^www\./, "").startsWith(`${Pk}/`);
+         Ik = new URL(Xk ? `https://${Fk}` : Fk, kk)
```

#### 10. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L87)

```diff
-       if ("https:" !== ZC.protocol && "http:" !== ZC.protocol || ZC.host !== RC && ZC.host !== `www.${RC}`) return null;
+       if ("https:" !== Ik.protocol && "http:" !== Ik.protocol || Ik.host !== Pk && Ik.host !== `www.${Pk}`) return null;
```

#### 11. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L89)

```diff
-       return xC(QC) || null !== (0, PC.y)(QC) ? QC : (0, PC.w)(QC)
+       return Qk(Xk) || null !== (0, Jk.z)(Xk) ? Xk : (0, Jk.w)(Xk)
```

#### 12. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L93)

```diff
-       return CC === PC.g || CC === PC.m
+       return kk === Jk.g || kk === Jk.k
```

#### 13. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L98)

```diff
-       return null === zC ? CC : `${pC.d}${zC}`
+       return null === Fk ? kk : `${Hk.b}${Fk}`
```

#### 14. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L100-L101)

```diff
-     var IC = ZC(191),
-       iC = ZC(41203),
+     var Vk = Ik(198),
+       zk = Ik(41403),
```

#### 15. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L168)

```diff
-         const ZC = /\w/.test(zC[0]) && /\w/.test(null !== (oC = CC[fC - 1]) && void 0 !== oC ? oC : "") || /\w/.test(null !== (qC = zC.at(-1)) && void 0 !== qC ? qC : "") && /\w/.test(null !== (FC = CC[fC + zC.length]) && void 0 !== FC ? FC : "");
+         const Ik = /\w/.test(Fk[0]) && /\w/.test(null !== (ak = kk[lk - 1]) && void 0 !== ak ? ak : "") || /\w/.test(null !== (qk = Fk.at(-1)) && void 0 !== qk ? qk : "") && /\w/.test(null !== (Lk = kk[lk + Fk.length]) && void 0 !== Lk ? Lk : "");
```

#### 16. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L186)

```diff
-       return null !== (zC = null === (ZC = /^[ \t]*/.exec(CC)) || void 0 === ZC ? void 0 : ZC[0]) && void 0 !== zC ? zC : ""
+       return null !== (Fk = null === (Ik = /^[ \t]*/.exec(kk)) || void 0 === Ik ? void 0 : Ik[0]) && void 0 !== Fk ? Fk : ""
```

#### 17. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L205)

```diff
-         return (null !== (ZC = null === (QC = CC.replace(/\\`/g, "").match(/`/g)) || void 0 === QC ? void 0 : QC.length) && void 0 !== ZC ? ZC : 0) % 2 === 1 && (WC = !WC), wC || oC && zC !== FC ? CC : function(CC, zC, ZC) {
+         return (null !== (Ik = null === (Xk = kk.replace(/\\`/g, "").match(/`/g)) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== Ik ? Ik : 0) % 2 === 1 && (tk = !tk), Tk || ak && Fk !== Lk ? kk : function(kk, Fk, Ik) {
```

#### 18. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L226)

```diff
-         (null !== (nC = null === (fC = CC.replace(/\\`/g, "").match(/`/g)) || void 0 === fC ? void 0 : fC.length) && void 0 !== nC ? nC : 0) % 2 === 1 && (bC = !bC);
+         (null !== (yk = null === (lk = kk.replace(/\\`/g, "").match(/`/g)) || void 0 === lk ? void 0 : lk.length) && void 0 !== yk ? yk : 0) % 2 === 1 && (ik = !ik);
```

#### 19. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L230-L231` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L230-L231) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L230-L231)

```diff
-         const NC = null !== (oC = wC.slice(zC + 1).find((CC => "" !== CC.trim()))) && void 0 !== oC ? oC : ZC;
-         return /^(?:[([`+-]|\/(?![/*]))/.test(NC.trim()) ? CC : CC.slice(0, CC.length - CC.trimStart().length) + WC
+         const Zk = null !== (ak = Tk.slice(Fk + 1).find((kk => "" !== kk.trim()))) && void 0 !== ak ? ak : Ik;
+         return /^(?:[([`+-]|\/(?![/*]))/.test(Zk.trim()) ? kk : kk.slice(0, kk.length - kk.trimStart().length) + tk
```

#### 20. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L233)

```diff
-       return nC.trim() === CC.trim() && zC.trim() !== CC.trim() ? zC : nC
+       return yk.trim() === kk.trim() && Fk.trim() !== kk.trim() ? Fk : yk
```

#### 21. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L238)

```diff
-       return null !== (zC = CC.split("\n").find((CC => "" !== CC.trim()))) && void 0 !== zC ? zC : ""
+       return null !== (Fk = kk.split("\n").find((kk => "" !== kk.trim()))) && void 0 !== Fk ? Fk : ""
```

#### 22. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L245)

```diff
-         ZC.set(nC, (null !== (QC = ZC.get(nC)) && void 0 !== QC ? QC : 0) + 1)
+         Ik.set(yk, (null !== (Xk = Ik.get(yk)) && void 0 !== Xk ? Xk : 0) + 1)
```

#### 23. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L250)

```diff
-         const CC = null !== (bC = ZC.get(nC)) && void 0 !== bC ? bC : 0;
+         const kk = null !== (ik = Ik.get(yk)) && void 0 !== ik ? ik : 0;
```

#### 24. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L303)

```diff
-       for (const bC of (null !== (wC = vC().getLeadingCommentRanges(CC, zC.getFullStart())) && void 0 !== wC ? wC : []).reverse()) {
+       for (const ik of (null !== (Tk = Sk().getLeadingCommentRanges(kk, Fk.getFullStart())) && void 0 !== Tk ? Tk : []).reverse()) {
```

#### 25. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L316)

```diff
-       return (null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : 0) > 0
+       return (null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.length) && void 0 !== Fk ? Fk : 0) > 0
```

#### 26. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L325)

```diff
-             if (vC().isFunctionDeclaration(CC)) return null !== (zC = null === (ZC = CC.name) || void 0 === ZC ? void 0 : ZC.text) && void 0 !== zC ? zC : null;
+             if (Sk().isFunctionDeclaration(kk)) return null !== (Fk = null === (Ik = kk.name) || void 0 === Ik ? void 0 : Ik.text) && void 0 !== Fk ? Fk : null;
```

#### 27. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L370-L371` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L370-L371) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L370-L371)

```diff
-         bC = wC.length > 0 ? wC : QC;
-       return null !== (ZC = bC.find((CC => CC.topLevel))) && void 0 !== ZC ? ZC : bC[0]
+         ik = Tk.length > 0 ? Tk : Xk;
+       return null !== (Ik = ik.find((kk => kk.topLevel))) && void 0 !== Ik ? Ik : ik[0]
```

#### 28. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L375)

```diff
-       return "" === CC.trim() ? `${zC.trim()}\n` : `${CC.replace(/\s*$/,"")}\n\n${zC.trim()}\n`
+       return "" === kk.trim() ? `${Fk.trim()}\n` : `${kk.replace(/\s*$/,"")}\n\n${Fk.trim()}\n`
```

#### 29. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L385)

```diff
-         oC = null !== (QC = fC.find((CC => CC.topLevel && !CC.isProperty))) && void 0 !== QC ? QC : fC.find((CC => CC.topLevel)),
+         ak = null !== (Xk = lk.find((kk => kk.topLevel && !kk.isProperty))) && void 0 !== Xk ? Xk : lk.find((kk => kk.topLevel)),
```

#### 30. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L388)

```diff
-         WC = null !== (wC = void 0 !== FC && !fC.some((CC => CC.topLevel && CC.name === qC)) ? FC : jC(nC, qC)) && void 0 !== wC ? wC : FC;
+         tk = null !== (Tk = void 0 !== Lk && !lk.some((kk => kk.topLevel && kk.name === qk)) ? Lk : Ak(yk, qk)) && void 0 !== Tk ? Tk : Lk;
```

#### 31. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L413)

```diff
-       return fC && FC ? UC(CC, nC, null !== NC && void 0 !== NC ? NC : fC, oC.functions, wC) : function(CC, zC, ZC, QC, wC) {
+       return lk && Lk ? hk(kk, yk, null !== Zk && void 0 !== Zk ? Zk : lk, ak.functions, Tk) : function(kk, Fk, Ik, Xk, Tk) {
```

#### 32. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L430)

```diff
-       return 0 === ZC || "\n" === CC[ZC - 1] ? ZC : zC
+       return 0 === Ik || "\n" === kk[Ik - 1] ? Ik : Fk
```

#### 33. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L435)

```diff
-       if ("" !== CC.trim() && ("top" === QC || "start" === QC)) return `${ZC.trim()}\n\n${CC.replace(/^\s+/,"")}`;
+       if ("" !== kk.trim() && ("top" === Xk || "start" === Xk)) return `${Ik.trim()}\n\n${kk.replace(/^\s+/,"")}`;
```

#### 34. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L437)

```diff
-       return wC ? `${CC.slice(0,wC.to)}\n\n${ZC.trim()}${CC.slice(wC.to)}` : yC(CC, ZC)
+       return Tk ? `${kk.slice(0,Tk.to)}\n\n${Ik.trim()}${kk.slice(Tk.to)}` : gk(kk, Ik)
```

#### 35. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L451)

```diff
-         zC = `${CC.slice(0,Math.max(CC.lastIndexOf(" "),60)).trimEnd()}\u2026`
+         Fk = `${kk.slice(0,Math.max(kk.lastIndexOf(" "),60)).trimEnd()}\u2026`
```

#### 36. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L490)

```diff
-           bC = CC.length > 0 || !/\bplayerCommand\b/.test(oC) ? CC : [oC];
+           ik = kk.length > 0 || !/\bplayerCommand\b/.test(ak) ? kk : [ak];
```

#### 37. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L492)

```diff
-           for (const CC of zC.matchAll(Qz)) wC.add(`/${CC[1].split(/\s/)[0]}`)
+           for (const kk of Fk.matchAll(TF)) Tk.add(`/${kk[1].split(/\s/)[0]}`)
```

#### 38. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L535)

```diff
-       return `When: ${CC.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
+       return `When: ${kk.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 39. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L547-L548` → after: `L547-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L547-L548) · [Before (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L547-L548)

```diff
-         wC = new Set((null !== (zC = CC.match(qz)) && void 0 !== zC ? zC : []).map((CC => CC.toLowerCase().replace(/s$/, "")))).size,
-         bC = (null !== (ZC = CC.match(Fz)) && void 0 !== ZC ? ZC : []).length;
+         Tk = new Set((null !== (Fk = kk.match(LF)) && void 0 !== Fk ? Fk : []).map((kk => kk.toLowerCase().replace(/s$/, "")))).size,
+         ik = (null !== (Ik = kk.match(tF)) && void 0 !== Ik ? Ik : []).length;
```

#### 40. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L553-L554)

```diff
-       const zC = CC.split(/\n|\|/).map((CC => CC.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((CC => "" !== CC)).slice(0, 5).map((CC => CC.length > 90 ? `${CC.slice(0,89).trimEnd()}\u2026` : CC));
-       return zC.length >= 2 ? zC : []
+       const Fk = kk.split(/\n|\|/).map((kk => kk.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((kk => "" !== kk)).slice(0, 5).map((kk => kk.length > 90 ? `${kk.slice(0,89).trimEnd()}\u2026` : kk));
+       return Fk.length >= 2 ? Fk : []
```

#### 41. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L556)

```diff
-     var Mz = ZC(4804);
+     var eF = Ik(4866);
```

#### 42. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L576)

```diff
-         wC.set(CC, [...null !== (bC = wC.get(CC)) && void 0 !== bC ? bC : [], WC])
+         Tk.set(kk, [...null !== (ik = Tk.get(kk)) && void 0 !== ik ? ik : [], tk])
```

#### 43. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L585-L586` → after: `L585-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L585-L586) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L585-L586)

```diff
-         const CC = null !== (FC = wC.get(gz(WC))) && void 0 !== FC ? FC : [];
-         1 !== CC.length || nC.includes(CC[0]) || (qC = (0, Mz.v)(qC, new RegExp(`${WC}(?![\\w$])`, "g"), Mz.n, (() => CC[0])), oC.push({
+         const kk = null !== (Lk = Tk.get(wF(tk))) && void 0 !== Lk ? Lk : [];
+         1 !== kk.length || yk.includes(kk[0]) || (qk = (0, eF.s)(qk, new RegExp(`${tk}(?![\\w$])`, "g"), eF.l, (() => kk[0])), ak.push({
```

#### 44. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L601)

```diff
-       Gz = Object.keys(Pz).map((CC => `"${CC}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       PF = Object.keys(xF).map((kk => `"${kk}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
```

#### 45. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L969)

```diff
-         description: `Reads a page of Bloxd's docs as Markdown. ${PC.k} lists every page with its link; then read the page, or the part of a long page, you need`,
+         description: `Reads a page of Bloxd's docs as Markdown. ${Jk.h} lists every page with its link; then read the page, or the part of a long page, you need`,
```

#### 46. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L975)

```diff
-               description: `${PC.k}, or a page it links to`
+               description: `${Jk.h}, or a page it links to`
```

#### 47. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L993)

```diff
-               description: `${Gz}, to list every one of them`
+               description: `${PF}, to list every one of them`
```

#### 48. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1082` → after: `L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1082) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1082)

```diff
-       if (!zC) throw new Error(`No AI Helper tool ${CC}`);
+       if (!Fk) throw new Error(`No AI Helper tool ${kk}`);
```

#### 49. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1086-L1087` → after: `L1086-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1086-L1087) · [Before (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1086-L1087)

```diff
-       vz = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       ez = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${iz})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
+       oF = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
+       vF = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${SF})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
```

#### 50. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1099` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1099) · [Before (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1099)

```diff
-           ZC = -1 === zC ? CC : CC.slice(0, zC);
+           Ik = -1 === Fk ? kk : kk.slice(0, Fk);
```

#### 51. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1105)

```diff
-           Kz(ZC.slice(bC, CC)) && (QC = -1 === QC ? bC : QC, wC = CC), bC = CC
+           OF(Ik.slice(ik, kk)) && (Xk = -1 === Xk ? ik : Xk, Tk = kk), ik = kk
```

#### 52. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1107-L1108` → after: `L1107-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1107-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1107-L1108) · [Before (L1107-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1107-L1108)

```diff
-         return -1 === wC ? CC : "" !== ZC.slice(wC).trim() ? CC.slice(wC).trimStart() : `${CC.slice(0,QC).trimEnd()}\n${CC.slice(ZC.length)}`.trim()
-       }(ZC) : "" !== ZC.trim() ? ZC : CC
+         return -1 === Tk ? kk : "" !== Ik.slice(Tk).trim() ? kk.slice(Tk).trimStart() : `${kk.slice(0,Xk).trimEnd()}\n${kk.slice(Ik.length)}`.trim()
+       }(Ik) : "" !== Ik.trim() ? Ik : kk
```

#### 53. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1117` → after: `L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1117) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1117)

```diff
-       }(zC) ? zC : null
+       }(Fk) ? Fk : null
```

#### 54. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1131` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1131) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1131)

```diff
-             qC[null !== (nC = ZC[1]) && void 0 !== nC ? nC : ZC[2]] = null !== (fC = ZC[3]) && void 0 !== fC ? fC : ZC[4]
+             qk[null !== (yk = Ik[1]) && void 0 !== yk ? yk : Ik[2]] = null !== (lk = Ik[3]) && void 0 !== lk ? lk : Ik[4]
```

#### 55. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1157)

```diff
-       let zC = null !== CC && void 0 !== CC ? CC : {};
+       let Fk = null !== kk && void 0 !== kk ? kk : {};
```

#### 56. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1165` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1165) · [Before (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1165)

```diff
-       for (const [QC, wC] of Object.entries(zC)) "string" === typeof wC ? ZC[QC] = mz.has(QC) && dz.test(wC) && !wC.includes("\n") ? lz(wC) : wC : "boolean" === typeof wC || "number" === typeof wC ? ZC[QC] = String(wC) : "object" !== typeof wC || null === wC || Array.isArray(wC)  … [truncated]
+       for (const [Xk, Tk] of Object.entries(Fk)) "string" === typeof Tk ? Ik[Xk] = pF.has(Xk) && GF.test(Tk) && !Tk.includes("\n") ? RF(Tk) : Tk : "boolean" === typeof Tk || "number" === typeof Tk ? Ik[Xk] = String(Tk) : "object" !== typeof Tk || null === Tk || Array.isArray(Tk)  … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1191` → after: `L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1191) · [Before (L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1191)

```diff
-     const rz = new RegExp(`\\b(${xz.map((CC=>CC.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const cF = new RegExp(`\\b(${sF.map((kk=>kk.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
```

#### 58. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1198)

```diff
-           return `${CC}(${JSON.stringify(ZC)})`
+           return `${kk}(${JSON.stringify(Ik)})`
```

#### 59. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1202-L1204` → after: `L1202-L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1202-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1202-L1204) · [Before (L1202-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1202-L1204)

```diff
-         fileResult: (CC, zC, ZC) => `<file path="${CC}"${ZC?' open_in_editor="true"':""}>\n${zC}\n</file>`,
-         editFailure: (CC, zC) => `${CC} failed: ${zC}`,
-         lookupResult: (CC, zC, ZC) => `${CC} ${zC}:\n${ZC}`
+         fileResult: (kk, Fk, Ik) => `<file path="${kk}"${Ik?' open_in_editor="true"':""}>\n${Fk}\n</file>`,
+         editFailure: (kk, Fk) => `${kk} failed: ${Fk}`,
+         lookupResult: (kk, Fk, Ik) => `${kk} ${Fk}:\n${Ik}`
```

#### 60. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1217` → after: `L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1217) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1217)

```diff
-           const nC = null !== (ZC = null === (QC = CC.slice(fC).match(/^\s*<\|call\|>/)) || void 0 === QC ? void 0 : QC[0]) && void 0 !== ZC ? ZC : "";
+           const yk = null !== (Ik = null === (Xk = kk.slice(lk).match(/^\s*<\|call\|>/)) || void 0 === Xk ? void 0 : Xk[0]) && void 0 !== Ik ? Ik : "";
```

#### 61. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1239)

```diff
-       const fC = null !== (zC = null !== (ZC = null !== (QC = null !== (wC = nC.arguments) && void 0 !== wC ? wC : nC.params) && void 0 !== QC ? QC : nC.param) && void 0 !== ZC ? ZC : nC.args) && void 0 !== zC ? zC : nC.input,
+       const lk = null !== (Fk = null !== (Ik = null !== (Xk = null !== (Tk = yk.arguments) && void 0 !== Tk ? Tk : yk.params) && void 0 !== Xk ? Xk : yk.param) && void 0 !== Ik ? Ik : yk.args) && void 0 !== Fk ? Fk : yk.input,
```

#### 62. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1245)

```diff
-         } = nC, ZC = Xz(null !== fC && void 0 !== fC ? fC : zC);
+         } = yk, Ik = UF(null !== lk && void 0 !== lk ? lk : Fk);
```

#### 63. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1284)

```diff
-       if (Array.isArray(CC)) return `[${CC.map(jz).join(", ")}]`;
+       if (Array.isArray(kk)) return `[${kk.map(AF).join(", ")}]`;
```

#### 64. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1286` → after: `L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1286) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1286)

```diff
-         return `{${Object.entries(CC).map((CC=>{let[zC,ZC]=CC;return`${JSON.stringify(zC)}: ${jz(ZC)}`})).join(", ")}}`
+         return `{${Object.entries(kk).map((kk=>{let[Fk,Ik]=kk;return`${JSON.stringify(Fk)}: ${AF(Ik)}`})).join(", ")}}`
```

#### 65. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1291-L1292` → after: `L1291-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1291-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1291-L1292) · [Before (L1291-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1291-L1292)

```diff
-         formatCall: (CC, zC) => `<tool_call>\n<function=${CC}>\n${Object.entries(zC).flatMap((CC=>{let[zC,ZC]=CC;return void 0===ZC?[]:[`<parameter=${zC}>\n${ZC}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
-         declareTools: (CC, zC, ZC) => ZC || 0 === zC.length ? CC : `${function(CC){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${CC.map((CC=>`\n${jz({type:"function",function:{name:CC.name,description:CC.description,parameters:CC.inputSchema}})}`)).joi … [truncated]
+         formatCall: (kk, Fk) => `<tool_call>\n<function=${kk}>\n${Object.entries(Fk).flatMap((kk=>{let[Fk,Ik]=kk;return void 0===Ik?[]:[`<parameter=${Fk}>\n${Ik}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (kk, Fk, Ik) => Ik || 0 === Fk.length ? kk : `${function(kk){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${kk.map((kk=>`\n${AF({type:"function",function:{name:kk.name,description:kk.description,parameters:kk.inputSchema}})}`)).joi … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1294-L1296` → after: `L1294-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1294-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1294-L1296) · [Before (L1294-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1294-L1296)

```diff
-         fileResult: (CC, zC, ZC) => `<tool_response>\nview_file ${CC}${ZC?" (open in the editor)":""}:\n${zC}\n</tool_response>`,
-         editFailure: (CC, zC) => `<tool_response>\nError: ${zC}\n</tool_response>`,
-         lookupResult: (CC, zC, ZC) => `<tool_response>\n${CC} ${zC}:\n${ZC}\n</tool_response>`
+         fileResult: (kk, Fk, Ik) => `<tool_response>\nview_file ${kk}${Ik?" (open in the editor)":""}:\n${Fk}\n</tool_response>`,
+         editFailure: (kk, Fk) => `<tool_response>\nError: ${Fk}\n</tool_response>`,
+         lookupResult: (kk, Fk, Ik) => `<tool_response>\n${kk} ${Fk}:\n${Ik}\n</tool_response>`
```

#### 67. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1301-L1302` → after: `L1301-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1301-L1302) · [Before (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1301-L1302)

```diff
-         formatCall: (CC, zC) => `<tool_call name="${CC}">\n${Object.entries(zC).flatMap((CC=>{let[zC,ZC]=CC;return void 0===ZC?[]:[`<param name="${zC}">${Uz.has(zC)?ZC:`\n${ZC}\n`}</param>\n`]})).join("")}</tool_call>`,
-         declareTools: CC => CC,
+         formatCall: (kk, Fk) => `<tool_call name="${kk}">\n${Object.entries(Fk).flatMap((kk=>{let[Fk,Ik]=kk;return void 0===Ik?[]:[`<param name="${Fk}">${hF.has(Fk)?Ik:`\n${Ik}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: kk => kk,
```

#### 68. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1304-L1306` → after: `L1304-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1304-L1306) · [Before (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1304-L1306)

```diff
-         fileResult: (CC, zC, ZC) => `<tool_result name="view_file" path="${CC}"${ZC?' open_in_editor="true"':""}>\n${zC}\n</tool_result>`,
-         editFailure: (CC, zC) => `<tool_result name="${CC}" is_error="true">\n${zC}\n</tool_result>`,
-         lookupResult: (CC, zC, ZC) => `<tool_result name="${CC}" about="${zC.replace(/"/g,"'")}">\n${ZC}\n</tool_result>`
+         fileResult: (kk, Fk, Ik) => `<tool_result name="view_file" path="${kk}"${Ik?' open_in_editor="true"':""}>\n${Fk}\n</tool_result>`,
+         editFailure: (kk, Fk) => `<tool_result name="${kk}" is_error="true">\n${Fk}\n</tool_result>`,
+         lookupResult: (kk, Fk, Ik) => `<tool_result name="${kk}" about="${Fk.replace(/"/g,"'")}">\n${Ik}\n</tool_result>`
```

#### 69. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1324` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1324) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1324)

```diff
-             if (null === oC || null === FC || (null !== (ZC = null === (QC = zC.at(-1)) || void 0 === QC ? void 0 : QC.index) && void 0 !== ZC ? ZC : -1) + (null !== (wC = null === (bC = zC.at(-1)) || void 0 === bC ? void 0 : bC.call.source.length) && void 0 !== wC ? wC : 0) > fC … [truncated]
+             if (null === ak || null === Lk || (null !== (Ik = null === (Xk = Fk.at(-1)) || void 0 === Xk ? void 0 : Xk.index) && void 0 !== Ik ? Ik : -1) + (null !== (Tk = null === (ik = Fk.at(-1)) || void 0 === ik ? void 0 : ik.call.source.length) && void 0 !== Tk ? Tk : 0) > lk … [truncated]
```

#### 70. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1328` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1328) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1328)

```diff
-               MC = CC.slice(fC.index, FC + (null !== (nC = null === NC || void 0 === NC ? void 0 : NC[0].length) && void 0 !== nC ? nC : 0));
+               jk = kk.slice(lk.index, Lk + (null !== (yk = null === Zk || void 0 === Zk ? void 0 : Zk[0].length) && void 0 !== yk ? yk : 0));
```

#### 71. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1441` → after: `L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1441) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1441)

```diff
-           stopsWhen: CC => `${CC} !== undefined && ${CC} !== false`,
+           stopsWhen: kk => `${kk} !== undefined && ${kk} !== false`,
```

#### 72. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1445)

```diff
-           stopsWhen: CC => `${CC} === false || ${CC} === null`,
+           stopsWhen: kk => `${kk} === false || ${kk} === null`,
```

#### 73. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1449)

```diff
-           stopsWhen: CC => `${CC} === "preventDamage"`,
+           stopsWhen: kk => `${kk} === "preventDamage"`,
```

#### 74. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1462)

```diff
-         hasErrors: (null !== (zC = null === QC || void 0 === QC ? void 0 : QC.length) && void 0 !== zC ? zC : 0) > 0
+         hasErrors: (null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.length) && void 0 !== Fk ? Fk : 0) > 0
```

#### 75. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1472)

```diff
-         Qg: CC,
+         Ie: kk,
```

#### 76. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1479` → after: `L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1479) · [Before (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1479)

```diff
-           Qg: ZC,
+           Ie: Ik,
```

#### 77. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1486)

```diff
-         Qg: ZC,
+         Ie: Ik,
```

#### 78. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1517)

```diff
-             for (const bC of (null !== (wC = vC().getLeadingCommentRanges(CC, ZC.getFullStart())) && void 0 !== wC ? wC : []).reverse()) {
+             for (const ik of (null !== (Tk = Sk().getLeadingCommentRanges(kk, Ik.getFullStart())) && void 0 !== Tk ? Tk : []).reverse()) {
```

#### 79. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1583` → after: `L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1583) · [Before (L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1583)

```diff
-       return /^\s*$/.test(wC) ? wC : `${null!==(ZC=null===(QC=/^\s*/.exec(wC))||void 0===QC?void 0:QC[0])&&void 0!==ZC?ZC:""}\t`
+       return /^\s*$/.test(Tk) ? Tk : `${null!==(Ik=null===(Xk=/^\s*/.exec(Tk))||void 0===Xk?void 0:Xk[0])&&void 0!==Ik?Ik:""}\t`
```

#### 80. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1592-L1593` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1592-L1593) · [Before (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1592-L1593)

```diff
-         bC = /^[\w$"']+\s*:/.test(wC) && "" === CC.slice(eZ(CC, zC.getStart(ZC)), zC.getStart(ZC)).trim() ? QC.replace(/^\s*/, "\t") : `\t${zC.getText(ZC)},`;
-       return /,\s*(?:\/\/.*)?$/.test(bC) ? bC : bC.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+         ik = /^[\w$"']+\s*:/.test(Tk) && "" === kk.slice(vI(kk, Fk.getStart(Ik)), Fk.getStart(Ik)).trim() ? Xk.replace(/^\s*/, "\t") : `\t${Fk.getText(Ik)},`;
+       return /,\s*(?:\/\/.*)?$/.test(ik) ? ik : ik.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
```

#### 81. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1616)

```diff
-         nC = null !== (ZC = bC[bC.length - 1]) && void 0 !== ZC ? ZC : wC[wC.length - 1];
+         yk = null !== (Ik = ik[ik.length - 1]) && void 0 !== Ik ? Ik : Tk[Tk.length - 1];
```

#### 82. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1627` → after: `L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1627) · [Before (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1627)

```diff
-       return 1 === oC.length ? FC : null
+       return 1 === ak.length ? Lk : null
```

#### 83. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1638)

```diff
-         Qg: qC
+         Ie: qk
```

#### 84. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1647)

```diff
-           for (let QC = zC; gC.has(ZC); QC++) ZC = `${CC}${QC}`;
+           for (let Xk = Fk; ek.has(Ik); Xk++) Ik = `${kk}${Xk}`;
```

#### 85. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1655)

```diff
-           MC.push(null === CC ? "undefined" : `...${CC}`);
+           jk.push(null === kk ? "undefined" : `...${kk}`);
```

#### 86. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1659)

```diff
-           MC.push(null !== CC && void 0 !== CC ? CC : "undefined");
+           jk.push(null !== kk && void 0 !== kk ? kk : "undefined");
```

#### 87. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1674)

```diff
-             text: `(${[CC.getText(zC),...pC].join(", ")})`
+             text: `(${[kk.getText(Fk),...Hk].join(", ")})`
```

#### 88. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1681` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1681) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1681)

```diff
-             text: `${CC}${pC.join(", ")}`
+             text: `${kk}${Hk.join(", ")}`
```

#### 89. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1685-L1686` → after: `L1685-L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1685-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1685-L1686) · [Before (L1685-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1685-L1686)

```diff
-       const GC = `${wC}(${MC.join(", ")})`,
-         RC = SC(`${mZ(nC)}Result`, 2),
+       const xk = `${Tk}(${jk.join(", ")})`,
+         Pk = wk(`${pI(yk)}Result`, 2),
```

#### 90. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1688)

```diff
-         xC = SZ.has(QC) ? [GC] : AC ? [`const ${RC} = ${GC}`, `if (${AC.stopsWhen(RC)}) return ${RC}`] : [`const ${RC} = ${GC}`],
+         Qk = HI.has(Xk) ? [xk] : Kk ? [`const ${Pk} = ${xk}`, `if (${Kk.stopsWhen(Pk)}) return ${Pk}`] : [`const ${Pk} = ${xk}`],
```

#### 91. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1703)

```diff
-                 return vC().isIdentifier(QC) && zC.has(QC.text) && CC.expression.getText(ZC).startsWith(`${QC.text} `)
+                 return Sk().isIdentifier(Xk) && Fk.has(Xk.text) && kk.expression.getText(Ik).startsWith(`${Xk.text} `)
```

#### 92. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1708` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1708) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1708)

```diff
-                 text: `return ${RC}`
+                 text: `return ${Pk}`
```

#### 93. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1715` → after: `L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1715) · [Before (L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1715)

```diff
-                   text: `${QC.text} !== undefined ? ${QC.text} : ${RC}`
+                   text: `${Xk.text} !== undefined ? ${Xk.text} : ${Pk}`
```

#### 94. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1725` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1725) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1725)

```diff
-             QC = bC ? hZ(CC, bC.getStart(zC)) : `${CC.slice(eZ(CC,qC.getStart(zC)),qC.getStart(zC)).replace(/\S.*$/,"")}\t`,
+             Xk = ik ? EI(kk, ik.getStart(Fk)) : `${kk.slice(vI(kk,qk.getStart(Fk)),qk.getStart(Fk)).replace(/\S.*$/,"")}\t`,
```

#### 95. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1727)

```diff
-             nC = /^\s*$/.test(wC) ? `${QC}return ${RC}\n${wC}` : `\n${QC}return ${RC}\n`;
+             yk = /^\s*$/.test(Tk) ? `${Xk}return ${Pk}\n${Tk}` : `\n${Xk}return ${Pk}\n`;
```

#### 96. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1743)

```diff
-         text: `\n${hZ(CC,eC.getStart(zC))}${GC}`
+         text: `\n${EI(kk,vk.getStart(Fk))}${xk}`
```

#### 97. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1747` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1747) · [Before (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1747)

```diff
-           QC = ZC ? hZ(CC, ZC.getStart(zC)) : `${CC.slice(eZ(CC,qC.getStart(zC)),qC.getStart(zC)).replace(/\S.*$/,"")}\t`,
+           Xk = Ik ? EI(kk, Ik.getStart(Fk)) : `${kk.slice(vI(kk,qk.getStart(Fk)),qk.getStart(Fk)).replace(/\S.*$/,"")}\t`,
```

#### 98. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1753)

```diff
-           text: `\n${xC.map((CC=>`${QC}${CC}`)).join("\n")}${ZC?bC?`\n${QC}`:"":"\n"}`
+           text: `\n${Qk.map((kk=>`${Xk}${kk}`)).join("\n")}${Ik?ik?`\n${Xk}`:"":"\n"}`
```

#### 99. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1758)

```diff
-           wC = JC ? [`const ${QC} = ${FC.getText(zC)}`, `return ${QC} !== undefined ? ${QC} : ${RC}`] : [`return ${FC.getText(zC)}`];
+           Tk = sk ? [`const ${Xk} = ${Lk.getText(Fk)}`, `return ${Xk} !== undefined ? ${Xk} : ${Pk}`] : [`return ${Lk.getText(Fk)}`];
```

#### 100. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1762` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1762) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1762)

```diff
-           text: `{\n${[...xC,...wC].map((CC=>`${ZC}\t${CC}`)).join("\n")}\n${ZC}}`
+           text: `{\n${[...Qk,...Tk].map((kk=>`${Ik}\t${kk}`)).join("\n")}\n${Ik}}`
```

#### 101. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1773` → after: `L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1773) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1773)

```diff
-       return vC().isIdentifier(CC) ? zC.has(CC.text) ? CC : null : vC().isConditionalExpression(CC) ? cZ(CC.whenFalse, zC) : null
+       return Sk().isIdentifier(kk) ? Fk.has(kk.text) ? kk : null : Sk().isConditionalExpression(kk) ? CI(kk.whenFalse, Fk) : null
```

#### 102. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1786)

```diff
-       return (0, Mz.f)(null !== (QC = null === (wC = CC.body) || void 0 === wC ? void 0 : wC.getText(zC)) && void 0 !== QC ? QC : "", new RegExp(`${ZC}\\s*\\(`), Mz.n).length > 0
+       return (0, eF.e)(null !== (Xk = null === (Tk = kk.body) || void 0 === Tk ? void 0 : Tk.getText(Fk)) && void 0 !== Xk ? Xk : "", new RegExp(`${Ik}\\s*\\(`), eF.l).length > 0
```

#### 103. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1794)

```diff
-       } = ZC, nC = null !== (QC = ZC.overrides) && void 0 !== QC ? QC : new Set;
+       } = Ik, yk = null !== (Xk = Ik.overrides) && void 0 !== Xk ? Xk : new Set;
```

#### 104. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1796` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1796) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1796)

```diff
-         const CC = `${bC?`${bC}\n`:""}${zC.trim()}\n`,
+         const kk = `${ik?`${ik}\n`:""}${Fk.trim()}\n`,
```

#### 105. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1810)

```diff
-             return (null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.properties) && void 0 !== zC ? zC : []).flatMap((CC => {
+             return (null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.properties) && void 0 !== Fk ? Fk : []).flatMap((kk => {
```

#### 106. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1869` → after: `L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1869) · [Before (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1869)

```diff
-                 return vC().isPropertyAssignment(CC) && void 0 !== ZC ? `\t${CC.name.getText(zC)}: ${ZC},` : `\t${CC.getText(zC)},`
+                 return Sk().isPropertyAssignment(kk) && void 0 !== Ik ? `\t${kk.name.getText(Fk)}: ${Ik},` : `\t${kk.getText(Fk)},`
```

#### 107. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1875` → after: `L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1875) · [Before (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1875)

```diff
-                   text: `{\n${[...CC,...FC].join("\n")}\n}`
+                   text: `{\n${[...kk,...Lk].join("\n")}\n}`
```

#### 108. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1890` → after: `L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1890) · [Before (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1890)

```diff
-               text: `${FC.join("\n")}\n`
+               text: `${Lk.join("\n")}\n`
```

#### 109. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1904` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1904) · [Before (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1904)

```diff
-               text: `${GC?",":""}\n${FC.join("\n")}\n`
+               text: `${xk?",":""}\n${Lk.join("\n")}\n`
```

#### 110. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1921)

```diff
-             text: `${wC}${zC.slice(GC.from,GC.to)}\n\n`
+             text: `${Tk}${Fk.slice(xk.from,xk.to)}\n\n`
```

#### 111. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1932)

```diff
-           gC.push(0 === gC.length ? CC : `${wC}${CC}`), AC.push(ZC)
+           ek.push(0 === ek.length ? kk : `${Tk}${kk}`), Kk.push(Ik)
```

#### 112. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1948)

```diff
-           const nC = `${mZ(wC)}${dZ(zC)}`,
+           const yk = `${pI(Tk)}${GI(Fk)}`,
```

#### 113. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1956` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1956) · [Before (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1956)

```diff
-           const gC = EZ(FC.Qg).map(((CC, zC) => null !== CC && void 0 !== CC ? CC : `arg${zC}`));
+           const ek = bI(Lk.Ie).map(((kk, Fk) => null !== kk && void 0 !== kk ? kk : `arg${Fk}`));
```

#### 114. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1958-L1960` → after: `L1958-L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1958-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1958-L1960) · [Before (L1958-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1958-L1960)

```diff
-             const CC = `${nC}(${gC.join(", ")})`,
-               ZC = `${mZ(wC)}Result`;
-             xC(`function ${zC}(${gC.join(", ")}) {\n\t${SZ.has(zC)?CC:`const ${ZC} = ${CC}\n\treturn ${ZC}`}\n}`, -1), SC.push(zC), NC.add(zC);
+             const kk = `${yk}(${ek.join(", ")})`,
+               Ik = `${pI(Tk)}Result`;
+             Qk(`function ${Fk}(${ek.join(", ")}) {\n\t${HI.has(Fk)?kk:`const ${Ik} = ${kk}\n\treturn ${Ik}`}\n}`, -1), wk.push(Fk), Zk.add(Fk);
```

#### 115. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1963` → after: `L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1963) · [Before (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1963)

```diff
-           rZ(bC.Qg, fC.file, nC) || (MC.push(...lZ(CC, fC.file, bC, zC, nC, gC, wC, !0 === ZC.runsLast)), pC.push(zC));
+           cI(ik.Ie, lk.file, yk) || (jk.push(...RI(kk, lk.file, ik, Fk, yk, ek, Tk, !0 === Ik.runsLast)), Hk.push(Fk));
```

#### 116. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L1975)

```diff
-         JC = `${""===CC?"":`${CC}\n\n`}${bC?`${bC}\n`:""}${gC.join("")}\n`
+         sk = `${""===kk?"":`${kk}\n\n`}${ik?`${ik}\n`:""}${ek.join("")}\n`
```

#### 117. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2012` → after: `L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2012) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2012)

```diff
-         wC = null !== (ZC = QC.find((CC => "color" === CC.name))) && void 0 !== ZC ? ZC : QC[0];
+         Tk = null !== (Ik = Xk.find((kk => "color" === kk.name))) && void 0 !== Ik ? Ik : Xk[0];
```

#### 118. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2016)

```diff
-       return `{ ${wC.name}: ${nC} }`
+       return `{ ${Tk.name}: ${yk} }`
```

#### 119. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2028` → after: `L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2028) · [Before (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2028)

```diff
-         return zC.length > 7 ? `${zC.slice(0,7).join(" or ")} or ...` : zC.join(" or ")
+         return Fk.length > 7 ? `${Fk.slice(0,7).join(" or ")} or ...` : Fk.join(" or ")
```

#### 120. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2030-L2031` → after: `L2030-L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2030-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2030-L2031) · [Before (L2030-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2030-L2031)

```diff
-       if (QC.isStringLiteral()) return `"${QC.value}"`;
-       if (QC.isNumberLiteral()) return `${QC.value}`;
+       if (Xk.isStringLiteral()) return `"${Xk.value}"`;
+       if (Xk.isNumberLiteral()) return `${Xk.value}`;
```

#### 121. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2036` → after: `L2036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2036) · [Before (L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2036)

```diff
-         return `[${CC.getTypeArguments(QC).map((zC=>LZ(CC,zC,ZC+1))).join(", ")}]`
+         return `[${kk.getTypeArguments(Xk).map((Fk=>mI(kk,Fk,Ik+1))).join(", ")}]`
```

#### 122. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2041)

```diff
-         return `a list of ${zC.includes(" or ")?`(${zC})`:zC}`
+         return `a list of ${Fk.includes(" or ")?`(${Fk})`:Fk}`
```

#### 123. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2046` → after: `L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2046) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2046)

```diff
-       return `{ ${wC.slice(0,10).map((CC=>`${CC.name}${CC.flags&vC().SymbolFlags.Optional?"?":""}`)).join(", ")}${wC.length>10?", ...":""} }`
+       return `{ ${Tk.slice(0,10).map((kk=>`${kk.name}${kk.flags&Sk().SymbolFlags.Optional?"?":""}`)).join(", ")}${Tk.length>10?", ...":""} }`
```

#### 124. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2074-L2075` → after: `L2074-L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2074-L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2074-L2075) · [Before (L2074-L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2074-L2075)

```diff
-               oC = null !== (bC = null === QC || void 0 === QC ? void 0 : QC.getParameters()) && void 0 !== bC ? bC : [],
-               qC = new Set((null !== (nC = null === QC || void 0 === QC || null === (fC = QC.getDeclaration()) || void 0 === fC ? void 0 : fC.typeParameters) && void 0 !== nC ? nC : []).map((CC => CC.name.text)));
+               ak = null !== (ik = null === Xk || void 0 === Xk ? void 0 : Xk.getParameters()) && void 0 !== ik ? ik : [],
+               qk = new Set((null !== (yk = null === Xk || void 0 === Xk || null === (lk = Xk.getDeclaration()) || void 0 === lk ? void 0 : lk.typeParameters) && void 0 !== yk ? yk : []).map((kk => kk.name.text)));
```

#### 125. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2079` → after: `L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2079) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2079)

```diff
-                 fC = nC && vC().isParameter(nC) ? nC : void 0;
+                 lk = yk && Sk().isParameter(yk) ? yk : void 0;
```

#### 126. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2084` → after: `L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2084) · [Before (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2084)

```diff
-                 ZC.add(`${wC.expression.getText(CC)} can't take null as ${oC[QC].name} (value ${QC+1}): ${nC}, or it throws when that line runs.`)
+                 Ik.add(`${Tk.expression.getText(kk)} can't take null as ${ak[Xk].name} (value ${Xk+1}): ${yk}, or it throws when that line runs.`)
```

#### 127. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2123` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2123) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2123)

```diff
-           return vC().isPropertyAccessExpression(CC) && vC().isIdentifier(CC.expression) && "CONFIG" === CC.expression.text && null !== (zC = ZC.get(CC.name.text)) && void 0 !== zC ? zC : CC.getText()
+           return Sk().isPropertyAccessExpression(kk) && Sk().isIdentifier(kk.expression) && "CONFIG" === kk.expression.text && null !== (Fk = Ik.get(kk.name.text)) && void 0 !== Fk ? Fk : kk.getText()
```

#### 128. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L2125)

```diff
-         nC = CC => CC && (vC().isStringLiteral(CC) || vC().isNoSubstitutionTemplateLiteral(CC)) ? CC.text : CC && vC().isObjectLiteralExpression(CC) ? CC.properties.flatMap((CC => vC().isPropertyAssignment(CC) && (vC().isIdentifier(CC.name) || vC().isStringLiteral(CC.name)) ? [`$ … [truncated]
+         yk = kk => kk && (Sk().isStringLiteral(kk) || Sk().isNoSubstitutionTemplateLiteral(kk)) ? kk.text : kk && Sk().isObjectLiteralExpression(kk) ? kk.properties.flatMap((kk => Sk().isPropertyAssignment(kk) && (Sk().isIdentifier(kk.name) || Sk().isStringLiteral(kk.name)) ? [`$ … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5030)

```diff
-       } = PZ(`(${CC})`), QC = zC.statements[0];
+       } = xI(`(${kk})`), Xk = Fk.statements[0];
```

#### 130. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5068` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5068) · [Before (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5068)

```diff
-       }(zC.startsWith("{") ? zC : `{${zC}}`);
+       }(Fk.startsWith("{") ? Fk : `{${Fk}}`);
```

#### 131. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5079` → after: `L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5079) · [Before (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5079)

```diff
-         if (wC && bC > 0) wC[1] += `\n${zC}`;
+         if (Tk && ik > 0) Tk[1] += `\n${Fk}`;
```

#### 132. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5086)

```diff
-         bC = Math.max(0, bC + (null !== (fC = null === (oC = ZC.match(/[[{(]/g)) || void 0 === oC ? void 0 : oC.length) && void 0 !== fC ? fC : 0) - (null !== (qC = null === (FC = ZC.match(/[\]})]/g)) || void 0 === FC ? void 0 : FC.length) && void 0 !== qC ? qC : 0))
+         ik = Math.max(0, ik + (null !== (lk = null === (ak = Ik.match(/[[{(]/g)) || void 0 === ak ? void 0 : ak.length) && void 0 !== lk ? lk : 0) - (null !== (qk = null === (Lk = Ik.match(/[\]})]/g)) || void 0 === Lk ? void 0 : Lk.length) && void 0 !== qk ? qk : 0))
```

#### 133. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5100` → after: `L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5100) · [Before (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5100)

```diff
-         problem: `${CC.key} must be a plain value like ${CC.value}, not ${zC}`
+         problem: `${kk.key} must be a plain value like ${kk.value}, not ${Fk}`
```

#### 134. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5103` → after: `L5103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5103) · [Before (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5103)

```diff
-         problem: `${CC.key} must be a number, like ${CC.value}`
+         problem: `${kk.key} must be a number, like ${kk.value}`
```

#### 135. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5106` → after: `L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5106) · [Before (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5106)

```diff
-         problem: `${CC.key} must be true or false`
+         problem: `${kk.key} must be true or false`
```

#### 136. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5111` → after: `L5111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5111) · [Before (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5111)

```diff
-         problem: `${CC.key} must be a position [x, y, z], like ${"null"===CC.value?"[0, 10, 0]":CC.value}`
+         problem: `${kk.key} must be a position [x, y, z], like ${"null"===kk.value?"[0, 10, 0]":kk.value}`
```

#### 137. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5114` → after: `L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5114) · [Before (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5114)

```diff
-         problem: `${CC.key} must be a list in [ ], like ${CC.value}`
+         problem: `${kk.key} must be a list in [ ], like ${kk.value}`
```

#### 138. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5142` → after: `L5142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5142) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5142)

```diff
-               nC = bC ? WC.get(null !== (zC = oQ(bC.initializer)) && void 0 !== zC ? zC : "") : void 0;
+               yk = ik ? tk.get(null !== (Fk = qX(ik.initializer)) && void 0 !== Fk ? Fk : "") : void 0;
```

#### 139. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5151` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5151) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5151)

```diff
-           const CC = null !== (MC = oQ(gC)) && void 0 !== MC ? MC : "",
+           const kk = null !== (jk = qX(ek)) && void 0 !== jk ? jk : "",
```

#### 140. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5155-L5157` → after: `L5155-L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5155-L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5155-L5157) · [Before (L5155-L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5155-L5157)

```diff
-             const zC = wC.named ? `item: ${JSON.stringify(wC.item)}` : `item: ${JSON.stringify(wC.item)}, name: ${JSON.stringify(CC)}`;
-             qC.unshift(`"${CC}" isn't an item, so it is a ${wC.item}${wC.named?"":` named "${CC}"`}`), oC = `${oC.slice(0,wC.property.getStart()-fC)}${zC}${oC.slice(wC.property.getEnd()-fC)}`
-           } else null === zC ? FC.unshift(`"${CC}"`) : zC !== CC && (qC.unshift(`"${CC}" is "${zC}"`), oC = `${oC.slice(0,gC.getStart()-fC)}${JSON.stringify(zC)}${oC.slice(gC.getEnd()-fC)}`)
+             const Fk = Tk.named ? `item: ${JSON.stringify(Tk.item)}` : `item: ${JSON.stringify(Tk.item)}, name: ${JSON.stringify(kk)}`;
+             qk.unshift(`"${kk}" isn't an item, so it is a ${Tk.item}${Tk.named?"":` named "${kk}"`}`), ak = `${ak.slice(0,Tk.property.getStart()-lk)}${Fk}${ak.slice(Tk.property.getEnd()-lk)}`
+           } else null === Fk ? Lk.unshift(`"${kk}"`) : Fk !== kk && (qk.unshift(`"${kk}" is "${Fk}"`), ak = `${ak.slice(0,ek.getStart()-lk)}${JSON.stringify(Fk)}${ak.slice(ek.getEnd()-lk)}`)
```

#### 141. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5160` → after: `L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5160) · [Before (L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5160)

```diff
-           problem: `${FC.join(", ")} ${1===FC.length?"item"===ZC?"isn't an":"isn't a":"aren't"} ${ZC} name${1===FC.length?"":"s"}, so ${CC.key} kept ${CC.value}`
+           problem: `${Lk.join(", ")} ${1===Lk.length?"item"===Ik?"isn't an":"isn't a":"aren't"} ${Ik} name${1===Lk.length?"":"s"}, so ${kk.key} kept ${kk.value}`
```

#### 142. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5172` → after: `L5172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5172) · [Before (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5172)

```diff
-           problem: `${CC.key} must be text in quotes, like ${CC.value}`
+           problem: `${kk.key} must be text in quotes, like ${kk.value}`
```

#### 143. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5177` → after: `L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5177) · [Before (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5177)

```diff
-             problem: `"${zC}" isn't ${"item"===CC.kind?"an":"a"} ${CC.kind} name, so ${CC.key} kept ${CC.value}`
+             problem: `"${Fk}" isn't ${"item"===kk.kind?"an":"a"} ${kk.kind} name, so ${kk.key} kept ${kk.value}`
```

#### 144. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5181` → after: `L5181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5181) · [Before (L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5181)

```diff
-             fixed: `"${zC}" is "${QC}"`
+             fixed: `"${Fk}" is "${Xk}"`
```

#### 145. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5211` → after: `L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5211) · [Before (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5211)

```diff
-       return null !== (zC = NQ.find((CC => gQ(CC.name) === ZC || gQ(CC.title) === ZC))) && void 0 !== zC ? zC : null
+       return null !== (Fk = jX.find((kk => wX(kk.name) === Ik || wX(kk.title) === Ik))) && void 0 !== Fk ? Fk : null
```

#### 146. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5216` → after: `L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5216) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5216)

```diff
-       return null !== (zC = wQ.find((zC => zC.name === CC))) && void 0 !== zC ? zC : null
+       return null !== (Fk = iX.find((Fk => Fk.name === kk))) && void 0 !== Fk ? Fk : null
```

#### 147. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5223` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5223) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5223)

```diff
-         return 0 === CC.length ? "" : `const CONFIG = {\n${CC.map((CC=>{var ZC;return`\t${CC.key}: ${null!==(ZC=zC.get(CC.key))&&void 0!==ZC?ZC:CC.value}, // ${CC.about}`})).join("\n")}\n}`
+         return 0 === kk.length ? "" : `const CONFIG = {\n${kk.map((kk=>{var Ik;return`\t${kk.key}: ${null!==(Ik=Fk.get(kk.key))&&void 0!==Ik?Ik:kk.value}, // ${kk.about}`})).join("\n")}\n}`
```

#### 148. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5225)

```diff
-       return `${""===ZC?"":`${ZC}\n\n`}${CC.code.trim()}\n`
+       return `${""===Ik?"":`${Ik}\n\n`}${kk.code.trim()}\n`
```

#### 149. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5235` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5235) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5235)

```diff
-             for (const CC of null !== (bC = wC.uses) && void 0 !== bC ? bC : []) {
+             for (const kk of null !== (ik = Tk.uses) && void 0 !== ik ? ik : []) {
```

#### 150. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5248` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5248) · [Before (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5248)

```diff
-         QC = new RegExp(`function ${zC.name}\\s*\\([^)]*\\)\\s*\\{`).exec(CC);
+         Xk = new RegExp(`function ${Fk.name}\\s*\\([^)]*\\)\\s*\\{`).exec(kk);
```

#### 151. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5322` → after: `L5322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5322) · [Before (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5322)

```diff
-               wC.push(`${CC.name} has no setting ${fC}`);
+               Tk.push(`${kk.name} has no setting ${lk}`);
```

#### 152. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5345` → after: `L5345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5345) · [Before (L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5345)

```diff
-           heading: "" === CC.trim() ? void 0 : `// ---- ${zC.title} (ready-made) ----`
+           heading: "" === kk.trim() ? void 0 : `// ---- ${Fk.title} (ready-made) ----`
```

#### 153. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5362` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5362) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5362)

```diff
-       return `- ${CC.name}: ${CC.summary}. Settings: ${CC.settings.map((CC=>CC.key)).join(", ")}`
+       return `- ${kk.name}: ${kk.summary}. Settings: ${kk.settings.map((kk=>kk.key)).join(", ")}`
```

#### 154. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5367` → after: `L5367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5367) · [Before (L5367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5367)

```diff
-       const ZC = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.trim().toLowerCase()) && void 0 !== zC ? zC : "",
+       const Ik = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.trim().toLowerCase()) && void 0 !== Fk ? Fk : "",
```

#### 155. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5371` → after: `L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5371) · [Before (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5371)

```diff
-       return `${QC?`Prefabs for ${MQ.get(QC)}:`:""===ZC||"all"===ZC?"Every prefab:":`There is no category ${CC}. Every prefab:`}\n${wC.length>0?wC.map(vQ).join("\n"):"(none yet)"}${bC.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${bC.map((C … [truncated]
+       return `${Xk?`Prefabs for ${eX.get(Xk)}:`:""===Ik||"all"===Ik?"Every prefab:":`There is no category ${kk}. Every prefab:`}\n${Tk.length>0?Tk.map(oX).join("\n"):"(none yet)"}${ik.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${ik.map((k … [truncated]
```

#### 156. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5376-L5379` → after: `L5376-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5376-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5376-L5379) · [Before (L5376-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5376-L5379)

```diff
-       const QC = [...CC.settings, ...IQ(CC)].map((CC => `- ${CC.key} (${CC.kind}, default ${CC.value}): ${CC.about}`)).join("\n"),
-         wC = null !== (ZC = CC.changeable) && void 0 !== ZC && ZC.length ? `\nFunctions to replace by name for a game of their own:\n${CC.changeable.map((CC=>`- ${CC.name}: ${CC.about}`)).join("\n")}` : "",
-         bC = zC ? `\nIts code, as it goes in with the default settings:\n${PQ(CC)}` : "";
-       return `${CC.name} (${CC.title}): ${CC.summary}.\nHow it plays: ${CC.howItPlays}\nSettings:\n${QC}${wC}${CC.setup?`\nThe creator sets up: ${CC.setup}`:""}${bC}`
+       const Xk = [...kk.settings, ...zX(kk)].map((kk => `- ${kk.key} (${kk.kind}, default ${kk.value}): ${kk.about}`)).join("\n"),
+         Tk = null !== (Ik = kk.changeable) && void 0 !== Ik && Ik.length ? `\nFunctions to replace by name for a game of their own:\n${kk.changeable.map((kk=>`- ${kk.name}: ${kk.about}`)).join("\n")}` : "",
+         ik = Fk ? `\nIts code, as it goes in with the default settings:\n${xX(kk)}` : "";
+       return `${kk.name} (${kk.title}): ${kk.summary}.\nHow it plays: ${kk.howItPlays}\nSettings:\n${Xk}${Tk}${kk.setup?`\nThe creator sets up: ${kk.setup}`:""}${ik}`
```

#### 157. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5387` → after: `L5387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5387) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5387)

```diff
-         QC = ` ${CC.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
+         Xk = ` ${kk.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
```

#### 158. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5389-L5390` → after: `L5389-L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5389-L5390) · [Before (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5389-L5390)

```diff
-         const zC = CC.keywords.map((CC => CC.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((CC => CC.includes(" ") ? QC.includes(` ${CC} `) : ZC.has(CC))),
-           wC = Math.min(...zC.map((CC => QC.indexOf(` ${CC} `))));
+         const Fk = kk.keywords.map((kk => kk.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((kk => kk.includes(" ") ? Xk.includes(` ${kk} `) : Ik.has(kk))),
+           Tk = Math.min(...Fk.map((kk => Xk.indexOf(` ${kk} `))));
```

#### 159. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5426` → after: `L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5426) · [Before (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5426)

```diff
-               nC = CC => "string" === typeof CC ? CC : "boolean" === typeof CC ? String(CC) : Array.isArray(CC) ? CC.filter((CC => "string" === typeof CC)).join("\n") : void 0,
+               yk = kk => "string" === typeof kk ? kk : "boolean" === typeof kk ? String(kk) : Array.isArray(kk) ? kk.filter((kk => "string" === typeof kk)).join("\n") : void 0,
```

#### 160. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5440` → after: `L5440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5440) · [Before (L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5440)

```diff
-             return QC.startsWith("[") ? wC : CC
+             return Xk.startsWith("[") ? Tk : kk
```

#### 161. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5443-L5444` → after: `L5443-L5444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5443-L5444) · [Before (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5443-L5444)

```diff
-         oC = null !== (zC = null === (ZC = fC.question) || void 0 === ZC ? void 0 : ZC.replace(/\s+/g, " ").trim()) && void 0 !== zC ? zC : "",
-         qC = (null !== (QC = fC.choices) && void 0 !== QC ? QC : "").includes("\n") ? (null !== (wC = fC.choices) && void 0 !== wC ? wC : "").split("\n") : (null !== (bC = fC.choices) && void 0 !== bC ? bC : "").split("|"),
+         ak = null !== (Fk = null === (Ik = lk.question) || void 0 === Ik ? void 0 : Ik.replace(/\s+/g, " ").trim()) && void 0 !== Fk ? Fk : "",
+         qk = (null !== (Xk = lk.choices) && void 0 !== Xk ? Xk : "").includes("\n") ? (null !== (Tk = lk.choices) && void 0 !== Tk ? Tk : "").split("\n") : (null !== (ik = lk.choices) && void 0 !== ik ? ik : "").split("|"),
```

#### 162. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5467-L5470` → after: `L5467-L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5467-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5467-L5470) · [Before (L5467-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5467-L5470)

```diff
-       uQ = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${cQ})\s*\(|(?:${cQ})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-       rQ = new RegExp(`^(?:${cQ})$`),
-       sQ = new RegExp(String.raw`^(${cQ})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-       TQ = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${cQ})\b|\buse_?prefab\s*\(`, "i");
+       NX = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${CX})\s*\(|(?:${CX})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       cX = new RegExp(`^(?:${CX})$`),
+       WX = new RegExp(String.raw`^(${CX})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       fX = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${CX})\b|\buse_?prefab\s*\(`, "i");
```

#### 163. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5483` → after: `L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5483) · [Before (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5483)

```diff
-           return void 0 === zC.path ? zC : {
+           return void 0 === Fk.path ? Fk : {
```

#### 164. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5487` → after: `L5487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5487) · [Before (L5487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5487)

```diff
-           return void 0 === zC.url ? zC : {
+           return void 0 === Fk.url ? Fk : {
```

#### 165. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5533-L5535` → after: `L5533-L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5533-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5533-L5535) · [Before (L5533-L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5533-L5535)

```diff
-       const pC = Object.keys(ZC).some(SC.h),
-         PC = CC => null !== CC && pC && (0, SC.h)(CC),
-         GC = CC => PC(CC) ? `${SC.p}${(0,SC.l)(CC)}` : null !== bC && void 0 !== bC ? bC : jQ(CC),
+       const Hk = Object.keys(Ik).some(wk.e),
+         Jk = kk => null !== kk && Hk && (0, wk.e)(kk),
+         xk = kk => Jk(kk) ? `${wk.h}${(0,wk.f)(kk)}` : null !== ik && void 0 !== ik ? ik : AX(kk),
```

#### 166. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5575-L5577` → after: `L5575-L5577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5575-L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5575-L5577) · [Before (L5575-L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5575-L5577)

```diff
-               return `${ZC.slice(0,Math.max(ZC.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-             }(null !== zC && void 0 !== zC ? zC : ""),
-             bC = null !== (QC = dC.get(CC)) && void 0 !== QC ? QC : [];
+               return `${Ik.slice(0,Math.max(Ik.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== Fk && void 0 !== Fk ? Fk : ""),
+             ik = null !== (Xk = Gk.get(kk)) && void 0 !== Xk ? Xk : [];
```

#### 167. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5579` → after: `L5579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5579) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5579)

```diff
-           ("" === wC || bC.includes(wC) || dC.set(CC, [...bC, wC]), "" !== wC) && XC.set(CC, [...null !== (nC = XC.get(CC)) && void 0 !== nC ? nC : [], {
+           ("" === Tk || ik.includes(Tk) || Gk.set(kk, [...ik, Tk]), "" !== Tk) && Uk.set(kk, [...null !== (yk = Uk.get(kk)) && void 0 !== yk ? yk : [], {
```

#### 168. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5597` → after: `L5597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5597) · [Before (L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5597)

```diff
-               error: `There is no prefab called ${zC}. The prefabs are: ${NQ.map((CC=>CC.name)).join(", ")}.`
+               error: `There is no prefab called ${Fk}. The prefabs are: ${jX.map((kk=>kk.name)).join(", ")}.`
```

#### 169. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5599` → after: `L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5599) · [Before (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5599)

```diff
-           }(null !== (wC = qC[CC]) && void 0 !== wC ? wC : "", zC, ZC, oC);
+           }(null !== (Tk = qk[kk]) && void 0 !== Tk ? Tk : "", Fk, Ik, ak);
```

#### 170. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5605` → after: `L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5605) · [Before (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5605)

```diff
-           }), uC(CC, null !== QC && void 0 !== QC ? QC : nC.prefab.title, nC.text), sC.push({
+           }), Nk(kk, null !== Xk && void 0 !== Xk ? Xk : yk.prefab.title, yk.text), Wk.push({
```

#### 171. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5611` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5611) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5611)

```diff
-             setup: null !== (bC = nC.prefab.setup) && void 0 !== bC ? bC : null
+             setup: null !== (ik = yk.prefab.setup) && void 0 !== ik ? ik : null
```

#### 172. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5629` → after: `L5629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5629) · [Before (L5629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5629)

```diff
-         const CC = null !== (bz = wz.get(SC.name)) && void 0 !== bz ? bz : 0;
+         const kk = null !== (yF = iF.get(wk.name)) && void 0 !== yF ? yF : 0;
```

#### 173. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5639)

```diff
-               path: null !== (nz = null !== (fz = null !== (oz = SC.args.path) && void 0 !== oz ? oz : bC) && void 0 !== fz ? fz : QC) && void 0 !== nz ? nz : void 0
+               path: null !== (lF = null !== (aF = null !== (qF = wk.args.path) && void 0 !== qF ? qF : ik) && void 0 !== aF ? aF : Xk) && void 0 !== lF ? lF : void 0
```

#### 174. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5650` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5650) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5650)

```diff
-           xC = `${zC.name}\n${JSON.stringify({...zC.args,why:void 0})}`,
+           Qk = `${Fk.name}\n${JSON.stringify({...Fk.args,why:void 0})}`,
```

#### 175. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5670` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5670) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5670)

```diff
-             const CC = void 0 !== wC && "" !== wC.trim() ? GC(wC) : void 0 === bC ? null !== QC && void 0 !== QC ? QC : "index.js" : null;
+             const kk = void 0 !== Tk && "" !== Tk.trim() ? xk(Tk) : void 0 === ik ? null !== Xk && void 0 !== Xk ? Xk : "index.js" : null;
```

#### 176. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5674` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5674) · [Before (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5674)

```diff
-               OC(CC, zC.args.name, null !== (qz = zC.args.settings) && void 0 !== qz ? qz : "", zC.args.why)
+               Dk(kk, Fk.args.name, null !== (LF = Fk.args.settings) && void 0 !== LF ? LF : "", Fk.args.why)
```

#### 177. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5681` → after: `L5681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5681) · [Before (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5681)

```diff
-             if (0 === yC.length) yC = Nz(null !== (Fz = zC.args.steps) && void 0 !== Fz ? Fz : "")
+             if (0 === gk.length) gk = jF(null !== (tF = Fk.args.steps) && void 0 !== tF ? tF : "")
```

#### 178. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5684` → after: `L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5684) · [Before (L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5684)

```diff
-             const CC = Zz(null !== (Wz = zC.args.note) && void 0 !== Wz ? Wz : "");
+             const kk = XF(null !== (ZF = Fk.args.note) && void 0 !== ZF ? ZF : "");
```

#### 179. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5699` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5699) · [Before (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5699)

```diff
-               if (void 0 === nC || "" !== nC.trim() && !EQ(aQ(nC), void 0 === wC ? "" : null !== (gz = qC[GC(wC)]) && void 0 !== gz ? gz : "")) {
+               if (void 0 === yk || "" !== yk.trim() && !bX(BX(yk), void 0 === Tk ? "" : null !== (wF = qk[xk(Tk)]) && void 0 !== wF ? wF : "")) {
```

#### 180. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5701` → after: `L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5701) · [Before (L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5701)

```diff
-                 else if (void 0 !== wC && AC(GC(wC)) && "" !== (null !== (Sz = ZC[GC(wC)]) && void 0 !== Sz ? Sz : "").trim()) MC(zC.name, GC(wC), "unread", void 0 === nC ? void 0 : {
+                 else if (void 0 !== Tk && Kk(xk(Tk)) && "" !== (null !== (HF = Ik[xk(Tk)]) && void 0 !== HF ? HF : "").trim()) jk(Fk.name, xk(Tk), "unread", void 0 === yk ? void 0 : {
```

#### 181. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5720` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5720) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5720)

```diff
-               bC = null === CC ? "" : null !== (Pz = qC[CC]) && void 0 !== Pz ? Pz : "",
+               ik = null === kk ? "" : null !== (xF = qk[kk]) && void 0 !== xF ? xF : "",
```

#### 182. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5727-L5728` → after: `L5727-L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5727-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5727-L5728) · [Before (L5727-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5727-L5728)

```diff
-               })) || void 0 === Rz ? void 0 : Rz.text) && void 0 !== Gz ? Gz : null : "replace_function" === zC.name ? LC(bC, ZC, nC) : kC(bC, ZC, nC);
-             null === CC || null === WC ? MC(zC.name, CC, qZ(zC) ? "brokenCode" : "missingArgs") : EQ(nC, bC) ? MC(zC.name, CC, "placeholder") : "replace_function" === zC.name && AC(CC) && VC(bC).includes(null !== QC && void 0 !== QC ? QC : "") ? (MC(zC.name, CC, "unread", {
+               })) || void 0 === KF ? void 0 : KF.text) && void 0 !== PF ? PF : null : "replace_function" === Fk.name ? mk(ik, Ik, yk) : Mk(ik, Ik, yk);
+             null === kk || null === tk ? jk(Fk.name, kk, LI(Fk) ? "brokenCode" : "missingArgs") : bX(yk, ik) ? jk(Fk.name, kk, "placeholder") : "replace_function" === Fk.name && Kk(kk) && kF(ik).includes(null !== Xk && void 0 !== Xk ? Xk : "") ? (jk(Fk.name, kk, "unread", {
```

#### 183. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5733-L5734` → after: `L5733-L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5733-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5733-L5734) · [Before (L5733-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5733-L5734)

```diff
-             const CC = !0 === (null === (Az = PC._meta) || void 0 === Az ? void 0 : Az.appliesAtOnce) ? null !== bC && void 0 !== bC ? bC : QC : void 0 === wC ? null : GC(wC),
-               ZC = null === CC ? "" : null !== (xz = qC[CC]) && void 0 !== xz ? xz : "",
+             const kk = !0 === (null === (QF = Jk._meta) || void 0 === QF ? void 0 : QF.appliesAtOnce) ? null !== ik && void 0 !== ik ? ik : Xk : void 0 === Tk ? null : xk(Tk),
+               Ik = null === kk ? "" : null !== (sF = qk[kk]) && void 0 !== sF ? sF : "",
```

#### 184. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5738-L5740` → after: `L5738-L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5738-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5738-L5740) · [Before (L5738-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5738-L5740)

```diff
-               gC = null !== oC && void 0 !== oC ? oC : NC,
-               SC = null !== NC ? lz(null !== WC && void 0 !== WC ? WC : "") : null !== WC && void 0 !== WC ? WC : "",
-               pC = null === gC || void 0 === fC ? SC : HC(ZC.slice(gC.from, gC.to), mC(ZC, gC, null !== NC ? lz(fC) : fC, SC), EC(ZC.slice(gC.to)));
+               ek = null !== ak && void 0 !== ak ? ak : Zk,
+               wk = null !== Zk ? RF(null !== tk && void 0 !== tk ? tk : "") : null !== tk && void 0 !== tk ? tk : "",
+               Hk = null === ek || void 0 === lk ? wk : uk(Ik.slice(ek.from, ek.to), pk(Ik, ek, null !== Zk ? RF(lk) : lk, wk), bk(Ik.slice(ek.to)));
```

#### 185. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5747-L5748` → after: `L5747-L5748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5747-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5747-L5748) · [Before (L5747-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5747-L5748)

```diff
-               const QC = RC(CC) ? BC(ZC, gC.from, gC.to, null !== fC && void 0 !== fC ? fC : "", SC) : null;
-               qC[CC] = null !== QC && void 0 !== QC ? QC : ZC.slice(0, gC.from) + pC + ZC.slice(gC.to), FC.add(CC), uC(CC, zC.args.why, pC)
+               const Xk = Pk(kk) ? rk(Ik, ek.from, ek.to, null !== lk && void 0 !== lk ? lk : "", wk) : null;
+               qk[kk] = null !== Xk && void 0 !== Xk ? Xk : Ik.slice(0, ek.from) + Hk + Ik.slice(ek.to), Lk.add(kk), Nk(kk, Fk.args.why, Hk)
```

#### 186. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5758-L5759` → after: `L5758-L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5758-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5758-L5759) · [Before (L5758-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5758-L5759)

```diff
-           wC = null !== (iz = null !== bC && void 0 !== bC ? bC : QC) && void 0 !== iz ? iz : "index.js",
-           nC = null !== (vz = qC[wC]) && void 0 !== vz ? vz : "";
+           Tk = null !== (SF = null !== ik && void 0 !== ik ? ik : Xk) && void 0 !== SF ? SF : "index.js",
+           yk = null !== (oF = qk[Tk]) && void 0 !== oF ? oF : "";
```

#### 187. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5774` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5774) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5774)

```diff
-           qC[SC] = ZQ(zQ(CC ? qC[SC] : qC[SC].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (hz = ZC[SC]) && void 0 !== hz ? hz : "");
+           qk[wk] = XX(IX(kk ? qk[wk] : qk[wk].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (EF = Ik[wk]) && void 0 !== EF ? EF : "");
```

#### 188. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5779` → after: `L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5779) · [Before (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5779)

```diff
-         const CC = pz(LQ(yQ(qC[SC])), RC(SC) ? wC : [], null !== (ez = ZC[SC]) && void 0 !== ez ? ez : "");
+         const kk = JF(mX(gX(qk[wk])), Pk(wk) ? Tk : [], null !== (vF = Ik[wk]) && void 0 !== vF ? vF : "");
```

#### 189. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5783-L5785` → after: `L5783-L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5783-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5783-L5785) · [Before (L5783-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5783-L5785)

```diff
-         const CC = SC.problems.length > 0 ? ` Kept as it was: ${SC.problems.join("; ")}.` : "",
-           zC = SC.fixed.length > 0 ? ` Names changed to real ones: ${SC.fixed.join(", ")}.` : "";
-         gC += `\n\nThis uses the ready-made ${SC.title}.${zC}${CC}${SC.setup?` ${SC.setup}`:""}`
+         const kk = wk.problems.length > 0 ? ` Kept as it was: ${wk.problems.join("; ")}.` : "",
+           Fk = wk.fixed.length > 0 ? ` Names changed to real ones: ${wk.fixed.join(", ")}.` : "";
+         ek += `\n\nThis uses the ready-made ${wk.title}.${Fk}${kk}${wk.setup?` ${wk.setup}`:""}`
```

#### 190. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5791` → after: `L5791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5791) · [Before (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5791)

```diff
-         of KC) gC += `\n\nI renamed \`${SC}\` to \`${YC}\`, the name World Code calls.`;
+         of Ok) ek += `\n\nI renamed \`${wk}\` to \`${nk}\`, the name World Code calls.`;
```

#### 191. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5795` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5795) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5795)

```diff
-         const CC = null !== (dz = ZC[SC]) && void 0 !== dz ? dz : "";
+         const kk = null !== (GF = Ik[wk]) && void 0 !== GF ? GF : "";
```

#### 192. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5886` → after: `L5886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5886) · [Before (L5886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5886)

```diff
-       const zC = null === CC.path ? CC.tool : `${CC.tool} ${CC.path}`;
+       const Fk = null === kk.path ? kk.tool : `${kk.tool} ${kk.path}`;
```

#### 193. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5888-L5893` → after: `L5888-L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5888-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5888-L5893) · [Before (L5888-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5888-L5893)

```diff
-       if ("prefab" === CC.reason) return `${zC}: ${null!==(ZC=CC.detail)&&void 0!==ZC?ZC:"the prefab couldn't go in."} Nothing changed.`;
-       if ("missingArgs" === CC.reason) return `${zC}: the call was missing an argument it needs, so nothing changed.`;
-       if ("placeholder" === CC.reason) return "write_file" === CC.tool ? `${zC}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${zC}: the code had a line standing in for code left out ("// ... exi … [truncated]
-       if ("unread" === CC.reason) return `${zC}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==CC.path&&(0,SC.h)(CC.path)?"view_world_code":"view_file"} shows.`;
-       if ("brokenCode" === CC.reason) return `${zC}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-       return `${zC}: search matched nothing in the file, so nothing changed. ${CC.closest?`The closest lines (${CC.closest.line}-${CC.closest.lastLine}) are:\n${CC.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${CC.functions.length>0?`, or use replace … [truncated]
+       if ("prefab" === kk.reason) return `${Fk}: ${null!==(Ik=kk.detail)&&void 0!==Ik?Ik:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === kk.reason) return `${Fk}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === kk.reason) return "write_file" === kk.tool ? `${Fk}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${Fk}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === kk.reason) return `${Fk}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==kk.path&&(0,wk.e)(kk.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === kk.reason) return `${Fk}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${Fk}: search matched nothing in the file, so nothing changed. ${kk.closest?`The closest lines (${kk.closest.line}-${kk.closest.lastLine}) are:\n${kk.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${kk.functions.length>0?`, or use replace … [truncated]
```

#### 194. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5910-L5911` → after: `L5910-L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5910-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5910-L5911) · [Before (L5910-L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5910-L5911)

```diff
-       fw = CC => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
-       ow = CC => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       aT = kk => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
+       qT = kk => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
```

#### 195. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5921` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5921) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5921)

```diff
-     const Ww = `You looked at World Code: its files are below, their paths starting ${SC.p}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${S … [truncated]
+     const ZT = `You looked at World Code: its files are below, their paths starting ${wk.h}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${w … [truncated]
```

#### 196. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5932-L5933` → after: `L5932-L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5932-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5932-L5933) · [Before (L5932-L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5932-L5933)

```diff
-       const MC = zC ? SC.e : "index.js",
-         gC = zC ? `${SC.p}index.js` : MC,
+       const jk = Fk ? wk.b : "index.js",
+         ek = Fk ? `${wk.h}index.js` : jk,
```

#### 197. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5937-L5942` → after: `L5937-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5937-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5937-L5942) · [Before (L5937-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5937-L5942)

```diff
-         AC = GC("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${pC("edit … [truncated]
-         xC = GC("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         JC = GC("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         IC = GC("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${pC("edit_fil … [truncated]
-         iC = zC ? `2. Then give the whole new code with a write_file call, exactly like this:\n${pC("write_file",{path:MC,why:"what the change does",content:qw.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${pC("write_fi … [truncated]
-         vC = zC ? "" : ` If there is no code yet, write it in ${MC}.`,
+         Kk = xk("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${Hk("edit … [truncated]
+         Qk = xk("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         sk = xk("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         Vk = xk("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${Hk("edit_fil … [truncated]
+         zk = Fk ? `2. Then give the whole new code with a write_file call, exactly like this:\n${Hk("write_file",{path:jk,why:"what the change does",content:LT.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${Hk("write_fi … [truncated]
+         Sk = Fk ? "" : ` If there is no code yet, write it in ${jk}.`,
```

#### 198. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5944` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5944) · [Before (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5944)

```diff
-         hC = zC ? oC ? `\n${Ww}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         Ek = Fk ? ak ? `\n${ZT}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5948-L5952` → after: `L5948-L5952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5948-L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5948-L5952) · [Before (L5948-L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5948-L5952)

```diff
-         mC = GC("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         HC = GC("plan") ? `\n${"deepseek"===ZC?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         EC = null !== (wC = WC[0]) && void 0 !== wC ? wC : SQ("parkour"),
-         lC = (null !== (bC = null === EC || void 0 === EC ? void 0 : EC.settings) && void 0 !== bC ? bC : []).slice(0, 2).map((CC => `${CC.key}: ${CC.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         pk = xk("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         uk = xk("plan") ? `\n${"deepseek"===Ik?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         bk = null !== (Tk = tk[0]) && void 0 !== Tk ? Tk : HX("parkour"),
+         Rk = (null !== (ik = null === bk || void 0 === bk ? void 0 : bk.settings) && void 0 !== ik ? ik : []).slice(0, 2).map((kk => `${kk.key}: ${kk.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5954` → after: `L5954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5954) · [Before (L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5954)

```diff
-         QC ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         Xk ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5957` → after: `L5957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5957) · [Before (L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5957)

```diff
-         bC.join("\n")
+         ik.join("\n")
```

#### 202. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5959` → after: `L5959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5959) · [Before (L5959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5959)

```diff
-       `}(CC,pC,qC)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(kk,Hk,qk)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5962-L5963` → after: `L5962-L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5962-L5963) · [Before (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5962-L5963)

```diff
-     function Mw(CC, zC, ZC) {
-       return Object.keys(CC).filter((CC => !ZC || !(0, SC.h)(CC))).sort(((CC, ZC) => (ZC === zC ? 1 : 0) - (CC === zC ? 1 : 0) || CC.localeCompare(ZC)))
+     function eT(kk, Fk, Ik) {
+       return Object.keys(kk).filter((kk => !Ik || !(0, wk.e)(kk))).sort(((kk, Ik) => (Ik === Fk ? 1 : 0) - (kk === Fk ? 1 : 0) || kk.localeCompare(Ik)))
```

#### 204. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5966-L5969` → after: `L5966-L5969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5966-L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5966-L5969) · [Before (L5966-L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5966-L5969)

```diff
-     function gw(CC, zC, ZC) {
-       var QC;
-       const wC = Mw(CC, zC, ZC);
-       return null !== zC && wC.includes(zC) ? zC : null !== (QC = wC[0]) && void 0 !== QC ? QC : null
+     function wT(kk, Fk, Ik) {
+       var Xk;
+       const Tk = eT(kk, Fk, Ik);
+       return null !== Fk && Tk.includes(Fk) ? Fk : null !== (Xk = Tk[0]) && void 0 !== Xk ? Xk : null
```

#### 205. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5972-L5973` → after: `L5972-L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5972-L5973) · [Before (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5972-L5973)

```diff
-     function Sw(CC) {
-       const zC = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${CC.includes("index.ts")?"index.ts":"index.js"}`;
+     function HT(kk) {
+       const Fk = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${kk.includes("index.ts")?"index.ts":"index.js"}`;
```

#### 206. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5977-L5978` → after: `L5977-L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5977-L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5977-L5978) · [Before (L5977-L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5977-L5978)

```diff
-     function pw(CC, zC) {
-       var ZC;
+     function JT(kk, Fk) {
+       var Ik;
```

#### 207. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5980-L5985` → after: `L5980-L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5980-L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5980-L5985) · [Before (L5980-L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5980-L5985)

```diff
-         files: QC,
-         activePath: wC
-       } = CC, bC = !0 === CC.codeBlock, nC = Mw(QC, wC, bC);
-       if (0 === nC.length || nC.every((CC => "" === QC[CC].trim()))) return bC ? "There is no code yet: the code block is empty." : nC.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const fC = null !== (ZC = gw(QC, wC, bC)) && void 0 !== ZC ? ZC : nC[0];
-       return `${nC.length>1?`Their files:\n${nC.map((CC=>{const zC=""===(ZC=QC[CC])?0:ZC.replace(/\n$/,"").split("\n").length;var ZC;return`- ${CC}: ${1===zC?"1 line":`${zC} lines`}${CC===fC?" (open in the editor, its code below)":""}`})).join("\n")}\n${bC?"":Sw(nC)}\n`:""}${func … [truncated]
+         files: Xk,
+         activePath: Tk
+       } = kk, ik = !0 === kk.codeBlock, yk = eT(Xk, Tk, ik);
+       if (0 === yk.length || yk.every((kk => "" === Xk[kk].trim()))) return ik ? "There is no code yet: the code block is empty." : yk.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const lk = null !== (Ik = wT(Xk, Tk, ik)) && void 0 !== Ik ? Ik : yk[0];
+       return `${yk.length>1?`Their files:\n${yk.map((kk=>{const Fk=""===(Ik=Xk[kk])?0:Ik.replace(/\n$/,"").split("\n").length;var Ik;return`- ${kk}: ${1===Fk?"1 line":`${Fk} lines`}${kk===lk?" (open in the editor, its code below)":""}`})).join("\n")}\n${ik?"":HT(yk)}\n`:""}${func … [truncated]
```

#### 208. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5988-L5989` → after: `L5988-L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5988-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5988-L5989) · [Before (L5988-L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5988-L5989)

```diff
-     function Pw(CC) {
-       var zC, ZC, QC, wC, bC, nC;
+     function xT(kk) {
+       var Fk, Ik, Xk, Tk, ik, yk;
```

#### 209. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5991-L6022` → after: `L5991-L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5991-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L5991-L6022) · [Before (L5991-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L5991-L6022)

```diff
-         codeBlock: !0 === CC.codeBlock,
-         hasCode: "" !== (null !== (zC = CC.files[null !== (ZC = CC.activePath) && void 0 !== ZC ? ZC : ""]) && void 0 !== zC ? zC : "").trim(),
-         hasBigFile: Object.values(CC.files).some((CC => CC.length > 6e3)),
-         wantsExport: kQ(CC.request),
-         canAsk: !0 === CC.canAsk,
-         canRemember: !0 === (null === (QC = CC.about) || void 0 === QC ? void 0 : QC.canRemember),
-         isBigRequest: Wz(CC.request),
-         canLookUp: !0 === CC.canLookUp,
-         hasOtherFiles: Object.keys(CC.files).length > 1,
-         hasErrors: CC.errors.length > 0,
-         canChangeWorldCode: !0 === CC.canChangeWorldCode,
-         hasWorldCodeFiles: Object.keys(CC.files).some(SC.h),
-         offersPrefabs: (wC = CC.request, bC = CC.files, nC = Gw(CC), "never" !== nC.offer && ("always" === nC.offer || KQ(wC, 1).length > 0 || Wz(wC) || !bw(bC) && ww.test(wC))),
-         listsPrefabs: Gw(CC).categories,
-         looksUpDocs: !0 === CC.looksUpDocs
-       }
- ... (16 more removed lines; see GitHub link above)
+         codeBlock: !0 === kk.codeBlock,
+         hasCode: "" !== (null !== (Fk = kk.files[null !== (Ik = kk.activePath) && void 0 !== Ik ? Ik : ""]) && void 0 !== Fk ? Fk : "").trim(),
+         hasBigFile: Object.values(kk.files).some((kk => kk.length > 6e3)),
+         wantsExport: MX(kk.request),
+         canAsk: !0 === kk.canAsk,
+         canRemember: !0 === (null === (Xk = kk.about) || void 0 === Xk ? void 0 : Xk.canRemember),
+         isBigRequest: ZF(kk.request),
+         canLookUp: !0 === kk.canLookUp,
+         hasOtherFiles: Object.keys(kk.files).length > 1,
+         hasErrors: kk.errors.length > 0,
+         canChangeWorldCode: !0 === kk.canChangeWorldCode,
+         hasWorldCodeFiles: Object.keys(kk.files).some(wk.e),
+         offersPrefabs: (Tk = kk.request, ik = kk.files, yk = PT(kk), "never" !== yk.offer && ("always" === yk.offer || OX(Tk, 1).length > 0 || ZF(Tk) || !yT(ik) && iT.test(Tk))),
+         listsPrefabs: PT(kk).categories,
+         looksUpDocs: !0 === kk.looksUpDocs
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 210. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6024-L6025` → after: `L6024-L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6024-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6024-L6025) · [Before (L6024-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6024-L6025)

```diff
-             edit_file: CC.hasBigFile,
-             replace_function: zC,
+             edit_file: kk.hasBigFile,
+             replace_function: Fk,
```

#### 211. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6027-L6044` → after: `L6027-L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6027-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6027-L6044) · [Before (L6027-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6027-L6044)

```diff
-             add_world_code: CC.codeBlock && !0 !== CC.hasWorldCodeFiles,
-             edit_code_in_place: CC.hasCode,
-             export_game: CC.wantsExport,
-             switch_to_world_code: CC.codeBlock,
-             ask_creator: CC.canAsk,
-             remember: !0 === CC.canRemember && !CC.codeBlock,
-             plan: !0 === CC.isBigRequest && CC.canAsk && !CC.codeBlock,
-             view_file: ZC && !0 === CC.hasOtherFiles && !CC.codeBlock,
-             view_world_code: QC,
-             view_chunk: ZC,
-             view_game_state: ZC,
-             get_docs: ZC,
-             fetch_url: ZC && !0 === CC.looksUpDocs,
-             find_names: ZC,
-             view_errors: ZC && !0 === CC.hasErrors,
-             use_prefab: !0 === CC.offersPrefabs && !CC.codeBlock,
- ... (2 more removed lines; see GitHub link above)
+             add_world_code: kk.codeBlock && !0 !== kk.hasWorldCodeFiles,
+             edit_code_in_place: kk.hasCode,
+             export_game: kk.wantsExport,
+             switch_to_world_code: kk.codeBlock,
+             ask_creator: kk.canAsk,
+             remember: !0 === kk.canRemember && !kk.codeBlock,
+             plan: !0 === kk.isBigRequest && kk.canAsk && !kk.codeBlock,
+             view_file: Ik && !0 === kk.hasOtherFiles && !kk.codeBlock,
+             view_world_code: Xk,
+             view_chunk: Ik,
+             view_game_state: Ik,
+             get_docs: Ik,
+             fetch_url: Ik && !0 === kk.looksUpDocs,
+             find_names: Ik,
+             view_errors: Ik && !0 === kk.hasErrors,
+             use_prefab: !0 === kk.offersPrefabs && !kk.codeBlock,
+ ... (2 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6046-L6049` → after: `L6046-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6046-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6046-L6049) · [Before (L6046-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6046-L6049)

```diff
-         let bC = xz.filter((CC => wC[CC.name]));
-         for (const nC of ["remember", "plan"]) bC.filter((CC => !Jz(CC.name))).length > 7 && (bC = bC.filter((CC => CC.name !== nC)));
-         return bC
-       }(Pw(CC))
+         let ik = sF.filter((kk => Tk[kk.name]));
+         for (const yk of ["remember", "plan"]) ik.filter((kk => !VF(kk.name))).length > 7 && (ik = ik.filter((kk => kk.name !== yk)));
+         return ik
+       }(xT(kk))
```

#### 213. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6052-L6059` → after: `L6052-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6052-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6052-L6059) · [Before (L6052-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6052-L6059)

```diff
-     function Aw(CC, zC) {
-       var ZC, QC;
-       const wC = Pw(CC),
-         bC = !0 === wC.canLookUp,
-         nC = (null !== (ZC = null === (QC = CC.lookups) || void 0 === QC ? void 0 : QC.length) && void 0 !== ZC ? ZC : 0) > 0,
-         fC = !0 === wC.hasWorldCodeFiles,
-         oC = [wC.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", wC.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", bC ? "" : nC ? "You have looked things up as many times as you can: answer n … [truncated]
-       return oC.length > 0 ? `\n\nFor this request: ${oC.join(" ")}` : ""
+     function QT(kk, Fk) {
+       var Ik, Xk;
+       const Tk = xT(kk),
+         ik = !0 === Tk.canLookUp,
+         yk = (null !== (Ik = null === (Xk = kk.lookups) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== Ik ? Ik : 0) > 0,
+         lk = !0 === Tk.hasWorldCodeFiles,
+         ak = [Tk.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", Tk.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", ik ? "" : yk ? "You have looked things up as many times as you can: answer n … [truncated]
+       return ak.length > 0 ? `\n\nFor this request: ${ak.join(" ")}` : ""
```

#### 214. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6062-L6064` → after: `L6062-L6064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6062-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6062-L6064) · [Before (L6062-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6062-L6064)

```diff
-     function xw(CC, zC) {
-       var ZC, QC, wC, bC, nC, fC;
-       let oC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nw,
+     function sT(kk, Fk) {
+       var Ik, Xk, Tk, ik, yk, lk;
+       let ak = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lT,
```

#### 215. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6066-L6067` → after: `L6066-L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6066-L6067) · [Before (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6066-L6067)

```diff
-           docsInTurn: qC = !1,
-           Mp: FC = !1
+           docsInTurn: qk = !1,
+           iH: Lk = !1
```

#### 216. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6069-L6101` → after: `L6069-L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6069-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6069-L6101) · [Before (L6069-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6069-L6101)

```diff
-       const WC = "deepseek" === oC.format,
-         NC = Object.values(zC.files).join("\n"),
-         MC = zC.history.slice(-2).map((CC => CC.text)).join("\n"),
-         gC = `${zC.request}\n${MC}\n${zC.errors.join("\n")}`,
-         SC = !0 === zC.looksUpDocs,
-         pC = SC && !0 === zC.canLookUp ? [] : CC.find(gC, NC, 12),
-         PC = CC.matchItemAndBlockNames(gC, 12),
-         GC = !0 === zC.codeBlock,
-         RC = GC ? "myId" : "playerId",
-         AC = Rw(zC, oC.format),
-         xC = AC.some((CC => "use_prefab" === CC.name)),
-         JC = !xC || WC && !0 !== Pw(zC).offersPrefabs ? [] : function(CC, zC, ZC) {
-           if ("never" === ZC.offer || "none" === ZC.list) return [];
-           if ("all" === ZC.list) return [...NQ];
-           const QC = KQ(CC, 4);
-           if (bw(zC) || !ww.test(CC) && !Wz(CC)) return QC;
- ... (17 more removed lines; see GitHub link above)
+       const tk = "deepseek" === ak.format,
+         Zk = Object.values(Fk.files).join("\n"),
+         jk = Fk.history.slice(-2).map((kk => kk.text)).join("\n"),
+         ek = `${Fk.request}\n${jk}\n${Fk.errors.join("\n")}`,
+         wk = !0 === Fk.looksUpDocs,
+         Hk = wk && !0 === Fk.canLookUp ? [] : kk.find(ek, Zk, 12),
+         Jk = kk.matchItemAndBlockNames(ek, 12),
+         xk = !0 === Fk.codeBlock,
+         Pk = xk ? "myId" : "playerId",
+         Kk = KT(Fk, ak.format),
+         Qk = Kk.some((kk => "use_prefab" === kk.name)),
+         sk = !Qk || tk && !0 !== xT(Fk).offersPrefabs ? [] : function(kk, Fk, Ik) {
+           if ("never" === Ik.offer || "none" === Ik.list) return [];
+           if ("all" === Ik.list) return [...jX];
+           const Xk = OX(kk, 4);
+           if (yT(Fk) || !iT.test(kk) && !ZF(kk)) return Xk;
+ ... (17 more added lines; see GitHub link above)
```

#### 217. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6103` → after: `L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R6103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/90.js#L6103) · [Before (L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/90.js#L6103)

```diff
-           content: zw([GC ? ow(SC) : fw(SC), ...SC ? [] : [GC ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${CC.index("callback")}` : `## Callbacks (all of them)\n${CC.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: IT([xk ? qT(wk) : aT(wk), ...wk ? [] : [xk ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${kk.index("callback")}` : `## Callbacks (all of them)\n${kk.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```
