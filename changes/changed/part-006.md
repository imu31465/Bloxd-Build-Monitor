# Changed — Bundle Modifications Report (Part 006 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `6 / 99` (**387** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (3969 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 355. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3505` → after: `L3687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3687) · [Before (L3505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3505)

```diff
-         return this.reserveList(rM, OM), this.staging.clear(), null === this.fillList(MM, !0) ? `lists a body twice, or ${zO}` : (this.listSynced && OM === this.listed || (rM.om(OM, iM.handle), this.listSynced = !0, this.listed = OM), this.listReleases = iM.releases, this.setRoll … [truncated]
+         return this.reserveList(XU, cU), this.staging.clear(), null === this.fillList(UU, !0) ? `lists a body twice, or ${Dc}` : (this.listSynced && cU === this.listed || (XU.iN(cU, zU.handle), this.listSynced = !0, this.listed = cU), this.listReleases = zU.releases, this.setRoll … [truncated]
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3511` → after: `L3693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3693) · [Before (L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3511)

```diff
-         iM < 0 && (iM = this.staging.rollbackSlot()), iM !== this.rollbackSlot && (MM.xm(iM, rM.handle), this.rollbackSlot = iM)
+         zU < 0 && (zU = this.staging.rollbackSlot()), zU !== this.rollbackSlot && (UU.sN(zU, XU.handle), this.rollbackSlot = zU)
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3522` → after: `L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3704) · [Before (L3522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3522)

```diff
-         return this.reserveList(OM, rM), null === this.fillList(MM, !1) ? 2 : (OM.om(rM, iM.handle), this.listSynced = !0, this.listed = rM, this.listReleases = iM.releases, 1)
+         return this.reserveList(cU, XU), null === this.fillList(UU, !1) ? 2 : (cU.iN(XU, zU.handle), this.listSynced = !0, this.listed = XU, this.listReleases = zU.releases, 1)
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3527` → after: `L3709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3709) · [Before (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3527)

```diff
-           const OM = this.yG(MM[iM]);
+           const cU = this.uZ(UU[zU]);
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3542` → after: `L3724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3724) · [Before (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3542)

```diff
-         Object.is(rM[0], MM.fm) && Object.is(rM[1], MM.fluidDrag) && Object.is(rM[2], MM.Ym) && Object.is(rM[3], iM[0]) && Object.is(rM[4], iM[1]) && Object.is(rM[5], iM[2]) && Object.is(rM[6], MM.minBounceImpulse) || (rM[0] = MM.fm, rM[1] = MM.fluidDrag, rM[2] = MM.Ym, rM[3] = i … [truncated]
+         Object.is(XU[0], UU.HN) && Object.is(XU[1], UU.fluidDrag) && Object.is(XU[2], UU.MN) && Object.is(XU[3], zU[0]) && Object.is(XU[4], zU[1]) && Object.is(XU[5], zU[2]) && Object.is(XU[6], UU.minBounceImpulse) || (XU[0] = UU.HN, XU[1] = UU.fluidDrag, XU[2] = UU.MN, XU[3] = z … [truncated]
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3552` → after: `L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3734) · [Before (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3552)

```diff
-         this.physics = MM, this.host = rM, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
+         this.physics = UU, this.host = XU, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3563` → after: `L3745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3745) · [Before (L3563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3563)

```diff
-         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${OM} physics ${MM}, and it runs only in wasm here`);
+         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${cU} physics ${UU}, and it runs only in wasm here`);
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3565` → after: `L3747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3747) · [Before (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3565)

```diff
-         Tr(MM, (() => new Error(`wasm physics: ${OM} physics ${MM}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
+         TX(UU, (() => new Error(`wasm physics: ${cU} physics ${UU}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3567` → after: `L3749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3749) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3567)

```diff
-         SM - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = SM, this.stoppedMs += iM, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${MM}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
+         yU - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = yU, this.stoppedMs += zU, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${UU}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3575` → after: `L3757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3757) · [Before (L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3575)

```diff
-         const rM = new Error(`wasm physics: ${this.host.kind} physics ${MM}, so it can't tick until the page reloads`);
+         const XU = new Error(`wasm physics: ${this.host.kind} physics ${UU}, so it can't tick until the page reloads`);
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3577` → after: `L3759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3759) · [Before (L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3577)

```diff
-         (console.error(rM), this.host.failure.lost) ? this.host.failure.lost(rM): null === (iM = (OM = this.host.failure).aL) || void 0 === iM || iM.call(OM, rM)
+         (console.error(XU), this.host.failure.lost) ? this.host.failure.lost(XU): null === (zU = (cU = this.host.failure).oY) || void 0 === zU || zU.call(cU, XU)
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3610-L3611` → after: `L3792-L3793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3792-L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3792-L3793) · [Before (L3610-L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3610-L3611)

```diff
-         if (!this.rollsBack) return MM.sm || MM.qN ? "was given unloaded hooks" : null;
-         return (0, Fr.j)(MM.sm) === this.host.kind && "cell" === (0, Fr.j)(MM.qN) ? null : "had an unloaded hook replaced"
+         if (!this.rollsBack) return UU.SN || UU.Qm ? "was given unloaded hooks" : null;
+         return (0, lX.n)(UU.SN) === this.host.kind && "cell" === (0, lX.n)(UU.Qm) ? null : "had an unloaded hook replaced"
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3624` → after: `L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3806) · [Before (L3624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3624)

```diff
-           if (SM = rM, 5 === SM.Lm(MM, this.bodies.bodyStore.handle)) return zO
+           if (yU = XU, 5 === yU.pN(UU, this.bodies.bodyStore.handle)) return Dc
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3659` → after: `L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3841) · [Before (L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3659)

```diff
-           const jM = MM.resume(rM.uL, iM);
+           const QU = UU.resume(XU.qY, zU);
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3661` → after: `L3843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3843) · [Before (L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3661)

```diff
-             if (this.host.stats.missRounds++, ++OM > 4096) return rM.uL.Vm(), "missed chunks for 4096 rounds";
+             if (this.host.stats.missRounds++, ++cU > 4096) return XU.qY.bN(), "missed chunks for 4096 rounds";
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3667` → after: `L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3849) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3667)

```diff
-           if (3 === jM) throw new Xr(new Error(gi(MM.lm())));
+           if (3 === QU) throw new JX(new Error(ez(UU.BN())));
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3670` → after: `L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3852) · [Before (L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3670)

```diff
-           if (PM.Rm) {
+           if (FU.wN) {
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3674` → after: `L3856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3856) · [Before (L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3674)

```diff
-               PM.Rm(this.impacts)
+               FU.wN(this.impacts)
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3684` → after: `L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3866) · [Before (L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3684)

```diff
-           if (null !== nM) return `${nM} in an onCollide handler`;
+           if (null !== oU) return `${oU} in an onCollide handler`;
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3712` → after: `L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3894) · [Before (L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3712)

```diff
-             iM.Wm && iM.Wm()
+             zU.ON && zU.ON()
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3726-L3727` → after: `L3908-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3908-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3908-L3909) · [Before (L3726-L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3726-L3727)

```diff
-         const jM = !rM.hm;
-         return jM && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > iM.length) && (MM.bm(this.committedCursor, this.tickLen, jM), !(this.host.prepare && !this.host.prepare(MM, OM.yG, 0 !== SM)) && (!!OM.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
+         const QU = !XU.tN;
+         return QU && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > zU.length) && (UU.dN(this.committedCursor, this.tickLen, QU), !(this.host.prepare && !this.host.prepare(UU, cU.uZ, 0 !== yU)) && (!!cU.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3732` → after: `L3914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3914) · [Before (L3732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3732)

```diff
-         this.Cm = MM, this.physics = rM, this.options = iM, this.stats = {
+         this.WN = UU, this.physics = XU, this.options = zU, this.stats = {
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3783` → after: `L3965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3965) · [Before (L3783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3783)

```diff
-           aL: iM.reportError,
+           oY: zU.reportError,
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3796-L3797` → after: `L3978-L3979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L3978-L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L3978-L3979) · [Before (L3796-L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3796-L3797)

```diff
-               const iM = this.Cm.hU.Av(this.Cm.eD);
-               MM.Dm(iM ? rM(iM) : -1)
+               const zU = this.WN.xG.Bx(this.WN.pM);
+               UU.rN(zU ? XU(zU) : -1)
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3844` → after: `L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4026) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3844)

```diff
-         this.driver.bL(MM)
+         this.driver.LY(UU)
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3855` → after: `L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4037) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3855)

```diff
-         return aM.Zx(PM, MM, rM, iM, OM, SM, jM)
+         return AU.Wm(FU, UU, XU, zU, cU, yU, QU)
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3866` → after: `L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4048) · [Before (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3866)

```diff
-           return MM = rM, this.physics.rollbackBody = Ar(((MM, iM, OM, SM, jM, aM, PM) => rM.Zx(rM.allocate(), MM, iM, OM, SM, jM, aM, PM))), rM
+           return UU = XU, this.physics.rollbackBody = sX(((UU, zU, cU, yU, QU, AU, FU) => XU.Wm(XU.allocate(), UU, zU, cU, yU, QU, AU, FU))), XU
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3881` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4063) · [Before (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3881)

```diff
-           return MM ? OM && !(0, Fr.b)(OM) ? Yi(rM, iM, "has a block test not marked markIdOnlyBlockTest") : !SM || xi(SM[0]) && xi(SM[1]) && xi(SM[2]) ? MM.LH(rM, iM) : Yi(rM, iM, "has an offset that isn't whole cells") : Yi(rM, iM, "has no mirror")
+           return UU ? cU && !(0, lX.d)(cU) ? Hz(XU, zU, "has a block test not marked markIdOnlyBlockTest") : !yU || Vz(yU[0]) && Vz(yU[1]) && Vz(yU[2]) ? UU.DI(XU, zU) : Hz(XU, zU, "has an offset that isn't whole cells") : Hz(XU, zU, "has no mirror")
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3900` → after: `L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4082) · [Before (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3900)

```diff
-             const iM = MM.Bm(rM.uL, SM[0], SM[1], SM[2], jM[0], jM[1], jM[2], OM[0], OM[1], OM[2]);
+             const zU = UU.mN(XU.qY, yU[0], yU[1], yU[2], QU[0], QU[1], QU[2], cU[0], cU[1], cU[2]);
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3904` → after: `L4086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4086) · [Before (L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3904)

```diff
-           rM.uL.Vm()
+           XU.qY.bN()
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3912` → after: `L4094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4094) · [Before (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3912)

```diff
-         return null !== (MM = null === (rM = this.mirror) || void 0 === rM ? void 0 : rM.residency()) && void 0 !== MM ? MM : null
+         return null !== (UU = null === (XU = this.mirror) || void 0 === XU ? void 0 : XU.residency()) && void 0 !== UU ? UU : null
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3915-L3916` → after: `L4097-L4098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4097-L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4097-L4098) · [Before (L3915-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3915-L3916)

```diff
-         const rM = this.Cm.Am;
-         return this.context.setOffsets(MM, rM, rM) && this.context.uploadOverrides(MM, this.Cm.uL)
+         const XU = this.WN.VN;
+         return this.context.setOffsets(UU, XU, XU) && this.context.uploadOverrides(UU, this.WN.qY)
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3925-L3926` → after: `L4107-L4108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4107-L4108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4107-L4108) · [Before (L3925-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3925-L3926)

```diff
-         const rM = this.Cm.uL.Vh.physicsWorld;
-         return rM && bi(this.options.wasm) ? (this.mirror = new qi(this.options.wasm, rM, this.Cm.nL, this.failure), this.mirror) : null
+         const XU = this.WN.qY.hp.physicsWorld;
+         return XU && Wz(this.options.wasm) ? (this.mirror = new jz(this.options.wasm, XU, this.WN.EY, this.failure), this.mirror) : null
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3932` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4114) · [Before (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3932)

```diff
-     var hO = iM(39397);
+     var Ic = zU(39185);
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3942` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4124) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3942)

```diff
-         takeRefusedAllocation: null !== (rM = MM.takeBloxdWasmRefusedAllocation) && void 0 !== rM ? rM : () => 0
+         takeRefusedAllocation: null !== (XU = UU.takeBloxdWasmRefusedAllocation) && void 0 !== XU ? XU : () => 0
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3952-L3954` → after: `L4134-L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4134-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4134-L4136) · [Before (L3952-L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3952-L3954)

```diff
-         const PM = null !== (OM = null === (SM = (jM = aM.bindings).VP) || void 0 === SM ? void 0 : SM.call(jM)) && void 0 !== OM ? OM : [];
-         if (!(PM.length === yO.length && yO.every(((MM, rM) => PM[rM] === MM)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(PM).join()}] are not [${yO.join()}]`);
-         return new lO(aM, new aM.bindings.ES, rM, iM)
+         const FU = null !== (cU = null === (yU = (QU = AU.bindings).Do) || void 0 === yU ? void 0 : yU.call(QU)) && void 0 !== cU ? cU : [];
+         if (!(FU.length === tc.length && tc.every(((UU, XU) => FU[XU] === UU)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(FU).join()}] are not [${tc.join()}]`);
+         return new gc(AU, new AU.bindings.XQ, XU, zU)
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3957` → after: `L4139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4139) · [Before (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3957)

```diff
-         this.runtime = MM, this.handle = rM, this.nL = iM, this.reportTrap = OM, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new MM.BufferView(Uint8Array, rM.DH(!1), dO), this.lightU16 = new MM.BufferView(Uint16Array, rM.DH(!0), dO)
+         this.runtime = UU, this.handle = XU, this.EY = zU, this.reportTrap = cU, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new UU.BufferView(Uint8Array, XU.SI(!1), ac), this.lightU16 = new UU.BufferView(Uint16Array, XU.SI(!0), ac)
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3960` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4142) · [Before (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3960)

```diff
-         return this.attempt((() => (this.syncRegistry(), GO(this.handle.ZH(rM.uL, rM.slot, MM)), this.scan(rM))))
+         return this.attempt((() => (this.syncRegistry(), Bc(this.handle.uI(XU.qY, XU.slot, UU)), this.scan(XU))))
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3966` → after: `L4148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4148) · [Before (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3966)

```diff
-         return this.attempt((() => (GO(this.handle.kH(MM, rM)), rM ? this.lightU16.view().slice() : this.lightU8.view().slice())))
+         return this.attempt((() => (Bc(this.handle.rI(UU, XU)), XU ? this.lightU16.view().slice() : this.lightU8.view().slice())))
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3969` → after: `L4151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4151) · [Before (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3969)

```diff
-         const rM = this.handle.scan(MM.uL, MM.slot),
+         const XU = this.handle.scan(UU.qY, UU.slot),
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3973-L3976` → after: `L4155-L4158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4155-L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4155-L4158) · [Before (L3973-L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3973-L3976)

```diff
-           YC: this.runtime.view(Uint16Array, this.handle.oH(), 32).slice(),
-           mw: 1 === iM || 0 !== iM && void 0,
-           dL: 0 !== (4 & rM),
-           fC: this.runtime.view(Uint16Array, this.handle.fH(), OM).slice()
+           pW: this.runtime.view(Uint16Array, this.handle.fI(), 32).slice(),
+           dW: 1 === zU || 0 !== zU && void 0,
+           kY: 0 !== (4 & XU),
+           EW: this.runtime.view(Uint16Array, this.handle.iI(), cU).slice()
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3987` → after: `L4169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4169) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3987)

```diff
-             iM = new Error(`Chunk ingest trapped in wasm (${MM})`);
+             zU = new Error(`Chunk ingest trapped in wasm (${UU})`);
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3993-L3994` → after: `L4175-L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4175-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4175-L4176) · [Before (L3993-L3994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3993-L3994)

```diff
-         const rM = this.nL,
-           iM = 65536 * (null !== (MM = rM.vx) && void 0 !== MM ? MM : 0) + rM.iJ.length;
+         const XU = this.EY,
+           zU = 65536 * (null !== (UU = XU.qm) && void 0 !== UU ? UU : 0) + XU.za.length;
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3998` → after: `L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4180) · [Before (L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L3998)

```diff
-           const rM = Math.max(MM.iJ.length, MM.ZC.length, MM.bC.length, MM.tC.length),
+           const XU = Math.max(UU.za.length, UU.DW.length, UU.bR.length, UU.RP.length),
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4001-L4002` → after: `L4183-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4183-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4183-L4184) · [Before (L4001-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4001-L4002)

```diff
-             const rM = MM.iJ[OM];
-             iM[OM] = (void 0 === rM ? 2 : rM ? 1 : 0) | (MM.ZC[OM] ? 4 : 0) | (MM.bC[OM] ? 8 : 0) | (MM.tC[OM] ? 16 : 0)
+             const XU = UU.za[cU];
+             zU[cU] = (void 0 === XU ? 2 : XU ? 1 : 0) | (UU.DW[cU] ? 4 : 0) | (UU.bR[cU] ? 8 : 0) | (UU.RP[cU] ? 16 : 0)
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4006` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4188) · [Before (L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4006)

```diff
-         this.handle.YH(OM)
+         this.handle.HI(cU)
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4015-L4016` → after: `L4197-L4198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4197-L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4197-L4198) · [Before (L4015-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4015-L4016)

```diff
-     var CO = iM(39406);
-     const eO = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * CO.Q, CO.C, CO.w, CO.y, CO.u, CO.q, CO.F, CO.H, CO.t, CO.U, CO.R, CO.ab, CO.eb, CO.Y, CO.p, CO.i, CO.j, CO.l, CO.L, CO.d, ...CO.O],
+     var Zc = zU(39192);
+     const Rc = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * Zc.S, Zc.F, Zc.y, Zc.C, Zc.u, Zc.n, Zc.I, Zc.J, Zc.q, Zc.Z, Zc.V, Zc.bb, Zc.cb, Zc.ab, Zc.k, Zc.e, Zc.h, Zc.j, Zc.L, Zc.c, ...Zc.P],
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4023-L4024` → after: `L4205-L4206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4205-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4205-L4206) · [Before (L4023-L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4023-L4024)

```diff
-         const PM = null !== (OM = null === (SM = (jM = aM.bindings).IS) || void 0 === SM ? void 0 : SM.call(jM)) && void 0 !== OM ? OM : [];
-         return PM.length === eO.length && eO.every(((MM, rM) => PM[rM] === MM)) ? new wO(aM, new aM.bindings.PS, rM, iM) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(PM).join()}] are not [${eO.join()}], so blocks are set in JS`), null)
+         const FU = null !== (cU = null === (yU = (QU = AU.bindings).fA) || void 0 === yU ? void 0 : yU.call(QU)) && void 0 !== cU ? cU : [];
+         return FU.length === Rc.length && Rc.every(((UU, XU) => FU[XU] === UU)) ? new Wc(AU, new AU.bindings.sy, XU, zU) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(FU).join()}] are not [${Rc.join()}], so blocks are set in JS`), null)
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4027` → after: `L4209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4209) · [Before (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4027)

```diff
-         this.runtime = MM, this.handle = rM, this.nL = iM, this.aL = OM, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new MM.BufferView(Uint32Array, … [truncated]
+         this.runtime = UU, this.handle = XU, this.EY = zU, this.oY = cU, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new UU.BufferView(Uint32Array, … [truncated]
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4030` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4212) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4030)

```diff
-         let SM = (0, CO.ub)(rM);
+         let yU = (0, Zc.sb)(XU);
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4036` → after: `L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4218) · [Before (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4036)

```diff
-           aM = this.propsFor(null === iM || void 0 === iM ? void 0 : iM.isHookId), PM = null !== (nM = null === iM || void 0 === iM || null === (QM = iM.watched) || void 0 === QM ? void 0 : QM.call(iM)) && void 0 !== nM ? nM : bO
+           AU = this.propsFor(null === zU || void 0 === zU ? void 0 : zU.isHookId), FU = null !== (oU = null === zU || void 0 === zU || null === (DU = zU.watched) || void 0 === DU ? void 0 : DU.call(zU)) && void 0 !== oU ? oU : Pc
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4038-L4039` → after: `L4220-L4221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4220-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4220-L4221) · [Before (L4038-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4038-L4039)

```diff
-           if (this.startFailedAt !== this.nL.vx) {
-             this.startFailedAt = this.nL.vx;
+           if (this.startFailedAt !== this.EY.qm) {
+             this.startFailedAt = this.EY.qm;
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4041` → after: `L4223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4223) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4041)

```diff
-             this.aL(new Error(`Block edits could not start in wasm (${MM}), so batches are set in JS until that is fixed`))
+             this.oY(new Error(`Block edits could not start in wasm (${UU}), so batches are set in JS until that is fixed`))
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4045-L4046` → after: `L4227-L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4227-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4227-L4228) · [Before (L4045-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4045-L4046)

```diff
-         const zM = CO.F | (null !== iM && void 0 !== iM && iM.isHookId ? CO.H : 0);
-         if (!this.call(MM, !1, (() => (aM !== this.sentProps && (this.handle.WH(aM), this.sentProps = aM), this.handle.sH(PM), this.handle.JL(rM), !0)))) return SM;
+         const EU = Zc.I | (null !== zU && void 0 !== zU && zU.isHookId ? Zc.J : 0);
+         if (!this.call(UU, !1, (() => (AU !== this.sentProps && (this.handle.qI(AU), this.sentProps = AU), this.handle.OI(FU), this.handle.gY(XU), !0)))) return yU;
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4075` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4257) · [Before (L4075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4075)

```diff
-         return this.runtime.isReady() && MM.Vh.physicsWorld === rM
+         return this.runtime.isReady() && UU.hp.physicsWorld === XU
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4078` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4260) · [Before (L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4078)

```diff
-         return this.busy || !this.runtime.isReady() ? null : MM.Vh.physicsWorld
+         return this.busy || !this.runtime.isReady() ? null : UU.hp.physicsWorld
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4087-L4088` → after: `L4269-L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4269-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4269-L4270) · [Before (L4087-L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4087-L4088)

```diff
-             jM = iM ? `, its ${iM} voxel writes undone for JS to redo` : "";
-           return this.aL(new Error(`Block edits trapped in wasm (${SM})${jM}, so blocks are set in JS from now on`)), null
+             QU = zU ? `, its ${zU} voxel writes undone for JS to redo` : "";
+           return this.oY(new Error(`Block edits trapped in wasm (${yU})${QU}, so blocks are set in JS from now on`)), null
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4100` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4282) · [Before (L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4100)

```diff
-           if (void 0 === PM && (PM = MM.Vh.slotData(iM), SM.set(iM, PM)), PM) {
+           if (void 0 === FU && (FU = UU.hp.slotData(zU), yU.set(zU, FU)), FU) {
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4108` → after: `L4290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4290) · [Before (L4108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4108)

```diff
-         const rM = this.nL.vx,
+         const XU = this.EY.qm,
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4113` → after: `L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4295) · [Before (L4113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4113)

```diff
-           props: (0, CO.qb)(this.nL, MM)
+           props: (0, Zc.lb)(this.EY, UU)
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4115` → after: `L4297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4297) · [Before (L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4115)

```diff
-         return MM ? this.hookedProps = OM : this.plainProps = OM, OM.props
+         return UU ? this.hookedProps = cU : this.plainProps = cU, cU.props
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4120` → after: `L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4302) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4120)

```diff
-         0 !== iM && (0, CO.mb)(MM, {
+         0 !== zU && (0, Zc.hb)(UU, {
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4122-L4123` → after: `L4304-L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4304-L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4304-L4305) · [Before (L4122-L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4122-L4123)

```diff
-           words: this.runtime.view(Int32Array, rM[0], iM * CO.Q),
-           layerIds: this.runtime.view(Uint16Array, rM[0], iM * CO.Q * 2),
+           words: this.runtime.view(Int32Array, XU[0], zU * Zc.S),
+           layerIds: this.runtime.view(Uint16Array, XU[0], zU * Zc.S * 2),
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4131-L4133` → after: `L4313-L4315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4313-L4315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4313-L4315) · [Before (L4131-L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4131-L4133)

```diff
-     var tO = iM(38363),
-       gO = iM(39388),
-       uO = iM(40148),
+     var dc = zU(38130),
+       Lc = zU(39177),
+       ec = zU(39930),
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4151` → after: `L4333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4333) · [Before (L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4151)

```diff
-       MM.YF = MM.XF = 0
+       UU.PJ = UU.dJ = 0
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4158` → after: `L4340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4340) · [Before (L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4158)

```diff
-       uB: !1,
+       HJ: !1,
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4160` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4342) · [Before (L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4160)

```diff
-       pB: !1
+       MJ: !1
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4174` → after: `L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4356) · [Before (L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4174)

```diff
-     class xO extends uO.c {
+     class Vc extends ec.d {
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4182` → after: `L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4364) · [Before (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4182)

```diff
-         this.ND = null;
+         this.hq = null;
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4190` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4372) · [Before (L4190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4190)

```diff
-           MM.container.lY && function(MM, rM, iM, OM) {
+           UU.container.Av && function(UU, XU, zU, cU) {
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4195` → after: `L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4377) · [Before (L4195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4195)

```diff
-           }(aM, iM.movementX, iM.movementY, iM.timeStamp) && (this.oB.dx -= iM.movementX, this.oB.dy -= iM.movementY, this.ND && this.ND())
+           }(AU, zU.movementX, zU.movementY, zU.timeStamp) && (this.vJ.dx -= zU.movementX, this.vJ.dy -= zU.movementY, this.hq && this.hq())
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4201-L4205` → after: `L4383-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4383-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4383-L4387) · [Before (L4201-L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4201-L4205)

```diff
-     var vO = iM(39384),
-       FO = iM(40691),
-       BO = iM(347),
-       XO = iM(40700),
-       IO = iM(9825).m;
+     var sc = zU(39170),
+       nc = zU(40462),
+       mc = zU(352),
+       lc = zU(40465),
+       xc = zU(9788).g;
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4207` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4389) · [Before (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4207)

```diff
-       bL(MM) {
+       LY(UU) {
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4239-L4240` → after: `L4421-L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4421-L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4421-L4422) · [Before (L4239-L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4239-L4240)

```diff
-       if (!rM.FN || rM.vz <= 0) {
-         var SM = rM.dd;
+       if (!XU.hV || XU.xE <= 0) {
+         var yU = XU.Et;
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4242` → after: `L4424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4424) · [Before (L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4242)

```diff
-         var jM = rM.HA;
+         var QU = XU.Am;
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4244` → after: `L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4426) · [Before (L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4244)

```diff
-         var aM = rM.JA;
+         var AU = XU.Im;
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4247-L4248` → after: `L4429-L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4429-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4429-L4430) · [Before (L4247-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4247-L4248)

```diff
-       var PM = !!MM.sm,
-         nM = (0, vO.e)(rM);
+       var FU = !!UU.SN,
+         oU = (0, sc.d)(XU);
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4250-L4251` → after: `L4432-L4433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4432-L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4432-L4433) · [Before (L4250-L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4250-L4251)

```diff
-           if (!MM.qN) return;
-           var iM = (0, vO.g)(yi(MM, rM), MM.qN, rM.hm);
+           if (!UU.Qm) return;
+           var zU = (0, sc.g)(gz(UU, XU), UU.Qm, XU.tN);
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4253` → after: `L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4435) · [Before (L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4253)

```diff
-           tS[1] = iM, rM.hm.translate(tS), rM.sA(), rM.Wm && rM.Wm()
+           dy[1] = zU, XU.tN.translate(dy), XU.Zm(), XU.ON && XU.ON()
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4256` → after: `L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4438) · [Before (L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4256)

```diff
-           if (rM.wakeInFluid && MM.testFluid(Math.floor(rM.hm.base[0]), Math.floor(rM.hm.base[1]), Math.floor(rM.hm.base[2]))) return !1;
+           if (XU.wakeInFluid && UU.testFluid(Math.floor(XU.tN.base[0]), Math.floor(XU.tN.base[1]), Math.floor(XU.tN.base[2]))) return !1;
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4262` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4444) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4262)

```diff
-           return mS = !1, XO(aM, rM.hm, sS, HS, !0), mS
+           return Yy = !1, lc(AU, XU.tN, Oy, Ny, !0), Yy
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4268` → after: `L4450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4450) · [Before (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4268)

```diff
-             var iM = rM.hm,
+             var zU = XU.tN,
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4281-L4285` → after: `L4463-L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4463-L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4463-L4467) · [Before (L4281-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4281-L4285)

```diff
-             BO.scale(LM, MM.gravity, -MM.Ym * zM * rM.gravityMultiplier), rM.applyForce(LM), rM.inFluid = !0, rM.ratioInFluid = QM
-           }(MM, rM), ZS(rM.HA), ZS(rM.JA), ZS(rM.dd), ZS(rM.resting);
-         var zM = rM.dd,
-           LM = rM.HA,
-           mM = rM.JA,
+             mc.scale(YU, UU.gravity, -UU.MN * EU * XU.gravityMultiplier), XU.applyForce(YU), XU.inFluid = !0, XU.ratioInFluid = DU
+           }(UU, XU), uy(XU.Am), uy(XU.Im), uy(XU.Et), uy(XU.resting);
+         var EU = XU.Et,
+           YU = XU.Am,
+           NU = XU.Im,
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4287` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4469) · [Before (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4287)

```diff
-           hM = 1 / rM.vz;
+           pU = 1 / XU.xE;
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4290` → after: `L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4472) · [Before (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4290)

```diff
-         qO[0] = qO[0] + HM[0] * JM, qO[1] = qO[1] + HM[1] * JM, qO[2] = qO[2] + HM[2] * JM, hM = 1 / rM.vz, TO[0] = mM[0] * hM, TO[1] = mM[1] * hM, TO[2] = mM[2] * hM, TO[0] = TO[0] + qO[0] * iM, TO[1] = TO[1] + qO[1] * iM, TO[2] = TO[2] + qO[2] * iM, zM[0] = zM[0] + TO[0], zM[1] … [truncated]
+         jc[0] = jc[0] + IU[0] * aU, jc[1] = jc[1] + IU[1] * aU, jc[2] = jc[2] + IU[2] * aU, pU = 1 / XU.xE, Kc[0] = NU[0] * pU, Kc[1] = NU[1] * pU, Kc[2] = NU[2] * pU, Kc[0] = Kc[0] + jc[0] * zU, Kc[1] = Kc[1] + jc[1] * zU, Kc[2] = Kc[2] + jc[2] * zU, EU[0] = EU[0] + Kc[0], EU[1] … [truncated]
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4295` → after: `L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4477) · [Before (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4295)

```diff
-           EM = rM.fm >= 0 ? rM.fm : MM.fm,
+           GU = XU.HN >= 0 ? XU.HN : UU.HN,
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4298-L4299` → after: `L4480-L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4480-L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4480-L4481) · [Before (L4298-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4298-L4299)

```diff
-         rM.inFluid && (UM = OS(rM, rM.fluidDragHoriz >= 0 ? rM.fluidDragHoriz : lM), GM = OS(rM, rM.fluidDragVert >= 0 ? rM.fluidDragVert : lM)), UM = Math.max(1 - UM * iM / rM.vz, 0), GM = Math.max(1 - GM * iM / rM.vz, 0), SS[0] = UM, SS[1] = GM, SS[2] = UM, zM[0] = zM[0] * SS[0 … [truncated]
-           if (XO.checkInput(rM.hm, iM), !rM.resting[1] || iM[1] > 0) return;
+         XU.inFluid && (BU = zy(XU, XU.fluidDragHoriz >= 0 ? XU.fluidDragHoriz : kU), ZU = zy(XU, XU.fluidDragVert >= 0 ? XU.fluidDragVert : kU)), BU = Math.max(1 - BU * zU / XU.xE, 0), ZU = Math.max(1 - ZU * zU / XU.xE, 0), cy[0] = BU, cy[1] = ZU, cy[2] = BU, EU[0] = EU[0] * cy[0 … [truncated]
+           if (lc.checkInput(XU.tN, zU), !XU.resting[1] || zU[1] > 0) return;
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4301` → after: `L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4483) · [Before (L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4301)

```diff
-           kS(SM, rM.hm);
+           ry(yU, XU.tN);
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4307` → after: `L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4489) · [Before (L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4307)

```diff
-         }(MM, rM, VO, iS), JS(MM, rM, rM.hm, VO, rM.resting, rM.slideOnCollision), rM.vN && function(MM, rM, iM, OM) {
+         }(UU, XU, bc, Xy), py(UU, XU, XU.tN, bc, XU.resting, XU.slideOnCollision), XU.bV && function(UU, XU, zU, cU) {
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4316` → after: `L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4498) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4316)

```diff
-             QM = rM.hm.base[1];
+             DU = XU.tN.base[1];
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4332` → after: `L4514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4514) · [Before (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4332)

```diff
-         for (var CM = 0; CM < 3; ++CM) rM.resting[CM] = rM.resting[CM] || iS[CM], cO[CM] = 0, rM.resting[CM] && (MS[CM] || (cO[CM] = -rM.dd[CM]), rM.dd[CM] = 0);
+         for (var RU = 0; RU < 3; ++RU) XU.resting[RU] = XU.resting[RU] || Xy[RU], Tc[RU] = 0, XU.resting[RU] && (hc[RU] || (Tc[RU] = -XU.Et[RU]), XU.Et[RU] = 0);
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4334` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4516) · [Before (L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4334)

```diff
-         eM > .001 && (BO.scale(cO, cO, rM.vz), rM.Rm && rM.Rm(cO)),
+         PU > .001 && (mc.scale(Tc, Tc, XU.xE), XU.wN && XU.wN(Tc)),
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4336` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4518) · [Before (L4336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4336)

```diff
-             if (!rM.hm) return;
+             if (!XU.tN) return;
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4338-L4340` → after: `L4520-L4522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4520-L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4520-L4522) · [Before (L4338-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4338-L4340)

```diff
-             var SM = BO.squaredLength(rM.dd);
-             SM > 1e-5 && rM.sA();
-             MM.sm && MM.sm(rM) ? (rM.loadStateFromCopy(MM.rollbackBody), rM.rolledBackLastTick = !0) : rM.rolledBackLastTick = !1
+             var yU = mc.squaredLength(XU.Et);
+             yU > 1e-5 && XU.Zm();
+             UU.SN && UU.SN(XU) ? (XU.loadStateFromCopy(UU.rollbackBody), XU.rolledBackLastTick = !0) : XU.rolledBackLastTick = !1
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4353` → after: `L4535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4535) · [Before (L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4353)

```diff
-       BO.copy(nS, iM.dd), nS[rM] = 0;
+       mc.copy(Fy, zU.Et), Fy[XU] = 0;
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4357-L4358` → after: `L4539-L4540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4539-L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4539-L4540) · [Before (L4357-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4357-L4358)

```diff
-           QM = PM > nM ? (PM - nM) / PM : 0;
-         iM.dd[(rM + 1) % 3] *= QM, iM.dd[(rM + 2) % 3] *= QM
+           DU = FU > oU ? (FU - oU) / FU : 0;
+         zU.Et[(XU + 1) % 3] *= DU, zU.Et[(XU + 2) % 3] *= DU
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4405` → after: `L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4587) · [Before (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4405)

```diff
-           }(MM, rM, iM))) return kS(rM.hm, iM), rM.resting[0] = yS[0], rM.resting[2] = yS[2], rM.Wm && rM.Wm(), !0
+           }(UU, XU, zU))) return ry(XU.tN, zU), XU.resting[0] = ty[0], XU.resting[2] = ty[2], XU.ON && XU.ON(), !0
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4436` → after: `L4618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4618) · [Before (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4436)

```diff
-       fm: .1
+       HN: .1
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4441-L4445` → after: `L4623-L4627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4623-L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4623-L4627) · [Before (L4441-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4441-L4445)

```diff
-         var iM = MM.uL,
-           OM = MM.nL.GH,
-           SM = MM.Am;
-         rM.qN = (0, Fr.h)(((MM, rM, OM) => !iM.EX(MM + SM[0], rM + SM[1], OM + SM[2])), "cell"), super(rM, ((MM, rM, OM) => iM.Fm(MM + SM[0], rM + SM[1], OM + SM[2])), ((MM, rM, jM) => {
-           var aM = iM.YB(MM + SM[0], rM + SM[1], jM + SM[2]);
+         var zU = UU.qY,
+           cU = UU.EY.GI,
+           yU = UU.VN;
+         XU.Qm = (0, lX.j)(((UU, XU, cU) => !zU.KJ(UU + yU[0], XU + yU[1], cU + yU[2])), "cell"), super(XU, ((UU, XU, cU) => zU.nN(UU + yU[0], XU + yU[1], cU + yU[2])), ((UU, XU, QU) => {
+           var AU = zU.VJ(UU + yU[0], XU + yU[1], QU + yU[2]);
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4447` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4629) · [Before (L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4447)

```diff
-         })), this.wasm = null, this.FX = 0, this.BX = 0
+         })), this.wasm = null, this.bJ = 0, this.zK = 0
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4451` → after: `L4633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4633) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4451)

```diff
-         this.wasm ? this.wasm.bL(MM) : super.bL(MM), this.FX += performance.now() - rM, this.BX++
+         this.wasm ? this.wasm.LY(UU) : super.LY(UU), this.bJ += performance.now() - XU, this.zK++
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4454` → after: `L4636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4636) · [Before (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4454)

```diff
-         return this.wasm && this.wasm.Zx(MM, rM, iM, OM, SM, jM) || super.Zx(MM, rM, iM, OM, SM, jM)
+         return this.wasm && this.wasm.Wm(UU, XU, zU, cU, yU, QU) || super.Wm(UU, XU, zU, cU, yU, QU)
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4457-L4458` → after: `L4639-L4640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4639-L4640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4639-L4640) · [Before (L4457-L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4457-L4458)

```diff
-         var rM = super.Zm(MM);
-         return rM && this.wasm && this.wasm.Fv(MM), rM
+         var XU = super.fN(UU);
+         return XU && this.wasm && this.wasm.Zx(UU), XU
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4462-L4463` → after: `L4644-L4645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4644-L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4644-L4645) · [Before (L4462-L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4462-L4463)

```diff
-           ms: this.FX,
-           count: this.BX
+           ms: this.bJ,
+           count: this.zK
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4465` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4647) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4465)

```diff
-         return this.FX = 0, this.BX = 0, MM
+         return this.bJ = 0, this.zK = 0, UU
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4468` → after: `L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4650) · [Before (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4468)

```diff
-     var YS = iM(40691),
+     var Hy = zU(40462),
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4470` → after: `L4652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4652) · [Before (L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4470)

```diff
-       AS = iM(40700),
+       vy = zU(40465),
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4472` → after: `L4654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4654) · [Before (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4472)

```diff
-       vS = iM(38576);
+       sy = zU(38347);
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4475` → after: `L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4657) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4475)

```diff
-       this.MI = !1, this.mI = !1, this.HI = 1, this.JI = 0, this.yI = 10, this.pI = 10, this.xI = 0, this.vI = .2
+       this.NK = !1, this.IK = !1, this.WK = 1, this.rK = 0, this.iK = 10, this.VK = 10, this.sK = 0, this.lK = .2
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4481-L4484` → after: `L4663-L4666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4663-L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4663-L4666) · [Before (L4481-L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4481-L4484)

```diff
-         rM = Object.assign({}, new FS, rM), this.Cm = MM, this.yI = +rM.yI, this.pI = +rM.pI, this.MI = !!rM.MI, this.mI = !!rM.mI, this.HI = rM.HI, this.JI = rM.JI, this.heading = 0, this.pitch = 0, this.zL = 0, this.Qd = lM().create(), this.rK = this.Cm.hU.iK(["position"]);
-         var iM = .9 * MM.hU.jK(MM.eD).height;
-         MM.hU.eZ(this.rK, "mG", {
-           zh: MM.eD,
+         XU = Object.assign({}, new ny, XU), this.WN = UU, this.iK = +XU.iK, this.VK = +XU.VK, this.NK = !!XU.NK, this.IK = !!XU.IK, this.WK = XU.WK, this.rK = XU.rK, this.heading = 0, this.pitch = 0, this.NY = 0, this.ct = kU().create(), this.jK = this.WN.xG.bK(["position"]);
+         var zU = .9 * UU.xG.hK(UU.pM).height;
+         UU.xG.sH(this.jK, "RZ", {
+           Ep: UU.pM,
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4486` → after: `L4668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4668) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4486)

```diff
-         }), this.zK = rM.xI, this.vI = rM.vI, this.hK = rM.xI, this.oB = {
+         }), this.XT = XU.sK, this.lK = XU.lK, this.pT = XU.sK, this.vJ = {
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4489-L4494` → after: `L4671-L4676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4671-L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4671-L4676) · [Before (L4489-L4494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4489-L4494)

```diff
-         }, this.lK = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.bK = new Hj(this), this.WK = lM().fi(0, 0, 1), this.sK = lM().fi(0, 0, 1), this.iN = !1, this.NK = {
-           oW: 0,
-           DW: 0,
-           YF: 0,
-           XF: 0
-         }, this.IK = NaN, this.bD = null, this.RD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.VK = null, this.Qq = null, this.zq = null, this.hq = null
+         }, this.aT = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.eT = new NQ(this), this.wT = kU().pp(0, 0, 1), this.qT = kU().pp(0, 0, 1), this.qV = !1, this.lT = {
+           pw: 0,
+           vy: 0,
+           PJ: 0,
+           dJ: 0
+         }, this.jT = NaN, this.Iq = null, this.hT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.U1 = null, this.E1 = null, this.Y1 = null, this.y_ = null
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4498-L4499` → after: `L4680-L4681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4680-L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4680-L4681) · [Before (L4498-L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4498-L4499)

```diff
-         var rM = this.Cm.hU.jK(this.rK);
-         lM().copy(MM, rM.bq);
+         var XU = this.WN.xG.hK(this.jK);
+         kU().copy(UU, XU.A_);
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4501` → after: `L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4683) · [Before (L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4501)

```diff
-         return 0 === iM[0] && 0 === iM[1] && 0 === iM[2] || 0 === this.hK || cS(this, MM, this.heading), MM
+         return 0 === zU[0] && 0 === zU[1] && 0 === zU[2] || 0 === this.pT || Ty(this, UU, this.heading), UU
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4505-L4508` → after: `L4687-L4690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4687-L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4687-L4690) · [Before (L4505-L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4505-L4508)

```diff
-         var rM = this.lq(MM);
-         if (0 === this.hK) return rM;
-         const iM = this.Cm.bloxd.Aq(this.Cm.eD);
-         return lM().tm(rM, rM, this.WK, -this.hK * iM)
+         var XU = this.Q_(UU);
+         if (0 === this.pT) return XU;
+         const zU = this.WN.bloxd.o_(this.WN.pM);
+         return kU().gp(XU, XU, this.wT, -this.pT * zU)
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4511` → after: `L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4693) · [Before (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4511)

```diff
-         return this.oq(MM)
+         return this.F_(UU)
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4514` → after: `L4696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4696) · [Before (L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4514)

```diff
-         var MM = this.lq(),
+         var UU = this.Q_(),
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4516` → after: `L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4698) · [Before (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4516)

```diff
-         return this.Cm.jT(MM, rM)
+         return this.WN.N_(UU, XU)
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4519` → after: `L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4701) · [Before (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4519)

```diff
-         var MM = this.oq(),
+         var UU = this.F_(),
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4521` → after: `L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4703) · [Before (L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4521)

```diff
-         return this.Cm.jT(MM, rM)
+         return this.WN.N_(UU, XU)
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4524` → after: `L4706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4706) · [Before (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4524)

```diff
-         return (0, vS.b)(this.heading, this.pitch - Math.PI / 2)
+         return (0, sy.c)(this.heading, this.pitch - Math.PI / 2)
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4528` → after: `L4710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4710) · [Before (L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4528)

```diff
-         return lM().copy(this.lT, this.sK)
+         return kU().copy(this.B_, this.qT)
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4531` → after: `L4713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4713) · [Before (L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4531)

```diff
-         return lM().copy(this.lT, this.WK)
+         return kU().copy(this.B_, this.wT)
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4534-L4535` → after: `L4716-L4717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4716-L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4716-L4717) · [Before (L4534-L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4534-L4535)

```diff
-         var OM = this.RD;
-         return OM[0] = MM, OM[1] = rM, OM[2] = iM.dx, OM[3] = iM.dy, OM[7] = this.NK.oW, OM[8] = this.NK.DW, OM[9] = function(MM) {
+         var cU = this.hT;
+         return cU[0] = UU, cU[1] = XU, cU[2] = zU.dx, cU[3] = zU.dy, cU[7] = this.lT.pw, cU[8] = this.lT.vy, cU[9] = function(UU) {
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4540` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4722) · [Before (L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4540)

```diff
-         MM[4] = iM, MM[5] = OM, MM[6] = rM, this.bD && this.bD(MM)
+         UU[4] = zU, UU[5] = cU, UU[6] = XU, this.Iq && this.Iq(UU)
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4545-L4546` → after: `L4727-L4728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4727-L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4727-L4728) · [Before (L4545-L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4545-L4546)

```diff
-           dx: this.oB.dx,
-           dy: this.oB.dy
+           dx: this.vJ.dx,
+           dy: this.vJ.dy
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4548` → after: `L4730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4730) · [Before (L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4548)

```diff
-         this.oB.dx = this.oB.dy = 0;
+         this.vJ.dx = this.vJ.dy = 0;
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4553-L4557` → after: `L4735-L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4735-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4735-L4739) · [Before (L4553-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4553-L4557)

```diff
-           return "number" === typeof MM ? MM : performance.now()
-         }()) - this.IK, this.IK = OM);
-         var SM = !MM && this.bD ? this.pT(OM, iM, rM) : null;
-         const jM = this.zq ? this.zq() : 0,
-           aM = this.hq ? this.hq() : null,
+           return "number" === typeof UU ? UU : performance.now()
+         }()) - this.jT, this.jT = cU);
+         var yU = !UU && this.Iq ? this.L_(cU, zU, XU) : null;
+         const QU = this.Y1 ? this.Y1() : 0,
+           AU = this.y_ ? this.y_() : null,
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4559-L4563` → after: `L4741-L4745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4741-L4745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4741-L4745) · [Before (L4559-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4559-L4563)

```diff
-         var nM = this.HI;
-         if (this.Cm.container.EY && (this.Cm.container.lY || (nM *= this.JI)), 0 === nM && 0 === jM && !PM) return MM || fO(this.NK), void(SM && this.XT(SM, WO, 0, 0));
-         if (this.iN) {
-           if (this.iN = !1, 0 === jM && !PM) return MM || fO(this.NK), void(SM && this.XT(SM, kO, 0, 0));
-           nM = 0, SM && this.XT(SM, kO, 0, 0), SM = null
+         var oU = this.WK;
+         if (this.WN.container.Fv && (this.WN.container.Av || (oU *= this.rK)), 0 === oU && 0 === QU && !FU) return UU || ic(this.lT), void(yU && this.e_(yU, qc, 0, 0));
+         if (this.qV) {
+           if (this.qV = !1, 0 === QU && !FU) return UU || ic(this.lT), void(yU && this.e_(yU, rc, 0, 0));
+           oU = 0, yU && this.e_(yU, rc, 0, 0), yU = null
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4570-L4575` → after: `L4752-L4757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4752-L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4752-L4757) · [Before (L4570-L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4570-L4575)

```diff
-                 jM = YO(rM.dx, OM, MM.oW, SM),
-                 aM = YO(rM.dy, OM, MM.DW, SM);
-               return 0 !== jM && jM !== MM.YF || 0 !== aM && aM !== MM.XF ? (MM.YF = jM, MM.XF = aM, rM.dx = MM.oW * OM, rM.dy = MM.DW * OM, !0) : (MM.YF = MM.XF = 0, MM.oW = rM.dx / OM, MM.DW = rM.dy / OM, !1)
-             }(this.NK, rM, iM);
-             SM && this.XT(SM, QM ? DO : sO, rM.dx, rM.dy)
-           } else fO(this.NK), SM && this.XT(SM, WO, 0, 0);
+                 QU = Hc(XU.dx, cU, UU.pw, yU),
+                 AU = Hc(XU.dy, cU, UU.vy, yU);
+               return 0 !== QU && QU !== UU.PJ || 0 !== AU && AU !== UU.dJ ? (UU.PJ = QU, UU.dJ = AU, XU.dx = UU.pw * cU, XU.dy = UU.vy * cU, !0) : (UU.PJ = UU.dJ = 0, UU.pw = XU.dx / cU, UU.vy = XU.dy / cU, !1)
+             }(this.lT, XU, zU);
+             yU && this.e_(yU, DU ? Sc : Oc, XU.dx, XU.dy)
+           } else ic(this.lT), yU && this.e_(yU, qc, 0, 0);
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4577-L4579` → after: `L4759-L4761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4759-L4761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4759-L4761) · [Before (L4577-L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4577-L4579)

```diff
-           LM = rM.dx * this.yI * nM * zM,
-           mM = rM.dy * this.pI * nM * zM;
-         this.MI && (LM = -LM), this.mI && (mM = -mM), PM && (LM += aM.PD, mM += aM.nD), (0 !== nM || PM) && (mM += this.bK.qT(mM));
+           YU = XU.dx * this.iK * oU * EU,
+           NU = XU.dy * this.VK * oU * EU;
+         this.NK && (YU = -YU), this.IK && (NU = -NU), FU && (YU += AU.zq, NU += AU.Qq), (0 !== oU || FU) && (NU += this.eT.q_(NU));
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4581` → after: `L4763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4763) · [Before (L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4581)

```diff
-         this.heading += LM < 0 ? LM + HM : LM, this.heading > HM && (this.heading -= HM), (0 !== jM || PM) && (this.heading = ((this.heading + jM) % HM + HM) % HM), this.pitch = Math.max(-mj, Math.min(mj, this.pitch + mM)), null !== this.Qq && (this.heading = this.Qq), null !== t … [truncated]
+         this.heading += YU < 0 ? YU + IU : YU, this.heading > IU && (this.heading -= IU), (0 !== QU || FU) && (this.heading = ((this.heading + QU) % IU + IU) % IU), this.pitch = Math.max(-YQ, Math.min(YQ, this.pitch + NU)), null !== this.E1 && (this.heading = this.E1), null !== t … [truncated]
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4584-L4585` → after: `L4766-L4767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4766-L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4766-L4767) · [Before (L4584-L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4584-L4585)

```diff
-         lM().set(this.sK, 0, 0, 1);
-         var MM = this.sK,
+         kU().set(this.qT, 0, 0, 1);
+         var UU = this.qT,
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4587` → after: `L4769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4769) · [Before (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4587)

```diff
-         Mj(this, this.heading, this.pitch, 0 !== this.hK, this.WK), lM().cJ(MM, MM, rM, this.pitch), lM().Md(MM, MM, rM, this.heading)
+         hy(this, this.heading, this.pitch, 0 !== this.pT, this.wT), kU().pa(UU, UU, XU, this.pitch), kU().ta(UU, UU, XU, this.heading)
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4593` → after: `L4775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4775) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4593)

```diff
-           aM = this.Cm.bloxd.Aq(this.Cm.eD),
+           AU = this.WN.bloxd.o_(this.WN.pM),
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4596` → after: `L4778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4778) · [Before (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4596)

```diff
-         return 0 === nM ? (lM().copy(SM, MM), 0) : (lM().tm(SM, SM, jM, -nM * aM), nM)
+         return 0 === oU ? (kU().copy(yU, UU), 0) : (kU().gp(yU, yU, QU, -oU * AU), oU)
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4599` → after: `L4781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4781) · [Before (L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4599)

```diff
-         return lM().VJ(zj, rM), qS(this, MM, zj, iM)
+         return kU().fp(DQ, XU), jy(this, UU, DQ, zU)
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4602-L4603` → after: `L4784-L4785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4784-L4785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4784-L4785) · [Before (L4602-L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4602-L4603)

```diff
-         const rM = (this.zK - this.hK) * this.vI;
-         Math.abs(rM) < 1e-4 ? this.hK = this.zK : this.hK += rM, 0 !== rM && this.lK && this.lK(this.hK, this.hK - rM), this.bK.update(MM)
+         const XU = (this.XT - this.pT) * this.lK;
+         Math.abs(XU) < 1e-4 ? this.pT = this.XT : this.pT += XU, 0 !== XU && this.aT && this.aT(this.pT, this.pT - XU), this.eT.update(UU)
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4606-L4608` → after: `L4788-L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4788-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4788-L4790) · [Before (L4606-L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4606-L4608)

```diff
-         var MM = VS(KS(this), this.Cm.bloxd.Aq(this.Cm.eD));
-         this.hK > MM && (this.hK = MM);
-         var rM = this.Cm.CL.JV().yV;
+         var UU = by(Jy(this), this.WN.bloxd.o_(this.WN.pM));
+         this.pT > UU && (this.pT = UU);
+         var XU = this.WN.WY.v_().n_;
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4619-L4621` → after: `L4801-L4803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4801-L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4801-L4803) · [Before (L4619-L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4619-L4621)

```diff
-       const rM = MM.Cm.bloxd.Aq(MM.Cm.eD);
-       var iM = Math.max(MM.zK, MM.hK) * rM + .5;
-       return qS(MM, MM.lq(), MM.wT(), iM)
+       const XU = UU.WN.bloxd.o_(UU.WN.pM);
+       var zU = Math.max(UU.XT, UU.pT) * XU + .5;
+       return jy(UU, UU.Q_(), UU.P_(), zU)
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4626-L4627` → after: `L4808-L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4808-L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4808-L4809) · [Before (L4626-L4627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4626-L4627)

```diff
-         var SM = MM.Cm.Am;
-         jj = new(NS())([0, 0, 0], lM().clone(Pj)), aj = (rM, iM, OM) => MM.Cm.uL.Fm(rM + SM[0], iM + SM[1], OM + SM[2]), lM().scale(Pj, Pj, -.5)
+         var yU = UU.WN.VN;
+         yQ = new(My())([0, 0, 0], kU().clone(AQ)), QQ = (XU, zU, cU) => UU.WN.qY.nN(XU + yU[0], zU + yU[1], cU + yU[2]), kU().scale(AQ, AQ, -.5)
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4644` → after: `L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4826) · [Before (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4644)

```diff
-       return lM().set(SM, 0, 0, 1), lM().cJ(SM, SM, jM, MM.Qd[0]), lM().Md(SM, SM, jM, MM.Qd[1]), lM().Od(SM, SM, jM, MM.Qd[2]), lM().cJ(SM, SM, jM, iM), lM().Md(SM, SM, jM, rM), OM && (lM().cJ(SM, SM, jM, MM.cameraRotationOffset[0]), lM().Md(SM, SM, jM, MM.cameraRotationOffset[1 … [truncated]
+       return kU().set(yU, 0, 0, 1), kU().pa(yU, yU, QU, UU.ct[0]), kU().ta(yU, yU, QU, UU.ct[1]), kU().wa(yU, yU, QU, UU.ct[2]), kU().pa(yU, yU, QU, zU), kU().ta(yU, yU, QU, XU), cU && (kU().pa(yU, yU, QU, UU.cameraRotationOffset[0]), kU().ta(yU, yU, QU, UU.cameraRotationOffset[1 … [truncated]
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4648-L4650` → after: `L4830-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4830-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4830-L4832) · [Before (L4648-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4648-L4650)

```diff
-       jj.setPosition(MM.oq()), jj.translate(Pj);
-       var rM = Math.max(MM.targetY, MM.Cm.CL.JV().yV[1]) + .5,
-         iM = MM.aT();
+       yQ.setPosition(UU.F_()), yQ.translate(AQ);
+       var XU = Math.max(UU.targetY, UU.WN.WY.v_().n_[1]) + .5,
+         zU = UU.p_();
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4655-L4659` → after: `L4837-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4837-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4837-L4841) · [Before (L4655-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4655-L4659)

```diff
-       const rM = MM.oq(),
-         iM = (0, vS.b)(MM.heading, MM.pitch - Math.PI / 2);
-       lM().tm(rM, rM, iM, MM.Cm.CL.JV().yV[1]), jj.setPosition(rM), jj.translate(Pj);
-       var OM = Math.max(MM.targetX, MM.Cm.CL.JV().yV[0]) + .5;
-       const SM = (0, vS.b)(MM.heading + Math.PI / 2, 0);
+       const XU = UU.F_(),
+         zU = (0, sy.c)(UU.heading, UU.pitch - Math.PI / 2);
+       kU().gp(XU, XU, zU, UU.WN.WY.v_().n_[1]), yQ.setPosition(XU), yQ.translate(AQ);
+       var cU = Math.max(UU.targetX, UU.WN.WY.v_().n_[0]) + .5;
+       const yU = (0, sy.c)(UU.heading + Math.PI / 2, 0);
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4664-L4665` → after: `L4846-L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4846-L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4846-L4847) · [Before (L4664-L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4664-L4665)

```diff
-       var rM = MM.Cm.physics?.wasm;
-       return rM ? rM.SF(jj, nj, Sj) : Sj()
+       var XU = UU.WN.physics?.wasm;
+       return XU ? XU.Hx(yQ, FQ, cQ) : cQ()
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4671` → after: `L4853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4853) · [Before (L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4671)

```diff
-     var jj, aj, Pj = lM().fi(.2, .2, .2),
+     var yQ, QQ, AQ = kU().pp(.2, .2, .2),
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4679` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4861) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4679)

```diff
-         this.lV = MM, this.wL = 0, this.GV = 0, this.bV = 0, this.wV = 0, this.tV = performance.now(), this.RV = performance.now(), this.sV = 0, this.oV = 0
+         this.m_ = UU, this.eY = 0, this.l_ = 0, this.x_ = 0, this.J_ = 0, this.j_ = performance.now(), this.b_ = performance.now(), this.T_ = 0, this.h_ = 0
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4682-L4684` → after: `L4864-L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4864-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4864-L4866) · [Before (L4682-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4682-L4684)

```diff
-         const rM = this.GV - this.bV,
-           iM = this.lV.pitch + mj;
-         this.wL = Math.min(this.wL + MM, rM + iM), this.tV = performance.now()
+         const XU = this.l_ - this.x_,
+           zU = this.m_.pitch + YQ;
+         this.eY = Math.min(this.eY + UU, XU + zU), this.j_ = performance.now()
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4687` → after: `L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4869) · [Before (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4687)

```diff
-         this.wV = MM
+         this.J_ = UU
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4690` → after: `L4872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4872) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4690)

```diff
-         this.wL = 0, this.GV = 0, this.bV = 0, this.sV = 0, this.oV = 0
+         this.eY = 0, this.l_ = 0, this.x_ = 0, this.T_ = 0, this.h_ = 0
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4693-L4697` → after: `L4875-L4879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4875-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4875-L4879) · [Before (L4693-L4697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4693-L4697)

```diff
-         this.bV > 0 && (this.oV += this.bV), (this.wL > 0 || this.GV > 0) && MM > 0 && (this.sV += MM);
-         let rM = this.bV;
-         this.bV = 0;
-         if (rM < 0 && this.oV > 0 && this.sV > 0) {
-           rM *= 1 - Math.min(1, this.sV / this.oV)
+         this.x_ > 0 && (this.h_ += this.x_), (this.eY > 0 || this.l_ > 0) && UU > 0 && (this.T_ += UU);
+         let XU = this.x_;
+         this.x_ = 0;
+         if (XU < 0 && this.h_ > 0 && this.T_ > 0) {
+           XU *= 1 - Math.min(1, this.T_ / this.h_)
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4703-L4707` → after: `L4885-L4889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4885-L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4885-L4889) · [Before (L4703-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4703-L4707)

```diff
-           iM = Math.min(rM - this.tV, 75);
-         this.wL = Math.max(0, this.wL - this.wV * iM * MM);
-         const OM = Math.min(1, .009 * (rM - this.RV)),
-           SM = (this.wL - this.GV) * OM;
-         Math.abs(SM) < 1e-6 ? this.GV = this.wL : (this.bV += SM, this.GV += SM), 0 === this.wL && Math.abs(this.GV) < 1e-6 && (this.sV = 0, this.oV = 0), this.RV = rM
+           zU = Math.min(XU - this.j_, 75);
+         this.eY = Math.max(0, this.eY - this.J_ * zU * UU);
+         const cU = Math.min(1, .009 * (XU - this.b_)),
+           yU = (this.eY - this.l_) * cU;
+         Math.abs(yU) < 1e-6 ? this.l_ = this.eY : (this.x_ += yU, this.l_ += yU), 0 === this.eY && Math.abs(this.l_) < 1e-6 && (this.T_ = 0, this.h_ = 0), this.b_ = XU
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4710` → after: `L4892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4892) · [Before (L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4710)

```diff
-     var hj = iM(38448),
+     var IQ = zU(38227),
```

#### 508. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4712` → after: `L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4894) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4712)

```diff
-         XV: ""
+         A4: ""
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4716` → after: `L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4898) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4716)

```diff
-         rM = Object.assign({}, Jj, rM), this.Cm = MM, this.qV = rM.XV;
+         XU = Object.assign({}, pQ, XU), this.WN = UU, this.W4 = XU.A4;
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4733` → after: `L4915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4915) · [Before (L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4733)

```diff
-         this.OJ = [0, 0, 0, 0, 0, 0], this.vx = 0;
+         this.ca = [0, 0, 0, 0, 0, 0], this.qm = 0;
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4737-L4738` → after: `L4919-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4919-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4919-L4920) · [Before (L4737-L4738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4737-L4738)

```diff
-         this.jF = function(MM, rM) {
-           var iM = new Ej(rM && rM.CH),
+         this.vx = function(UU, XU) {
+           var zU = new kQ(XU && XU.BI),
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4741-L4742` → after: `L4923-L4924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4923-L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4923-L4924) · [Before (L4741-L4742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4741-L4742)

```diff
-           for (; MM > SM.length;) this.jF(SM.length, {});
-           this.vx++, SM[MM] = !!EM.solid, jM[MM] = !!EM.solid && (EM.Hd ?? !0), aM[MM] = EM.Hd ?? null, PM[MM] = !!EM.opaque, nM[MM] = !!EM.CH, QM[MM] = !!EM.B3, LM[MM] = EM.B3 || null;
+           for (; UU > yU.length;) this.vx(yU.length, {});
+           this.qm++, yU[UU] = !!GU.solid, QU[UU] = !!GU.solid && (GU.Ft ?? !0), AU[UU] = GU.Ft ?? null, FU[UU] = !!GU.opaque, oU[UU] = !!GU.BI, DU[UU] = !!GU.B5, YU[UU] = GU.B5 || null;
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4752-L4755` → after: `L4934-L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4934-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4934-L4937) · [Before (L4752-L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4752-L4755)

```diff
-           for (var CM = 0; CM < 6; ++CM) this.OJ[6 * MM + CM] = yj(this, OM, UM[CM], !0);
-           zM[MM] = {}, nM[MM] && (zM[MM].Ym = EM.Ym, zM[MM].X3 = EM.X3);
-           var bM = EM.onLoad || EM.zC || EM.uC || EM.gC || EM.pG;
-           mM[MM] = bM ? new lj(EM) : null, hM[MM] = EM.Ch?.some((MM => MM >= 1)) ? EM.Ch.map((MM => Math.max(MM, 0))) : null, JM[MM] = (EM.hd ?? 0) >= 1 ? EM.hd : null, PM[MM] ? dM[MM] = 15 : (EM.eh ?? 0) >= 1 ? dM[MM] = EM.eh : dM[MM] = nM[MM] ? 3 : 1, yM[MM] = EM.Lk | (PM[MM] ? … [truncated]
+           for (var RU = 0; RU < 6; ++RU) this.ca[6 * UU + RU] = tQ(this, cU, BU[RU], !0);
+           EU[UU] = {}, oU[UU] && (EU[UU].MN = GU.MN, EU[UU].Z5 = GU.Z5);
+           var WU = GU.onLoad || GU.uR || GU.zW || GU.UW || GU.sZ;
+           NU[UU] = WU ? new gQ(GU) : null, pU[UU] = GU.Pp?.some((UU => UU >= 1)) ? GU.Pp.map((UU => Math.max(UU, 0))) : null, aU[UU] = (GU.ot ?? 0) >= 1 ? GU.ot : null, FU[UU] ? tU[UU] = 15 : (GU.Wp ?? 0) >= 1 ? tU[UU] = GU.Wp : tU[UU] = oU[UU] ? 3 : 1, gU[UU] = GU.qS | (FU[UU] ? … [truncated]
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4758` → after: `L4940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4940) · [Before (L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4758)

```diff
-         }, this.I3 = function(MM, rM) {
+         }, this.i5 = function(UU, XU) {
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4763` → after: `L4945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4945) · [Before (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4763)

```diff
-           var aM = (SM.E1 ?? []).map((MM => this.qV + MM)),
+           var AU = (yU.K4 ?? []).map((UU => this.W4 + UU)),
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4766` → after: `L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4948) · [Before (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4766)

```diff
-           4 === nM.length && (PM = nM.pop()), !0 === SM.K3 ? EM[jM] = nM : EM[jM] = null, UM[jM] = SM.Q0, GM[jM] = {
+           4 === oU.length && (FU = oU.pop()), !0 === yU.Z8 ? GU[QU] = oU : GU[QU] = null, BU[QU] = yU.y5, ZU[QU] = {
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4769-L4775` → after: `L4951-L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4951-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4951-L4957) · [Before (L4769-L4775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4769-L4775)

```diff
-             E1: aM,
-             U1: !!SM.U1,
-             Q0: SM.Q0,
-             HJ: SM.W8,
-             Jd: SM.Jd,
-             Z2: SM.Z2,
-             U3: SM.U3 ?? null
+             K4: AU,
+             R7: !!yU.R7,
+             y5: yU.y5,
+             Ia: yU.W8,
+             Dt: yU.Dt,
+             o5: yU.o5,
+             Y5: yU.Y5 ?? null
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4777-L4779` → after: `L4959-L4961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4959-L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4959-L4961) · [Before (L4777-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4777-L4779)

```diff
-           const QM = iM.Z8(jM);
-           return SM.Q0 >= 0 && SM.U1 && (0, hj.m)(iM, jM, iM.Zh(QM)), jM
-         }, this.qB = function(MM) {
+           const DU = zU.K8(QU);
+           return yU.y5 >= 0 && yU.R7 && (0, IQ.j)(zU, QU, zU.Hp(DU)), QU
+         }, this.mJ = function(UU) {
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4781` → after: `L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4963) · [Before (L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4781)

```diff
-         }, this.UH = function(MM) {
+         }, this.kI = function(UU) {
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4783` → after: `L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4965) · [Before (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4783)

```diff
-         }, this.Xx = function(MM) {
+         }, this.Km = function(UU) {
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4785` → after: `L4967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4967) · [Before (L4785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4785)

```diff
-         }, this.K8 = function(MM) {
+         }, this.o9 = function(UU) {
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4787` → after: `L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4969) · [Before (L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4787)

```diff
-         }, this.i5 = function(MM) {
+         }, this.N9 = function(UU) {
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4789` → after: `L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4971) · [Before (L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4789)

```diff
-         }, this.y5 = function(MM) {
+         }, this.I9 = function(UU) {
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4791` → after: `L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4973) · [Before (L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4791)

```diff
-         }, this.Z5 = function(MM) {
+         }, this.W9 = function(UU) {
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4793-L4795` → after: `L4975-L4977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4975-L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4975-L4977) · [Before (L4793-L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4793-L4795)

```diff
-         }, this.o5 = function(MM, rM) {
-           return this.OJ[6 * MM + rM]
-         }, this.mJ = function(MM) {
+         }, this.J9 = function(UU, XU) {
+           return this.ca[6 * UU + XU]
+         }, this.Na = function(UU) {
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4797` → after: `L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4979) · [Before (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4797)

```diff
-         }, this.Y5 = function() {
+         }, this.K9 = function() {
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4799-L4800` → after: `L4981-L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4981-L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4981-L4982) · [Before (L4799-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4799-L4800)

```diff
-           return GM.some((rM => rM.E1.some((iM => iM === MM && rM.U1))))
-         }, this.eH = SM, this.iJ = PM, this.GH = nM, this.bC = QM, this.B5 = LM, this.tC = mM, this.ZC = HM, this.jJ = EM, this.SJ = UM, this.nJ = hM, this.QJ = JM, this.zJ = dM, this.Ah = yM, this.w6 = lM
+           return ZU.some((XU => XU.K4.some((zU => zU === UU && XU.R7))))
+         }, this.ZI = yU, this.za = FU, this.GI = oU, this.bR = DU, this.U3 = YU, this.RP = NU, this.DW = IU, this.Qa = GU, this.ya = BU, this.oa = pU, this.Da = aU, this.Ea = tU, this.np = gU, this.X3 = kU
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4807` → after: `L4989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4989) · [Before (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4807)

```diff
-       return void 0 === SM && OM && (SM = MM.I3(iM, {})), SM
+       return void 0 === yU && cU && (yU = UU.i5(zU, {})), yU
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4811` → after: `L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4993) · [Before (L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4811)

```diff
-       this.onLoad = MM.onLoad || null, this.zC = MM.zC || null, this.uC = MM.uC || null, this.gC = MM.gC || null, this.pG = MM.pG || null
+       this.onLoad = UU.onLoad || null, this.uR = UU.uR || null, this.zW = UU.zW || null, this.UW = UU.UW || null, this.sZ = UU.sZ || null
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4816` → after: `L4998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L4998) · [Before (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4816)

```diff
-       this.solid = !MM, this.Hd = null, this.opaque = !MM, this.CH = !1, this.material = null, this.B3 = null, this.Ym = 1, this.X3 = .5, this.onLoad = null, this.zC = null, this.uC = null, this.gC = null, this.pG = null, this.Ch = null, this.hd = null, this.eh = null, this.Lk =  … [truncated]
+       this.solid = !UU, this.Ft = null, this.opaque = !UU, this.BI = !1, this.material = null, this.B5 = null, this.MN = 1, this.Z5 = .5, this.onLoad = null, this.uR = null, this.zW = null, this.UW = null, this.sZ = null, this.Pp = null, this.ot = null, this.Wp = null, this.qS =  … [truncated]
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4820` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5002) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4820)

```diff
-       this.color = null, this.K3 = !0, this.E1 = [], this.U1 = !1, this.Q0 = -1, this.Z2 = null, this.U3 = null, this.W8 = null, this.Jd = null
+       this.color = null, this.Z8 = !0, this.K4 = [], this.R7 = !1, this.y5 = -1, this.o5 = null, this.Y5 = null, this.W8 = null, this.Dt = null
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4822-L4825` → after: `L5004-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5004-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5004-L5007) · [Before (L4822-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4822-L4825)

```diff
-     iM(3177);
-     var Gj = iM(3182),
-       Cj = iM(38822),
-       ej = iM(40703);
+     zU(3150);
+     var BQ = zU(3163),
+       ZQ = zU(38589),
+       RQ = zU(40473);
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4828-L4830` → after: `L5010-L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5010-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5010-L5012) · [Before (L4828-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4828-L4830)

```diff
-       this.Cm = MM, this.mesh = rM;
-       var iM = rM.ph();
-       this.f6 = !0 === iM.I6 && !!MM.nh, this.f6 && (0, Cj.o)(rM), this.W9 = iM.o9?.(rM, this.f6 ? gj : tj) ?? null, this.buffer = null, this.N9 = null, this.I9 = null, this.O4 = MM.RJ.O4, this.FW = !1, this.W4 = null, this.o4 = null, this.f4 = 0, this.Ld = null, this.A4 = !1, th … [truncated]
+       this.WN = UU, this.mesh = XU;
+       var zU = XU.qp();
+       this.K3 = !0 === zU.I6 && !!UU.Fp, this.K3 && (0, ZQ.n)(XU), this.R6 = zU.w6?.(XU, this.K3 ? LQ : dQ) ?? null, this.buffer = null, this.f6 = null, this.Q0 = null, this.XUU = UU.Sa.XUU, this.mw = !1, this.zUU = null, this.cUU = null, this.yUU = 0, this.Qt = null, this.QUU =  … [truncated]
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4834-L4835` → after: `L5016-L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5016-L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5016-L5017) · [Before (L4834-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4834-L4835)

```diff
-           if (iM.B_ && Array.isArray(iM.B_))
-             for (var SM = 0; SM < iM.B_.length; SM++) iM.B_[SM] && OM.push(iM.B_[SM]);
+           if (zU.HUU && Array.isArray(zU.HUU))
+             for (var yU = 0; yU < zU.HUU.length; yU++) zU.HUU[yU] && cU.push(zU.HUU[yU]);
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4839` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5021) · [Before (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4839)

```diff
-             Zj.has(jM) || ((0, Cj.b)(jM, rM), Zj.add(jM))
+             uQ.has(QU) || ((0, ZQ.c)(QU, XU), uQ.add(QU))
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4841` → after: `L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5023) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4841)

```diff
-         }(this.mesh, MM.CL), this.Cm.CL.Vk(this.mesh), this.Cm.emit("addingTerrainMesh", this.mesh)
+         }(this.mesh, UU.WY), this.WN.WY.WH(this.mesh), this.WN.emit("addingTerrainMesh", this.mesh)
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4845-L4846` → after: `L5027-L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5027-L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5027-L5028) · [Before (L4845-L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4845-L4846)

```diff
-       return (null === rM || rM.data.length < 2 * MM.f4) && (rM = {
-         data: new Uint32Array(Math.max(16, 4 * MM.f4)),
+       return (null === XU || XU.data.length < 2 * UU.yUU) && (XU = {
+         data: new Uint32Array(Math.max(16, 4 * UU.yUU)),
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4848` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5030) · [Before (L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4848)

```diff
-       }), rM.count = (0, ej.K)(MM.W4, MM.o4, MM.f4, iM, ej.f, rM.data), rM
+       }), XU.count = (0, RQ.Q)(UU.zUU, UU.cUU, UU.yUU, zU, RQ.e, XU.data), XU
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4851-L4852` → after: `L5033-L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5033-L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5033-L5034) · [Before (L4851-L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4851-L4852)

```diff
-       this.dh || (this.O4.m_.delete(this), (0, ej.J)(this.mesh, null), this.FW && (0, ej.G)(this.mesh, void 0), this.FW = !1, this.mesh.y_ = 0, this.l_(0), this.Cm.emit("removingTerrainMesh", this.mesh), this.Cm.CL.E_(this.mesh, !1), this.mesh = null, this.S_ = null, this.j_ = nu … [truncated]
-     }, bj.prototype.e_ = function(MM, rM, iM, OM, SM, jM, aM) {
+       this.kp || (this.XUU.gUU.delete(this), (0, RQ.O)(this.mesh, null), this.mw && (0, RQ.J)(this.mesh, void 0), this.mw = !1, this.mesh.BUU = 0, this.ZUU(0), this.WN.emit("removingTerrainMesh", this.mesh), this.WN.WY.RUU(this.mesh, !1), this.mesh = null, this.YUU = null, this.N … [truncated]
+     }, PQ.prototype.WUU = function(UU, XU, zU, cU, yU, QU, AU) {
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4854-L4856` → after: `L5036-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5036-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5036-L5038) · [Before (L4854-L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4854-L4856)

```diff
-         if (MM.count < MM.vL) return;
-         var rM = Math.max(8, 2 * MM.vL);
-         MM.l_(rM)
+         if (UU.count < UU.xY) return;
+         var XU = Math.max(8, 2 * UU.xY);
+         UU.ZUU(XU)
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4859` → after: `L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5041) · [Before (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4859)

```diff
-       this.j_[this.count] = rM, this.S_.set(rM, PM);
+       this.NUU[this.count] = XU, this.YUU.set(XU, FU);
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4862-L4870` → after: `L5044-L5052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5044-L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5044-L5052) · [Before (L4862-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4862-L4870)

```diff
-       if (nM.set(jM.matrix, PM), nM[PM + 12] = QM[0] + (MM.x - aM[0] + iM), nM[PM + 13] = QM[1] + (MM.y - aM[1] + OM), nM[PM + 14] = QM[2] + (MM.z - aM[2] + SM), this.FW) {
-         var zM = (0, ej.s)(this.buffer, PM, this.bounds.min, this.bounds.max, MM.x - aM[0] + iM, MM.y - aM[1] + OM, MM.z - aM[2] + SM);
-         this.I9[this.count] = zM ? this.O4.yG(MM) : 0
-       }
-       this.count++, this.fh = !0
-     }, bj.prototype.Z6 = function(MM, rM) {
-       return this.f6 ? (rM | this.Cm.nL.Ah[MM] << 16) >>> 0 : rM
-     }, bj.prototype.R_ = function(MM, rM) {
-       var iM = this.S_.get(rM);
+       if (oU.set(QU.matrix, FU), oU[FU + 12] = DU[0] + (UU.x - AU[0] + zU), oU[FU + 13] = DU[1] + (UU.y - AU[1] + cU), oU[FU + 14] = DU[2] + (UU.z - AU[2] + yU), this.mw) {
+         var EU = (0, RQ.v)(this.buffer, FU, this.bounds.min, this.bounds.max, UU.x - AU[0] + zU, UU.y - AU[1] + cU, UU.z - AU[2] + yU);
+         this.Q0[this.count] = EU ? this.XUU.uZ(UU) : 0
+       }
+       this.count++, this.vp = !0
+     }, PQ.prototype.B3 = function(UU, XU) {
+       return this.K3 ? (XU | this.WN.EY.np[UU] << 16) >>> 0 : XU
+     }, PQ.prototype.LUU = function(UU, XU) {
+       var zU = this.YUU.get(XU);
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4872` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5054) · [Before (L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4872)

```diff
-       this.S_.delete(rM);
+       this.YUU.delete(XU);
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4879-L4881` → after: `L5061-L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5061-L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5061-L5063) · [Before (L4879-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4879-L4881)

```diff
-         }(this.buffer, jM, this.buffer, iM), this.N9[OM] = this.N9[SM], this.FW && (this.I9[OM] = this.I9[SM]);
-         var aM = this.j_[SM];
-         this.S_.set(aM, iM), this.j_[OM] = aM
+         }(this.buffer, QU, this.buffer, zU), this.f6[cU] = this.f6[yU], this.mw && (this.Q0[cU] = this.Q0[yU]);
+         var AU = this.NUU[yU];
+         this.YUU.set(AU, zU), this.NUU[cU] = AU
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4883` → after: `L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5065) · [Before (L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4883)

```diff
-       this.count--, this.fh = !0,
+       this.count--, this.vp = !0,
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4885-L4887` → after: `L5067-L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5067-L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5067-L5069) · [Before (L4885-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4885-L4887)

```diff
-           if (MM.count > .4 * MM.vL) return;
-           if (MM.vL < 100) return;
-           MM.l_(Math.round(MM.vL / 2)), MM.j_.length = Math.min(MM.j_.length, MM.vL)
+           if (UU.count > .4 * UU.xY) return;
+           if (UU.xY < 100) return;
+           UU.ZUU(Math.round(UU.xY / 2)), UU.NUU.length = Math.min(UU.NUU.length, UU.xY)
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4889` → after: `L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5071) · [Before (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4889)

```diff
-     }, bj.prototype.p_ = function() {
+     }, PQ.prototype.eUU = function() {
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4891-L4893` → after: `L5073-L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5073-L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5073-L5075) · [Before (L4891-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4891-L4893)

```diff
-       this.fh ? (this.FW && (8 * kj(MM = this) > Wj.length && (function(MM) {
-         for (var rM = MM.count, iM = MM.I9, OM = 0; OM < rM; OM++) uj[iM[OM]]++;
-         sj = MM.O4.keys, Wj.sort(Dj), sj = null;
+       this.vp ? (this.mw && (8 * rQ(UU = this) > qQ.length && (function(UU) {
+         for (var XU = UU.count, zU = UU.Q0, cU = 0; cU < XU; cU++) eQ[zU[cU]]++;
+         OQ = UU.XUU.keys, qQ.sort(SQ), OQ = null;
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4898` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5080) · [Before (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4898)

```diff
-         for (var PM = MM.buffer.slice(0, rM << 4), nM = MM.N9.slice(0, rM), QM = iM.slice(0, rM), zM = MM.j_.slice(0, rM), LM = 0; LM < rM; LM++) {
+         for (var FU = UU.buffer.slice(0, XU << 4), oU = UU.f6.slice(0, XU), DU = zU.slice(0, XU), EU = UU.NUU.slice(0, XU), YU = 0; YU < XU; YU++) {
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4902` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5084) · [Before (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4902)

```diff
-             MM.N9[mM] = nM[LM], iM[mM] = QM[LM];
+             UU.f6[NU] = oU[YU], zU[NU] = DU[YU];
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4904` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5086) · [Before (L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4904)

```diff
-             MM.j_[mM] = dM, MM.S_.set(dM, hM)
+             UU.NUU[NU] = tU, UU.YUU.set(tU, pU)
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4908-L4914` → after: `L5090-L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5090-L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5090-L5096) · [Before (L4908-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4908-L4914)

```diff
-       }(MM), kj(MM)), (0, ej.J)(this.mesh, null), this.A4 = !1, null !== this.K4 && (this.R7 = this.K4, this.K4 = null, (0, ej.G)(this.mesh, null)), this.M_ = !0), this.mesh.y_ = this.count, this.W9 ? (this.W9.k_(this.count), this.W9.o_()) : (this.mesh.f_("matrix"), this.mesh.f_( … [truncated]
-     }, bj.prototype.Y_ = function(MM, rM, iM) {
-       if (0 !== this.f4 && ((0, ej.p)() ? (this.Ld = wj(this, this.Ld, MM), this.A4 = this.Ld.count >= 0, (0, ej.J)(this.mesh, this.A4 ? this.Ld : null)) : this.A4 && (this.A4 = !1, (0, ej.J)(this.mesh, null)), iM || this.M_)) {
-         this.M_ = !1;
-         var OM = wj(this, this.R7, rM),
-           SM = this.K4;
-         OM.count < 0 ? (this.R7 = OM, null !== SM && (this.K4 = null, (0, ej.G)(this.mesh, null))) : null !== SM && function(MM, rM) {
+       }(UU), rQ(UU)), (0, RQ.O)(this.mesh, null), this.QUU = !1, null !== this.AUU && (this.FUU = this.AUU, this.AUU = null, (0, RQ.J)(this.mesh, null)), this.oUU = !0), this.mesh.BUU = this.count, this.R6 ? (this.R6.CUU(this.count), this.R6.wUU()) : (this.mesh.qUU("matrix"), thi … [truncated]
+     }, PQ.prototype.OUU = function(UU, XU, zU) {
+       if (0 !== this.yUU && ((0, RQ.r)() ? (this.Qt = WQ(this, this.Qt, UU), this.QUU = this.Qt.count >= 0, (0, RQ.O)(this.mesh, this.QUU ? this.Qt : null)) : this.QUU && (this.QUU = !1, (0, RQ.O)(this.mesh, null)), zU || this.oUU)) {
+         this.oUU = !1;
+         var cU = WQ(this, this.FUU, XU),
+           yU = this.AUU;
+         cU.count < 0 ? (this.FUU = cU, null !== yU && (this.AUU = null, (0, RQ.J)(this.mesh, null))) : null !== yU && function(UU, XU) {
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4919` → after: `L5101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5101) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4919)

```diff
-         }(SM, OM) ? this.R7 = OM : (this.R7 = SM, this.K4 = OM, (0, ej.G)(this.mesh, OM))
+         }(yU, cU) ? this.FUU = cU : (this.FUU = yU, this.AUU = cU, (0, RQ.J)(this.mesh, cU))
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4921` → after: `L5103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5103) · [Before (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4921)

```diff
-     }, bj.prototype.l_ = function() {
+     }, PQ.prototype.ZUU = function() {
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4923` → after: `L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5105) · [Before (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4923)

```diff
-       if (this.vL = MM, 0 === MM) this.buffer = null, this.N9 = null, this.I9 = null;
+       if (this.xY = UU, 0 === UU) this.buffer = null, this.f6 = null, this.Q0 = null;
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4925` → after: `L5107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5107) · [Before (L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4925)

```diff
-         var rM = new Float32Array(16 * this.vL);
+         var XU = new Float32Array(16 * this.xY);
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4929-L4932` → after: `L5111-L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5111-L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5111-L5114) · [Before (L4929-L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4929-L4932)

```diff
-         var SM = this.f6 ? new Uint32Array(this.vL) : new Float32Array(this.vL);
-         if (this.N9) {
-           var jM = Math.min(this.N9.length, SM.length);
-           for (OM = 0; OM < jM; OM++) SM[OM] = this.N9[OM]
+         var yU = this.K3 ? new Uint32Array(this.xY) : new Float32Array(this.xY);
+         if (this.f6) {
+           var QU = Math.min(this.f6.length, yU.length);
+           for (cU = 0; cU < QU; cU++) yU[cU] = this.f6[cU]
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4934-L4936` → after: `L5116-L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5116-L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5116-L5118) · [Before (L4934-L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4934-L4936)

```diff
-         if (this.N9 = SM, this.FW) {
-           var aM = new Uint16Array(this.vL);
-           this.I9 && aM.set(this.I9.subarray(0, Math.min(this.I9.length, aM.length))), this.I9 = aM
+         if (this.f6 = yU, this.mw) {
+           var AU = new Uint16Array(this.xY);
+           this.Q0 && AU.set(this.Q0.subarray(0, Math.min(this.Q0.length, AU.length))), this.Q0 = AU
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4940` → after: `L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5122) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4940)

```diff
-       this.W9 && 0 === MM ? this.W9.release() : this.W9 ? this.W9.attach(this.buffer, this.N9) : (this.mesh.v_("matrix", this.buffer, 16, PM), this.mesh.v_("aPackedLightLevels", this.N9, 1, PM)), this.p_()
+       this.R6 && 0 === UU ? this.R6.release() : this.R6 ? this.R6.attach(this.buffer, this.f6) : (this.mesh.fUU("matrix", this.buffer, 16, FU), this.mesh.fUU("aPackedLightLevels", this.f6, 1, FU)), this.eUU()
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4953-L4954` → after: `L5135-L5136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5135-L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5135-L5136) · [Before (L4953-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4953-L4954)

```diff
-       uj = new Uint32Array(ej.b),
-       Rj = new Uint32Array(ej.b),
+       eQ = new Uint32Array(RQ.c),
+       CQ = new Uint32Array(RQ.c),
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4965-L4972` → after: `L5147-L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5147-L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5147-L5154) · [Before (L4965-L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4965-L4972)

```diff
-         iM = MM.I9,
-         OM = MM.O4.keys;
-       if (null === MM.W4 || MM.W4.length < rM) {
-         var SM = Math.max(8, MM.vL);
-         MM.W4 = new Uint16Array(SM), MM.o4 = new Uint32Array(SM)
-       }
-       var jM = MM.W4,
-         aM = MM.o4,
+         zU = UU.Q0,
+         cU = UU.XUU.keys;
+       if (null === UU.zUU || UU.zUU.length < XU) {
+         var yU = Math.max(8, UU.xY);
+         UU.zUU = new Uint16Array(yU), UU.cUU = new Uint32Array(yU)
+       }
+       var QU = UU.zUU,
+         AU = UU.cUU,
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4979` → after: `L5161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5161) · [Before (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4979)

```diff
-       return MM.f4 = nM, QM
+       return UU.yUU = oU, DU
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4982` → after: `L5164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5164) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4982)

```diff
-     var oj = iM(38463),
+     var fQ = zU(38241),
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4986` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5168) · [Before (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4986)

```diff
-         U_: null
+         PUU: null
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4990` → after: `L5172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5172) · [Before (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4990)

```diff
-       this.ZE = (0, EM.p)(MM.CL, "objectMeshRoot");
+       this.WG = (0, GU.q)(UU.WY, "objectMeshRoot");
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4994-L4996` → after: `L5176-L5178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5176-L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5176-L5178) · [Before (L4994-L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4994-L4996)

```diff
-           position: new qM.sh,
-           rotation: new qM.sh,
-           UL: new qM.sh
+           position: new KU.Sp,
+           rotation: new KU.Sp,
+           RY: new KU.Sp
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L4999` → after: `L5181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5181) · [Before (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L4999)

```diff
-       this.SMM = [], this.O4 = new ej.i;
+       this.mUU = [], this.XUU = new RQ.g;
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5001-L5004` → after: `L5183-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5183-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5183-L5186) · [Before (L5001-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5001-L5004)

```diff
-         aM = MM.CL.YJ.ph();
-       "Rh" in aM && aM.Rh.add((() => {
-         for (var MM in jM) jM[MM].fh = !0;
-         this.sC()
+         AU = UU.WY.sa.qp();
+       "wp" in AU && AU.wp.add((() => {
+         for (var UU in QU) QU[UU].vp = !0;
+         this.oW()
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5014` → after: `L5196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5196) · [Before (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5014)

```diff
-         HM = MM => (0, uM.f)(MM) ? MM.parts.geometry : MM.geometry,
+         IU = UU => (0, CU.e)(UU) ? UU.parts.geometry : UU.geometry,
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5017` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5199) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5017)

```diff
-           var iM = MM.nL.B5[rM];
+           var zU = UU.EY.U3[XU];
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5027` → after: `L5209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5209) · [Before (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5027)

```diff
-             if (!(iM = PM.get(OM))) return QM.has(rM) || (QM.add(rM), MM.GJ(`Building the model of block ${rM} failed`, nM.get(OM))), null
+             if (!(zU = FU.get(cU))) return DU.has(XU) || (DU.add(XU), UU.Pa(`Building the model of block ${XU} failed`, oU.get(cU))), null
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5033` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5215) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5033)

```diff
-           return this.SMM.includes(iM) || this.SMM.push(iM), iM.metadata || (iM.metadata = {}), iM.metadata[tO.r] = !0, jM[rM] = new bj(MM, iM)
+           return this.mUU.includes(zU) || this.mUU.push(zU), zU.metadata || (zU.metadata = {}), zU.metadata[dc.s] = !0, QU[XU] = new PQ(UU, zU)
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5048-L5049` → after: `L5230-L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5230-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5230-L5231) · [Before (L5048-L5049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5048-L5049)

```diff
-             if (nM.aMM && nM.get(HM, hM, JM) === QM) try {
-               this.pC(nM, QM, HM, hM, JM)
+             if (oU.xUU && oU.get(IU, pU, aU) === DU) try {
+               this.cW(oU, DU, IU, pU, aU)
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5053` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5235) · [Before (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5053)

```diff
-           aM && MM.GJ("Placing the blocks of a built model failed", aM)
+           AU && UU.Pa("Placing the blocks of a built model failed", AU)
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5055-L5056` → after: `L5237-L5238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5237-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5237-L5238) · [Before (L5055-L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5055-L5056)

```diff
-       this.WJ = function(MM) {
-         MM.aMM = new Map;
+       this.ua = function(UU) {
+         UU.xUU = new Map;
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5058-L5059` → after: `L5240-L5241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5240-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5240-L5241) · [Before (L5058-L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5058-L5059)

```diff
-         MM.PMM = dM.length > 0 ? dM.pop() : rM * rM * rM * yM++
-       }, this.pC = function(iM, jM, aM, PM, nM) {
+         UU.JUU = tU.length > 0 ? tU.pop() : XU * XU * XU * gU++
+       }, this.cW = function(zU, QU, AU, FU, oU) {
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5062-L5063` → after: `L5244-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5244-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5244-L5245) · [Before (L5062-L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5062-L5063)

```diff
-           mM = iM.PMM + LM,
-           HM = iM.aMM.get(LM) || 0;
+           NU = zU.JUU + YU,
+           IU = zU.xUU.get(YU) || 0;
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5065` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5247) · [Before (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5065)

```diff
-           if (HM > 0) hM(HM).R_(iM, mM);
+           if (IU > 0) pU(IU).LUU(zU, NU);
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5068-L5071` → after: `L5250-L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5250-L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5250-L5253) · [Before (L5068-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5068-L5071)

```diff
-             if (!JM) return zM.get(MM.nL.B5[jM])?.push([iM, jM, aM, PM, nM]), void iM.aMM.delete(LM);
-             JM.e_(iM, mM, aM, PM, nM, (rM => {
-               var iM = MM.nL.tC[rM],
-                 jM = iM && iM.pG || null,
+             if (!aU) return EU.get(UU.EY.U3[QU])?.push([zU, QU, AU, FU, oU]), void zU.xUU.delete(YU);
+             aU.WUU(zU, NU, AU, FU, oU, (XU => {
+               var zU = UU.EY.RP[XU],
+                 QU = zU && zU.sZ || null,
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5073-L5074` → after: `L5255-L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5255-L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5255-L5256) · [Before (L5073-L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5073-L5074)

```diff
-               if (aM && aM.U_ === jM) return aM;
-               for (var PM = MM.nL.tC.length; SM.length < PM;) SM.push(null);
+               if (AU && AU.PUU === QU) return AU;
+               for (var FU = UU.EY.RP.length; yU.length < FU;) yU.push(null);
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5076` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5258) · [Before (L5076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5076)

```diff
-               OM.position.iMM(.5, .5, .5), OM.UL.P_(1), OM.rotation.P_(0), jM(OM, rM);
+               cU.position.sUU(.5, .5, .5), cU.RY.IUU(1), cU.rotation.IUU(0), QU(cU, XU);
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5079` → after: `L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5261) · [Before (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5079)

```diff
-                 matrix: Float32Array.from((0, oj.h)(OM)),
+                 matrix: Float32Array.from((0, fQ.e)(cU)),
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5081` → after: `L5263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5263) · [Before (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5081)

```diff
-                 U_: jM
+                 PUU: QU
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5084-L5085` → after: `L5266-L5267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5266-L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5266-L5267) · [Before (L5084-L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5084-L5085)

```diff
-             var dM = JM.S_.get(mM);
-             iM.Lh ? JM.N9[dM >> 4] = JM.Z6(jM, (0, Gj.y)(iM.Lh, iM.hh, LM)) : JM.N9[dM >> 4] = JM.Z6(jM, Gj.h)
+             var tU = aU.YUU.get(NU);
+             zU.Yp ? aU.f6[tU >> 4] = aU.B3(QU, (0, BQ.p)(zU.Yp, zU.ap, YU)) : aU.f6[tU >> 4] = aU.B3(QU, BQ.e)
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5087` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5269) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5087)

```diff
-           HM > 0 && !jM && iM.aMM.delete(LM), jM > 0 && iM.aMM.set(LM, jM)
+           IU > 0 && !QU && zU.xUU.delete(YU), QU > 0 && zU.xUU.set(YU, QU)
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5089` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5271) · [Before (L5089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5089)

```diff
-       }, this.sC = function() {
+       }, this.oW = function() {
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5092-L5102` → after: `L5274-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5274-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5274-L5284) · [Before (L5092-L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5092-L5102)

```diff
-           rM.p_(), 0 === rM.count && rM.dispose(), rM.dh && delete jM[MM]
-         }
-         this.O4.uploaded(), Nj("rebuilt"), Nj("end")
-       }, this.Xh = function(MM) {
-         var rM = MM.PMM;
-         for (var [OM, SM] of MM.aMM) hM(SM).R_(MM, rM + OM);
-         dM.push(rM), MM.aMM = null, this.O4.release(MM), iM = !0
-       }, this.bL = function() {
-         iM && (this.sC(), iM = !1)
-       }, this.nMM = function(MM) {
-         for (var OM in rM[0] += MM[0], rM[1] += MM[1], rM[2] += MM[2], jM) jM[OM].i_ = !1;
+           XU.eUU(), 0 === XU.count && XU.dispose(), XU.kp && delete QU[UU]
+         }
+         this.XUU.uploaded(), MQ("rebuilt"), MQ("end")
+       }, this.Jp = function(UU) {
+         var XU = UU.JUU;
+         for (var [cU, yU] of UU.xUU) pU(yU).LUU(UU, XU + cU);
+         tU.push(XU), UU.xUU = null, this.XUU.release(UU), zU = !0
+       }, this.LY = function() {
+         zU && (this.oW(), zU = !1)
+       }, this.jUU = function(UU) {
+         for (var cU in XU[0] += UU[0], XU[1] += UU[1], XU[2] += UU[2], QU) QU[cU].EUU = !1;
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5105` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5287) · [Before (L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5105)

```diff
-           if (!aM.i_) {
+           if (!AU.EUU) {
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5110` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5292) · [Before (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5110)

```diff
-             aM.i_ = !0, aM.fh = !0
+             AU.EUU = !0, AU.vp = !0
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5114-L5119` → after: `L5296-L5301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5296-L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5296-L5301) · [Before (L5114-L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5114-L5119)

```diff
-       }, this.pJ = function(MM) {
-         if (MM.aMM) {
-           var rM = MM.Lh,
-             OM = MM.hh,
-             SM = MM.PMM;
-           MM.aMM.forEach(((MM, aM) => {
+       }, this.ra = function(UU) {
+         if (UU.xUU) {
+           var XU = UU.Yp,
+             cU = UU.ap,
+             yU = UU.JUU;
+           UU.xUU.forEach(((UU, AU) => {
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5121-L5123` → after: `L5303-L5305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5303-L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5303-L5305) · [Before (L5121-L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5121-L5123)

```diff
-               nM = PM.S_.get(SM + aM) >> 4,
-               QM = PM.Z6(MM, rM ? (0, Gj.y)(rM, OM, aM) : Gj.h);
-             PM.N9[nM] !== QM && (PM.N9[nM] = QM, PM.r_ = !0, iM = !0)
+               oU = FU.YUU.get(yU + AU) >> 4,
+               DU = FU.B3(UU, XU ? (0, BQ.p)(XU, cU, AU) : BQ.e);
+             FU.f6[oU] !== DU && (FU.f6[oU] = DU, FU.DUU = !0, zU = !0)
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5129-L5135` → after: `L5311-L5317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5311-L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5311-L5317) · [Before (L5129-L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5129-L5135)

```diff
-       Aj = iM(38375),
-       xj = iM(38300),
-       vj = iM(38457);
-     var Fj = iM(38791),
-       Bj = iM(7131),
-       Xj = iM(39799),
-       Ij = iM(39807);
+       vQ = zU(38145),
+       VQ = zU(38065),
+       sQ = zU(38236);
+     var nQ = zU(38560),
+       mQ = zU(7233),
+       lQ = zU(39571),
+       xQ = zU(39580);
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5142` → after: `L5324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5324) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5142)

```diff
-         this.Cm = MM, this.options = rM, this.mode = "off", this.defines = new Map(Bj.e.map((MM => [MM, 0])))
+         this.WN = UU, this.options = XU, this.mode = "off", this.defines = new Map(mQ.e.map((UU => [UU, 0])))
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5156` → after: `L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5338) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5156)

```diff
-           return !0 === (null === (rM = (0, Xj.g)(this.defineFor(MM))) || void 0 === rM ? void 0 : rM.sceneDepth)
+           return !0 === (null === (XU = (0, lQ.e)(this.defineFor(UU))) || void 0 === XU ? void 0 : XU.sceneDepth)
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5163` → after: `L5345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5345) · [Before (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5163)

```diff
-           const OM = (0, Xj.g)(this.defineFor(iM));
+           const cU = (0, lQ.e)(this.defineFor(zU));
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5173` → after: `L5355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5355) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5173)

```diff
-         return !(!this.options.keepCircleShadows && null !== (MM = this.Cm.CL.MJ) && void 0 !== MM && MM.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
+         return !(!this.options.keepCircleShadows && null !== (UU = this.WN.WY.Ua) && void 0 !== UU && UU.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5176` → after: `L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5358) · [Before (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5176)

```diff
-         return this.Cm.CL.DJ
+         return this.WN.WY.ia
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5182-L5183` → after: `L5364-L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5364-L5365) · [Before (L5182-L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5182-L5183)

```diff
-           const OM = (0, Xj.j)(this.options.variants, MM, iM),
-             SM = OM ? (0, Xj.m)(OM) : 0;
+           const cU = (0, lQ.h)(this.options.variants, UU, zU),
+             yU = cU ? (0, lQ.i)(cU) : 0;
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5190` → after: `L5372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5372) · [Before (L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5190)

```diff
-         return null !== (rM = this.defines.get(MM)) && void 0 !== rM ? rM : 0
+         return null !== (XU = this.defines.get(UU)) && void 0 !== XU ? XU : 0
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5196` → after: `L5378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5378) · [Before (L5196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5196)

```diff
-         return this.Cm.Am
+         return this.WN.VN
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5198` → after: `L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5380) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5198)

```diff
-       mMM() {
+       hUU() {
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5200` → after: `L5382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5382) · [Before (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5200)

```diff
-         return null !== (MM = this.Cm.CL.mMM) && void 0 !== MM ? MM : Vj
+         return null !== (UU = this.WN.WY.hUU) && void 0 !== UU ? UU : bQ
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5203` → after: `L5385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5385) · [Before (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5203)

```diff
-         const MM = (0, Ij.r)(this.mMM());
+         const UU = (0, xQ.s)(this.hUU());
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5210` → after: `L5392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5392) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5210)

```diff
-           status: "Ti"
+           status: "QU"
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5213-L5214` → after: `L5395-L5396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5395-L5396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5395-L5396) · [Before (L5213-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5213-L5214)

```diff
-           CL: iM
-         } = this.Cm, OM = null === (MM = iM.MJ) || void 0 === MM ? void 0 : MM.terrain;
+           WY: zU
+         } = this.WN, cU = null === (UU = zU.Ua) || void 0 === UU ? void 0 : UU.terrain;
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5216` → after: `L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5398) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5216)

```diff
-           materials: this.Cm.HMM.allMaterials.filter((MM => !(0, Fj.k)(MM))),
+           materials: this.WN.UXU.allMaterials.filter((UU => !(0, nQ.h)(UU))),
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5218-L5219` → after: `L5400-L5401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5400-L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5400-L5401) · [Before (L5218-L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5218-L5219)

```diff
-           lighting: iM.DJ,
-           dirLightCount: (0, xj.t)(iM.model.view),
+           lighting: zU.ia,
+           dirLightCount: (0, VQ.C)(zU.model.view),
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5233-L5246` → after: `L5415-L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5415-L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5415-L5428) · [Before (L5233-L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5233-L5246)

```diff
-       hMM: !1,
-       jy: 1.8,
-       Sy: .6,
-       JMM: [0, 10, 0],
-       Py: !1,
-       dMM: !0,
-       zk: 30,
-       pY: 0,
-       ny: 10,
-       AY: !0,
-       yMM: !0,
-       vY: !1,
-       lMM: !1,
-       EMM: 25
+       XXU: !1,
+       cg: 1.8,
+       zg: .6,
+       zXU: [0, 10, 0],
+       yg: !1,
+       cXU: !0,
+       bq: 30,
+       zV: 0,
+       Qg: 10,
+       YV: !0,
+       yXU: !0,
+       tV: !1,
+       QXU: !1,
+       AXU: 25
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5253` → after: `L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5435) · [Before (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5253)

```diff
-           console.log(`noa-engine v${this.version}${rM}`)
+           console.log(`noa-engine v${this.version}${XU}`)
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5255` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5437) · [Before (L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5255)

```diff
-         this.eL = !1, this.UMM = MM.EMM, this.Am = [0, 0, 0], this.GMM = 0, this.zW = 0, this.CMM = "default", this.eMM = 1, this.container = new gr(this, MM), this.uL = new gO.b(this, MM);
+         this.dY = !1, this.FXU = UU.AXU, this.VN = [0, 0, 0], this.oXU = 0, this.lC = 0, this.DXU = "default", this.EXU = 1, this.container = new CX(this, UU), this.qY = new Lc.e(this, UU);
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5257` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5439) · [Before (L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5257)

```diff
-           this.CL = new tO.e(this, MM, this.container.canvas)
+           this.WY = new dc.d(this, UU, this.container.canvas)
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5259-L5266` → after: `L5441-L5448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5441-L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5441-L5448) · [Before (L5259-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5259-L5266)

```diff
-           throw this.OW(!0), this.container.vU.gL = () => {}, aM
-         }
-         this.zk = this.container.vU.zk, this.pY = this.container.vU.pY, this.nh = MM.nh ? new cj(this, MM.nh) : null, this.HMM = new Fj.d(this), this.inputs = new xO(this, MM, this.container.element), this.nL = new dj(this, MM, this.HMM), this.uL.lG = MM.bMM ? lO.create(MM.bMM.wa … [truncated]
-           this.GJ(MM.message, MM)
-         })) : null, MM.bMM && (this.uL.Vh = hO.b.wasm(this.uL.hL, MM.bMM.wasm, (MM => {
-           this.GJ(MM.message, MM)
-         })), this.uL.tMM = wO.create(MM.bMM.wasm, this.nL, (MM => {
-           this.GJ(MM.message, MM)
+           throw this.nC(!0), this.container.oB.wY = () => {}, AU
+         }
+         this.bq = this.container.oB.bq, this.zV = this.container.oB.zV, this.Fp = UU.Fp ? new TQ(this, UU.Fp) : null, this.UXU = new nQ.e(this), this.inputs = new Vc(this, UU, this.container.element), this.EY = new aQ(this, UU, this.UXU), this.qY.iZ = UU.YXU ? gc.create(UU.YXU.wa … [truncated]
+           this.Pa(UU.message, UU)
+         })) : null, UU.YXU && (this.qY.hp = Ic.c.wasm(this.qY.tY, UU.YXU.wasm, (UU => {
+           this.Pa(UU.message, UU)
+         })), this.qY.IXU = Wc.create(UU.YXU.wasm, this.EY, (UU => {
+           this.Pa(UU.message, UU)
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5269` → after: `L5451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5451) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5269)

```diff
-         MM.hMM && (console.log = () => {}), MM.hMM && (console.log = iM), this.physics = new fS(this, MM), this.physics.wasm = MM.Uh ? new HO(this, this.physics, MM.Uh) : null, this.entities = new br.d(this, MM), this.hU = this.entities;
+         UU.XXU && (console.log = () => {}), UU.XXU && (console.log = zU), this.physics = new iy(this, UU), this.physics.wasm = UU.Zp ? new Nc(this, this.physics, UU.Zp) : null, this.entities = new dX.d(this, UU), this.xG = this.entities;
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5271-L5277` → after: `L5453-L5459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5453-L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5453-L5459) · [Before (L5271-L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5271-L5277)

```diff
-         this.eD = OM.add(MM.JMM, MM.Sy, MM.jy, null, null, !0, MM.dMM), OM.eZ(this.eD, OM.names.collideTerrain), OM.eZ(this.eD, OM.names.collideEntities);
-         var SM = OM.gMM(this.eD).body;
-         if (SM.gravityMultiplier = 2, SM.vN = MM.Py, this.camera = new IS(this, MM), this.ny = MM.ny, this.RMM = this.nL.qB, this.pMM = null, this.WMM = !1, this.kMM = null, this.ZMM = null, this.fMM = null, this.AMM = !1, MM.lMM || (this.xMM = MM => {
-             if (this.AMM) return void this.CL.vMM(!1);
-             const rM = this.fMM;
-             rM ? this.CL.vMM(!0, rM.position, rM.normal) : !MM || !this.aU.canChange && !this.uL.FMM(MM.position[0], MM.position[1], MM.position[2]) && !this.uL.FMM(MM.zd[0], MM.zd[1], MM.zd[2]) || this.entities.BMM(this.eD, "QG") && !1 === this.entities.getState(this.eD, "QG").Q … [truncated]
-           }, this.on("miningTargetBlockChanged", this.xMM)), this.bloxd = void 0, this.GJ = (MM, rM) => {
+         this.pM = cU.add(UU.zXU, UU.zg, UU.cg, null, null, !0, UU.cXU), cU.sH(this.pM, cU.names.collideTerrain), cU.sH(this.pM, cU.names.collideEntities);
+         var yU = cU.pXU(this.pM).body;
+         if (yU.gravityMultiplier = 2, yU.bV = UU.yg, this.camera = new xy(this, UU), this.Qg = UU.Qg, this.tXU = this.EY.mJ, this.gXU = null, this.kXU = !1, this.ZXU = null, this.RXU = null, this.WXU = null, this.LXU = !1, UU.QXU || (this.eXU = UU => {
+             if (this.LXU) return void this.WY.CXU(!1);
+             const XU = this.WXU;
+             XU ? this.WY.CXU(!0, XU.position, XU.normal) : !UU || !this.mG.canChange && !this.qY.wXU(UU.position[0], UU.position[1], UU.position[2]) && !this.qY.wXU(UU.yt[0], UU.yt[1], UU.yt[2]) || this.entities.qXU(this.pM, "jB") && !1 === this.entities.getState(this.pM, "jB").j … [truncated]
+           }, this.on("miningTargetBlockChanged", this.eXU)), this.bloxd = void 0, this.Pa = (UU, XU) => {
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5279-L5285` → after: `L5461-L5467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5461-L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5461-L5467) · [Before (L5279-L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5279-L5285)

```diff
-           }, this.CJ = () => {}, this.aU = {}, this.rY = {
-             [this.eD]: {}
-           }, this.IMM = void 0, this.KMM = null, this.qMM = null, this.sounds = {
-             TMM: null,
-             VMM: null
-           }, this.room = null, this.fW = null, this.cMM = null, this.sm = MM.sm, this.kU = new Aj.e(this, this.HMM, this.CL.MJ?.terrain ? null : (0, vj.c)(), MM), this.RJ = new Yj(this), this.MrM = {
-             VV: 0,
+           }, this.Wa = () => {}, this.mG = {}, this.YM = {
+             [this.pM]: {}
+           }, this.SXU = void 0, this.rXU = null, this.uXU = null, this.sounds = {
+             fXU: null,
+             iXU: null
+           }, this.room = null, this.Gw = null, this.HXU = null, this.SN = UU.SN, this.yB = new vQ.d(this, this.UXU, this.WY.Ua?.terrain ? null : (0, sQ.c)(), UU), this.Sa = new HQ(this), this.MXU = {
+             O4: 0,
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5288-L5291` → after: `L5470-L5473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5470-L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5470-L5473) · [Before (L5288-L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5288-L5291)

```diff
-             zd: lM().create(),
-             kN: lM().create()
-           }, this.rrM = new Float64Array(8), this.irM = {
-             VV: 0,
+             yt: kU().create(),
+             lV: kU().create()
+           }, this.VXU = new Float64Array(8), this.sXU = {
+             O4: 0,
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5294-L5297` → after: `L5476-L5479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5476-L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5476-L5479) · [Before (L5294-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5294-L5297)

```diff
-             zd: lM().create(),
-             kN: lM().create()
-           }, this.OrM = new Float64Array(8), this.SrM = lM().create(), this.jrM = {
-             arM: lM().create(),
+             yt: kU().create(),
+             lV: kU().create()
+           }, this.mXU = new Float64Array(8), this.lXU = kU().create(), this.xXU = {
+             JXU: kU().create(),
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5300` → after: `L5482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5482) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5300)

```diff
-             PrM: [0, 0, 0]
+             jXU: [0, 0, 0]
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5302` → after: `L5484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5484) · [Before (L5302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5302)

```diff
-           this.vec3 = lM(), this.jd = sr(), OM.nrM(1).QrM = 999;
+           this.vec3 = kU(), this.Xt = rX(), cU.KXU(1).bXU = 999;
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5304` → after: `L5486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5486) · [Before (L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5304)

```diff
-           jM.Cm = this, jM.vec3 = lM(), jM.jd = sr(), jM.YJ = this.CL.YJ
+           QU.WN = this, QU.vec3 = kU(), QU.Xt = rX(), QU.sa = this.WY.sa
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5309` → after: `L5491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5491) · [Before (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5309)

```diff
-           if (MM *= this.eMM || 1, this.eL) return void(this.uL.zrM && this.uL.bL());
+           if (UU *= this.EXU || 1, this.dY) return void(this.qY.TXU && this.qY.LY());
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5311-L5319` → after: `L5493-L5501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5493-L5501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5493-L5501) · [Before (L5311-L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5311-L5319)

```diff
-               var rM = MM.hU.jK(MM.eD).arM,
-                 iM = MM.UMM;
-               if (lM().TJ(rM) < iM * iM) return;
-               for (var OM = [], SM = 0; SM < 3; SM++) OM[SM] = Math.floor(rM[SM]), MM.Am[SM] += OM[SM];
-               MM.CL.nMM(OM), MM.entities.nMM(OM), MM.RJ.nMM(OM)
-             }(this), this.uL.bL(), Pa("world"), this.sm && this.sm(this.hU.Av(this.eD)) || !this.uL.LrM) return void this.CL.bL(MM);
-           this.hN("beforePhysicsTick", MM), this.physics.bL(MM), Pa("physics"), this.RJ.bL(), this.CL.bL(MM), Pa("CL"), this.DMM(), Pa("targets"), this.entities.bL(MM), Pa("entities"), this.hN("bL", MM), Pa("tick event"), Pa("end");
-           var rM = this.inputs.oB;
-           rM.mrM = rM.HrM = rM.hrM = 0
+               var XU = UU.xG.hK(UU.pM).JXU,
+                 zU = UU.FXU;
+               if (kU().ep(XU) < zU * zU) return;
+               for (var cU = [], yU = 0; yU < 3; yU++) cU[yU] = Math.floor(XU[yU]), UU.VN[yU] += cU[yU];
+               UU.WY.jUU(cU), UU.entities.jUU(cU), UU.Sa.jUU(cU)
+             }(this), this.qY.LY(), AA("world"), this.SN && this.SN(this.xG.Bx(this.pM)) || !this.qY.hXU) return void this.WY.LY(UU);
+           this.VV("beforePhysicsTick", UU), this.physics.LY(UU), AA("physics"), this.Sa.LY(), this.WY.LY(UU), AA("WY"), this.BXU(), AA("targets"), this.entities.LY(UU), AA("entities"), this.VV("LY", UU), AA("tick event"), AA("end");
+           var XU = this.inputs.vJ;
+           XU.UzU = XU.XzU = XU.zzU = 0
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5322` → after: `L5504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5504) · [Before (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5322)

```diff
-             this.GJ("Error in noa tickloop", iM)
+             this.Pa("Error in noa tickloop", zU)
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5330-L5331` → after: `L5512-L5513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5512-L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5512-L5513) · [Before (L5330-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5330-L5331)

```diff
-           if ((0, xj.k)(), this.zW = performance.now(), this.hN("renderTickBegin", MM), MM *= this.eMM || 1, this.GMM = rM, this.eL) return void(this.uL.zrM && this.uL.render());
-           na("start"), this.hN("beforeInputs", MM), this.camera.mq(), this.hN("afterInputs", MM), na("init"), this.uL.render(), na("meshing"), this.camera.HV(MM), this.entities.render(MM), this.camera.hV(), Pa("entities"), this.hN("beforeRender", MM), na("before render"), this.CL … [truncated]
+           if ((0, VQ.n)(), this.lC = performance.now(), this.VV("renderTickBegin", UU), UU *= this.EXU || 1, this.oXU = XU, this.dY) return void(this.qY.TXU && this.qY.render());
+           FA("start"), this.VV("beforeInputs", UU), this.camera.U_(), this.VV("afterInputs", UU), FA("init"), this.qY.render(), FA("meshing"), this.camera.i_(UU), this.entities.render(UU), this.camera.M_(), AA("entities"), this.VV("beforeRender", UU), FA("before render"), this.WY … [truncated]
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5333` → after: `L5515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5515) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5333)

```diff
-           this.GJ("Error in noa renderloop", iM)
+           this.Pa("Error in noa renderloop", zU)
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5338` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5520) · [Before (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5338)

```diff
-         this.eL = !!MM, MM || (this.camera.oB.dx = this.camera.oB.dy = 0)
+         this.dY = !!UU, UU || (this.camera.vJ.dx = this.camera.vJ.dy = 0)
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5343` → after: `L5525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5525) · [Before (L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5343)

```diff
-         return MM.length ? this.uL.YB(MM[0], MM[1], MM[2]) : this.uL.YB(MM, rM, iM)
+         return UU.length ? this.qY.VJ(UU[0], UU[1], UU[2]) : this.qY.VJ(UU, XU, zU)
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5348` → after: `L5530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5530) · [Before (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5348)

```diff
-         return iM = rM.length ? this.uL.JF(MM, rM[0], rM[1], rM[2]) : this.uL.JF(MM, rM, OM, SM), this.sMM(), iM
+         return zU = XU.length ? this.qY.QJ(UU, XU[0], XU[1], XU[2]) : this.qY.QJ(UU, XU, cU, yU), this.GXU(), zU
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5350` → after: `L5532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5532) · [Before (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5350)

```diff
-       yrM(MM, rM) {
+       QzU(UU, XU) {
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5354-L5355` → after: `L5536-L5537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5536-L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5536-L5537) · [Before (L5354-L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5354-L5355)

```diff
-           if (this.entities.lrM(rM[0], rM[1], rM[2])) return;
-           return this.uL.JF(MM, rM[0], rM[1], rM[2]), MM
+           if (this.entities.AzU(XU[0], XU[1], XU[2])) return;
+           return this.qY.QJ(UU, XU[0], XU[1], XU[2]), UU
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5357` → after: `L5539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5539) · [Before (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5357)

```diff
-         if (!this.entities.lrM(rM, iM, OM)) return this.uL.JF(MM, rM, iM, OM), MM
+         if (!this.entities.AzU(XU, zU, cU)) return this.qY.QJ(UU, XU, zU, cU), UU
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5359-L5360` → after: `L5541-L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5541-L5542) · [Before (L5359-L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5359-L5360)

```diff
-       ErM(MM, rM, iM) {
-         var OM = this.Am;
+       FzU(UU, XU, zU) {
+         var cU = this.VN;
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5372` → after: `L5554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5554) · [Before (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5372)

```diff
-         var OM = this.Am;
+         var cU = this.VN;
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5388-L5389` → after: `L5570-L5571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5570-L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5570-L5571) · [Before (L5388-L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5388-L5389)

```diff
-         var SM = this.SrM;
-         return MM && (this.ErM(MM, null, SM), MM = SM), this.Dv(MM, rM, iM, OM)
+         var yU = this.lXU;
+         return UU && (this.FzU(UU, null, yU), UU = yU), this.Ix(UU, XU, zU, cU)
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5396` → after: `L5578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5578) · [Before (L5396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5396)

```diff
-           SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.jrM;
+           yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.xXU;
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5398-L5399` → after: `L5580-L5581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5580-L5581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5580-L5581) · [Before (L5398-L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5398-L5399)

```diff
-         MM || (MM = this.camera.lq()), rM = rM || this.camera.eT(), iM = iM || -1, iM < 0 && (iM = this.ny);
-         var jM, aM = SM.arM,
+         UU || (UU = this.camera.Q_()), XU = XU || this.camera.R_(), zU = zU || -1, zU < 0 && (zU = this.Qg);
+         var QU, AU = yU.JXU,
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5402` → after: `L5584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5584) · [Before (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5402)

```diff
-           QM = this.Am;
+           DU = this.VN;
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5404-L5405` → after: `L5586-L5587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5586-L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5586-L5587) · [Before (L5404-L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5404-L5405)

```diff
-           var zM = null === Oa.engine ? Oa : ia();
-           zM.engine = this, zM.test = OM, zM.origin = MM, zM.direction = rM, zM.maxDistance = iM, zM.offset = QM, zM.kN = aM, zM.ZN = PM, zM.oN = SM.PrM;
+           var EU = null === zA.engine ? zA : XA();
+           EU.engine = this, EU.test = cU, EU.origin = UU, EU.direction = XU, EU.maxDistance = zU, EU.offset = DU, EU.lV = AU, EU.JV = FU, EU.KV = yU.jXU;
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5407` → after: `L5589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5589) · [Before (L5407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5407)

```diff
-             jM = nM.LH(zM)
+             QU = oU.DI(EU)
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5411-L5412` → after: `L5593-L5594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5593-L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5593-L5594) · [Before (L5411-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5411-L5412)

```diff
-         } else jM = Sa(this, OM, MM, rM, iM, aM, PM, SM.PrM);
-         return jM ? (lM().add(SM.PrM, SM.PrM, QM), lM().tm(aM, aM, PM, .01), this.jT(aM, SM.position), SM) : null
+         } else QU = cA(this, cU, UU, XU, zU, AU, FU, yU.jXU);
+         return QU ? (kU().add(yU.jXU, yU.jXU, DU), kU().gp(AU, AU, FU, .01), this.N_(AU, yU.position), yU) : null
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5420` → after: `L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5602) · [Before (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5420)

```diff
-             VV: 0,
+             O4: 0,
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5423-L5424` → after: `L5605-L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5605-L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5605-L5606) · [Before (L5423-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5423-L5424)

```diff
-             zd: [],
-             kN: []
+             yt: [],
+             lV: []
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5426` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5608) · [Before (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5426)

```diff
-           jM = this.LH(MM, rM, iM, OM);
+           QU = this.DI(UU, XU, zU, cU);
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5429` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5611) · [Before (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5429)

```diff
-       DMM() {
+       BXU() {
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5431-L5435` → after: `L5613-L5617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5613-L5617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5613-L5617) · [Before (L5431-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5431-L5435)

```diff
-         this.WMM = !1;
-         var rM = this.RMM || this.nL.qB;
-         let iM = this.KMM,
-           OM = this.qMM;
-         var SM = this.Dv(iM, OM, null, rM);
+         this.kXU = !1;
+         var XU = this.tXU || this.EY.mJ;
+         let zU = this.rXU,
+           cU = this.uXU;
+         var yU = this.Ix(zU, cU, null, XU);
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5437-L5450` → after: `L5619-L5632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5619-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5619-L5632) · [Before (L5437-L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5437-L5450)

```diff
-           var jM = this.MrM;
-           aa(this, SM, jM), this.pMM = jM
-         } else this.pMM = null;
-         const aM = this.UrM(),
-           PM = this.pMM;
-         if (PM && !aM(PM.VV, PM.position[0], PM.position[1], PM.position[2]) && (SM = this.Dv(iM, OM, null, aM)), SM) {
-           const MM = this.irM;
-           aa(this, SM, MM), this.kMM = MM
-         } else this.kMM = null;
-         (ja(this.rrM, this.pMM) || MM) && this.emit("targetBlockChanged", this.pMM), (ja(this.OrM, this.kMM) || MM) && this.emit("miningTargetBlockChanged", this.kMM)
-       }
-       sMM() {
-         if (this.MrM.VV = this.uL.YB(this.MrM.position[0], this.MrM.position[1], this.MrM.position[2]), 0 === this.MrM.VV && (this.pMM = null, this.WMM = !0), this.kMM) {
-           const MM = this.kMM,
+           var QU = this.MXU;
+           QA(this, yU, QU), this.gXU = QU
+         } else this.gXU = null;
+         const AU = this.ozU(),
+           FU = this.gXU;
+         if (FU && !AU(FU.O4, FU.position[0], FU.position[1], FU.position[2]) && (yU = this.Ix(zU, cU, null, AU)), yU) {
+           const UU = this.sXU;
+           QA(this, yU, UU), this.ZXU = UU
+         } else this.ZXU = null;
+         (yA(this.VXU, this.gXU) || UU) && this.emit("targetBlockChanged", this.gXU), (yA(this.mXU, this.ZXU) || UU) && this.emit("miningTargetBlockChanged", this.ZXU)
+       }
+       GXU() {
+         if (this.MXU.O4 = this.qY.VJ(this.MXU.position[0], this.MXU.position[1], this.MXU.position[2]), 0 === this.MXU.O4 && (this.gXU = null, this.kXU = !0), this.ZXU) {
+           const UU = this.ZXU,
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5452-L5453` → after: `L5634-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5634-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5634-L5635) · [Before (L5452-L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5452-L5453)

```diff
-           MM.VV = this.uL.YB(rM[0], rM[1], rM[2]);
-           this.UrM()(MM.VV, rM[0], rM[1], rM[2]) || (this.kMM = null)
+           UU.O4 = this.qY.VJ(XU[0], XU[1], XU[2]);
+           this.ozU()(UU.O4, XU[0], XU[1], XU[2]) || (this.ZXU = null)
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5456-L5457` → after: `L5638-L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5638-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5638-L5639) · [Before (L5456-L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5456-L5457)

```diff
-       oMM(MM) {
-         this.fMM = MM, this.xMM(this.kMM)
+       PXU(UU) {
+         this.WXU = UU, this.eXU(this.ZXU)
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5459-L5460` → after: `L5641-L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5641-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5641-L5642) · [Before (L5459-L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5459-L5460)

```diff
-       YMM(MM) {
-         this.AMM = MM, this.xMM?.(this.kMM)
+       dXU(UU) {
+         this.LXU = UU, this.eXU?.(this.ZXU)
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5462-L5463` → after: `L5644-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5644-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5644-L5645) · [Before (L5462-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5462-L5463)

```diff
-       UrM() {
-         return this.ZMM || this.RMM || this.nL.qB
+       ozU() {
+         return this.RXU || this.tXU || this.EY.mJ
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5475-L5478` → after: `L5657-L5660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5657-L5660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5657-L5660) · [Before (L5475-L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5475-L5478)

```diff
-         kN: null,
-         ZN: null,
-         oN: null,
-         Bx: () => Sa(MM.engine, MM.test, MM.origin, MM.direction, MM.maxDistance, MM.kN, MM.ZN, MM.oN)
+         lV: null,
+         JV: null,
+         KV: null,
+         Jm: () => cA(UU.engine, UU.test, UU.origin, UU.direction, UU.maxDistance, UU.lV, UU.JV, UU.KV)
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5485-L5486` → after: `L5667-L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5667-L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5667-L5668) · [Before (L5485-L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5485-L5486)

```diff
-       var nM = MM.uL,
-         QM = MM.Am,
+       var oU = UU.qY,
+         DU = UU.VN,
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5488-L5489` → after: `L5670-L5671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5670-L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5670-L5671) · [Before (L5488-L5489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5488-L5489)

```diff
-           var jM = nM.YB(iM + QM[0], OM + QM[1], SM + QM[2]);
-           return rM(jM, iM + QM[0], OM + QM[1], SM + QM[2]) && (MM.nL.Xx(jM) ?? !0)
+           var QU = oU.VJ(zU + DU[0], cU + DU[1], yU + DU[2]);
+           return XU(QU, zU + DU[0], cU + DU[1], yU + DU[2]) && (UU.EY.Km(QU) ?? !0)
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5491-L5492` → after: `L5673-L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5673-L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5673-L5674) · [Before (L5491-L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5491-L5492)

```diff
-           var SM = nM.YB(rM + QM[0], iM + QM[1], OM + QM[2]);
-           return MM.nL.UH(SM)
+           var yU = oU.VJ(XU + DU[0], zU + DU[1], cU + DU[2]);
+           return UU.EY.kI(yU)
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5545-L5546` → after: `L5727-L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5727-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5727-L5728) · [Before (L5545-L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5545-L5546)

```diff
-       } = rM, SM = 1 !== MM[0] || MM[1] !== iM[0] || MM[2] !== iM[1] || MM[3] !== iM[2] || MM[4] !== rM.VV || MM[5] !== OM[0] || MM[6] !== OM[1] || MM[7] !== OM[2];
-       return MM[0] = 1, MM[1] = iM[0], MM[2] = iM[1], MM[3] = iM[2], MM[4] = rM.VV, MM[5] = OM[0], MM[6] = OM[1], MM[7] = OM[2], SM
+       } = XU, yU = 1 !== UU[0] || UU[1] !== zU[0] || UU[2] !== zU[1] || UU[3] !== zU[2] || UU[4] !== XU.O4 || UU[5] !== cU[0] || UU[6] !== cU[1] || UU[7] !== cU[2];
+       return UU[0] = 1, UU[1] = zU[0], UU[2] = zU[1], UU[3] = zU[2], UU[4] = XU.O4, UU[5] = cU[0], UU[6] = cU[1], UU[7] = cU[2], yU
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5550` → after: `L5732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5732) · [Before (L5550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5550)

```diff
-       lM().copy(iM.position, rM.PrM), lM().copy(iM.normal, rM.normal), lM().add(iM.zd, iM.position, iM.normal), lM().copy(iM.kN, rM.position), iM.VV = MM.uL.YB(iM.position[0], iM.position[1], iM.position[2])
+       kU().copy(zU.position, XU.jXU), kU().copy(zU.normal, XU.normal), kU().add(zU.yt, zU.position, zU.normal), kU().copy(zU.lV, XU.position), zU.O4 = UU.qY.VJ(zU.position[0], zU.position[1], zU.position[2])
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5554-L5572` → after: `L5736-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5736-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5736-L5754) · [Before (L5554-L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5554-L5572)

```diff
-       Qa = iM(3185),
-       za = iM(39771),
-       La = iM(37257),
-       ma = iM(37244),
-       Ha = iM(3188),
-       ha = iM(3205),
-       Ja = iM(37238),
-       da = iM(37233),
-       ya = iM(4096),
-       la = iM(5069),
-       Ea = iM(37215),
-       Ua = iM(4088),
-       Ga = iM(3248),
-       Ca = iM(3258),
-       ea = iM(34877),
-       ba = iM(665),
- ... (3 more removed lines; see GitHub link above)
+       oA = zU(3169),
+       DA = zU(39545),
+       EA = zU(37014),
+       YA = zU(37005),
+       NA = zU(3176),
+       IA = zU(3189),
+       pA = zU(36993),
+       aA = zU(36989),
+       tA = zU(4094),
+       gA = zU(5179),
+       kA = zU(36969),
+       GA = zU(4091),
+       BA = zU(3239),
+       ZA = zU(1835),
+       RA = zU(34708),
+       PA = zU(691),
+ ... (3 more added lines; see GitHub link above)
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5579` → after: `L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5761) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5579)

```diff
-           } = await Promise.all([iM.e(613), iM.e(297)]).then((() => iM(44309)));
+           } = await Promise.all([zU.e(610), zU.e(295)]).then((() => zU(44323)));
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5591-L5592` → after: `L5773-L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5773-L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5773-L5774) · [Before (L5591-L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5591-L5592)

```diff
-                 yE: rM,
-                 MJ: MM,
+                 Hk: XU,
+                 Ua: UU,
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5602` → after: `L5784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5784) · [Before (L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5602)

```diff
-                   (0, ta.A)(MM.gpuDevice);
+                   (0, dA.s)(UU.gpuDevice);
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5636-L5637` → after: `L5818-L5819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5818-L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5818-L5819) · [Before (L5636-L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5636-L5637)

```diff
-           aM = null !== (SM = null !== OM && void 0 !== OM ? OM : null === iM || void 0 === iM ? void 0 : iM.message) && void 0 !== SM ? SM : String(iM);
-         (0, ga.b)("Lite pipeline failed", new Error(`${MM}${jM?` ${jM}`:""}: ${aM} [${rM}]`))
+           AU = null !== (yU = null !== cU && void 0 !== cU ? cU : null === zU || void 0 === zU ? void 0 : zU.message) && void 0 !== yU ? yU : String(zU);
+         (0, LA.b)("Lite pipeline failed", new Error(`${UU}${QU?` ${QU}`:""}: ${AU} [${XU}]`))
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5641-L5655` → after: `L5823-L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5823-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5823-L5837) · [Before (L5641-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5641-L5655)

```diff
-     var sa = iM(327),
-       Da = iM(39794),
-       ka = iM(19),
-       Za = iM(3147),
-       oa = iM(39814),
-       fa = iM(310),
-       Ya = iM(119),
-       Na = iM(4670),
-       Aa = iM(1818),
-       xa = iM(4773),
-       va = iM(4768),
-       Fa = iM(3057),
-       Ba = iM(3227),
-       Xa = iM(37422),
-       Ia = iM(3070);
+     var OA = zU(337),
+       SA = zU(39566),
+       rA = zU(27),
+       uA = zU(3123),
+       fA = zU(39586),
+       iA = zU(318),
+       HA = zU(142),
+       MA = zU(4709),
+       vA = zU(1769),
+       VA = zU(4818),
+       sA = zU(4816),
+       nA = zU(3036),
+       mA = zU(3198),
+       lA = zU(37186),
+       xA = zU(3051);
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5666` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5848) · [Before (L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5666)

```diff
-               } = (0, ba.m)(), aM = null === (MM = (0, IM.f)()) || void 0 === MM ? void 0 : MM.CL, PM = null === aM || void 0 === aM ? void 0 : aM.engine, nM = PM ? (0, Ba.f)(PM) : null, QM = (0, fa.e)();
+               } = (0, PA.t)(), AU = null === (UU = (0, JU.e)()) || void 0 === UU ? void 0 : UU.WY, FU = null === AU || void 0 === AU ? void 0 : AU.engine, oU = FU ? (0, mA.g)(FU) : null, DU = (0, iA.e)();
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5671-L5676` → after: `L5853-L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5853-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5853-L5858) · [Before (L5671-L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5671-L5676)

```diff
-                 budgetBasis: (0, Xa.f)(),
-                 renderBackend: aM && PM ? (0, Ia.b)(aM) : null,
-                 antiAliasing: (0, Ba.d)(Fa.b.getRendererMsaa(), !1),
-                 pixelScale: (0, Ba.n)(),
-                 canvasSizeLargest: null !== (rM = null === nM || void 0 === nM ? void 0 : nM.largest) && void 0 !== rM ? rM : null,
-                 canvasSizeSmallest: null !== (iM = null === nM || void 0 === nM ? void 0 : nM.smallest) && void 0 !== iM ? iM : null,
+                 budgetBasis: (0, lA.h)(),
+                 renderBackend: AU && FU ? (0, xA.c)(AU) : null,
+                 antiAliasing: (0, mA.e)(nA.d.getRendererMsaa(), !1),
+                 pixelScale: (0, mA.o)(),
+                 canvasSizeLargest: null !== (XU = null === oU || void 0 === oU ? void 0 : oU.largest) && void 0 !== XU ? XU : null,
+                 canvasSizeSmallest: null !== (zU = null === oU || void 0 === oU ? void 0 : oU.smallest) && void 0 !== zU ? zU : null,
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5688` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5870) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5688)

```diff
-       (0, xa.b)(MM, rM, iM, (0, va.b)(OM), SM)
+       (0, VA.c)(UU, XU, zU, (0, sA.d)(cU), yU)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5694-L5695` → after: `L5876-L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5876-L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5876-L5877) · [Before (L5694-L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5694-L5695)

```diff
-       const rM = yr.k.getItem(Ta);
-       return !("number" === typeof rM && Date.now() - rM < 3e5) && MM.canRejoin() && yr.k.setItem(Ta, Date.now())
+       const XU = gX.n.getItem(KA);
+       return !("number" === typeof XU && Date.now() - XU < 3e5) && UU.canRejoin() && gX.n.setItem(KA, Date.now())
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5698` → after: `L5880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5880) · [Before (L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5698)

```diff
-       aL(MM, rM) {
+       oY(UU, XU) {
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5715` → after: `L5897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5897) · [Before (L5715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5715)

```diff
-         return !(0, Ya.isDiscordClient)() && null !== (null !== (MM = null === (rM = (0, IM.b)().client.getConnectionInfo()) || void 0 === rM ? void 0 : rM.lobbyName) && void 0 !== MM ? MM : null)
+         return !(0, HA.isDiscordClient)() && null !== (null !== (UU = null === (XU = (0, JU.b)().client.getConnectionInfo()) || void 0 === XU ? void 0 : XU.lobbyName) && void 0 !== UU ? UU : null)
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5729` → after: `L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5911) · [Before (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5729)

```diff
-         (0, Za.e)(qa)
+         (0, uA.b)(jA)
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5739` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5921) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5739)

```diff
-         return (0, Aa.o)(MM)
+         return (0, vA.q)(UU)
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5762` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5944) · [Before (L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5762)

```diff
-         this.actions.aL(`webgl_restored_${rM}_${(0,oa.l)(MM-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${rM})`), this.lostAt = null, this.restoredAt = MM, this.clearTimers()
+         this.actions.oY(`webgl_restored_${XU}_${(0,fA.m)(UU-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${XU})`), this.lostAt = null, this.restoredAt = UU, this.clearTimers()
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5773-L5774` → after: `L5955-L5956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5955-L5956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5955-L5956) · [Before (L5773-L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5773-L5774)

```diff
-         } = (0, oa.w)("webgl_lost", this.startedAt, MM), SM = `webgl${this.webGlVersion} ${iM} up${(0,oa.e)(MM-this.startedAt)}: ${rM}`;
-         (0, ga.b)(oa.b.WebGL2, new Error(SM)), this.actions.reportLoss(OM, `WebGL${this.webGlVersion} context lost: ${SM}`)
+         } = (0, fA.v)("webgl_lost", this.startedAt, UU), yU = `webgl${this.webGlVersion} ${zU} up${(0,fA.h)(UU-this.startedAt)}: ${XU}`;
+         (0, LA.b)(fA.e.WebGL2, new Error(yU)), this.actions.reportLoss(cU, `WebGL${this.webGlVersion} context lost: ${yU}`)
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5804` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5986) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5804)

```diff
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.aL(`webgl_waiting_${rM}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(MM);
+         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.oY(`webgl_waiting_${XU}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(UU);
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5806-L5808` → after: `L5988-L5990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5988-L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5988-L5990) · [Before (L5806-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5806-L5808)

```diff
-         const iM = (0, oa.l)(performance.now() - MM);
-         if (Va(this.actions)) return this.actions.aL(`webgl_rejoin_${rM}_${iM}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.aL(`webgl_end_${rM}_${iM}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+         const zU = (0, fA.m)(performance.now() - UU);
+         if (bA(this.actions)) return this.actions.oY(`webgl_rejoin_${XU}_${zU}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
+         this.actions.oY(`webgl_end_${XU}_${zU}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5816-L5818` → after: `L5998-L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5998-L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L5998-L6000) · [Before (L5816-L5818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5816-L5818)

```diff
-     var iP = iM(1899),
-       OP = iM(3122),
-       SP = iM(4903);
+     var XF = zU(1877),
+       zF = zU(3099),
+       cF = zU(4953);
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5830` → after: `L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6012) · [Before (L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5830)

```diff
-       } = MM.MJ;
+       } = UU.Ua;
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5832-L5833` → after: `L6014-L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6014-L6015) · [Before (L5832-L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5832-L5833)

```diff
-         (0, ta.i)(iM) || ((0, OP.p)("webgpuloss") && (0, SP.d)((MM => {
-           MM.noteWebGpuLoss("js", !0 === OM.framesRefused ? `${OM.reason} frames refused` : OM.reason, OM.message)
+         (0, dA.f)(zU) || ((0, zF.q)("webgpuloss") && (0, cF.b)((UU => {
+           UU.noteWebGpuLoss("js", !0 === cU.framesRefused ? `${cU.reason} frames refused` : cU.reason, cU.message)
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5838` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6020) · [Before (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5838)

```diff
-             aM = (0, oa.s)(!0 === iM.framesRefused, iM.message, "destroyed" === iM.reason),
+             AU = (0, fA.r)(!0 === zU.framesRefused, zU.message, "destroyed" === zU.reason),
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5843` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6025) · [Before (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5843)

```diff
-           ka.d.turnOffWebGpuAfterDeviceLoss(void 0, !1, (0, sa.h)(!0 === iM.framesRefused ? "frames_refused" : iM.reason, iM.message)), nM || (aP.gaveUp = !0);
+           rA.e.turnOffWebGpuAfterDeviceLoss(void 0, !1, (0, OA.n)(!0 === zU.framesRefused ? "frames_refused" : zU.reason, zU.message)), oU || (QF.gaveUp = !0);
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5851` → after: `L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6033) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5851)

```diff
-             } = (0, oa.w)(iM, OM, SM);
+             } = (0, fA.v)(zU, cU, yU);
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5853` → after: `L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6035) · [Before (L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5853)

```diff
-               detail: `${iM} ${jM} up${(0,oa.e)(SM-OM)} ${(0,oa.o)(MM.adapterInfo)}: ${rM}`,
+               detail: `${zU} ${QU} up${(0,fA.h)(yU-cU)} ${(0,fA.q)(UU.adapterInfo)}: ${XU}`,
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5857` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6039) · [Before (L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5857)

```diff
-           if ((0, ga.b)(oa.b.WebGPU, LM), Ka(LM, zM), nM) return aP.restores++, void
+           if ((0, LA.b)(fA.e.WebGPU, YU), JA(YU, EU), oU) return QF.restores++, void
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5860` → after: `L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6042) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5860)

```diff
-               "no_adapter" === (0, Da.d)(rM) ? (console.warn("Lite could not be built again: no WebGPU adapter"), MM.aL(`${OM}_restore_no_adapter`, "WebGPU device lost to the browser: no adapter to restore on", !0)) : rM instanceof iP.h ? (console.warn(rM.message), MM.aL(`${OM}_r … [truncated]
+               "no_adapter" === (0, SA.d)(XU) ? (console.warn("Lite could not be built again: no WebGPU adapter"), UU.oY(`${cU}_restore_no_adapter`, "WebGPU device lost to the browser: no adapter to restore on", !0)) : XU instanceof XF.g ? (console.warn(XU.message), UU.oY(`${cU}_r … [truncated]
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5863` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6045) · [Before (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5863)

```diff
-               (0, iP.n)(iM(), jP, "Lite was not built again in 15 s", (MM => {
+               (0, XF.l)(zU(), yF, "Lite was not built again in 15 s", (UU => {
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5879` → after: `L6061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6061) · [Before (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5879)

```diff
-                   MM.aL(`${OM}_restored_${(0,oa.l)(PM-SM)}_t${(0,oa.l)(rM-PM)}`, "WebGPU device lost to the browser: restored")
+                   UU.oY(`${cU}_restored_${(0,fA.m)(FU-yU)}_t${(0,fA.m)(XU-FU)}`, "WebGPU device lost to the browser: restored")
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5887` → after: `L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6069) · [Before (L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5887)

```diff
-           (0, Za.e)(qa)
+           (0, uA.b)(jA)
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5897` → after: `L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6079) · [Before (L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5897)

```diff
-         if (!SM && !MM.replaying()) return OM || MM.aL(`${rM}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
+         if (!yU && !UU.replaying()) return cU || UU.oY(`${XU}_waiting`, "WebGPU device lost to the browser: waiting for a game", !0), void setTimeout((() => {
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5900-L5902` → after: `L6082-L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6082-L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6082-L6084) · [Before (L5900-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5900-L5902)

```diff
-         const jM = (0, oa.l)(performance.now() - iM);
-         if (SM && Va(MM)) return MM.aL(`${rM}_rejoin_${jM}`, "WebGPU device lost to the browser: rejoining", !0), void MM.rejoin();
-         MM.aL(`${rM}_end_${jM}`, "WebGPU device lost to the browser: game ended", !0), MM.end()
+         const QU = (0, fA.m)(performance.now() - zU);
+         if (yU && bA(UU)) return UU.oY(`${XU}_rejoin_${QU}`, "WebGPU device lost to the browser: rejoining", !0), void UU.rejoin();
+         UU.oY(`${XU}_end_${QU}`, "WebGPU device lost to the browser: game ended", !0), UU.end()
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5937` → after: `L6119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6119) · [Before (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5937)

```diff
-       dM.i.Tz("unrecoverableError", LP)
+       tU.k.UY("unrecoverableError", EF)
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5939-L5940` → after: `L6121-L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6121-L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6121-L6122) · [Before (L5939-L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5939-L5940)

```diff
-     var JP = iM(39439),
-       dP = iM(37761);
+     var pF = zU(39221),
+       aF = zU(37532);
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5972-L5973` → after: `L6154-L6155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6154-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6154-L6155) · [Before (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5972-L5973)

```diff
-         PU: function(rM, iM) {
-           iM.speedMultiplier = new dP.h, iM.jumpMultiplier = new dP.h, iM.cameraDirection = lM().create(),
+         lG: function(XU, zU) {
+           zU.speedMultiplier = new aF.i, zU.jumpMultiplier = new aF.i, zU.cameraDirection = kU().create(),
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5977` → after: `L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6159) · [Before (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5977)

```diff
-                 iM.pose = rM, OM && lM().set(iM.meshOffset, OM[0], OM[1], OM[2]), SM && MM.bloxd.removeFromEyeHeightCache(iM.HZ)
+                 zU.pose = XU, cU && kU().set(zU.meshOffset, cU[0], cU[1], cU[2]), yU && UU.bloxd.removeFromEyeHeightCache(zU.iH)
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5980` → after: `L6162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6162) · [Before (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5980)

```diff
-                 lM().set(iM.meshOffset, rM, OM, SM), jM && MM.bloxd.removeFromEyeHeightCache(iM.HZ)
+                 kU().set(zU.meshOffset, XU, cU, yU), QU && UU.bloxd.removeFromEyeHeightCache(zU.iH)
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5982` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6164) · [Before (L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5982)

```diff
-                 iM.crouching !== rM && (iM.crouching = rM, MM.bloxd.removeFromEyeHeightCache(iM.HZ))
+                 zU.crouching !== XU && (zU.crouching = XU, UU.bloxd.removeFromEyeHeightCache(zU.iH))
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5984` → after: `L6166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6166) · [Before (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5984)

```diff
-                 rM === MM.eD && (iM.armSwinging = !0, iM._armSwungLastTick = !0, iM._renderTickSinceSwing = !1, iM._tickSinceSwing = !1)
+                 XU === UU.pM && (zU.armSwinging = !0, zU._armSwungLastTick = !0, zU._renderTickSinceSwing = !1, zU._tickSinceSwing = !1)
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5988` → after: `L6170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6170) · [Before (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5988)

```diff
-         vW: null,
+         Cw: null,
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5990` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6172) · [Before (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5990)

```diff
-           for (const OM of iM) OM.HZ === MM.eD && (!OM._armSwungLastTick && OM._tickSinceSwing && OM._renderTickSinceSwing && (OM.armSwinging = !1), OM._tickSinceSwing = !0, OM._armSwungLastTick = !1, OM.hitInPrevTick = !1)
+           for (const cU of zU) cU.iH === UU.pM && (!cU._armSwungLastTick && cU._tickSinceSwing && cU._renderTickSinceSwing && (cU.armSwinging = !1), cU._tickSinceSwing = !0, cU._armSwungLastTick = !1, cU.hitInPrevTick = !1)
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5992-L5993` → after: `L6174-L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6174-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6174-L6175) · [Before (L5992-L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5992-L5993)

```diff
-         dU: function(rM, iM) {
-           for (const OM of iM) OM.HZ === MM.eD && (OM._renderTickSinceSwing = !0)
+         JG: function(XU, zU) {
+           for (const cU of zU) cU.iH === UU.pM && (cU._renderTickSinceSwing = !0)
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5997-L5998` → after: `L6179-L6180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6179-L6180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6179-L6180) · [Before (L5997-L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L5997-L5998)

```diff
-     var lP = iM(39196),
-       EP = iM(38969);
+     var gF = zU(38966),
+       kF = zU(38739);
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6011-L6012` → after: `L6193-L6194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6193-L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6193-L6194) · [Before (L6011-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6011-L6012)

```diff
-         PU: function(rM, iM) {
-           if (iM.inventory || (iM.inventory = new EP.d(MM, iM, ZM.s)), !iM.opWrapper) {
+         lG: function(XU, zU) {
+           if (zU.inventory || (zU.inventory = new kF.d(UU, zU, fU.w)), !zU.opWrapper) {
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6021` → after: `L6203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6203) · [Before (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6021)

```diff
-         vW: null,
+         Cw: null,
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6035` → after: `L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6217) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6035)

```diff
-           li: !1,
+           uX: !1,
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6041-L6044` → after: `L6223-L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6223-L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6223-L6226) · [Before (L6041-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6041-L6044)

```diff
-     var CP = iM(3230),
-       eP = iM(39788),
-       bP = iM(114),
-       wP = iM(281);
+     var ZF = zU(3203),
+       RF = zU(39563),
+       PF = zU(134),
+       WF = zU(301);
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6160` → after: `L6342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6342) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6160)

```diff
-           return !0 === (null === MM || void 0 === MM ? void 0 : MM[Aj.q]) ? "terrain" : !0 === (null === MM || void 0 === MM ? void 0 : MM[tO.r]) ? "objectBlocks" : !0 === (null === MM || void 0 === MM ? void 0 : MM[tO.B]) ? "textPlanes" : -1 === rM ? "sky" : "other"
+           return !0 === (null === UU || void 0 === UU ? void 0 : UU[vQ.l]) ? "terrain" : !0 === (null === UU || void 0 === UU ? void 0 : UU[dc.s]) ? "objectBlocks" : !0 === (null === UU || void 0 === UU ? void 0 : UU[dc.F]) ? "textPlanes" : -1 === XU ? "sky" : "other"
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6162` → after: `L6344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6344) · [Before (L6162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6162)

```diff
-         "other" === mM && LM.krM && (mM = "entityParts");
+         "other" === NU && YU.RzU && (NU = "entityParts");
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6164` → after: `L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6346) · [Before (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6164)

```diff
-             return "terrain" === MM ? iM ? `${null===OM||void 0===OM?void 0:OM[Aj.i]}:${null===OM||void 0===OM?void 0:OM[Aj.m]}` : "(all)" : "textPlanes" === MM ? "(all)" : "objectBlocks" === MM || "entityParts" === MM ? rM : (SM = rM).split(/[|:#]/)[0].replace(/\d+$/, "") || SM;
+             return "terrain" === UU ? zU ? `${null===cU||void 0===cU?void 0:cU[vQ.g]}:${null===cU||void 0===cU?void 0:cU[vQ.h]}` : "(all)" : "textPlanes" === UU ? "(all)" : "objectBlocks" === UU || "entityParts" === UU ? XU : (yU = XU).split(/[|:#]/)[0].replace(/\d+$/, "") || yU;
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6167` → after: `L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6349) · [Before (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6167)

```diff
-           hM = `${mM}\0${HM}`;
+           pU = `${NU}\0${IU}`;
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6178` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6360) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6178)

```diff
-         const dM = null !== (SM = LM.y_) && void 0 !== SM ? SM : 0;
+         const tU = null !== (yU = YU.BUU) && void 0 !== yU ? yU : 0;
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6180-L6181` → after: `L6362-L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6362-L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6362-L6363) · [Before (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6180-L6181)

```diff
-           QM++, PM.add(`${null===zM||void 0===zM?void 0:zM[Aj.i]}:${null===zM||void 0===zM?void 0:zM[Aj.m]}`);
-           const MM = null === zM || void 0 === zM ? void 0 : zM[tO.t];
+           DU++, FU.add(`${null===EU||void 0===EU?void 0:EU[vQ.g]}:${null===EU||void 0===EU?void 0:EU[vQ.h]}`);
+           const UU = null === EU || void 0 === EU ? void 0 : EU[dc.w];
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6183` → after: `L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6365) · [Before (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6183)

```diff
-           if (MM) nM.set(MM, (null !== (yM = nM.get(MM)) && void 0 !== yM ? yM : 0) + 1)
+           if (UU) oU.set(UU, (null !== (gU = oU.get(UU)) && void 0 !== gU ? gU : 0) + 1)
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6200` → after: `L6382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6382) · [Before (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6200)

```diff
-       return (0, Ia.d)(MM.CL).backendName
+       return (0, xA.h)(UU.WY).backendName
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6227` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6409) · [Before (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6227)

```diff
-       return null !== (rM = null === (iM = MM.CL.MJ) || void 0 === iM ? void 0 : iM.n_) && void 0 !== rM ? rM : null
+       return null !== (XU = null === (zU = UU.WY.Ua) || void 0 === zU ? void 0 : zU.pUU) && void 0 !== XU ? XU : null
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6232` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6414) · [Before (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6232)

```diff
-       return null !== (rM = null === (iM = MM.CL.MJ) || void 0 === iM ? void 0 : iM.modelMeshes) && void 0 !== rM ? rM : null
+       return null !== (XU = null === (zU = UU.WY.Ua) || void 0 === zU ? void 0 : zU.modelMeshes) && void 0 !== XU ? XU : null
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6237` → after: `L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6419) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6237)

```diff
-       return MM.CL.Hk().getActiveMeshes().length + (null !== (rM = null === (iM = ZP(MM)) || void 0 === iM ? void 0 : iM.drawStats().selected) && void 0 !== rM ? rM : 0) + (null !== (OM = null === (SM = oP(MM)) || void 0 === SM ? void 0 : SM.selectedCount) && void 0 !== OM ? OM : … [truncated]
+       return UU.WY.nS().getActiveMeshes().length + (null !== (XU = null === (zU = uF(UU)) || void 0 === zU ? void 0 : zU.drawStats().selected) && void 0 !== XU ? XU : 0) + (null !== (cU = null === (yU = fF(UU)) || void 0 === yU ? void 0 : yU.selectedCount) && void 0 !== cU ? cU : … [truncated]
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6241-L6242` → after: `L6423-L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6423-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6423-L6424) · [Before (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6241-L6242)

```diff
-       const rM = MM.CL.Hk(),
-         iM = gP(MM.CL.engine),
+       const XU = UU.WY.nS(),
+         zU = LF(UU.WY.engine),
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6256` → after: `L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6438) · [Before (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6256)

```diff
-         return null !== (MM = (0, wa.r)(sP)) && void 0 !== MM && MM
+         return null !== (UU = (0, WA.m)(OF)) && void 0 !== UU && UU
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6258` → after: `L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6440) · [Before (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6258)

```diff
-       rM && !MM.CL.MJ && function(MM) {
+       XU && !UU.WY.Ua && function(UU) {
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6287` → after: `L6469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6469) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6287)

```diff
-       }(MM.CL.engine);
+       }(UU.WY.engine);
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6292` → after: `L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6474) · [Before (L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6292)

```diff
-         const SM = WP(MM.CL.Hk(), null !== (rM = OM.terrainByChunk) && void 0 !== rM && rM, ZP(MM), oP(MM));
+         const yU = qF(UU.WY.nS(), null !== (XU = cU.terrainByChunk) && void 0 !== XU && XU, uF(UU), fF(UU));
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6297-L6299` → after: `L6479-L6481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6479-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6479-L6481) · [Before (L6297-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6297-L6299)

```diff
-           } = rM, aM = null === iM.residual ? "not counted (?drawcalls=1)" : `${iM.residual>=0?"+":""}${iM.residual}`;
-           console.info(`${iM.backend} \xb7 ${rM.dispatched.total} dispatched \xb7 ${iM.activeMeshes} active meshes \xb7 residual ${aM}`), console.table(rM.rows.slice(0, OM));
-           const PM = MM.RJ.SMM.length,
+           } = XU, AU = null === zU.residual ? "not counted (?drawcalls=1)" : `${zU.residual>=0?"+":""}${zU.residual}`;
+           console.info(`${zU.backend} \xb7 ${XU.dispatched.total} dispatched \xb7 ${zU.activeMeshes} active meshes \xb7 residual ${AU}`), console.table(XU.rows.slice(0, cU));
+           const FU = UU.Sa.mUU.length,
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6301-L6302` → after: `L6483-L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6483-L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6483-L6484) · [Before (L6301-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6301-L6302)

```diff
-           console.info([`terrain      ${SM.meshes} meshes \xb7 ${SM.chunkColumns} chunk columns \xb7 ${SM.octreeBlocks} octree blocks \xb7 max ${SM.maxMeshesPerOctreeBlock}/block \xb7 ${nM} meshes/block`, `objectBlocks ${jM.objectBlocks.draws} of ${PM} base meshes drawn \xb7 ${jM … [truncated]
-         }(MM, SM, YP(MM), null !== (iM = OM.limit) && void 0 !== iM ? iM : 20), SM
+           console.info([`terrain      ${yU.meshes} meshes \xb7 ${yU.chunkColumns} chunk columns \xb7 ${yU.octreeBlocks} octree blocks \xb7 max ${yU.maxMeshesPerOctreeBlock}/block \xb7 ${oU} meshes/block`, `objectBlocks ${QU.objectBlocks.draws} of ${FU} base meshes drawn \xb7 ${QU … [truncated]
+         }(UU, yU, HF(UU), null !== (zU = cU.limit) && void 0 !== zU ? zU : 20), yU
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6311` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6493) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6311)

```diff
-             QM = null !== (OM = null === (SM = gP(MM.CL.engine)) || void 0 === SM ? void 0 : SM.draws) && void 0 !== OM ? OM : 0;
+             DU = null !== (cU = null === (yU = LF(UU.WY.engine)) || void 0 === yU ? void 0 : yU.draws) && void 0 !== cU ? cU : 0;
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6313-L6314` → after: `L6495-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6495-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6495-L6496) · [Before (L6313-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6313-L6314)

```diff
-             nM++, jM.add(pP(MM.CL.Hk(), ZP(MM), oP(MM)).total), PM.add(fP(MM));
-             const rM = gP(MM.CL.engine);
+             oU++, QU.add(wF(UU.WY.nS(), uF(UU), fF(UU)).total), FU.add(iF(UU));
+             const XU = LF(UU.WY.engine);
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6326` → after: `L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6508) · [Before (L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6326)

```diff
-             0 === OM.frames && console.warn(`drawCalls.watch(${rM}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${rM}) over ${OM.frames} frames on ${OM.backend}`, OM), iM(OM)
+             0 === cU.frames && console.warn(`drawCalls.watch(${XU}) saw no frames - the tab was hidden or noa was paused. Nothing measured.`), console.info(`drawCalls.watch(${XU}) over ${cU.frames} frames on ${cU.backend}`, cU), zU(cU)
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6329` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6511) · [Before (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6329)

```diff
-       }, window.drawCalls = iM, IM.j.drawCallDebugEntries = () => function(MM) {
+       }, window.drawCalls = zU, JU.f.drawCallDebugEntries = () => function(UU) {
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6335` → after: `L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6517) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6335)

```diff
-         } = WP(MM.CL.Hk(), !1, ZP(MM), oP(MM)), {
+         } = qF(UU.WY.nS(), !1, uF(UU), fF(UU)), {
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6340` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6522) · [Before (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6340)

```diff
-         } = YP(MM), LM = null === (rM = MM.CL.MJ) || void 0 === rM || null === (iM = rM.terrain) || void 0 === iM ? void 0 : iM.drawStats(), mM = null === (OM = ZP(MM)) || void 0 === OM ? void 0 : OM.drawStats(), HM = Object.entries(SM.byGroup).map((MM => {
+         } = HF(UU), YU = null === (XU = UU.WY.Ua) || void 0 === XU || null === (zU = XU.terrain) || void 0 === zU ? void 0 : zU.drawStats(), NU = null === (cU = uF(UU)) || void 0 === cU ? void 0 : cU.drawStats(), IU = Object.entries(yU.byGroup).map((UU => {
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6342` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6524) · [Before (L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6342)

```diff
-           return `${rM}:${iM.total}`
+           return `${XU}:${zU.total}`
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6349` → after: `L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6531) · [Before (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6349)

```diff
-           value: `${SM.total}`
+           value: `${yU.total}`
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6352` → after: `L6534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6534) · [Before (L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6352)

```diff
-           value: `${SM.opaque} / ${SM.alphaTest} / ${SM.transparent}`
+           value: `${yU.opaque} / ${yU.alphaTest} / ${yU.transparent}`
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6358` → after: `L6540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6540) · [Before (L6358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6358)

```diff
-           value: `${LM.drawn} of ${LM.loaded} meshes (${PM})`
+           value: `${YU.drawn} of ${YU.loaded} meshes (${FU})`
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6361` → after: `L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6543) · [Before (L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6361)

```diff
-           value: `${jM.meshes} (${jM.chunkColumns} chunks, ${jM.octreeBlocks} blocks, max ${jM.maxMeshesPerOctreeBlock})`
+           value: `${QU.meshes} (${QU.chunkColumns} chunks, ${QU.octreeBlocks} blocks, max ${QU.maxMeshesPerOctreeBlock})`
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6364` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6546) · [Before (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6364)

```diff
-           value: `${aM.objectBlocks.draws} (${aM.objectBlocks.instances} inst)`
+           value: `${AU.objectBlocks.draws} (${AU.objectBlocks.instances} inst)`
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6367` → after: `L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6549) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6367)

```diff
-           value: `${aM.entityParts.draws} / ${aM.textPlanes.draws}`
+           value: `${AU.entityParts.draws} / ${AU.textPlanes.draws}`
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6370` → after: `L6552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6552) · [Before (L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6370)

```diff
-           value: `${mM.drawn} draws of ${mM.sQ} meshes (${PM})`
+           value: `${NU.drawn} draws of ${NU.uD} meshes (${FU})`
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6373` → after: `L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6555) · [Before (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6373)

```diff
-           value: `${aM.sky.draws} / ${aM.other.draws}`
+           value: `${AU.sky.draws} / ${AU.other.draws}`
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6376` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6558) · [Before (L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6376)

```diff
-           value: `${nM}`
+           value: `${oU}`
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6379` → after: `L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6561) · [Before (L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6379)

```diff
-           value: QM ? `${QM.lastFrameDraws} (${zM} residual)` : "- (?drawcalls=1)"
+           value: DU ? `${DU.lastFrameDraws} (${EU} residual)` : "- (?drawcalls=1)"
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6381-L6392` → after: `L6563-L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6563-L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6563-L6574) · [Before (L6381-L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6381-L6392)

```diff
-       }(MM), rM && console.info(`Draw call counting on via ?${sP}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
-     }
-     var AP = iM(38594),
-       xP = iM(39376),
-       vP = iM(38726),
-       FP = iM(39821),
-       BP = iM(39828),
-       XP = iM(38735),
-       IP = iM(39832),
-       KP = iM(39837),
-       qP = iM(38019);
-     var TP = iM(4129);
+       }(UU), XU && console.info(`Draw call counting on via ?${OF}=1; call drawCalls(), drawCalls.why() or drawCalls.watch(10).`)
+     }
+     var vF = zU(38370),
+       VF = zU(39166),
+       sF = zU(38494),
+       nF = zU(39588),
+       mF = zU(39596),
+       lF = zU(38500),
+       xF = zU(39604),
+       JF = zU(39613),
+       jF = zU(37808);
+     var KF = zU(4139);
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6394` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6576) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6394)

```diff
-     var cP = iM(39867);
+     var TF = zU(39632);
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L6397` → after: `L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L6579) · [Before (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L6397)

```diff
-       const rM = MM.CL.Hk();
+       const XU = UU.WY.nS();
```
